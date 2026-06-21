import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 22: استخدم ظروف التكرار والوقت
//   درس 1: ظروف التكرار — always, usually, sometimes, never
//   درس 2: عبارات التكرار — every day, once a week, twice
//   درس 3: استخدامها في جمل — موقع الظرف في الجملة
// ══════════════════════════════════════════════════════════════

export const unit22AdverbsBank: Record<string, TieredBank> = {

  "ظروف التكرار": {
    t0: [
      { id:"ad-pic-1", type:"picture_match", word:"always", arabic:"دائماً", pictureOptions:[{emoji:"💯",label:"always"},{emoji:"🔄",label:"usually"},{emoji:"🤷",label:"sometimes"},{emoji:"🚫",label:"never"}], correctAnswer:"always", explanation:"دائماً = always 💯", xp:10 },
      { id:"av1-t0-1", type:"translate", arabic:"دائماً", options:["always","usually","sometimes","never"], correctAnswer:"always", explanation:"always = دائماً", xp:10 },
      { id:"av1-t0-2", type:"listen_select", listenSentence:"usually", options:["usually","always","sometimes","never"], correctAnswer:"usually", explanation:"usually = عادةً", xp:10 },
      { id:"av1-t0-3", type:"translate", arabic:"أحياناً", options:["sometimes","always","usually","never"], correctAnswer:"sometimes", explanation:"sometimes = أحياناً", xp:10 },
      { id:"av1-t0-4", type:"word_order", sentence:"I always eat breakfast", correctAnswer:"I always eat breakfast", explanation:"أتناول الفطور دائماً", xp:12 },
      { id:"av1-t0-5", type:"fill_blank", blankSentence:"She ___ drinks tea", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always = دائماً", xp:12 },
      { id:"av1-t0-6", type:"translate", arabic:"أبداً", options:["never","always","usually","sometimes"], correctAnswer:"never", explanation:"never = أبداً", xp:10 },
      { id:"av1-t0-7", type:"listen_select", listenSentence:"never", options:["never","ever","every","very"], correctAnswer:"never", explanation:"never = أبداً", xp:12 },
      { id:"av1-t0-8", type:"word_order", sentence:"He never drinks coffee", correctAnswer:"He never drinks coffee", explanation:"لا يشرب القهوة أبداً", xp:12 },
      { id:"av1-t0-9", type:"matching", pairs:[{en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"never",ar:"أبداً"},{en:"often",ar:"غالباً"},{en:"rarely",ar:"نادراً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"av1-t1-1", type:"translate", arabic:"غالباً", options:["often","always","never","rarely"], correctAnswer:"often", explanation:"often = غالباً", xp:12 },
      { id:"av1-t1-2", type:"word_order", sentence:"We usually go to school by bus", correctAnswer:"We usually go to school by bus", explanation:"عادةً نذهب للمدرسة بالحافلة", xp:14 },
      { id:"av1-t1-3", type:"listen_select", listenSentence:"often", options:["often","over","open","under"], correctAnswer:"often", explanation:"often = غالباً", xp:13 },
      { id:"av1-t1-4", type:"translate", arabic:"نادراً", options:["rarely","often","always","usually"], correctAnswer:"rarely", explanation:"rarely = نادراً", xp:12 },
      { id:"av1-t1-5", type:"fill_blank", blankSentence:"They ___ play football", blankOptions:["sometimes","run","very"], correctAnswer:"sometimes", explanation:"sometimes = أحياناً", xp:14 },
      { id:"av1-t1-6", type:"word_order", sentence:"She often visits her family", correctAnswer:"She often visits her family", explanation:"تزور عائلتها غالباً", xp:14 },
      { id:"av1-t1-7", type:"translate", arabic:"أنا دائماً متعب في الصباح", options:["I am always tired in the morning","I always am tired in the morning","I am always tire in the morning","I am always tired in morning"], correctAnswer:"I am always tired in the morning", explanation:"always بعد فعل to be", xp:13 },
      { id:"av1-t1-8", type:"listen_select", listenSentence:"rarely happens", options:["rarely","really","rally","rarely"], correctAnswer:"rarely", explanation:"rarely = نادراً", xp:13 },
      { id:"av1-t1-9", type:"matching", pairs:[{en:"often",ar:"غالباً"},{en:"rarely",ar:"نادراً"},{en:"always",ar:"دائماً"},{en:"never",ar:"أبداً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"av1-t2-1", type:"word_order", sentence:"I usually wake up early on weekdays", correctAnswer:"I usually wake up early on weekdays", explanation:"عادةً أستيقظ مبكراً في أيام العمل", xp:16 },
      { id:"av1-t2-2", type:"translate", arabic:"هي لا تتأخّر أبداً", options:["She is never late","She never is late","She is never lates","She is not never late"], correctAnswer:"She is never late", explanation:"never بعد فعل to be", xp:16 },
      { id:"av1-t2-3", type:"fill_blank", blankSentence:"He ___ forgets his keys", blankOptions:["sometimes","run","very"], correctAnswer:"sometimes", explanation:"sometimes = أحياناً", xp:15 },
      { id:"av1-t2-4", type:"word_order", sentence:"We always have dinner together", correctAnswer:"We always have dinner together", explanation:"نتناول العشاء معاً دائماً", xp:16 },
      { id:"av1-t2-5", type:"translate", arabic:"نادراً ما أشرب القهوة", options:["I rarely drink coffee","I rarely drinks coffee","Rarely I drink coffee","I rare drink coffee"], correctAnswer:"I rarely drink coffee", explanation:"rarely = نادراً", xp:16 },
      { id:"av1-t2-6", type:"listen_select", listenSentence:"almost always", options:["always","already","also","almost"], correctAnswer:"always", explanation:"almost always = دائماً تقريباً", xp:15 },
      { id:"av1-t2-7", type:"word_order", sentence:"They often travel during the summer", correctAnswer:"They often travel during the summer", explanation:"يسافرون غالباً خلال الصيف", xp:15 },
      { id:"av1-t2-8", type:"fill_blank", blankSentence:"My father ___ reads the news", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always = دائماً", xp:15 },
    ],
    t3: [],
  },

  "عبارات التكرار": {
    t0: [
      { id:"av2-t0-1", type:"translate", arabic:"كل يوم", options:["every day","each day","all day","one day"], correctAnswer:"every day", explanation:"every day = كل يوم", xp:10 },
      { id:"av2-t0-2", type:"word_order", sentence:"I exercise every day", correctAnswer:"I exercise every day", explanation:"أتمرّن كل يوم", xp:12 },
      { id:"av2-t0-3", type:"listen_select", listenSentence:"once a week", options:["once","one","ones","won"], correctAnswer:"once", explanation:"once a week = مرة في الأسبوع", xp:10 },
      { id:"av2-t0-4", type:"translate", arabic:"مرة في الأسبوع", options:["once a week","one a week","once week","a week once"], correctAnswer:"once a week", explanation:"once a week = مرة أسبوعياً", xp:12 },
      { id:"av2-t0-5", type:"fill_blank", blankSentence:"I study ___ day", blankOptions:["every","run","very"], correctAnswer:"every", explanation:"every day = كل يوم", xp:12 },
      { id:"av2-t0-6", type:"translate", arabic:"مرتين", options:["twice","once","three","two"], correctAnswer:"twice", explanation:"twice = مرتين", xp:10 },
      { id:"av2-t0-7", type:"listen_select", listenSentence:"twice a day", options:["twice","two","twins","twist"], correctAnswer:"twice", explanation:"twice a day = مرتين يومياً", xp:12 },
      { id:"av2-t0-8", type:"word_order", sentence:"She calls twice a week", correctAnswer:"She calls twice a week", explanation:"تتّصل مرتين أسبوعياً", xp:12 },
      { id:"av2-t0-9", type:"matching", pairs:[{en:"every day",ar:"كل يوم"},{en:"once a week",ar:"مرة أسبوعياً"},{en:"twice",ar:"مرتين"},{en:"every month",ar:"كل شهر"},{en:"once a year",ar:"مرة سنوياً"},{en:"daily",ar:"يومياً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"av2-t1-1", type:"translate", arabic:"كل أسبوع", options:["every week","each week","all week","one week"], correctAnswer:"every week", explanation:"every week = كل أسبوع", xp:12 },
      { id:"av2-t1-2", type:"word_order", sentence:"We meet three times a week", correctAnswer:"We meet three times a week", explanation:"نلتقي ثلاث مرات أسبوعياً", xp:14 },
      { id:"av2-t1-3", type:"listen_select", listenSentence:"every morning", options:["every","very","ever","each"], correctAnswer:"every", explanation:"every morning = كل صباح", xp:13 },
      { id:"av2-t1-4", type:"translate", arabic:"ثلاث مرات", options:["three times","three time","third times","three timed"], correctAnswer:"three times", explanation:"three times = ثلاث مرات", xp:12 },
      { id:"av2-t1-5", type:"fill_blank", blankSentence:"He goes to the gym ___ a week", blankOptions:["twice","run","very"], correctAnswer:"twice", explanation:"twice a week = مرتين أسبوعياً", xp:14 },
      { id:"av2-t1-6", type:"word_order", sentence:"They travel once a year", correctAnswer:"They travel once a year", explanation:"يسافرون مرة في السنة", xp:14 },
      { id:"av2-t1-7", type:"translate", arabic:"كل شهر", options:["every month","each month","all month","one month"], correctAnswer:"every month", explanation:"every month = كل شهر", xp:13 },
      { id:"av2-t1-8", type:"listen_select", listenSentence:"all the time", options:["all","always","also","almost"], correctAnswer:"all", explanation:"all the time = طوال الوقت", xp:13 },
      { id:"av2-t1-9", type:"matching", pairs:[{en:"every week",ar:"كل أسبوع"},{en:"three times",ar:"ثلاث مرات"},{en:"every month",ar:"كل شهر"},{en:"daily",ar:"يومياً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"av2-t2-1", type:"word_order", sentence:"I visit my grandparents every weekend", correctAnswer:"I visit my grandparents every weekend", explanation:"أزور أجدادي كل عطلة أسبوع", xp:16 },
      { id:"av2-t2-2", type:"translate", arabic:"يتمرّن ثلاث مرات في الأسبوع", options:["He exercises three times a week","He exercise three times a week","He exercises three time a week","He exercises three times week"], correctAnswer:"He exercises three times a week", explanation:"three times a week = ثلاث مرات أسبوعياً", xp:16 },
      { id:"av2-t2-3", type:"fill_blank", blankSentence:"We clean the house ___ week", blankOptions:["every","run","very"], correctAnswer:"every", explanation:"every week = كل أسبوع", xp:15 },
      { id:"av2-t2-4", type:"word_order", sentence:"She checks her email twice a day", correctAnswer:"She checks her email twice a day", explanation:"تتفقّد بريدها مرتين يومياً", xp:16 },
      { id:"av2-t2-5", type:"translate", arabic:"نذهب في إجازة مرة في السنة", options:["We go on holiday once a year","We go on holiday one a year","We go in holiday once a year","We goes on holiday once a year"], correctAnswer:"We go on holiday once a year", explanation:"once a year = مرة سنوياً", xp:16 },
      { id:"av2-t2-6", type:"listen_select", listenSentence:"from time to time", options:["time","tame","team","tile"], correctAnswer:"time", explanation:"from time to time = من حين لآخر", xp:15 },
      { id:"av2-t2-7", type:"word_order", sentence:"They practice every single day", correctAnswer:"They practice every single day", explanation:"يتدرّبون كل يوم", xp:15 },
      { id:"av2-t2-8", type:"fill_blank", blankSentence:"I take the medicine ___ a day", blankOptions:["twice","run","very"], correctAnswer:"twice", explanation:"twice a day = مرتين يومياً", xp:15 },
    ],
    t3: [],
  },

  "استخدامها في جمل": {
    t0: [
      { id:"av3-t0-1", type:"word_order", sentence:"I always brush my teeth", correctAnswer:"I always brush my teeth", explanation:"أنظّف أسناني دائماً", xp:12 },
      { id:"av3-t0-2", type:"fill_blank", blankSentence:"She ___ goes to bed late", blankOptions:["sometimes","run","very"], correctAnswer:"sometimes", explanation:"sometimes = أحياناً", xp:10 },
      { id:"av3-t0-3", type:"translate", arabic:"هو دائماً سعيد", options:["He is always happy","He always is happy","He is always happily","He always happy"], correctAnswer:"He is always happy", explanation:"always بعد is", xp:12 },
      { id:"av3-t0-4", type:"word_order", sentence:"We never eat fast food", correctAnswer:"We never eat fast food", explanation:"لا نأكل الوجبات السريعة أبداً", xp:12 },
      { id:"av3-t0-5", type:"listen_select", listenSentence:"I usually walk", options:["usually","usual","easily","really"], correctAnswer:"usually", explanation:"usually = عادةً", xp:12 },
      { id:"av3-t0-6", type:"fill_blank", blankSentence:"They are ___ busy", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always بعد are", xp:12 },
      { id:"av3-t0-7", type:"translate", arabic:"أذهب للعمل كل يوم", options:["I go to work every day","I go work every day","I goes to work every day","I go to work all day"], correctAnswer:"I go to work every day", explanation:"every day = كل يوم", xp:10 },
      { id:"av3-t0-8", type:"word_order", sentence:"He often helps his mother", correctAnswer:"He often helps his mother", explanation:"يساعد أمه غالباً", xp:12 },
      { id:"av3-t0-9", type:"matching", pairs:[{en:"always happy",ar:"دائماً سعيد"},{en:"never late",ar:"لا يتأخّر أبداً"},{en:"usually busy",ar:"عادةً مشغول"},{en:"sometimes tired",ar:"أحياناً متعب"},{en:"often here",ar:"غالباً هنا"},{en:"rarely sick",ar:"نادراً مريض"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"av3-t1-1", type:"word_order", sentence:"My sister always helps me with homework", correctAnswer:"My sister always helps me with homework", explanation:"أختي تساعدني دائماً في الواجب", xp:14 },
      { id:"av3-t1-2", type:"translate", arabic:"نحن عادةً نأكل في الثامنة", options:["We usually eat at eight","We eat usually at eight","We usually eats at eight","We usually eat eight"], correctAnswer:"We usually eat at eight", explanation:"usually قبل الفعل", xp:14 },
      { id:"av3-t1-3", type:"listen_select", listenSentence:"he is never angry", options:["never","ever","every","very"], correctAnswer:"never", explanation:"never بعد is", xp:13 },
      { id:"av3-t1-4", type:"fill_blank", blankSentence:"I ___ drink water in the morning", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always قبل الفعل", xp:14 },
      { id:"av3-t1-5", type:"word_order", sentence:"They sometimes watch movies at night", correctAnswer:"They sometimes watch movies at night", explanation:"يشاهدون الأفلام أحياناً في الليل", xp:14 },
      { id:"av3-t1-6", type:"translate", arabic:"هي نادراً ما تأتي متأخّرة", options:["She rarely comes late","She rarely come late","She rarely comes lately","Rarely she comes late"], correctAnswer:"She rarely comes late", explanation:"rarely قبل الفعل", xp:13 },
      { id:"av3-t1-7", type:"listen_select", listenSentence:"we often go out", options:["often","over","open","oven"], correctAnswer:"often", explanation:"often قبل الفعل", xp:13 },
      { id:"av3-t1-8", type:"word_order", sentence:"He usually arrives on time", correctAnswer:"He usually arrives on time", explanation:"يصل عادةً في الوقت", xp:14 },
      { id:"av3-t1-9", type:"matching", pairs:[{en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"never",ar:"أبداً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"av3-t2-1", type:"word_order", sentence:"I usually have breakfast at seven o'clock", correctAnswer:"I usually have breakfast at seven o'clock", explanation:"عادةً أتناول الفطور في السابعة", xp:16 },
      { id:"av3-t2-2", type:"translate", arabic:"هم دائماً يحترمون الآخرين", options:["They always respect others","They respect always others","They always respects others","They always respect other"], correctAnswer:"They always respect others", explanation:"always قبل الفعل", xp:16 },
      { id:"av3-t2-3", type:"fill_blank", blankSentence:"She is ___ kind to everyone", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always بعد is", xp:15 },
      { id:"av3-t2-4", type:"word_order", sentence:"We never give up on our dreams", correctAnswer:"We never give up on our dreams", explanation:"لا نتخلّى عن أحلامنا أبداً", xp:16 },
      { id:"av3-t2-5", type:"translate", arabic:"أحياناً أشعر بالتعب بعد العمل", options:["Sometimes I feel tired after work","I sometimes feel tired after work","Sometimes I feels tired after work","I feel sometimes tired after work"], correctAnswer:"Sometimes I feel tired after work", explanation:"sometimes في بداية الجملة", xp:16 },
      { id:"av3-t2-6", type:"listen_select", listenSentence:"they rarely argue", options:["rarely","really","rally","rarely"], correctAnswer:"rarely", explanation:"rarely قبل الفعل", xp:15 },
      { id:"av3-t2-7", type:"word_order", sentence:"My brother often plays video games", correctAnswer:"My brother often plays video games", explanation:"أخي يلعب الألعاب غالباً", xp:15 },
      { id:"av3-t2-8", type:"fill_blank", blankSentence:"You should ___ tell the truth", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always قبل الفعل الرئيسي", xp:15 },
    ],
    t3: [],
  },
};
