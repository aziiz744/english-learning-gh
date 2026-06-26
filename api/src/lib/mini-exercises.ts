// Local mini-exercise bank for variety in lessons
// These are injected between API exercises to add more types
import { getLessonMiniExercises } from "./lesson-exercises";

export type MiniExerciseType = "word_order" | "translate" | "listen_select" | "picture_match";

export interface PictureOption {
  emoji: string;
  label: string;
}

export interface MiniExercise {
  id: string;
  type: MiniExerciseType;
  // word_order: correct sentence to scramble
  sentence?: string;
  // translate: Arabic text + English options
  arabic?: string;
  options?: string[];
  // listen_select: sentence spoken aloud (target word is blanked in display)
  listenSentence?: string;
  // picture_match: word shown + 4 picture cards
  word?: string;
  pictureOptions?: PictureOption[];
  correctAnswer: string;
  explanation: string;
  xp: number;
}

// ─────────────────────────────────────────────
// Word Order
// ─────────────────────────────────────────────
export const WORD_ORDER_EXERCISES: MiniExercise[] = [
  { id: "wo1",  type: "word_order", sentence: "I am a student", correctAnswer: "I am a student", explanation: "الترتيب الصحيح: I am a student (أنا طالب)", xp: 10 },
  { id: "wo2",  type: "word_order", sentence: "She is very happy", correctAnswer: "She is very happy", explanation: "She is very happy — استخدم is مع she/he/it", xp: 10 },
  { id: "wo3",  type: "word_order", sentence: "We go to school every day", correctAnswer: "We go to school every day", explanation: "We go — استخدم go (بدون s) مع we", xp: 15 },
  { id: "wo4",  type: "word_order", sentence: "He speaks English very well", correctAnswer: "He speaks English very well", explanation: "He speaks — تُضاف s للفعل مع he/she/it", xp: 15 },
  { id: "wo5",  type: "word_order", sentence: "They are playing football now", correctAnswer: "They are playing football now", explanation: "are playing — المضارع المستمر مع they", xp: 15 },
  { id: "wo6",  type: "word_order", sentence: "I have been studying for two hours", correctAnswer: "I have been studying for two hours", explanation: "Present Perfect Continuous — استمرار حتى الآن", xp: 20 },
  { id: "wo7",  type: "word_order", sentence: "She did not go to the market", correctAnswer: "She did not go to the market", explanation: "did not + فعل مجرد للنفي في الماضي", xp: 15 },
  { id: "wo8",  type: "word_order", sentence: "What time does the train arrive", correctAnswer: "What time does the train arrive", explanation: "does في أسئلة المضارع مع he/she/it/it", xp: 15 },
  { id: "wo9",  type: "word_order", sentence: "I would like a cup of coffee", correctAnswer: "I would like a cup of coffee", explanation: "would like — صيغة مؤدبة للطلب", xp: 10 },
  { id: "wo10", type: "word_order", sentence: "Can you help me please", correctAnswer: "Can you help me please", explanation: "Can you + فعل — طريقة لطيفة للطلب", xp: 10 },
  { id: "wo11", type: "word_order", sentence: "My name is Ahmad and I am from Saudi Arabia", correctAnswer: "My name is Ahmad and I am from Saudi Arabia", explanation: "My name is — تعريف النفس", xp: 20 },
  { id: "wo12", type: "word_order", sentence: "It is raining outside right now", correctAnswer: "It is raining outside right now", explanation: "It is raining — وصف الطقس بالمضارع المستمر", xp: 15 },
  { id: "wo13", type: "word_order", sentence: "Have you ever been to London", correctAnswer: "Have you ever been to London", explanation: "Have you ever + past participle — سؤال عن تجربة", xp: 20 },
  { id: "wo14", type: "word_order", sentence: "The book is on the table", correctAnswer: "The book is on the table", explanation: "on the table — استخدام حرف الجر on للأسطح", xp: 10 },
  { id: "wo15", type: "word_order", sentence: "I will call you tomorrow morning", correctAnswer: "I will call you tomorrow morning", explanation: "will + فعل مجرد للمستقبل", xp: 15 },
];

