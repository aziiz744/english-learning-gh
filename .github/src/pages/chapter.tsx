import { useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import {
  useGetLessons,
  useGetLessonExercises,
  useCompleteLesson,
} from "@/lib/api-hooks";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Lock, Play, Check, Zap, ChevronRight,
  BookOpen, X, Trophy, ArrowRight, RotateCcw,
  Sparkles,
} from "lucide-react";
import { QuestionText, OptionText } from "@/components/word-highlighter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

const LEVELS = [
  { key: "beginner",           cefr: "A1", label: "المبتدئ",   emoji: "🌱", color: "from-emerald-500 to-green-600",   ring: "ring-emerald-400",  glow: "shadow-emerald-500/40",  dot: "bg-emerald-500",  text: "text-emerald-400" },
  { key: "elementary",         cefr: "A2", label: "الأساسي",   emoji: "📗", color: "from-sky-500 to-blue-600",        ring: "ring-sky-400",      glow: "shadow-sky-500/40",      dot: "bg-sky-500",      text: "text-sky-400"     },
  { key: "intermediate",       cefr: "B1", label: "المتوسط",   emoji: "⭐", color: "from-violet-500 to-purple-600",   ring: "ring-violet-400",   glow: "shadow-violet-500/40",   dot: "bg-violet-500",   text: "text-violet-400"  },
  { key: "upper-intermediate", cefr: "B2", label: "المتقدم",   emoji: "🚀", color: "from-amber-500 to-orange-600",    ring: "ring-amber-400",    glow: "shadow-amber-500/40",    dot: "bg-amber-500",    text: "text-amber-400"   },
  { key: "advanced",           cefr: "C1", label: "المتمكن",   emoji: "💎", color: "from-rose-500 to-red-600",        ring: "ring-rose-400",     glow: "shadow-rose-500/40",     dot: "bg-rose-500",     text: "text-rose-400"    },
  { key: "proficiency",        cefr: "C2", label: "الإتقان",   emoji: "👑", color: "from-yellow-400 to-amber-500",    ring: "ring-yellow-400",   glow: "shadow-yellow-500/40",   dot: "bg-yellow-400",   text: "text-yellow-400"  },
];

const CATEGORY_EMOJI: Record<string, string> = {
  grammar: "📝", vocabulary: "📚", reading: "📖",
  listening: "🎧", speaking: "🗣️", writing: "✍️",
};


function StarRow({ count, size = "sm" }: { count: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2].map((i) => (
        <Star key={i} className={cn(cls, i < count ? "text-amber-400 fill-amber-400" : "text-muted-foreground/25")} />
      ))}
    </div>
  );
}

