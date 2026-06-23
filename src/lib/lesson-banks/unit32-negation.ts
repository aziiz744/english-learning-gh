import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 32: كوّن النفي في الزمن المضارع
//   درس 1: don't — مع I/you/we/they
//   درس 2: doesn't — مع he/she/it
//   درس 3: استخدامها في جمل — don't / doesn't في سياقات
// ══════════════════════════════════════════════════════════════

export const unit32NegationBank: Record<string, TieredBank> = {

  "النفي بـ don't": {
    t0: [
      { id:"ng1-t0-1", type:"translate", arabic:"لا (مع I)", options:["don't","doesn't","not","no"], correctAnswer:"don't", explanation:"I don't = أنا لا", xp:10 },
      { id:"ng1-t0-2", type:"word_order", sentence:"I don't like coffee", correctAnswer:"I don't like coffee", explanation:"لا أحب القهوة", xp:12 },
      { id:"ng1-t0-3", type:"listen_select", listenSentence:"I don't know", options:["don't","doesn't","didn't","won't"], correctAnswer:"don't", explanation:"I don't know = لا أعرف", xp:10 },
      { id:"ng1-t0-4", type:"fill_blank", blankSentence:"I ___ eat meat", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"I don't eat = لا آكل", xp:12 },
      { id:"ng1-t0-5", type:"translate", arabic:"نحن لا نعمل", options:["We don't work","We doesn't work","We not work","We don't works"], correctAnswer:"We don't work", explanation:"We don't work = لا نعمل", xp:12 },
      { id:"ng1-t0-6", type:"word_order", sentence:"They don't play here", correctAnswer:"They don't play here", explanation:"هم لا يلعبون هنا", xp:12 },
      { id:"ng1-t0-7", type:"fill_blank", blankSentence:"You ___ understand me", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"You don't = أنت لا", xp:12 },
      { id:"ng1-t0-8", type:"listen_select", listenSentence:"we don't agree", options:["don't","doesn't","didn't","aren't"], correctAnswer:"don't", explanation:"we don't = نحن لا", xp:12 },
      { id:"ng1-t0-9", type:"matching", pairs:[{en:"I don't",ar:"أنا لا"},{en:"you don't",ar:"أنت لا"},{en:"we don't",ar:"نحن لا"},{en:"they don't",ar:"هم لا"},{en:"do not",ar:"لا (مطوّلة)"},{en:"don't like",ar:"لا يحب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ng1-t1-1", type:"word_order", sentence:"I don't want to go", correctAnswer:"I don't want to go", explanation:"لا أريد الذهاب", xp:14 },
      { id:"ng1-t1-2", type:"translate", arabic:"هم لا يأكلون اللحم", options:["They don't eat meat","They doesn't eat meat","They don't eats meat","They not eat meat"], correctAnswer:"They don't eat meat", explanation:"They don't eat = لا يأكلون", xp:14 },
      { id:"ng1-t1-3", type:"listen_select", listenSentence:"I don't have time", options:["don't","doesn't","didn't","won't"], correctAnswer:"don't", explanation:"I don't have = ليس لديّ", xp:13 },
      { id:"ng1-t1-4", type:"fill_blank", blankSentence:"We ___ speak French", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"we don't speak = لا نتحدّث", xp:14 },
      { id:"ng1-t1-5", type:"word_order", sentence:"You don't need a ticket", correctAnswer:"You don't need a ticket", explanation:"لا تحتاج تذكرة", xp:14 },
      { id:"ng1-t1-6", type:"translate", arabic:"أنا لا أشرب الشاي", options:["I don't drink tea","I doesn't drink tea","I don't drinks tea","I not drink tea"], correctAnswer:"I don't drink tea", explanation:"I don't drink = لا أشرب", xp:13 },
      { id:"ng1-t1-7", type:"listen_select", listenSentence:"they don't live here", options:["don't","doesn't","didn't","aren't"], correctAnswer:"don't", explanation:"they don't live = لا يعيشون", xp:13 },
      { id:"ng1-t1-8", type:"word_order", sentence:"We don't go there often", correctAnswer:"We don't go there often", explanation:"لا نذهب هناك كثيراً", xp:14 },
      { id:"ng1-t1-9", type:"matching", pairs:[{en:"don't want",ar:"لا يريد"},{en:"don't have",ar:"ليس لديه"},{en:"don't know",ar:"لا يعرف"},{en:"don't need",ar:"لا يحتاج"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ng1-t2-1", type:"word_order", sentence:"I don't usually eat breakfast in the morning", correctAnswer:"I don't usually eat breakfast in the morning", explanation:"عادةً لا أتناول الفطور صباحاً", xp:16 },
      { id:"ng1-t2-2", type:"translate", arabic:"نحن لا نوافق على هذه الفكرة", options:["We don't agree with this idea","We doesn't agree with this idea","We don't agrees with this idea","We not agree with this idea"], correctAnswer:"We don't agree with this idea", explanation:"don't agree = لا نوافق", xp:16 },
      { id:"ng1-t2-3", type:"fill_blank", blankSentence:"They ___ believe the story", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"they don't believe = لا يصدّقون", xp:15 },
      { id:"ng1-t2-4", type:"word_order", sentence:"I don't think that is a good idea", correctAnswer:"I don't think that is a good idea", explanation:"لا أظن أنها فكرة جيدة", xp:16 },
      { id:"ng1-t2-5", type:"translate", arabic:"أنا لا أحب الاستيقاظ مبكراً", options:["I don't like waking up early","I doesn't like waking up early","I don't likes waking up early","I not like waking up early"], correctAnswer:"I don't like waking up early", explanation:"don't like = لا أحب", xp:16 },
      { id:"ng1-t2-6", type:"listen_select", listenSentence:"we don't understand", options:["don't","doesn't","didn't","aren't"], correctAnswer:"don't", explanation:"we don't understand = لا نفهم", xp:15 },
      { id:"ng1-t2-7", type:"word_order", sentence:"You don't have to come if you are busy", correctAnswer:"You don't have to come if you are busy", explanation:"لست مضطراً للحضور إن كنت مشغولاً", xp:15 },
      { id:"ng1-t2-8", type:"fill_blank", blankSentence:"My friends ___ like spicy food", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"friends جمع → don't", xp:15 },
    ],
    t3: [],
  },

  "النفي بـ doesn't": {
    t0: [
      { id:"ng2-t0-1", type:"translate", arabic:"لا (مع he)", options:["doesn't","don't","not","no"], correctAnswer:"doesn't", explanation:"he doesn't = هو لا", xp:10 },
      { id:"ng2-t0-2", type:"word_order", sentence:"He doesn't like tea", correctAnswer:"He doesn't like tea", explanation:"هو لا يحب الشاي", xp:12 },
      { id:"ng2-t0-3", type:"listen_select", listenSentence:"she doesn't know", options:["doesn't","don't","didn't","won't"], correctAnswer:"doesn't", explanation:"she doesn't = هي لا", xp:10 },
      { id:"ng2-t0-4", type:"fill_blank", blankSentence:"She ___ eat fish", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"she doesn't eat = هي لا تأكل", xp:12 },
      { id:"ng2-t0-5", type:"translate", arabic:"هو لا يعمل هنا", options:["He doesn't work here","He don't work here","He doesn't works here","He not work here"], correctAnswer:"He doesn't work here", explanation:"doesn't work = لا يعمل", xp:12 },
      { id:"ng2-t0-6", type:"word_order", sentence:"It doesn't matter", correctAnswer:"It doesn't matter", explanation:"لا يهمّ", xp:12 },
      { id:"ng2-t0-7", type:"fill_blank", blankSentence:"He ___ have a car", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"he doesn't have = ليس لديه", xp:12 },
      { id:"ng2-t0-8", type:"listen_select", listenSentence:"it doesn't work", options:["doesn't","don't","didn't","won't"], correctAnswer:"doesn't", explanation:"it doesn't work = لا يعمل", xp:12 },
      { id:"ng2-t0-9", type:"matching", pairs:[{en:"he doesn't",ar:"هو لا"},{en:"she doesn't",ar:"هي لا"},{en:"it doesn't",ar:"إنه لا"},{en:"does not",ar:"لا (مطوّلة)"},{en:"doesn't like",ar:"لا يحب"},{en:"doesn't matter",ar:"لا يهمّ"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ng2-t1-1", type:"word_order", sentence:"She doesn't want to leave", correctAnswer:"She doesn't want to leave", explanation:"هي لا تريد المغادرة", xp:14 },
      { id:"ng2-t1-2", type:"translate", arabic:"هو لا يتكلّم الإنجليزية", options:["He doesn't speak English","He don't speak English","He doesn't speaks English","He not speak English"], correctAnswer:"He doesn't speak English", explanation:"doesn't speak = لا يتكلّم", xp:14 },
      { id:"ng2-t1-3", type:"listen_select", listenSentence:"he doesn't care", options:["doesn't","don't","didn't","won't"], correctAnswer:"doesn't", explanation:"he doesn't care = لا يهتمّ", xp:13 },
      { id:"ng2-t1-4", type:"fill_blank", blankSentence:"My brother ___ play football", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"brother مفرد → doesn't", xp:14 },
      { id:"ng2-t1-5", type:"word_order", sentence:"This phone doesn't work", correctAnswer:"This phone doesn't work", explanation:"هذا الهاتف لا يعمل", xp:14 },
      { id:"ng2-t1-6", type:"translate", arabic:"هي لا تشرب القهوة", options:["She doesn't drink coffee","She don't drink coffee","She doesn't drinks coffee","She not drink coffee"], correctAnswer:"She doesn't drink coffee", explanation:"doesn't drink = لا تشرب", xp:13 },
      { id:"ng2-t1-7", type:"listen_select", listenSentence:"she doesn't agree", options:["doesn't","don't","didn't","aren't"], correctAnswer:"doesn't", explanation:"she doesn't agree = لا توافق", xp:13 },
      { id:"ng2-t1-8", type:"word_order", sentence:"He doesn't have any money", correctAnswer:"He doesn't have any money", explanation:"ليس لديه مال", xp:14 },
      { id:"ng2-t1-9", type:"matching", pairs:[{en:"doesn't speak",ar:"لا يتكلّم"},{en:"doesn't work",ar:"لا يعمل"},{en:"doesn't care",ar:"لا يهتمّ"},{en:"doesn't have",ar:"ليس لديه"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ng2-t2-1", type:"word_order", sentence:"She doesn't usually watch TV at night", correctAnswer:"She doesn't usually watch TV at night", explanation:"عادةً لا تشاهد التلفاز ليلاً", xp:16 },
      { id:"ng2-t2-2", type:"translate", arabic:"هو لا يحب الاستيقاظ مبكراً", options:["He doesn't like waking up early","He don't like waking up early","He doesn't likes waking up early","He not like waking up early"], correctAnswer:"He doesn't like waking up early", explanation:"doesn't like = لا يحب", xp:16 },
      { id:"ng2-t2-3", type:"fill_blank", blankSentence:"The shop ___ open on Sundays", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"shop مفرد → doesn't", xp:15 },
      { id:"ng2-t2-4", type:"word_order", sentence:"My sister doesn't eat vegetables at all", correctAnswer:"My sister doesn't eat vegetables at all", explanation:"أختي لا تأكل الخضار إطلاقاً", xp:16 },
      { id:"ng2-t2-5", type:"translate", arabic:"إنه لا يعرف الإجابة", options:["He doesn't know the answer","He don't know the answer","He doesn't knows the answer","He not know the answer"], correctAnswer:"He doesn't know the answer", explanation:"doesn't know = لا يعرف", xp:16 },
      { id:"ng2-t2-6", type:"listen_select", listenSentence:"it doesn't matter now", options:["doesn't","don't","didn't","aren't"], correctAnswer:"doesn't", explanation:"it doesn't matter = لا يهمّ", xp:15 },
      { id:"ng2-t2-7", type:"word_order", sentence:"She doesn't believe in luck", correctAnswer:"She doesn't believe in luck", explanation:"هي لا تؤمن بالحظ", xp:15 },
      { id:"ng2-t2-8", type:"fill_blank", blankSentence:"My father ___ drink coffee anymore", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"father مفرد → doesn't", xp:15 },
    ],
    t3: [],
  },

  "النفي في جمل": {
    t0: [
      { id:"ng3-t0-1", type:"fill_blank", blankSentence:"I ___ like rain", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"I → don't", xp:10 },
      { id:"ng3-t0-2", type:"fill_blank", blankSentence:"He ___ like rain", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"He → doesn't", xp:12 },
      { id:"ng3-t0-3", type:"word_order", sentence:"We don't have school today", correctAnswer:"We don't have school today", explanation:"ليس لدينا مدرسة اليوم", xp:12 },
      { id:"ng3-t0-4", type:"translate", arabic:"هي لا تلعب التنس", options:["She doesn't play tennis","She don't play tennis","She doesn't plays tennis","She not play tennis"], correctAnswer:"She doesn't play tennis", explanation:"She → doesn't", xp:12 },
      { id:"ng3-t0-5", type:"fill_blank", blankSentence:"They ___ work on weekends", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"They → don't", xp:12 },
      { id:"ng3-t0-6", type:"word_order", sentence:"It doesn't rain here", correctAnswer:"It doesn't rain here", explanation:"لا تمطر هنا", xp:12 },
      { id:"ng3-t0-7", type:"translate", arabic:"أنا لا أحب الأفلام المخيفة", options:["I don't like scary movies","I doesn't like scary movies","I don't likes scary movies","I not like scary movies"], correctAnswer:"I don't like scary movies", explanation:"I → don't", xp:10 },
      { id:"ng3-t0-8", type:"fill_blank", blankSentence:"My cat ___ eat fish", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"cat مفرد → doesn't", xp:12 },
      { id:"ng3-t0-9", type:"matching", pairs:[{en:"I don't",ar:"أنا لا"},{en:"he doesn't",ar:"هو لا"},{en:"they don't",ar:"هم لا"},{en:"she doesn't",ar:"هي لا"},{en:"we don't",ar:"نحن لا"},{en:"it doesn't",ar:"إنه لا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ng3-t1-1", type:"word_order", sentence:"My friends don't like loud music", correctAnswer:"My friends don't like loud music", explanation:"أصدقائي لا يحبون الموسيقى الصاخبة", xp:14 },
      { id:"ng3-t1-2", type:"translate", arabic:"أبي لا يدخّن", options:["My father doesn't smoke","My father don't smoke","My father doesn't smokes","My father not smoke"], correctAnswer:"My father doesn't smoke", explanation:"father مفرد → doesn't", xp:14 },
      { id:"ng3-t1-3", type:"fill_blank", blankSentence:"The children ___ go to school today", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"children جمع → don't", xp:13 },
      { id:"ng3-t1-4", type:"word_order", sentence:"She doesn't understand the question", correctAnswer:"She doesn't understand the question", explanation:"هي لا تفهم السؤال", xp:14 },
      { id:"ng3-t1-5", type:"translate", arabic:"نحن لا نشاهد التلفاز كثيراً", options:["We don't watch TV much","We doesn't watch TV much","We don't watches TV much","We not watch TV much"], correctAnswer:"We don't watch TV much", explanation:"We → don't", xp:14 },
      { id:"ng3-t1-6", type:"fill_blank", blankSentence:"He ___ speak Arabic", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"He → doesn't", xp:13 },
      { id:"ng3-t1-7", type:"word_order", sentence:"I don't know where he lives", correctAnswer:"I don't know where he lives", explanation:"لا أعرف أين يعيش", xp:14 },
      { id:"ng3-t1-8", type:"translate", arabic:"القطار لا يتوقّف هنا", options:["The train doesn't stop here","The train don't stop here","The train doesn't stops here","The train not stop here"], correctAnswer:"The train doesn't stop here", explanation:"train مفرد → doesn't", xp:14 },
      { id:"ng3-t1-9", type:"matching", pairs:[{en:"friends don't",ar:"الأصدقاء لا"},{en:"father doesn't",ar:"الأب لا"},{en:"children don't",ar:"الأطفال لا"},{en:"train doesn't",ar:"القطار لا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ng3-t2-1", type:"word_order", sentence:"My parents don't allow me to stay up late", correctAnswer:"My parents don't allow me to stay up late", explanation:"والداي لا يسمحان لي بالسهر", xp:16 },
      { id:"ng3-t2-2", type:"translate", arabic:"هي لا تشرب القهوة في المساء أبداً", options:["She doesn't drink coffee in the evening","She don't drink coffee in the evening","She doesn't drinks coffee in the evening","She not drink coffee in the evening"], correctAnswer:"She doesn't drink coffee in the evening", explanation:"doesn't drink = لا تشرب", xp:16 },
      { id:"ng3-t2-3", type:"fill_blank", blankSentence:"This restaurant ___ serve breakfast", blankOptions:["doesn't","don't","not"], correctAnswer:"doesn't", explanation:"restaurant مفرد → doesn't", xp:15 },
      { id:"ng3-t2-4", type:"word_order", sentence:"We don't usually travel during the winter", correctAnswer:"We don't usually travel during the winter", explanation:"عادةً لا نسافر في الشتاء", xp:16 },
      { id:"ng3-t2-5", type:"translate", arabic:"هو لا يفهم لماذا أنا حزين", options:["He doesn't understand why I am sad","He don't understand why I am sad","He doesn't understands why I am sad","He not understand why I am sad"], correctAnswer:"He doesn't understand why I am sad", explanation:"doesn't understand = لا يفهم", xp:16 },
      { id:"ng3-t2-6", type:"listen_select", listenSentence:"they don't agree with us", options:["don't","doesn't","didn't","aren't"], correctAnswer:"don't", explanation:"they don't agree = لا يوافقون", xp:15 },
      { id:"ng3-t2-7", type:"word_order", sentence:"My grandmother doesn't use a smartphone", correctAnswer:"My grandmother doesn't use a smartphone", explanation:"جدّتي لا تستخدم هاتفاً ذكياً", xp:15 },
      { id:"ng3-t2-8", type:"fill_blank", blankSentence:"Cats ___ like water", blankOptions:["don't","doesn't","not"], correctAnswer:"don't", explanation:"cats جمع → don't", xp:15 },
    ],
    t3: [],
  },
};
