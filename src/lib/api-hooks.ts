/**
 * Drop-in replacement for @workspace/api-client-react
 * Uses Supabase for persistence + local lesson banks for content
 */
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase, getCurrentUser, getStats, getAchievements, getLessonProgress, completeLesson as _completeLesson, getLevelTestResult, saveLevelTest } from "./supabase";
import { getLessonMeta } from "./lesson-meta";
import { getLessonMiniExercises } from "./lesson-exercises";
import type { ExObj } from "./lesson-banks/types";

// ── Re-export types ──
export type { AuthUser, Lesson, LessonDetail, Exercise, ExerciseResult, Achievement, UserStats, RoadmapLevel } from "./supabase";

// ─────────────────────────────────────────────
// Raw lesson catalogue (static, no server needed)
// ─────────────────────────────────────────────
import type { Lesson } from "./supabase";

type LessonLevel = "beginner" | "elementary" | "intermediate" | "upper-intermediate" | "advanced" | "proficiency";
type LessonCategory = "grammar" | "vocabulary" | "reading" | "listening" | "speaking" | "writing";

const LESSON_CATALOGUE: Omit<Lesson, "isUnlocked" | "completedAt" | "score" | "stars">[] = [
  // A1 Beginner
  { id: 1,  title: "Greetings & Introductions",  description: "تعلّم كيف تُحيّي الآخرين وتُعرّف بنفسك", level: "beginner", category: "speaking",   durationMinutes: 15, order: 1,  xpReward: 50 },
  { id: 2,  title: "The Verb 'To Be'",            description: "فهم am/is/are وكيف تبني جملاً وصفية", level: "beginner", category: "grammar",    durationMinutes: 20, order: 2,  xpReward: 60 },
  { id: 3,  title: "Numbers & Counting",          description: "الأرقام من 1-100 والأعداد الترتيبية",  level: "beginner", category: "vocabulary", durationMinutes: 15, order: 3,  xpReward: 50 },
  { id: 4,  title: "Colors & Descriptions",       description: "الألوان والصفات الأساسية",              level: "beginner", category: "vocabulary", durationMinutes: 15, order: 4,  xpReward: 50 },
  { id: 5,  title: "My Daily Routine",            description: "أفعال الروتين اليومي والمضارع البسيط",  level: "beginner", category: "grammar",    durationMinutes: 20, order: 5,  xpReward: 60 },
  { id: 6,  title: "Family Members",              description: "أسماء أفراد العائلة وضمائر الملكية",   level: "beginner", category: "vocabulary", durationMinutes: 15, order: 6,  xpReward: 50 },
  { id: 7,  title: "Food & Drink",                description: "مفردات الطعام والشراب والوجبات",       level: "beginner", category: "vocabulary", durationMinutes: 15, order: 7,  xpReward: 50 },
  { id: 8,  title: "Simple Questions",            description: "بناء أسئلة بسيطة باستخدام who/what/where", level: "beginner", category: "grammar", durationMinutes: 20, order: 8, xpReward: 60 },
  { id: 9,  title: "Basic Prepositions",          description: "حروف الجر الأساسية: in/on/at/under",   level: "beginner", category: "grammar",    durationMinutes: 20, order: 9,  xpReward: 60 },
  { id: 10, title: "The Alphabet & Phonics",      description: "الأبجدية الإنجليزية وأصوات الحروف",    level: "beginner", category: "listening",  durationMinutes: 15, order: 10, xpReward: 50 },
  // A2 Elementary
  { id: 11, title: "Articles: A, An, The",        description: "متى تستخدم a, an, the",               level: "elementary", category: "grammar",    durationMinutes: 20, order: 1,  xpReward: 65 },
  { id: 12, title: "Past Simple Tense",           description: "الماضي البسيط: أفعال منتظمة وشاذة",   level: "elementary", category: "grammar",    durationMinutes: 25, order: 2,  xpReward: 75 },
  { id: 13, title: "Present Continuous",          description: "المضارع المستمر: am/is/are + verb-ing", level: "elementary", category: "grammar",   durationMinutes: 20, order: 3,  xpReward: 65 },
  { id: 14, title: "Countable & Uncountable",     description: "الأسماء العددية وغير العددية",         level: "elementary", category: "grammar",    durationMinutes: 20, order: 4,  xpReward: 65 },
  { id: 15, title: "Comparative Adjectives",      description: "صفات المقارنة: bigger, more beautiful", level: "elementary", category: "grammar",   durationMinutes: 20, order: 5,  xpReward: 65 },
  { id: 16, title: "Future: Will & Going To",     description: "التعبير عن المستقبل",                  level: "elementary", category: "grammar",    durationMinutes: 25, order: 6,  xpReward: 75 },
  { id: 17, title: "Modal Verbs: Can & Must",     description: "أفعال القدرة والإلزام",                level: "elementary", category: "grammar",    durationMinutes: 20, order: 7,  xpReward: 65 },
  { id: 18, title: "Talking About Places",        description: "وصف الأماكن والاتجاهات",               level: "elementary", category: "speaking",   durationMinutes: 20, order: 8,  xpReward: 65 },
  { id: 19, title: "Shopping & Money",            description: "مفردات التسوق والأسعار والعملات",      level: "elementary", category: "vocabulary", durationMinutes: 20, order: 9,  xpReward: 65 },
  { id: 20, title: "Weather & Seasons",           description: "وصف الطقس والفصول الأربعة",            level: "elementary", category: "vocabulary", durationMinutes: 15, order: 10, xpReward: 60 },
  // B1 Intermediate
  { id: 21, title: "Present Perfect",             description: "المضارع التام: have/has + past participle", level: "intermediate", category: "grammar", durationMinutes: 30, order: 1, xpReward: 80 },
  { id: 22, title: "Past Continuous",             description: "الماضي المستمر: was/were + verb-ing",  level: "intermediate", category: "grammar",    durationMinutes: 25, order: 2,  xpReward: 75 },
  { id: 23, title: "Reported Speech",             description: "الكلام المنقول: قواعد التحويل",        level: "intermediate", category: "grammar",    durationMinutes: 30, order: 3,  xpReward: 85 },
  { id: 24, title: "Conditionals 1 & 2",          description: "جمل الشرط الأول والثاني",              level: "intermediate", category: "grammar",    durationMinutes: 30, order: 4,  xpReward: 85 },
  { id: 25, title: "Passive Voice",               description: "المبني للمجهول في الأزمنة المختلفة",   level: "intermediate", category: "grammar",    durationMinutes: 30, order: 5,  xpReward: 85 },
  { id: 26, title: "Relative Clauses",            description: "الجمل الموصولة: who/which/that",       level: "intermediate", category: "grammar",    durationMinutes: 30, order: 6,  xpReward: 80 },
  { id: 27, title: "Vocabulary: Travel & Tourism", description: "مفردات السفر والسياحة والفنادق",     level: "intermediate", category: "vocabulary", durationMinutes: 25, order: 7,  xpReward: 75 },
  { id: 28, title: "Reading: News Articles",      description: "استراتيجيات قراءة الأخبار والمقالات",  level: "intermediate", category: "reading",    durationMinutes: 30, order: 8,  xpReward: 80 },
  { id: 29, title: "Listening Skills",            description: "فهم الحوارات الطبيعية",                level: "intermediate", category: "listening",  durationMinutes: 25, order: 9,  xpReward: 75 },
  { id: 30, title: "Writing Paragraphs",          description: "بناء الفقرة: موضوع، دعم، خاتمة",      level: "intermediate", category: "writing",    durationMinutes: 30, order: 10, xpReward: 80 },
  // B2 Upper Intermediate
  { id: 31, title: "Advanced Conditionals",       description: "الشرط الثالث والمختلط",               level: "upper-intermediate", category: "grammar",    durationMinutes: 35, order: 1, xpReward: 95 },
  { id: 32, title: "Modals: Advanced Use",        description: "الأفعال المساعدة: should have/might have", level: "upper-intermediate", category: "grammar", durationMinutes: 35, order: 2, xpReward: 95 },
  { id: 33, title: "Discourse Markers",           description: "أدوات الربط والتنظيم في النص",        level: "upper-intermediate", category: "writing",    durationMinutes: 30, order: 3, xpReward: 90 },
  { id: 34, title: "Idiomatic Expressions",       description: "التعابير الاصطلاحية الشائعة",          level: "upper-intermediate", category: "vocabulary", durationMinutes: 30, order: 4, xpReward: 90 },
  { id: 35, title: "Formal vs Informal",          description: "الأسلوب الرسمي وغير الرسمي",          level: "upper-intermediate", category: "writing",    durationMinutes: 35, order: 5, xpReward: 95 },
  { id: 36, title: "Reading: Academic Texts",     description: "قراءة النصوص الأكاديمية والبحثية",   level: "upper-intermediate", category: "reading",    durationMinutes: 35, order: 6, xpReward: 95 },
  { id: 37, title: "Listening: Lectures",         description: "فهم المحاضرات والخطابات",             level: "upper-intermediate", category: "listening",  durationMinutes: 30, order: 7, xpReward: 90 },
  { id: 38, title: "Business English",            description: "لغة الأعمال والاجتماعات",             level: "upper-intermediate", category: "speaking",   durationMinutes: 35, order: 8, xpReward: 95 },
  { id: 39, title: "Essay Writing",               description: "كتابة المقال: هيكل وأسلوب",           level: "upper-intermediate", category: "writing",    durationMinutes: 35, order: 9, xpReward: 95 },
  { id: 40, title: "Vocabulary: Academic Word List", description: "المفردات الأكاديمية الأساسية",    level: "upper-intermediate", category: "vocabulary", durationMinutes: 30, order: 10, xpReward: 90 },
  // C1 Advanced
  { id: 41, title: "Inversion & Emphasis",        description: "القلب النحوي وأساليب التوكيد",         level: "advanced", category: "grammar",    durationMinutes: 40, order: 1,  xpReward: 110 },
  { id: 42, title: "Advanced Passive Structures", description: "المبني للمجهول المركّب",              level: "advanced", category: "grammar",    durationMinutes: 40, order: 2,  xpReward: 110 },
  { id: 43, title: "Subjunctive Mood",            description: "المضارع الافتراضي وصيغه",             level: "advanced", category: "grammar",    durationMinutes: 40, order: 3,  xpReward: 110 },
  { id: 44, title: "Hedging & Vagueness",         description: "أسلوب التحوط والغموض المقصود",        level: "advanced", category: "writing",    durationMinutes: 35, order: 4,  xpReward: 105 },
  { id: 45, title: "Cohesion & Coherence",        description: "التماسك والترابط في النص",            level: "advanced", category: "writing",    durationMinutes: 40, order: 5,  xpReward: 110 },
  { id: 46, title: "Formal Academic Writing",     description: "الكتابة الأكاديمية الرسمية",          level: "advanced", category: "writing",    durationMinutes: 40, order: 6,  xpReward: 110 },
  { id: 47, title: "Advanced Listening: Accents & Speed", description: "الاستماع المتقدم واللهجات", level: "advanced", category: "listening",  durationMinutes: 35, order: 7,  xpReward: 105 },
  { id: 48, title: "Argumentation & Critical Thinking", description: "الحجة المنطقية والتفكير الناقد", level: "advanced", category: "speaking", durationMinutes: 40, order: 8, xpReward: 110 },
  { id: 49, title: "Advanced Vocabulary: Collocations", description: "المتلازمات اللغوية المتقدمة", level: "advanced", category: "vocabulary", durationMinutes: 35, order: 9, xpReward: 105 },
  { id: 50, title: "Reading: Complex Texts",      description: "قراءة النصوص المعقدة والتحليل",       level: "advanced", category: "reading",    durationMinutes: 40, order: 10, xpReward: 110 },
  // C2 Proficiency
  { id: 51, title: "Stylistic Devices & Rhetoric", description: "الأساليب البلاغية والإقناع",        level: "proficiency", category: "writing",    durationMinutes: 45, order: 1,  xpReward: 130 },
  { id: 52, title: "Literary Texts: Analysis & Appreciation", description: "تحليل النصوص الأدبية", level: "proficiency", category: "reading",    durationMinutes: 45, order: 2,  xpReward: 130 },
  { id: 53, title: "Nuanced Vocabulary: Register & Connotation", description: "دقة المفردات والأسلوب", level: "proficiency", category: "vocabulary", durationMinutes: 45, order: 3, xpReward: 130 },
  { id: 54, title: "Advanced Conversation: Debate Skills", description: "مهارات النقاش والإقناع",   level: "proficiency", category: "speaking",   durationMinutes: 45, order: 4,  xpReward: 130 },
  { id: 55, title: "The English of Innovation",   description: "لغة الابتكار والتقنية",              level: "proficiency", category: "vocabulary", durationMinutes: 40, order: 5,  xpReward: 125 },
  { id: 56, title: "Writing for Publication",     description: "الكتابة للنشر والتحرير",             level: "proficiency", category: "writing",    durationMinutes: 45, order: 6,  xpReward: 130 },
];

