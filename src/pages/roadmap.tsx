import { useState } from "react";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";

interface UnitLesson {
  id: string;
  type: "lesson" | "treasure" | "challenge";
  title: string;
  description: string;
  words?: string[];
}
interface Unit { id: string; title: string; emoji: string; color: string; lessons: UnitLesson[]; }
interface Chapter { id: string; title: string; emoji: string; gradient: string; color: string; units: Unit[]; }

const CHAPTERS: Chapter[] = [
  {
    id: "beginner", title: "المبتدئ", emoji: "🌱",
    gradient: "from-emerald-500 to-green-600", color: "#22c55e",
    units: [
      {
        id: "unit-drinks", title: "قدّم واقبل المشروبات", emoji: "☕", color: "#22c55e",
        lessons: [
          { id: "drinks-1", type: "lesson",    title: "الكلمات الأساسية", description: "ستتعلم كلمات المشروبات مثل tea وcoffee وwater وjuice مع سماع نطقها واختيار المعنى الصحيح.", words: ["tea","coffee","water","juice","milk"] },
          { id: "drinks-2", type: "lesson",    title: "كلمات جديدة",      description: "ستراجع كلمات الدرس الأول وتتعلم كلمات جديدة مثل please وthank you.", words: ["please","thank you","yes","no","sorry"] },
          { id: "drinks-t", type: "treasure",  title: "كنز المراجعة",     description: "لعبة ممتعة تشمل جميع كلمات الدرسين السابقين — اجتزها واكسب نقاطاً مضاعفة!", words: [] },
          { id: "drinks-3", type: "lesson",    title: "جمل كاملة",        description: "ستستخدم الكلمات في جمل كاملة مثل 'Would you like some tea?'", words: ["would","like","some","have","want"] },
          { id: "drinks-c", type: "challenge", title: "تحدي الوحدة",      description: "اختبار شامل لكل ما تعلمته — الكلمات والجمل والحوارات.", words: [] },
        ],
      },
    ],
  },
];

// ─── Floating Mascot (emoji — مؤقت) ──────────────────────────────────────────
function FloatingMascot({ color }: { color: string }) {
  return (
    <div style={{
      position: "fixed",
      bottom: 100,
      left: 16,
      zIndex: 40,
      pointerEvents: "none",
    }}>
      {/* Glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        style={{
          position: "absolute", inset: -10, borderRadius: "50%",
          background: color, filter: "blur(12px)",
        }}
      />
      {/* Body bounce */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ fontSize: 52, lineHeight: 1, display: "block", filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))" }}
      >
        🤖
      </motion.div>
      {/* Eyes blink */}
      <motion.div
        animate={{ scaleY: [1, 0.05, 1] }}
        transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.5, 1] }}
        style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", fontSize: 10 }}
      >
      </motion.div>
      {/* Speech bubble */}
      <motion.div
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -8] }}
        transition={{ repeat: Infinity, duration: 4, times: [0, 0.2, 0.8, 1] }}
        style={{
          position: "absolute", bottom: 62, left: "50%", transform: "translateX(-50%)",
          background: "white", color: "#1e293b",
          fontSize: 11, fontWeight: 700,
          padding: "4px 10px", borderRadius: 12,
          whiteSpace: "nowrap",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        هيا نتعلم! 🎉
        <div style={{
          position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
          width: 0, height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "6px solid white",
        }}/>
      </motion.div>
    </div>
  );
}

