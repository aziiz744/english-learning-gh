import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDueCards, reviewWord, type SrsCard } from "@/lib/srs";

// ════════════════════════════════════════════════════════════════
// SpacedReview — حصة مراجعة متباعدة (flashcards + تقييم ذاتي)
// تعرض الكلمات المستحقّة، الطالب يحاول يتذكّر، ثم يقيّم نفسه.
// النتيجة تُغذّي خوارزمية SM-2 لجدولة المراجعة القادمة.
// ════════════════════════════════════════════════════════════════

function speakWord(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

export function SpacedReview({
  color = "#16B6C6",
  onClose,
}: {
  color?: string;
  onClose: () => void;
}) {
  const [cards] = useState<SrsCard[]>(() => getDueCards().slice(0, 20));
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  const card = cards[idx];
  const total = cards.length;

  const grade = useCallback((quality: 0 | 1 | 2 | 3) => {
    if (!card) return;
    reviewWord(card.en, quality);
    setDoneCount(c => c + 1);
    if (idx >= total - 1) {
      setIdx(total); // انتهى
    } else {
      setIdx(i => i + 1);
      setRevealed(false);
    }
  }, [card, idx, total]);

  // لا توجد كلمات مستحقّة
  if (total === 0) {
    return (
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, padding:40, textAlign:"center" }}>
        <div style={{ fontSize:64 }}>✅</div>
        <h2 style={{ fontSize:22, fontWeight:900, color:"hsl(var(--foreground))" }}>أحسنت! لا مراجعات الآن</h2>
        <p style={{ fontSize:15, color:"hsl(var(--muted-foreground))", maxWidth:300 }}>
          راجعت كل كلماتك المستحقّة. ارجع لاحقاً عندما يحين موعد مراجعة كلمات جديدة.
        </p>
        <button onClick={onClose} style={{ marginTop:8, padding:"13px 32px", background:color, color:"#fff", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>
          رجوع
        </button>
      </div>
    );
  }

  // انتهت الحصة
  if (idx >= total) {
    return (
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, padding:40, textAlign:"center" }}>
        <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:"spring" }} style={{ fontSize:72 }}>🎉</motion.div>
        <h2 style={{ fontSize:24, fontWeight:900, color:"hsl(var(--foreground))" }}>راجعت {doneCount} كلمة!</h2>
        <p style={{ fontSize:15, color:"hsl(var(--muted-foreground))", maxWidth:300 }}>
          الكلمات اللي عرفتها بسهولة بتتباعد مواعيد مراجعتها، والصعبة بترجع قريب. كذا ما تنساها أبداً.
        </p>
        <button onClick={onClose} style={{ marginTop:8, padding:"13px 32px", background:color, color:"#fff", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>
          تم 🚀
        </button>
      </div>
    );
  }

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:"100%", maxWidth:440, margin:"0 auto", padding:"8px 16px" }}>
      {/* رأس */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", marginBottom:6 }}>
        <button onClick={onClose} style={{ background:"none", border:"none", fontSize:22, color:"hsl(var(--muted-foreground))", cursor:"pointer" }}>✕</button>
        <div style={{ fontSize:14, fontWeight:700, color:"hsl(var(--muted-foreground))" }}>{idx + 1} / {total}</div>
        <div style={{ width:22 }}/>
      </div>

      {/* شريط تقدّم */}
      <div style={{ width:"100%", height:6, background:"hsl(var(--muted))", borderRadius:3, marginBottom:24, overflow:"hidden" }}>
        <motion.div animate={{ width:`${(idx / total) * 100}%` }} style={{ height:"100%", background:color, borderRadius:3 }}/>
      </div>

      <div style={{ fontSize:13, fontWeight:700, color:color, marginBottom:14 }}>🧠 مراجعة سريعة</div>

      {/* البطاقة */}
      <div style={{ position:"relative", width:"100%", minHeight:260, marginBottom:20 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-20 }}
            style={{
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
              gap:16, padding:32, minHeight:260,
              background:"hsl(var(--card))", border:`2px solid ${color}40`, borderRadius:28,
              boxShadow:`0 12px 40px ${color}22`,
            }}>
            {card.emoji && <div style={{ fontSize:64 }}>{card.emoji}</div>}
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:32, fontWeight:900, color:color }}>{card.en}</span>
              <button onClick={() => speakWord(card.en)} style={{ width:40, height:40, borderRadius:"50%", background:`${color}1a`, border:`1.5px solid ${color}50`, cursor:"pointer", fontSize:18 }}>🔊</button>
            </div>

            {/* المعنى — يظهر بعد الكشف */}
            {revealed ? (
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} style={{ fontSize:26, fontWeight:800, color:"hsl(var(--foreground))", direction:"rtl" }}>
                {card.ar}
              </motion.div>
            ) : (
              <div style={{ fontSize:15, color:"hsl(var(--muted-foreground))" }}>تذكّر المعنى...</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* الأزرار */}
      {!revealed ? (
        <button onClick={() => setRevealed(true)}
          style={{ width:"100%", height:54, borderRadius:16, background:color, border:"none", fontSize:16, fontWeight:800, color:"#fff", cursor:"pointer", boxShadow:`0 4px 16px ${color}50` }}>
          أظهر المعنى
        </button>
      ) : (
        <div style={{ width:"100%" }}>
          <p style={{ textAlign:"center", fontSize:13, color:"hsl(var(--muted-foreground))", marginBottom:10 }}>كيف كانت معرفتك بها؟</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            <button onClick={() => grade(0)} style={gradeBtn("#ef4444")}>نسيتها 😓</button>
            <button onClick={() => grade(1)} style={gradeBtn("#f59e0b")}>صعبة 🤔</button>
            <button onClick={() => grade(2)} style={gradeBtn("#10b981")}>جيدة 🙂</button>
            <button onClick={() => grade(3)} style={gradeBtn("#06b6d4")}>سهلة 😎</button>
          </div>
        </div>
      )}
    </div>
  );
}

function gradeBtn(c: string): React.CSSProperties {
  return {
    padding:"14px", borderRadius:14, background:`${c}1a`, border:`1.5px solid ${c}60`,
    color:c, fontWeight:800, fontSize:15, cursor:"pointer",
  };
}
