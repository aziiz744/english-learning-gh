import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 31: تنقّل في مدينة غير مألوفة
//   درس 1: أماكن المدينة — bank, station, square, corner, bridge
//   درس 2: الاتجاهات — turn left, go straight, next to, across
//   درس 3: اسأل عن الطريق — How do I get to, Excuse me, far
// ══════════════════════════════════════════════════════════════

export const unit31CityBank: Record<string, TieredBank> = {

  "أماكن المدينة": {
    t0: [
      { id:"ct-pic-1", type:"picture_match", word:"bank", arabic:"بنك", pictureOptions:[{emoji:"🏦",label:"bank"},{emoji:"🚉",label:"station"},{emoji:"🌉",label:"bridge"},{emoji:"⛲",label:"square"}], correctAnswer:"bank", explanation:"بنك = bank 🏦", xp:10 },
      { id:"ci1-t0-1", type:"translate", arabic:"بنك", options:["bank","station","square","bridge"], correctAnswer:"bank", explanation:"bank = بنك 🏦", xp:10 },
      { id:"ci1-t0-2", type:"listen_select", listenSentence:"station", options:["station","stadium","statue","station"], correctAnswer:"station", explanation:"station = محطة 🚉", xp:10 },
      { id:"ci1-t0-3", type:"translate", arabic:"جسر", options:["bridge","corner","square","street"], correctAnswer:"bridge", explanation:"bridge = جسر 🌉", xp:10 },
      { id:"ci1-t0-4", type:"word_order", sentence:"Where is the bank", correctAnswer:"Where is the bank", explanation:"أين البنك؟", xp:12 },
      { id:"ci1-t0-5", type:"fill_blank", blankSentence:"The train ___ is near", blankOptions:["station","run","very"], correctAnswer:"station", explanation:"train station = محطة القطار", xp:12 },
      { id:"ci1-t0-6", type:"translate", arabic:"ساحة", options:["square","corner","bridge","bank"], correctAnswer:"square", explanation:"square = ساحة ⛲", xp:10 },
      { id:"ci1-t0-7", type:"listen_select", listenSentence:"the corner", options:["corner","coroner","corn","cooler"], correctAnswer:"corner", explanation:"corner = زاوية/ركن", xp:12 },
      { id:"ci1-t0-8", type:"word_order", sentence:"The shop is near here", correctAnswer:"The shop is near here", explanation:"المتجر قريب من هنا", xp:12 },
      { id:"ci1-t0-9", type:"matching", pairs:[{en:"bank",ar:"بنك"},{en:"station",ar:"محطة"},{en:"square",ar:"ساحة"},{en:"corner",ar:"زاوية"},{en:"bridge",ar:"جسر"},{en:"street",ar:"شارع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ci1-t1-1", type:"translate", arabic:"زاوية", options:["corner","center","middle","side"], correctAnswer:"corner", explanation:"corner = زاوية/ركن", xp:12 },
      { id:"ci1-t1-2", type:"word_order", sentence:"The bank is on the corner", correctAnswer:"The bank is on the corner", explanation:"البنك على الزاوية", xp:14 },
      { id:"ci1-t1-3", type:"listen_select", listenSentence:"the bus stop", options:["stop","shop","step","stay"], correctAnswer:"stop", explanation:"bus stop = موقف الحافلة", xp:13 },
      { id:"ci1-t1-4", type:"translate", arabic:"موقف الحافلة", options:["bus stop","bus station","bus park","bus place"], correctAnswer:"bus stop", explanation:"bus stop = موقف الحافلة 🚏", xp:12 },
      { id:"ci1-t1-5", type:"fill_blank", blankSentence:"There is a park near the ___", blankOptions:["square","run","very"], correctAnswer:"square", explanation:"the square = الساحة", xp:14 },
      { id:"ci1-t1-6", type:"word_order", sentence:"The museum is in the center", correctAnswer:"The museum is in the center", explanation:"المتحف في المركز", xp:14 },
      { id:"ci1-t1-7", type:"translate", arabic:"مركز المدينة", options:["city center","city corner","city square","city park"], correctAnswer:"city center", explanation:"city center = مركز المدينة", xp:13 },
      { id:"ci1-t1-8", type:"listen_select", listenSentence:"across the bridge", options:["bridge","brick","brave","brush"], correctAnswer:"bridge", explanation:"across the bridge = عبر الجسر", xp:13 },
      { id:"ci1-t1-9", type:"matching", pairs:[{en:"bus stop",ar:"موقف الحافلة"},{en:"city center",ar:"مركز المدينة"},{en:"corner",ar:"زاوية"},{en:"museum",ar:"متحف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ci1-t2-1", type:"word_order", sentence:"The hotel is in the city center", correctAnswer:"The hotel is in the city center", explanation:"الفندق في مركز المدينة", xp:16 },
      { id:"ci1-t2-2", type:"translate", arabic:"البنك بجوار محطة القطار", options:["The bank is next to the train station","The bank is next the train station","The bank next to the train station","The bank is next to train station"], correctAnswer:"The bank is next to the train station", explanation:"next to = بجوار", xp:16 },
      { id:"ci1-t2-3", type:"fill_blank", blankSentence:"Cross the ___ to reach the park", blankOptions:["bridge","run","very"], correctAnswer:"bridge", explanation:"cross the bridge = اعبر الجسر", xp:15 },
      { id:"ci1-t2-4", type:"word_order", sentence:"There is a pharmacy on the corner", correctAnswer:"There is a pharmacy on the corner", explanation:"يوجد صيدلية على الزاوية", xp:16 },
      { id:"ci1-t2-5", type:"translate", arabic:"المطعم مقابل البنك", options:["The restaurant is across from the bank","The restaurant is across the bank","The restaurant across from the bank","The restaurant is across from bank"], correctAnswer:"The restaurant is across from the bank", explanation:"across from = مقابل", xp:16 },
      { id:"ci1-t2-6", type:"listen_select", listenSentence:"the main square", options:["main","mine","mane","man"], correctAnswer:"main", explanation:"main square = الساحة الرئيسية", xp:15 },
      { id:"ci1-t2-7", type:"word_order", sentence:"The market is behind the station", correctAnswer:"The market is behind the station", explanation:"السوق خلف المحطة", xp:15 },
      { id:"ci1-t2-8", type:"fill_blank", blankSentence:"The library is near the ___ center", blankOptions:["city","run","very"], correctAnswer:"city", explanation:"city center = مركز المدينة", xp:15 },
    ],
    t3: [],
  },

  "اتجاهات المدينة": {
    t0: [
      { id:"ci2-t0-1", type:"translate", arabic:"انعطف يساراً", options:["turn left","turn right","go straight","go back"], correctAnswer:"turn left", explanation:"turn left = انعطف يساراً", xp:10 },
      { id:"ci2-t0-2", type:"translate", arabic:"انعطف يميناً", options:["turn right","turn left","go straight","stop here"], correctAnswer:"turn right", explanation:"turn right = انعطف يميناً", xp:10 },
      { id:"ci2-t0-3", type:"listen_select", listenSentence:"go straight", options:["straight","strait","street","strict"], correctAnswer:"straight", explanation:"go straight = امشِ مستقيماً", xp:10 },
      { id:"ci2-t0-4", type:"word_order", sentence:"Turn left here", correctAnswer:"Turn left here", explanation:"انعطف يساراً هنا", xp:12 },
      { id:"ci2-t0-5", type:"fill_blank", blankSentence:"Go ___ for two blocks", blankOptions:["straight","run","very"], correctAnswer:"straight", explanation:"go straight = امشِ مستقيماً", xp:12 },
      { id:"ci2-t0-6", type:"translate", arabic:"يمين", options:["right","left","up","down"], correctAnswer:"right", explanation:"right = يمين", xp:10 },
      { id:"ci2-t0-7", type:"listen_select", listenSentence:"turn right", options:["right","write","ride","rate"], correctAnswer:"right", explanation:"turn right = انعطف يميناً", xp:12 },
      { id:"ci2-t0-8", type:"word_order", sentence:"Go straight ahead", correctAnswer:"Go straight ahead", explanation:"امشِ مستقيماً للأمام", xp:12 },
      { id:"ci2-t0-9", type:"matching", pairs:[{en:"turn left",ar:"انعطف يساراً"},{en:"turn right",ar:"انعطف يميناً"},{en:"go straight",ar:"امشِ مستقيماً"},{en:"across",ar:"عبر"},{en:"next to",ar:"بجوار"},{en:"behind",ar:"خلف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ci2-t1-1", type:"word_order", sentence:"Turn right at the corner", correctAnswer:"Turn right at the corner", explanation:"انعطف يميناً عند الزاوية", xp:14 },
      { id:"ci2-t1-2", type:"translate", arabic:"امشِ مستقيماً ثم انعطف يساراً", options:["Go straight then turn left","Go straight than turn left","Go straight then turns left","Go straight then turn lefts"], correctAnswer:"Go straight then turn left", explanation:"go straight then turn left", xp:14 },
      { id:"ci2-t1-3", type:"listen_select", listenSentence:"it is on your right", options:["right","write","wright","rite"], correctAnswer:"right", explanation:"on your right = على يمينك", xp:13 },
      { id:"ci2-t1-4", type:"fill_blank", blankSentence:"It is ___ to the bank", blankOptions:["next","run","very"], correctAnswer:"next", explanation:"next to = بجوار", xp:14 },
      { id:"ci2-t1-5", type:"word_order", sentence:"It is across from the station", correctAnswer:"It is across from the station", explanation:"إنه مقابل المحطة", xp:14 },
      { id:"ci2-t1-6", type:"translate", arabic:"عند إشارة المرور", options:["at the traffic light","at the traffic lights","at traffic light","on the traffic light"], correctAnswer:"at the traffic light", explanation:"traffic light = إشارة المرور 🚦", xp:13 },
      { id:"ci2-t1-7", type:"listen_select", listenSentence:"on the left side", options:["left","lift","life","leaf"], correctAnswer:"left", explanation:"on the left = على اليسار", xp:13 },
      { id:"ci2-t1-8", type:"word_order", sentence:"Walk past the supermarket", correctAnswer:"Walk past the supermarket", explanation:"امشِ متجاوزاً السوبرماركت", xp:14 },
      { id:"ci2-t1-9", type:"matching", pairs:[{en:"traffic light",ar:"إشارة المرور"},{en:"on your right",ar:"على يمينك"},{en:"across from",ar:"مقابل"},{en:"walk past",ar:"امشِ متجاوزاً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ci2-t2-1", type:"word_order", sentence:"Go straight and turn left at the traffic light", correctAnswer:"Go straight and turn left at the traffic light", explanation:"امشِ مستقيماً وانعطف يساراً عند الإشارة", xp:16 },
      { id:"ci2-t2-2", type:"translate", arabic:"المطعم على يمينك بعد البنك", options:["The restaurant is on your right after the bank","The restaurant is on your right after bank","The restaurant on your right after the bank","The restaurant is on your right before the bank"], correctAnswer:"The restaurant is on your right after the bank", explanation:"on your right after = على يمينك بعد", xp:16 },
      { id:"ci2-t2-3", type:"fill_blank", blankSentence:"Take the second street on the ___", blankOptions:["left","run","very"], correctAnswer:"left", explanation:"on the left = على اليسار", xp:15 },
      { id:"ci2-t2-4", type:"word_order", sentence:"It is between the bank and the post office", correctAnswer:"It is between the bank and the post office", explanation:"إنه بين البنك ومكتب البريد", xp:16 },
      { id:"ci2-t2-5", type:"translate", arabic:"اعبر الشارع وستجده هناك", options:["Cross the street and you'll find it there","Cross the street and you'll found it there","Cross the streets and you'll find it there","Cross the street and you find it there"], correctAnswer:"Cross the street and you'll find it there", explanation:"cross the street = اعبر الشارع", xp:16 },
      { id:"ci2-t2-6", type:"listen_select", listenSentence:"at the roundabout", options:["roundabout","round","around","rounded"], correctAnswer:"roundabout", explanation:"roundabout = دوّار", xp:15 },
      { id:"ci2-t2-7", type:"word_order", sentence:"Follow this road to the end", correctAnswer:"Follow this road to the end", explanation:"اتبع هذا الطريق حتى النهاية", xp:15 },
      { id:"ci2-t2-8", type:"fill_blank", blankSentence:"Go ___ the bridge to the other side", blankOptions:["across","run","very"], correctAnswer:"across", explanation:"go across = اعبر", xp:15 },
    ],
    t3: [],
  },

  "اسأل عن الطريق": {
    t0: [
      { id:"ci3-t0-1", type:"translate", arabic:"عفواً", options:["Excuse me","Excuse you","Sorry me","Pardon you"], correctAnswer:"Excuse me", explanation:"Excuse me = عفواً", xp:10 },
      { id:"ci3-t0-2", type:"word_order", sentence:"How do I get there", correctAnswer:"How do I get there", explanation:"كيف أصل إلى هناك؟", xp:12 },
      { id:"ci3-t0-3", type:"listen_select", listenSentence:"is it far", options:["far","fair","fare","four"], correctAnswer:"far", explanation:"is it far = هل هو بعيد", xp:10 },
      { id:"ci3-t0-4", type:"translate", arabic:"بعيد", options:["far","near","close","here"], correctAnswer:"far", explanation:"far = بعيد", xp:10 },
      { id:"ci3-t0-5", type:"fill_blank", blankSentence:"How do I ___ to the station", blankOptions:["get","run","very"], correctAnswer:"get", explanation:"get to = يصل إلى", xp:12 },
      { id:"ci3-t0-6", type:"word_order", sentence:"Where is the bank please", correctAnswer:"Where is the bank please", explanation:"أين البنك من فضلك؟", xp:12 },
      { id:"ci3-t0-7", type:"listen_select", listenSentence:"thank you", options:["thank","think","thanks","thing"], correctAnswer:"thank", explanation:"thank you = شكراً", xp:10 },
      { id:"ci3-t0-8", type:"translate", arabic:"قريب", options:["near","far","there","where"], correctAnswer:"near", explanation:"near = قريب", xp:10 },
      { id:"ci3-t0-9", type:"matching", pairs:[{en:"Excuse me",ar:"عفواً"},{en:"How do I get to",ar:"كيف أصل إلى"},{en:"far",ar:"بعيد"},{en:"near",ar:"قريب"},{en:"lost",ar:"تائه"},{en:"map",ar:"خريطة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ci3-t1-1", type:"word_order", sentence:"Excuse me how do I get to the museum", correctAnswer:"Excuse me how do I get to the museum", explanation:"عفواً، كيف أصل للمتحف؟", xp:14 },
      { id:"ci3-t1-2", type:"translate", arabic:"هل هو بعيد من هنا؟", options:["Is it far from here?","Is it far from her?","Is it far of here?","Is it fars from here?"], correctAnswer:"Is it far from here?", explanation:"far from here = بعيد من هنا", xp:14 },
      { id:"ci3-t1-3", type:"listen_select", listenSentence:"I am lost", options:["lost","last","list","lust"], correctAnswer:"lost", explanation:"I am lost = أنا تائه", xp:13 },
      { id:"ci3-t1-4", type:"fill_blank", blankSentence:"Can you show me on the ___", blankOptions:["map","run","very"], correctAnswer:"map", explanation:"on the map = على الخريطة", xp:14 },
      { id:"ci3-t1-5", type:"word_order", sentence:"How long does it take to walk", correctAnswer:"How long does it take to walk", explanation:"كم يستغرق المشي؟", xp:14 },
      { id:"ci3-t1-6", type:"translate", arabic:"هل يمكنني المشي إلى هناك؟", options:["Can I walk there?","Can I walk their?","Can I walks there?","Can I walk there"], correctAnswer:"Can I walk there?", explanation:"walk there = المشي إلى هناك", xp:13 },
      { id:"ci3-t1-7", type:"listen_select", listenSentence:"it is nearby", options:["nearby","near by","near","nearly"], correctAnswer:"nearby", explanation:"nearby = قريب", xp:13 },
      { id:"ci3-t1-8", type:"word_order", sentence:"Is there a bus to the airport", correctAnswer:"Is there a bus to the airport", explanation:"هل هناك حافلة للمطار؟", xp:14 },
      { id:"ci3-t1-9", type:"matching", pairs:[{en:"I am lost",ar:"أنا تائه"},{en:"on the map",ar:"على الخريطة"},{en:"nearby",ar:"قريب"},{en:"how long",ar:"كم يستغرق"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ci3-t2-1", type:"word_order", sentence:"Excuse me could you tell me the way to the station", correctAnswer:"Excuse me could you tell me the way to the station", explanation:"عفواً، هل تدلّني على طريق المحطة؟", xp:16 },
      { id:"ci3-t2-2", type:"translate", arabic:"أنا تائه، هل يمكنك مساعدتي؟", options:["I'm lost, can you help me?","I'm lost, can you help me","I'm lost, can you helps me?","I'm lost, can you help I?"], correctAnswer:"I'm lost, can you help me?", explanation:"I'm lost = أنا تائه", xp:16 },
      { id:"ci3-t2-3", type:"fill_blank", blankSentence:"How far is it ___ foot", blankOptions:["on","run","very"], correctAnswer:"on", explanation:"on foot = سيراً على الأقدام", xp:15 },
      { id:"ci3-t2-4", type:"word_order", sentence:"Is it within walking distance from here", correctAnswer:"Is it within walking distance from here", explanation:"هل هو على مسافة مشي من هنا؟", xp:16 },
      { id:"ci3-t2-5", type:"translate", arabic:"خذ الحافلة رقم خمسة من فضلك", options:["Take bus number five please","Take bus number five, please","Takes bus number five please","Take buses number five please"], correctAnswer:"Take bus number five, please", explanation:"take bus number five", xp:16 },
      { id:"ci3-t2-6", type:"listen_select", listenSentence:"it's a ten minute walk", options:["walk","work","wake","week"], correctAnswer:"walk", explanation:"a ten minute walk = عشر دقائق مشياً", xp:15 },
      { id:"ci3-t2-7", type:"word_order", sentence:"Thank you so much for your help", correctAnswer:"Thank you so much for your help", explanation:"شكراً جزيلاً على مساعدتك", xp:15 },
      { id:"ci3-t2-8", type:"fill_blank", blankSentence:"Which way is the city ___", blankOptions:["center","run","very"], correctAnswer:"center", explanation:"city center = مركز المدينة", xp:15 },
    ],
    t3: [],
  },
};
