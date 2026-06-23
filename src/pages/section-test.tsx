import { useState, useMemo, useEffect } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout";
import { Mascot } from "@/components/mascot";
import { motion, AnimatePresence } from "framer-motion";
import { getSectionTestExercises } from "@/lib/lesson-exercises";
import type { ExObj } from "@/lib/lesson-exercises";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/lib/supabase";
import { Check, X, ArrowRight, Volume2 } from "lucide-react";

const PASS_PERCENT = 80;

// ── نظام الأصوات: نجمع كل أصوات الإنجليزية المتاحة ونتيح التبديل بينها ──
function getEnglishVoices(): SpeechSynthesisVoice[] {
  try {
    if (!window.speechSynthesis) return [];
    const all = window.speechSynthesis.getVoices();
    // أصوات الإنجليزية فقط (en-US, en-GB, en-AU ...)
    const en = all.filter(v => /^en(-|_|$)/i.test(v.lang));
    return en.length > 0 ? en : all;
  } catch { return []; }
}

// نطق نص بصوت محدّد (أو الافتراضي)
function speak(text: string, voice?: SpeechSynthesisVoice | null) {
  try {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text);
    if (voice) { u.voice = voice; u.lang = voice.lang; }
    else u.lang = "en-US";
    u.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch { /* ignore */ }
}

// اسم ودّي مختصر للصوت (للعرض في الزر)
function voiceLabel(v: SpeechSynthesisVoice): string {
  const region = v.lang.toUpperCase().includes("GB") ? "🇬🇧 بريطاني"
    : v.lang.toUpperCase().includes("AU") ? "🇦🇺 أسترالي"
    : v.lang.toUpperCase().includes("IN") ? "🇮🇳 هندي"
    : "🇺🇸 أمريكي";
  // بعض المتصفّحات تعطي اسماً مثل "Google US English" أو "Samantha"
  const short = v.name.replace(/Google|Microsoft|English|\(.*?\)/gi, "").trim() || v.name;
  return `${region} · ${short}`;
}

