// ════════════════════════════════════════════════════════════════
//  إحصائيات المفردات — عدد الكلمات التي تعلّمها المستخدم
// ════════════════════════════════════════════════════════════════
import { getReviewCount } from "./review-library";

const SEEN_WORDS_KEY = "seenWords";

// عدد الكلمات التي رآها/تعلّمها المستخدم
export function getLearnedWordsCount(): number {
  try {
    const raw = localStorage.getItem(SEEN_WORDS_KEY);
    const words = raw ? JSON.parse(raw) : [];
    return Array.isArray(words) ? words.length : 0;
  } catch { return 0; }
}

// عدد الكلمات قيد المراجعة (الصعبة)
export function getReviewWordsCount(): number {
  return getReviewCount();
}

// ملخّص شامل
export function getVocabSummary() {
  return {
    learned: getLearnedWordsCount(),
    review: getReviewWordsCount(),
  };
}
