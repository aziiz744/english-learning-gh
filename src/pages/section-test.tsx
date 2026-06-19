import { useState, useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout";
import { Mascot } from "@/components/mascot";
import { motion, AnimatePresence } from "framer-motion";
import { getSectionTestExercises } from "@/lib/lesson-exercises";
import type { ExObj } from "@/lib/lesson-exercises";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/lib/supabase";
import { Check, X, ArrowRight } from "lucide-react";

const PASS_PERCENT = 80; // نسبة النجاح المطلوبة لفتح القسم الثاني

export default function SectionTest() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const questions = useMemo(() => getSectionTestExercises(), []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [phase, setPhase] = useState<"intro" | "playing" | "result">("intro");

  const ex = questions[idx];
  const total = questions.length;

  // استخرج خيارات السؤال (يدعم translate/listen/fill)
  const options: string[] = useMemo(() => {
    if (!ex) return [];
    return (ex.options as string[]) ?? (ex.blankOptions as string[]) ?? [];
  }, [ex]);

  const answer = ex?.correctAnswer ?? "";
  const prompt = ex?.arabic ?? ex?.listenSentence ?? ex?.blankSentence ?? "";

  const confirm = () => {
    if (!picked) return;
    setConfirmed(true);
    if (picked === answer) setCorrect(c => c + 1);
  };

  const next = () => {
    if (idx + 1 >= total) {
      setPhase("result");
      saveResult();
    } else {
      setIdx(i => i + 1);
      setPicked(null);
      setConfirmed(false);
    }
  };

  const passed = (correct / total) * 100 >= PASS_PERCENT;

  const saveResult = async () => {
    if (!user) return;
    const finalPass = (correct / total) * 100 >= PASS_PERCENT;
    if (finalPass) {
      // افتح القسم الثاني — احفظ علامة في user_stats
      try {
        await supabase.from("user_stats").update({ section_unlocked: 2 }).eq("user_id", user.id);
      } catch { /* العمود قد لا يكون موجوداً بعد */ }
    }
  };

  // ── شاشة المقدّمة ──
  if (phase === "intro") {
    return (
      <Layout>
        <div className="max-w-md mx-auto px-4 py-10 text-center min-h-[70vh] flex flex-col items-center justify-center">
          <Mascot state="thinking" className="w-28 h-32 mb-4" />
          <div style={{ fontSize: 48, marginBottom: 8 }}>🎓</div>
          <h1 className="text-2xl font-extrabold mb-3">اختبار القسم الأول</h1>
          <p className="text-muted-foreground leading-relaxed mb-2" style={{ direction: "rtl" }}>
            اختبار شامل من {total} سؤال يغطّي كل وحدات القسم الأول. أجب بشكل صحيح على {PASS_PERCENT}% منها لتفتح القسم الثاني!
          </p>
          <p className="text-sm text-muted-foreground mb-8" style={{ direction: "rtl" }}>
            إن كنت متمكّناً من مواضيع القسم، يمكنك اجتيازه مباشرة. 💪
          </p>
          <button onClick={() => setPhase("playing")}
            className="w-full max-w-xs py-4 rounded-2xl font-extrabold text-white text-lg"
            style={{ background: "linear-gradient(135deg, #34d399, #059669)", boxShadow: "0 5px 0 #047857" }}>
            ابدأ الاختبار 🚀
          </button>
          <button onClick={() => setLocation("/")}
            className="mt-4 text-sm text-muted-foreground font-bold">العودة للخارطة</button>
        </div>
      </Layout>
    );
  }

  // ── شاشة النتيجة ──
  if (phase === "result") {
    const pct = Math.round((correct / total) * 100);
    return (
      <Layout>
        <div className="max-w-md mx-auto px-4 py-10 text-center min-h-[70vh] flex flex-col items-center justify-center">
          <Mascot state={passed ? "complete" : "idle"} className="w-32 h-36 mb-4" />
          <div style={{ fontSize: 56, marginBottom: 8 }}>{passed ? "🎉" : "💪"}</div>
          <h1 className="text-2xl font-extrabold mb-2">
            {passed ? "مبروك! اجتزت الاختبار" : "لم تنجح هذه المرة"}
          </h1>
          <div className="text-4xl font-extrabold mb-3" style={{ color: passed ? "#22c55e" : "#f87171" }}>
            {correct} / {total} ({pct}%)
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8" style={{ direction: "rtl" }}>
            {passed
              ? "أتقنت القسم الأول! تم فتح القسم الثاني — استعد لتحديات جديدة. 🚀"
              : `تحتاج ${PASS_PERCENT}% للنجاح. راجع الوحدات وحاول مجدداً — أنت قريب!`}
          </p>
          {passed ? (
            <button onClick={() => setLocation("/")}
              className="w-full max-w-xs py-4 rounded-2xl font-extrabold text-white text-lg"
              style={{ background: "linear-gradient(135deg, #34d399, #059669)", boxShadow: "0 5px 0 #047857" }}>
              انتقل للقسم الثاني 🎯
            </button>
          ) : (
            <div className="w-full max-w-xs space-y-3">
              <button onClick={() => { setIdx(0); setPicked(null); setConfirmed(false); setCorrect(0); setPhase("playing"); }}
                className="w-full py-4 rounded-2xl font-extrabold text-white text-lg"
                style={{ background: "#f59e0b", boxShadow: "0 5px 0 #d97706" }}>
                أعد الاختبار 🔄
              </button>
              <button onClick={() => setLocation("/")}
                className="w-full py-3 rounded-2xl font-bold text-muted-foreground">
                راجع الوحدات أولاً
              </button>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  // ── شاشة الأسئلة ──
  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 flex flex-col" style={{ minHeight: "calc(100svh - 130px)" }}>
        {/* شريط التقدّم */}
        <div className="flex items-center gap-3 py-4">
          <button onClick={() => setLocation("/")} style={{ fontSize: 20, color: "hsl(var(--muted-foreground))", background: "none", border: "none", cursor: "pointer" }}>✕</button>
          <div className="flex-1 h-3.5 bg-muted rounded-full overflow-hidden">
            <motion.div animate={{ width: `${(idx / total) * 100}%` }}
              className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #34d399, #059669)" }} />
          </div>
          <span className="text-sm font-bold text-muted-foreground">{idx + 1}/{total}</span>
        </div>

        {/* السؤال */}
        <AnimatePresence mode="wait">
          {ex && (
            <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1">
              <div className="text-center mb-6">
                <div className="text-xs font-bold text-emerald-500 mb-2">🎓 اختبار القسم</div>
                <div className="text-xl font-extrabold" style={{ direction: ex.type === "translate" ? "rtl" : "ltr" }}>
                  {ex.type === "word_order" ? "رتّب الكلمات لتكوين الجملة" : prompt}
                </div>
              </div>

              {/* خيارات */}
              <div className="flex flex-col gap-3">
                {options.map(o => {
                  const isP = o === picked;
                  let bg = "hsl(var(--card))", border = "2px solid hsl(var(--border))";
                  if (confirmed) {
                    if (o === answer) { bg = "#22c55e22"; border = "2px solid #22c55e"; }
                    else if (isP) { bg = "#ef444422"; border = "2px solid #ef4444"; }
                  } else if (isP) { bg = "#34d39922"; border = "2px solid #34d399"; }
                  return (
                    <button key={o} onClick={() => !confirmed && setPicked(o)} disabled={confirmed}
                      style={{ padding: "15px 18px", borderRadius: 14, fontSize: 16, fontWeight: 700, background: bg, border,
                        textAlign: "left", direction: "ltr", cursor: confirmed ? "default" : "pointer", color: "hsl(var(--foreground))" }}>
                      {o}
                      {confirmed && o === answer && <Check className="inline ml-2 w-4 h-4 text-green-400" />}
                      {confirmed && isP && o !== answer && <X className="inline ml-2 w-4 h-4 text-red-400" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* زر التحقق / التالي */}
        <div className="py-4">
          {!confirmed ? (
            <button onClick={confirm} disabled={!picked}
              style={{ width: "100%", padding: 15, borderRadius: 14, fontWeight: 800, fontSize: 16, border: "none",
                background: picked ? "#059669" : "hsl(var(--muted))", color: picked ? "white" : "hsl(var(--muted-foreground))",
                cursor: picked ? "pointer" : "default", boxShadow: picked ? "0 4px 0 #047857" : "none" }}>
              تحقّق
            </button>
          ) : (
            <button onClick={next}
              style={{ width: "100%", padding: 15, borderRadius: 14, fontWeight: 800, fontSize: 16, border: "none",
                background: picked === answer ? "#22c55e" : "#f87171", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: picked === answer ? "0 4px 0 #16a34a" : "0 4px 0 #dc2626" }}>
              {idx + 1 >= total ? "النتيجة" : "التالي"} <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
