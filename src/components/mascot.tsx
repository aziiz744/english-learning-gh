import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import owlIdle from "@/assets/owl/owl-idle.png";
import owlWave from "@/assets/owl/owl-wave.png";
import owlThink from "@/assets/owl/owl-think.png";
import owlCelebrate from "@/assets/owl/owl-celebrate.png";
import owlExcited from "@/assets/owl/owl-excited.png";
import owlRead from "@/assets/owl/owl-read.png";

// خريطة حالات الماسكوت → صور Owlie الرسمية
const OWLIE_IMG: Record<string, string> = {
  idle: owlIdle,
  thinking: owlThink,
  correct: owlExcited,
  wrong: owlThink,
  combo: owlCelebrate,
  combo5: owlCelebrate,
  complete: owlCelebrate,
};

export type MascotState = "idle" | "thinking" | "correct" | "wrong" | "combo" | "combo5" | "complete";

interface Config {
  mouth: string;
  brow1: string;
  brow2: string;
  pupilScale: number;
  leftPupilX: number;
  rightPupilX: number;
  pupilY: number;
  bubble: string | null;
  bubbleColor: string;
  armRaise: boolean;
}

const STATES: Record<MascotState, Config> = {
  idle: {
    mouth:   "M 48 74 Q 60 82 72 74",
    brow1:   "M 33 46 Q 43 42 53 46",
    brow2:   "M 67 46 Q 77 42 87 46",
    pupilScale: 1, leftPupilX: 43, rightPupilX: 77, pupilY: 59,
    bubble: null, bubbleColor: "", armRaise: false,
  },
  thinking: {
    mouth:   "M 51 76 Q 60 76 69 76",
    brow1:   "M 33 46 Q 43 42 53 46",
    brow2:   "M 67 43 Q 77 40 87 43",
    pupilScale: 0.9, leftPupilX: 41, rightPupilX: 75, pupilY: 59,
    bubble: "فكّر جيداً… 🤔", bubbleColor: "bg-muted border-border", armRaise: false,
  },
  correct: {
    mouth:   "M 44 71 Q 60 84 76 71",
    brow1:   "M 32 43 Q 43 39 54 43",
    brow2:   "M 66 43 Q 77 39 88 43",
    pupilScale: 1.15, leftPupilX: 43, rightPupilX: 77, pupilY: 57,
    bubble: "رائع جداً! 🎉", bubbleColor: "bg-green-500/10 border-green-500/30 text-green-400", armRaise: false,
  },
  wrong: {
    mouth:   "M 48 79 Q 60 71 72 79",
    brow1:   "M 33 45 Q 43 49 53 45",
    brow2:   "M 67 45 Q 77 49 87 45",
    pupilScale: 0.8, leftPupilX: 43, rightPupilX: 77, pupilY: 61,
    bubble: "لا بأس، حاول مرة أخرى 💪", bubbleColor: "bg-red-500/10 border-red-500/30 text-red-400", armRaise: false,
  },
  combo: {
    mouth:   "M 42 70 Q 60 86 78 70",
    brow1:   "M 31 41 Q 43 37 55 41",
    brow2:   "M 65 41 Q 77 37 89 41",
    pupilScale: 1.25, leftPupilX: 43, rightPupilX: 77, pupilY: 58,
    bubble: "سلسلة رائعة! 🔥", bubbleColor: "bg-amber-500/10 border-amber-500/30 text-amber-400", armRaise: true,
  },
  combo5: {
    mouth:   "M 38 68 Q 60 90 82 68",
    brow1:   "M 30 39 Q 43 34 56 39",
    brow2:   "M 64 39 Q 77 34 90 39",
    pupilScale: 1.35, leftPupilX: 43, rightPupilX: 77, pupilY: 56,
    bubble: "5 إجابات صحيحة متتالية! أنت رائع! 🌟🔥", bubbleColor: "bg-yellow-500/20 border-yellow-400/50 text-yellow-300", armRaise: true,
  },
  complete: {
    mouth:   "M 41 69 Q 60 87 79 69",
    brow1:   "M 31 41 Q 43 37 55 41",
    brow2:   "M 65 41 Q 77 37 89 41",
    pupilScale: 1.2, leftPupilX: 43, rightPupilX: 77, pupilY: 56,
    bubble: "أنت بطل! 🏆", bubbleColor: "bg-primary/10 border-primary/30 text-primary", armRaise: true,
  },
};

type AnimDef = any;
const BODY_ANIMS: Record<MascotState, AnimDef> = {
  idle:     { y: [0, -4, 0],                                  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
  thinking: { rotate: [-2, 2, -2],                            transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } },
  correct:  { y: [0, -22, -4, -16, 0],                        transition: { duration: 0.65, ease: "easeOut" } },
  wrong:    { x: [0, -10, 10, -8, 8, -4, 4, 0],              transition: { duration: 0.5,  ease: "easeOut" } },
  combo:    { y: [0, -18, 0, -12, 0], scale: [1, 1.08, 1, 1.05, 1], transition: { duration: 0.7 } },
  combo5:   { y: [0, -30, -5, -25, 0, -15, 0], scale: [1, 1.15, 1, 1.1, 1], rotate: [-8, 8, -5, 5, 0], transition: { duration: 1.2 } },
  complete: { y: [0, -26, -8, -20, 0], rotate: [-5, 5, -3, 3, 0], scale: [1, 1.12, 1], transition: { duration: 0.85 } },
};

export function Mascot({ state, className }: { state: MascotState; className?: string }) {
  const cfg = STATES[state];

  return (
    <div className={cn("flex flex-col items-center gap-2 relative", className)}>
      {/* Speech bubble */}
      <AnimatePresence>
        {cfg.bubble && (
          <motion.div
            key={state + "-bubble"}
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.22 }}
            className={cn(
              "relative text-xs font-bold px-3 py-2 rounded-2xl border shadow-lg whitespace-nowrap",
              cfg.bubbleColor || "bg-muted border-border text-foreground"
            )}
          >
            {cfg.bubble}
            <span className="absolute -bottom-2 right-1/2 translate-x-1/2 w-0 h-0
              border-l-[6px] border-r-[6px] border-t-[8px]
              border-l-transparent border-r-transparent border-t-current opacity-25" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Owlie الماسكوت الرسمي */}
      <motion.div
        key={state}
        animate={BODY_ANIMS[state]}
        style={{ originX: "50%", originY: "100%" }}
        className="w-full h-full flex items-end justify-center"
      >
        <img
          src={OWLIE_IMG[state] || OWLIE_IMG.idle}
          alt="Owlie"
          className="w-full h-full"
          style={{ objectFit: "contain", display: "block" }}
          draggable={false}
          decoding="async"
        />
      </motion.div>
    </div>
  );
}