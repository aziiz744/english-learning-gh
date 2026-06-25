import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { getReviewItems, masterReviewItem, clearReviewLibrary, type ReviewItem } from "@/lib/review-library";
import owlRead from "@/assets/owl/owl-read.png";

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

export default function ReviewLibrary() {
  const [, setLocation] = useLocation();
  const [items, setItems] = useState<ReviewItem[]>([]);

  useEffect(() => {
    setItems(getReviewItems().sort((a, b) => b.missCount - a.missCount || b.addedAt - a.addedAt));
  }, []);

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

  return (
    <Layout>
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
    </Layout>
  );
}
