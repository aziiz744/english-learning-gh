import { useState, useEffect } from "react";
import { useParams } from "wouter";
import { Layout } from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { getLessonMiniExercises } from "@/lib/lesson-exercises";
import type { ExObj } from "@/lib/lesson-exercises";

// خريطة: lesson ID → عنوان الدرس في bank + رقم الـ tier
const LESSON_MAP: Record<string, { title: string; tier: 0|1|2|3; unitTitle: string; emoji: string }> = {
  "drinks-1": { title: "الكلمات الأساسية", tier: 0, unitTitle: "قدّم واقبل المشروبات", emoji: "☕" },
  "drinks-2": { title: "كلمات جديدة",      tier: 1, unitTitle: "قدّم واقبل المشروبات", emoji: "☕" },
  "drinks-3": { title: "جمل كاملة",        tier: 2, unitTitle: "قدّم واقبل المشروبات", emoji: "☕" },
  "drinks-c": { title: "تحدي الوحدة",      tier: 3, unitTitle: "قدّم واقبل المشروبات", emoji: "🏆" },
};

function speakText(text: string) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

// ── Exercise components ────────────────────────────────────────────────────
function WordOrderQ({ ex, onAnswer }: { ex: ExObj; onAnswer: (correct: boolean) => void }) {
  const words = ex.sentence!.split(" ").sort(() => Math.random() - 0.5);
  const [selected, setSelected] = useState<string[]>([]);
  const [remaining, setRemaining] = useState(words);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const addWord = (w: string, i: number) => {
    if (submitted) return;
    setSelected(s => [...s, w]);
    setRemaining(r => r.filter((_, idx) => idx !== i));
  };
  const removeWord = (i: number) => {
    if (submitted) return;
    setRemaining(r => [...r, selected[i]]);
    setSelected(s => s.filter((_, idx) => idx !== i));
  };
  const submit = () => {
    const ans = selected.join(" ");
    const ok = ans === ex.correctAnswer;
    setCorrect(ok);
    setSubmitted(true);
    setTimeout(() => onAnswer(ok), 1200);
  };

  return (
    <div>
      {/* Answer area */}
      <div style={{ minHeight: 52, background: "hsl(var(--background))", border: "2px solid hsl(var(--border))", borderRadius: 14, padding: "10px 14px", display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        {selected.map((w, i) => (
          <button key={i} onClick={() => removeWord(i)} style={{ background: "hsl(var(--primary))", color: "white", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>{w}</button>
        ))}
      </div>
      {/* Word bank */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {remaining.map((w, i) => (
          <button key={i} onClick={() => addWord(w, i)} style={{ background: "hsl(var(--card))", border: "2px solid hsl(var(--border))", borderRadius: 8, padding: "6px 12px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>{w}</button>
        ))}
      </div>
      {!submitted && selected.length > 0 && (
        <button onClick={submit} style={{ width: "100%", padding: 14, background: "hsl(var(--primary))", color: "white", border: "none", borderRadius: 14, fontWeight: 800, fontSize: 16, cursor: "pointer" }}>تحقق</button>
      )}
      {submitted && (
        <div style={{ padding: 14, borderRadius: 14, background: correct ? "#16a34a20" : "#dc262620", border: `2px solid ${correct ? "#16a34a" : "#dc2626"}`, textAlign: "center" }}>
          <div style={{ fontSize: 20, marginBottom: 4 }}>{correct ? "✅ ممتاز!" : "❌ حاول مجدداً"}</div>
          <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))" }}>{ex.explanation}</div>
        </div>
      )}
    </div>
  );
}

function TranslateQ({ ex, onAnswer }: { ex: ExObj; onAnswer: (correct: boolean) => void }) {
  const [picked, setPicked] = useState<string | null>(null);
  const opts = ex.options ?? [];

  const choose = (o: string) => {
    if (picked) return;
    setPicked(o);
    const ok = o === ex.correctAnswer;
    setTimeout(() => onAnswer(ok), 1000);
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: 22, fontWeight: 900, marginBottom: 20, direction: "rtl" }}>{ex.arabic}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {opts.map(o => {
          const isCorrect = o === ex.correctAnswer;
          const isPicked = o === picked;
          let bg = "hsl(var(--card))";
          let border = "2px solid hsl(var(--border))";
          if (isPicked) { bg = isCorrect ? "#16a34a20" : "#dc262620"; border = `2px solid ${isCorrect ? "#16a34a" : "#dc2626"}`; }
          else if (picked && isCorrect) { bg = "#16a34a20"; border = "2px solid #16a34a"; }
          return (
            <button key={o} onClick={() => choose(o)} style={{ padding: "13px 16px", background: bg, border, borderRadius: 14, fontSize: 15, fontWeight: 700, cursor: picked ? "default" : "pointer", textAlign: "right", direction: "ltr" }}>{o}</button>
          );
        })}
      </div>
      {picked && <div style={{ marginTop: 12, fontSize: 13, color: "hsl(var(--muted-foreground))", textAlign: "center", direction: "rtl" }}>{ex.explanation}</div>}
    </div>
  );
}

function ListenSelectQ({ ex, onAnswer }: { ex: ExObj; onAnswer: (correct: boolean) => void }) {
  const [picked, setPicked] = useState<string | null>(null);
  const opts = ex.options ?? [];

  useEffect(() => { speakText(ex.listenSentence!); }, []);

  const choose = (o: string) => {
    if (picked) return;
    setPicked(o);
    const ok = o === ex.correctAnswer;
    setTimeout(() => onAnswer(ok), 1000);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <button onClick={() => speakText(ex.listenSentence!)} style={{ width: 70, height: 70, borderRadius: "50%", background: "hsl(var(--primary))", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </button>
        <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))" }}>اضغط للاستماع مجدداً</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {opts.map(o => {
          const isCorrect = o === ex.correctAnswer;
          const isPicked = o === picked;
          let bg = "hsl(var(--card))";
          let border = "2px solid hsl(var(--border))";
          if (isPicked) { bg = isCorrect ? "#16a34a20" : "#dc262620"; border = `2px solid ${isCorrect ? "#16a34a" : "#dc2626"}`; }
          else if (picked && isCorrect) { bg = "#16a34a20"; border = "2px solid #16a34a"; }
          return (
            <button key={o} onClick={() => choose(o)} style={{ padding: "13px 16px", background: bg, border, borderRadius: 14, fontSize: 15, fontWeight: 700, cursor: picked ? "default" : "pointer", direction: "ltr" }}>{o}</button>
          );
        })}
      </div>
      {picked && <div style={{ marginTop: 12, fontSize: 13, color: "hsl(var(--muted-foreground))", textAlign: "center", direction: "rtl" }}>{ex.explanation}</div>}
    </div>
  );
}

