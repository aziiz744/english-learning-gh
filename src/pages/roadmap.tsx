import { useState } from "react";
import { useGetRoadmap } from "@/lib/api-hooks";
import { Layout } from "@/components/layout";
import { Lock, Check, Trophy, Star, Crown } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { getLessonMeta } from "@/lib/lesson-meta";

/* ── Level meta ── */
const LEVEL_META: Record<string, {
  cefr: string; label: string; emoji: string;
  gradient: string; color: string;
}> = {
  "Beginner":           { cefr: "A1", label: "المبتدئ",   emoji: "🌱", gradient: "from-emerald-500 to-green-600",   color: "#22c55e" },
  "Elementary":         { cefr: "A2", label: "الأساسي",   emoji: "📗", gradient: "from-sky-500 to-blue-600",        color: "#0ea5e9" },
  "Intermediate":       { cefr: "B1", label: "المتوسط",   emoji: "⭐", gradient: "from-violet-500 to-purple-600",   color: "#8b5cf6" },
  "Upper Intermediate": { cefr: "B2", label: "المتقدم",   emoji: "🚀", gradient: "from-amber-500 to-orange-600",    color: "#f59e0b" },
  "Advanced":           { cefr: "C1", label: "المتمكن",   emoji: "💎", gradient: "from-rose-500 to-red-600",        color: "#f43f5e" },
  "Proficiency":        { cefr: "C2", label: "الإتقان",   emoji: "👑", gradient: "from-yellow-400 to-amber-500",    color: "#eab308" },
};

/* ── Chapter definitions ── */
const CHAPTERS = [
  {
    id: 0,
    label: "الفصل الأول",
    sublabel: "المبتدئ والأساسي",
    badge: "A1 – A2",
    emoji: "🌱",
    gradient: "from-emerald-500 to-sky-500",
    color: "#22c55e",
    levels: ["Beginner", "Elementary"],
  },
  {
    id: 1,
    label: "الفصل الثاني",
    sublabel: "المتوسط والمتقدم",
    badge: "B1 – B2",
    emoji: "⭐",
    gradient: "from-violet-500 to-amber-500",
    color: "#8b5cf6",
    levels: ["Intermediate", "Upper Intermediate"],
  },
  {
    id: 2,
    label: "الفصل الثالث",
    sublabel: "المتمكن والإتقان",
    badge: "C1 – C2",
    emoji: "👑",
    gradient: "from-rose-500 to-yellow-400",
    color: "#f43f5e",
    levels: ["Advanced", "Proficiency"],
  },
];


function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 justify-center mt-1">
      {[0, 1, 2].map(i => (
        <Star key={i} className={cn("w-3 h-3", i < count ? "text-amber-400 fill-amber-400" : "text-muted-foreground/20")} />
      ))}
    </div>
  );
}

/* ── Bezier connector ── */
function Connector({ from, to, color, animated, delay = 0 }: {
  from: "right" | "left";
  to: "right" | "left";
  color: string;
  animated: boolean;
  delay?: number;
}) {
  const W = 280;
  const H = 72;
  const Rx = from === "right" ? W * 0.72 : W * 0.28;
  const Tx = to === "right" ? W * 0.72 : W * 0.28;

  return (
    <div className="relative flex justify-center -my-1 z-0 pointer-events-none" style={{ height: H }}>
      <svg width={W} height={H} className="overflow-visible">
        <path
          d={`M ${Rx} 0 C ${Rx} ${H / 2}, ${Tx} ${H / 2}, ${Tx} ${H}`}
          stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.15"
        />
        <motion.path
          d={`M ${Rx} 0 C ${Rx} ${H / 2}, ${Tx} ${H / 2}, ${Tx} ${H}`}
          stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"
          strokeDasharray="6 5"
          initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        />
        {animated && (
          <motion.circle
            r="3" fill={color} opacity="0.9"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 0.8, delay: delay + 0.1, ease: "easeInOut" }}
            style={{ offsetPath: `path('M ${Rx} 0 C ${Rx} ${H / 2}, ${Tx} ${H / 2}, ${Tx} ${H}')` } as React.CSSProperties}
          />
        )}
      </svg>
    </div>
  );
}

