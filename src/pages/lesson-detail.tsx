import { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useSearch } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { triggerLoginModal as openLoginModal } from "@/lib/modal-state";
import {
  useGetLesson, useSubmitExercise, useCompleteLesson,
  getGetLessonQueryKey, getGetProgressQueryKey,
  getGetStatsQueryKey, getGetRoadmapQueryKey,
} from "@/lib/api-hooks";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Check, X, Award, Lightbulb, PlayCircle, Trophy, Heart, Zap, Flame, Shuffle, Languages, Crown, Star } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Mascot, type MascotState } from "@/components/mascot";
import { useSound } from "@/hooks/useSound";
import { QuestionText, OptionText } from "@/components/word-highlighter";
import { getMiniExercisesForLesson, type MiniExercise } from "@/lib/mini-exercises";
import { getLessonMeta } from "@/lib/lesson-meta";
import { WordOrderExercise } from "@/components/exercises/word-order-exercise";
import { TranslateExercise } from "@/components/exercises/translate-exercise";
import { ListenSelectExercise } from "@/components/exercises/listen-select-exercise";
import { PictureMatchExercise } from "@/components/exercises/picture-match-exercise";
import type { Exercise } from "@/lib/api-hooks";

type QueueItem =
  | { kind: "api"; exercise: Exercise }
  | { kind: "mini"; exercise: MiniExercise };

/* ───────── Confetti ───────── */
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CONFETTI_COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7", "#06b6d4", "#f97316"];

function Confetti() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay: `${Math.random() * 0.8}s`,
    duration: `${1.5 + Math.random() * 1.5}s`,
    size: `${6 + Math.random() * 10}px`,
    rotation: `${Math.random() * 360}deg`,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            top: "-20px",
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            transform: `rotate(${p.rotation})`,
          }}
        />
      ))}
    </div>
  );
}

/* ───────── Floating XP ───────── */
function FloatingXP({ xp, onDone }: { xp: number; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1300);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="xp-float pointer-events-none fixed top-1/3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-primary text-primary-foreground font-bold text-xl px-4 py-2 rounded-full shadow-lg">
      <Zap className="w-5 h-5" />
      +{xp} XP
    </div>
  );
}

