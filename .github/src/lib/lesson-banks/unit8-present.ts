import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 8 — استخدم الزمن المضارع (الروتين اليومي)
//   درس 1: أفعال يومية — eat, sleep, walk, read, watch
//   درس 2: روتينك اليومي — wake up, go, play, breakfast
//   درس 3: الكلمات الزمنية — always, usually, sometimes, never
// ══════════════════════════════════════════════════════════════

export const unit8PresentBank: Record<string, TieredBank> = {

  // ── الدرس 1: أفعال يومية ──
  "أفعال يومية": {
    t0: [
      { id:"pr1-t0-1", type:"translate", arabic:"يأكل", options:["eat","sleep","walk","read"], correctAnswer:"eat", explanation:"eat = يأكل 🍽️", xp:10 },
      { id:"pr1-t0-2", type:"listen_select", listenSentence:"sleep", options:["sleep","eat","walk","read"], correctAnswer:"sleep", explanation:"sleep = ينام 😴", xp:10 },
      { id:"pr1-t0-3", type:"translate", arabic:"يمشي", options:["walk","read","watch","eat"], correctAnswer:"walk", explanation:"walk = يمشي 🚶", xp:10 },
      { id:"pr1-t0-4", type:"word_order", sentence:"I eat breakfast", correctAnswer:"I eat breakfast", explanation:"أنا آكل الفطور", xp:12 },
      { id:"pr1-t0-5", type:"listen_select", listenSentence:"read a book", options:["read","watch","walk","eat"], correctAnswer:"read", explanation:"read = يقرأ 📖", xp:12 },
      { id:"pr1-t0-6", type:"translate", arabic:"يشاهد", options:["watch","read","walk","sleep"], correctAnswer:"watch", explanation:"watch = يشاهد 📺", xp:10 },
      { id:"pr1-t0-7", type:"word_order", sentence:"I read every day", correctAnswer:"I read every day", explanation:"أقرأ كل يوم", xp:12 },
      { id:"pr1-t0-8", type:"fill_blank", blankSentence:"I ___ breakfast every day", blankOptions:["eat","very","the"], correctAnswer:"eat", explanation:"I eat = أنا آكل", xp:12 },
      { id:"pr1-t0-9", type:"matching", pairs:[{en:"eat",ar:"يأكل"},{en:"sleep",ar:"ينام"},{en:"walk",ar:"يمشي"},{en:"read",ar:"يقرأ"},{en:"watch",ar:"يشاهد"},{en:"every day",ar:"كل يوم"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الأفعال اليومية", xp:15 },
    ],
    t1: [
      { id:"pr1-t1-1", type:"translate", arabic:"يقرأ", options:["read","eat","walk","watch"], correctAnswer:"read", explanation:"read = يقرأ", xp:12 },
      { id:"pr1-t1-2", type:"word_order", sentence:"I walk to school every day", correctAnswer:"I walk to school every day", explanation:"أمشي للمدرسة كل يوم", xp:13 },
      { id:"pr1-t1-3", type:"listen_select", listenSentence:"I watch TV", options:["watch","read","walk","eat"], correctAnswer:"watch", explanation:"watch TV = يشاهد التلفاز", xp:12 },
      { id:"pr1-t1-4", type:"translate", arabic:"أنا أنام مبكراً", options:["I sleep early","I early sleep","Sleep I early","Early I sleep"], correctAnswer:"I sleep early", explanation:"I sleep = أنا أنام", xp:13 },
      { id:"pr1-t1-5", type:"fill_blank", blankSentence:"I ___ to school every day", blankOptions:["walk","eat","very"], correctAnswer:"walk", explanation:"I walk = أنا أمشي", xp:13 },
      { id:"pr1-t1-6", type:"word_order", sentence:"I read books at night", correctAnswer:"I read books at night", explanation:"أقرأ الكتب ليلاً", xp:13 },
      { id:"pr1-t1-7", type:"translate", arabic:"ينام", options:["sleep","eat","walk","read"], correctAnswer:"sleep", explanation:"sleep = ينام", xp:12 },
      { id:"pr1-t1-8", type:"matching", pairs:[{en:"eat",ar:"يأكل"},{en:"sleep",ar:"ينام"},{en:"walk",ar:"يمشي"},{en:"watch",ar:"يشاهد"},{en:"read",ar:"يقرأ"},{en:"night",ar:"ليل"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pr1-t1-9", type:"fill_blank", blankSentence:"I ___ TV at night", blankOptions:["watch","walk","very"], correctAnswer:"watch", explanation:"watch TV = يشاهد التلفاز", xp:13 },
    ],
    t2: [
      { id:"pr1-t2-1", type:"word_order", sentence:"I eat breakfast and walk to school", correctAnswer:"I eat breakfast and walk to school", explanation:"فعلان يوميان", xp:14 },
      { id:"pr1-t2-2", type:"translate", arabic:"أقرأ الكتب وأشاهد التلفاز", options:["I read books and watch TV","I books read watch TV","Read books watch I TV","I read watch books TV"], correctAnswer:"I read books and watch TV", explanation:"فعلان", xp:15 },
      { id:"pr1-t2-3", type:"listen_select", listenSentence:"I sleep early at night", options:["sleep","eat","walk","read"], correctAnswer:"sleep", explanation:"sleep early = ينام مبكراً", xp:14 },
      { id:"pr1-t2-4", type:"fill_blank", blankSentence:"I ___ books and watch TV", blankOptions:["read","eat","very"], correctAnswer:"read", explanation:"I read = أنا أقرأ", xp:15 },
      { id:"pr1-t2-5", type:"word_order", sentence:"I walk in the park every morning", correctAnswer:"I walk in the park every morning", explanation:"أمشي في الحديقة كل صباح", xp:14 },
      { id:"pr1-t2-6", type:"translate", arabic:"أنا آكل وأنام مبكراً", options:["I eat and sleep early","I eat sleep early","Eat sleep I early","I early eat sleep"], correctAnswer:"I eat and sleep early", explanation:"فعلان", xp:15 },
      { id:"pr1-t2-7", type:"matching", pairs:[{en:"eat",ar:"يأكل"},{en:"sleep",ar:"ينام"},{en:"walk",ar:"يمشي"},{en:"read",ar:"يقرأ"},{en:"watch",ar:"يشاهد"},{en:"morning",ar:"صباح"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pr1-t2-8", type:"fill_blank", blankSentence:"I ___ in the park every morning", blankOptions:["walk","eat","very"], correctAnswer:"walk", explanation:"I walk = أنا أمشي", xp:15 },
      { id:"pr1-t2-9", type:"listen_select", listenSentence:"I read a book at night", options:["read","watch","walk","eat"], correctAnswer:"read", explanation:"read = يقرأ", xp:14 },
    ],
    t3: [
      { id:"pr1-t3-1", type:"word_order", sentence:"I eat breakfast walk to school and read books", correctAnswer:"I eat breakfast walk to school and read books", explanation:"روتين يومي كامل", xp:18 },
      { id:"pr1-t3-2", type:"translate", arabic:"أستيقظ مبكراً وآكل وأمشي للمدرسة", options:["I wake up early eat and walk to school","I wake eat walk school","Wake early eat walk I school","I early wake eat walk school"], correctAnswer:"I wake up early eat and walk to school", explanation:"روتين الصباح", xp:20 },
      { id:"pr1-t3-3", type:"listen_select", listenSentence:"I watch TV at night", options:["watch","read","walk","eat"], correctAnswer:"watch", explanation:"watch TV = يشاهد التلفاز", xp:18 },
      { id:"pr1-t3-4", type:"fill_blank", blankSentence:"I eat breakfast and ___ to work", blankOptions:["walk","read","very"], correctAnswer:"walk", explanation:"walk to work = يمشي للعمل", xp:18 },
      { id:"pr1-t3-5", type:"matching", pairs:[{en:"eat",ar:"يأكل"},{en:"sleep",ar:"ينام"},{en:"walk",ar:"يمشي"},{en:"read",ar:"يقرأ"},{en:"watch",ar:"يشاهد"},{en:"every day",ar:"كل يوم"}], correctAnswer:"matched", explanation:"رائع! راجعت الأفعال اليومية", xp:18 },
      { id:"pr1-t3-6", type:"word_order", sentence:"I read and watch TV at night", correctAnswer:"I read and watch TV at night", explanation:"فعلان ليلاً", xp:18 },
      { id:"pr1-t3-7", type:"translate", arabic:"آكل الفطور وأقرأ وأشاهد التلفاز كل يوم", options:["I eat breakfast read and watch TV every day","I breakfast read watch TV","Eat breakfast read watch I day","I eat read watch breakfast day"], correctAnswer:"I eat breakfast read and watch TV every day", explanation:"روتين كامل", xp:20 },
    ],
  },

  // ── الدرس 2: روتينك اليومي ──
  "روتينك اليومي": {
    t0: [
      { id:"pr2-t0-1", type:"translate", arabic:"يستيقظ", options:["wake up","go","play","come"], correctAnswer:"wake up", explanation:"wake up = يستيقظ ⏰", xp:10 },
      { id:"pr2-t0-2", type:"listen_select", listenSentence:"go to school", options:["go","come","play","wake"], correctAnswer:"go", explanation:"go = يذهب", xp:10 },
      { id:"pr2-t0-3", type:"translate", arabic:"يلعب", options:["play","go","come","wake"], correctAnswer:"play", explanation:"play = يلعب ⚽", xp:10 },
      { id:"pr2-t0-4", type:"word_order", sentence:"I wake up at seven", correctAnswer:"I wake up at seven", explanation:"أستيقظ الساعة السابعة", xp:12 },
      { id:"pr2-t0-5", type:"listen_select", listenSentence:"I come home", options:["come","go","play","wake"], correctAnswer:"come", explanation:"come = يأتي", xp:12 },
      { id:"pr2-t0-6", type:"translate", arabic:"يذهب", options:["go","come","play","wake"], correctAnswer:"go", explanation:"go = يذهب", xp:10 },
      { id:"pr2-t0-7", type:"word_order", sentence:"I go to school", correctAnswer:"I go to school", explanation:"أذهب للمدرسة", xp:12 },
      { id:"pr2-t0-8", type:"fill_blank", blankSentence:"I ___ up at seven", blankOptions:["wake","go","very"], correctAnswer:"wake", explanation:"wake up = يستيقظ", xp:12 },
      { id:"pr2-t0-9", type:"matching", pairs:[{en:"wake up",ar:"يستيقظ"},{en:"go",ar:"يذهب"},{en:"play",ar:"يلعب"},{en:"come",ar:"يأتي"},{en:"breakfast",ar:"فطور"},{en:"home",ar:"بيت"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pr2-t1-1", type:"word_order", sentence:"I wake up and eat breakfast", correctAnswer:"I wake up and eat breakfast", explanation:"أستيقظ وآكل الفطور", xp:13 },
      { id:"pr2-t1-2", type:"translate", arabic:"أذهب للمدرسة في الصباح", options:["I go to school in the morning","I school go morning","Go school I morning","I morning go school"], correctAnswer:"I go to school in the morning", explanation:"روتين الصباح", xp:13 },
      { id:"pr2-t1-3", type:"listen_select", listenSentence:"I play football", options:["play","go","come","wake"], correctAnswer:"play", explanation:"play football = يلعب كرة القدم", xp:12 },
      { id:"pr2-t1-4", type:"fill_blank", blankSentence:"I ___ to school in the morning", blankOptions:["go","play","very"], correctAnswer:"go", explanation:"I go = أنا أذهب", xp:13 },
      { id:"pr2-t1-5", type:"word_order", sentence:"I come home in the evening", correctAnswer:"I come home in the evening", explanation:"أعود للبيت مساءً", xp:13 },
      { id:"pr2-t1-6", type:"translate", arabic:"أستيقظ الساعة السابعة", options:["I wake up at seven","I seven wake up","Wake up I seven","Seven I wake up"], correctAnswer:"I wake up at seven", explanation:"وقت الاستيقاظ", xp:13 },
      { id:"pr2-t1-7", type:"matching", pairs:[{en:"wake up",ar:"يستيقظ"},{en:"go",ar:"يذهب"},{en:"play",ar:"يلعب"},{en:"come",ar:"يأتي"},{en:"morning",ar:"صباح"},{en:"evening",ar:"مساء"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pr2-t1-8", type:"fill_blank", blankSentence:"I ___ football after school", blankOptions:["play","go","very"], correctAnswer:"play", explanation:"play football = يلعب كرة القدم", xp:13 },
      { id:"pr2-t1-9", type:"listen_select", listenSentence:"I come home", options:["come","go","play","wake"], correctAnswer:"come", explanation:"come home = يعود للبيت", xp:12 },
    ],
    t2: [
      { id:"pr2-t2-1", type:"word_order", sentence:"I wake up at seven and go to school", correctAnswer:"I wake up at seven and go to school", explanation:"روتين الصباح", xp:14 },
      { id:"pr2-t2-2", type:"translate", arabic:"ألعب كرة القدم بعد المدرسة", options:["I play football after school","I football play school","Play football I school","I after play football school"], correctAnswer:"I play football after school", explanation:"نشاط بعد المدرسة", xp:15 },
      { id:"pr2-t2-3", type:"listen_select", listenSentence:"I go to work early", options:["go","come","play","wake"], correctAnswer:"go", explanation:"go to work = يذهب للعمل", xp:14 },
      { id:"pr2-t2-4", type:"fill_blank", blankSentence:"I ___ home in the evening", blankOptions:["come","go","very"], correctAnswer:"come", explanation:"come home = يعود للبيت", xp:15 },
      { id:"pr2-t2-5", type:"word_order", sentence:"I play with my friends every day", correctAnswer:"I play with my friends every day", explanation:"ألعب مع أصدقائي كل يوم", xp:14 },
      { id:"pr2-t2-6", type:"translate", arabic:"أستيقظ وأذهب للعمل", options:["I wake up and go to work","I wake go work","Wake up go I work","I go wake work"], correctAnswer:"I wake up and go to work", explanation:"روتين", xp:15 },
      { id:"pr2-t2-7", type:"matching", pairs:[{en:"wake up",ar:"يستيقظ"},{en:"go",ar:"يذهب"},{en:"play",ar:"يلعب"},{en:"come",ar:"يأتي"},{en:"work",ar:"عمل"},{en:"home",ar:"بيت"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pr2-t2-8", type:"fill_blank", blankSentence:"I ___ up early and go to work", blankOptions:["wake","play","very"], correctAnswer:"wake", explanation:"wake up = يستيقظ", xp:15 },
      { id:"pr2-t2-9", type:"listen_select", listenSentence:"I play with my friends", options:["play","go","come","wake"], correctAnswer:"play", explanation:"play = يلعب", xp:14 },
    ],
    t3: [
      { id:"pr2-t3-1", type:"word_order", sentence:"I wake up go to school and play football", correctAnswer:"I wake up go to school and play football", explanation:"روتين يومي كامل", xp:18 },
      { id:"pr2-t3-2", type:"translate", arabic:"أستيقظ مبكراً وأذهب للعمل ثم أعود للبيت", options:["I wake up early go to work then come home","I wake work come home","Wake up early go work come I home","I early wake work come home"], correctAnswer:"I wake up early go to work then come home", explanation:"روتين كامل", xp:20 },
      { id:"pr2-t3-3", type:"listen_select", listenSentence:"I go to school every day", options:["go","come","play","wake"], correctAnswer:"go", explanation:"go to school = يذهب للمدرسة", xp:18 },
      { id:"pr2-t3-4", type:"fill_blank", blankSentence:"I wake up and ___ to school", blankOptions:["go","play","very"], correctAnswer:"go", explanation:"go to school = يذهب للمدرسة", xp:18 },
      { id:"pr2-t3-5", type:"matching", pairs:[{en:"wake up",ar:"يستيقظ"},{en:"go",ar:"يذهب"},{en:"play",ar:"يلعب"},{en:"come",ar:"يأتي"},{en:"morning",ar:"صباح"},{en:"home",ar:"بيت"}], correctAnswer:"matched", explanation:"رائع! راجعت روتينك", xp:18 },
      { id:"pr2-t3-6", type:"word_order", sentence:"I come home and play with friends", correctAnswer:"I come home and play with friends", explanation:"أعود للبيت وألعب", xp:18 },
      { id:"pr2-t3-7", type:"translate", arabic:"أستيقظ وأذهب للمدرسة وألعب مع أصدقائي", options:["I wake up go to school and play with my friends","I wake school play friends","Wake go school play I friends","I go wake school play friends"], correctAnswer:"I wake up go to school and play with my friends", explanation:"روتين كامل", xp:20 },
    ],
  },

  // ── الدرس 3: الكلمات الزمنية ──
  "الكلمات الزمنية": {
    t0: [
      { id:"pr3-t0-1", type:"translate", arabic:"دائماً", options:["always","usually","sometimes","never"], correctAnswer:"always", explanation:"always = دائماً", xp:10 },
      { id:"pr3-t0-2", type:"listen_select", listenSentence:"usually", options:["usually","always","never","often"], correctAnswer:"usually", explanation:"usually = عادةً", xp:10 },
      { id:"pr3-t0-3", type:"translate", arabic:"أحياناً", options:["sometimes","always","never","usually"], correctAnswer:"sometimes", explanation:"sometimes = أحياناً", xp:10 },
      { id:"pr3-t0-4", type:"word_order", sentence:"I always eat breakfast", correctAnswer:"I always eat breakfast", explanation:"دائماً آكل الفطور", xp:12 },
      { id:"pr3-t0-5", type:"listen_select", listenSentence:"I never sleep late", options:["never","always","sometimes","often"], correctAnswer:"never", explanation:"never = أبداً", xp:12 },
      { id:"pr3-t0-6", type:"translate", arabic:"أبداً", options:["never","always","sometimes","often"], correctAnswer:"never", explanation:"never = أبداً", xp:10 },
      { id:"pr3-t0-7", type:"word_order", sentence:"I usually walk to school", correctAnswer:"I usually walk to school", explanation:"عادةً أمشي للمدرسة", xp:12 },
      { id:"pr3-t0-8", type:"fill_blank", blankSentence:"I ___ eat breakfast", blankOptions:["always","very","the"], correctAnswer:"always", explanation:"always = دائماً", xp:12 },
      { id:"pr3-t0-9", type:"matching", pairs:[{en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"never",ar:"أبداً"},{en:"often",ar:"غالباً"},{en:"every day",ar:"كل يوم"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pr3-t1-1", type:"word_order", sentence:"I usually wake up early", correctAnswer:"I usually wake up early", explanation:"عادةً أستيقظ مبكراً", xp:13 },
      { id:"pr3-t1-2", type:"translate", arabic:"أحياناً ألعب كرة القدم", options:["I sometimes play football","I football sometimes play","Sometimes I play football","Play sometimes I football"], correctAnswer:"I sometimes play football", explanation:"تكرار النشاط", xp:13 },
      { id:"pr3-t1-3", type:"listen_select", listenSentence:"I always read books", options:["always","never","sometimes","usually"], correctAnswer:"always", explanation:"always = دائماً", xp:12 },
      { id:"pr3-t1-4", type:"fill_blank", blankSentence:"I ___ sleep late", blankOptions:["never","always","very"], correctAnswer:"never", explanation:"never = أبداً", xp:13 },
      { id:"pr3-t1-5", type:"word_order", sentence:"I often watch TV at night", correctAnswer:"I often watch TV at night", explanation:"غالباً أشاهد التلفاز ليلاً", xp:13 },
      { id:"pr3-t1-6", type:"translate", arabic:"غالباً", options:["often","always","never","sometimes"], correctAnswer:"often", explanation:"often = غالباً", xp:13 },
      { id:"pr3-t1-7", type:"matching", pairs:[{en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"never",ar:"أبداً"},{en:"often",ar:"غالباً"},{en:"night",ar:"ليل"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pr3-t1-8", type:"fill_blank", blankSentence:"I ___ play football", blankOptions:["sometimes","never","very"], correctAnswer:"sometimes", explanation:"sometimes = أحياناً", xp:13 },
      { id:"pr3-t1-9", type:"listen_select", listenSentence:"I usually go to bed early", options:["usually","always","never","often"], correctAnswer:"usually", explanation:"usually = عادةً", xp:12 },
    ],
    t2: [
      { id:"pr3-t2-1", type:"word_order", sentence:"I always wake up early and eat breakfast", correctAnswer:"I always wake up early and eat breakfast", explanation:"روتين بكلمة زمنية", xp:14 },
      { id:"pr3-t2-2", type:"translate", arabic:"عادةً أمشي للمدرسة وأحياناً ألعب", options:["I usually walk to school and sometimes play","I walk school sometimes play","Usually walk school I play sometimes","I usually sometimes walk play school"], correctAnswer:"I usually walk to school and sometimes play", explanation:"تكراران", xp:15 },
      { id:"pr3-t2-3", type:"listen_select", listenSentence:"I never sleep late", options:["never","always","sometimes","often"], correctAnswer:"never", explanation:"never = أبداً", xp:14 },
      { id:"pr3-t2-4", type:"fill_blank", blankSentence:"I ___ watch TV at night", blankOptions:["often","never","very"], correctAnswer:"often", explanation:"often = غالباً", xp:15 },
      { id:"pr3-t2-5", type:"word_order", sentence:"I sometimes read books at night", correctAnswer:"I sometimes read books at night", explanation:"أحياناً أقرأ ليلاً", xp:14 },
      { id:"pr3-t2-6", type:"translate", arabic:"دائماً آكل الفطور وأبداً لا أنام متأخراً", options:["I always eat breakfast and never sleep late","I always breakfast never sleep","Always eat breakfast I never late","I eat always breakfast never sleep"], correctAnswer:"I always eat breakfast and never sleep late", explanation:"عادتان", xp:15 },
      { id:"pr3-t2-7", type:"matching", pairs:[{en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"never",ar:"أبداً"},{en:"often",ar:"غالباً"},{en:"early",ar:"مبكراً"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pr3-t2-8", type:"fill_blank", blankSentence:"I ___ wake up early", blankOptions:["always","never","very"], correctAnswer:"always", explanation:"always = دائماً", xp:15 },
      { id:"pr3-t2-9", type:"listen_select", listenSentence:"I sometimes play with friends", options:["sometimes","always","never","often"], correctAnswer:"sometimes", explanation:"sometimes = أحياناً", xp:14 },
    ],
    t3: [
      { id:"pr3-t3-1", type:"word_order", sentence:"I always wake up early and usually walk to school", correctAnswer:"I always wake up early and usually walk to school", explanation:"كلمتان زمنيتان", xp:18 },
      { id:"pr3-t3-2", type:"translate", arabic:"دائماً أقرأ في الليل وأبداً لا أشاهد التلفاز", options:["I always read at night and never watch TV","I always read never watch TV","Always read night I never TV","I read always night never watch TV"], correctAnswer:"I always read at night and never watch TV", explanation:"عادتان", xp:20 },
      { id:"pr3-t3-3", type:"listen_select", listenSentence:"I usually go to bed early", options:["usually","always","never","sometimes"], correctAnswer:"usually", explanation:"usually = عادةً", xp:18 },
      { id:"pr3-t3-4", type:"fill_blank", blankSentence:"I ___ eat breakfast and never skip it", blankOptions:["always","never","very"], correctAnswer:"always", explanation:"always = دائماً", xp:18 },
      { id:"pr3-t3-5", type:"matching", pairs:[{en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"never",ar:"أبداً"},{en:"often",ar:"غالباً"},{en:"every day",ar:"كل يوم"}], correctAnswer:"matched", explanation:"رائع! راجعت الكلمات الزمنية", xp:18 },
      { id:"pr3-t3-6", type:"word_order", sentence:"I often play football after school", correctAnswer:"I often play football after school", explanation:"غالباً ألعب بعد المدرسة", xp:18 },
      { id:"pr3-t3-7", type:"translate", arabic:"عادةً أستيقظ مبكراً وأحياناً أنام متأخراً", options:["I usually wake up early and sometimes sleep late","I usually wake sometimes sleep","Usually wake early I sometimes late","I wake usually sometimes sleep late"], correctAnswer:"I usually wake up early and sometimes sleep late", explanation:"عادتان", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة ──
  "تحدي الوحدة": {
    t0: [
      { id:"prc-t0-1", type:"word_order", sentence:"I always eat breakfast", correctAnswer:"I always eat breakfast", explanation:"دائماً آكل الفطور", xp:15 },
      { id:"prc-t0-2", type:"translate", arabic:"أستيقظ الساعة السابعة", options:["I wake up at seven","I seven wake up","Wake up I seven","Seven wake I up"], correctAnswer:"I wake up at seven", explanation:"وقت الاستيقاظ", xp:15 },
      { id:"prc-t0-3", type:"listen_select", listenSentence:"I go to school", options:["go","come","play","eat"], correctAnswer:"go", explanation:"go = يذهب", xp:15 },
      { id:"prc-t0-4", type:"fill_blank", blankSentence:"I ___ to school every day", blankOptions:["walk","eat","very"], correctAnswer:"walk", explanation:"I walk = أنا أمشي", xp:15 },
      { id:"prc-t0-5", type:"matching", pairs:[{en:"eat",ar:"يأكل"},{en:"sleep",ar:"ينام"},{en:"wake up",ar:"يستيقظ"},{en:"always",ar:"دائماً"},{en:"never",ar:"أبداً"},{en:"play",ar:"يلعب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"prc-t0-6", type:"translate", arabic:"أحياناً ألعب كرة القدم", options:["I sometimes play football","I football sometimes","Sometimes play I football","Play I sometimes football"], correctAnswer:"I sometimes play football", explanation:"تكرار النشاط", xp:15 },
      { id:"prc-t0-7", type:"word_order", sentence:"I read books at night", correctAnswer:"I read books at night", explanation:"أقرأ ليلاً", xp:15 },
    ],
    t1: [
      { id:"prc-t1-1", type:"translate", arabic:"عادةً أمشي للمدرسة", options:["I usually walk to school","I walk usually school","Usually I walk school","Walk usually I school"], correctAnswer:"I usually walk to school", explanation:"عادة يومية", xp:16 },
      { id:"prc-t1-2", type:"word_order", sentence:"I never sleep late at night", correctAnswer:"I never sleep late at night", explanation:"أبداً لا أنام متأخراً", xp:16 },
      { id:"prc-t1-3", type:"listen_select", listenSentence:"I play football after school", options:["play","go","come","wake"], correctAnswer:"play", explanation:"play = يلعب", xp:16 },
      { id:"prc-t1-4", type:"fill_blank", blankSentence:"I ___ wake up early", blankOptions:["always","never","very"], correctAnswer:"always", explanation:"always = دائماً", xp:16 },
      { id:"prc-t1-5", type:"matching", pairs:[{en:"wake up",ar:"يستيقظ"},{en:"go",ar:"يذهب"},{en:"play",ar:"يلعب"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"always",ar:"دائماً"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"prc-t1-6", type:"translate", arabic:"أذهب للمدرسة وأعود للبيت", options:["I go to school and come home","I school go come home","Go school come I home","I come go school home"], correctAnswer:"I go to school and come home", explanation:"فعلان", xp:16 },
      { id:"prc-t1-7", type:"word_order", sentence:"I often watch TV at night", correctAnswer:"I often watch TV at night", explanation:"غالباً أشاهد التلفاز", xp:16 },
    ],
    t2: [
      { id:"prc-t2-1", type:"word_order", sentence:"I always wake up early and go to work", correctAnswer:"I always wake up early and go to work", explanation:"روتين بكلمة زمنية", xp:18 },
      { id:"prc-t2-2", type:"translate", arabic:"عادةً أقرأ الكتب وأحياناً أشاهد التلفاز", options:["I usually read books and sometimes watch TV","I read books sometimes watch","Usually read I sometimes watch TV","I usually sometimes read watch TV"], correctAnswer:"I usually read books and sometimes watch TV", explanation:"عادتان", xp:18 },
      { id:"prc-t2-3", type:"listen_select", listenSentence:"I never sleep late", options:["never","always","sometimes","often"], correctAnswer:"never", explanation:"never = أبداً", xp:18 },
      { id:"prc-t2-4", type:"fill_blank", blankSentence:"I come home and ___ with friends", blankOptions:["play","go","very"], correctAnswer:"play", explanation:"play = يلعب", xp:18 },
      { id:"prc-t2-5", type:"matching", pairs:[{en:"eat",ar:"يأكل"},{en:"wake up",ar:"يستيقظ"},{en:"always",ar:"دائماً"},{en:"never",ar:"أبداً"},{en:"usually",ar:"عادةً"},{en:"often",ar:"غالباً"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"prc-t2-6", type:"translate", arabic:"دائماً آكل الفطور وأمشي للمدرسة", options:["I always eat breakfast and walk to school","I always breakfast walk school","Always eat I breakfast walk school","I eat always walk breakfast school"], correctAnswer:"I always eat breakfast and walk to school", explanation:"روتين", xp:18 },
      { id:"prc-t2-7", type:"word_order", sentence:"I sometimes play with my friends", correctAnswer:"I sometimes play with my friends", explanation:"أحياناً ألعب مع أصدقائي", xp:18 },
    ],
    t3: [
      { id:"prc-t3-1", type:"word_order", sentence:"I always wake up early eat breakfast and go to school", correctAnswer:"I always wake up early eat breakfast and go to school", explanation:"روتين صباحي كامل", xp:22 },
      { id:"prc-t3-2", type:"translate", arabic:"عادةً أمشي للعمل وأبداً لا أنام متأخراً", options:["I usually walk to work and never sleep late","I usually walk never sleep","Usually walk work I never late","I walk usually never sleep work"], correctAnswer:"I usually walk to work and never sleep late", explanation:"عادتان", xp:22 },
      { id:"prc-t3-3", type:"listen_select", listenSentence:"I read books every day", options:["read","watch","walk","eat"], correctAnswer:"read", explanation:"read = يقرأ", xp:20 },
      { id:"prc-t3-4", type:"fill_blank", blankSentence:"I ___ eat breakfast and never skip it", blankOptions:["always","never","very"], correctAnswer:"always", explanation:"always = دائماً", xp:22 },
      { id:"prc-t3-5", type:"matching", pairs:[{en:"eat",ar:"يأكل"},{en:"sleep",ar:"ينام"},{en:"wake up",ar:"يستيقظ"},{en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"never",ar:"أبداً"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"prc-t3-6", type:"word_order", sentence:"I usually go to bed early at night", correctAnswer:"I usually go to bed early at night", explanation:"عادةً أنام مبكراً", xp:22 },
      { id:"prc-t3-7", type:"translate", arabic:"دائماً أستيقظ مبكراً وأذهب للمدرسة وألعب مع أصدقائي", options:["I always wake up early go to school and play with my friends","I always wake school play friends","Always wake early go school I play friends","I wake always school go play friends"], correctAnswer:"I always wake up early go to school and play with my friends", explanation:"روتين كامل 👑", xp:24 },
    ],
  },
};
