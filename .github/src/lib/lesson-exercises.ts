// Lesson-specific TIERED exercise banks.
// Each lesson has 4 distinct difficulty tiers (t0..t3) so every star attempt
// and the challenge test shows COMPLETELY DIFFERENT questions, with difficulty
// rising t0 → t3. Content lives in ./lesson-banks/{a1..c2}.ts and is merged here.

import type { ExObj, TieredBank } from "./lesson-banks/types";
import { a1Banks } from "./lesson-banks/a1";
import { a2Banks } from "./lesson-banks/a2";
import { b1Banks } from "./lesson-banks/b1";
import { b2Banks } from "./lesson-banks/b2";
import { c1Banks } from "./lesson-banks/c1";
import { c2Banks } from "./lesson-banks/c2";

export type { ExObj, TieredBank } from "./lesson-banks/types";

const B: Record<string, TieredBank> = {
  ...a1Banks,
  ...a2Banks,
  ...b1Banks,
  ...b2Banks,
  ...c1Banks,
  ...c2Banks,
};

// Generic tiered fallback for any lesson without a dedicated bank.
export const FALLBACK: TieredBank = {
  t0: [
    { id:"fb-t0-1", type:"word_order", sentence:"I am a student", correctAnswer:"I am a student", explanation:"I am — استخدم am مع I", xp:10 },
    { id:"fb-t0-2", type:"translate", arabic:"أنا سعيد", options:["I am happy","I happy","I is happy","I am happily"], correctAnswer:"I am happy", explanation:"I am + صفة", xp:10 },
    { id:"fb-t0-3", type:"word_order", sentence:"She is my friend", correctAnswer:"She is my friend", explanation:"She is + اسم", xp:10 },
    { id:"fb-t0-4", type:"listen_select", listenSentence:"The cat is black", options:["black","white","brown","grey"], correctAnswer:"black", explanation:"الجملة: «القطة سوداء» — اللون black", xp:10 },
    { id:"fb-t0-5", type:"picture_match", word:"book", pictureOptions:[{emoji:"📚",label:"book"},{emoji:"📱",label:"phone"},{emoji:"💻",label:"laptop"},{emoji:"📝",label:"note"}], correctAnswer:"book", explanation:"book = كتاب 📚", xp:10 },
    { id:"fb-t0-6", type:"translate", arabic:"هذا منزلي", options:["This is my house","This my house","This is mine house","This house is my"], correctAnswer:"This is my house", explanation:"This is + ملكية", xp:10 },
    { id:"fb-t0-7", type:"word_order", sentence:"We like coffee", correctAnswer:"We like coffee", explanation:"We like — فعل مجرد مع we", xp:10 },
    { id:"fb-t0-8", type:"translate", arabic:"إنه يوم جميل", options:["It is a nice day","It is nice day","It a nice day","It is day nice"], correctAnswer:"It is a nice day", explanation:"It is a + صفة + اسم", xp:10 },
    { id:"fb-t0-9", type:"listen_select", listenSentence:"I have two brothers", options:["two","three","four","five"], correctAnswer:"two", explanation:"الجملة: «عندي أخوان» — العدد two", xp:10 },
    { id:"fb-t0-10", type:"picture_match", word:"sun", pictureOptions:[{emoji:"☀️",label:"sun"},{emoji:"🌙",label:"moon"},{emoji:"⭐",label:"star"},{emoji:"☁️",label:"cloud"}], correctAnswer:"sun", explanation:"sun = شمس ☀️", xp:10 },
  ],
  t1: [
    { id:"fb-t1-1", type:"word_order", sentence:"Do you speak English", correctAnswer:"Do you speak English", explanation:"Do you + فعل — سؤال في المضارع", xp:13 },
    { id:"fb-t1-2", type:"translate", arabic:"هي لا تعمل اليوم", options:["She does not work today","She do not work today","She not work today","She is not work today"], correctAnswer:"She does not work today", explanation:"does not + فعل مجرد للنفي مع she", xp:14 },
    { id:"fb-t1-3", type:"word_order", sentence:"They are playing football now", correctAnswer:"They are playing football now", explanation:"are playing — المضارع المستمر", xp:13 },
    { id:"fb-t1-4", type:"listen_select", listenSentence:"He works at a hospital", options:["hospital","school","bank","hotel"], correctAnswer:"hospital", explanation:"الجملة: «يعمل في مستشفى» — hospital", xp:13 },
    { id:"fb-t1-5", type:"translate", arabic:"أين تعيش؟", options:["Where do you live?","Where you live?","Where do you living?","Where are you live?"], correctAnswer:"Where do you live?", explanation:"Where do you + فعل — سؤال", xp:14 },
    { id:"fb-t1-6", type:"word_order", sentence:"I do not like cold weather", correctAnswer:"I do not like cold weather", explanation:"do not like — النفي في المضارع", xp:13 },
    { id:"fb-t1-7", type:"translate", arabic:"نحن نذهب إلى المدرسة كل يوم", options:["We go to school every day","We goes to school every day","We going to school every day","We go to school everyday day"], correctAnswer:"We go to school every day", explanation:"We go — فعل مجرد مع we", xp:14 },
    { id:"fb-t1-8", type:"picture_match", word:"rain", pictureOptions:[{emoji:"🌧️",label:"rain"},{emoji:"❄️",label:"snow"},{emoji:"☀️",label:"sun"},{emoji:"🌈",label:"rainbow"}], correctAnswer:"rain", explanation:"rain = مطر 🌧️", xp:13 },
    { id:"fb-t1-9", type:"listen_select", listenSentence:"She is reading a book", options:["reading","writing","cooking","running"], correctAnswer:"reading", explanation:"الجملة: «هي تقرأ كتاباً» — reading", xp:14 },
    { id:"fb-t1-10", type:"translate", arabic:"كم الساعة الآن؟", options:["What time is it now?","What time it is now?","What is the time now?","How time is it now?"], correctAnswer:"What time is it now?", explanation:"What time is it? — السؤال عن الوقت", xp:14 },
  ],
  t2: [
    { id:"fb-t2-1", type:"word_order", sentence:"I have lived here for ten years", correctAnswer:"I have lived here for ten years", explanation:"have lived ... for — المضارع التام مع مدة", xp:16 },
    { id:"fb-t2-2", type:"translate", arabic:"هذا الكتاب أكثر إثارة من ذاك", options:["This book is more interesting than that one","This book is interestinger than that one","This book is more interesting that that one","This book more interesting than that one"], correctAnswer:"This book is more interesting than that one", explanation:"more interesting than — مقارنة", xp:17 },
    { id:"fb-t2-3", type:"word_order", sentence:"If it rains we will stay home", correctAnswer:"If it rains we will stay home", explanation:"If + present → will — الشرط الأول", xp:17 },
    { id:"fb-t2-4", type:"listen_select", listenSentence:"The project was finished on time", options:["finished","started","delayed","cancelled"], correctAnswer:"finished", explanation:"الجملة: «أُنجز المشروع في وقته» — finished", xp:18 },
    { id:"fb-t2-5", type:"translate", arabic:"كنت أدرس عندما اتصلت بي", options:["I was studying when you called me","I studied when you called me","I was study when you called me","I am studying when you called me"], correctAnswer:"I was studying when you called me", explanation:"was studying + when — ماضٍ مستمر مقطوع", xp:18 },
    { id:"fb-t2-6", type:"word_order", sentence:"She has already finished her work", correctAnswer:"She has already finished her work", explanation:"has already finished — المضارع التام مع already", xp:17 },
    { id:"fb-t2-7", type:"translate", arabic:"يجب أن تدرس بجد", options:["You should study hard","You should to study hard","You should studying hard","You should studied hard"], correctAnswer:"You should study hard", explanation:"should + مصدر — نصيحة", xp:16 },
    { id:"fb-t2-8", type:"picture_match", word:"library", pictureOptions:[{emoji:"📚",label:"library"},{emoji:"🏥",label:"hospital"},{emoji:"🏦",label:"bank"},{emoji:"🏫",label:"school"}], correctAnswer:"library", explanation:"library = مكتبة 📚", xp:16 },
    { id:"fb-t2-9", type:"listen_select", listenSentence:"They have never been abroad", options:["abroad","around","aboard","ahead"], correctAnswer:"abroad", explanation:"الجملة: «لم يسافروا للخارج قط» — abroad", xp:18 },
    { id:"fb-t2-10", type:"translate", arabic:"الفيلم الذي شاهدناه كان رائعاً", options:["The film we watched was great","The film which we watched it was great","The film we watched it was great","The film what we watched was great"], correctAnswer:"The film we watched was great", explanation:"جملة وصل بدون ضمير زائد", xp:18 },
  ],
  t3: [
    { id:"fb-t3-1", type:"word_order", sentence:"Had I known I would have helped you", correctAnswer:"Had I known I would have helped you", explanation:"Had I known — شرط ثالث بالقلب (inversion)", xp:23 },
    { id:"fb-t3-2", type:"translate", arabic:"لو كنت مكانك لقبلت العرض", options:["If I were you I would accept the offer","If I was you I would accept the offer","If I were you I will accept the offer","If I am you I would accept the offer"], correctAnswer:"If I were you I would accept the offer", explanation:"If I were — شرط ثانٍ افتراضي", xp:24 },
    { id:"fb-t3-3", type:"word_order", sentence:"The report must be submitted by Friday", correctAnswer:"The report must be submitted by Friday", explanation:"must be submitted — مبني للمجهول مع فعل مساعد", xp:23 },
    { id:"fb-t3-4", type:"listen_select", listenSentence:"Despite the difficulties they succeeded", options:["Despite","Although","However","Whereas"], correctAnswer:"Despite", explanation:"الجملة: «رغم الصعوبات نجحوا» — Despite + اسم", xp:24 },
    { id:"fb-t3-5", type:"translate", arabic:"لا يكفي أن تعمل بجد فحسب", options:["It is not enough merely to work hard","It is not enough merely work hard","It is not enough to merely working hard","It not enough merely to work hard"], correctAnswer:"It is not enough merely to work hard", explanation:"merely — ظرف بأسلوب راقٍ", xp:24 },
    { id:"fb-t3-6", type:"word_order", sentence:"She said she had already left", correctAnswer:"She said she had already left", explanation:"said ... had left — كلام منقول مع backshift", xp:23 },
    { id:"fb-t3-7", type:"translate", arabic:"نادراً ما رأيت مثل هذا الإبداع", options:["Rarely have I seen such creativity","Rarely I have seen such creativity","Rarely have I saw such creativity","Rarely did I have seen such creativity"], correctAnswer:"Rarely have I seen such creativity", explanation:"Rarely + قلب الفاعل المساعد — أسلوب توكيد", xp:25 },
    { id:"fb-t3-8", type:"picture_match", word:"achievement", pictureOptions:[{emoji:"🏆",label:"achievement"},{emoji:"📉",label:"failure"},{emoji:"⏳",label:"delay"},{emoji:"❓",label:"doubt"}], correctAnswer:"achievement", explanation:"achievement = إنجاز 🏆", xp:22 },
    { id:"fb-t3-9", type:"listen_select", listenSentence:"The proposal was thoroughly reviewed", options:["thoroughly","throughout","thorough","through"], correctAnswer:"thoroughly", explanation:"الجملة: «رُوجع المقترح بدقة» — thoroughly", xp:24 },
    { id:"fb-t3-10", type:"translate", arabic:"كان ينبغي أن نتصرف في وقت أبكر", options:["We should have acted sooner","We should acted sooner","We should have act sooner","We should had acted sooner"], correctAnswer:"We should have acted sooner", explanation:"should have + تصريف ثالث — ندم على الماضي", xp:24 },
  ],
};

