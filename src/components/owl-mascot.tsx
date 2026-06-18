// ── شخصية البومة "English Spark" — 6 وضعيات تتبدّل بسلاسة (تلاشي ناعم فقط) ──
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import owlIdle from "@/assets/owl/owl-idle.png";
import owlHop from "@/assets/owl/owl-hop.png";
import owlWing from "@/assets/owl/owl-wing.png";
import owlCelebrate from "@/assets/owl/owl-celebrate.png";
import owlFlight from "@/assets/owl/owl-flight.png";
import owlThink from "@/assets/owl/owl-think.png";

export type OwlState = "idle" | "correct" | "wrong" | "celebrate" | "thinking" | "auto";

const POSE_IMG = {
  idle: owlIdle, hop: owlHop, wing: owlWing,
  celebrate: owlCelebrate, flight: owlFlight, think: owlThink,
} as const;
type PoseKey = keyof typeof POSE_IMG;

// تسلسل عفوي للوضعيات (كأنها تعيش)
const AUTO_SEQUENCE: { pose: PoseKey; hold: number }[] = [
  { pose: "idle",      hold: 3800 },
  { pose: "wing",      hold: 2800 },
  { pose: "think",     hold: 3200 },
  { pose: "idle",      hold: 3400 },
  { pose: "hop",       hold: 2400 },
  { pose: "flight",    hold: 3000 },
  { pose: "celebrate", hold: 2600 },
  { pose: "idle",      hold: 3800 },
];

export function OwlMascot({ state = "auto", size = 120 }: { state?: OwlState; size?: number }) {
  const [autoPose, setAutoPose] = useState<PoseKey>("idle");
  const idxRef = useRef(0);

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

  const poseKey: PoseKey =
    state === "auto"      ? autoPose :
    state === "correct"   ? "hop" :
    state === "celebrate" ? "celebrate" :
    state === "thinking"  ? "think" :
    state === "wrong"     ? "wing" :
    "idle";

  return (
    <div style={{ width: size, height: size, position: "relative", display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={poseKey}
          src={POSE_IMG[poseKey]}
          alt="English Spark"
          draggable={false}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{
            width: "100%", height: "100%", objectFit: "contain",
            position: "absolute", inset: 0, pointerEvents: "none",
            filter: "drop-shadow(0 5px 8px rgba(0,0,0,0.16))",
          }}/>
      </AnimatePresence>
    </div>
  );
}
