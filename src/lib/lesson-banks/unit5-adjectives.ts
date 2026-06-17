import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 5 — استخدم الصفات لوصف الأسماء
//   درس 1: الصفات الأساسية — big, small, fast, slow, old, new
//   درس 2: صف الأشياء — The car is big, tall, short, hot, cold
//   درس 3: قارن بين الأشياء — bigger than, smaller than, the biggest
//   تحدي: كل الكلمات معاً
// ══════════════════════════════════════════════════════════════

export const unit5AdjectivesBank: Record<string, TieredBank> = {

  // ── الدرس 1: الصفات الأساسية ──
  "الصفات الأساسية": {
    t0: [
      { id:"ad1-t0-1", type:"translate", arabic:"كبير", options:["big","small","fast","slow"], correctAnswer:"big", explanation:"big = كبير", xp:10 },
      { id:"ad1-t0-2", type:"listen_select", listenSentence:"small", options:["small","big","fast","old"], correctAnswer:"small", explanation:"small = صغير", xp:10 },
      { id:"ad1-t0-3", type:"translate", arabic:"سريع", options:["fast","slow","big","new"], correctAnswer:"fast", explanation:"fast = سريع", xp:10 },
      { id:"ad1-t0-4", type:"word_order", sentence:"The car is big", correctAnswer:"The car is big", explanation:"The car is big = السيارة كبيرة", xp:12 },
      { id:"ad1-t0-5", type:"listen_select", listenSentence:"slow", options:["slow","fast","old","new"], correctAnswer:"slow", explanation:"slow = بطيء", xp:12 },
      { id:"ad1-t0-6", type:"translate", arabic:"قديم", options:["old","new","big","small"], correctAnswer:"old", explanation:"old = قديم", xp:10 },
      { id:"ad1-t0-7", type:"word_order", sentence:"The house is new", correctAnswer:"The house is new", explanation:"The house is new = البيت جديد", xp:12 },
      { id:"ad1-t0-8", type:"fill_blank", blankSentence:"The car is ___", blankOptions:["fast","very","the"], correctAnswer:"fast", explanation:"The car is fast = السيارة سريعة", xp:12 },
      { id:"ad1-t0-9", type:"matching", pairs:[{en:"big",ar:"كبير"},{en:"small",ar:"صغير"},{en:"fast",ar:"سريع"},{en:"slow",ar:"بطيء"},{en:"old",ar:"قديم"},{en:"new",ar:"جديد"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الصفات", xp:15 },
    ],
    t1: [
      { id:"ad1-t1-1", type:"translate", arabic:"جديد", options:["new","old","big","slow"], correctAnswer:"new", explanation:"new = جديد", xp:12 },
      { id:"ad1-t1-2", type:"word_order", sentence:"The house is very big", correctAnswer:"The house is very big", explanation:"البيت كبير جداً", xp:13 },
      { id:"ad1-t1-3", type:"listen_select", listenSentence:"The car is old", options:["old","new","fast","big"], correctAnswer:"old", explanation:"old = قديم", xp:12 },
      { id:"ad1-t1-4", type:"translate", arabic:"البيت صغير", options:["The house is small","House small is","The small house","Small the house is"], correctAnswer:"The house is small", explanation:"The house is small = البيت صغير", xp:13 },
      { id:"ad1-t1-5", type:"fill_blank", blankSentence:"The car is very ___", blankOptions:["fast","the","is"], correctAnswer:"fast", explanation:"very fast = سريع جداً", xp:13 },
      { id:"ad1-t1-6", type:"word_order", sentence:"The train is fast", correctAnswer:"The train is fast", explanation:"القطار سريع", xp:13 },
      { id:"ad1-t1-7", type:"translate", arabic:"بطيء", options:["slow","fast","old","big"], correctAnswer:"slow", explanation:"slow = بطيء", xp:12 },
      { id:"ad1-t1-8", type:"matching", pairs:[{en:"big",ar:"كبير"},{en:"small",ar:"صغير"},{en:"old",ar:"قديم"},{en:"new",ar:"جديد"},{en:"very",ar:"جداً"},{en:"tall",ar:"طويل"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"ad1-t1-9", type:"fill_blank", blankSentence:"The house is ___ old", blankOptions:["very","the","is"], correctAnswer:"very", explanation:"very old = قديم جداً", xp:13 },
    ],
    t2: [
      { id:"ad1-t2-1", type:"word_order", sentence:"The new car is very fast", correctAnswer:"The new car is very fast", explanation:"السيارة الجديدة سريعة جداً", xp:14 },
      { id:"ad1-t2-2", type:"translate", arabic:"البيت القديم كبير", options:["The old house is big","Old house big is","The big old house","House old is big"], correctAnswer:"The old house is big", explanation:"وصف بصفتين", xp:15 },
      { id:"ad1-t2-3", type:"listen_select", listenSentence:"The building is tall", options:["tall","short","big","small"], correctAnswer:"tall", explanation:"tall = طويل/عالٍ", xp:14 },
      { id:"ad1-t2-4", type:"fill_blank", blankSentence:"The ___ car is fast", blankOptions:["new","very","is"], correctAnswer:"new", explanation:"the new car = السيارة الجديدة", xp:15 },
      { id:"ad1-t2-5", type:"word_order", sentence:"The building is very tall", correctAnswer:"The building is very tall", explanation:"المبنى عالٍ جداً", xp:14 },
      { id:"ad1-t2-6", type:"translate", arabic:"الشجرة قصيرة", options:["The tree is short","Tree short is","The short tree","Short the tree is"], correctAnswer:"The tree is short", explanation:"The tree is short = الشجرة قصيرة", xp:15 },
      { id:"ad1-t2-7", type:"matching", pairs:[{en:"tall",ar:"طويل"},{en:"short",ar:"قصير"},{en:"big",ar:"كبير"},{en:"small",ar:"صغير"},{en:"old",ar:"قديم"},{en:"new",ar:"جديد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"ad1-t2-8", type:"fill_blank", blankSentence:"The building is very ___", blankOptions:["tall","the","is"], correctAnswer:"tall", explanation:"very tall = عالٍ جداً", xp:15 },
      { id:"ad1-t2-9", type:"listen_select", listenSentence:"The tea is hot", options:["hot","cold","big","old"], correctAnswer:"hot", explanation:"hot = حار", xp:14 },
    ],
    t3: [
      { id:"ad1-t3-1", type:"word_order", sentence:"The old building is very tall", correctAnswer:"The old building is very tall", explanation:"المبنى القديم عالٍ جداً", xp:18 },
      { id:"ad1-t3-2", type:"translate", arabic:"السيارة الجديدة سريعة والقديمة بطيئة", options:["The new car is fast and the old one is slow","New car fast old slow","The fast new car old slow","Car new fast old is slow"], correctAnswer:"The new car is fast and the old one is slow", explanation:"مقارنة بصفتين", xp:20 },
      { id:"ad1-t3-3", type:"listen_select", listenSentence:"The water is cold", options:["cold","hot","big","new"], correctAnswer:"cold", explanation:"cold = بارد", xp:18 },
      { id:"ad1-t3-4", type:"fill_blank", blankSentence:"The ___ building is tall", blankOptions:["new","very","is"], correctAnswer:"new", explanation:"the new building = المبنى الجديد", xp:18 },
      { id:"ad1-t3-5", type:"matching", pairs:[{en:"big",ar:"كبير"},{en:"small",ar:"صغير"},{en:"fast",ar:"سريع"},{en:"slow",ar:"بطيء"},{en:"old",ar:"قديم"},{en:"new",ar:"جديد"}], correctAnswer:"matched", explanation:"رائع! راجعت الصفات", xp:18 },
      { id:"ad1-t3-6", type:"word_order", sentence:"The small car is fast", correctAnswer:"The small car is fast", explanation:"السيارة الصغيرة سريعة", xp:18 },
      { id:"ad1-t3-7", type:"translate", arabic:"البيت الكبير قديم والصغير جديد", options:["The big house is old and the small one is new","Big house old small new","The old big house small new","House big old small is new"], correctAnswer:"The big house is old and the small one is new", explanation:"مقارنة شاملة", xp:20 },
    ],
  },

  // ── الدرس 2: صف الأشياء ──
  "صف الأشياء": {
    t0: [
      { id:"ad2-t0-1", type:"translate", arabic:"طويل", options:["tall","short","big","fast"], correctAnswer:"tall", explanation:"tall = طويل/عالٍ", xp:10 },
      { id:"ad2-t0-2", type:"listen_select", listenSentence:"short", options:["short","tall","big","old"], correctAnswer:"short", explanation:"short = قصير", xp:10 },
      { id:"ad2-t0-3", type:"translate", arabic:"حار", options:["hot","cold","big","new"], correctAnswer:"hot", explanation:"hot = حار", xp:10 },
      { id:"ad2-t0-4", type:"word_order", sentence:"The tea is very hot", correctAnswer:"The tea is very hot", explanation:"الشاي حار جداً", xp:12 },
      { id:"ad2-t0-5", type:"listen_select", listenSentence:"The water is cold", options:["cold","hot","tall","short"], correctAnswer:"cold", explanation:"cold = بارد", xp:12 },
      { id:"ad2-t0-6", type:"translate", arabic:"بارد", options:["cold","hot","big","fast"], correctAnswer:"cold", explanation:"cold = بارد", xp:10 },
      { id:"ad2-t0-7", type:"word_order", sentence:"The man is tall", correctAnswer:"The man is tall", explanation:"الرجل طويل", xp:12 },
      { id:"ad2-t0-8", type:"fill_blank", blankSentence:"The tea is ___", blankOptions:["hot","very","the"], correctAnswer:"hot", explanation:"The tea is hot = الشاي حار", xp:12 },
      { id:"ad2-t0-9", type:"matching", pairs:[{en:"tall",ar:"طويل"},{en:"short",ar:"قصير"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"big",ar:"كبير"},{en:"small",ar:"صغير"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ad2-t1-1", type:"word_order", sentence:"The building is very tall", correctAnswer:"The building is very tall", explanation:"المبنى عالٍ جداً", xp:13 },
      { id:"ad2-t1-2", type:"translate", arabic:"الطعام حار", options:["The food is hot","Food hot is","The hot food","Hot the food is"], correctAnswer:"The food is hot", explanation:"The food is hot = الطعام حار", xp:13 },
      { id:"ad2-t1-3", type:"listen_select", listenSentence:"The man is short", options:["short","tall","big","cold"], correctAnswer:"short", explanation:"short = قصير", xp:12 },
      { id:"ad2-t1-4", type:"fill_blank", blankSentence:"The water is very ___", blankOptions:["cold","the","is"], correctAnswer:"cold", explanation:"very cold = بارد جداً", xp:13 },
      { id:"ad2-t1-5", type:"word_order", sentence:"The coffee is so hot", correctAnswer:"The coffee is so hot", explanation:"القهوة حارة جداً", xp:13 },
      { id:"ad2-t1-6", type:"translate", arabic:"المبنى عالٍ", options:["The building is tall","Building tall is","The tall building","Tall the building is"], correctAnswer:"The building is tall", explanation:"The building is tall = المبنى عالٍ", xp:13 },
      { id:"ad2-t1-7", type:"matching", pairs:[{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"tall",ar:"طويل"},{en:"short",ar:"قصير"},{en:"very",ar:"جداً"},{en:"so",ar:"جداً"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"ad2-t1-8", type:"fill_blank", blankSentence:"The man is so ___", blankOptions:["tall","the","is"], correctAnswer:"tall", explanation:"so tall = طويل جداً", xp:13 },
      { id:"ad2-t1-9", type:"listen_select", listenSentence:"The food is cold", options:["cold","hot","tall","short"], correctAnswer:"cold", explanation:"cold = بارد", xp:12 },
    ],
    t2: [
      { id:"ad2-t2-1", type:"word_order", sentence:"The tall building is very old", correctAnswer:"The tall building is very old", explanation:"المبنى العالي قديم جداً", xp:14 },
      { id:"ad2-t2-2", type:"translate", arabic:"القهوة حارة والماء بارد", options:["The coffee is hot and the water is cold","Coffee hot water cold","The hot coffee cold water","Coffee is hot cold water"], correctAnswer:"The coffee is hot and the water is cold", explanation:"وصف بصفتين", xp:15 },
      { id:"ad2-t2-3", type:"listen_select", listenSentence:"The building is so tall", options:["tall","short","hot","cold"], correctAnswer:"tall", explanation:"so tall = عالٍ جداً", xp:14 },
      { id:"ad2-t2-4", type:"fill_blank", blankSentence:"The ___ man is fast", blankOptions:["tall","very","is"], correctAnswer:"tall", explanation:"the tall man = الرجل الطويل", xp:15 },
      { id:"ad2-t2-5", type:"word_order", sentence:"The short man is fast", correctAnswer:"The short man is fast", explanation:"الرجل القصير سريع", xp:14 },
      { id:"ad2-t2-6", type:"translate", arabic:"البيت يبدو قديماً", options:["The house looks old","House looks old","The old looks house","Looks the house old"], correctAnswer:"The house looks old", explanation:"looks = يبدو", xp:15 },
      { id:"ad2-t2-7", type:"matching", pairs:[{en:"tall",ar:"طويل"},{en:"short",ar:"قصير"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"looks",ar:"يبدو"},{en:"so",ar:"جداً"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"ad2-t2-8", type:"fill_blank", blankSentence:"The house ___ very old", blankOptions:["looks","the","is"], correctAnswer:"looks", explanation:"looks old = يبدو قديماً", xp:15 },
      { id:"ad2-t2-9", type:"listen_select", listenSentence:"The coffee is so hot", options:["hot","cold","tall","short"], correctAnswer:"hot", explanation:"so hot = حار جداً", xp:14 },
    ],
    t3: [
      { id:"ad2-t3-1", type:"word_order", sentence:"The tall building looks very old", correctAnswer:"The tall building looks very old", explanation:"المبنى العالي يبدو قديماً", xp:18 },
      { id:"ad2-t3-2", type:"translate", arabic:"الطعام حار جداً والمشروب بارد", options:["The food is very hot and the drink is cold","Food very hot drink cold","The hot food cold drink","Food hot very cold drink"], correctAnswer:"The food is very hot and the drink is cold", explanation:"وصف مركّب", xp:20 },
      { id:"ad2-t3-3", type:"listen_select", listenSentence:"The man looks tall", options:["tall","short","hot","cold"], correctAnswer:"tall", explanation:"looks tall = يبدو طويلاً", xp:18 },
      { id:"ad2-t3-4", type:"fill_blank", blankSentence:"The building ___ very tall", blankOptions:["looks","the","is"], correctAnswer:"looks", explanation:"looks tall = يبدو عالياً", xp:18 },
      { id:"ad2-t3-5", type:"matching", pairs:[{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"tall",ar:"طويل"},{en:"short",ar:"قصير"},{en:"looks",ar:"يبدو"},{en:"very",ar:"جداً"}], correctAnswer:"matched", explanation:"رائع! راجعت وصف الأشياء", xp:18 },
      { id:"ad2-t3-6", type:"word_order", sentence:"The coffee is very hot", correctAnswer:"The coffee is very hot", explanation:"القهوة حارة جداً", xp:18 },
      { id:"ad2-t3-7", type:"translate", arabic:"المبنى القديم يبدو طويلاً وكبيراً", options:["The old building looks tall and big","Old building tall big looks","The tall big old building","Building old looks tall big"], correctAnswer:"The old building looks tall and big", explanation:"وصف شامل", xp:20 },
    ],
  },

  // ── الدرس 3: قارن بين الأشياء ──
  "قارن بين الأشياء": {
    t0: [
      { id:"ad3-t0-1", type:"translate", arabic:"أكبر من", options:["bigger than","smaller than","the biggest","faster than"], correctAnswer:"bigger than", explanation:"bigger than = أكبر من", xp:10 },
      { id:"ad3-t0-2", type:"listen_select", listenSentence:"smaller than", options:["smaller","bigger","faster","slower"], correctAnswer:"smaller", explanation:"smaller than = أصغر من", xp:10 },
      { id:"ad3-t0-3", type:"translate", arabic:"أسرع من", options:["faster than","slower than","bigger than","older than"], correctAnswer:"faster than", explanation:"faster than = أسرع من", xp:10 },
      { id:"ad3-t0-4", type:"word_order", sentence:"The car is bigger than the bike", correctAnswer:"The car is bigger than the bike", explanation:"السيارة أكبر من الدراجة", xp:12 },
      { id:"ad3-t0-5", type:"listen_select", listenSentence:"the biggest", options:["biggest","smallest","fastest","slowest"], correctAnswer:"biggest", explanation:"the biggest = الأكبر", xp:12 },
      { id:"ad3-t0-6", type:"translate", arabic:"الأكبر", options:["the biggest","the smallest","the fastest","the oldest"], correctAnswer:"the biggest", explanation:"the biggest = الأكبر", xp:10 },
      { id:"ad3-t0-7", type:"word_order", sentence:"The train is faster than the car", correctAnswer:"The train is faster than the car", explanation:"القطار أسرع من السيارة", xp:12 },
      { id:"ad3-t0-8", type:"fill_blank", blankSentence:"The car is ___ than the bike", blankOptions:["bigger","big","the"], correctAnswer:"bigger", explanation:"bigger than = أكبر من", xp:12 },
      { id:"ad3-t0-9", type:"matching", pairs:[{en:"bigger than",ar:"أكبر من"},{en:"smaller than",ar:"أصغر من"},{en:"faster than",ar:"أسرع من"},{en:"the biggest",ar:"الأكبر"},{en:"than",ar:"من"},{en:"the most",ar:"الأكثر"}], correctAnswer:"matched", explanation:"أحسنت! طابقت المقارنات", xp:15 },
    ],
    t1: [
      { id:"ad3-t1-1", type:"word_order", sentence:"The house is bigger than the car", correctAnswer:"The house is bigger than the car", explanation:"البيت أكبر من السيارة", xp:13 },
      { id:"ad3-t1-2", type:"translate", arabic:"القطار أسرع من الحافلة", options:["The train is faster than the bus","Train faster bus than","The fast train bus","Train is fast than bus"], correctAnswer:"The train is faster than the bus", explanation:"مقارنة سرعة", xp:13 },
      { id:"ad3-t1-3", type:"listen_select", listenSentence:"older than", options:["older","newer","bigger","smaller"], correctAnswer:"older", explanation:"older than = أقدم من", xp:12 },
      { id:"ad3-t1-4", type:"fill_blank", blankSentence:"The train is faster ___ the car", blankOptions:["than","the","is"], correctAnswer:"than", explanation:"faster than = أسرع من", xp:13 },
      { id:"ad3-t1-5", type:"word_order", sentence:"This is the biggest house", correctAnswer:"This is the biggest house", explanation:"هذا أكبر بيت", xp:13 },
      { id:"ad3-t1-6", type:"translate", arabic:"البيت أصغر من المدرسة", options:["The house is smaller than the school","House smaller school than","The small house school","House is small than school"], correctAnswer:"The house is smaller than the school", explanation:"مقارنة حجم", xp:13 },
      { id:"ad3-t1-7", type:"matching", pairs:[{en:"bigger than",ar:"أكبر من"},{en:"smaller than",ar:"أصغر من"},{en:"older than",ar:"أقدم من"},{en:"the biggest",ar:"الأكبر"},{en:"than",ar:"من"},{en:"faster than",ar:"أسرع من"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"ad3-t1-8", type:"fill_blank", blankSentence:"This is the ___ house", blankOptions:["biggest","bigger","big"], correctAnswer:"biggest", explanation:"the biggest = الأكبر", xp:13 },
      { id:"ad3-t1-9", type:"listen_select", listenSentence:"bigger than the car", options:["bigger","smaller","faster","older"], correctAnswer:"bigger", explanation:"bigger than = أكبر من", xp:12 },
    ],
    t2: [
      { id:"ad3-t2-1", type:"word_order", sentence:"The new car is faster than the old one", correctAnswer:"The new car is faster than the old one", explanation:"مقارنة سيارتين", xp:14 },
      { id:"ad3-t2-2", type:"translate", arabic:"هذا أكبر مبنى في المدينة", options:["This is the biggest building in the city","This biggest building city","The biggest this building city","Building biggest this city"], correctAnswer:"This is the biggest building in the city", explanation:"صيغة التفضيل", xp:15 },
      { id:"ad3-t2-3", type:"listen_select", listenSentence:"the fastest train", options:["fastest","slowest","biggest","smallest"], correctAnswer:"fastest", explanation:"the fastest = الأسرع", xp:14 },
      { id:"ad3-t2-4", type:"fill_blank", blankSentence:"The car is bigger ___ the bike", blankOptions:["than","the","is"], correctAnswer:"than", explanation:"bigger than = أكبر من", xp:15 },
      { id:"ad3-t2-5", type:"word_order", sentence:"This is the fastest car here", correctAnswer:"This is the fastest car here", explanation:"هذه أسرع سيارة هنا", xp:14 },
      { id:"ad3-t2-6", type:"translate", arabic:"البيت أقدم من المدرسة", options:["The house is older than the school","House older school than","The old house school","House is old than school"], correctAnswer:"The house is older than the school", explanation:"مقارنة عمر", xp:15 },
      { id:"ad3-t2-7", type:"matching", pairs:[{en:"the biggest",ar:"الأكبر"},{en:"the fastest",ar:"الأسرع"},{en:"the oldest",ar:"الأقدم"},{en:"bigger than",ar:"أكبر من"},{en:"than",ar:"من"},{en:"the most",ar:"الأكثر"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"ad3-t2-8", type:"fill_blank", blankSentence:"This is the ___ train", blankOptions:["fastest","faster","fast"], correctAnswer:"fastest", explanation:"the fastest = الأسرع", xp:15 },
      { id:"ad3-t2-9", type:"listen_select", listenSentence:"smaller than the house", options:["smaller","bigger","faster","older"], correctAnswer:"smaller", explanation:"smaller than = أصغر من", xp:14 },
    ],
    t3: [
      { id:"ad3-t3-1", type:"word_order", sentence:"The new car is faster than the old car", correctAnswer:"The new car is faster than the old car", explanation:"مقارنة السيارات", xp:18 },
      { id:"ad3-t3-2", type:"translate", arabic:"القطار أسرع من الحافلة وأكبر من السيارة", options:["The train is faster than the bus and bigger than the car","Train faster bus bigger car","The fast train big car bus","Train is fast big than bus car"], correctAnswer:"The train is faster than the bus and bigger than the car", explanation:"مقارنة مزدوجة", xp:20 },
      { id:"ad3-t3-3", type:"listen_select", listenSentence:"the biggest building", options:["biggest","smallest","fastest","oldest"], correctAnswer:"biggest", explanation:"the biggest = الأكبر", xp:18 },
      { id:"ad3-t3-4", type:"fill_blank", blankSentence:"This is the ___ building in the city", blankOptions:["biggest","bigger","big"], correctAnswer:"biggest", explanation:"the biggest = الأكبر", xp:18 },
      { id:"ad3-t3-5", type:"matching", pairs:[{en:"bigger than",ar:"أكبر من"},{en:"smaller than",ar:"أصغر من"},{en:"faster than",ar:"أسرع من"},{en:"the biggest",ar:"الأكبر"},{en:"the fastest",ar:"الأسرع"},{en:"than",ar:"من"}], correctAnswer:"matched", explanation:"رائع! راجعت المقارنات", xp:18 },
      { id:"ad3-t3-6", type:"word_order", sentence:"This is the biggest car here", correctAnswer:"This is the biggest car here", explanation:"هذه أكبر سيارة هنا", xp:18 },
      { id:"ad3-t3-7", type:"translate", arabic:"هذا أسرع وأكبر قطار في البلد", options:["This is the fastest and biggest train in the country","This fastest biggest train country","The fast big train this country","Train fastest biggest this country"], correctAnswer:"This is the fastest and biggest train in the country", explanation:"صيغة تفضيل مزدوجة", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة ──
  "تحدي الوحدة": {
    t0: [
      { id:"adc-t0-1", type:"word_order", sentence:"The car is bigger than the bike", correctAnswer:"The car is bigger than the bike", explanation:"مقارنة الحجم", xp:15 },
      { id:"adc-t0-2", type:"translate", arabic:"البيت الجديد كبير", options:["The new house is big","New house big is","The big new house","House new is big"], correctAnswer:"The new house is big", explanation:"وصف بصفتين", xp:15 },
      { id:"adc-t0-3", type:"listen_select", listenSentence:"The tea is hot", options:["hot","cold","big","fast"], correctAnswer:"hot", explanation:"hot = حار", xp:15 },
      { id:"adc-t0-4", type:"fill_blank", blankSentence:"The car is ___ than the bike", blankOptions:["faster","fast","the"], correctAnswer:"faster", explanation:"faster than = أسرع من", xp:15 },
      { id:"adc-t0-5", type:"matching", pairs:[{en:"big",ar:"كبير"},{en:"fast",ar:"سريع"},{en:"hot",ar:"حار"},{en:"tall",ar:"طويل"},{en:"old",ar:"قديم"},{en:"new",ar:"جديد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"adc-t0-6", type:"translate", arabic:"المبنى عالٍ", options:["The building is tall","Building tall is","The tall building","Tall building is"], correctAnswer:"The building is tall", explanation:"The building is tall = المبنى عالٍ", xp:15 },
      { id:"adc-t0-7", type:"word_order", sentence:"The water is very cold", correctAnswer:"The water is very cold", explanation:"الماء بارد جداً", xp:15 },
    ],
    t1: [
      { id:"adc-t1-1", type:"translate", arabic:"القطار أسرع من الحافلة", options:["The train is faster than the bus","Train faster bus than","The fast train bus","Train is fast than bus"], correctAnswer:"The train is faster than the bus", explanation:"مقارنة سرعة", xp:16 },
      { id:"adc-t1-2", type:"word_order", sentence:"This is the biggest house", correctAnswer:"This is the biggest house", explanation:"صيغة التفضيل", xp:16 },
      { id:"adc-t1-3", type:"listen_select", listenSentence:"The building is so tall", options:["tall","short","hot","cold"], correctAnswer:"tall", explanation:"so tall = عالٍ جداً", xp:16 },
      { id:"adc-t1-4", type:"fill_blank", blankSentence:"The new car is ___ than the old one", blankOptions:["faster","fast","the"], correctAnswer:"faster", explanation:"faster than = أسرع من", xp:16 },
      { id:"adc-t1-5", type:"matching", pairs:[{en:"bigger than",ar:"أكبر من"},{en:"smaller than",ar:"أصغر من"},{en:"the biggest",ar:"الأكبر"},{en:"tall",ar:"طويل"},{en:"short",ar:"قصير"},{en:"than",ar:"من"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"adc-t1-6", type:"translate", arabic:"الطعام حار والماء بارد", options:["The food is hot and the water is cold","Food hot water cold","The hot food cold water","Food is hot cold water"], correctAnswer:"The food is hot and the water is cold", explanation:"وصف بصفتين", xp:16 },
      { id:"adc-t1-7", type:"word_order", sentence:"The old building is very tall", correctAnswer:"The old building is very tall", explanation:"المبنى القديم عالٍ", xp:16 },
    ],
    t2: [
      { id:"adc-t2-1", type:"word_order", sentence:"The new car is faster than the old one", correctAnswer:"The new car is faster than the old one", explanation:"مقارنة السيارات", xp:18 },
      { id:"adc-t2-2", type:"translate", arabic:"هذا أكبر مبنى في المدينة", options:["This is the biggest building in the city","This biggest building city","The biggest building this city","Building biggest this city"], correctAnswer:"This is the biggest building in the city", explanation:"صيغة التفضيل", xp:18 },
      { id:"adc-t2-3", type:"listen_select", listenSentence:"the fastest train", options:["fastest","slowest","biggest","smallest"], correctAnswer:"fastest", explanation:"the fastest = الأسرع", xp:18 },
      { id:"adc-t2-4", type:"fill_blank", blankSentence:"The house ___ very old", blankOptions:["looks","the","is"], correctAnswer:"looks", explanation:"looks old = يبدو قديماً", xp:18 },
      { id:"adc-t2-5", type:"matching", pairs:[{en:"the biggest",ar:"الأكبر"},{en:"the fastest",ar:"الأسرع"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"tall",ar:"طويل"},{en:"looks",ar:"يبدو"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"adc-t2-6", type:"translate", arabic:"البيت القديم يبدو كبيراً", options:["The old house looks big","Old house big looks","The big old house","House old looks big"], correctAnswer:"The old house looks big", explanation:"looks = يبدو", xp:18 },
      { id:"adc-t2-7", type:"word_order", sentence:"The tall building looks very old", correctAnswer:"The tall building looks very old", explanation:"وصف مركّب", xp:18 },
    ],
    t3: [
      { id:"adc-t3-1", type:"word_order", sentence:"The new car is faster and bigger than the old one", correctAnswer:"The new car is faster and bigger than the old one", explanation:"مقارنة مزدوجة", xp:22 },
      { id:"adc-t3-2", type:"translate", arabic:"هذا أسرع وأكبر قطار في البلد", options:["This is the fastest and biggest train in the country","This fastest biggest train country","The fast big train this country","Train fastest this biggest country"], correctAnswer:"This is the fastest and biggest train in the country", explanation:"صيغة تفضيل مزدوجة", xp:22 },
      { id:"adc-t3-3", type:"listen_select", listenSentence:"The water is very cold", options:["cold","hot","tall","fast"], correctAnswer:"cold", explanation:"very cold = بارد جداً", xp:20 },
      { id:"adc-t3-4", type:"fill_blank", blankSentence:"This is the ___ building in the city", blankOptions:["biggest","bigger","big"], correctAnswer:"biggest", explanation:"the biggest = الأكبر", xp:22 },
      { id:"adc-t3-5", type:"matching", pairs:[{en:"bigger than",ar:"أكبر من"},{en:"the biggest",ar:"الأكبر"},{en:"faster than",ar:"أسرع من"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"tall",ar:"طويل"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"adc-t3-6", type:"word_order", sentence:"The old house looks very big", correctAnswer:"The old house looks very big", explanation:"وصف بـ looks", xp:22 },
      { id:"adc-t3-7", type:"translate", arabic:"السيارة الجديدة أسرع وأصغر من القديمة", options:["The new car is faster and smaller than the old one","New car faster smaller old","The fast small new car old","Car new faster old smaller"], correctAnswer:"The new car is faster and smaller than the old one", explanation:"مقارنة مزدوجة 👑", xp:24 },
    ],
  },
};
