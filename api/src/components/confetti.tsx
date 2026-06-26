import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ════════════════════════════════════════════════════════════════
//  احتفال بالجزيئات (Confetti) — يُعرض عند الإنجازات
//  خفيف، أداء عالٍ، يختفي تلقائياً. ألوان متناسقة مع هوية التطبيق.
// ════════════════════════════════════════════════════════════════

const COLORS = ["#16B6C6", "#0DBFA0", "#22D3DB", "#f59e0b", "#fbbf24", "#34d399", "#60a5fa", "#f472b6"];
const SHAPES = ["circle", "square", "ribbon"] as const;

interface Piece {
  id: number;
  x: number;
  color: string;
  shape: typeof SHAPES[number];
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  drift: number;
}

function makePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    size: 7 + Math.random() * 9,
    delay: Math.random() * 0.35,
    duration: 1.8 + Math.random() * 1.4,
    rotation: Math.random() * 720 - 360,
    drift: Math.random() * 120 - 60,
  }));
}

export function Confetti({ count = 70, duration = 3200 }: { count?: number; duration?: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setPieces(makePieces(count));
    const t = setTimeout(() => setActive(false), duration);
    return () => clearTimeout(t);
  }, [count, duration]);

  if (!active) return null;

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100, overflow: "hidden" }}>
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-12vh", x: `${p.x}vw`, opacity: 1, rotate: 0 }}
          animate={{
            y: "112vh",
            x: `calc(${p.x}vw + ${p.drift}px)`,
            opacity: [1, 1, 0.9, 0],
            rotate: p.rotation,
          }}
          transition={{ duration: p.duration, delay: p.delay, ease: [0.2, 0.6, 0.5, 1] }}
          style={{
            position: "absolute",
            width: p.shape === "ribbon" ? p.size * 0.5 : p.size,
            height: p.shape === "ribbon" ? p.size * 1.6 : p.size,
            background: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "ribbon" ? 2 : 2,
            boxShadow: `0 0 6px ${p.color}80`,
          }}
        />
      ))}
    </div>
  );
}
