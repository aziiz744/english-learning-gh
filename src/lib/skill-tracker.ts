// ════════════════════════════════════════════════════════════════
//  متتبّع نقاط الضعف — يرصد المهارات التي يخطئ فيها الطالب
//  يصنّف الأخطاء تلقائياً حسب الوحدة/النوع، ويحسب نسبة الإتقان.
//  يُخزّن محلياً (localStorage).
// ════════════════════════════════════════════════════════════════

export interface SkillStat {
  skill: string;        // اسم المهارة (عربي)
  emoji: string;
  attempts: number;     // عدد المحاولات
  correct: number;      // الصحيحة
}

const KEY = "skillStats";

// ── خريطة عنوان الوحدة → مهارة مصنّفة ──
function classifySkill(unitTitle: string): { skill: string; emoji: string } {
  const t = unitTitle || "";
  if (t.includes("مضارع المستمر")) return { skill: "المضارع المستمر", emoji: "🔄" };
  if (t.includes("المضارع") || t.includes("يكون")) return { skill: "زمن المضارع", emoji: "⏱️" };
  if (t.includes("النفي")) return { skill: "النفي", emoji: "🚫" };
  if (t.includes("أسئلة") || t.includes("سؤال")) return { skill: "تكوين الأسئلة", emoji: "❓" };
  if (t.includes("صفات") || t.includes("وصف")) return { skill: "الصفات والوصف", emoji: "🎨" };
  if (t.includes("جمع") || t.includes("التكسير")) return { skill: "الجمع", emoji: "🔢" };
  if (t.includes("أدوات التعريف")) return { skill: "أدوات التعريف", emoji: "📌" };
  if (t.includes("الوقت") || t.includes("روتين")) return { skill: "الوقت والروتين", emoji: "🕐" };
  if (t.includes("اختصارات")) return { skill: "الاختصارات", emoji: "✂️" };
  if (t.includes("الأمر")) return { skill: "أفعال الأمر", emoji: "👉" };
  if (t.includes("ظروف")) return { skill: "الظروف", emoji: "📊" };
  // مفردات حسب الموضوع
  if (t.includes("مشروبات") || t.includes("طعام")) return { skill: "مفردات الطعام", emoji: "🍽️" };
  if (t.includes("مطار") || t.includes("فندق") || t.includes("مدينة")) return { skill: "مفردات السفر", emoji: "✈️" };
  if (t.includes("ملابس") || t.includes("تسوّق")) return { skill: "مفردات التسوّق", emoji: "🛍️" };
  if (t.includes("عائلة") || t.includes("نفسك")) return { skill: "التعريف والعائلة", emoji: "👨‍👩‍👧" };
  if (t.includes("عمل")) return { skill: "مفردات العمل", emoji: "💼" };
  if (t.includes("طقس") || t.includes("طبيعة")) return { skill: "مفردات الطقس", emoji: "🌤️" };
  if (t.includes("أعراض") || t.includes("مدرسة") || t.includes("رياض")) return { skill: "مفردات عامة", emoji: "📚" };
  return { skill: "مفردات عامة", emoji: "📚" };
}

function load(): Record<string, SkillStat> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function save(stats: Record<string, SkillStat>) {
  try { localStorage.setItem(KEY, JSON.stringify(stats)); } catch { /* ignore */ }
}

// ── سجّل محاولة (صح أو خطأ) لمهارة الوحدة ──
export function recordAttempt(unitTitle: string, isCorrect: boolean) {
  const { skill, emoji } = classifySkill(unitTitle);
  const stats = load();
  if (!stats[skill]) {
    stats[skill] = { skill, emoji, attempts: 0, correct: 0 };
  }
  stats[skill].attempts += 1;
  if (isCorrect) stats[skill].correct += 1;
  save(stats);
}

// ── كل المهارات مع نسبة الإتقان ──
export function getSkillStats(): (SkillStat & { mastery: number })[] {
  return Object.values(load())
    .filter(s => s.attempts >= 3) // فقط المهارات اللي تدرّب عليها كفاية
    .map(s => ({ ...s, mastery: Math.round((s.correct / s.attempts) * 100) }))
    .sort((a, b) => a.mastery - b.mastery); // الأضعف أولاً
}

// ── أضعف مهارة (للتركيز عليها) ──
export function getWeakestSkill(): (SkillStat & { mastery: number }) | null {
  const stats = getSkillStats();
  const weak = stats.filter(s => s.mastery < 75);
  return weak.length ? weak[0] : null;
}

// ── ملخّص عام ──
export function getOverallMastery(): number {
  const stats = Object.values(load());
  const totalAttempts = stats.reduce((s, x) => s + x.attempts, 0);
  const totalCorrect = stats.reduce((s, x) => s + x.correct, 0);
  return totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
}
