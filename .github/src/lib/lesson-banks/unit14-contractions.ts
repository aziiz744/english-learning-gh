import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 14: اختصارات الزمن المضارع من "يكون" (I'm, you're, he's)
//   درس 1: الاختصارات الأساسية — I'm, you're, he's, she's
//   درس 2: استخدام الاختصارات في جمل
//   درس 3: اختصارات النفي — isn't, aren't
// ══════════════════════════════════════════════════════════════

export const unit14ContractionsBank: Record<string, TieredBank> = {

  "الاختصارات الأساسية": {
    t0: [
      { id:"ct1-t0-1", type:"translate", arabic:"أنا (مختصر)", options:["I'm","you're","he's","we're"], correctAnswer:"I'm", explanation:"I'm = I am", xp:10 },
      { id:"ct1-t0-2", type:"translate", arabic:"أنت (مختصر)", options:["you're","I'm","he's","they're"], correctAnswer:"you're", explanation:"you're = you are", xp:10 },
      { id:"ct1-t0-3", type:"translate", arabic:"هو (مختصر)", options:["he's","she's","it's","we're"], correctAnswer:"he's", explanation:"he's = he is", xp:10 },
      { id:"ct1-t0-4", type:"word_order", sentence:"I'm a teacher", correctAnswer:"I'm a teacher", explanation:"I'm = I am — أنا معلّم", xp:12 },
      { id:"ct1-t0-5", type:"fill_blank", blankSentence:"___ very happy", blankOptions:["I'm","Is","Are"], correctAnswer:"I'm", explanation:"I'm = I am", xp:12 },
      { id:"ct1-t0-6", type:"translate", arabic:"هي (مختصر)", options:["she's","he's","it's","you're"], correctAnswer:"she's", explanation:"she's = she is", xp:10 },
      { id:"ct1-t0-7", type:"listen_select", listenSentence:"he's my brother", options:["he's","she's","it's","we're"], correctAnswer:"he's", explanation:"he's = he is", xp:12 },
      { id:"ct1-t0-8", type:"fill_blank", blankSentence:"___ a nice day", blankOptions:["It's","Is","Am"], correctAnswer:"It's", explanation:"It's = It is", xp:12 },
      { id:"ct1-t0-9", type:"matching", pairs:[{en:"I'm",ar:"I am"},{en:"you're",ar:"you are"},{en:"he's",ar:"he is"},{en:"she's",ar:"she is"},{en:"it's",ar:"it is"},{en:"we're",ar:"we are"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ct1-t1-1", type:"translate", arabic:"نحن (مختصر)", options:["we're","they're","you're","I'm"], correctAnswer:"we're", explanation:"we're = we are", xp:12 },
      { id:"ct1-t1-2", type:"translate", arabic:"هم (مختصر)", options:["they're","we're","you're","he's"], correctAnswer:"they're", explanation:"they're = they are", xp:12 },
      { id:"ct1-t1-3", type:"word_order", sentence:"You're my best friend", correctAnswer:"You're my best friend", explanation:"you're = you are", xp:14 },
      { id:"ct1-t1-4", type:"fill_blank", blankSentence:"___ from Egypt", blankOptions:["We're","Is","Am"], correctAnswer:"We're", explanation:"We're = We are", xp:14 },
      { id:"ct1-t1-5", type:"listen_select", listenSentence:"they're at home", options:["they're","we're","you're","he's"], correctAnswer:"they're", explanation:"they're = they are", xp:13 },
      { id:"ct1-t1-6", type:"word_order", sentence:"She's a good doctor", correctAnswer:"She's a good doctor", explanation:"she's = she is", xp:14 },
      { id:"ct1-t1-7", type:"translate", arabic:"إنه مشغول (مختصر)", options:["He's busy","He busy","He'is busy","His busy"], correctAnswer:"He's busy", explanation:"He's = He is", xp:13 },
      { id:"ct1-t1-8", type:"fill_blank", blankSentence:"___ ready to go", blankOptions:["They're","Is","Am"], correctAnswer:"They're", explanation:"They're = They are", xp:14 },
      { id:"ct1-t1-9", type:"matching", pairs:[{en:"we're",ar:"we are"},{en:"they're",ar:"they are"},{en:"he's",ar:"he is"},{en:"it's",ar:"it is"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ct1-t2-1", type:"word_order", sentence:"I'm happy to meet you", correctAnswer:"I'm happy to meet you", explanation:"أنا سعيد بلقائك", xp:16 },
      { id:"ct1-t2-2", type:"translate", arabic:"نحن جاهزون للامتحان", options:["We're ready for the exam","We ready for the exam","We're ready for exam","Were ready for the exam"], correctAnswer:"We're ready for the exam", explanation:"We're = We are", xp:16 },
      { id:"ct1-t2-3", type:"fill_blank", blankSentence:"___ the best team", blankOptions:["They're","Is","Am"], correctAnswer:"They're", explanation:"They're = They are", xp:15 },
      { id:"ct1-t2-4", type:"word_order", sentence:"She's always on time", correctAnswer:"She's always on time", explanation:"هي دائماً في الوقت", xp:16 },
      { id:"ct1-t2-5", type:"translate", arabic:"إنه يوم جميل اليوم", options:["It's a beautiful day today","Its a beautiful day today","It's beautiful day today","It a beautiful day today"], correctAnswer:"It's a beautiful day today", explanation:"It's = It is", xp:16 },
      { id:"ct1-t2-6", type:"listen_select", listenSentence:"you're very kind", options:["you're","we're","they're","he's"], correctAnswer:"you're", explanation:"you're = you are", xp:15 },
      { id:"ct1-t2-7", type:"word_order", sentence:"We're going to the park", correctAnswer:"We're going to the park", explanation:"نحن ذاهبون إلى الحديقة", xp:15 },
      { id:"ct1-t2-8", type:"fill_blank", blankSentence:"___ a great cook", blankOptions:["You're","Is","Am"], correctAnswer:"You're", explanation:"You're = You are", xp:15 },
    ],
    t3: [],
  },

  "الاختصارات في جمل": {
    t0: [
      { id:"ct2-t0-1", type:"word_order", sentence:"It's cold today", correctAnswer:"It's cold today", explanation:"الجو بارد اليوم", xp:12 },
      { id:"ct2-t0-2", type:"fill_blank", blankSentence:"___ my friend", blankOptions:["He's","Is","Am"], correctAnswer:"He's", explanation:"He's = He is", xp:10 },
      { id:"ct2-t0-3", type:"translate", arabic:"أنا جائع", options:["I'm hungry","I hungry","Im hungry","I am'm hungry"], correctAnswer:"I'm hungry", explanation:"I'm hungry = أنا جائع", xp:10 },
      { id:"ct2-t0-4", type:"word_order", sentence:"We're at school", correctAnswer:"We're at school", explanation:"نحن في المدرسة", xp:12 },
      { id:"ct2-t0-5", type:"listen_select", listenSentence:"it's raining", options:["it's","he's","she's","we're"], correctAnswer:"it's", explanation:"it's = it is", xp:12 },
      { id:"ct2-t0-6", type:"fill_blank", blankSentence:"___ a smart girl", blankOptions:["She's","Is","Am"], correctAnswer:"She's", explanation:"She's = She is", xp:12 },
      { id:"ct2-t0-7", type:"translate", arabic:"أنت متأخر", options:["You're late","You late","Youre late","You'are late"], correctAnswer:"You're late", explanation:"You're late = أنت متأخر", xp:10 },
      { id:"ct2-t0-8", type:"word_order", sentence:"They're good students", correctAnswer:"They're good students", explanation:"هم طلاب جيدون", xp:12 },
      { id:"ct2-t0-9", type:"matching", pairs:[{en:"I'm hungry",ar:"أنا جائع"},{en:"it's cold",ar:"الجو بارد"},{en:"he's late",ar:"هو متأخر"},{en:"we're here",ar:"نحن هنا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ct2-t1-1", type:"word_order", sentence:"I'm reading a good book", correctAnswer:"I'm reading a good book", explanation:"أنا أقرأ كتاباً جيداً", xp:14 },
      { id:"ct2-t1-2", type:"translate", arabic:"إنها معلّمتي", options:["She's my teacher","She my teacher","Shes my teacher","She's teacher my"], correctAnswer:"She's my teacher", explanation:"She's = She is", xp:14 },
      { id:"ct2-t1-3", type:"fill_blank", blankSentence:"___ working hard today", blankOptions:["We're","Is","Am"], correctAnswer:"We're", explanation:"We're = We are", xp:14 },
      { id:"ct2-t1-4", type:"listen_select", listenSentence:"he's a great player", options:["he's","she's","it's","we're"], correctAnswer:"he's", explanation:"he's = he is", xp:13 },
      { id:"ct2-t1-5", type:"word_order", sentence:"You're doing a great job", correctAnswer:"You're doing a great job", explanation:"أنت تقوم بعمل رائع", xp:14 },
      { id:"ct2-t1-6", type:"translate", arabic:"نحن في الطريق", options:["We're on the way","We on the way","Were on the way","We're on way"], correctAnswer:"We're on the way", explanation:"We're = We are", xp:14 },
      { id:"ct2-t1-7", type:"fill_blank", blankSentence:"___ very excited", blankOptions:["They're","Is","Am"], correctAnswer:"They're", explanation:"They're = They are", xp:13 },
      { id:"ct2-t1-8", type:"word_order", sentence:"It's time to go home", correctAnswer:"It's time to go home", explanation:"حان وقت العودة للمنزل", xp:14 },
      { id:"ct2-t1-9", type:"matching", pairs:[{en:"I'm",ar:"أنا"},{en:"you're",ar:"أنت"},{en:"we're",ar:"نحن"},{en:"they're",ar:"هم"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ct2-t2-1", type:"word_order", sentence:"I'm so glad you're here", correctAnswer:"I'm so glad you're here", explanation:"أنا سعيد جداً لوجودك هنا", xp:16 },
      { id:"ct2-t2-2", type:"translate", arabic:"إنهم في إجازة الآن", options:["They're on vacation now","They on vacation now","Theyre on vacation now","They're on vacation"], correctAnswer:"They're on vacation now", explanation:"They're = They are", xp:16 },
      { id:"ct2-t2-3", type:"fill_blank", blankSentence:"___ the most important person", blankOptions:["You're","Is","Am"], correctAnswer:"You're", explanation:"You're = You are", xp:15 },
      { id:"ct2-t2-4", type:"word_order", sentence:"She's the new manager here", correctAnswer:"She's the new manager here", explanation:"هي المديرة الجديدة هنا", xp:16 },
      { id:"ct2-t2-5", type:"translate", arabic:"نحن متحمسون لرؤيتك", options:["We're excited to see you","We excited to see you","Were excited to see you","We're excited see you"], correctAnswer:"We're excited to see you", explanation:"We're = We are", xp:16 },
      { id:"ct2-t2-6", type:"listen_select", listenSentence:"it's a wonderful idea", options:["it's","he's","she's","we're"], correctAnswer:"it's", explanation:"it's = it is", xp:15 },
      { id:"ct2-t2-7", type:"word_order", sentence:"He's the best in the class", correctAnswer:"He's the best in the class", explanation:"هو الأفضل في الصف", xp:15 },
      { id:"ct2-t2-8", type:"fill_blank", blankSentence:"___ always welcome here", blankOptions:["You're","Is","Am"], correctAnswer:"You're", explanation:"You're = You are", xp:15 },
    ],
    t3: [],
  },

  "اختصارات النفي": {
    t0: [
      { id:"ct3-t0-1", type:"translate", arabic:"ليس (مع he)", options:["isn't","aren't","am not","not is"], correctAnswer:"isn't", explanation:"isn't = is not", xp:10 },
      { id:"ct3-t0-2", type:"translate", arabic:"ليسوا (مع they)", options:["aren't","isn't","am not","not are"], correctAnswer:"aren't", explanation:"aren't = are not", xp:10 },
      { id:"ct3-t0-3", type:"word_order", sentence:"He isn't here", correctAnswer:"He isn't here", explanation:"هو ليس هنا", xp:12 },
      { id:"ct3-t0-4", type:"fill_blank", blankSentence:"She ___ at home", blankOptions:["isn't","aren't","am not"], correctAnswer:"isn't", explanation:"isn't = is not", xp:12 },
      { id:"ct3-t0-5", type:"listen_select", listenSentence:"they aren't ready", options:["aren't","isn't","am not","not"], correctAnswer:"aren't", explanation:"aren't = are not", xp:12 },
      { id:"ct3-t0-6", type:"translate", arabic:"إنه ليس متعباً", options:["He isn't tired","He aren't tired","He not tired","He isnt tired"], correctAnswer:"He isn't tired", explanation:"isn't = is not", xp:10 },
      { id:"ct3-t0-7", type:"word_order", sentence:"We aren't late", correctAnswer:"We aren't late", explanation:"نحن لسنا متأخرين", xp:12 },
      { id:"ct3-t0-8", type:"fill_blank", blankSentence:"The shops ___ open", blankOptions:["aren't","isn't","am not"], correctAnswer:"aren't", explanation:"shops جمع → aren't", xp:12 },
      { id:"ct3-t0-9", type:"matching", pairs:[{en:"isn't",ar:"is not"},{en:"aren't",ar:"are not"},{en:"I'm not",ar:"I am not"},{en:"it's not",ar:"it is not"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ct3-t1-1", type:"word_order", sentence:"I'm not angry with you", correctAnswer:"I'm not angry with you", explanation:"أنا لست غاضباً منك", xp:14 },
      { id:"ct3-t1-2", type:"translate", arabic:"إنها ليست في المنزل", options:["She isn't at home","She aren't at home","She not at home","She isnt at home"], correctAnswer:"She isn't at home", explanation:"isn't = is not", xp:14 },
      { id:"ct3-t1-3", type:"fill_blank", blankSentence:"They ___ from here", blankOptions:["aren't","isn't","am not"], correctAnswer:"aren't", explanation:"aren't = are not", xp:14 },
      { id:"ct3-t1-4", type:"listen_select", listenSentence:"it isn't cold", options:["isn't","aren't","am not","not"], correctAnswer:"isn't", explanation:"isn't = is not", xp:13 },
      { id:"ct3-t1-5", type:"word_order", sentence:"This isn't my bag", correctAnswer:"This isn't my bag", explanation:"هذه ليست حقيبتي", xp:14 },
      { id:"ct3-t1-6", type:"translate", arabic:"نحن لسنا جاهزين بعد", options:["We aren't ready yet","We isn't ready yet","We not ready yet","We arent ready yet"], correctAnswer:"We aren't ready yet", explanation:"aren't = are not", xp:14 },
      { id:"ct3-t1-7", type:"fill_blank", blankSentence:"He ___ a doctor", blankOptions:["isn't","aren't","am not"], correctAnswer:"isn't", explanation:"isn't = is not", xp:13 },
      { id:"ct3-t1-8", type:"word_order", sentence:"You aren't alone", correctAnswer:"You aren't alone", explanation:"أنت لست وحيداً", xp:14 },
      { id:"ct3-t1-9", type:"matching", pairs:[{en:"isn't here",ar:"ليس هنا"},{en:"aren't ready",ar:"ليسوا جاهزين"},{en:"isn't open",ar:"ليس مفتوحاً"},{en:"aren't late",ar:"ليسوا متأخرين"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ct3-t2-1", type:"word_order", sentence:"The weather isn't good today", correctAnswer:"The weather isn't good today", explanation:"الطقس ليس جيداً اليوم", xp:16 },
      { id:"ct3-t2-2", type:"translate", arabic:"هؤلاء الطلاب ليسوا في الصف", options:["These students aren't in class","These students isn't in class","These students aren't in the class","This students aren't in class"], correctAnswer:"These students aren't in the class", explanation:"aren't = are not", xp:16 },
      { id:"ct3-t2-3", type:"fill_blank", blankSentence:"I ___ sure about that", blankOptions:["am not","isn't","aren't"], correctAnswer:"am not", explanation:"مع I نستخدم am not", xp:15 },
      { id:"ct3-t2-4", type:"word_order", sentence:"This restaurant isn't expensive", correctAnswer:"This restaurant isn't expensive", explanation:"هذا المطعم ليس غالياً", xp:16 },
      { id:"ct3-t2-5", type:"translate", arabic:"إنهم ليسوا سعداء بالقرار", options:["They aren't happy with the decision","They isn't happy with the decision","They aren't happy with decision","They arent happy with the decision"], correctAnswer:"They aren't happy with the decision", explanation:"aren't = are not", xp:16 },
      { id:"ct3-t2-6", type:"listen_select", listenSentence:"she isn't busy now", options:["isn't","aren't","am not","not"], correctAnswer:"isn't", explanation:"isn't = is not", xp:15 },
      { id:"ct3-t2-7", type:"word_order", sentence:"We aren't ready for the test", correctAnswer:"We aren't ready for the test", explanation:"نحن لسنا جاهزين للاختبار", xp:15 },
      { id:"ct3-t2-8", type:"fill_blank", blankSentence:"The answer ___ correct", blankOptions:["isn't","aren't","am not"], correctAnswer:"isn't", explanation:"answer is → isn't", xp:15 },
    ],
    t3: [],
  },
};
