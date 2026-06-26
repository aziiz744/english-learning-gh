import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Check, X, Zap, Trophy, ArrowRight, BookOpen, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Mascot, type MascotState } from "@/components/mascot";
import { useSound } from "@/hooks/useSound";
import { QuestionText, OptionText } from "@/components/word-highlighter";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const LEVEL_LABELS: Record<string, string> = {
  beginner: "المبتدئ A1",
  elementary: "الأساسي A2",
  intermediate: "المتوسط B1",
  "upper-intermediate": "المتقدم B2",
  advanced: "المتمكن C1",
  proficiency: "الإتقان C2",
};

const LEVEL_EMOJI: Record<string, string> = {
  beginner: "🌱", elementary: "📗", intermediate: "⭐",
  "upper-intermediate": "🚀", advanced: "💎", proficiency: "👑",
};

interface Exercise {
  id: number;
  lessonId: number;
  type: string;
  question: string;
  options: string[];
  hint: string | null;
  order: number;
}

interface FeedbackResult {
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  xpEarned: number;
}

export default function LevelTest() {
  const { level } = useParams<{ level: string }>();
  const [, setLocation] = useLocation();
  const { playCorrect, playWrong, playComplete } = useSound();

  const [step, setStep] = useState<"intro" | "test" | "results">("intro");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [totalXp, setTotalXp] = useState(0);
  const [mascotState, setMascotState] = useState<MascotState>("idle");
  const [cardShake, setCardShake] = useState(false);

  const { data: exercises, isLoading } = useQuery<Exercise[]>({
    queryKey: ["level-test", level],
    queryFn: async () => {
      const { getLessonMiniExercises } = await import("@/lib/lesson-exercises");
      const LEVEL_LESSON_TITLES: Record<string, string> = {
        beginner: "Greetings & Introductions",
        elementary: "Articles: A, An, The",
        intermediate: "Present Perfect",
        "upper-intermediate": "Advanced Conditionals",
        advanced: "Inversion & Emphasis",
        proficiency: "Stylistic Devices & Rhetoric",
      };
      const title = LEVEL_LESSON_TITLES[level ?? ""] ?? "Greetings & Introductions";
      const exObjs = getLessonMiniExercises(title, 10, 3);
      return exObjs.map((ex, i) => ({
        id: i + 1,
        lessonId: 0,
        type: ex.type === "word_order" ? "reorder" : "multiple_choice",
        question: ex.sentence ?? ex.arabic ?? ex.listenSentence ?? ex.word ?? "",
        options: ex.options ?? (ex.pictureOptions?.map(p => `${p.emoji} ${p.label}`) ?? []),
        order: i + 1,
        hint: ex.explanation,
        correctAnswer: ex.correctAnswer,
        explanation: ex.explanation,
        xp: ex.xp,
      }));
    },
    enabled: !!level,
  });

  const submitMutation = useMutation<FeedbackResult, Error, { exerciseId: number; answer: string }>({
    mutationFn: async (data) => {
      const ex = exercises?.find(e => e.id === data.exerciseId) as any;
      if (!ex) return { isCorrect: false, correctAnswer: "", explanation: "", xpEarned: 0 };
      const isCorrect = data.answer.trim().toLowerCase() === (ex.correctAnswer ?? "").trim().toLowerCase();
      return {
        isCorrect,
        correctAnswer: ex.correctAnswer ?? "",
        explanation: ex.explanation ?? "",
        xpEarned: isCorrect ? (ex.xp ?? 10) : 0,
      };
    },
  });

  const currentExercise = exercises?.[currentIdx];
  const progress = exercises ? (currentIdx / exercises.length) * 100 : 0;

  const handleSubmit = () => {
    if (!currentExercise || !selected || feedback) return;
    submitMutation.mutate(
      { exerciseId: currentExercise.id, answer: selected },
      {
        onSuccess: (result) => {
          setFeedback(result);
          setResults((r) => [...r, result.isCorrect]);
          if (result.isCorrect) {
            setTotalXp((x) => x + result.xpEarned);
            setMascotState("correct");
            playCorrect();
            setTimeout(() => setMascotState("idle"), 2200);
          } else {
            setMascotState("wrong");
            playWrong();
            setCardShake(true);
            setTimeout(() => { setCardShake(false); setMascotState("idle"); }, 600);
          }
        },
      }
    );
  };

  const saveResultMutation = useMutation<{ passed: boolean; score: number }, Error, { score: number }>({
    mutationFn: async (data) => {
      const { saveLevelTest } = await import("@/lib/supabase");
      const { supabase } = await import("@/lib/supabase");
      const { data: { user } } = await supabase.auth.getUser();
      if (user && level) {
        return saveLevelTest(user.id, level, data.score);
      }
      return { passed: data.score >= 70, score: data.score };
    },
  });

  const handleNext = () => {
    if (!exercises) return;
    if (currentIdx < exercises.length - 1) {
      setCurrentIdx((i) => i + 1);
      setSelected("");
      setFeedback(null);
      setMascotState("thinking");
      setTimeout(() => setMascotState("idle"), 800);
    } else {
      const correct = results.filter(Boolean).length + (feedback?.isCorrect ? 1 : 0);
      const finalScore = Math.round((correct / exercises.length) * 100);
      setStep("results");
      saveResultMutation.mutate({ score: finalScore });
      if (finalScore >= 70) {
        setMascotState("complete");
        playComplete();
      }
    }
  };

  const score = exercises?.length
    ? Math.round((results.filter(Boolean).length / exercises.length) * 100)
    : 0;
  const passed = score >= 70;

  if (!level || !LEVEL_LABELS[level]) {
    return <><div className="text-center py-20 text-muted-foreground">مستوى غير موجود</div></>;
  }

  return (
    <>
      <div className="max-w-3xl mx-auto pt-4 pb-8">

        {/* ── Intro ── */}
        {step === "intro" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-8">
            <div>
              <Button variant="ghost" onClick={() => setLocation("/roadmap")} className="mb-6">← العودة لخارطة التعلم</Button>
              <div className="text-6xl mb-4">{LEVEL_EMOJI[level]}</div>
              <h1 className="text-4xl font-bold mb-3">الاختبار الشامل</h1>
              <p className="text-xl text-primary font-bold">{LEVEL_LABELS[level]}</p>
              <p className="text-muted-foreground mt-2">اختبار يقيس فهمك الحقيقي لكل مواد المستوى</p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="p-4 bg-card border rounded-2xl">
                <div className="text-3xl font-bold text-primary">25</div>
                <div className="text-xs text-muted-foreground mt-1">سؤال شامل</div>
              </div>
              <div className="p-4 bg-card border rounded-2xl">
                <div className="text-3xl font-bold text-amber-400">70%</div>
                <div className="text-xs text-muted-foreground mt-1">للنجاح وفتح المستوى التالي</div>
              </div>
              <div className="p-4 bg-card border rounded-2xl">
                <div className="text-3xl font-bold text-green-400">+250</div>
                <div className="text-xs text-muted-foreground mt-1">XP مكافأة</div>
              </div>
            </div>

            <div className="flex justify-center">
              <Mascot state="idle" className="w-28 h-32" />
            </div>

            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <Button size="lg" className="py-6 text-lg shadow-lg"
                onClick={() => { setStep("test"); setMascotState("thinking"); }}
                disabled={isLoading}
              >
                {isLoading ? "جاري التحميل..." : "ابدأ الاختبار 🚀"}
              </Button>
              <Button variant="outline" onClick={() => setLocation("/roadmap")}>العودة</Button>
            </div>
          </motion.div>
        )}

        {/* ── Test ── */}
        {step === "test" && currentExercise && (
          <div className="flex flex-col gap-4">
            {/* Progress HUD */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1">
                <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                  <span>سؤال {currentIdx + 1} من {exercises?.length}</span>
                  <span className="text-primary font-bold">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
              <div className="flex items-center gap-1 text-primary text-sm font-bold bg-primary/10 px-3 py-1.5 rounded-full">
                <Zap className="w-4 h-4" /> {totalXp}
              </div>
            </div>

            <div className="flex gap-4">
              {/* Main exercise card */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className={cn(cardShake && "shake")}>
                      <CardHeader className="bg-muted/20 border-b pb-5">
                        <CardTitle className="text-xl leading-relaxed">
                          <QuestionText text={currentExercise.question} />
                        </CardTitle>
                        {currentExercise.hint && (
                          <p className="text-sm text-amber-400 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20 mt-2">
                            💡 {currentExercise.hint}
                          </p>
                        )}
                      </CardHeader>
                      <CardContent className="p-5">
                        <div className="grid gap-2.5">
                          {currentExercise.options.map((opt, i) => {
                            const isSelected = selected === opt;
                            const isCorrectOpt = feedback && opt === feedback.correctAnswer;
                            const isWrong = feedback && isSelected && !feedback.isCorrect;
                            return (
                              <button
                                key={`${opt}-${i}`}
                                className={cn(
                                  "py-3.5 px-5 rounded-xl text-base font-semibold w-full border-2 transition-all",
                                  !feedback && !isSelected && "border-border hover:border-primary hover:bg-primary/5 cursor-pointer",
                                  !feedback && isSelected && "border-primary bg-primary/15 text-primary",
                                  feedback && isCorrectOpt && "border-green-500 bg-green-500/15 text-green-400",
                                  feedback && isWrong && "border-red-500 bg-red-500/10 text-red-400",
                                  feedback && !isSelected && !isCorrectOpt && "border-border opacity-40 cursor-default",
                                )}
                                onClick={() => !feedback && setSelected(opt)}
                                disabled={!!feedback}
                              >
                                <div className="flex items-center gap-3">
                                  <span className={cn(
                                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border-2",
                                    !feedback && isSelected ? "border-primary bg-primary text-primary-foreground" : "border-current opacity-50"
                                  )}>{["أ","ب","ج","د"][i]}</span>
                                  <OptionText text={opt} />
                                  {feedback && isCorrectOpt && <Check className="w-4 h-4 text-green-400 shrink-0 mr-auto" />}
                                  {feedback && isWrong && <X className="w-4 h-4 text-red-400 shrink-0 mr-auto" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                {/* Feedback */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "mt-4 p-4 rounded-2xl border-2 flex items-center justify-between gap-4",
                        feedback.isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"
                      )}
                    >
                      <div>
                        <p className={cn("font-bold", feedback.isCorrect ? "text-green-400" : "text-red-400")}>
                          {feedback.isCorrect ? "✅ صحيح!" : "❌ خطأ"}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5">{feedback.explanation}</p>
                        {!feedback.isCorrect && (
                          <p className="text-sm mt-0.5">الصواب: <span className="text-green-400 font-bold">{feedback.correctAnswer}</span></p>
                        )}
                      </div>
                      <Button
                        className={cn("shrink-0", feedback.isCorrect ? "bg-green-600 hover:bg-green-700" : "")}
                        onClick={handleNext}
                      >
                        التالي <ArrowRight className="mr-1 w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!feedback && (
                  <div className="mt-4">
                    <Button size="lg" className="px-8"
                      disabled={!selected || submitMutation.isPending}
                      onClick={handleSubmit}
                    >
                      {submitMutation.isPending ? "..." : "تحقق"}
                    </Button>
                  </div>
                )}
              </div>

              {/* Mascot sidebar */}
              <div className="w-24 shrink-0 flex items-end pb-4">
                <Mascot state={mascotState} className="w-20 h-24" />
              </div>
            </div>
          </div>
        )}

        {/* ── Results ── */}
        {step === "results" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center min-h-[70vh]"
          >
            <Card className={cn(
              "w-full max-w-md text-center border-2 overflow-hidden",
              passed ? "border-primary/30" : "border-muted"
            )}>
              <div className={cn(
                "py-10 flex flex-col items-center",
                passed ? "bg-primary/10" : "bg-muted/20"
              )}>
                <div className="mb-4">
                  <Mascot state={passed ? "complete" : "wrong"} className="w-28 h-32" />
                </div>
                <h2 className={cn("text-3xl font-bold mb-1", passed ? "text-primary" : "text-foreground")}>
                  {passed ? "🎉 نجحت في الاختبار!" : "💪 لم تنجح هذه المرة"}
                </h2>
                <p className="text-muted-foreground">
                  {passed ? "أثبتت إتقانك لهذا المستوى!" : "راجع الدروس وحاول مرة أخرى"}
                </p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="p-4 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold">{score}%</div>
                    <div className="text-xs text-muted-foreground mt-1">النتيجة</div>
                  </div>
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl">
                    <div className="text-3xl font-bold text-primary">+{totalXp + (passed ? 250 : 0)}</div>
                    <div className="text-xs text-muted-foreground mt-1">XP</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-400">
                      {results.filter(Boolean).length}/{exercises?.length}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">صحيح</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {passed ? (
                    <Button size="lg" className="w-full py-5" onClick={() => setLocation("/roadmap")}>
                      <Trophy className="ml-2 w-5 h-5" /> المستوى التالي
                    </Button>
                  ) : (
                    <Button size="lg" className="w-full py-5" onClick={() => {
                      setStep("intro"); setCurrentIdx(0); setSelected("");
                      setFeedback(null); setResults([]); setTotalXp(0);
                    }}>
                      حاول مرة أخرى 🔄
                    </Button>
                  )}
                  <Button variant="outline" className="w-full" onClick={() => setLocation("/lessons")}>
                    <BookOpen className="ml-2 w-4 h-4" /> راجع الدروس
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </>
  );
}
