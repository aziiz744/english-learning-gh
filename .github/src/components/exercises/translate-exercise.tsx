import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X, Languages } from "lucide-react";
import { OptionText } from "@/components/word-highlighter";

interface TranslateExerciseProps {
  arabicPrompt: string;
  options: string[];
  selectedAnswer: string;
  onSelect: (answer: string) => void;
  feedback: { isCorrect: boolean; correctAnswer: string } | null;
}

export function TranslateExercise({
  arabicPrompt,
  options,
  selectedAnswer,
  onSelect,
  feedback,
}: TranslateExerciseProps) {
  return (
    <div className="space-y-5">
      {/* Instructions */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Languages className="w-4 h-4 text-violet-400" />
        <span>اختر الترجمة الإنجليزية الصحيحة</span>
      </div>

      {/* Arabic prompt card */}
      <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-5 text-center">
        <p className="text-2xl font-bold text-violet-300 leading-relaxed" dir="rtl">
          {arabicPrompt}
        </p>
      </div>

      {/* English options */}
      <div className="grid gap-3">
        {options.map((opt, i) => {
          const isSelected = selectedAnswer === opt;
          const isCorrectOpt = feedback && opt === feedback.correctAnswer;
          const isWrongSelected = feedback && isSelected && !feedback.isCorrect;

          return (
            <motion.button
              key={i}
              whileHover={!feedback ? { scale: 1.01 } : {}}
              whileTap={!feedback ? { scale: 0.99 } : {}}
              onClick={() => !feedback && onSelect(opt)}
              disabled={!!feedback}
              className={cn(
                "py-3 px-5 rounded-xl text-base font-semibold transition-all w-full border-2 flex items-center gap-3",
                !feedback && !isSelected && "border-border hover:border-primary hover:bg-primary/5 cursor-pointer",
                !feedback && isSelected && "border-primary bg-primary/15 text-primary",
                feedback && isCorrectOpt && "border-emerald-500 bg-emerald-500/15 text-emerald-400",
                feedback && isWrongSelected && "border-red-500 bg-red-500/10 text-red-400",
                feedback && !isSelected && !isCorrectOpt && "border-border opacity-40 cursor-default",
              )}
            >
              <div className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold border-2",
                !feedback && isSelected ? "border-primary bg-primary text-primary-foreground" : "border-current opacity-50"
              )}>
                {["A", "B", "C", "D"][i] ?? i + 1}
              </div>
              <OptionText text={opt} />
              {feedback && isCorrectOpt && <Check className="w-5 h-5 text-emerald-400 shrink-0 mr-auto" />}
              {feedback && isWrongSelected && <X className="w-5 h-5 text-red-400 shrink-0 mr-auto" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
