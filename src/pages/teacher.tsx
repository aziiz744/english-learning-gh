import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Volume2, VolumeX, User, PhoneOff, Phone, Lock, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { triggerLoginModal } from "@/lib/modal-state";
import { useLocation } from "wouter";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

type CallState = "idle" | "teacher-speaking" | "listening" | "processing";

interface TeacherProfile {
  id: string;
  name: string;
  emoji: string;
  gender: "male" | "female";
  voicePrefs: { name?: string; gender?: "male" | "female" };
  desc: string;
  systemExtra: string;
}

const TEACHERS: TeacherProfile[] = [
  {
    id: "adam",
    name: "Mr. Adam",
    emoji: "👨‍🏫",
    gender: "male",
    voicePrefs: { name: "Daniel", gender: "male" },
    desc: "معلم دافئ وصبور",
    systemExtra: "You are a male teacher named Mr. Adam. Keep your personality warm and encouraging.",
  },
  {
    id: "sara",
    name: "Ms. Sara",
    emoji: "👩‍🏫",
    gender: "female",
    voicePrefs: { name: "Samantha", gender: "female" },
    desc: "معلمة متحمسة ومبدعة",
    systemExtra: "You are a female teacher named Ms. Sara. Keep your personality enthusiastic and creative.",
  },
  {
    id: "james",
    name: "Mr. James",
    emoji: "🧑‍🏫",
    gender: "male",
    voicePrefs: { name: "Alex", gender: "male" },
    desc: "معلم محترف وأكاديمي",
    systemExtra: "You are a male teacher named Mr. James. Keep your personality professional and academic.",
  },
];

