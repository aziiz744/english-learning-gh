import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Volume2, VolumeX, User, PhoneOff, Phone, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { triggerLoginModal } from "@/lib/modal-state";
import { useLocation } from "wouter";
import { supabase } from "@/lib/supabase";

interface Message { id: number; role: "user" | "assistant"; content: string; }
type CallState = "idle" | "teacher-speaking" | "listening" | "processing";

interface TeacherProfile {
  id: string; name: string; emoji: string; gender: "male" | "female";
  desc: string; systemExtra: string;
}

const TEACHERS: TeacherProfile[] = [
  { id: "adam",  name: "Mr. Adam",  emoji: "👨‍🏫", gender: "male",   desc: "دافئ وصبور",       systemExtra: "You are a male teacher named Mr. Adam. Be warm and encouraging." },
  { id: "sara",  name: "Ms. Sara",  emoji: "👩‍🏫", gender: "female", desc: "متحمسة ومبدعة",    systemExtra: "You are a female teacher named Ms. Sara. Be enthusiastic and creative." },
  { id: "james", name: "Mr. James", emoji: "🧑‍🏫", gender: "male",   desc: "محترف وأكاديمي",   systemExtra: "You are a male teacher named Mr. James. Be professional and academic." },
];

const BASE_SYSTEM = `You are an experienced English teacher for Arabic speakers.
- Short responses (2-4 sentences max)
- Gently correct mistakes by using correct form naturally
- Always end with a question
- Adapt to student's level
- Encourage English if they write Arabic`;

