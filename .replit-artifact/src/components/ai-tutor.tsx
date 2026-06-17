import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  streaming?: boolean;
  suggestions?: string[];
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

let msgId = 0;

const INITIAL_SUGGESTIONS = [
  "ما الفرق بين was و were؟",
  "متى أستخدم a و an؟",
  "كيف أتحسن في الإنجليزية؟",
  "ما أشهر الأخطاء الشائعة؟",
];

function formatText(text: string): React.ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((p, j) => {
      if (p.startsWith("**") && p.endsWith("**")) {
        return (
          <strong key={j} className="text-foreground font-bold">
            {p.slice(2, -2)}
          </strong>
        );
      }
      return p;
    });
    return (
      <span key={i}>
        {parts}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

export function AiTutor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: ++msgId,
      role: "bot",
      text: "أهلاً! 🦉 أنا مساعدك الإنجليزي المدعوم بالذكاء الاصطناعي. اسألني عن أي قاعدة، كلمة، فرق بين تعبيرين، أو أي شيء يخص اللغة الإنجليزية!",
      suggestions: INITIAL_SUGGESTIONS,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Keep a rolling history for multi-turn context (last 10 turns)
  const historyRef = useRef<ChatMessage[]>([]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userText = text.trim();
    setInput("");
    setIsTyping(true);

    // Add user message
    setMessages((m) => [...m, { id: ++msgId, role: "user", text: userText }]);

    // Build history for context
    historyRef.current = [
      ...historyRef.current,
      { role: "user" as const, content: userText },
    ].slice(-20); // keep last 20 messages

    // Add empty streaming bot message
    const botId = ++msgId;
    setMessages((m) => [
      ...m,
      { id: botId, role: "bot", text: "", streaming: true },
    ]);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY ?? "",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 600,
          system: "أنت مدرس لغة إنجليزية متخصص. تجيب بالعربية وتشرح قواعد الإنجليزية بأسلوب بسيط وواضح. استخدم أمثلة عملية. كن مختصراً ومفيداً.",
          messages: historyRef.current.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("network error");
      const data = await res.json();
      const fullText = data.content?.[0]?.text ?? "عذراً، لم أستطع الإجابة.";
      const suggestions = fullText.length < 300
        ? ["أعطني مثالاً آخر", "اشرح أكثر", "ما الفرق في الاستخدام؟"]
        : undefined;
      setMessages((m) =>
        m.map((msg) =>
          msg.id === botId
            ? { ...msg, text: fullText, streaming: false, suggestions }
            : msg
        )
      );
      historyRef.current = [
        ...historyRef.current,
        { role: "assistant" as const, content: fullText },
      ].slice(-20);
    } catch {
      setMessages((m) =>
        m.map((msg) =>
          msg.id === botId
            ? {
                ...msg,
                text: "عذراً، حدث خطأ في الاتصال. تأكد من الاتصال بالإنترنت وحاول مجدداً.",
                streaming: false,
              }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
      if (!open) setUnread((u) => u + 1);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating button — sits above mobile bottom nav */}
      <div className="fixed bottom-20 md:bottom-6 left-6 z-50 flex flex-col items-start gap-2">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="bg-card border border-border rounded-2xl px-3 py-2 text-xs text-muted-foreground shadow-lg max-w-[160px] text-right"
            >
              🦉 اسألني أي شيء عن الإنجليزية!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all",
            open
              ? "bg-muted border border-border text-muted-foreground"
              : "bg-primary text-primary-foreground"
          )}
          aria-label="المساعد الذكي"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
              >
                <span className="text-2xl leading-none">🦉</span>
              </motion.div>
            )}
          </AnimatePresence>

          {unread > 0 && !open && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {unread}
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 left-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: "540px" }}
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-border px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                🦉
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-foreground">
                  مساعد الإنجليزية
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  مدعوم بالذكاء الاصطناعي • يجيب على أي سؤال
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-3 space-y-3 scroll-smooth"
              style={{ minHeight: 0 }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-2",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {/* Avatar */}
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5",
                      msg.role === "bot" ? "bg-primary/20 text-lg" : "bg-muted"
                    )}
                  >
                    {msg.role === "bot" ? (
                      "🦉"
                    ) : (
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={cn(
                      "max-w-[82%] rounded-2xl px-3 py-2 text-xs leading-relaxed",
                      msg.role === "bot"
                        ? "bg-muted text-foreground rounded-tl-sm"
                        : "bg-primary text-primary-foreground rounded-tr-sm"
                    )}
                  >
                    {msg.role === "bot" ? (
                      <>
                        {formatText(msg.text)}
                        {msg.streaming && (
                          <span className="inline-block w-1.5 h-3.5 bg-primary/60 rounded-sm mr-0.5 animate-pulse" />
                        )}
                      </>
                    ) : (
                      msg.text
                    )}

                    {/* Suggestion chips */}
                    {!msg.streaming &&
                      msg.suggestions &&
                      msg.suggestions.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {msg.suggestions.map((s, i) => (
                            <button
                              key={i}
                              onClick={() => sendMessage(s)}
                              className="bg-primary/15 hover:bg-primary/25 text-primary text-[10px] px-2 py-0.5 rounded-full transition-colors border border-primary/20"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator (only while waiting for first token) */}
              {isTyping &&
                messages[messages.length - 1]?.role !== "bot" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 items-end"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-lg shrink-0">
                      🦉
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2.5 flex gap-1 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="اسأل عن أي شيء بالإنجليزية..."
                className="flex-1 bg-muted rounded-xl px-3 py-2 text-sm text-right outline-none placeholder:text-muted-foreground/50 border border-border focus:border-primary/50 transition-colors"
                dir="rtl"
                disabled={isTyping}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isTyping}
                className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0",
                  input.trim() && !isTyping
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted text-muted-foreground/40 cursor-default"
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