// ── Simple Questions Bank ────────────────────────────────
const SIMPLE_QUESTIONS_BANK: TieredBank = {
  t0: [
    { id:"sq-t0-1", type:"word_order", sentence:"What is your name", correctAnswer:"What is your name", explanation:"What is your name? — سؤال عن الاسم", xp:12 },
    { id:"sq-t0-2", type:"translate", arabic:"من أين أنت؟", options:["Where are you from?","Where you from?","From where you?","Where are from you?"], correctAnswer:"Where are you from?", explanation:"Where are you from? — سؤال عن البلد", xp:12 },
    { id:"sq-t0-3", type:"word_order", sentence:"How old are you", correctAnswer:"How old are you", explanation:"How old are you? — سؤال عن العمر", xp:12 },
    { id:"sq-t0-4", type:"translate", arabic:"ما هو عملك؟", options:["What do you do?","What you do?","What are you do?","What do you doing?"], correctAnswer:"What do you do?", explanation:"What do you do? — سؤال عن الوظيفة", xp:12 },
    { id:"sq-t0-5", type:"word_order", sentence:"Where do you live", correctAnswer:"Where do you live", explanation:"Where do you live? — سؤال عن مكان السكن", xp:12 },
    { id:"sq-t0-6", type:"translate", arabic:"هل تتكلم الإنجليزية؟", options:["Do you speak English?","Are you speak English?","Do you speaking English?","You speak English?"], correctAnswer:"Do you speak English?", explanation:"Do you + فعل — سؤال نعم/لا", xp:12 },
    { id:"sq-t0-7", type:"word_order", sentence:"Who is your teacher", correctAnswer:"Who is your teacher", explanation:"Who is...? — سؤال عن شخص", xp:12 },
    { id:"sq-t0-8", type:"translate", arabic:"كم عدد أفراد عائلتك؟", options:["How many people are in your family?","How much people in your family?","How many people is in your family?","How people are in your family?"], correctAnswer:"How many people are in your family?", explanation:"How many + جمع — سؤال عن الكمية", xp:13 },
    { id:"sq-t0-9", type:"listen_select", listenSentence:"What is your favorite color?", options:["color","name","job","age"], correctAnswer:"color", explanation:"السؤال عن اللون المفضل — color", xp:12 },
    { id:"sq-t0-10", type:"translate", arabic:"أين تعمل؟", options:["Where do you work?","Where you work?","Where are you work?","Where do you working?"], correctAnswer:"Where do you work?", explanation:"Where do you work? — سؤال عن مكان العمل", xp:12 },
  ],
  t1: [
    { id:"sq-t1-1", type:"word_order", sentence:"What time does the school start", correctAnswer:"What time does the school start", explanation:"What time does...? — سؤال عن وقت بدء حدث", xp:14 },
    { id:"sq-t1-2", type:"translate", arabic:"هل يحب أخوك القهوة؟", options:["Does your brother like coffee?","Do your brother like coffee?","Is your brother like coffee?","Does your brother likes coffee?"], correctAnswer:"Does your brother like coffee?", explanation:"Does + فاعل مفرد + فعل مجرد — سؤال نعم/لا", xp:14 },
    { id:"sq-t1-3", type:"word_order", sentence:"Why do you study English", correctAnswer:"Why do you study English", explanation:"Why do you...? — سؤال عن السبب", xp:14 },
    { id:"sq-t1-4", type:"translate", arabic:"من يدرّس اللغة الإنجليزية؟", options:["Who teaches English?","Who teach English?","Who is teaching English?","Who does teaches English?"], correctAnswer:"Who teaches English?", explanation:"Who + فعل مع s — السؤال عن الفاعل", xp:15 },
    { id:"sq-t1-5", type:"word_order", sentence:"How often do you exercise", correctAnswer:"How often do you exercise", explanation:"How often do you...? — سؤال عن التكرار", xp:14 },
    { id:"sq-t1-6", type:"translate", arabic:"ماذا تفعل في وقت الفراغ؟", options:["What do you do in your free time?","What you do in your free time?","What are you do in free time?","What do you doing free time?"], correctAnswer:"What do you do in your free time?", explanation:"What do you do...? — سؤال عن النشاط", xp:15 },
    { id:"sq-t1-7", type:"listen_select", listenSentence:"How many brothers do you have?", options:["brothers","sisters","friends","children"], correctAnswer:"brothers", explanation:"السؤال عن عدد الإخوة — brothers", xp:14 },
    { id:"sq-t1-8", type:"word_order", sentence:"Which sport do you prefer", correctAnswer:"Which sport do you prefer", explanation:"Which...do you...? — سؤال للاختيار", xp:14 },
    { id:"sq-t1-9", type:"translate", arabic:"هل تعيش هنا منذ وقت طويل؟", options:["Have you lived here for a long time?","Do you live here for a long time?","Are you living here for a long time?","Did you live here for a long time?"], correctAnswer:"Have you lived here for a long time?", explanation:"Have you + تصريف ثالث — سؤال في المضارع التام", xp:15 },
    { id:"sq-t1-10", type:"translate", arabic:"من الذي اتصل بك؟", options:["Who called you?","Who did call you?","Who was called you?","Who calling you?"], correctAnswer:"Who called you?", explanation:"Who + فعل ماضٍ — سؤال عن الفاعل في الماضي", xp:14 },
  ],
  t2: [
    { id:"sq-t2-1", type:"word_order", sentence:"What would you do if you had more time", correctAnswer:"What would you do if you had more time", explanation:"What would you do if...? — سؤال افتراضي", xp:17 },
    { id:"sq-t2-2", type:"translate", arabic:"لماذا لم تأتِ إلى الاجتماع؟", options:["Why didn't you come to the meeting?","Why you didn't come to the meeting?","Why did you not come the meeting?","Why didn't you came to the meeting?"], correctAnswer:"Why didn't you come to the meeting?", explanation:"Why didn't you + فعل مجرد — سؤال نفي ماضٍ", xp:18 },
    { id:"sq-t2-3", type:"word_order", sentence:"How long have you been waiting here", correctAnswer:"How long have you been waiting here", explanation:"How long have you been...? — سؤال عن مدة استمرار فعل", xp:17 },
    { id:"sq-t2-4", type:"translate", arabic:"هل كنت تعمل عندما اتصلت بك؟", options:["Were you working when I called?","Did you work when I called?","Are you working when I called?","Was you working when I called?"], correctAnswer:"Were you working when I called?", explanation:"Were you + ing — سؤال ماضٍ مستمر", xp:18 },
    { id:"sq-t2-5", type:"listen_select", listenSentence:"How long have you been learning English?", options:["learning","speaking","teaching","studying"], correctAnswer:"learning", explanation:"السؤال عن مدة تعلم الإنجليزية — learning", xp:17 },
    { id:"sq-t2-6", type:"word_order", sentence:"What kind of music do you enjoy listening to", correctAnswer:"What kind of music do you enjoy listening to", explanation:"What kind of...? — سؤال للتصنيف", xp:18 },
    { id:"sq-t2-7", type:"translate", arabic:"هل تم إنجاز المشروع في الوقت المحدد؟", options:["Was the project completed on time?","Did the project complete on time?","Is the project completed on time?","Has the project completed on time?"], correctAnswer:"Was the project completed on time?", explanation:"Was + اسم + تصريف ثالث — سؤال مبني للمجهول", xp:18 },
    { id:"sq-t2-8", type:"translate", arabic:"من أين حصلت على هذه المعلومات؟", options:["Where did you get this information?","Where you got this information?","From where did you got this information?","Where did you got this information?"], correctAnswer:"Where did you get this information?", explanation:"Where did you get...? — سؤال عن مصدر", xp:17 },
    { id:"sq-t2-9", type:"word_order", sentence:"Which of these options would you choose", correctAnswer:"Which of these options would you choose", explanation:"Which of...would you...? — سؤال اختيار بين خيارات", xp:17 },
    { id:"sq-t2-10", type:"translate", arabic:"كم من الوقت استغرق الأمر؟", options:["How long did it take?","How much time did it take?","How long it did take?","How long has it taken?"], correctAnswer:"How long did it take?", explanation:"How long did it take? — سؤال عن المدة الزمنية", xp:18 },
  ],
  t3: [
    { id:"sq-t3-1", type:"word_order", sentence:"To what extent do you agree with this statement", correctAnswer:"To what extent do you agree with this statement", explanation:"To what extent...? — سؤال أكاديمي عن درجة الموافقة", xp:22 },
    { id:"sq-t3-2", type:"translate", arabic:"ألا تعتقد أن هذا القرار كان خاطئاً؟", options:["Don't you think this decision was wrong?","Do you not think this decision was wrong?","Isn't you thinking this decision was wrong?","Don't you thought this decision was wrong?"], correctAnswer:"Don't you think this decision was wrong?", explanation:"Don't you think...? — سؤال سلبي للتأكيد", xp:23 },
    { id:"sq-t3-3", type:"word_order", sentence:"Wouldn't it be better to reconsider the plan", correctAnswer:"Wouldn't it be better to reconsider the plan", explanation:"Wouldn't it be better to...? — سؤال اقتراحي راقٍ", xp:23 },
    { id:"sq-t3-4", type:"translate", arabic:"هل يمكنك توضيح ما تقصده بالضبط؟", options:["Could you clarify exactly what you mean?","Can you clarify exactly what you mean?","Would you clarify exactly what do you mean?","Could you clarify exactly what do you mean?"], correctAnswer:"Could you clarify exactly what you mean?", explanation:"Could you...? — طلب مؤدب، embedded question بدون do", xp:24 },
    { id:"sq-t3-5", type:"listen_select", listenSentence:"Under what circumstances would you change your decision?", options:["circumstances","conditions","situations","reasons"], correctAnswer:"circumstances", explanation:"سؤال عن الظروف — circumstances", xp:23 },
    { id:"sq-t3-6", type:"word_order", sentence:"How might this policy affect future generations", correctAnswer:"How might this policy affect future generations", explanation:"How might...? — سؤال تحليلي باستخدام might", xp:23 },
    { id:"sq-t3-7", type:"translate", arabic:"ماذا كان يمكن أن يحدث لو اتخذنا قراراً مختلفاً؟", options:["What might have happened if we had made a different decision?","What might happen if we made a different decision?","What could happen if we had made a different decision?","What might have happened if we made a different decision?"], correctAnswer:"What might have happened if we had made a different decision?", explanation:"What might have happened if...had...? — شرط ثالث", xp:25 },
    { id:"sq-t3-8", type:"word_order", sentence:"In what ways has technology changed the way we communicate", correctAnswer:"In what ways has technology changed the way we communicate", explanation:"In what ways has...? — سؤال تحليلي عن التغيير", xp:24 },
    { id:"sq-t3-9", type:"translate", arabic:"ما مدى تأثير هذا القرار على الاقتصاد؟", options:["To what extent has this decision affected the economy?","How much has this decision affected the economy?","To what extent did this decision affect the economy?","How far has this decision affected the economy?"], correctAnswer:"To what extent has this decision affected the economy?", explanation:"To what extent has...? — سؤال أكاديمي عن التأثير", xp:25 },
    { id:"sq-t3-10", type:"translate", arabic:"ألم يكن من الأولى الاستشارة قبل اتخاذ القرار؟", options:["Shouldn't consultation have taken place before the decision?","Shouldn't consultation take place before the decision?","Should consultation have taken place before the decision?","Shouldn't have consultation taken place before the decision?"], correctAnswer:"Shouldn't consultation have taken place before the decision?", explanation:"Shouldn't + have + تصريف ثالث — انتقاد راقٍ للماضي", xp:25 },
  ],
};

