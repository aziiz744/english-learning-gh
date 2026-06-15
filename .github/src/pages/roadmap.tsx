import { useState, useRef, useEffect } from "react";
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
          { id: "drinks-1", type: "lesson",    title: "الكلمات الأساسية", description: "ستتعلم الكلمات الأساسية للمشروبات مثل tea وcoffee وwater وjuice مع سماع نطقها واختيار المعنى الصحيح.", words: ["tea","coffee","water","juice","milk"] },
          { id: "drinks-2", type: "lesson",    title: "كلمات جديدة",      description: "ستراجع كلمات الدرس الأول وتتعلم كلمات جديدة مثل please وthank you — الكلمات الجديدة بلون مميز.", words: ["please","thank you","yes","no","sorry"] },
          { id: "drinks-t", type: "treasure",  title: "كنز المراجعة",     description: "لعبة ممتعة تشمل جميع كلمات الدرسين السابقين — اجتزها واكسب نقاطاً مضاعفة!", words: [] },
          { id: "drinks-3", type: "lesson",    title: "جمل كاملة",        description: "ستستخدم الكلمات في جمل كاملة مثل 'Would you like some tea?' وتدرّب على الترتيب الصحيح.", words: ["would","like","some","have","want"] },
          { id: "drinks-c", type: "challenge", title: "تحدي الوحدة",      description: "اختبار شامل لكل ما تعلمته — الكلمات والجمل والحوارات. اجتزه لتكتمل دائرتك الذهبية!", words: [] },
        ],
      },
    ],
  },
];

// ─── Mascot ───────────────────────────────────────────────────────────────────
// placeholder SVG — يُستبدل بشخصية الموقع لاحقاً
function Mascot() {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      style={{ width: 56, height: 56, flexShrink: 0 }}
    >
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
        {/* Body */}
        <ellipse cx="28" cy="36" rx="14" ry="16" fill="#6366f1"/>
        {/* Head */}
        <circle cx="28" cy="20" r="13" fill="#818cf8"/>
        {/* Eyes */}
        <circle cx="23" cy="19" r="3.5" fill="white"/>
        <circle cx="33" cy="19" r="3.5" fill="white"/>
        <circle cx="23.8" cy="19.8" r="1.8" fill="#1e1b4b"/>
        <circle cx="33.8" cy="19.8" r="1.8" fill="#1e1b4b"/>
        {/* Shine */}
        <circle cx="24.5" cy="18.5" r="0.8" fill="white" opacity="0.9"/>
        <circle cx="34.5" cy="18.5" r="0.8" fill="white" opacity="0.9"/>
        {/* Smile */}
        <path d="M23 24 Q28 28 33 24" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        {/* Ears / antenna */}
        <circle cx="16" cy="11" r="3.5" fill="#a5b4fc"/>
        <circle cx="40" cy="11" r="3.5" fill="#a5b4fc"/>
        {/* Arms */}
        <ellipse cx="14" cy="36" rx="4" ry="7" fill="#6366f1" transform="rotate(-15 14 36)"/>
        <ellipse cx="42" cy="36" rx="4" ry="7" fill="#6366f1" transform="rotate(15 42 36)"/>
        {/* Chest badge */}
        <rect x="22" y="32" width="12" height="10" rx="3" fill="#4f46e5" opacity="0.6"/>
        <text x="28" y="40" textAnchor="middle" fontSize="6" fill="#c7d2fe" fontWeight="bold">EN</text>
      </svg>
    </motion.div>
  );
}

// ─── Treasure chest ───────────────────────────────────────────────────────────
function TreasureIcon({ unlocked, color }: { unlocked: boolean; color: string }) {
  const gold  = unlocked ? "#eab308" : "#6b7280";
  const dark  = unlocked ? "#92400e" : "#374151";
  const mid   = unlocked ? "#b45309" : "#4b5563";
  const shine = unlocked ? "#fef08a" : "#9ca3af";
  return (
    <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
      <rect x="4" y="6"  width="56" height="20" rx="5" fill={dark}/>
      <rect x="7" y="8"  width="50" height="10" rx="3" fill={mid}/>
      <rect x="4" y="24" width="56" height="3"  fill={dark}/>
      <rect x="4" y="27" width="56" height="24" rx="4" fill={mid}/>
      <rect x="4" y="27" width="56" height="10" fill={dark} opacity="0.35"/>
      <rect x="26" y="18" width="12" height="14" rx="3" fill={gold}/>
      <circle cx="32" cy="22" r="3" fill={dark}/>
      <rect x="30" y="23" width="4" height="5" rx="1" fill={dark}/>
      <rect x="4"  y="34" width="56" height="4" fill={dark} opacity="0.45"/>
      <rect x="9"  y="9"  width="20" height="4" rx="2" fill={shine} opacity="0.4"/>
      {unlocked && <>
        <circle cx="22" cy="29" r="4"   fill="#eab308"/>
        <circle cx="32" cy="26" r="4.5" fill="#fbbf24"/>
        <circle cx="42" cy="29" r="4"   fill="#eab308"/>
        <circle cx="27" cy="25" r="3"   fill="#fde68a"/>
        <circle cx="37" cy="25" r="3"   fill="#fde68a"/>
      </>}
    </svg>
  );
}