const LEVEL_ORDER: LessonLevel[] = ["beginner", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];
const LEVEL_LABELS: Record<LessonLevel, string> = {
  "beginner": "Beginner",
  "elementary": "Elementary",
  "intermediate": "Intermediate",
  "upper-intermediate": "Upper Intermediate",
  "advanced": "Advanced",
  "proficiency": "Proficiency",
};

// ─────────────────────────────────────────────
// Auth
// ─────────────────────────────────────────────
export function useGetCurrentAuthUser() {
  return useQuery({
    queryKey: ["auth-user"],
    queryFn: getCurrentUser,
    staleTime: 60_000,
  });
}

// ─────────────────────────────────────────────
// Lessons
// ─────────────────────────────────────────────
function buildLessonsWithProgress(
  progress: { lesson_id: number; score: number | null; stars: number; completed_at: string }[],
  filter?: { level?: string; category?: string }
): Lesson[] {
  const progressMap = new Map(progress.map(p => [p.lesson_id, p]));

  // Determine which levels are unlocked based on completed tests
  return LESSON_CATALOGUE
    .filter(l => {
      if (filter?.level && l.level !== filter.level) return false;
      if (filter?.category && l.category !== filter.category) return false;
      return true;
    })
    .map(l => {
      const levelIdx = LEVEL_ORDER.indexOf(l.level as LessonLevel);
      const prog = progressMap.get(l.id);
      // First level always unlocked; subsequent levels unlock when prev lesson completed
      const prevLevelLessons = levelIdx === 0 ? [] : LESSON_CATALOGUE.filter(x => x.level === LEVEL_ORDER[levelIdx - 1]);
      const prevCompleted = prevLevelLessons.length === 0 || prevLevelLessons.every(x => progressMap.has(x.id));
      const isUnlocked = levelIdx === 0 || prevCompleted || prog !== undefined;
      return {
        ...l,
        isUnlocked,
        completedAt: prog?.completed_at ?? null,
        score: prog?.score ?? null,
        stars: prog?.stars ?? 0,
      };
    });
}

