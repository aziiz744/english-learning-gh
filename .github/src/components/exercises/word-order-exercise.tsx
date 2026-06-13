import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface WordOrderExerciseProps {
  question: string;
  correctAnswer: string;
  onAnswer: (answer: string) => void;
  feedback: { isCorrect: boolean; correctAnswer: string } | null;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function WordOrderExercise({ question, correctAnswer, onAnswer, feedback }: WordOrderExerciseProps) {
  const words = correctAnswer.trim().split(/\s+/);
  const [bank, setBank] = useState<{ word: string; id: number }[]>(() =>
    shuffle(words.map((w, i) => ({ word: w, id: i })))
  );
  const [answer, setAnswer] = useState<{ word: string; id: number }[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (feedback !== null && !submitted) {
      setSubmitted(true);
    }
  }, [feedback, submitted]);

  const addWord = (item: { word: string; id: number }) => {
    if (feedback) return;
    setBank(b => b.filter(w => w.id !== item.id));
    const next = [...answer, item];
    setAnswer(next);
    if (next.length === words.length) {
      onAnswer(next.map(w => w.word).join(" "));
    }
  };

  const removeWord = (item: { word: string; id: number }) => {
    if (feedback) return;
    setAnswer(a => a.filter(w => w.id !== item.id));
    setBank(b => [...b, item]);
  };

  const correctWords = correctAnswer.trim().split(/\s+/);

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <p className="text-sm text-muted-foreground text-right">
        رتّب الكلمات لتكوّن الجملة الصحيحة — اضغط على الكلمة لإضافتها
      </p>

      {/* Answer zone */}
      <div className={cn(
        "min-h-14 border-2 rounded-xl p-3 flex flex-wrap gap-2 items-center transition-all",
        !feedback ? "border-primary/30 bg-primary/5" :
          feedback.isCorrect ? "border-emerald-500/50 bg-emerald-500/10" : "border-red-500/50 bg-red-500/10"
      )}>
        {answer.length === 0 && (
          <span className="text-muted-foreground/50 text-sm select-none">اضغط على الكلمات أدناه...</span>
        )}
        <AnimatePresence>
          {answer.map((item, idx) => (
            <motion.button
              key={item.id}
              layout
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={() => removeWord(item)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-semibold border-2 transition-all",
                "dir-ltr",
                !feedback
                  ? "bg-primary/20 border-primary/50 text-primary hover:bg-primary/30 cursor-pointer"
                  : correctWords[idx] === item.word
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : "bg-red-500/20 border-red-500/50 text-red-400"
              )}
            >
              {item.word}
            </motion.button>
          ))}
        </AnimatePresence>
        {feedback && (
          <div className="mr-auto">
            {feedback.isCorrect
              ? <Check className="w-5 h-5 text-emerald-400" />
              : <X className="w-5 h-5 text-red-400" />}
          </div>
        )}
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap gap-2 justify-center min-h-10">
        <AnimatePresence>
          {bank.map(item => (
            <motion.button
              key={item.id}
              layout
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={() => addWord(item)}
              disabled={!!feedback}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-semibold border-2 transition-all",
                "border-border bg-card hover:border-primary/50 hover:bg-primary/10 cursor-pointer",
                feedback && "opacity-40 cursor-default"
              )}
            >
              {item.word}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Show correct if wrong */}
      {feedback && !feedback.isCorrect && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-emerald-400 text-center"
        >
          الترتيب الصحيح: <span className="font-bold" dir="ltr">{feedback.correctAnswer}</span>
        </motion.p>
      )}
    </div>
  );
}
