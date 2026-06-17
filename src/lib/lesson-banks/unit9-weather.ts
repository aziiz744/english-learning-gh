import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 9 — تحدث عن الطقس
//   درس 1: كلمات الطقس — sunny, rainy, cloudy, windy, snowy
//   درس 2: صف الطقس — It's hot today, The weather is nice
//   درس 3: الفصول الأربعة — spring, summer, autumn, winter
// ══════════════════════════════════════════════════════════════

export const unit9WeatherBank: Record<string, TieredBank> = {

  // ── الدرس 1: كلمات الطقس ──
  "كلمات الطقس": {
    t0: [
      { id:"wt1-t0-1", type:"translate", arabic:"مشمس", options:["sunny","rainy","cloudy","windy"], correctAnswer:"sunny", explanation:"sunny = مشمس ☀️", xp:10 },
      { id:"wt1-t0-2", type:"listen_select", listenSentence:"rainy", options:["rainy","sunny","cloudy","snowy"], correctAnswer:"rainy", explanation:"rainy = ممطر 🌧️", xp:10 },
      { id:"wt1-t0-3", type:"translate", arabic:"غائم", options:["cloudy","sunny","windy","snowy"], correctAnswer:"cloudy", explanation:"cloudy = غائم ☁️", xp:10 },
      { id:"wt1-t0-4", type:"word_order", sentence:"It is sunny today", correctAnswer:"It is sunny today", explanation:"الجو مشمس اليوم", xp:12 },
      { id:"wt1-t0-5", type:"listen_select", listenSentence:"windy", options:["windy","sunny","rainy","cloudy"], correctAnswer:"windy", explanation:"windy = عاصف 💨", xp:12 },
      { id:"wt1-t0-6", type:"translate", arabic:"مثلج", options:["snowy","rainy","sunny","windy"], correctAnswer:"snowy", explanation:"snowy = مثلج ❄️", xp:10 },
      { id:"wt1-t0-7", type:"word_order", sentence:"It is rainy today", correctAnswer:"It is rainy today", explanation:"الجو ممطر اليوم", xp:12 },
      { id:"wt1-t0-8", type:"fill_blank", blankSentence:"It is ___ today", blankOptions:["sunny","very","the"], correctAnswer:"sunny", explanation:"It is sunny = الجو مشمس", xp:12 },
      { id:"wt1-t0-9", type:"matching", pairs:[{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"cloudy",ar:"غائم"},{en:"windy",ar:"عاصف"},{en:"snowy",ar:"مثلج"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"أحسنت! طابقت كلمات الطقس", xp:15 },
    ],
    t1: [
      { id:"wt1-t1-1", type:"translate", arabic:"عاصف", options:["windy","sunny","rainy","cloudy"], correctAnswer:"windy", explanation:"windy = عاصف", xp:12 },
      { id:"wt1-t1-2", type:"word_order", sentence:"It is cloudy and cold", correctAnswer:"It is cloudy and cold", explanation:"الجو غائم وبارد", xp:13 },
      { id:"wt1-t1-3", type:"listen_select", listenSentence:"It is snowy today", options:["snowy","sunny","rainy","windy"], correctAnswer:"snowy", explanation:"snowy = مثلج", xp:12 },
      { id:"wt1-t1-4", type:"translate", arabic:"الجو ممطر اليوم", options:["It is rainy today","It rainy today","Today is rainy it","Rainy it today is"], correctAnswer:"It is rainy today", explanation:"وصف الطقس", xp:13 },
      { id:"wt1-t1-5", type:"fill_blank", blankSentence:"It is ___ and cold", blankOptions:["cloudy","very","the"], correctAnswer:"cloudy", explanation:"cloudy = غائم", xp:13 },
      { id:"wt1-t1-6", type:"word_order", sentence:"It is windy today", correctAnswer:"It is windy today", explanation:"الجو عاصف اليوم", xp:13 },
      { id:"wt1-t1-7", type:"translate", arabic:"ممطر", options:["rainy","sunny","cloudy","windy"], correctAnswer:"rainy", explanation:"rainy = ممطر", xp:12 },
      { id:"wt1-t1-8", type:"matching", pairs:[{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"cloudy",ar:"غائم"},{en:"snowy",ar:"مثلج"},{en:"weather",ar:"طقس"},{en:"cold",ar:"بارد"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"wt1-t1-9", type:"fill_blank", blankSentence:"It is ___ today", blankOptions:["snowy","very","the"], correctAnswer:"snowy", explanation:"snowy = مثلج", xp:13 },
    ],
    t2: [
      { id:"wt1-t2-1", type:"word_order", sentence:"It is sunny and warm today", correctAnswer:"It is sunny and warm today", explanation:"الجو مشمس ودافئ", xp:14 },
      { id:"wt1-t2-2", type:"translate", arabic:"الجو غائم وممطر", options:["It is cloudy and rainy","It cloudy rainy is","Cloudy it rainy and","It is rainy cloudy and"], correctAnswer:"It is cloudy and rainy", explanation:"وصف بصفتين", xp:15 },
      { id:"wt1-t2-3", type:"listen_select", listenSentence:"It is very windy", options:["windy","sunny","rainy","cloudy"], correctAnswer:"windy", explanation:"very windy = عاصف جداً", xp:14 },
      { id:"wt1-t2-4", type:"fill_blank", blankSentence:"It is ___ and very cold", blankOptions:["snowy","very","the"], correctAnswer:"snowy", explanation:"snowy = مثلج", xp:15 },
      { id:"wt1-t2-5", type:"word_order", sentence:"It is cloudy in the morning", correctAnswer:"It is cloudy in the morning", explanation:"الجو غائم في الصباح", xp:14 },
      { id:"wt1-t2-6", type:"translate", arabic:"الجو مشمس ودافئ", options:["It is sunny and warm","It sunny warm is","Sunny it warm and","It is warm sunny and"], correctAnswer:"It is sunny and warm", explanation:"وصف بصفتين", xp:15 },
      { id:"wt1-t2-7", type:"matching", pairs:[{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"cloudy",ar:"غائم"},{en:"windy",ar:"عاصف"},{en:"warm",ar:"دافئ"},{en:"cold",ar:"بارد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"wt1-t2-8", type:"fill_blank", blankSentence:"It is ___ and warm today", blankOptions:["sunny","very","the"], correctAnswer:"sunny", explanation:"sunny = مشمس", xp:15 },
      { id:"wt1-t2-9", type:"listen_select", listenSentence:"It is rainy and cold", options:["rainy","sunny","windy","snowy"], correctAnswer:"rainy", explanation:"rainy = ممطر", xp:14 },
    ],
    t3: [
      { id:"wt1-t3-1", type:"word_order", sentence:"It is cloudy and windy in the morning", correctAnswer:"It is cloudy and windy in the morning", explanation:"وصف الطقس صباحاً", xp:18 },
      { id:"wt1-t3-2", type:"translate", arabic:"الجو مشمس صباحاً وممطر مساءً", options:["It is sunny in the morning and rainy in the evening","It sunny morning rainy evening","Sunny morning rainy it evening","It is morning sunny evening rainy"], correctAnswer:"It is sunny in the morning and rainy in the evening", explanation:"طقس متغير", xp:20 },
      { id:"wt1-t3-3", type:"listen_select", listenSentence:"It is snowy and cold", options:["snowy","sunny","rainy","windy"], correctAnswer:"snowy", explanation:"snowy = مثلج", xp:18 },
      { id:"wt1-t3-4", type:"fill_blank", blankSentence:"It is sunny and ___ today", blankOptions:["warm","very","the"], correctAnswer:"warm", explanation:"warm = دافئ", xp:18 },
      { id:"wt1-t3-5", type:"matching", pairs:[{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"cloudy",ar:"غائم"},{en:"windy",ar:"عاصف"},{en:"snowy",ar:"مثلج"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"رائع! راجعت كلمات الطقس", xp:18 },
      { id:"wt1-t3-6", type:"word_order", sentence:"It is rainy and very cold today", correctAnswer:"It is rainy and very cold today", explanation:"الجو ممطر وبارد جداً", xp:18 },
      { id:"wt1-t3-7", type:"translate", arabic:"الجو غائم وعاصف وبارد جداً", options:["It is cloudy windy and very cold","It cloudy windy cold","Cloudy windy it very cold","It is windy cloudy very cold"], correctAnswer:"It is cloudy windy and very cold", explanation:"وصف بثلاث صفات", xp:20 },
    ],
  },

  // ── الدرس 2: صف الطقس ──
  "صف الطقس": {
    t0: [
      { id:"wt2-t0-1", type:"translate", arabic:"الجو حار اليوم", options:["It's hot today","It hot today","Today hot it's","Hot it's today"], correctAnswer:"It's hot today", explanation:"It's hot today = الجو حار اليوم", xp:10 },
      { id:"wt2-t0-2", type:"listen_select", listenSentence:"The weather is nice", options:["weather","today","hot","cold"], correctAnswer:"weather", explanation:"weather = طقس", xp:10 },
      { id:"wt2-t0-3", type:"translate", arabic:"اليوم", options:["today","weather","nice","hot"], correctAnswer:"today", explanation:"today = اليوم", xp:10 },
      { id:"wt2-t0-4", type:"word_order", sentence:"The weather is nice today", correctAnswer:"The weather is nice today", explanation:"الطقس جميل اليوم", xp:12 },
      { id:"wt2-t0-5", type:"listen_select", listenSentence:"It is cold today", options:["cold","hot","nice","weather"], correctAnswer:"cold", explanation:"cold = بارد", xp:12 },
      { id:"wt2-t0-6", type:"translate", arabic:"طقس", options:["weather","today","nice","hot"], correctAnswer:"weather", explanation:"weather = طقس", xp:10 },
      { id:"wt2-t0-7", type:"word_order", sentence:"It is hot today", correctAnswer:"It is hot today", explanation:"الجو حار اليوم", xp:12 },
      { id:"wt2-t0-8", type:"fill_blank", blankSentence:"The ___ is nice today", blankOptions:["weather","very","is"], correctAnswer:"weather", explanation:"the weather = الطقس", xp:12 },
      { id:"wt2-t0-9", type:"matching", pairs:[{en:"weather",ar:"طقس"},{en:"today",ar:"اليوم"},{en:"nice",ar:"جميل"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"warm",ar:"دافئ"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"wt2-t1-1", type:"word_order", sentence:"The weather is very nice today", correctAnswer:"The weather is very nice today", explanation:"الطقس جميل جداً اليوم", xp:13 },
      { id:"wt2-t1-2", type:"translate", arabic:"الجو بارد جداً", options:["It is very cold","It cold very is","Very it cold is","It is cold very"], correctAnswer:"It is very cold", explanation:"very cold = بارد جداً", xp:13 },
      { id:"wt2-t1-3", type:"listen_select", listenSentence:"How is the weather", options:["weather","today","nice","hot"], correctAnswer:"weather", explanation:"How is the weather = كيف الطقس", xp:12 },
      { id:"wt2-t1-4", type:"fill_blank", blankSentence:"It's ___ today", blankOptions:["hot","weather","is"], correctAnswer:"hot", explanation:"It's hot = الجو حار", xp:13 },
      { id:"wt2-t1-5", type:"word_order", sentence:"How is the weather today", correctAnswer:"How is the weather today", explanation:"كيف الطقس اليوم؟", xp:13 },
      { id:"wt2-t1-6", type:"translate", arabic:"الطقس جميل", options:["The weather is nice","Weather nice is the","The nice weather is","Nice the weather is"], correctAnswer:"The weather is nice", explanation:"وصف الطقس", xp:13 },
      { id:"wt2-t1-7", type:"matching", pairs:[{en:"weather",ar:"طقس"},{en:"today",ar:"اليوم"},{en:"nice",ar:"جميل"},{en:"hot",ar:"حار"},{en:"how",ar:"كيف"},{en:"cold",ar:"بارد"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"wt2-t1-8", type:"fill_blank", blankSentence:"How is the ___ today", blankOptions:["weather","very","is"], correctAnswer:"weather", explanation:"the weather = الطقس", xp:13 },
      { id:"wt2-t1-9", type:"listen_select", listenSentence:"It is warm today", options:["warm","cold","hot","nice"], correctAnswer:"warm", explanation:"warm = دافئ", xp:12 },
    ],
    t2: [
      { id:"wt2-t2-1", type:"word_order", sentence:"The weather is hot and sunny today", correctAnswer:"The weather is hot and sunny today", explanation:"الطقس حار ومشمس", xp:14 },
      { id:"wt2-t2-2", type:"translate", arabic:"كيف الطقس اليوم؟", options:["How is the weather today?","How weather today?","Weather how today?","Today how weather?"], correctAnswer:"How is the weather today?", explanation:"السؤال عن الطقس", xp:15 },
      { id:"wt2-t2-3", type:"listen_select", listenSentence:"The weather is cold and rainy", options:["weather","today","cold","nice"], correctAnswer:"weather", explanation:"weather = طقس", xp:14 },
      { id:"wt2-t2-4", type:"fill_blank", blankSentence:"The weather is hot and ___", blankOptions:["sunny","very","is"], correctAnswer:"sunny", explanation:"hot and sunny = حار ومشمس", xp:15 },
      { id:"wt2-t2-5", type:"word_order", sentence:"It is cold and cloudy today", correctAnswer:"It is cold and cloudy today", explanation:"الجو بارد وغائم", xp:14 },
      { id:"wt2-t2-6", type:"translate", arabic:"الطقس بارد وممطر اليوم", options:["The weather is cold and rainy today","Weather cold rainy today","The cold weather rainy today","Cold rainy the weather today"], correctAnswer:"The weather is cold and rainy today", explanation:"وصف بصفتين", xp:15 },
      { id:"wt2-t2-7", type:"matching", pairs:[{en:"weather",ar:"طقس"},{en:"nice",ar:"جميل"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"wt2-t2-8", type:"fill_blank", blankSentence:"The weather is ___ and rainy", blankOptions:["cold","very","is"], correctAnswer:"cold", explanation:"cold and rainy = بارد وممطر", xp:15 },
      { id:"wt2-t2-9", type:"listen_select", listenSentence:"It is hot and sunny", options:["hot","cold","nice","warm"], correctAnswer:"hot", explanation:"hot = حار", xp:14 },
    ],
    t3: [
      { id:"wt2-t3-1", type:"word_order", sentence:"The weather is hot and sunny in the summer", correctAnswer:"The weather is hot and sunny in the summer", explanation:"طقس الصيف", xp:18 },
      { id:"wt2-t3-2", type:"translate", arabic:"الطقس بارد وممطر في الشتاء", options:["The weather is cold and rainy in the winter","Weather cold rainy winter","The cold weather rainy winter","Cold rainy weather the winter"], correctAnswer:"The weather is cold and rainy in the winter", explanation:"طقس الشتاء", xp:20 },
      { id:"wt2-t3-3", type:"listen_select", listenSentence:"How is the weather today", options:["weather","today","nice","hot"], correctAnswer:"weather", explanation:"How is the weather = كيف الطقس", xp:18 },
      { id:"wt2-t3-4", type:"fill_blank", blankSentence:"The weather is ___ and sunny today", blankOptions:["hot","very","is"], correctAnswer:"hot", explanation:"hot and sunny = حار ومشمس", xp:18 },
      { id:"wt2-t3-5", type:"matching", pairs:[{en:"weather",ar:"طقس"},{en:"today",ar:"اليوم"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"sunny",ar:"مشمس"},{en:"nice",ar:"جميل"}], correctAnswer:"matched", explanation:"رائع! راجعت وصف الطقس", xp:18 },
      { id:"wt2-t3-6", type:"word_order", sentence:"The weather is nice and warm today", correctAnswer:"The weather is nice and warm today", explanation:"الطقس جميل ودافئ", xp:18 },
      { id:"wt2-t3-7", type:"translate", arabic:"كيف الطقس اليوم؟ إنه حار ومشمس", options:["How is the weather today? It is hot and sunny","How weather today hot sunny","Weather today how hot sunny","Today how weather hot sunny"], correctAnswer:"How is the weather today? It is hot and sunny", explanation:"سؤال وجواب", xp:20 },
    ],
  },

  // ── الدرس 3: الفصول الأربعة ──
  "الفصول الأربعة": {
    t0: [
      { id:"wt3-t0-1", type:"translate", arabic:"ربيع", options:["spring","summer","autumn","winter"], correctAnswer:"spring", explanation:"spring = ربيع 🌸", xp:10 },
      { id:"wt3-t0-2", type:"listen_select", listenSentence:"summer", options:["summer","spring","autumn","winter"], correctAnswer:"summer", explanation:"summer = صيف ☀️", xp:10 },
      { id:"wt3-t0-3", type:"translate", arabic:"خريف", options:["autumn","winter","spring","summer"], correctAnswer:"autumn", explanation:"autumn = خريف 🍂", xp:10 },
      { id:"wt3-t0-4", type:"word_order", sentence:"I like the summer", correctAnswer:"I like the summer", explanation:"أحب الصيف", xp:12 },
      { id:"wt3-t0-5", type:"listen_select", listenSentence:"winter is cold", options:["winter","summer","spring","autumn"], correctAnswer:"winter", explanation:"winter = شتاء ❄️", xp:12 },
      { id:"wt3-t0-6", type:"translate", arabic:"شتاء", options:["winter","summer","spring","autumn"], correctAnswer:"winter", explanation:"winter = شتاء", xp:10 },
      { id:"wt3-t0-7", type:"word_order", sentence:"Spring is very nice", correctAnswer:"Spring is very nice", explanation:"الربيع جميل جداً", xp:12 },
      { id:"wt3-t0-8", type:"fill_blank", blankSentence:"I like the ___", blankOptions:["summer","very","is"], correctAnswer:"summer", explanation:"the summer = الصيف", xp:12 },
      { id:"wt3-t0-9", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"autumn",ar:"خريف"},{en:"winter",ar:"شتاء"},{en:"season",ar:"فصل"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الفصول", xp:15 },
    ],
    t1: [
      { id:"wt3-t1-1", type:"word_order", sentence:"Summer is hot and sunny", correctAnswer:"Summer is hot and sunny", explanation:"الصيف حار ومشمس", xp:13 },
      { id:"wt3-t1-2", type:"translate", arabic:"الشتاء بارد", options:["Winter is cold","Winter cold is","Cold winter is","Is winter cold"], correctAnswer:"Winter is cold", explanation:"وصف الفصل", xp:13 },
      { id:"wt3-t1-3", type:"listen_select", listenSentence:"I like the spring", options:["spring","summer","autumn","winter"], correctAnswer:"spring", explanation:"spring = ربيع", xp:12 },
      { id:"wt3-t1-4", type:"fill_blank", blankSentence:"___ is hot and sunny", blankOptions:["Summer","Winter","Spring"], correctAnswer:"Summer", explanation:"Summer is hot = الصيف حار", xp:13 },
      { id:"wt3-t1-5", type:"word_order", sentence:"Autumn is cool and windy", correctAnswer:"Autumn is cool and windy", explanation:"الخريف معتدل وعاصف", xp:13 },
      { id:"wt3-t1-6", type:"translate", arabic:"فصل", options:["season","weather","spring","summer"], correctAnswer:"season", explanation:"season = فصل", xp:13 },
      { id:"wt3-t1-7", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"autumn",ar:"خريف"},{en:"winter",ar:"شتاء"},{en:"season",ar:"فصل"},{en:"cold",ar:"بارد"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"wt3-t1-8", type:"fill_blank", blankSentence:"___ is cold and snowy", blankOptions:["Winter","Summer","Spring"], correctAnswer:"Winter", explanation:"Winter is cold = الشتاء بارد", xp:13 },
      { id:"wt3-t1-9", type:"listen_select", listenSentence:"Autumn is cool", options:["autumn","summer","spring","winter"], correctAnswer:"autumn", explanation:"autumn = خريف", xp:12 },
    ],
    t2: [
      { id:"wt3-t2-1", type:"word_order", sentence:"Summer is hot and winter is cold", correctAnswer:"Summer is hot and winter is cold", explanation:"مقارنة فصلين", xp:14 },
      { id:"wt3-t2-2", type:"translate", arabic:"الربيع جميل ومشمس", options:["Spring is nice and sunny","Spring nice sunny is","Nice spring sunny is","Is spring nice sunny"], correctAnswer:"Spring is nice and sunny", explanation:"وصف الفصل", xp:15 },
      { id:"wt3-t2-3", type:"listen_select", listenSentence:"I like summer best", options:["summer","spring","autumn","winter"], correctAnswer:"summer", explanation:"summer = صيف", xp:14 },
      { id:"wt3-t2-4", type:"fill_blank", blankSentence:"In ___ the weather is hot", blankOptions:["summer","winter","spring"], correctAnswer:"summer", explanation:"in summer = في الصيف", xp:15 },
      { id:"wt3-t2-5", type:"word_order", sentence:"In winter the weather is cold", correctAnswer:"In winter the weather is cold", explanation:"في الشتاء الجو بارد", xp:14 },
      { id:"wt3-t2-6", type:"translate", arabic:"الخريف معتدل وممطر", options:["Autumn is cool and rainy","Autumn cool rainy is","Cool autumn rainy is","Is autumn cool rainy"], correctAnswer:"Autumn is cool and rainy", explanation:"وصف بصفتين", xp:15 },
      { id:"wt3-t2-7", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"autumn",ar:"خريف"},{en:"winter",ar:"شتاء"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"wt3-t2-8", type:"fill_blank", blankSentence:"In ___ the weather is cold", blankOptions:["winter","summer","spring"], correctAnswer:"winter", explanation:"in winter = في الشتاء", xp:15 },
      { id:"wt3-t2-9", type:"listen_select", listenSentence:"Spring is nice", options:["spring","summer","autumn","winter"], correctAnswer:"spring", explanation:"spring = ربيع", xp:14 },
    ],
    t3: [
      { id:"wt3-t3-1", type:"word_order", sentence:"In summer the weather is hot and sunny", correctAnswer:"In summer the weather is hot and sunny", explanation:"طقس الصيف", xp:18 },
      { id:"wt3-t3-2", type:"translate", arabic:"الصيف حار والشتاء بارد والربيع جميل", options:["Summer is hot winter is cold and spring is nice","Summer hot winter cold spring nice","Hot summer cold winter nice spring","Summer is hot cold winter spring nice"], correctAnswer:"Summer is hot winter is cold and spring is nice", explanation:"ثلاثة فصول", xp:20 },
      { id:"wt3-t3-3", type:"listen_select", listenSentence:"Winter is cold and snowy", options:["winter","summer","spring","autumn"], correctAnswer:"winter", explanation:"winter = شتاء", xp:18 },
      { id:"wt3-t3-4", type:"fill_blank", blankSentence:"In ___ the weather is cool and windy", blankOptions:["autumn","summer","spring"], correctAnswer:"autumn", explanation:"in autumn = في الخريف", xp:18 },
      { id:"wt3-t3-5", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"autumn",ar:"خريف"},{en:"winter",ar:"شتاء"},{en:"season",ar:"فصل"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"رائع! راجعت الفصول", xp:18 },
      { id:"wt3-t3-6", type:"word_order", sentence:"I like spring and summer best", correctAnswer:"I like spring and summer best", explanation:"أحب الربيع والصيف", xp:18 },
      { id:"wt3-t3-7", type:"translate", arabic:"في الصيف الجو حار وفي الشتاء الجو بارد", options:["In summer it is hot and in winter it is cold","In summer hot winter cold","Summer it hot winter it cold","In summer winter hot cold it"], correctAnswer:"In summer it is hot and in winter it is cold", explanation:"مقارنة فصلين", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة ──
  "تحدي الوحدة": {
    t0: [
      { id:"wtc-t0-1", type:"word_order", sentence:"It is sunny today", correctAnswer:"It is sunny today", explanation:"الجو مشمس اليوم", xp:15 },
      { id:"wtc-t0-2", type:"translate", arabic:"الطقس جميل اليوم", options:["The weather is nice today","Weather nice today","The nice weather today","Nice weather the today"], correctAnswer:"The weather is nice today", explanation:"وصف الطقس", xp:15 },
      { id:"wtc-t0-3", type:"listen_select", listenSentence:"It is rainy today", options:["rainy","sunny","cloudy","snowy"], correctAnswer:"rainy", explanation:"rainy = ممطر", xp:15 },
      { id:"wtc-t0-4", type:"fill_blank", blankSentence:"I like the ___", blankOptions:["summer","very","is"], correctAnswer:"summer", explanation:"the summer = الصيف", xp:15 },
      { id:"wtc-t0-5", type:"matching", pairs:[{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"summer",ar:"صيف"},{en:"winter",ar:"شتاء"},{en:"weather",ar:"طقس"},{en:"cold",ar:"بارد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"wtc-t0-6", type:"translate", arabic:"الشتاء بارد", options:["Winter is cold","Winter cold is","Cold winter is","Is winter cold"], correctAnswer:"Winter is cold", explanation:"وصف الفصل", xp:15 },
      { id:"wtc-t0-7", type:"word_order", sentence:"It is cloudy and cold", correctAnswer:"It is cloudy and cold", explanation:"الجو غائم وبارد", xp:15 },
    ],
    t1: [
      { id:"wtc-t1-1", type:"translate", arabic:"الطقس حار ومشمس اليوم", options:["The weather is hot and sunny today","Weather hot sunny today","The hot weather sunny today","Hot sunny weather today"], correctAnswer:"The weather is hot and sunny today", explanation:"وصف بصفتين", xp:16 },
      { id:"wtc-t1-2", type:"word_order", sentence:"Summer is hot and sunny", correctAnswer:"Summer is hot and sunny", explanation:"الصيف حار ومشمس", xp:16 },
      { id:"wtc-t1-3", type:"listen_select", listenSentence:"How is the weather today", options:["weather","today","nice","hot"], correctAnswer:"weather", explanation:"How is the weather = كيف الطقس", xp:16 },
      { id:"wtc-t1-4", type:"fill_blank", blankSentence:"In ___ the weather is cold", blankOptions:["winter","summer","spring"], correctAnswer:"winter", explanation:"in winter = في الشتاء", xp:16 },
      { id:"wtc-t1-5", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"winter",ar:"شتاء"},{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"wtc-t1-6", type:"translate", arabic:"الجو غائم وممطر", options:["It is cloudy and rainy","It cloudy rainy","Cloudy it rainy","It rainy cloudy is"], correctAnswer:"It is cloudy and rainy", explanation:"وصف بصفتين", xp:16 },
      { id:"wtc-t1-7", type:"word_order", sentence:"Winter is cold and snowy", correctAnswer:"Winter is cold and snowy", explanation:"الشتاء بارد ومثلج", xp:16 },
    ],
    t2: [
      { id:"wtc-t2-1", type:"word_order", sentence:"The weather is hot and sunny in the summer", correctAnswer:"The weather is hot and sunny in the summer", explanation:"طقس الصيف", xp:18 },
      { id:"wtc-t2-2", type:"translate", arabic:"كيف الطقس اليوم؟ إنه بارد وممطر", options:["How is the weather today? It is cold and rainy","How weather today cold rainy","Weather today how cold rainy","Today how weather cold rainy"], correctAnswer:"How is the weather today? It is cold and rainy", explanation:"سؤال وجواب", xp:18 },
      { id:"wtc-t2-3", type:"listen_select", listenSentence:"It is very windy today", options:["windy","sunny","rainy","cloudy"], correctAnswer:"windy", explanation:"very windy = عاصف جداً", xp:18 },
      { id:"wtc-t2-4", type:"fill_blank", blankSentence:"In summer the weather is hot and ___", blankOptions:["sunny","very","is"], correctAnswer:"sunny", explanation:"hot and sunny = حار ومشمس", xp:18 },
      { id:"wtc-t2-5", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"autumn",ar:"خريف"},{en:"sunny",ar:"مشمس"},{en:"cloudy",ar:"غائم"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"wtc-t2-6", type:"translate", arabic:"الصيف حار والشتاء بارد", options:["Summer is hot and winter is cold","Summer hot winter cold","Hot summer cold winter","Summer is hot cold winter"], correctAnswer:"Summer is hot and winter is cold", explanation:"مقارنة فصلين", xp:18 },
      { id:"wtc-t2-7", type:"word_order", sentence:"In winter the weather is cold and snowy", correctAnswer:"In winter the weather is cold and snowy", explanation:"طقس الشتاء", xp:18 },
    ],
    t3: [
      { id:"wtc-t3-1", type:"word_order", sentence:"In summer the weather is hot and in winter it is cold", correctAnswer:"In summer the weather is hot and in winter it is cold", explanation:"مقارنة فصلين", xp:22 },
      { id:"wtc-t3-2", type:"translate", arabic:"الطقس مشمس صباحاً وممطر مساءً", options:["The weather is sunny in the morning and rainy in the evening","Weather sunny morning rainy evening","The sunny weather morning rainy evening","Sunny morning rainy weather evening"], correctAnswer:"The weather is sunny in the morning and rainy in the evening", explanation:"طقس متغير", xp:22 },
      { id:"wtc-t3-3", type:"listen_select", listenSentence:"How is the weather today", options:["weather","today","nice","hot"], correctAnswer:"weather", explanation:"How is the weather = كيف الطقس", xp:20 },
      { id:"wtc-t3-4", type:"fill_blank", blankSentence:"In ___ the weather is cool and windy", blankOptions:["autumn","summer","spring"], correctAnswer:"autumn", explanation:"in autumn = في الخريف", xp:22 },
      { id:"wtc-t3-5", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"autumn",ar:"خريف"},{en:"winter",ar:"شتاء"},{en:"sunny",ar:"مشمس"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"wtc-t3-6", type:"word_order", sentence:"The weather is nice and warm in spring", correctAnswer:"The weather is nice and warm in spring", explanation:"طقس الربيع", xp:22 },
      { id:"wtc-t3-7", type:"translate", arabic:"كيف الطقس؟ في الصيف حار وفي الشتاء بارد", options:["How is the weather? In summer it is hot and in winter it is cold","How weather summer hot winter cold","Weather how summer hot winter cold","How is summer hot winter cold weather"], correctAnswer:"How is the weather? In summer it is hot and in winter it is cold", explanation:"سؤال وجواب 👑", xp:24 },
    ],
  },
};
