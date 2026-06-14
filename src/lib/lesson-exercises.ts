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
