// ── شخصية البومة "English Spark" — الصورة الأصلية + حركات 360 احترافية ──
import { motion } from "framer-motion";
import owlImg from "@/assets/owl-mascot.png";

export type OwlState = "idle" | "correct" | "wrong" | "celebrate" | "thinking" | "spin";

export function OwlMascot({ state = "idle", size = 120 }: { state?: OwlState; size?: number }) {
  // حركات احترافية ثلاثية الأبعاد لكل حالة
  const anim: any =
    state === "correct" ? {
      // قفزة مع دوران كامل 360 + تكبير
      y: [0, -28, 0],
      rotateY: [0, 360],
      scale: [1, 1.15, 1],
    } :
    state === "celebrate" ? {
      // احتفال: دورتان كاملتان + قفز + تمايل
      rotateY: [0, 360, 720],
      y: [0, -30, 0, -18, 0],
      scale: [1, 1.12, 1, 1.08, 1],
    } :
    state === "wrong" ? {
      // اهتزاز يمين/يسار + ميلان
      x: [0, -10, 10, -10, 10, 0],
      rotate: [0, -6, 6, -6, 6, 0],
    } :
    state === "thinking" ? {
      // تمايل بـ perspective + ميلان رأس
      rotateY: [0, 18, -18, 0],
      rotate: [0, -4, 4, 0],
    } :
    state === "spin" ? {
      // دوران مستمر 360
      rotateY: [0, 360],
    } :
    {
      // idle: طفو ناعم + تمايل خفيف ثلاثي الأبعاد
      y: [0, -10, 0],
      rotateY: [0, 8, -8, 0],
      rotate: [0, 1.5, -1.5, 0],
    };

  const trans: any =
    state === "correct"   ? { duration: 0.9, ease: "easeOut" } :
    state === "celebrate" ? { duration: 1.8, ease: "easeInOut" } :
    state === "wrong"     ? { duration: 0.5, ease: "easeInOut" } :
    state === "thinking"  ? { repeat: Infinity, duration: 3, ease: "easeInOut" } :
    state === "spin"      ? { repeat: Infinity, duration: 1.6, ease: "linear" } :
    { repeat: Infinity, duration: 4, ease: "easeInOut" };

  return (
    <div style={{ width: size, height: size, perspective: 600, display: "inline-block" }}>
      <motion.div
        animate={anim}
        transition={trans}
        style={{
          width: "100%", height: "100%",
          transformStyle: "preserve-3d",
          display: "flex", alignItems: "center", justifyContent: "center",
          filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.18))",
        }}>
        <img src={owlImg} alt="English Spark" draggable={false}
          style={{ width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none", backfaceVisibility: "hidden" }}/>
      </motion.div>
    </div>
  );
}
