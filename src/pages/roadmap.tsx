import { useState, useEffect } from "react";
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

// ── Treasure chest SVG ──
function TreasureIcon({ unlocked }: { unlocked: boolean }) {
  const gold = unlocked ? "#eab308" : "#6b7280";
  const dark = unlocked ? "#92400e" : "#374151";
  const mid  = unlocked ? "#b45309" : "#4b5563";
  const shine= unlocked ? "#fef08a" : "#9ca3af";
  return (
    <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
      {/* lid */}
      <rect x="4" y="4" width="44" height="16" rx="4" fill={dark} />
      <rect x="6" y="5" width="40" height="8" rx="2" fill={mid} />
      {/* hinge line */}
      <rect x="4" y="18" width="44" height="2" fill={dark} />
      {/* body */}
      <rect x="4" y="20" width="44" height="20" rx="3" fill={mid} />
      <rect x="4" y="20" width="44" height="8" fill={dark} opacity="0.4" />
      {/* lock */}
      <rect x="21" y="14" width="10" height="10" rx="2" fill={gold} />
      <circle cx="26" cy="17" r="2.5" fill={dark} />
      <rect x="24.5" y="18" width="3" height="3" rx="0.5" fill={dark} />
      {/* straps */}
      <rect x="4" y="26" width="44" height="3" fill={dark} opacity="0.5" />
      {/* shine on lid */}
      <rect x="8" y="7" width="16" height="3" rx="1.5" fill={shine} opacity="0.4" />
      {/* coins spilling if unlocked */}
      {unlocked && (
        <>
          <circle cx="18" cy="22" r="3" fill="#eab308" />
          <circle cx="26" cy="20" r="3.5" fill="#fbbf24" />
          <circle cx="34" cy="22" r="3" fill="#eab308" />
          <circle cx="22" cy="19" r="2.5" fill="#fde68a" />
          <circle cx="30" cy="19" r="2.5" fill="#fde68a" />
        </>
      )}
    </svg>
  );
}

// ── Station circle ──
function StationCircle({ type, progress, color, isCurrent }: {
  type: "lesson" | "treasure" | "challenge";
  progress: number;
  color: string;
  isCurrent: boolean;
}) {
  const isChallenge = type === "challenge";
  const size = isChallenge ? 70 : 60;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 5;
  const circ = 2 * Math.PI * r;
  const filled = Math.min(progress / 4, 1);
  const strokeDash = circ * filled;
  const isComplete = progress >= 4;
  const ringColor = isComplete ? "#eab308" : color;
  const bgFill = isChallenge ? "#1c1a07" : "#1e293b";

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {/* Cylinder shadow underneath */}
      <div style={{
        position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
        width: size * 0.75, height: 10,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)",
        filter: "blur(3px)",
        zIndex: 0,
      }} />

      {/* Glow for current */}
      {isCurrent && (
        <motion.div
          style={{
            position: "absolute", inset: -4, borderRadius: "50%",
            backgroundColor: color, opacity: 0.2,
          }}
          animate={{ scale: [1, 1.45, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}

      <svg width={size} height={size} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)", overflow: "visible" }}>
        {/* BG circle */}
        <circle cx={cx} cy={cy} r={r} fill={bgFill} stroke="#374151" strokeWidth={4} />
        {/* Cylinder top highlight */}
        <ellipse cx={cx} cy={cy - r + 3} rx={r * 0.55} ry={3}
          fill="white" opacity={progress > 0 ? 0.08 : 0.04} />
        {/* Progress arc */}
        {progress > 0 && (
          <motion.circle
            cx={cx} cy={cy} r={r} fill="none"
            stroke={ringColor} strokeWidth={4.5} strokeLinecap="round"
            strokeDasharray={`${strokeDash} ${circ}`}
            initial={{ strokeDasharray: `0 ${circ}` }}
            animate={{ strokeDasharray: `${strokeDash} ${circ}` }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        )}
      </svg>

      {/* Icon center */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1,
      }}>
        <span style={{
          fontSize: isChallenge ? 26 : 22,
          opacity: progress === 0 ? 0.45 : 1,
          userSelect: "none",
          filter: isComplete && isChallenge ? "drop-shadow(0 0 6px #eab308)" : "none",
        }}>
          {type === "challenge" ? (isComplete ? "👑" : "⭐") : "⭐"}
        </span>
      </div>
    </div>
  );
}

// ── Guide modal ──
function GuideModal({ lesson, onClose, onStart }: { lesson: UnitLesson; onClose: () => void; onStart: () => void; }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }} onClick={onClose}>
      <motion.div
        initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }} transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="bg-card border border-border rounded-3xl p-6 w-full max-w-sm space-y-4"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <div className="text-3xl">{lesson.type === "treasure" ? "💎" : lesson.type === "challenge" ? "🏆" : "📖"}</div>
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
                <span key={w} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full" dir="ltr">{w}</span>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-3 pt-1">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-2xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-all">لاحقاً</button>
          <button onClick={onStart} className="flex-1 py-2.5 rounded-2xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all">ابدأ الآن ←</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Positions for 5 stations (zigzag = the path) ──