function PictureMatchQ({ ex, onAnswer }: { ex: ExObj; onAnswer: (correct: boolean) => void }) {
  const [picked, setPicked] = useState<string | null>(null);
  const opts = ex.pictureOptions ?? [];

  const choose = (label: string) => {
    if (picked) return;
    setPicked(label);
    const ok = label === ex.correctAnswer;
    setTimeout(() => onAnswer(ok), 1000);
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: 22, fontWeight: 900, marginBottom: 20, direction: "ltr" }}>{ex.word}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {opts.map(o => {
          const isCorrect = o.label === ex.correctAnswer;
          const isPicked = o.label === picked;
          let bg = "hsl(var(--card))";
          let border = "2px solid hsl(var(--border))";
          if (isPicked) { bg = isCorrect ? "#16a34a20" : "#dc262620"; border = `2px solid ${isCorrect ? "#16a34a" : "#dc2626"}`; }
          else if (picked && isCorrect) { bg = "#16a34a20"; border = "2px solid #16a34a"; }
          return (
            <button key={o.label} onClick={() => choose(o.label)} style={{ padding: "20px 10px", background: bg, border, borderRadius: 16, cursor: picked ? "default" : "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 44 }}>{o.emoji}</span>
              <span style={{ fontSize: 13, fontWeight: 700, direction: "ltr" }}>{o.label}</span>
            </button>
          );
        })}
      </div>
      {picked && <div style={{ marginTop: 12, fontSize: 13, color: "hsl(var(--muted-foreground))", textAlign: "center", direction: "rtl" }}>{ex.explanation}</div>}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function UnitLesson() {
  const { id } = useParams<{ id: string }>();
  const meta = LESSON_MAP[id ?? ""];

  const [exercises, setExercises] = useState<ExObj[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!meta) return;
    const exs = getLessonMiniExercises(meta.title, 7, meta.tier);
    setExercises(exs);
  }, [id]);

  if (!meta) return (
    <Layout>
      <div style={{ textAlign: "center", padding: 40 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>😕</div>
        <h2>الدرس غير موجود</h2>
        <button onClick={() => history.back()} style={{ padding: "10px 24px", background: "hsl(var(--primary))", color: "white", border: "none", borderRadius: 12, fontWeight: 700, cursor: "pointer", marginTop: 16 }}>رجوع</button>
      </div>
    </Layout>
  );

  const ex = exercises[current];
  const progress = exercises.length ? (current / exercises.length) * 100 : 0;

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(s => s + 1);
    if (current + 1 >= exercises.length) {
      setDone(true);
    } else {
      setCurrent(c => c + 1);
    }
  };

  if (done) return (
    <Layout>
      <div style={{ maxWidth: 400, margin: "0 auto", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 72, marginBottom: 16 }}>{score >= exercises.length * 0.7 ? "🏆" : "📚"}</div>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>{score >= exercises.length * 0.7 ? "أحسنت!" : "واصل التدريب!"}</h2>
        <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: 24 }}>
          أجبت على {score} من {exercises.length} أسئلة بشكل صحيح
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => { setCurrent(0); setScore(0); setDone(false); }} style={{ flex: 1, padding: 14, background: "hsl(var(--card))", border: "2px solid hsl(var(--border))", borderRadius: 14, fontWeight: 800, fontSize: 15, cursor: "pointer" }}>أعد المحاولة</button>
          <button onClick={() => history.back()} style={{ flex: 1, padding: 14, background: "hsl(var(--primary))", color: "white", border: "none", borderRadius: 14, fontWeight: 800, fontSize: 15, cursor: "pointer" }}>رجوع للخارطة</button>
        </div>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div style={{ maxWidth: 420, margin: "0 auto", padding: "16px 16px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={() => history.back()} style={{ width: 36, height: 36, borderRadius: "50%", background: "hsl(var(--card))", border: "2px solid hsl(var(--border))", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>✕</button>
          <div style={{ flex: 1 }}>
            <div style={{ height: 10, background: "hsl(var(--muted))", borderRadius: 10, overflow: "hidden" }}>
              <motion.div animate={{ width: `${progress}%` }} style={{ height: "100%", background: "hsl(var(--primary))", borderRadius: 10 }} transition={{ duration: 0.4 }}/>
            </div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "hsl(var(--muted-foreground))" }}>{current + 1}/{exercises.length}</div>
        </div>

        {/* Unit label */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span style={{ fontSize: 13, color: "hsl(var(--muted-foreground))" }}>{meta.unitTitle} {meta.emoji}</span>
          <div style={{ fontWeight: 900, fontSize: 18 }}>{meta.title}</div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          {ex && (
            <motion.div key={current} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
              {/* Question type label */}
              <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginBottom: 12, textAlign: "center" }}>
                {ex.type === "word_order" ? "🔤 رتّب الكلمات" : ex.type === "translate" ? "🔄 اختر الترجمة" : ex.type === "listen_select" ? "🎧 استمع واختر" : "🖼️ طابق الصورة"}
              </div>
              {ex.type === "word_order"    && <WordOrderQ     ex={ex} onAnswer={handleAnswer}/>}
              {ex.type === "translate"     && <TranslateQ     ex={ex} onAnswer={handleAnswer}/>}
              {ex.type === "listen_select" && <ListenSelectQ  ex={ex} onAnswer={handleAnswer}/>}
              {ex.type === "picture_match" && <PictureMatchQ  ex={ex} onAnswer={handleAnswer}/>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
