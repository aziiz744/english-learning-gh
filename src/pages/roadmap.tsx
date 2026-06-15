import { useState } from "react";
import { Layout } from "@/components/layout";
import { Lock, Crown, Trophy, Gem } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// ── Unit structure ──
interface UnitLesson {
  id: string;
  type: "lesson" | "treasure" | "challenge";
  title: string;
  icon: string;
}

interface Unit {
  id: string;
  title: string;
  emoji: string;
  lessons: UnitLesson[];
}

interface Chapter {
  id: string;
  title: string;
  emoji: string;
  color: string;
  gradient: string;
  units: Unit[];
}

// ── A1 Chapter — Unit 1 only for now ──
const CHAPTERS: Chapter[] = [
  {
    id: "beginner",
    title: "المبتدئ",
    emoji: "🌱",
    color: "#22c55e",
    gradient: "from-emerald-500 to-green-600",
    units: [
      {
        id: "unit-1-drinks",
        title: "قدّم واقبل المشروبات",
        emoji: "☕",
        lessons: [
          { id: "drinks-1", type: "lesson",   title: "الكلمات الأساسية",  icon: "📖" },
          { id: "drinks-2", type: "lesson",   title: "كلمات جديدة",       icon: "✨" },
          { id: "drinks-t", type: "treasure", title: "كنز المراجعة",      icon: "💎" },
          { id: "drinks-3", type: "lesson",   title: "جمل كاملة",         icon: "💬" },
          { id: "drinks-c", type: "challenge",title: "تحدي الوحدة",       icon: "👑" },
        ],
      },
    ],
  },
];

// ── Mock progress (will connect to Supabase later) ──
// 0 = locked, 1-4 = lessons completed (quarter each)
function useUnitProgress(unitId: string): Record<string, number> {
  // TODO: fetch from Supabase user_progress
  return {};
}

