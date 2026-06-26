import { createClient } from "@supabase/supabase-js";

// ── Supabase client ──
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Types ──
export interface AuthUser {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
  isAdmin: boolean;
  isBanned: boolean;
  isPro: boolean;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: string;
  category: string;
  durationMinutes: number;
  order: number;
  xpReward: number;
  isUnlocked: boolean;
  completedAt?: string | null;
  score?: number | null;
  stars?: number;
}

export interface LessonDetail extends Lesson {
  content: string;
  exerciseCount: number;
}

export interface Exercise {
  id: number;
  lessonId: number;
  type: "multiple_choice" | "fill_blank" | "matching" | "true_false" | "reorder";
  question: string;
  options: string[];
  order: number;
  hint?: string | null;
}

export interface ExerciseResult {
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  xpEarned: number;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  condition: string;
  xpRequired: number;
  isEarned: boolean;
  earnedAt?: string | null;
}

export interface UserStats {
  totalXp: number;
  streak: number;
  lessonsCompleted: number;
  exercisesCompleted: number;
  totalLessons: number;
  accuracy: number;
  weeklyXp: number[];
  level: string;
  nextLevelXp: number;
  currentLevelXp: number;
}

export interface RoadmapLevel {
  level: string;
  label: string;
  order: number;
  lessons: Lesson[];
  totalLessons: number;
  completedLessons: number;
  isUnlocked: boolean;
  testPassed: boolean;
  testScore?: number | null;
  testAvailable: boolean;
}

// ── Auth helpers ──
export async function getCurrentUser(): Promise<AuthUser | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  // Check admin from DB (secure server-side check)
  const [{ data: adminRow }, { data: statsRow }] = await Promise.all([
    supabase.from("admins").select("user_id").eq("user_id", user.id).maybeSingle(),
    supabase.from("user_stats").select("is_pro").eq("user_id", user.id).maybeSingle(),
  ]);
  const ADMIN_EMAILS = ["azoozalgamde2@gmail.com"]; // fallback
  return {
    id: user.id,
    email: user.email ?? null,
    firstName: user.user_metadata?.full_name?.split(" ")[0] ?? null,
    lastName: user.user_metadata?.full_name?.split(" ").slice(1).join(" ") ?? null,
    profileImageUrl: user.user_metadata?.avatar_url ?? null,
    isAdmin: !!adminRow || ADMIN_EMAILS.includes(user.email ?? ""),
    isBanned: false,
    isPro: statsRow?.is_pro ?? false,
  };
}

export async function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.origin + import.meta.env.BASE_URL },
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

// ── Stats helpers ──
async function ensureStats(userId: string, email?: string) {
  const { data } = await supabase
    .from("user_stats")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (!data) {
    await supabase.from("user_stats").insert({
      user_id: userId,
      email: email ?? null,
      total_xp: 0,
      streak: 0,
      exercises_completed: 0,
      weekly_xp: [0, 0, 0, 0, 0, 0, 0],
      last_activity_date: new Date().toISOString().split("T")[0],
    });
  } else if (email && !data.email) {
    await supabase.from("user_stats").update({ email }).eq("user_id", userId);
  }
  return data;
}

