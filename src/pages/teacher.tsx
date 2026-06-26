import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Volume2, VolumeX, PhoneOff, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { triggerLoginModal } from "@/lib/modal-state";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";
interface Message { id: number; role: "user" | "assistant"; content: string; }
type CallState = "idle" | "teacher-speaking" | "listening" | "processing";

interface Teacher { id: string; name: string; emoji: string; gender: "male"|"female"; desc: string; system: string; }

const TEACHERS: Teacher[] = [
  { id:"adam",  name:"Mr. Adam",  emoji:"👨‍🏫", gender:"male",   desc:"دافئ وصبور",     system:"You are a male English teacher named Mr. Adam. Be warm and encouraging." },
  { id:"sara",  name:"Ms. Sara",  emoji:"👩‍🏫", gender:"female", desc:"متحمسة ومبدعة",  system:"You are a female English teacher named Ms. Sara. Be enthusiastic and creative." },
  { id:"james", name:"Mr. James", emoji:"🧑‍🏫", gender:"male",   desc:"محترف وأكاديمي", system:"You are a male English teacher named Mr. James. Be professional and academic." },
];

const BASE = `You teach English to Arabic speakers.
Rules: short replies (2-4 sentences), gently correct mistakes, end with a question, encourage English if they write Arabic.`;

async function getToken(): Promise<string> {
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token ?? "";
}

