import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// B1 – INTERMEDIATE
// (Authored by content pass — see types.ts for the authoring rules.)
// ══════════════════════════════════════════════════════════════

export const b1Banks: Record<string, TieredBank> = {
  // ── Present Perfect Tense ──
  // Objective: have/has + p.p, present perfect vs past simple,
  // ever/never/already/yet/just/for/since, life experiences.
  "Present Perfect Tense": {
    // EASY — building the tense, core signal words
    t0: [
      { id:"presperf-t0-1", type:"word_order", sentence:"I have finished my work", correctAnswer:"I have finished my work", explanation:"have + التصريف الثالث (finished) لبناء المضارع التام", xp:10 },
      { id:"presperf-t0-2", type:"translate", arabic:"لقد رأيتُ هذا الفيلم", options:["I have seen this film","I have saw this film","I have see this film","I has seen this film"], correctAnswer:"I have seen this film", explanation:"have + seen (التصريف الثالث لـ see)", xp:10 },
      { id:"presperf-t0-3", type:"listen_select", listenSentence:"She has just left", options:["just","yet","ever","never"], correctAnswer:"just", explanation:"الجملة: «لقد غادرت للتو» — just تعني للتو", xp:10 },
      { id:"presperf-t0-4", type:"picture_match", word:"eaten", pictureOptions:[{emoji:"🍽️",label:"eaten"},{emoji:"🛌",label:"slept"},{emoji:"🏃",label:"run"},{emoji:"📚",label:"read"}], correctAnswer:"eaten", explanation:"I have eaten 🍽️ — eaten هو التصريف الثالث لـ eat", xp:11 },
      { id:"presperf-t0-5", type:"word_order", sentence:"He has lost his keys", correctAnswer:"He has lost his keys", explanation:"has مع المفرد الغائب + lost (التصريف الثالث)", xp:10 },
      { id:"presperf-t0-6", type:"translate", arabic:"هل أنهيتَ بعد؟", options:["Have you finished yet?","Have you finished already?","Did you finished yet?","Have you finish yet?"], correctAnswer:"Have you finished yet?", explanation:"yet تُستخدم في السؤال بمعنى «بعد»", xp:11 },
      { id:"presperf-t0-7", type:"translate", arabic:"لقد وصلوا للتو", options:["They have just arrived","They have just arrive","They has just arrived","They have arrived just"], correctAnswer:"They have just arrived", explanation:"have + just + p.p للحدث الذي تمّ للتو", xp:11 },
      { id:"presperf-t0-8", type:"word_order", sentence:"We have cleaned the house", correctAnswer:"We have cleaned the house", explanation:"have + cleaned للتعبير عن نتيجة حاضرة", xp:10 },
      { id:"presperf-t0-9", type:"listen_select", listenSentence:"I have never been to Paris", options:["never","ever","already","yet"], correctAnswer:"never", explanation:"الجملة: «لم يسبق لي زيارة باريس» — never تعني أبداً", xp:11 },
      { id:"presperf-t0-10", type:"picture_match", word:"arrived", pictureOptions:[{emoji:"🛬",label:"arrived"},{emoji:"🛫",label:"departed"},{emoji:"🚗",label:"driving"},{emoji:"⏳",label:"waiting"}], correctAnswer:"arrived", explanation:"The plane has arrived 🛬 — arrived = وصل", xp:11 },
    ],
    // MEDIUM — questions, negation, for/since, longer sentences
    t1: [
      { id:"presperf-t1-1", type:"translate", arabic:"هل سبق لك أن زرتَ لندن؟", options:["Have you ever visited London?","Did you ever visited London?","Have you ever visit London?","Have you visited ever London?"], correctAnswer:"Have you ever visited London?", explanation:"Have you ever + p.p للسؤال عن التجارب", xp:13 },
      { id:"presperf-t1-2", type:"word_order", sentence:"I have not seen her today", correctAnswer:"I have not seen her today", explanation:"النفي: have + not + p.p", xp:13 },
      { id:"presperf-t1-3", type:"translate", arabic:"لم ننتهِ من المشروع بعد", options:["We haven't finished the project yet","We don't finished the project yet","We haven't finish the project yet","We haven't finished the project already"], correctAnswer:"We haven't finished the project yet", explanation:"haven't + p.p مع yet في النفي", xp:14 },
      { id:"presperf-t1-4", type:"listen_select", listenSentence:"They have already eaten dinner", options:["already","yet","just","ever"], correctAnswer:"already", explanation:"الجملة: «لقد تناولوا العشاء بالفعل» — already تعني بالفعل", xp:13 },
      { id:"presperf-t1-5", type:"word_order", sentence:"Has she ever played tennis", correctAnswer:"Has she ever played tennis", explanation:"السؤال: Has + الفاعل + ever + p.p", xp:14 },
      { id:"presperf-t1-6", type:"translate", arabic:"لقد عشتُ هنا منذ 2010", options:["I have lived here since 2010","I have lived here for 2010","I have lived here from 2010","I live here since 2010"], correctAnswer:"I have lived here since 2010", explanation:"since + نقطة زمنية محددة", xp:14 },
      { id:"presperf-t1-7", type:"translate", arabic:"لقد عملتُ هنا لمدة خمس سنوات", options:["I have worked here for five years","I have worked here since five years","I have work here for five years","I worked here for five years"], correctAnswer:"I have worked here for five years", explanation:"for + مدة زمنية", xp:14 },
      { id:"presperf-t1-8", type:"picture_match", word:"traveled", pictureOptions:[{emoji:"✈️",label:"traveled"},{emoji:"🏠",label:"stayed"},{emoji:"🛏️",label:"rested"},{emoji:"🚶",label:"walked"}], correctAnswer:"traveled", explanation:"Have you ever traveled abroad? ✈️ = سافر", xp:13 },
      { id:"presperf-t1-9", type:"word_order", sentence:"He has just called me", correctAnswer:"He has just called me", explanation:"has + just + p.p للحدث القريب جداً", xp:13 },
      { id:"presperf-t1-10", type:"listen_select", listenSentence:"I haven't decided yet", options:["yet","just","ever","since"], correctAnswer:"yet", explanation:"الجملة: «لم أقرر بعد» — yet مع النفي تعني بعد", xp:14 },
    ],
    // HARD — present perfect vs past simple, trap distractors
    t2: [
      { id:"presperf-t2-1", type:"translate", arabic:"ذهبتُ إلى السوق أمس", options:["I went to the market yesterday","I have gone to the market yesterday","I have went to the market yesterday","I go to the market yesterday"], correctAnswer:"I went to the market yesterday", explanation:"مع yesterday نستخدم الماضي البسيط لا التام", xp:17 },
      { id:"presperf-t2-2", type:"translate", arabic:"لقد عاشت في ثلاث دول حتى الآن", options:["She has lived in three countries so far","She lived in three countries so far","She has live in three countries so far","She has lived in three countries yesterday"], correctAnswer:"She has lived in three countries so far", explanation:"so far (حتى الآن) إشارة للمضارع التام", xp:17 },
      { id:"presperf-t2-3", type:"word_order", sentence:"I have known him since childhood", correctAnswer:"I have known him since childhood", explanation:"known + since للحالة المستمرة منذ نقطة في الماضي", xp:16 },
      { id:"presperf-t2-4", type:"listen_select", listenSentence:"The train has already departed", options:["departed","arrived","delayed","returned"], correctAnswer:"departed", explanation:"الجملة: «غادر القطار بالفعل» — departed = غادر", xp:16 },
      { id:"presperf-t2-5", type:"translate", arabic:"كم مرة شاهدتَ هذا الفيلم؟", options:["How many times have you seen this film?","How many times did you seen this film?","How many times have you saw this film?","How much times have you seen this film?"], correctAnswer:"How many times have you seen this film?", explanation:"How many times + have + p.p لعدد المرات", xp:18 },
      { id:"presperf-t2-6", type:"word_order", sentence:"She has worked here for ten years", correctAnswer:"She has worked here for ten years", explanation:"has worked + for + مدة للعمل المستمر حتى الآن", xp:16 },
      { id:"presperf-t2-7", type:"translate", arabic:"هل انتهيتَ من تقريرك بعد؟", options:["Have you finished your report yet?","Did you finish your report yet?","Have you finished your report already?","Have you finished your report since?"], correctAnswer:"Have you finished your report yet?", explanation:"الصيغة البريطانية القياسية: Have you ... yet?", xp:17 },
      { id:"presperf-t2-8", type:"picture_match", word:"grown", pictureOptions:[{emoji:"🌳",label:"grown"},{emoji:"🌱",label:"planted"},{emoji:"🍂",label:"fallen"},{emoji:"✂️",label:"cut"}], correctAnswer:"grown", explanation:"The tree has grown 🌳 — grown هو التصريف الثالث لـ grow", xp:16 },
      { id:"presperf-t2-9", type:"translate", arabic:"لم أرَهُ منذ العام الماضي", options:["I haven't seen him since last year","I didn't see him since last year","I haven't saw him since last year","I haven't seen him for last year"], correctAnswer:"I haven't seen him since last year", explanation:"since + last year (نقطة زمنية) مع المضارع التام", xp:18 },
      { id:"presperf-t2-10", type:"listen_select", listenSentence:"We have never met before", options:["never","ever","already","yet"], correctAnswer:"never", explanation:"الجملة: «لم نلتقِ من قبل أبداً» — never = أبداً", xp:17 },
    ],
    // HIGH — exam-level, integrative, subtle nuance
    t3: [
      { id:"presperf-t3-1", type:"translate", arabic:"إنها المرة الأولى التي آكل فيها السوشي", options:["It's the first time I have eaten sushi","It's the first time I eat sushi","It's the first time I ate sushi","It's the first time I am eating sushi"], correctAnswer:"It's the first time I have eaten sushi", explanation:"It's the first time + مضارع تام", xp:22 },
      { id:"presperf-t3-2", type:"word_order", sentence:"She has not yet replied to my email", correctAnswer:"She has not yet replied to my email", explanation:"موضع yet يمكن أن يأتي بعد not في الأسلوب الرسمي", xp:22 },
      { id:"presperf-t3-3", type:"translate", arabic:"لقد تحسّن مستواه كثيراً مؤخراً", options:["His level has improved a lot recently","His level improved a lot recently","His level has improve a lot recently","His level has been improved a lot recently"], correctAnswer:"His level has improved a lot recently", explanation:"recently إشارة قوية للمضارع التام", xp:23 },
      { id:"presperf-t3-4", type:"listen_select", listenSentence:"Prices have risen sharply this year", options:["risen","raised","rose","rising"], correctAnswer:"risen", explanation:"الجملة: «ارتفعت الأسعار بحدة» — risen التصريف الثالث لـ rise", xp:23 },
      { id:"presperf-t3-5", type:"translate", arabic:"لم يسبق لي أن صادفتُ موقفاً كهذا", options:["I have never come across such a situation","I never came across such a situation","I have never came across such a situation","I have never come across such situation"], correctAnswer:"I have never come across such a situation", explanation:"come across = صادف، وتصريفه الثالث come", xp:24 },
      { id:"presperf-t3-6", type:"word_order", sentence:"Have you ever had such an experience", correctAnswer:"Have you ever had such an experience", explanation:"Have you ever had...? سؤال عن التجارب", xp:22 },
      { id:"presperf-t3-7", type:"translate", arabic:"لقد فقدتُ مفاتيحي، لذا لا أستطيع الدخول", options:["I have lost my keys, so I can't get in","I lost my keys, so I can't get in","I have lose my keys, so I can't get in","I have losed my keys, so I can't get in"], correctAnswer:"I have lost my keys, so I can't get in", explanation:"المضارع التام يربط حدثاً ماضياً بنتيجة حاضرة", xp:24 },
      { id:"presperf-t3-8", type:"picture_match", word:"achieved", pictureOptions:[{emoji:"🏆",label:"achieved"},{emoji:"🥈",label:"lost"},{emoji:"🎯",label:"aimed"},{emoji:"📉",label:"failed"}], correctAnswer:"achieved", explanation:"She has achieved her goal 🏆 = حقّق هدفه", xp:22 },
      { id:"presperf-t3-9", type:"translate", arabic:"منذ متى وأنت تعرفها؟", options:["How long have you known her?","How long do you know her?","How long have you knew her?","How long are you knowing her?"], correctAnswer:"How long have you known her?", explanation:"How long have you + p.p للسؤال عن المدة", xp:24 },
      { id:"presperf-t3-10", type:"listen_select", listenSentence:"The situation has gradually worsened", options:["worsened","worse","worst","worsen"], correctAnswer:"worsened", explanation:"الجملة: «تدهور الوضع تدريجياً» — worsened التصريف الثالث", xp:25 },
    ],
  },

  // ── Talking About the Future ──
  // Objective: will vs going to, present continuous for arrangements,
  // predictions & instant decisions, future time expressions.
  "Talking About the Future": {
    // EASY — basic will / going to
    t0: [
      { id:"future-t0-1", type:"word_order", sentence:"I will call you tomorrow", correctAnswer:"I will call you tomorrow", explanation:"will + مصدر بدون to للتعبير عن المستقبل", xp:10 },
      { id:"future-t0-2", type:"translate", arabic:"سوف أساعدك", options:["I will help you","I am help you","I will helping you","I help you will"], correctAnswer:"I will help you", explanation:"will + الفعل المجرد", xp:10 },
      { id:"future-t0-3", type:"listen_select", listenSentence:"We will travel next week", options:["next","last","this","every"], correctAnswer:"next", explanation:"الجملة: «سنسافر الأسبوع القادم» — next week = الأسبوع القادم", xp:10 },
      { id:"future-t0-4", type:"picture_match", word:"rain", pictureOptions:[{emoji:"🌧️",label:"rain"},{emoji:"☀️",label:"sun"},{emoji:"❄️",label:"snow"},{emoji:"🌈",label:"rainbow"}], correctAnswer:"rain", explanation:"I think it will rain 🌧️ = ستمطر", xp:11 },
      { id:"future-t0-5", type:"word_order", sentence:"She is going to study tonight", correctAnswer:"She is going to study tonight", explanation:"be going to + مصدر للخطط المستقبلية", xp:11 },
      { id:"future-t0-6", type:"translate", arabic:"سأشتري سيارة جديدة", options:["I am going to buy a new car","I am go to buy a new car","I will buying a new car","I going to buy a new car"], correctAnswer:"I am going to buy a new car", explanation:"am going to + مصدر للنيّة المخطّط لها", xp:11 },
      { id:"future-t0-7", type:"translate", arabic:"سوف يكون الطقس مشمساً غداً", options:["It will be sunny tomorrow","It will sunny tomorrow","It is be sunny tomorrow","It will being sunny tomorrow"], correctAnswer:"It will be sunny tomorrow", explanation:"will be + صفة للتنبؤ بالطقس", xp:11 },
      { id:"future-t0-8", type:"word_order", sentence:"They will arrive next month", correctAnswer:"They will arrive next month", explanation:"will + arrive مع تعبير زمني مستقبلي", xp:10 },
      { id:"future-t0-9", type:"listen_select", listenSentence:"I am going to cook dinner", options:["going","gone","go","goes"], correctAnswer:"going", explanation:"الجملة: «سأطبخ العشاء» — am going to للنيّة", xp:11 },
      { id:"future-t0-10", type:"picture_match", word:"plane", pictureOptions:[{emoji:"✈️",label:"plane"},{emoji:"🚗",label:"car"},{emoji:"🚂",label:"train"},{emoji:"🚢",label:"ship"}], correctAnswer:"plane", explanation:"We will take a plane ✈️ = طائرة", xp:10 },
    ],
    // MEDIUM — questions, negation, arrangements
    t1: [
      { id:"future-t1-1", type:"translate", arabic:"هل ستحضر الحفل؟", options:["Will you come to the party?","Do you will come to the party?","Will you coming to the party?","Are you will come to the party?"], correctAnswer:"Will you come to the party?", explanation:"السؤال: Will + الفاعل + مصدر", xp:13 },
      { id:"future-t1-2", type:"word_order", sentence:"I am meeting her tomorrow morning", correctAnswer:"I am meeting her tomorrow morning", explanation:"المضارع المستمر للترتيبات المستقبلية المؤكّدة", xp:14 },
      { id:"future-t1-3", type:"translate", arabic:"لن أذهب إلى العمل غداً", options:["I won't go to work tomorrow","I will not going to work tomorrow","I don't go to work tomorrow","I won't going to work tomorrow"], correctAnswer:"I won't go to work tomorrow", explanation:"won't = will not + مصدر للنفي", xp:14 },
      { id:"future-t1-4", type:"listen_select", listenSentence:"She is leaving on Friday", options:["leaving","leaves","left","leave"], correctAnswer:"leaving", explanation:"الجملة: «سترحل يوم الجمعة» — is leaving ترتيب مستقبلي", xp:13 },
      { id:"future-t1-5", type:"translate", arabic:"أعتقد أنها ستنجح", options:["I think she will pass","I think she is pass","I think she will passing","I think she pass will"], correctAnswer:"I think she will pass", explanation:"I think + will للتنبؤ والرأي", xp:13 },
      { id:"future-t1-6", type:"word_order", sentence:"We are going to visit our grandparents", correctAnswer:"We are going to visit our grandparents", explanation:"are going to للخطة المتفق عليها", xp:14 },
      { id:"future-t1-7", type:"translate", arabic:"ماذا ستفعل في العطلة؟", options:["What are you going to do on holiday?","What you are going to do on holiday?","What do you going to do on holiday?","What are you go to do on holiday?"], correctAnswer:"What are you going to do on holiday?", explanation:"What + are + you + going to + مصدر", xp:15 },
      { id:"future-t1-8", type:"picture_match", word:"calendar", pictureOptions:[{emoji:"📅",label:"calendar"},{emoji:"⏰",label:"clock"},{emoji:"📖",label:"book"},{emoji:"🗺️",label:"map"}], correctAnswer:"calendar", explanation:"نخطّط للمستقبل على التقويم 📅 = calendar", xp:13 },
      { id:"future-t1-9", type:"word_order", sentence:"The train leaves at nine tomorrow", correctAnswer:"The train leaves at nine tomorrow", explanation:"المضارع البسيط للجداول الزمنية الثابتة (مواعيد القطار)", xp:15 },
      { id:"future-t1-10", type:"listen_select", listenSentence:"They are flying to Dubai next week", options:["flying","flew","fly","flies"], correctAnswer:"flying", explanation:"الجملة: «سيسافرون إلى دبي» — are flying ترتيب مؤكّد", xp:14 },
    ],
    // HARD — will vs going to nuance, trap distractors
    t2: [
      { id:"future-t2-1", type:"translate", arabic:"انظر إلى تلك الغيوم! سوف تمطر", options:["Look at those clouds! It's going to rain","Look at those clouds! It will rain","Look at those clouds! It rains","Look at those clouds! It is rain"], correctAnswer:"Look at those clouds! It's going to rain", explanation:"وجود دليل حاضر (الغيوم) → going to للتنبؤ", xp:18 },
      { id:"future-t2-2", type:"translate", arabic:"الهاتف يرن، سأرد عليه", options:["The phone is ringing, I'll answer it","The phone is ringing, I'm going to answer it","The phone is ringing, I answer it","The phone is ringing, I will answering it"], correctAnswer:"The phone is ringing, I'll answer it", explanation:"قرار لحظي → will لا going to", xp:18 },
      { id:"future-t2-3", type:"word_order", sentence:"I have decided I am going to quit", correctAnswer:"I have decided I am going to quit", explanation:"going to لقرار سبق التخطيط له", xp:16 },
      { id:"future-t2-4", type:"listen_select", listenSentence:"The meeting will probably be postponed", options:["postponed","planned","promoted","prepared"], correctAnswer:"postponed", explanation:"الجملة: «من المحتمل تأجيل الاجتماع» — postponed = مؤجّل", xp:16 },
      { id:"future-t2-5", type:"translate", arabic:"سأتصل بك حالما أصل", options:["I will call you as soon as I arrive","I will call you as soon as I will arrive","I am going to call you as soon as I will arrive","I will call you as soon as I arriving"], correctAnswer:"I will call you as soon as I arrive", explanation:"بعد as soon as نستخدم المضارع البسيط لا will", xp:18 },
      { id:"future-t2-6", type:"word_order", sentence:"She is going to start her own business", correctAnswer:"She is going to start her own business", explanation:"going to للخطة بعيدة المدى", xp:16 },
      { id:"future-t2-7", type:"translate", arabic:"أنا متأكد أنك ستحب هذا الكتاب", options:["I'm sure you will love this book","I'm sure you are loving this book","I'm sure you love will this book","I'm sure you going to love this book"], correctAnswer:"I'm sure you will love this book", explanation:"will مع التنبؤ المبني على الرأي (I'm sure)", xp:17 },
      { id:"future-t2-8", type:"picture_match", word:"graduate", pictureOptions:[{emoji:"🎓",label:"graduate"},{emoji:"💼",label:"work"},{emoji:"🏖️",label:"vacation"},{emoji:"🏠",label:"home"}], correctAnswer:"graduate", explanation:"She is going to graduate 🎓 = يتخرّج", xp:16 },
      { id:"future-t2-9", type:"translate", arabic:"ربما لن يأتوا الليلة", options:["They probably won't come tonight","They probably don't come tonight","They won't probably to come tonight","They probably aren't come tonight"], correctAnswer:"They probably won't come tonight", explanation:"probably يأتي قبل won't في النفي", xp:17 },
      { id:"future-t2-10", type:"listen_select", listenSentence:"We are throwing a party next Saturday", options:["throwing","threw","thrown","throws"], correctAnswer:"throwing", explanation:"الجملة: «سنقيم حفلة» — are throwing ترتيب مستقبلي", xp:17 },
    ],
    // HIGH — exam-level future forms & nuance
    t3: [
      { id:"future-t3-1", type:"translate", arabic:"بحلول الوقت الذي تصل فيه، سأكون قد غادرت", options:["By the time you arrive, I will have left","By the time you will arrive, I will leave","By the time you arrive, I will leave","By the time you arrive, I am leaving"], correctAnswer:"By the time you arrive, I will have left", explanation:"will have + p.p (المستقبل التام) لحدث يكتمل قبل آخر", xp:24 },
      { id:"future-t3-2", type:"word_order", sentence:"This time next week I will be relaxing on the beach", correctAnswer:"This time next week I will be relaxing on the beach", explanation:"will be + v-ing (المستقبل المستمر) لحدث جارٍ في المستقبل", xp:23 },
      { id:"future-t3-3", type:"translate", arabic:"من المقرر أن يبدأ المؤتمر الساعة التاسعة", options:["The conference is due to start at nine","The conference is due start at nine","The conference will due to start at nine","The conference due to start at nine"], correctAnswer:"The conference is due to start at nine", explanation:"be due to + مصدر للترتيبات الرسمية المجدولة", xp:23 },
      { id:"future-t3-4", type:"listen_select", listenSentence:"The flight is scheduled to depart at noon", options:["scheduled","canceled","delayed","boarding"], correctAnswer:"scheduled", explanation:"الجملة: «الرحلة مجدولة للإقلاع ظهراً» — scheduled = مجدول", xp:23 },
      { id:"future-t3-5", type:"translate", arabic:"كنتُ على وشك أن أتصل بك", options:["I was about to call you","I am about to called you","I was about to calling you","I was about call you"], correctAnswer:"I was about to call you", explanation:"be about to + مصدر للحدث الوشيك", xp:24 },
      { id:"future-t3-6", type:"word_order", sentence:"I am on the verge of making a decision", correctAnswer:"I am on the verge of making a decision", explanation:"on the verge of + v-ing تعبير عن حدث وشيك جداً", xp:24 },
      { id:"future-t3-7", type:"translate", arabic:"في غضون خمس سنوات، ستتغير التقنية كثيراً", options:["In five years, technology will have changed a lot","In five years, technology will changing a lot","In five years, technology is change a lot","In five years, technology change will a lot"], correctAnswer:"In five years, technology will have changed a lot", explanation:"will have changed لتوقّع اكتمال التغيّر مستقبلاً", xp:24 },
      { id:"future-t3-8", type:"picture_match", word:"rocket", pictureOptions:[{emoji:"🚀",label:"rocket"},{emoji:"🛰️",label:"satellite"},{emoji:"🌙",label:"moon"},{emoji:"⭐",label:"star"}], correctAnswer:"rocket", explanation:"They are going to launch a rocket 🚀 = صاروخ", xp:22 },
      { id:"future-t3-9", type:"translate", arabic:"هل من المرجح أن ينتهي الاجتماع قريباً؟", options:["Is the meeting likely to finish soon?","Is the meeting likely finish soon?","Does the meeting likely to finish soon?","Is the meeting likely to finishing soon?"], correctAnswer:"Is the meeting likely to finish soon?", explanation:"be likely to + مصدر للتعبير عن الاحتمالية", xp:24 },
      { id:"future-t3-10", type:"listen_select", listenSentence:"Experts predict the economy will recover gradually", options:["recover","recovered","recovering","recovery"], correctAnswer:"recover", explanation:"الجملة: «يتوقع الخبراء تعافي الاقتصاد» — will + recover", xp:25 },
    ],
  },

  // ── Comparatives & Superlatives ──
  // Objective: -er/more + than, the -est/the most, irregular adjectives,
  // as ... as for equality.
  "Comparatives & Superlatives": {
    // EASY — short adjectives -er / -est
    t0: [
      { id:"compar-t0-1", type:"word_order", sentence:"My car is faster than yours", correctAnswer:"My car is faster than yours", explanation:"الصفة القصيرة + er + than للمقارنة", xp:10 },
      { id:"compar-t0-2", type:"translate", arabic:"هذا الكتاب أكبر من ذاك", options:["This book is bigger than that one","This book is more big than that one","This book is biggest than that one","This book is bigger that that one"], correctAnswer:"This book is bigger than that one", explanation:"big→bigger (مضاعفة الحرف الأخير)", xp:11 },
      { id:"compar-t0-3", type:"listen_select", listenSentence:"She is taller than her brother", options:["taller","tall","tallest","tally"], correctAnswer:"taller", explanation:"الجملة: «هي أطول من أخيها» — taller = أطول", xp:10 },
      { id:"compar-t0-4", type:"picture_match", word:"tall", pictureOptions:[{emoji:"🦒",label:"tall"},{emoji:"🐁",label:"small"},{emoji:"🐘",label:"big"},{emoji:"🐆",label:"fast"}], correctAnswer:"tall", explanation:"الزرافة طويلة 🦒 = tall", xp:11 },
      { id:"compar-t0-5", type:"word_order", sentence:"This is the biggest house", correctAnswer:"This is the biggest house", explanation:"the + صفة + est للتفضيل", xp:10 },
      { id:"compar-t0-6", type:"translate", arabic:"القطار أسرع من الحافلة", options:["The train is faster than the bus","The train is more fast than the bus","The train is fastest than the bus","The train faster is than the bus"], correctAnswer:"The train is faster than the bus", explanation:"fast→faster + than", xp:11 },
      { id:"compar-t0-7", type:"translate", arabic:"إنه أطول صبي في الصف", options:["He is the tallest boy in the class","He is the most tall boy in the class","He is taller boy in the class","He is the tallest boy of the class"], correctAnswer:"He is the tallest boy in the class", explanation:"the tallest + in + المكان للتفضيل", xp:11 },
      { id:"compar-t0-8", type:"word_order", sentence:"Summer is hotter than winter", correctAnswer:"Summer is hotter than winter", explanation:"hot→hotter (مضاعفة الحرف)", xp:10 },
      { id:"compar-t0-9", type:"listen_select", listenSentence:"This is the smallest room", options:["smallest","small","smaller","smally"], correctAnswer:"smallest", explanation:"الجملة: «هذه أصغر غرفة» — smallest = الأصغر", xp:11 },
      { id:"compar-t0-10", type:"picture_match", word:"big", pictureOptions:[{emoji:"🐘",label:"big"},{emoji:"🐜",label:"small"},{emoji:"🐇",label:"fast"},{emoji:"🐢",label:"slow"}], correctAnswer:"big", explanation:"الفيل كبير 🐘 = big", xp:11 },
    ],
    // MEDIUM — long adjectives more / the most
    t1: [
      { id:"compar-t1-1", type:"translate", arabic:"هذا الفيلم أكثر تشويقاً من الآخر", options:["This film is more exciting than the other","This film is exciter than the other","This film is most exciting than the other","This film is more exciting that the other"], correctAnswer:"This film is more exciting than the other", explanation:"الصفات الطويلة: more + صفة + than", xp:14 },
      { id:"compar-t1-2", type:"word_order", sentence:"English is more useful than Latin", correctAnswer:"English is more useful than Latin", explanation:"more + useful (صفة طويلة) + than", xp:13 },
      { id:"compar-t1-3", type:"translate", arabic:"هي أكثر ذكاءً من أخيها", options:["She is more intelligent than her brother","She is intelligenter than her brother","She is most intelligent than her brother","She is more intelligent then her brother"], correctAnswer:"She is more intelligent than her brother", explanation:"more intelligent + than (وليس then)", xp:14 },
      { id:"compar-t1-4", type:"listen_select", listenSentence:"This is the most expensive phone", options:["expensive","expense","expensively","expand"], correctAnswer:"expensive", explanation:"الجملة: «هذا أغلى هاتف» — the most expensive", xp:13 },
      { id:"compar-t1-5", type:"translate", arabic:"إنها أجمل مدينة زرتها", options:["It's the most beautiful city I have visited","It's the beautifulest city I have visited","It's more beautiful city I have visited","It's the most beautiful city I visit"], correctAnswer:"It's the most beautiful city I have visited", explanation:"the most + صفة طويلة للتفضيل", xp:15 },
      { id:"compar-t1-6", type:"word_order", sentence:"He drives more carefully than me", correctAnswer:"He drives more carefully than me", explanation:"more + ظرف (carefully) للمقارنة بين أفعال", xp:14 },
      { id:"compar-t1-7", type:"translate", arabic:"اليوم أكثر دفئاً من الأمس", options:["Today is warmer than yesterday","Today is more warm than yesterday","Today is warmest than yesterday","Today is warmer then yesterday"], correctAnswer:"Today is warmer than yesterday", explanation:"warm→warmer (صفة قصيرة) + than", xp:13 },
      { id:"compar-t1-8", type:"picture_match", word:"expensive", pictureOptions:[{emoji:"💎",label:"expensive"},{emoji:"🪙",label:"cheap"},{emoji:"🎁",label:"free"},{emoji:"🏷️",label:"discount"}], correctAnswer:"expensive", explanation:"الماس غالٍ 💎 = expensive", xp:13 },
      { id:"compar-t1-9", type:"word_order", sentence:"This is the most interesting book", correctAnswer:"This is the most interesting book", explanation:"the most interesting (صفة طويلة) للتفضيل", xp:14 },
      { id:"compar-t1-10", type:"listen_select", listenSentence:"She sings more beautifully than him", options:["beautifully","beautiful","beauty","beautify"], correctAnswer:"beautifully", explanation:"الجملة: «تغني بشكل أجمل» — more beautifully (ظرف)", xp:15 },
    ],
    // HARD — irregular adjectives, as ... as, traps
    t2: [
      { id:"compar-t2-1", type:"translate", arabic:"صحتي أفضل من ذي قبل", options:["My health is better than before","My health is gooder than before","My health is more good than before","My health is best than before"], correctAnswer:"My health is better than before", explanation:"good→better (صفة شاذة)", xp:17 },
      { id:"compar-t2-2", type:"translate", arabic:"الطقس أسوأ من الأمس", options:["The weather is worse than yesterday","The weather is badder than yesterday","The weather is more bad than yesterday","The weather is worst than yesterday"], correctAnswer:"The weather is worse than yesterday", explanation:"bad→worse (صفة شاذة)", xp:17 },
      { id:"compar-t2-3", type:"word_order", sentence:"She is as tall as her mother", correctAnswer:"She is as tall as her mother", explanation:"as + صفة + as للتعبير عن التساوي", xp:16 },
      { id:"compar-t2-4", type:"listen_select", listenSentence:"This is the best restaurant in town", options:["best","better","good","worst"], correctAnswer:"best", explanation:"الجملة: «أفضل مطعم» — good→best (تفضيل شاذ)", xp:16 },
      { id:"compar-t2-5", type:"translate", arabic:"هو ليس بنفس سرعتي", options:["He is not as fast as me","He is not so fast than me","He is not faster as me","He is not as fast than me"], correctAnswer:"He is not as fast as me", explanation:"not as ... as لنفي التساوي", xp:18 },
      { id:"compar-t2-6", type:"word_order", sentence:"This is the worst day ever", correctAnswer:"This is the worst day ever", explanation:"bad→worst (التفضيل الشاذ)", xp:16 },
      { id:"compar-t2-7", type:"translate", arabic:"كلما درستَ أكثر، تعلّمتَ أكثر", options:["The more you study, the more you learn","More you study, more you learn","The more you study, the most you learn","The more study you, the more learn you"], correctAnswer:"The more you study, the more you learn", explanation:"The more ..., the more ... للتناسب الطردي", xp:18 },
      { id:"compar-t2-8", type:"picture_match", word:"fast", pictureOptions:[{emoji:"🐆",label:"fast"},{emoji:"🐢",label:"slow"},{emoji:"🦒",label:"tall"},{emoji:"🐘",label:"big"}], correctAnswer:"fast", explanation:"الفهد سريع 🐆 = fast", xp:16 },
      { id:"compar-t2-9", type:"translate", arabic:"هذا الامتحان أصعب بكثير من السابق", options:["This exam is much harder than the previous one","This exam is much more hard than the previous one","This exam is many harder than the previous one","This exam is much harder then the previous one"], correctAnswer:"This exam is much harder than the previous one", explanation:"much + comparative لتأكيد فارق المقارنة", xp:18 },
      { id:"compar-t2-10", type:"listen_select", listenSentence:"He works as hard as his father", options:["hard","harder","hardest","hardly"], correctAnswer:"hard", explanation:"الجملة: «يعمل بجدّ مثل والده» — as hard as للتساوي", xp:17 },
    ],
    // HIGH — exam-level structures & nuance
    t3: [
      { id:"compar-t3-1", type:"translate", arabic:"كلما تقدّم في السن، ازداد حكمة", options:["The older he gets, the wiser he becomes","Older he gets, wiser he becomes","The more old he gets, the more wise he becomes","The older he gets, the more wise he becomes"], correctAnswer:"The older he gets, the wiser he becomes", explanation:"The + comparative ..., the + comparative للتناسب", xp:23 },
      { id:"compar-t3-2", type:"word_order", sentence:"Far fewer people came than expected", correctAnswer:"Far fewer people came than expected", explanation:"fewer (للمعدود) + far للتأكيد", xp:23 },
      { id:"compar-t3-3", type:"translate", arabic:"إنها إلى حد بعيد أكثر المرشحات تأهيلاً", options:["She is by far the most qualified candidate","She is by far the more qualified candidate","She is the by far most qualified candidate","She is far the most qualified candidate"], correctAnswer:"She is by far the most qualified candidate", explanation:"by far + superlative للتأكيد الشديد", xp:24 },
      { id:"compar-t3-4", type:"listen_select", listenSentence:"This solution is considerably more efficient", options:["efficient","efficiency","efficiently","effective"], correctAnswer:"efficient", explanation:"الجملة: «هذا الحل أكفأ بكثير» — more efficient", xp:23 },
      { id:"compar-t3-5", type:"translate", arabic:"ليس الأمر بنفس صعوبة ما يبدو عليه", options:["It's not nearly as difficult as it seems","It's not near as difficult as it seems","It's not nearly as difficult than it seems","It's not nearly so difficult than it seems"], correctAnswer:"It's not nearly as difficult as it seems", explanation:"not nearly as ... as للتقليل من شدّة الفارق", xp:24 },
      { id:"compar-t3-6", type:"word_order", sentence:"The sooner we leave the better", correctAnswer:"The sooner we leave the better", explanation:"The sooner ..., the better تركيب اصطلاحي للتناسب", xp:23 },
      { id:"compar-t3-7", type:"translate", arabic:"كان أداؤه أسوأ بكثير مما توقعنا", options:["His performance was far worse than we expected","His performance was far worst than we expected","His performance was more worse than we expected","His performance was far worse then we expected"], correctAnswer:"His performance was far worse than we expected", explanation:"far worse (مقارنة شاذة) + than", xp:24 },
      { id:"compar-t3-8", type:"picture_match", word:"winner", pictureOptions:[{emoji:"🥇",label:"winner"},{emoji:"🥈",label:"second"},{emoji:"🥉",label:"third"},{emoji:"🏅",label:"medal"}], correctAnswer:"winner", explanation:"الميدالية الذهبية للفائز الأول 🥇 = the best, the winner", xp:22 },
      { id:"compar-t3-9", type:"translate", arabic:"هذا أحد أكثر الأخطاء شيوعاً", options:["This is one of the most common mistakes","This is one of the most common mistake","This is one of the more common mistakes","This is the one of most common mistakes"], correctAnswer:"This is one of the most common mistakes", explanation:"one of the + superlative + اسم جمع", xp:24 },
      { id:"compar-t3-10", type:"listen_select", listenSentence:"Her latest novel is even more gripping", options:["gripping","grip","gripped","gripper"], correctAnswer:"gripping", explanation:"الجملة: «روايتها الأحدث أكثر تشويقاً» — even more gripping", xp:25 },
    ],
  },

  // ── Modals: Can, Could, Should, Must ──
  // Objective: can/can't (ability), could (past/polite request),
  // should (advice), must/mustn't (obligation/prohibition).
  "Modals: Can, Could, Should, Must": {
    // EASY — basic modal + bare infinitive
    t0: [
      { id:"modal-t0-1", type:"word_order", sentence:"I can speak two languages", correctAnswer:"I can speak two languages", explanation:"can + مصدر بدون to للقدرة", xp:10 },
      { id:"modal-t0-2", type:"translate", arabic:"هل يمكنك مساعدتي؟", options:["Can you help me?","Can you helping me?","Do you can help me?","Can you to help me?"], correctAnswer:"Can you help me?", explanation:"Can you + مصدر للطلب البسيط", xp:11 },
      { id:"modal-t0-3", type:"listen_select", listenSentence:"You should drink more water", options:["should","could","would","must"], correctAnswer:"should", explanation:"الجملة: «عليك أن تشرب ماءً أكثر» — should للنصيحة", xp:10 },
      { id:"modal-t0-4", type:"picture_match", word:"swim", pictureOptions:[{emoji:"🏊",label:"swim"},{emoji:"🏃",label:"run"},{emoji:"🚴",label:"cycle"},{emoji:"⛷️",label:"ski"}], correctAnswer:"swim", explanation:"I can swim 🏊 = أستطيع السباحة", xp:11 },
      { id:"modal-t0-5", type:"word_order", sentence:"She can drive a car", correctAnswer:"She can drive a car", explanation:"can + مصدر للتعبير عن القدرة", xp:10 },
      { id:"modal-t0-6", type:"translate", arabic:"يجب أن تذهب إلى الطبيب", options:["You must go to the doctor","You must to go to the doctor","You must going to the doctor","You musts go to the doctor"], correctAnswer:"You must go to the doctor", explanation:"must + مصدر بدون to للضرورة", xp:11 },
      { id:"modal-t0-7", type:"translate", arabic:"لا أستطيع رؤيتك", options:["I can't see you","I can't to see you","I don't can see you","I can't seeing you"], correctAnswer:"I can't see you", explanation:"can't + مصدر لنفي القدرة", xp:11 },
      { id:"modal-t0-8", type:"word_order", sentence:"We should help our friends", correctAnswer:"We should help our friends", explanation:"should + مصدر للنصيحة والاقتراح", xp:10 },
      { id:"modal-t0-9", type:"listen_select", listenSentence:"You must wear a seatbelt", options:["must","can","should","could"], correctAnswer:"must", explanation:"الجملة: «يجب ارتداء حزام الأمان» — must للإلزام", xp:11 },
      { id:"modal-t0-10", type:"picture_match", word:"read", pictureOptions:[{emoji:"📖",label:"read"},{emoji:"✍️",label:"write"},{emoji:"🎨",label:"paint"},{emoji:"🎵",label:"sing"}], correctAnswer:"read", explanation:"She can read 📖 = تستطيع القراءة", xp:11 },
    ],
    // MEDIUM — could, can't, polite requests, negation
    t1: [
      { id:"modal-t1-1", type:"translate", arabic:"هل يمكنني أن أفتح النافذة؟", options:["Could I open the window?","Could I to open the window?","Could I opening the window?","Do I could open the window?"], correctAnswer:"Could I open the window?", explanation:"Could I ...? طلب إذن مؤدب", xp:14 },
      { id:"modal-t1-2", type:"word_order", sentence:"You shouldn't eat too much sugar", correctAnswer:"You shouldn't eat too much sugar", explanation:"shouldn't + مصدر للنصيحة بالامتناع", xp:13 },
      { id:"modal-t1-3", type:"translate", arabic:"عندما كنتُ صغيراً، كنتُ أستطيع الجري بسرعة", options:["When I was young, I could run fast","When I was young, I can run fast","When I was young, I could to run fast","When I was young, I could running fast"], correctAnswer:"When I was young, I could run fast", explanation:"could للقدرة في الماضي", xp:14 },
      { id:"modal-t1-4", type:"listen_select", listenSentence:"You mustn't smoke here", options:["mustn't","shouldn't","couldn't","can't"], correctAnswer:"mustn't", explanation:"الجملة: «ممنوع التدخين هنا» — mustn't للمنع", xp:14 },
      { id:"modal-t1-5", type:"translate", arabic:"هل تستطيع أن تتكلم بصوت أعلى من فضلك؟", options:["Could you speak louder, please?","Could you to speak louder, please?","Can you speaking louder, please?","Could you spoke louder, please?"], correctAnswer:"Could you speak louder, please?", explanation:"Could you ...? please طلب مؤدب", xp:14 },
      { id:"modal-t1-6", type:"word_order", sentence:"She can't come to the meeting", correctAnswer:"She can't come to the meeting", explanation:"can't + مصدر لنفي الإمكانية", xp:13 },
      { id:"modal-t1-7", type:"translate", arabic:"يجب ألّا تتأخر", options:["You mustn't be late","You don't must be late","You mustn't to be late","You mustn't being late"], correctAnswer:"You mustn't be late", explanation:"mustn't + مصدر بدون to للتحذير", xp:14 },
      { id:"modal-t1-8", type:"picture_match", word:"stop", pictureOptions:[{emoji:"🛑",label:"stop"},{emoji:"✅",label:"go"},{emoji:"⚠️",label:"warning"},{emoji:"➡️",label:"forward"}], correctAnswer:"stop", explanation:"You must stop here 🛑 = يجب التوقّف", xp:13 },
      { id:"modal-t1-9", type:"word_order", sentence:"Should I call him tonight", correctAnswer:"Should I call him tonight", explanation:"Should I ...? لطلب نصيحة", xp:13 },
      { id:"modal-t1-10", type:"listen_select", listenSentence:"I couldn't sleep last night", options:["couldn't","can't","shouldn't","mustn't"], correctAnswer:"couldn't", explanation:"الجملة: «لم أستطع النوم» — couldn't للماضي المنفي", xp:15 },
    ],
    // HARD — deduction, advice about the past, must vs have to
    t2: [
      { id:"modal-t2-1", type:"translate", arabic:"لا بد أنه متعب، فقد عمل طوال الليل", options:["He must be tired, he worked all night","He should be tired, he worked all night","He can be tired, he worked all night","He must to be tired, he worked all night"], correctAnswer:"He must be tired, he worked all night", explanation:"must للاستنتاج المنطقي (لا بد)", xp:17 },
      { id:"modal-t2-2", type:"translate", arabic:"كان عليك أن تخبرني", options:["You should have told me","You should told me","You must have told me","You should have tell me"], correctAnswer:"You should have told me", explanation:"should have + p.p للنصيحة بشأن الماضي", xp:18 },
      { id:"modal-t2-3", type:"word_order", sentence:"You don't have to pay now", correctAnswer:"You don't have to pay now", explanation:"don't have to = لا ضرورة (وليس منعاً)", xp:16 },
      { id:"modal-t2-4", type:"listen_select", listenSentence:"He might be at home now", options:["might","must","should","would"], correctAnswer:"might", explanation:"الجملة: «ربما يكون في البيت» — might للاحتمال", xp:16 },
      { id:"modal-t2-5", type:"translate", arabic:"ربما تكون قد نسيت الموعد", options:["You may have forgotten the appointment","You may forgot the appointment","You may have forget the appointment","You might forgot the appointment"], correctAnswer:"You may have forgotten the appointment", explanation:"may have + p.p للاحتمال في الماضي", xp:18 },
      { id:"modal-t2-6", type:"word_order", sentence:"We must not waste water", correctAnswer:"We must not waste water", explanation:"must not + مصدر بدون to للمنع القاطع", xp:16 },
      { id:"modal-t2-7", type:"translate", arabic:"ليس عليك أن تأتي إذا كنت مشغولاً", options:["You don't have to come if you're busy","You mustn't come if you're busy","You shouldn't have to come if you're busy","You haven't to come if you're busy"], correctAnswer:"You don't have to come if you're busy", explanation:"don't have to = لا إلزام (يختلف عن mustn't = ممنوع)", xp:18 },
      { id:"modal-t2-8", type:"picture_match", word:"warning", pictureOptions:[{emoji:"⚠️",label:"warning"},{emoji:"✅",label:"safe"},{emoji:"❓",label:"question"},{emoji:"💡",label:"idea"}], correctAnswer:"warning", explanation:"You must heed the warning ⚠️ = تحذير", xp:16 },
      { id:"modal-t2-9", type:"translate", arabic:"كان بإمكانك أن تنجح لو درست", options:["You could have passed if you had studied","You could pass if you had studied","You could have pass if you had studied","You can have passed if you had studied"], correctAnswer:"You could have passed if you had studied", explanation:"could have + p.p لإمكانية لم تتحقق في الماضي", xp:18 },
      { id:"modal-t2-10", type:"listen_select", listenSentence:"You ought to apologize to her", options:["ought","should","must","could"], correctAnswer:"ought", explanation:"الجملة: «ينبغي أن تعتذر لها» — ought to للنصيحة", xp:17 },
    ],
    // HIGH — exam-level deduction & formal register
    t3: [
      { id:"modal-t3-1", type:"translate", arabic:"لا يمكن أن يكون قد غادر بهذه السرعة", options:["He can't have left so soon","He mustn't have left so soon","He couldn't to leave so soon","He can't have leave so soon"], correctAnswer:"He can't have left so soon", explanation:"can't have + p.p لاستحالة منطقية في الماضي", xp:24 },
      { id:"modal-t3-2", type:"word_order", sentence:"You needn't have worried about it", correctAnswer:"You needn't have worried about it", explanation:"needn't have + p.p لفعل لم يكن ضرورياً", xp:23 },
      { id:"modal-t3-3", type:"translate", arabic:"كان من المفترض أن يصلوا الآن", options:["They should have arrived by now","They must have arrived by now","They should arrived by now","They should have arrive by now"], correctAnswer:"They should have arrived by now", explanation:"should have + p.p لتوقّع لم يتحقق", xp:23 },
      { id:"modal-t3-4", type:"listen_select", listenSentence:"Visitors must observe the safety rules", options:["observe","obtain","obscure","oblige"], correctAnswer:"observe", explanation:"الجملة: «على الزوّار التقيّد بقواعد السلامة» — observe = يلتزم", xp:23 },
      { id:"modal-t3-5", type:"translate", arabic:"لعلّه قد أساء فهم التعليمات", options:["He might have misunderstood the instructions","He might misunderstood the instructions","He must misunderstood the instructions","He might have misunderstand the instructions"], correctAnswer:"He might have misunderstood the instructions", explanation:"might have + p.p لتخمين عن الماضي", xp:24 },
      { id:"modal-t3-6", type:"word_order", sentence:"Passengers should remain seated at all times", correctAnswer:"Passengers should remain seated at all times", explanation:"should للتعليمات المؤدبة في السياق الرسمي", xp:23 },
      { id:"modal-t3-7", type:"translate", arabic:"ما كان ينبغي لك أن تقول ذلك", options:["You shouldn't have said that","You shouldn't said that","You mustn't have said that","You shouldn't have say that"], correctAnswer:"You shouldn't have said that", explanation:"shouldn't have + p.p للوم على فعل ماضٍ", xp:24 },
      { id:"modal-t3-8", type:"picture_match", word:"helmet", pictureOptions:[{emoji:"⛑️",label:"helmet"},{emoji:"🧢",label:"cap"},{emoji:"👒",label:"hat"},{emoji:"🎩",label:"top hat"}], correctAnswer:"helmet", explanation:"You must wear a helmet ⛑️ = خوذة للسلامة", xp:22 },
      { id:"modal-t3-9", type:"translate", arabic:"هل لي أن أقترح حلاً بديلاً؟", options:["Might I suggest an alternative?","Might I to suggest an alternative?","Might I suggesting an alternative?","May I suggested an alternative?"], correctAnswer:"Might I suggest an alternative?", explanation:"Might I ...? صيغة رسمية جداً للاقتراح", xp:24 },
      { id:"modal-t3-10", type:"listen_select", listenSentence:"Candidates may not use their phones", options:["may","must","should","can"], correctAnswer:"may", explanation:"الجملة: «لا يُسمح للمرشحين باستخدام هواتفهم» — may not = منع رسمي", xp:25 },
    ],
  },

  // ── Reading: The Digital Age ──
  // Objective: technology/internet vocabulary, reading media texts,
  // expressing opinions about technology, text connectors.
  "Reading: The Digital Age": {
    // EASY — core tech vocabulary
    t0: [
      { id:"digital-t0-1", type:"word_order", sentence:"I use the internet every day", correctAnswer:"I use the internet every day", explanation:"the internet مفردة أساسية في العصر الرقمي", xp:10 },
      { id:"digital-t0-2", type:"translate", arabic:"أحتاج إلى كلمة مرور جديدة", options:["I need a new password","I need a new passport","I need a new passenger","I need a new pass"], correctAnswer:"I need a new password", explanation:"password = كلمة المرور", xp:11 },
      { id:"digital-t0-3", type:"listen_select", listenSentence:"Please download the new app", options:["download","upload","reload","unload"], correctAnswer:"download", explanation:"الجملة: «حمّل التطبيق الجديد» — download = تنزيل", xp:10 },
      { id:"digital-t0-4", type:"picture_match", word:"laptop", pictureOptions:[{emoji:"💻",label:"laptop"},{emoji:"📱",label:"phone"},{emoji:"🖥️",label:"desktop"},{emoji:"⌨️",label:"keyboard"}], correctAnswer:"laptop", explanation:"💻 = laptop (حاسوب محمول)", xp:11 },
      { id:"digital-t0-5", type:"word_order", sentence:"She has a fast internet connection", correctAnswer:"She has a fast internet connection", explanation:"internet connection = اتصال بالإنترنت", xp:10 },
      { id:"digital-t0-6", type:"translate", arabic:"أرسلتُ لك بريداً إلكترونياً", options:["I sent you an email","I sent you a mail","I sent you an e-letter","I send you an email"], correctAnswer:"I sent you an email", explanation:"email = بريد إلكتروني", xp:11 },
      { id:"digital-t0-7", type:"translate", arabic:"هاتفي الذكي جديد", options:["My smartphone is new","My smart phone are new","My smartphone is news","My smartphone new is"], correctAnswer:"My smartphone is new", explanation:"smartphone = هاتف ذكي", xp:11 },
      { id:"digital-t0-8", type:"word_order", sentence:"We share photos online", correctAnswer:"We share photos online", explanation:"online = عبر الإنترنت", xp:10 },
      { id:"digital-t0-9", type:"listen_select", listenSentence:"Click on the link below", options:["link","line","list","lock"], correctAnswer:"link", explanation:"الجملة: «انقر على الرابط أدناه» — link = رابط", xp:11 },
      { id:"digital-t0-10", type:"picture_match", word:"wifi", pictureOptions:[{emoji:"📶",label:"wifi"},{emoji:"🔋",label:"battery"},{emoji:"🔌",label:"plug"},{emoji:"💾",label:"disk"}], correctAnswer:"wifi", explanation:"📶 = wifi (اتصال لاسلكي)", xp:11 },
    ],
    // MEDIUM — longer sentences, expressing opinions
    t1: [
      { id:"digital-t1-1", type:"translate", arabic:"تجعل التكنولوجيا حياتنا أسهل", options:["Technology makes our lives easier","Technology make our lives easier","Technology makes our lives easy","Technology makes our life's easier"], correctAnswer:"Technology makes our lives easier", explanation:"makes (مفرد) + lives (جمع life)", xp:14 },
      { id:"digital-t1-2", type:"word_order", sentence:"Many people shop online nowadays", correctAnswer:"Many people shop online nowadays", explanation:"shop online = التسوّق عبر الإنترنت", xp:13 },
      { id:"digital-t1-3", type:"translate", arabic:"أعتقد أن وسائل التواصل الاجتماعي مفيدة", options:["I think social media is useful","I think social media are useful","I think social media is use","I thinking social media is useful"], correctAnswer:"I think social media is useful", explanation:"social media تُعامل كمفرد عادةً (is)", xp:14 },
      { id:"digital-t1-4", type:"listen_select", listenSentence:"The website crashed this morning", options:["crashed","clicked","closed","crossed"], correctAnswer:"crashed", explanation:"الجملة: «تعطّل الموقع صباحاً» — crashed = تعطّل", xp:14 },
      { id:"digital-t1-5", type:"translate", arabic:"يقضي الأطفال وقتاً طويلاً على الشاشات", options:["Children spend too much time on screens","Children spend too many time on screens","Children spends too much time on screens","Children spend too much times on screens"], correctAnswer:"Children spend too much time on screens", explanation:"too much + time (اسم غير معدود)", xp:15 },
      { id:"digital-t1-6", type:"word_order", sentence:"He updated the software yesterday", correctAnswer:"He updated the software yesterday", explanation:"update the software = تحديث البرنامج", xp:13 },
      { id:"digital-t1-7", type:"translate", arabic:"في رأيي، الإنترنت غيّر العالم", options:["In my opinion, the internet has changed the world","In my opinion, the internet has change the world","On my opinion, the internet has changed the world","In my opinion, the internet changed has the world"], correctAnswer:"In my opinion, the internet has changed the world", explanation:"In my opinion للتعبير عن الرأي", xp:15 },
      { id:"digital-t1-8", type:"picture_match", word:"robot", pictureOptions:[{emoji:"🤖",label:"robot"},{emoji:"👾",label:"alien"},{emoji:"🎮",label:"game"},{emoji:"🧠",label:"brain"}], correctAnswer:"robot", explanation:"🤖 = robot (روبوت)", xp:13 },
      { id:"digital-t1-9", type:"word_order", sentence:"Social media connects people worldwide", correctAnswer:"Social media connects people worldwide", explanation:"connects (مفرد) لأن social media مفردة", xp:14 },
      { id:"digital-t1-10", type:"listen_select", listenSentence:"You should protect your privacy online", options:["privacy","public","policy","priority"], correctAnswer:"privacy", explanation:"الجملة: «احمِ خصوصيتك» — privacy = الخصوصية", xp:15 },
    ],
    // HARD — text connectors, balanced opinions
    t2: [
      { id:"digital-t2-1", type:"translate", arabic:"التكنولوجيا مفيدة؛ ومع ذلك، يمكن أن تسبب الإدمان", options:["Technology is useful; however, it can be addictive","Technology is useful; however it can addictive","Technology is useful; however, it can addict","Technology is useful, however it can be addict"], correctAnswer:"Technology is useful; however, it can be addictive", explanation:"however للتناقض، وتتبعها فاصلة", xp:18 },
      { id:"digital-t2-2", type:"word_order", sentence:"Furthermore the internet saves us time", correctAnswer:"Furthermore the internet saves us time", explanation:"furthermore أداة ربط للإضافة (علاوة على ذلك)", xp:16 },
      { id:"digital-t2-3", type:"translate", arabic:"على النقيض من ذلك، يفضّل البعض الكتب الورقية", options:["In contrast, some people prefer paper books","In contrast, some people prefers paper books","On contrast, some people prefer paper books","In contrast some people preferring paper books"], correctAnswer:"In contrast, some people prefer paper books", explanation:"In contrast للمقارنة المتضادة", xp:17 },
      { id:"digital-t2-4", type:"listen_select", listenSentence:"Cybersecurity has become essential today", options:["essential","essence","especially","essay"], correctAnswer:"essential", explanation:"الجملة: «أصبح الأمن السيبراني ضرورياً» — essential = أساسي", xp:17 },
      { id:"digital-t2-5", type:"translate", arabic:"علاوة على ذلك، يتيح العمل عن بُعد مرونة أكبر", options:["Furthermore, remote work allows more flexibility","Furthermore, remote work allow more flexibility","Furthermore remote work allows more flexible","However, remote work allows more flexibility"], correctAnswer:"Furthermore, remote work allows more flexibility", explanation:"Furthermore للإضافة + allows (مفرد)", xp:18 },
      { id:"digital-t2-6", type:"word_order", sentence:"Despite its benefits technology has drawbacks", correctAnswer:"Despite its benefits technology has drawbacks", explanation:"Despite + اسم للتعبير عن التناقض", xp:16 },
      { id:"digital-t2-7", type:"translate", arabic:"أصبحت المعلومات المضللة مشكلة خطيرة", options:["Misinformation has become a serious problem","Misinformation has became a serious problem","Misinformation have become a serious problem","Misinformation has become a series problem"], correctAnswer:"Misinformation has become a serious problem", explanation:"misinformation = معلومات مضلّلة (مفرد)", xp:17 },
      { id:"digital-t2-8", type:"picture_match", word:"cloud", pictureOptions:[{emoji:"☁️",label:"cloud"},{emoji:"💾",label:"disk"},{emoji:"📁",label:"folder"},{emoji:"🔐",label:"lock"}], correctAnswer:"cloud", explanation:"cloud storage ☁️ = التخزين السحابي", xp:16 },
      { id:"digital-t2-9", type:"translate", arabic:"بينما يربطنا الإنترنت، فإنه قد يعزلنا أيضاً", options:["While the internet connects us, it may also isolate us","While the internet connect us, it may also isolate us","While the internet connects us, it may also isolates us","Whereas the internet connects us, it may also isolate it"], correctAnswer:"While the internet connects us, it may also isolate us", explanation:"While للتباين داخل الجملة", xp:18 },
      { id:"digital-t2-10", type:"listen_select", listenSentence:"Algorithms influence what we see online", options:["influence","influenza","influencer","inform"], correctAnswer:"influence", explanation:"الجملة: «تؤثّر الخوارزميات فيما نراه» — influence = يؤثّر", xp:17 },
    ],
    // HIGH — exam-level abstract reading vocabulary
    t3: [
      { id:"digital-t3-1", type:"translate", arabic:"أحدثت الثورة الرقمية تحولاً في طريقة تواصلنا", options:["The digital revolution has transformed the way we communicate","The digital revolution has transform the way we communicate","The digital revolution transformed has the way we communicate","The digital revolution has transformed the way we communicating"], correctAnswer:"The digital revolution has transformed the way we communicate", explanation:"the way we + مضارع بسيط (communicate)", xp:24 },
      { id:"digital-t3-2", type:"word_order", sentence:"Artificial intelligence is reshaping entire industries", correctAnswer:"Artificial intelligence is reshaping entire industries", explanation:"is reshaping = يعيد تشكيل (تحوّل جارٍ)", xp:23 },
      { id:"digital-t3-3", type:"translate", arabic:"على الرغم من سهولته، يثير الذكاء الاصطناعي مخاوف أخلاقية", options:["Despite its convenience, AI raises ethical concerns","Despite its convenience, AI raise ethical concerns","Despite of its convenience, AI raises ethical concerns","Despite its convenience, AI raises ethic concerns"], correctAnswer:"Despite its convenience, AI raises ethical concerns", explanation:"Despite + اسم (بدون of) + raises (مفرد)", xp:24 },
      { id:"digital-t3-4", type:"listen_select", listenSentence:"Digital literacy is increasingly indispensable", options:["indispensable","independent","indispensible","indisposed"], correctAnswer:"indispensable", explanation:"الجملة: «المعرفة الرقمية لا غنى عنها» — indispensable = لا غنى عنه", xp:23 },
      { id:"digital-t3-5", type:"translate", arabic:"نتيجة لذلك، تتلاشى الحدود بين العمل والمنزل", options:["Consequently, the boundaries between work and home are blurring","Consequently, the boundaries between work and home is blurring","As consequence, the boundaries between work and home are blurring","Consequently, the boundaries among work and home are blurring"], correctAnswer:"Consequently, the boundaries between work and home are blurring", explanation:"Consequently للنتيجة + between (لاثنين)", xp:24 },
      { id:"digital-t3-6", type:"word_order", sentence:"Excessive screen time can impair concentration", correctAnswer:"Excessive screen time can impair concentration", explanation:"impair = يُضعف (مفردة أكاديمية)", xp:23 },
      { id:"digital-t3-7", type:"translate", arabic:"يجادل النقّاد بأن الخصوصية أصبحت سلعة", options:["Critics argue that privacy has become a commodity","Critics argues that privacy has become a commodity","Critics argue that privacy has became a commodity","Critics argue that privacy become a commodity"], correctAnswer:"Critics argue that privacy has become a commodity", explanation:"Critics (جمع) argue + has become", xp:24 },
      { id:"digital-t3-8", type:"picture_match", word:"satellite", pictureOptions:[{emoji:"🛰️",label:"satellite"},{emoji:"🚀",label:"rocket"},{emoji:"📡",label:"antenna"},{emoji:"🌐",label:"globe"}], correctAnswer:"satellite", explanation:"🛰️ = satellite (قمر صناعي للاتصالات)", xp:22 },
      { id:"digital-t3-9", type:"translate", arabic:"بعبارة أخرى، تأتي التكنولوجيا بفوائد ومخاطر على حد سواء", options:["In other words, technology brings both benefits and risks","In other words, technology bring both benefits and risks","In other word, technology brings both benefits and risks","In the other words, technology brings both benefits and risks"], correctAnswer:"In other words, technology brings both benefits and risks", explanation:"In other words لإعادة الصياغة + both ... and", xp:24 },
      { id:"digital-t3-10", type:"listen_select", listenSentence:"Automation threatens to displace many workers", options:["displace","display","dispatch","dispose"], correctAnswer:"displace", explanation:"الجملة: «تهدّد الأتمتة بإزاحة العمال» — displace = يُزيح", xp:25 },
    ],
  },

  // ── Everyday Phrasal Verbs ──
  // Objective: concept of phrasal verbs, common ones (wake up, give up,
  // look after, turn on/off), separable vs inseparable, natural use.
  "Everyday Phrasal Verbs": {
    // EASY — most common phrasal verbs
    t0: [
      { id:"phrasal-t0-1", type:"word_order", sentence:"I wake up at seven", correctAnswer:"I wake up at seven", explanation:"wake up = يستيقظ (فعل مركب)", xp:10 },
      { id:"phrasal-t0-2", type:"translate", arabic:"أطفئ الأنوار من فضلك", options:["Turn off the lights please","Turn of the lights please","Turn off the light please","Turns off the lights please"], correctAnswer:"Turn off the lights please", explanation:"turn off = يُطفئ", xp:11 },
      { id:"phrasal-t0-3", type:"listen_select", listenSentence:"Please turn on the light", options:["on","off","up","out"], correctAnswer:"on", explanation:"الجملة: «أضئ النور» — turn on = يُشغّل/يُضيء", xp:10 },
      { id:"phrasal-t0-4", type:"picture_match", word:"wake up", pictureOptions:[{emoji:"⏰",label:"wake up"},{emoji:"😴",label:"sleep"},{emoji:"🍽️",label:"eat"},{emoji:"🚿",label:"shower"}], correctAnswer:"wake up", explanation:"⏰ = wake up (يستيقظ)", xp:11 },
      { id:"phrasal-t0-5", type:"word_order", sentence:"She looks after her baby", correctAnswer:"She looks after her baby", explanation:"look after = يعتني بـ", xp:10 },
      { id:"phrasal-t0-6", type:"translate", arabic:"لا تستسلم أبداً", options:["Never give up","Never give in","Never gives up","Never give up never"], correctAnswer:"Never give up", explanation:"give up = يستسلم", xp:11 },
      { id:"phrasal-t0-7", type:"translate", arabic:"ارتدِ معطفك", options:["Put on your coat","Put of your coat","Put on your coats","Puts on your coat"], correctAnswer:"Put on your coat", explanation:"put on = يرتدي", xp:11 },
      { id:"phrasal-t0-8", type:"word_order", sentence:"He gets up early every day", correctAnswer:"He gets up early every day", explanation:"get up = ينهض من الفراش", xp:10 },
      { id:"phrasal-t0-9", type:"listen_select", listenSentence:"I have to get up early", options:["up","off","on","out"], correctAnswer:"up", explanation:"الجملة: «عليّ أن أستيقظ مبكراً» — get up", xp:11 },
      { id:"phrasal-t0-10", type:"picture_match", word:"sit down", pictureOptions:[{emoji:"🪑",label:"sit down"},{emoji:"🧍",label:"stand up"},{emoji:"🚶",label:"walk"},{emoji:"🏃",label:"run"}], correctAnswer:"sit down", explanation:"🪑 = sit down (يجلس)", xp:11 },
    ],
    // MEDIUM — meaning changes, more phrasals
    t1: [
      { id:"phrasal-t1-1", type:"translate", arabic:"هل يمكنك الاعتناء بكلبي؟", options:["Can you look after my dog?","Can you look at my dog?","Can you look for my dog?","Can you look up my dog?"], correctAnswer:"Can you look after my dog?", explanation:"look after = يعتني بـ (يختلف عن look at/for/up)", xp:14 },
      { id:"phrasal-t1-2", type:"word_order", sentence:"I am looking for my keys", correctAnswer:"I am looking for my keys", explanation:"look for = يبحث عن", xp:13 },
      { id:"phrasal-t1-3", type:"translate", arabic:"أقلعتُ عن التدخين العام الماضي", options:["I gave up smoking last year","I gave in smoking last year","I gave up to smoke last year","I give up smoking last year"], correctAnswer:"I gave up smoking last year", explanation:"give up + v-ing = يقلع عن", xp:14 },
      { id:"phrasal-t1-4", type:"listen_select", listenSentence:"We ran out of milk", options:["out","off","up","in"], correctAnswer:"out", explanation:"الجملة: «نفد الحليب» — run out of = ينفد", xp:14 },
      { id:"phrasal-t1-5", type:"translate", arabic:"أطفئ التلفاز قبل النوم", options:["Turn off the TV before bed","Turn down the TV before bed","Turn off the TV before bed time","Turn out the TV before bed"], correctAnswer:"Turn off the TV before bed", explanation:"turn off = يُطفئ (turn down = يُخفّض الصوت)", xp:14 },
      { id:"phrasal-t1-6", type:"word_order", sentence:"Please fill in this form", correctAnswer:"Please fill in this form", explanation:"fill in = يملأ (نموذجاً)", xp:13 },
      { id:"phrasal-t1-7", type:"translate", arabic:"علينا أن نتعامل مع هذه المشكلة", options:["We have to deal with this problem","We have to deal in this problem","We have to deal on this problem","We have to deal at this problem"], correctAnswer:"We have to deal with this problem", explanation:"deal with = يتعامل مع", xp:15 },
      { id:"phrasal-t1-8", type:"picture_match", word:"phone", pictureOptions:[{emoji:"📞",label:"phone"},{emoji:"📺",label:"television"},{emoji:"💡",label:"light"},{emoji:"🔔",label:"bell"}], correctAnswer:"phone", explanation:"pick up the phone 📞 = يرفع السماعة", xp:13 },
      { id:"phrasal-t1-9", type:"word_order", sentence:"She is looking forward to the trip", correctAnswer:"She is looking forward to the trip", explanation:"look forward to = يتطلّع إلى", xp:15 },
      { id:"phrasal-t1-10", type:"listen_select", listenSentence:"Don't give up so easily", options:["up","in","out","off"], correctAnswer:"up", explanation:"الجملة: «لا تستسلم بسهولة» — give up = يستسلم", xp:14 },
    ],
    // HARD — separable vs inseparable, traps
    t2: [
      { id:"phrasal-t2-1", type:"translate", arabic:"أطفئه", options:["Turn it off","Turn off it","Turn it of","Off turn it"], correctAnswer:"Turn it off", explanation:"مع الضمير يُفصل الفعل: turn it off (لا turn off it)", xp:18 },
      { id:"phrasal-t2-2", type:"translate", arabic:"سأبحث عن الكلمة في القاموس", options:["I'll look it up in the dictionary","I'll look up it in the dictionary","I'll look it for in the dictionary","I'll look up in the dictionary it"], correctAnswer:"I'll look it up in the dictionary", explanation:"look up قابل للفصل: look it up مع الضمير", xp:18 },
      { id:"phrasal-t2-3", type:"word_order", sentence:"We came across an old photo", correctAnswer:"We came across an old photo", explanation:"come across = يصادف (غير قابل للفصل)", xp:16 },
      { id:"phrasal-t2-4", type:"listen_select", listenSentence:"The meeting was called off", options:["called","calmed","carried","caused"], correctAnswer:"called", explanation:"الجملة: «أُلغي الاجتماع» — call off = يُلغي", xp:17 },
      { id:"phrasal-t2-5", type:"translate", arabic:"لا أطيق صبراً على ضوضائهم", options:["I can't put up with their noise","I can't put up their noise","I can't put with up their noise","I can't put off their noise"], correctAnswer:"I can't put up with their noise", explanation:"put up with = يتحمّل/يطيق", xp:18 },
      { id:"phrasal-t2-6", type:"word_order", sentence:"She takes after her mother", correctAnswer:"She takes after her mother", explanation:"take after = يُشبه (في الطباع/الملامح)", xp:16 },
      { id:"phrasal-t2-7", type:"translate", arabic:"تعطّلت السيارة في الطريق", options:["The car broke down on the way","The car broke up on the way","The car broke off on the way","The car broke out on the way"], correctAnswer:"The car broke down on the way", explanation:"break down = يتعطّل", xp:17 },
      { id:"phrasal-t2-8", type:"picture_match", word:"dictionary", pictureOptions:[{emoji:"📖",label:"dictionary"},{emoji:"📰",label:"newspaper"},{emoji:"📓",label:"notebook"},{emoji:"🗒️",label:"notepad"}], correctAnswer:"dictionary", explanation:"look it up in the dictionary 📖 = القاموس", xp:16 },
      { id:"phrasal-t2-9", type:"translate", arabic:"لقد تعافيتُ أخيراً من نزلة البرد", options:["I have finally gotten over my cold","I have finally got over with my cold","I have finally get over my cold","I have finally gotten off my cold"], correctAnswer:"I have finally gotten over my cold", explanation:"get over = يتعافى من", xp:18 },
      { id:"phrasal-t2-10", type:"listen_select", listenSentence:"He grew up in a small village", options:["grew","grow","grown","growing"], correctAnswer:"grew", explanation:"الجملة: «نشأ في قرية صغيرة» — grow up = ينشأ", xp:17 },
    ],
    // HIGH — idiomatic, less common phrasal verbs
    t3: [
      { id:"phrasal-t3-1", type:"translate", arabic:"علينا أن نبتكر خطة بديلة", options:["We need to come up with a backup plan","We need to come up a backup plan","We need to come up for a backup plan","We need to come with up a backup plan"], correctAnswer:"We need to come up with a backup plan", explanation:"come up with = يبتكر/يأتي بفكرة", xp:24 },
      { id:"phrasal-t3-2", type:"word_order", sentence:"The negotiations eventually fell through", correctAnswer:"The negotiations eventually fell through", explanation:"fall through = يفشل/ينهار (عن خطة)", xp:23 },
      { id:"phrasal-t3-3", type:"translate", arabic:"لا تتراجع عن وعدك", options:["Don't back out of your promise","Don't back of your promise","Don't back out your promise","Don't back down your promise"], correctAnswer:"Don't back out of your promise", explanation:"back out of = يتراجع عن (التزام)", xp:24 },
      { id:"phrasal-t3-4", type:"listen_select", listenSentence:"The company is laying off staff", options:["laying","lying","leaving","letting"], correctAnswer:"laying", explanation:"الجملة: «تُسرّح الشركة موظفين» — lay off = يُسرّح", xp:23 },
      { id:"phrasal-t3-5", type:"translate", arabic:"علينا أن نقتصد في الإنفاق", options:["We must cut down on spending","We must cut down spending","We must cut on spending","We must cut off on spending"], correctAnswer:"We must cut down on spending", explanation:"cut down on = يقلّل من", xp:24 },
      { id:"phrasal-t3-6", type:"word_order", sentence:"I won't put up with this behaviour", correctAnswer:"I won't put up with this behaviour", explanation:"put up with = يتحمّل (فعل من ثلاث كلمات)", xp:23 },
      { id:"phrasal-t3-7", type:"translate", arabic:"اتضح أن الشائعة كانت كاذبة", options:["The rumour turned out to be false","The rumour turned out be false","The rumour turned out being false","The rumour turned off to be false"], correctAnswer:"The rumour turned out to be false", explanation:"turn out to be = يتبيّن أنه", xp:24 },
      { id:"phrasal-t3-8", type:"picture_match", word:"takeoff", pictureOptions:[{emoji:"🛫",label:"takeoff"},{emoji:"🛬",label:"landing"},{emoji:"🚕",label:"taxi"},{emoji:"🅿️",label:"parking"}], correctAnswer:"takeoff", explanation:"the plane took off 🛫 — take off = يُقلع", xp:22 },
      { id:"phrasal-t3-9", type:"translate", arabic:"ينبغي ألّا نؤجّل القرار", options:["We shouldn't put off the decision","We shouldn't put away the decision","We shouldn't put down the decision","We shouldn't put out the decision"], correctAnswer:"We shouldn't put off the decision", explanation:"put off = يؤجّل", xp:24 },
      { id:"phrasal-t3-10", type:"listen_select", listenSentence:"Sales have picked up recently", options:["picked","packed","peaked","parked"], correctAnswer:"picked", explanation:"الجملة: «انتعشت المبيعات مؤخراً» — pick up = يتحسّن/ينتعش", xp:25 },
    ],
  },
};
