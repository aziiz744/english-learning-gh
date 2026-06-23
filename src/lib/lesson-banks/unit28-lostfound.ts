import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 28: افرز الأشياء المفقودة
//   درس 1: المفقودات — lost, found, missing, leave behind
//   درس 2: صف الشيء المفقود — color, size, shape, made of
//   درس 3: في مكتب المفقودات — Have you seen, I lost, describe
// ══════════════════════════════════════════════════════════════

export const unit28LostFoundBank: Record<string, TieredBank> = {

  "المفقودات": {
    t0: [
      { id:"lf1-t0-1", type:"translate", arabic:"مفقود", options:["lost","found","kept","held"], correctAnswer:"lost", explanation:"lost = مفقود", xp:10 },
      { id:"lf1-t0-2", type:"translate", arabic:"وُجد", options:["found","lost","missing","gone"], correctAnswer:"found", explanation:"found = وُجد", xp:10 },
      { id:"lf1-t0-3", type:"listen_select", listenSentence:"missing", options:["missing","missed","mission","mixing"], correctAnswer:"missing", explanation:"missing = مفقود/ناقص", xp:10 },
      { id:"lf1-t0-4", type:"word_order", sentence:"I lost my keys", correctAnswer:"I lost my keys", explanation:"فقدت مفاتيحي", xp:12 },
      { id:"lf1-t0-5", type:"fill_blank", blankSentence:"My phone is ___", blankOptions:["lost","run","very"], correctAnswer:"lost", explanation:"is lost = مفقود", xp:12 },
      { id:"lf1-t0-6", type:"translate", arabic:"مفقود/ناقص", options:["missing","found","kept","new"], correctAnswer:"missing", explanation:"missing = مفقود", xp:10 },
      { id:"lf1-t0-7", type:"listen_select", listenSentence:"I found it", options:["found","find","fund","fond"], correctAnswer:"found", explanation:"I found it = وجدته", xp:12 },
      { id:"lf1-t0-8", type:"word_order", sentence:"She found her bag", correctAnswer:"She found her bag", explanation:"وجدت حقيبتها", xp:12 },
      { id:"lf1-t0-9", type:"matching", pairs:[{en:"lost",ar:"مفقود"},{en:"found",ar:"وُجد"},{en:"missing",ar:"ناقص"},{en:"leave",ar:"يترك"},{en:"keep",ar:"يحتفظ"},{en:"search",ar:"يبحث"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"lf1-t1-1", type:"translate", arabic:"ترك (نسي)", options:["leave behind","take away","put back","throw away"], correctAnswer:"leave behind", explanation:"leave behind = يترك وراءه", xp:12 },
      { id:"lf1-t1-2", type:"word_order", sentence:"I left my umbrella on the bus", correctAnswer:"I left my umbrella on the bus", explanation:"تركت مظلّتي في الحافلة", xp:14 },
      { id:"lf1-t1-3", type:"listen_select", listenSentence:"I can't find it", options:["find","fine","fight","fund"], correctAnswer:"find", explanation:"can't find = لا أجد", xp:13 },
      { id:"lf1-t1-4", type:"translate", arabic:"يبحث عن", options:["look for","look at","look up","look out"], correctAnswer:"look for", explanation:"look for = يبحث عن", xp:12 },
      { id:"lf1-t1-5", type:"fill_blank", blankSentence:"I am ___ for my glasses", blankOptions:["looking","run","very"], correctAnswer:"looking", explanation:"looking for = أبحث عن", xp:14 },
      { id:"lf1-t1-6", type:"word_order", sentence:"Have you found your wallet", correctAnswer:"Have you found your wallet", explanation:"هل وجدت محفظتك؟", xp:14 },
      { id:"lf1-t1-7", type:"translate", arabic:"ضاع مني", options:["I lost it","I lose it","I loose it","I losed it"], correctAnswer:"I lost it", explanation:"I lost it = فقدته", xp:13 },
      { id:"lf1-t1-8", type:"listen_select", listenSentence:"where did you leave it", options:["leave","live","love","lift"], correctAnswer:"leave", explanation:"where did you leave it = أين تركته", xp:13 },
      { id:"lf1-t1-9", type:"matching", pairs:[{en:"look for",ar:"يبحث عن"},{en:"leave behind",ar:"ينسى"},{en:"find",ar:"يجد"},{en:"lose",ar:"يفقد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"lf1-t2-1", type:"word_order", sentence:"I think I left my phone at the restaurant", correctAnswer:"I think I left my phone at the restaurant", explanation:"أظن أني تركت هاتفي في المطعم", xp:16 },
      { id:"lf1-t2-2", type:"translate", arabic:"لقد فقدت محفظتي في مكان ما", options:["I have lost my wallet somewhere","I have lost my wallet somewheres","I have lose my wallet somewhere","I have lost my wallets somewhere"], correctAnswer:"I have lost my wallet somewhere", explanation:"have lost = فقدت", xp:16 },
      { id:"lf1-t2-3", type:"fill_blank", blankSentence:"Someone ___ a phone here", blankOptions:["found","run","very"], correctAnswer:"found", explanation:"found a phone = وجد هاتفاً", xp:15 },
      { id:"lf1-t2-4", type:"word_order", sentence:"I have been looking for it everywhere", correctAnswer:"I have been looking for it everywhere", explanation:"أبحث عنه في كل مكان", xp:16 },
      { id:"lf1-t2-5", type:"translate", arabic:"هل رأى أحد حقيبتي؟", options:["Has anyone seen my bag?","Has anyone seen my bags?","Have anyone seen my bag?","Has anyone see my bag?"], correctAnswer:"Has anyone seen my bag?", explanation:"Has anyone seen = هل رأى أحد", xp:16 },
      { id:"lf1-t2-6", type:"listen_select", listenSentence:"it disappeared", options:["disappeared","appeared","disappear","appears"], correctAnswer:"disappeared", explanation:"disappeared = اختفى", xp:15 },
      { id:"lf1-t2-7", type:"word_order", sentence:"Luckily I found my keys again", correctAnswer:"Luckily I found my keys again", explanation:"لحسن الحظ وجدت مفاتيحي", xp:15 },
      { id:"lf1-t2-8", type:"fill_blank", blankSentence:"I might have ___ it at home", blankOptions:["left","run","very"], correctAnswer:"left", explanation:"left it = تركته", xp:15 },
    ],
    t3: [],
  },

  "صف الشيء المفقود": {
    t0: [
      { id:"lf2-t0-1", type:"translate", arabic:"لون", options:["color","size","shape","weight"], correctAnswer:"color", explanation:"color = لون", xp:10 },
      { id:"lf2-t0-2", type:"translate", arabic:"حجم", options:["size","color","shape","weight"], correctAnswer:"size", explanation:"size = حجم", xp:10 },
      { id:"lf2-t0-3", type:"listen_select", listenSentence:"black", options:["black","block","back","bank"], correctAnswer:"black", explanation:"black = أسود", xp:10 },
      { id:"lf2-t0-4", type:"word_order", sentence:"It is a black bag", correctAnswer:"It is a black bag", explanation:"إنها حقيبة سوداء", xp:12 },
      { id:"lf2-t0-5", type:"fill_blank", blankSentence:"It is ___ and small", blankOptions:["black","run","very"], correctAnswer:"black", explanation:"black = أسود", xp:12 },
      { id:"lf2-t0-6", type:"translate", arabic:"شكل", options:["shape","color","size","weight"], correctAnswer:"shape", explanation:"shape = شكل", xp:10 },
      { id:"lf2-t0-7", type:"listen_select", listenSentence:"it is round", options:["round","ground","sound","found"], correctAnswer:"round", explanation:"round = مستدير", xp:12 },
      { id:"lf2-t0-8", type:"word_order", sentence:"My bag is brown", correctAnswer:"My bag is brown", explanation:"حقيبتي بنية", xp:12 },
      { id:"lf2-t0-9", type:"matching", pairs:[{en:"color",ar:"لون"},{en:"size",ar:"حجم"},{en:"shape",ar:"شكل"},{en:"round",ar:"مستدير"},{en:"square",ar:"مربّع"},{en:"small",ar:"صغير"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"lf2-t1-1", type:"translate", arabic:"مصنوع من", options:["made of","make of","made from","make from"], correctAnswer:"made of", explanation:"made of = مصنوع من", xp:12 },
      { id:"lf2-t1-2", type:"word_order", sentence:"It is made of leather", correctAnswer:"It is made of leather", explanation:"إنها مصنوعة من الجلد", xp:14 },
      { id:"lf2-t1-3", type:"listen_select", listenSentence:"a leather wallet", options:["leather","letter","later","lighter"], correctAnswer:"leather", explanation:"leather = جلد", xp:13 },
      { id:"lf2-t1-4", type:"translate", arabic:"مربّع", options:["square","round","triangle","circle"], correctAnswer:"square", explanation:"square = مربّع", xp:12 },
      { id:"lf2-t1-5", type:"fill_blank", blankSentence:"It is ___ of plastic", blankOptions:["made","run","very"], correctAnswer:"made", explanation:"made of = مصنوع من", xp:14 },
      { id:"lf2-t1-6", type:"word_order", sentence:"It has my name on it", correctAnswer:"It has my name on it", explanation:"عليه اسمي", xp:14 },
      { id:"lf2-t1-7", type:"translate", arabic:"إنه صغير وأزرق", options:["It is small and blue","It small and blue","It is small and blues","It is smalls and blue"], correctAnswer:"It is small and blue", explanation:"small and blue = صغير وأزرق", xp:13 },
      { id:"lf2-t1-8", type:"listen_select", listenSentence:"made of metal", options:["metal","model","middle","medal"], correctAnswer:"metal", explanation:"metal = معدن", xp:13 },
      { id:"lf2-t1-9", type:"matching", pairs:[{en:"made of",ar:"مصنوع من"},{en:"leather",ar:"جلد"},{en:"plastic",ar:"بلاستيك"},{en:"metal",ar:"معدن"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"lf2-t2-1", type:"word_order", sentence:"It is a small black bag made of leather", correctAnswer:"It is a small black bag made of leather", explanation:"إنها حقيبة سوداء صغيرة من الجلد", xp:16 },
      { id:"lf2-t2-2", type:"translate", arabic:"إنها ساعة فضية اللون", options:["It is a silver watch","It is a silver watches","It a silver watch","It is silver watch"], correctAnswer:"It is a silver watch", explanation:"silver watch = ساعة فضية", xp:16 },
      { id:"lf2-t2-3", type:"fill_blank", blankSentence:"It is round and ___ of gold", blankOptions:["made","run","very"], correctAnswer:"made", explanation:"made of gold = مصنوع من ذهب", xp:15 },
      { id:"lf2-t2-4", type:"word_order", sentence:"My phone has a blue cover with stars", correctAnswer:"My phone has a blue cover with stars", explanation:"هاتفي له غطاء أزرق بنجوم", xp:16 },
      { id:"lf2-t2-5", type:"translate", arabic:"إنها كبيرة الحجم وثقيلة", options:["It is large and heavy","It is large and heavily","It large and heavy","It is larges and heavy"], correctAnswer:"It is large and heavy", explanation:"large and heavy = كبير وثقيل", xp:16 },
      { id:"lf2-t2-6", type:"listen_select", listenSentence:"a rectangular box", options:["rectangular","triangular","circular","regular"], correctAnswer:"rectangular", explanation:"rectangular = مستطيل", xp:15 },
      { id:"lf2-t2-7", type:"word_order", sentence:"It is the size of a small book", correctAnswer:"It is the size of a small book", explanation:"إنه بحجم كتاب صغير", xp:15 },
      { id:"lf2-t2-8", type:"fill_blank", blankSentence:"It is dark blue in ___", blankOptions:["color","run","very"], correctAnswer:"color", explanation:"in color = في اللون", xp:15 },
    ],
    t3: [],
  },

  "في مكتب المفقودات": {
    t0: [
      { id:"lf3-t0-1", type:"translate", arabic:"هل رأيت؟", options:["Have you seen?","Have you see?","Has you seen?","Have you saw?"], correctAnswer:"Have you seen?", explanation:"Have you seen? = هل رأيت؟", xp:10 },
      { id:"lf3-t0-2", type:"word_order", sentence:"I lost my bag", correctAnswer:"I lost my bag", explanation:"فقدت حقيبتي", xp:12 },
      { id:"lf3-t0-3", type:"listen_select", listenSentence:"can you describe it", options:["describe","describes","described","describing"], correctAnswer:"describe", explanation:"describe it = صفه", xp:10 },
      { id:"lf3-t0-4", type:"translate", arabic:"صفه", options:["describe it","describes it","described it","describing it"], correctAnswer:"describe it", explanation:"describe it = صفه", xp:12 },
      { id:"lf3-t0-5", type:"fill_blank", blankSentence:"Can you ___ it for me", blankOptions:["describe","run","very"], correctAnswer:"describe", explanation:"describe = يصف", xp:12 },
      { id:"lf3-t0-6", type:"word_order", sentence:"Where did you lose it", correctAnswer:"Where did you lose it", explanation:"أين فقدته؟", xp:12 },
      { id:"lf3-t0-7", type:"listen_select", listenSentence:"is this yours", options:["yours","your","you","yore"], correctAnswer:"yours", explanation:"is this yours = هل هذا لك", xp:12 },
      { id:"lf3-t0-8", type:"translate", arabic:"نعم، هذا لي!", options:["Yes, that's mine!","Yes, that's my!","Yes, that's me!","Yes, that mine!"], correctAnswer:"Yes, that's mine!", explanation:"that's mine = هذا لي", xp:10 },
      { id:"lf3-t0-9", type:"matching", pairs:[{en:"Have you seen",ar:"هل رأيت"},{en:"I lost",ar:"فقدت"},{en:"describe it",ar:"صفه"},{en:"it's mine",ar:"إنه لي"},{en:"lost and found",ar:"المفقودات"},{en:"report",ar:"يبلّغ"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"lf3-t1-1", type:"word_order", sentence:"Have you seen a black phone", correctAnswer:"Have you seen a black phone", explanation:"هل رأيت هاتفاً أسود؟", xp:14 },
      { id:"lf3-t1-2", type:"translate", arabic:"أريد أن أبلّغ عن حقيبة مفقودة", options:["I want to report a lost bag","I want to report a lost bags","I want report a lost bag","I want to reports a lost bag"], correctAnswer:"I want to report a lost bag", explanation:"report a lost bag = أبلّغ عن حقيبة", xp:14 },
      { id:"lf3-t1-3", type:"listen_select", listenSentence:"when did you lose it", options:["lose","loose","loss","lost"], correctAnswer:"lose", explanation:"when did you lose it = متى فقدته", xp:13 },
      { id:"lf3-t1-4", type:"fill_blank", blankSentence:"Please fill out this ___", blankOptions:["form","run","very"], correctAnswer:"form", explanation:"a form = استمارة", xp:14 },
      { id:"lf3-t1-5", type:"word_order", sentence:"I left it here this morning", correctAnswer:"I left it here this morning", explanation:"تركته هنا هذا الصباح", xp:14 },
      { id:"lf3-t1-6", type:"translate", arabic:"شكراً جزيلاً لك!", options:["Thank you so much!","Thank you so much","Thanks you so much!","Thank you so many!"], correctAnswer:"Thank you so much!", explanation:"Thank you so much", xp:13 },
      { id:"lf3-t1-7", type:"listen_select", listenSentence:"check the lost and found", options:["found","find","fund","fond"], correctAnswer:"found", explanation:"lost and found = المفقودات", xp:13 },
      { id:"lf3-t1-8", type:"word_order", sentence:"Can you give me your phone number", correctAnswer:"Can you give me your phone number", explanation:"هل تعطيني رقم هاتفك؟", xp:14 },
      { id:"lf3-t1-9", type:"matching", pairs:[{en:"report",ar:"يبلّغ"},{en:"form",ar:"استمارة"},{en:"describe",ar:"يصف"},{en:"found",ar:"وُجد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"lf3-t2-1", type:"word_order", sentence:"I would like to report my missing luggage", correctAnswer:"I would like to report my missing luggage", explanation:"أودّ الإبلاغ عن أمتعتي المفقودة", xp:16 },
      { id:"lf3-t2-2", type:"translate", arabic:"هل يمكنك وصف ما بداخله؟", options:["Can you describe what's inside?","Can you describe what inside?","Can you describes what's inside?","Can you describe what's insides?"], correctAnswer:"Can you describe what's inside?", explanation:"describe what's inside", xp:16 },
      { id:"lf3-t2-3", type:"fill_blank", blankSentence:"We will ___ you if we find it", blankOptions:["call","run","very"], correctAnswer:"call", explanation:"we will call you = سنتّصل بك", xp:15 },
      { id:"lf3-t2-4", type:"word_order", sentence:"I am so glad you found my wallet", correctAnswer:"I am so glad you found my wallet", explanation:"سعيد جداً أنك وجدت محفظتي", xp:16 },
      { id:"lf3-t2-5", type:"translate", arabic:"يمكنك استلامها من المكتب", options:["You can collect it from the office","You can collect it from office","You can collects it from the office","You can collect them from the office"], correctAnswer:"You can collect it from the office", explanation:"collect it = استلامها", xp:16 },
      { id:"lf3-t2-6", type:"listen_select", listenSentence:"please be patient", options:["patient","patience","patiently","patients"], correctAnswer:"patient", explanation:"be patient = كن صبوراً", xp:15 },
      { id:"lf3-t2-7", type:"word_order", sentence:"Someone handed it in this afternoon", correctAnswer:"Someone handed it in this afternoon", explanation:"سلّمها أحدهم بعد الظهر", xp:15 },
      { id:"lf3-t2-8", type:"fill_blank", blankSentence:"Here is your bag, please ___ the details", blankOptions:["check","run","very"], correctAnswer:"check", explanation:"check the details = تحقّق من التفاصيل", xp:15 },
    ],
    t3: [],
  },
};
