// ── شخصية البومة "English Spark" — 6 وضعيات تتبدّل تلقائياً كأنها حية ──
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import owlIdle from "@/assets/owl/owl-idle.png";
import owlHop from "@/assets/owl/owl-hop.png";
import owlWing from "@/assets/owl/owl-wing.png";
import owlCelebrate from "@/assets/owl/owl-celebrate.png";
import owlFlight from "@/assets/owl/owl-flight.png";
import owlThink from "@/assets/owl/owl-think.png";

export type OwlState = "idle" | "correct" | "wrong" | "celebrate" | "thinking" | "auto";

// كل وضعية: الصورة + حركة مصاحبة
const POSES = {
  idle:      { img: owlIdle,      anim: { y: [0, -8, 0], rotate: [0, 1.5, -1.5, 0] },       dur: 3.2 },
  hop:       { img: owlHop,       anim: { y: [0, -22, 0], rotate: [0, -5, 5, 0] },           dur: 1.1 },
  wing:      { img: owlWing,      anim: { rotate: [0, -3, 3, -3, 0], y: [0, -4, 0] },        dur: 1.6 },
  celebrate: { img: owlCelebrate, anim: { y: [0, -18, 0, -10, 0], rotate: [0, -7, 7, 0] },  dur: 1.4 },
  flight:    { img: owlFlight,    anim: { x: [0, 8, -8, 0], y: [0, -6, 0] },                 dur: 2.0 },
  think:     { img: owlThink,     anim: { rotate: [0, -4, 4, 0], x: [0, 2, -2, 0] },         dur: 2.6 },
} as const;

type PoseKey = keyof typeof POSES;

// تسلسل عفوي للوضعيات (كأنها تعيش)
const AUTO_SEQUENCE: { pose: PoseKey; hold: number }[] = [
  { pose: "idle",      hold: 4000 },
  { pose: "wing",      hold: 2600 },
  { pose: "think",     hold: 3000 },
  { pose: "idle",      hold: 3500 },
  { pose: "hop",       hold: 1800 },
  { pose: "flight",    hold: 2800 },
  { pose: "celebrate", hold: 2400 },
  { pose: "idle",      hold: 4000 },
];

export function OwlMascot({ state = "auto", size = 120 }: { state?: OwlState; size?: number }) {
  const [autoPose, setAutoPose] = useState<PoseKey>("idle");
  const idxRef = useRef(0);

  // التبديل التلقائي بين الوضعيات (فقط في وضع auto)
  useEffect(() => {
    if (state !== "auto") return;
    let timer: any;
    const step = () => {
      const cur = AUTO_SEQUENCE[idxRef.current % AUTO_SEQUENCE.length];
      setAutoPose(cur.pose);
      idxRef.current++;
      timer = setTimeout(step, cur.hold);
    };
    step();
    return () => clearTimeout(timer);
  }, [state]);

  // تحديد الوضعية حسب الحالة
  const poseKey: PoseKey =
    state === "auto"      ? autoPose :
    state === "correct"   ? "hop" :
    state === "celebrate" ? "celebrate" :
    state === "thinking"  ? "think" :
    state === "wrong"     ? "wing" :
    "idle";

  const pose = POSES[poseKey];

  return (
    <div style={{ width: size, height: size, position: "relative", display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={poseKey}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
          <motion.div
            animate={pose.anim}
            transition={{ repeat: Infinity, duration: pose.dur, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%", filter: "drop-shadow(0 5px 8px rgba(0,0,0,0.16))" }}>
            <img src={pose.img} alt="English Spark" draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none" }}/>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