B["Simple Questions"] = SIMPLE_QUESTIONS_BANK;

// ── Public API ────────────────────────────────
function pickN<T>(arr: T[], n: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, Math.min(n, arr.length));
}

export function getLessonBank(title: string): TieredBank {
  return B[title] ?? FALLBACK;
}

const TIER_KEYS = ["t0", "t1", "t2", "t3"] as const;

/**
 * Returns `count` exercises drawn from the requested tier ONLY, so every star
 * attempt (and the challenge test) is completely different and difficulty rises
 * with the tier. Properly authored tiers have >= count items; the adjacent-tier
 * top-up is only a safety net for short/fallback banks (de-duped by id).
 */
export function getLessonMiniExercises(
  lessonTitle: string,
  count: number,
  tier: 0 | 1 | 2 | 3
): ExObj[] {
  const bank = getLessonBank(lessonTitle);
  const chosen: ExObj[] = pickN(bank[TIER_KEYS[tier]], count);

  if (chosen.length < count) {
    const seen = new Set(chosen.map((e) => e.id));
    // Prefer the nearest tiers first (tier-1, tier+1, tier-2, ...).
    const order: (0 | 1 | 2 | 3)[] = [];
    for (let d = 1; d < 4; d++) {
      if (tier - d >= 0) order.push((tier - d) as 0 | 1 | 2 | 3);
      if (tier + d <= 3) order.push((tier + d) as 0 | 1 | 2 | 3);
    }
    for (const t of order) {
      if (chosen.length >= count) break;
      for (const e of pickN(bank[TIER_KEYS[t]], count)) {
        if (chosen.length >= count) break;
        if (!seen.has(e.id)) {
          chosen.push(e);
          seen.add(e.id);
        }
      }
    }
  }

  return chosen.sort(() => Math.random() - 0.5);
}

