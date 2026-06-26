// ════════════════════════════════════════════════════════════════
//  نظام الهدف اليومي — يحفّز المستخدم على التعلّم كل يوم
//  يُخزّن محلياً (localStorage)
// ════════════════════════════════════════════════════════════════

const KEY = "dailyGoal";
const DEFAULT_GOAL = 30; // XP افتراضي لليوم

interface DailyData {
  date: string;       // YYYY-MM-DD
  earned: number;     // XP المكتسبة اليوم
  goal: number;       // الهدف اليومي
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function read(): DailyData {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const data: DailyData = JSON.parse(raw);
      // يوم جديد → صفّر المكتسب (مع الحفاظ على الهدف المختار)
      if (data.date !== todayStr()) {
        return { date: todayStr(), earned: 0, goal: data.goal ?? DEFAULT_GOAL };
      }
      return data;
    }
  } catch { /* ignore */ }
  return { date: todayStr(), earned: 0, goal: DEFAULT_GOAL };
}

function write(data: DailyData) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* ignore */ }
}

// أضف XP مكتسبة اليوم
export function addDailyXp(xp: number) {
  const data = read();
  data.earned += xp;
  write(data);
}

// احصل على تقدّم اليوم
export function getDailyProgress(): { earned: number; goal: number; pct: number; done: boolean } {
  const data = read();
  write(data); // يحفظ التصفير لو يوم جديد
  const pct = Math.min(100, Math.round((data.earned / data.goal) * 100));
  return { earned: data.earned, goal: data.goal, pct, done: data.earned >= data.goal };
}

// غيّر الهدف اليومي
export function setDailyGoal(goal: number) {
  const data = read();
  data.goal = goal;
  write(data);
}

// خيارات الهدف
export const GOAL_OPTIONS = [
  { value: 20, label: "هادئ", desc: "20 نقطة" },
  { value: 30, label: "عادي", desc: "30 نقطة" },
  { value: 50, label: "جادّ", desc: "50 نقطة" },
  { value: 80, label: "مكثّف", desc: "80 نقطة" },
];
