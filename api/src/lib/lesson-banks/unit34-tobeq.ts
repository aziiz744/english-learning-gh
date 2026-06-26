import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 34: كوّن أسئلة بـ"يكون" في الزمن المضارع
//   درس 1: Am/Is/Are في بداية السؤال — Are you? Is he?
//   درس 2: أسئلة بكلمات الاستفهام — Where is? What are?
//   درس 3: إجابات قصيرة — Yes I am, No he isn't
// ══════════════════════════════════════════════════════════════

export const unit34ToBeQBank: Record<string, TieredBank> = {

  "أسئلة Are/Is": {
    t0: [
      { id:"bq1-t0-1", type:"translate", arabic:"هل أنت؟", options:["Are you?","Is you?","Am you?","You are?"], correctAnswer:"Are you?", explanation:"Are you? = هل أنت؟", xp:10 },
      { id:"bq1-t0-2", type:"word_order", sentence:"Are you happy", correctAnswer:"Are you happy", explanation:"هل أنت سعيد؟", xp:12 },
      { id:"bq1-t0-3", type:"listen_select", listenSentence:"is he here", options:["is","are","am","be"], correctAnswer:"is", explanation:"Is he? = هل هو؟", xp:10 },
      { id:"bq1-t0-4", type:"translate", arabic:"هل هو طبيب؟", options:["Is he a doctor?","Are he a doctor?","Am he a doctor?","He is a doctor?"], correctAnswer:"Is he a doctor?", explanation:"Is he? = هل هو؟", xp:12 },
      { id:"bq1-t0-5", type:"fill_blank", blankSentence:"___ you ready", blankOptions:["Are","Is","Am"], correctAnswer:"Are", explanation:"Are you? = هل أنت؟", xp:12 },
      { id:"bq1-t0-6", type:"word_order", sentence:"Is she your sister", correctAnswer:"Is she your sister", explanation:"هل هي أختك؟", xp:12 },
      { id:"bq1-t0-7", type:"fill_blank", blankSentence:"___ I late", blankOptions:["Am","Is","Are"], correctAnswer:"Am", explanation:"Am I? = هل أنا؟", xp:12 },
      { id:"bq1-t0-8", type:"listen_select", listenSentence:"are they ready", options:["are","is","am","be"], correctAnswer:"are", explanation:"Are they? = هل هم؟", xp:12 },
      { id:"bq1-t0-9", type:"matching", pairs:[{en:"Are you?",ar:"هل أنت؟"},{en:"Is he?",ar:"هل هو؟"},{en:"Is she?",ar:"هل هي؟"},{en:"Are they?",ar:"هل هم؟"},{en:"Am I?",ar:"هل أنا؟"},{en:"Is it?",ar:"هل إنه؟"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"bq1-t1-1", type:"word_order", sentence:"Are you from Egypt", correctAnswer:"Are you from Egypt", explanation:"هل أنت من مصر؟", xp:14 },
      { id:"bq1-t1-2", type:"translate", arabic:"هل هم في المنزل؟", options:["Are they at home?","Is they at home?","Are they at home","Am they at home?"], correctAnswer:"Are they at home?", explanation:"Are they? = هل هم؟", xp:14 },
      { id:"bq1-t1-3", type:"listen_select", listenSentence:"is it expensive", options:["is","are","am","be"], correctAnswer:"is", explanation:"Is it? = هل إنه؟", xp:13 },
      { id:"bq1-t1-4", type:"fill_blank", blankSentence:"___ your parents at work", blankOptions:["Are","Is","Am"], correctAnswer:"Are", explanation:"parents جمع → Are", xp:14 },
      { id:"bq1-t1-5", type:"word_order", sentence:"Is this your book", correctAnswer:"Is this your book", explanation:"هل هذا كتابك؟", xp:14 },
      { id:"bq1-t1-6", type:"translate", arabic:"هل هي مشغولة الآن؟", options:["Is she busy now?","Are she busy now?","Is she busy now","Am she busy now?"], correctAnswer:"Is she busy now?", explanation:"Is she? = هل هي؟", xp:13 },
      { id:"bq1-t1-7", type:"fill_blank", blankSentence:"___ the shops open today", blankOptions:["Are","Is","Am"], correctAnswer:"Are", explanation:"shops جمع → Are", xp:13 },
      { id:"bq1-t1-8", type:"word_order", sentence:"Are we late for the meeting", correctAnswer:"Are we late for the meeting", explanation:"هل نحن متأخرون للاجتماع؟", xp:14 },
      { id:"bq1-t1-9", type:"matching", pairs:[{en:"Are you from",ar:"هل أنت من"},{en:"Is this",ar:"هل هذا"},{en:"Are they",ar:"هل هم"},{en:"Is she",ar:"هل هي"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"bq1-t2-1", type:"word_order", sentence:"Are you sure about your answer", correctAnswer:"Are you sure about your answer", explanation:"هل أنت متأكّد من إجابتك؟", xp:16 },
      { id:"bq1-t2-2", type:"translate", arabic:"هل هذا المطعم مفتوح يوم الأحد؟", options:["Is this restaurant open on Sunday?","Are this restaurant open on Sunday?","Is this restaurant open on Sunday","Is this restaurants open on Sunday?"], correctAnswer:"Is this restaurant open on Sunday?", explanation:"Is this? = هل هذا؟", xp:16 },
      { id:"bq1-t2-3", type:"fill_blank", blankSentence:"___ the children asleep already", blankOptions:["Are","Is","Am"], correctAnswer:"Are", explanation:"children جمع → Are", xp:15 },
      { id:"bq1-t2-4", type:"word_order", sentence:"Is your brother coming to the party", correctAnswer:"Is your brother coming to the party", explanation:"هل أخوك قادم للحفلة؟", xp:16 },
      { id:"bq1-t2-5", type:"translate", arabic:"هل أنتم مستعدّون للامتحان؟", options:["Are you ready for the exam?","Is you ready for the exam?","Are you ready for exam?","Are you ready for the exams?"], correctAnswer:"Are you ready for the exam?", explanation:"Are you ready? = هل أنتم مستعدّون؟", xp:16 },
      { id:"bq1-t2-6", type:"listen_select", listenSentence:"is everything okay", options:["is","are","am","be"], correctAnswer:"is", explanation:"Is everything? = هل كل شيء؟", xp:15 },
      { id:"bq1-t2-7", type:"word_order", sentence:"Are these seats taken", correctAnswer:"Are these seats taken", explanation:"هل هذه المقاعد محجوزة؟", xp:15 },
      { id:"bq1-t2-8", type:"fill_blank", blankSentence:"___ it cold outside today", blankOptions:["Is","Are","Am"], correctAnswer:"Is", explanation:"Is it? = هل إنه؟", xp:15 },
    ],
    t3: [],
  },

  "أسئلة بكلمات الاستفهام": {
    t0: [
      { id:"bq2-t0-1", type:"translate", arabic:"أين؟", options:["Where","What","Who","When"], correctAnswer:"Where", explanation:"Where = أين", xp:10 },
      { id:"bq2-t0-2", type:"word_order", sentence:"Where is the bank", correctAnswer:"Where is the bank", explanation:"أين البنك؟", xp:12 },
      { id:"bq2-t0-3", type:"listen_select", listenSentence:"what is your name", options:["What","Where","Who","When"], correctAnswer:"What", explanation:"What is? = ما؟", xp:10 },
      { id:"bq2-t0-4", type:"translate", arabic:"ما اسمك؟", options:["What is your name?","Where is your name?","Who is your name?","What your name?"], correctAnswer:"What is your name?", explanation:"What is your name?", xp:12 },
      { id:"bq2-t0-5", type:"fill_blank", blankSentence:"___ are you from", blankOptions:["Where","What","Who"], correctAnswer:"Where", explanation:"Where are you from? = من أين أنت؟", xp:12 },
      { id:"bq2-t0-6", type:"word_order", sentence:"Who is that man", correctAnswer:"Who is that man", explanation:"من ذلك الرجل؟", xp:12 },
      { id:"bq2-t0-7", type:"listen_select", listenSentence:"when is the meeting", options:["When","Where","What","Who"], correctAnswer:"When", explanation:"When is? = متى؟", xp:12 },
      { id:"bq2-t0-8", type:"translate", arabic:"من هو؟", options:["Who is he?","What is he?","Where is he?","When is he?"], correctAnswer:"Who is he?", explanation:"Who is he? = من هو؟", xp:10 },
      { id:"bq2-t0-9", type:"matching", pairs:[{en:"Where",ar:"أين"},{en:"What",ar:"ما/ماذا"},{en:"Who",ar:"من"},{en:"When",ar:"متى"},{en:"Why",ar:"لماذا"},{en:"How",ar:"كيف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"bq2-t1-1", type:"word_order", sentence:"Where are my keys", correctAnswer:"Where are my keys", explanation:"أين مفاتيحي؟", xp:14 },
      { id:"bq2-t1-2", type:"translate", arabic:"لماذا أنت متأخّر؟", options:["Why are you late?","Why is you late?","Why are you late","Why you are late?"], correctAnswer:"Why are you late?", explanation:"Why are you? = لماذا أنت؟", xp:14 },
      { id:"bq2-t1-3", type:"listen_select", listenSentence:"how old are you", options:["How","What","Who","When"], correctAnswer:"How", explanation:"How old are you? = كم عمرك؟", xp:13 },
      { id:"bq2-t1-4", type:"fill_blank", blankSentence:"___ is the weather today", blankOptions:["How","Where","Who"], correctAnswer:"How", explanation:"How is the weather? = كيف الطقس؟", xp:14 },
      { id:"bq2-t1-5", type:"word_order", sentence:"What are these things", correctAnswer:"What are these things", explanation:"ما هذه الأشياء؟", xp:14 },
      { id:"bq2-t1-6", type:"translate", arabic:"متى موعد الحفلة؟", options:["When is the party?","Where is the party?","When are the party?","When the party is?"], correctAnswer:"When is the party?", explanation:"When is? = متى؟", xp:13 },
      { id:"bq2-t1-7", type:"listen_select", listenSentence:"where are they now", options:["Where","What","Who","When"], correctAnswer:"Where", explanation:"Where are they? = أين هم؟", xp:13 },
      { id:"bq2-t1-8", type:"word_order", sentence:"Who are those people", correctAnswer:"Who are those people", explanation:"من أولئك الناس؟", xp:14 },
      { id:"bq2-t1-9", type:"matching", pairs:[{en:"Where are",ar:"أين (جمع)"},{en:"Why are you",ar:"لماذا أنت"},{en:"How old",ar:"كم العمر"},{en:"When is",ar:"متى"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"bq2-t2-1", type:"word_order", sentence:"Where are you going this weekend", correctAnswer:"Where are you going this weekend", explanation:"إلى أين تذهب نهاية الأسبوع؟", xp:16 },
      { id:"bq2-t2-2", type:"translate", arabic:"لماذا هؤلاء الناس غاضبون؟", options:["Why are these people angry?","Why is these people angry?","Why are these people angry","Why these people are angry?"], correctAnswer:"Why are these people angry?", explanation:"Why are these people?", xp:16 },
      { id:"bq2-t2-3", type:"fill_blank", blankSentence:"___ is your favorite color", blankOptions:["What","Where","Who"], correctAnswer:"What", explanation:"What is? = ما؟", xp:15 },
      { id:"bq2-t2-4", type:"word_order", sentence:"How are your parents doing these days", correctAnswer:"How are your parents doing these days", explanation:"كيف حال والديك هذه الأيام؟", xp:16 },
      { id:"bq2-t2-5", type:"translate", arabic:"أين أقرب محطة قطار؟", options:["Where is the nearest train station?","Where are the nearest train station?","Where is nearest train station?","Where is the nearest train stations?"], correctAnswer:"Where is the nearest train station?", explanation:"Where is the nearest?", xp:16 },
      { id:"bq2-t2-6", type:"listen_select", listenSentence:"what time is it", options:["What","Where","Who","When"], correctAnswer:"What", explanation:"What time is it? = كم الساعة؟", xp:15 },
      { id:"bq2-t2-7", type:"word_order", sentence:"Who is responsible for this project", correctAnswer:"Who is responsible for this project", explanation:"من المسؤول عن هذا المشروع؟", xp:15 },
      { id:"bq2-t2-8", type:"fill_blank", blankSentence:"___ are the new students", blankOptions:["Where","What","Who"], correctAnswer:"Where", explanation:"Where are? = أين (جمع)؟", xp:15 },
    ],
    t3: [],
  },

  "إجابات قصيرة": {
    t0: [
      { id:"bq3-t0-1", type:"translate", arabic:"نعم، أنا كذلك", options:["Yes, I am","Yes, I is","Yes, I are","Yes, am I"], correctAnswer:"Yes, I am", explanation:"Yes, I am = نعم، أنا كذلك", xp:10 },
      { id:"bq3-t0-2", type:"word_order", sentence:"Yes she is", correctAnswer:"Yes she is", explanation:"نعم، هي كذلك", xp:12 },
      { id:"bq3-t0-3", type:"listen_select", listenSentence:"no he isn't", options:["isn't","aren't","am not","not"], correctAnswer:"isn't", explanation:"No, he isn't = لا، هو ليس", xp:10 },
      { id:"bq3-t0-4", type:"translate", arabic:"لا، هم ليسوا كذلك", options:["No, they aren't","No, they isn't","No, they not","No, they am not"], correctAnswer:"No, they aren't", explanation:"No, they aren't = لا، هم ليسوا", xp:12 },
      { id:"bq3-t0-5", type:"fill_blank", blankSentence:"Yes, ___ are", blankOptions:["we","I","he"], correctAnswer:"we", explanation:"Yes, we are = نعم، نحن كذلك", xp:12 },
      { id:"bq3-t0-6", type:"word_order", sentence:"No I am not", correctAnswer:"No I am not", explanation:"لا، أنا لست", xp:12 },
      { id:"bq3-t0-7", type:"listen_select", listenSentence:"yes they are", options:["are","is","am","be"], correctAnswer:"are", explanation:"Yes, they are = نعم، هم كذلك", xp:12 },
      { id:"bq3-t0-8", type:"translate", arabic:"نعم، إنه كذلك", options:["Yes, it is","Yes, it are","Yes, it am","Yes, is it"], correctAnswer:"Yes, it is", explanation:"Yes, it is = نعم، إنه كذلك", xp:10 },
      { id:"bq3-t0-9", type:"matching", pairs:[{en:"Yes, I am",ar:"نعم أنا"},{en:"No, I'm not",ar:"لا، لست"},{en:"Yes, he is",ar:"نعم هو"},{en:"No, he isn't",ar:"لا، هو ليس"},{en:"Yes, they are",ar:"نعم هم"},{en:"No, they aren't",ar:"لا، ليسوا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"bq3-t1-1", type:"word_order", sentence:"No they aren't here", correctAnswer:"No they aren't here", explanation:"لا، هم ليسوا هنا", xp:14 },
      { id:"bq3-t1-2", type:"translate", arabic:"نعم، إنها معلّمتي", options:["Yes, she is my teacher","Yes, she are my teacher","Yes, she my teacher","Yes, she is my teachers"], correctAnswer:"Yes, she is my teacher", explanation:"Yes, she is = نعم، هي", xp:14 },
      { id:"bq3-t1-3", type:"listen_select", listenSentence:"no I'm not sure", options:["I'm not","I isn't","I aren't","I not"], correctAnswer:"I'm not", explanation:"No, I'm not = لا، لست", xp:13 },
      { id:"bq3-t1-4", type:"fill_blank", blankSentence:"Yes, ___ is", blankOptions:["he","you","they"], correctAnswer:"he", explanation:"Yes, he is = نعم، هو", xp:14 },
      { id:"bq3-t1-5", type:"word_order", sentence:"Yes we are ready", correctAnswer:"Yes we are ready", explanation:"نعم، نحن جاهزون", xp:14 },
      { id:"bq3-t1-6", type:"translate", arabic:"لا، إنه ليس صحيحاً", options:["No, it isn't correct","No, it aren't correct","No, it not correct","No, it isn't corrects"], correctAnswer:"No, it isn't correct", explanation:"No, it isn't = لا، إنه ليس", xp:13 },
      { id:"bq3-t1-7", type:"listen_select", listenSentence:"yes of course", options:["course","cause","horse","force"], correctAnswer:"course", explanation:"Yes, of course = نعم، بالطبع", xp:13 },
      { id:"bq3-t1-8", type:"word_order", sentence:"No she isn't at home", correctAnswer:"No she isn't at home", explanation:"لا، هي ليست في المنزل", xp:14 },
      { id:"bq3-t1-9", type:"matching", pairs:[{en:"Yes, we are",ar:"نعم نحن"},{en:"No, we aren't",ar:"لا، لسنا"},{en:"Yes, it is",ar:"نعم إنه"},{en:"No, it isn't",ar:"لا، إنه ليس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"bq3-t2-1", type:"word_order", sentence:"Yes I am very happy to be here", correctAnswer:"Yes I am very happy to be here", explanation:"نعم، أنا سعيد جداً بوجودي هنا", xp:16 },
      { id:"bq3-t2-2", type:"translate", arabic:"لا، أنا لست متأكّداً من الإجابة", options:["No, I am not sure about the answer","No, I am not sure about the answers","No, I not sure about the answer","No, I am not sure about answer"], correctAnswer:"No, I am not sure about the answer", explanation:"I am not sure = لست متأكّداً", xp:16 },
      { id:"bq3-t2-3", type:"fill_blank", blankSentence:"Yes, they ___ my best friends", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"they are = هم", xp:15 },
      { id:"bq3-t2-4", type:"word_order", sentence:"No it isn't as cold as yesterday", correctAnswer:"No it isn't as cold as yesterday", explanation:"لا، إنه ليس بارداً كالأمس", xp:16 },
      { id:"bq3-t2-5", type:"translate", arabic:"نعم، نحن متحمّسون جداً للرحلة", options:["Yes, we are very excited about the trip","Yes, we is very excited about the trip","Yes, we are very excited about trip","Yes, we are very excited about the trips"], correctAnswer:"Yes, we are very excited about the trip", explanation:"we are excited = نحن متحمّسون", xp:16 },
      { id:"bq3-t2-6", type:"listen_select", listenSentence:"no not at all", options:["all","ball","call","tall"], correctAnswer:"all", explanation:"No, not at all = لا، إطلاقاً", xp:15 },
      { id:"bq3-t2-7", type:"word_order", sentence:"Yes she is the new manager", correctAnswer:"Yes she is the new manager", explanation:"نعم، هي المديرة الجديدة", xp:15 },
      { id:"bq3-t2-8", type:"fill_blank", blankSentence:"No, he ___ ready yet", blankOptions:["isn't","aren't","am not"], correctAnswer:"isn't", explanation:"he isn't = هو ليس", xp:15 },
    ],
    t3: [],
  },
};
