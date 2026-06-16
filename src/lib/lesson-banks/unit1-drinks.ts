import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 1 — قدّم واقبل المشروبات
// الكلمات الجديدة بالتراكم:
//   درس 1 (t0): tea, coffee, water, juice, milk, yes, no
//   درس 2 (t1): + please, thank you, sorry, more
//   درس 3 (t2): + would, like, have, want, some
//   تحدي (t3): جميع الكلمات معاً
// كل درس = 7 أسئلة متنوعة
// ══════════════════════════════════════════════════════════════

export const unit1DrinksBank: Record<string, TieredBank> = {

  // ── الدرس 1: الكلمات الأساسية ──
  // كلمات جديدة: tea ☕ coffee ☕ water 💧 juice 🍊 milk 🥛 yes ✅ no ❌
  "الكلمات الأساسية": {
    t0: [
      { id:"dr1-t0-1", type:"picture_match", word:"tea", pictureOptions:[{emoji:"🍵",label:"tea"},{emoji:"☕",label:"coffee"},{emoji:"🥛",label:"milk"},{emoji:"🧃",label:"juice"}], correctAnswer:"tea", explanation:"tea = شاي 🍵", xp:10 },
      { id:"dr1-t0-2", type:"translate", arabic:"قهوة", options:["coffee","juice","water","milk"], correctAnswer:"coffee", explanation:"coffee = قهوة ☕", xp:10 },
      { id:"dr1-t0-3", type:"listen_select", listenSentence:"water", options:["water","milk","juice","tea"], correctAnswer:"water", explanation:"water = ماء 💧", xp:10 },
      { id:"dr1-t0-4", type:"picture_match", word:"juice", pictureOptions:[{emoji:"🧃",label:"juice"},{emoji:"🍵",label:"tea"},{emoji:"💧",label:"water"},{emoji:"☕",label:"coffee"}], correctAnswer:"juice", explanation:"juice = عصير 🧃", xp:10 },
      { id:"dr1-t0-5", type:"translate", arabic:"حليب", options:["milk","water","tea","juice"], correctAnswer:"milk", explanation:"milk = حليب 🥛", xp:10 },
      { id:"dr1-t0-6", type:"listen_select", listenSentence:"yes", options:["yes","no","please","sorry"], correctAnswer:"yes", explanation:"yes = نعم ✅", xp:10 },
      { id:"dr1-t0-7", type:"translate", arabic:"لا", options:["no","yes","more","have"], correctAnswer:"no", explanation:"no = لا ❌", xp:10 },
      { id:"dr1-t0-8", type:"fill_blank", blankSentence:"Tea ___ milk", blankOptions:["with","sugar","and"], correctAnswer:"with", explanation:"Tea with milk = شاي بالحليب", xp:12 },
      { id:"dr1-t0-9", type:"matching", pairs:[{en:"tea",ar:"شاي"},{en:"coffee",ar:"قهوة"},{en:"water",ar:"ماء"},{en:"milk",ar:"حليب"}], correctAnswer:"matched", explanation:"طابقت كل المشروبات بمعانيها! 🎉", xp:15 },
    ],
    t1: [
      { id:"dr1-t1-1", type:"word_order", sentence:"I like tea", correctAnswer:"I like tea", explanation:"I like tea = أنا أحب الشاي", xp:12 },
      { id:"dr1-t1-2", type:"translate", arabic:"هل تريد قهوة؟", options:["Do you want coffee?","Do you want juice?","Do you like coffee?","Is this coffee?"], correctAnswer:"Do you want coffee?", explanation:"Do you want...? = هل تريد...؟", xp:12 },
      { id:"dr1-t1-3", type:"listen_select", listenSentence:"This is milk", options:["milk","tea","juice","water"], correctAnswer:"milk", explanation:"this is milk = هذا حليب", xp:12 },
      { id:"dr1-t1-4", type:"picture_match", word:"coffee", pictureOptions:[{emoji:"☕",label:"coffee"},{emoji:"🍵",label:"tea"},{emoji:"🥛",label:"milk"},{emoji:"💧",label:"water"}], correctAnswer:"coffee", explanation:"coffee = قهوة ☕", xp:12 },
      { id:"dr1-t1-5", type:"word_order", sentence:"I want water", correctAnswer:"I want water", explanation:"I want water = أريد ماء", xp:12 },
      { id:"dr1-t1-6", type:"translate", arabic:"أنا أشرب عصير", options:["I drink juice","I like juice","I want juice","I have juice"], correctAnswer:"I drink juice", explanation:"I drink juice = أنا أشرب عصير", xp:12 },
      { id:"dr1-t1-7", type:"listen_select", listenSentence:"I want tea or coffee", options:["tea","milk","juice","water"], correctAnswer:"tea", explanation:"الجملة: أريد شاياً أو قهوة — الأول هو tea", xp:12 },
      { id:"dr1-t1-8", type:"fill_blank", blankSentence:"I ___ tea", blankOptions:["like","milk","water"], correctAnswer:"like", explanation:"I like tea = أنا أحب الشاي", xp:13 },
      { id:"dr1-t1-9", type:"matching", pairs:[{en:"yes",ar:"نعم"},{en:"no",ar:"لا"},{en:"juice",ar:"عصير"},{en:"water",ar:"ماء"}], correctAnswer:"matched", explanation:"رائع! طابقت الكلمات بمعانيها", xp:15 },
    ],
    t2: [
      { id:"dr1-t2-1", type:"word_order", sentence:"Do you like coffee or tea", correctAnswer:"Do you like coffee or tea", explanation:"Do you like...or...? = هل تفضل... أو...؟", xp:14 },
      { id:"dr1-t2-2", type:"translate", arabic:"هي تشرب الحليب كل يوم", options:["She drinks milk every day","She drink milk every day","She is drink milk every day","She drinking milk every day"], correctAnswer:"She drinks milk every day", explanation:"she + drinks (مضارع مع he/she/it)", xp:14 },
      { id:"dr1-t2-3", type:"listen_select", listenSentence:"He does not drink juice", options:["juice","milk","tea","coffee"], correctAnswer:"juice", explanation:"does not drink juice = لا يشرب عصير", xp:14 },
      { id:"dr1-t2-4", type:"picture_match", word:"water", pictureOptions:[{emoji:"💧",label:"water"},{emoji:"🧃",label:"juice"},{emoji:"🥛",label:"milk"},{emoji:"🍵",label:"tea"}], correctAnswer:"water", explanation:"water = ماء 💧", xp:14 },
      { id:"dr1-t2-5", type:"word_order", sentence:"This is a cup of tea", correctAnswer:"This is a cup of tea", explanation:"a cup of tea = كوب شاي", xp:14 },
      { id:"dr1-t2-6", type:"translate", arabic:"ما هو مشروبك المفضل؟", options:["What is your favourite drink?","What is your favourite food?","Which do you drink?","What drink do you want?"], correctAnswer:"What is your favourite drink?", explanation:"favourite drink = المشروب المفضل", xp:15 },
      { id:"dr1-t2-7", type:"word_order", sentence:"I prefer water over juice", correctAnswer:"I prefer water over juice", explanation:"prefer...over... = أفضّل... على...", xp:15 },
      { id:"dr1-t2-8", type:"fill_blank", blankSentence:"This is a cup ___ tea", blankOptions:["of","for","with"], correctAnswer:"of", explanation:"a cup of tea = كوب شاي", xp:15 },
      { id:"dr1-t2-9", type:"matching", pairs:[{en:"cup",ar:"كوب"},{en:"glass",ar:"كأس"},{en:"hot",ar:"ساخن"},{en:"cold",ar:"بارد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
    ],
    t3: [
      { id:"dr1-t3-1", type:"word_order", sentence:"Would you like some tea or coffee", correctAnswer:"Would you like some tea or coffee", explanation:"Would you like some...? = صيغة مهذبة للعرض", xp:18 },
      { id:"dr1-t3-2", type:"translate", arabic:"أفضّل القهوة على الشاي لأنها تعطيني طاقة", options:["I prefer coffee over tea because it gives me energy","I prefer coffee than tea because it give me energy","I prefer coffee over tea because it give me energy","I prefer coffee than tea because it gives me energy"], correctAnswer:"I prefer coffee over tea because it gives me energy", explanation:"it gives (مع it + s) — prefer over (لا prefer than)", xp:20 },
      { id:"dr1-t3-3", type:"listen_select", listenSentence:"Could I have a glass of cold water please", options:["water","juice","milk","tea"], correctAnswer:"water", explanation:"a glass of cold water = كوب ماء بارد", xp:18 },
      { id:"dr1-t3-4", type:"word_order", sentence:"She always drinks warm milk before bed", correctAnswer:"She always drinks warm milk before bed", explanation:"always + فعل (بعد الفاعل مباشرة)", xp:18 },
      { id:"dr1-t3-5", type:"translate", arabic:"هل يمكنني الحصول على كوب عصير من فضلك؟", options:["Can I have a glass of juice please?","Can I have a cup of juice please?","Can I get a cup of juice please?","May I have juice glass please?"], correctAnswer:"Can I have a glass of juice please?", explanation:"a glass of juice — العصير يُقال بـ glass لا cup", xp:20 },
      { id:"dr1-t3-6", type:"word_order", sentence:"I do not like coffee without milk", correctAnswer:"I do not like coffee without milk", explanation:"without = بدون — I do not like = لا أحب", xp:18 },
      { id:"dr1-t3-7", type:"picture_match", word:"milk", pictureOptions:[{emoji:"🥛",label:"milk"},{emoji:"🍵",label:"tea"},{emoji:"☕",label:"coffee"},{emoji:"🧃",label:"juice"}], correctAnswer:"milk", explanation:"milk = حليب 🥛", xp:18 },
      { id:"dr1-t3-8", type:"fill_blank", blankSentence:"Could I have ___ water please", blankOptions:["some","any","a"], correctAnswer:"some", explanation:"some مع الطلب المهذب", xp:18 },
      { id:"dr1-t3-9", type:"matching", pairs:[{en:"warm",ar:"دافئ"},{en:"cold",ar:"بارد"},{en:"sweet",ar:"حلو"},{en:"bitter",ar:"مرّ"}], correctAnswer:"matched", explanation:"رائع!", xp:18 },
    ],
  },

  // ── الدرس 2: كلمات جديدة ──
  // كلمات جديدة: please 🙏 thank you 🙏 sorry 😔 more 🔄
  // + كلمات الدرس 1: tea, coffee, water, juice, milk, yes, no
  "كلمات جديدة": {
    t0: [
      { id:"dr2-t0-1", type:"translate", arabic:"من فضلك", options:["please","sorry","thank you","more"], correctAnswer:"please", explanation:"please = من فضلك 🙏 — تُستخدم عند الطلب بأدب", xp:10 },
      { id:"dr2-t0-2", type:"listen_select", listenSentence:"thank you", options:["thank you","please","sorry","no"], correctAnswer:"thank you", explanation:"thank you = شكراً 🙏", xp:10 },
      { id:"dr2-t0-3", type:"translate", arabic:"آسف", options:["sorry","please","no","more"], correctAnswer:"sorry", explanation:"sorry = آسف / عذراً 😔", xp:10 },
      { id:"dr2-t0-4", type:"picture_match", word:"please", pictureOptions:[{emoji:"🙏",label:"please"},{emoji:"😔",label:"sorry"},{emoji:"✅",label:"yes"},{emoji:"❌",label:"no"}], correctAnswer:"please", explanation:"please = من فضلك 🙏", xp:10 },
      { id:"dr2-t0-5", type:"translate", arabic:"المزيد", options:["more","sorry","please","thank you"], correctAnswer:"more", explanation:"more = أكثر / المزيد 🔄", xp:10 },
      { id:"dr2-t0-6", type:"listen_select", listenSentence:"Tea please", options:["please","sorry","thank you","more"], correctAnswer:"please", explanation:"Tea please = شاي من فضلك — please في نهاية الطلب", xp:10 },
      { id:"dr2-t0-7", type:"word_order", sentence:"Thank you for the coffee", correctAnswer:"Thank you for the coffee", explanation:"Thank you for... = شكراً على...", xp:10 },
      { id:"dr2-t0-8", type:"fill_blank", blankSentence:"Coffee ___ , please", blankOptions:["please","sorry","more"], correctAnswer:"please", explanation:"Coffee please = قهوة من فضلك", xp:12 },
      { id:"dr2-t0-9", type:"matching", pairs:[{en:"please",ar:"من فضلك"},{en:"thank you",ar:"شكراً"},{en:"sorry",ar:"آسف"},{en:"more",ar:"المزيد"}], correctAnswer:"matched", explanation:"أحسنت! طابقت كلمات الأدب بمعانيها 🎉", xp:15 },
    ],
    t1: [
      { id:"dr2-t1-1", type:"word_order", sentence:"Water please thank you", correctAnswer:"Water please thank you", explanation:"الترتيب: الطلب + please + thank you", xp:12 },
      { id:"dr2-t1-2", type:"translate", arabic:"عذراً، هل عندك عصير؟", options:["Sorry, do you have juice?","Sorry, do you want juice?","Please, have you juice?","Excuse, do you have juice?"], correctAnswer:"Sorry, do you have juice?", explanation:"Sorry للاعتذار قبل السؤال — do you have = هل عندك", xp:12 },
      { id:"dr2-t1-3", type:"listen_select", listenSentence:"More milk please", options:["more","please","sorry","thank you"], correctAnswer:"more", explanation:"More milk please = مزيد من الحليب من فضلك", xp:12 },
      { id:"dr2-t1-4", type:"word_order", sentence:"Yes please I want tea", correctAnswer:"Yes please I want tea", explanation:"Yes please = نعم من فضلك — قبول بأدب", xp:12 },
      { id:"dr2-t1-5", type:"translate", arabic:"لا شكراً، لا أريد قهوة", options:["No thank you, I do not want coffee","No please, I do not want coffee","No sorry, I do not want coffee","No thank you, I not want coffee"], correctAnswer:"No thank you, I do not want coffee", explanation:"No thank you = لا شكراً — رفض بأدب", xp:13 },
      { id:"dr2-t1-6", type:"picture_match", word:"sorry", pictureOptions:[{emoji:"😔",label:"sorry"},{emoji:"🙏",label:"please"},{emoji:"✅",label:"yes"},{emoji:"🔄",label:"more"}], correctAnswer:"sorry", explanation:"sorry = آسف 😔", xp:12 },
      { id:"dr2-t1-7", type:"word_order", sentence:"Sorry I do not have water", correctAnswer:"Sorry I do not have water", explanation:"Sorry + جملة = الاعتذار ثم التوضيح", xp:12 },
      { id:"dr2-t1-8", type:"fill_blank", blankSentence:"More milk ___ , please", blankOptions:["please","sorry","thanks"], correctAnswer:"please", explanation:"More...please = طلب المزيد بأدب", xp:13 },
      { id:"dr2-t1-9", type:"matching", pairs:[{en:"yes",ar:"نعم"},{en:"no",ar:"لا"},{en:"please",ar:"من فضلك"},{en:"sorry",ar:"آسف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"dr2-t2-1", type:"word_order", sentence:"Could I have more juice please", correctAnswer:"Could I have more juice please", explanation:"Could I have more...please = طلب مهذب لمزيد من شيء", xp:14 },
      { id:"dr2-t2-2", type:"translate", arabic:"أنا آسف جداً على التأخير", options:["I am very sorry for the delay","I am very sorry for delay","I am so sorry about the late","I very sorry for the delay"], correctAnswer:"I am very sorry for the delay", explanation:"I am very sorry for... = أنا آسف جداً على...", xp:15 },
      { id:"dr2-t2-3", type:"listen_select", listenSentence:"Thank you so much for the tea", options:["tea","coffee","milk","juice"], correctAnswer:"tea", explanation:"thank you for the tea = شكراً على الشاي", xp:14 },
      { id:"dr2-t2-4", type:"word_order", sentence:"No thank you I prefer water", correctAnswer:"No thank you I prefer water", explanation:"No thank you = رفض بأدب + prefer = أفضل", xp:14 },
      { id:"dr2-t2-5", type:"translate", arabic:"هل يمكنني الحصول على المزيد من الحليب؟", options:["Can I have more milk?","Can I get more milk please?","Could I have some more milk?","All of the above"], correctAnswer:"All of the above", explanation:"كل الخيارات صحيحة! — طرق مختلفة لطلب المزيد", xp:15 },
      { id:"dr2-t2-6", type:"picture_match", word:"more", pictureOptions:[{emoji:"🔄",label:"more"},{emoji:"😔",label:"sorry"},{emoji:"🙏",label:"please"},{emoji:"❌",label:"no"}], correctAnswer:"more", explanation:"more = المزيد 🔄", xp:14 },
      { id:"dr2-t2-7", type:"word_order", sentence:"Sorry we do not have coffee today", correctAnswer:"Sorry we do not have coffee today", explanation:"today = اليوم — do not have = لا يوجد عندنا", xp:14 },
      { id:"dr2-t2-8", type:"fill_blank", blankSentence:"Thank you ___ the coffee", blankOptions:["for","to","of"], correctAnswer:"for", explanation:"Thank you for = شكراً على", xp:15 },
      { id:"dr2-t2-9", type:"matching", pairs:[{en:"thank you",ar:"شكراً"},{en:"welcome",ar:"عفواً"},{en:"more",ar:"المزيد"},{en:"enough",ar:"يكفي"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
    ],
    t3: [
      { id:"dr2-t3-1", type:"word_order", sentence:"Could I please have more water thank you", correctAnswer:"Could I please have more water thank you", explanation:"Could I please have...thank you — طلب مهذب جداً", xp:18 },
      { id:"dr2-t3-2", type:"translate", arabic:"شكراً جزيلاً على كرمك، كان الشاي رائعاً", options:["Thank you so much for your generosity, the tea was wonderful","Thank you very much for your generosity, the tea was wonderful","Thanks so much for your generosity, tea was wonderful","Thank you so much for your generosity, tea is wonderful"], correctAnswer:"Thank you very much for your generosity, the tea was wonderful", explanation:"was wonderful (ماضي) — the tea (مُعرَّف لأننا نتحدث عن شاي محدد)", xp:20 },
      { id:"dr2-t3-3", type:"listen_select", listenSentence:"I am terribly sorry, we have run out of juice", options:["juice","milk","water","tea"], correctAnswer:"juice", explanation:"run out of = نفد — we ran out of juice = نفد العصير", xp:18 },
      { id:"dr2-t3-4", type:"word_order", sentence:"Yes please I would love some more coffee", correctAnswer:"Yes please I would love some more coffee", explanation:"I would love some = أود بعض — أكثر أدباً من I want", xp:19 },
      { id:"dr2-t3-5", type:"translate", arabic:"عذراً على الإزعاج، هل يمكنني الحصول على كوب ماء؟", options:["Sorry to bother you, could I have a glass of water?","Sorry for the bother, can I get a glass of water?","Excuse me for disturbing, could I have water glass?","Sorry to disturb, may I have a water glass?"], correctAnswer:"Sorry to bother you, could I have a glass of water?", explanation:"Sorry to bother you = عذراً على الإزعاج — could = أكثر أدباً من can", xp:20 },
      { id:"dr2-t3-6", type:"word_order", sentence:"No thank you I have had enough milk", correctAnswer:"No thank you I have had enough milk", explanation:"I have had enough = اكتفيت — رفض مهذب", xp:18 },
      { id:"dr2-t3-7", type:"picture_match", word:"thank you", pictureOptions:[{emoji:"🙏",label:"thank you"},{emoji:"😔",label:"sorry"},{emoji:"✅",label:"yes"},{emoji:"🔄",label:"more"}], correctAnswer:"thank you", explanation:"thank you = شكراً 🙏", xp:18 },
      { id:"dr2-t3-8", type:"fill_blank", blankSentence:"I am ___ sorry for the delay", blankOptions:["very","much","so"], correctAnswer:"very", explanation:"very sorry = آسف جداً", xp:18 },
      { id:"dr2-t3-9", type:"matching", pairs:[{en:"sorry",ar:"آسف"},{en:"excuse me",ar:"عذراً"},{en:"please",ar:"من فضلك"},{en:"thank you",ar:"شكراً"}], correctAnswer:"matched", explanation:"رائع!", xp:18 },
    ],
  },

  // ── الدرس 3: جمل كاملة ──
  // كلمات جديدة: would 🤔 like 💚 have 👐 want 🙋 some 🔢
  // + كلمات الدرسين السابقين
  "جمل كاملة": {
    t0: [
      { id:"dr3-t0-1", type:"translate", arabic:"هل تريد بعض الشاي؟", options:["Would you like some tea?","Do you want tea?","Can I have tea?","Will you have tea?"], correctAnswer:"Would you like some tea?", explanation:"Would you like some...? = أكثر الصيغ أدباً للعرض", xp:12 },
      { id:"dr3-t0-2", type:"listen_select", listenSentence:"I would like some coffee", options:["coffee","tea","juice","milk"], correctAnswer:"coffee", explanation:"I would like some coffee = أود بعض القهوة", xp:12 },
      { id:"dr3-t0-3", type:"word_order", sentence:"Would you like some water", correctAnswer:"Would you like some water", explanation:"Would you like some water? = هل تود بعض الماء؟", xp:12 },
      { id:"dr3-t0-4", type:"translate", arabic:"أود بعض العصير من فضلك", options:["I would like some juice please","I want some juice please","Can I have some juice please","I like some juice please"], correctAnswer:"I would like some juice please", explanation:"I would like = أود — أكثر أدباً من I want", xp:12 },
      { id:"dr3-t0-5", type:"picture_match", word:"would like", pictureOptions:[{emoji:"🤔",label:"would like"},{emoji:"😔",label:"sorry"},{emoji:"🙏",label:"please"},{emoji:"❌",label:"no"}], correctAnswer:"would like", explanation:"would like = أود / أرغب في 🤔", xp:12 },
      { id:"dr3-t0-6", type:"word_order", sentence:"I would like to have milk", correctAnswer:"I would like to have milk", explanation:"would like to have = أود أن أتناول", xp:12 },
      { id:"dr3-t0-7", type:"translate", arabic:"هل عندك بعض الحليب؟", options:["Do you have some milk?","Would you have milk?","Can I have milk?","Do you want milk?"], correctAnswer:"Do you have some milk?", explanation:"Do you have some...? = هل عندك بعض...؟", xp:12 },
      { id:"dr3-t0-8", type:"fill_blank", blankSentence:"Would you ___ some tea?", blankOptions:["like","want","have"], correctAnswer:"like", explanation:"Would you like = صيغة مهذبة للعرض", xp:13 },
      { id:"dr3-t0-9", type:"matching", pairs:[{en:"would",ar:"سأودّ"},{en:"like",ar:"أحب"},{en:"have",ar:"أملك"},{en:"want",ar:"أريد"}], correctAnswer:"matched", explanation:"ممتاز! طابقت أفعال الطلب بمعانيها", xp:15 },
    ],
    t1: [
      { id:"dr3-t1-1", type:"word_order", sentence:"I would like some tea with milk please", correctAnswer:"I would like some tea with milk please", explanation:"tea with milk = شاي بالحليب — with = مع", xp:14 },
      { id:"dr3-t1-2", type:"translate", arabic:"هل تفضل القهوة أم الشاي؟", options:["Would you prefer coffee or tea?","Do you want coffee or tea?","Would you like coffee and tea?","Do you prefer coffee and tea?"], correctAnswer:"Would you prefer coffee or tea?", explanation:"prefer...or... = تفضل... أم... (خيار بين شيئين)", xp:14 },
      { id:"dr3-t1-3", type:"listen_select", listenSentence:"Would you like some juice or water", options:["juice","coffee","milk","tea"], correctAnswer:"juice", explanation:"juice or water — الأول المذكور هو juice", xp:14 },
      { id:"dr3-t1-4", type:"word_order", sentence:"Yes I would love some coffee please", correctAnswer:"Yes I would love some coffee please", explanation:"I would love = أود جداً — أقوى من would like", xp:14 },
      { id:"dr3-t1-5", type:"translate", arabic:"لا شكراً، لديّ بعض الماء", options:["No thank you, I have some water","No please, I have water","No sorry, I have some water","No thank you, I want some water"], correctAnswer:"No thank you, I have some water", explanation:"I have some = لديّ بعض — رفض بأدب مع تفسير", xp:14 },
      { id:"dr3-t1-6", type:"word_order", sentence:"Sorry I do not have any juice", correctAnswer:"Sorry I do not have any juice", explanation:"do not have any = لا يوجد عندي أي — any مع النفي", xp:14 },
      { id:"dr3-t1-7", type:"picture_match", word:"some", pictureOptions:[{emoji:"🔢",label:"some"},{emoji:"🙏",label:"please"},{emoji:"😔",label:"sorry"},{emoji:"🔄",label:"more"}], correctAnswer:"some", explanation:"some = بعض 🔢", xp:14 },
      { id:"dr3-t1-8", type:"fill_blank", blankSentence:"I would like tea ___ milk", blankOptions:["with","of","for"], correctAnswer:"with", explanation:"tea with milk = شاي بالحليب", xp:15 },
      { id:"dr3-t1-9", type:"matching", pairs:[{en:"I would like",ar:"أودّ"},{en:"I want",ar:"أريد"},{en:"I have",ar:"أملك"},{en:"do you have",ar:"هل عندك"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
    ],
    t2: [
      { id:"dr3-t2-1", type:"word_order", sentence:"Would you like to have tea or coffee with us", correctAnswer:"Would you like to have tea or coffee with us", explanation:"with us = معنا — دعوة للمشاركة", xp:16 },
      { id:"dr3-t2-2", type:"translate", arabic:"أريد القهوة بدون سكر من فضلك", options:["I would like coffee without sugar please","I want coffee without sugar please","I would like coffee with no sugar please","Both A and C"], correctAnswer:"Both A and C", explanation:"without sugar = with no sugar = بدون سكر — كلاهما صحيح", xp:16 },
      { id:"dr3-t2-3", type:"listen_select", listenSentence:"She would like some warm milk before sleeping", options:["milk","coffee","juice","water"], correctAnswer:"milk", explanation:"warm milk = حليب دافئ — before sleeping = قبل النوم", xp:16 },
      { id:"dr3-t2-4", type:"word_order", sentence:"I would not like any more coffee thank you", correctAnswer:"I would not like any more coffee thank you", explanation:"would not like any more = لا أريد مزيداً — any more مع النفي", xp:16 },
      { id:"dr3-t2-5", type:"translate", arabic:"ماذا تريد أن تشرب؟", options:["What would you like to drink?","What do you want to drink?","What will you drink?","A and B are correct"], correctAnswer:"A and B are correct", explanation:"What would you like to drink? أو What do you want to drink? — كلاهما صحيح", xp:17 },
      { id:"dr3-t2-6", type:"word_order", sentence:"Can I get you something to drink", correctAnswer:"Can I get you something to drink", explanation:"Can I get you something to drink? = هل يمكنني أن أحضر لك شيئاً لتشربه؟", xp:16 },
      { id:"dr3-t2-7", type:"translate", arabic:"أنا لا أشرب القهوة، هل عندك شاي؟", options:["I do not drink coffee, do you have tea?","I do not drink coffee, have you tea?","I don't drink coffee, would you have tea?","I am not drink coffee, do you have tea?"], correctAnswer:"I do not drink coffee, do you have tea?", explanation:"I do not drink = لا أشرب", xp:16 },
      { id:"dr3-t2-8", type:"fill_blank", blankSentence:"Would you ___ for some tea", blankOptions:["care","like","want"], correctAnswer:"care", explanation:"Would you care for = هل تودّ (رسمي)", xp:16 },
      { id:"dr3-t2-9", type:"matching", pairs:[{en:"with",ar:"مع"},{en:"without",ar:"بدون"},{en:"some",ar:"بعض"},{en:"more",ar:"المزيد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
    ],
    t3: [
      { id:"dr3-t3-1", type:"word_order", sentence:"Would you care for some tea or perhaps coffee", correctAnswer:"Would you care for some tea or perhaps coffee", explanation:"Would you care for...? = هل تودّ...؟ — صيغة رسمية جداً", xp:20 },
      { id:"dr3-t3-2", type:"translate", arabic:"سيكون رائعاً لو تناولنا بعض الشاي معاً", options:["It would be lovely to have some tea together","It would be nice having some tea together","It will be lovely to have some tea together","It would be lovely having tea some together"], correctAnswer:"It would be lovely to have some tea together", explanation:"It would be lovely to + مصدر — تعبير راقٍ للاقتراح", xp:22 },
      { id:"dr3-t3-3", type:"listen_select", listenSentence:"I would have preferred cold water to be honest", options:["water","juice","milk","tea"], correctAnswer:"water", explanation:"would have preferred = كنت سأفضّل — to be honest = بصراحة", xp:20 },
      { id:"dr3-t3-4", type:"word_order", sentence:"I am afraid we have run out of milk", correctAnswer:"I am afraid we have run out of milk", explanation:"I am afraid = للأسف — run out of = نفد", xp:20 },
      { id:"dr3-t3-5", type:"translate", arabic:"هل تفضل مشروباً ساخناً أم بارداً؟", options:["Would you prefer a hot or cold drink?","Do you prefer hot or cold drinks?","Would you like hot or cold drink?","Do you want a hot or a cold drink?"], correctAnswer:"Would you prefer a hot or cold drink?", explanation:"a hot or cold drink — article واحد يكفي عند التقابل", xp:22 },
      { id:"dr3-t3-6", type:"word_order", sentence:"Not at all please help yourself to the juice", correctAnswer:"Not at all please help yourself to the juice", explanation:"help yourself to... = تفضل... — Not at all = بكل سرور", xp:20 },
      { id:"dr3-t3-7", type:"translate", arabic:"كيف تحب قهوتك — سوداء أم بالحليب؟", options:["How do you take your coffee — black or with milk?","How do you like your coffee — black or with milk?","How would you have your coffee — black or with milk?","A and B are correct"], correctAnswer:"A and B are correct", explanation:"How do you take/like your coffee?", xp:22 },
      { id:"dr3-t3-8", type:"fill_blank", blankSentence:"Help yourself ___ the juice", blankOptions:["to","with","of"], correctAnswer:"to", explanation:"help yourself to = تفضل خذ", xp:20 },
      { id:"dr3-t3-9", type:"matching", pairs:[{en:"hot",ar:"ساخن"},{en:"cold",ar:"بارد"},{en:"black",ar:"سادة"},{en:"sweet",ar:"محلّى"}], correctAnswer:"matched", explanation:"رائع!", xp:20 },
    ],
  },

  // ── تحدي الوحدة: جميع الكلمات ──
  // يشمل: tea, coffee, water, juice, milk, yes, no, please, thank you, sorry, more, would, like, have, want, some
  "تحدي الوحدة": {
    t0: [
      { id:"ch-t0-1", type:"word_order", sentence:"Would you like some tea please", correctAnswer:"Would you like some tea please", explanation:"Would you like some tea please? = هل تودّ بعض الشاي من فضلك؟", xp:15 },
      { id:"ch-t0-2", type:"translate", arabic:"نعم من فضلك، أريد قهوة بالحليب", options:["Yes please, I would like coffee with milk","Yes please, I want coffee with milk","Yes please, I like coffee with milk","Yes please, I have coffee with milk"], correctAnswer:"Yes please, I would like coffee with milk", explanation:"I would like = أود — الأكثر أدباً للطلب", xp:15 },
      { id:"ch-t0-3", type:"listen_select", listenSentence:"No thank you I have some water", options:["water","juice","milk","coffee"], correctAnswer:"water", explanation:"I have some water = لديّ بعض الماء", xp:15 },
      { id:"ch-t0-4", type:"picture_match", word:"juice", pictureOptions:[{emoji:"🧃",label:"juice"},{emoji:"☕",label:"coffee"},{emoji:"🍵",label:"tea"},{emoji:"🥛",label:"milk"}], correctAnswer:"juice", explanation:"juice = عصير 🧃", xp:15 },
      { id:"ch-t0-5", type:"word_order", sentence:"Sorry we do not have any juice today", correctAnswer:"Sorry we do not have any juice today", explanation:"Sorry + do not have any = اعتذار + نفي مع any", xp:15 },
      { id:"ch-t0-6", type:"translate", arabic:"هل أجلب لك المزيد من الماء؟", options:["Shall I get you some more water?","Will I get you more water?","Can I bring you more water?","Should I get you water more?"], correctAnswer:"Shall I get you some more water?", explanation:"Shall I...? = هل أقوم بـ...؟ — عرض للمساعدة", xp:15 },
      { id:"ch-t0-7", type:"word_order", sentence:"Thank you that is very kind of you", correctAnswer:"Thank you that is very kind of you", explanation:"That is very kind of you = هذا لطيف جداً منك", xp:15 },
      { id:"ch-t0-8", type:"fill_blank", blankSentence:"Yes ___ , I would like coffee", blankOptions:["please","sorry","no"], correctAnswer:"please", explanation:"Yes please = نعم من فضلك — قبول مهذب", xp:15 },
      { id:"ch-t0-9", type:"matching", pairs:[{en:"tea",ar:"شاي"},{en:"please",ar:"من فضلك"},{en:"sorry",ar:"آسف"},{en:"more",ar:"المزيد"}], correctAnswer:"matched", explanation:"رائع! راجعت كل كلمات الوحدة 👑", xp:18 },
    ],
    t1: [
      { id:"ch-t1-1", type:"translate", arabic:"كم من الكلمات التالية تعرفها؟ tea, coffee, water, juice, milk", options:["All five are drinks","Four are drinks one is food","These are all foods","Three are hot drinks"], correctAnswer:"All five are drinks", explanation:"tea ☕ coffee ☕ water 💧 juice 🧃 milk 🥛 — كلها مشروبات", xp:16 },
      { id:"ch-t1-2", type:"word_order", sentence:"I would like tea please but not coffee", correctAnswer:"I would like tea please but not coffee", explanation:"but not = لكن ليس — لرفض خيار والقبول بآخر", xp:16 },
      { id:"ch-t1-3", type:"listen_select", listenSentence:"Could I have some more milk and a little water", options:["milk","juice","coffee","tea"], correctAnswer:"milk", explanation:"some more milk = مزيد من الحليب — a little water = قليل من الماء", xp:16 },
      { id:"ch-t1-4", type:"translate", arabic:"لا أريد قهوة ولا شاي، فقط ماء من فضلك", options:["I do not want coffee or tea, just water please","I want no coffee or tea, only water please","I do not want coffee and tea, just water please","I would not like coffee or tea, just water please"], correctAnswer:"I do not want coffee or tea, just water please", explanation:"not...or... = ليس...ولا... — just = فقط", xp:17 },
      { id:"ch-t1-5", type:"word_order", sentence:"Would you like more juice or some milk", correctAnswer:"Would you like more juice or some milk", explanation:"more juice or some milk — عرض خيارين بكميات", xp:16 },
      { id:"ch-t1-6", type:"translate", arabic:"عذراً، هل قلت شاي أم قهوة؟", options:["Sorry, did you say tea or coffee?","Sorry, do you say tea or coffee?","Excuse me, did you say tea or coffee?","A and C are correct"], correctAnswer:"A and C are correct", explanation:"did you say = هل قلت (ماضي) — Sorry/Excuse me كلاهما صحيح", xp:17 },
      { id:"ch-t1-7", type:"picture_match", word:"coffee", pictureOptions:[{emoji:"☕",label:"coffee"},{emoji:"🍵",label:"tea"},{emoji:"💧",label:"water"},{emoji:"🥛",label:"milk"}], correctAnswer:"coffee", explanation:"coffee = قهوة ☕", xp:16 },
      { id:"ch-t1-8", type:"fill_blank", blankSentence:"Would you like ___ more juice", blankOptions:["some","any","a"], correctAnswer:"some", explanation:"some more = مزيد", xp:16 },
      { id:"ch-t1-9", type:"matching", pairs:[{en:"juice",ar:"عصير"},{en:"milk",ar:"حليب"},{en:"water",ar:"ماء"},{en:"coffee",ar:"قهوة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:17 },
    ],
    t2: [
      { id:"ch-t2-1", type:"word_order", sentence:"I would like some tea with a little milk and no sugar", correctAnswer:"I would like some tea with a little milk and no sugar", explanation:"with a little milk and no sugar = بقليل من الحليب وبدون سكر", xp:18 },
      { id:"ch-t2-2", type:"translate", arabic:"هل يمكنك إحضار مشروب بارد من فضلك؟", options:["Could you bring a cold drink please?","Can you bring cold drink please?","Would you bring a cold drink please?","Could you bring a cold drink?"], correctAnswer:"Could you bring a cold drink please?", explanation:"Could you...please? = صيغة مهذبة للطلب من شخص آخر", xp:18 },
      { id:"ch-t2-3", type:"listen_select", listenSentence:"I am sorry but we only have water and juice left", options:["water","coffee","milk","tea"], correctAnswer:"water", explanation:"we only have water and juice left = لم يتبق إلا الماء والعصير", xp:18 },
      { id:"ch-t2-4", type:"word_order", sentence:"Thank you so much the coffee was wonderful", correctAnswer:"Thank you so much the coffee was wonderful", explanation:"was wonderful = ماضي — نتحدث عن شيء انتهينا منه", xp:18 },
      { id:"ch-t2-5", type:"translate", arabic:"لا أشرب الحليب، هل عندك عصير بدلاً عنه؟", options:["I do not drink milk, do you have juice instead?","I don't drink milk, have you juice instead?","I do not drink milk, would you have juice instead?","I am not drinking milk, do you have juice instead?"], correctAnswer:"I do not drink milk, do you have juice instead?", explanation:"instead = بدلاً عنه — do you have = هل عندك", xp:19 },
      { id:"ch-t2-6", type:"word_order", sentence:"Yes please I would love some cold water", correctAnswer:"Yes please I would love some cold water", explanation:"I would love = أودّ جداً — cold water = ماء بارد", xp:18 },
      { id:"ch-t2-7", type:"translate", arabic:"أقدّم لكم الشاي والقهوة والعصير", options:["I am serving tea, coffee and juice","I am offering tea, coffee and juice","I offer tea, coffee and juice","All of the above"], correctAnswer:"All of the above", explanation:"serve/offer — كلها صحيحة", xp:18 },
      { id:"ch-t2-8", type:"fill_blank", blankSentence:"Coffee ___ sugar, please", blankOptions:["without","with","of"], correctAnswer:"without", explanation:"without sugar = بدون سكر", xp:18 },
      { id:"ch-t2-9", type:"matching", pairs:[{en:"would",ar:"سأودّ"},{en:"care for",ar:"ترغب"},{en:"prefer",ar:"تفضّل"},{en:"instead",ar:"بدلاً"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
    ],
    t3: [
      { id:"ch-t3-1", type:"word_order", sentence:"Would you care for some tea or perhaps a cold glass of juice", correctAnswer:"Would you care for some tea or perhaps a cold glass of juice", explanation:"Would you care for...? + a cold glass of juice — صياغة رسمية راقية", xp:22 },
      { id:"ch-t3-2", type:"translate", arabic:"كنت سأفضّل عصيراً بارداً لو تكرّمت", options:["I would prefer a cold juice if you do not mind","I would have preferred cold juice if you please","I would prefer cold juice if you do not mind","I prefer cold juice if you would not mind"], correctAnswer:"I would prefer a cold juice if you do not mind", explanation:"if you do not mind = إن لم يكن يزعجك — a cold juice (مُعرَّف بـ a)", xp:24 },
      { id:"ch-t3-3", type:"listen_select", listenSentence:"I am terribly sorry we seem to have run out of both milk and juice", options:["milk","coffee","water","tea"], correctAnswer:"milk", explanation:"run out of both milk and juice = نفد كل من الحليب والعصير", xp:22 },
      { id:"ch-t3-4", type:"word_order", sentence:"Not at all please do help yourself to the coffee and milk", correctAnswer:"Not at all please do help yourself to the coffee and milk", explanation:"do help yourself = تفضل تماماً (do للتأكيد) — Not at all = بكل سرور", xp:22 },
      { id:"ch-t3-5", type:"translate", arabic:"سيسعدني تناول كوب شاي، إذا لم يكن ذلك يمثل ازعاجاً", options:["I would love a cup of tea, if it is not too much trouble","I would love a cup of tea, if it is not too much bother","I would like a cup of tea, if it is no trouble","All of the above"], correctAnswer:"All of the above", explanation:"كلها صحيحة — if it is not too much trouble/bother = إن لم يكن مزعجاً", xp:24 },
      { id:"ch-t3-6", type:"word_order", sentence:"Thank you for your hospitality the tea and coffee were excellent", correctAnswer:"Thank you for your hospitality the tea and coffee were excellent", explanation:"hospitality = الكرم / حسن الضيافة — were excellent = كانا ممتازين", xp:22 },
      { id:"ch-t3-7", type:"translate", arabic:"هل يمكنني الاطلاع على قائمة المشروبات من فضلك؟", options:["Could I see the drinks menu please?","Can I look at the drink menu please?","May I have a look at the drinks menu please?","A and C are correct"], correctAnswer:"A and C are correct", explanation:"Could I see / May I have a look", xp:24 },
      { id:"ch-t3-8", type:"fill_blank", blankSentence:"I am afraid we have ___ out of milk", blankOptions:["run","gone","went"], correctAnswer:"run", explanation:"run out of = نفد", xp:22 },
      { id:"ch-t3-9", type:"matching", pairs:[{en:"hospitality",ar:"كرم الضيافة"},{en:"generosity",ar:"السخاء"},{en:"trouble",ar:"إزعاج"},{en:"delay",ar:"تأخير"}], correctAnswer:"matched", explanation:"رائع! 👑", xp:24 },
    ],
  },
};
