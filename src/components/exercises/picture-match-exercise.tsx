import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PictureOption } from "@/lib/mini-exercises";

// قاموس إيموجي احتياطي محسّن — يضمن إيموجي مناسب لكل كلمة شائعة
// (يُستخدم فقط إذا لم يأتِ إيموجي من بنك السؤال)
const EMOJI_FALLBACK: Record<string, string> = {
  // مشاعر
  happy: "😄", sad: "😢", angry: "😠", scared: "😨", tired: "😴", excited: "🤩",
  surprised: "😲", bored: "😑", confused: "😕", worried: "😟",
  // مهن
  doctor: "👨‍⚕️", teacher: "👩‍🏫", police: "👮", worker: "👷", chef: "👨‍🍳",
  nurse: "👩‍⚕️", engineer: "👷‍♂️", driver: "🚕", boss: "💼",
  // حيوانات
  dog: "🐶", cat: "🐱", bird: "🐦", fish: "🐟", horse: "🐴", cow: "🐮",
  lion: "🦁", elephant: "🐘", rabbit: "🐰", chicken: "🐔",
  // أفعال
  running: "🏃", swimming: "🏊", reading: "📖", cooking: "👨‍🍳", sleeping: "😴",
  eating: "🍽️", dancing: "💃", singing: "🎤", cook: "🍳", eat: "🍽️", drink: "🥤",
  sleep: "😴", sit: "🪑", stand: "🧍", watch: "⌚", "wake up": "⏰", open: "🔓", close: "🔒",
  // أماكن
  beach: "🏖️", mountain: "⛰️", city: "🏙️", park: "🌳", school: "🏫",
  hospital: "🏥", restaurant: "🍽️", market: "🛒", forest: "🌲", sea: "🌊",
  bridge: "🌉", hotel: "🏨", office: "🏢", station: "🚉", store: "🏪",
  bathroom: "🚿", bedroom: "🛏️", kitchen: "🍳", "living room": "🛋️", room: "🚪",
  reception: "🛎️", gate: "🚪", square: "⬛",
  // طعام وشراب
  pizza: "🍕", burger: "🍔", salad: "🥗", cake: "🍰", apple: "🍎", banana: "🍌",
  coffee: "☕", water: "💧", tea: "🍵", milk: "🥛", juice: "🧃", bread: "🍞",
  rice: "🍚", egg: "🥚", chicken_food: "🍗",
  // أشياء
  car: "🚗", bus: "🚌", phone: "📱", computer: "💻", book: "📖", bag: "👜",
  chair: "🪑", table: "🪑", key: "🔑", door: "🚪", clock: "🕐", alarm: "⏰",
  calendar: "📅", paper: "📄", pen: "🖊️", email: "📧", report: "📋", card: "💳",
  bill: "🧾", receipt: "🧾", menu: "📋", ticket: "🎫", passport: "📔", plate: "🍽️",
  cart: "🛒", plane: "✈️", watch_obj: "⌚",
  // ملابس
  shirt: "👕", jeans: "👖", pants: "👖", dress: "👗", hat: "🎩", shoes: "👟",
  jacket: "🧥", scarf: "🧣",
  // طقس
  sunny: "☀️", rainy: "🌧️", cloudy: "☁️", snowy: "❄️", windy: "💨", hot: "🥵", cold: "🥶",
  // جسم
  head: "🗣️", foot: "🦶", tooth: "🦷", stomach: "🤰", hand: "✋",
  // رياضة
  football: "⚽", basketball: "🏀", tennis: "🎾", volleyball: "🏐", swimming_sport: "🏊",
  // مدرسة
  math: "➗", science: "🔬", history: "📜", art: "🎨",
  // أخرى
  fire: "🔥", danger: "⚠️", stop: "🛑", careful: "⚠️", shower: "🚿", brother: "👦",
  sister: "👧", mother: "👩", father: "👨", grandmother: "👵", bank: "🏦",
};

function getEmoji(option: PictureOption): string {
  // أولوية: الإيموجي من بنك السؤال، ثم الاحتياطي، ثم رمز عام
  if (option.emoji && option.emoji.trim()) return option.emoji;
  return EMOJI_FALLBACK[option.label.toLowerCase()] ?? "🖼️";
}

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
        {shuffled.map((option) => {
          const { label } = option;
          const emoji = getEmoji(option);
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
                "relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-4 transition-all aspect-square",
                !feedback && !isSelected
                  ? "border-border bg-muted/30 hover:border-primary/60 hover:bg-primary/5 cursor-pointer"
                  : "",
                !feedback && isSelected
                  ? "border-primary bg-primary/15 shadow-lg shadow-primary/20"
                  : "",
                feedback && isCorrect
                  ? "border-green-500 bg-green-500/15"
                  : "",
                feedback && isWrongSel
                  ? "border-red-500 bg-red-500/15"
                  : "",
                feedback && !isCorrect && !isWrongSel
                  ? "border-border bg-muted/20 opacity-50"
                  : ""
              )}
            >
              {/* Feedback badge */}
              {feedback && (isCorrect || isWrongSel) && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={cn(
                    "absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center z-10",
                    isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  )}
                >
                  {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                </motion.div>
              )}

              {/* Emoji — كبير وواضح */}
              <div className="w-full flex-1 flex items-center justify-center">
                <span className="select-none" style={{ fontSize: "clamp(48px, 18vw, 80px)", lineHeight: 1 }}>
                  {emoji}
                </span>
              </div>

              {/* Label (shown after feedback) */}
              <motion.span
                initial={false}
                animate={{ opacity: feedback ? 1 : 0, y: feedback ? 0 : 4 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "text-xs font-bold h-4",
                  feedback && isCorrect ? "text-green-400" :
                  feedback && isWrongSel ? "text-red-400" :
                  "text-muted-foreground"
                )}
                dir="ltr"
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
