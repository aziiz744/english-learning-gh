import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";


const translateCache: Record<string, string> = {};
const COMMON: Record<string, string> = {
  "i":"أنا","am":"أكون","is":"يكون","are":"يكونون","the":"الـ","a":"أ","an":"أ",
  "late":"متأخر","for":"لـ","meeting":"اجتماع","from":"من","to":"إلى","in":"في",
  "on":"على","at":"في","have":"يملك","has":"يملك","do":"يفعل","not":"لا",
  "my":"لي","your":"لك","his":"له","her":"لها","we":"نحن","they":"هم",
  "go":"يذهب","come":"يأتي","see":"يرى","know":"يعلم","think":"يفكر",
  "want":"يريد","like":"يحب","love":"يحب","need":"يحتاج","work":"يعمل",
  "good":"جيد","bad":"سيئ","big":"كبير","small":"صغير","happy":"سعيد",
  "home":"منزل","school":"مدرسة","today":"اليوم","now":"الآن","here":"هنا",
  "please":"من فضلك","sorry":"آسف","thank":"شكر","hello":"مرحباً","bye":"وداعاً",
};

async function translateWordInline(word: string): Promise<string> {
  const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  if (!clean) return word;
  if (translateCache[clean]) return translateCache[clean];
  if (COMMON[clean]) { translateCache[clean] = COMMON[clean]; return COMMON[clean]; }
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=en|ar`);
    const data = await res.json();
    const t = data.responseData?.translatedText;
    if (t && /[؀-ۿ]/.test(t)) { translateCache[clean] = t; return t; }
  } catch {}
  return word;
}
import { Volume2, VolumeX, Loader2, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListenSelectProps {
  sentence: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (answer: string) => void;
  feedback: { isCorrect: boolean; correctAnswer: string } | null;
}

type Speed = "slow" | "normal";
// slow = 0.5 — clearly half-speed; normal = 1.0 — natural
const RATES: Record<Speed, number> = { slow: 0.5, normal: 1.0 };

function useSpeech(sentence: string) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(true);
  const [activeSpeed, setActiveSpeed] = useState<Speed>("slow");

  useEffect(() => {
    setSupported("speechSynthesis" in window);
  }, []);

  const speak = useCallback((speed: Speed = "slow") => {
    if (!("speechSynthesis" in window)) return;
    setPlaying(false);
    window.speechSynthesis.cancel();
    // Wait 80 ms for cancel() to fully take effect before queuing new utterance
    setTimeout(() => {
      const utter = new SpeechSynthesisUtterance(sentence);
      utter.lang = "en-US";
      utter.rate = RATES[speed];
      utter.pitch = speed === "slow" ? 0.95 : 1.05;
      utter.volume = 1;
      utter.onstart = () => setPlaying(true);
      utter.onend = () => setPlaying(false);
      utter.onerror = () => setPlaying(false);
      window.speechSynthesis.speak(utter);
    }, 80);
  }, [sentence]);

  const playAt = useCallback((speed: Speed) => {
    setActiveSpeed(speed);
    speak(speed);
  }, [speak]);

  // Auto-play slow on mount
  useEffect(() => {
    const t = setTimeout(() => speak("slow"), 700);
    return () => {
      clearTimeout(t);
      window.speechSynthesis?.cancel();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { playAt, playing, supported, activeSpeed };
}

/** Replace the target word with a blank in the display sentence */
function blankSentence(sentence: string, target: string): string {
  const regex = new RegExp(`\\b${target}\\b`, "i");
  return sentence.replace(regex, "______");
}

function ClickableWordsInline({ sentence }: { sentence: string }) {
  const [tooltip, setTooltip] = useState<{word: string; translation: string; idx: number} | null>(null);

  const handleClick = useCallback(async (word: string, idx: number) => {
    const clean = word.replace(/[^a-zA-Z]/g, "");
    if (!clean) return;
    setTooltip({ word: clean, translation: "...", idx });
    const t = await translateWordInline(clean);
    setTooltip({ word: clean, translation: t, idx });
    setTimeout(() => setTooltip(null), 2500);
  }, []);

  const parts = sentence.split(/(______|\s+)/);
  let wordIdx = 0;
  return (
    <p className="text-lg font-semibold leading-relaxed" dir="ltr">
      {parts.map((part, i) => {
        if (!part) return null;
        if (part === "______") return <span key={i} className="inline-block border-b-2 border-primary w-16 mx-1" />;
        if (/^\s+$/.test(part)) return <span key={i}>{part}</span>;
        const idx = wordIdx++;
        const clean = part.replace(/[^a-zA-Z]/g, "");
        return (
          <span key={i} className="relative inline">
            <span
              onClick={() => clean && handleClick(part, idx)}
              className={`${clean ? "cursor-pointer hover:text-primary underline-offset-2 hover:underline" : ""}`}
            >
              {part}
            </span>
            {tooltip?.idx === idx && clean && (
              <span className="absolute bottom-full left-0 mb-1 bg-card border border-border text-foreground text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-50 font-medium" dir="rtl">
                🔤 {tooltip.translation === "..." ? "⏳" : tooltip.translation}
              </span>
            )}
          </span>
        );
      })}
    </p>
  );
}

export function ListenSelectExercise({
  sentence,
  options,
  correctAnswer,
  onAnswer,
  feedback,
}: ListenSelectProps) {
  const { playAt, playing, supported, activeSpeed } = useSpeech(sentence);
  const display = blankSentence(sentence, correctAnswer);
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(opt: string) {
    if (feedback) return;
    setSelected(opt);
    onAnswer(opt);
  }

  return (
    <div className="space-y-5">
      {/* Instruction */}
      <p className="text-sm text-muted-foreground text-center">
        استمع للجملة واختر الكلمة الصحيحة التي تكمل الفراغ
      </p>

      {/* Speed buttons */}
      <div className="flex justify-center gap-3">
        {(["slow", "normal"] as Speed[]).map((speed) => {
          const isActive = activeSpeed === speed;
          const isPlaying = isActive && playing;

          return (
            <motion.button
              key={speed}
              whileHover={!supported ? {} : { scale: 1.04 }}
              whileTap={!supported ? {} : { scale: 0.96 }}
              onClick={() => supported && playAt(speed)}
              disabled={!supported}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-2xl border-2 font-bold text-sm transition-all select-none",
                isActive
                  ? "border-primary bg-primary/15 text-primary shadow-md shadow-primary/20"
                  : "border-border bg-muted/30 text-muted-foreground hover:border-primary/40 hover:text-foreground cursor-pointer",
                !supported && "opacity-40 cursor-not-allowed",
              )}
            >
              {/* Speed icon */}
              <span className="text-lg leading-none">
                {speed === "slow" ? "🐢" : "🐇"}
              </span>

              {/* Label */}
              <span>{speed === "slow" ? "بطيء" : "عادي"}</span>

              {/* Speaker / playing indicator */}
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.span
                    key="spin"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </motion.span>
                ) : supported ? (
                  <motion.span
                    key="vol"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <Volume2 className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <VolumeX className="w-4 h-4 opacity-40" />
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Waveform animation while playing */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex justify-center gap-1 items-end overflow-hidden"
            style={{ minHeight: 24 }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 bg-primary rounded-full"
                animate={{ height: ["5px", "20px", "5px"] }}
                transition={{
                  repeat: Infinity,
                  duration: activeSpeed === "slow" ? 0.9 : 0.55,
                  delay: i * 0.08,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sentence with blank - clickable words for translation */}
      <div className="bg-muted/30 border border-border rounded-2xl px-5 py-4 text-center relative">
        <p className="text-xs text-muted-foreground mb-2">💡 اضغط على أي كلمة لترجمتها</p>
        <ClickableWordsInline sentence={display} />
      </div>
      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          const isSelected = selected === opt;
          const isCorrectOpt = feedback && opt === feedback.correctAnswer;
          const isWrongSelected = feedback && isSelected && !feedback.isCorrect;

          return (
            <motion.button
              key={opt}
              whileHover={!feedback ? { scale: 1.03 } : {}}
              whileTap={!feedback ? { scale: 0.97 } : {}}
              onClick={() => handleSelect(opt)}
              disabled={!!feedback}
              className={cn(
                "py-4 px-4 rounded-xl border-2 font-bold text-base transition-all flex items-center justify-center gap-2",
                !feedback && !isSelected && "border-border hover:border-primary hover:bg-primary/5 cursor-pointer",
                !feedback && isSelected && "border-primary bg-primary/15 text-primary",
                feedback && isCorrectOpt && "border-green-500 bg-green-500/15 text-green-400",
                feedback && isWrongSelected && "border-red-500 bg-red-500/10 text-red-400",
                feedback && !isSelected && !isCorrectOpt && "border-border opacity-35 cursor-default",
              )}
            >
              <span dir="ltr">{opt}</span>
              {feedback && isCorrectOpt && <Check className="w-4 h-4 shrink-0" />}
              {feedback && isWrongSelected && <X className="w-4 h-4 shrink-0" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