export async function getStats(userId: string, email?: string): Promise<UserStats> {
  await ensureStats(userId, email);
  // Auto-revoke expired Pro
  const { data: statsCheck } = await supabase
    .from("user_stats").select("is_pro, pro_expires_at").eq("user_id", userId).single();
  if (statsCheck?.is_pro && statsCheck?.pro_expires_at) {
    if (new Date(statsCheck.pro_expires_at) < new Date()) {
      await supabase.from("user_stats")
        .update({ is_pro: false, pro_expires_at: null }).eq("user_id", userId);
    }
  }

  const { data: statsRow } = await supabase
    .from("user_stats")
    .select("*")
    .eq("user_id", userId)
    .single();

  const { data: progress } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId);

  const { data: allLessonsRaw } = await supabase
    .from("user_progress")
    .select("lesson_id");

  const totalXp = statsRow?.total_xp ?? 0;
  const lessonsCompleted = progress?.length ?? 0;

  // XP levels
  const XP_LEVELS = [
    { name: "مبتدئ", xp: 0 }, { name: "متعلم", xp: 500 },
    { name: "متوسط", xp: 1500 }, { name: "متقدم", xp: 3000 },
    { name: "محترف", xp: 6000 }, { name: "خبير", xp: 10000 },
  ];
  let levelName = XP_LEVELS[0].name;
  let currentLevelXp = 0;
  let nextLevelXp = XP_LEVELS[1].xp;
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (totalXp >= XP_LEVELS[i].xp) {
      levelName = XP_LEVELS[i].name;
      currentLevelXp = XP_LEVELS[i].xp;
      nextLevelXp = XP_LEVELS[i + 1]?.xp ?? XP_LEVELS[i].xp + 5000;
      break;
    }
  }

  // Streak calculation
  const today = new Date().toISOString().split("T")[0];
  const lastActivity = statsRow?.last_activity_date;
  let streak = statsRow?.streak ?? 0;
  if (lastActivity && lastActivity !== today) {
    const diff = Math.floor((new Date(today).getTime() - new Date(lastActivity).getTime()) / 86400000);
    if (diff > 1) streak = 0;
  }

  return {
    totalXp,
    streak,
    lessonsCompleted,
    exercisesCompleted: statsRow?.exercises_completed ?? 0,
    totalLessons: 120,
    accuracy: lessonsCompleted > 0
      ? Math.round((progress?.reduce((s, p) => s + (p.score ?? 0), 0) ?? 0) / lessonsCompleted)
      : 0,
    weeklyXp: statsRow?.weekly_xp ?? [0, 0, 0, 0, 0, 0, 0],
    level: levelName,
    nextLevelXp,
    currentLevelXp,
  };
}

export async function addXp(userId: string, xp: number, exerciseCount = 0) {
  await ensureStats(userId);
  const today = new Date().toISOString().split("T")[0];
  const dayOfWeek = new Date().getDay();

  const { data: current } = await supabase
    .from("user_stats")
    .select("*")
    .eq("user_id", userId)
    .single();

  const weeklyXp = current?.weekly_xp ?? [0, 0, 0, 0, 0, 0, 0];
  weeklyXp[dayOfWeek] = (weeklyXp[dayOfWeek] ?? 0) + xp;

  const lastActivity = current?.last_activity_date;
  let streak = current?.streak ?? 0;
  if (lastActivity !== today) {
    const diff = lastActivity
      ? Math.floor((new Date(today).getTime() - new Date(lastActivity).getTime()) / 86400000)
      : 999;
    streak = diff === 1 ? streak + 1 : 1;
  }

  await supabase.from("user_stats").update({
    total_xp: (current?.total_xp ?? 0) + xp,
    exercises_completed: (current?.exercises_completed ?? 0) + exerciseCount,
    weekly_xp: weeklyXp,
    streak,
    last_activity_date: today,
    updated_at: new Date().toISOString(),
  }).eq("user_id", userId);
}

// ── Progress helpers ──
export async function getLessonProgress(userId: string) {
  const { data } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId);
  return data ?? [];
}

export async function completeLesson(
  userId: string,
  lessonId: number,
  score: number,
  xpEarned: number
) {
  // Use atomic SQL increment to avoid race conditions
  // First get current state
  const { data: existing } = await supabase
    .from("user_progress")
    .select("stars, completed_at")
    .eq("user_id", userId)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  const currentStars = existing?.stars ?? 0;
  
  // If already at 3 stars, don't add more
  if (currentStars >= 3) {
    await addXp(userId, Math.round(xpEarned * 0.1), 0); // small bonus for replay
    return;
  }
  
  // Each successful attempt adds exactly ONE star (max 3)
  const newStars = currentStars + 1;
  // Only mark as completed when all 3 stars are earned
  const completedAt = newStars === 3 ? new Date().toISOString() : (existing?.completed_at ?? null);

  await supabase.from("user_progress").upsert({
    user_id: userId,
    lesson_id: lessonId,
    score,
    stars: newStars,
    completed_at: completedAt,
  }, { onConflict: "user_id,lesson_id" });
  await addXp(userId, xpEarned, 1);
}

