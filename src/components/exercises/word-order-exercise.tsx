import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

// Word-by-word translation dictionary
const WORD_MAP: Record<string, string> = {
  // Pronouns
  "i":"أنا","you":"أنت","he":"هو","she":"هي","we":"نحن","they":"هم","it":"هو/هي",
  "my":"لي","your":"لك","his":"له","her":"لها","our":"لنا","their":"لهم","its":"له",
  // To be
  "am":"أكون","is":"يكون","are":"يكونون","was":"كان","were":"كانوا",
  "be":"يكون","been":"كان","being":"يكون",
  // Common verbs
  "have":"يملك","has":"يملك","had":"كان يملك",
  "do":"يفعل","does":"يفعل","did":"فعل","done":"فعل",
  "go":"يذهب","goes":"يذهب","went":"ذهب","going":"ذاهب",
  "come":"يأتي","comes":"يأتي","came":"أتى",
  "get":"يحصل","gets":"يحصل","got":"حصل",
  "make":"يصنع","makes":"يصنع","made":"صنع",
  "know":"يعرف","knows":"يعرف","knew":"عرف",
  "think":"يفكر","thinks":"يفكر","thought":"فكر",
  "want":"يريد","wants":"يريد","wanted":"أراد",
  "like":"يحب","likes":"يحب","liked":"أحب",
  "love":"يحب","loves":"يحب","loved":"أحب",
  "need":"يحتاج","needs":"يحتاج","needed":"احتاج",
  "use":"يستخدم","uses":"يستخدم","used":"استخدم",
  "see":"يرى","sees":"يرى","saw":"رأى",
  "look":"ينظر","looks":"ينظر","looked":"نظر",
  "work":"يعمل","works":"يعمل","worked":"عمل",
  "live":"يعيش","lives":"يعيش","lived":"عاش",
  "play":"يلعب","plays":"يلعب","played":"لعب",
  "eat":"يأكل","eats":"يأكل","ate":"أكل",
  "drink":"يشرب","drinks":"يشرب","drank":"شرب",
  "speak":"يتكلم","speaks":"يتكلم","spoke":"تكلم",
  "learn":"يتعلم","learns":"يتعلم","learned":"تعلم",
  "study":"يدرس","studies":"يدرس","studied":"درس",
  "read":"يقرأ","reads":"يقرأ",
  "write":"يكتب","writes":"يكتب","wrote":"كتب",
  "listen":"يستمع","listens":"يستمع","listened":"استمع",
  "help":"يساعد","helps":"يساعد","helped":"ساعد",
  "start":"يبدأ","starts":"يبدأ","started":"بدأ",
  "stop":"يتوقف","stops":"يتوقف","stopped":"توقف",
  "run":"يركض","runs":"يركض","ran":"ركض",
  "walk":"يمشي","walks":"يمشي","walked":"مشى",
  "sleep":"ينام","sleeps":"ينام","slept":"نام",
  "wake":"يستيقظ","wakes":"يستيقظ","woke":"استيقظ",
  "call":"يتصل","calls":"يتصل","called":"اتصل",
  "open":"يفتح","opens":"يفتح","opened":"فتح",
  "close":"يغلق","closes":"يغلق","closed":"أغلق",
  "buy":"يشتري","buys":"يشتري","bought":"اشترى",
  "sell":"يبيع","sells":"يبيع","sold":"باع",
  "give":"يعطي","gives":"يعطي","gave":"أعطى",
  "take":"يأخذ","takes":"يأخذ","took":"أخذ",
  "put":"يضع","puts":"يضع",
  "find":"يجد","finds":"يجد","found":"وجد",
  "tell":"يخبر","tells":"يخبر","told":"أخبر",
  "ask":"يسأل","asks":"يسأل","asked":"سأل",
  "show":"يُظهر","shows":"يُظهر","showed":"أظهر",
  "try":"يحاول","tries":"يحاول","tried":"حاول",
  "feel":"يشعر","feels":"يشعر","felt":"شعر",
  "leave":"يغادر","leaves":"يغادر","left":"غادر",
  "meet":"يقابل","meets":"يقابل","met":"قابل",
  "pay":"يدفع","pays":"يدفع","paid":"دفع",
  "win":"يفوز","wins":"يفوز","won":"فاز",
  "lose":"يخسر","loses":"يخسر","lost":"خسر",
  "become":"يصبح","becomes":"يصبح","became":"أصبح",
  "turn":"يتحول","turns":"يتحول","turned":"تحول",
  // Auxiliaries & modals
  "can":"يستطيع","could":"يستطيع","will":"سيـ","would":"سيـ",
  "should":"يجب","must":"يجب","may":"يجوز","might":"قد",
  "shall":"سيـ","ought":"ينبغي",
  "not":"لا","never":"أبداً","always":"دائماً",
  // Articles & prepositions
  "a":"","an":"","the":"الـ",
  "in":"في","on":"على","at":"في","to":"إلى","for":"لـ","of":"من","with":"مع",
  "from":"من","by":"بـ","about":"عن","as":"كـ","into":"إلى داخل",
  "through":"عبر","between":"بين","after":"بعد","before":"قبل",
  "during":"خلال","without":"بدون","under":"تحت","above":"فوق",
  "over":"فوق","behind":"خلف","next":"بجانب","near":"قريب",
  // Common adjectives
  "good":"جيد","bad":"سيئ","big":"كبير","small":"صغير","large":"كبير",
  "hot":"حار","cold":"بارد","new":"جديد","old":"قديم","young":"صغير",
  "long":"طويل","short":"قصير","tall":"طويل","fast":"سريع","slow":"بطيء",
  "happy":"سعيد","sad":"حزين","tired":"متعب","hungry":"جائع","thirsty":"عطشان",
  "easy":"سهل","hard":"صعب","right":"صحيح","wrong":"خطأ","free":"مجاني/حر",
  "important":"مهم","different":"مختلف","same":"نفس","other":"آخر",
  "beautiful":"جميل","nice":"لطيف","great":"رائع","wonderful":"رائع",
  "busy":"مشغول","ready":"مستعد","late":"متأخر","early":"مبكر",
  // Common nouns
  "name":"اسم","time":"وقت","day":"يوم","week":"أسبوع","month":"شهر","year":"سنة",
  "morning":"صباح","afternoon":"مساء","evening":"مساء","night":"ليل",
  "home":"منزل","house":"بيت","school":"مدرسة","work":"عمل","office":"مكتب",
  "family":"عائلة","friend":"صديق","people":"ناس","person":"شخص","man":"رجل","woman":"امرأة",
  "child":"طفل","children":"أطفال","boy":"ولد","girl":"بنت",
  "food":"طعام","water":"ماء","money":"مال","book":"كتاب","car":"سيارة",
  "phone":"هاتف","computer":"حاسوب","city":"مدينة","country":"دولة",
  "English":"الإنجليزية","Arabic":"العربية","language":"لغة",
  // Question words
  "what":"ماذا","where":"أين","when":"متى","why":"لماذا","how":"كيف","who":"من","which":"أي",
  // Conjunctions
  "and":"و","or":"أو","but":"لكن","because":"لأن","so":"لذا","if":"إذا","that":"أن",
  "than":"من","then":"ثم","very":"جداً","too":"أيضاً","also":"أيضاً",
  "every":"كل","some":"بعض","all":"كل","many":"كثير","much":"كثير",
  "more":"أكثر","most":"الأكثر","less":"أقل","few":"قليل","little":"قليل",
  // Numbers
  "one":"واحد","two":"اثنان","three":"ثلاثة","four":"أربعة","five":"خمسة",
  "six":"ستة","seven":"سبعة","eight":"ثمانية","nine":"تسعة","ten":"عشرة",
  // Common phrases parts
  "please":"من فضلك","thank":"شكر","sorry":"آسف","hello":"مرحباً","bye":"وداعاً",
  "yes":"نعم","no":"لا","ok":"حسناً","well":"حسناً",
};

