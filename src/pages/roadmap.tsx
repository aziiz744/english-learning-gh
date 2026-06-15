import { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/use-auth";

// ── Types ──
interface UnitLesson {
  id: string;
  type: "lesson" | "treasure" | "challenge";
  title: string;
  description: string; // guide shown before entering
  words?: string[];    // vocabulary hint
}

interface Unit {
  id: string;
  title: string;
  emoji: string;
  color: string;
  lessons: UnitLesson[];
}

interface Chapter {
  id: string;
  title: string;
  emoji: string;
  gradient: string;
  color: string;
  units: Unit[];
}

// ── Data ──
const CHAPTERS: Chapter[] = [
  {
    id: "beginner",
    title: "المبتدئ",
    emoji: "🌱",
    gradient: "from-emerald-500 to-green-600",
    color: "#22c55e",
    units: [
      {
        id: "unit-drinks",
        title: "قدّم واقبل المشروبات",
        emoji: "☕",
        color: "#22c55e",
        lessons: [
          {
            id: "drinks-1",
            type: "lesson",
            title: "الكلمات الأساسية",
            description: "ستتعلم في هذا الدرس الكلمات الأساسية للمشروبات مثل tea وcoffee وwater وjuice — مع سماع نطقها واختيار المعنى الصحيح.",
            words: ["tea", "coffee", "water", "juice", "milk"],
          },
          {
            id: "drinks-2",
            type: "lesson",
            title: "كلمات جديدة",
            description: "ستراجع كلمات الدرس الأول وتتعلم كلمات جديدة مثل please وthank you وyes وno — وستلاحظ الكلمات الجديدة بلون مميز.",
            words: ["please", "thank you", "yes", "no", "sorry"],
          },
          {
            id: "drinks-t",
            type: "treasure",
            title: "كنز المراجعة",
            description: "لعبة ممتعة تشمل جميع كلمات الدرسين السابقين — اجتزها واكسب نقاطاً مضاعفة! تُفتح بعد إكمال الدرسين الأول والثاني.",
            words: [],
          },
          {
            id: "drinks-3",
            type: "lesson",
            title: "جمل كاملة",
            description: "الآن ستستخدم الكلمات في جمل كاملة مثل 'Would you like some tea?' و'Yes please, thank you!' — وستدرّب على الترتيب الصحيح للكلمات.",
            words: ["would", "like", "some", "have", "want"],
          },
          {
            id: "drinks-c",
            type: "challenge",
            title: "تحدي الوحدة",
            description: "اختبار شامل لكل ما تعلمته في هذه الوحدة — الكلمات والجمل والحوارات. اجتزه بنجاح لتكتمل دائرتك الذهبية وتنتقل للوحدة التالية!",
            words: [],
          },
        ],
      },
    ],
  },
];

// ── Progress circle (arc) ──
function StationCircle({
  type, progress, color, isActive, isCurrent,
}: {
  type: "lesson" | "treasure" | "challenge";
  progress: number; // 0..4
  color: string;
  isActive: boolean;
  isCurrent: boolean;
}) {
  const size = type === "challenge" ? 72 : type === "treasure" ? 68 : 60;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 5;
  const circ = 2 * Math.PI * r;
  const filled = Math.min(progress / 4, 1);
  const strokeDash = circ * filled;
  const isComplete = progress >= 4;
  const isGold = isComplete;

  const ringColor = isGold ? "#eab308" : color;
  const bgFill = type === "treasure" ? "#0f3626" : type === "challenge" ? "#1c1407" : "#1e293b";
  const iconEl =
    type === "treasure" ? "🪙" :
    type === "challenge" ? (isComplete ? "👑" : "🏆") :
    isComplete ? "⭐" : "⭐";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {isCurrent && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: color, opacity: 0.25 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}
      <svg width={size} height={size} className="absolute inset-0 -rotate-90" style={{ overflow: "visible" }}>
        {/* Background ring */}
        <circle cx={cx} cy={cy} r={r} fill={bgFill} stroke="#374151" strokeWidth={4} />
        {/* Progress arc */}
        {progress > 0 && (
          <motion.circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={ringColor}
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray={`${strokeDash} ${circ}`}
            initial={{ strokeDasharray: `0 ${circ}` }}
            animate={{ strokeDasharray: `${strokeDash} ${circ}` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </svg>
      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("select-none", type === "challenge" ? "text-2xl" : "text-xl", progress === 0 && "opacity-25")}>
          {progress === 0 ? "🔒" : iconEl}
        </span>
      </div>
    </div>
  );
}

// ── Guide modal ──
function GuideModal({ lesson, onClose, onStart }: {
  lesson: UnitLesson;
  onClose: () => void;
  onStart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="bg-card border border-border rounded-3xl p-6 w-full max-w-sm space-y-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div className="text-3xl">
            {lesson.type === "treasure" ? "💎" : lesson.type === "challenge" ? "🏆" : "📖"}
          </div>
          <div>
            <h2 className="font-bold text-base">{lesson.title}</h2>
            <p className="text-xs text-muted-foreground">
              {lesson.type === "treasure" ? "كنز" : lesson.type === "challenge" ? "تحدي الوحدة" : "درس"}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{lesson.description}</p>

        {lesson.words && lesson.words.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold text-foreground">كلمات ستتعلمها:</p>
            <div className="flex flex-wrap gap-2">
              {lesson.words.map(w => (
                <span key={w} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full" dir="ltr">{w}</span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-1">
          <button onClick={onClose}
            className="flex-1 py-2.5 rounded-2xl border border-border text-sm font-semibold text-muted-foreground hover:bg-muted transition-all">
            لاحقاً
          </button>
          <button onClick={onStart}
            className="flex-1 py-2.5 rounded-2xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all">
            ابدأ الآن →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Station node ──
function Station({
  lesson, side, progress, color, delay, isCurrentStation, unitId,
}: {
  lesson: UnitLesson;
  side: "right" | "left" | "center";
  progress: number;
  color: string;
  delay: number;
  isCurrentStation: boolean;
  unitId: string;
}) {
  const [showGuide, setShowGuide] = useState(false);
  const isLocked = progress === 0;
  const size = lesson.type === "challenge" ? 72 : lesson.type === "treasure" ? 68 : 60;

  const handleClick = () => {
    if (!isLocked) setShowGuide(true);
  };

  const stationEl = (
    <div className="flex flex-col items-center gap-0" style={{ position: "relative" }}>
      {/* "ابدأ" bounce label for current station */}
      {isCurrentStation && (
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="text-xs font-bold text-primary mb-1 select-none"
        >
          ابدأ
        </motion.div>
      )}
      <motion.div
        whileHover={!isLocked ? { scale: 1.08 } : {}}
        whileTap={!isLocked ? { scale: 0.94 } : {}}
        onClick={handleClick}
        style={{ cursor: isLocked ? "default" : "pointer" }}
      >
        <StationCircle
          type={lesson.type}
          progress={progress}
          color={color}
          isActive={progress > 0 && progress < 4}
          isCurrent={isCurrentStation}
        />
      </motion.div>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
        className="flex items-center justify-center relative z-10"
        style={{ minHeight: size + 28 }}
      >
        {side === "right" ? (
          <div className="flex items-center w-full max-w-[280px]">
            <div className="flex-1" />
            <div className="flex-none mx-4">{stationEl}</div>
            <div className="flex-1" />
          </div>
        ) : side === "left" ? (
          <div className="flex items-center w-full max-w-[280px]">
            <div className="flex-1" />
            <div className="flex-none mx-4">{stationEl}</div>
            <div className="flex-1" />
          </div>
        ) : (
          <div className="flex items-center justify-center">{stationEl}</div>
        )}
      </motion.div>

      <AnimatePresence>
        {showGuide && (
          <GuideModal
            lesson={lesson}
            onClose={() => setShowGuide(false)}
            onStart={() => {
              setShowGuide(false);
              window.location.href = `/lessons/${unitId}/${lesson.id}`;
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ── Arc connector (stations ARE the path) ──
function ArcPath({
  from, to, color,
}: {
  from: "right" | "left" | "center";
  to: "right" | "left" | "center";
  color: string;
}) {
  const W = 280;
  const H = 56;
  const midX = W / 2;
  const offset = 56;
  const xOf = (s: string) => s === "center" ? midX : s === "right" ? midX + offset : midX - offset;
  const x1 = xOf(from);
  const x2 = xOf(to);
  return (
    <div className="relative -my-1 pointer-events-none flex justify-center" style={{ height: H }}>
      <svg width={W} height={H} style={{ overflow: "visible" }}>
        <path
          d={`M ${x1} 0 Q ${(x1 + x2) / 2} ${H * 1.1} ${x2} ${H}`}
          stroke={color} strokeWidth="2.5" fill="none"
          strokeLinecap="round" strokeDasharray="5 5" opacity="0.35"
        />
      </svg>
    </div>
  );
}

// ── Unit header ──
function UnitHeader({ unit, gradient }: { unit: Unit; gradient: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center my-7">
      <div className={cn("flex items-center gap-3 px-5 py-3 rounded-2xl text-white shadow-lg bg-gradient-to-r", gradient)}>
        <span className="text-2xl">{unit.emoji}</span>
        <div className="text-right">
          <div className="font-bold text-sm">الوحدة الأولى</div>
          <div className="text-white/80 text-xs">{unit.title}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main ──
export default function Roadmap() {
  const [activeChapter, setActiveChapter] = useState(0);
  const { user } = useAuth();
  const [progress, setProgress] = useState<Record<string, number>>({});
  const chapter = CHAPTERS[activeChapter];

  // TODO: fetch real progress from Supabase
  useEffect(() => {
    if (!user) return;
    // setProgress(...)
  }, [user]);

  // Layout pattern for 5 stations
  const SIDES: ("right" | "left" | "center")[] = ["center", "right", "center", "left", "center"];

  // Find first locked station = current
  const getAllLessons = () => chapter.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id })));
  const allLessons = getAllLessons();
  const currentIdx = allLessons.findIndex(l => (progress[l.id] ?? 0) < 4);

  return (
    <Layout>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">🗺️</div>
          <h1 className="text-3xl font-bold tracking-tight">خارطة التعلم</h1>
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

        {/* Units */}
        <motion.div
          key={activeChapter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xs mx-auto"
        >
          {chapter.units.map(unit => {
            let globalIdx = 0;
            return (
              <div key={unit.id}>
                <UnitHeader unit={unit} gradient={chapter.gradient} />
                {unit.lessons.map((lesson, idx) => {
                  const lessonProgress = progress[lesson.id] ?? 0;
                  const side = SIDES[idx] ?? "center";
                  const prevSide = idx > 0 ? (SIDES[idx - 1] ?? "center") : null;
                  const gi = globalIdx++;
                  const allIdx = allLessons.findIndex(l => l.id === lesson.id && l.unitId === unit.id);
                  const isCurrent = allIdx === currentIdx;

                  return (
                    <div key={lesson.id}>
                      {idx > 0 && prevSide && (
                        <ArcPath from={prevSide} to={side} color={unit.color} />
                      )}
                      <Station
                        lesson={lesson}
                        side={side}
                        progress={lessonProgress}
                        color={unit.color}
                        delay={idx * 0.07}
                        isCurrentStation={isCurrent}
                        unitId={unit.id}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-center mt-10 space-y-2">
            <div className="text-3xl">🔜</div>
            <p className="text-sm text-muted-foreground font-medium">وحدات جديدة قادمة قريباً</p>
          </motion.div>

          <div className="h-12" />
        </motion.div>
      </div>
    </Layout>
  );
}
