import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDailyChallenge, claimChallengeReward } from "@/lib/daily-challenge";

// ════════════════════════════════════════════════════════════════
// DailyChallengeCard — كرت التحدّي اليومي في الخارطة
// يعرض مهمة اليوم، التقدّم، وزر استلام المكافأة.
// ════════════════════════════════════════════════════════════════

export function DailyChallengeCard({ color = "#16B6C6" }: { color?: string }) {
  const [state, setState] = useState(() => getDailyChallenge());
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    // حدّث الحالة عند فتح الصفحة
    setState(getDailyChallenge());
  }, []);

  const pct = Math.min(100, Math.round((state.progress / state.challenge.target) * 100));
  const complete = state.progress >= state.challenge.target;

  const claim = () => {
    const reward = claimChallengeReward();
    if (reward > 0) {
      setShowReward(true);
      setState(getDailyChallenge());
      setTimeout(() => setShowReward(false), 2500);
    }
  };

  // لو استلم المكافأة — اعرض حالة مكتملة بسيطة
  if (state.claimed) {
    return (
      <div style={{
        background: "hsl(var(--card))", border: "1.5px solid hsl(var(--border))",
        borderRadius: 16, padding: "12px 16px", margin: "0 12px 12px",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <span style={{ fontSize: 22 }}>✅</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: "hsl(var(--muted-foreground))", flex: 1 }}>
          أكملت تحدّي اليوم! عُد غداً لتحدٍّ جديد
        </span>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        style={{
          background: complete
            ? `linear-gradient(135deg, ${color}, ${color}cc)`
            : "hsl(var(--card))",
          border: complete ? "none" : "1.5px solid hsl(var(--border))",
          borderRadius: 16, padding: "14px 16px", margin: "0 12px 12px",
          boxShadow: complete ? `0 6px 20px ${color}35` : "none",
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div style={{
            fontSize: 26, width: 44, height: 44, borderRadius: 12,
            background: complete ? "rgba(255,255,255,0.2)" : `${color}15`,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            {state.challenge.emoji}
          </div>
          <div style={{ flex: 1, direction: "rtl" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: complete ? "rgba(255,255,255,0.85)" : color, marginBottom: 1 }}>
              🎯 تحدّي اليوم
            </div>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: complete ? "#fff" : "hsl(var(--foreground))" }}>
              {state.challenge.title}
            </div>
          </div>
          <div style={{
            fontSize: 12, fontWeight: 800,
            color: complete ? "#fff" : "hsl(var(--muted-foreground))",
            background: complete ? "rgba(255,255,255,0.2)" : "hsl(var(--muted))",
            padding: "3px 10px", borderRadius: 12, flexShrink: 0,
          }}>
            +{state.challenge.reward} XP
          </div>
        </div>

        {/* شريط التقدّم */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ flex: 1, height: 8, background: complete ? "rgba(255,255,255,0.25)" : "hsl(var(--muted))", borderRadius: 4, overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }} animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ height: "100%", background: complete ? "#fff" : color, borderRadius: 4 }}
            />
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: complete ? "#fff" : "hsl(var(--muted-foreground))", minWidth: 38, textAlign: "left" }}>
            {state.progress}/{state.challenge.target}
          </span>
        </div>

        {/* زر استلام المكافأة */}
        {complete && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            onClick={claim}
            style={{
              width: "100%", marginTop: 12, padding: "11px",
              background: "#fff", color: color, border: "none",
              borderRadius: 12, fontWeight: 800, fontSize: 15, cursor: "pointer",
            }}>
            استلم مكافأتك 🎁
          </motion.button>
        )}
      </motion.div>

      {/* احتفال المكافأة */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 95,
              background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
            <motion.div
              initial={{ scale: 0.6, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              style={{
                background: "hsl(var(--card))", borderRadius: 24, padding: "32px 36px",
                textAlign: "center", border: `2px solid ${color}`,
              }}>
              <motion.div
                animate={{ rotate: [0, -12, 12, -12, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 0.7 }}
                style={{ fontSize: 64, marginBottom: 12 }}>
                🎁
              </motion.div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "hsl(var(--foreground))", marginBottom: 6 }}>
                أحسنت!
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color }}>
                +{state.challenge.reward} XP
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
