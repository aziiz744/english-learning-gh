import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/mascot";
import { ChevronRight } from "lucide-react";

const STEPS = [
  {
    title: "مرحباً بك في Owlio! 🎉",
    text: "أنا مرشدك في رحلة تعلم اللغة الإنجليزية. سنسير معاً من المستوى الصفر حتى الإتقان!",
  },
  {
    title: "كيف يعمل الموقع؟ 🗺️",
    text: "ستجد خارطة تعلم مقسمة إلى محطات. كل محطة تحتوي على 3 تدريبات تحصل منها على نجمة لكل تدريب ⭐",
  },
  {
    title: "النجوم والتحدي 🏆",
    text: "بعد جمع 3 نجوم في المحطة، يفتح لك التحدي! التحدي أصعب وبدون مساعدة — هل أنت مستعد؟",
  },
  {
    title: "ابدأ الآن! 🚀",
    text: "روح لخارطة التعلم واختر أول محطة. كل يوم درس واحد يصنع فرقاً كبيراً. أنا معك في كل خطوة!",
  },
];

export function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const seen = localStorage.getItem("welcome-seen");
    if (!seen) {
      setTimeout(() => setOpen(true), 1000);
    }
  }, []);

  function finish() {
    localStorage.setItem("welcome-seen", "1");
    setOpen(false);
  }

  function next() {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else finish();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-card border border-border rounded-2xl w-full max-w-sm p-6 shadow-2xl text-center"
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Mascot */}
            <div className="flex justify-center mb-4">
              <Mascot state={step === 3 ? "complete" : step === 0 ? "correct" : "idle"} className="w-28 h-28" />
            </div>

            {/* Step indicator */}
            <div className="flex justify-center gap-1.5 mb-4">
              {STEPS.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? "w-6 bg-primary" : "w-1.5 bg-muted"}`} />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-lg font-bold mb-3">{STEPS[step].title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{STEPS[step].text}</p>
              </motion.div>
            </AnimatePresence>

            <Button onClick={next} className="w-full gap-2">
              {step < STEPS.length - 1 ? (
                <><ChevronRight className="w-4 h-4" /> التالي</>
              ) : (
                "🚀 ابدأ الآن!"
              )}
            </Button>

            {step > 0 && (
              <button onClick={finish} className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors">
                تخطي
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
