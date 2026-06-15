import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Volume2, VolumeX, Loader2, User, RefreshCw, PhoneOff, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { triggerLoginModal } from "@/lib/modal-state";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

type CallState = "idle" | "teacher-speaking" | "listening" | "processing";

const SYSTEM_PROMPT = `You are Mr. Adam, a warm, patient, and experienced English teacher specializing in teaching Arabic speakers.

Your style:
- Friendly, encouraging, short responses (2-4 sentences max)
- Gently correct grammar mistakes by naturally using the correct form in your reply
- Always end with a question to keep conversation going
- Adapt to the student's level
- If student writes Arabic, kindly encourage English but still help
- Be natural and human, not robotic`;

export default function TeacherPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [callState, setCallState] = useState<CallState>("idle");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [started, setStarted] = useState(false);
  const [transcript, setTranscript] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const msgIdRef = useRef(0);
  const callStateRef = useRef<CallState>("idle");
  const isActiveRef = useRef(false);

  callStateRef.current = callState;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Speak text then auto-open mic
  const speak = useCallback((text: string, thenListen: boolean = true) => {
    if (!voiceEnabled || !window.speechSynthesis) {
      if (thenListen) startListening();
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.88;
    utter.pitch = 1.05;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.lang.startsWith("en") && (v.name.includes("Daniel") || v.name.includes("Google US") || v.name.includes("Samantha") || v.name.includes("Alex"))
    ) || voices.find(v => v.lang.startsWith("en-US")) || voices.find(v => v.lang.startsWith("en"));
    if (preferred) utter.voice = preferred;
    setCallState("teacher-speaking");
    utter.onend = () => {
      if (isActiveRef.current && thenListen) {
        setTimeout(() => startListening(), 400);
      } else {
        setCallState("idle");
      }
    };
    utter.onerror = () => {
      if (isActiveRef.current && thenListen) startListening();
      else setCallState("idle");
    };
    window.speechSynthesis.speak(utter);
  }, [voiceEnabled]);

  const startListening = useCallback(() => {
    if (!isActiveRef.current) return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    recognitionRef.current?.abort();
    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => setCallState("listening");

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      let interim = "";
      let final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += e.results[i][0].transcript;
        else interim += e.results[i][0].transcript;
      }
      setTranscript(final || interim);
    };

    recognition.onend = () => {
      if (!isActiveRef.current) return;
      const t = transcript;
      if (t.trim()) {
        setTranscript("");
        sendMessage(t.trim());
      } else {
        // Nothing said, listen again
        setTimeout(() => { if (isActiveRef.current) startListening(); }, 500);
      }
    };

    recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
      if (e.error === "no-speech" || e.error === "aborted") {
        if (isActiveRef.current) setTimeout(() => startListening(), 500);
      }
    };

    recognitionRef.current = recognition;
    try { recognition.start(); } catch {}
  }, [transcript]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || !isActiveRef.current) return;
    setCallState("processing");
    setTranscript("");
    recognitionRef.current?.abort();

    const userMsg: Message = { id: ++msgIdRef.current, role: "user", content: text };
    setMessages(prev => {
      const newMsgs = [...prev, userMsg];
      // Call API with updated messages
      callAPI(newMsgs);
      return newMsgs;
    });
  }, []);

  const callAPI = useCallback(async (currentMessages: Message[]) => {
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 300,
          system: SYSTEM_PROMPT,
          messages: currentMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.find((b: any) => b.type === "text")?.text;
      if (reply) {
        const assistantMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply };
        setMessages(prev => [...prev, assistantMsg]);
        speak(reply, true);
      } else {
        if (isActiveRef.current) startListening();
      }
    } catch {
      const errMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: "Sorry, I had a connection issue. Please say that again!" };
      setMessages(prev => [...prev, errMsg]);
      speak(errMsg.content, true);
    }
  }, [speak, startListening]);

  const startCall = async () => {
    if (!user) { triggerLoginModal(); return; }
    isActiveRef.current = true;
    setStarted(true);
    setMessages([]);
    setCallState("processing");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 150,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: "Start the class. Greet me warmly and ask my name." }],
        }),
      });
      const data = await res.json();
      const reply = data.content?.find((b: any) => b.type === "text")?.text
        || "Hello! Welcome to our English class! I'm Mr. Adam. What's your name?";
      const msg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply };
      setMessages([msg]);
      speak(reply, true);
    } catch {
      const msg: Message = { id: ++msgIdRef.current, role: "assistant", content: "Hello! I'm Mr. Adam, your English teacher. What's your name?" };
      setMessages([msg]);
      speak(msg.content, true);
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
  };

  const stateLabel: Record<CallState, string> = {
    "idle": "",
    "teacher-speaking": "🔊 Mr. Adam يتحدث...",
    "listening": "🎙️ يستمع إليك...",
    "processing": "⏳ يفكر...",
  };

  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center space-y-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
          <span className="text-5xl">👨‍🏫</span>
        </motion.div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Mr. Adam — معلمك الخاص</h1>
          <p className="text-muted-foreground max-w-sm">
            مثل مكالمة هاتفية — المعلم يتكلم، ثم يفتح الميك تلقائياً لك، وهكذا
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-sm text-center max-w-xs">
          <div className="bg-muted rounded-xl p-3 space-y-1">
            <div className="text-2xl">🎙️</div>
            <p className="text-xs text-muted-foreground">ميك تلقائي</p>
          </div>
          <div className="bg-muted rounded-xl p-3 space-y-1">
            <div className="text-2xl">🔊</div>
            <p className="text-xs text-muted-foreground">يرد بصوت</p>
          </div>
          <div className="bg-muted rounded-xl p-3 space-y-1">
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
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl relative
            ${callState === "teacher-speaking" ? "ring-2 ring-green-400 ring-offset-2 ring-offset-background" : "bg-primary/10"}`}>
            👨‍🏫
            {callState === "teacher-speaking" && (
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            )}
          </div>
          <div>
            <p className="font-bold text-sm">Mr. Adam</p>
            <p className="text-xs text-primary animate-pulse min-h-4">{stateLabel[callState]}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => setVoiceEnabled(v => !v)}
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
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-base
                ${msg.role === "assistant" ? "bg-primary/10" : "bg-muted"}`}>
                {msg.role === "assistant" ? "👨‍🏫" : <User className="w-4 h-4" />}
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
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">👨‍🏫</div>
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

      {/* Live transcript + mic status */}
      <div className="shrink-0 px-4 pb-4 border-t border-border pt-3 space-y-3">
        {/* Mic visual */}
        <div className="flex items-center justify-center gap-3">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all
            ${callState === "listening"
              ? "bg-red-500/20 border-2 border-red-500 animate-pulse"
              : callState === "teacher-speaking"
              ? "bg-green-500/10 border-2 border-green-500/30"
              : "bg-muted border-2 border-border"}`}>
            {callState === "listening"
              ? <Mic className="w-6 h-6 text-red-400" />
              : callState === "teacher-speaking"
              ? <Volume2 className="w-6 h-6 text-green-400" />
              : <MicOff className="w-6 h-6 text-muted-foreground" />}
          </div>
          <div className="flex-1 min-h-10">
            {transcript && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-sm text-muted-foreground bg-muted/50 rounded-xl px-3 py-2" dir="ltr">
                {transcript}
              </motion.p>
            )}
            {!transcript && callState === "listening" && (
              <p className="text-xs text-muted-foreground">تحدث الآن... الميك مفتوح</p>
            )}
            {!transcript && callState === "teacher-speaking" && (
              <p className="text-xs text-muted-foreground">انتظر حتى ينتهي Mr. Adam من الكلام</p>
            )}
            {!transcript && callState === "processing" && (
              <p className="text-xs text-muted-foreground">يعالج ردك...</p>
            )}
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          الميك يفتح تلقائياً بعد ما ينتهي Mr. Adam 🎙️
        </p>
      </div>
    </div>
  );
}