// ─── Treasure chest (improved) ───────────────────────────────────────────────
function TreasureIcon({ unlocked }: { unlocked: boolean }) {
  return (
    <div style={{ position: "relative", width: 76, height: 76 }}>
      {/* Ground shadow */}
      <div style={{
        position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
        width: 54, height: 10, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
        filter: "blur(5px)",
      }}/>
      <svg width="76" height="70" viewBox="0 0 76 70" fill="none">
        <defs>
          <linearGradient id="chestBodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={unlocked ? "#b45309" : "#4b5563"}/>
            <stop offset="100%" stopColor={unlocked ? "#78350f" : "#1f2937"}/>
          </linearGradient>
          <linearGradient id="chestLidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={unlocked ? "#d97706" : "#6b7280"}/>
            <stop offset="100%" stopColor={unlocked ? "#92400e" : "#374151"}/>
          </linearGradient>
          <linearGradient id="chestBandGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={unlocked ? "#fbbf24" : "#9ca3af"}/>
            <stop offset="100%" stopColor={unlocked ? "#d97706" : "#6b7280"}/>
          </linearGradient>
          {unlocked && (
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#eab308" stopOpacity="0"/>
            </radialGradient>
          )}
        </defs>

        {/* Glow behind when unlocked */}
        {unlocked && <ellipse cx="38" cy="38" rx="30" ry="28" fill="url(#glowGrad)" opacity="0.4"/>}

        {/* Chest body */}
        <rect x="8" y="34" width="60" height="28" rx="5" fill="url(#chestBodyGrad)"/>
        {/* Body side shadow */}
        <rect x="8" y="34" width="60" height="8" rx="5" fill="black" opacity="0.2"/>
        {/* Body highlight */}
        <rect x="10" y="36" width="56" height="4" rx="3" fill="white" opacity="0.08"/>

        {/* Horizontal band */}
        <rect x="8" y="44" width="60" height="7" fill="url(#chestBandGrad)"/>
        <rect x="8" y="44" width="60" height="2" fill="white" opacity="0.15"/>

        {/* Vertical band stripes */}
        <rect x="34" y="34" width="8" height="28" fill="url(#chestBandGrad)" opacity="0.7"/>

        {/* Lock */}
        <rect x="31" y="40" width="14" height="11" rx="3" fill={unlocked ? "#fef08a" : "#9ca3af"}/>
        <path d="M34 40 Q34 35 38 35 Q42 35 42 40" stroke={unlocked ? "#d97706" : "#6b7280"} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="38" cy="45" r="2" fill={unlocked ? "#d97706" : "#4b5563"}/>

        {/* Lid */}
        <rect x="8" y="18" width="60" height="18" rx="6" fill="url(#chestLidGrad)"/>
        <rect x="8" y="18" width="60" height="6" rx="6" fill="white" opacity="0.1"/>
        {/* Lid band */}
        <rect x="8" y="30" width="60" height="6" fill="url(#chestBandGrad)" opacity="0.8"/>

        {/* Lid top highlight */}
        <ellipse cx="38" cy="19" rx="22" ry="3" fill="white" opacity="0.12"/>

        {/* Coins when unlocked */}
        {unlocked && <>
          <circle cx="24" cy="32" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
          <circle cx="38" cy="28" r="6" fill="#fef08a" stroke="#eab308" strokeWidth="1"/>
          <circle cx="52" cy="32" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
          <circle cx="31" cy="29" r="4" fill="#fde68a" stroke="#eab308" strokeWidth="0.5"/>
          <circle cx="45" cy="29" r="4" fill="#fde68a" stroke="#eab308" strokeWidth="0.5"/>
          {/* Sparkles */}
          <text x="14" y="22" fontSize="10">✨</text>
          <text x="54" y="20" fontSize="9">⭐</text>
        </>}
      </svg>
    </div>
  );
}

