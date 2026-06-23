import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 39: استخدم أفعال الأمر المثبتة
//   درس 1: أوامر بسيطة — sit, stand, open, close, listen
//   درس 2: إعطاء التعليمات — turn, press, put, take, follow
//   درس 3: الأمر المهذّب — please, let's, would you
// ══════════════════════════════════════════════════════════════

export const unit39ImperativesBank: Record<string, TieredBank> = {

  "أوامر بسيطة": {
    t0: [
      { id:"im-pic-1", type:"picture_match", word:"open", arabic:"افتح", pictureOptions:[{emoji:"🚪",label:"open"},{emoji:"🔒",label:"close"},{emoji:"🪑",label:"sit"},{emoji:"🧍",label:"stand"}], correctAnswer:"open", explanation:"افتح = open 🚪", xp:10 },
      { id:"im1-t0-1", type:"translate", arabic:"اجلس", options:["sit","stand","open","close"], correctAnswer:"sit", explanation:"sit = اجلس 🪑", xp:10 },
      { id:"im1-t0-2", type:"listen_select", listenSentence:"stand up", options:["stand","sand","sit","send"], correctAnswer:"stand", explanation:"stand up = قف 🧍", xp:10 },
      { id:"im1-t0-3", type:"translate", arabic:"افتح", options:["open","close","sit","stand"], correctAnswer:"open", explanation:"open = افتح", xp:10 },
      { id:"im1-t0-4", type:"word_order", sentence:"Open the door", correctAnswer:"Open the door", explanation:"افتح الباب", xp:12 },
      { id:"im1-t0-5", type:"fill_blank", blankSentence:"___ down please", blankOptions:["Sit","Run","Very"], correctAnswer:"Sit", explanation:"Sit down = اجلس", xp:12 },
      { id:"im1-t0-6", type:"translate", arabic:"أغلق", options:["close","open","sit","stand"], correctAnswer:"close", explanation:"close = أغلق", xp:10 },
      { id:"im1-t0-7", type:"listen_select", listenSentence:"listen carefully", options:["listen","lesson","loosen","listing"], correctAnswer:"listen", explanation:"listen = استمع", xp:12 },
      { id:"im1-t0-8", type:"word_order", sentence:"Close the window", correctAnswer:"Close the window", explanation:"أغلق النافذة", xp:12 },
      { id:"im1-t0-9", type:"matching", pairs:[{en:"sit",ar:"اجلس"},{en:"stand",ar:"قف"},{en:"open",ar:"افتح"},{en:"close",ar:"أغلق"},{en:"listen",ar:"استمع"},{en:"look",ar:"انظر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"im1-t1-1", type:"translate", arabic:"انتظر", options:["wait","walk","want","watch"], correctAnswer:"wait", explanation:"wait = انتظر", xp:12 },
      { id:"im1-t1-2", type:"word_order", sentence:"Please listen to me", correctAnswer:"Please listen to me", explanation:"استمع إليّ من فضلك", xp:14 },
      { id:"im1-t1-3", type:"listen_select", listenSentence:"come here", options:["come","came","calm","comb"], correctAnswer:"come", explanation:"come here = تعال هنا", xp:13 },
      { id:"im1-t1-4", type:"translate", arabic:"انظر", options:["look","listen","watch","see"], correctAnswer:"look", explanation:"look = انظر", xp:12 },
      { id:"im1-t1-5", type:"fill_blank", blankSentence:"___ at the board", blankOptions:["Look","Run","Very"], correctAnswer:"Look", explanation:"Look at = انظر إلى", xp:14 },
      { id:"im1-t1-6", type:"word_order", sentence:"Write your name here", correctAnswer:"Write your name here", explanation:"اكتب اسمك هنا", xp:14 },
      { id:"im1-t1-7", type:"translate", arabic:"تعال", options:["come","go","stay","leave"], correctAnswer:"come", explanation:"come = تعال", xp:12 },
      { id:"im1-t1-8", type:"listen_select", listenSentence:"repeat after me", options:["repeat","retreat","receipt","repair"], correctAnswer:"repeat", explanation:"repeat = أعد/كرّر", xp:13 },
      { id:"im1-t1-9", type:"matching", pairs:[{en:"wait",ar:"انتظر"},{en:"come",ar:"تعال"},{en:"write",ar:"اكتب"},{en:"repeat",ar:"كرّر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"im1-t2-1", type:"word_order", sentence:"Please open your books to page ten", correctAnswer:"Please open your books to page ten", explanation:"افتحوا كتبكم على صفحة 10", xp:16 },
      { id:"im1-t2-2", type:"translate", arabic:"استمع جيداً وكرّر بعدي", options:["Listen carefully and repeat after me","Listen carefully and repeat after I","Listen careful and repeat after me","Listen carefully and repeats after me"], correctAnswer:"Listen carefully and repeat after me", explanation:"listen and repeat", xp:16 },
      { id:"im1-t2-3", type:"fill_blank", blankSentence:"___ your hand if you know the answer", blankOptions:["Raise","Run","Very"], correctAnswer:"Raise", explanation:"Raise your hand = ارفع يدك", xp:15 },
      { id:"im1-t2-4", type:"word_order", sentence:"Turn off your phone during the class", correctAnswer:"Turn off your phone during the class", explanation:"أطفئ هاتفك أثناء الحصة", xp:16 },
      { id:"im1-t2-5", type:"translate", arabic:"اقرأ السؤال بعناية قبل الإجابة", options:["Read the question carefully before answering","Read the question careful before answering","Reads the question carefully before answering","Read the questions carefully before answering"], correctAnswer:"Read the question carefully before answering", explanation:"read carefully = اقرأ بعناية", xp:16 },
      { id:"im1-t2-6", type:"listen_select", listenSentence:"be quiet please", options:["quiet","quite","quit","quilt"], correctAnswer:"quiet", explanation:"be quiet = اهدأ/اصمت", xp:15 },
      { id:"im1-t2-7", type:"word_order", sentence:"Come to the front of the class", correctAnswer:"Come to the front of the class", explanation:"تعال لمقدّمة الصف", xp:15 },
      { id:"im1-t2-8", type:"fill_blank", blankSentence:"___ your homework on my desk", blankOptions:["Put","Run","Very"], correctAnswer:"Put", explanation:"Put = ضع", xp:15 },
    ],
    t3: [],
  },

  "إعطاء التعليمات": {
    t0: [
      { id:"im2-t0-1", type:"translate", arabic:"اضغط", options:["press","pull","push","pick"], correctAnswer:"press", explanation:"press = اضغط", xp:10 },
      { id:"im2-t0-2", type:"word_order", sentence:"Press the button", correctAnswer:"Press the button", explanation:"اضغط الزرّ", xp:12 },
      { id:"im2-t0-3", type:"listen_select", listenSentence:"turn left", options:["turn","term","torn","tune"], correctAnswer:"turn", explanation:"turn = أدر/انعطف", xp:10 },
      { id:"im2-t0-4", type:"translate", arabic:"ضع", options:["put","take","get","give"], correctAnswer:"put", explanation:"put = ضع", xp:10 },
      { id:"im2-t0-5", type:"fill_blank", blankSentence:"___ the box here", blankOptions:["Put","Run","Very"], correctAnswer:"Put", explanation:"Put = ضع", xp:12 },
      { id:"im2-t0-6", type:"translate", arabic:"خذ", options:["take","put","give","get"], correctAnswer:"take", explanation:"take = خذ", xp:10 },
      { id:"im2-t0-7", type:"listen_select", listenSentence:"follow me", options:["follow","fellow","hollow","follows"], correctAnswer:"follow", explanation:"follow = اتبع", xp:12 },
      { id:"im2-t0-8", type:"word_order", sentence:"Take this paper", correctAnswer:"Take this paper", explanation:"خذ هذه الورقة", xp:12 },
      { id:"im2-t0-9", type:"matching", pairs:[{en:"press",ar:"اضغط"},{en:"turn",ar:"أدر"},{en:"put",ar:"ضع"},{en:"take",ar:"خذ"},{en:"follow",ar:"اتبع"},{en:"pull",ar:"اسحب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"im2-t1-1", type:"translate", arabic:"اسحب", options:["pull","push","press","pick"], correctAnswer:"pull", explanation:"pull = اسحب", xp:12 },
      { id:"im2-t1-2", type:"word_order", sentence:"Push the door to open it", correctAnswer:"Push the door to open it", explanation:"ادفع الباب لفتحه", xp:14 },
      { id:"im2-t1-3", type:"listen_select", listenSentence:"mix the ingredients", options:["mix","mixed","mixes","mixing"], correctAnswer:"mix", explanation:"mix = اخلط", xp:13 },
      { id:"im2-t1-4", type:"translate", arabic:"ادفع", options:["push","pull","press","put"], correctAnswer:"push", explanation:"push = ادفع", xp:12 },
      { id:"im2-t1-5", type:"fill_blank", blankSentence:"___ the first step carefully", blankOptions:["Follow","Run","Very"], correctAnswer:"Follow", explanation:"Follow the step = اتبع الخطوة", xp:14 },
      { id:"im2-t1-6", type:"word_order", sentence:"Turn right at the corner", correctAnswer:"Turn right at the corner", explanation:"انعطف يميناً عند الزاوية", xp:14 },
      { id:"im2-t1-7", type:"translate", arabic:"أضف", options:["add","mix","cut","pour"], correctAnswer:"add", explanation:"add = أضف", xp:13 },
      { id:"im2-t1-8", type:"listen_select", listenSentence:"pour the water", options:["pour","poor","pure","power"], correctAnswer:"pour", explanation:"pour = اسكب", xp:13 },
      { id:"im2-t1-9", type:"matching", pairs:[{en:"pull",ar:"اسحب"},{en:"push",ar:"ادفع"},{en:"add",ar:"أضف"},{en:"pour",ar:"اسكب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"im2-t2-1", type:"word_order", sentence:"First press the power button to start", correctAnswer:"First press the power button to start", explanation:"أولاً اضغط زرّ الطاقة للبدء", xp:16 },
      { id:"im2-t2-2", type:"translate", arabic:"اخلط المكوّنات ثم أضف الماء", options:["Mix the ingredients then add the water","Mix the ingredient then add the water","Mixes the ingredients then add the water","Mix the ingredients then adds the water"], correctAnswer:"Mix the ingredients then add the water", explanation:"mix then add", xp:16 },
      { id:"im2-t2-3", type:"fill_blank", blankSentence:"___ the instructions step by step", blankOptions:["Follow","Run","Very"], correctAnswer:"Follow", explanation:"Follow the instructions = اتبع التعليمات", xp:15 },
      { id:"im2-t2-4", type:"word_order", sentence:"Take the medicine after every meal", correctAnswer:"Take the medicine after every meal", explanation:"خذ الدواء بعد كل وجبة", xp:16 },
      { id:"im2-t2-5", type:"translate", arabic:"اقطع الخضار إلى قطع صغيرة", options:["Cut the vegetables into small pieces","Cut the vegetable into small pieces","Cuts the vegetables into small pieces","Cut the vegetables into small piece"], correctAnswer:"Cut the vegetables into small pieces", explanation:"cut into pieces = قطّع إلى قطع", xp:16 },
      { id:"im2-t2-6", type:"listen_select", listenSentence:"connect the cable", options:["connect","correct","collect","connecting"], correctAnswer:"connect", explanation:"connect = صِل/وصِّل", xp:15 },
      { id:"im2-t2-7", type:"word_order", sentence:"Save the file before you close it", correctAnswer:"Save the file before you close it", explanation:"احفظ الملف قبل إغلاقه", xp:15 },
      { id:"im2-t2-8", type:"fill_blank", blankSentence:"___ the box gently to avoid damage", blankOptions:["Handle","Run","Very"], correctAnswer:"Handle", explanation:"Handle = تعامل مع/امسك", xp:15 },
    ],
    t3: [],
  },

  "الأمر المهذّب": {
    t0: [
      { id:"im3-t0-1", type:"translate", arabic:"من فضلك", options:["please","sorry","thanks","welcome"], correctAnswer:"please", explanation:"please = من فضلك", xp:10 },
      { id:"im3-t0-2", type:"word_order", sentence:"Please sit down", correctAnswer:"Please sit down", explanation:"اجلس من فضلك", xp:12 },
      { id:"im3-t0-3", type:"listen_select", listenSentence:"let's go", options:["let's","lets","let","late"], correctAnswer:"let's", explanation:"let's = دعنا/هيا", xp:10 },
      { id:"im3-t0-4", type:"translate", arabic:"هيا بنا", options:["let's go","let go","lets go","let us"], correctAnswer:"let's go", explanation:"let's go = هيا بنا", xp:12 },
      { id:"im3-t0-5", type:"fill_blank", blankSentence:"___ help me please", blankOptions:["Could you","Run","Very"], correctAnswer:"Could you", explanation:"Could you = هل يمكنك", xp:12 },
      { id:"im3-t0-6", type:"word_order", sentence:"Let's start now", correctAnswer:"Let's start now", explanation:"لنبدأ الآن", xp:12 },
      { id:"im3-t0-7", type:"listen_select", listenSentence:"would you mind", options:["mind","mine","mind","mend"], correctAnswer:"mind", explanation:"would you mind = هل تمانع", xp:12 },
      { id:"im3-t0-8", type:"translate", arabic:"تفضّل، اجلس", options:["Please, have a seat","Please, have seat","Please, has a seat","Please, have a seats"], correctAnswer:"Please, have a seat", explanation:"have a seat = تفضّل بالجلوس", xp:10 },
      { id:"im3-t0-9", type:"matching", pairs:[{en:"please",ar:"من فضلك"},{en:"let's",ar:"هيا"},{en:"could you",ar:"هل يمكنك"},{en:"would you",ar:"هل تودّ"},{en:"thank you",ar:"شكراً"},{en:"have a seat",ar:"تفضّل بالجلوس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"im3-t1-1", type:"word_order", sentence:"Please close the door quietly", correctAnswer:"Please close the door quietly", explanation:"أغلق الباب بهدوء من فضلك", xp:14 },
      { id:"im3-t1-2", type:"translate", arabic:"هيا نذهب إلى الحديقة", options:["Let's go to the park","Let go to the park","Lets go to the park","Let's goes to the park"], correctAnswer:"Let's go to the park", explanation:"let's go = هيا نذهب", xp:14 },
      { id:"im3-t1-3", type:"listen_select", listenSentence:"would you please", options:["please","plays","place","plus"], correctAnswer:"please", explanation:"would you please = هل تتفضّل", xp:13 },
      { id:"im3-t1-4", type:"fill_blank", blankSentence:"___ try this dish", blankOptions:["Let's","Run","Very"], correctAnswer:"Let's", explanation:"Let's try = لنجرّب", xp:14 },
      { id:"im3-t1-5", type:"word_order", sentence:"Could you pass me the salt", correctAnswer:"Could you pass me the salt", explanation:"هل تناولني الملح؟", xp:14 },
      { id:"im3-t1-6", type:"translate", arabic:"من فضلك انتظر هنا", options:["Please wait here","Please waits here","Please wait heres","Please waiting here"], correctAnswer:"Please wait here", explanation:"please wait = انتظر من فضلك", xp:13 },
      { id:"im3-t1-7", type:"listen_select", listenSentence:"let's work together", options:["together","togethers","gather","tighter"], correctAnswer:"together", explanation:"work together = نعمل معاً", xp:13 },
      { id:"im3-t1-8", type:"word_order", sentence:"Would you like some tea", correctAnswer:"Would you like some tea", explanation:"هل تودّ بعض الشاي؟", xp:14 },
      { id:"im3-t1-9", type:"matching", pairs:[{en:"Let's go",ar:"هيا نذهب"},{en:"Could you",ar:"هل يمكنك"},{en:"Would you like",ar:"هل تودّ"},{en:"Please wait",ar:"انتظر من فضلك"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"im3-t2-1", type:"word_order", sentence:"Could you please turn down the music", correctAnswer:"Could you please turn down the music", explanation:"هل تخفّض الموسيقى من فضلك؟", xp:16 },
      { id:"im3-t2-2", type:"translate", arabic:"هيا نبدأ الاجتماع الآن", options:["Let's begin the meeting now","Let begin the meeting now","Lets begin the meeting now","Let's begins the meeting now"], correctAnswer:"Let's begin the meeting now", explanation:"let's begin = لنبدأ", xp:16 },
      { id:"im3-t2-3", type:"fill_blank", blankSentence:"___ you mind opening the window", blankOptions:["Would","Run","Very"], correctAnswer:"Would", explanation:"Would you mind = هل تمانع", xp:15 },
      { id:"im3-t2-4", type:"word_order", sentence:"Please make yourself at home", correctAnswer:"Please make yourself at home", explanation:"تفضّل كأنك في بيتك", xp:16 },
      { id:"im3-t2-5", type:"translate", arabic:"دعونا نعمل معاً لحلّ هذه المشكلة", options:["Let's work together to solve this problem","Let work together to solve this problem","Lets work together to solve this problem","Let's works together to solve this problem"], correctAnswer:"Let's work together to solve this problem", explanation:"let's work together", xp:16 },
      { id:"im3-t2-6", type:"listen_select", listenSentence:"feel free to ask", options:["free","three","tree","flee"], correctAnswer:"free", explanation:"feel free = لا تتردّد", xp:15 },
      { id:"im3-t2-7", type:"word_order", sentence:"Would you be so kind as to help", correctAnswer:"Would you be so kind as to help", explanation:"هل تتكرّم بالمساعدة؟", xp:15 },
      { id:"im3-t2-8", type:"fill_blank", blankSentence:"___ take a short break now", blankOptions:["Let's","Run","Very"], correctAnswer:"Let's", explanation:"Let's take a break = لنأخذ استراحة", xp:15 },
    ],
    t3: [],
  },
};
