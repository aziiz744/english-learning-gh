import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, MicOff, Volume2, VolumeX, Loader2, Bot, User, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { triggerLoginModal } from "@/lib/modal-state";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SYSTEM_PROMPT = `You are Mr. Adam, a warm, patient, and highly experienced English language teacher with 20 years of teaching experience. You specialize in teaching Arabic speakers.

Your personality:
- Friendly, encouraging, and supportive
- You celebrate small wins and correct mistakes gently
- You adapt your language level to the student
- You mix teaching with natural conversation

Your teaching style:
- When the student makes a grammar mistake, you naturally correct it by repeating the correct form in your reply (without being harsh)
- You give short, practical explanations
- You encourage the student to speak more
- You ask follow-up questions to keep the conversation going
- You suggest vocabulary or phrases when relevant
- If the student writes in Arabic, kindly encourage them to try in English but help them

Rules:
- Keep responses conversational and not too long (2-5 sentences usually)
- Always end with a question or encouragement to keep the conversation going
- Occasionally give a mini tip or vocabulary word naturally in the conversation
- Never be robotic — be human and warm

Start the conversation as if welcoming a new student to your class.`;

export default function TeacherPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [recording, setRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const msgIdRef = useRef(0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const speak = useCallback((text: string) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.9;
    utter.pitch = 1.05;
    // Pick a good English voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.lang.startsWith("en") && (v.name.includes("Daniel") || v.name.includes("Google") || v.name.includes("Samantha"))
    ) || voices.find(v => v.lang.startsWith("en"));
    if (preferred) utter.voice = preferred;
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    synthRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [voiceEnabled]);

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { id: ++msgIdRef.current, role: "user", content: text.trim(), timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = [...messages, userMsg].map(m => ({ role: m.role, content: m.content }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages: history,
        }),
      });
      const data = await res.json();
      const reply = data.content?.find((b: any) => b.type === "text")?.text || "Sorry, I didn't catch that. Could you try again?";
      const assistantMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply, timestamp: new Date() };
      setMessages(prev => [...prev, assistantMsg]);
      speak(reply);
    } catch {
      const errMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: "Sorry, something went wrong. Please try again!", timestamp: new Date() };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  }, [messages, loading, speak]);

  const startConversation = async () => {
    if (!user) { triggerLoginModal(); return; }
    setStarted(true);
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 200,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: "Hello, I want to practice English with you." }],
        }),
      });
      const data = await res.json();
      const reply = data.content?.find((b: any) => b.type === "text")?.text || "Hello! Welcome to our English class! I'm so happy you're here. What's your name, and how long have you been learning English?";
      const assistantMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: reply, timestamp: new Date() };
      setMessages([assistantMsg]);
      speak(reply);
    } catch {
      const assistantMsg: Message = { id: ++msgIdRef.current, role: "assistant", content: "Hello! I'm Mr. Adam, your English teacher. I'm so glad you're here to practice! What's your name?", timestamp: new Date() };
      setMessages([assistantMsg]);
      speak(assistantMsg.content);
    } finally {
      setLoading(false);
    }
  };

  const toggleRecording = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { alert("متصفحك لا يدعم التعرف على الصوت. استخدم Chrome."); return; }

    if (recording) {
      recognitionRef.current?.stop();
      setRecording(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      setRecording(false);
    };
    recognition.onerror = () => setRecording(false);
    recognition.onend = () => setRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
    setRecording(true);
  };

  const resetChat = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
    setMessages([]);
    setStarted(false);
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
            تحدّث مع معلم AI ذكي يتجاوب معك، يصحح أخطاءك بلطف، ويساعدك على ممارسة الإنجليزية بثقة
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center text-sm text-muted-foreground">
          <span className="bg-muted px-3 py-1.5 rounded-full">🎙️ تحدث بصوتك</span>
          <span className="bg-muted px-3 py-1.5 rounded-full">⌨️ أو اكتب</span>
          <span className="bg-muted px-3 py-1.5 rounded-full">🔊 يرد بصوت</span>
        </div>
        <Button onClick={startConversation} size="lg" className="px-8 py-6 text-lg font-bold rounded-2xl">
          ابدأ المحادثة
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100svh-130px)] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-2xl">👨‍🏫</div>
          <div>
            <p className="font-bold text-sm">Mr. Adam</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {speaking ? <><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />يتحدث...</> : "معلم الإنجليزية"}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => { setVoiceEnabled(v => !v); stopSpeaking(); }}
            className={voiceEnabled ? "text-primary" : "text-muted-foreground"}>
            {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>
          {speaking && (
            <Button variant="ghost" size="icon" onClick={stopSpeaking}>
              <VolumeX className="w-4 h-4 text-red-400" />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={resetChat}>
            <RefreshCw className="w-4 h-4" />
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
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-base
                ${msg.role === "assistant" ? "bg-primary/10" : "bg-muted"}`}>
                {msg.role === "assistant" ? "👨‍🏫" : <User className="w-4 h-4" />}
              </div>
              {/* Bubble */}
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

        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-base">👨‍🏫</div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:"0ms"}} />
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:"150ms"}} />
                <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{animationDelay:"300ms"}} />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="shrink-0 p-4 border-t border-border">
        <div className="flex gap-2 items-end">
          {/* Mic button */}
          <Button variant="outline" size="icon"
            onClick={toggleRecording}
            className={`shrink-0 h-11 w-11 rounded-xl ${recording ? "border-red-500 text-red-500 bg-red-500/10 animate-pulse" : ""}`}>
            {recording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>

          {/* Text input */}
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
              }}
              placeholder={recording ? "🎙️ يستمع..." : "اكتب بالإنجليزي أو تحدث..."}
              rows={1}
              dir="ltr"
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground placeholder:dir-rtl"
              style={{ minHeight: "44px", maxHeight: "120px" }}
            />
          </div>

          {/* Send button */}
          <Button onClick={() => sendMessage(input)} disabled={!input.trim() || loading}
            size="icon" className="shrink-0 h-11 w-11 rounded-xl">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Enter للإرسال • Shift+Enter لسطر جديد • 🎙️ للتحدث بالصوت
        </p>
      </div>
    </div>
  );
}
