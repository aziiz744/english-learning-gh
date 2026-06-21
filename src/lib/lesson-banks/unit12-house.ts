import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 12: قم بجولة في منزلك
//   درس 1: غرف المنزل — kitchen, bedroom, bathroom, living room
//   درس 2: الأثاث — table, chair, bed, sofa, door, window
//   درس 3: أين الأشياء — in, on, under, the room
// ══════════════════════════════════════════════════════════════

export const unit12HouseBank: Record<string, TieredBank> = {

  "غرف المنزل": {
    t0: [
      { id:"ho-pic-1", type:"picture_match", word:"kitchen", arabic:"مطبخ", pictureOptions:[{emoji:"🍳",label:"kitchen"},{emoji:"🛏️",label:"bedroom"},{emoji:"🚿",label:"bathroom"},{emoji:"🛋️",label:"living room"}], correctAnswer:"kitchen", explanation:"مطبخ = kitchen 🍳", xp:10 },
      { id:"ho-pic-2", type:"picture_match", word:"bedroom", arabic:"غرفة نوم", pictureOptions:[{emoji:"🛏️",label:"bedroom"},{emoji:"🍳",label:"kitchen"},{emoji:"🚿",label:"bathroom"},{emoji:"🚪",label:"door"}], correctAnswer:"bedroom", explanation:"غرفة نوم = bedroom 🛏️", xp:10 },
      { id:"ho1-t0-1", type:"translate", arabic:"مطبخ", options:["kitchen","bedroom","bathroom","door"], correctAnswer:"kitchen", explanation:"kitchen = مطبخ 🍳", xp:10 },
      { id:"ho1-t0-2", type:"listen_select", listenSentence:"bedroom", options:["bedroom","kitchen","bathroom","window"], correctAnswer:"bedroom", explanation:"bedroom = غرفة نوم 🛏️", xp:10 },
      { id:"ho1-t0-3", type:"translate", arabic:"حمّام", options:["bathroom","kitchen","bedroom","door"], correctAnswer:"bathroom", explanation:"bathroom = حمّام 🚿", xp:10 },
      { id:"ho1-t0-4", type:"word_order", sentence:"This is the kitchen", correctAnswer:"This is the kitchen", explanation:"هذا المطبخ", xp:12 },
      { id:"ho1-t0-5", type:"listen_select", listenSentence:"living room", options:["living room","bedroom","kitchen","garden"], correctAnswer:"living room", explanation:"living room = غرفة المعيشة 🛋️", xp:12 },
      { id:"ho1-t0-6", type:"translate", arabic:"باب", options:["door","window","wall","floor"], correctAnswer:"door", explanation:"door = باب 🚪", xp:10 },
      { id:"ho1-t0-7", type:"fill_blank", blankSentence:"The ___ is big", blankOptions:["kitchen","run","very"], correctAnswer:"kitchen", explanation:"المطبخ كبير", xp:12 },
      { id:"ho1-t0-8", type:"matching", pairs:[{en:"kitchen",ar:"مطبخ"},{en:"bedroom",ar:"غرفة نوم"},{en:"bathroom",ar:"حمّام"},{en:"living room",ar:"غرفة المعيشة"},{en:"door",ar:"باب"},{en:"window",ar:"نافذة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ho1-t1-1", type:"translate", arabic:"غرفة المعيشة", options:["living room","bedroom","bathroom","kitchen"], correctAnswer:"living room", explanation:"living room = غرفة المعيشة", xp:12 },
      { id:"ho1-t1-2", type:"word_order", sentence:"My bedroom is upstairs", correctAnswer:"My bedroom is upstairs", explanation:"غرفة نومي في الأعلى", xp:14 },
      { id:"ho1-t1-3", type:"listen_select", listenSentence:"the bathroom door", options:["door","window","wall","floor"], correctAnswer:"door", explanation:"the door = الباب", xp:13 },
      { id:"ho1-t1-4", type:"translate", arabic:"نافذة", options:["window","door","wall","roof"], correctAnswer:"window", explanation:"window = نافذة 🪟", xp:12 },
      { id:"ho1-t1-5", type:"fill_blank", blankSentence:"The kitchen is ___ the bedroom", blankOptions:["next to","run","very"], correctAnswer:"next to", explanation:"next to = بجانب", xp:14 },
      { id:"ho1-t1-6", type:"word_order", sentence:"We have a big garden", correctAnswer:"We have a big garden", explanation:"لدينا حديقة كبيرة", xp:14 },
      { id:"ho1-t1-7", type:"translate", arabic:"حديقة", options:["garden","kitchen","room","door"], correctAnswer:"garden", explanation:"garden = حديقة 🌳", xp:12 },
      { id:"ho1-t1-8", type:"listen_select", listenSentence:"open the window", options:["window","door","room","wall"], correctAnswer:"window", explanation:"open the window = افتح النافذة", xp:13 },
      { id:"ho1-t1-9", type:"matching", pairs:[{en:"window",ar:"نافذة"},{en:"garden",ar:"حديقة"},{en:"door",ar:"باب"},{en:"room",ar:"غرفة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ho1-t2-1", type:"word_order", sentence:"There are three rooms in my house", correctAnswer:"There are three rooms in my house", explanation:"يوجد ثلاث غرف في منزلي", xp:16 },
      { id:"ho1-t2-2", type:"translate", arabic:"المطبخ بجانب غرفة المعيشة", options:["The kitchen is next to the living room","The kitchen next to living room","Kitchen is next to the living room","The kitchen is next the living room"], correctAnswer:"The kitchen is next to the living room", explanation:"next to = بجانب", xp:16 },
      { id:"ho1-t2-3", type:"fill_blank", blankSentence:"There ___ two bathrooms", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"There are = يوجد (جمع)", xp:15 },
      { id:"ho1-t2-4", type:"word_order", sentence:"Welcome to my home", correctAnswer:"Welcome to my home", explanation:"أهلاً بك في منزلي", xp:15 },
      { id:"ho1-t2-5", type:"translate", arabic:"غرفة نومي كبيرة ومريحة", options:["My bedroom is big and comfortable","My bedroom big and comfortable","My bedroom is big comfortable","Bedroom my is big and comfortable"], correctAnswer:"My bedroom is big and comfortable", explanation:"comfortable = مريح", xp:16 },
      { id:"ho1-t2-6", type:"listen_select", listenSentence:"come into the living room", options:["living room","bedroom","kitchen","garden"], correctAnswer:"living room", explanation:"come in = تفضّل بالدخول", xp:15 },
      { id:"ho1-t2-7", type:"word_order", sentence:"The garden is behind the house", correctAnswer:"The garden is behind the house", explanation:"الحديقة خلف المنزل", xp:16 },
      { id:"ho1-t2-8", type:"fill_blank", blankSentence:"Let me show you the ___", blankOptions:["kitchen","run","very"], correctAnswer:"kitchen", explanation:"دعني أريك المطبخ", xp:15 },
    ],
    t3: [],
  },

  "الأثاث": {
    t0: [
      { id:"ho2-t0-1", type:"translate", arabic:"طاولة", options:["table","chair","bed","sofa"], correctAnswer:"table", explanation:"table = طاولة", xp:10 },
      { id:"ho2-t0-2", type:"listen_select", listenSentence:"chair", options:["chair","table","bed","door"], correctAnswer:"chair", explanation:"chair = كرسي 🪑", xp:10 },
      { id:"ho2-t0-3", type:"translate", arabic:"سرير", options:["bed","sofa","table","chair"], correctAnswer:"bed", explanation:"bed = سرير 🛏️", xp:10 },
      { id:"ho2-t0-4", type:"word_order", sentence:"This is a chair", correctAnswer:"This is a chair", explanation:"هذا كرسي", xp:12 },
      { id:"ho2-t0-5", type:"fill_blank", blankSentence:"The book is on the ___", blankOptions:["table","run","very"], correctAnswer:"table", explanation:"on the table = على الطاولة", xp:12 },
      { id:"ho2-t0-6", type:"translate", arabic:"أريكة", options:["sofa","bed","chair","table"], correctAnswer:"sofa", explanation:"sofa = أريكة 🛋️", xp:10 },
      { id:"ho2-t0-7", type:"listen_select", listenSentence:"a big bed", options:["bed","table","chair","sofa"], correctAnswer:"bed", explanation:"a big bed = سرير كبير", xp:12 },
      { id:"ho2-t0-8", type:"word_order", sentence:"The chair is here", correctAnswer:"The chair is here", explanation:"الكرسي هنا", xp:12 },
      { id:"ho2-t0-9", type:"matching", pairs:[{en:"table",ar:"طاولة"},{en:"chair",ar:"كرسي"},{en:"bed",ar:"سرير"},{en:"sofa",ar:"أريكة"},{en:"lamp",ar:"مصباح"},{en:"shelf",ar:"رف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ho2-t1-1", type:"translate", arabic:"مصباح", options:["lamp","table","chair","bed"], correctAnswer:"lamp", explanation:"lamp = مصباح 💡", xp:12 },
      { id:"ho2-t1-2", type:"word_order", sentence:"The sofa is in the living room", correctAnswer:"The sofa is in the living room", explanation:"الأريكة في غرفة المعيشة", xp:14 },
      { id:"ho2-t1-3", type:"listen_select", listenSentence:"on the table", options:["table","chair","bed","sofa"], correctAnswer:"table", explanation:"on the table = على الطاولة", xp:13 },
      { id:"ho2-t1-4", type:"translate", arabic:"رف", options:["shelf","table","lamp","chair"], correctAnswer:"shelf", explanation:"shelf = رف", xp:12 },
      { id:"ho2-t1-5", type:"fill_blank", blankSentence:"The lamp is ___ the table", blankOptions:["on","run","very"], correctAnswer:"on", explanation:"on = على", xp:14 },
      { id:"ho2-t1-6", type:"word_order", sentence:"There is a bed in the room", correctAnswer:"There is a bed in the room", explanation:"يوجد سرير في الغرفة", xp:14 },
      { id:"ho2-t1-7", type:"translate", arabic:"الكرسي مريح", options:["The chair is comfortable","The chair comfortable","Chair is comfortable","The comfortable chair is"], correctAnswer:"The chair is comfortable", explanation:"comfortable = مريح", xp:13 },
      { id:"ho2-t1-8", type:"listen_select", listenSentence:"under the bed", options:["under","on","in","near"], correctAnswer:"under", explanation:"under = تحت", xp:13 },
      { id:"ho2-t1-9", type:"matching", pairs:[{en:"lamp",ar:"مصباح"},{en:"shelf",ar:"رف"},{en:"sofa",ar:"أريكة"},{en:"bed",ar:"سرير"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ho2-t2-1", type:"word_order", sentence:"There is a lamp on the table", correctAnswer:"There is a lamp on the table", explanation:"يوجد مصباح على الطاولة", xp:16 },
      { id:"ho2-t2-2", type:"translate", arabic:"الكتب على الرف", options:["The books are on the shelf","The books on the shelf","Books are on the shelf","The books is on the shelf"], correctAnswer:"The books are on the shelf", explanation:"on the shelf = على الرف", xp:16 },
      { id:"ho2-t2-3", type:"fill_blank", blankSentence:"The cat is ___ the bed", blankOptions:["under","run","very"], correctAnswer:"under", explanation:"under = تحت", xp:15 },
      { id:"ho2-t2-4", type:"word_order", sentence:"We need a new sofa", correctAnswer:"We need a new sofa", explanation:"نحتاج أريكة جديدة", xp:15 },
      { id:"ho2-t2-5", type:"translate", arabic:"الطاولة بين الكرسيين", options:["The table is between the chairs","The table between the chairs","Table is between the chairs","The table is between chairs"], correctAnswer:"The table is between the chairs", explanation:"between = بين", xp:16 },
      { id:"ho2-t2-6", type:"listen_select", listenSentence:"next to the window", options:["next to","under","on","in"], correctAnswer:"next to", explanation:"next to = بجانب", xp:15 },
      { id:"ho2-t2-7", type:"word_order", sentence:"The bed is near the window", correctAnswer:"The bed is near the window", explanation:"السرير قرب النافذة", xp:16 },
      { id:"ho2-t2-8", type:"fill_blank", blankSentence:"Put the chair ___ the table", blankOptions:["near","run","very"], correctAnswer:"near", explanation:"near = قرب", xp:15 },
    ],
    t3: [],
  },

  "أين الأشياء": {
    t0: [
      { id:"ho3-t0-1", type:"translate", arabic:"في", options:["in","on","under","near"], correctAnswer:"in", explanation:"in = في", xp:10 },
      { id:"ho3-t0-2", type:"translate", arabic:"على", options:["on","in","under","near"], correctAnswer:"on", explanation:"on = على", xp:10 },
      { id:"ho3-t0-3", type:"translate", arabic:"تحت", options:["under","on","in","near"], correctAnswer:"under", explanation:"under = تحت", xp:10 },
      { id:"ho3-t0-4", type:"word_order", sentence:"The cat is in the room", correctAnswer:"The cat is in the room", explanation:"القطة في الغرفة", xp:12 },
      { id:"ho3-t0-5", type:"listen_select", listenSentence:"on the chair", options:["on","in","under","near"], correctAnswer:"on", explanation:"on the chair = على الكرسي", xp:12 },
      { id:"ho3-t0-6", type:"fill_blank", blankSentence:"The book is ___ the bag", blankOptions:["in","run","very"], correctAnswer:"in", explanation:"in the bag = في الحقيبة", xp:12 },
      { id:"ho3-t0-7", type:"translate", arabic:"قرب", options:["near","far","on","in"], correctAnswer:"near", explanation:"near = قرب", xp:10 },
      { id:"ho3-t0-8", type:"word_order", sentence:"The ball is under the table", correctAnswer:"The ball is under the table", explanation:"الكرة تحت الطاولة", xp:12 },
      { id:"ho3-t0-9", type:"matching", pairs:[{en:"in",ar:"في"},{en:"on",ar:"على"},{en:"under",ar:"تحت"},{en:"near",ar:"قرب"},{en:"behind",ar:"خلف"},{en:"between",ar:"بين"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ho3-t1-1", type:"translate", arabic:"خلف", options:["behind","near","on","in"], correctAnswer:"behind", explanation:"behind = خلف", xp:12 },
      { id:"ho3-t1-2", type:"word_order", sentence:"The keys are on the table", correctAnswer:"The keys are on the table", explanation:"المفاتيح على الطاولة", xp:14 },
      { id:"ho3-t1-3", type:"listen_select", listenSentence:"behind the door", options:["behind","near","under","on"], correctAnswer:"behind", explanation:"behind the door = خلف الباب", xp:13 },
      { id:"ho3-t1-4", type:"fill_blank", blankSentence:"The shoes are ___ the bed", blankOptions:["under","run","very"], correctAnswer:"under", explanation:"under the bed = تحت السرير", xp:14 },
      { id:"ho3-t1-5", type:"word_order", sentence:"Where is my phone", correctAnswer:"Where is my phone", explanation:"أين هاتفي؟", xp:14 },
      { id:"ho3-t1-6", type:"translate", arabic:"الحقيبة قرب الباب", options:["The bag is near the door","The bag near the door","Bag is near the door","The bag is near door"], correctAnswer:"The bag is near the door", explanation:"near the door = قرب الباب", xp:14 },
      { id:"ho3-t1-7", type:"listen_select", listenSentence:"in the kitchen", options:["in","on","under","near"], correctAnswer:"in", explanation:"in the kitchen = في المطبخ", xp:13 },
      { id:"ho3-t1-8", type:"word_order", sentence:"It is between the books", correctAnswer:"It is between the books", explanation:"إنه بين الكتب", xp:14 },
      { id:"ho3-t1-9", type:"matching", pairs:[{en:"behind",ar:"خلف"},{en:"between",ar:"بين"},{en:"near",ar:"قرب"},{en:"under",ar:"تحت"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ho3-t2-1", type:"word_order", sentence:"The remote is between the cushions", correctAnswer:"The remote is between the cushions", explanation:"جهاز التحكم بين الوسائد", xp:16 },
      { id:"ho3-t2-2", type:"translate", arabic:"هاتفي على السرير", options:["My phone is on the bed","My phone on the bed","Phone my is on the bed","My phone is on bed"], correctAnswer:"My phone is on the bed", explanation:"on the bed = على السرير", xp:16 },
      { id:"ho3-t2-3", type:"fill_blank", blankSentence:"The car is ___ the house", blankOptions:["behind","run","very"], correctAnswer:"behind", explanation:"behind = خلف", xp:15 },
      { id:"ho3-t2-4", type:"word_order", sentence:"Where are the children playing", correctAnswer:"Where are the children playing", explanation:"أين يلعب الأطفال؟", xp:16 },
      { id:"ho3-t2-5", type:"translate", arabic:"الكلب تحت الطاولة", options:["The dog is under the table","The dog under the table","Dog is under the table","The dog is under table"], correctAnswer:"The dog is under the table", explanation:"under the table = تحت الطاولة", xp:16 },
      { id:"ho3-t2-6", type:"listen_select", listenSentence:"near the window", options:["near","behind","under","in"], correctAnswer:"near", explanation:"near the window = قرب النافذة", xp:15 },
      { id:"ho3-t2-7", type:"word_order", sentence:"My bag is behind the chair", correctAnswer:"My bag is behind the chair", explanation:"حقيبتي خلف الكرسي", xp:15 },
      { id:"ho3-t2-8", type:"fill_blank", blankSentence:"The lamp is ___ the desk", blankOptions:["on","run","very"], correctAnswer:"on", explanation:"on the desk = على المكتب", xp:15 },
    ],
    t3: [],
  },
};
