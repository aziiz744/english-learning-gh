// ════════════════════════════════════════════════════════════════
//  نظام التحدّي اليومي — مهمة متجدّدة كل يوم تحفّز العودة اليومية
//  يُخزّن محلياً (localStorage). يتجدّد تلقائياً كل يوم.
// ════════════════════════════════════════════════════════════════

export interface DailyChallenge {
  id: string;
  title: string;
  emoji: string;
  target: number;       // الهدف (مثلاً 3 دروس)
  type: "lessons" | "xp" | "words" | "perfect";
  reward: number;       // مكافأة XP
}

// قائمة التحدّيات الممكنة (يُختار واحد كل يوم)
const CHALLENGE_POOL: Omit<DailyChallenge, "id">[] = [
  { title: "أكمل 3 دروس اليوم", emoji: "📚", target: 3, type: "lessons", reward: 30 },
  { title: "اكسب 50 نقطة خبرة", emoji: "⚡", target: 50, type: "xp", reward: 25 },
  { title: "تعلّم 10 كلمات جديدة", emoji: "🔤", target: 10, type: "words", reward: 25 },
  { title: "أكمل درسين بنجاح", emoji: "🎯", target: 2, type: "lessons", reward: 20 },
  { title: "احصل على درس مثالي (100%)", emoji: "💯", target: 1, type: "perfect", reward: 40 },
  { title: "اكسب 80 نقطة خبرة", emoji: "🔥", target: 80, type: "xp", reward: 35 },
  { title: "أكمل 4 دروس اليوم", emoji: "🚀", target: 4, type: "lessons", reward: 40 },
];

interface ChallengeState {
  date: string;         // تاريخ اليوم (YYYY-MM-DD)
  challenge: DailyChallenge;
  progress: number;     // التقدّم الحالي
  claimed: boolean;     // هل استلم المكافأة؟
}

const KEY = "dailyChallenge";

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

// اختر تحدّي اليوم (ثابت طوال اليوم — يعتمد على التاريخ)
function pickChallenge(date: string): DailyChallenge {
  // استخدم التاريخ كبذرة عشوائية ثابتة
  let seed = 0;
  for (let i = 0; i < date.length; i++) seed += date.charCodeAt(i);
  const idx = seed % CHALLENGE_POOL.length;
  return { ...CHALLENGE_POOL[idx], id: `${date}-${idx}` };
}

// احصل على حالة التحدّي اليوم (يتجدّد تلقائياً)
export function getDailyChallenge(): ChallengeState {
  const today = todayStr();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const state: ChallengeState = JSON.parse(raw);
      if (state.date === today) return state; // نفس اليوم — أرجع الحالة
    }
  } catch { /* ignore */ }
  // يوم جديد — أنشئ تحدّياً جديداً
  const fresh: ChallengeState = {
    date: today,
    challenge: pickChallenge(today),
    progress: 0,
    claimed: false,
  };
  try { localStorage.setItem(KEY, JSON.stringify(fresh)); } catch { /* ignore */ }
  return fresh;
}

// حدّث تقدّم التحدّي (يُستدعى عند إكمال درس/كسب XP/تعلّم كلمة)
export function updateChallengeProgress(type: DailyChallenge["type"], amount: number) {
  const state = getDailyChallenge();
  if (state.claimed) return state;
  if (state.challenge.type === type) {
    state.progress = Math.min(state.challenge.target, state.progress + amount);
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
  }
  return state;
}

// هل التحدّي مكتمل؟
export function isChallengeComplete(): boolean {
  const state = getDailyChallenge();
  return state.progress >= state.challenge.target;
}

// استلم المكافأة
export function claimChallengeReward(): number {
  const state = getDailyChallenge();
  if (state.claimed || state.progress < state.challenge.target) return 0;
  state.claimed = true;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
  return state.challenge.reward;
}