/* ───────── Hearts ───────── */
function Hearts({ count, max = 3, isPro = false }: { count: number; max?: number; isPro?: boolean }) {
  if (isPro) return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div key={i} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}>
          <Heart className="w-6 h-6 fill-blue-400 text-blue-400" />
        </motion.div>
      ))}
      <span className="text-xs text-blue-400 font-bold mr-1">∞</span>
    </div>
  );
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <motion.div
          key={i}
          animate={i >= count ? { scale: [1, 1.4, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart
            className={cn("w-6 h-6 transition-all", i < count ? "fill-red-500 text-red-500" : "text-muted-foreground/30 fill-muted-foreground/10")}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ───────── Main component ───────── */
export default function LessonDetail() {
  const { id } = useParams<{ id: string }>();
  const lessonId = parseInt(id || "0", 10);
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const search = useSearch();
  const challengeMode = new URLSearchParams(search).get("challenge") === "1";

  const { user, isLoading: authLoading } = useAuth();
  const { data: lesson, isLoading: lessonLoading } = useGetLesson(lessonId, {
    query: { enabled: !!lessonId, queryKey: getGetLessonQueryKey(lessonId) },
  });
  const submitExercise = useSubmitExercise();
  const completeLesson = useCompleteLesson();

  const [step, setStep] = useState<"intro" | "exercises" | "completion" | "gameover">("intro");
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; explanation: string; xpEarned: number; correctAnswer?: string } | null>(null);
  const [score, setScore] = useState(0);
  const [totalXpEarned, setTotalXpEarned] = useState(0);

  // Combined queue: API exercises + mini exercises interleaved
  const [combinedQueue, setCombinedQueue] = useState<QueueItem[]>([]);

  // Gamification state
  const [hearts, setHearts] = useState(challengeMode ? 1 : 3);
  const [isPro, setIsPro] = useState(false);
  const lessonCompletedRef = useRef(false); // prevent double completion
  const [wrongAnswers, setWrongAnswers] = useState<typeof combinedQueue>([]);
  const isReviewMode = useRef(false);
  useEffect(() => {
    import("@/lib/supabase").then(({ supabase }) => {
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (user) {
          supabase.from("user_stats").select("is_pro").eq("user_id", user.id).single()
            .then(({ data }) => setIsPro(data?.is_pro ?? false));
        }
      });
    });
  }, []);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [showXpFloat, setShowXpFloat] = useState<{ xp: number; key: number } | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [earnedStars, setEarnedStars] = useState(0);
  const [cardShake, setCardShake] = useState(false);
  const [showCombo, setShowCombo] = useState(false);
  const xpFloatKey = useRef(0);

  // Mascot + Sound
  const { playCorrect, playWrong, playCombo, playComplete } = useSound();
  const [mascotState, setMascotState] = useState<MascotState>("idle");
  const mascotResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setMascotFor = (s: MascotState, resetAfter = 2200) => {
    if (mascotResetRef.current) clearTimeout(mascotResetRef.current);
    setMascotState(s);
    if (resetAfter > 0) {
      mascotResetRef.current = setTimeout(() => setMascotState("idle"), resetAfter);
    }
  };

  // Build the practice queue ONCE when lesson loads — never rebuild mid-session.
  // Stars are read at session-start only; updating stars in DB won't rebuild the queue.
  const [queueBuilt, setQueueBuilt] = useState(false);
  useEffect(() => {
    if (!lesson?.title || queueBuilt) return;
    const TARGET = 10;
    // Attempt tier from stars: 0=first attempt, 1=after 1★, 2=after 2★, 3=challenge.
    const starsCount = Math.min(lesson.stars ?? 0, 2);
    const tier: 0 | 1 | 2 | 3 = challengeMode ? 3 : (starsCount as 0 | 1 | 2);
    const mini = getMiniExercisesForLesson(TARGET, tier, lesson.title);
    setCombinedQueue(mini.map((exercise) => ({
      kind: "mini" as const,
      // Only shuffle options for non-word_order exercises
      exercise: exercise.options && exercise.options.length > 0 && exercise.type !== "word_order"
        ? { ...exercise, options: shuffleArray(exercise.options) }
        : exercise,
    })));
    setQueueBuilt(true);
  }, [lesson?.title, challengeMode, queueBuilt]);

  const currentItem = combinedQueue[currentExerciseIndex];
  const currentExercise = currentItem?.kind === "api" ? currentItem.exercise : null;
  const currentMini = currentItem?.kind === "mini" ? currentItem.exercise : null;
  const totalItems = combinedQueue.length || 0;
  const progressPercent = totalItems > 0 ? (currentExerciseIndex / totalItems) * 100 : 0;
  const [showReviewBanner, setShowReviewBanner] = useState(false);

  const handleStart = () => {
    if (combinedQueue.length > 0) setStep("exercises");
    else setStep("exercises"); // no-op if queue empty
  };

  const handleSubmitAnswer = () => {
    if (!currentExercise || !selectedAnswer || feedback) return;

    submitExercise.mutate(
      { data: { exerciseId: currentExercise.id, answer: selectedAnswer } },
      {
        onSuccess: (result) => {
          setFeedback(result);
          if (result.isCorrect) {
            setScore(s => s + 1);
            setTotalXpEarned(xp => xp + result.xpEarned);
            const newCombo = combo + 1;
            setCombo(newCombo);
            if (newCombo > bestCombo) setBestCombo(newCombo);
            if (newCombo >= 2) setShowCombo(true);

            // Bonus XP for combo
            const bonusXp = newCombo >= 3 ? result.xpEarned * newCombo : result.xpEarned;
            xpFloatKey.current += 1;
            setShowXpFloat({ xp: bonusXp, key: xpFloatKey.current });

            // Mascot + sound — combo5 takes priority
            if (newCombo === 5) {
              setMascotFor("combo5", 4000);
              playCombo();
            } else if (newCombo >= 3) {
              setMascotFor("combo");
              playCombo();
            } else {
              setMascotFor("correct");
              playCorrect();
            }
          } else {
            setCombo(0);
            setShowCombo(false);
            const newHearts = isPro ? hearts : hearts - 1;
            if (!isPro) setHearts(newHearts);
            // Track wrong answers - add to review queue (will repeat until correct)
            if (currentItem) {
              setWrongAnswers(prev => {
                // Avoid duplicates - only add if not already in list
                const exists = prev.some(w => 
                  w.kind === currentItem.kind && 
                  (w.kind === "mini" ? w.exercise === currentItem.exercise : true)
                );
                return exists ? prev : [...prev, currentItem];
              });
            }
            setCardShake(true);
            setTimeout(() => setCardShake(false), 500);
            setMascotFor("wrong");
            playWrong();
            if (newHearts <= 0) {
              setTimeout(() => setStep("gameover"), 1200);
            }
          }
        },
      }
    );
  };

  // Handle mini-exercise local grading
  const handleMiniAnswer = (answer: string) => {
    if (!currentMini || feedback) return;
    const isCorrect = answer.trim().toLowerCase() === currentMini.correctAnswer.trim().toLowerCase();
    const result = {
      isCorrect,
      correctAnswer: currentMini.correctAnswer,
      explanation: currentMini.explanation,
      xpEarned: isCorrect ? currentMini.xp : 0,
    };
    setFeedback(result);
    if (isCorrect) {
      setScore(s => s + 1);
      setTotalXpEarned(xp => xp + currentMini.xp);
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > bestCombo) setBestCombo(newCombo);
      if (newCombo >= 2) setShowCombo(true);
      xpFloatKey.current += 1;
      setShowXpFloat({ xp: currentMini.xp, key: xpFloatKey.current });
      if (newCombo >= 3) { setMascotFor("combo"); playCombo(); }
      else { setMascotFor("correct"); playCorrect(); }
    } else {
      setCombo(0);
      setShowCombo(false);
      const newHearts = isPro ? hearts : hearts - 1;
      if (!isPro) setHearts(newHearts);
      // Add wrong question to review list (avoid duplicates)
      if (currentItem) {
        setWrongAnswers(prev => {
          const alreadyAdded = prev.some(w => 
            w.kind === "mini" && currentItem.kind === "mini" && 
            w.exercise.correctAnswer === currentItem.exercise.correctAnswer &&
            w.exercise.arabic === currentItem.exercise.arabic
          );
          return alreadyAdded ? prev : [...prev, currentItem];
        });
      }
      setCardShake(true);
      setTimeout(() => setCardShake(false), 500);
      setMascotFor("wrong");
      playWrong();
      if (newHearts <= 0) setTimeout(() => setStep("gameover"), 1200);
    }
  };

  const handleNext = () => {
    if (combinedQueue.length === 0) return;
    setShowCombo(false);

    const isLastItem = currentExerciseIndex >= combinedQueue.length - 1;

    if (!isLastItem) {
      setCurrentExerciseIndex(i => i + 1);
      setSelectedAnswer("");
      setFeedback(null);
    } else {
      // Add wrong answers to end for review
      if (wrongAnswers.length > 0) {
        if (!isReviewMode.current) {
          isReviewMode.current = true;
          setShowReviewBanner(true);
          setTimeout(() => setShowReviewBanner(false), 3000);
        }
        // Add all wrong answers back to queue
        const reviewQueue = [...wrongAnswers];
        setWrongAnswers([]); // clear first
        setCombinedQueue(prev => [...prev, ...reviewQueue]);
        setTimeout(() => {
          setCurrentExerciseIndex(i => i + 1);
          setSelectedAnswer("");
          setFeedback(null);
        }, 50);
        return;
      }
      const finalScore = Math.round((score / combinedQueue.length) * 100);
      finishLesson(finalScore);
    }
  };

  const finishLesson = (finalScore: number) => {
    if (lessonCompletedRef.current) return; // already completed
    lessonCompletedRef.current = true;
    if (challengeMode && finalScore >= 80) {
      localStorage.setItem(`challenge-${lessonId}`, "passed");
    }
    completeLesson.mutate(
      { id: lessonId, data: { score: finalScore, xpEarned: totalXpEarned } },
      {
        onSuccess: (data) => {
          setEarnedStars((data as any).stars ?? 0);
          setShowConfetti(true);
          setStep("completion");
          setMascotFor("complete", 0);
          playComplete();
          setTimeout(() => setShowConfetti(false), 4000);
          queryClient.invalidateQueries({ queryKey: getGetLessonQueryKey(lessonId) });
          queryClient.invalidateQueries({ queryKey: getGetProgressQueryKey() });
          queryClient.invalidateQueries({ queryKey: getGetStatsQueryKey() });
          queryClient.invalidateQueries({ queryKey: getGetRoadmapQueryKey() });
        },
      }
    );
  };

  const handleRetry = () => {
    lessonCompletedRef.current = false;
    setHearts(challengeMode ? 1 : 3);
    setCombo(0);
    setCurrentExerciseIndex(0);
    setSelectedAnswer("");
    setFeedback(null);
    setScore(0);
    setTotalXpEarned(0);
    setStep("exercises");
  };

  // Auth guard
  if (!authLoading && !user) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-5 p-6">
          <div className="text-6xl">🔐</div>
          <h2 className="text-2xl font-bold">سجّل دخولك أولاً</h2>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            لحفظ تقدمك ونجومك ومتابعة مستواك، تحتاج لتسجيل الدخول أولاً
          </p>
          <Button size="lg" className="gap-2 px-8" onClick={() => openLoginModal()}>
            تسجيل الدخول
          </Button>
        </div>
      </Layout>
    );
  }

  if (lessonLoading) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto mt-8">
          <Skeleton className="h-10 w-2/3 mb-4" />
          <Skeleton className="h-6 w-1/3 mb-8" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
      </Layout>
    );
  }

  if (!lesson) return <Layout><div className="text-center py-20">الدرس غير موجود</div></Layout>;

  return (
    <Layout>
      {showConfetti && <Confetti />}
      {showXpFloat && (
        <FloatingXP
          key={showXpFloat.key}
          xp={showXpFloat.xp}
          onDone={() => setShowXpFloat(null)}
        />
      )}

      <div className="max-w-3xl mx-auto flex flex-col" style={{height: "calc(100svh - 130px)"}}>

        {/* ── Intro ── */}
        {step === "intro" && (() => {
          const lmeta = getLessonMeta(lesson.title);
          return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col">
            <div className="mb-3">
              <Button variant="ghost" onClick={() => setLocation("/lessons")} className="mb-2 h-8 text-sm">
                ← العودة للدروس
              </Button>

              {challengeMode && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 flex items-center gap-3 px-4 py-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl"
                >
                  <Crown className="w-6 h-6 text-amber-400 shrink-0" />
                  <div>
                    <div className="font-bold text-amber-400 text-sm">وضع التحدي 🏆</div>
                    <div className="text-xs text-amber-400/70">قلب واحد فقط — أجب بدقة للحصول على الكأس!</div>
                  </div>
                </motion.div>
              )}

              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{lmeta.icon}</span>
                <div>
                  <div className="flex items-center gap-2 text-xs text-primary font-bold mb-1 uppercase tracking-wider">
                    {lesson.level} &bull; {lesson.category}
                  </div>
                  <h1 className="text-3xl font-bold">{lmeta.arabic}</h1>
                  <p className="text-sm text-muted-foreground mt-0.5">{lesson.title}</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">{lesson.description}</p>
            </div>

            {/* What you'll learn */}
            {lmeta.objectives.length > 0 && (
              <div className="mb-2">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">✓</span>
                  ما ستتعلمه في هذا الدرس
                </h3>
                <div className="grid grid-cols-1 gap-1.5">
                  {lmeta.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 bg-muted/30 border border-border/50 rounded-lg text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <span className="leading-relaxed text-foreground/90">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Game rules */}
            <div className="mb-3 p-3 bg-muted/40 rounded-xl border border-border grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-red-500 text-red-500 shrink-0" />
                <span>لديك <strong>{challengeMode ? "قلب واحد" : "3 قلوب"}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span><strong>كومبو</strong> = نقاط مضاعفة</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span><strong>{lesson.xpReward} XP</strong> عند الإكمال</span>
              </div>
              {challengeMode && (
                <div className="flex items-center gap-2 col-span-2 sm:w-full">
                  <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-amber-400">أحرز <strong>80%+</strong> للفوز بكأس المحطة</span>
                </div>
              )}
            </div>

            <div className="flex justify-start">
              <Button
                size="lg"
                className={cn("px-10 py-6 text-lg shadow-lg", challengeMode && "bg-amber-500 hover:bg-amber-600")}
                onClick={handleStart}
              >
                <PlayCircle className="ml-2 w-5 h-5" />
                {challengeMode ? "ابدأ التحدي 🏆" : "ابدأ التدريبات"}
              </Button>
            </div>
          </motion.div>
          );
        })()}

        {/* ── Exercises ── */}
        {step === "exercises" && currentItem && (
          <div className="flex-1 flex flex-col">
            {/* HUD */}
            <div className="flex-shrink-0 space-y-1.5 pb-2">
              {/* Hearts + XP row */}
              <div className="flex items-center justify-between gap-2">
                <Hearts count={hearts} isPro={isPro} />
                <div className="flex items-center gap-1 text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded-full">
                  <Zap className="w-3.5 h-3.5" />
                  {totalXpEarned} XP
                </div>
              </div>
              {/* Progress bar row */}
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Progress value={progressPercent} className="h-2.5" />
                </div>
                <span className="text-xs text-muted-foreground font-medium w-8 text-left">{Math.round(progressPercent)}%</span>
              </div>
              {showReviewBanner && (
                <div className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-lg animate-pulse text-center">
                  🔄 مراجعة الأسئلة التي أخطأت فيها
                </div>
              )}
            </div>

            {/* Combo banner */}
            <AnimatePresence>
              {showCombo && combo >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  className="mb-4 flex justify-center"
                >
                  <div className="combo-burst flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold px-3 py-1 rounded-full text-xs shadow-lg">
                    <Flame className="w-4 h-4 fire-glow" />
                    كومبو ×{combo}! نقاط مضاعفة!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Exercise + Mascot row */}
            <div className="flex gap-2 flex-1 min-h-0">
              {/* Main exercise */}
              <div className="flex-1 flex flex-col min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExerciseIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.25 }}
                className="flex-1 flex flex-col"
              >
                <Card className={cn("flex-1 flex flex-col", cardShake && "shake")}>
                  {/* Card header — differs for mini vs API */}
                  <CardHeader className={cn(
                    "pb-5 border-b border-border/50",
                    currentMini?.type === "word_order"     ? "bg-violet-500/5"  :
                    currentMini?.type === "translate"      ? "bg-cyan-500/5"    :
                    currentMini?.type === "listen_select"  ? "bg-sky-500/5"     :
                    currentMini?.type === "picture_match"  ? "bg-emerald-500/5" : "bg-muted/20"
                  )}>
                    {currentMini ? (
                      <CardTitle className="text-lg leading-snug font-bold flex items-center gap-2">
                        {currentMini.type === "word_order"
                          ? <><Shuffle   className="w-5 h-5 text-violet-400" /> رتّب الكلمات لتكوّن جملة صحيحة</>
                          : currentMini.type === "translate"
                          ? <><Languages className="w-5 h-5 text-cyan-400"   /> ترجم إلى الإنجليزية</>
                          : currentMini.type === "listen_select"
                          ? <><span className="text-xl">🔊</span> استمع واختر الكلمة الصحيحة</>
                          : <><span className="text-xl">🖼️</span> طابق الكلمة مع صورتها</>
                        }
                      </CardTitle>
                    ) : (
                      <>
                        <CardTitle className="text-2xl leading-relaxed font-bold">
                          <QuestionText text={currentExercise!.question} disabled={challengeMode} />
                        </CardTitle>
                        {currentExercise!.hint && (
                          <div className="mt-4 flex items-start gap-2 text-sm text-amber-400 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                            <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
                            <p>{currentExercise!.hint}</p>
                          </div>
                        )}
                      </>
                    )}
                  </CardHeader>

                  <CardContent className="p-3 flex flex-col justify-center overflow-y-auto" style={{maxHeight: "calc(100svh - 280px)"}}>
                    {/* ── Mini: Word Order ── */}
                    {currentMini?.type === "word_order" && (
                      <WordOrderExercise
                        question={currentMini.sentence ?? ""}
                        correctAnswer={currentMini.correctAnswer}
                        onAnswer={handleMiniAnswer}
                        feedback={feedback ? { isCorrect: feedback.isCorrect, correctAnswer: feedback.correctAnswer ?? "" } : null}
                      />
                    )}

                    {/* ── Mini: Translate ── */}
                    {currentMini?.type === "translate" && (
                      <TranslateExercise
                        arabicPrompt={currentMini.arabic ?? ""}
                        options={currentMini.options ?? []}
                        selectedAnswer={selectedAnswer}
                        onSelect={(ans) => { setSelectedAnswer(ans); }}
                        feedback={feedback ? { isCorrect: feedback.isCorrect, correctAnswer: feedback.correctAnswer ?? "" } : null}
                      />
                    )}

                    {/* ── Mini: Listen & Select ── */}
                    {currentMini?.type === "listen_select" && (
                      <ListenSelectExercise
                        sentence={currentMini.listenSentence ?? ""}
                        options={currentMini.options ?? []}
                        correctAnswer={currentMini.correctAnswer}
                        onAnswer={handleMiniAnswer}
                        feedback={feedback ? { isCorrect: feedback.isCorrect, correctAnswer: feedback.correctAnswer ?? "" } : null}
                      />
                    )}

                    {/* ── Mini: Picture Match ── */}
                    {currentMini?.type === "picture_match" && (
                      <PictureMatchExercise
                        word={currentMini.word ?? ""}
                        pictureOptions={currentMini.pictureOptions ?? []}
                        correctAnswer={currentMini.correctAnswer}
                        onAnswer={handleMiniAnswer}
                        feedback={feedback ? { isCorrect: feedback.isCorrect, correctAnswer: feedback.correctAnswer ?? "" } : null}
                      />
                    )}

                    {/* ── API: MCQ ── */}
                    {currentExercise && (
                      <div className="grid gap-3">
                        {currentExercise.options.map((option, i) => {
                          const isSelected = selectedAnswer === option;
                          const isCorrectAnswer = feedback && option === feedback.correctAnswer;
                          const isWrongSelected = feedback && isSelected && !feedback.isCorrect;

                          return (
                            <motion.button
                              key={`${option}-${i}`}
                              whileHover={!feedback ? { scale: 1.01 } : {}}
                              whileTap={!feedback ? { scale: 0.99 } : {}}
                              className={cn(
                                "py-2.5 px-4 rounded-xl text-base font-semibold transition-all w-full border-2",
                                !feedback && !isSelected && "border-border hover:border-primary hover:bg-primary/5 cursor-pointer",
                                !feedback && isSelected && "border-primary bg-primary/15 text-primary",
                                feedback && isCorrectAnswer && "border-green-500 bg-green-500/15 text-green-400 correct-pulse",
                                feedback && isWrongSelected && "border-red-500 bg-red-500/10 text-red-400 opacity-80",
                                feedback && !isSelected && !isCorrectAnswer && "border-border opacity-40 cursor-default",
                              )}
                              onClick={() => !feedback && setSelectedAnswer(option)}
                              disabled={!!feedback}
                            >
                              <div className="flex items-center gap-3">
                                <div className={cn(
                                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold border-2",
                                  !feedback && isSelected ? "border-primary bg-primary text-primary-foreground" : "border-current opacity-50"
                                )}>
                                  {["أ", "ب", "ج", "د"][i] ?? i + 1}
                                </div>
                                <OptionText text={option} disabled={challengeMode} />
                                {feedback && isCorrectAnswer && <Check className="w-5 h-5 text-green-400 shrink-0 mr-auto" />}
                                {feedback && isWrongSelected && <X className="w-5 h-5 text-red-400 shrink-0 mr-auto" />}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Feedback & action - fixed above bottom nav */}
            <div className="flex-shrink-0 mt-auto">
              {/* Mascot - visible on mobile above feedback */}
              <div className="lg:hidden flex justify-start px-2 -mb-1">
                <Mascot state={mascotState} className="w-14 h-20" />
              </div>
              {feedback ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "rounded-2xl border-2 overflow-hidden",
                    feedback.isCorrect
                      ? "bg-green-500/10 border-green-500/40"
                      : "bg-red-500/10 border-red-500/40"
                  )}
                >
                  {/* Top bar */}
                  <div className={cn(
                    "px-4 py-2 flex items-center gap-2",
                    feedback.isCorrect ? "bg-green-500/15" : "bg-red-500/15"
                  )}>
                    <span className="text-xl">
                      {feedback.isCorrect
                        ? combo >= 3 ? "🔥" : combo >= 2 ? "⚡" : "✅"
                        : "❌"}
                    </span>
                    <h4 className={cn("font-bold text-base", feedback.isCorrect ? "text-green-400" : "text-red-400")}>
                      {feedback.isCorrect
                        ? combo >= 3 ? `كومبو رائع! ×${combo} 🔥`
                          : combo >= 2 ? `تسلسل ممتاز! ×${combo} ⚡`
                          : "إجابة صحيحة! أحسنت 🎉"
                        : "إجابة خاطئة — لا تيأس!"}
                    </h4>
                  </div>

                  {/* Body */}
                  <div className="px-3 py-2 flex flex-col gap-2">
                    <div className="flex-1 space-y-2">
                      {/* Explanation */}
                      {feedback.explanation && (
                        <p className={cn("text-xs leading-relaxed hidden md:block", feedback.isCorrect ? "text-green-400/80" : "text-foreground/80")}>
                          {feedback.explanation}
                        </p>
                      )}

                      {/* Wrong: show correct answer prominently */}
                      {!feedback.isCorrect && feedback.correctAnswer && (
                        <div className="flex items-center gap-2 mt-2 p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                          <Check className="w-4 h-4 text-green-400 shrink-0" />
                          <div className="text-sm">
                            <span className="text-muted-foreground">الإجابة الصحيحة: </span>
                            <span className="text-green-400 font-bold text-base">{feedback.correctAnswer}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <Button
                      size="lg"
                      className={cn(
                        "w-full py-5 text-lg font-bold rounded-2xl shadow-lg",
                        feedback.isCorrect
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      )}
                      onClick={handleNext}
                    >
                      التالي <ArrowRight className="mr-2 w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="flex justify-start">
                  {/* Auto-submit types: word_order, listen_select, picture_match — no button needed */}
                  {(currentMini?.type === "translate" || !currentMini) && (
                    <Button
                      size="lg"
                      className="w-full py-4 text-base font-bold shadow-sm"
                      disabled={!selectedAnswer || submitExercise.isPending}
                      onClick={currentMini ? () => handleMiniAnswer(selectedAnswer) : handleSubmitAnswer}
                    >
                      {submitExercise.isPending ? "..." : "تحقق من الإجابة ✓"}
                    </Button>
                  )}
                  {currentMini?.type === "word_order" && (
                    <p className="text-sm text-muted-foreground italic mt-2">رتّب جميع الكلمات للمتابعة</p>
                  )}
                  {(currentMini?.type === "listen_select" || currentMini?.type === "picture_match") && (
                    <p className="text-sm text-muted-foreground italic mt-2">اختر إجابتك للمتابعة</p>
                  )}
                </div>
              )}
            </div>
              </div>{/* end main exercise */}

              {/* Mascot sidebar — desktop */}
              <div className="hidden sm:flex w-36 shrink-0 items-end pb-2">
                <Mascot state={mascotState} className="w-32 h-44" />
              </div>
            </div>{/* end exercise + mascot row */}

            {/* Mobile mascot — floating above feedback */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  key="mobile-mascot"
                  initial={{ opacity: 0, x: 40, scale: 0.7 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 40, scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="sm:hidden fixed bottom-48 left-3 z-40 pointer-events-none"
                >
                  <Mascot state={mascotState} className="w-20 h-28" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ── Game Over ── */}
        {step === "gameover" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex items-center justify-center"
          >
            <Card className="w-full max-w-md text-center overflow-hidden border-2 border-red-500/30">
              <div className="bg-red-500/10 py-12 flex flex-col items-center">
                <div className="text-7xl mb-4">💔</div>
                <h2 className="text-3xl font-bold text-red-400 mb-2">نفدت القلوب!</h2>
                <p className="text-muted-foreground">لا تستسلم، حاول مرة أخرى!</p>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                  أجبت بشكل صحيح على <span className="font-bold text-foreground">{score}</span> من {totalItems} تمرين
                </div>
                {!isPro && (
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-sm text-right">
                    <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">
                      💙 هل تعلم؟
                    </div>
                    <p className="text-muted-foreground">
                      بالحصول على ميزة <span className="text-blue-400 font-bold">Pro</span> ستحصل على قلوب لا نهائية 💙 وتقدر تكمل تدريبك بدون انقطاع!
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">تواصل مع الإدارة للتفعيل</p>
                  </div>
                )}
                <Button size="lg" className="w-full py-5 text-base" onClick={handleRetry}>
                  حاول مرة أخرى 🔄
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setLocation("/lessons")}>
                  العودة للدروس
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* ── Completion ── */}
        {step === "completion" && (() => {
          const finalScore = Math.round((score / (combinedQueue.length || 1)) * 100);
          const lmeta = getLessonMeta(lesson.title);
          const stars = earnedStars;
          const challengePassed = challengeMode && finalScore >= 80;

          return (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="flex-1 flex items-center justify-center"
          >
            <Card className={cn(
              "w-full max-w-lg text-center overflow-hidden border-2 shadow-2xl",
              challengePassed ? "border-amber-400/50" : "border-primary/30"
            )}>
              <div className={cn(
                "py-12 flex flex-col items-center relative overflow-hidden",
                challengePassed ? "bg-amber-500/10" : "bg-primary/10"
              )}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />

                {challengePassed ? (
                  <>
                    <motion.div
                      animate={{ rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.2, 1] }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex flex-col items-center justify-center mb-6 shadow-2xl shadow-amber-500/50 relative z-10"
                    >
                      <Crown className="w-14 h-14 text-white" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-amber-400 mb-2 relative z-10">🏆 بطل المحطة!</h2>
                    <p className="text-amber-400/80 font-semibold relative z-10">{lmeta.arabic}</p>
                    <div className="flex gap-1 mt-3 relative z-10">
                      {[0,1,2].map(i => (
                        <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.15 }}>
                          <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="w-28 h-28 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/30 relative z-10"
                    >
                      <Trophy className="w-14 h-14" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-primary mb-2 relative z-10">🎉 أحسنت!</h2>
                    <p className="text-primary/80 font-semibold relative z-10">{lmeta.arabic}</p>
                    <div className="flex gap-1 mt-3 relative z-10">
                      {[0,1,2].map(i => (
                        <Star key={i} className={cn("w-5 h-5", i < stars ? "text-amber-400 fill-amber-400" : "text-muted-foreground/20")} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="p-4 bg-muted/50 rounded-2xl flex flex-col items-center">
                    <div className="text-xs font-medium text-muted-foreground mb-1">النتيجة</div>
                    <div className="text-3xl font-bold text-foreground">{finalScore}%</div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-2xl flex flex-col items-center border border-primary/20">
                    <div className="text-xs font-medium text-muted-foreground mb-1">XP المكتسب</div>
                    <div className="text-3xl font-bold text-primary">+{totalXpEarned + lesson.xpReward}</div>
                  </div>
                  <div className="p-4 bg-amber-500/10 rounded-2xl flex flex-col items-center border border-amber-500/20">
                    <div className="text-xs font-medium text-muted-foreground mb-1">أعلى كومبو</div>
                    <div className="text-3xl font-bold text-amber-400">×{bestCombo}</div>
                  </div>
                </div>

                {challengeMode && !challengePassed && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 text-center">
                    تحتاج 80% للفوز بالكأس — حاول مجدداً!
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 mb-6 text-sm text-muted-foreground">
                  <span>القلوب المتبقية:</span>
                  <Hearts count={hearts} max={challengeMode ? 1 : 3} isPro={isPro} />
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full py-5 text-base shadow-lg" onClick={() => setLocation("/roadmap")}>
                    واصل الرحلة <ArrowRight className="mr-2 w-5 h-5" />
                  </Button>
                  {challengeMode && !challengePassed && (
                    <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10" onClick={handleRetry}>
                      حاول التحدي مجدداً 🏆
                    </Button>
                  )}
                  <Button variant="outline" className="w-full" onClick={() => setLocation("/lessons")}>
                    تصفح الدروس
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          );
        })()}
      </div>
    </Layout>
  );
}