// ── Level test helpers ──
export async function getLevelTestResult(userId: string, level: string) {
  const { data } = await supabase
    .from("level_tests")
    .select("*")
    .eq("user_id", userId)
    .eq("level", level)
    .single();
  return data ?? null;
}

export async function saveLevelTest(userId: string, level: string, score: number) {
  const passed = score >= 70;
  await supabase.from("level_tests").upsert({
    user_id: userId,
    level,
    score,
    passed,
    completed_at: new Date().toISOString(),
  }, { onConflict: "user_id,level" });
  if (passed) await addXp(userId, 100);
  return { passed, score };
}

// ── Achievements ──
const ACHIEVEMENT_DEFS = [
  { id: 1, name: "الخطوة الأولى", description: "أكمل درسك الأول", icon: "🌱", condition: "first_lesson", xpRequired: 0 },
  { id: 2, name: "متعلم نشيط", description: "أكمل 5 دروس", icon: "📚", condition: "lessons_5", xpRequired: 0 },
  { id: 3, name: "نصف الطريق", description: "أكمل 10 دروس", icon: "🎯", condition: "lessons_10", xpRequired: 0 },
  { id: 4, name: "جامع النجوم", description: "احصل على 3 نجوم في 5 دروس", icon: "⭐", condition: "stars_15", xpRequired: 0 },
  { id: 5, name: "المواظب", description: "سلسلة 3 أيام متواصلة", icon: "🔥", condition: "streak_3", xpRequired: 0 },
  { id: 6, name: "لا يتوقف", description: "سلسلة 7 أيام متواصلة", icon: "🏆", condition: "streak_7", xpRequired: 0 },
  { id: 7, name: "جامع XP", description: "اجمع 500 XP", icon: "⚡", condition: "xp_500", xpRequired: 500 },
  { id: 8, name: "ألفي XP", description: "اجمع 2000 XP", icon: "💎", condition: "xp_2000", xpRequired: 2000 },
  { id: 9, name: "اجتاز المستوى", description: "اجتز اختبار مستوى", icon: "🎓", condition: "level_test", xpRequired: 0 },
  { id: 10, name: "متفوق", description: "احصل على نتيجة 100% في درس", icon: "👑", condition: "perfect_score", xpRequired: 0 },
];

export async function getAchievements(userId: string): Promise<Achievement[]> {
  const [progress, stats, tests] = await Promise.all([
    getLessonProgress(userId),
    getStats(userId),
    supabase.from("level_tests").select("*").eq("user_id", userId).then(r => r.data ?? []),
  ]);

  const completedLessons = progress.length;
  const threeStarLessons = progress.filter(p => p.stars === 3).length;
  const hasPerfect = progress.some(p => p.score === 100);
  const hasPassedTest = tests.some((t: any) => t.passed);

  return ACHIEVEMENT_DEFS.map(def => {
    let isEarned = false;
    let earnedAt: string | null = null;

    switch (def.condition) {
      case "first_lesson": isEarned = completedLessons >= 1; break;
      case "lessons_5": isEarned = completedLessons >= 5; break;
      case "lessons_10": isEarned = completedLessons >= 10; break;
      case "stars_15": isEarned = threeStarLessons >= 5; break;
      case "streak_3": isEarned = stats.streak >= 3; break;
      case "streak_7": isEarned = stats.streak >= 7; break;
      case "xp_500": isEarned = stats.totalXp >= 500; break;
      case "xp_2000": isEarned = stats.totalXp >= 2000; break;
      case "level_test": isEarned = hasPassedTest; break;
      case "perfect_score": isEarned = hasPerfect; break;
    }

    return { ...def, isEarned, earnedAt: isEarned ? new Date().toISOString() : null };
  });
}