// ─── Station circle — floating button style (مثل الصورة) ─────────────────────
function StationCircle({ type, progress, color, isCurrent }: {
  type: "lesson" | "challenge";
  progress: number;
  color: string;
  isCurrent: boolean;
}) {
  const SIZE     = type === "challenge" ? 88 : 74;
  const LIFT     = 6;   // how many px the button "floats" above its shadow
  const r        = SIZE / 2;
  const circ     = 2 * Math.PI * (r - 6);
  const isGold   = progress >= 4;
  const hasStart = progress > 0;

  // Main face color
  const faceColor  = isGold ? "#eab308" : hasStart ? color       : "#374151";
  const shadowColor= isGold ? "#78350f" : hasStart ? shadeColor(color, -55) : "#1a1a2e";
  const bgFill     = isGold ? "#1a1200" : hasStart ? "#0a180a"   : "#1c2333";
  const starColor  = isGold ? "#eab308" : hasStart ? "#ffffff"   : "#4b5563";
  const arcColor   = isGold ? "#eab308" : hasStart ? color       : "#2d3748";
  const arcW       = hasStart ? 5.5 : 4;
  const arcDash    = isGold ? `${circ} 0` : hasStart ? `${circ * Math.min(progress/4,1)} ${circ}` : `0 ${circ}`;

  // Gradient IDs (unique per size)
  const gId = `sc-${SIZE}-${isGold ? "g" : hasStart ? "a" : "i"}`;

  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE + LIFT + 14 }}>

      {/* ── 1. Colored glow halo — বাই the button (like the purple glow in screenshot) */}
      <div style={{
        position: "absolute",
        bottom: 4,
        left: "50%",
        transform: "translateX(-50%)",
        width: SIZE * 0.9,
        height: SIZE * 0.35,
        borderRadius: "50%",
        background: hasStart || isCurrent ? faceColor : "#374151",
        opacity: isCurrent ? 0.55 : hasStart ? 0.35 : 0.2,
        filter: "blur(10px)",
        zIndex: 0,
      }}/>

      {/* ── 2. Shadow disc — darker ellipse right below the button */}
      <div style={{
        position: "absolute",
        bottom: 2,
        left: "50%",
        transform: "translateX(-50%)",
        width: SIZE * 0.78,
        height: 12,
        borderRadius: "50%",
        background: shadowColor,
        opacity: 0.85,
        zIndex: 1,
      }}/>

      {/* ── 3. Pulse for current */}
      {isCurrent && (
        <motion.div style={{
          position: "absolute",
          top: 0, left: 0,
          width: SIZE, height: SIZE,
          borderRadius: "50%",
          border: `3px solid ${color}`,
          zIndex: 2,
        }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}

      {/* ── 4. Main SVG button face */}
      <svg
        width={SIZE} height={SIZE}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}
      >
        <defs>
          {/* Radial gradient: lighter top-left → darker bottom */}
          <radialGradient id={gId} cx="38%" cy="32%" r="70%">
            <stop offset="0%"   stopColor={hasStart ? lightenColor(faceColor) : "#2c3a50"}/>
            <stop offset="55%"  stopColor={hasStart ? faceColor : "#1e2d42"} stopOpacity="1"/>
            <stop offset="100%" stopColor={hasStart ? shadeColor(faceColor, -30) : "#141e2e"} stopOpacity="1"/>
          </radialGradient>
        </defs>

        {/* Dark outer ring (track base) */}
        <circle cx={r} cy={r} r={r - 2} fill={bgFill} stroke={shadeColor(faceColor, -60)} strokeWidth={3}/>

        {/* Inner filled face */}
        <circle cx={r} cy={r} r={r - 8} fill={`url(#${gId})`}/>

        {/* Progress arc */}
        <motion.circle
          cx={r} cy={r} r={r - 6} fill="none"
          stroke={arcColor} strokeWidth={arcW} strokeLinecap="round"
          strokeDasharray={arcDash}
          style={{ transform: "rotate(-90deg)", transformOrigin: `${r}px ${r}px` }}
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: arcDash }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Shine highlight (top-left arc) */}
        <ellipse
          cx={r * 0.65} cy={r * 0.5}
          rx={r * 0.38} ry={r * 0.16}
          fill="white" opacity={hasStart ? 0.18 : 0.07}
          transform={`rotate(-30, ${r}, ${r})`}
        />

        {/* Star */}
        <g transform={`translate(${r - SIZE * 0.2}, ${r - SIZE * 0.2})`}>
          <svg width={SIZE * 0.4} height={SIZE * 0.4} viewBox="0 0 24 24" fill={starColor}
            style={{ filter: isGold ? "drop-shadow(0 0 6px #eab30870)" : "none" }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </g>
      </svg>
    </div>
  );
}