function autoTranslate(sentence: string): string {
  const words = sentence.trim().split(/\s+/);
  const translated = words.map(w => {
    const clean = w.replace(/[^a-zA-Z]/g, "").toLowerCase();
    return WORD_MAP[clean] ?? w;
  }).filter(w => w.trim());
  return translated.join(" ");
}

interface WordOrderExerciseProps {
  question: string;
  correctAnswer: string;
  onAnswer: (answer: string) => void;
  feedback: { isCorrect: boolean; correctAnswer: string } | null;
  arabicPrompt?: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function WordOrderExercise({ question, correctAnswer, onAnswer, feedback, arabicPrompt }: WordOrderExerciseProps) {
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
      {/* Arabic translation — manual or auto */}
      {(arabicPrompt || correctAnswer) && (() => {
        const display = arabicPrompt || autoTranslate(correctAnswer);
        return display ? (
          <div className="bg-muted/30 border border-border/50 rounded-xl px-4 py-3 text-center">
            <p className="text-xs text-muted-foreground mb-1">💡 المعنى بالعربي</p>
            <p className="text-base font-semibold text-foreground leading-relaxed" dir="rtl">{display}</p>
          </div>
        ) : null;
      })()}
      {/* Instructions */}
      <p className="text-sm text-muted-foreground text-right">
        رتّب الكلمات لتكوّن الجملة الصحيحة — اضغط على الكلمة لإضافتها
      </p>

      {/* Answer zone */}
      <div className={cn(
        "min-h-14 border-2 rounded-xl p-3 flex flex-wrap gap-2 items-center transition-all",
        !feedback ? "border-primary/30 bg-primary/5" :
          feedback.isCorrect ? "border-emerald-500/50 bg-emerald-500/10" : "border-red-500/50 bg-red-500/10"
      )} dir="ltr" style={{justifyContent: "flex-start"}}>
        {answer.length === 0 && (
          <span className="text-muted-foreground/50 text-sm select-none" dir="rtl">اضغط على الكلمات أدناه...</span>
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
