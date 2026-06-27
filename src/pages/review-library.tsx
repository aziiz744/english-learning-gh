import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { getReviewItems, masterReviewItem, clearReviewLibrary, type ReviewItem } from "@/lib/review-library";
import { SpacedReview } from "@/components/spaced-review";
import { getSrsStats } from "@/lib/srs";
import owlRead from "@/assets/owl/owl-read.png";
import owlCelebrate from "@/assets/owl/owl-celebrate.png";

// نطق إنجليزي بسيط
function speakWord(text: string) {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.85; u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  } catch { /* ignore */ }
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ── تمرين المراجعة: يختبر الطالب على كلماته الصعبة ──
function ReviewQuiz({ items, onFinish, onMaster }: {
  items: ReviewItem[];
  onFinish: () => void;
  onMaster: (item: ReviewItem) => void;
}) {
  const [queue] = useState<ReviewItem[]>(() => shuffle(items).slice(0, 15));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  const current = queue[idx];

  // خيارات: الإجابة الصحيحة + 3 مشتّتات من بقية الكلمات
  const [options, setOptions] = useState<string[]>([]);
  useEffect(() => {
    if (!current) return;
    const others = items.filter(x => x.correct !== current.correct).map(x => x.correct);
    const distractors = shuffle(others).slice(0, 3);
    setOptions(shuffle([current.correct, ...distractors]));
    setPicked(null);
  }, [idx, current, items]);

  // نطق تلقائي
  useEffect(() => {
    if (current) { const t = setTimeout(() => speakWord(current.correct), 350); return () => clearTimeout(t); }
  }, [idx, current]);

  if (done) {
    const pct = Math.round((correctCount / queue.length) * 100);
    return (
      <div style={{ textAlign: "center", padding: "30px 20px" }}>
        <img src={owlCelebrate} alt="Owlie" width={130} height={130}
          style={{ width: 130, height: 130, objectFit: "contain", margin: "0 auto 16px" }} />
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "hsl(var(--primary))", marginBottom: 8 }}>
          أحسنت! 🎉
        </h2>
        <p style={{ fontSize: 16, color: "hsl(var(--foreground))", marginBottom: 4 }}>
          أجبت صح على {correctCount} من {queue.length}
        </p>
        <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", marginBottom: 24 }}>
          {pct >= 80 ? "تقدّم رائع! واصل المراجعة 💪" : "المراجعة تصنع الفرق — كرّر لتتقن 🌟"}
        </p>
        <button onClick={onFinish}
          style={{ padding: "13px 32px", borderRadius: 14, background: "hsl(var(--primary))", color: "white", border: "none", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
          العودة للمكتبة
        </button>
      </div>
    );
  }

  if (!current) return null;

  const handlePick = (opt: string) => {
    if (picked) return;
    setPicked(opt);
    const isCorrect = opt === current.correct;
    if (isCorrect) {
      setCorrectCount(c => c + 1);
      speakWord(current.correct);
      // لو أجاب صح، اعتبرها خطوة نحو الإتقان (احذفها من المكتبة)
      setTimeout(() => onMaster(current), 200);
    }
    // انتقل للتالي بعد لحظة
    setTimeout(() => {
      if (idx + 1 >= queue.length) setDone(true);
      else setIdx(i => i + 1);
    }, 1100);
  };

  return (
    <div style={{ padding: "0 12px" }}>
      {/* شريط التقدّم */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "hsl(var(--muted-foreground))", marginBottom: 6, direction: "rtl" }}>
          <span>السؤال {idx + 1} من {queue.length}</span>
          <span>✓ {correctCount}</span>
        </div>
        <div style={{ height: 8, background: "hsl(var(--muted))", borderRadius: 6, overflow: "hidden" }}>
          <motion.div animate={{ width: `${((idx) / queue.length) * 100}%` }}
            style={{ height: "100%", background: "hsl(var(--primary))", borderRadius: 6 }} />
        </div>
      </div>

      {/* السؤال */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginBottom: 8 }}>ما الترجمة الصحيحة؟</p>
        <div style={{ fontSize: 22, fontWeight: 900, color: "hsl(var(--foreground))", direction: "rtl" }}>
          {current.question}
        </div>
      </div>

      {/* الخيارات */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {options.map((opt) => {
          const isCorrect = picked && opt === current.correct;
          const isWrong = picked === opt && opt !== current.correct;
          return (
            <motion.button key={opt} whileTap={!picked ? { scale: 0.97 } : {}}
              onClick={() => handlePick(opt)} disabled={!!picked}
              style={{
                padding: "15px 18px", borderRadius: 14, direction: "ltr",
                fontSize: 16, fontWeight: 800, cursor: picked ? "default" : "pointer",
                border: `2px solid ${isCorrect ? "#22c55e" : isWrong ? "#ef4444" : "hsl(var(--border))"}`,
                background: isCorrect ? "#22c55e18" : isWrong ? "#ef444418" : "hsl(var(--card))",
                color: isCorrect ? "#16a34a" : isWrong ? "#dc2626" : "hsl(var(--foreground))",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
              <span>{opt}</span>
              {isCorrect && <span>✓</span>}
              {isWrong && <span>✗</span>}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default function ReviewLibrary() {
  const [, setLocation] = useLocation();
  const [items, setItems] = useState<ReviewItem[]>([]);
  const [quizMode, setQuizMode] = useState(false);
  const [spacedMode, setSpacedMode] = useState(false);
  const [srsStats, setSrsStats] = useState({ total: 0, due: 0, learning: 0, mature: 0 });

  useEffect(() => {
    setItems(getReviewItems().sort((a, b) => b.missCount - a.missCount || b.addedAt - a.addedAt));
    setSrsStats(getSrsStats());
  }, []);

  const refreshItems = () => {
    setItems(getReviewItems().sort((a, b) => b.missCount - a.missCount || b.addedAt - a.addedAt));
  };

  const handleMaster = (item: ReviewItem) => {
    masterReviewItem(item.correct, item.question);
    setItems(prev => prev.filter(x => !(x.correct === item.correct && x.question === item.question)));
  };

  const handleClearAll = () => {
    if (confirm("هل تريد مسح كل مكتبة المراجعة؟")) {
      clearReviewLibrary();
      setItems([]);
    }
  };

  // وضع المراجعة المتباعدة الذكية
  if (spacedMode) {
    return (
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 0" }}>
        <SpacedReview
          color="#16B6C6"
          onClose={() => { setSpacedMode(false); setSrsStats(getSrsStats()); }}
        />
      </div>
    );
  }

  // وضع التمرين
  if (quizMode && items.length >= 4) {
    return (
      <>
        <div className="pb-8" style={{ maxWidth: 560, margin: "0 auto", paddingTop: 16 }}>
          <ReviewQuiz
            items={items}
            onFinish={() => { refreshItems(); setQuizMode(false); }}
            onMaster={(item) => masterReviewItem(item.correct, item.question)}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pb-8" style={{ maxWidth: 560, margin: "0 auto" }}>
        {/* العنوان */}
        <div style={{ textAlign: "center", padding: "12px 16px 20px" }}>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: "hsl(var(--foreground))", marginBottom: 4 }}>
            📚 مكتبة المراجعة
          </h1>
          <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>
            كل الكلمات والجمل التي أخطأت فيها — راجعها لتتقنها
          </p>
        </div>

        {/* ── كرت المراجعة المتباعدة الذكية ── */}
        {srsStats.total > 0 && (
          <div style={{ padding: "0 12px", marginBottom: 16 }}>
            <div style={{
              background: srsStats.due > 0
                ? "linear-gradient(135deg, #16B6C6, #0e8a96)"
                : "hsl(var(--card))",
              border: srsStats.due > 0 ? "none" : "2px solid hsl(var(--border))",
              borderRadius: 18, padding: "18px 20px",
              boxShadow: srsStats.due > 0 ? "0 6px 20px rgba(22,182,198,0.3)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: srsStats.due > 0 ? 14 : 0 }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: srsStats.due > 0 ? "#fff" : "hsl(var(--foreground))" }}>
                    🧠 المراجعة الذكية
                  </div>
                  <div style={{ fontSize: 13, color: srsStats.due > 0 ? "rgba(255,255,255,0.85)" : "hsl(var(--muted-foreground))", marginTop: 2 }}>
                    {srsStats.due > 0
                      ? `${srsStats.due} كلمة حان وقت مراجعتها`
                      : "كل كلماتك مُراجَعة ✅"}
                  </div>
                </div>
                <div style={{ textAlign: "center", display: "flex", gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: srsStats.due > 0 ? "#fff" : "hsl(var(--foreground))" }}>{srsStats.mature}</div>
                    <div style={{ fontSize: 10, color: srsStats.due > 0 ? "rgba(255,255,255,0.8)" : "hsl(var(--muted-foreground))" }}>راسخة</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: srsStats.due > 0 ? "#fff" : "hsl(var(--foreground))" }}>{srsStats.total}</div>
                    <div style={{ fontSize: 10, color: srsStats.due > 0 ? "rgba(255,255,255,0.8)" : "hsl(var(--muted-foreground))" }}>الكل</div>
                  </div>
                </div>
              </div>
              {srsStats.due > 0 && (
                <button onClick={() => setSpacedMode(true)}
                  style={{ width: "100%", padding: "13px", background: "#fff", color: "#0e8a96", border: "none", borderRadius: 12, fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                  ابدأ المراجعة 🚀
                </button>
              )}
            </div>
          </div>
        )}

        {items.length === 0 ? (
          // حالة فارغة
          <div style={{ textAlign: "center", padding: "40px 24px" }}>
            <img src={owlRead} alt="Owlie" width={120} height={120}
              style={{ width: 120, height: 120, objectFit: "contain", margin: "0 auto 16px" }} />
            <h2 style={{ fontSize: 19, fontWeight: 800, color: "hsl(var(--foreground))", marginBottom: 8 }}>
              مكتبتك فارغة! 🎉
            </h2>
            <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.7, maxWidth: 300, margin: "0 auto 24px" }}>
              ما عندك أخطاء محفوظة. كل ما تخطئ في درس، تُحفظ الكلمة هنا تلقائياً لتراجعها لاحقاً.
            </p>
            <button onClick={() => setLocation("/")}
              style={{ padding: "13px 30px", borderRadius: 14, background: "hsl(var(--primary))", color: "white", border: "none", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
              ابدأ درساً 🚀
            </button>
          </div>
        ) : (
          <div style={{ padding: "0 12px" }}>
            {/* زر التدرّب (يظهر لو فيه 4+ كلمات) */}
            {items.length >= 4 && (
              <button onClick={() => setQuizMode(true)}
                style={{
                  width: "100%", marginBottom: 14, padding: "14px",
                  background: "hsl(var(--primary))", color: "white", border: "none",
                  borderRadius: 14, fontWeight: 800, fontSize: 15, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: "0 4px 12px hsl(var(--primary) / 0.3)",
                }}>
                <span style={{ fontSize: 18 }}>🎯</span>
                تدرّب على كلماتي الصعبة
              </button>
            )}

            {/* شريط الإحصائية */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "hsl(var(--card))", border: "1px solid hsl(var(--border))",
              borderRadius: 14, padding: "12px 16px", marginBottom: 16, direction: "rtl",
            }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: "hsl(var(--foreground))" }}>
                {items.length} {items.length === 1 ? "كلمة للمراجعة" : "كلمة للمراجعة"}
              </span>
              <button onClick={handleClearAll}
                style={{ background: "none", border: "none", color: "hsl(var(--muted-foreground))", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                مسح الكل
              </button>
            </div>

            {/* قائمة الكلمات */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {items.map((item, i) => (
                <motion.div key={`${item.correct}-${i}`}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}
                  style={{
                    background: "hsl(var(--card))", border: "1px solid hsl(var(--border))",
                    borderRadius: 14, padding: "14px 16px", direction: "rtl",
                  }}>
                  {/* السؤال (عربي) */}
                  <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginBottom: 6 }}>
                    {item.question}
                  </div>
                  {/* الإجابة الصحيحة + النطق */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16, fontWeight: 800, color: "#22c55e", direction: "ltr" }}>
                        {item.correct}
                      </span>
                      <button onClick={() => speakWord(item.correct)}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 17, padding: 0 }}
                        aria-label="استمع">🔊</button>
                    </div>
                    {/* زر الإتقان */}
                    <button onClick={() => handleMaster(item)}
                      style={{
                        background: "#22c55e18", border: "1px solid #22c55e66",
                        borderRadius: 10, padding: "6px 12px", color: "#16a34a",
                        fontSize: 12, fontWeight: 800, cursor: "pointer", whiteSpace: "nowrap",
                      }}>
                      ✓ أتقنتها
                    </button>
                  </div>
                  {/* عدّاد الأخطاء */}
                  {item.missCount > 1 && (
                    <div style={{ fontSize: 11, color: "#f97316", marginTop: 6, fontWeight: 700 }}>
                      أخطأت فيها {item.missCount} مرات
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
