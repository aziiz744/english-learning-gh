import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// B2 – UPPER INTERMEDIATE
// (Authored by content pass — see types.ts for the authoring rules.)
// ══════════════════════════════════════════════════════════════

export const b2Banks: Record<string, TieredBank> = {
  // ── Passive Voice ──
  // Objective: turn active → passive, passive across tenses
  // (was built, is made, has been sold), when/why we use it, dropping the agent (by...).
  "Passive Voice": {
    // EASY — present/past passive, recognition
    t0: [
      { id:"passive-t0-1", type:"word_order", sentence:"The car is washed every day", correctAnswer:"The car is washed every day", explanation:"المبني للمجهول: is + التصريف الثالث (washed)", xp:10 },
      { id:"passive-t0-2", type:"translate", arabic:"تُصنع السيارات في اليابان", options:["Cars are made in Japan","Cars are make in Japan","Cars is made in Japan","Cars are made by Japan"], correctAnswer:"Cars are made in Japan", explanation:"are + made للجمع في المبني للمجهول", xp:10 },
      { id:"passive-t0-3", type:"listen_select", listenSentence:"The window was broken yesterday", options:["broken","broke","break","breaks"], correctAnswer:"broken", explanation:"الجملة: «كُسرت النافذة أمس» — was + broken", xp:11 },
      { id:"passive-t0-4", type:"picture_match", word:"built", pictureOptions:[{emoji:"🏗️",label:"built"},{emoji:"🏠",label:"house"},{emoji:"🔨",label:"hammer"},{emoji:"🧱",label:"brick"}], correctAnswer:"built", explanation:"The house was built 🏗️ — built التصريف الثالث لـ build", xp:10 },
      { id:"passive-t0-5", type:"word_order", sentence:"English is spoken here", correctAnswer:"English is spoken here", explanation:"is spoken — المبني للمجهول للمضارع البسيط", xp:10 },
      { id:"passive-t0-6", type:"translate", arabic:"كُتب الكتاب عام 2010", options:["The book was written in 2010","The book was wrote in 2010","The book is written in 2010","The book was write in 2010"], correctAnswer:"The book was written in 2010", explanation:"was + written للماضي المجهول", xp:11 },
      { id:"passive-t0-7", type:"word_order", sentence:"The room is cleaned daily", correctAnswer:"The room is cleaned daily", explanation:"is cleaned — الفعل يقع على الغرفة", xp:11 },
      { id:"passive-t0-8", type:"translate", arabic:"تُلعب كرة القدم في كل مكان", options:["Football is played everywhere","Football is play everywhere","Football are played everywhere","Football is playing everywhere"], correctAnswer:"Football is played everywhere", explanation:"is + played للمفرد", xp:11 },
      { id:"passive-t0-9", type:"listen_select", listenSentence:"The cake was eaten quickly", options:["eaten","ate","eat","eating"], correctAnswer:"eaten", explanation:"الجملة: «أُكلت الكعكة بسرعة» — was + eaten", xp:11 },
      { id:"passive-t0-10", type:"picture_match", word:"painted", pictureOptions:[{emoji:"🎨",label:"painted"},{emoji:"🖌️",label:"brush"},{emoji:"🖼️",label:"picture"},{emoji:"✏️",label:"pencil"}], correctAnswer:"painted", explanation:"The wall was painted 🎨 — painted = طُليَ", xp:12 },
    ],
    // MEDIUM — questions, negation, by-agent, present perfect passive
    t1: [
      { id:"passive-t1-1", type:"translate", arabic:"هل بُنِي هذا الجسر عام 1990؟", options:["Was this bridge built in 1990?","Was this bridge build in 1990?","Did this bridge built in 1990?","Is this bridge built in 1990?"], correctAnswer:"Was this bridge built in 1990?", explanation:"سؤال المجهول: Was + الفاعل + التصريف الثالث", xp:13 },
      { id:"passive-t1-2", type:"word_order", sentence:"The letter was not sent yesterday", correctAnswer:"The letter was not sent yesterday", explanation:"النفي: was + not + sent", xp:13 },
      { id:"passive-t1-3", type:"translate", arabic:"لم تُنظَّف الغرفة بعد", options:["The room has not been cleaned yet","The room has not cleaned yet","The room is not been cleaned yet","The room not has been cleaned yet"], correctAnswer:"The room has not been cleaned yet", explanation:"المضارع التام المجهول: has been + cleaned", xp:14 },
      { id:"passive-t1-4", type:"listen_select", listenSentence:"The project was finished on time", options:["finished","finish","finishing","finishes"], correctAnswer:"finished", explanation:"الجملة: «أُنجز المشروع في الوقت المحدد» — was finished", xp:13 },
      { id:"passive-t1-5", type:"word_order", sentence:"These houses were built by my grandfather", correctAnswer:"These houses were built by my grandfather", explanation:"by + الفاعل لتحديد من قام بالفعل", xp:14 },
      { id:"passive-t1-6", type:"translate", arabic:"تُقدَّم الوجبات في الساعة الثامنة", options:["Meals are served at eight","Meals are serve at eight","Meals is served at eight","Meals are serving at eight"], correctAnswer:"Meals are served at eight", explanation:"are + served للجمع", xp:13 },
      { id:"passive-t1-7", type:"translate", arabic:"هل تُرسل الرسائل كل يوم؟", options:["Are the letters sent every day?","Is the letters sent every day?","Are the letters send every day?","Do the letters sent every day?"], correctAnswer:"Are the letters sent every day?", explanation:"Are + الجمع + التصريف الثالث", xp:14 },
      { id:"passive-t1-8", type:"picture_match", word:"delivered", pictureOptions:[{emoji:"📦",label:"delivered"},{emoji:"📮",label:"mailbox"},{emoji:"🛒",label:"cart"},{emoji:"🏪",label:"store"}], correctAnswer:"delivered", explanation:"The parcel was delivered 📦 — delivered = سُلِّم", xp:13 },
      { id:"passive-t1-9", type:"word_order", sentence:"The bill has been paid already", correctAnswer:"The bill has been paid already", explanation:"has been + paid — المضارع التام المجهول", xp:15 },
      { id:"passive-t1-10", type:"listen_select", listenSentence:"The car has been repaired", options:["repaired","repair","repairs","repairing"], correctAnswer:"repaired", explanation:"الجملة: «أُصلحت السيارة» — has been repaired", xp:14 },
    ],
    // HARD — modals/continuous passive, mixed tenses, trap distractors
    t2: [
      { id:"passive-t2-1", type:"translate", arabic:"يجب إنهاء العمل قبل الجمعة", options:["The work must be finished before Friday","The work must finished before Friday","The work must be finish before Friday","The work must being finished before Friday"], correctAnswer:"The work must be finished before Friday", explanation:"modal + be + التصريف الثالث", xp:16 },
      { id:"passive-t2-2", type:"word_order", sentence:"The new bridge is being built now", correctAnswer:"The new bridge is being built now", explanation:"المضارع المستمر المجهول: is being + built", xp:17 },
      { id:"passive-t2-3", type:"translate", arabic:"كان يُجرى الفحص عندما وصلنا", options:["The test was being conducted when we arrived","The test was conducted being when we arrived","The test is being conducted when we arrived","The test was being conduct when we arrived"], correctAnswer:"The test was being conducted when we arrived", explanation:"الماضي المستمر المجهول: was being + conducted", xp:18 },
      { id:"passive-t2-4", type:"listen_select", listenSentence:"The decision will be announced tomorrow", options:["announced","announce","announces","announcing"], correctAnswer:"announced", explanation:"الجملة: «سيُعلَن القرار غداً» — will be announced", xp:16 },
      { id:"passive-t2-5", type:"word_order", sentence:"The thief was arrested last night", correctAnswer:"The thief was arrested last night", explanation:"was + arrested — الماضي المجهول", xp:16 },
      { id:"passive-t2-6", type:"translate", arabic:"يمكن حل هذه المشكلة بسهولة", options:["This problem can be solved easily","This problem can solved easily","This problem can be solve easily","This problem can being solved easily"], correctAnswer:"This problem can be solved easily", explanation:"can + be + solved", xp:17 },
      { id:"passive-t2-7", type:"translate", arabic:"سيُفتتح المتحف الأسبوع القادم", options:["The museum will be opened next week","The museum will opened next week","The museum will be open next week","The museum is be opened next week"], correctAnswer:"The museum will be opened next week", explanation:"will be + opened للمستقبل المجهول", xp:17 },
      { id:"passive-t2-8", type:"picture_match", word:"arrested", pictureOptions:[{emoji:"🚔",label:"arrested"},{emoji:"🏃",label:"escaped"},{emoji:"⚖️",label:"trial"},{emoji:"🔒",label:"prison"}], correctAnswer:"arrested", explanation:"The thief was arrested 🚔 — arrested = اعتُقل", xp:16 },
      { id:"passive-t2-9", type:"word_order", sentence:"The documents have been reviewed carefully", correctAnswer:"The documents have been reviewed carefully", explanation:"have been + reviewed — المضارع التام المجهول", xp:17 },
      { id:"passive-t2-10", type:"listen_select", listenSentence:"The house is being painted this week", options:["painted","paint","paints","painting"], correctAnswer:"painted", explanation:"الجملة: «يُطلى المنزل هذا الأسبوع» — is being painted", xp:18 },
    ],
    // HIGH — passive with reporting verbs, perfect modals, exam-level nuance
    t3: [
      { id:"passive-t3-1", type:"translate", arabic:"يُقال إن الشركة تخسر المال", options:["The company is said to be losing money","The company is said to losing money","The company said to be losing money","The company is say to be losing money"], correctAnswer:"The company is said to be losing money", explanation:"is said to + مصدر — صيغة النقل المجهولة", xp:22 },
      { id:"passive-t3-2", type:"word_order", sentence:"The contract should have been signed earlier", correctAnswer:"The contract should have been signed earlier", explanation:"should have been + signed — مجهول الماضي مع modal", xp:23 },
      { id:"passive-t3-3", type:"translate", arabic:"يُعتقد أن اللص هرب عبر النافذة", options:["The thief is believed to have escaped through the window","The thief is believed to escape through the window","The thief believed to have escaped through the window","The thief is belief to have escaped through the window"], correctAnswer:"The thief is believed to have escaped through the window", explanation:"is believed to have + p.p للحدث الماضي", xp:24 },
      { id:"passive-t3-4", type:"listen_select", listenSentence:"The agreement was being negotiated for weeks", options:["negotiated","negotiate","negotiates","negotiating"], correctAnswer:"negotiated", explanation:"الجملة: «كان الاتفاق قيد التفاوض لأسابيع» — was being negotiated", xp:23 },
      { id:"passive-t3-5", type:"word_order", sentence:"Nothing can be done about it now", correctAnswer:"Nothing can be done about it now", explanation:"can be done — مجهول مع can للتعبير عن الاستحالة", xp:22 },
      { id:"passive-t3-6", type:"translate", arabic:"كان من المفترض أن يُسلَّم المشروع أمس", options:["The project was supposed to be delivered yesterday","The project was supposed to delivered yesterday","The project was suppose to be delivered yesterday","The project was supposed be delivered yesterday"], correctAnswer:"The project was supposed to be delivered yesterday", explanation:"was supposed to be + p.p", xp:24 },
      { id:"passive-t3-7", type:"translate", arabic:"يُزعم أن الوزير قبل رشوة", options:["The minister is alleged to have accepted a bribe","The minister is alleged to accept a bribe","The minister alleged to have accepted a bribe","The minister is allege to have accepted a bribe"], correctAnswer:"The minister is alleged to have accepted a bribe", explanation:"is alleged to have + p.p — صيغة الاتهام المجهولة", xp:24 },
      { id:"passive-t3-8", type:"picture_match", word:"signed", pictureOptions:[{emoji:"✍️",label:"signed"},{emoji:"📝",label:"form"},{emoji:"📄",label:"document"},{emoji:"🖊️",label:"pen"}], correctAnswer:"signed", explanation:"The contract was signed ✍️ — signed = وُقِّع", xp:22 },
      { id:"passive-t3-9", type:"word_order", sentence:"By the time we arrived the work had been completed", correctAnswer:"By the time we arrived the work had been completed", explanation:"had been + completed — الماضي التام المجهول", xp:24 },
      { id:"passive-t3-10", type:"listen_select", listenSentence:"The results will have been published by Monday", options:["published","publish","publishes","publishing"], correctAnswer:"published", explanation:"الجملة: «ستكون النتائج قد نُشرت بحلول الإثنين» — will have been published", xp:25 },
    ],
  },

  // ── Conditionals: Types 1, 2 & 3 ──
  // Objective: 1st (If + present → will), 2nd (If + past → would),
  // 3rd (If + past perfect → would have), mixed conditionals & unless/as long as/provided that.
  "Conditionals: Types 1, 2 & 3": {
    // EASY — Type 1 (and zero) conditional basics
    t0: [
      { id:"cond-t0-1", type:"word_order", sentence:"If it rains I will stay home", correctAnswer:"If it rains I will stay home", explanation:"الشرط الأول: If + مضارع → will + مصدر", xp:10 },
      { id:"cond-t0-2", type:"translate", arabic:"إذا درست ستنجح", options:["If you study you will pass","If you will study you will pass","If you study you pass","If you studied you will pass"], correctAnswer:"If you study you will pass", explanation:"If + مضارع بسيط، والنتيجة will", xp:10 },
      { id:"cond-t0-3", type:"listen_select", listenSentence:"If you heat ice it melts", options:["melts","melt","melting","melted"], correctAnswer:"melts", explanation:"الجملة: «إذا سخّنت الثلج يذوب» — حقيقة عامة (الشرط الصفري)", xp:11 },
      { id:"cond-t0-4", type:"picture_match", word:"umbrella", pictureOptions:[{emoji:"☂️",label:"umbrella"},{emoji:"🧥",label:"coat"},{emoji:"🕶️",label:"sunglasses"},{emoji:"👢",label:"boots"}], correctAnswer:"umbrella", explanation:"If it rains take an umbrella ☂️ = مظلة", xp:10 },
      { id:"cond-t0-5", type:"word_order", sentence:"If I have time I will call you", correctAnswer:"If I have time I will call you", explanation:"If + have (مضارع) → will call", xp:10 },
      { id:"cond-t0-6", type:"translate", arabic:"إذا أكلت كثيراً ستشعر بالمرض", options:["If you eat too much you will feel sick","If you will eat too much you will feel sick","If you eat too much you feel sick","If you ate too much you will feel sick"], correctAnswer:"If you eat too much you will feel sick", explanation:"الشرط الأول للنتيجة المحتملة", xp:11 },
      { id:"cond-t0-7", type:"word_order", sentence:"She will come if you ask her", correctAnswer:"She will come if you ask her", explanation:"يمكن أن تبدأ الجملة بالنتيجة ثم if", xp:11 },
      { id:"cond-t0-8", type:"translate", arabic:"إذا غادرنا الآن سنصل مبكراً", options:["If we leave now we will arrive early","If we will leave now we will arrive early","If we leave now we arrive early","If we left now we will arrive early"], correctAnswer:"If we leave now we will arrive early", explanation:"If + leave → will arrive", xp:11 },
      { id:"cond-t0-9", type:"listen_select", listenSentence:"If you work hard you will succeed", options:["succeed","success","succeeds","succeeded"], correctAnswer:"succeed", explanation:"الجملة: «إذا عملت بجد ستنجح» — will + succeed", xp:11 },
      { id:"cond-t0-10", type:"picture_match", word:"rain", pictureOptions:[{emoji:"🌧️",label:"rain"},{emoji:"☀️",label:"sun"},{emoji:"⛅",label:"cloud"},{emoji:"❄️",label:"snow"}], correctAnswer:"rain", explanation:"If it rains 🌧️ — rain = مطر", xp:12 },
    ],
    // MEDIUM — Type 2 conditional, questions, negation, unless
    t1: [
      { id:"cond-t1-1", type:"translate", arabic:"لو كنت غنياً لاشتريت منزلاً", options:["If I were rich I would buy a house","If I was rich I will buy a house","If I am rich I would buy a house","If I were rich I will buy a house"], correctAnswer:"If I were rich I would buy a house", explanation:"الشرط الثاني: If + past (were) → would + مصدر", xp:14 },
      { id:"cond-t1-2", type:"word_order", sentence:"If I had more time I would travel", correctAnswer:"If I had more time I would travel", explanation:"الشرط الثاني الافتراضي: had → would", xp:13 },
      { id:"cond-t1-3", type:"translate", arabic:"ماذا ستفعل لو فزت بالجائزة؟", options:["What would you do if you won the prize?","What will you do if you won the prize?","What would you do if you win the prize?","What would you did if you won the prize?"], correctAnswer:"What would you do if you won the prize?", explanation:"السؤال في الشرط الثاني: would + do ... if + past", xp:15 },
      { id:"cond-t1-4", type:"listen_select", listenSentence:"If I were you I would apologize", options:["apologize","apology","sorry","apologized"], correctAnswer:"apologize", explanation:"الجملة: «لو كنت مكانك لاعتذرت» — would + apologize", xp:14 },
      { id:"cond-t1-5", type:"word_order", sentence:"She would help you if she could", correctAnswer:"She would help you if she could", explanation:"would help ... if + could (الشرط الثاني)", xp:14 },
      { id:"cond-t1-6", type:"translate", arabic:"لو لم تمطر لذهبنا في نزهة", options:["If it didn't rain we would go for a picnic","If it doesn't rain we would go for a picnic","If it didn't rain we will go for a picnic","If it not rain we would go for a picnic"], correctAnswer:"If it didn't rain we would go for a picnic", explanation:"النفي في الشرط الثاني: didn't + مصدر", xp:15 },
      { id:"cond-t1-7", type:"translate", arabic:"إن لم تسرع ستفوتك الحافلة", options:["Unless you hurry you will miss the bus","Unless you don't hurry you will miss the bus","If you hurry you will miss the bus","Unless you hurry you miss the bus"], correctAnswer:"Unless you hurry you will miss the bus", explanation:"unless = if not (إن لم)", xp:15 },
      { id:"cond-t1-8", type:"picture_match", word:"money", pictureOptions:[{emoji:"💰",label:"money"},{emoji:"🏦",label:"bank"},{emoji:"💳",label:"card"},{emoji:"🪙",label:"coin"}], correctAnswer:"money", explanation:"If I had money 💰 = مال", xp:13 },
      { id:"cond-t1-9", type:"word_order", sentence:"If he studied harder he would get better grades", correctAnswer:"If he studied harder he would get better grades", explanation:"الشرط الثاني: studied → would get", xp:14 },
      { id:"cond-t1-10", type:"listen_select", listenSentence:"I would call her if I had her number", options:["number","name","address","phone"], correctAnswer:"number", explanation:"الجملة: «كنت لأتصل بها لو كان لديّ رقمها» — number = رقم", xp:14 },
    ],
    // HARD — Type 3 conditional, trap distractors
    t2: [
      { id:"cond-t2-1", type:"translate", arabic:"لو كنت درست لنجحت في الامتحان", options:["If you had studied you would have passed the exam","If you studied you would have passed the exam","If you had studied you would passed the exam","If you had study you would have passed the exam"], correctAnswer:"If you had studied you would have passed the exam", explanation:"الشرط الثالث: If + past perfect → would have + p.p", xp:17 },
      { id:"cond-t2-2", type:"word_order", sentence:"If they had left earlier they would have caught the train", correctAnswer:"If they had left earlier they would have caught the train", explanation:"had left → would have caught (شرط ثالث)", xp:17 },
      { id:"cond-t2-3", type:"translate", arabic:"لو لم تساعدني لفشلت", options:["If you hadn't helped me I would have failed","If you didn't help me I would have failed","If you hadn't helped me I would failed","If you hadn't help me I would have failed"], correctAnswer:"If you hadn't helped me I would have failed", explanation:"النفي في الشرط الثالث: hadn't + p.p", xp:18 },
      { id:"cond-t2-4", type:"listen_select", listenSentence:"If we had known we would have come earlier", options:["known","knew","know","knowing"], correctAnswer:"known", explanation:"الجملة: «لو علمنا لأتينا مبكراً» — had + known", xp:16 },
      { id:"cond-t2-5", type:"word_order", sentence:"She would have called if she had had time", correctAnswer:"She would have called if she had had time", explanation:"would have called ... had had (شرط ثالث)", xp:17 },
      { id:"cond-t2-6", type:"translate", arabic:"لو لم ينسَ جواز سفره لما فاتته الرحلة", options:["If he hadn't forgotten his passport he wouldn't have missed the flight","If he didn't forget his passport he wouldn't have missed the flight","If he hadn't forgot his passport he wouldn't have missed the flight","If he hadn't forgotten his passport he wouldn't missed the flight"], correctAnswer:"If he hadn't forgotten his passport he wouldn't have missed the flight", explanation:"شرط ثالث منفي في الطرفين", xp:18 },
      { id:"cond-t2-7", type:"translate", arabic:"ماذا كنت ستفعل لو رأيت الحادث؟", options:["What would you have done if you had seen the accident?","What would you do if you had seen the accident?","What would you have done if you saw the accident?","What would you have did if you had seen the accident?"], correctAnswer:"What would you have done if you had seen the accident?", explanation:"سؤال الشرط الثالث: would have done ... had seen", xp:18 },
      { id:"cond-t2-8", type:"picture_match", word:"train", pictureOptions:[{emoji:"🚆",label:"train"},{emoji:"🚌",label:"bus"},{emoji:"✈️",label:"plane"},{emoji:"🚗",label:"car"}], correctAnswer:"train", explanation:"They would have caught the train 🚆 = قطار", xp:16 },
      { id:"cond-t2-9", type:"word_order", sentence:"If I had saved more money I could have bought a car", correctAnswer:"If I had saved more money I could have bought a car", explanation:"could have + p.p نتيجة محتملة في الشرط الثالث", xp:17 },
      { id:"cond-t2-10", type:"listen_select", listenSentence:"If it had not rained the match would have continued", options:["rained","rain","rains","raining"], correctAnswer:"rained", explanation:"الجملة: «لو لم تمطر لاستمرت المباراة» — had not rained", xp:18 },
    ],
    // HIGH — mixed conditionals, inversion, provided that / as long as
    t3: [
      { id:"cond-t3-1", type:"translate", arabic:"لو أنني درست الطب لكنت طبيباً الآن", options:["If I had studied medicine I would be a doctor now","If I studied medicine I would be a doctor now","If I had studied medicine I would have been a doctor now","If I had studied medicine I will be a doctor now"], correctAnswer:"If I had studied medicine I would be a doctor now", explanation:"شرط مختلط: ماضٍ تام في الشرط → would be (نتيجة حاضرة)", xp:24 },
      { id:"cond-t3-2", type:"word_order", sentence:"Had I known the truth I would have acted differently", correctAnswer:"Had I known the truth I would have acted differently", explanation:"الانعكاس (inversion): Had + فاعل بدل If had", xp:23 },
      { id:"cond-t3-3", type:"translate", arabic:"لو لم يكن مهملاً لما خسر وظيفته", options:["If he weren't so careless he wouldn't have lost his job","If he wasn't so careless he wouldn't lose his job","If he weren't so careless he wouldn't lose his job","If he isn't so careless he wouldn't have lost his job"], correctAnswer:"If he weren't so careless he wouldn't have lost his job", explanation:"شرط مختلط: حالة دائمة (weren't) → نتيجة ماضية", xp:24 },
      { id:"cond-t3-4", type:"listen_select", listenSentence:"Were I in your position I would resign", options:["resign","resume","reside","resist"], correctAnswer:"resign", explanation:"الجملة: «لو كنت مكانك لاستقلت» — انعكاس Were I", xp:23 },
      { id:"cond-t3-5", type:"word_order", sentence:"You can borrow my car as long as you drive carefully", correctAnswer:"You can borrow my car as long as you drive carefully", explanation:"as long as = شريطة أن (أداة شرط)", xp:22 },
      { id:"cond-t3-6", type:"translate", arabic:"سأوافق شريطة أن تنهي العمل في الموعد", options:["I will agree provided that you finish the work on time","I will agree provided that you will finish the work on time","I would agree provided that you finish the work on time","I will agree provided you finished the work on time"], correctAnswer:"I will agree provided that you finish the work on time", explanation:"provided that = بشرط أن، يتبعها مضارع", xp:23 },
      { id:"cond-t3-7", type:"translate", arabic:"لولا تحذيره لوقعنا في مشكلة كبيرة", options:["Had it not been for his warning we would have been in big trouble","If it not been for his warning we would have been in big trouble","Had it not been for his warning we would be in big trouble","Had not it been for his warning we would have been in big trouble"], correctAnswer:"Had it not been for his warning we would have been in big trouble", explanation:"Had it not been for = لولا (انعكاس رسمي)", xp:25 },
      { id:"cond-t3-8", type:"picture_match", word:"doctor", pictureOptions:[{emoji:"👨‍⚕️",label:"doctor"},{emoji:"👩‍🏫",label:"teacher"},{emoji:"👷",label:"engineer"},{emoji:"🧑‍⚖️",label:"judge"}], correctAnswer:"doctor", explanation:"I would be a doctor now 👨‍⚕️ = طبيب", xp:22 },
      { id:"cond-t3-9", type:"word_order", sentence:"Should you need any help just let me know", correctAnswer:"Should you need any help just let me know", explanation:"Should + فاعل = انعكاس الشرط الأول الرسمي", xp:23 },
      { id:"cond-t3-10", type:"listen_select", listenSentence:"If only I had listened to your advice", options:["listened","listen","listening","listens"], correctAnswer:"listened", explanation:"الجملة: «ليتني أصغيت لنصيحتك» — If only + past perfect للندم", xp:24 },
    ],
  },

  // ── Reported Speech ──
  // Objective: direct → indirect (tense backshift), pronoun & time/place changes,
  // reporting questions/commands/requests, reporting verbs (say, tell, ask, explain, warn).
  "Reported Speech": {
    // EASY — basic reported statements, say/tell, backshift
    t0: [
      { id:"reported-t0-1", type:"word_order", sentence:"He said he was tired", correctAnswer:"He said he was tired", explanation:"الكلام المنقول: backshift من am/is إلى was", xp:10 },
      { id:"reported-t0-2", type:"translate", arabic:"قالت إنها سعيدة", options:["She said she was happy","She said she is happy","She say she was happy","She said she happy"], correctAnswer:"She said she was happy", explanation:"is → was عند النقل", xp:10 },
      { id:"reported-t0-3", type:"listen_select", listenSentence:"He told me he was busy", options:["told","said","asked","spoke"], correctAnswer:"told", explanation:"الجملة: «أخبرني أنه مشغول» — told + مفعول (me)", xp:11 },
      { id:"reported-t0-4", type:"picture_match", word:"talking", pictureOptions:[{emoji:"💬",label:"talking"},{emoji:"👂",label:"listening"},{emoji:"✍️",label:"writing"},{emoji:"📖",label:"reading"}], correctAnswer:"talking", explanation:"💬 talking = يتحدث (ننقل ما قاله)", xp:10 },
      { id:"reported-t0-5", type:"word_order", sentence:"She said she liked the book", correctAnswer:"She said she liked the book", explanation:"like → liked عند النقل", xp:10 },
      { id:"reported-t0-6", type:"translate", arabic:"قال إنه يعمل هنا", options:["He said he worked here","He said he works here","He say he worked here","He said he work here"], correctAnswer:"He said he worked here", explanation:"المضارع البسيط → الماضي البسيط", xp:11 },
      { id:"reported-t0-7", type:"word_order", sentence:"They said they were ready", correctAnswer:"They said they were ready", explanation:"are → were عند النقل", xp:11 },
      { id:"reported-t0-8", type:"translate", arabic:"أخبرني أنه جائع", options:["He told me he was hungry","He told me he is hungry","He said me he was hungry","He told to me he was hungry"], correctAnswer:"He told me he was hungry", explanation:"told + me (مفعول مباشر) بدون to", xp:11 },
      { id:"reported-t0-9", type:"listen_select", listenSentence:"She said she would come", options:["would","will","shall","can"], correctAnswer:"would", explanation:"الجملة: «قالت إنها ستأتي» — will → would", xp:11 },
      { id:"reported-t0-10", type:"picture_match", word:"phone call", pictureOptions:[{emoji:"📞",label:"phone call"},{emoji:"📧",label:"email"},{emoji:"💌",label:"letter"},{emoji:"📺",label:"television"}], correctAnswer:"phone call", explanation:"📞 phone call = مكالمة هاتفية (ننقل ما قيل فيها)", xp:12 },
    ],
    // MEDIUM — tense backshift, time/pronoun changes, reported questions
    t1: [
      { id:"reported-t1-1", type:"translate", arabic:"قال إنه سيسافر في اليوم التالي", options:["He said he would travel the next day","He said he will travel the next day","He said he would travel tomorrow","He said he would traveled the next day"], correctAnswer:"He said he would travel the next day", explanation:"will → would، وtomorrow → the next day", xp:14 },
      { id:"reported-t1-2", type:"word_order", sentence:"She told me she had finished her work", correctAnswer:"She told me she had finished her work", explanation:"الماضي/المضارع التام → الماضي التام (had finished)", xp:14 },
      { id:"reported-t1-3", type:"translate", arabic:"سألني أين أعيش", options:["He asked me where I lived","He asked me where did I live","He asked me where do I live","He asked to me where I lived"], correctAnswer:"He asked me where I lived", explanation:"السؤال المنقول: ترتيب الجملة الخبرية بعد where", xp:15 },
      { id:"reported-t1-4", type:"listen_select", listenSentence:"She asked if I was coming", options:["asked","said","told","wondered"], correctAnswer:"asked", explanation:"الجملة: «سألت إن كنت قادماً» — السؤال نعم/لا يُنقل بـ if", xp:13 },
      { id:"reported-t1-5", type:"word_order", sentence:"He said he had seen that film before", correctAnswer:"He said he had seen that film before", explanation:"saw/has seen → had seen، وthis → that", xp:14 },
      { id:"reported-t1-6", type:"translate", arabic:"قالت إنها ستتصل بي لاحقاً", options:["She said she would call me later","She said she will call me later","She told she would call me later","She said she would called me later"], correctAnswer:"She said she would call me later", explanation:"will → would في الكلام المنقول", xp:13 },
      { id:"reported-t1-7", type:"translate", arabic:"سألوني ماذا كنت أفعل", options:["They asked me what I was doing","They asked me what was I doing","They asked me what I am doing","They asked me what did I do"], correctAnswer:"They asked me what I was doing", explanation:"السؤال المنقول: ماضٍ مستمر بترتيب خبري", xp:15 },
      { id:"reported-t1-8", type:"picture_match", word:"question", pictureOptions:[{emoji:"❓",label:"question"},{emoji:"❗",label:"warning"},{emoji:"💡",label:"idea"},{emoji:"✅",label:"answer"}], correctAnswer:"question", explanation:"❓ question = سؤال (ننقله بأفعال مثل ask)", xp:13 },
      { id:"reported-t1-9", type:"word_order", sentence:"He told us he was leaving the next day", correctAnswer:"He told us he was leaving the next day", explanation:"told + us، وis leaving → was leaving، tomorrow → the next day", xp:14 },
      { id:"reported-t1-10", type:"listen_select", listenSentence:"She explained that the office was closed", options:["explained","explored","expressed","expected"], correctAnswer:"explained", explanation:"الجملة: «أوضحت أن المكتب مغلق» — explain فعل قول", xp:15 },
    ],
    // HARD — reported commands/requests, say vs tell, trap distractors
    t2: [
      { id:"reported-t2-1", type:"translate", arabic:"طلب مني أن أغلق الباب", options:["He asked me to close the door","He asked me close the door","He asked to me to close the door","He asked me closing the door"], correctAnswer:"He asked me to close the door", explanation:"نقل الطلب: ask + مفعول + to + مصدر", xp:16 },
      { id:"reported-t2-2", type:"word_order", sentence:"She told them not to be late", correctAnswer:"She told them not to be late", explanation:"نقل الأمر المنفي: tell + مفعول + not to + مصدر", xp:17 },
      { id:"reported-t2-3", type:"translate", arabic:"نصحني الطبيب بأن أرتاح", options:["The doctor advised me to rest","The doctor advised me rest","The doctor advised to me to rest","The doctor advised me resting"], correctAnswer:"The doctor advised me to rest", explanation:"advise + مفعول + to + مصدر", xp:17 },
      { id:"reported-t2-4", type:"listen_select", listenSentence:"He warned us not to touch the wires", options:["warned","wanted","waited","warmed"], correctAnswer:"warned", explanation:"الجملة: «حذّرنا من لمس الأسلاك» — warn فعل تحذير", xp:16 },
      { id:"reported-t2-5", type:"word_order", sentence:"The teacher told the students to open their books", correctAnswer:"The teacher told the students to open their books", explanation:"tell + مفعول + to + مصدر لنقل التعليمات", xp:16 },
      { id:"reported-t2-6", type:"translate", arabic:"أخبرتني ألّا أقلق", options:["She told me not to worry","She told me to not worry","She said me not to worry","She told me don't worry"], correctAnswer:"She told me not to worry", explanation:"النفي: not to + مصدر", xp:17 },
      { id:"reported-t2-7", type:"translate", arabic:"اقترح أن نأخذ استراحة", options:["He suggested that we take a break","He suggested us to take a break","He suggested to take a break we","He suggest that we take a break"], correctAnswer:"He suggested that we take a break", explanation:"suggest that + فاعل + مصدر (دون to)", xp:18 },
      { id:"reported-t2-8", type:"picture_match", word:"warning", pictureOptions:[{emoji:"⚠️",label:"warning"},{emoji:"✅",label:"approval"},{emoji:"ℹ️",label:"information"},{emoji:"🚫",label:"ban"}], correctAnswer:"warning", explanation:"⚠️ warning = تحذير (ننقله بـ warn)", xp:16 },
      { id:"reported-t2-9", type:"word_order", sentence:"He reminded me to bring my passport", correctAnswer:"He reminded me to bring my passport", explanation:"remind + مفعول + to + مصدر", xp:17 },
      { id:"reported-t2-10", type:"listen_select", listenSentence:"She insisted that he apologize immediately", options:["insisted","invited","intended","informed"], correctAnswer:"insisted", explanation:"الجملة: «أصرّت على أن يعتذر فوراً» — insist that + مصدر", xp:18 },
    ],
    // HIGH — advanced reporting verbs, integrative, subtle nuance
    t3: [
      { id:"reported-t3-1", type:"translate", arabic:"أنكر أنه سرق المال", options:["He denied stealing the money","He denied to steal the money","He denied that he steal the money","He denied stole the money"], correctAnswer:"He denied stealing the money", explanation:"deny + v-ing لنقل الإنكار", xp:22 },
      { id:"reported-t3-2", type:"word_order", sentence:"She admitted that she had made a mistake", correctAnswer:"She admitted that she had made a mistake", explanation:"admit that + ماضٍ تام لنقل الاعتراف", xp:23 },
      { id:"reported-t3-3", type:"translate", arabic:"اعترف بأنه نسي الموعد", options:["He admitted forgetting the appointment","He admitted to forget the appointment","He admitted forget the appointment","He admitted he forget the appointment"], correctAnswer:"He admitted forgetting the appointment", explanation:"admit + v-ing", xp:24 },
      { id:"reported-t3-4", type:"listen_select", listenSentence:"She accused him of lying to her", options:["accused","amused","aroused","abused"], correctAnswer:"accused", explanation:"الجملة: «اتهمته بالكذب عليها» — accuse somebody of + v-ing", xp:23 },
      { id:"reported-t3-5", type:"word_order", sentence:"He claimed he had never met her before", correctAnswer:"He claimed he had never met her before", explanation:"claim + جملة منقولة مع had never met", xp:23 },
      { id:"reported-t3-6", type:"translate", arabic:"اقترحت تأجيل الاجتماع", options:["She suggested postponing the meeting","She suggested to postpone the meeting","She suggested postpone the meeting","She suggested me to postpone the meeting"], correctAnswer:"She suggested postponing the meeting", explanation:"suggest + v-ing", xp:24 },
      { id:"reported-t3-7", type:"translate", arabic:"هنّأني على نجاحي", options:["He congratulated me on my success","He congratulated me for my success","He congratulated me on my succeed","He congratulated to me on my success"], correctAnswer:"He congratulated me on my success", explanation:"congratulate somebody on + اسم", xp:24 },
      { id:"reported-t3-8", type:"picture_match", word:"agreement", pictureOptions:[{emoji:"🤝",label:"agreement"},{emoji:"👎",label:"refusal"},{emoji:"✍️",label:"signature"},{emoji:"💬",label:"chat"}], correctAnswer:"agreement", explanation:"🤝 agreement = اتفاق (ننقله بـ agree)", xp:22 },
      { id:"reported-t3-9", type:"word_order", sentence:"They apologized for arriving so late", correctAnswer:"They apologized for arriving so late", explanation:"apologize for + v-ing لنقل الاعتذار", xp:23 },
      { id:"reported-t3-10", type:"listen_select", listenSentence:"He promised that he would never do it again", options:["promised","praised","promoted","proposed"], correctAnswer:"promised", explanation:"الجملة: «وعد بألّا يفعلها مجدداً» — promise that + would", xp:25 },
    ],
  },
};