// ── Golden ring progress circle ──
function ProgressCircle({
  progress, // 0-4 (quarters)
  size = 64,
  icon,
  locked,
  isActive,
  color,
  type,
}: {
  progress: number;
  size?: number;
  icon: string;
  locked: boolean;
  isActive: boolean;
  color: string;
  type: "lesson" | "treasure" | "challenge";
}) {
  const r = (size - 8) / 2;
  const circumference = 2 * Math.PI * r;
  const filled = Math.min(progress / 4, 1);
  const strokeDash = circumference * filled;

  const bgColor = locked
    ? "#1f2937"
    : type === "challenge"
    ? "#92400e"
    : type === "treasure"
    ? "#1e3a2f"
    : "#1e293b";

  const iconDisplay = locked ? "🔒" : progress >= 4 && type === "challenge" ? "👑" : icon;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Glow for active */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: color }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}

      <svg width={size} height={size} className="absolute inset-0 -rotate-90">
        {/* Background ring */}
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill={bgColor}
          stroke={locked ? "#374151" : "#374151"}
          strokeWidth={4}
        />
        {/* Gold progress arc */}
        {!locked && progress > 0 && (
          <motion.circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none"
            stroke={type === "challenge" ? "#f59e0b" : type === "treasure" ? "#10b981" : "#eab308"}
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray={`${strokeDash} ${circumference}`}
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{ strokeDasharray: `${strokeDash} ${circumference}` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </svg>

      {/* Icon center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("text-2xl select-none", locked && "opacity-40")}>
          {iconDisplay}
        </span>
      </div>
    </div>
  );
}

// ── Connector path ──
function Connector({ fromSide, toSide, color, animated }: {
  fromSide: "left" | "right" | "center";
  toSide: "left" | "right" | "center";
  color: string;
  animated: boolean;
}) {
  const W = 280;
  const H = 60;
  const cx = W / 2;
  const sideX = (s: string) => s === "left" ? cx - 56 : s === "right" ? cx + 56 : cx;
  const x1 = sideX(fromSide);
  const x2 = sideX(toSide);

  return (
    <div className="relative -my-1 pointer-events-none flex justify-center" style={{ height: H }}>
      <svg width={W} height={H} className="overflow-visible">
        <path d={`M ${x1} 0 C ${x1} ${H/2}, ${x2} ${H/2}, ${x2} ${H}`}
          stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.2" />
        <motion.path
          d={`M ${x1} 0 C ${x1} ${H/2}, ${x2} ${H/2}, ${x2} ${H}`}
          stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"
          strokeDasharray="6 5"
          initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 0.6 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

// ── Unit header ──
function UnitHeader({ unit, color, gradient }: { unit: Unit; color: string; gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center my-6"
    >
      <div className={cn(
        "flex items-center gap-3 px-5 py-3 rounded-2xl border-0 text-white shadow-lg",
        `bg-gradient-to-r ${gradient}`
      )}>
        <span className="text-2xl">{unit.emoji}</span>
        <div className="text-right">
          <div className="font-bold text-sm">الوحدة الأولى</div>
          <div className="text-white/80 text-xs">{unit.title}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Lesson station ──
function LessonStation({
  lesson, side, progress, color, delay, unitId,
}: {
  lesson: UnitLesson;
  side: "left" | "right" | "center";
  progress: number;
  color: string;
  delay: number;
  unitId: string;
}) {
  const isLocked = progress === 0;
  const isActive = progress > 0 && progress < 4;
  const isDone = progress >= 4;
  const size = lesson.type === "challenge" ? 72 : lesson.type === "treasure" ? 68 : 64;

  const circle = (
    <div className="flex flex-col items-center gap-1">
      <Link href={!isLocked ? `/lessons/${unitId}/${lesson.id}` : "#"}>
        <motion.div
          whileHover={!isLocked ? { scale: 1.08 } : {}}
          whileTap={!isLocked ? { scale: 0.95 } : {}}
        >
          <ProgressCircle
            progress={progress}
            size={size}
            icon={lesson.icon}
            locked={isLocked}
            isActive={isActive}
            color={color}
            type={lesson.type}
          />
        </motion.div>
      </Link>
    </div>
  );

  const label = (
    <div className={cn(
      "text-xs max-w-[80px] leading-snug text-center font-medium",
      isLocked ? "text-muted-foreground/30" : isDone ? "text-foreground/60" : "text-foreground"
    )}>
      {lesson.title}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center justify-center gap-3 relative z-10"
      style={{ minHeight: size + 24 }}
    >
      {side === "right" ? (
        <>
          <div className="flex-1 flex justify-end">{label}</div>
          <div className="flex-none">{circle}</div>
          <div className="flex-1" />
        </>
      ) : side === "left" ? (
        <>
          <div className="flex-1" />
          <div className="flex-none">{circle}</div>
          <div className="flex-1 flex justify-start">{label}</div>
        </>
      ) : (
        <>
          <div className="flex-1 flex justify-end">{label}</div>
          <div className="flex-none">{circle}</div>
          <div className="flex-1" />
        </>
      )}
    </motion.div>
  );
}

// ── Main ──
export default function Roadmap() {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapter = CHAPTERS[activeChapter];

  // Layout pattern for stations
  const sides: ("right" | "left" | "center")[] = ["right", "left", "center", "right", "center"];

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
            <motion.button
              key={ch.id}
              onClick={() => setActiveChapter(i)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-2xl border transition-all text-sm font-bold",
                activeChapter === i
                  ? `bg-gradient-to-r ${ch.gradient} text-white border-transparent shadow-lg`
                  : "bg-card border-border text-muted-foreground hover:border-primary/30"
              )}
            >
              <span>{ch.emoji}</span>
              <span>{ch.title}</span>
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
            // TODO: get real progress from Supabase
            const progress: Record<string, number> = {};

            return (
              <div key={unit.id}>
                <UnitHeader unit={unit} color={chapter.color} gradient={chapter.gradient} />

                {unit.lessons.map((lesson, idx) => {
                  const lessonProgress = progress[lesson.id] ?? 0;
                  const side = sides[idx] ?? "right";
                  const prevSide = idx > 0 ? (sides[idx - 1] ?? "right") : null;

                  return (
                    <div key={lesson.id}>
                      {idx > 0 && prevSide && (
                        <Connector
                          fromSide={prevSide}
                          toSide={side}
                          color={chapter.color}
                          animated={lessonProgress > 0}
                        />
                      )}
                      <LessonStation
                        lesson={lesson}
                        side={side}
                        progress={lessonProgress}
                        color={chapter.color}
                        delay={idx * 0.07}
                        unitId={unit.id}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* Coming soon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10 space-y-2"
          >
            <div className="text-3xl">🔜</div>
            <p className="text-sm text-muted-foreground font-medium">وحدات جديدة قادمة قريباً</p>
          </motion.div>

          <div className="h-12" />
        </motion.div>
      </div>
    </Layout>
  );
}