export default function SectionTest() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const questions = useMemo(() => getSectionTestExercises(), []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [phase, setPhase] = useState<"intro" | "playing" | "result">("intro");

  // ── حالة الأصوات: قائمة الأصوات + الصوت الحالي (يتغيّر مع كل سؤال) ──
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceIdx, setVoiceIdx] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true); // تبديل تلقائي بين الأسئلة

  // حمّل الأصوات (تأتي غير متزامنة في بعض المتصفّحات)
  useEffect(() => {
    const load = () => {
      const v = getEnglishVoices();
      if (v.length > 0) setVoices(v);
    };
    load();
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = load;
    }
    return () => { if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const currentVoice = voices.length > 0 ? voices[voiceIdx % voices.length] : null;

  const ex: ExObj | undefined = questions[idx];
  const total = questions.length;
  const answer = ex?.correctAnswer ?? "";
  // اخلط الخيارات (ثابت لكل سؤال عبر id) — لمنع أن تكون الإجابة دائماً الأولى
  const options: string[] = useMemo(() => {
    const raw = (ex?.options ?? ex?.blankOptions ?? []) as string[];
    const id = ex?.id ?? "";
    // بذرة من id السؤال
    let seed = 0;
    for (let i = 0; i < id.length; i++) seed = (seed * 31 + id.charCodeAt(i)) >>> 0;
    // مولّد أرقام شبه عشوائي حتمي (mulberry32)
    const rand = () => {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const arr = [...raw];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [ex]);

  const confirm = () => {
    if (!picked) return;
    setConfirmed(true);
    const isCorrect = picked === answer;
    if (isCorrect) setCorrect((c) => c + 1);
    // انطق الإجابة الصحيحة بالصوت الحالي (تعليم بالصوت)
    setTimeout(() => speak(answer, currentVoice), 200);
  };

  const next = () => {
    if (idx + 1 >= total) {
      setPhase("result");
      if (user && (correct / total) * 100 >= PASS_PERCENT) {
        supabase.from("user_stats").update({ section_unlocked: 2 }).eq("user_id", user.id).then(() => {}, () => {});
      }
    } else {
      setIdx((i) => i + 1);
      setPicked(null);
      setConfirmed(false);
      // بدّل الصوت تلقائياً للسؤال التالي (لو مفعّل) — تنويع اللهجات
      if (autoRotate && voices.length > 1) {
        setVoiceIdx((v) => (v + 1) % voices.length);
      }
    }
  };

  // تبديل الصوت يدوياً
  const cycleVoice = () => {
    if (voices.length > 1) setVoiceIdx((v) => (v + 1) % voices.length);
  };

  const passed = (correct / total) * 100 >= PASS_PERCENT;

  // ── المقدّمة ──
  if (phase === "intro") {
    return (
      <Layout>
        <div className="max-w-md mx-auto px-5 py-10 text-center min-h-[70vh] flex flex-col items-center justify-center">
          <Mascot state="thinking" className="w-28 h-32 mb-4" />
          <div style={{ fontSize: 48, marginBottom: 8 }}>🎓</div>
          <h1 className="text-2xl font-extrabold mb-3">اختبار القسم الأول</h1>
          <p className="text-muted-foreground leading-relaxed mb-2" style={{ direction: "rtl" }}>
            اختبار شامل من {total} سؤال يغطّي كل وحدات القسم الأول. أجب بشكل صحيح على {PASS_PERCENT}% لتفتح القسم الثاني!
          </p>
          <p className="text-sm text-muted-foreground mb-8" style={{ direction: "rtl" }}>
            متمكّن من المواضيع؟ يمكنك اجتيازه مباشرة. 💪
          </p>
          <button onClick={() => setPhase("playing")}
            className="w-full max-w-xs py-4 rounded-2xl font-extrabold text-white text-lg"
            style={{ background: "linear-gradient(135deg, #34d399, #059669)", boxShadow: "0 5px 0 #047857" }}>
            ابدأ الاختبار 🚀
          </button>
          <button onClick={() => setLocation("/")} className="mt-4 text-sm text-muted-foreground font-bold">
            العودة للخارطة
          </button>
        </div>
      </Layout>
    );
  }

  // ── النتيجة ──
  if (phase === "result") {
    const pct = Math.round((correct / total) * 100);
    return (
      <Layout>
        <div className="max-w-md mx-auto px-5 py-10 text-center min-h-[70vh] flex flex-col items-center justify-center">
          <Mascot state={passed ? "complete" : "idle"} className="w-32 h-36 mb-4" />
          <div style={{ fontSize: 56, marginBottom: 8 }}>{passed ? "🎉" : "💪"}</div>
          <h1 className="text-2xl font-extrabold mb-2">{passed ? "مبروك! اجتزت الاختبار" : "لم تنجح هذه المرة"}</h1>
          <div className="text-4xl font-extrabold mb-3" style={{ color: passed ? "#22c55e" : "#f87171" }}>
            {correct} / {total} ({pct}%)
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8" style={{ direction: "rtl" }}>
            {passed
              ? "أتقنت القسم الأول! تم فتح القسم الثاني. 🚀"
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
              <button onClick={() => setLocation("/")} className="w-full py-3 rounded-2xl font-bold text-muted-foreground">
                راجع الوحدات أولاً
              </button>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  // ── حماية: لو ما فيه أسئلة ──
  if (!ex) {
    return (
      <Layout>
        <div className="max-w-md mx-auto px-5 py-20 text-center">
          <p className="text-muted-foreground">تعذّر تحميل أسئلة الاختبار. حاول مجدداً.</p>
          <button onClick={() => setLocation("/")} className="mt-4 text-sky-400 font-bold">العودة للخارطة</button>
        </div>
      </Layout>
    );
  }

  const isFill = ex.type === "fill_blank";
  const questionText = isFill ? (ex.blankSentence ?? "").replace(/_+/g, " ____ ") : (ex.arabic ?? "");

  // ── الأسئلة ──
  return (
    <Layout>
      <div className="max-w-md mx-auto px-5 flex flex-col" style={{ minHeight: "calc(100svh - 120px)" }}>
        {/* شريط التقدّم */}
        <div className="flex items-center gap-3 pt-4 pb-2">
          <button onClick={() => setLocation("/")} style={{ fontSize: 22, color: "hsl(var(--muted-foreground))", background: "none", border: "none", cursor: "pointer" }}>✕</button>
          <div className="flex-1 h-3.5 bg-muted rounded-full overflow-hidden">
            <motion.div animate={{ width: `${((idx + 1) / total) * 100}%` }}
              className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #34d399, #059669)" }} />
          </div>
          <span className="text-sm font-bold text-muted-foreground">{idx + 1}/{total}</span>
        </div>

        {/* ── شريط تغيير الصوت ── */}
        {voices.length > 0 && (
          <div className="flex items-center justify-center gap-2 pb-1" style={{ direction: "rtl" }}>
            <button
              onClick={cycleVoice}
              disabled={voices.length < 2}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "5px 12px", borderRadius: 999,
                background: "hsl(var(--muted))", border: "1px solid hsl(var(--border))",
                fontSize: 12.5, fontWeight: 700, color: "hsl(var(--foreground))",
                cursor: voices.length < 2 ? "default" : "pointer", opacity: voices.length < 2 ? 0.6 : 1,
              }}
              title="اضغط لتغيير الصوت"
            >
              <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{currentVoice ? voiceLabel(currentVoice) : "الصوت الافتراضي"}</span>
              {voices.length > 1 && <ArrowRight className="w-3.5 h-3.5" style={{ transform: "scaleX(-1)", opacity: 0.6 }} />}
            </button>
            {voices.length > 1 && (
              <button
                onClick={() => setAutoRotate((a) => !a)}
                style={{
                  padding: "5px 10px", borderRadius: 999,
                  background: autoRotate ? "#05966922" : "hsl(var(--muted))",
                  border: `1px solid ${autoRotate ? "#059669" : "hsl(var(--border))"}`,
                  fontSize: 11.5, fontWeight: 700,
                  color: autoRotate ? "#059669" : "hsl(var(--muted-foreground))",
                  cursor: "pointer",
                }}
                title="تبديل الصوت تلقائياً بين الأسئلة"
              >
                {autoRotate ? "🔄 تلقائي" : "🔇 ثابت"}
              </button>
            )}
          </div>
        )}

        {/* بطاقة السؤال */}
        <div className="flex-1 flex flex-col justify-center py-6">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* شارة + تعليمة */}
              <div className="text-center mb-5">
                <div className="inline-block text-xs font-extrabold text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full mb-3">
                  🎓 اختبار القسم
                </div>
                <div className="text-sm font-bold text-muted-foreground mb-4" style={{ direction: "rtl" }}>
                  {isFill ? "اختر الكلمة المناسبة لإكمال الجملة" : "اختر الترجمة الإنجليزية الصحيحة"}
                </div>
              </div>

              {/* نص السؤال — بارز داخل بطاقة */}
              <div className="rounded-2xl border-2 border-border bg-card px-5 py-6 mb-6 flex items-center justify-center gap-3"
                style={{ minHeight: 90 }}>
                <span className="text-2xl font-extrabold text-center" style={{ direction: isFill ? "ltr" : "rtl", color: "hsl(var(--foreground))" }}>
                  {questionText}
                </span>
                {/* زر صوت — للجمل الإنجليزية (fill_blank) */}
                {isFill && (
                  <button onClick={() => speak((ex.blankSentence ?? "").replace(/_+/g, answer), currentVoice)}
                    style={{ width: 42, height: 42, borderRadius: 12, background: "#05966922", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Volume2 className="w-5 h-5 text-emerald-600" />
                  </button>
                )}
              </div>

              {/* الخيارات */}
              <div className="flex flex-col gap-3">
                {options.map((o) => {
                  const isP = o === picked;
                  let bg = "hsl(var(--card))", border = "2px solid hsl(var(--border))";
                  if (confirmed) {
                    if (o === answer) { bg = "#22c55e22"; border = "2px solid #22c55e"; }
                    else if (isP) { bg = "#ef444422"; border = "2px solid #ef4444"; }
                  } else if (isP) { bg = "#34d39922"; border = "2px solid #34d399"; }
                  return (
                    <button key={o} onClick={() => { if (!confirmed) { setPicked(o); speak(o, currentVoice); } }} disabled={confirmed}
                      style={{ padding: "16px 18px", borderRadius: 14, fontSize: 17, fontWeight: 700, background: bg, border,
                        display: "flex", alignItems: "center", justifyContent: "space-between", direction: "ltr",
                        cursor: confirmed ? "default" : "pointer", color: "hsl(var(--foreground))" }}>
                      <span>{o}</span>
                      {confirmed && o === answer && <Check className="w-5 h-5 text-green-500" />}
                      {confirmed && isP && o !== answer && <X className="w-5 h-5 text-red-500" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* زر التحقق / التالي — ثابت أسفل */}
        <div className="pb-5 pt-2">
          {!confirmed ? (
            <button onClick={confirm} disabled={!picked}
              style={{ width: "100%", padding: 16, borderRadius: 16, fontWeight: 800, fontSize: 17, border: "none",
                background: picked ? "#059669" : "hsl(var(--muted))", color: picked ? "white" : "hsl(var(--muted-foreground))",
                cursor: picked ? "pointer" : "default", boxShadow: picked ? "0 5px 0 #047857" : "none" }}>
              تحقّق
            </button>
          ) : (
            <button onClick={next}
              style={{ width: "100%", padding: 16, borderRadius: 16, fontWeight: 800, fontSize: 17, border: "none",
                background: picked === answer ? "#22c55e" : "#f87171", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: picked === answer ? "0 5px 0 #16a34a" : "0 5px 0 #dc2626" }}>
              {idx + 1 >= total ? "عرض النتيجة" : "السؤال التالي"} <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