// ─────────────────────────────────────────────
// Translate (Arabic → English MCQ)
// ─────────────────────────────────────────────
export const TRANSLATE_EXERCISES: MiniExercise[] = [
  { id: "tr1",  type: "translate", arabic: "أنا سعيد جداً", options: ["I am very happy", "I are very happy", "She is very happy", "We am very happy"], correctAnswer: "I am very happy", explanation: "I am — استخدم am مع I دائماً", xp: 10 },
  { id: "tr2",  type: "translate", arabic: "هل تتكلم الإنجليزية؟", options: ["Do you speak English?", "Are you speak English?", "Does you speak English?", "Did you speaks English?"], correctAnswer: "Do you speak English?", explanation: "Do you + فعل مجرد للسؤال في المضارع", xp: 10 },
  { id: "tr3",  type: "translate", arabic: "أنا أدرس كل يوم", options: ["I study every day", "I studying every day", "I am study every day", "I studies every day"], correctAnswer: "I study every day", explanation: "I study — فعل المضارع البسيط مع I", xp: 10 },
  { id: "tr4",  type: "translate", arabic: "كانت تقرأ كتاباً", options: ["She was reading a book", "She were reading a book", "She is reading a book", "She read a book"], correctAnswer: "She was reading a book", explanation: "was reading — الماضي المستمر مع she", xp: 15 },
  { id: "tr5",  type: "translate", arabic: "سأسافر غداً", options: ["I will travel tomorrow", "I will traveled tomorrow", "I am travel tomorrow", "I going travel tomorrow"], correctAnswer: "I will travel tomorrow", explanation: "will + فعل مجرد للمستقبل", xp: 15 },
  { id: "tr6",  type: "translate", arabic: "لم أنم جيداً البارحة", options: ["I did not sleep well yesterday", "I was not sleep well yesterday", "I not slept well yesterday", "I don't slept well yesterday"], correctAnswer: "I did not sleep well yesterday", explanation: "did not + فعل مجرد للنفي في الماضي", xp: 15 },
  { id: "tr7",  type: "translate", arabic: "عندي سؤال مهم", options: ["I have an important question", "I has an important question", "I am an important question", "I have a important question"], correctAnswer: "I have an important question", explanation: "an important — نستخدم an قبل الكلمات التي تبدأ بصوت حرف علة", xp: 15 },
  { id: "tr8",  type: "translate", arabic: "هو أذكى طالب في الفصل", options: ["He is the smartest student in class", "He is more smart student in class", "He is smart student in class", "He is the most smartest in class"], correctAnswer: "He is the smartest student in class", explanation: "smartest — صيغة التفضيل المطلق (superlative)", xp: 20 },
  { id: "tr9",  type: "translate", arabic: "كم عدد الطلاب؟", options: ["How many students are there?", "How much students are there?", "How many students is there?", "How much students there are?"], correctAnswer: "How many students are there?", explanation: "How many — للأشياء المعدودة، How much — لغير المعدود", xp: 15 },
  { id: "tr10", type: "translate", arabic: "أنا أحب القهوة أكثر من الشاي", options: ["I like coffee more than tea", "I like coffee most than tea", "I like coffee better than tea", "I like coffee rather than tea"], correctAnswer: "I like coffee more than tea", explanation: "more than — للمقارنة بين شيئين", xp: 15 },
  { id: "tr11", type: "translate", arabic: "لا تنسَ أن تغلق الباب", options: ["Don't forget to close the door", "Not forget to close the door", "Don't forgot to close the door", "Don't forget closing the door"], correctAnswer: "Don't forget to close the door", explanation: "forget to + فعل مجرد — نسيان فعل شيء", xp: 20 },
  { id: "tr12", type: "translate", arabic: "كنت في المدرسة الصباح", options: ["I was at school this morning", "I were at school this morning", "I was in school this morning", "I am at school this morning"], correctAnswer: "I was at school this morning", explanation: "at school — الحضور في المدرسة. in school يعني لا يزال طالباً", xp: 20 },
];