const BASE_SYSTEM = `You are an experienced English teacher specializing in teaching Arabic speakers.

Your style:
- Friendly, encouraging, short responses (2-4 sentences max)
- Gently correct grammar mistakes by naturally using the correct form in your reply
- Always end with a question to keep conversation going
- Adapt to the student's level
- If student writes Arabic, kindly encourage English but still help
- Be natural and human, not robotic`;

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
  const [showTeacherPicker, setShowTeacherPicker] = useState(false);
  const transcriptRef = useRef("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const msgIdRef = useRef(0);
  const isActiveRef = useRef(false);
  const listeningRetryRef = useRef(0);

  // Check pro + user gender
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

  // Pre-load voices
  useEffect(() => {
    window.speechSynthesis?.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getVoice = useCallback((teacher: TeacherProfile) => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    // Try to find preferred voice name first
    const byName = voices.find(v => v.name === teacher.voicePrefs.name && v.lang.startsWith("en"));
    if (byName) return byName;

    // Try by gender keywords
    const genderKeywords = teacher.voicePrefs.gender === "male"
      ? ["Daniel", "Alex", "Fred", "Bruce", "Junior", "Ralph"]
      : ["Samantha", "Victoria", "Allison", "Ava", "Susan", "Zoe", "Karen"];

    for (const kw of genderKeywords) {
      const found = voices.find(v => v.name.includes(kw) && v.lang.startsWith("en"));
      if (found) return found;
    }

    // Fallback
    return voices.find(v => v.lang.startsWith("en-US")) || voices.find(v => v.lang.startsWith("en")) || null;
  }, []);

  const startListening = useCallback(() => {
    if (!isActiveRef.current) return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    recognitionRef.current?.abort();

    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setCallState("listening");
      listeningRetryRef.current = 0;
    };

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      let interim = "", final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += e.results[i][0].transcript;
        else interim += e.results[i][0].transcript;
      }
      const t = final || interim;
      setTranscript(t);
      transcriptRef.current = t;
    };

    recognition.onend = () => {
      if (!isActiveRef.current) return;
      const t = transcriptRef.current.trim();
      transcriptRef.current = "";
      setTranscript("");
      if (t) {
        sendMessage(t);
      } else {
        // Auto restart — max 20 retries before showing idle
        listeningRetryRef.current += 1;
        if (listeningRetryRef.current < 20) {
          setTimeout(() => { if (isActiveRef.current) startListening(); }, 300);
        } else {
          setCallState("idle");
        }
      }
    };

    recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
      if (!isActiveRef.current) return;
      if (e.error === "aborted") return;
      if (e.error === "no-speech") {
        listeningRetryRef.current += 1;
        if (listeningRetryRef.current < 20) {
          setTimeout(() => { if (isActiveRef.current) startListening(); }, 300);
        } else {
          setCallState("idle");
        }
        return;
      }
      // Other errors — retry once
      setTimeout(() => { if (isActiveRef.current) startListening(); }, 1000);
    };

    recognitionRef.current = recognition;
    try { recognition.start(); } catch {}
  }, []);

  const speak = useCallback((text: string, teacher: TeacherProfile, thenListen = true) => {
    window.speechSynthesis.cancel();
    setCallState("teacher-speaking");

    if (!voiceEnabled) {
      if (thenListen && isActiveRef.current) {
        listeningRetryRef.current = 0;
        setTimeout(() => startListening(), 300);
      } else setCallState("idle");
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.88;
    utter.pitch = teacher.gender === "female" ? 1.2 : 0.95;

    // Retry getting voice (voices may not be loaded yet)
    const trySetVoice = () => {
      const voice = getVoice(teacher);
      if (voice) utter.voice = voice;
    };
    trySetVoice();
    setTimeout(trySetVoice, 100);

    utter.onend = () => {
      if (!isActiveRef.current) { setCallState("idle"); return; }
      if (thenListen) {
        listeningRetryRef.current = 0;
        setTimeout(() => startListening(), 400);
      } else setCallState("idle");
    };
    utter.onerror = () => {
      if (isActiveRef.current && thenListen) {
        listeningRetryRef.current = 0;
        startListening();
      } else setCallState("idle");
    };

    window.speechSynthesis.speak(utter);
  }, [voiceEnabled, getVoice, startListening]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || !isActiveRef.current) return;
    setCallState("processing");
    recognitionRef.current?.abort();

    const teacher = selectedTeacher;
    const userMsg: Message = { id: ++msgIdRef.current, role: "user", content: text };

    setMessages(prev => {
      const newMsgs = [...prev, userMsg];
      (async () => {
        try {
          const systemPrompt = `${BASE_SYSTEM}\n\n${teacher.systemExtra}`;
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system: systemPrompt,
              messages: newMsgs.map(m => ({ role: m.role, content: m.content })),
            }),
          });
          const data = await res.json();
          const reply = data.reply;
          if (reply && isActiveRef.current) {
            const assistantMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply };
            setMessages(p => [...p, assistantMsg]);
            speak(reply, teacher, true);
          } else if (isActiveRef.current) {
            listeningRetryRef.current = 0;
            startListening();
          }
        } catch {
          if (!isActiveRef.current) return;
          const errMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: "Sorry, connection issue. Please say that again!" };
          setMessages(p => [...p, errMsg]);
          speak(errMsg.content, teacher, true);
        }
      })();
      return newMsgs;
    });
  }, [selectedTeacher, speak, startListening]);

  const startCall = async () => {
    if (!user) { triggerLoginModal(); return; }
    isActiveRef.current = true;
    listeningRetryRef.current = 0;
    setStarted(true);
    setMessages([]);
    setCallState("processing");
    setShowTeacherPicker(false);

    const teacher = selectedTeacher;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `${BASE_SYSTEM}\n\n${teacher.systemExtra}`,
          messages: [{ role: "user", content: "Start the class. Greet me warmly and ask my name. Keep it very short (1-2 sentences)." }],
        }),
      });
      const data = await res.json();
      const reply = data.reply || `Hello! I'm ${teacher.name}, your English teacher. What's your name?`;
      const msg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply };
      setMessages([msg]);
      speak(reply, teacher, true);
    } catch {
      const msg: Message = { id: ++msgIdRef.current, role: "assistant", content: `Hello! I'm ${teacher.name}, your English teacher. What's your name?` };
      setMessages([msg]);
      speak(msg.content, teacher, true);
    }
  };

  const endCall = () => {
    isActiveRef.current = false;
    recognitionRef.current?.abort();
    window.speechSynthesis?.cancel();
    setCallState("idle");
    setStarted(false);
    setMessages([]);
    setTranscript("");
    transcriptRef.current = "";
    setLocation("/");
  };

  const userAvatar = userGender === "female" ? "👩‍🎓" : "👨‍🎓";

  const stateLabel: Record<CallState, string> = {
    "idle": "في انتظارك...",
    "teacher-speaking": `🔊 ${selectedTeacher.name} يتحدث...`,
    "listening": "🎙️ يستمع إليك...",
    "processing": "⏳ يفكر...",
  };

  if (isPro === null) {
    return <div className="flex items-center justify-center h-[60vh]"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  }

  if (isPro === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-5">
        <div className="w-20 h-20 rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center">
          <Lock className="w-9 h-9 text-yellow-400" />
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">ميزة حصرية لأعضاء Pro</h1>
          <p className="text-muted-foreground text-sm max-w-xs">التحدث مع المعلم متاح فقط لأعضاء Pro</p>
        </div>
        <Button onClick={() => setLocation("/pro")} className="px-8 py-5 font-bold rounded-2xl">🌟 اشترك في Pro</Button>
        <button onClick={() => setLocation("/")} className="text-sm text-muted-foreground hover:text-foreground">العودة للرئيسية</button>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-5xl">
          {selectedTeacher.emoji}
        </motion.div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">{selectedTeacher.name}</h1>
          <p className="text-muted-foreground text-sm">{selectedTeacher.desc}</p>
        </div>

        {/* Teacher picker */}
        <div className="flex gap-3">
          {TEACHERS.map(t => (
            <button key={t.id} onClick={() => setSelectedTeacher(t)}
              className={`flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all
                ${selectedTeacher.id === t.id ? "border-primary bg-primary/10" : "border-border bg-muted/30"}`}>
              <span className="text-2xl">{t.emoji}</span>
              <span className="text-xs font-medium">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.desc}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm max-w-xs">
          <div className="bg-muted rounded-xl p-3 space-y-1 text-center">
            <div className="text-2xl">🎙️</div>
            <p className="text-xs text-muted-foreground">مايك تلقائي</p>
          </div>
          <div className="bg-muted rounded-xl p-3 space-y-1 text-center">
            <div className="text-2xl">🔊</div>
            <p className="text-xs text-muted-foreground">يرد بصوت</p>
          </div>
          <div className="bg-muted rounded-xl p-3 space-y-1 text-center">
            <div className="text-2xl">✍️</div>
            <p className="text-xs text-muted-foreground">يصحح بلطف</p>
          </div>
        </div>

        <Button onClick={startCall} size="lg" className="px-10 py-6 text-lg font-bold rounded-2xl gap-3">
          <Phone className="w-5 h-5" /> ابدأ المحادثة
        </Button>
        <p className="text-xs text-muted-foreground">يعمل بشكل أفضل على Chrome</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100svh-130px)] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl
            ${callState === "teacher-speaking" ? "ring-2 ring-green-400 ring-offset-2 ring-offset-background" : "bg-primary/10"}`}>
            {selectedTeacher.emoji}
            {callState === "teacher-speaking" && (
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            )}
          </div>
          <div>
            <p className="font-bold text-sm">{selectedTeacher.name}</p>
            <p className="text-xs text-primary min-h-4">{stateLabel[callState]}</p>
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
            <motion.div key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-lg
                ${msg.role === "assistant" ? "bg-primary/10" : "bg-muted"}`}>
                {msg.role === "assistant" ? selectedTeacher.emoji : userAvatar}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === "assistant"
                  ? "bg-card border border-border rounded-tl-sm"
                  : "bg-primary text-primary-foreground rounded-tr-sm"}`}
                dir="ltr">
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {callState === "processing" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-lg">{selectedTeacher.emoji}</div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center">
                {[0, 150, 300].map(d => (
                  <span key={d} className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:`${d}ms`}} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Mic status */}
      <div className="shrink-0 px-4 pb-4 border-t border-border pt-3 space-y-2">
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shrink-0
            ${callState === "listening" ? "bg-red-500/20 border-2 border-red-500 animate-pulse"
              : callState === "teacher-speaking" ? "bg-green-500/10 border-2 border-green-500/30"
              : "bg-muted border-2 border-border"}`}>
            {callState === "listening" ? <Mic className="w-6 h-6 text-red-400" />
              : callState === "teacher-speaking" ? <Volume2 className="w-6 h-6 text-green-400" />
              : <MicOff className="w-6 h-6 text-muted-foreground" />}
          </div>
          <div className="flex-1">
            {transcript && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-sm text-muted-foreground bg-muted/50 rounded-xl px-3 py-2" dir="ltr">
                {transcript}
              </motion.p>
            )}
            {!transcript && (
              <p className="text-xs text-muted-foreground">
                {callState === "listening" ? "🎙️ تحدث الآن..." 
                  : callState === "teacher-speaking" ? "انتظر حتى ينتهي المعلم"
                  : callState === "processing" ? "يعالج ردك..."
                  : "في انتظار المعلم..."}
              </p>
            )}
          </div>
          {/* Manual mic button if mic stopped */}
          {callState === "idle" && (
            <Button variant="outline" size="sm" onClick={() => { listeningRetryRef.current = 0; startListening(); }}
              className="shrink-0 rounded-xl gap-1 text-xs">
              <Mic className="w-3 h-3" /> شغّل المايك
            </Button>
          )}
        </div>
        <p className="text-xs text-muted-foreground text-center">
          المايك يفتح تلقائياً • أو اضغط "شغّل المايك" إذا وقف 🎙️
        </p>
      </div>
    </div>
  );
}
