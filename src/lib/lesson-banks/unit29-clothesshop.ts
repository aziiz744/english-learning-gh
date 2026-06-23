import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 29: تسوق للملابس (متقدّم)
//   درس 1: ملابس متنوّعة — jacket, sweater, jeans, scarf, gloves
//   درس 2: المقاسات والقياس — fit, tight, loose, try on, size
//   درس 3: اتخاذ القرار — suits you, prefer, take it, return
// ══════════════════════════════════════════════════════════════

export const unit29ClothesShopBank: Record<string, TieredBank> = {

  "ملابس متنوّعة": {
    t0: [
      { id:"cs-pic-1", type:"picture_match", word:"jacket", arabic:"سترة", pictureOptions:[{emoji:"🧥",label:"jacket"},{emoji:"👕",label:"shirt"},{emoji:"👖",label:"jeans"},{emoji:"🧣",label:"scarf"}], correctAnswer:"jacket", explanation:"سترة = jacket 🧥", xp:10 },
      { id:"cs1-t0-1", type:"translate", arabic:"سترة", options:["jacket","sweater","jeans","scarf"], correctAnswer:"jacket", explanation:"jacket = سترة 🧥", xp:10 },
      { id:"cs1-t0-2", type:"listen_select", listenSentence:"sweater", options:["sweater","sweetener","sweat","swept"], correctAnswer:"sweater", explanation:"sweater = كنزة", xp:10 },
      { id:"cs1-t0-3", type:"translate", arabic:"جينز", options:["jeans","jacket","sweater","scarf"], correctAnswer:"jeans", explanation:"jeans = جينز 👖", xp:10 },
      { id:"cs1-t0-4", type:"word_order", sentence:"I like this jacket", correctAnswer:"I like this jacket", explanation:"تعجبني هذه السترة", xp:12 },
      { id:"cs1-t0-5", type:"fill_blank", blankSentence:"I need a warm ___", blankOptions:["sweater","run","very"], correctAnswer:"sweater", explanation:"a warm sweater = كنزة دافئة", xp:12 },
      { id:"cs1-t0-6", type:"translate", arabic:"وشاح", options:["scarf","gloves","hat","socks"], correctAnswer:"scarf", explanation:"scarf = وشاح 🧣", xp:10 },
      { id:"cs1-t0-7", type:"listen_select", listenSentence:"warm gloves", options:["gloves","glove","globe","glow"], correctAnswer:"gloves", explanation:"gloves = قفازات 🧤", xp:12 },
      { id:"cs1-t0-8", type:"word_order", sentence:"These jeans are nice", correctAnswer:"These jeans are nice", explanation:"هذا الجينز جميل", xp:12 },
      { id:"cs1-t0-9", type:"matching", pairs:[{en:"jacket",ar:"سترة"},{en:"sweater",ar:"كنزة"},{en:"jeans",ar:"جينز"},{en:"scarf",ar:"وشاح"},{en:"gloves",ar:"قفازات"},{en:"boots",ar:"حذاء طويل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cs1-t1-1", type:"translate", arabic:"حذاء طويل", options:["boots","shoes","socks","sandals"], correctAnswer:"boots", explanation:"boots = حذاء طويل 👢", xp:12 },
      { id:"cs1-t1-2", type:"word_order", sentence:"I want to buy a new jacket", correctAnswer:"I want to buy a new jacket", explanation:"أريد شراء سترة جديدة", xp:14 },
      { id:"cs1-t1-3", type:"listen_select", listenSentence:"a wool sweater", options:["wool","wood","wall","well"], correctAnswer:"wool", explanation:"wool = صوف", xp:13 },
      { id:"cs1-t1-4", type:"translate", arabic:"قميص رسمي", options:["formal shirt","casual shirt","sport shirt","t-shirt"], correctAnswer:"formal shirt", explanation:"formal shirt = قميص رسمي", xp:12 },
      { id:"cs1-t1-5", type:"fill_blank", blankSentence:"I wear ___ in winter", blankOptions:["boots","run","very"], correctAnswer:"boots", explanation:"boots = حذاء طويل", xp:14 },
      { id:"cs1-t1-6", type:"word_order", sentence:"This sweater is made of wool", correctAnswer:"This sweater is made of wool", explanation:"هذه الكنزة من الصوف", xp:14 },
      { id:"cs1-t1-7", type:"translate", arabic:"تيشيرت", options:["t-shirt","shirt","jacket","sweater"], correctAnswer:"t-shirt", explanation:"t-shirt = تيشيرت 👕", xp:12 },
      { id:"cs1-t1-8", type:"listen_select", listenSentence:"a cotton shirt", options:["cotton","button","bottom","cattle"], correctAnswer:"cotton", explanation:"cotton = قطن", xp:13 },
      { id:"cs1-t1-9", type:"matching", pairs:[{en:"boots",ar:"حذاء طويل"},{en:"wool",ar:"صوف"},{en:"cotton",ar:"قطن"},{en:"t-shirt",ar:"تيشيرت"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cs1-t2-1", type:"word_order", sentence:"I am looking for a warm winter jacket", correctAnswer:"I am looking for a warm winter jacket", explanation:"أبحث عن سترة شتوية دافئة", xp:16 },
      { id:"cs1-t2-2", type:"translate", arabic:"هل لديكم هذه الكنزة بمقاس أكبر؟", options:["Do you have this sweater in a bigger size?","Do you have this sweater in bigger size?","Do you has this sweater in a bigger size?","Do you have this sweaters in a bigger size?"], correctAnswer:"Do you have this sweater in a bigger size?", explanation:"bigger size = مقاس أكبر", xp:16 },
      { id:"cs1-t2-3", type:"fill_blank", blankSentence:"This jacket is made of pure ___", blankOptions:["wool","run","very"], correctAnswer:"wool", explanation:"pure wool = صوف خالص", xp:15 },
      { id:"cs1-t2-4", type:"word_order", sentence:"These boots are perfect for the rain", correctAnswer:"These boots are perfect for the rain", explanation:"هذا الحذاء مثالي للمطر", xp:16 },
      { id:"cs1-t2-5", type:"translate", arabic:"أحتاج ملابس للطقس البارد", options:["I need clothes for cold weather","I need clothes for cold weathers","I need cloth for cold weather","I need clothes for colds weather"], correctAnswer:"I need clothes for cold weather", explanation:"clothes for cold weather", xp:16 },
      { id:"cs1-t2-6", type:"listen_select", listenSentence:"a stylish coat", options:["stylish","style","styles","steel"], correctAnswer:"stylish", explanation:"stylish = أنيق", xp:15 },
      { id:"cs1-t2-7", type:"word_order", sentence:"I prefer cotton shirts in summer", correctAnswer:"I prefer cotton shirts in summer", explanation:"أفضّل القمصان القطنية في الصيف", xp:15 },
      { id:"cs1-t2-8", type:"fill_blank", blankSentence:"Do you have this in a different ___", blankOptions:["color","run","very"], correctAnswer:"color", explanation:"different color = لون مختلف", xp:15 },
    ],
    t3: [],
  },

  "المقاسات والقياس": {
    t0: [
      { id:"cs2-t0-1", type:"translate", arabic:"يناسب", options:["fit","tight","loose","big"], correctAnswer:"fit", explanation:"fit = يناسب", xp:10 },
      { id:"cs2-t0-2", type:"translate", arabic:"ضيّق", options:["tight","loose","fit","wide"], correctAnswer:"tight", explanation:"tight = ضيّق", xp:10 },
      { id:"cs2-t0-3", type:"listen_select", listenSentence:"loose", options:["loose","lose","loss","lost"], correctAnswer:"loose", explanation:"loose = واسع", xp:10 },
      { id:"cs2-t0-4", type:"word_order", sentence:"It fits me well", correctAnswer:"It fits me well", explanation:"إنه يناسبني", xp:12 },
      { id:"cs2-t0-5", type:"fill_blank", blankSentence:"This shirt is too ___", blankOptions:["tight","run","very"], correctAnswer:"tight", explanation:"too tight = ضيّق جداً", xp:12 },
      { id:"cs2-t0-6", type:"translate", arabic:"واسع", options:["loose","tight","small","short"], correctAnswer:"loose", explanation:"loose = واسع", xp:10 },
      { id:"cs2-t0-7", type:"listen_select", listenSentence:"try it on", options:["try","tray","tree","true"], correctAnswer:"try", explanation:"try it on = جرّبه", xp:12 },
      { id:"cs2-t0-8", type:"word_order", sentence:"Can I try it on", correctAnswer:"Can I try it on", explanation:"هل أجرّبه؟", xp:12 },
      { id:"cs2-t0-9", type:"matching", pairs:[{en:"fit",ar:"يناسب"},{en:"tight",ar:"ضيّق"},{en:"loose",ar:"واسع"},{en:"try on",ar:"يجرّب"},{en:"size",ar:"مقاس"},{en:"medium",ar:"وسط"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cs2-t1-1", type:"translate", arabic:"مقاس وسط", options:["medium","small","large","extra"], correctAnswer:"medium", explanation:"medium = وسط (M)", xp:12 },
      { id:"cs2-t1-2", type:"word_order", sentence:"This size is too small for me", correctAnswer:"This size is too small for me", explanation:"هذا المقاس صغير عليّ", xp:14 },
      { id:"cs2-t1-3", type:"listen_select", listenSentence:"the fitting room", options:["fitting","fighting","feeling","filling"], correctAnswer:"fitting", explanation:"fitting room = غرفة القياس", xp:13 },
      { id:"cs2-t1-4", type:"translate", arabic:"غرفة القياس", options:["fitting room","living room","bath room","class room"], correctAnswer:"fitting room", explanation:"fitting room = غرفة القياس", xp:12 },
      { id:"cs2-t1-5", type:"fill_blank", blankSentence:"Where is the ___ room", blankOptions:["fitting","run","very"], correctAnswer:"fitting", explanation:"fitting room = غرفة القياس", xp:14 },
      { id:"cs2-t1-6", type:"word_order", sentence:"This one fits perfectly", correctAnswer:"This one fits perfectly", explanation:"هذا يناسب تماماً", xp:14 },
      { id:"cs2-t1-7", type:"translate", arabic:"مقاس كبير جداً", options:["extra large","extra small","extra long","extra wide"], correctAnswer:"extra large", explanation:"extra large = كبير جداً (XL)", xp:13 },
      { id:"cs2-t1-8", type:"listen_select", listenSentence:"it is too long", options:["long","wrong","song","lung"], correctAnswer:"long", explanation:"too long = طويل جداً", xp:13 },
      { id:"cs2-t1-9", type:"matching", pairs:[{en:"medium",ar:"وسط"},{en:"fitting room",ar:"غرفة القياس"},{en:"extra large",ar:"كبير جداً"},{en:"perfect",ar:"مثالي"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cs2-t2-1", type:"word_order", sentence:"Could I try this on in a medium size", correctAnswer:"Could I try this on in a medium size", explanation:"هل أجرّب هذا بمقاس وسط؟", xp:16 },
      { id:"cs2-t2-2", type:"translate", arabic:"هذا البنطال ضيّق قليلاً عند الخصر", options:["These pants are a bit tight at the waist","These pants are a bit tight at waist","These pant are a bit tight at the waist","These pants is a bit tight at the waist"], correctAnswer:"These pants are a bit tight at the waist", explanation:"tight at the waist = ضيّق عند الخصر", xp:16 },
      { id:"cs2-t2-3", type:"fill_blank", blankSentence:"Do you have a ___ size", blankOptions:["smaller","run","very"], correctAnswer:"smaller", explanation:"smaller size = مقاس أصغر", xp:15 },
      { id:"cs2-t2-4", type:"word_order", sentence:"The sleeves are a little too long", correctAnswer:"The sleeves are a little too long", explanation:"الأكمام طويلة قليلاً", xp:16 },
      { id:"cs2-t2-5", type:"translate", arabic:"هذه السترة تناسبني تماماً", options:["This jacket fits me perfectly","This jacket fit me perfectly","This jacket fits me perfect","This jackets fits me perfectly"], correctAnswer:"This jacket fits me perfectly", explanation:"fits me perfectly = يناسبني تماماً", xp:16 },
      { id:"cs2-t2-6", type:"listen_select", listenSentence:"a comfortable fit", options:["comfortable","comfort","comfortably","comforter"], correctAnswer:"comfortable", explanation:"comfortable fit = قياس مريح", xp:15 },
      { id:"cs2-t2-7", type:"word_order", sentence:"I usually wear a large size", correctAnswer:"I usually wear a large size", explanation:"عادةً أرتدي مقاساً كبيراً", xp:15 },
      { id:"cs2-t2-8", type:"fill_blank", blankSentence:"It is a bit ___ around the shoulders", blankOptions:["tight","run","very"], correctAnswer:"tight", explanation:"tight = ضيّق", xp:15 },
    ],
    t3: [],
  },

  "اتخاذ القرار": {
    t0: [
      { id:"cs3-t0-1", type:"translate", arabic:"يناسبك", options:["suits you","suit you","suited you","suiting you"], correctAnswer:"suits you", explanation:"suits you = يناسبك (يليق بك)", xp:10 },
      { id:"cs3-t0-2", type:"translate", arabic:"يفضّل", options:["prefer","like","want","need"], correctAnswer:"prefer", explanation:"prefer = يفضّل", xp:10 },
      { id:"cs3-t0-3", type:"listen_select", listenSentence:"I'll take it", options:["take","make","bake","lake"], correctAnswer:"take", explanation:"I'll take it = سآخذه", xp:10 },
      { id:"cs3-t0-4", type:"word_order", sentence:"I will take this one", correctAnswer:"I will take this one", explanation:"سآخذ هذا", xp:12 },
      { id:"cs3-t0-5", type:"fill_blank", blankSentence:"This color ___ you", blankOptions:["suits","run","very"], correctAnswer:"suits", explanation:"suits you = يليق بك", xp:12 },
      { id:"cs3-t0-6", type:"translate", arabic:"يُرجع", options:["return","keep","take","buy"], correctAnswer:"return", explanation:"return = يُرجع", xp:10 },
      { id:"cs3-t0-7", type:"listen_select", listenSentence:"I prefer this", options:["prefer","perfect","present","prepare"], correctAnswer:"prefer", explanation:"I prefer = أفضّل", xp:12 },
      { id:"cs3-t0-8", type:"word_order", sentence:"This color suits you", correctAnswer:"This color suits you", explanation:"هذا اللون يليق بك", xp:12 },
      { id:"cs3-t0-9", type:"matching", pairs:[{en:"suits you",ar:"يليق بك"},{en:"prefer",ar:"يفضّل"},{en:"take it",ar:"يأخذه"},{en:"return",ar:"يُرجع"},{en:"keep",ar:"يحتفظ"},{en:"decide",ar:"يقرّر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cs3-t1-1", type:"word_order", sentence:"I prefer the blue one", correctAnswer:"I prefer the blue one", explanation:"أفضّل الأزرق", xp:14 },
      { id:"cs3-t1-2", type:"translate", arabic:"هذا اللون يليق بك حقاً", options:["This color really suits you","This color really suit you","This color really suits your","This colors really suits you"], correctAnswer:"This color really suits you", explanation:"really suits you = يليق بك حقاً", xp:14 },
      { id:"cs3-t1-3", type:"listen_select", listenSentence:"can I return it", options:["return","retire","retain","retell"], correctAnswer:"return", explanation:"return it = أرجعه", xp:13 },
      { id:"cs3-t1-4", type:"fill_blank", blankSentence:"I think I will ___ it", blankOptions:["take","run","very"], correctAnswer:"take", explanation:"I will take it = سآخذه", xp:14 },
      { id:"cs3-t1-5", type:"word_order", sentence:"Which one do you prefer", correctAnswer:"Which one do you prefer", explanation:"أيهما تفضّل؟", xp:14 },
      { id:"cs3-t1-6", type:"translate", arabic:"هل يمكنني إرجاعه لاحقاً؟", options:["Can I return it later?","Can I return it latter?","Can I returns it later?","Can I return them later?"], correctAnswer:"Can I return it later?", explanation:"return it later = أرجعه لاحقاً", xp:13 },
      { id:"cs3-t1-7", type:"listen_select", listenSentence:"it looks great", options:["great","grate","greet","grade"], correctAnswer:"great", explanation:"it looks great = يبدو رائعاً", xp:13 },
      { id:"cs3-t1-8", type:"word_order", sentence:"I am not sure about this one", correctAnswer:"I am not sure about this one", explanation:"لست متأكداً من هذا", xp:14 },
      { id:"cs3-t1-9", type:"matching", pairs:[{en:"prefer",ar:"يفضّل"},{en:"return",ar:"يُرجع"},{en:"looks great",ar:"يبدو رائعاً"},{en:"not sure",ar:"غير متأكد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cs3-t2-1", type:"word_order", sentence:"I think this jacket really suits you well", correctAnswer:"I think this jacket really suits you well", explanation:"أظن أن هذه السترة تليق بك", xp:16 },
      { id:"cs3-t2-2", type:"translate", arabic:"هل يمكنني إرجاعه إذا لم يناسبني؟", options:["Can I return it if it doesn't fit?","Can I return it if it don't fit?","Can I returns it if it doesn't fit?","Can I return them if it doesn't fit?"], correctAnswer:"Can I return it if it doesn't fit?", explanation:"return if it doesn't fit", xp:16 },
      { id:"cs3-t2-3", type:"fill_blank", blankSentence:"I prefer this one ___ the other", blankOptions:["over","run","very"], correctAnswer:"over", explanation:"prefer this over that = أفضّل هذا على ذاك", xp:15 },
      { id:"cs3-t2-4", type:"word_order", sentence:"I will think about it and come back", correctAnswer:"I will think about it and come back", explanation:"سأفكّر وأعود", xp:16 },
      { id:"cs3-t2-5", type:"translate", arabic:"سآخذ كليهما من فضلك", options:["I will take both please","I will take both, please","I will takes both please","I will take both pleases"], correctAnswer:"I will take both, please", explanation:"take both = آخذ كليهما", xp:16 },
      { id:"cs3-t2-6", type:"listen_select", listenSentence:"what is the return policy", options:["policy","police","polish","politics"], correctAnswer:"policy", explanation:"return policy = سياسة الإرجاع", xp:15 },
      { id:"cs3-t2-7", type:"word_order", sentence:"This one looks better on you", correctAnswer:"This one looks better on you", explanation:"هذا يبدو أفضل عليك", xp:15 },
      { id:"cs3-t2-8", type:"fill_blank", blankSentence:"I have decided to ___ it", blankOptions:["keep","run","very"], correctAnswer:"keep", explanation:"keep it = أحتفظ به", xp:15 },
    ],
    t3: [],
  },
};
