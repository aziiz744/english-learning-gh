import { useState, useEffect, useCallback } from "react";
import { useParams } from "wouter";
import { Layout } from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { getLessonMiniExercises } from "@/lib/lesson-exercises";
import type { ExObj } from "@/lib/lesson-exercises";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/use-auth";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Lesson map ────────────────────────────────────────────────────────────────
const LESSON_MAP: Record<string, { title: string; tier: 0|1|2|3; unitTitle: string; emoji: string; color: string }> = {
  "drinks-1": { title: "الكلمات الأساسية", tier: 0, unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-2": { title: "كلمات جديدة",      tier: 1, unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-3": { title: "جمل كاملة",        tier: 2, unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-c": { title: "تحدي الوحدة",      tier: 3, unitTitle: "قدّم واقبل المشروبات", emoji: "🏆", color: "#22a55e" },
};

// ── Speech ────────────────────────────────────────────────────────────────────
function speak(text: string) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

// ── Hearts ────────────────────────────────────────────────────────────────────
function Hearts({ count, isPro }: { count: number; isPro: boolean }) {
  if (isPro) return (
    <div className="flex items-center gap-1">
      {[0,1,2,3,4].map(i => (
        <motion.div key={i} animate={{ scale:[1,1.05,1] }} transition={{ repeat:Infinity, duration:2, delay:i*0.2 }}>
          <Heart className="w-5 h-5 fill-blue-400 text-blue-400" />
        </motion.div>
      ))}
      <span className="text-xs text-blue-400 font-bold mr-1">∞</span>
    </div>
  );
  return (
    <div className="flex items-center gap-1">
      {[0,1,2,3,4].map(i => (
        <motion.div key={i} animate={i === count ? { scale:[1,1.5,1] } : {}} transition={{ duration:0.3 }}>
          <Heart className={cn("w-5 h-5 transition-all", i < count ? "fill-red-500 text-red-500" : "text-muted-foreground/20 fill-muted-foreground/10")} />
        </motion.div>
      ))}
    </div>
  );
}

// ── Underlined word (new vocab indicator) ────────────────────────────────────
function WordBtn({ word, color }: { word: string; color: string }) {
  return (
    <span
      onClick={() => speak(word)}
      style={{ borderBottom: `2px dotted ${color}`, cursor: "pointer", fontWeight: 800, direction: "ltr", display: "inline-block" }}
    >{word}</span>
  );
}

// ── Word Order ────────────────────────────────────────────────────────────────
function WordOrderQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok: boolean) => void }) {
  const [wordBank] = useState(() => ex.sentence!.split(" ").map((w,i)=>({w,i})).sort(()=>Math.random()-0.5));
  const [selected, setSelected] = useState<{w:string;i:number}[]>([]);
  const [remaining, setRemaining] = useState(wordBank);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

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
    const ok = selected.map(x=>x.w).join(" ") === ex.correctAnswer;
    setCorrect(ok); setSubmitted(true);
    setTimeout(()=>onAnswer(ok), 1400);
  };

  return (
    <div>
      <div style={{ fontSize:13, color:"hsl(var(--muted-foreground))", textAlign:"center", marginBottom:16 }}>🔤 رتّب الكلمات لتكوين جملة صحيحة</div>
      <div onClick={()=>speak(ex.correctAnswer)} style={{ cursor:"pointer", textAlign:"center", marginBottom:20 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill={color} style={{margin:"0 auto"}}><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        <div style={{fontSize:11,color:"hsl(var(--muted-foreground))"}}>استمع للجملة</div>
      </div>
      {/* Answer area */}
      <div style={{ minHeight:52, background:"hsl(var(--background))", border:`2px solid ${submitted ? (correct?"#16a34a":"#dc2626") : "hsl(var(--border))"}`, borderRadius:14, padding:"10px 14px", display:"flex", flexWrap:"wrap", gap:8, marginBottom:16 }}>
        {selected.map((item,i)=>(
          <motion.button key={`${item.i}-${i}`} initial={{scale:0.8}} animate={{scale:1}} onClick={()=>remove(i)}
            style={{ background:color+"25", border:`1.5px solid ${color}60`, borderRadius:8, padding:"6px 12px", fontSize:15, fontWeight:700, cursor:"pointer", color:"hsl(var(--foreground))" }}>
            {item.w}
          </motion.button>
        ))}
      </div>
      {/* Word bank */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24, justifyContent:"center" }}>
        {remaining.map((item,i)=>(
          <motion.button key={`${item.i}-bank`} initial={{opacity:0}} animate={{opacity:1}} onClick={()=>add(item,i)}
            style={{ background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", borderRadius:8, padding:"6px 12px", fontSize:15, fontWeight:700, cursor:"pointer" }}>
            {item.w}
          </motion.button>
        ))}
      </div>
      {!submitted && selected.length>0 && (
        <button onClick={submit} style={{ width:"100%", padding:14, background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>تحقق</button>
      )}
      {submitted && (
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} style={{ padding:14, borderRadius:14, background:correct?"#16a34a15":"#dc262615", border:`2px solid ${correct?"#16a34a":"#dc2626"}`, textAlign:"center" }}>
          <div style={{ fontSize:22, marginBottom:6 }}>{correct?"✅ ممتاز!":"❌ الإجابة الصحيحة:"}</div>
          {!correct && <div style={{ fontWeight:800, direction:"ltr", marginBottom:6 }}>{ex.correctAnswer}</div>}
          <div style={{ fontSize:13, color:"hsl(var(--muted-foreground))" }}>{ex.explanation}</div>
        </motion.div>
      )}
    </div>
  );
}

// ── Translate ─────────────────────────────────────────────────────────────────
function TranslateQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<string|null>(null);

  const choose = (o: string) => {
    if (picked) return;
    setPicked(o);
    speak(o);
    setTimeout(()=>onAnswer(o===ex.correctAnswer), 1200);
  };

  return (
    <div>
      <div style={{ fontSize:13, color:"hsl(var(--muted-foreground))", textAlign:"center", marginBottom:12 }}>🔄 اختر الترجمة الصحيحة</div>
      <div style={{ textAlign:"center", fontSize:26, fontWeight:900, marginBottom:28, direction:"rtl" }}>{ex.arabic}</div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {(ex.options??[]).map(o=>{
          const isCorrect = o===ex.correctAnswer;
          const isPicked = o===picked;
          return (
            <motion.button key={o} whileTap={{scale:0.97}} onClick={()=>choose(o)}
              style={{
                padding:"14px 16px", borderRadius:14, fontSize:15, fontWeight:700,
                cursor:picked?"default":"pointer", textAlign:"left", direction:"ltr",
                background: isPicked?(isCorrect?"#16a34a20":"#dc262620") : (picked&&isCorrect?"#16a34a20":"hsl(var(--card))"),
                border: `2px solid ${isPicked?(isCorrect?"#16a34a":"#dc2626"):(picked&&isCorrect?"#16a34a":"hsl(var(--border))")}`,
                display:"flex", alignItems:"center", justifyContent:"space-between",
              }}>
              <span>{o}</span>
              <span onClick={e=>{e.stopPropagation();speak(o);}} style={{ opacity:0.6, fontSize:18 }}>🔊</span>
            </motion.button>
          );
        })}
      </div>
      {picked && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{ marginTop:14, fontSize:13, color:"hsl(var(--muted-foreground))", textAlign:"center", direction:"rtl", padding:"10px 16px", background:"hsl(var(--muted))", borderRadius:12 }}>{ex.explanation}</motion.div>}
    </div>
  );
}

// ── Listen & Select ───────────────────────────────────────────────────────────
function ListenQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<string|null>(null);
  useEffect(()=>{ speak(ex.listenSentence!); },[]);

  const choose = (o: string) => {
    if (picked) return;
    setPicked(o);
    setTimeout(()=>onAnswer(o===ex.correctAnswer), 1200);
  };

  return (
    <div>
      <div style={{ fontSize:13, color:"hsl(var(--muted-foreground))", textAlign:"center", marginBottom:16 }}>🎧 استمع واختر الكلمة التي سمعتها</div>
      <div style={{ textAlign:"center", marginBottom:28 }}>
        <motion.button whileTap={{scale:0.92}} onClick={()=>speak(ex.listenSentence!)}
          style={{ width:80, height:80, borderRadius:"50%", background:color, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 8px", boxShadow:`0 6px 20px ${color}50` }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </motion.button>
        <div style={{ fontSize:12, color:"hsl(var(--muted-foreground))" }}>اضغط للاستماع مجدداً</div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {(ex.options??[]).map(o=>{
          const isCorrect=o===ex.correctAnswer, isPicked=o===picked;
          return (
            <motion.button key={o} whileTap={{scale:0.97}} onClick={()=>choose(o)}
              style={{ padding:"14px 16px", borderRadius:14, fontSize:16, fontWeight:800, cursor:picked?"default":"pointer", direction:"ltr",
                background:isPicked?(isCorrect?"#16a34a20":"#dc262620"):(picked&&isCorrect?"#16a34a20":"hsl(var(--card))"),
                border:`2px solid ${isPicked?(isCorrect?"#16a34a":"#dc2626"):(picked&&isCorrect?"#16a34a":"hsl(var(--border))")}` }}>
              {o}
            </motion.button>
          );
        })}
      </div>
      {picked && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{ marginTop:14, fontSize:13, color:"hsl(var(--muted-foreground))", textAlign:"center", direction:"rtl", padding:"10px 16px", background:"hsl(var(--muted))", borderRadius:12 }}>{ex.explanation}</motion.div>}
    </div>
  );
}

// ── Picture Match ─────────────────────────────────────────────────────────────
function PictureQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<string|null>(null);

  const choose = (label: string) => {
    if (picked) return;
    speak(label);
    setPicked(label);
    setTimeout(()=>onAnswer(label===ex.correctAnswer), 1200);
  };

  return (
    <div>
      <div style={{ fontSize:13, color:"hsl(var(--muted-foreground))", textAlign:"center", marginBottom:12 }}>🖼️ اختر الصورة المناسبة</div>
      <div style={{ textAlign:"center", marginBottom:24 }}>
        <div style={{ fontSize:22, fontWeight:900, direction:"ltr", display:"inline-flex", alignItems:"center", gap:8 }}>
          <WordBtn word={ex.word!} color={color}/>
        </div>
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
              <span style={{ fontSize:48 }}>{o.emoji}</span>
              <span style={{ fontSize:13, fontWeight:700, direction:"ltr", borderBottom:`2px dotted ${color}60`, paddingBottom:2 }}>{o.label}</span>
            </motion.button>
          );
        })}
      </div>
      {picked && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{ marginTop:14, fontSize:13, color:"hsl(var(--muted-foreground))", textAlign:"center", direction:"rtl", padding:"10px 16px", background:"hsl(var(--muted))", borderRadius:12 }}>{ex.explanation}</motion.div>}
    </div>
  );
}

