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

// Treasure chest SVG
function TreasureIcon({ unlocked, color }: { unlocked: boolean; color: string }) {
  const gold   = unlocked ? "#eab308" : "#6b7280";
  const dark   = unlocked ? "#92400e" : "#374151";
  const mid    = unlocked ? "#b45309" : "#4b5563";
  const shine  = unlocked ? "#fef08a" : "#9ca3af";
  const accent = unlocked ? color     : "#6b7280";
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

// Station circle — large with star inside
function StationCircle({ type, progress, color, isCurrent }: {
  type: "lesson" | "challenge";
  progress: number; // 0..4
  color: string;
  isCurrent: boolean;
}) {
  const SIZE = type === "challenge" ? 88 : 76;
  const cx = SIZE / 2, cy = SIZE / 2;
  const r  = SIZE / 2 - 6;
  const circ = 2 * Math.PI * r;
  const isComplete = progress >= 4;
  const isGold  = isComplete;
  const hasStart = progress > 0;

  // Colors
  const ringColor  = isGold ? "#eab308" : hasStart ? color : "#4b5563";
  const bgFill     = hasStart ? (isGold ? "#1c1600" : "#0d2010") : "#1e293b";
  const starColor  = isGold ? "#eab308" : hasStart ? "#ffffff" : "#4b5563";
  const strokeFill = isGold ? "#eab308" : hasStart ? color : "#374151";
  const strokeW    = hasStart ? 5 : 3.5;

  const filledDash = isGold
    ? `${circ} 0`
    : hasStart
      ? `${circ * Math.min(progress / 4, 1)} ${circ}`
      : `0 ${circ}`;

  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE }}>
      {/* Cylinder shadow */}
      <div style={{
        position: "absolute", bottom: -8, left: "50%",
        transform: "translateX(-50%)",
        width: SIZE * 0.7, height: 12,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
        filter: "blur(4px)",
        zIndex: 0,
      }}/>
      {/* Pulse for current */}
      {isCurrent && (
        <motion.div style={{
          position: "absolute", inset: -5, borderRadius: "50%",
          backgroundColor: color, opacity: 0.2,
        }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}
      {/* SVG ring */}
      <svg width={SIZE} height={SIZE} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
        {/* Base circle */}
        <circle cx={cx} cy={cy} r={r} fill={bgFill} stroke="#374151" strokeWidth={3.5}/>
        {/* Progress arc */}
        <motion.circle
          cx={cx} cy={cy} r={r} fill="none"
          stroke={strokeFill} strokeWidth={strokeW} strokeLinecap="round"
          strokeDasharray={filledDash}
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: filledDash }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        {/* Cylinder top highlight */}
        <ellipse cx={cx} cy={cy - r + 4} rx={r * 0.5} ry={4}
          fill="white" opacity={hasStart ? 0.06 : 0.03}/>
      </svg>
      {/* Star icon */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width={SIZE * 0.42} height={SIZE * 0.42} viewBox="0 0 24 24" fill={starColor}
          style={{ filter: isGold ? "drop-shadow(0 0 5px #eab30890)" : "none",
                   transition: "fill 0.4s, filter 0.4s" }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>
  );
}

// Guide modal
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

// Arc positions for 5 stations — gentle C-curve (left side bulges)
// x values relative to center (0 = center, neg = left, pos = right)
const ARC_X = [20, -30, -50, -30, 20]; // slight rightward → bulge left → back right

export default function Roadmap() {
  const [activeChapter, setActiveChapter] = useState(0);
  const { user } = useAuth();
  const [progress] = useState<Record<string, number>>({
    // Demo: first lesson half done
    // "drinks-1": 2,
  });
  const [guide, setGuide] = useState<{ lesson: UnitLesson; color: string } | null>(null);
  const chapter = CHAPTERS[activeChapter];

  const allLessons = chapter.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id })));
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
          style={{ maxWidth: 340, margin: "0 auto" }}>
          {chapter.units.map(unit => (
            <div key={unit.id}>
              {/* Unit header */}
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="flex justify-center mb-10">
                <div className={cn("flex items-center gap-3 px-5 py-3 rounded-2xl text-white shadow-lg bg-gradient-to-r", chapter.gradient)}>
                  <span className="text-2xl">{unit.emoji}</span>
                  <div className="text-right">
                    <div className="font-bold text-sm">الوحدة الأولى</div>
                    <div className="text-white/80 text-xs">{unit.title}</div>
                  </div>
                </div>
              </motion.div>

              {/* Stations as arc */}
              <div style={{ position: "relative" }}>
                {unit.lessons.map((lesson, idx) => {
                  const lessonProgress = progress[lesson.id] ?? 0;
                  const allIdx = allLessons.findIndex(l => l.id === lesson.id);
                  const isCurrent = allIdx === currentIdx;
                  const isLocked = allIdx > 0 && (progress[allLessons[allIdx - 1]?.id] ?? 0) < 4 && lessonProgress === 0;
                  const xOffset = ARC_X[idx] ?? 0;
                  const isTreasure = lesson.type === "treasure";
                  const SIZE = lesson.type === "challenge" ? 88 : isTreasure ? 72 : 76;

                  return (
                    <motion.div key={lesson.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: 32,
                        marginLeft: `calc(50% + ${xOffset}px - ${SIZE / 2}px)`,
                        width: SIZE,
                      }}
                    >
                      {/* ابدأ badge */}
                      {isCurrent && (
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                          style={{ marginBottom: 8, position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                          <div style={{
                            background: unit.color,
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 800,
                            padding: "4px 16px",
                            borderRadius: 20,
                            whiteSpace: "nowrap",
                            boxShadow: `0 3px 10px ${unit.color}50`,
                          }}>
                            ابدأ
                          </div>
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
                        whileHover={!isLocked ? { scale: 1.07 } : {}}
                        whileTap={!isLocked ? { scale: 0.94 } : {}}
                        onClick={() => !isLocked && setGuide({ lesson, color: unit.color })}
                        style={{ cursor: isLocked ? "default" : "pointer" }}
                      >
                        {isTreasure ? (
                          <div style={{ position: "relative", opacity: isLocked ? 0.4 : 1 }}>
                            {/* shadow under treasure */}
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
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Coming soon */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="text-center mt-6 space-y-2">
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