// ─── Color helpers ────────────────────────────────────────────────────────────
function shadeColor(hex: string, pct: number): string {
  const n = parseInt(hex.replace("#",""), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + pct));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + pct));
  const b = Math.max(0, Math.min(255, (n & 0xff) + pct));
  return `rgb(${r},${g},${b})`;
}
function lightenColor(hex: string): string {
  try {
    const n = parseInt(hex.replace("#",""), 16);
    const r = Math.min(255, (n >> 16) + 40);
    const g = Math.min(255, ((n >> 8) & 0xff) + 40);
    const b = Math.min(255, (n & 0xff) + 40);
    return `rgb(${r},${g},${b})`;
  } catch { return hex; }
}

// ─── Duolingo-style popup card ────────────────────────────────────────────────
function StationPopup({ lesson, color, unitTitle, lessonNum, totalLessons, onClose, onStart }: {
  lesson: UnitLesson; color: string; unitTitle: string;
  lessonNum: number; totalLessons: number;
  onClose: () => void; onStart: () => void;
}) {
  const darkColor = color + "dd";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 10 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      style={{
        background: color,
        borderRadius: 20,
        padding: "16px 18px 14px",
        width: 220,
        boxShadow: `0 8px 32px ${color}60, 0 2px 8px rgba(0,0,0,0.3)`,
        position: "relative",
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Arrow down */}
      <div style={{
        position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)",
        width: 0, height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: `10px solid ${color}`,
      }}/>

      {/* Title */}
      <p className="font-bold text-white text-center mb-0.5" style={{ fontSize: 15 }}>{unitTitle}</p>
      <p className="text-white/80 text-center mb-3" style={{ fontSize: 12 }}>
        {lesson.type === "treasure" ? "كنز المراجعة" : lesson.type === "challenge" ? "تحدي الوحدة" : `الدرس ${lessonNum} من ${totalLessons}`}
      </p>

      {/* Start button */}
      <button onClick={onStart}
        style={{
          display: "block", width: "100%",
          background: "white", color: "#1e293b",
          fontWeight: 800, fontSize: 14,
          padding: "10px 0", borderRadius: 14,
          border: "none", cursor: "pointer",
          boxShadow: "0 4px 0 rgba(0,0,0,0.15)",
          transition: "transform 0.1s, box-shadow 0.1s",
        }}
        onMouseDown={e => (e.currentTarget.style.transform = "translateY(2px)", e.currentTarget.style.boxShadow = "0 2px 0 rgba(0,0,0,0.15)")}
        onMouseUp={e => (e.currentTarget.style.transform = "", e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.15)")}
      >
        ابدأ +10 XP
      </button>
    </motion.div>
  );
}

