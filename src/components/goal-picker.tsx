import { useState } from "react";
import { motion } from "framer-motion";
import { GOALS, setGoal, type GoalId } from "@/lib/goals";

// ════════════════════════════════════════════════════════════════
// GoalPicker — شاشة اختيار هدف التعلّم (تظهر أول مرّة)
// تخصّص تجربة المتعلّم حسب هدفه.
// ════════════════════════════════════════════════════════════════

export function GoalPicker({ onDone }: { onDone: () => void }) {
  const [selected, setSelected] = useState<GoalId | null>(null);

  const confirm = () => {
    if (!selected) return;
    setGoal(selected);
    onDone();
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 95,
      background: "hsl(var(--background))",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "32px 20px", overflowY: "auto",
    }}>
      <div style={{ width: "100%", maxWidth: 440, margin: "auto 0" }}>
        {/* العنوان */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 52, marginBottom: 10 }}>🎯</div>
          <h1 style={{ fontSize: 25, fontWeight: 900, color: "hsl(var(--foreground))", marginBottom: 8 }}>
            ما هدفك من تعلّم الإنجليزية؟
          </h1>
          <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
            سنخصّص لك التجربة ونبرز ما يهمّك أكثر
          </p>
        </motion.div>

        {/* خيارات الأهداف */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
          {GOALS.map((g, i) => {
            const isSel = selected === g.id;
            return (
              <motion.button
                key={g.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(g.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "18px 18px", borderRadius: 18, cursor: "pointer",
                  background: isSel ? `${g.color}18` : "hsl(var(--card))",
                  border: isSel ? `2.5px solid ${g.color}` : "2px solid hsl(var(--border))",
                  boxShadow: isSel ? `0 6px 20px ${g.color}30` : "none",
                  transition: "all 0.2s",
                  textAlign: "right",
                }}>
                <div style={{
                  fontSize: 34, width: 56, height: 56, borderRadius: 14,
                  background: isSel ? g.color : `${g.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {g.emoji}
                </div>
                <div style={{ flex: 1, direction: "rtl" }}>
                  <div style={{ fontSize: 17, fontWeight: 800, color: isSel ? g.color : "hsl(var(--foreground))", marginBottom: 3 }}>
                    {g.title}
                  </div>
                  <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.5 }}>
                    {g.description}
                  </div>
                </div>
                {/* علامة الاختيار */}
                <div style={{
                  width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                  border: isSel ? "none" : "2px solid hsl(var(--border))",
                  background: isSel ? g.color : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 15, fontWeight: 900,
                }}>
                  {isSel ? "✓" : ""}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* زر التأكيد */}
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          onClick={confirm}
          disabled={!selected}
          style={{
            width: "100%", padding: "16px", borderRadius: 16,
            background: selected ? GOALS.find(g => g.id === selected)!.color : "hsl(var(--muted))",
            color: selected ? "#fff" : "hsl(var(--muted-foreground))",
            border: "none", fontWeight: 800, fontSize: 17,
            cursor: selected ? "pointer" : "default",
            boxShadow: selected ? `0 5px 0 ${GOALS.find(g => g.id === selected)!.color}99` : "none",
          }}>
          ابدأ رحلتي 🚀
        </motion.button>

        {/* تخطّي */}
        <button
          onClick={() => { setGoal("general"); onDone(); }}
          style={{
            width: "100%", marginTop: 14, background: "none", border: "none",
            color: "hsl(var(--muted-foreground))", fontSize: 14, cursor: "pointer",
          }}>
          لست متأكّداً، أرني كل شيء
        </button>
      </div>
    </div>
  );
}