// x offset from center (negative = left, positive = right)
const OFFSETS = [-50, 50, 0, -50, 0]; // L1=left, L2=right, Treasure=center, L3=left, Challenge=center

export default function Roadmap() {
  const [activeChapter, setActiveChapter] = useState(0);
  const { user } = useAuth();
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [guide, setGuide] = useState<UnitLesson | null>(null);
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
          className="mx-auto" style={{ maxWidth: 320 }}>
          {chapter.units.map(unit => (
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

              {/* Stations */}
              <div style={{ position: "relative", paddingBottom: 24 }}>
                {unit.lessons.map((lesson, idx) => {
                  const lessonProgress = progress[lesson.id] ?? 0;
                  const allIdx = allLessons.findIndex(l => l.id === lesson.id);
                  const isCurrent = allIdx === currentIdx;
                  const isLocked = lessonProgress === 0 && allIdx > 0 && (progress[allLessons[allIdx-1]?.id] ?? 0) < 4;
                  const xOffset = OFFSETS[idx] ?? 0;
                  const size = lesson.type === "challenge" ? 70 : 60;

                  return (
                    <motion.div key={lesson.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: 28,
                        transform: `translateX(${xOffset}px)`,
                      }}
                    >
                      {/* "ابدأ" badge */}
                      {isCurrent && (
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                          style={{ marginBottom: 6, position: "relative" }}
                        >
                          <div style={{
                            background: unit.color,
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 700,
                            padding: "3px 12px",
                            borderRadius: 20,
                            boxShadow: `0 2px 8px ${unit.color}60`,
                          }}>
                            ابدأ
                          </div>
                          {/* triangle pointer down */}
                          <div style={{
                            position: "absolute",
                            bottom: -6,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 0, height: 0,
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: `6px solid ${unit.color}`,
                          }} />
                        </motion.div>
                      )}

                      {/* Station */}
                      <motion.div
                        whileHover={!isLocked ? { scale: 1.08 } : {}}
                        whileTap={!isLocked ? { scale: 0.94 } : {}}
                        onClick={() => !isLocked && setGuide(lesson)}
                        style={{ cursor: isLocked ? "default" : "pointer", position: "relative" }}
                      >
                        {lesson.type === "treasure" ? (
                          <div style={{ position: "relative" }}>
                            {/* Shadow under treasure */}
                            <div style={{
                              position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)",
                              width: 56, height: 10, borderRadius: "50%",
                              background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
                              filter: "blur(3px)",
                            }} />
                            <div style={{ opacity: isLocked ? 0.4 : 1 }}>
                              <TreasureIcon unlocked={lessonProgress >= 4} />
                            </div>
                            {isLocked && (
                              <div style={{
                                position: "absolute", inset: 0,
                                display: "flex", alignItems: "center", justifyContent: "center",
                              }}>
                                <span style={{ fontSize: 18 }}>🔒</span>
                              </div>
                            )}
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-center mt-4 space-y-2">
            <div className="text-3xl">🔜</div>
            <p className="text-sm text-muted-foreground">وحدات جديدة قادمة قريباً</p>
          </motion.div>
          <div className="h-12" />
        </motion.div>
      </div>

      {/* Guide modal */}
      <AnimatePresence>
        {guide && (
          <GuideModal
            lesson={guide}
            onClose={() => setGuide(null)}
            onStart={() => {
              setGuide(null);
              window.location.href = `/lessons/unit-drinks/${guide.id}`;
            }}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}