// ── Food & Drink Bank ────────────────────────────────
B["Food & Drink"] = {
  t0: [
    { id:"fd-t0-1", type:"translate", arabic:"أنا أحب القهوة", options:["I like coffee","I likes coffee","I am like coffee","I liking coffee"], correctAnswer:"I like coffee", explanation:"I like + اسم — التعبير عن الإعجاب", xp:10 },
    { id:"fd-t0-2", type:"picture_match", word:"apple", pictureOptions:[{emoji:"🍎",label:"apple"},{emoji:"🍌",label:"banana"},{emoji:"🍊",label:"orange"},{emoji:"🍇",label:"grapes"}], correctAnswer:"apple", explanation:"apple = تفاحة 🍎", xp:10 },
    { id:"fd-t0-3", type:"word_order", sentence:"I want a glass of water", correctAnswer:"I want a glass of water", explanation:"a glass of water — كوب ماء", xp:10 },
    { id:"fd-t0-4", type:"translate", arabic:"أنا جائع", options:["I am hungry","I am thirsty","I am tired","I am happy"], correctAnswer:"I am hungry", explanation:"hungry = جائع", xp:10 },
    { id:"fd-t0-5", type:"listen_select", listenSentence:"I eat breakfast every morning", options:["breakfast","lunch","dinner","snack"], correctAnswer:"breakfast", explanation:"breakfast = فطور صباحي", xp:10 },
    { id:"fd-t0-6", type:"picture_match", word:"coffee", pictureOptions:[{emoji:"☕",label:"coffee"},{emoji:"🧃",label:"juice"},{emoji:"🥛",label:"milk"},{emoji:"🍵",label:"tea"}], correctAnswer:"coffee", explanation:"coffee = قهوة ☕", xp:10 },
    { id:"fd-t0-7", type:"translate", arabic:"هذا الطعام لذيذ جداً", options:["This food is very delicious","This food very delicious","This food is very deliciously","This foods is very delicious"], correctAnswer:"This food is very delicious", explanation:"delicious = لذيذ", xp:10 },
    { id:"fd-t0-8", type:"word_order", sentence:"She drinks tea every day", correctAnswer:"She drinks tea every day", explanation:"drinks — فعل مضارع مع she", xp:10 },
    { id:"fd-t0-9", type:"listen_select", listenSentence:"Would you like some bread?", options:["bread","rice","pasta","soup"], correctAnswer:"bread", explanation:"bread = خبز", xp:10 },
    { id:"fd-t0-10", type:"picture_match", word:"pizza", pictureOptions:[{emoji:"🍕",label:"pizza"},{emoji:"🍔",label:"burger"},{emoji:"🌮",label:"taco"},{emoji:"🍜",label:"noodles"}], correctAnswer:"pizza", explanation:"pizza = بيتزا 🍕", xp:10 },
  ],
  t1: [
    { id:"fd-t1-1", type:"translate", arabic:"هل تريد شيئاً للشرب؟", options:["Would you like something to drink?","Do you want something to drink?","Will you like something to drink?","Would you want something to drink?"], correctAnswer:"Would you like something to drink?", explanation:"Would you like...? — طريقة أدب للعرض", xp:13 },
    { id:"fd-t1-2", type:"word_order", sentence:"I prefer chicken to fish", correctAnswer:"I prefer chicken to fish", explanation:"prefer A to B — تفضيل شيء على آخر", xp:13 },
    { id:"fd-t1-3", type:"listen_select", listenSentence:"The restaurant serves fresh seafood", options:["seafood","pasta","salad","dessert"], correctAnswer:"seafood", explanation:"seafood = مأكولات بحرية", xp:13 },
    { id:"fd-t1-4", type:"translate", arabic:"لقد أكلت الكثير في العشاء", options:["I ate too much at dinner","I eat too much at dinner","I have eat too much at dinner","I had too much eating at dinner"], correctAnswer:"I ate too much at dinner", explanation:"ate = ماضي eat، too much = أكثر من اللازم", xp:14 },
    { id:"fd-t1-5", type:"picture_match", word:"salad", pictureOptions:[{emoji:"🥗",label:"salad"},{emoji:"🍲",label:"stew"},{emoji:"🥘",label:"rice dish"},{emoji:"🍱",label:"bento"}], correctAnswer:"salad", explanation:"salad = سلطة 🥗", xp:13 },
    { id:"fd-t1-6", type:"word_order", sentence:"Can I have the menu please", correctAnswer:"Can I have the menu please", explanation:"Can I have...? — طلب شيء في مطعم", xp:13 },
    { id:"fd-t1-7", type:"translate", arabic:"الطعام الحار ليس صحياً دائماً", options:["Spicy food is not always healthy","Spicy food is always not healthy","Spicy food not always healthy","Spicy foods is not always healthy"], correctAnswer:"Spicy food is not always healthy", explanation:"not always = ليس دائماً", xp:14 },
    { id:"fd-t1-8", type:"listen_select", listenSentence:"I usually skip breakfast on weekdays", options:["breakfast","lunch","dinner","brunch"], correctAnswer:"breakfast", explanation:"skip breakfast = تخطي الفطور", xp:13 },
    { id:"fd-t1-9", type:"translate", arabic:"هذا المطعم مشهور بشاورمته", options:["This restaurant is famous for its shawarma","This restaurant famous for its shawarma","This restaurant is famous by its shawarma","This restaurant is fame for its shawarma"], correctAnswer:"This restaurant is famous for its shawarma", explanation:"famous for = مشهور بـ", xp:14 },
    { id:"fd-t1-10", type:"word_order", sentence:"The bill comes to fifty riyals", correctAnswer:"The bill comes to fifty riyals", explanation:"comes to = يبلغ (في السعر)", xp:13 },
  ],
  t2: [
    { id:"fd-t2-1", type:"translate", arabic:"لم أتذوق هذا الطبق من قبل", options:["I have never tasted this dish before","I never tasted this dish before","I have never taste this dish before","I did never taste this dish before"], correctAnswer:"I have never tasted this dish before", explanation:"have never + تصريف ثالث — المضارع التام النفي", xp:17 },
    { id:"fd-t2-2", type:"word_order", sentence:"The vegetables should be cooked until they are tender", correctAnswer:"The vegetables should be cooked until they are tender", explanation:"should be cooked — مبني للمجهول بفعل مساعد", xp:17 },
    { id:"fd-t2-3", type:"listen_select", listenSentence:"A balanced diet includes proteins carbohydrates and vitamins", options:["proteins","fats","sugars","calories"], correctAnswer:"proteins", explanation:"proteins = بروتينات — من عناصر الغذاء المتوازن", xp:17 },
    { id:"fd-t2-4", type:"translate", arabic:"يُنصح بتناول الفواكه والخضروات يومياً", options:["It is recommended to eat fruits and vegetables daily","It is recommended eating fruits and vegetables daily","It recommends to eat fruits and vegetables daily","It is recommend to eat fruits and vegetables daily"], correctAnswer:"It is recommended to eat fruits and vegetables daily", explanation:"It is recommended to + فعل — أسلوب النصيحة الرسمية", xp:18 },
    { id:"fd-t2-5", type:"word_order", sentence:"Eating late at night can affect your sleep quality", correctAnswer:"Eating late at night can affect your sleep quality", explanation:"Eating... can affect — الفاعل جملة اسمية بـ ing", xp:17 },
    { id:"fd-t2-6", type:"translate", arabic:"هذه الوصفة تحتاج إلى ساعتين من الطهي", options:["This recipe requires two hours of cooking","This recipe require two hours of cooking","This recipe needs two hours for cooking","This recipe is requiring two hours of cooking"], correctAnswer:"This recipe requires two hours of cooking", explanation:"requires = يتطلب، of cooking = من الطهي", xp:17 },
    { id:"fd-t2-7", type:"listen_select", listenSentence:"The chef recommended the grilled salmon with lemon sauce", options:["salmon","chicken","shrimp","tuna"], correctAnswer:"salmon", explanation:"grilled salmon = سلمون مشوي", xp:17 },
    { id:"fd-t2-8", type:"picture_match", word:"cake", pictureOptions:[{emoji:"🎂",label:"cake"},{emoji:"🍩",label:"donut"},{emoji:"🍪",label:"cookie"},{emoji:"🍮",label:"pudding"}], correctAnswer:"cake", explanation:"cake = كعكة 🎂", xp:16 },
    { id:"fd-t2-9", type:"translate", arabic:"المطعم الذي ذهبنا إليه كان باهظ الثمن", options:["The restaurant we went to was expensive","The restaurant which we went was expensive","The restaurant we went it was expensive","The restaurant that we went to it was expensive"], correctAnswer:"The restaurant we went to was expensive", explanation:"جملة وصل بحذف which/that", xp:18 },
    { id:"fd-t2-10", type:"word_order", sentence:"She has been following a strict diet for three months", correctAnswer:"She has been following a strict diet for three months", explanation:"has been following — المضارع التام المستمر", xp:17 },
  ],
  t3: [
    { id:"fd-t3-1", type:"translate", arabic:"الأنظمة الغذائية المتطرفة نادراً ما تؤتي ثمارها على المدى البعيد", options:["Extreme diets rarely pay off in the long run","Extreme diets are rarely paying off in the long run","Extreme diets rarely pays off in the long run","Extreme diets seldom will pay off in the long run"], correctAnswer:"Extreme diets rarely pay off in the long run", explanation:"rarely + فعل مجرد، pay off in the long run = تؤتي ثمارها بالمدى البعيد", xp:23 },
    { id:"fd-t3-2", type:"word_order", sentence:"Not only does poor nutrition affect physical health but it also impacts mental wellbeing", correctAnswer:"Not only does poor nutrition affect physical health but it also impacts mental wellbeing", explanation:"Not only does...but also — قلب للتوكيد", xp:24 },
    { id:"fd-t3-3", type:"listen_select", listenSentence:"The culinary traditions of a region reflect its cultural heritage and history", options:["culinary","cultural","historical","traditional"], correctAnswer:"culinary", explanation:"culinary traditions = التقاليد الطهوية", xp:23 },
    { id:"fd-t3-4", type:"translate", arabic:"يُزعم أن التغذية الجيدة تؤدي دوراً محورياً في الوقاية من الأمراض المزمنة", options:["It is argued that good nutrition plays a pivotal role in preventing chronic diseases","It is argued that good nutrition plays a pivotal role to prevent chronic diseases","It argued that good nutrition plays a pivotal role in preventing chronic diseases","It is argued good nutrition plays a pivotal role in preventing chronic diseases"], correctAnswer:"It is argued that good nutrition plays a pivotal role in preventing chronic diseases", explanation:"It is argued that... — أسلوب أكاديمي للادعاء", xp:25 },
    { id:"fd-t3-5", type:"word_order", sentence:"Were the ingredients sourced locally the dish would have a fresher taste", correctAnswer:"Were the ingredients sourced locally the dish would have a fresher taste", explanation:"Were + اسم + تصريف ثالث — شرط ثانٍ بالقلب", xp:24 },
    { id:"fd-t3-6", type:"translate", arabic:"لا يمكن المبالغة في أهمية النظام الغذائي المتوازن", options:["The importance of a balanced diet cannot be overstated","The importance of a balanced diet can not be overstated","The importance of a balanced diet cannot be over-stated","A balanced diet importance cannot be overstated"], correctAnswer:"The importance of a balanced diet cannot be overstated", explanation:"cannot be overstated = لا يمكن المبالغة فيه", xp:25 },
    { id:"fd-t3-7", type:"listen_select", listenSentence:"Fermented foods have gained considerable attention due to their probiotic properties", options:["Fermented","Processed","Organic","Frozen"], correctAnswer:"Fermented", explanation:"fermented foods = الأغذية المخمرة", xp:24 },
    { id:"fd-t3-8", type:"translate", arabic:"كان ينبغي أن يستشير الطاهي خبير تغذية قبل إعداد القائمة", options:["The chef should have consulted a nutritionist before preparing the menu","The chef should consult a nutritionist before preparing the menu","The chef should have consulted a nutritionist before prepare the menu","The chef should had consulted a nutritionist before preparing the menu"], correctAnswer:"The chef should have consulted a nutritionist before preparing the menu", explanation:"should have + تصريف ثالث — ندم على الماضي", xp:25 },
    { id:"fd-t3-9", type:"word_order", sentence:"So pervasive is the influence of fast food culture that it has reshaped global eating habits", correctAnswer:"So pervasive is the influence of fast food culture that it has reshaped global eating habits", explanation:"So + صفة + is + اسم + that — تركيب توكيدي راقٍ", xp:25 },
    { id:"fd-t3-10", type:"translate", arabic:"تشير الدراسات إلى أن الإفراط في تناول السكر يرتبط بزيادة خطر الإصابة بالسكري", options:["Studies indicate that excessive sugar consumption is linked to an increased risk of diabetes","Studies indicate that excessive sugar consumption is linked to increased risk of diabetes","Studies indicates that excessive sugar consumption is linked to an increased risk of diabetes","Studies indicate that excessive sugar consumption linked to an increased risk of diabetes"], correctAnswer:"Studies indicate that excessive sugar consumption is linked to an increased risk of diabetes", explanation:"is linked to = يرتبط بـ، an increased risk of = خطر متزايد من", xp:25 },
  ],
};

