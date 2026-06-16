import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useLocation } from "wouter";
import { Layout } from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { getLessonMiniExercises } from "@/lib/lesson-exercises";
import type { ExObj } from "@/lib/lesson-exercises";
import { supabase } from "@/lib/supabase";

import { useAuth } from "@/hooks/use-auth";
import { useSound } from "@/hooks/useSound";
import { Heart, Check, X, ArrowRight, Trophy, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Lesson map ────────────────────────────────────────────────────────────────
// كل نجمة = bank عنوانه، فيها 4 دروس داخلية (t0..t3)، كل درس 7 أسئلة
const LESSON_MAP: Record<string, { title: string; unitTitle: string; emoji: string; color: string }> = {
  "drinks-1": { title: "الكلمات الأساسية", unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-2": { title: "كلمات جديدة",      unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-t": { title: "تحدي الوحدة",      unitTitle: "قدّم واقبل المشروبات", emoji: "💎", color: "#22a55e" },
  "drinks-3": { title: "جمل كاملة",        unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-c": { title: "تحدي الوحدة",      unitTitle: "قدّم واقبل المشروبات", emoji: "🏆", color: "#22a55e" },
};

// ── TTS ───────────────────────────────────────────────────────────────────────
function lightColor(hex: string): string {
  try {
    const n = parseInt(hex.replace("#",""), 16);
    const r = Math.min(255, (n >> 16) + 60);
    const g = Math.min(255, ((n >> 8) & 0xff) + 60);
    const b = Math.min(255, (n & 0xff) + 60);
    return `rgb(${r},${g},${b})`;
  } catch { return hex; }
}

function speak(text: string, rate = 0.85) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = rate;
  window.speechSynthesis.speak(u);
}
function speakSlow(text: string) { speak(text, 0.5); }

// ── Hearts ────────────────────────────────────────────────────────────────────
function Hearts({ count, isPro }: { count: number; isPro: boolean }) {
  if (isPro) return (
    <div className="flex items-center gap-1">
      {[0,1,2,3,4].map(i => (
        <Heart key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
      ))}
      <span className="text-xs text-blue-400 font-bold mr-1">∞</span>
    </div>
  );
  return (
    <div className="flex items-center gap-1">
      {[0,1,2,3,4].map(i => (
        <motion.div key={i} animate={i === count ? { scale:[1,1.5,1] } : {}} transition={{ duration:0.3 }}>
          <Heart className={cn("w-4 h-4 transition-all", i < count ? "fill-red-500 text-red-500" : "text-muted-foreground/20 fill-muted-foreground/10")} />
        </motion.div>
      ))}
    </div>
  );
}

// ── Dotted word with hover-speak ──────────────────────────────────────────────
function W({ word, color }: { word: string; color: string }) {
  return (
    <span
      onClick={() => speak(word)}
      style={{ borderBottom:`2px dotted ${color}`, cursor:"pointer", fontWeight:800, direction:"ltr", display:"inline" }}
    >{word}</span>
  );
}

// ── Feedback bar ──────────────────────────────────────────────────────────────
function FeedbackBar({ correct, explanation, correctAnswer, onNext, color }: {
  correct: boolean; explanation: string; correctAnswer?: string;
  onNext: () => void; color: string;
}) {
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
      className={cn("rounded-2xl border-2 overflow-hidden", correct ? "bg-green-500/10 border-green-500/40" : "bg-red-500/10 border-red-500/40")}>
      {/* Top bar */}
      <div className={cn("px-4 py-2.5 flex items-center gap-2", correct ? "bg-green-500/15" : "bg-red-500/15")}>
        <span className="text-xl">{correct ? "✅" : "❌"}</span>
        <h4 className={cn("font-bold text-base", correct ? "text-green-400" : "text-red-400")}>
          {correct ? "إجابة صحيحة! أحسنت 🎉" : "إجابة خاطئة — لا تيأس!"}
        </h4>
      </div>
      {/* Body */}
      <div className="px-4 py-3 space-y-2">
        {!correct && correctAnswer && (
          <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
            <Check className="w-4 h-4 text-green-400 shrink-0" />
            <span className="text-sm text-muted-foreground">الإجابة الصحيحة: </span>
            <span className="text-green-400 font-bold">{correctAnswer}</span>
          </div>
        )}
        {explanation && <p className="text-xs text-muted-foreground leading-relaxed">{explanation}</p>}
        <button onClick={onNext}
          style={{ width:"100%", padding:"13px", borderRadius:14, border:"none", fontWeight:800, fontSize:15, cursor:"pointer",
            background: correct ? "#22c55e" : "hsl(var(--primary))", color:"white", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
          التالي <ArrowRight size={18}/>
        </button>
      </div>
    </motion.div>
  );
}

// ── Word Order ────────────────────────────────────────────────────────────────
function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function WordOrderQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [wordBank] = useState(() => {
    const words = ex.sentence!.split(" ").map((w, i) => ({ w, i }));
    if (words.length < 2) return words;
    let shuffled = shuffleArr(words);
    // أعد الخلط إذا طلع نفس ترتيب الجملة الأصلية
    let tries = 0;
    while (tries < 10 && shuffled.map(x => x.w).join(" ") === ex.sentence) {
      shuffled = shuffleArr(words);
      tries++;
    }
    return shuffled;
  });
  const [selected, setSelected] = useState<{w:string;i:number}[]>([]);
  const [remaining, setRemaining] = useState(wordBank);
  const [submitted, setSubmitted] = useState(false);

  useEffect(()=>{ const t = setTimeout(()=>speak(ex.correctAnswer), 350); return ()=>clearTimeout(t); },[]);

  const add = (item:{w:string;i:number}, idx:number) => {
    if (submitted) return;
    setSelected(s=>[...s,item]);
    setRemaining(r=>r.filter((_,j)=>j!==idx));
  };
  const remove = (idx:number) => {
    if (submitted) return;
    setRemaining(r=>[...r,selected[idx]]);
    setSelected(s=>s.filter((_,j)=>j!==idx));
  };
  const submit = () => {
    setSubmitted(true);
    onAnswer(selected.map(x=>x.w).join(" ") === ex.correctAnswer, selected.map(x=>x.w).join(" "));
  };

  return (
    <div>
      <div style={{ display:"flex", gap:12, justifyContent:"center", alignItems:"center", marginBottom:20 }}>
        {/* عادي */}
        <motion.button whileTap={{scale:0.92}} onClick={()=>speak(ex.correctAnswer)}
          style={{ width:72, height:72, borderRadius:20, background:color, border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 5px 18px ${color}50` }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </motion.button>
        {/* سلحفاة بطيء */}
        <motion.button whileTap={{scale:0.92}} onClick={()=>speakSlow(ex.correctAnswer)}
          style={{ width:58, height:58, borderRadius:18, background:`${color}25`, border:`2px solid ${color}50`, cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:28 }}>🐢</span>
        </motion.button>
      </div>
      {/* Answer area */}
      <div style={{ minHeight:52, background:"hsl(var(--background))", border:`2px solid hsl(var(--border))`, borderRadius:14, padding:"10px 14px", display:"flex", flexWrap:"wrap", gap:8, marginBottom:14 }}>
        {selected.length === 0 && <span style={{ color:"hsl(var(--muted-foreground))", fontSize:13, margin:"auto" }}>اضغط على الكلمات لترتيبها هنا</span>}
        {selected.map((item,i)=>(
          <motion.button key={item.i} initial={{scale:0.8}} animate={{scale:1}} onClick={()=>remove(i)}
            style={{ background:`${color}20`, border:`1.5px solid ${color}60`, borderRadius:8, padding:"6px 12px", fontSize:15, fontWeight:700, cursor:"pointer" }}>
            {item.w}
          </motion.button>
        ))}
      </div>
      {/* Word bank */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:20, justifyContent:"center" }}>
        {remaining.map((item,i)=>(
          <motion.button key={item.i} initial={{opacity:0}} animate={{opacity:1}} onClick={()=>add(item,i)}
            
            style={{ background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", borderRadius:8, padding:"6px 14px", fontSize:15, fontWeight:700, cursor:"pointer" }}>
            {item.w}
          </motion.button>
        ))}
      </div>
      {!submitted && selected.length > 0 && (
        <button onClick={submit} style={{ width:"100%", padding:14, background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>تحقق ✓</button>
      )}
    </div>
  );
}

// ── Translate ─────────────────────────────────────────────────────────────────
function TranslateQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const choose = (o: string) => {
    if (confirmed) return;
    setPicked(o);
    speak(o);
  };

  const confirm = () => {
    if (!picked || confirmed) return;
    setConfirmed(true);
    onAnswer(picked === ex.correctAnswer, picked);
  };

  return (
    <div>
      <div style={{ textAlign:"center", fontSize:24, fontWeight:900, marginBottom:28, direction:"rtl", lineHeight:1.5 }}>{ex.arabic}</div>
      <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:16 }}>
        {(ex.options??[]).map(o=>{
          const isCorrect = o===ex.correctAnswer, isPicked = o===picked;
          let bg = "hsl(var(--card))", border = "2px solid hsl(var(--border))";
          if (isPicked && !confirmed) { bg=`${color}20`; border=`2px solid ${color}`; }
          return (
            <motion.button key={o} whileTap={{scale:0.97}} onClick={()=>choose(o)}
              style={{ padding:"16px 18px", borderRadius:14, fontSize:16, fontWeight:700, cursor:confirmed?"default":"pointer",
                textAlign:"left", direction:"ltr", background:bg, border,
                display:"flex", alignItems:"center", justifyContent:"space-between",
                minHeight:56 }}>
              <span>{o}</span>
              <span onClick={e=>{e.stopPropagation();speak(o);}}
                style={{ fontSize:18, opacity:0.5, cursor:"pointer" }}>🔊</span>
            </motion.button>
          );
        })}
      </div>
      {!confirmed && (
        <button onClick={confirm} disabled={!picked}
          style={{ width:"100%", padding:14, background:picked?color:"hsl(var(--muted))", color:picked?"white":"hsl(var(--muted-foreground))", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:picked?"pointer":"not-allowed", transition:"all 0.2s" }}>
          تحقق ✓
        </button>
      )}
    </div>
  );
}

// ── Listen & Select ───────────────────────────────────────────────────────────
function ListenQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);
  useEffect(()=>{
    // تشغيل تلقائي موثوق — ننتظر جاهزية المحرك
    const play = () => speak(ex.listenSentence!);
    const t = setTimeout(play, 400);
    return ()=>clearTimeout(t);
  },[]);

  const choose = (o: string) => {
    if (picked) return;
    setPicked(o);
    onAnswer(o===ex.correctAnswer, o);
  };

  return (
    <div>
      {/* Audio buttons: عادي + سلحفاة بطيء */}
      <div style={{ display:"flex", gap:14, justifyContent:"center", alignItems:"center", marginBottom:28 }}>
        {/* عادي — كبير */}
        <motion.button whileTap={{scale:0.92}} onClick={()=>speak(ex.listenSentence!)}
          style={{ width:96, height:96, borderRadius:24, background:color, border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 6px 24px ${color}55` }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </motion.button>
        {/* سلحفاة — بطيء */}
        <motion.button whileTap={{scale:0.92}} onClick={()=>speakSlow(ex.listenSentence!)}
          style={{ width:72, height:72, borderRadius:20, background:`${color}25`, border:`2px solid ${color}50`, cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:34 }}>🐢</span>
        </motion.button>
      </div>
      <div style={{ fontSize:12, color:"hsl(var(--muted-foreground))", textAlign:"center", marginBottom:24 }}>اضغط 🔊 للعادي أو 🐢 للبطيء</div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {(ex.options??[]).map(o=>{
          const isCorrect=o===ex.correctAnswer, isPicked=o===picked;
          return (
            <motion.button key={o} whileTap={{scale:0.97}} onClick={()=>choose(o)}
              style={{ padding:"16px 18px", borderRadius:14, fontSize:16, fontWeight:800, cursor:picked?"default":"pointer", direction:"ltr", minHeight:56,
                background:isPicked?(isCorrect?"#16a34a20":"#dc262620"):(picked&&isCorrect?"#16a34a20":"hsl(var(--card))"),
                border:`2px solid ${isPicked?(isCorrect?"#16a34a":"#dc2626"):(picked&&isCorrect?"#16a34a":"hsl(var(--border))")}` }}>
              {o}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ── Picture Match ─────────────────────────────────────────────────────────────
function PictureQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);

  const choose = (label: string) => {
    if (picked) return;
    speak(label);
    setPicked(label);
    onAnswer(label===ex.correctAnswer, label);
  };

  return (
    <div>
      <div style={{ textAlign:"center", marginBottom:24 }}>
        <W word={ex.word!} color={color}/>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        {(ex.pictureOptions??[]).map(o=>{
          const isCorrect=o.label===ex.correctAnswer, isPicked=o.label===picked;
          return (
            <motion.button key={o.label} whileTap={{scale:0.95}} onClick={()=>choose(o.label)}
              style={{ padding:"20px 10px", borderRadius:16, cursor:picked?"default":"pointer",
                display:"flex", flexDirection:"column", alignItems:"center", gap:10,
                background:isPicked?(isCorrect?"#16a34a20":"#dc262620"):(picked&&isCorrect?"#16a34a20":"hsl(var(--card))"),
                border:`2px solid ${isPicked?(isCorrect?"#16a34a":"#dc2626"):(picked&&isCorrect?"#16a34a":"hsl(var(--border))")}` }}>
              <span style={{ fontSize:52 }}>{o.emoji}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ── Fill Blank (اتبع النمط) ──────────────────────────────────────────────────
function FillBlankQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const parts = (ex.blankSentence ?? "").split("___");

  useEffect(()=>{ const t=setTimeout(()=>speak((ex.blankSentence??"").replace("___", ex.correctAnswer)), 300); return ()=>clearTimeout(t); },[]);

  const confirm = () => {
    if (!picked || confirmed) return;
    setConfirmed(true);
    onAnswer(picked === ex.correctAnswer, picked);
  };

  return (
    <div>
      {/* Audio */}
      <div style={{ display:"flex", gap:12, justifyContent:"center", alignItems:"center", marginBottom:24 }}>
        <motion.button whileTap={{scale:0.92}} onClick={()=>speak((ex.blankSentence??"").replace("___", picked ?? ex.correctAnswer))}
          style={{ width:64, height:64, borderRadius:18, background:color, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 5px 18px ${color}50` }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </motion.button>
        <motion.button whileTap={{scale:0.92}} onClick={()=>speakSlow((ex.blankSentence??"").replace("___", picked ?? ex.correctAnswer))}
          style={{ width:52, height:52, borderRadius:16, background:`${color}25`, border:`2px solid ${color}50`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:26 }}>🐢</span>
        </motion.button>
      </div>

      {/* Sentence with blank */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:28, fontSize:24, fontWeight:800, direction:"ltr", flexWrap:"wrap" }}>
        <span>{parts[0]}</span>
        <span style={{ minWidth:90, borderBottom:`3px solid ${picked?color:"hsl(var(--border))"}`, textAlign:"center", color:picked?color:"transparent", paddingBottom:2 }}>{picked ?? "__"}</span>
        <span>{parts[1]}</span>
      </div>

      {/* Options */}
      <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", marginBottom:20 }}>
        {(ex.blankOptions??[]).map(o=>(
          <motion.button key={o} whileTap={{scale:0.95}} onClick={()=>!confirmed && setPicked(o)}
            style={{ padding:"12px 22px", borderRadius:14, fontSize:16, fontWeight:800, direction:"ltr", cursor:confirmed?"default":"pointer",
              background: picked===o ? `${color}25` : "hsl(var(--card))",
              border: `2px solid ${picked===o ? color : "hsl(var(--border))"}` }}>{o}</motion.button>
        ))}
      </div>

      {!confirmed && (
        <button onClick={confirm} disabled={!picked}
          style={{ width:"100%", padding:14, background:picked?color:"hsl(var(--muted))", color:picked?"white":"hsl(var(--muted-foreground))", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:picked?"pointer":"not-allowed" }}>
          تحقق ✓
        </button>
      )}
    </div>
  );
}

// ── Matching pairs (الأزواج المتطابقة) ───────────────────────────────────────
function MatchingQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const pairs = ex.pairs ?? [];
  const [enCol] = useState(()=>[...pairs].sort(()=>Math.random()-0.5));
  const [arCol] = useState(()=>[...pairs].sort(()=>Math.random()-0.5));
  const [selected, setSelected] = useState<{ col:"en"|"ar"; en:string } | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongKey, setWrongKey] = useState<string|null>(null);

  const playMatchCorrect = () => {
    try {
      const ac = new (window.AudioContext||(window as any).webkitAudioContext)();
      const o = ac.createOscillator(); const g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = 660; o.type="sine";
      g.gain.setValueAtTime(0.1, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+0.3);
      o.start(); o.stop(ac.currentTime+0.3);
    } catch {}
  };

  const tryMatch = (col:"en"|"ar", en:string) => {
    if (matched.has(en)) return;
    if (col === "en") speak(en);
    if (!selected) { setSelected({ col, en }); return; }
    if (selected.col === col) { setSelected({ col, en }); return; }
    if (selected.en === en) {
      playMatchCorrect();
      const nm = new Set(matched); nm.add(en);
      setMatched(nm); setSelected(null);
      if (nm.size === pairs.length) setTimeout(()=>onAnswer(true, "matched"), 600);
    } else {
      setWrongKey(col+en);
      setTimeout(()=>{ setWrongKey(null); setSelected(null); }, 600);
    }
  };

  return (
    <div>
      <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
        <div style={{ flex:1, maxWidth:200, display:"flex", flexDirection:"column", gap:10 }}>
          {enCol.map(p=>{
            const isMatched = matched.has(p.en);
            const isSelected = selected?.col==="en" && selected.en===p.en;
            const isWrong = wrongKey === "en"+p.en;
            return (
              <motion.button key={p.en} whileTap={{scale:0.96}} onClick={()=>tryMatch("en", p.en)}
                animate={isMatched?{opacity:0.4,scale:0.96}:isWrong?{x:[0,-6,6,-6,0]}:{}}
                style={{ padding:"14px 12px", borderRadius:14, fontSize:15, fontWeight:800, direction:"ltr", cursor:isMatched?"default":"pointer",
                  background: isMatched ? `${color}15` : isSelected ? `${color}30` : isWrong ? "#dc262620" : "hsl(var(--card))",
                  border: `2px solid ${isMatched ? color : isSelected ? color : isWrong ? "#dc2626" : "hsl(var(--border))"}` }}>
                {isMatched ? "✓ "+p.en : p.en}
              </motion.button>
            );
          })}
        </div>
        <div style={{ flex:1, maxWidth:200, display:"flex", flexDirection:"column", gap:10 }}>
          {arCol.map(p=>{
            const isMatched = matched.has(p.en);
            const isSelected = selected?.col==="ar" && selected.en===p.en;
            const isWrong = wrongKey === "ar"+p.en;
            return (
              <motion.button key={p.ar} whileTap={{scale:0.96}} onClick={()=>tryMatch("ar", p.en)}
                animate={isMatched?{opacity:0.4,scale:0.96}:isWrong?{x:[0,-6,6,-6,0]}:{}}
                style={{ padding:"14px 12px", borderRadius:14, fontSize:15, fontWeight:800, direction:"rtl", cursor:isMatched?"default":"pointer",
                  background: isMatched ? `${color}15` : isSelected ? `${color}30` : isWrong ? "#dc262620" : "hsl(var(--card))",
                  border: `2px solid ${isMatched ? color : isSelected ? color : isWrong ? "#dc2626" : "hsl(var(--border))"}` }}>
                {isMatched ? "✓ "+p.ar : p.ar}
              </motion.button>
            );
          })}
        </div>
      </div>
      <p style={{ textAlign:"center", fontSize:13, color:"hsl(var(--muted-foreground))", marginTop:20 }}>
        {selected ? "الآن اختر ما يطابقها من العمود الآخر" : "اختر أي كلمة لبدء المطابقة"}
      </p>
    </div>
  );
}

// ── Completion Screen ─────────────────────────────────────────────────────────
function CompletionScreen({ score, total, xpEarned, hearts, isPro, subLesson, isLast, color, onNext, onRetry, onBack }: {
  score:number; total:number; xpEarned:number; hearts:number; isPro:boolean;
  subLesson:number; isLast:boolean; color:string;
  onNext:()=>void; onRetry:()=>void; onBack:()=>void;
}) {
  const pct = Math.round((score/total)*100);
  const stars = pct>=90?3:pct>=70?2:1;

  return (
    <motion.div initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:150}}
      className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md text-center overflow-hidden border-2 border-primary/30 rounded-2xl shadow-2xl bg-card">
        {/* Header */}
        <div className="py-8 flex flex-col items-center bg-primary/10 relative">
          <motion.div animate={{rotate:[0,-10,10,-10,0],scale:[1,1.1,1]}} transition={{delay:0.3,duration:0.6}}
            className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 shadow-xl shadow-primary/30">
            <Trophy className="w-12 h-12" />
          </motion.div>
          <h2 className="text-2xl font-bold text-primary mb-1">{isLast ? "🎉 أكملت المحطة!" : "🎯 أحسنت!"}</h2>
          {/* Sub-lesson dots */}
          <div style={{ display:"flex", gap:8, margin:"10px 0 4px" }}>
            {[1,2,3,4].map(i=>(
              <motion.div key={i} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3+i*0.1}}
                style={{ width:30, height:30, borderRadius:"50%",
                  background: i <= subLesson ? color : "hsl(var(--muted))",
                  border:`2px solid ${i <= subLesson ? color : "hsl(var(--border))"}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color:"white", fontWeight:800, fontSize:13 }}>
                {i <= subLesson ? "✓" : i}
              </motion.div>
            ))}
          </div>
          <p style={{ fontSize:13, color:"hsl(var(--muted-foreground))", marginTop:4 }}>
            الدرس {subLesson} من 4
          </p>
          <div className="flex gap-1 mt-2">
            {[0,1,2].map(i=>(
              <motion.div key={i} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5+i*0.15}}>
                <Star className={cn("w-5 h-5", i<stars?"text-amber-400 fill-amber-400":"text-muted-foreground/20")}/>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Stats */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-muted/50 rounded-2xl flex flex-col items-center">
              <div className="text-xs text-muted-foreground mb-1">الدقة</div>
              <div className="text-2xl font-bold">{pct}%</div>
            </div>
            <div className="p-3 bg-primary/10 rounded-2xl flex flex-col items-center border border-primary/20">
              <div className="text-xs text-muted-foreground mb-1">XP</div>
              <div className="text-2xl font-bold text-primary">+{xpEarned}</div>
            </div>
            <div className="p-3 bg-muted/50 rounded-2xl flex flex-col items-center">
              <div className="text-xs text-muted-foreground mb-1">الإجابات</div>
              <div className="text-2xl font-bold">{score}/{total}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-5 text-sm text-muted-foreground">
            <span>القلوب المتبقية:</span>
            <Hearts count={hearts} isPro={isPro}/>
          </div>
          <div className="space-y-3">
            {isLast ? (
              <button onClick={onBack} style={{ width:"100%", padding:"14px", background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                واصل الرحلة 🗺️ <ArrowRight size={18}/>
              </button>
            ) : (
              <button onClick={onNext} style={{ width:"100%", padding:"14px", background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                الدرس التالي <ArrowRight size={18}/>
              </button>
            )}
            <button onClick={onRetry} style={{ width:"100%", padding:"12px", background:"transparent", border:"2px solid hsl(var(--border))", borderRadius:14, fontWeight:700, fontSize:14, cursor:"pointer" }}>
              أعد هذا الدرس 🔄
            </button>
            {!isLast && (
              <button onClick={onBack} style={{ width:"100%", padding:"10px", background:"transparent", border:"none", color:"hsl(var(--muted-foreground))", fontWeight:700, fontSize:13, cursor:"pointer" }}>
                الخروج للخارطة
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Game Over ─────────────────────────────────────────────────────────────────
function GameOverScreen({ score, total, isPro, onRetry, onBack }: {
  score:number; total:number; isPro:boolean; onRetry:()=>void; onBack:()=>void;
}) {
  return (
    <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md text-center border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl bg-card">
        <div className="bg-red-500/10 py-12 flex flex-col items-center">
          <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:200}}>
            <div className="text-7xl mb-4">💔</div>
          </motion.div>
          <h2 className="text-3xl font-bold text-red-400 mb-2">نفدت القلوب!</h2>
          <p className="text-muted-foreground">لا تستسلم، حاول مرة أخرى!</p>
        </div>
        <div className="p-8 space-y-4">
          <p className="text-muted-foreground text-sm">أجبت بشكل صحيح على <span className="font-bold text-foreground">{score}</span> من {total} سؤال</p>
          {!isPro && (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-sm text-right">
              <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">💙 هل تعلم؟</div>
              <p className="text-muted-foreground">بالحصول على <span className="text-blue-400 font-bold">Pro</span> ستحصل على قلوب لا نهائية 💙</p>
            </div>
          )}
          <button onClick={onRetry} style={{ width:"100%", padding:"14px", background:"hsl(var(--primary))", color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>حاول مرة أخرى 🔄</button>
          <button onClick={onBack} style={{ width:"100%", padding:"12px", background:"transparent", border:"2px solid hsl(var(--border))", borderRadius:14, fontWeight:700, fontSize:14, cursor:"pointer" }}>رجوع للخارطة</button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
const MAX_HEARTS = 5;

export default function UnitLesson() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading } = useAuth();
  const { playCorrect, playWrong, playComplete } = useSound();
  const meta = id ? LESSON_MAP[id] : undefined;

  const isPro = user?.isPro;
  const proLoaded = !authLoading; // use auth loading state
  const [subLesson, setSubLesson] = useState(0); // 0..3 = الدرس الداخلي الحالي
  const [maxSubReached, setMaxSubReached] = useState(0); // أعلى تقدم محفوظ (لا يقل)
  const [resumeLoaded, setResumeLoaded] = useState(false);
  const [queue, setQueue] = useState<ExObj[]>([]);
  const [doneCount, setDoneCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [score, setScore] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showStreakPop, setShowStreakPop] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [phase, setPhase] = useState<"playing"|"gameover"|"finish"|"subdone">("playing");
  const [feedback, setFeedback] = useState<{ ok: boolean; explanation: string; correctAnswer: string } | null>(null);
  const [mascotState, setMascotState] = useState<"idle"|"correct"|"wrong"|"complete">("idle");
  const mascotTimer = useRef<ReturnType<typeof setTimeout>>();



  const loadExercises = useCallback((tier: number) => {
    if (!meta) return;
    const raw = getLessonMiniExercises(meta.title, 7, tier as 0|1|2|3);
    // اخلط ترتيب الأسئلة + اخلط الخيارات داخل كل سؤال
    const shuffled = [...raw]
      .sort(() => Math.random() - 0.5)
      .map(ex => {
        const copy = { ...ex };
        if (copy.options && copy.options.length > 1) {
          copy.options = [...copy.options].sort(() => Math.random() - 0.5);
        }
        if (copy.pictureOptions && copy.pictureOptions.length > 1) {
          copy.pictureOptions = [...copy.pictureOptions].sort(() => Math.random() - 0.5);
        }
        return copy;
      });
    setQueue(shuffled);
    setDoneCount(0);
    setTotalCount(0);
    setScore(0);
    setXpEarned(0);
    setStreak(0);
    setHearts(MAX_HEARTS);
    setPhase("playing");
    setFeedback(null);
    setMascotState("idle");
  }, [meta]);

  // اقرأ التقدم المحفوظ وابدأ من الدرس الداخلي الصحيح (مرة واحدة)
  useEffect(() => {
    if (!user || !id || resumeLoaded) { if (!user && proLoaded) setResumeLoaded(true); return; }
    supabase.from("unit_progress").select("sub_progress").eq("user_id", user.id).eq("lesson_id", id).maybeSingle()
      .then(({ data }) => {
        const saved = data?.sub_progress ?? 0;
        setMaxSubReached(saved); // احفظ أعلى تقدم سابق
        if (saved > 0 && saved < 4) setSubLesson(saved); // استكمل من حيث وقف
        setResumeLoaded(true);
      });
  }, [user, id, proLoaded]);

  useEffect(() => { if (resumeLoaded) loadExercises(subLesson); }, [loadExercises, subLesson, resumeLoaded]);

  const setMascotFor = (state: "correct"|"wrong"|"complete", dur = 2500) => {
    clearTimeout(mascotTimer.current);
    setMascotState(state);
    if (state !== "complete") {
      mascotTimer.current = setTimeout(() => setMascotState("idle"), dur);
    }
  };

  const handleAnswer = (ok: boolean, answer: string) => {
    const ex = queue[0];
    setTotalCount(t => t + 1);
    if (ok) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      // كل 3 إجابات صحيحة متتالية → احتفال
      if (newStreak > 0 && newStreak % 3 === 0) {
        setShowStreakPop(true);
        setTimeout(() => setShowStreakPop(false), 2000);
      }
      playCorrect();
      setMascotFor("correct");
      setScore(s => s + 1);
      setXpEarned(x => x + (ex.xp ?? 10));
      setFeedback({ ok: true, explanation: ex.explanation, correctAnswer: ex.correctAnswer });
    } else {
      setStreak(0); // كسر الستريك
      playWrong();
      setMascotFor("wrong");
      if (isPro === false) {
        const newH = hearts - 1;
        setHearts(newH);
        if (newH <= 0) {
          setFeedback({ ok: false, explanation: ex.explanation, correctAnswer: ex.correctAnswer });
          return;
        }
      }
      setFeedback({ ok: false, explanation: ex.explanation, correctAnswer: ex.correctAnswer });
    }
  };

  const handleNext = () => {
    if (!feedback) return;
    const ok = feedback.ok;
    const ex = queue[0];
    setFeedback(null);

    if (!ok && hearts <= 0 && isPro === false) {
      setPhase("gameover");
      return;
    }

    if (ok) {
      const rest = queue.slice(1);
      setDoneCount(d => d + 1);

      if (rest.length === 0) {
        // خلصنا كل أسئلة الدرس الداخلي
        const completedSub = subLesson + 1; // 1..4
        const saveSub = Math.max(completedSub, maxSubReached); // لا يقل التقدم أبداً
        setMaxSubReached(saveSub);

        // احفظ التقدم (بدون كسر الـ flow إذا فشل)
        if (user) {
          supabase.from("unit_progress").upsert({
            user_id: user.id,
            lesson_id: id,
            sub_progress: saveSub,
            completed_at: saveSub >= 4 ? new Date().toISOString() : null,
            score: Math.round(((score) / Math.max(totalCount, 1)) * 100),
          }, { onConflict: "user_id,lesson_id" }).then(({ error }) => {
            if (error) console.warn("progress save failed:", error.message);
          });
          supabase.from("user_stats").select("total_xp,weekly_xp,exercises_completed")
            .eq("user_id", user.id).single().then(({ data }) => {
              if (data) {
                supabase.from("user_stats").update({
                  total_xp: (data.total_xp ?? 0) + xpEarned,
                  weekly_xp: (data.weekly_xp ?? 0) + xpEarned,
                  exercises_completed: (data.exercises_completed ?? 0) + 1,
                }).eq("user_id", user.id);
              }
            });
        }

        setMascotFor("complete", 0);
        playComplete();
        setQueue([]);
        setPhase("finish"); // CompletionScreen يميز عبر isLast
      } else {
        setQueue(rest);
      }
    } else {
      // خطأ — ادفع السؤال لآخر القائمة وأعد تركيب المكوّن
      setQueue(q => [...q.slice(1), { ...ex, id: `${ex.id}-r${Date.now()}` }]);
    }
  };

  const progress = (doneCount / Math.max(doneCount + queue.length, 1)) * 100;
  const ex = queue[0];


  if (!meta) return (
    <Layout>
      <div style={{ textAlign:"center", padding:60 }}>
        <div style={{ fontSize:64, marginBottom:16 }}>😕</div>
        <h2 style={{ marginBottom:16 }}>الدرس غير موجود</h2>
        <button onClick={()=>history.back()} style={{ padding:"10px 24px", background:"hsl(var(--primary))", color:"white", border:"none", borderRadius:12, fontWeight:700, cursor:"pointer" }}>رجوع</button>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div style={{ maxWidth:440, margin:"0 auto", padding:"0 16px", height:"calc(100svh - 130px)", display:"flex", flexDirection:"column" }}>

        {phase === "gameover" && <GameOverScreen score={score} total={totalCount} isPro={isPro??false} onRetry={()=>loadExercises(subLesson)} onBack={()=>setLocation("/roadmap")}/>}
        {phase === "finish"   && <CompletionScreen
          score={score} total={totalCount} xpEarned={xpEarned} hearts={hearts} isPro={isPro??false}
          subLesson={subLesson+1} isLast={subLesson+1 >= 4} color={meta.color}
          onNext={()=>setSubLesson(s=>s+1)}
          onRetry={()=>loadExercises(subLesson)}
          onBack={()=>setLocation("/roadmap")}/>}

        {phase === "playing" && <>
          {/* Top bar */}
          <div style={{ display:"flex", alignItems:"center", gap:8, padding:"14px 0 18px", position:"sticky", top:0, background:"hsl(var(--background))", zIndex:20, flexShrink:0 }}>
            <button onClick={()=>setShowExitConfirm(true)} style={{ width:32, height:32, borderRadius:"50%", background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:14 }}>✕</button>
            <div style={{ flex:1, height:12, background:"hsl(var(--muted))", borderRadius:10, overflow:"hidden", minWidth:0 }}>
              <motion.div animate={{ width:`${progress}%` }} style={{ height:"100%", background:`linear-gradient(90deg, ${meta.color}, ${lightColor(meta.color)})`, borderRadius:10, boxShadow:`0 0 8px ${meta.color}80` }} transition={{ duration:0.4 }}/>
            </div>
            {/* Show hearts only when pro status is loaded */}
            {proLoaded && <Hearts count={hearts} isPro={isPro}/>}
          </div>

          {/* Lesson label */}
          <div style={{ textAlign:"center", marginBottom:20, flexShrink:0 }}>
            <div style={{ fontSize:12, color:"hsl(var(--muted-foreground))", marginBottom:3 }}>{meta.unitTitle} {meta.emoji}</div>
            <div style={{ fontWeight:900, fontSize:19, color:meta.color }}>{meta.title}</div>
          </div>

          {/* Main content area */}
          <div style={{ overflowY:"auto", display:"flex", flexDirection:"column", paddingBottom:16 }}>
            {/* Question — يبقى ظاهر حتى بعد الإجابة */}
            <AnimatePresence mode="wait">
              {ex && (
                <motion.div key={`${ex.id}-${queue.length}`}
                  initial={{opacity:0,x:40}} animate={{opacity:1,x:0}}
                  transition={{duration:0.22}}>
                  <div style={{ fontSize:11, color:"hsl(var(--muted-foreground))", textAlign:"center", marginBottom:14, textTransform:"uppercase", letterSpacing:"0.08em" }}>
                    {ex.type==="word_order"?"🔤 رتّب الكلمات":ex.type==="translate"?"🔄 اختر الترجمة":ex.type==="listen_select"?"🎧 استمع واختر":ex.type==="fill_blank"?"✏️ اتبع النمط":ex.type==="matching"?"🔗 الأزواج المتطابقة":"🖼️ طابق الصورة"}
                  </div>
                  {ex.type==="word_order"    && <WordOrderQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="translate"     && <TranslateQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="listen_select" && <ListenQ     ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="picture_match" && <PictureQ    ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="fill_blank"    && <FillBlankQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="matching"      && <MatchingQ   ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Streak popup — رسالة تحفيز */}
          <AnimatePresence>
            {showStreakPop && (
              <motion.div
                initial={{ opacity:0, scale:0.5, y:20 }} animate={{ opacity:1, scale:1, y:0 }} exit={{ opacity:0, scale:0.5 }}
                style={{ position:"fixed", top:"30%", left:"50%", transform:"translateX(-50%)", zIndex:50,
                  background:meta.color, color:"white", fontWeight:900, fontSize:20, padding:"12px 28px", borderRadius:20,
                  whiteSpace:"nowrap", boxShadow:`0 8px 30px ${meta.color}70`, pointerEvents:"none" }}>
                🔥 {streak} متتالية! رائع!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feedback bar — عرض كامل، الشخصية مخفية */}
          <div style={{ flexShrink:0, paddingBottom:8 }}>
            <AnimatePresence>
              {feedback && (
                <motion.div key="fb" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:16}}>
                  <FeedbackBar correct={feedback.ok} explanation={feedback.explanation} correctAnswer={feedback.correctAnswer} onNext={handleNext} color={meta.color}/>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>}

        {/* Exit confirmation modal */}
        <AnimatePresence>
          {showExitConfirm && (
            <motion.div
              initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              onClick={()=>setShowExitConfirm(false)}
              style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:60, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <motion.div
                initial={{scale:0.85,y:20}} animate={{scale:1,y:0}} exit={{scale:0.85,y:20}}
                onClick={e=>e.stopPropagation()}
                style={{ background:"hsl(var(--card))", borderRadius:24, padding:"28px 24px", maxWidth:340, width:"100%", textAlign:"center", border:"2px solid hsl(var(--border))" }}>
                <div style={{ fontSize:52, marginBottom:12 }}>🛑</div>
                <h3 style={{ fontWeight:900, fontSize:19, marginBottom:8 }}>انتظر، لا ترحل!</h3>
                <p style={{ color:"hsl(var(--muted-foreground))", fontSize:14, lineHeight:1.6, marginBottom:24 }}>
                  ستفقد تقدّم هذا الدرس إذا غادرت الآن
                </p>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  <button onClick={()=>setShowExitConfirm(false)}
                    style={{ width:"100%", padding:"13px", background:meta.color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>
                    تابع التعلم 💪
                  </button>
                  <button onClick={()=>setLocation("/roadmap")}
                    style={{ width:"100%", padding:"13px", background:"transparent", border:"2px solid #dc2626", color:"#dc2626", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>
                    إنهاء الجلسة
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