// ─── Station circle ───────────────────────────────────────────────────────────
function StationCircle({ type, progress, color, isCurrent }: {
  type: "lesson" | "challenge";
  progress: number;
  color: string;
  isCurrent: boolean;
}) {
  const SIZE   = type === "challenge" ? 88 : 76;
  const cx     = SIZE / 2, cy = SIZE / 2;
  const r      = SIZE / 2 - 6;
  const circ   = 2 * Math.PI * r;
  const isGold = progress >= 4;
  const hasStart = progress > 0;

  const ringColor  = isGold ? "#eab308" : hasStart ? color : "#4b5563";
  const bgFill     = hasStart ? (isGold ? "#1c1600" : "#0d2010") : "#1e293b";
  const starColor  = isGold ? "#eab308" : hasStart ? "#ffffff" : "#4b5563";
  const strokeFill = isGold ? "#eab308" : hasStart ? color : "#374151";
  const strokeW    = hasStart ? 5 : 3.5;
  const filledDash = isGold
    ? `${circ} 0`
    : hasStart ? `${circ * Math.min(progress / 4, 1)} ${circ}` : `0 ${circ}`;

  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE }}>
      <div style={{
        position: "absolute", bottom: -8, left: "50%",
        transform: "translateX(-50%)",
        width: SIZE * 0.7, height: 12, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
        filter: "blur(4px)", zIndex: 0,
      }}/>
      {isCurrent && (
        <motion.div style={{
          position: "absolute", inset: -5, borderRadius: "50%",
          backgroundColor: color, opacity: 0.2,
        }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}
      <svg width={SIZE} height={SIZE} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
        <circle cx={cx} cy={cy} r={r} fill={bgFill} stroke="#374151" strokeWidth={3.5}/>
        <motion.circle
          cx={cx} cy={cy} r={r} fill="none"
          stroke={strokeFill} strokeWidth={strokeW} strokeLinecap="round"
          strokeDasharray={filledDash}
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: filledDash }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        <ellipse cx={cx} cy={cy - r + 4} rx={r * 0.5} ry={4}
          fill="white" opacity={hasStart ? 0.06 : 0.03}/>
      </svg>
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width={SIZE * 0.42} height={SIZE * 0.42} viewBox="0 0 24 24" fill={starColor}
          style={{ filter: isGold ? "drop-shadow(0 0 5px #eab30890)" : "none", transition: "fill 0.4s, filter 0.4s" }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>
  );
}