// ── Basic Prepositions Bank ────────────────────────────────
B["Basic Prepositions"] = {
  t0: [
    { id:"bp-t0-1", type:"translate", arabic:"الكتاب على الطاولة", options:["The book is on the table","The book is in the table","The book is at the table","The book is under the table"], correctAnswer:"The book is on the table", explanation:"on = على السطح", xp:10 },
    { id:"bp-t0-2", type:"word_order", sentence:"The cat is under the chair", correctAnswer:"The cat is under the chair", explanation:"under = تحت", xp:10 },
    { id:"bp-t0-3", type:"listen_select", listenSentence:"The keys are in the bag", options:["in","on","at","under"], correctAnswer:"in", explanation:"in = داخل — المفاتيح داخل الحقيبة", xp:10 },
    { id:"bp-t0-4", type:"translate", arabic:"المدرسة بالقرب من المنزل", options:["The school is near the house","The school is in the house","The school is on the house","The school is at house"], correctAnswer:"The school is near the house", explanation:"near = بالقرب من", xp:10 },
    { id:"bp-t0-5", type:"word_order", sentence:"I live at number five", correctAnswer:"I live at number five", explanation:"at + رقم المنزل — موقع محدد", xp:10 },
    { id:"bp-t0-6", type:"picture_match", word:"between", pictureOptions:[{emoji:"↔️",label:"between"},{emoji:"⬆️",label:"above"},{emoji:"⬇️",label:"below"},{emoji:"➡️",label:"next to"}], correctAnswer:"between", explanation:"between = بين", xp:10 },
    { id:"bp-t0-7", type:"translate", arabic:"الاجتماع في الساعة الثالثة", options:["The meeting is at three o'clock","The meeting is in three o'clock","The meeting is on three o'clock","The meeting at three o'clock"], correctAnswer:"The meeting is at three o'clock", explanation:"at + وقت محدد", xp:10 },
    { id:"bp-t0-8", type:"word_order", sentence:"She sits next to the window", correctAnswer:"She sits next to the window", explanation:"next to = بجانب", xp:10 },
    { id:"bp-t0-9", type:"listen_select", listenSentence:"The picture is above the sofa", options:["above","below","behind","in front of"], correctAnswer:"above", explanation:"above = فوق — الصورة فوق الأريكة", xp:10 },
    { id:"bp-t0-10", type:"translate", arabic:"نلتقي في الصباح", options:["We meet in the morning","We meet at the morning","We meet on the morning","We meet by the morning"], correctAnswer:"We meet in the morning", explanation:"in the morning/afternoon/evening", xp:10 },
  ],
  t1: [
    { id:"bp-t1-1", type:"translate", arabic:"أسافر إلى لندن في يوليو", options:["I travel to London in July","I travel to London at July","I travel to London on July","I travel in London in July"], correctAnswer:"I travel to London in July", explanation:"in + شهر، to = إلى (وجهة)", xp:13 },
    { id:"bp-t1-2", type:"word_order", sentence:"The pharmacy is between the bank and the school", correctAnswer:"The pharmacy is between the bank and the school", explanation:"between A and B = بين أ وب", xp:13 },
    { id:"bp-t1-3", type:"listen_select", listenSentence:"He arrived at the airport on time", options:["at","in","on","by"], correctAnswer:"at", explanation:"at the airport = في المطار (مكان محدد)", xp:13 },
    { id:"bp-t1-4", type:"translate", arabic:"الحفلة يوم الجمعة", options:["The party is on Friday","The party is in Friday","The party is at Friday","The party is by Friday"], correctAnswer:"The party is on Friday", explanation:"on + يوم من الأسبوع", xp:13 },
    { id:"bp-t1-5", type:"word_order", sentence:"She walked along the river for an hour", correctAnswer:"She walked along the river for an hour", explanation:"along = على طول، for + مدة زمنية", xp:14 },
    { id:"bp-t1-6", type:"translate", arabic:"المكتب أمام المصعد", options:["The office is in front of the elevator","The office is in front the elevator","The office is front of the elevator","The office is before the elevator"], correctAnswer:"The office is in front of the elevator", explanation:"in front of = أمام", xp:14 },
    { id:"bp-t1-7", type:"listen_select", listenSentence:"We stayed at a hotel near the beach", options:["near","behind","above","beside"], correctAnswer:"near", explanation:"near the beach = قريب من الشاطئ", xp:13 },
    { id:"bp-t1-8", type:"word_order", sentence:"The train leaves from platform three", correctAnswer:"The train leaves from platform three", explanation:"from = من (نقطة الانطلاق)", xp:13 },
    { id:"bp-t1-9", type:"translate", arabic:"يعمل منذ الصباح حتى المساء", options:["He works from morning until evening","He works from morning to the evening","He works since morning until evening","He works from morning till the evening"], correctAnswer:"He works from morning until evening", explanation:"from...until — من... حتى", xp:14 },
    { id:"bp-t1-10", type:"picture_match", word:"behind", pictureOptions:[{emoji:"🔙",label:"behind"},{emoji:"⬆️",label:"above"},{emoji:"⬇️",label:"below"},{emoji:"↔️",label:"between"}], correctAnswer:"behind", explanation:"behind = خلف 🔙", xp:13 },
  ],
  t2: [
    { id:"bp-t2-1", type:"translate", arabic:"يعتمد النجاح على الجهد المبذول", options:["Success depends on the effort made","Success depends of the effort made","Success depend on the effort made","Success is depending on the effort made"], correctAnswer:"Success depends on the effort made", explanation:"depends on = يعتمد على", xp:17 },
    { id:"bp-t2-2", type:"word_order", sentence:"Despite the rain they continued with the outdoor event", correctAnswer:"Despite the rain they continued with the outdoor event", explanation:"Despite + اسم — على الرغم من", xp:17 },
    { id:"bp-t2-3", type:"listen_select", listenSentence:"The proposal was rejected by the committee due to budget constraints", options:["due to","because","owing","as a result"], correctAnswer:"due to", explanation:"due to = بسبب (تليه اسم)", xp:17 },
    { id:"bp-t2-4", type:"translate", arabic:"فيما يتعلق بطلبك، سنرد عليك قريباً", options:["With regard to your request we will respond soon","In regard of your request we will respond soon","Regarding to your request we will respond soon","With regards your request we will respond soon"], correctAnswer:"With regard to your request we will respond soon", explanation:"with regard to = فيما يتعلق بـ", xp:18 },
    { id:"bp-t2-5", type:"word_order", sentence:"She graduated from university with distinction", correctAnswer:"She graduated from university with distinction", explanation:"graduate from = يتخرج من، with distinction = بامتياز", xp:17 },
    { id:"bp-t2-6", type:"translate", arabic:"الوضع خارج عن سيطرتنا", options:["The situation is beyond our control","The situation is out our control","The situation is outside our control","The situation is over our control"], correctAnswer:"The situation is beyond our control", explanation:"beyond our control = خارج سيطرتنا", xp:17 },
    { id:"bp-t2-7", type:"listen_select", listenSentence:"The conference will be held throughout the week", options:["throughout","during","within","across"], correctAnswer:"throughout", explanation:"throughout the week = طوال الأسبوع", xp:17 },
    { id:"bp-t2-8", type:"translate", arabic:"بناءً على النتائج، قرروا تغيير الاستراتيجية", options:["Based on the results they decided to change the strategy","Based in the results they decided to change the strategy","Basing on the results they decided to change the strategy","Based on the results they decided changing the strategy"], correctAnswer:"Based on the results they decided to change the strategy", explanation:"based on = بناءً على", xp:18 },
    { id:"bp-t2-9", type:"word_order", sentence:"In addition to her degree she has years of practical experience", correctAnswer:"In addition to her degree she has years of practical experience", explanation:"in addition to = بالإضافة إلى", xp:17 },
    { id:"bp-t2-10", type:"translate", arabic:"تم التوصل إلى الاتفاق في غضون ساعات", options:["The agreement was reached within hours","The agreement was reached in hours","The agreement was reached during hours","The agreement was reached throughout hours"], correctAnswer:"The agreement was reached within hours", explanation:"within = في غضون / خلال", xp:17 },
  ],
  t3: [
    { id:"bp-t3-1", type:"translate", arabic:"على الرغم مما يُشاع، فإن الاقتصاد في تحسن", options:["Contrary to what is often claimed the economy is improving","Despite what is often claimed the economy is improving","In contrast to what is claimed the economy is improving","Notwithstanding what is claimed the economy is improving"], correctAnswer:"Contrary to what is often claimed the economy is improving", explanation:"contrary to = خلافاً لما يُعتقد", xp:23 },
    { id:"bp-t3-2", type:"word_order", sentence:"In light of recent developments the board has revised its position", correctAnswer:"In light of recent developments the board has revised its position", explanation:"in light of = في ضوء — حرف جر مركب أكاديمي", xp:23 },
    { id:"bp-t3-3", type:"listen_select", listenSentence:"The findings are consistent with previous research conducted in this field", options:["consistent with","similar to","related to","connected to"], correctAnswer:"consistent with", explanation:"consistent with = يتسق مع — تعبير أكاديمي", xp:23 },
    { id:"bp-t3-4", type:"translate", arabic:"فيما يخص الإجراءات القانونية، استُشير خبراء متخصصون", options:["With respect to the legal procedures specialist experts were consulted","In respect of the legal procedures specialist experts were consulted","With respect for the legal procedures specialist experts were consulted","Regarding of the legal procedures specialist experts were consulted"], correctAnswer:"With respect to the legal procedures specialist experts were consulted", explanation:"with respect to = فيما يخص — أكاديمي رسمي", xp:24 },
    { id:"bp-t3-5", type:"word_order", sentence:"The policy was introduced against the backdrop of rising inflation", correctAnswer:"The policy was introduced against the backdrop of rising inflation", explanation:"against the backdrop of = في سياق / في ظل", xp:24 },
    { id:"bp-t3-6", type:"translate", arabic:"هذا القرار ينبع من حاجة ملحّة للإصلاح", options:["This decision stems from an urgent need for reform","This decision stems of an urgent need for reform","This decision stems from an urgent need of reform","This decision stems from an urgent need to reform"], correctAnswer:"This decision stems from an urgent need for reform", explanation:"stems from = ينبع من، need for = حاجة إلى", xp:25 },
    { id:"bp-t3-7", type:"listen_select", listenSentence:"The initiative was undertaken in pursuit of greater efficiency", options:["in pursuit of","in search for","in need of","in place of"], correctAnswer:"in pursuit of", explanation:"in pursuit of = سعياً إلى — تعبير رسمي", xp:24 },
    { id:"bp-t3-8", type:"word_order", sentence:"Prior to the implementation of the new system extensive testing was required", correctAnswer:"Prior to the implementation of the new system extensive testing was required", explanation:"prior to = قبل — أكثر رسمية من before", xp:24 },
    { id:"bp-t3-9", type:"translate", arabic:"إلى جانب التكاليف المرتفعة، تبرز مخاوف تتعلق بالجودة", options:["Alongside the high costs concerns about quality also emerge","Alongside the high costs concerns about quality emerge also","Besides the high costs concerns about quality also emerge","Along the high costs concerns about quality also emerge"], correctAnswer:"Alongside the high costs concerns about quality also emerge", explanation:"alongside = إلى جانب — للإضافة بأسلوب راقٍ", xp:25 },
    { id:"bp-t3-10", type:"translate", arabic:"بمعزل عن السياق، يصعب تفسير هذه البيانات", options:["In isolation from context these data are difficult to interpret","Out of context these data are difficult to interpret","Without context these data are difficult to interpret","Apart from context these data are difficult to interpret"], correctAnswer:"In isolation from context these data are difficult to interpret", explanation:"in isolation from = بمعزل عن — مصطلح أكاديمي", xp:25 },
  ],
};