// ─── SVG path connector ───────────────────────────────────────────────────────
function PathConnector({ fromX, fromY, toX, toY, color, done }: {
  fromX: number; fromY: number; toX: number; toY: number; color: string; done: boolean;
}) {
  const midY = (fromY + toY) / 2;
  const d = `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
  return (
    <g>
      <path d={d} stroke="#2d3748" strokeWidth={6} fill="none" strokeLinecap="round" strokeDasharray="10 7"/>
      {done && (
        <motion.path d={d} stroke={color} strokeWidth={6} fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </g>
  );
}

// ─── S-curve positions ────────────────────────────────────────────────────────
const CANVAS_W = 300;
const STEP_Y   = 110;
const SIDE_PAD = 65;

function buildPath(count: number): { x: number; y: number }[] {
  const cols = [
    CANVAS_W / 2 + SIDE_PAD,
    CANVAS_W / 2,
    CANVAS_W / 2 - SIDE_PAD,
    CANVAS_W / 2,
    CANVAS_W / 2 + SIDE_PAD,
  ];
  return Array.from({ length: count }, (_, i) => ({
    x: cols[i % cols.length],
    y: 60 + i * STEP_Y,
  }));
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Roadmap() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress] = useState<Record<string, number>>({});
  const [activePopup, setActivePopup] = useState<{ lessonId: string; x: number; y: number } | null>(null);
  const chapter = CHAPTERS[activeChapter];

  const allLessons = chapter.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id, unitColor: u.color })));
  const currentIdx = allLessons.findIndex(l => (progress[l.id] ?? 0) < 4);

  // Close popup on outside click
  const handleBackdropClick = () => setActivePopup(null);

  return (
    <Layout>
      <div className="animate-in fade-in duration-500 pb-8" onClick={handleBackdropClick}>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">🗺️</div>
          <h1 className="text-3xl font-bold">خارطة التعلم</h1>
          <p className="text-muted-foreground mt-1 text-sm">طريقك من الصفر حتى إتقان الإنجليزية</p>
        </div>

        {/* Chapter tabs */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {CHAPTERS.map((ch, i) => (
            <motion.button key={ch.id} onClick={e => { e.stopPropagation(); setActiveChapter(i); }} whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-2xl border transition-all text-sm font-bold",
                activeChapter === i
                  ? `bg-gradient-to-r ${ch.gradient} text-white border-transparent shadow-lg`
                  : "bg-card border-border text-muted-foreground hover:border-primary/30"
              )}>
              <span>{ch.emoji}</span><span>{ch.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Map */}
        <motion.div key={activeChapter} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: 380, margin: "0 auto", position: "relative" }}>

          {chapter.units.map(unit => {
            const positions = buildPath(unit.lessons.length);
            const svgH = 60 + (unit.lessons.length - 1) * STEP_Y + 80;
            const lessonStations = unit.lessons.filter(l => l.type === "lesson");

            return (
              <div key={unit.id}>
                {/* Unit header */}
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center mb-8">
                  <div className={cn("flex items-center gap-3 px-5 py-3 rounded-2xl text-white shadow-lg bg-gradient-to-r", chapter.gradient)}>
                    <span className="text-2xl">{unit.emoji}</span>
                    <div className="text-right">
                      <div className="font-bold text-sm">الوحدة الأولى</div>
                      <div className="text-white/80 text-xs">{unit.title}</div>
                    </div>
                    {/* Guidebook button — في الـ header */}
                    <button
                      onClick={e => { e.stopPropagation(); alert("الدليل قادم قريباً!"); }}
                      style={{
                        marginRight: 8,
                        background: "rgba(255,255,255,0.2)",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderRadius: 10, padding: "4px 10px",
                        color: "white", fontWeight: 700, fontSize: 12,
                        cursor: "pointer", display: "flex", alignItems: "center", gap: 4,
                      }}>
                      📖 الدليل
                    </button>
                  </div>
                </motion.div>

                {/* Canvas */}
                <div style={{ position: "relative", width: CANVAS_W, margin: "0 auto", height: svgH }}>

                  {/* Connectors */}
                  <svg width={CANVAS_W} height={svgH}
                    style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                    {positions.map((pos, idx) => {
                      if (idx === 0) return null;
                      const prev = positions[idx - 1];
                      const done = (progress[unit.lessons[idx - 1].id] ?? 0) >= 4;
                      return <PathConnector key={`c${idx}`}
                        fromX={prev.x} fromY={prev.y} toX={pos.x} toY={pos.y}
                        color={unit.color} done={done} />;
                    })}
                  </svg>

                  {/* Stations */}
                  {unit.lessons.map((lesson, idx) => {
                    const { x, y } = positions[idx];
                    const lessonProgress = progress[lesson.id] ?? 0;
                    const allIdx = allLessons.findIndex(l => l.id === lesson.id);
                    const isCurrent = allIdx === currentIdx;
                    const isLocked = allIdx > 0 && (progress[allLessons[allIdx - 1]?.id] ?? 0) < 4 && lessonProgress === 0;
                    const isTreasure = lesson.type === "treasure";
                    const SIZE = lesson.type === "challenge" ? 88 : isTreasure ? 72 : 76;
                    const isPopupOpen = activePopup?.lessonId === lesson.id;

                    // lesson number (only count type=lesson)
                    const lessonNum = lessonStations.findIndex(l => l.id === lesson.id) + 1;

                    return (
                      <div key={lesson.id} style={{
                        position: "absolute",
                        left: x - SIZE / 2,
                        top: y - SIZE / 2,
                        width: SIZE,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}>
                        {/* Popup above station */}
                        <AnimatePresence>
                          {isPopupOpen && (
                            <div style={{
                              position: "absolute",
                              bottom: SIZE + 16,
                              left: "50%",
                              transform: "translateX(-50%)",
                              zIndex: 50,
                            }}
                              onClick={e => e.stopPropagation()}>
                              <StationPopup
                                lesson={lesson}
                                color={unit.color}
                                unitTitle={unit.title}
                                lessonNum={lessonNum}
                                totalLessons={lessonStations.length}
                                onClose={() => setActivePopup(null)}
                                onStart={() => {
                                  setActivePopup(null);
                                  window.location.href = `/lessons/unit-drinks/${lesson.id}`;
                                }}
                              />
                            </div>
                          )}
                        </AnimatePresence>

                        {/* "ابدأ" badge */}
                        {isCurrent && !isPopupOpen && (
                          <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                            style={{ position: "absolute", top: -46, display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
                            <div style={{
                              background: unit.color, color: "#fff",
                              fontSize: 13, fontWeight: 800,
                              padding: "4px 16px", borderRadius: 20,
                              whiteSpace: "nowrap",
                              boxShadow: `0 3px 10px ${unit.color}50`,
                            }}>ابدأ</div>
                            <div style={{
                              width: 0, height: 0,
                              borderLeft: "6px solid transparent",
                              borderRight: "6px solid transparent",
                              borderTop: `7px solid ${unit.color}`,
                            }}/>
                          </motion.div>
                        )}

                        {/* Station */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
                          whileHover={!isLocked ? { scale: 1.07 } : {}}
                          whileTap={!isLocked ? { scale: 0.94 } : {}}
                          onClick={e => {
                            e.stopPropagation();
                            if (!isLocked) {
                              setActivePopup(isPopupOpen ? null : { lessonId: lesson.id, x, y });
                            }
                          }}
                          style={{ cursor: isLocked ? "default" : "pointer" }}>
                          {isTreasure ? (
                            <div style={{ opacity: isLocked ? 0.4 : 1, position: "relative" }}>
                              <div style={{
                                position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)",
                                width: 60, height: 10, borderRadius: "50%",
                                background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
                                filter: "blur(4px)",
                              }}/>
                              <TreasureIcon unlocked={lessonProgress >= 4}/>
                            </div>
                          ) : (
                            <StationCircle
                              type={lesson.type}
                              progress={isLocked ? 0 : lessonProgress}
                              color={unit.color}
                              isCurrent={isCurrent}
                            />
                          )}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Coming soon */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="text-center mt-16 space-y-2">
            <div className="text-3xl">🔜</div>
            <p className="text-sm text-muted-foreground">وحدات جديدة قادمة قريباً</p>
          </motion.div>
          <div className="h-16"/>
        </motion.div>
      </div>

      {/* Floating Mascot */}
      <FloatingMascot color={chapter.color} />
    </Layout>
  );
}