/* ── Skip-test modal ── */
interface SkipTestModalProps {
  lessonId: number; lessonTitle: string; levelColor: string;
  onClose: () => void; onPassed: () => void;
}
function SkipTestModal({ lessonId, lessonTitle, levelColor, onClose, onPassed }: SkipTestModalProps) {
  const { data: exercises, isLoading } = useGetLessonExercises(lessonId);
  const completeLesson = useCompleteLesson();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ correct: boolean }[]>([]);
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [score, setScore] = useState(0);
  const [earnedStars, setEarnedStars] = useState(0);

  const ex = exercises?.[current];
  const total = exercises?.length ?? 0;

  function choose(opt: string) { if (selected) return; setSelected(opt); }

  function next() {
    if (!selected || !ex) return;
    const correctAnswer = (ex as any).correctAnswer ?? "";
    const isCorrect = selected.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    const newAnswers = [...answers, { correct: isCorrect }];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= total) {
      const pct = Math.round((newAnswers.filter(a => a.correct).length / total) * 100);
      setScore(pct);
      setPhase("result");
      if (pct >= 70) {
        setEarnedStars(1);
        completeLesson.mutate(
          { id: lessonId, data: { score: pct } },
          { onSuccess: (data) => { setEarnedStars((data as any).stars ?? 1); onPassed(); } },
        );
      }
    } else { setCurrent(c => c + 1); }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        className="bg-card border border-border rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
      >
        <div className={cn("bg-gradient-to-r p-4 flex items-center justify-between", levelColor)}>
          <div>
            <div className="text-white font-bold text-sm flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> اختبار التخطي
            </div>
            <div className="text-white/80 text-xs mt-0.5">{lessonTitle}</div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>

        {isLoading ? (
          <div className="p-8 text-center text-muted-foreground text-sm">جارٍ تحميل الأسئلة…</div>
        ) : phase === "quiz" && ex ? (
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className={cn("h-full bg-gradient-to-r rounded-full transition-all", levelColor)} style={{ width: `${(current / total) * 100}%` }} />
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">{current + 1}/{total}</span>
            </div>
            <div className="font-semibold text-foreground text-base leading-snug">
              <QuestionText text={ex.question} />
            </div>
            <div className="space-y-2">
              {((ex as any).options as string[] ?? []).map((opt: string) => {
                const correctAnswer = (ex as any).correctAnswer ?? "";
                const isCorrectOpt = opt.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
                const isSelected = selected === opt;
                return (
                  <button key={opt} onClick={() => choose(opt)} className={cn(
                    "w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all flex items-center gap-2",
                    !selected ? "border-border hover:border-primary/50 hover:bg-primary/5"
                      : isSelected ? (isCorrectOpt ? "border-emerald-500 bg-emerald-500/15 text-emerald-400" : "border-red-500 bg-red-500/15 text-red-400")
                      : isCorrectOpt ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                      : "border-border opacity-50"
                  )}>
                    <OptionText text={opt} />
                  </button>
                );
              })}
            </div>
            <Button onClick={next} disabled={!selected} className={cn("w-full gap-1 font-bold bg-gradient-to-r border-0 text-white", levelColor)}>
              {current + 1 === total ? "إنهاء الاختبار" : "التالي"} <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        ) : phase === "result" ? (
          <div className="p-6 text-center space-y-4">
            {score >= 70 ? (
              <>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="text-6xl mx-auto">🎉</motion.div>
                <div>
                  <p className="text-xl font-bold text-foreground">أحسنت! اجتزت الاختبار</p>
                  <p className="text-muted-foreground text-sm mt-1">النتيجة: <span className="text-emerald-400 font-bold">{score}%</span></p>
                </div>
                <div className="flex justify-center"><StarRow count={earnedStars || 1} size="lg" /></div>
                <Button onClick={onClose} className="w-full">متابعة</Button>
              </>
            ) : (
              <>
                <div className="text-6xl">😓</div>
                <div>
                  <p className="text-xl font-bold text-foreground">لم تتجاوز الاختبار</p>
                  <p className="text-muted-foreground text-sm mt-1">النتيجة: <span className="text-red-400 font-bold">{score}%</span></p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={onClose} className="flex-1 gap-1"><RotateCcw className="w-3.5 h-3.5" /> مجدداً</Button>
                  <Link href={`/lessons/${lessonId}`}><Button className="flex-1 gap-1"><BookOpen className="w-3.5 h-3.5" /> ادرس</Button></Link>
                </div>
              </>
            )}
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

/* ── Lesson card ── */
function LessonCard({ lesson, idx, meta, onSkip }: {
  lesson: {
    id: number; title: string; description: string; category: string;
    durationMinutes: number; xpReward?: number | null;
    isUnlocked: boolean; completedAt?: string | null; score?: number | null; stars?: number | null;
  };
  idx: number;
  meta: typeof LEVELS[0];
  onSkip: (id: number) => void;
}) {
  const stars = lesson.stars ?? 0;
  const isDone = !!lesson.completedAt;
  const isLocked = !lesson.isUnlocked;
  const canSkip = !isLocked && !isDone;
  const catEmoji = CATEGORY_EMOJI[lesson.category] ?? "📚";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.06 }}
      className={cn(
        "rounded-2xl border p-4 flex flex-col gap-3 transition-all relative overflow-hidden",
        isDone
          ? "border-primary/20 bg-primary/5"
          : isLocked
            ? "border-border bg-muted/10 opacity-50"
            : "border-border bg-card hover:border-primary/30 hover:shadow-md",
      )}
    >
      {/* Lock overlay */}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-[1px] rounded-2xl z-10">
          <div className="flex flex-col items-center gap-1">
            <Lock className="w-6 h-6 text-muted-foreground/40" />
            <span className="text-[10px] text-muted-foreground/50">مغلق</span>
          </div>
        </div>
      )}

      {/* Top row: number + category + stars */}
      <div className="flex items-start justify-between gap-2">
        {/* Station number circle */}
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm",
          isDone
            ? `bg-gradient-to-br ${meta.color} text-white shadow-md`
            : "bg-muted text-muted-foreground border border-border"
        )}>
          {isDone ? <Check className="w-4 h-4" /> : idx + 1}
        </div>

        {/* Category badge */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs bg-muted px-2 py-0.5 rounded-lg text-muted-foreground font-medium">
              {catEmoji} {lesson.category}
            </span>
            {lesson.xpReward != null && (
              <span className={cn("text-xs font-bold flex items-center gap-0.5", meta.text)}>
                <Zap className="w-3 h-3" /> {lesson.xpReward} XP
              </span>
            )}
          </div>
        </div>

        {/* Stars */}
        {isDone && <StarRow count={stars} />}
      </div>

      {/* Title & description */}
      <div>
        <h3 className="font-bold text-foreground text-sm leading-snug">{lesson.title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{lesson.description}</p>
      </div>

      {/* Footer: duration + actions */}
      <div className="flex items-center justify-between gap-2 mt-auto">
        <span className="text-[11px] text-muted-foreground">
          ⏱ {lesson.durationMinutes} دقيقة · 7 أسئلة
        </span>

        {!isLocked && (
          <div className="flex gap-1.5 items-center">
            {canSkip && (
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs gap-1 border-amber-500/40 text-amber-500 hover:bg-amber-500/10 px-2"
                onClick={() => onSkip(lesson.id)}
              >
                <Sparkles className="w-3 h-3" /> تخطّي
              </Button>
            )}
            <Link href={`/lessons/${lesson.id}`}>
              <Button
                size="sm"
                className={cn(
                  "h-7 text-xs gap-1 font-bold px-3",
                  isDone
                    ? "bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25"
                    : `bg-gradient-to-r ${meta.color} border-0 text-white`,
                )}
              >
                {isDone ? <><RotateCcw className="w-3 h-3" /> إعادة</> : <><Play className="w-3 h-3" /> ابدأ</>}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main Chapter page ── */
export default function Chapter() {
  const { level: levelParam } = useParams<{ level: string }>();
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();

  const meta = LEVELS.find(l => l.key === levelParam) ?? LEVELS[0];
  const levelIdx = LEVELS.findIndex(l => l.key === levelParam);

  const { data: lessons, isLoading } = useGetLessons({ level: levelParam as any });
  const [skipTestLessonId, setSkipTestLessonId] = useState<number | null>(null);
  const skipLesson = lessons?.find(l => l.id === skipTestLessonId);

  const completed = lessons?.filter(l => l.completedAt).length ?? 0;
  const total = lessons?.length ?? 0;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const canTest = completed >= Math.ceil(total * 0.5);

  function handlePassedSkipTest() {
    queryClient.invalidateQueries();
    setSkipTestLessonId(null);
  }

  return (
    <>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">

        {/* Back */}
        <Link href="/roadmap">
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowRight className="w-4 h-4" /> خارطة التعلم
          </button>
        </Link>

        {/* Level hero card */}
        <div className={cn("rounded-2xl p-5 bg-gradient-to-br text-white shadow-xl", meta.color, meta.glow)}>
          <div className="flex items-center gap-3">
            <span className="text-5xl">{meta.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold">{meta.label}</h1>
                <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-lg">{meta.cefr}</span>
              </div>

              {/* Progress bar */}
              {total > 0 && (
                <div className="mt-3">
                  <div className="flex justify-between text-white/70 text-xs mb-1.5">
                    <span>{completed}/{total} دروس مكتملة</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white/80 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Level nav pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
          {LEVELS.map(lv => (
            <Link key={lv.key} href={`/chapter/${lv.key}`}>
              <motion.button
                whileTap={{ scale: 0.94 }}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold whitespace-nowrap transition-all",
                  lv.key === levelParam
                    ? `bg-gradient-to-r ${lv.color} border-transparent text-white shadow-md`
                    : "border-border bg-muted/30 text-muted-foreground hover:border-primary/30"
                )}
              >
                <span>{lv.emoji}</span> {lv.cefr}
              </motion.button>
            </Link>
          ))}
        </div>

        {/* Lessons grid */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-44 rounded-2xl" />)}
          </div>
        ) : lessons && lessons.length > 0 ? (
          <>
            {/* Section header */}
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-muted-foreground">{total} درس · 7 أسئلة لكل درس</span>
            </div>

            {/* Cards grid: 2 columns on sm+ */}
            <div className="grid sm:grid-cols-2 gap-4">
              {lessons.map((lesson, idx) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  idx={idx}
                  meta={meta}
                  onSkip={setSkipTestLessonId}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>لا توجد دروس في هذا المستوى حتى الآن</p>
          </div>
        )}

        {/* Level test CTA */}
        {canTest && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-5 border border-amber-500/30 bg-amber-500/5 text-center space-y-3"
          >
            <Trophy className="w-10 h-10 text-amber-400 mx-auto" />
            <div>
              <p className="font-bold text-foreground text-lg">جاهز لاختبار المستوى؟</p>
              <p className="text-xs text-muted-foreground mt-0.5">اجتز 70% أو أكثر لفتح المستوى التالي</p>
            </div>
            <Link href={`/level-test/${levelParam}`}>
              <Button className={cn("gap-2 font-bold bg-gradient-to-r border-0 text-white px-6", meta.color)}>
                <Trophy className="w-4 h-4" /> ابدأ اختبار {meta.cefr}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Skip test modal */}
      <AnimatePresence>
        {skipTestLessonId !== null && skipLesson && (
          <SkipTestModal
            lessonId={skipTestLessonId}
            lessonTitle={skipLesson.title}
            levelColor={meta.color}
            onClose={() => setSkipTestLessonId(null)}
            onPassed={handlePassedSkipTest}
          />
        )}
      </AnimatePresence>
    </>
  );
}
