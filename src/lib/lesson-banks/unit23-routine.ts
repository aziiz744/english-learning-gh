import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 23: صف روتينك اليومي
//   درس 1: أفعال الروتين — wake up, get up, have breakfast, go to work
//   درس 2: روتين المساء — get home, have dinner, watch TV, go to bed
//   درس 3: صف يومك — first, then, after that, finally
// ══════════════════════════════════════════════════════════════

export const unit23RoutineBank: Record<string, TieredBank> = {

  "روتين الصباح": {
    t0: [
      { id:"rt-pic-1", type:"picture_match", word:"wake up", arabic:"يستيقظ", pictureOptions:[{emoji:"⏰",label:"wake up"},{emoji:"🍽️",label:"eat"},{emoji:"😴",label:"sleep"},{emoji:"🚿",label:"shower"}], correctAnswer:"wake up", explanation:"يستيقظ = wake up ⏰", xp:10 },
      { id:"rt1-t0-1", type:"translate", arabic:"يستيقظ", options:["wake up","get up","sit down","lie down"], correctAnswer:"wake up", explanation:"wake up = يستيقظ ⏰", xp:10 },
      { id:"rt1-t0-2", type:"listen_select", listenSentence:"get up", options:["get up","wake up","sit up","stand up"], correctAnswer:"get up", explanation:"get up = ينهض", xp:10 },
      { id:"rt1-t0-3", type:"translate", arabic:"يتناول الفطور", options:["have breakfast","have lunch","have dinner","have tea"], correctAnswer:"have breakfast", explanation:"have breakfast = يتناول الفطور 🍳", xp:10 },
      { id:"rt1-t0-4", type:"word_order", sentence:"I wake up at six", correctAnswer:"I wake up at six", explanation:"أستيقظ في السادسة", xp:12 },
      { id:"rt1-t0-5", type:"fill_blank", blankSentence:"I ___ up early", blankOptions:["wake","run","very"], correctAnswer:"wake", explanation:"wake up = يستيقظ", xp:12 },
      { id:"rt1-t0-6", type:"translate", arabic:"يأخذ دشاً", options:["take a shower","take a bus","take a book","take a walk"], correctAnswer:"take a shower", explanation:"take a shower = يأخذ دشاً 🚿", xp:10 },
      { id:"rt1-t0-7", type:"listen_select", listenSentence:"have breakfast", options:["breakfast","lunch","dinner","supper"], correctAnswer:"breakfast", explanation:"have breakfast = الفطور", xp:12 },
      { id:"rt1-t0-8", type:"word_order", sentence:"She goes to work", correctAnswer:"She goes to work", explanation:"تذهب للعمل", xp:12 },
      { id:"rt1-t0-9", type:"matching", pairs:[{en:"wake up",ar:"يستيقظ"},{en:"get up",ar:"ينهض"},{en:"have breakfast",ar:"يتناول الفطور"},{en:"take a shower",ar:"يأخذ دشاً"},{en:"go to work",ar:"يذهب للعمل"},{en:"get dressed",ar:"يرتدي ملابسه"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"rt1-t1-1", type:"translate", arabic:"يرتدي ملابسه", options:["get dressed","get up","get home","get ready"], correctAnswer:"get dressed", explanation:"get dressed = يرتدي ملابسه", xp:12 },
      { id:"rt1-t1-2", type:"word_order", sentence:"I have breakfast at seven", correctAnswer:"I have breakfast at seven", explanation:"أتناول الفطور في السابعة", xp:14 },
      { id:"rt1-t1-3", type:"listen_select", listenSentence:"go to work", options:["work","walk","wake","week"], correctAnswer:"work", explanation:"go to work = يذهب للعمل", xp:13 },
      { id:"rt1-t1-4", type:"translate", arabic:"يستعدّ", options:["get ready","get up","get home","get dressed"], correctAnswer:"get ready", explanation:"get ready = يستعدّ", xp:12 },
      { id:"rt1-t1-5", type:"fill_blank", blankSentence:"I ___ dressed quickly", blankOptions:["get","run","very"], correctAnswer:"get", explanation:"get dressed = يرتدي ملابسه", xp:14 },
      { id:"rt1-t1-6", type:"word_order", sentence:"He takes a shower in the morning", correctAnswer:"He takes a shower in the morning", explanation:"يأخذ دشاً في الصباح", xp:14 },
      { id:"rt1-t1-7", type:"translate", arabic:"يفرش أسنانه", options:["brush teeth","wash hands","comb hair","wash face"], correctAnswer:"brush teeth", explanation:"brush teeth = يفرش أسنانه 🪥", xp:13 },
      { id:"rt1-t1-8", type:"listen_select", listenSentence:"brush my teeth", options:["teeth","tea","tree","three"], correctAnswer:"teeth", explanation:"brush teeth = يفرش الأسنان", xp:13 },
      { id:"rt1-t1-9", type:"matching", pairs:[{en:"get ready",ar:"يستعدّ"},{en:"get dressed",ar:"يرتدي ملابسه"},{en:"brush teeth",ar:"يفرش أسنانه"},{en:"comb hair",ar:"يمشّط شعره"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"rt1-t2-1", type:"word_order", sentence:"I wake up and take a shower", correctAnswer:"I wake up and take a shower", explanation:"أستيقظ وآخذ دشاً", xp:16 },
      { id:"rt1-t2-2", type:"translate", arabic:"تتناول الفطور ثم تذهب للعمل", options:["She has breakfast then goes to work","She have breakfast then goes to work","She has breakfast then go to work","She has breakfast then going to work"], correctAnswer:"She has breakfast then goes to work", explanation:"has breakfast then goes", xp:16 },
      { id:"rt1-t2-3", type:"fill_blank", blankSentence:"I always ___ breakfast before work", blankOptions:["have","run","very"], correctAnswer:"have", explanation:"have breakfast = يتناول الفطور", xp:15 },
      { id:"rt1-t2-4", type:"word_order", sentence:"He gets up early and goes jogging", correctAnswer:"He gets up early and goes jogging", explanation:"ينهض مبكراً ويذهب للجري", xp:16 },
      { id:"rt1-t2-5", type:"translate", arabic:"أغسل وجهي وأفرش أسناني", options:["I wash my face and brush my teeth","I wash my face and brush my teeths","I washing my face and brush my teeth","I wash my face and brushing my teeth"], correctAnswer:"I wash my face and brush my teeth", explanation:"wash face and brush teeth", xp:16 },
      { id:"rt1-t2-6", type:"listen_select", listenSentence:"get ready for work", options:["ready","really","red","read"], correctAnswer:"ready", explanation:"get ready = يستعدّ", xp:15 },
      { id:"rt1-t2-7", type:"word_order", sentence:"My morning routine starts at six", correctAnswer:"My morning routine starts at six", explanation:"يبدأ روتيني الصباحي في السادسة", xp:15 },
      { id:"rt1-t2-8", type:"fill_blank", blankSentence:"She ___ dressed before breakfast", blankOptions:["gets","run","very"], correctAnswer:"gets", explanation:"gets dressed = ترتدي ملابسها", xp:15 },
    ],
    t3: [],
  },

  "روتين المساء": {
    t0: [
      { id:"rt2-t0-1", type:"translate", arabic:"يعود للمنزل", options:["get home","get up","go out","go away"], correctAnswer:"get home", explanation:"get home = يعود للمنزل 🏠", xp:10 },
      { id:"rt2-t0-2", type:"word_order", sentence:"I get home at five", correctAnswer:"I get home at five", explanation:"أعود للمنزل في الخامسة", xp:12 },
      { id:"rt2-t0-3", type:"listen_select", listenSentence:"have dinner", options:["dinner","lunch","breakfast","supper"], correctAnswer:"dinner", explanation:"have dinner = يتناول العشاء 🍽️", xp:10 },
      { id:"rt2-t0-4", type:"translate", arabic:"يتناول العشاء", options:["have dinner","have lunch","have breakfast","have tea"], correctAnswer:"have dinner", explanation:"have dinner = يتناول العشاء", xp:10 },
      { id:"rt2-t0-5", type:"fill_blank", blankSentence:"We ___ dinner at eight", blankOptions:["have","run","very"], correctAnswer:"have", explanation:"have dinner = يتناول العشاء", xp:12 },
      { id:"rt2-t0-6", type:"translate", arabic:"يشاهد التلفاز", options:["watch TV","watch out","look TV","see TV"], correctAnswer:"watch TV", explanation:"watch TV = يشاهد التلفاز 📺", xp:10 },
      { id:"rt2-t0-7", type:"listen_select", listenSentence:"go to bed", options:["bed","bad","bid","bead"], correctAnswer:"bed", explanation:"go to bed = يذهب للنوم 🛏️", xp:12 },
      { id:"rt2-t0-8", type:"word_order", sentence:"I go to bed at ten", correctAnswer:"I go to bed at ten", explanation:"أذهب للنوم في العاشرة", xp:12 },
      { id:"rt2-t0-9", type:"matching", pairs:[{en:"get home",ar:"يعود للمنزل"},{en:"have dinner",ar:"يتناول العشاء"},{en:"watch TV",ar:"يشاهد التلفاز"},{en:"go to bed",ar:"يذهب للنوم"},{en:"relax",ar:"يسترخي"},{en:"read a book",ar:"يقرأ كتاباً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"rt2-t1-1", type:"translate", arabic:"يسترخي", options:["relax","run","rush","race"], correctAnswer:"relax", explanation:"relax = يسترخي", xp:12 },
      { id:"rt2-t1-2", type:"word_order", sentence:"After dinner I watch TV", correctAnswer:"After dinner I watch TV", explanation:"بعد العشاء أشاهد التلفاز", xp:14 },
      { id:"rt2-t1-3", type:"listen_select", listenSentence:"read a book", options:["read","red","ready","real"], correctAnswer:"read", explanation:"read a book = يقرأ كتاباً", xp:13 },
      { id:"rt2-t1-4", type:"translate", arabic:"يقرأ كتاباً", options:["read a book","write a book","buy a book","read a letter"], correctAnswer:"read a book", explanation:"read a book = يقرأ كتاباً 📖", xp:12 },
      { id:"rt2-t1-5", type:"fill_blank", blankSentence:"I ___ TV after dinner", blankOptions:["watch","run","very"], correctAnswer:"watch", explanation:"watch TV = يشاهد التلفاز", xp:14 },
      { id:"rt2-t1-6", type:"word_order", sentence:"She reads a book before bed", correctAnswer:"She reads a book before bed", explanation:"تقرأ كتاباً قبل النوم", xp:14 },
      { id:"rt2-t1-7", type:"translate", arabic:"يغسل الأطباق", options:["wash the dishes","wash the clothes","wash the car","wash the floor"], correctAnswer:"wash the dishes", explanation:"wash dishes = يغسل الأطباق", xp:13 },
      { id:"rt2-t1-8", type:"listen_select", listenSentence:"relax at home", options:["relax","relate","release","reply"], correctAnswer:"relax", explanation:"relax = يسترخي", xp:13 },
      { id:"rt2-t1-9", type:"matching", pairs:[{en:"relax",ar:"يسترخي"},{en:"read a book",ar:"يقرأ كتاباً"},{en:"wash dishes",ar:"يغسل الأطباق"},{en:"go to sleep",ar:"ينام"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"rt2-t2-1", type:"word_order", sentence:"I get home and have dinner with my family", correctAnswer:"I get home and have dinner with my family", explanation:"أعود وأتناول العشاء مع عائلتي", xp:16 },
      { id:"rt2-t2-2", type:"translate", arabic:"بعد العشاء أسترخي وأشاهد التلفاز", options:["After dinner I relax and watch TV","After dinner I relax and watching TV","After dinner I relaxing and watch TV","After dinner I relax and watch the TV"], correctAnswer:"After dinner I relax and watch TV", explanation:"relax and watch TV", xp:16 },
      { id:"rt2-t2-3", type:"fill_blank", blankSentence:"I usually ___ to bed at eleven", blankOptions:["go","run","very"], correctAnswer:"go", explanation:"go to bed = يذهب للنوم", xp:15 },
      { id:"rt2-t2-4", type:"word_order", sentence:"She reads a book before going to sleep", correctAnswer:"She reads a book before going to sleep", explanation:"تقرأ كتاباً قبل النوم", xp:16 },
      { id:"rt2-t2-5", type:"translate", arabic:"نتناول العشاء معاً كل ليلة", options:["We have dinner together every night","We have dinner together every nights","We has dinner together every night","We have dinners together every night"], correctAnswer:"We have dinner together every night", explanation:"every night = كل ليلة", xp:16 },
      { id:"rt2-t2-6", type:"listen_select", listenSentence:"before going to bed", options:["bed","bad","bead","bid"], correctAnswer:"bed", explanation:"go to bed = ينام", xp:15 },
      { id:"rt2-t2-7", type:"word_order", sentence:"In the evening I help my children", correctAnswer:"In the evening I help my children", explanation:"في المساء أساعد أطفالي", xp:15 },
      { id:"rt2-t2-8", type:"fill_blank", blankSentence:"He ___ the dishes after dinner", blankOptions:["washes","run","very"], correctAnswer:"washes", explanation:"washes the dishes = يغسل الأطباق", xp:15 },
    ],
    t3: [],
  },

  "صف يومك": {
    t0: [
      { id:"rt3-t0-1", type:"translate", arabic:"أولاً", options:["first","then","after","finally"], correctAnswer:"first", explanation:"first = أولاً", xp:10 },
      { id:"rt3-t0-2", type:"translate", arabic:"ثم", options:["then","first","after","last"], correctAnswer:"then", explanation:"then = ثم", xp:10 },
      { id:"rt3-t0-3", type:"listen_select", listenSentence:"after that", options:["after","before","over","under"], correctAnswer:"after", explanation:"after that = بعد ذلك", xp:10 },
      { id:"rt3-t0-4", type:"word_order", sentence:"First I wake up", correctAnswer:"First I wake up", explanation:"أولاً أستيقظ", xp:12 },
      { id:"rt3-t0-5", type:"fill_blank", blankSentence:"___ I have breakfast", blankOptions:["Then","Run","Very"], correctAnswer:"Then", explanation:"Then = ثم", xp:12 },
      { id:"rt3-t0-6", type:"translate", arabic:"أخيراً", options:["finally","first","then","next"], correctAnswer:"finally", explanation:"finally = أخيراً", xp:10 },
      { id:"rt3-t0-7", type:"listen_select", listenSentence:"finally", options:["finally","family","funny","finely"], correctAnswer:"finally", explanation:"finally = أخيراً", xp:12 },
      { id:"rt3-t0-8", type:"word_order", sentence:"Then I go to school", correctAnswer:"Then I go to school", explanation:"ثم أذهب للمدرسة", xp:12 },
      { id:"rt3-t0-9", type:"matching", pairs:[{en:"first",ar:"أولاً"},{en:"then",ar:"ثم"},{en:"after that",ar:"بعد ذلك"},{en:"finally",ar:"أخيراً"},{en:"next",ar:"التالي"},{en:"before",ar:"قبل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"rt3-t1-1", type:"word_order", sentence:"First I wake up then I have breakfast", correctAnswer:"First I wake up then I have breakfast", explanation:"أولاً أستيقظ ثم أتناول الفطور", xp:14 },
      { id:"rt3-t1-2", type:"translate", arabic:"بعد ذلك أذهب للعمل", options:["After that I go to work","After that I go work","After that I goes to work","After that I going to work"], correctAnswer:"After that I go to work", explanation:"after that = بعد ذلك", xp:14 },
      { id:"rt3-t1-3", type:"listen_select", listenSentence:"next I get dressed", options:["next","text","best","nest"], correctAnswer:"next", explanation:"next = التالي", xp:13 },
      { id:"rt3-t1-4", type:"fill_blank", blankSentence:"___ I go to bed", blankOptions:["Finally","Run","Very"], correctAnswer:"Finally", explanation:"Finally = أخيراً", xp:14 },
      { id:"rt3-t1-5", type:"word_order", sentence:"After work I go to the gym", correctAnswer:"After work I go to the gym", explanation:"بعد العمل أذهب للنادي", xp:14 },
      { id:"rt3-t1-6", type:"translate", arabic:"أولاً أنظّف غرفتي", options:["First I clean my room","First I clean my rooms","First I cleans my room","First I cleaning my room"], correctAnswer:"First I clean my room", explanation:"First I clean = أولاً أنظّف", xp:13 },
      { id:"rt3-t1-7", type:"listen_select", listenSentence:"before I sleep", options:["before","after","over","under"], correctAnswer:"before", explanation:"before = قبل", xp:13 },
      { id:"rt3-t1-8", type:"word_order", sentence:"Then we watch TV together", correctAnswer:"Then we watch TV together", explanation:"ثم نشاهد التلفاز معاً", xp:14 },
      { id:"rt3-t1-9", type:"matching", pairs:[{en:"next",ar:"التالي"},{en:"before",ar:"قبل"},{en:"after that",ar:"بعد ذلك"},{en:"finally",ar:"أخيراً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"rt3-t2-1", type:"word_order", sentence:"First I wake up and then I take a shower", correctAnswer:"First I wake up and then I take a shower", explanation:"أولاً أستيقظ ثم آخذ دشاً", xp:16 },
      { id:"rt3-t2-2", type:"translate", arabic:"بعد الفطور أذهب للعمل بالحافلة", options:["After breakfast I go to work by bus","After breakfast I go work by bus","After breakfast I goes to work by bus","After breakfast I go to work by buses"], correctAnswer:"After breakfast I go to work by bus", explanation:"by bus = بالحافلة", xp:16 },
      { id:"rt3-t2-3", type:"fill_blank", blankSentence:"___ that, I prepare lunch", blankOptions:["After","Run","Very"], correctAnswer:"After", explanation:"After that = بعد ذلك", xp:15 },
      { id:"rt3-t2-4", type:"word_order", sentence:"In the evening I finally relax at home", correctAnswer:"In the evening I finally relax at home", explanation:"في المساء أسترخي أخيراً في المنزل", xp:16 },
      { id:"rt3-t2-5", type:"translate", arabic:"يومي مزدحم لكنه ممتع", options:["My day is busy but fun","My day is busy but funny","My day is busy and fun","My days is busy but fun"], correctAnswer:"My day is busy but fun", explanation:"busy but fun = مزدحم لكن ممتع", xp:16 },
      { id:"rt3-t2-6", type:"listen_select", listenSentence:"a typical day", options:["typical","topical","tropical","typically"], correctAnswer:"typical", explanation:"a typical day = يوم عادي", xp:15 },
      { id:"rt3-t2-7", type:"word_order", sentence:"This is how I spend my day", correctAnswer:"This is how I spend my day", explanation:"هكذا أقضي يومي", xp:15 },
      { id:"rt3-t2-8", type:"fill_blank", blankSentence:"___ I check my email at work", blankOptions:["First","Run","Very"], correctAnswer:"First", explanation:"First = أولاً", xp:15 },
    ],
    t3: [],
  },
};
