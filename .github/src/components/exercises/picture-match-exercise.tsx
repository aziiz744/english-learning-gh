import { useState } from "react";

// Map words to Unsplash search queries for relevant images
const UNSPLASH_QUERIES: Record<string, string> = {
  // Emotions
  "surprised": "surprised face person",
  "happy": "happy smiling person",
  "sad": "sad person crying",
  "angry": "angry person",
  "scared": "scared frightened person",
  "tired": "tired sleepy person",
  "excited": "excited celebration person",
  "bored": "bored person",
  "confused": "confused person thinking",
  "worried": "worried anxious person",
  // Jobs
  "doctor": "doctor hospital white coat",
  "teacher": "teacher classroom school",
  "police": "police officer uniform",
  "worker": "construction worker",
  "chef": "chef cooking kitchen",
  "nurse": "nurse hospital",
  "engineer": "engineer working",
  "driver": "taxi driver car",
  // Animals
  "dog": "cute dog puppy",
  "cat": "cute cat kitten",
  "bird": "colorful bird",
  "fish": "fish aquarium",
  "horse": "horse running",
  "cow": "cow farm",
  "lion": "lion wild animal",
  "elephant": "elephant wildlife",
  // Actions
  "running": "person running sport",
  "swimming": "person swimming pool",
  "reading": "person reading book",
  "cooking": "person cooking kitchen",
  "sleeping": "person sleeping bed",
  "eating": "person eating food",
  "dancing": "person dancing",
  "singing": "person singing microphone",
  // Places
  "beach": "beach ocean sand",
  "mountain": "mountain landscape",
  "city": "city buildings skyline",
  "park": "green park trees",
  "school": "school building",
  "hospital": "hospital building",
  "restaurant": "restaurant food dining",
  "market": "market shopping",
  // Food
  "pizza": "pizza food",
  "burger": "hamburger food",
  "salad": "salad vegetables",
  "cake": "cake dessert",
  "apple": "red apple fruit",
  "banana": "banana fruit yellow",
  "coffee": "coffee cup hot",
  "water": "water glass drink",
  // Objects
  "car": "car vehicle road",
  "bus": "bus public transport",
  "phone": "smartphone mobile",
  "computer": "laptop computer",
  "book": "open book reading",
  "bag": "bag handbag",
  "chair": "chair furniture",
  "table": "table furniture wood",
};

function getImageUrl(word: string): string {
  const query = UNSPLASH_QUERIES[word.toLowerCase()] ?? word;
  // Use Unsplash Source API - free, no key needed
  return `https://source.unsplash.com/300x300/?${encodeURIComponent(query)}`;
}
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

              {/* Image */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center">
                <img
                  src={getImageUrl(label)}
                  alt={label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to emoji if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <span className="hidden text-5xl select-none">{emoji}</span>
              </div>

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
