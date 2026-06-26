import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 36: تحدّث عن الطقس والطبيعة
//   درس 1: الطقس — sunny, rainy, cloudy, windy, snowy
//   درس 2: الطبيعة — mountain, river, forest, beach, lake
//   درس 3: تحدث عنهما — What's the weather, It's going to, season
// ══════════════════════════════════════════════════════════════

export const unit36WeatherNatureBank: Record<string, TieredBank> = {

  "الطقس": {
    t0: [
      { id:"wn-pic-1", type:"picture_match", word:"sunny", arabic:"مشمس", pictureOptions:[{emoji:"☀️",label:"sunny"},{emoji:"🌧️",label:"rainy"},{emoji:"☁️",label:"cloudy"},{emoji:"❄️",label:"snowy"}], correctAnswer:"sunny", explanation:"مشمس = sunny ☀️", xp:10 },
      { id:"wn1-t0-1", type:"translate", arabic:"مشمس", options:["sunny","rainy","cloudy","windy"], correctAnswer:"sunny", explanation:"sunny = مشمس ☀️", xp:10 },
      { id:"wn1-t0-2", type:"listen_select", listenSentence:"rainy", options:["rainy","sunny","cloudy","windy"], correctAnswer:"rainy", explanation:"rainy = ممطر 🌧️", xp:10 },
      { id:"wn1-t0-3", type:"translate", arabic:"غائم", options:["cloudy","sunny","rainy","snowy"], correctAnswer:"cloudy", explanation:"cloudy = غائم ☁️", xp:10 },
      { id:"wn1-t0-4", type:"word_order", sentence:"It is sunny today", correctAnswer:"It is sunny today", explanation:"الجو مشمس اليوم", xp:12 },
      { id:"wn1-t0-5", type:"fill_blank", blankSentence:"It is ___ outside", blankOptions:["rainy","run","very"], correctAnswer:"rainy", explanation:"it is rainy = الجو ممطر", xp:12 },
      { id:"wn1-t0-6", type:"translate", arabic:"عاصف", options:["windy","sunny","rainy","cloudy"], correctAnswer:"windy", explanation:"windy = عاصف 💨", xp:10 },
      { id:"wn1-t0-7", type:"listen_select", listenSentence:"snowy", options:["snowy","sunny","rainy","windy"], correctAnswer:"snowy", explanation:"snowy = مثلج ❄️", xp:12 },
      { id:"wn1-t0-8", type:"word_order", sentence:"The weather is cold", correctAnswer:"The weather is cold", explanation:"الطقس بارد", xp:12 },
      { id:"wn1-t0-9", type:"matching", pairs:[{en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"cloudy",ar:"غائم"},{en:"windy",ar:"عاصف"},{en:"snowy",ar:"مثلج"},{en:"foggy",ar:"ضبابي"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"wn1-t1-1", type:"translate", arabic:"حارّ", options:["hot","cold","warm","cool"], correctAnswer:"hot", explanation:"hot = حارّ 🔥", xp:12 },
      { id:"wn1-t1-2", type:"word_order", sentence:"It is very cold and windy", correctAnswer:"It is very cold and windy", explanation:"الجو بارد وعاصف جداً", xp:14 },
      { id:"wn1-t1-3", type:"listen_select", listenSentence:"foggy", options:["foggy","funny","fluffy","frosty"], correctAnswer:"foggy", explanation:"foggy = ضبابي 🌫️", xp:13 },
      { id:"wn1-t1-4", type:"translate", arabic:"دافئ", options:["warm","cold","hot","cool"], correctAnswer:"warm", explanation:"warm = دافئ", xp:12 },
      { id:"wn1-t1-5", type:"fill_blank", blankSentence:"It is going to ___ today", blankOptions:["rain","run","very"], correctAnswer:"rain", explanation:"going to rain = ستمطر", xp:14 },
      { id:"wn1-t1-6", type:"word_order", sentence:"The sun is shining brightly", correctAnswer:"The sun is shining brightly", explanation:"الشمس تشرق بقوة", xp:14 },
      { id:"wn1-t1-7", type:"translate", arabic:"بارد منعش", options:["cool","hot","warm","freezing"], correctAnswer:"cool", explanation:"cool = منعش", xp:12 },
      { id:"wn1-t1-8", type:"listen_select", listenSentence:"it is freezing", options:["freezing","freeze","frozen","freezer"], correctAnswer:"freezing", explanation:"freezing = متجمّد", xp:13 },
      { id:"wn1-t1-9", type:"matching", pairs:[{en:"hot",ar:"حارّ"},{en:"warm",ar:"دافئ"},{en:"cool",ar:"منعش"},{en:"freezing",ar:"متجمّد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"wn1-t2-1", type:"word_order", sentence:"The weather is going to change tomorrow", correctAnswer:"The weather is going to change tomorrow", explanation:"سيتغيّر الطقس غداً", xp:16 },
      { id:"wn1-t2-2", type:"translate", arabic:"السماء ملبّدة بالغيوم اليوم", options:["The sky is cloudy today","The sky is cloud today","The sky cloudy today","The sky is cloudys today"], correctAnswer:"The sky is cloudy today", explanation:"the sky is cloudy = السماء غائمة", xp:16 },
      { id:"wn1-t2-3", type:"fill_blank", blankSentence:"There is a strong ___ today", blankOptions:["wind","run","very"], correctAnswer:"wind", explanation:"strong wind = رياح قوية", xp:15 },
      { id:"wn1-t2-4", type:"word_order", sentence:"It might rain later this afternoon", correctAnswer:"It might rain later this afternoon", explanation:"قد تمطر بعد الظهر", xp:16 },
      { id:"wn1-t2-5", type:"translate", arabic:"الطقس حارّ ورطب في الصيف", options:["The weather is hot and humid in summer","The weather is hot and humid in summers","The weather hot and humid in summer","The weather is hot and humids in summer"], correctAnswer:"The weather is hot and humid in summer", explanation:"hot and humid = حارّ ورطب", xp:16 },
      { id:"wn1-t2-6", type:"listen_select", listenSentence:"a thunderstorm is coming", options:["thunderstorm","thunder","storm","thunders"], correctAnswer:"thunderstorm", explanation:"thunderstorm = عاصفة رعدية ⛈️", xp:15 },
      { id:"wn1-t2-7", type:"word_order", sentence:"Take an umbrella because it is raining", correctAnswer:"Take an umbrella because it is raining", explanation:"خذ مظلّة لأنها تمطر", xp:15 },
      { id:"wn1-t2-8", type:"fill_blank", blankSentence:"The temperature is very ___ today", blankOptions:["high","run","very"], correctAnswer:"high", explanation:"high temperature = درجة حرارة عالية", xp:15 },
    ],
    t3: [],
  },

  "الطبيعة": {
    t0: [
      { id:"wn2-t0-1", type:"picture_match", word:"mountain", arabic:"جبل", pictureOptions:[{emoji:"⛰️",label:"mountain"},{emoji:"🌊",label:"sea"},{emoji:"🌳",label:"forest"},{emoji:"🏖️",label:"beach"}], correctAnswer:"mountain", explanation:"جبل = mountain ⛰️", xp:10 },
      { id:"wn2-t0-2", type:"translate", arabic:"جبل", options:["mountain","river","forest","beach"], correctAnswer:"mountain", explanation:"mountain = جبل ⛰️", xp:10 },
      { id:"wn2-t0-3", type:"listen_select", listenSentence:"river", options:["river","river","rever","raver"], correctAnswer:"river", explanation:"river = نهر 🏞️", xp:10 },
      { id:"wn2-t0-4", type:"translate", arabic:"غابة", options:["forest","mountain","river","lake"], correctAnswer:"forest", explanation:"forest = غابة 🌳", xp:10 },
      { id:"wn2-t0-5", type:"word_order", sentence:"I love the mountains", correctAnswer:"I love the mountains", explanation:"أحب الجبال", xp:12 },
      { id:"wn2-t0-6", type:"fill_blank", blankSentence:"We swim in the ___", blankOptions:["river","run","very"], correctAnswer:"river", explanation:"in the river = في النهر", xp:12 },
      { id:"wn2-t0-7", type:"translate", arabic:"شاطئ", options:["beach","lake","forest","mountain"], correctAnswer:"beach", explanation:"beach = شاطئ 🏖️", xp:10 },
      { id:"wn2-t0-8", type:"listen_select", listenSentence:"the lake", options:["lake","like","lack","lock"], correctAnswer:"lake", explanation:"lake = بحيرة", xp:12 },
      { id:"wn2-t0-9", type:"matching", pairs:[{en:"mountain",ar:"جبل"},{en:"river",ar:"نهر"},{en:"forest",ar:"غابة"},{en:"beach",ar:"شاطئ"},{en:"lake",ar:"بحيرة"},{en:"sea",ar:"بحر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"wn2-t1-1", type:"translate", arabic:"بحيرة", options:["lake","sea","river","ocean"], correctAnswer:"lake", explanation:"lake = بحيرة", xp:12 },
      { id:"wn2-t1-2", type:"word_order", sentence:"The forest is full of trees", correctAnswer:"The forest is full of trees", explanation:"الغابة مليئة بالأشجار", xp:14 },
      { id:"wn2-t1-3", type:"listen_select", listenSentence:"the ocean", options:["ocean","open","often","oven"], correctAnswer:"ocean", explanation:"ocean = محيط 🌊", xp:13 },
      { id:"wn2-t1-4", type:"translate", arabic:"محيط", options:["ocean","lake","river","beach"], correctAnswer:"ocean", explanation:"ocean = محيط", xp:12 },
      { id:"wn2-t1-5", type:"fill_blank", blankSentence:"We climbed the ___ yesterday", blankOptions:["mountain","run","very"], correctAnswer:"mountain", explanation:"climbed the mountain = تسلّقنا الجبل", xp:14 },
      { id:"wn2-t1-6", type:"word_order", sentence:"There is a waterfall in the forest", correctAnswer:"There is a waterfall in the forest", explanation:"يوجد شلّال في الغابة", xp:14 },
      { id:"wn2-t1-7", type:"translate", arabic:"صحراء", options:["desert","forest","mountain","lake"], correctAnswer:"desert", explanation:"desert = صحراء 🏜️", xp:13 },
      { id:"wn2-t1-8", type:"listen_select", listenSentence:"a beautiful valley", options:["valley","value","volley","valid"], correctAnswer:"valley", explanation:"valley = وادٍ", xp:13 },
      { id:"wn2-t1-9", type:"matching", pairs:[{en:"ocean",ar:"محيط"},{en:"desert",ar:"صحراء"},{en:"valley",ar:"وادٍ"},{en:"waterfall",ar:"شلّال"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"wn2-t2-1", type:"word_order", sentence:"We are going camping in the forest", correctAnswer:"We are going camping in the forest", explanation:"سنذهب للتخييم في الغابة", xp:16 },
      { id:"wn2-t2-2", type:"translate", arabic:"المنظر من الجبل رائع", options:["The view from the mountain is amazing","The view from the mountain is amazings","The view from mountain is amazing","The views from the mountain is amazing"], correctAnswer:"The view from the mountain is amazing", explanation:"the view = المنظر", xp:16 },
      { id:"wn2-t2-3", type:"fill_blank", blankSentence:"The river flows into the ___", blankOptions:["sea","run","very"], correctAnswer:"sea", explanation:"into the sea = إلى البحر", xp:15 },
      { id:"wn2-t2-4", type:"word_order", sentence:"We spent the day at the beach", correctAnswer:"We spent the day at the beach", explanation:"قضينا اليوم على الشاطئ", xp:16 },
      { id:"wn2-t2-5", type:"translate", arabic:"الطبيعة في هذا البلد جميلة جداً", options:["The nature in this country is very beautiful","The nature in this country is very beautifully","The nature in this country very beautiful","The natures in this country is very beautiful"], correctAnswer:"The nature in this country is very beautiful", explanation:"nature = الطبيعة", xp:16 },
      { id:"wn2-t2-6", type:"listen_select", listenSentence:"a peaceful lake", options:["peaceful","peace","piece","peaceless"], correctAnswer:"peaceful", explanation:"peaceful = هادئ", xp:15 },
      { id:"wn2-t2-7", type:"word_order", sentence:"The birds are singing in the trees", correctAnswer:"The birds are singing in the trees", explanation:"تغرّد الطيور في الأشجار", xp:15 },
      { id:"wn2-t2-8", type:"fill_blank", blankSentence:"We saw wild animals in the ___", blankOptions:["forest","run","very"], correctAnswer:"forest", explanation:"in the forest = في الغابة", xp:15 },
    ],
    t3: [],
  },

  "تحدّث عنهما": {
    t0: [
      { id:"wn3-t0-1", type:"translate", arabic:"كيف الطقس؟", options:["What's the weather?","How's the weather?","What weather?","How weather?"], correctAnswer:"What's the weather?", explanation:"What's the weather? = كيف الطقس؟", xp:10 },
      { id:"wn3-t0-2", type:"word_order", sentence:"What is the weather like", correctAnswer:"What is the weather like", explanation:"كيف هو الطقس؟", xp:12 },
      { id:"wn3-t0-3", type:"listen_select", listenSentence:"it's going to rain", options:["going","goes","gone","go"], correctAnswer:"going", explanation:"going to rain = ستمطر", xp:10 },
      { id:"wn3-t0-4", type:"translate", arabic:"فصل", options:["season","weather","nature","climate"], correctAnswer:"season", explanation:"season = فصل", xp:10 },
      { id:"wn3-t0-5", type:"fill_blank", blankSentence:"What's the ___ today", blankOptions:["weather","run","very"], correctAnswer:"weather", explanation:"the weather = الطقس", xp:12 },
      { id:"wn3-t0-6", type:"translate", arabic:"صيف", options:["summer","winter","spring","autumn"], correctAnswer:"summer", explanation:"summer = صيف ☀️", xp:10 },
      { id:"wn3-t0-7", type:"listen_select", listenSentence:"winter", options:["winter","summer","spring","autumn"], correctAnswer:"winter", explanation:"winter = شتاء ❄️", xp:12 },
      { id:"wn3-t0-8", type:"word_order", sentence:"It is going to be sunny", correctAnswer:"It is going to be sunny", explanation:"ستكون مشمسة", xp:12 },
      { id:"wn3-t0-9", type:"matching", pairs:[{en:"season",ar:"فصل"},{en:"summer",ar:"صيف"},{en:"winter",ar:"شتاء"},{en:"spring",ar:"ربيع"},{en:"autumn",ar:"خريف"},{en:"weather",ar:"طقس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"wn3-t1-1", type:"word_order", sentence:"What is your favorite season", correctAnswer:"What is your favorite season", explanation:"ما فصلك المفضّل؟", xp:14 },
      { id:"wn3-t1-2", type:"translate", arabic:"أحب الربيع لأنه دافئ", options:["I like spring because it is warm","I like spring because it is warms","I likes spring because it is warm","I like spring because is warm"], correctAnswer:"I like spring because it is warm", explanation:"spring = ربيع", xp:14 },
      { id:"wn3-t1-3", type:"listen_select", listenSentence:"in autumn", options:["autumn","auto","author","attempt"], correctAnswer:"autumn", explanation:"autumn = خريف 🍂", xp:13 },
      { id:"wn3-t1-4", type:"fill_blank", blankSentence:"It is going to snow in ___", blankOptions:["winter","run","very"], correctAnswer:"winter", explanation:"in winter = في الشتاء", xp:14 },
      { id:"wn3-t1-5", type:"word_order", sentence:"The leaves fall in autumn", correctAnswer:"The leaves fall in autumn", explanation:"تتساقط الأوراق في الخريف", xp:14 },
      { id:"wn3-t1-6", type:"translate", arabic:"الطقس بارد في الشتاء", options:["The weather is cold in winter","The weather is cold in winters","The weather cold in winter","The weather is colds in winter"], correctAnswer:"The weather is cold in winter", explanation:"cold in winter = بارد في الشتاء", xp:13 },
      { id:"wn3-t1-7", type:"listen_select", listenSentence:"the forecast says", options:["forecast","forecasts","forced","foreign"], correctAnswer:"forecast", explanation:"forecast = توقّعات الطقس", xp:13 },
      { id:"wn3-t1-8", type:"word_order", sentence:"It will be warmer next week", correctAnswer:"It will be warmer next week", explanation:"سيكون أدفأ الأسبوع القادم", xp:14 },
      { id:"wn3-t1-9", type:"matching", pairs:[{en:"spring",ar:"ربيع"},{en:"autumn",ar:"خريف"},{en:"forecast",ar:"توقّعات"},{en:"season",ar:"فصل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"wn3-t2-1", type:"word_order", sentence:"According to the forecast it will rain tomorrow", correctAnswer:"According to the forecast it will rain tomorrow", explanation:"حسب التوقّعات ستمطر غداً", xp:16 },
      { id:"wn3-t2-2", type:"translate", arabic:"الربيع هو أجمل فصل في السنة", options:["Spring is the most beautiful season of the year","Spring is the most beautiful season of year","Spring is most beautiful season of the year","Spring is the most beautifully season of the year"], correctAnswer:"Spring is the most beautiful season of the year", explanation:"the most beautiful season", xp:16 },
      { id:"wn3-t2-3", type:"fill_blank", blankSentence:"The weather is perfect ___ a picnic", blankOptions:["for","run","very"], correctAnswer:"for", explanation:"perfect for = مثالي لـ", xp:15 },
      { id:"wn3-t2-4", type:"word_order", sentence:"In winter many people go skiing in the mountains", correctAnswer:"In winter many people go skiing in the mountains", explanation:"في الشتاء يذهب كثيرون للتزلّج", xp:16 },
      { id:"wn3-t2-5", type:"translate", arabic:"يبدو أن الطقس سيكون عاصفاً غداً", options:["It looks like the weather will be windy tomorrow","It looks like the weather will be windy tomorrows","It look like the weather will be windy tomorrow","It looks like the weather will be wind tomorrow"], correctAnswer:"It looks like the weather will be windy tomorrow", explanation:"it looks like = يبدو أن", xp:16 },
      { id:"wn3-t2-6", type:"listen_select", listenSentence:"the climate is changing", options:["climate","climb","claim","clean"], correctAnswer:"climate", explanation:"climate = المناخ", xp:15 },
      { id:"wn3-t2-7", type:"word_order", sentence:"We should protect our beautiful nature", correctAnswer:"We should protect our beautiful nature", explanation:"يجب أن نحمي طبيعتنا الجميلة", xp:15 },
      { id:"wn3-t2-8", type:"fill_blank", blankSentence:"The days are getting longer in ___", blankOptions:["summer","run","very"], correctAnswer:"summer", explanation:"in summer = في الصيف", xp:15 },
    ],
    t3: [],
  },
};