export function useGetLessons(params?: { level?: string; category?: string }) {
  const { data: user } = useGetCurrentAuthUser();
  return useQuery({
    queryKey: ["lessons", params, user?.id],
    queryFn: async () => {
      const progress = user ? await getLessonProgress(user.id) : [];
      return buildLessonsWithProgress(progress as any, params);
    },
    enabled: true,
  });
}

export function useGetLesson(id: number, options?: { enabled?: boolean; query?: { enabled?: boolean; queryKey?: any } }) {
  const { data: user } = useGetCurrentAuthUser();
  const enabled = (options?.enabled !== false) && (options?.query?.enabled !== false) && !!id;
  return useQuery({
    queryKey: ["lesson", id, user?.id],
    queryFn: async () => {
      const base = LESSON_CATALOGUE.find(l => l.id === id);
      if (!base) throw new Error("Lesson not found");
      const progress = user ? await getLessonProgress(user.id) : [];
      const meta = getLessonMeta(base.title);
      return {
        ...base,
        isUnlocked: true,
        completedAt: (progress as any[]).find(p => p.lesson_id === id)?.completed_at ?? null,
        score: (progress as any[]).find(p => p.lesson_id === id)?.score ?? null,
        stars: (progress as any[]).find(p => p.lesson_id === id)?.stars ?? 0,
        content: meta.objectives.map((o, i) => `${i + 1}. ${o}`).join("\n"),
        exerciseCount: 10,
      };
    },
    enabled,
  });
}

