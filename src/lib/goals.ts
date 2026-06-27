// ════════════════════════════════════════════════════════════════
//  نظام أهداف التعلّم — يخصّص التجربة حسب هدف المتعلّم
//  (سفر / عمل / دراسة / محادثة عامة)
//  يُخزّن محلياً (localStorage).
// ════════════════════════════════════════════════════════════════

export type GoalId = "travel" | "work" | "study" | "general";

export interface LearningGoal {
  id: GoalId;
  title: string;
  emoji: string;
  description: string;
  color: string;
  welcomeMessage: string;
  // كلمات مفتاحية في عناوين الوحدات المهمّة لهذا الهدف
  priorityKeywords: string[];
}

export const GOALS: LearningGoal[] = [
  {
    id: "travel",
    title: "السفر والسياحة",
    emoji: "🧳",
    description: "للتعامل في المطار، الفنادق، المطاعم، والتنقّل",
    color: "#06b6d4",
    welcomeMessage: "رحلة موفّقة! ✈️ ركّزنا لك على ما تحتاجه في سفرك.",
    priorityKeywords: ["مطار", "فندق", "مدينة", "طعام", "مشروبات", "تسوّق", "ملابس", "أعراض"],
  },
  {
    id: "work",
    title: "العمل والمهنة",
    emoji: "💼",
    description: "للتواصل في بيئة العمل، الاجتماعات، والمراسلات",
    color: "#8b5cf6",
    welcomeMessage: "بالتوفيق في مسيرتك! 💼 جهّزنا لك لغة العمل.",
    priorityKeywords: ["عمل", "مهن", "تعابير الوقت", "نفسك", "تواصل"],
  },
  {
    id: "study",
    title: "الدراسة والأكاديمي",
    emoji: "🎓",
    description: "لإتقان القواعد بعمق والإنجليزية الأكاديمية",
    color: "#f59e0b",
    welcomeMessage: "نحو التفوّق! 🎓 سنبني أساساً نحوياً قوياً.",
    priorityKeywords: ["المضارع", "النفي", "أسئلة", "صفات", "جمع", "أدوات التعريف", "ظروف", "الأمر", "اختصارات", "مدرسة"],
  },
  {
    id: "general",
    title: "المحادثة اليومية",
    emoji: "🗣️",
    description: "للتحدّث بطلاقة في المواقف اليومية العامة",
    color: "#22c55e",
    welcomeMessage: "لنتحدّث الإنجليزية! 🗣️ خطوة بخطوة نحو الطلاقة.",
    priorityKeywords: ["نفسك", "عائلت", "مشاعر", "روتين", "طقس", "حيوان", "منزل", "رياض", "من أين"],
  },
];

const KEY = "learningGoal";

// ── احصل على الهدف المحفوظ ──
export function getGoal(): LearningGoal | null {
  try {
    const id = localStorage.getItem(KEY);
    if (!id) return null;
    return GOALS.find(g => g.id === id) ?? null;
  } catch { return null; }
}

// ── احفظ الهدف ──
export function setGoal(id: GoalId) {
  try { localStorage.setItem(KEY, id); } catch { /* ignore */ }
}

// ── هل اختار الطالب هدفاً من قبل؟ ──
export function hasGoal(): boolean {
  return getGoal() !== null;
}

// ── هل هذه الوحدة موصى بها لهدف الطالب؟ ──
export function isUnitRecommended(unitTitle: string): boolean {
  const goal = getGoal();
  if (!goal) return false;
  return goal.priorityKeywords.some(kw => unitTitle.includes(kw));
}