// ── Game Over ─────────────────────────────────────────────────────────────────
function GameOver({ onRestart }: { onRestart: () => void }) {
  return (
    <div style={{ textAlign:"center", padding:"60px 20px" }}>
      <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring", stiffness:200}}>
        <div style={{ fontSize:80, marginBottom:16 }}>💔</div>
      </motion.div>
      <h2 style={{ fontSize:24, fontWeight:900, marginBottom:8 }}>نفدت القلوب!</h2>
      <p style={{ color:"hsl(var(--muted-foreground))", marginBottom:32 }}>لا بأس، حاول مجدداً وستنجح!</p>
      <button onClick={onRestart} style={{ padding:"14px 40px", background:"hsl(var(--primary))", color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>
        حاول مجدداً 💪
      </button>
    </div>
  );
}

// ── Finish Screen ─────────────────────────────────────────────────────────────
function FinishScreen({ score, total, onRestart, onBack }: { score:number; total:number; onRestart:()=>void; onBack:()=>void }) {
  const pct = Math.round((score/total)*100);
  const stars = pct>=90?3:pct>=70?2:1;
  return (
    <div style={{ textAlign:"center", padding:"40px 20px", maxWidth:380, margin:"0 auto" }}>
      <motion.div initial={{scale:0,rotate:-20}} animate={{scale:1,rotate:0}} transition={{type:"spring", stiffness:200, delay:0.2}}>
        <div style={{ fontSize:80, marginBottom:8 }}>{stars===3?"🏆":stars===2?"⭐":"📚"}</div>
      </motion.div>
      <div style={{ display:"flex", justifyContent:"center", gap:4, marginBottom:16 }}>
        {[1,2,3].map(s=>(
          <motion.div key={s} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3+s*0.15}}>
            <span style={{ fontSize:32, filter:s<=stars?"none":"grayscale(1) opacity(0.3)" }}>⭐</span>
          </motion.div>
        ))}
      </div>
      <h2 style={{ fontSize:24, fontWeight:900, marginBottom:8 }}>{stars===3?"أحسنت!":stars===2?"جيد!":"واصل التدريب!"}</h2>
      <p style={{ color:"hsl(var(--muted-foreground))", marginBottom:8 }}>{score} من {total} إجابة صحيحة</p>
      <div style={{ width:"100%", height:10, background:"hsl(var(--muted))", borderRadius:10, overflow:"hidden", marginBottom:32 }}>
        <motion.div initial={{width:0}} animate={{width:`${pct}%`}} transition={{duration:0.8, delay:0.5}} style={{ height:"100%", background:"hsl(var(--primary))", borderRadius:10 }}/>
      </div>
      <div style={{ display:"flex", gap:12 }}>
        <button onClick={onRestart} style={{ flex:1, padding:14, background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>أعد المحاولة 🔄</button>
        <button onClick={onBack} style={{ flex:1, padding:14, background:"hsl(var(--primary))", color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>للخارطة 🗺️</button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
const MAX_HEARTS = 5;

export default function UnitLesson() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const meta = id ? LESSON_MAP[id] : undefined;

  const [isPro, setIsPro] = useState(false);
  const [exercises, setExercises] = useState<ExObj[]>([]);
  const [queue, setQueue] = useState<ExObj[]>([]);
  const [current, setCurrent] = useState(0);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [phase, setPhase] = useState<"playing"|"gameover"|"finish">("playing");

  // Load pro status
  useEffect(() => {
    if (!user) return;
    supabase.from("user_stats").select("is_pro").eq("user_id", user.id).single()
      .then(({ data }) => setIsPro(data?.is_pro ?? false));
  }, [user]);

  // Load exercises
  const loadExercises = useCallback(() => {
    if (!meta) return;
    const exs = getLessonMiniExercises(meta.title, 7, meta.tier);
    setExercises(exs);
    setQueue([...exs]);
    setCurrent(0);
    setHearts(MAX_HEARTS);
    setScore(0);
    setTotal(0);
    setPhase("playing");
  }, [meta]);

  useEffect(() => { loadExercises(); }, [loadExercises]);

  const handleAnswer = (ok: boolean) => {
    setTotal(t => t + 1);
    if (ok) {
      setScore(s => s + 1);
      // Remove from queue
      setQueue(q => {
        const newQ = q.slice(1);
        if (newQ.length === 0) setPhase("finish");
        else setCurrent(0);
        return newQ;
      });
    } else {
      // Wrong — lose heart and push question to end
      if (!isPro) {
        const newH = hearts - 1;
        setHearts(newH);
        if (newH <= 0) { setPhase("gameover"); return; }
      }
      setQueue(q => {
        const wrong = q[0];
        const newQ = [...q.slice(1), wrong]; // push to end
        return newQ;
      });
      setCurrent(0);
    }
  };

  if (!meta) return (
    <Layout>
      <div style={{ textAlign:"center", padding:60 }}>
        <div style={{ fontSize:64, marginBottom:16 }}>😕</div>
        <h2 style={{ marginBottom:16 }}>الدرس غير موجود</h2>
        <button onClick={()=>history.back()} style={{ padding:"10px 24px", background:"hsl(var(--primary))", color:"white", border:"none", borderRadius:12, fontWeight:700, cursor:"pointer" }}>رجوع</button>
      </div>
    </Layout>
  );

  const ex = queue[current];
  const progress = exercises.length ? ((exercises.length - queue.length) / exercises.length) * 100 : 0;

  return (
    <Layout>
      <div style={{ maxWidth:440, margin:"0 auto", padding:"0 16px 60px" }}>
        {phase === "gameover" && <GameOver onRestart={loadExercises}/>}
        {phase === "finish"   && <FinishScreen score={score} total={total} onRestart={loadExercises} onBack={()=>history.back()}/>}

        {phase === "playing" && <>
          {/* Top bar */}
          <div style={{ display:"flex", alignItems:"center", gap:12, padding:"16px 0 20px", position:"sticky", top:0, background:"hsl(var(--background))", zIndex:20 }}>
            <button onClick={()=>history.back()} style={{ width:36, height:36, borderRadius:"50%", background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>✕</button>
            <div style={{ flex:1, height:10, background:"hsl(var(--muted))", borderRadius:10, overflow:"hidden" }}>
              <motion.div animate={{ width:`${progress}%` }} style={{ height:"100%", background:meta.color, borderRadius:10 }} transition={{ duration:0.4 }}/>
            </div>
            <Hearts count={hearts} isPro={isPro}/>
          </div>

          {/* Unit label */}
          <div style={{ textAlign:"center", marginBottom:28 }}>
            <div style={{ fontSize:12, color:"hsl(var(--muted-foreground))", marginBottom:4 }}>{meta.unitTitle} {meta.emoji}</div>
            <div style={{ fontWeight:900, fontSize:20, color:meta.color }}>{meta.title}</div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            {ex && (
              <motion.div key={`${ex.id}-${queue.length}`} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}} transition={{duration:0.22}}>
                {ex.type==="word_order"    && <WordOrderQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                {ex.type==="translate"     && <TranslateQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                {ex.type==="listen_select" && <ListenQ     ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                {ex.type==="picture_match" && <PictureQ    ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
              </motion.div>
            )}
          </AnimatePresence>
        </>}
      </div>
    </Layout>
  );
}