// ─── SVG path connector between stations ─────────────────────────────────────
function PathConnector({ fromX, fromY, toX, toY, color, done }: {
  fromX: number; fromY: number; toX: number; toY: number; color: string; done: boolean;
}) {
  const midY = (fromY + toY) / 2;
  const d = `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
  return (
    <g>
      {/* background track */}
      <path d={d} stroke="#374151" strokeWidth={5} fill="none" strokeLinecap="round" strokeDasharray="8 6"/>
      {/* filled */}
      {done && (
        <motion.path
          d={d} stroke={color} strokeWidth={5} fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </g>
  );
}

// ─── Guide modal ──────────────────────────────────────────────────────────────
function GuideModal({ lesson, color, onClose, onStart }: {
  lesson: UnitLesson; color: string; onClose: () => void; onStart: () => void;
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)" }} onClick={onClose}>
      <motion.div
        initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }} transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="bg-card border border-border rounded-3xl p-6 w-full max-w-sm space-y-4"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{lesson.type === "treasure" ? "💎" : lesson.type === "challenge" ? "🏆" : "📖"}</span>
          <div>
            <h2 className="font-bold text-base">{lesson.title}</h2>
            <p className="text-xs text-muted-foreground">{lesson.type === "treasure" ? "كنز" : lesson.type === "challenge" ? "تحدي الوحدة" : "درس"}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{lesson.description}</p>
        {lesson.words && lesson.words.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold">كلمات ستتعلمها:</p>
            <div className="flex flex-wrap gap-2">
              {lesson.words.map(w => (
                <span key={w} style={{ backgroundColor: color + "20", color }}
                  className="text-xs font-bold px-3 py-1 rounded-full" dir="ltr">{w}</span>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-3 pt-1">
          <button onClick={onClose}
            className="flex-1 py-3 rounded-2xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-all">
            لاحقاً
          </button>
          <button onClick={onStart}
            style={{ background: color }}
            className="flex-1 py-3 rounded-2xl text-white text-sm font-bold hover:opacity-90 transition-all">
            ابدأ الآن ←
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── S-curve positions for N stations ────────────────────────────────────────
// Returns array of {x, y} in local SVG coords.
// The canvas width = CANVAS_W, each station spaced STEP_Y apart vertically.
const CANVAS_W = 300;
const STEP_Y   = 110;
const SIDE_PAD = 60; // how far left/right from center

function buildPath(count: number): { x: number; y: number }[] {
  // Zig-zag: alternating left/right/center columns
  const cols = [
    CANVAS_W / 2 + SIDE_PAD,   // right
    CANVAS_W / 2,               // center
    CANVAS_W / 2 - SIDE_PAD,   // left
    CANVAS_W / 2,               // center
    CANVAS_W / 2 + SIDE_PAD,   // right (repeat)
  ];
  return Array.from({ length: count }, (_, i) => ({
    x: cols[i % cols.length],
    y: 60 + i * STEP_Y,
  }));
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Roadmap() {
  const [activeChapter, setActiveChapter] = useState(0);
  const { user } = useAuth();
  const [progress] = useState<Record<string, number>>({});
  const [guide, setGuide] = useState<{ lesson: UnitLesson; color: string } | null>(null);
  const chapter = CHAPTERS[activeChapter];

  const allLessons = chapter.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id, unitColor: u.color })));
  const currentIdx = allLessons.findIndex(l => (progress[l.id] ?? 0) < 4);

  return (
    <Layout>
      <div className="animate-in fade-in duration-500 pb-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">🗺️</div>
          <h1 className="text-3xl font-bold">خارطة التعلم</h1>
          <p className="text-muted-foreground mt-1 text-sm">طريقك من الصفر حتى إتقان الإنجليزية</p>
        </div>

        {/* Chapter tabs */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {CHAPTERS.map((ch, i) => (
            <motion.button key={ch.id} onClick={() => setActiveChapter(i)} whileTap={{ scale: 0.95 }}
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
          style={{ maxWidth: 380, margin: "0 auto" }}>

          {chapter.units.map(unit => {
            const positions = buildPath(unit.lessons.length);
            const svgH = 60 + (unit.lessons.length - 1) * STEP_Y + 80;

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
                  </div>
                </motion.div>

                {/* SVG canvas for path + stations */}
                <div style={{ position: "relative", width: CANVAS_W, margin: "0 auto", height: svgH }}>

                  {/* SVG connectors */}
                  <svg
                    width={CANVAS_W} height={svgH}
                    style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                    {positions.map((pos, idx) => {
                      if (idx === 0) return null;
                      const prev = positions[idx - 1];
                      const prevLesson = unit.lessons[idx - 1];
                      const done = (progress[prevLesson.id] ?? 0) >= 4;
                      return (
                        <PathConnector
                          key={`conn-${idx}`}
                          fromX={prev.x} fromY={prev.y}
                          toX={pos.x}   toY={pos.y}
                          color={unit.color} done={done}
                        />
                      );
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

                    // mascot side: alternate with path zigzag
                    // show mascot only next to current station
                    const mascotSide = x > CANVAS_W / 2 ? "left" : "right"; // opposite of station side

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
                        {/* "ابدأ" badge */}
                        {isCurrent && (
                          <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                            style={{ position: "absolute", top: -46, display: "flex", flexDirection: "column", alignItems: "center" }}>
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

                        {/* Mascot — beside current station */}
                        {isCurrent && (
                          <div style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            [mascotSide === "left" ? "right" : "left"]: SIZE + 8,
                          }}>
                            <Mascot />
                          </div>
                        )}

                        {/* Station */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
                          whileHover={!isLocked ? { scale: 1.07 } : {}}
                          whileTap={!isLocked ? { scale: 0.94 } : {}}
                          onClick={() => !isLocked && setGuide({ lesson, color: unit.color })}
                          style={{ cursor: isLocked ? "default" : "pointer" }}>
                          {isTreasure ? (
                            <div style={{ position: "relative", opacity: isLocked ? 0.4 : 1 }}>
                              <div style={{
                                position: "absolute", bottom: -8, left: "50%",
                                transform: "translateX(-50%)",
                                width: 60, height: 10, borderRadius: "50%",
                                background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
                                filter: "blur(4px)",
                              }}/>
                              <TreasureIcon unlocked={lessonProgress >= 4} color={unit.color}/>
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

      {/* Guide modal */}
      <AnimatePresence>
        {guide && (
          <GuideModal
            lesson={guide.lesson}
            color={guide.color}
            onClose={() => setGuide(null)}
            onStart={() => {
              setGuide(null);
              window.location.href = `/lessons/unit-drinks/${guide.lesson.id}`;
            }}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