// ─────────────────────────────────────────────
// Exercises (converted from ExObj → Exercise shape)
// ─────────────────────────────────────────────
function exObjToExercise(ex: ExObj, lessonId: number, idx: number) {
  let type: "multiple_choice" | "fill_blank" | "matching" | "true_false" | "reorder" = "multiple_choice";
  if (ex.type === "word_order") type = "reorder";

  let question = ex.sentence ?? ex.arabic ?? ex.listenSentence ?? ex.word ?? "";
  let options: string[] = ex.options ?? [];

  if (ex.type === "word_order" && ex.sentence) {
    question = ex.sentence;
    options = ex.sentence.split(" ").sort(() => Math.random() - 0.5);
  }
  if (ex.type === "picture_match" && ex.pictureOptions) {
    options = ex.pictureOptions.map(p => `${p.emoji} ${p.label}`);
    question = `What is this? ${ex.word}`;
  }
  if (ex.type === "listen_select") {
    question = `🔊 ${ex.listenSentence}`;
  }

  return {
    id: idx + 1,
    lessonId,
    type,
    question,
    options,
    order: idx + 1,
    hint: ex.explanation ?? null,
    // Extra fields used by lesson-detail
    correctAnswer: ex.correctAnswer,
    explanation: ex.explanation,
    xp: ex.xp,
    originalType: ex.type,
    arabic: ex.arabic,
    listenSentence: ex.listenSentence,
    word: ex.word,
    pictureOptions: ex.pictureOptions,
    sentence: ex.sentence,
  };
}

