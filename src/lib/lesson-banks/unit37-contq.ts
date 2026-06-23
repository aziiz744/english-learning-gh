import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 37: كوّن أسئلة في المضارع المستمر
//   درس 1: أسئلة Are you...ing? — Are you working?
//   درس 2: أسئلة بكلمات الاستفهام — What are you doing?
//   درس 3: إجابات قصيرة — Yes I am, No she isn't
// ══════════════════════════════════════════════════════════════

export const unit37ContQBank: Record<string, TieredBank> = {

  "أسئلة المستمر": {
    t0: [
      { id:"cq1-t0-1", type:"translate", arabic:"هل تعمل (الآن)؟", options:["Are you working?","Do you working?","Are you work?","You are working?"], correctAnswer:"Are you working?", explanation:"Are you working? = هل تعمل الآن؟", xp:10 },
      { id:"cq1-t0-2", type:"word_order", sentence:"Are you reading", correctAnswer:"Are you reading", explanation:"هل تقرأ؟", xp:12 },
      { id:"cq1-t0-3", type:"listen_select", listenSentence:"is he sleeping", options:["is","are","am","do"], correctAnswer:"is", explanation:"Is he sleeping? = هل ينام؟", xp:10 },
      { id:"cq1-t0-4", type:"translate", arabic:"هل هي تأكل؟", options:["Is she eating?","Are she eating?","Is she eat?","She is eating?"], correctAnswer:"Is she eating?", explanation:"Is she eating? = هل تأكل؟", xp:12 },
      { id:"cq1-t0-5", type:"fill_blank", blankSentence:"___ you watching TV", blankOptions:["Are","Is","Do"], correctAnswer:"Are", explanation:"Are you watching? = هل تشاهد؟", xp:12 },
      { id:"cq1-t0-6", type:"word_order", sentence:"Is it raining now", correctAnswer:"Is it raining now", explanation:"هل تمطر الآن؟", xp:12 },
      { id:"cq1-t0-7", type:"fill_blank", blankSentence:"___ they playing outside", blankOptions:["Are","Is","Do"], correctAnswer:"Are", explanation:"Are they playing? = هل يلعبون؟", xp:12 },
      { id:"cq1-t0-8", type:"listen_select", listenSentence:"are you listening", options:["are","is","am","do"], correctAnswer:"are", explanation:"Are you listening? = هل تستمع؟", xp:12 },
      { id:"cq1-t0-9", type:"matching", pairs:[{en:"Are you working?",ar:"هل تعمل؟"},{en:"Is he sleeping?",ar:"هل ينام؟"},{en:"Is she eating?",ar:"هل تأكل؟"},{en:"Are they playing?",ar:"هل يلعبون؟"},{en:"Is it raining?",ar:"هل تمطر؟"},{en:"Am I dreaming?",ar:"هل أحلم؟"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cq1-t1-1", type:"word_order", sentence:"Are you studying for the exam", correctAnswer:"Are you studying for the exam", explanation:"هل تدرس للامتحان؟", xp:14 },
      { id:"cq1-t1-2", type:"translate", arabic:"هل هم ينتظرون الحافلة؟", options:["Are they waiting for the bus?","Is they waiting for the bus?","Are they wait for the bus?","Do they waiting for the bus?"], correctAnswer:"Are they waiting for the bus?", explanation:"Are they waiting?", xp:14 },
      { id:"cq1-t1-3", type:"listen_select", listenSentence:"is she cooking dinner", options:["is","are","am","do"], correctAnswer:"is", explanation:"Is she cooking? = هل تطبخ؟", xp:13 },
      { id:"cq1-t1-4", type:"fill_blank", blankSentence:"___ your brother sleeping", blankOptions:["Is","Are","Do"], correctAnswer:"Is", explanation:"brother مفرد → Is", xp:14 },
      { id:"cq1-t1-5", type:"word_order", sentence:"Are the children playing in the park", correctAnswer:"Are the children playing in the park", explanation:"هل يلعب الأطفال في الحديقة؟", xp:14 },
      { id:"cq1-t1-6", type:"translate", arabic:"هل تستمع إليّ؟", options:["Are you listening to me?","Is you listening to me?","Are you listen to me?","Do you listening to me?"], correctAnswer:"Are you listening to me?", explanation:"Are you listening to me?", xp:13 },
      { id:"cq1-t1-7", type:"listen_select", listenSentence:"are they coming", options:["are","is","am","do"], correctAnswer:"are", explanation:"Are they coming? = هل يأتون؟", xp:13 },
      { id:"cq1-t1-8", type:"word_order", sentence:"Is your phone charging now", correctAnswer:"Is your phone charging now", explanation:"هل هاتفك يشحن الآن؟", xp:14 },
      { id:"cq1-t1-9", type:"matching", pairs:[{en:"Are you studying?",ar:"هل تدرس؟"},{en:"Is she cooking?",ar:"هل تطبخ؟"},{en:"Are they waiting?",ar:"هل ينتظرون؟"},{en:"Is he sleeping?",ar:"هل ينام؟"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cq1-t2-1", type:"word_order", sentence:"Are you enjoying your holiday so far", correctAnswer:"Are you enjoying your holiday so far", explanation:"هل تستمتع بعطلتك حتى الآن؟", xp:16 },
      { id:"cq1-t2-2", type:"translate", arabic:"هل والداك يشاهدان التلفاز الآن؟", options:["Are your parents watching TV now?","Is your parents watching TV now?","Are your parents watch TV now?","Do your parents watching TV now?"], correctAnswer:"Are your parents watching TV now?", explanation:"parents جمع → Are", xp:16 },
      { id:"cq1-t2-3", type:"fill_blank", blankSentence:"___ the baby crying again", blankOptions:["Is","Are","Do"], correctAnswer:"Is", explanation:"baby مفرد → Is", xp:15 },
      { id:"cq1-t2-4", type:"word_order", sentence:"Are they building a new shopping center", correctAnswer:"Are they building a new shopping center", explanation:"هل يبنون مركزاً تجارياً جديداً؟", xp:16 },
      { id:"cq1-t2-5", type:"translate", arabic:"هل تعمل على شيء مهمّ؟", options:["Are you working on something important?","Is you working on something important?","Are you work on something important?","Do you working on something important?"], correctAnswer:"Are you working on something important?", explanation:"Are you working on?", xp:16 },
      { id:"cq1-t2-6", type:"listen_select", listenSentence:"is everyone enjoying", options:["is","are","am","do"], correctAnswer:"is", explanation:"everyone مفرد → Is", xp:15 },
      { id:"cq1-t2-7", type:"word_order", sentence:"Is the team preparing for the match", correctAnswer:"Is the team preparing for the match", explanation:"هل يستعدّ الفريق للمباراة؟", xp:15 },
      { id:"cq1-t2-8", type:"fill_blank", blankSentence:"___ you feeling better now", blankOptions:["Are","Is","Do"], correctAnswer:"Are", explanation:"Are you feeling? = هل تشعر؟", xp:15 },
    ],
    t3: [],
  },

  "أسئلة الاستفهام": {
    t0: [
      { id:"cq2-t0-1", type:"translate", arabic:"ماذا تفعل؟", options:["What are you doing?","What you doing?","What are you do?","What do you doing?"], correctAnswer:"What are you doing?", explanation:"What are you doing? = ماذا تفعل؟", xp:10 },
      { id:"cq2-t0-2", type:"word_order", sentence:"What are you reading", correctAnswer:"What are you reading", explanation:"ماذا تقرأ؟", xp:12 },
      { id:"cq2-t0-3", type:"listen_select", listenSentence:"where is she going", options:["Where","What","Who","Why"], correctAnswer:"Where", explanation:"Where is she going? = إلى أين تذهب؟", xp:10 },
      { id:"cq2-t0-4", type:"translate", arabic:"إلى أين تذهب؟", options:["Where are you going?","Where you going?","Where are you go?","Where do you going?"], correctAnswer:"Where are you going?", explanation:"Where are you going?", xp:12 },
      { id:"cq2-t0-5", type:"fill_blank", blankSentence:"What ___ they doing", blankOptions:["are","is","do"], correctAnswer:"are", explanation:"What are they doing?", xp:12 },
      { id:"cq2-t0-6", type:"word_order", sentence:"Why are you crying", correctAnswer:"Why are you crying", explanation:"لماذا تبكي؟", xp:12 },
      { id:"cq2-t0-7", type:"listen_select", listenSentence:"what is he eating", options:["What","Where","Who","Why"], correctAnswer:"What", explanation:"What is he eating? = ماذا يأكل؟", xp:12 },
      { id:"cq2-t0-8", type:"translate", arabic:"من تنتظر؟", options:["Who are you waiting for?","Who you waiting for?","Who are you wait for?","Who do you waiting for?"], correctAnswer:"Who are you waiting for?", explanation:"Who are you waiting for?", xp:10 },
      { id:"cq2-t0-9", type:"matching", pairs:[{en:"What are you doing?",ar:"ماذا تفعل؟"},{en:"Where are you going?",ar:"إلى أين تذهب؟"},{en:"Why are you crying?",ar:"لماذا تبكي؟"},{en:"Who is coming?",ar:"من قادم؟"},{en:"How are you feeling?",ar:"كيف تشعر؟"},{en:"When are you leaving?",ar:"متى تغادر؟"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cq2-t1-1", type:"word_order", sentence:"What are you cooking for dinner", correctAnswer:"What are you cooking for dinner", explanation:"ماذا تطبخ للعشاء؟", xp:14 },
      { id:"cq2-t1-2", type:"translate", arabic:"لماذا يضحك الجميع؟", options:["Why is everyone laughing?","Why are everyone laughing?","Why is everyone laugh?","Why do everyone laughing?"], correctAnswer:"Why is everyone laughing?", explanation:"everyone مفرد → is", xp:14 },
      { id:"cq2-t1-3", type:"listen_select", listenSentence:"where are they staying", options:["Where","What","Who","Why"], correctAnswer:"Where", explanation:"Where are they staying?", xp:13 },
      { id:"cq2-t1-4", type:"fill_blank", blankSentence:"What ___ she wearing today", blankOptions:["is","are","do"], correctAnswer:"is", explanation:"she مفرد → is", xp:14 },
      { id:"cq2-t1-5", type:"word_order", sentence:"How are the children doing at school", correctAnswer:"How are the children doing at school", explanation:"كيف حال الأطفال في المدرسة؟", xp:14 },
      { id:"cq2-t1-6", type:"translate", arabic:"متى تغادرون؟", options:["When are you leaving?","When you leaving?","When are you leave?","When do you leaving?"], correctAnswer:"When are you leaving?", explanation:"When are you leaving?", xp:13 },
      { id:"cq2-t1-7", type:"listen_select", listenSentence:"who is she talking to", options:["Who","What","Where","Why"], correctAnswer:"Who", explanation:"Who is she talking to?", xp:13 },
      { id:"cq2-t1-8", type:"word_order", sentence:"What is happening over there", correctAnswer:"What is happening over there", explanation:"ماذا يحدث هناك؟", xp:14 },
      { id:"cq2-t1-9", type:"matching", pairs:[{en:"What are you cooking?",ar:"ماذا تطبخ؟"},{en:"Where are they staying?",ar:"أين يقيمون؟"},{en:"When are you leaving?",ar:"متى تغادر؟"},{en:"How are they doing?",ar:"كيف حالهم؟"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cq2-t2-1", type:"word_order", sentence:"What are you planning to do this weekend", correctAnswer:"What are you planning to do this weekend", explanation:"ماذا تخطّط أن تفعل نهاية الأسبوع؟", xp:16 },
      { id:"cq2-t2-2", type:"translate", arabic:"لماذا ينظر إليّ هكذا؟", options:["Why is he looking at me like that?","Why are he looking at me like that?","Why is he look at me like that?","Why do he looking at me like that?"], correctAnswer:"Why is he looking at me like that?", explanation:"Why is he looking?", xp:16 },
      { id:"cq2-t2-3", type:"fill_blank", blankSentence:"What ___ your friends discussing", blankOptions:["are","is","do"], correctAnswer:"are", explanation:"friends جمع → are", xp:15 },
      { id:"cq2-t2-4", type:"word_order", sentence:"Where are you thinking of going on vacation", correctAnswer:"Where are you thinking of going on vacation", explanation:"إلى أين تفكّر في الذهاب في الإجازة؟", xp:16 },
      { id:"cq2-t2-5", type:"translate", arabic:"كيف يتقدّم المشروع؟", options:["How is the project progressing?","How are the project progressing?","How is the project progress?","How do the project progressing?"], correctAnswer:"How is the project progressing?", explanation:"project مفرد → is", xp:16 },
      { id:"cq2-t2-6", type:"listen_select", listenSentence:"what are they building", options:["What","Where","Who","Why"], correctAnswer:"What", explanation:"What are they building?", xp:15 },
      { id:"cq2-t2-7", type:"word_order", sentence:"Why is the baby crying so loudly", correctAnswer:"Why is the baby crying so loudly", explanation:"لماذا يبكي الطفل بصوت عالٍ؟", xp:15 },
      { id:"cq2-t2-8", type:"fill_blank", blankSentence:"Who ___ you texting right now", blankOptions:["are","is","do"], correctAnswer:"are", explanation:"Who are you texting?", xp:15 },
    ],
    t3: [],
  },

  "إجابات قصيرة": {
    t0: [
      { id:"cq3-t0-1", type:"translate", arabic:"نعم، أنا كذلك", options:["Yes, I am","Yes, I do","Yes, I is","Yes, am I"], correctAnswer:"Yes, I am", explanation:"Yes, I am = نعم (للمستمر)", xp:10 },
      { id:"cq3-t0-2", type:"word_order", sentence:"Yes she is", correctAnswer:"Yes she is", explanation:"نعم، هي كذلك", xp:12 },
      { id:"cq3-t0-3", type:"listen_select", listenSentence:"no he isn't", options:["isn't","aren't","don't","doesn't"], correctAnswer:"isn't", explanation:"No, he isn't = لا، هو ليس", xp:10 },
      { id:"cq3-t0-4", type:"translate", arabic:"لا، هم ليسوا كذلك", options:["No, they aren't","No, they don't","No, they isn't","No, they not"], correctAnswer:"No, they aren't", explanation:"No, they aren't", xp:12 },
      { id:"cq3-t0-5", type:"fill_blank", blankSentence:"Yes, we ___", blankOptions:["are","is","do"], correctAnswer:"are", explanation:"Yes, we are = نعم نحن", xp:12 },
      { id:"cq3-t0-6", type:"word_order", sentence:"No I am not", correctAnswer:"No I am not", explanation:"لا، أنا لست", xp:12 },
      { id:"cq3-t0-7", type:"listen_select", listenSentence:"yes it is", options:["is","are","am","do"], correctAnswer:"is", explanation:"Yes, it is = نعم إنه كذلك", xp:12 },
      { id:"cq3-t0-8", type:"translate", arabic:"لا، هي ليست كذلك", options:["No, she isn't","No, she doesn't","No, she aren't","No, she not"], correctAnswer:"No, she isn't", explanation:"No, she isn't", xp:10 },
      { id:"cq3-t0-9", type:"matching", pairs:[{en:"Yes, I am",ar:"نعم أنا"},{en:"No, I'm not",ar:"لا، لست"},{en:"Yes, he is",ar:"نعم هو"},{en:"No, he isn't",ar:"لا، هو ليس"},{en:"Yes, they are",ar:"نعم هم"},{en:"No, they aren't",ar:"لا، ليسوا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cq3-t1-1", type:"word_order", sentence:"No they aren't coming today", correctAnswer:"No they aren't coming today", explanation:"لا، هم لا يأتون اليوم", xp:14 },
      { id:"cq3-t1-2", type:"translate", arabic:"نعم، إنه يعمل الآن", options:["Yes, he is working now","Yes, he are working now","Yes, he is work now","Yes, he working now"], correctAnswer:"Yes, he is working now", explanation:"he is working = يعمل الآن", xp:14 },
      { id:"cq3-t1-3", type:"listen_select", listenSentence:"no I'm not", options:["I'm not","I isn't","I aren't","I don't"], correctAnswer:"I'm not", explanation:"No, I'm not", xp:13 },
      { id:"cq3-t1-4", type:"fill_blank", blankSentence:"Yes, she ___ studying", blankOptions:["is","are","do"], correctAnswer:"is", explanation:"she is studying", xp:14 },
      { id:"cq3-t1-5", type:"word_order", sentence:"Yes we are enjoying it", correctAnswer:"Yes we are enjoying it", explanation:"نعم، نستمتع به", xp:14 },
      { id:"cq3-t1-6", type:"translate", arabic:"لا، إنها لا تنام", options:["No, she isn't sleeping","No, she aren't sleeping","No, she don't sleeping","No, she not sleeping"], correctAnswer:"No, she isn't sleeping", explanation:"she isn't sleeping", xp:13 },
      { id:"cq3-t1-7", type:"listen_select", listenSentence:"yes they are", options:["are","is","am","do"], correctAnswer:"are", explanation:"Yes, they are", xp:13 },
      { id:"cq3-t1-8", type:"word_order", sentence:"No it isn't working", correctAnswer:"No it isn't working", explanation:"لا، إنه لا يعمل", xp:14 },
      { id:"cq3-t1-9", type:"matching", pairs:[{en:"Yes, we are",ar:"نعم نحن"},{en:"No, we aren't",ar:"لا، لسنا"},{en:"Yes, it is",ar:"نعم إنه"},{en:"No, it isn't",ar:"لا، إنه ليس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cq3-t2-1", type:"word_order", sentence:"Yes I am really enjoying this class", correctAnswer:"Yes I am really enjoying this class", explanation:"نعم، أستمتع حقاً بهذا الصف", xp:16 },
      { id:"cq3-t2-2", type:"translate", arabic:"لا، إنهم لا يعملون اليوم", options:["No, they aren't working today","No, they isn't working today","No, they don't working today","No, they not working today"], correctAnswer:"No, they aren't working today", explanation:"they aren't working", xp:16 },
      { id:"cq3-t2-3", type:"fill_blank", blankSentence:"Yes, the kids ___ having fun", blankOptions:["are","is","do"], correctAnswer:"are", explanation:"kids جمع → are", xp:15 },
      { id:"cq3-t2-4", type:"word_order", sentence:"No she isn't feeling well today", correctAnswer:"No she isn't feeling well today", explanation:"لا، هي ليست بخير اليوم", xp:16 },
      { id:"cq3-t2-5", type:"translate", arabic:"نعم، أنا متأكّد أنهم قادمون", options:["Yes, I am sure they are coming","Yes, I am sure they is coming","Yes, I sure they are coming","Yes, I am sure they coming"], correctAnswer:"Yes, I am sure they are coming", explanation:"they are coming", xp:16 },
      { id:"cq3-t2-6", type:"listen_select", listenSentence:"no not right now", options:["now","know","new","no"], correctAnswer:"now", explanation:"No, not right now = لا، ليس الآن", xp:15 },
      { id:"cq3-t2-7", type:"word_order", sentence:"Yes he is doing a great job", correctAnswer:"Yes he is doing a great job", explanation:"نعم، يقوم بعمل رائع", xp:15 },
      { id:"cq3-t2-8", type:"fill_blank", blankSentence:"No, I ___ not waiting for anyone", blankOptions:["am","is","are"], correctAnswer:"am", explanation:"I am not = أنا لست", xp:15 },
    ],
    t3: [],
  },
};