// ── The Alphabet & Phonics Bank ────────────────────────────────
B["The Alphabet & Phonics"] = {
  t0: [
    { id:"ap-t0-1", type:"listen_select", listenSentence:"The letter A makes the sound in apple", options:["apple","orange","egg","ice"], correctAnswer:"apple", explanation:"A كما في apple — صوت /æ/", xp:10 },
    { id:"ap-t0-2", type:"translate", arabic:"كيف تُنطق هذه الكلمة؟", options:["How do you pronounce this word?","How you pronounce this word?","How do you say this word?","How is this word pronounced?"], correctAnswer:"How do you pronounce this word?", explanation:"pronounce = ينطق", xp:10 },
    { id:"ap-t0-3", type:"picture_match", word:"dog", pictureOptions:[{emoji:"🐕",label:"dog"},{emoji:"🐈",label:"cat"},{emoji:"🐇",label:"rabbit"},{emoji:"🐟",label:"fish"}], correctAnswer:"dog", explanation:"dog يبدأ بحرف D — /d/ sound", xp:10 },
    { id:"ap-t0-4", type:"word_order", sentence:"The letter B sounds like bee", correctAnswer:"The letter B sounds like bee", explanation:"B تنطق /biː/ — اسم الحرف", xp:10 },
    { id:"ap-t0-5", type:"listen_select", listenSentence:"Can you spell your name please", options:["spell","write","say","read"], correctAnswer:"spell", explanation:"spell = يهجئ — تهجئة الاسم", xp:10 },
    { id:"ap-t0-6", type:"translate", arabic:"حرف الصوت العلة في كلمة cat هو A", options:["The vowel in cat is A","The vowel in cat is E","The vowel in cat is O","The vowel in cat is I"], correctAnswer:"The vowel in cat is A", explanation:"vowel = حرف صوت علة (a,e,i,o,u)", xp:10 },
    { id:"ap-t0-7", type:"picture_match", word:"sun", pictureOptions:[{emoji:"☀️",label:"sun"},{emoji:"🌙",label:"moon"},{emoji:"⭐",label:"star"},{emoji:"⛅",label:"cloud"}], correctAnswer:"sun", explanation:"sun يبدأ بحرف S — /s/ sound", xp:10 },
    { id:"ap-t0-8", type:"word_order", sentence:"The alphabet has twenty six letters", correctAnswer:"The alphabet has twenty six letters", explanation:"The English alphabet = 26 حرفاً", xp:10 },
    { id:"ap-t0-9", type:"listen_select", listenSentence:"The word ship starts with the sh sound", options:["sh","s","ch","th"], correctAnswer:"sh", explanation:"sh = صوت مركب /ʃ/ كما في ship وshow", xp:10 },
    { id:"ap-t0-10", type:"translate", arabic:"حروف العلة هي a وe وi وo وu", options:["The vowels are a e i o u","The vowels are a e i o y","The vowels are b c d f g","The vowels are a i u e o"], correctAnswer:"The vowels are a e i o u", explanation:"الحروف المتحركة الخمسة في الإنجليزية", xp:10 },
  ],
  t1: [
    { id:"ap-t1-1", type:"listen_select", listenSentence:"The th sound in think is different from the th in this", options:["think","that","the","there"], correctAnswer:"think", explanation:"th في think = /θ/ بدون صوت ، th في this = /ð/ مع صوت", xp:13 },
    { id:"ap-t1-2", type:"translate", arabic:"كلمة phone تنطق بصوت F رغم أنها تبدأ بـ Ph", options:["Phone is pronounced with an F sound","Phone is pronounced with a P sound","Phone is pronounced with a Ph sound","Phone is pronounced with a V sound"], correctAnswer:"Phone is pronounced with an F sound", explanation:"ph = /f/ مثل photo وphysics", xp:14 },
    { id:"ap-t1-3", type:"word_order", sentence:"Silent letters are letters that you do not pronounce", correctAnswer:"Silent letters are letters that you do not pronounce", explanation:"silent letters = الحروف الصامتة مثل k في knife", xp:13 },
    { id:"ap-t1-4", type:"listen_select", listenSentence:"The word knight has a silent k at the beginning", options:["silent k","silent g","silent h","silent w"], correctAnswer:"silent k", explanation:"knight, know, knife — k صامتة في البداية", xp:13 },
    { id:"ap-t1-5", type:"translate", arabic:"التشديد في كلمة photograph على المقطع الأول", options:["The stress in photograph is on the first syllable","The stress in photograph is on the second syllable","The stress in photograph is on the last syllable","The stress in photograph is equal"], correctAnswer:"The stress in photograph is on the first syllable", explanation:"PHO-to-graph — النبر على المقطع الأول", xp:14 },
    { id:"ap-t1-6", type:"word_order", sentence:"The word write has a silent w", correctAnswer:"The word write has a silent w", explanation:"write, wrong, wrist — w صامتة قبل r", xp:13 },
    { id:"ap-t1-7", type:"listen_select", listenSentence:"The oo sound in food is longer than in book", options:["food","book","look","wood"], correctAnswer:"food", explanation:"food /fuːd/ = oo طويلة ، book /bʊk/ = oo قصيرة", xp:13 },
    { id:"ap-t1-8", type:"translate", arabic:"الكلمات المتجانسة تُنطق بنفس الطريقة لكن معناها مختلف", options:["Homophones sound the same but have different meanings","Homophones look the same but have different meanings","Homophones sound different but have same meanings","Homophones are spelled the same but sound different"], correctAnswer:"Homophones sound the same but have different meanings", explanation:"homophones مثل: hear/here, sea/see, write/right", xp:14 },
    { id:"ap-t1-9", type:"word_order", sentence:"The letters ch make different sounds in chair and chef", correctAnswer:"The letters ch make different sounds in chair and chef", explanation:"ch في chair = /tʃ/ ، ch في chef = /ʃ/", xp:13 },
    { id:"ap-t1-10", type:"translate", arabic:"المقطع الصوتي هو وحدة نطقية في الكلمة", options:["A syllable is a unit of sound in a word","A syllable is a letter in a word","A syllable is a stress in a word","A syllable is a vowel in a word"], correctAnswer:"A syllable is a unit of sound in a word", explanation:"مثال: water = wa-ter (مقطعان)", xp:13 },
  ],
  t2: [
    { id:"ap-t2-1", type:"translate", arabic:"نطق الحرف R في الإنجليزية الأمريكية يختلف عنه في البريطانية", options:["The pronunciation of R differs between American and British English","The pronunciation of R is different in American and British English","The pronunciation of R differ between American and British English","The R sound is different between American and British English"], correctAnswer:"The pronunciation of R differs between American and British English", explanation:"في الأمريكية R دائماً تُنطق ، في البريطانية R في نهاية الكلمة صامتة غالباً", xp:17 },
    { id:"ap-t2-2", type:"word_order", sentence:"Consonant clusters occur when two or more consonants appear together", correctAnswer:"Consonant clusters occur when two or more consonants appear together", explanation:"consonant clusters = تجمعات حروف ساكنة مثل str في street", xp:17 },
    { id:"ap-t2-3", type:"listen_select", listenSentence:"The schwa is the most common vowel sound in English", options:["schwa","stress","syllable","suffix"], correctAnswer:"schwa", explanation:"schwa = الصوت /ə/ الأكثر شيوعاً مثل: the, a, about", xp:17 },
    { id:"ap-t2-4", type:"translate", arabic:"تغيير النبر في الكلمة قد يغير معناها أو وظيفتها النحوية", options:["Changing word stress can alter its meaning or grammatical function","Changing word stress can change its meaning or grammatical function","Changing word stress may alter its meaning or grammatical role","Both A and C are correct"], correctAnswer:"Changing word stress can alter its meaning or grammatical function", explanation:"مثال: REcord (اسم) ، reCORD (فعل)", xp:18 },
    { id:"ap-t2-5", type:"word_order", sentence:"Intonation patterns signal whether a sentence is a question or a statement", correctAnswer:"Intonation patterns signal whether a sentence is a question or a statement", explanation:"intonation = التنغيم — الصوت يرتفع في الأسئلة", xp:17 },
    { id:"ap-t2-6", type:"translate", arabic:"الإدغام يحدث حين تندمج أصوات في الكلام المتواصل", options:["Assimilation occurs when sounds blend in connected speech","Assimilation occurs when sounds blend in formal speech","Assimilation occurs when sounds separate in connected speech","Assimilation occurs when letters combine in writing"], correctAnswer:"Assimilation occurs when sounds blend in connected speech", explanation:"assimilation = الإدغام مثل don't you = /dəʊntʃu/", xp:17 },
    { id:"ap-t2-7", type:"listen_select", listenSentence:"Linking sounds help speech flow more naturally between words", options:["Linking","Rising","Falling","Stress"], correctAnswer:"Linking", explanation:"linking = وصل الأصوات مثل: an apple = /ənˈæpəl/", xp:17 },
    { id:"ap-t2-8", type:"translate", arabic:"كلمات مثل going to تُنطق غالباً gonna في الكلام غير الرسمي", options:["Words like going to are often pronounced gonna in informal speech","Words like going to are always pronounced gonna","Words like going to can never be pronounced gonna","Words like going to should not be pronounced gonna"], correctAnswer:"Words like going to are often pronounced gonna in informal speech", explanation:"reductions = التقليصات الصوتية في الكلام العفوي", xp:18 },
    { id:"ap-t2-9", type:"word_order", sentence:"Minimal pairs are words that differ by only one sound", correctAnswer:"Minimal pairs are words that differ by only one sound", explanation:"minimal pairs مثل: bit/beat, hat/hot, ship/sheep", xp:17 },
    { id:"ap-t2-10", type:"translate", arabic:"التدريب على الاستماع يساعد على التمييز بين الأصوات المتشابهة", options:["Listening practice helps distinguish between similar sounds","Listening practice help distinguish between similar sounds","Listening practices help to distinguish similar sounds","Listening practice helps to distinguish similar sounds"], correctAnswer:"Listening practice helps distinguish between similar sounds", explanation:"helps + فعل مجرد (بدون to في هذا السياق)", xp:17 },
  ],
  t3: [
    { id:"ap-t3-1", type:"translate", arabic:"يُعدّ اكتساب نظام صوتي غير لغتك الأم تحدياً إدراكياً عميقاً", options:["Acquiring a phonological system other than your mother tongue is a profound cognitive challenge","Acquiring a phonological system other than your mother tongue is a profound cognitive challange","Acquiring a phonological system other than your mother tongue presents a profound cognitive challenge","Acquiring phonological system other than your mother tongue is a profound cognitive challenge"], correctAnswer:"Acquiring a phonological system other than your mother tongue presents a profound cognitive challenge", explanation:"phonological system = النظام الصوتي ، presents a challenge = يطرح تحدياً", xp:23 },
    { id:"ap-t3-2", type:"word_order", sentence:"The distinction between phonemes and allophones is fundamental to phonology", correctAnswer:"The distinction between phonemes and allophones is fundamental to phonology", explanation:"phoneme = وحدة صوتية مميزة ، allophone = نطق بديل لها", xp:23 },
    { id:"ap-t3-3", type:"listen_select", listenSentence:"Phonemic awareness is a strong predictor of reading success in early literacy", options:["Phonemic","Phonological","Phonetic","Syllabic"], correctAnswer:"Phonemic", explanation:"phonemic awareness = الوعي الفونيمي — أساس تعلم القراءة", xp:23 },
    { id:"ap-t3-4", type:"translate", arabic:"يميل المتحدثون بلغة ثانية إلى استيراد أنماط النبر من لغتهم الأصلية", options:["Second language speakers tend to transfer stress patterns from their native language","Second language speakers tend to import stress patterns from their native language","Second language speakers tend to carry stress patterns from their native language","Second language speakers tend to apply stress patterns from their native language"], correctAnswer:"Second language speakers tend to transfer stress patterns from their native language", explanation:"transfer = نقل / استيراد — المصطلح الأكاديمي الشائع", xp:24 },
    { id:"ap-t3-5", type:"word_order", sentence:"Suprasegmental features such as tone pitch and rhythm operate above the level of individual sounds", correctAnswer:"Suprasegmental features such as tone pitch and rhythm operate above the level of individual sounds", explanation:"suprasegmental = ما فوق القطعي — مستوى الجملة لا الصوت الفردي", xp:24 },
    { id:"ap-t3-6", type:"translate", arabic:"ظاهرة الإسقاط الصوتي شائعة في الكلام غير الرسمي المتدفق", options:["Phonological elision is common in informal fluent speech","Phonological elision is common in formal fluent speech","Phonological elision is uncommon in informal fluent speech","Phonological deletion is common in informal fluent speech"], correctAnswer:"Phonological elision is common in informal fluent speech", explanation:"elision = الإسقاط — حذف أصوات مثل: next day → neks day", xp:24 },
    { id:"ap-t3-7", type:"listen_select", listenSentence:"Connected speech processes such as assimilation elision and linking shape natural pronunciation", options:["assimilation","articulation","aspiration","alliteration"], correctAnswer:"assimilation", explanation:"assimilation = الإدغام — أحد مظاهر الكلام المتصل", xp:23 },
    { id:"ap-t3-8", type:"word_order", sentence:"Prosodic features convey pragmatic meaning beyond the literal content of words", correctAnswer:"Prosodic features convey pragmatic meaning beyond the literal content of words", explanation:"prosodic = إيقاعي ، pragmatic meaning = المعنى التداولي", xp:24 },
    { id:"ap-t3-9", type:"translate", arabic:"التباين الصوتي بين اللهجات يعكس تطوراً تاريخياً واجتماعياً", options:["Phonetic variation across dialects reflects historical and social evolution","Phonetic variation between dialects reflects historical and social evolution","Phonological variation across dialects reflects historical and social evolution","Phonetic variation across dialects is reflecting historical and social evolution"], correctAnswer:"Phonetic variation across dialects reflects historical and social evolution", explanation:"across dialects = عبر اللهجات ، reflects = يعكس", xp:25 },
    { id:"ap-t3-10", type:"translate", arabic:"لا يمكن فهم نظام الكتابة الإنجليزية دون إدراك الاتساق الصوتي الكامن وراءه", options:["The English writing system cannot be understood without grasping the underlying phonological regularity","The English writing system can not be understood without grasping the underlying phonological regularity","The English writing system cannot be understood without to grasp the underlying phonological regularity","English writing system cannot be understood without grasping the underlying phonological regularity"], correctAnswer:"The English writing system cannot be understood without grasping the underlying phonological regularity", explanation:"underlying = كامن ، phonological regularity = الانتظام الصوتي", xp:25 },
  ],
};