export function useGetLessonExercises(lessonId: number) {
  return useQuery({
    queryKey: ["exercises", lessonId],
    queryFn: () => {
      const base = LESSON_CATALOGUE.find(l => l.id === lessonId);
      if (!base) return [];
      const exObjs = getLessonMiniExercises(base.title, 10, 0);
      return exObjs.map((ex, i) => exObjToExercise(ex, lessonId, i));
    },
    enabled: !!lessonId,
  });
}

// ─────────────────────────────────────────────
// Submit Exercise (local scoring)
// ─────────────────────────────────────────────
export function useSubmitExercise() {
  return useMutation({
    mutationFn: async (data: { exerciseId: number; answer: string; exercise?: any }) => {
      const ex = data.exercise;
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
}

// ─────────────────────────────────────────────
// Complete Lesson
// ─────────────────────────────────────────────
export function useCompleteLesson() {
  const qc = useQueryClient();
  const { data: user } = useGetCurrentAuthUser();
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: { score: number; xpEarned?: number } }) => {
      const lesson = LESSON_CATALOGUE.find(l => l.id === id);
      const xp = data.xpEarned ?? lesson?.xpReward ?? 50;
      if (user) {
        await _completeLesson(user.id, id, data.score, xp);
        // Get updated stars from DB
        const progress = await getLessonProgress(user.id);
        const lessonProgress = (progress as any[]).find((p: any) => p.lesson_id === id);
        const stars = lessonProgress?.stars ?? 1;
        return { score: data.score, stars, xpEarned: xp };
      }
      return { score: data.score, stars: 1, xpEarned: xp };
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["lessons"] });
      qc.invalidateQueries({ queryKey: ["stats"] });
      qc.invalidateQueries({ queryKey: ["roadmap"] });
      qc.invalidateQueries({ queryKey: ["achievements"] });
    },
  });
}