// ─────────────────────────────────────────────
// Listen & Select (استمع واختر الكلمة)
// ─────────────────────────────────────────────
export const LISTEN_SELECT_EXERCISES: MiniExercise[] = [
  {
    id: "ls1", type: "listen_select",
    listenSentence: "I drink coffee every morning",
    options: ["coffee", "tea", "juice", "water"],
    correctAnswer: "coffee",
    explanation: "الجملة: «أنا أشرب قهوة كل صباح» — الكلمة الصحيحة هي coffee ☕",
    xp: 10,
  },
  {
    id: "ls2", type: "listen_select",
    listenSentence: "My sister is a doctor",
    options: ["doctor", "teacher", "engineer", "nurse"],
    correctAnswer: "doctor",
    explanation: "الجملة: «أختي طبيبة» — الكلمة الصحيحة هي doctor 👨‍⚕️",
    xp: 10,
  },
  {
    id: "ls3", type: "listen_select",
    listenSentence: "The cat is sleeping on the bed",
    options: ["bed", "chair", "sofa", "floor"],
    correctAnswer: "bed",
    explanation: "الجملة: «القطة تنام على السرير» — الكلمة الصحيحة هي bed 🛏️",
    xp: 10,
  },
  {
    id: "ls4", type: "listen_select",
    listenSentence: "She has three children",
    options: ["three", "two", "four", "five"],
    correctAnswer: "three",
    explanation: "الجملة: «عندها ثلاثة أطفال» — الكلمة الصحيحة هي three",
    xp: 10,
  },
  {
    id: "ls5", type: "listen_select",
    listenSentence: "I bought a new red car",
    options: ["red", "blue", "black", "white"],
    correctAnswer: "red",
    explanation: "الجملة: «اشتريت سيارة حمراء جديدة» — الكلمة الصحيحة هي red 🔴",
    xp: 10,
  },
  {
    id: "ls6", type: "listen_select",
    listenSentence: "He works at a hospital",
    options: ["hospital", "school", "bank", "hotel"],
    correctAnswer: "hospital",
    explanation: "الجملة: «يعمل في مستشفى» — الكلمة الصحيحة هي hospital 🏥",
    xp: 10,
  },
  {
    id: "ls7", type: "listen_select",
    listenSentence: "I wake up at seven o'clock every day",
    options: ["seven", "six", "eight", "nine"],
    correctAnswer: "seven",
    explanation: "الجملة: «أستيقظ الساعة السابعة كل يوم» — الكلمة الصحيحة هي seven",
    xp: 10,
  },
  {
    id: "ls8", type: "listen_select",
    listenSentence: "It is very cold outside today",
    options: ["cold", "hot", "windy", "sunny"],
    correctAnswer: "cold",
    explanation: "الجملة: «الجو بارد جداً اليوم» — الكلمة الصحيحة هي cold 🥶",
    xp: 10,
  },
  {
    id: "ls9", type: "listen_select",
    listenSentence: "My favorite color is green",
    options: ["green", "yellow", "purple", "orange"],
    correctAnswer: "green",
    explanation: "الجملة: «لوني المفضل هو الأخضر» — الكلمة الصحيحة هي green 💚",
    xp: 10,
  },
  {
    id: "ls10", type: "listen_select",
    listenSentence: "She is reading a book in the library",
    options: ["library", "kitchen", "garden", "bedroom"],
    correctAnswer: "library",
    explanation: "الجملة: «تقرأ كتاباً في المكتبة» — الكلمة الصحيحة هي library 📚",
    xp: 10,
  },
  {
    id: "ls11", type: "listen_select",
    listenSentence: "I need to buy some bread and eggs",
    options: ["bread", "rice", "pasta", "fish"],
    correctAnswer: "bread",
    explanation: "الجملة: «أحتاج لشراء خبز وبيض» — الكلمة الصحيحة هي bread 🍞",
    xp: 12,
  },
  {
    id: "ls12", type: "listen_select",
    listenSentence: "They traveled to Japan last summer",
    options: ["Japan", "France", "Canada", "Brazil"],
    correctAnswer: "Japan",
    explanation: "الجملة: «سافروا إلى اليابان الصيف الماضي» — الكلمة الصحيحة هي Japan 🇯🇵",
    xp: 12,
  },
];