export default function TeacherPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [callState, setCallState] = useState<CallState>("idle");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [started, setStarted] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isPro, setIsPro] = useState<boolean|null>(null);
  const [userGender, setUserGender] = useState<"male"|"female">("male");
  const [teacher, setTeacher] = useState<Teacher>(TEACHERS[0]);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState("");
  const [history, setHistory] = useState<{teacher_id:string; messages:Message[]; updated_at:string}[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // All refs — no stale closures
  const isActive = useRef(false);
  const recRef = useRef<any>(null);
  const silenceTimer = useRef<ReturnType<typeof setTimeout>|null>(null);
  const pendingText = useRef("");
  const msgId = useRef(0);
  const messagesRef = useRef<Message[]>([]);
  const teacherRef = useRef(teacher);
  const voiceNameRef = useRef(voiceName);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const callStateRef = useRef<CallState>("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const watchdogRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const lastActivityRef = useRef<number>(Date.now());

  useEffect(() => { teacherRef.current = teacher; }, [teacher]);
  useEffect(() => { voiceNameRef.current = voiceName; }, [voiceName]);
  useEffect(() => { messagesRef.current = messages; }, [messages]);
  useEffect(() => { callStateRef.current = callState; }, [callState]);

  const setCS = (s: CallState) => { callStateRef.current = s; setCallState(s); };

  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith("en"));
      setVoices(v); voicesRef.current = v;
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }, []);

  useEffect(() => {
    if (!user) return;
    supabase.from("user_stats").select("is_pro,gender").eq("user_id", user.id).single()
      .then(({ data }) => {
        setIsPro(data?.is_pro ?? false);
        if (data?.gender) setUserGender(data.gender);
      });
    // Load saved chats
    supabase.from("chat_history").select("teacher_id,messages,updated_at")
      .eq("user_id", user.id).order("updated_at", { ascending: false })
      .then(({ data }) => { if (data) setHistory(data as any); });
  }, [user]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages]);

  useEffect(() => {
    if (!user || !started || messages.length === 0) return;
    const t = setTimeout(async () => {
      await supabase.from("chat_history").upsert({
        user_id: user.id, teacher_id: teacher.id,
        messages: messages.slice(-20), updated_at: new Date().toISOString(),
      }, { onConflict: "user_id,teacher_id" });
    }, 2000);
    return () => clearTimeout(t);
  }, [messages, user, started, teacher.id]);

  function pickVoice(t: Teacher): SpeechSynthesisVoice|null {
    const all = voicesRef.current.length ? voicesRef.current : window.speechSynthesis.getVoices().filter(v => v.lang.startsWith("en"));
    if (!all.length) return null;
    if (voiceNameRef.current) return all.find(v => v.name === voiceNameRef.current) ?? all[0];
    if (t.gender === "female") {
      const fw = ["Samantha","Victoria","Allison","Ava","Zoe","Karen","Moira","Tessa","Fiona"];
      for (const k of fw) { const v = all.find(v => v.name.includes(k)); if (v) return v; }
      const mw = ["Daniel","Alex","Fred","Bruce","Junior","Ralph","Tom","Lee","David","Mark","Bob"];
      return all.find(v => !mw.some(m => v.name.includes(m))) ?? all[0];
    } else {
      const mw = ["Daniel","Alex","Fred","Bruce","Junior","Ralph","Tom","Lee","David","Mark","Bob"];
      for (const k of mw) { const v = all.find(v => v.name.includes(k)); if (v) return v; }
      return all[0];
    }
  }

  // ── Core functions (plain functions, not useCallback — so they always use fresh refs) ──

  function stopMic() {
    if (watchdogRef.current) { clearInterval(watchdogRef.current); watchdogRef.current = null; }
    if (silenceTimer.current) { clearTimeout(silenceTimer.current); silenceTimer.current = null; }
    try { recRef.current?.stop(); } catch {}
    try { recRef.current?.abort(); } catch {}
    recRef.current = null;
  }

  function startMic() {
    if (!isActive.current) return;
    stopMic();
    setCS("listening");

    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    // Watchdog loop — restarts mic every 3s if no recognition is active
    watchdogRef.current = setInterval(() => {
      if (!isActive.current || callStateRef.current !== "listening") {
        clearInterval(watchdogRef.current!);
        watchdogRef.current = null;
        return;
      }
      // If recognition died, restart it
      if (!recRef.current) {
        launchRec(SR);
      }
    }, 3000);

    launchRec(SR);
  }

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  function launchRec(SR: any) {
    if (!isActive.current) return;
    try { recRef.current?.abort(); } catch {}
    recRef.current = null;

    const rec = new SR();
    rec.lang = "en-US";
    rec.continuous = !isMobile; // desktop=continuous, mobile=false (more stable)
    rec.interimResults = true;
    recRef.current = rec;

    rec.onresult = (e: any) => {
      let fin = "", int = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) fin += e.results[i][0].transcript + " ";
        else int += e.results[i][0].transcript;
      }
      if (fin) pendingText.current += fin;
      const display = (pendingText.current + int).trim();
      setTranscript(display);

      if (silenceTimer.current) clearTimeout(silenceTimer.current);
      if (pendingText.current.trim()) {
        silenceTimer.current = setTimeout(() => {
          const txt = pendingText.current.trim();
          if (txt && isActive.current) {
            pendingText.current = "";
            setTranscript("");
            stopMic();
            doSend(txt);
          }
        }, 2500);
      }
    };

    rec.onend = () => {
      recRef.current = null;
      // Watchdog will restart within 3s — but also restart immediately if no pending
      if (!isActive.current || callStateRef.current !== "listening") return;
      if (!pendingText.current.trim()) {
        setTimeout(() => {
          if (isActive.current && callStateRef.current === "listening" && !recRef.current) {
            launchRec(SR);
          }
        }, 200);
      }
    };

    rec.onerror = (e: any) => {
      recRef.current = null;
      if (!isActive.current || e.error === "aborted" || e.error === "not-allowed") return;
      setTimeout(() => {
        if (isActive.current && callStateRef.current === "listening" && !recRef.current) {
          launchRec(SR);
        }
      }, 300);
    };

    try { rec.start(); } catch {
      recRef.current = null;
      setTimeout(() => {
        if (isActive.current && callStateRef.current === "listening") launchRec(SR);
      }, 500);
    }
  }

  function speakReply(text: string) {
    stopMic();
    window.speechSynthesis.cancel();
    setCS("teacher-speaking");

    if (!voiceEnabled) {
      setTimeout(() => { if (isActive.current) startMic(); }, 300);
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    const t = teacherRef.current;
    utter.pitch = t.gender === "female" ? 1.4 : 0.85;
    utter.rate  = t.gender === "female" ? 0.92 : 0.85;
    const v = pickVoice(t);
    if (v) utter.voice = v;

    utter.onend  = () => { if (isActive.current) setTimeout(() => startMic(), 400); else setCS("idle"); };
    utter.onerror = () => { if (isActive.current) startMic(); else setCS("idle"); };
    window.speechSynthesis.speak(utter);
  }

  async function doSend(text: string) {
    if (!isActive.current) return;
    setCS("processing");
    const userMsg: Message = { id: ++msgId.current, role:"user", content:text };
    const newMsgs = [...messagesRef.current, userMsg];
    messagesRef.current = newMsgs;
    setMessages(newMsgs);

    try {
      const token = await getToken();
      const res = await fetch("/api/chat", {
        method:"POST",
        headers:{ "Content-Type":"application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({
          system: `${BASE}\n\n${teacherRef.current.system}`,
          messages: newMsgs.map(m => ({ role:m.role, content:m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.reply;
      if (reply && isActive.current) {
        const aMsg: Message = { id: ++msgId.current, role:"assistant", content:reply };
        const updated = [...messagesRef.current, aMsg];
        messagesRef.current = updated;
        setMessages(updated);
        speakReply(reply);
      } else if (isActive.current) {
        startMic();
      }
    } catch {
      if (!isActive.current) return;
      const eMsg: Message = { id: ++msgId.current, role:"assistant", content:"Sorry, connection issue. Please say that again!" };
      const updated = [...messagesRef.current, eMsg];
      messagesRef.current = updated;
      setMessages(updated);
      speakReply(eMsg.content);
    }
  }

  async function startCall() {
    if (!user) { triggerLoginModal(); return; }
    isActive.current = true;
    pendingText.current = "";
    messagesRef.current = [];
    setMessages([]);
    setStarted(true);
    setCS("processing");

    const t = teacherRef.current;
    try {
      const token = await getToken();
      const res = await fetch("/api/chat", {
        method:"POST",
        headers:{ "Content-Type":"application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({
          system: `${BASE}\n\n${t.system}`,
          messages:[{ role:"user", content:"Greet me warmly as a new student. Keep it to 1-2 sentences and ask my name." }],
        }),
      });
      const data = await res.json();
      const reply = data.reply || `Hello! I'm ${t.name}. What's your name?`;
      const msg: Message = { id: ++msgId.current, role:"assistant", content:reply };
      messagesRef.current = [msg];
      setMessages([msg]);
      speakReply(reply);
    } catch {
      const msg: Message = { id: ++msgId.current, role:"assistant", content:`Hello! I'm ${t.name}. What's your name?` };
      messagesRef.current = [msg];
      setMessages([msg]);
      speakReply(msg.content);
    }
  }

  function endCall() {
    isActive.current = false;
    stopMic();
    window.speechSynthesis?.cancel();
    setCS("idle");
    setStarted(false);
    setMessages([]);
    setTranscript("");
    pendingText.current = "";
    messagesRef.current = [];
    setLocation("/");
  }

  const userAvatar = userGender === "female" ? "👩‍🎓" : "👨‍🎓";

  // ── Auth gate ──
  if (!user) return (
    <><div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-5">
      <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-4xl">👨‍🏫</div>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">سجّل دخولك أولاً</h1>
        <p className="text-muted-foreground text-sm max-w-xs">تحتاج لتسجيل الدخول للتحدث مع المعلم</p>
      </div>
      <Button onClick={() => { import("@/lib/modal-state").then(m => m.triggerLoginModal()); }}
        className="px-8 py-5 font-bold rounded-2xl gap-2">
        <span>🔑</span> تسجيل الدخول
      </Button>
    </div></>
  );

  // ── Pro gate ──
  if (isPro === null) return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!isPro) return (
    <><div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-5">
      <div className="w-20 h-20 rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center">
        <Lock className="w-9 h-9 text-yellow-400" />
      </div>
      <h1 className="text-xl font-bold">ميزة حصرية لأعضاء Pro</h1>
      <p className="text-muted-foreground text-sm max-w-xs">التحدث مع المعلم متاح فقط لأعضاء Pro</p>
      <Button onClick={() => setLocation("/pro")} className="px-8 py-5 font-bold rounded-2xl">🌟 اشترك في Pro</Button>
    </div></>
  );

  // ── Pre-call ──
  if (!started) return (
    <><div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-5">
      <h1 className="text-xl font-bold">اختر معلمك</h1>

      <div className="flex gap-3 flex-wrap justify-center">
        {TEACHERS.map(t => (
          <button key={t.id} onClick={() => setTeacher(t)}
            className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border-2 transition-all w-28
              ${teacher.id === t.id ? "border-primary bg-primary/10" : "border-border bg-muted/30 hover:border-primary/40"}`}>
            <span className="text-3xl">{t.emoji}</span>
            <span className="text-sm font-bold">{t.name}</span>
            <span className="text-xs text-muted-foreground">{t.desc}</span>
          </button>
        ))}
      </div>

      {voices.length > 0 && (
        <div className="w-full max-w-xs space-y-1">
          <p className="text-xs text-muted-foreground">صوت المعلم (اختياري)</p>
          <select value={voiceName} onChange={e => setVoiceName(e.target.value)}
            className="w-full bg-muted border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
            <option value="">🤖 تلقائي حسب جنس المعلم</option>
            {voices.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
          </select>
        </div>
      )}

      <div className="flex gap-2 text-xs text-muted-foreground flex-wrap justify-center">
        <span className="bg-muted px-3 py-1.5 rounded-full">🎙️ مايك تلقائي</span>
        <span className="bg-muted px-3 py-1.5 rounded-full">🔊 يرد بصوت</span>
        <span className="bg-muted px-3 py-1.5 rounded-full">✍️ يصحح بلطف</span>
      </div>

      <Button onClick={startCall} size="lg" className="px-10 py-6 text-lg font-bold rounded-2xl gap-2">
        <Phone className="w-5 h-5" /> ابدأ مع {teacher.name}
      </Button>
      {/* Saved chats */}
      {history.length > 0 && (
        <div className="w-full max-w-xs">
          <button onClick={() => setShowHistory(h => !h)}
            className="text-xs text-primary hover:underline w-full text-center mb-2">
            {showHistory ? "▲ إخفاء المحادثات المحفوظة" : `📂 محادثاتك المحفوظة (${history.length})`}
          </button>
          {showHistory && (
            <div className="space-y-2">
              {history.map((h, i) => {
                const t = TEACHERS.find(t => t.id === h.teacher_id);
                const date = new Date(h.updated_at).toLocaleDateString("ar");
                const lastMsg = (h.messages as Message[]).filter(m => m.role === "user").slice(-1)[0];
                return (
                  <button key={i}
                    onClick={() => {
                      const found = TEACHERS.find(t => t.id === h.teacher_id);
                      if (found) setTeacher(found);
                      // Start call with history
                      isActive.current = true;
                      pendingText.current = "";
                      const msgs = h.messages as Message[];
                      messagesRef.current = msgs;
                      setMessages(msgs);
                      setStarted(true);
                      setCS("idle");
                      setTimeout(() => startMic(), 500);
                    }}
                    className="w-full text-right bg-muted/50 border border-border rounded-xl px-3 py-2.5 hover:bg-muted transition-all space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span>{t?.emoji ?? "👨‍🏫"}</span>
                      <span className="text-xs font-medium">{t?.name ?? h.teacher_id}</span>
                      <span className="text-xs text-muted-foreground mr-auto">{date}</span>
                    </div>
                    {lastMsg && <p className="text-xs text-muted-foreground truncate" dir="ltr">{lastMsg.content}</p>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <p className="text-xs text-muted-foreground">يعمل بشكل أفضل على Chrome</p>
    </div></>
  );

  // ── Active call ──
  const stateLabel: Record<CallState,string> = {
    "idle": "في انتظارك...",
    "teacher-speaking": `🔊 ${teacher.name} يتحدث...`,
    "listening": "🎙️ يستمع إليك...",
    "processing": "⏳ يفكر...",
  };

  return (
    <><div className="flex flex-col h-[calc(100svh-130px)] max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl bg-primary/10
            ${callState === "teacher-speaking" ? "ring-2 ring-green-400 ring-offset-2 ring-offset-background" : ""}`}>
            {teacher.emoji}
          </div>
          <div>
            <p className="font-bold text-sm">{teacher.name}</p>
            <p className={`text-xs min-h-4 ${callState==="listening"?"text-red-400":callState==="teacher-speaking"?"text-green-400":"text-muted-foreground"}`}>
              {stateLabel[callState]}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => { setVoiceEnabled(v => !v); window.speechSynthesis?.cancel(); }}
            className={voiceEnabled?"text-primary":"text-muted-foreground"}>
            {voiceEnabled ? <Volume2 className="w-4 h-4"/> : <VolumeX className="w-4 h-4"/>}
          </Button>
          <Button variant="destructive" size="sm" onClick={endCall} className="gap-1 rounded-xl">
            <PhoneOff className="w-4 h-4"/> إنهاء
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div key={msg.id} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
              className={`flex gap-2 ${msg.role==="user"?"flex-row-reverse":"flex-row"}`}>
              <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-lg bg-muted">
                {msg.role==="assistant" ? teacher.emoji : userAvatar}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role==="assistant"?"bg-card border border-border rounded-tl-sm":"bg-primary text-primary-foreground rounded-tr-sm"}`}
                dir="ltr">{msg.content}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {callState==="processing" && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-lg">{teacher.emoji}</div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">{[0,150,300].map(d=><span key={d} className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:`${d}ms`}}/>)}</div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef}/>
      </div>

      <div className="shrink-0 px-4 pb-4 border-t border-border pt-3">
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all
            ${callState==="listening"?"bg-red-500/20 border-2 border-red-500 animate-pulse"
              :callState==="teacher-speaking"?"bg-green-500/10 border-2 border-green-500/40"
              :"bg-muted border-2 border-border"}`}>
            {callState==="listening"?<Mic className="w-6 h-6 text-red-400"/>
              :callState==="teacher-speaking"?<Volume2 className="w-6 h-6 text-green-400"/>
              :<MicOff className="w-6 h-6 text-muted-foreground"/>}
          </div>
          <div className="flex-1 min-w-0">
            {transcript
              ? <p className="text-sm bg-muted/50 rounded-xl px-3 py-2 truncate" dir="ltr">{transcript}</p>
              : <p className="text-xs text-muted-foreground">
                  {callState==="listening"?"🎙️ تحدث — بعد ٢ ثوانٍ صمت يُرسل تلقائياً"
                    :callState==="teacher-speaking"?"انتظر حتى ينتهي المعلم..."
                    :callState==="processing"?"يعالج ردك...":"في انتظارك..."}
                </p>
            }
          </div>
          {callState==="idle" && (
            <Button variant="outline" size="sm" onClick={() => startMic()} className="shrink-0 rounded-xl text-xs gap-1">
              <Mic className="w-3 h-3"/> شغّل
            </Button>
          )}
        </div>
      </div>
    </div></>
  );
}