export default function TeacherPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [callState, setCallState] = useState<CallState>("idle");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [started, setStarted] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isPro, setIsPro] = useState<boolean | null>(null);
  const [userGender, setUserGender] = useState<"male" | "female">("male");
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherProfile>(TEACHERS[0]);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>("");

  const transcriptRef = useRef("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const msgIdRef = useRef(0);
  const isActiveRef = useRef(false);
  const listeningRetryRef = useRef(0);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selectedVoiceNameRef = useRef("");
  const selectedTeacherRef = useRef(TEACHERS[0]);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // Keep refs in sync
  useEffect(() => { selectedVoiceNameRef.current = selectedVoiceName; }, [selectedVoiceName]);
  useEffect(() => { selectedTeacherRef.current = selectedTeacher; }, [selectedTeacher]);

  // Load voices
  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith("en"));
      setVoices(v);
      voicesRef.current = v;
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }, []);

  // Pro check
  useEffect(() => {
    import("@/lib/supabase").then(({ supabase }) => {
      supabase.auth.getUser().then(async ({ data: { user: u } }) => {
        if (!u) { setIsPro(false); return; }
        const { data } = await supabase.from("user_stats").select("is_pro, gender").eq("user_id", u.id).single();
        setIsPro(data?.is_pro ?? false);
        if (data?.gender) setUserGender(data.gender);
      });
    });
  }, [user]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  // Auto-save chat
  useEffect(() => {
    if (!user || !started || messages.length === 0) return;
    const t = setTimeout(async () => {
      await supabase.from("chat_history").upsert({
        user_id: user.id,
        teacher_id: selectedTeacher.id,
        messages: messages.slice(-20),
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id,teacher_id" });
    }, 2000);
    return () => clearTimeout(t);
  }, [messages, user, started, selectedTeacher.id]);

  // Pick voice using ref (always fresh)
  const pickVoice = useCallback((): SpeechSynthesisVoice | null => {
    const allVoices = voicesRef.current.length ? voicesRef.current : window.speechSynthesis.getVoices().filter(v => v.lang.startsWith("en"));
    if (!allVoices.length) return null;

    // Manual selection wins
    if (selectedVoiceNameRef.current) {
      const manual = allVoices.find(v => v.name === selectedVoiceNameRef.current);
      if (manual) return manual;
    }

    const teacher = selectedTeacherRef.current;
    if (teacher.gender === "female") {
      const femaleKws = ["Samantha","Victoria","Allison","Ava","Zoe","Karen","Moira","Tessa","Fiona","Vicki","Susan"];
      for (const kw of femaleKws) {
        const v = allVoices.find(v => v.name.includes(kw));
        if (v) return v;
      }
      // Any non-male voice
      const maleKws = ["Daniel","Alex","Fred","Bruce","Junior","Ralph","Tom","Lee","David","Mark","James","Bob","Google UK English Male","Google US English Male"];
      return allVoices.find(v => !maleKws.some(m => v.name.includes(m))) || allVoices[0];
    } else {
      const maleKws = ["Daniel","Alex","Fred","Bruce","Junior","Ralph","Tom","Lee","David","Mark","James","Bob"];
      for (const kw of maleKws) {
        const v = allVoices.find(v => v.name.includes(kw));
        if (v) return v;
      }
      return allVoices[0];
    }
  }, []);

  const keepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopListening = useCallback(() => {
    if (keepAliveRef.current) { clearInterval(keepAliveRef.current); keepAliveRef.current = null; }
    if (silenceTimerRef.current) { clearTimeout(silenceTimerRef.current); silenceTimerRef.current = null; }
    recognitionRef.current?.abort();
    recognitionRef.current = null;
  }, []);

  const startListening = useCallback(() => {
    if (!isActiveRef.current) return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    stopListening();

    const createRecognition = () => {
      const recognition = new SR();
      recognition.lang = "en-US";
      recognition.continuous = false; // false = more stable across browsers
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setCallState("listening");

      recognition.onresult = (e: SpeechRecognitionEvent) => {
        let interim = "", final = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) final += e.results[i][0].transcript + " ";
          else interim += e.results[i][0].transcript;
        }
        if (final) transcriptRef.current += final;
        setTranscript((transcriptRef.current + interim).trim());

        // Reset silence timer
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        if (transcriptRef.current.trim()) {
          silenceTimerRef.current = setTimeout(() => {
            const t = transcriptRef.current.trim();
            if (t && isActiveRef.current) {
              transcriptRef.current = "";
              setTranscript("");
              stopListening();
              sendMessageInner(t);
            }
          }, 2000);
        }
      };

      recognition.onend = () => {
        if (!isActiveRef.current) return;
        // If we have pending text, wait for silence timer
        if (transcriptRef.current.trim()) return;
        // Otherwise restart immediately to keep mic open
        setTimeout(() => {
          if (isActiveRef.current && !transcriptRef.current.trim()) {
            try {
              const r = createRecognition();
              recognitionRef.current = r;
              r.start();
            } catch {}
          }
        }, 100);
      };

      recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
        if (!isActiveRef.current) return;
        if (e.error === "aborted" || e.error === "not-allowed") return;
        // Restart on any other error
        setTimeout(() => {
          if (isActiveRef.current) {
            try {
              const r = createRecognition();
              recognitionRef.current = r;
              r.start();
            } catch {}
          }
        }, 300);
      };

      return recognition;
    };

    const r = createRecognition();
    recognitionRef.current = r;
    try { r.start(); } catch {}
  }, [stopListening]);

  const speakText = useCallback((text: string, thenListen = true) => {
    stopListening();
    window.speechSynthesis.cancel();
    setCallState("teacher-speaking");

    if (!voiceEnabled) {
      if (thenListen && isActiveRef.current) { listeningRetryRef.current = 0; setTimeout(() => startListening(), 300); }
      else setCallState("idle");
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    const teacher = selectedTeacherRef.current;
    utter.pitch = teacher.gender === "female" ? 1.4 : 0.85;
    utter.rate  = teacher.gender === "female" ? 0.92 : 0.85;

    const voice = pickVoice();
    if (voice) utter.voice = voice;

    utter.onend = () => {
      if (!isActiveRef.current) { setCallState("idle"); return; }
      if (thenListen) setTimeout(() => startListening(), 400);
      else setCallState("idle");
    };
    utter.onerror = () => {
      if (isActiveRef.current && thenListen) startListening();
      else setCallState("idle");
    };
    window.speechSynthesis.speak(utter);
  }, [voiceEnabled, pickVoice, startListening, stopListening]);

  const sendMessageInner = useCallback(async (text: string) => {
    if (!text.trim() || !isActiveRef.current) return;
    setCallState("processing");

    const userMsg: Message = { id: ++msgIdRef.current, role: "user", content: text };
    setMessages(prev => {
      const newMsgs = [...prev, userMsg];
      (async () => {
        try {
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system: `${BASE_SYSTEM}\n\n${selectedTeacherRef.current.systemExtra}`,
              messages: newMsgs.map(m => ({ role: m.role, content: m.content })),
            }),
          });
          const data = await res.json();
          const reply = data.reply;
          if (reply && isActiveRef.current) {
            const aMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply };
            setMessages(p => [...p, aMsg]);
            speakText(reply, true);
          } else if (isActiveRef.current) {
            listeningRetryRef.current = 0; startListening();
          }
        } catch {
          if (!isActiveRef.current) return;
          const eMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: "Sorry, connection issue. Please say that again!" };
          setMessages(p => [...p, eMsg]);
          speakText(eMsg.content, true);
        }
      })();
      return newMsgs;
    });
  }, [speakText, startListening]);

  const startCall = async () => {
    if (!user) { triggerLoginModal(); return; }
    isActiveRef.current = true;
    listeningRetryRef.current = 0;
    setStarted(true);
    setMessages([]);
    setCallState("processing");

    const teacher = selectedTeacher;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `${BASE_SYSTEM}\n\n${teacher.systemExtra}`,
          messages: [{ role: "user", content: "Greet me warmly as a new student. Keep it to 1-2 sentences and ask my name." }],
        }),
      });
      const data = await res.json();
      const reply = data.reply || `Hello! I'm ${teacher.name}. What's your name?`;
      const msg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply };
      setMessages([msg]);
      speakText(reply, true);
    } catch {
      const msg: Message = { id: ++msgIdRef.current, role: "assistant", content: `Hello! I'm ${teacher.name}. What's your name?` };
      setMessages([msg]);
      speakText(msg.content, true);
    }
  };

  const endCall = () => {
    isActiveRef.current = false;
    stopListening();
    window.speechSynthesis?.cancel();
    setCallState("idle"); setStarted(false); setMessages([]);
    setTranscript(""); transcriptRef.current = "";
    setLocation("/");
  };

  const userAvatar = userGender === "female" ? "👩‍🎓" : "👨‍🎓";

  const stateLabel: Record<CallState, string> = {
    "idle": "في انتظارك...",
    "teacher-speaking": `🔊 ${selectedTeacher.name} يتحدث...`,
    "listening": "🎙️ يستمع إليك...",
    "processing": "⏳ يفكر...",
  };

  if (isPro === null) return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!isPro) return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-5">
      <div className="w-20 h-20 rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center">
        <Lock className="w-9 h-9 text-yellow-400" />
      </div>
      <h1 className="text-xl font-bold">ميزة حصرية لأعضاء Pro</h1>
      <p className="text-muted-foreground text-sm max-w-xs">التحدث مع المعلم متاح فقط لأعضاء Pro</p>
      <Button onClick={() => setLocation("/pro")} className="px-8 py-5 font-bold rounded-2xl">🌟 اشترك في Pro</Button>
      <button onClick={() => setLocation("/")} className="text-sm text-muted-foreground hover:text-foreground">العودة للرئيسية</button>
    </div>
  );

  // ── Pre-call screen ──
  if (!started) return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-5">
      <h1 className="text-xl font-bold">اختر معلمك</h1>

      {/* Teacher cards */}
      <div className="flex gap-3 flex-wrap justify-center">
        {TEACHERS.map(t => (
          <button key={t.id} onClick={() => setSelectedTeacher(t)}
            className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border-2 transition-all w-28
              ${selectedTeacher.id === t.id ? "border-primary bg-primary/10" : "border-border bg-muted/30 hover:border-primary/40"}`}>
            <span className="text-3xl">{t.emoji}</span>
            <span className="text-sm font-bold">{t.name}</span>
            <span className="text-xs text-muted-foreground">{t.desc}</span>
          </button>
        ))}
      </div>

      {/* Voice picker */}
      {voices.length > 0 && (
        <div className="w-full max-w-xs space-y-1">
          <p className="text-xs text-muted-foreground">صوت المعلم</p>
          <select value={selectedVoiceName} onChange={e => setSelectedVoiceName(e.target.value)}
            className="w-full bg-muted border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
            <option value="">🤖 تلقائي حسب جنس المعلم</option>
            {voices.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
          </select>
        </div>
      )}

      <div className="flex gap-3 text-xs text-muted-foreground">
        <span className="bg-muted px-3 py-1.5 rounded-full">🎙️ مايك تلقائي</span>
        <span className="bg-muted px-3 py-1.5 rounded-full">🔊 يرد بصوت</span>
        <span className="bg-muted px-3 py-1.5 rounded-full">✍️ يصحح بلطف</span>
      </div>

      <Button onClick={startCall} size="lg" className="px-10 py-6 text-lg font-bold rounded-2xl gap-2">
        <Phone className="w-5 h-5" /> ابدأ مع {selectedTeacher.name}
      </Button>
      <p className="text-xs text-muted-foreground">يعمل بشكل أفضل على Chrome</p>
    </div>
  );

  // ── Active call screen ──
  return (
    <div className="flex flex-col h-[calc(100svh-130px)] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl
            ${callState === "teacher-speaking" ? "ring-2 ring-green-400 ring-offset-2 ring-offset-background" : "bg-primary/10"}`}>
            {selectedTeacher.emoji}
          </div>
          <div>
            <p className="font-bold text-sm">{selectedTeacher.name}</p>
            <p className={`text-xs min-h-4 ${callState === "listening" ? "text-red-400" : callState === "teacher-speaking" ? "text-green-400" : "text-muted-foreground"}`}>
              {stateLabel[callState]}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => { setVoiceEnabled(v => !v); window.speechSynthesis?.cancel(); }}
            className={voiceEnabled ? "text-primary" : "text-muted-foreground"}>
            {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>
          <Button variant="destructive" size="sm" onClick={endCall} className="gap-1 rounded-xl">
            <PhoneOff className="w-4 h-4" /> إنهاء
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-lg bg-muted">
                {msg.role === "assistant" ? selectedTeacher.emoji : userAvatar}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === "assistant" ? "bg-card border border-border rounded-tl-sm" : "bg-primary text-primary-foreground rounded-tr-sm"}`}
                dir="ltr">{msg.content}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {callState === "processing" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-lg">{selectedTeacher.emoji}</div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">{[0,150,300].map(d => <span key={d} className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:`${d}ms`}} />)}</div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Mic status */}
      <div className="shrink-0 px-4 pb-4 border-t border-border pt-3">
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all
            ${callState === "listening" ? "bg-red-500/20 border-2 border-red-500 animate-pulse"
              : callState === "teacher-speaking" ? "bg-green-500/10 border-2 border-green-500/40"
              : "bg-muted border-2 border-border"}`}>
            {callState === "listening" ? <Mic className="w-6 h-6 text-red-400" />
              : callState === "teacher-speaking" ? <Volume2 className="w-6 h-6 text-green-400" />
              : <MicOff className="w-6 h-6 text-muted-foreground" />}
          </div>
          <div className="flex-1 min-w-0">
            {transcript
              ? <p className="text-sm text-muted-foreground bg-muted/50 rounded-xl px-3 py-2 truncate" dir="ltr">{transcript}</p>
              : <p className="text-xs text-muted-foreground">
                  {callState === "listening" ? "🎙️ تحدث الآن — بعد ٢ ثوانٍ صمت يُرسل"
                    : callState === "teacher-speaking" ? "انتظر حتى ينتهي المعلم..."
                    : callState === "processing" ? "يعالج ردك..." : "في انتظارك..."}
                </p>
            }
          </div>
          {callState === "idle" && (
            <Button variant="outline" size="sm" onClick={() => { listeningRetryRef.current = 0; startListening(); }}
              className="shrink-0 rounded-xl text-xs gap-1">
              <Mic className="w-3 h-3" /> شغّل
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