// ─────────────────────────────────────────────
// Picture Match (كلمة + 4 صور emoji)
// ─────────────────────────────────────────────
export const PICTURE_MATCH_EXERCISES: MiniExercise[] = [
  {
    id: "pm1", type: "picture_match", word: "cat",
    pictureOptions: [
      { emoji: "🐱", label: "cat" }, { emoji: "🐶", label: "dog" },
      { emoji: "🐰", label: "rabbit" }, { emoji: "🐟", label: "fish" },
    ],
    correctAnswer: "cat", explanation: "cat = قطة 🐱", xp: 10,
  },
  {
    id: "pm2", type: "picture_match", word: "apple",
    pictureOptions: [
      { emoji: "🍎", label: "apple" }, { emoji: "🍌", label: "banana" },
      { emoji: "🍊", label: "orange" }, { emoji: "🍇", label: "grapes" },
    ],
    correctAnswer: "apple", explanation: "apple = تفاحة 🍎", xp: 10,
  },
  {
    id: "pm3", type: "picture_match", word: "car",
    pictureOptions: [
      { emoji: "🚗", label: "car" }, { emoji: "🚌", label: "bus" },
      { emoji: "✈️", label: "plane" }, { emoji: "🚢", label: "ship" },
    ],
    correctAnswer: "car", explanation: "car = سيارة 🚗", xp: 10,
  },
  {
    id: "pm4", type: "picture_match", word: "sun",
    pictureOptions: [
      { emoji: "🌙", label: "moon" }, { emoji: "⭐", label: "star" },
      { emoji: "☀️", label: "sun" }, { emoji: "🌧️", label: "rain" },
    ],
    correctAnswer: "sun", explanation: "sun = شمس ☀️", xp: 10,
  },
  {
    id: "pm5", type: "picture_match", word: "book",
    pictureOptions: [
      { emoji: "📝", label: "note" }, { emoji: "📚", label: "book" },
      { emoji: "📱", label: "phone" }, { emoji: "💻", label: "laptop" },
    ],
    correctAnswer: "book", explanation: "book = كتاب 📚", xp: 10,
  },
  {
    id: "pm6", type: "picture_match", word: "house",
    pictureOptions: [
      { emoji: "🏫", label: "school" }, { emoji: "🏥", label: "hospital" },
      { emoji: "🏠", label: "house" }, { emoji: "🏪", label: "shop" },
    ],
    correctAnswer: "house", explanation: "house = منزل 🏠", xp: 10,
  },
  {
    id: "pm7", type: "picture_match", word: "tree",
    pictureOptions: [
      { emoji: "🌹", label: "rose" }, { emoji: "🌻", label: "sunflower" },
      { emoji: "🍀", label: "clover" }, { emoji: "🌳", label: "tree" },
    ],
    correctAnswer: "tree", explanation: "tree = شجرة 🌳", xp: 10,
  },
  {
    id: "pm8", type: "picture_match", word: "pizza",
    pictureOptions: [
      { emoji: "🍕", label: "pizza" }, { emoji: "🍔", label: "burger" },
      { emoji: "🍜", label: "noodles" }, { emoji: "🌮", label: "taco" },
    ],
    correctAnswer: "pizza", explanation: "pizza = بيتزا 🍕", xp: 10,
  },
  {
    id: "pm9", type: "picture_match", word: "clock",
    pictureOptions: [
      { emoji: "📱", label: "phone" }, { emoji: "⌚", label: "watch" },
      { emoji: "🕐", label: "clock" }, { emoji: "📅", label: "calendar" },
    ],
    correctAnswer: "clock", explanation: "clock = ساعة حائط 🕐", xp: 10,
  },
  {
    id: "pm10", type: "picture_match", word: "snow",
    pictureOptions: [
      { emoji: "🌧️", label: "rain" }, { emoji: "❄️", label: "snow" },
      { emoji: "⚡", label: "lightning" }, { emoji: "🌈", label: "rainbow" },
    ],
    correctAnswer: "snow", explanation: "snow = ثلج ❄️", xp: 10,
  },
  {
    id: "pm11", type: "picture_match", word: "hospital",
    pictureOptions: [
      { emoji: "🏠", label: "house" }, { emoji: "🏫", label: "school" },
      { emoji: "🏥", label: "hospital" }, { emoji: "⛪", label: "church" },
    ],
    correctAnswer: "hospital", explanation: "hospital = مستشفى 🏥", xp: 12,
  },
  {
    id: "pm12", type: "picture_match", word: "rocket",
    pictureOptions: [
      { emoji: "✈️", label: "plane" }, { emoji: "🚁", label: "helicopter" },
      { emoji: "🛸", label: "ufo" }, { emoji: "🚀", label: "rocket" },
    ],
    correctAnswer: "rocket", explanation: "rocket = صاروخ 🚀", xp: 15,
  },
  {
    id: "pm13", type: "picture_match", word: "crown",
    pictureOptions: [
      { emoji: "🎩", label: "hat" }, { emoji: "👑", label: "crown" },
      { emoji: "⛑️", label: "helmet" }, { emoji: "🧢", label: "cap" },
    ],
    correctAnswer: "crown", explanation: "crown = تاج 👑", xp: 12,
  },
  {
    id: "pm14", type: "picture_match", word: "fire",
    pictureOptions: [
      { emoji: "💧", label: "water" }, { emoji: "🌊", label: "wave" },
      { emoji: "🔥", label: "fire" }, { emoji: "💨", label: "wind" },
    ],
    correctAnswer: "fire", explanation: "fire = نار 🔥", xp: 10,
  },
  {
    id: "pm15", type: "picture_match", word: "music",
    pictureOptions: [
      { emoji: "🎵", label: "music" }, { emoji: "🎨", label: "art" },
      { emoji: "📷", label: "camera" }, { emoji: "🎮", label: "game" },
    ],
    correctAnswer: "music", explanation: "music = موسيقى 🎵", xp: 10,
  },
];

