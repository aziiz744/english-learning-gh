// ════════════════════════════════════════════════════════════════
//  نظام المراجعة المتباعدة الذكية (SRS) — مبني على خوارزمية SM-2
//  يجدول كل كلمة للمراجعة في الوقت الأمثل قبل نسيانها.
//  يُخزّن محلياً (localStorage) — خاص بالمستخدم.
// ════════════════════════════════════════════════════════════════

export interface SrsCard {
  en: string;            // الكلمة الإنجليزية (المفتاح)
  ar: string;            // المعنى العربي
  emoji?: string;
  unitTitle?: string;
  // حالة الذاكرة (SM-2)
  reps: number;          // عدد المراجعات الناجحة المتتالية
  interval: number;      // الفاصل الحالي بالأيام
  ease: number;          // معامل السهولة (يبدأ 2.5)
  due: number;           // موعد المراجعة القادم (timestamp)
  lastSeen: number;      // آخر مراجعة
}

const KEY = "srsCards";

// ── أدوات التخزين ──
function load(): Record<string, SrsCard> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function save(cards: Record<string, SrsCard>) {
  try { localStorage.setItem(KEY, JSON.stringify(cards)); } catch { /* ignore */ }
}

const DAY = 24 * 60 * 60 * 1000;

// ── إضافة/تسجيل كلمة جديدة تعلّمها الطالب (تدخل دورة المراجعة) ──
export function trackWord(word: { en: string; ar: string; emoji?: string; unitTitle?: string }) {
  const key = word.en.trim().toLowerCase();
  if (!key) return;
  const cards = load();
  if (cards[key]) return; // موجودة مسبقاً
  cards[key] = {
    en: word.en.trim(), ar: word.ar, emoji: word.emoji, unitTitle: word.unitTitle,
    reps: 0, interval: 0, ease: 2.5,
    due: Date.now() + DAY,   // أول مراجعة بعد يوم
    lastSeen: Date.now(),
  };
  save(cards);
}

// ── تسجيل نتيجة مراجعة (quality: 0=خطأ، 1=صعب، 2=جيد، 3=سهل) ──
export function reviewWord(en: string, quality: 0 | 1 | 2 | 3) {
  const key = en.trim().toLowerCase();
  const cards = load();
  const c = cards[key];
  if (!c) return;

  if (quality === 0) {
    // خطأ — أعد من البداية، راجع قريباً
    c.reps = 0;
    c.interval = 0;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.due = Date.now() + 10 * 60 * 1000; // بعد 10 دقائق
  } else {
    c.reps += 1;
    // عدّل معامل السهولة
    const q = quality + 2; // حوّل لمقياس SM-2 (2..5)
    c.ease = Math.max(1.3, c.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    // احسب الفاصل الجديد
    if (c.reps === 1) c.interval = 1;
    else if (c.reps === 2) c.interval = 3;
    else c.interval = Math.round(c.interval * c.ease);
    // إن كان سهلاً، باعد أكثر
    if (quality === 3) c.interval = Math.round(c.interval * 1.3);
    c.due = Date.now() + c.interval * DAY;
  }
  c.lastSeen = Date.now();
  save(cards);
}

// ── الكلمات المستحقّة للمراجعة الآن ──
export function getDueCards(): SrsCard[] {
  const cards = load();
  const now = Date.now();
  return Object.values(cards)
    .filter(c => c.due <= now)
    .sort((a, b) => a.due - b.due);
}

// ── عدد الكلمات المستحقّة ──
export function getDueCount(): number {
  return getDueCards().length;
}

// ── كل الكلمات المتتبَّعة ──
export function getAllCards(): SrsCard[] {
  return Object.values(load());
}

// ── إحصائيات ──
export function getSrsStats() {
  const all = getAllCards();
  const now = Date.now();
  return {
    total: all.length,
    due: all.filter(c => c.due <= now).length,
    learning: all.filter(c => c.reps < 2).length,   // قيد التعلّم
    mature: all.filter(c => c.reps >= 2 && c.interval >= 7).length, // راسخة
  };
}
