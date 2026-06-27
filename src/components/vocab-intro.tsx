import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORD_GLOSSARY } from "@/lib/word-glossary";
import { trackWord } from "@/lib/srs";
import type { ExObj } from "@/lib/lesson-banks/types";

// ════════════════════════════════════════════════════════════════
// VocabIntro — شاشة "تعلّم قبل الاختبار"
// بطاقات تفاعلية (سحب يمين/يسار) تعرض كلمات الدرس الجديدة قبل التمارين.
// تُستخرج الكلمات تلقائياً من بيانات الدرس. اختيارية (زر تخطّي).
// ════════════════════════════════════════════════════════════════

export interface VocabCard {
  en: string;
  ar: string;
  emoji?: string;
  example?: string;
}

// ── استخراج الكلمات الجديدة من أسئلة الدرس (tier واحد) ──
export function extractVocab(exercises: ExObj[]): VocabCard[] {
  const seen = new Set<string>();
  const cards: VocabCard[] = [];

  const add = (en: string, ar: string, emoji?: string, example?: string) => {
    const key = en.trim().toLowerCase();
    if (!key || seen.has(key) || key.length > 24) return;
    seen.add(key);
    cards.push({ en: en.trim(), ar: ar.trim(), emoji, example });
  };

  for (const ex of exercises) {
    // 1) matching pairs — أفضل مصدر (en + ar جاهز)
    if (ex.type === "matching" && ex.pairs) {
      for (const p of ex.pairs) add(p.en, p.ar);
    }
    // 2) picture_match — الكلمة + إيموجي من الخيارات
    if (ex.type === "picture_match" && ex.word && ex.pictureOptions) {
      const opt = ex.pictureOptions.find(o => o.label === ex.correctAnswer);
      const ar = WORD_GLOSSARY[ex.word.toLowerCase()] ?? "";
      add(ex.word, ar, opt?.emoji);
    }
    // 3) translate — عربي ↔ إنجليزي (كلمة مفردة فقط)
    if (ex.type === "translate" && ex.arabic && ex.correctAnswer && !ex.correctAnswer.includes(" ")) {
      add(ex.correctAnswer, ex.arabic);
    }
  }

  // أكمل المعاني الناقصة من القاموس
  for (const c of cards) {
    if (!c.ar) c.ar = WORD_GLOSSARY[c.en.toLowerCase()] ?? "";
  }

  // أبقِ فقط البطاقات اللي لها معنى عربي
  return cards.filter(c => c.ar).slice(0, 10);
}

// ── نطق الكلمة (TTS مجاني من المتصفّح) ──
function speakWord(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

export function VocabIntro({
  cards, color, onDone, onSkip,
}: {
  cards: VocabCard[];
  color: string;
  onDone: () => void;
  onSkip: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0); // اتجاه السحب للأنيميشن

  // سجّل كل الكلمات في نظام المراجعة المتباعدة (مرّة عند الفتح)
  useMemo(() => {
    cards.forEach(c => trackWord({ en: c.en, ar: c.ar, emoji: c.emoji }));
  }, []);

  const card = cards[idx];
  const isLast = idx === cards.length - 1;

  const next = useCallback(() => {
    if (isLast) { onDone(); return; }
    setDir(1); setIdx(i => i + 1);
  }, [isLast, onDone]);

  const prev = useCallback(() => {
    if (idx === 0) return;
    setDir(-1); setIdx(i => i - 1);
  }, [idx]);

  if (!card) { onSkip(); return null; }

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      width: "100%", maxWidth: 440, margin: "0 auto", padding: "8px 16px",
    }}>
      {/* العنوان */}
      <div style={{ textAlign: "center", marginBottom: 4 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, color: "hsl(var(--foreground))" }}>
          📚 تعلّم كلمات الدرس
        </h2>
        <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>
          اسحب لتتصفّح • اضغط 🔊 لتسمع النطق
        </p>
      </div>

      {/* مؤشّر التقدّم */}
      <div style={{ display: "flex", gap: 5, margin: "14px 0 18px" }}>
        {cards.map((_, i) => (
          <div key={i} style={{
            width: i === idx ? 22 : 7, height: 7, borderRadius: 4,
            background: i === idx ? color : i < idx ? `${color}80` : "hsl(var(--muted))",
            transition: "all 0.3s",
          }}/>
        ))}
      </div>

      {/* البطاقة */}
      <div style={{ position: "relative", width: "100%", height: 320, marginBottom: 20 }}>
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: dir > 0 ? 120 : -120, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dir > 0 ? -120 : 120, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
            style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 14, padding: 28,
              background: "hsl(var(--card))",
              border: `2px solid ${color}40`,
              borderRadius: 28,
              boxShadow: `0 12px 40px ${color}25, 0 2px 0 rgba(255,255,255,0.04) inset`,
              cursor: "grab",
            }}>
            {/* إيموجي */}
            {card.emoji && (
              <div style={{ fontSize: 72, lineHeight: 1 }}>{card.emoji}</div>
            )}
            {/* الكلمة الإنجليزية */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 34, fontWeight: 900, color: color, letterSpacing: "0.01em" }}>
                {card.en}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); speakWord(card.en); }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 42, height: 42, borderRadius: "50%",
                  background: `${color}1a`, border: `1.5px solid ${color}50`,
                  cursor: "pointer", fontSize: 20,
                }}
                aria-label="استمع للنطق">
                🔊
              </button>
            </div>
            {/* المعنى العربي */}
            <div style={{
              fontSize: 24, fontWeight: 800, color: "hsl(var(--foreground))",
              direction: "rtl",
            }}>
              {card.ar}
            </div>
            {/* مثال */}
            {card.example && (
              <div style={{
                fontSize: 14, color: "hsl(var(--muted-foreground))",
                fontStyle: "italic", textAlign: "center", marginTop: 4,
              }}>
                "{card.example}"
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* أزرار التنقّل */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%" }}>
        <button
          onClick={prev}
          disabled={idx === 0}
          style={{
            width: 52, height: 52, borderRadius: 16,
            background: "hsl(var(--muted))", border: "none",
            fontSize: 22, cursor: idx === 0 ? "default" : "pointer",
            opacity: idx === 0 ? 0.35 : 1,
            color: "hsl(var(--foreground))",
          }}
          aria-label="السابق">
          ›
        </button>

        <button
          onClick={next}
          style={{
            flex: 1, height: 52, borderRadius: 16,
            background: color, border: "none",
            fontSize: 16, fontWeight: 800, color: "#fff",
            cursor: "pointer",
            boxShadow: `0 4px 16px ${color}50`,
          }}>
          {isLast ? "فهمت، ابدأ التمارين 🚀" : "التالي"}
        </button>

        <button
          onClick={next}
          disabled={idx === 0}
          style={{
            width: 52, height: 52, borderRadius: 16,
            background: "hsl(var(--muted))", border: "none",
            fontSize: 22, cursor: "pointer",
            opacity: 1,
            color: "hsl(var(--foreground))",
          }}
          aria-label="التالي">
          ‹
        </button>
      </div>

      {/* زر التخطّي */}
      <button
        onClick={onSkip}
        style={{
          marginTop: 16, background: "none", border: "none",
          color: "hsl(var(--muted-foreground))", fontSize: 14,
          cursor: "pointer", textDecoration: "underline",
        }}>
        تخطّي والذهاب للتمارين مباشرة
      </button>
    </div>
  );
}