// ─────────────────────────────────────────────
// Utilities
// ─────────────────────────────────────────────
function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

/**
 * Get mini exercises for a lesson.
 * Always includes 1 listen_select + 1 picture_match for variety.
 * tier 0 = first try (easy: mixed)
 * tier 1 = 1 star (medium: more word_order)
 * tier 2 = 2 stars (hard: mostly word_order)
 * tier 3 = challenge / 3 stars (hardest: all types, max count)
 */
export function getMiniExercisesForLesson(
  count: number = 6,
  tier: 0 | 1 | 2 | 3 = 0,
  lessonTitle?: string,
): MiniExercise[] {
  // Use lesson-specific bank when title is provided
  if (lessonTitle) {
    return getLessonMiniExercises(lessonTitle, count, tier) as MiniExercise[];
  }

  // Generic fallback (used when lesson title is unavailable)
  const ls = pickRandom(LISTEN_SELECT_EXERCISES, 1);
  const pm = pickRandom(PICTURE_MATCH_EXERCISES, 1);
  const remaining = Math.max(count - 2, 0);

  let fillers: MiniExercise[] = [];
  if (tier === 0) {
    const wo = pickRandom(WORD_ORDER_EXERCISES, Math.ceil(remaining / 2));
    const tr = pickRandom(TRANSLATE_EXERCISES, Math.floor(remaining / 2));
    fillers = [...wo, ...tr];
  } else if (tier === 1) {
    const wo = pickRandom(WORD_ORDER_EXERCISES, Math.ceil(remaining * 0.7));
    const tr = pickRandom(TRANSLATE_EXERCISES, Math.floor(remaining * 0.3));
    fillers = [...wo, ...tr];
  } else if (tier === 2) {
    fillers = pickRandom(WORD_ORDER_EXERCISES, remaining);
  } else {
    const wo = pickRandom(WORD_ORDER_EXERCISES.filter(e => e.xp >= 15), Math.ceil(remaining / 2));
    const tr = pickRandom(TRANSLATE_EXERCISES.filter(e => e.xp >= 15), Math.floor(remaining / 2));
    fillers = [...wo, ...tr];
  }

  return [...ls, ...pm, ...fillers].sort(() => Math.random() - 0.5);
}
