import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PictureOption } from "@/lib/mini-exercises";

interface PictureMatchProps {
  word: string;
  pictureOptions: PictureOption[];
  correctAnswer: string;
  onAnswer: (answer: string) => void;
  feedback: { isCorrect: boolean; correctAnswer: string } | null;
}

export function PictureMatchExercise({
  word,
  pictureOptions,
  correctAnswer,
  onAnswer,
  feedback,
}: PictureMatchProps) {
  const [shuffled] = useState<PictureOption[]>(() =>
    [...pictureOptions].sort(() => Math.random() - 0.5)
  );
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(label: string) {
    if (feedback) return;
    setSelected(label);
    onAnswer(label);
  }

  return (
    <div className="space-y-5">
      {/* Instruction */}
      <p className="text-sm text-muted-foreground text-center">
        اختر الصورة التي تمثّل الكلمة الإنجليزية أدناه
      </p>

      {/* Word card */}
      <div className="bg-gradient-to-br from-emerald-500/15 to-teal-500/10 border border-emerald-500/30 rounded-2xl px-6 py-5 text-center">
        <p className="text-4xl font-extrabold text-emerald-300 tracking-wide" dir="ltr">
          {word}
        </p>
      </div>

      {/* 2 × 2 picture grid */}
      <div className="grid grid-cols-2 gap-3">
        {shuffled.map(({ emoji, label }) => {
          const isSelected = selected === label;
          const isCorrect = feedback && label === correctAnswer;
          const isWrongSel = feedback && isSelected && label !== correctAnswer;

          return (
            <motion.button
              key={label}
              whileHover={!feedback ? { scale: 1.04, y: -2 } : {}}
              whileTap={!feedback ? { scale: 0.96 } : {}}
              onClick={() => handleSelect(label)}
              disabled={!!feedback}
              className={cn(
                "relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-4 transition-all",
                "aspect-square sm:aspect-auto sm:py-6",
                !feedback && !isSelected
                  ? "border-border bg-muted/30 hover:border-primary/60 hover:bg-primary/5 cursor-pointer"
                  : "",
                !feedback && isSelected
                  ? "border-primary bg-primary/15 shadow-lg shadow-primary/20"
                  : "",
                feedback && isCorrect
                  ? "border-green-500 bg-green-500/15 shadow-lg shadow-green-500/20"
                  : "",
                feedback && isWrongSel
                  ? "border-red-500 bg-red-500/10"
                  : "",
                feedback && !isSelected && !isCorrect
                  ? "border-border opacity-30 cursor-default"
                  : "",
              )}
            >
              {/* Correct / wrong badge */}
              {feedback && (isCorrect || isWrongSel) && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={cn(
                    "absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center",
                    isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  )}
                >
                  {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                </motion.div>
              )}

              {/* Emoji */}
              <span
                className="text-5xl sm:text-6xl select-none leading-none"
                role="img"
                aria-label={label}
              >
                {emoji}
              </span>

              {/* Label (shown after feedback) */}
              <motion.span
                initial={false}
                animate={{ opacity: feedback ? 1 : 0, y: feedback ? 0 : 4 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "text-xs font-bold dir-ltr",
                  feedback && isCorrect ? "text-green-400" :
                  feedback && isWrongSel ? "text-red-400" :
                  "text-muted-foreground"
                )}
              >
                {label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