/* ── Level header ── */
function LevelHeader({ label, cefr, emoji, gradient, isUnlocked }: {
  label: string; cefr: string; emoji: string; gradient: string; isUnlocked: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center my-6 first:mt-0"
    >
      <div className={cn(
        "flex items-center gap-3 px-5 py-3 rounded-2xl border text-white shadow-lg",
        isUnlocked
          ? `bg-gradient-to-r ${gradient} border-transparent`
          : "bg-muted border-border opacity-50",
      )}>
        <span className="text-2xl">{isUnlocked ? emoji : "🔒"}</span>
        <div className="text-right">
          <div className="font-bold text-sm">{label}</div>
          <div className="text-white/70 text-xs font-bold">{cefr}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Individual lesson station ── */
function LessonStation({ lesson, side, meta, stationNum, delay }: {
  lesson: {
    id: number; title: string; category?: string;
    isUnlocked: boolean; completedAt?: string | null; score?: number | null; stars?: number | null;
  };
  side: "right" | "left";
  meta: typeof LEVEL_META[string];
  stationNum: number;
  delay: number;
}) {
  const stars = lesson.stars ?? 0;
  const isDone = !!lesson.completedAt;
  const isCurrent = lesson.isUnlocked && !isDone;
  const isLocked = !lesson.isUnlocked;
  const lmeta = getLessonMeta(lesson.title);
  const challengePassed = typeof window !== "undefined"
    ? localStorage.getItem(`challenge-${lesson.id}`) === "passed"
    : false;

  const circle = (
    <div className="flex flex-col items-center gap-0.5 relative z-10">
      {isCurrent && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: meta.color, opacity: 0.2 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}
      <Link href={lesson.isUnlocked ? `/lessons/${lesson.id}` : "#"}>
        <motion.div
          whileHover={lesson.isUnlocked ? { scale: 1.08 } : {}}
          whileTap={lesson.isUnlocked ? { scale: 0.95 } : {}}
          className={cn(
            "w-16 h-16 rounded-full flex flex-col items-center justify-center border-3 relative shadow-md transition-all",
            (challengePassed)
              ? "bg-gradient-to-br from-yellow-300 to-amber-400 border-yellow-200 shadow-lg ring-2 ring-yellow-400/60"
              : (isDone && stars === 3)
              ? "bg-gradient-to-br from-yellow-400 to-amber-500 border-yellow-300 shadow-lg"
              : isDone
              ? `bg-gradient-to-br ${meta.gradient} border-transparent shadow-lg`
              : isCurrent
                ? "bg-card border-2 border-current"
                : "bg-muted/80 border-border",
          )}
          style={{
            borderColor: isCurrent ? meta.color : undefined,
            boxShadow: challengePassed
              ? "0 4px 32px rgba(234,179,8,0.8), 0 0 20px rgba(234,179,8,0.4)"
              : (isDone && stars === 3)
              ? "0 4px 24px rgba(234,179,8,0.55)"
              : (isDone || isCurrent)
                ? `0 4px 20px ${meta.color}40`
                : undefined,
          }}
        >
          {isLocked ? (
            <Lock className="w-6 h-6 text-muted-foreground/40" />
          ) : challengePassed ? (
            <>
              <Crown className="w-5 h-5 text-white drop-shadow animate-pulse" />
              <span className="text-white/90 text-[10px] font-bold mt-0.5">👑</span>
            </>
          ) : (isDone && stars === 3) ? (
            <>
              <Crown className="w-5 h-5 text-white drop-shadow" />
              <span className="text-white/80 text-[10px] font-bold mt-0.5">{stationNum}</span>
            </>
          ) : isDone ? (
            <>
              <Check className="w-5 h-5 text-white" />
              <span className="text-white/70 text-[10px] font-bold mt-0.5">{stationNum}</span>
            </>
          ) : (
            <>
              <span className="text-xl">{lmeta.icon}</span>
              <span className="text-[11px] font-bold mt-0.5" style={{ color: meta.color }}>{stationNum}</span>
            </>
          )}
        </motion.div>
      </Link>
      <StarRow count={stars} />

      {/* Challenge button: appears when 3 stars earned */}
      {stars === 3 && (
        <Link href={`/lessons/${lesson.id}?challenge=1`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: delay + 0.3 }}
            className={cn(
              "mt-0.5 flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold border cursor-pointer",
              challengePassed
                ? "bg-amber-400/20 border-amber-400/40 text-amber-400"
                : "bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20"
            )}
          >
            {challengePassed ? <Crown className="w-3 h-3" /> : <Trophy className="w-3 h-3" />}
            {challengePassed ? "بطل" : "تحدٍّ"}
          </motion.div>
        </Link>
      )}
    </div>
  );

  const label = (
    <div className={cn(
      "text-xs max-w-[90px] leading-snug text-center",
      isLocked ? "text-muted-foreground/30" : isDone ? "text-foreground/70" : "text-foreground font-semibold",
    )}>
      {lmeta.arabic}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center justify-center gap-2 relative z-10"
    >
      {side === "right" ? (
        <>
          <div className="flex-1 flex justify-end">{label}</div>
          <div className="flex-none">{circle}</div>
          <div className="flex-1" />
        </>
      ) : (
        <>
          <div className="flex-1" />
          <div className="flex-none">{circle}</div>
          <div className="flex-1 flex justify-start">{label}</div>
        </>
      )}
    </motion.div>
  );
}

/* ── Level test station ── */
function LevelTestStation({ levelKey, meta, testPassed, testScore, testAvailable, isUnlocked, delay }: {
  levelKey: string;
  meta: typeof LEVEL_META[string];
  testPassed: boolean;
  testScore?: number | null;
  testAvailable: boolean;
  isUnlocked: boolean;
  delay: number;
}) {
  if (!isUnlocked) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 120 }}
      className="flex justify-center my-4 relative z-10"
    >
      <Link href={testAvailable || testPassed ? `/level-test/${levelKey.toLowerCase()}` : "#"}>
        <motion.div
          whileHover={(testAvailable || testPassed) ? { scale: 1.06 } : {}}
          whileTap={(testAvailable || testPassed) ? { scale: 0.95 } : {}}
          className={cn(
            "w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 shadow-xl cursor-pointer relative",
            testPassed
              ? "bg-gradient-to-br from-yellow-400 to-amber-500 border-yellow-300"
              : testAvailable
                ? `bg-gradient-to-br ${meta.gradient} border-transparent`
                : "bg-muted border-border opacity-50 cursor-default",
          )}
          style={{
            boxShadow: testPassed
              ? "0 0 30px rgba(234,179,8,0.5)"
              : testAvailable
                ? `0 0 25px ${meta.color}50`
                : undefined,
          }}
        >
          {testPassed
            ? <Crown className="w-8 h-8 text-white" />
            : <Trophy className="w-8 h-8 text-white/90" />
          }
          {testPassed && testScore != null && (
            <span className="text-white text-[10px] font-bold mt-0.5">{testScore}%</span>
          )}
          {!testPassed && testAvailable && (
            <span className="text-white/70 text-[9px] font-bold mt-0.5">اختبر</span>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ── Types ── */
type RoadmapLesson = {
  id: number; title: string; category?: string;
  isUnlocked: boolean; completedAt?: string | null; score?: number | null;
};
type RoadmapLevel = {
  level: string; label: string; order?: number;
  isUnlocked: boolean; testPassed: boolean;
  testScore?: number | null; testAvailable?: boolean;
  completedLessons: number; totalLessons: number;
  lessons: RoadmapLesson[];
};

/* ── Main page ── */
export default function Roadmap() {
  const { data: roadmap, isLoading } = useGetRoadmap();
  const [activeChapter, setActiveChapter] = useState(0);

  type LessonNode = { type: "lesson"; lesson: RoadmapLesson; level: RoadmapLevel; stationNum: number; globalIdx: number };
  type TestNode   = { type: "test";   level: RoadmapLevel; globalIdx: number };
  type HeaderNode = { type: "header"; level: RoadmapLevel };
  type Node = LessonNode | TestNode | HeaderNode;

  const chapterLevels = CHAPTERS[activeChapter].levels;

  const filtered = (roadmap as RoadmapLevel[] | undefined)?.filter(
    lvl => chapterLevels.includes(lvl.label)
  ) ?? [];

  const nodes: Node[] = [];
  let stationIdx = 0;

  for (const level of filtered) {
    nodes.push({ type: "header", level });
    let stationNum = 0;
    for (const lesson of level.lessons) {
      nodes.push({ type: "lesson", lesson, level, stationNum: ++stationNum, globalIdx: stationIdx++ });
    }
    nodes.push({ type: "test", level, globalIdx: stationIdx++ });
  }

  const sideOf = (globalIdx: number): "right" | "left" => globalIdx % 2 === 0 ? "right" : "left";
  const stationNodes = nodes.filter(n => n.type === "lesson" || n.type === "test") as (LessonNode | TestNode)[];

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
          {CHAPTERS.map(ch => {
            const isActive = activeChapter === ch.id;
            return (
              <motion.button
                key={ch.id}
                onClick={() => setActiveChapter(ch.id)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex flex-col items-center px-4 py-2.5 rounded-2xl border transition-all text-sm font-semibold gap-0.5",
                  isActive
                    ? `bg-gradient-to-r ${ch.gradient} text-white border-transparent shadow-lg`
                    : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                <span className="text-base">{ch.emoji} {ch.label}</span>
                <span className={cn("text-[10px] font-bold", isActive ? "text-white/80" : "text-muted-foreground")}>
                  {ch.badge}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="max-w-xs mx-auto space-y-8 py-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex justify-center">
                <Skeleton className="w-16 h-16 rounded-full" />
              </div>
            ))}
          </div>
        )}

        {/* Game map */}
        {roadmap && (
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-xs mx-auto relative"
          >
            {nodes.map((node, nodeIdx) => {
              if (node.type === "header") {
                const meta = LEVEL_META[node.level.label] ?? LEVEL_META["Beginner"];
                return (
                  <LevelHeader
                    key={`header-${node.level.level}`}
                    label={meta.label}
                    cefr={meta.cefr}
                    emoji={meta.emoji}
                    gradient={meta.gradient}
                    isUnlocked={node.level.isUnlocked}
                  />
                );
              }

              if (node.type === "lesson") {
                const meta = LEVEL_META[node.level.label] ?? LEVEL_META["Beginner"];
                const side = sideOf(node.globalIdx);
                const delay = nodeIdx * 0.05;

                const prevStation = stationNodes.find(n =>
                  (n.type === "lesson" || n.type === "test") && n.globalIdx === node.globalIdx - 1
                );
                const showConnector = node.globalIdx > 0 && !!prevStation;
                const fromSide = showConnector ? sideOf(prevStation!.globalIdx) : "right";

                return (
                  <div key={`lesson-${node.lesson.id}`}>
                    {showConnector && (
                      <Connector
                        from={fromSide} to={side}
                        color={meta.color}
                        animated={node.lesson.isUnlocked}
                        delay={delay - 0.03}
                      />
                    )}
                    <LessonStation
                      lesson={node.lesson} side={side}
                      meta={meta} stationNum={node.stationNum} delay={delay}
                    />
                  </div>
                );
              }

              if (node.type === "test") {
                const meta = LEVEL_META[node.level.label] ?? LEVEL_META["Beginner"];
                const side = sideOf(node.globalIdx);
                const delay = nodeIdx * 0.05;

                const prevStation = stationNodes.find(n =>
                  (n.type === "lesson" || n.type === "test") && n.globalIdx === node.globalIdx - 1
                );
                const fromSide = prevStation ? sideOf(prevStation.globalIdx) : "right";

                return (
                  <div key={`test-${node.level.level}`}>
                    {prevStation && (
                      <Connector
                        from={fromSide} to={side}
                        color={node.level.testPassed ? "#eab308" : meta.color}
                        animated={node.level.testAvailable ?? false}
                        delay={delay - 0.03}
                      />
                    )}
                    <LevelTestStation
                      levelKey={node.level.level}
                      meta={meta}
                      testPassed={node.level.testPassed}
                      testScore={node.level.testScore}
                      testAvailable={(node.level as RoadmapLevel).testAvailable ?? false}
                      isUnlocked={node.level.isUnlocked}
                      delay={delay}
                    />
                  </div>
                );
              }

              return null;
            })}

            {/* Bottom padding */}
            <div className="h-12" />
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
