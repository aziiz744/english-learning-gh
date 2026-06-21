import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 20: استخدم تعابير الوقت
//   درس 1: الساعة — o'clock, half past, quarter, time
//   درس 2: أوقات اليوم — morning, afternoon, evening, night
//   درس 3: تعابير الوقت — at, on, in, today, tomorrow
// ══════════════════════════════════════════════════════════════

export const unit20TimeBank: Record<string, TieredBank> = {

  "كم الساعة": {
    t0: [
      { id:"tm-pic-1", type:"picture_match", word:"clock", arabic:"ساعة", pictureOptions:[{emoji:"🕐",label:"clock"},{emoji:"📅",label:"calendar"},{emoji:"⏰",label:"alarm"},{emoji:"⌚",label:"watch"}], correctAnswer:"clock", explanation:"ساعة = clock 🕐", xp:10 },
      { id:"tm1-t0-1", type:"translate", arabic:"وقت", options:["time","clock","hour","minute"], correctAnswer:"time", explanation:"time = وقت", xp:10 },
      { id:"tm1-t0-2", type:"listen_select", listenSentence:"what time is it", options:["time","tame","team","tile"], correctAnswer:"time", explanation:"what time is it = كم الساعة", xp:10 },
      { id:"tm1-t0-3", type:"translate", arabic:"ساعة (زمن)", options:["hour","minute","second","time"], correctAnswer:"hour", explanation:"hour = ساعة", xp:10 },
      { id:"tm1-t0-4", type:"word_order", sentence:"What time is it", correctAnswer:"What time is it", explanation:"كم الساعة؟", xp:12 },
      { id:"tm1-t0-5", type:"fill_blank", blankSentence:"It is three ___", blankOptions:["o'clock","run","very"], correctAnswer:"o'clock", explanation:"three o'clock = الثالثة تماماً", xp:12 },
      { id:"tm1-t0-6", type:"translate", arabic:"دقيقة", options:["minute","hour","second","time"], correctAnswer:"minute", explanation:"minute = دقيقة", xp:10 },
      { id:"tm1-t0-7", type:"listen_select", listenSentence:"five o'clock", options:["o'clock","clock","lock","block"], correctAnswer:"o'clock", explanation:"five o'clock = الخامسة", xp:12 },
      { id:"tm1-t0-8", type:"word_order", sentence:"It is two o'clock", correctAnswer:"It is two o'clock", explanation:"إنها الثانية", xp:12 },
      { id:"tm1-t0-9", type:"matching", pairs:[{en:"time",ar:"وقت"},{en:"hour",ar:"ساعة"},{en:"minute",ar:"دقيقة"},{en:"o'clock",ar:"تماماً"},{en:"clock",ar:"ساعة حائط"},{en:"watch",ar:"ساعة يد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"tm1-t1-1", type:"translate", arabic:"النصف", options:["half past","quarter","o'clock","minute"], correctAnswer:"half past", explanation:"half past = والنصف", xp:12 },
      { id:"tm1-t1-2", type:"word_order", sentence:"It is half past six", correctAnswer:"It is half past six", explanation:"إنها السادسة والنصف", xp:14 },
      { id:"tm1-t1-3", type:"listen_select", listenSentence:"quarter past", options:["quarter","quart","quiet","quite"], correctAnswer:"quarter", explanation:"quarter past = والربع", xp:13 },
      { id:"tm1-t1-4", type:"translate", arabic:"الربع", options:["quarter","half","hour","minute"], correctAnswer:"quarter", explanation:"quarter = ربع", xp:12 },
      { id:"tm1-t1-5", type:"fill_blank", blankSentence:"It is half ___ four", blankOptions:["past","run","very"], correctAnswer:"past", explanation:"half past four = الرابعة والنصف", xp:14 },
      { id:"tm1-t1-6", type:"word_order", sentence:"The class starts at nine", correctAnswer:"The class starts at nine", explanation:"يبدأ الصف في التاسعة", xp:14 },
      { id:"tm1-t1-7", type:"translate", arabic:"إنها التاسعة والربع", options:["It is quarter past nine","It is quarter past nines","It quarter past nine","It is quarter pass nine"], correctAnswer:"It is quarter past nine", explanation:"quarter past = والربع", xp:13 },
      { id:"tm1-t1-8", type:"listen_select", listenSentence:"ten thirty", options:["thirty","thirsty","third","thirteen"], correctAnswer:"thirty", explanation:"ten thirty = العاشرة والنصف", xp:13 },
      { id:"tm1-t1-9", type:"matching", pairs:[{en:"half past",ar:"والنصف"},{en:"quarter past",ar:"والربع"},{en:"o'clock",ar:"تماماً"},{en:"quarter to",ar:"إلا ربع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"tm1-t2-1", type:"word_order", sentence:"The meeting is at half past two", correctAnswer:"The meeting is at half past two", explanation:"الاجتماع في الثانية والنصف", xp:16 },
      { id:"tm1-t2-2", type:"translate", arabic:"الساعة الآن الرابعة والربع", options:["It is now quarter past four","It is now quarter past fours","It now quarter past four","It is now quarter pass four"], correctAnswer:"It is now quarter past four", explanation:"quarter past four = الرابعة والربع", xp:16 },
      { id:"tm1-t2-3", type:"fill_blank", blankSentence:"The train leaves at quarter ___ eight", blankOptions:["to","run","very"], correctAnswer:"to", explanation:"quarter to eight = الثامنة إلا ربع", xp:15 },
      { id:"tm1-t2-4", type:"word_order", sentence:"I wake up at seven every day", correctAnswer:"I wake up at seven every day", explanation:"أستيقظ في السابعة كل يوم", xp:16 },
      { id:"tm1-t2-5", type:"translate", arabic:"كم تستغرق من الوقت؟", options:["How long does it take?","How long it takes?","How long does it takes?","How long take it?"], correctAnswer:"How long does it take?", explanation:"How long = كم من الوقت", xp:16 },
      { id:"tm1-t2-6", type:"listen_select", listenSentence:"almost noon", options:["noon","moon","soon","spoon"], correctAnswer:"noon", explanation:"noon = الظهر", xp:15 },
      { id:"tm1-t2-7", type:"word_order", sentence:"We will meet in ten minutes", correctAnswer:"We will meet in ten minutes", explanation:"سنلتقي بعد عشر دقائق", xp:15 },
      { id:"tm1-t2-8", type:"fill_blank", blankSentence:"The shop opens at nine ___", blankOptions:["o'clock","run","very"], correctAnswer:"o'clock", explanation:"nine o'clock = التاسعة", xp:15 },
    ],
    t3: [],
  },

  "أوقات اليوم": {
    t0: [
      { id:"tm2-t0-1", type:"translate", arabic:"صباح", options:["morning","afternoon","evening","night"], correctAnswer:"morning", explanation:"morning = صباح 🌅", xp:10 },
      { id:"tm2-t0-2", type:"listen_select", listenSentence:"afternoon", options:["afternoon","morning","evening","night"], correctAnswer:"afternoon", explanation:"afternoon = بعد الظهر", xp:10 },
      { id:"tm2-t0-3", type:"translate", arabic:"مساء", options:["evening","morning","afternoon","noon"], correctAnswer:"evening", explanation:"evening = مساء 🌆", xp:10 },
      { id:"tm2-t0-4", type:"word_order", sentence:"Good morning everyone", correctAnswer:"Good morning everyone", explanation:"صباح الخير جميعاً", xp:12 },
      { id:"tm2-t0-5", type:"fill_blank", blankSentence:"I work in the ___", blankOptions:["morning","run","very"], correctAnswer:"morning", explanation:"in the morning = في الصباح", xp:12 },
      { id:"tm2-t0-6", type:"translate", arabic:"ليل", options:["night","morning","evening","day"], correctAnswer:"night", explanation:"night = ليل 🌙", xp:10 },
      { id:"tm2-t0-7", type:"listen_select", listenSentence:"in the evening", options:["evening","morning","afternoon","night"], correctAnswer:"evening", explanation:"in the evening = في المساء", xp:12 },
      { id:"tm2-t0-8", type:"word_order", sentence:"I sleep at night", correctAnswer:"I sleep at night", explanation:"أنام في الليل", xp:12 },
      { id:"tm2-t0-9", type:"matching", pairs:[{en:"morning",ar:"صباح"},{en:"afternoon",ar:"بعد الظهر"},{en:"evening",ar:"مساء"},{en:"night",ar:"ليل"},{en:"noon",ar:"ظهر"},{en:"midnight",ar:"منتصف الليل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"tm2-t1-1", type:"translate", arabic:"ظهر", options:["noon","night","morning","evening"], correctAnswer:"noon", explanation:"noon = ظهر", xp:12 },
      { id:"tm2-t1-2", type:"word_order", sentence:"I study in the afternoon", correctAnswer:"I study in the afternoon", explanation:"أدرس بعد الظهر", xp:14 },
      { id:"tm2-t1-3", type:"listen_select", listenSentence:"every morning", options:["morning","evening","night","noon"], correctAnswer:"morning", explanation:"every morning = كل صباح", xp:13 },
      { id:"tm2-t1-4", type:"translate", arabic:"منتصف الليل", options:["midnight","midday","noon","night"], correctAnswer:"midnight", explanation:"midnight = منتصف الليل", xp:12 },
      { id:"tm2-t1-5", type:"fill_blank", blankSentence:"We have dinner in the ___", blankOptions:["evening","run","very"], correctAnswer:"evening", explanation:"in the evening = في المساء", xp:14 },
      { id:"tm2-t1-6", type:"word_order", sentence:"The sun rises in the morning", correctAnswer:"The sun rises in the morning", explanation:"تشرق الشمس في الصباح", xp:14 },
      { id:"tm2-t1-7", type:"translate", arabic:"أتمرّن كل مساء", options:["I exercise every evening","I exercise every evenings","I exercises every evening","I exercise all evening"], correctAnswer:"I exercise every evening", explanation:"every evening = كل مساء", xp:13 },
      { id:"tm2-t1-8", type:"listen_select", listenSentence:"late at night", options:["night","light","right","might"], correctAnswer:"night", explanation:"late at night = متأخراً في الليل", xp:13 },
      { id:"tm2-t1-9", type:"matching", pairs:[{en:"noon",ar:"ظهر"},{en:"midnight",ar:"منتصف الليل"},{en:"sunrise",ar:"شروق"},{en:"sunset",ar:"غروب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"tm2-t2-1", type:"word_order", sentence:"I usually wake up early in the morning", correctAnswer:"I usually wake up early in the morning", explanation:"عادةً أستيقظ مبكراً في الصباح", xp:16 },
      { id:"tm2-t2-2", type:"translate", arabic:"نتناول العشاء في المساء", options:["We have dinner in the evening","We have dinner in evening","We have dinners in the evening","We has dinner in the evening"], correctAnswer:"We have dinner in the evening", explanation:"in the evening = في المساء", xp:16 },
      { id:"tm2-t2-3", type:"fill_blank", blankSentence:"The store closes at ___", blankOptions:["midnight","run","very"], correctAnswer:"midnight", explanation:"midnight = منتصف الليل", xp:15 },
      { id:"tm2-t2-4", type:"word_order", sentence:"She goes to school every morning", correctAnswer:"She goes to school every morning", explanation:"تذهب للمدرسة كل صباح", xp:16 },
      { id:"tm2-t2-5", type:"translate", arabic:"أنام مبكراً في الليل", options:["I sleep early at night","I sleep early at nights","I sleeps early at night","I sleep earlier at night"], correctAnswer:"I sleep early at night", explanation:"early at night = مبكراً في الليل", xp:16 },
      { id:"tm2-t2-6", type:"listen_select", listenSentence:"this afternoon", options:["afternoon","afterward","afterwards","aftermath"], correctAnswer:"afternoon", explanation:"this afternoon = بعد ظهر اليوم", xp:15 },
      { id:"tm2-t2-7", type:"word_order", sentence:"We will travel early tomorrow morning", correctAnswer:"We will travel early tomorrow morning", explanation:"سنسافر مبكراً صباح الغد", xp:15 },
      { id:"tm2-t2-8", type:"fill_blank", blankSentence:"I drink coffee every ___", blankOptions:["morning","run","very"], correctAnswer:"morning", explanation:"every morning = كل صباح", xp:15 },
    ],
    t3: [],
  },

  "تعابير الوقت": {
    t0: [
      { id:"tm3-t0-1", type:"translate", arabic:"اليوم", options:["today","tomorrow","yesterday","now"], correctAnswer:"today", explanation:"today = اليوم", xp:10 },
      { id:"tm3-t0-2", type:"translate", arabic:"غداً", options:["tomorrow","today","yesterday","now"], correctAnswer:"tomorrow", explanation:"tomorrow = غداً", xp:10 },
      { id:"tm3-t0-3", type:"listen_select", listenSentence:"yesterday", options:["yesterday","today","tomorrow","now"], correctAnswer:"yesterday", explanation:"yesterday = أمس", xp:10 },
      { id:"tm3-t0-4", type:"word_order", sentence:"I will see you tomorrow", correctAnswer:"I will see you tomorrow", explanation:"سأراك غداً", xp:12 },
      { id:"tm3-t0-5", type:"fill_blank", blankSentence:"The party is ___ Friday", blankOptions:["on","run","very"], correctAnswer:"on", explanation:"on Friday = يوم الجمعة", xp:12 },
      { id:"tm3-t0-6", type:"translate", arabic:"الآن", options:["now","then","soon","late"], correctAnswer:"now", explanation:"now = الآن", xp:10 },
      { id:"tm3-t0-7", type:"listen_select", listenSentence:"at three o'clock", options:["at","on","in","by"], correctAnswer:"at", explanation:"at three = في الثالثة", xp:12 },
      { id:"tm3-t0-8", type:"word_order", sentence:"See you later", correctAnswer:"See you later", explanation:"أراك لاحقاً", xp:12 },
      { id:"tm3-t0-9", type:"matching", pairs:[{en:"today",ar:"اليوم"},{en:"tomorrow",ar:"غداً"},{en:"yesterday",ar:"أمس"},{en:"now",ar:"الآن"},{en:"later",ar:"لاحقاً"},{en:"soon",ar:"قريباً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"tm3-t1-1", type:"translate", arabic:"في (الشهر/السنة)", options:["in","on","at","by"], correctAnswer:"in", explanation:"in January = في يناير", xp:12 },
      { id:"tm3-t1-2", type:"word_order", sentence:"My birthday is in May", correctAnswer:"My birthday is in May", explanation:"عيد ميلادي في مايو", xp:14 },
      { id:"tm3-t1-3", type:"listen_select", listenSentence:"on Monday", options:["on","in","at","by"], correctAnswer:"on", explanation:"on Monday = يوم الإثنين", xp:13 },
      { id:"tm3-t1-4", type:"translate", arabic:"الأسبوع القادم", options:["next week","last week","this week","next day"], correctAnswer:"next week", explanation:"next week = الأسبوع القادم", xp:12 },
      { id:"tm3-t1-5", type:"fill_blank", blankSentence:"The meeting is ___ 10 am", blankOptions:["at","run","very"], correctAnswer:"at", explanation:"at 10 am = في العاشرة", xp:14 },
      { id:"tm3-t1-6", type:"word_order", sentence:"I was busy last week", correctAnswer:"I was busy last week", explanation:"كنت مشغولاً الأسبوع الماضي", xp:14 },
      { id:"tm3-t1-7", type:"translate", arabic:"الشهر الماضي", options:["last month","next month","this month","last week"], correctAnswer:"last month", explanation:"last month = الشهر الماضي", xp:13 },
      { id:"tm3-t1-8", type:"listen_select", listenSentence:"in the summer", options:["in","on","at","by"], correctAnswer:"in", explanation:"in summer = في الصيف", xp:13 },
      { id:"tm3-t1-9", type:"matching", pairs:[{en:"at",ar:"في (الساعة)"},{en:"on",ar:"في (اليوم)"},{en:"in",ar:"في (الشهر)"},{en:"next week",ar:"الأسبوع القادم"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"tm3-t2-1", type:"word_order", sentence:"I have an appointment on Monday morning", correctAnswer:"I have an appointment on Monday morning", explanation:"لديّ موعد صباح الإثنين", xp:16 },
      { id:"tm3-t2-2", type:"translate", arabic:"سأسافر الأسبوع القادم", options:["I will travel next week","I will travel next weeks","I will travels next week","I will travel last week"], correctAnswer:"I will travel next week", explanation:"next week = الأسبوع القادم", xp:16 },
      { id:"tm3-t2-3", type:"fill_blank", blankSentence:"School starts ___ September", blankOptions:["in","run","very"], correctAnswer:"in", explanation:"in September = في سبتمبر", xp:15 },
      { id:"tm3-t2-4", type:"word_order", sentence:"We usually go out on weekends", correctAnswer:"We usually go out on weekends", explanation:"عادةً نخرج في عطلة الأسبوع", xp:16 },
      { id:"tm3-t2-5", type:"translate", arabic:"رأيته أمس في المتجر", options:["I saw him yesterday at the store","I saw him yesterday at store","I see him yesterday at the store","I saw he yesterday at the store"], correctAnswer:"I saw him yesterday at the store", explanation:"yesterday = أمس", xp:16 },
      { id:"tm3-t2-6", type:"listen_select", listenSentence:"see you next time", options:["next","text","best","rest"], correctAnswer:"next", explanation:"next time = المرة القادمة", xp:15 },
      { id:"tm3-t2-7", type:"word_order", sentence:"The exam is on Tuesday at nine", correctAnswer:"The exam is on Tuesday at nine", explanation:"الامتحان يوم الثلاثاء في التاسعة", xp:15 },
      { id:"tm3-t2-8", type:"fill_blank", blankSentence:"I will call you ___ tomorrow", blankOptions:["tomorrow","run","very"], correctAnswer:"tomorrow", explanation:"tomorrow = غداً", xp:15 },
    ],
    t3: [],
  },
};
