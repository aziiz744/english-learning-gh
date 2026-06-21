import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 26: صف أفراد عائلتك
//   درس 1: أفراد العائلة — father, mother, brother, sister, grandparents
//   درس 2: صف شخصيتهم — kind, funny, smart, friendly
//   درس 3: تحدث عن عائلتك — have, this is my, older, younger
// ══════════════════════════════════════════════════════════════

export const unit26FamilyBank: Record<string, TieredBank> = {

  "أفراد العائلة": {
    t0: [
      { id:"fm-pic-1", type:"picture_match", word:"father", arabic:"أب", pictureOptions:[{emoji:"👨",label:"father"},{emoji:"👩",label:"mother"},{emoji:"👦",label:"brother"},{emoji:"👧",label:"sister"}], correctAnswer:"father", explanation:"أب = father 👨", xp:10 },
      { id:"fm-pic-2", type:"picture_match", word:"mother", arabic:"أم", pictureOptions:[{emoji:"👩",label:"mother"},{emoji:"👨",label:"father"},{emoji:"👵",label:"grandmother"},{emoji:"👧",label:"sister"}], correctAnswer:"mother", explanation:"أم = mother 👩", xp:10 },
      { id:"fm1-t0-1", type:"translate", arabic:"أب", options:["father","mother","brother","sister"], correctAnswer:"father", explanation:"father = أب 👨", xp:10 },
      { id:"fm1-t0-2", type:"listen_select", listenSentence:"mother", options:["mother","father","brother","sister"], correctAnswer:"mother", explanation:"mother = أم 👩", xp:10 },
      { id:"fm1-t0-3", type:"translate", arabic:"أخ", options:["brother","sister","father","son"], correctAnswer:"brother", explanation:"brother = أخ 👦", xp:10 },
      { id:"fm1-t0-4", type:"word_order", sentence:"This is my father", correctAnswer:"This is my father", explanation:"هذا أبي", xp:12 },
      { id:"fm1-t0-5", type:"fill_blank", blankSentence:"My ___ is a teacher", blankOptions:["mother","run","very"], correctAnswer:"mother", explanation:"my mother = أمي", xp:12 },
      { id:"fm1-t0-6", type:"translate", arabic:"أخت", options:["sister","brother","mother","daughter"], correctAnswer:"sister", explanation:"sister = أخت 👧", xp:10 },
      { id:"fm1-t0-7", type:"listen_select", listenSentence:"my brother", options:["brother","mother","father","sister"], correctAnswer:"brother", explanation:"my brother = أخي", xp:12 },
      { id:"fm1-t0-8", type:"word_order", sentence:"I have a sister", correctAnswer:"I have a sister", explanation:"لديّ أخت", xp:12 },
      { id:"fm1-t0-9", type:"matching", pairs:[{en:"father",ar:"أب"},{en:"mother",ar:"أم"},{en:"brother",ar:"أخ"},{en:"sister",ar:"أخت"},{en:"son",ar:"ابن"},{en:"daughter",ar:"ابنة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fm1-t1-1", type:"translate", arabic:"جدّ", options:["grandfather","grandmother","father","uncle"], correctAnswer:"grandfather", explanation:"grandfather = جدّ 👴", xp:12 },
      { id:"fm1-t1-2", type:"word_order", sentence:"My grandmother lives with us", correctAnswer:"My grandmother lives with us", explanation:"جدّتي تعيش معنا", xp:14 },
      { id:"fm1-t1-3", type:"listen_select", listenSentence:"my uncle", options:["uncle","aunt","cousin","father"], correctAnswer:"uncle", explanation:"uncle = عمّ/خال", xp:13 },
      { id:"fm1-t1-4", type:"translate", arabic:"جدّة", options:["grandmother","grandfather","mother","aunt"], correctAnswer:"grandmother", explanation:"grandmother = جدّة 👵", xp:12 },
      { id:"fm1-t1-5", type:"fill_blank", blankSentence:"My ___ has two children", blankOptions:["uncle","run","very"], correctAnswer:"uncle", explanation:"my uncle = عمّي", xp:14 },
      { id:"fm1-t1-6", type:"word_order", sentence:"I love my family very much", correctAnswer:"I love my family very much", explanation:"أحب عائلتي كثيراً", xp:14 },
      { id:"fm1-t1-7", type:"translate", arabic:"عمّة/خالة", options:["aunt","uncle","cousin","sister"], correctAnswer:"aunt", explanation:"aunt = عمّة/خالة", xp:12 },
      { id:"fm1-t1-8", type:"listen_select", listenSentence:"my cousin", options:["cousin","cousins","cause","cost"], correctAnswer:"cousin", explanation:"cousin = ابن العم/الخال", xp:13 },
      { id:"fm1-t1-9", type:"matching", pairs:[{en:"grandfather",ar:"جدّ"},{en:"grandmother",ar:"جدّة"},{en:"uncle",ar:"عمّ"},{en:"aunt",ar:"عمّة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"fm1-t2-1", type:"word_order", sentence:"I have two brothers and one sister", correctAnswer:"I have two brothers and one sister", explanation:"لديّ أخوان وأخت", xp:16 },
      { id:"fm1-t2-2", type:"translate", arabic:"عائلتي كبيرة وسعيدة", options:["My family is big and happy","My family big and happy","My family is big and happily","My families is big and happy"], correctAnswer:"My family is big and happy", explanation:"family is big = العائلة كبيرة", xp:16 },
      { id:"fm1-t2-3", type:"fill_blank", blankSentence:"My ___ are very old now", blankOptions:["grandparents","run","very"], correctAnswer:"grandparents", explanation:"grandparents = الأجداد", xp:15 },
      { id:"fm1-t2-4", type:"word_order", sentence:"My parents work in the same office", correctAnswer:"My parents work in the same office", explanation:"والداي يعملان في نفس المكتب", xp:16 },
      { id:"fm1-t2-5", type:"translate", arabic:"أخي الأكبر يدرس في الجامعة", options:["My older brother studies at university","My older brother study at university","My old brother studies at university","My older brother studies in university"], correctAnswer:"My older brother studies at university", explanation:"older brother = الأخ الأكبر", xp:16 },
      { id:"fm1-t2-6", type:"listen_select", listenSentence:"my whole family", options:["whole","hole","wall","well"], correctAnswer:"whole", explanation:"whole family = كل العائلة", xp:15 },
      { id:"fm1-t2-7", type:"word_order", sentence:"We all live in the same house", correctAnswer:"We all live in the same house", explanation:"نعيش جميعاً في نفس المنزل", xp:15 },
      { id:"fm1-t2-8", type:"fill_blank", blankSentence:"My ___ have three children", blankOptions:["parents","run","very"], correctAnswer:"parents", explanation:"parents = الوالدان", xp:15 },
    ],
    t3: [],
  },

  "صف شخصيتهم": {
    t0: [
      { id:"fm2-t0-1", type:"translate", arabic:"لطيف", options:["kind","funny","smart","tall"], correctAnswer:"kind", explanation:"kind = لطيف", xp:10 },
      { id:"fm2-t0-2", type:"listen_select", listenSentence:"funny", options:["funny","sunny","money","bunny"], correctAnswer:"funny", explanation:"funny = مضحك", xp:10 },
      { id:"fm2-t0-3", type:"translate", arabic:"ذكي", options:["smart","kind","funny","quiet"], correctAnswer:"smart", explanation:"smart = ذكي", xp:10 },
      { id:"fm2-t0-4", type:"word_order", sentence:"My father is kind", correctAnswer:"My father is kind", explanation:"أبي لطيف", xp:12 },
      { id:"fm2-t0-5", type:"fill_blank", blankSentence:"My sister is very ___", blankOptions:["funny","run","very"], correctAnswer:"funny", explanation:"funny = مضحكة", xp:12 },
      { id:"fm2-t0-6", type:"translate", arabic:"ودود", options:["friendly","angry","sad","quiet"], correctAnswer:"friendly", explanation:"friendly = ودود", xp:10 },
      { id:"fm2-t0-7", type:"listen_select", listenSentence:"very kind", options:["kind","find","mind","wind"], correctAnswer:"kind", explanation:"kind = لطيف", xp:12 },
      { id:"fm2-t0-8", type:"word_order", sentence:"She is very smart", correctAnswer:"She is very smart", explanation:"هي ذكية جداً", xp:12 },
      { id:"fm2-t0-9", type:"matching", pairs:[{en:"kind",ar:"لطيف"},{en:"funny",ar:"مضحك"},{en:"smart",ar:"ذكي"},{en:"friendly",ar:"ودود"},{en:"quiet",ar:"هادئ"},{en:"brave",ar:"شجاع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fm2-t1-1", type:"translate", arabic:"هادئ", options:["quiet","loud","funny","brave"], correctAnswer:"quiet", explanation:"quiet = هادئ", xp:12 },
      { id:"fm2-t1-2", type:"word_order", sentence:"My brother is funny and kind", correctAnswer:"My brother is funny and kind", explanation:"أخي مضحك ولطيف", xp:14 },
      { id:"fm2-t1-3", type:"listen_select", listenSentence:"she is friendly", options:["friendly","friend","friends","friendship"], correctAnswer:"friendly", explanation:"friendly = ودودة", xp:13 },
      { id:"fm2-t1-4", type:"translate", arabic:"شجاع", options:["brave","scared","weak","shy"], correctAnswer:"brave", explanation:"brave = شجاع", xp:12 },
      { id:"fm2-t1-5", type:"fill_blank", blankSentence:"My grandfather is very ___", blankOptions:["wise","run","very"], correctAnswer:"wise", explanation:"wise = حكيم", xp:14 },
      { id:"fm2-t1-6", type:"word_order", sentence:"My mother is the kindest person", correctAnswer:"My mother is the kindest person", explanation:"أمي ألطف شخص", xp:14 },
      { id:"fm2-t1-7", type:"translate", arabic:"خجول", options:["shy","brave","loud","funny"], correctAnswer:"shy", explanation:"shy = خجول", xp:12 },
      { id:"fm2-t1-8", type:"listen_select", listenSentence:"he is wise", options:["wise","wife","wide","wild"], correctAnswer:"wise", explanation:"wise = حكيم", xp:13 },
      { id:"fm2-t1-9", type:"matching", pairs:[{en:"quiet",ar:"هادئ"},{en:"brave",ar:"شجاع"},{en:"wise",ar:"حكيم"},{en:"shy",ar:"خجول"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"fm2-t2-1", type:"word_order", sentence:"My sister is smart and very hardworking", correctAnswer:"My sister is smart and very hardworking", explanation:"أختي ذكية ومجتهدة جداً", xp:16 },
      { id:"fm2-t2-2", type:"translate", arabic:"جدّي رجل حكيم وصبور", options:["My grandfather is a wise and patient man","My grandfather is wise and patient man","My grandfather is a wise and patient men","My grandfather a wise and patient man"], correctAnswer:"My grandfather is a wise and patient man", explanation:"wise and patient = حكيم وصبور", xp:16 },
      { id:"fm2-t2-3", type:"fill_blank", blankSentence:"Everyone says my mother is very ___", blankOptions:["kind","run","very"], correctAnswer:"kind", explanation:"very kind = لطيفة جداً", xp:15 },
      { id:"fm2-t2-4", type:"word_order", sentence:"My father is strict but very fair", correctAnswer:"My father is strict but very fair", explanation:"أبي صارم لكنه عادل جداً", xp:16 },
      { id:"fm2-t2-5", type:"translate", arabic:"أخي الصغير مرح ومليء بالطاقة", options:["My little brother is cheerful and energetic","My little brother is cheerful and energetics","My little brother cheerful and energetic","My little brother is cheerfully and energetic"], correctAnswer:"My little brother is cheerful and energetic", explanation:"cheerful = مرح", xp:16 },
      { id:"fm2-t2-6", type:"listen_select", listenSentence:"a generous person", options:["generous","genius","general","gentle"], correctAnswer:"generous", explanation:"generous = كريم", xp:15 },
      { id:"fm2-t2-7", type:"word_order", sentence:"They are all very supportive of me", correctAnswer:"They are all very supportive of me", explanation:"جميعهم يدعمونني كثيراً", xp:15 },
      { id:"fm2-t2-8", type:"fill_blank", blankSentence:"My aunt is always ___ to everyone", blankOptions:["friendly","run","very"], correctAnswer:"friendly", explanation:"friendly = ودودة", xp:15 },
    ],
    t3: [],
  },

  "تحدث عن عائلتك": {
    t0: [
      { id:"fm3-t0-1", type:"translate", arabic:"الأكبر سناً", options:["older","younger","oldest","young"], correctAnswer:"older", explanation:"older = الأكبر سناً", xp:10 },
      { id:"fm3-t0-2", type:"translate", arabic:"الأصغر سناً", options:["younger","older","youngest","old"], correctAnswer:"younger", explanation:"younger = الأصغر سناً", xp:10 },
      { id:"fm3-t0-3", type:"word_order", sentence:"This is my family", correctAnswer:"This is my family", explanation:"هذه عائلتي", xp:12 },
      { id:"fm3-t0-4", type:"fill_blank", blankSentence:"My brother is ___ than me", blankOptions:["older","run","very"], correctAnswer:"older", explanation:"older than = أكبر من", xp:12 },
      { id:"fm3-t0-5", type:"listen_select", listenSentence:"my parents", options:["parents","parent","present","patient"], correctAnswer:"parents", explanation:"my parents = والداي", xp:12 },
      { id:"fm3-t0-6", type:"translate", arabic:"لديّ أخ واحد", options:["I have one brother","I have one brothers","I has one brother","I have a one brother"], correctAnswer:"I have one brother", explanation:"I have one brother", xp:10 },
      { id:"fm3-t0-7", type:"word_order", sentence:"My sister is younger", correctAnswer:"My sister is younger", explanation:"أختي أصغر سناً", xp:12 },
      { id:"fm3-t0-8", type:"fill_blank", blankSentence:"How many ___ do you have", blankOptions:["brothers","run","very"], correctAnswer:"brothers", explanation:"how many brothers = كم أخ", xp:12 },
      { id:"fm3-t0-9", type:"matching", pairs:[{en:"older",ar:"الأكبر"},{en:"younger",ar:"الأصغر"},{en:"this is my",ar:"هذا/هذه"},{en:"I have",ar:"لديّ"},{en:"parents",ar:"الوالدان"},{en:"children",ar:"الأطفال"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fm3-t1-1", type:"word_order", sentence:"My older sister is married", correctAnswer:"My older sister is married", explanation:"أختي الكبرى متزوّجة", xp:14 },
      { id:"fm3-t1-2", type:"translate", arabic:"كم عدد أفراد عائلتك؟", options:["How big is your family?","How big your family?","How big is your families?","How is big your family?"], correctAnswer:"How big is your family?", explanation:"How big is your family?", xp:14 },
      { id:"fm3-t1-3", type:"listen_select", listenSentence:"my youngest child", options:["youngest","younger","young","youth"], correctAnswer:"youngest", explanation:"youngest = الأصغر", xp:13 },
      { id:"fm3-t1-4", type:"fill_blank", blankSentence:"I am the ___ in my family", blankOptions:["oldest","run","very"], correctAnswer:"oldest", explanation:"the oldest = الأكبر", xp:14 },
      { id:"fm3-t1-5", type:"word_order", sentence:"We are a family of five", correctAnswer:"We are a family of five", explanation:"نحن عائلة من خمسة", xp:14 },
      { id:"fm3-t1-6", type:"translate", arabic:"أبي أكبر من أمي", options:["My father is older than my mother","My father is older then my mother","My father older than my mother","My father is old than my mother"], correctAnswer:"My father is older than my mother", explanation:"older than = أكبر من", xp:13 },
      { id:"fm3-t1-7", type:"listen_select", listenSentence:"my whole family", options:["whole","hole","while","wheel"], correctAnswer:"whole", explanation:"whole family = كل العائلة", xp:13 },
      { id:"fm3-t1-8", type:"word_order", sentence:"My family means everything to me", correctAnswer:"My family means everything to me", explanation:"عائلتي تعني لي كل شيء", xp:14 },
      { id:"fm3-t1-9", type:"matching", pairs:[{en:"oldest",ar:"الأكبر"},{en:"youngest",ar:"الأصغر"},{en:"married",ar:"متزوّج"},{en:"single",ar:"أعزب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"fm3-t2-1", type:"word_order", sentence:"My older brother is two years older than me", correctAnswer:"My older brother is two years older than me", explanation:"أخي أكبر مني بسنتين", xp:16 },
      { id:"fm3-t2-2", type:"translate", arabic:"عائلتي تتكوّن من ستة أفراد", options:["My family has six members","My family have six members","My family has six member","My families has six members"], correctAnswer:"My family has six members", explanation:"six members = ستة أفراد", xp:16 },
      { id:"fm3-t2-3", type:"fill_blank", blankSentence:"I am the ___ child in my family", blankOptions:["youngest","run","very"], correctAnswer:"youngest", explanation:"the youngest = الأصغر", xp:15 },
      { id:"fm3-t2-4", type:"word_order", sentence:"We always spend the weekends together", correctAnswer:"We always spend the weekends together", explanation:"نقضي عطلة الأسبوع معاً دائماً", xp:16 },
      { id:"fm3-t2-5", type:"translate", arabic:"أنا فخور جداً بعائلتي", options:["I am very proud of my family","I am very proud of my families","I very proud of my family","I am very proud for my family"], correctAnswer:"I am very proud of my family", explanation:"proud of = فخور بـ", xp:16 },
      { id:"fm3-t2-6", type:"listen_select", listenSentence:"a close family", options:["close","clothes","cloud","clock"], correctAnswer:"close", explanation:"a close family = عائلة متقاربة", xp:15 },
      { id:"fm3-t2-7", type:"word_order", sentence:"My grandparents have ten grandchildren", correctAnswer:"My grandparents have ten grandchildren", explanation:"لأجدادي عشرة أحفاد", xp:15 },
      { id:"fm3-t2-8", type:"fill_blank", blankSentence:"My parents have been married for ___ years", blankOptions:["twenty","run","very"], correctAnswer:"twenty", explanation:"twenty years = عشرون عاماً", xp:15 },
    ],
    t3: [],
  },
};
