// ════════════════════════════════════════════════════════════════
//  مكتبة المراجعة الشخصية — تحفظ الكلمات/الجمل الصعبة عبر كل الدروس
//  يُخزّن محلياً (localStorage) — خاص بالمستخدم على جهازه
// ════════════════════════════════════════════════════════════════

export interface ReviewItem {
  correct: string;      // الإجابة الصحيحة (إنجليزي)
  question: string;     // نص السؤال (عربي عادةً)
  unitTitle: string;    // الوحدة التي جاء منها
  addedAt: number;      // وقت الإضافة
  missCount: number;    // كم مرة أخطأ فيها
}

const KEY = "reviewLibrary";

export function getReviewItems(): ReviewItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// أضف خطأ للمكتبة (أو زِد عدّاد الخطأ إن كان موجوداً)
export function addReviewItem(item: { correct: string; question: string; unitTitle: string }) {
  try {
    if (!item.correct?.trim()) return;
    const items = getReviewItems();
    const existing = items.find(x => x.correct === item.correct && x.question === item.question);
    if (existing) {
      existing.missCount += 1;
      existing.addedAt = Date.now();
    } else {
      items.push({ ...item, addedAt: Date.now(), missCount: 1 });
    }
    // حدّ أقصى 200 عنصر (الأحدث) لتجنّب التضخّم
    const trimmed = items.sort((a, b) => b.addedAt - a.addedAt).slice(0, 200);
    localStorage.setItem(KEY, JSON.stringify(trimmed));
  } catch { /* ignore */ }
}

// أتقن الكلمة (احذفها من المكتبة بعد مراجعتها بنجاح)
export function masterReviewItem(correct: string, question: string) {
  try {
    const items = getReviewItems().filter(x => !(x.correct === correct && x.question === question));
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch { /* ignore */ }
}

// احذف عنصراً يدوياً
export function removeReviewItem(correct: string, question: string) {
  masterReviewItem(correct, question);
}

// امسح كل المكتبة
export function clearReviewLibrary() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}

// عدد عناصر المكتبة
export function getReviewCount(): number {
  return getReviewItems().length;
}
