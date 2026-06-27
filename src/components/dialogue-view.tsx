import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dialogue } from "@/lib/dialogues";

// ════════════════════════════════════════════════════════════════
// DialogueView — عرض حوار واقعي سطراً بسطر
// الطالب يكشف السطور تدريجياً، يسمع كل سطر، يشوف الترجمة.
// يعلّم كيف تُستخدم كلمات الوحدة في موقف حقيقي.
// ════════════════════════════════════════════════════════════════

function speakLine(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

export function DialogueView({
  dialogue, color, onDone,
}: {
  dialogue: Dialogue;
  color: string;
  onDone: () => void;
}) {
  const [shown, setShown] = useState(1); // كم سطر ظاهر
  const total = dialogue.lines.length;
  const allShown = shown >= total;

  const showNext = useCallback(() => {
    if (allShown) { onDone(); return; }
    const nextLine = dialogue.lines[shown];
    if (nextLine) speakLine(nextLine.en);
    setShown(s => s + 1);
  }, [allShown, shown, dialogue.lines, onDone]);

  return (
    <div style={{ width: "100%", maxWidth: 460, margin: "0 auto", padding: "8px 16px", display: "flex", flexDirection: "column", minHeight: "60vh" }}>
      {/* رأس المشهد */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 44, marginBottom: 6 }}>{dialogue.emoji}</div>
        <h2 style={{ fontSize: 21, fontWeight: 900, color: "hsl(var(--foreground))", marginBottom: 4 }}>
          {dialogue.title}
        </h2>
        <p style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", direction: "rtl" }}>
          {dialogue.scene}
        </p>
        <div style={{ display: "inline-block", marginTop: 8, background: `${color}15`, color, fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 20 }}>
          💬 محادثة واقعية
        </div>
      </div>

      {/* فقاعات الحوار */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
        <AnimatePresence>
          {dialogue.lines.slice(0, shown).map((line, i) => {
            const isYou = line.speaker === "b";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, x: isYou ? 20 : -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                style={{
                  alignSelf: isYou ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  display: "flex", flexDirection: "column",
                  alignItems: isYou ? "flex-end" : "flex-start",
                }}>
                {/* اسم المتحدّث */}
                <span style={{ fontSize: 11, fontWeight: 700, color: "hsl(var(--muted-foreground))", margin: "0 8px 3px" }}>
                  {isYou ? "أنت" : dialogue.speakerA}
                </span>
                {/* الفقاعة */}
                <div style={{
                  background: isYou ? color : "hsl(var(--card))",
                  color: isYou ? "#fff" : "hsl(var(--foreground))",
                  border: isYou ? "none" : "1.5px solid hsl(var(--border))",
                  borderRadius: 18,
                  borderBottomRightRadius: isYou ? 4 : 18,
                  borderBottomLeftRadius: isYou ? 18 : 4,
                  padding: "11px 15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, direction: "ltr" }}>{line.en}</span>
                    <button
                      onClick={() => speakLine(line.en)}
                      style={{
                        background: isYou ? "rgba(255,255,255,0.2)" : `${color}1a`,
                        border: "none", borderRadius: "50%", width: 28, height: 28,
                        cursor: "pointer", fontSize: 13, flexShrink: 0,
                      }}
                      aria-label="استمع">🔊</button>
                  </div>
                  {/* الترجمة */}
                  <div style={{
                    fontSize: 13, marginTop: 5, direction: "rtl",
                    color: isYou ? "rgba(255,255,255,0.85)" : "hsl(var(--muted-foreground))",
                  }}>
                    {line.ar}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* زر المتابعة */}
      <button
        onClick={showNext}
        style={{
          width: "100%", padding: "15px", borderRadius: 16,
          background: color, color: "#fff", border: "none",
          fontWeight: 800, fontSize: 16, cursor: "pointer",
          boxShadow: `0 4px 0 ${color}99`,
          position: "sticky", bottom: 12,
        }}>
        {allShown ? "تعلّمت الحوار! ✓" : "السطر التالي ←"}
      </button>
    </div>
  );
}