// ─────────────────────────────────────────────
// Stats
// ─────────────────────────────────────────────
export function useGetStats() {
  const { data: user } = useGetCurrentAuthUser();
  return useQuery({
    queryKey: ["stats", user?.id],
    queryFn: async () => {
      if (!user) return null;
      return getStats(user.id);
    },
    enabled: !!user,
  });
}

// ─────────────────────────────────────────────
// Achievements
// ─────────────────────────────────────────────
export function useGetAchievements() {
  const { data: user } = useGetCurrentAuthUser();
  return useQuery({
    queryKey: ["achievements", user?.id],
    queryFn: async () => {
      if (!user) return [];
      return getAchievements(user.id);
    },
    enabled: !!user,
  });
}

// ─────────────────────────────────────────────
// Roadmap
// ─────────────────────────────────────────────
export function useGetRoadmap() {
  const { data: user } = useGetCurrentAuthUser();
  return useQuery({
    queryKey: ["roadmap", user?.id],
    queryFn: async () => {
      const progress = user ? await getLessonProgress(user.id) : [];
      const progressMap = new Map((progress as any[]).map((p: any) => [p.lesson_id, p]));

      const tests = user
        ? await supabase.from("level_tests").select("*").eq("user_id", user.id).then(r => r.data ?? [])
        : [];
      const testMap = new Map((tests as any[]).map((t: any) => [t.level, t]));

      return LEVEL_ORDER.map((level, idx) => {
        const levelLessons = LESSON_CATALOGUE.filter(l => l.level === level);
        const completedInLevel = levelLessons.filter(l => progressMap.has(l.id)).length;
        const prevLevelLessons = idx === 0 ? [] : LESSON_CATALOGUE.filter(l => l.level === LEVEL_ORDER[idx - 1]);
        const prevCompleted = prevLevelLessons.length === 0 || prevLevelLessons.every(l => progressMap.has(l.id));
        const test = testMap.get(level) as any;

        return {
          level,
          label: LEVEL_LABELS[level],
          order: idx + 1,
          lessons: levelLessons.map(l => ({
            ...l,
            isUnlocked: idx === 0 || prevCompleted,
            completedAt: (progressMap.get(l.id) as any)?.completed_at ?? null,
            score: (progressMap.get(l.id) as any)?.score ?? null,
            stars: (progressMap.get(l.id) as any)?.stars ?? 0,
          })),
          totalLessons: levelLessons.length,
          completedLessons: completedInLevel,
          isUnlocked: idx === 0 || prevCompleted,
          testPassed: test?.passed ?? false,
          testScore: test?.score ?? null,
          testAvailable: completedInLevel >= Math.ceil(levelLessons.length * 0.7),
        };
      });
    },
  });
}

// ─────────────────────────────────────────────
// Progress
// ─────────────────────────────────────────────
export function useGetProgress() {
  const { data: user } = useGetCurrentAuthUser();
  return useQuery({
    queryKey: ["progress", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const data = await getLessonProgress(user.id);
      return (data as any[]).map((p: any) => ({
        lessonId: p.lesson_id,
        completed: !!p.completed_at,
        score: p.score,
        stars: p.stars,
        completedAt: p.completed_at,
      }));
    },
    enabled: !!user,
  });
}

// ─────────────────────────────────────────────
// Query key helpers (for cache invalidation)
// ─────────────────────────────────────────────
export const getGetLessonQueryKey = (id: number) => ["lesson", id];
export const getGetProgressQueryKey = () => ["progress"];
export const getGetStatsQueryKey = () => ["stats"];
export const getGetRoadmapQueryKey = () => ["roadmap"];
