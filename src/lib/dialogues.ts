// ════════════════════════════════════════════════════════════════
//  بنك الحوارات الواقعية — يربط كلمات الوحدة بموقف حقيقي
//  كل حوار: سطور متبادلة (إنجليزي + عربي + من المتحدّث)
// ════════════════════════════════════════════════════════════════

export interface DialogueLine {
  speaker: "a" | "b";   // a = الطرف الآخر، b = أنت
  en: string;
  ar: string;
}

export interface Dialogue {
  unitId: string;
  title: string;        // عنوان الموقف
  emoji: string;
  scene: string;        // وصف المشهد
  speakerA: string;     // اسم/دور الطرف الآخر
  lines: DialogueLine[];
}

export const DIALOGUES: Record<string, Dialogue> = {
  "unit-drinks": {
    unitId: "unit-drinks", title: "في المقهى", emoji: "☕",
    scene: "تطلب مشروباً من نادل في مقهى",
    speakerA: "النادل",
    lines: [
      { speaker: "a", en: "Hello! What would you like?", ar: "مرحباً! ماذا تريد؟" },
      { speaker: "b", en: "I'd like a coffee, please.", ar: "أريد قهوة، من فضلك." },
      { speaker: "a", en: "Sugar or milk?", ar: "سكر أم حليب؟" },
      { speaker: "b", en: "Milk, please. Thank you.", ar: "حليب، من فضلك. شكراً." },
      { speaker: "a", en: "Here you are. Enjoy!", ar: "تفضّل. استمتع!" },
    ],
  },
  "unit-intro": {
    unitId: "unit-intro", title: "أول لقاء", emoji: "👋",
    scene: "تتعرّف على شخص جديد لأول مرّة",
    speakerA: "سارة",
    lines: [
      { speaker: "a", en: "Hi! What's your name?", ar: "مرحباً! ما اسمك؟" },
      { speaker: "b", en: "My name is Ahmed. And you?", ar: "اسمي أحمد. وأنت؟" },
      { speaker: "a", en: "I'm Sara. Where are you from?", ar: "أنا سارة. من أين أنت؟" },
      { speaker: "b", en: "I'm from Saudi Arabia.", ar: "أنا من السعودية." },
      { speaker: "a", en: "Nice to meet you!", ar: "سعدت بلقائك!" },
    ],
  },
  "unit-food": {
    unitId: "unit-food", title: "في المطعم", emoji: "🍽️",
    scene: "تطلب وجبة في مطعم",
    speakerA: "النادل",
    lines: [
      { speaker: "a", en: "Are you ready to order?", ar: "هل أنت مستعد للطلب؟" },
      { speaker: "b", en: "Yes. I'd like a chicken sandwich.", ar: "نعم. أريد ساندويتش دجاج." },
      { speaker: "a", en: "Anything to drink?", ar: "أي شيء للشرب؟" },
      { speaker: "b", en: "A glass of water, please.", ar: "كوب ماء، من فضلك." },
      { speaker: "a", en: "Great choice. Coming right up!", ar: "اختيار رائع. سيصل حالاً!" },
    ],
  },
  "unit-airport": {
    unitId: "unit-airport", title: "في المطار", emoji: "✈️",
    scene: "تتعامل مع موظّف المطار",
    speakerA: "الموظّف",
    lines: [
      { speaker: "a", en: "Can I see your passport, please?", ar: "هل يمكنني رؤية جوازك، من فضلك؟" },
      { speaker: "b", en: "Here it is.", ar: "ها هو." },
      { speaker: "a", en: "What's the purpose of your trip?", ar: "ما غرض رحلتك؟" },
      { speaker: "b", en: "I'm here for tourism.", ar: "أنا هنا للسياحة." },
      { speaker: "a", en: "Enjoy your stay!", ar: "استمتع بإقامتك!" },
    ],
  },
  "unit-weather": {
    unitId: "unit-weather", title: "حديث عن الطقس", emoji: "🌤️",
    scene: "تتحدّث مع صديق عن طقس اليوم",
    speakerA: "صديق",
    lines: [
      { speaker: "a", en: "How's the weather today?", ar: "كيف الطقس اليوم؟" },
      { speaker: "b", en: "It's sunny and warm.", ar: "مشمس ودافئ." },
      { speaker: "a", en: "Perfect for a walk!", ar: "مثالي للمشي!" },
      { speaker: "b", en: "Yes, let's go to the park.", ar: "نعم، لنذهب إلى الحديقة." },
    ],
  },
  "unit-clothes": {
    unitId: "unit-clothes", title: "في محل الملابس", emoji: "👕",
    scene: "تشتري قميصاً من محل ملابس",
    speakerA: "البائع",
    lines: [
      { speaker: "a", en: "Can I help you?", ar: "هل يمكنني مساعدتك؟" },
      { speaker: "b", en: "I'm looking for a blue shirt.", ar: "أبحث عن قميص أزرق." },
      { speaker: "a", en: "What size do you need?", ar: "ما المقاس الذي تحتاجه؟" },
      { speaker: "b", en: "Medium, please.", ar: "وسط، من فضلك." },
      { speaker: "a", en: "Here you go. The fitting room is there.", ar: "تفضّل. غرفة القياس هناك." },
    ],
  },
  "unit-hotel": {
    unitId: "unit-hotel", title: "في الفندق", emoji: "🏨",
    scene: "تحجز غرفة في فندق",
    speakerA: "موظّف الاستقبال",
    lines: [
      { speaker: "a", en: "Welcome! Do you have a reservation?", ar: "أهلاً! هل لديك حجز؟" },
      { speaker: "b", en: "Yes, under the name Ahmed.", ar: "نعم، باسم أحمد." },
      { speaker: "a", en: "A room for two nights, correct?", ar: "غرفة لليلتين، صحيح؟" },
      { speaker: "b", en: "Yes, that's right.", ar: "نعم، هذا صحيح." },
      { speaker: "a", en: "Here's your key. Room 204.", ar: "هذا مفتاحك. غرفة 204." },
    ],
  },
  "unit-work": {
    unitId: "unit-work", title: "في العمل", emoji: "💼",
    scene: "تتحدّث مع زميل في العمل",
    speakerA: "زميل",
    lines: [
      { speaker: "a", en: "Good morning! How are you?", ar: "صباح الخير! كيف حالك؟" },
      { speaker: "b", en: "I'm fine, thanks. And you?", ar: "أنا بخير، شكراً. وأنت؟" },
      { speaker: "a", en: "Busy! Do you have the report?", ar: "مشغول! هل لديك التقرير؟" },
      { speaker: "b", en: "Yes, I'll send it now.", ar: "نعم، سأرسله الآن." },
      { speaker: "a", en: "Thank you so much!", ar: "شكراً جزيلاً!" },
    ],
  },
  "unit-city": {
    unitId: "unit-city", title: "تسأل عن الطريق", emoji: "🗺️",
    scene: "تسأل عن طريق في مدينة جديدة",
    speakerA: "أحد المارّة",
    lines: [
      { speaker: "b", en: "Excuse me, where is the bank?", ar: "عذراً، أين البنك؟" },
      { speaker: "a", en: "Go straight, then turn left.", ar: "اذهب مباشرة، ثم انعطف يساراً." },
      { speaker: "b", en: "Is it far?", ar: "هل هو بعيد؟" },
      { speaker: "a", en: "No, just five minutes.", ar: "لا، خمس دقائق فقط." },
      { speaker: "b", en: "Thank you for your help!", ar: "شكراً على مساعدتك!" },
    ],
  },
  "unit-symp": {
    unitId: "unit-symp", title: "عند الطبيب", emoji: "🩺",
    scene: "تصف أعراضك للطبيب",
    speakerA: "الطبيب",
    lines: [
      { speaker: "a", en: "What's the problem?", ar: "ما المشكلة؟" },
      { speaker: "b", en: "I have a headache and a fever.", ar: "عندي صداع وحُمّى." },
      { speaker: "a", en: "How long have you felt this way?", ar: "منذ متى تشعر بهذا؟" },
      { speaker: "b", en: "Since yesterday.", ar: "منذ الأمس." },
      { speaker: "a", en: "Take this medicine and rest.", ar: "خذ هذا الدواء واسترح." },
    ],
  },
};

// احصل على حوار الوحدة (إن وُجد) — بالـ unitId أو بعنوان الوحدة
export function getDialogue(unitId: string): Dialogue | undefined {
  return DIALOGUES[unitId];
}

// خريطة عنوان الوحدة → unitId (للربط من LESSON_MAP)
const TITLE_TO_UNIT: Record<string, string> = {
  "قدّم واقبل المشروبات": "unit-drinks",
  "قدّم نفسك وعائلتك": "unit-intro",
  "اطلب الطعام والمشروبات": "unit-food",
  "تنقل في المطار": "unit-airport",
  "تحدث عن الطقس": "unit-weather",
  "تسوّق لشراء الملابس": "unit-clothes",
  "احجز غرفة في فندق": "unit-hotel",
  "تواصل في العمل": "unit-work",
  "تنقّل في مدينة غير مألوفة": "unit-city",
  "تحدّث عن الأعراض": "unit-symp",
};

export function getDialogueByTitle(unitTitle: string): Dialogue | undefined {
  const uid = TITLE_TO_UNIT[unitTitle];
  return uid ? DIALOGUES[uid] : undefined;
}
