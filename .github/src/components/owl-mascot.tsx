// ════════════════════════════════════════════════════════════════
//  Owlie — الماسكوت الرسمي لتطبيق "مسار الإنجليزية"
//  نظام جاهز لاستقبال 6 صور PNG شفافة (الوضعيات الرسمية المعتمدة)
//  ضع الصور الست في src/assets/owl/ بالأسماء التالية:
//    owl-idle.png       → Happy / Idle (واقف سعيد)
//    owl-wave.png       → Waving (يلوّح)
//    owl-think.png      → Thinking (يفكّر)
//    owl-celebrate.png  → Celebrating (يحتفل)
//    owl-excited.png    → Excited (متحمّس)
//    owl-read.png       → Reading (يقرأ كتاب)
// ════════════════════════════════════════════════════════════════
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import owlIdle from "@/assets/owl/owl-idle.png";
import owlWave from "@/assets/owl/owl-wave.png";
import owlThink from "@/assets/owl/owl-think.png";
import owlCelebrate from "@/assets/owl/owl-celebrate.png";
import owlExcited from "@/assets/owl/owl-excited.png";
import owlRead from "@/assets/owl/owl-read.png";

export type OwlState =
  | "idle" | "correct" | "wrong" | "celebrate"
  | "thinking" | "reading" | "welcome" | "auto";

const POSE_IMG = {
  idle: owlIdle,
  wave: owlWave,
  think: owlThink,
  celebrate: owlCelebrate,
  excited: owlExcited,
  read: owlRead,
} as const;
type PoseKey = keyof typeof POSE_IMG;

const AUTO_SEQUENCE: { pose: PoseKey; hold: number }[] = [
  { pose: "idle",      hold: 3800 },
  { pose: "wave",      hold: 2600 },
  { pose: "think",     hold: 3200 },
  { pose: "idle",      hold: 3400 },
  { pose: "read",      hold: 3600 },
  { pose: "excited",   hold: 2400 },
  { pose: "celebrate", hold: 2600 },
  { pose: "idle",      hold: 3800 },
];

export function OwlMascot({ state = "auto", size = 120 }: { state?: OwlState; size?: number }) {
  const [autoPose, setAutoPose] = useState<PoseKey>("idle");
  const idxRef = useRef(0);

  useEffect(() => {
    if (state !== "auto") return;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      const cur = AUTO_SEQUENCE[idxRef.current % AUTO_SEQUENCE.length];
      setAutoPose(cur.pose);
      idxRef.current++;
      timer = setTimeout(step, cur.hold);
    };
    step();
    return () => clearTimeout(timer);
  }, [state]);

  const poseKey: PoseKey =
    state === "auto"      ? autoPose :
    state === "correct"   ? "excited" :
    state === "celebrate" ? "celebrate" :
    state === "thinking"  ? "think" :
    state === "reading"   ? "read" :
    state === "welcome"   ? "wave" :
    state === "wrong"     ? "think" :
    "idle";

  return (
    <div style={{ width: size, height: size, position: "relative", display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={poseKey}
          src={POSE_IMG[poseKey]}
          alt="Owlie"
          initial={{ opacity: 0, scale: 0.92, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          draggable={false}
        />
      </AnimatePresence>
    </div>
  );
}
