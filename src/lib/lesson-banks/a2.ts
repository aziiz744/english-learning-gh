import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// A2 – ELEMENTARY
// (Authored by content pass — see types.ts for the authoring rules.)
// ══════════════════════════════════════════════════════════════

export const a2Banks: Record<string, TieredBank> = {
  // ── Objective: a/an with indefinite nouns, the for specific things,
  //    zero article, and common article mistakes. ──
  "Articles: A, An, The": {
    // EASY — a vs an, recognition of basic indefinite articles
    t0: [
      { id:"article-t0-1", type:"word_order", sentence:"I have a cat", correctAnswer:"I have a cat", explanation:"a + اسم نكرة يبدأ بحرف ساكن (cat)", xp:10 },
      { id:"article-t0-2", type:"translate", arabic:"هذه تفاحة", options:["This is an apple","This is a apple","This is apple","This is the apple"], correctAnswer:"This is an apple", explanation:"an قبل الكلمات التي تبدأ بصوت متحرك (apple)", xp:10 },
      { id:"article-t0-3", type:"listen_select", listenSentence:"She has an umbrella", options:["an","a","the","one"], correctAnswer:"an", explanation:"الجملة: «معها مظلة» — umbrella تبدأ بصوت متحرك فنستخدم an", xp:10 },
      { id:"article-t0-4", type:"picture_match", word:"apple", pictureOptions:[{emoji:"🍎",label:"apple"},{emoji:"🍞",label:"bread"},{emoji:"🧀",label:"cheese"},{emoji:"🥛",label:"milk"}], correctAnswer:"apple", explanation:"an apple — أداة an قبل apple 🍎", xp:10 },
      { id:"article-t0-5", type:"word_order", sentence:"He is a doctor", correctAnswer:"He is a doctor", explanation:"a + مهنة بصيغة المفرد (a doctor)", xp:11 },
      { id:"article-t0-6", type:"translate", arabic:"أحتاج إلى قلم", options:["I need a pen","I need an pen","I need pen","I need the pen"], correctAnswer:"I need a pen", explanation:"a قبل pen لأنها تبدأ بصوت ساكن", xp:11 },
      { id:"article-t0-7", type:"word_order", sentence:"I see a dog", correctAnswer:"I see a dog", explanation:"a dog — أداة تنكير قبل اسم مفرد", xp:10 },
      { id:"article-t0-8", type:"translate", arabic:"هذا كتاب", options:["This is a book","This is an book","This is book","This is the book"], correctAnswer:"This is a book", explanation:"a book — أداة a قبل book", xp:11 },
      { id:"article-t0-9", type:"listen_select", listenSentence:"I have a book", options:["a","an","the","two"], correctAnswer:"a", explanation:"الجملة: «معي كتاب» — a قبل book", xp:10 },
      { id:"article-t0-10", type:"picture_match", word:"egg", pictureOptions:[{emoji:"🥚",label:"egg"},{emoji:"🍞",label:"bread"},{emoji:"🧀",label:"cheese"},{emoji:"🥛",label:"milk"}], correctAnswer:"egg", explanation:"an egg — an قبل egg لأنها تبدأ بصوت متحرك 🥚", xp:11 },
    ],
    // MEDIUM — the for specific things, questions, first vs second mention
    t1: [
      { id:"article-t1-1", type:"word_order", sentence:"Close the door please", correctAnswer:"Close the door please", explanation:"the door — شيء محدد يعرفه المتحدث والمستمع", xp:13 },
      { id:"article-t1-2", type:"translate", arabic:"الشمس ساطعة اليوم", options:["The sun is bright today","A sun is bright today","Sun is bright today","An sun is bright today"], correctAnswer:"The sun is bright today", explanation:"the sun — شيء وحيد فريد فنستخدم the", xp:13 },
      { id:"article-t1-3", type:"listen_select", listenSentence:"Where is the station", options:["the","a","an","this"], correctAnswer:"the", explanation:"الجملة: «أين المحطة؟» — the station محطة محددة", xp:13 },
      { id:"article-t1-4", type:"picture_match", word:"sun", pictureOptions:[{emoji:"☀️",label:"sun"},{emoji:"🌙",label:"moon"},{emoji:"⭐",label:"star"},{emoji:"☁️",label:"cloud"}], correctAnswer:"sun", explanation:"the sun — أشياء فريدة تأخذ the ☀️", xp:13 },
      { id:"article-t1-5", type:"word_order", sentence:"I bought a car and the car is red", correctAnswer:"I bought a car and the car is red", explanation:"a عند الذكر الأول و the عند الذكر الثاني", xp:14 },
      { id:"article-t1-6", type:"translate", arabic:"هل يوجد مطعم قريب؟", options:["Is there a restaurant nearby?","Is there the restaurant nearby?","Is there restaurant nearby?","Is there an restaurant nearby?"], correctAnswer:"Is there a restaurant nearby?", explanation:"a restaurant — مطعم غير محدد لأول مرة", xp:14 },
      { id:"article-t1-7", type:"word_order", sentence:"She is the best student", correctAnswer:"She is the best student", explanation:"the مع صيغة التفضيل (the best)", xp:14 },
      { id:"article-t1-8", type:"translate", arabic:"أغلق النافذة من فضلك", options:["Close the window please","Close a window please","Close window please","Close an window please"], correctAnswer:"Close the window please", explanation:"the window — نافذة محددة معروفة", xp:13 },
      { id:"article-t1-9", type:"listen_select", listenSentence:"He is an honest man", options:["an","a","the","one"], correctAnswer:"an", explanation:"الجملة: «إنه رجل صادق» — honest تبدأ بصوت متحرك (h صامتة) فنستخدم an", xp:15 },
      { id:"article-t1-10", type:"picture_match", word:"moon", pictureOptions:[{emoji:"🌙",label:"moon"},{emoji:"☀️",label:"sun"},{emoji:"🌍",label:"earth"},{emoji:"⭐",label:"star"}], correctAnswer:"moon", explanation:"the moon — القمر فريد فنستخدم the 🌙", xp:14 },
    ],
    // HARD — zero article (general/uncountable), fixed expressions
    t2: [
      { id:"article-t2-1", type:"translate", arabic:"أحب الموسيقى", options:["I like music","I like the music","I like a music","I like musics"], correctAnswer:"I like music", explanation:"الأسماء غير المعدودة بالمعنى العام بلا أداة (music)", xp:16 },
      { id:"article-t2-2", type:"word_order", sentence:"She goes to school by bus", correctAnswer:"She goes to school by bus", explanation:"go to school و by bus تعابير ثابتة بلا أداة", xp:16 },
      { id:"article-t2-3", type:"listen_select", listenSentence:"We had breakfast at home", options:["breakfast","lunch","dinner","supper"], correctAnswer:"breakfast", explanation:"الجملة: «تناولنا الفطور في المنزل» — أسماء الوجبات بلا أداة", xp:16 },
      { id:"article-t2-4", type:"picture_match", word:"bus", pictureOptions:[{emoji:"🚌",label:"bus"},{emoji:"🚗",label:"car"},{emoji:"🚆",label:"train"},{emoji:"✈️",label:"plane"}], correctAnswer:"bus", explanation:"by bus — وسائل النقل بلا أداة 🚌", xp:16 },
      { id:"article-t2-5", type:"translate", arabic:"الذهب معدن ثمين", options:["Gold is a precious metal","The gold is a precious metal","Gold is precious metal","A gold is a precious metal"], correctAnswer:"Gold is a precious metal", explanation:"Gold عام بلا أداة، و a precious metal لأنها معدودة مفردة", xp:17 },
      { id:"article-t2-6", type:"word_order", sentence:"He plays football every day", correctAnswer:"He plays football every day", explanation:"أسماء الرياضات بلا أداة (play football)", xp:16 },
      { id:"article-t2-7", type:"translate", arabic:"تركيا في آسيا", options:["Turkey is in Asia","The Turkey is in the Asia","Turkey is in the Asia","A Turkey is in Asia"], correctAnswer:"Turkey is in Asia", explanation:"معظم أسماء الدول والقارات بلا أداة", xp:17 },
      { id:"article-t2-8", type:"translate", arabic:"أذهب إلى الفراش مبكراً", options:["I go to bed early","I go to the bed early","I go to a bed early","I go to beds early"], correctAnswer:"I go to bed early", explanation:"go to bed تعبير ثابت بلا أداة", xp:18 },
      { id:"article-t2-9", type:"listen_select", listenSentence:"Water is important for life", options:["Water","Juice","Milk","Tea"], correctAnswer:"Water", explanation:"الجملة: «الماء مهم للحياة» — الأسماء غير المعدودة العامة بلا أداة", xp:17 },
      { id:"article-t2-10", type:"picture_match", word:"football", pictureOptions:[{emoji:"⚽",label:"football"},{emoji:"🏀",label:"basketball"},{emoji:"🎾",label:"tennis"},{emoji:"🏐",label:"volleyball"}], correctAnswer:"football", explanation:"play football — بلا أداة ⚽", xp:16 },
    ],
    // HIGH — exam-level traps, the with instruments/rivers/superlatives
    t3: [
      { id:"article-t3-1", type:"translate", arabic:"العزف على البيانو ممتع", options:["Playing the piano is fun","Playing piano is fun","Playing a piano is fun","Playing pianos is fun"], correctAnswer:"Playing the piano is fun", explanation:"play + the + آلة موسيقية (the piano)", xp:22 },
      { id:"article-t3-2", type:"word_order", sentence:"The rich should help the poor", correctAnswer:"The rich should help the poor", explanation:"the + صفة للإشارة إلى فئة من الناس (the rich = الأغنياء)", xp:22 },
      { id:"article-t3-3", type:"listen_select", listenSentence:"He went to the hospital to visit his friend", options:["hospital","clinic","pharmacy","doctor"], correctAnswer:"hospital", explanation:"الجملة: «ذهب إلى المستشفى لزيارة صديقه» — نقول the hospital عند الزيارة لا العلاج", xp:23 },
      { id:"article-t3-4", type:"picture_match", word:"piano", pictureOptions:[{emoji:"🎹",label:"piano"},{emoji:"🎸",label:"guitar"},{emoji:"🥁",label:"drums"},{emoji:"🎺",label:"trumpet"}], correctAnswer:"piano", explanation:"the piano — الآلات الموسيقية تأخذ the 🎹", xp:22 },
      { id:"article-t3-5", type:"translate", arabic:"النيل أطول نهر", options:["The Nile is the longest river","Nile is longest river","The Nile is longest river","A Nile is the longest river"], correctAnswer:"The Nile is the longest river", explanation:"the مع أسماء الأنهار ومع صيغة التفضيل (the longest)", xp:24 },
      { id:"article-t3-6", type:"word_order", sentence:"The more you practise the better you become", correctAnswer:"The more you practise the better you become", explanation:"the + مقارنة … the + مقارنة (كلما … كلما)", xp:23 },
      { id:"article-t3-7", type:"translate", arabic:"ذهبت إلى الجامعة لحضور محاضرة", options:["I went to the university to attend a lecture","I went to university to attend the lecture","I went to a university to attend lecture","I went to the university to attend lecture"], correctAnswer:"I went to the university to attend a lecture", explanation:"the university كمكان محدد، و a lecture محاضرة غير محددة", xp:24 },
      { id:"article-t3-8", type:"translate", arabic:"الإنترنت غيّر العالم", options:["The Internet has changed the world","Internet has changed the world","The Internet has changed world","An Internet has changed the world"], correctAnswer:"The Internet has changed the world", explanation:"the Internet و the world كلاهما فريد فيأخذ the", xp:24 },
      { id:"article-t3-9", type:"listen_select", listenSentence:"She is studying at the University of Oxford", options:["University","College","School","Academy"], correctAnswer:"University", explanation:"الجملة: «تدرس في جامعة أكسفورد» — the … of … يأخذ أداة the", xp:23 },
      { id:"article-t3-10", type:"picture_match", word:"river", pictureOptions:[{emoji:"🏞️",label:"river"},{emoji:"🌊",label:"sea"},{emoji:"🏔️",label:"mountain"},{emoji:"🏝️",label:"island"}], correctAnswer:"river", explanation:"the Nile river — أسماء الأنهار تأخذ the 🏞️", xp:25 },
    ],
  },

  // ── Objective: regular -ed verbs, common irregular verbs, negation with
  //    didn't + base verb, and questions with Did. ──
  "Past Simple Tense": {
    // EASY — regular -ed verbs + most common irregulars
    t0: [
      { id:"past-t0-1", type:"word_order", sentence:"I worked yesterday", correctAnswer:"I worked yesterday", explanation:"work + ed = worked — فعل منتظم في الماضي", xp:10 },
      { id:"past-t0-2", type:"translate", arabic:"لعبت كرة القدم أمس", options:["I played football yesterday","I play football yesterday","I playing football yesterday","I plays football yesterday"], correctAnswer:"I played football yesterday", explanation:"play → played — إضافة ed للماضي", xp:11 },
      { id:"past-t0-3", type:"listen_select", listenSentence:"She visited her grandmother", options:["visited","visit","visits","visiting"], correctAnswer:"visited", explanation:"الجملة: «زارت جدتها» — visit → visited", xp:10 },
      { id:"past-t0-4", type:"picture_match", word:"book", pictureOptions:[{emoji:"📖",label:"book"},{emoji:"✏️",label:"pencil"},{emoji:"📺",label:"television"},{emoji:"⚽",label:"ball"}], correctAnswer:"book", explanation:"I read a book yesterday — read في الماضي تُلفظ /red/ 📖", xp:10 },
      { id:"past-t0-5", type:"word_order", sentence:"He watched a film", correctAnswer:"He watched a film", explanation:"watch → watched — فعل منتظم", xp:11 },
      { id:"past-t0-6", type:"translate", arabic:"ذهبت إلى المدرسة", options:["I went to school","I goed to school","I go to school","I gone to school"], correctAnswer:"I went to school", explanation:"go → went — فعل شاذ", xp:11 },
      { id:"past-t0-7", type:"translate", arabic:"أكلنا العشاء", options:["We ate dinner","We eated dinner","We eat dinner","We eaten dinner"], correctAnswer:"We ate dinner", explanation:"eat → ate — فعل شاذ", xp:11 },
      { id:"past-t0-8", type:"word_order", sentence:"They cleaned the house", correctAnswer:"They cleaned the house", explanation:"clean → cleaned — فعل منتظم", xp:10 },
      { id:"past-t0-9", type:"listen_select", listenSentence:"We played in the garden", options:["played","play","plays","playing"], correctAnswer:"played", explanation:"الجملة: «لعبنا في الحديقة» — play → played", xp:10 },
      { id:"past-t0-10", type:"picture_match", word:"house", pictureOptions:[{emoji:"🏠",label:"house"},{emoji:"🚗",label:"car"},{emoji:"🌳",label:"tree"},{emoji:"🪑",label:"chair"}], correctAnswer:"house", explanation:"They cleaned the house — نظّفوا المنزل 🏠", xp:11 },
    ],
    // MEDIUM — negation (didn't + base) and questions (Did)
    t1: [
      { id:"past-t1-1", type:"word_order", sentence:"Did you see the film", correctAnswer:"Did you see the film", explanation:"Did + فاعل + مصدر — صياغة السؤال في الماضي", xp:13 },
      { id:"past-t1-2", type:"translate", arabic:"لم أذهب إلى العمل أمس", options:["I didn't go to work yesterday","I didn't went to work yesterday","I not go to work yesterday","I don't go to work yesterday"], correctAnswer:"I didn't go to work yesterday", explanation:"didn't + مصدر (go) — النفي في الماضي", xp:14 },
      { id:"past-t1-3", type:"listen_select", listenSentence:"Where did you buy this", options:["buy","bought","buys","buying"], correctAnswer:"buy", explanation:"الجملة: «من أين اشتريت هذا؟» — بعد did نستخدم المصدر buy", xp:14 },
      { id:"past-t1-4", type:"picture_match", word:"car", pictureOptions:[{emoji:"🚗",label:"car"},{emoji:"🚲",label:"bicycle"},{emoji:"🛵",label:"scooter"},{emoji:"🚐",label:"van"}], correctAnswer:"car", explanation:"Did you wash the car? — هل غسلت السيارة؟ 🚗", xp:13 },
      { id:"past-t1-5", type:"word_order", sentence:"She did not eat breakfast", correctAnswer:"She did not eat breakfast", explanation:"did not + مصدر (eat) — النفي في الماضي", xp:14 },
      { id:"past-t1-6", type:"translate", arabic:"هل رأيت أحمد أمس؟", options:["Did you see Ahmad yesterday?","Did you saw Ahmad yesterday?","Do you see Ahmad yesterday?","Did you seeing Ahmad yesterday?"], correctAnswer:"Did you see Ahmad yesterday?", explanation:"Did + مصدر (see) لا saw", xp:14 },
      { id:"past-t1-7", type:"translate", arabic:"لم تنهِ واجبها", options:["She didn't finish her homework","She didn't finished her homework","She not finished her homework","She doesn't finish her homework"], correctAnswer:"She didn't finish her homework", explanation:"didn't + مصدر (finish)", xp:15 },
      { id:"past-t1-8", type:"word_order", sentence:"When did they arrive", correctAnswer:"When did they arrive", explanation:"كلمة استفهام + did + فاعل + مصدر", xp:14 },
      { id:"past-t1-9", type:"listen_select", listenSentence:"I didn't understand the question", options:["understand","understood","understands","understanding"], correctAnswer:"understand", explanation:"الجملة: «لم أفهم السؤال» — بعد didn't نستخدم المصدر", xp:15 },
      { id:"past-t1-10", type:"picture_match", word:"phone", pictureOptions:[{emoji:"📱",label:"phone"},{emoji:"💻",label:"laptop"},{emoji:"⌚",label:"watch"},{emoji:"📷",label:"camera"}], correctAnswer:"phone", explanation:"Did you find your phone? — هل وجدت هاتفك؟ 📱", xp:13 },
    ],
    // HARD — wider irregular set, cost/much questions, mixed sentences
    t2: [
      { id:"past-t2-1", type:"translate", arabic:"اشترى سيارة جديدة الأسبوع الماضي", options:["He bought a new car last week","He buyed a new car last week","He buy a new car last week","He boughted a new car last week"], correctAnswer:"He bought a new car last week", explanation:"buy → bought — فعل شاذ", xp:16 },
      { id:"past-t2-2", type:"word_order", sentence:"We took many photos on holiday", correctAnswer:"We took many photos on holiday", explanation:"take → took — فعل شاذ", xp:16 },
      { id:"past-t2-3", type:"listen_select", listenSentence:"She brought a gift to the party", options:["brought","bringed","brings","bring"], correctAnswer:"brought", explanation:"الجملة: «أحضرت هدية للحفلة» — bring → brought", xp:17 },
      { id:"past-t2-4", type:"picture_match", word:"gift", pictureOptions:[{emoji:"🎁",label:"gift"},{emoji:"🎈",label:"balloon"},{emoji:"🎂",label:"cake"},{emoji:"🍰",label:"dessert"}], correctAnswer:"gift", explanation:"She brought a gift — أحضرت هدية 🎁", xp:16 },
      { id:"past-t2-5", type:"translate", arabic:"لم يفهموا الدرس", options:["They didn't understand the lesson","They didn't understood the lesson","They don't understand the lesson","They wasn't understand the lesson"], correctAnswer:"They didn't understand the lesson", explanation:"didn't + مصدر (understand)", xp:17 },
      { id:"past-t2-6", type:"word_order", sentence:"The teacher gave us homework", correctAnswer:"The teacher gave us homework", explanation:"give → gave — فعل شاذ", xp:16 },
      { id:"past-t2-7", type:"translate", arabic:"كم كلّف الكتاب؟", options:["How much did the book cost?","How much did the book costs?","How much the book cost?","How much did the book costed?"], correctAnswer:"How much did the book cost?", explanation:"did + مصدر (cost)؛ cost لا يأخذ ed", xp:18 },
      { id:"past-t2-8", type:"word_order", sentence:"I lost my keys this morning", correctAnswer:"I lost my keys this morning", explanation:"lose → lost — فعل شاذ", xp:17 },
      { id:"past-t2-9", type:"listen_select", listenSentence:"He won the first prize", options:["won","winned","wins","win"], correctAnswer:"won", explanation:"الجملة: «فاز بالجائزة الأولى» — win → won", xp:17 },
      { id:"past-t2-10", type:"picture_match", word:"keys", pictureOptions:[{emoji:"🔑",label:"keys"},{emoji:"👜",label:"bag"},{emoji:"👛",label:"wallet"},{emoji:"🕶️",label:"glasses"}], correctAnswer:"keys", explanation:"I lost my keys — فقدت مفاتيحي 🔑", xp:16 },
    ],
    // HIGH — used to, time clauses, exam-level irregulars
    t3: [
      { id:"past-t3-1", type:"translate", arabic:"بمجرد أن رنّ الجرس، غادر الطلاب", options:["As soon as the bell rang, the students left","As soon as the bell ringed, the students leaved","As soon as the bell rang, the students leaved","As soon as the bell rung, the students left"], correctAnswer:"As soon as the bell rang, the students left", explanation:"ring → rang و leave → left — أفعال شاذة", xp:22 },
      { id:"past-t3-2", type:"word_order", sentence:"She used to live in London", correctAnswer:"She used to live in London", explanation:"used to + مصدر — للعادات الماضية المنتهية", xp:22 },
      { id:"past-t3-3", type:"listen_select", listenSentence:"They held a meeting last Monday", options:["held","holded","holds","hold"], correctAnswer:"held", explanation:"الجملة: «عقدوا اجتماعاً الإثنين الماضي» — hold → held", xp:23 },
      { id:"past-t3-4", type:"picture_match", word:"letter", pictureOptions:[{emoji:"✉️",label:"letter"},{emoji:"📦",label:"parcel"},{emoji:"📰",label:"newspaper"},{emoji:"📋",label:"form"}], correctAnswer:"letter", explanation:"He wrote a letter — write → wrote ✉️", xp:22 },
      { id:"past-t3-5", type:"translate", arabic:"لم أكن أعلم أنك هنا", options:["I didn't know you were here","I didn't knew you were here","I don't know you were here","I didn't know you was here"], correctAnswer:"I didn't know you were here", explanation:"didn't know + were (you دائماً مع were)", xp:24 },
      { id:"past-t3-6", type:"word_order", sentence:"While I was cooking the phone rang", correctAnswer:"While I was cooking the phone rang", explanation:"ماضٍ مستمر (was cooking) + ماضٍ بسيط (rang) للحدث المقاطِع", xp:23 },
      { id:"past-t3-7", type:"translate", arabic:"أين قضيت إجازتك العام الماضي؟", options:["Where did you spend your holiday last year?","Where did you spent your holiday last year?","Where you spent your holiday last year?","Where did you spending your holiday last year?"], correctAnswer:"Where did you spend your holiday last year?", explanation:"did + مصدر (spend) في السؤال", xp:24 },
      { id:"past-t3-8", type:"translate", arabic:"اعتاد جدي أن يروي لنا القصص", options:["My grandfather used to tell us stories","My grandfather use to tell us stories","My grandfather used to told us stories","My grandfather is used to tell us stories"], correctAnswer:"My grandfather used to tell us stories", explanation:"used to + مصدر (tell) للعادة الماضية", xp:24 },
      { id:"past-t3-9", type:"listen_select", listenSentence:"The sun rose at six o'clock", options:["rose","rised","raised","rises"], correctAnswer:"rose", explanation:"الجملة: «أشرقت الشمس في السادسة» — rise → rose", xp:23 },
      { id:"past-t3-10", type:"picture_match", word:"newspaper", pictureOptions:[{emoji:"📰",label:"newspaper"},{emoji:"📖",label:"book"},{emoji:"✉️",label:"letter"},{emoji:"📓",label:"notebook"}], correctAnswer:"newspaper", explanation:"She read the newspaper — read في الماضي تُلفظ /red/ 📰", xp:25 },
    ],
  },

  // ── Objective: food & drink vocabulary, ordering and paying, meal names,
  //    and expressing preferences (like / don't like / prefer). ──
  "Food & Restaurants": {
    // EASY — core food and drink vocabulary
    t0: [
      { id:"food-t0-1", type:"word_order", sentence:"I like apples", correctAnswer:"I like apples", explanation:"I like + اسم بصيغة الجمع للتفضيل العام", xp:10 },
      { id:"food-t0-2", type:"translate", arabic:"أريد بعض الماء", options:["I want some water","I want some waters","I wants some water","I want a water"], correctAnswer:"I want some water", explanation:"some + اسم غير معدود (water)", xp:11 },
      { id:"food-t0-3", type:"listen_select", listenSentence:"I would like some bread", options:["bread","cheese","rice","meat"], correctAnswer:"bread", explanation:"الجملة: «أريد بعض الخبز» — bread = خبز", xp:10 },
      { id:"food-t0-4", type:"picture_match", word:"apple", pictureOptions:[{emoji:"🍎",label:"apple"},{emoji:"🍞",label:"bread"},{emoji:"🧀",label:"cheese"},{emoji:"🥛",label:"milk"}], correctAnswer:"apple", explanation:"apple = تفاحة 🍎", xp:10 },
      { id:"food-t0-5", type:"word_order", sentence:"She likes orange juice", correctAnswer:"She likes orange juice", explanation:"she/he تأخذ likes مع s", xp:11 },
      { id:"food-t0-6", type:"translate", arabic:"أنا جائع", options:["I am hungry","I am thirsty","I am tired","I am angry"], correctAnswer:"I am hungry", explanation:"hungry = جائع", xp:11 },
      { id:"food-t0-7", type:"translate", arabic:"هذا الطعام لذيذ", options:["This food is delicious","This food is delicous","This food delicious","This food are delicious"], correctAnswer:"This food is delicious", explanation:"delicious = لذيذ", xp:11 },
      { id:"food-t0-8", type:"word_order", sentence:"We eat rice every day", correctAnswer:"We eat rice every day", explanation:"eat rice — أكل الأرز", xp:10 },
      { id:"food-t0-9", type:"listen_select", listenSentence:"Can I have some coffee", options:["coffee","tea","water","juice"], correctAnswer:"coffee", explanation:"الجملة: «هل يمكنني الحصول على قهوة؟» — coffee = قهوة", xp:10 },
      { id:"food-t0-10", type:"picture_match", word:"coffee", pictureOptions:[{emoji:"☕",label:"coffee"},{emoji:"🍵",label:"tea"},{emoji:"🥤",label:"soda"},{emoji:"🧃",label:"juice"}], correctAnswer:"coffee", explanation:"coffee = قهوة ☕", xp:11 },
    ],
    // MEDIUM — ordering food, asking, expressing preferences
    t1: [
      { id:"food-t1-1", type:"word_order", sentence:"Can I see the menu please", correctAnswer:"Can I see the menu please", explanation:"Can I see the menu? — طلب قائمة الطعام بأدب", xp:13 },
      { id:"food-t1-2", type:"translate", arabic:"أودّ طلب البيتزا", options:["I would like to order a pizza","I would like order a pizza","I like to order a pizza","I would liked to order a pizza"], correctAnswer:"I would like to order a pizza", explanation:"would like to + مصدر (order)", xp:14 },
      { id:"food-t1-3", type:"listen_select", listenSentence:"I prefer chicken to fish", options:["prefer","prefers","prefered","preferring"], correctAnswer:"prefer", explanation:"الجملة: «أفضّل الدجاج على السمك» — prefer A to B", xp:14 },
      { id:"food-t1-4", type:"picture_match", word:"pizza", pictureOptions:[{emoji:"🍕",label:"pizza"},{emoji:"🍔",label:"burger"},{emoji:"🌮",label:"taco"},{emoji:"🥗",label:"salad"}], correctAnswer:"pizza", explanation:"pizza = بيتزا 🍕", xp:13 },
      { id:"food-t1-5", type:"word_order", sentence:"Could we have the bill please", correctAnswer:"Could we have the bill please", explanation:"Could we have the bill? — طلب الفاتورة", xp:14 },
      { id:"food-t1-6", type:"translate", arabic:"ماذا تنصحني أن أطلب؟", options:["What do you recommend?","What you recommend?","What do you recommends?","What does you recommend?"], correctAnswer:"What do you recommend?", explanation:"What do you recommend? — طلب التوصية", xp:14 },
      { id:"food-t1-7", type:"translate", arabic:"لا أحب الطعام الحار", options:["I don't like spicy food","I don't likes spicy food","I doesn't like spicy food","I not like spicy food"], correctAnswer:"I don't like spicy food", explanation:"don't like — التعبير عن عدم التفضيل", xp:14 },
      { id:"food-t1-8", type:"word_order", sentence:"I would like a table for two", correctAnswer:"I would like a table for two", explanation:"a table for two — حجز طاولة لشخصين", xp:13 },
      { id:"food-t1-9", type:"listen_select", listenSentence:"The dessert was very sweet", options:["dessert","starter","main","drink"], correctAnswer:"dessert", explanation:"الجملة: «كانت الحلوى حلوة جداً» — dessert = حلوى", xp:15 },
      { id:"food-t1-10", type:"picture_match", word:"salad", pictureOptions:[{emoji:"🥗",label:"salad"},{emoji:"🍜",label:"soup"},{emoji:"🍝",label:"pasta"},{emoji:"🍛",label:"curry"}], correctAnswer:"salad", explanation:"salad = سلطة 🥗", xp:14 },
    ],
    // HARD — restaurant nuance, booking, special requests
    t2: [
      { id:"food-t2-1", type:"translate", arabic:"هل يمكنني حجز طاولة لأربعة أشخاص؟", options:["Could I book a table for four?","Could I booking a table for four?","Could I booked a table for four?","Can I book table for four?"], correctAnswer:"Could I book a table for four?", explanation:"Could I + مصدر (book) — طلب رسمي مؤدب", xp:16 },
      { id:"food-t2-2", type:"word_order", sentence:"I am allergic to nuts", correctAnswer:"I am allergic to nuts", explanation:"allergic to — حساسية تجاه طعام معيّن", xp:16 },
      { id:"food-t2-3", type:"listen_select", listenSentence:"Would you like a starter first", options:["starter","dessert","receipt","napkin"], correctAnswer:"starter", explanation:"الجملة: «هل تودّ مقبّلات أولاً؟» — starter = مقبّلات", xp:16 },
      { id:"food-t2-4", type:"picture_match", word:"fork", pictureOptions:[{emoji:"🍴",label:"fork"},{emoji:"🥄",label:"spoon"},{emoji:"🔪",label:"knife"},{emoji:"🥢",label:"chopsticks"}], correctAnswer:"fork", explanation:"fork = شوكة 🍴", xp:16 },
      { id:"food-t2-5", type:"translate", arabic:"هل الخدمة مشمولة في الفاتورة؟", options:["Is service included in the bill?","Is service including in the bill?","Is service include in the bill?","Are service included in the bill?"], correctAnswer:"Is service included in the bill?", explanation:"is + included — المبني للمجهول للسؤال عن الخدمة", xp:17 },
      { id:"food-t2-6", type:"word_order", sentence:"The steak was a little undercooked", correctAnswer:"The steak was a little undercooked", explanation:"undercooked — غير مطهو جيداً (شكوى مؤدبة)", xp:17 },
      { id:"food-t2-7", type:"translate", arabic:"أفضّل لحمي مطهواً جيداً", options:["I prefer my steak well done","I prefer my steak good done","I prefer my steak well cooked done","I prefers my steak well done"], correctAnswer:"I prefer my steak well done", explanation:"well done — مطهو جيداً (وصف درجة الطهي)", xp:18 },
      { id:"food-t2-8", type:"translate", arabic:"هل يمكننا الدفع بشكل منفصل؟", options:["Could we pay separately?","Could we pay separate?","Could we paying separately?","Can we paid separately?"], correctAnswer:"Could we pay separately?", explanation:"pay separately — الدفع كلٌّ على حدة (separately ظرف)", xp:17 },
      { id:"food-t2-9", type:"listen_select", listenSentence:"I will have the grilled salmon", options:["grilled","fried","boiled","baked"], correctAnswer:"grilled", explanation:"الجملة: «سآخذ السلمون المشوي» — grilled = مشوي", xp:17 },
      { id:"food-t2-10", type:"picture_match", word:"soup", pictureOptions:[{emoji:"🍲",label:"soup"},{emoji:"🍕",label:"pizza"},{emoji:"🍣",label:"sushi"},{emoji:"🥧",label:"pie"}], correctAnswer:"soup", explanation:"soup = حساء 🍲", xp:16 },
    ],
    // HIGH — refined dining, idiomatic expressions
    t3: [
      { id:"food-t3-1", type:"translate", arabic:"هل لديكم أي أطباق نباتية؟", options:["Do you have any vegetarian dishes?","Do you have some vegetarian dishes?","Have you any vegetarian dish?","Do you has any vegetarian dishes?"], correctAnswer:"Do you have any vegetarian dishes?", explanation:"any في الأسئلة و dishes بصيغة الجمع", xp:22 },
      { id:"food-t3-2", type:"word_order", sentence:"I'd rather have the soup than the salad", correctAnswer:"I'd rather have the soup than the salad", explanation:"would rather + مصدر … than — تفضيل شيء على آخر", xp:23 },
      { id:"food-t3-3", type:"listen_select", listenSentence:"The waiter recommended the house special", options:["recommended","reserved","received","returned"], correctAnswer:"recommended", explanation:"الجملة: «أوصى النادل بطبق المطعم الخاص» — recommend → recommended", xp:23 },
      { id:"food-t3-4", type:"picture_match", word:"cake", pictureOptions:[{emoji:"🍰",label:"cake"},{emoji:"🍪",label:"cookie"},{emoji:"🍩",label:"doughnut"},{emoji:"🍫",label:"chocolate"}], correctAnswer:"cake", explanation:"cake = كعكة (حلوى) 🍰", xp:22 },
      { id:"food-t3-5", type:"translate", arabic:"كانت الوجبة تستحق كل قرش", options:["The meal was worth every penny","The meal was worthy every penny","The meal worth every penny","The meal was worth all penny"], correctAnswer:"The meal was worth every penny", explanation:"worth every penny — تعبير اصطلاحي يعني تستحق ثمنها", xp:24 },
      { id:"food-t3-6", type:"word_order", sentence:"Could you make it less spicy", correctAnswer:"Could you make it less spicy", explanation:"make it less spicy — طلب تخفيف الحرارة", xp:23 },
      { id:"food-t3-7", type:"translate", arabic:"الحساب على حسابي اليوم", options:["The bill is on me today","The bill is for me today","The bill is in me today","The bill is to me today"], correctAnswer:"The bill is on me today", explanation:"on me — تعبير يعني الدفع على حسابي", xp:24 },
      { id:"food-t3-8", type:"translate", arabic:"لقد فقدت شهيتي", options:["I have lost my appetite","I have lost my appetide","I have lose my appetite","I have losed my appetite"], correctAnswer:"I have lost my appetite", explanation:"lose one's appetite — فقدان الشهية (lose → lost)", xp:24 },
      { id:"food-t3-9", type:"listen_select", listenSentence:"This dish is absolutely delicious", options:["delicious","disgusting","bland","tasteless"], correctAnswer:"delicious", explanation:"الجملة: «هذا الطبق لذيذ تماماً» — delicious = لذيذ", xp:23 },
      { id:"food-t3-10", type:"picture_match", word:"cheese", pictureOptions:[{emoji:"🧀",label:"cheese"},{emoji:"🥖",label:"bread"},{emoji:"🍯",label:"honey"},{emoji:"🥛",label:"milk"}], correctAnswer:"cheese", explanation:"cheese = جبن 🧀", xp:25 },
    ],
  },

  // ── Objective: direction vocabulary, polite requests, prepositions of place,
  //    and giving/understanding instructions on a map. ──
  "Asking for Directions": {
    // EASY — basic direction words
    t0: [
      { id:"direction-t0-1", type:"word_order", sentence:"Turn left here", correctAnswer:"Turn left here", explanation:"Turn left — انعطف يساراً", xp:10 },
      { id:"direction-t0-2", type:"translate", arabic:"اذهب مباشرةً", options:["Go straight","Go straigt","Go to straight","Going straight"], correctAnswer:"Go straight", explanation:"Go straight — اذهب مباشرةً للأمام", xp:11 },
      { id:"direction-t0-3", type:"listen_select", listenSentence:"Turn right at the corner", options:["right","left","straight","back"], correctAnswer:"right", explanation:"الجملة: «انعطف يميناً عند الزاوية» — right = يمين", xp:10 },
      { id:"direction-t0-4", type:"picture_match", word:"left", pictureOptions:[{emoji:"⬅️",label:"left"},{emoji:"➡️",label:"right"},{emoji:"⬆️",label:"up"},{emoji:"⬇️",label:"down"}], correctAnswer:"left", explanation:"left = يسار ⬅️", xp:10 },
      { id:"direction-t0-5", type:"word_order", sentence:"Cross the street", correctAnswer:"Cross the street", explanation:"Cross the street — اعبر الشارع", xp:11 },
      { id:"direction-t0-6", type:"translate", arabic:"أين المحطة؟", options:["Where is the station?","Where the station is?","Where is station?","Where are the station?"], correctAnswer:"Where is the station?", explanation:"Where is the station? — السؤال عن مكان المحطة", xp:11 },
      { id:"direction-t0-7", type:"translate", arabic:"انعطف يساراً", options:["Turn left","Turn right","Turn back","Turn around"], correctAnswer:"Turn left", explanation:"Turn left — انعطف يساراً", xp:10 },
      { id:"direction-t0-8", type:"word_order", sentence:"The bank is here", correctAnswer:"The bank is here", explanation:"is here — يقع هنا", xp:10 },
      { id:"direction-t0-9", type:"listen_select", listenSentence:"Go straight ahead", options:["straight","left","right","behind"], correctAnswer:"straight", explanation:"الجملة: «اذهب مباشرةً للأمام» — straight = مباشرةً", xp:10 },
      { id:"direction-t0-10", type:"picture_match", word:"map", pictureOptions:[{emoji:"🗺️",label:"map"},{emoji:"🧭",label:"compass"},{emoji:"📍",label:"pin"},{emoji:"🚦",label:"light"}], correctAnswer:"map", explanation:"map = خريطة 🗺️", xp:11 },
    ],
    // MEDIUM — polite questions and prepositions of place
    t1: [
      { id:"direction-t1-1", type:"word_order", sentence:"Excuse me where is the bank", correctAnswer:"Excuse me where is the bank", explanation:"Excuse me — مقدّمة مؤدبة قبل السؤال", xp:13 },
      { id:"direction-t1-2", type:"translate", arabic:"هل يمكنك أن تدلّني على الطريق؟", options:["Could you show me the way?","Could you showing me the way?","Can you showed me the way?","Could you show me way?"], correctAnswer:"Could you show me the way?", explanation:"Could you + مصدر (show) — طلب مؤدب", xp:14 },
      { id:"direction-t1-3", type:"listen_select", listenSentence:"The shop is next to the bank", options:["next","behind","near","opposite"], correctAnswer:"next", explanation:"الجملة: «المتجر بجانب البنك» — next to = بجانب", xp:14 },
      { id:"direction-t1-4", type:"picture_match", word:"bank", pictureOptions:[{emoji:"🏦",label:"bank"},{emoji:"🏥",label:"hospital"},{emoji:"🏫",label:"school"},{emoji:"🏨",label:"hotel"}], correctAnswer:"bank", explanation:"bank = بنك 🏦", xp:13 },
      { id:"direction-t1-5", type:"word_order", sentence:"It is opposite the mosque", correctAnswer:"It is opposite the mosque", explanation:"opposite — مقابل/قبالة", xp:14 },
      { id:"direction-t1-6", type:"translate", arabic:"المتجر بين المطعم والبنك", options:["The shop is between the restaurant and the bank","The shop is among the restaurant and the bank","The shop is between the restaurant or the bank","The shop is in the restaurant and the bank"], correctAnswer:"The shop is between the restaurant and the bank", explanation:"between A and B — بين شيئين", xp:15 },
      { id:"direction-t1-7", type:"translate", arabic:"هل المستشفى بعيد عن هنا؟", options:["Is the hospital far from here?","Is the hospital far of here?","Is the hospital far here?","Is hospital far from here?"], correctAnswer:"Is the hospital far from here?", explanation:"far from here — بعيد عن هنا", xp:14 },
      { id:"direction-t1-8", type:"word_order", sentence:"Take the second street on the right", correctAnswer:"Take the second street on the right", explanation:"the second street on the right — الشارع الثاني على اليمين", xp:14 },
      { id:"direction-t1-9", type:"listen_select", listenSentence:"It is behind the supermarket", options:["behind","front","beside","under"], correctAnswer:"behind", explanation:"الجملة: «إنه خلف السوبر ماركت» — behind = خلف", xp:14 },
      { id:"direction-t1-10", type:"picture_match", word:"traffic light", pictureOptions:[{emoji:"🚦",label:"traffic light"},{emoji:"🛑",label:"stop sign"},{emoji:"🚧",label:"roadblock"},{emoji:"⛽",label:"gas station"}], correctAnswer:"traffic light", explanation:"traffic light = إشارة المرور 🚦", xp:13 },
    ],
    // HARD — detailed instructions, longer routes
    t2: [
      { id:"direction-t2-1", type:"translate", arabic:"عذراً، كيف أصل إلى المتحف؟", options:["Excuse me, how do I get to the museum?","Excuse me, how I get to the museum?","Excuse me, how do I get the museum?","Excuse me, how do I getting to the museum?"], correctAnswer:"Excuse me, how do I get to the museum?", explanation:"how do I get to …? — كيف أصل إلى …؟", xp:16 },
      { id:"direction-t2-2", type:"word_order", sentence:"Go past the traffic lights and turn left", correctAnswer:"Go past the traffic lights and turn left", explanation:"go past — تجاوز/امرّ بجانب", xp:17 },
      { id:"direction-t2-3", type:"listen_select", listenSentence:"Follow this road until the roundabout", options:["roundabout","crossroad","junction","pavement"], correctAnswer:"roundabout", explanation:"الجملة: «اتبع هذا الطريق حتى الدوّار» — roundabout = دوّار", xp:17 },
      { id:"direction-t2-4", type:"picture_match", word:"museum", pictureOptions:[{emoji:"🏛️",label:"museum"},{emoji:"⛪",label:"church"},{emoji:"🕌",label:"mosque"},{emoji:"🏰",label:"castle"}], correctAnswer:"museum", explanation:"museum = متحف 🏛️", xp:16 },
      { id:"direction-t2-5", type:"translate", arabic:"ستجده على يمينك بعد البنك", options:["You'll find it on your right after the bank","You'll find it in your right after the bank","You'll find it on your right before the bank","You'll find it at your right after the bank"], correctAnswer:"You'll find it on your right after the bank", explanation:"on your right — على يمينك، after = بعد", xp:18 },
      { id:"direction-t2-6", type:"word_order", sentence:"It is on the corner of the street", correctAnswer:"It is on the corner of the street", explanation:"on the corner — عند زاوية الشارع", xp:16 },
      { id:"direction-t2-7", type:"translate", arabic:"خذ أول منعطف إلى اليسار", options:["Take the first turning on the left","Take the first turning in the left","Take first turning on the left","Take the one turning on the left"], correctAnswer:"Take the first turning on the left", explanation:"the first turning on the left — أول منعطف يساراً", xp:17 },
      { id:"direction-t2-8", type:"translate", arabic:"إنه على بُعد خمس دقائق سيراً", options:["It's a five-minute walk from here","It's a five-minutes walk from here","It's a five-minute walking from here","It's five-minute walk from here"], correctAnswer:"It's a five-minute walk from here", explanation:"a five-minute walk — الصفة المركّبة بصيغة المفرد", xp:18 },
      { id:"direction-t2-9", type:"listen_select", listenSentence:"Keep walking until you reach the bridge", options:["bridge","tunnel","station","square"], correctAnswer:"bridge", explanation:"الجملة: «استمر بالمشي حتى تصل إلى الجسر» — bridge = جسر", xp:17 },
      { id:"direction-t2-10", type:"picture_match", word:"bridge", pictureOptions:[{emoji:"🌉",label:"bridge"},{emoji:"🛣️",label:"highway"},{emoji:"🚇",label:"metro"},{emoji:"🏞️",label:"park"}], correctAnswer:"bridge", explanation:"bridge = جسر 🌉", xp:16 },
    ],
    // HIGH — getting lost, clarifying, idiomatic phrases
    t3: [
      { id:"direction-t3-1", type:"translate", arabic:"أخشى أنني تهت تماماً", options:["I'm afraid I'm completely lost","I'm afraid I'm complete lost","I'm afraid I lost completely","I'm afraid I'm completely lose"], correctAnswer:"I'm afraid I'm completely lost", explanation:"completely lost — تائه تماماً (completely ظرف)", xp:22 },
      { id:"direction-t3-2", type:"word_order", sentence:"Would you mind pointing me in the right direction", correctAnswer:"Would you mind pointing me in the right direction", explanation:"Would you mind + v-ing — طلب رسمي مؤدب جداً", xp:24 },
      { id:"direction-t3-3", type:"listen_select", listenSentence:"It's within walking distance of the hotel", options:["walking","driving","running","cycling"], correctAnswer:"walking", explanation:"الجملة: «إنه على مسافة قريبة سيراً من الفندق» — walking distance = مسافة مشي", xp:23 },
      { id:"direction-t3-4", type:"picture_match", word:"hotel", pictureOptions:[{emoji:"🏨",label:"hotel"},{emoji:"🏦",label:"bank"},{emoji:"🏪",label:"store"},{emoji:"🏬",label:"mall"}], correctAnswer:"hotel", explanation:"hotel = فندق 🏨", xp:22 },
      { id:"direction-t3-5", type:"translate", arabic:"هل هذا هو الطريق الصحيح إلى وسط المدينة؟", options:["Is this the right way to the city centre?","Is this the right way for the city centre?","Is this right way to the city centre?","Is this the right way to city centre?"], correctAnswer:"Is this the right way to the city centre?", explanation:"the right way to — الطريق الصحيح إلى", xp:24 },
      { id:"direction-t3-6", type:"word_order", sentence:"You can't miss it it's the tall building", correctAnswer:"You can't miss it it's the tall building", explanation:"You can't miss it — لن يفوتك (تعبير شائع للطمأنة)", xp:23 },
      { id:"direction-t3-7", type:"translate", arabic:"انعطف يساراً وسيكون أمامك مباشرةً", options:["Turn left and it'll be right in front of you","Turn left and it'll be right in front you","Turn left and it'll be right front of you","Turn left and it be right in front of you"], correctAnswer:"Turn left and it'll be right in front of you", explanation:"right in front of you — أمامك تماماً", xp:24 },
      { id:"direction-t3-8", type:"translate", arabic:"أعتقد أنك تسير في الاتجاه الخاطئ", options:["I think you're going the wrong way","I think you're go the wrong way","I think you going the wrong way","I think you're going a wrong way"], correctAnswer:"I think you're going the wrong way", explanation:"the wrong way — الاتجاه الخاطئ", xp:23 },
      { id:"direction-t3-9", type:"listen_select", listenSentence:"Head north for about two kilometres", options:["north","south","east","west"], correctAnswer:"north", explanation:"الجملة: «اتجه شمالاً نحو كيلومترين» — north = شمال", xp:24 },
      { id:"direction-t3-10", type:"picture_match", word:"compass", pictureOptions:[{emoji:"🧭",label:"compass"},{emoji:"🗺️",label:"map"},{emoji:"📍",label:"pin"},{emoji:"🚏",label:"bus stop"}], correctAnswer:"compass", explanation:"compass = بوصلة 🧭", xp:25 },
    ],
  },

  // ── Objective: form (am/is/are + V-ing), simple vs continuous, actions now,
  //    and the continuous for future arrangements. ──
  "Present Continuous Tense": {
    // EASY — basic am/is/are + verb-ing for actions now
    t0: [
      { id:"prescont-t0-1", type:"word_order", sentence:"I am reading a book", correctAnswer:"I am reading a book", explanation:"am + reading — حدث يجري الآن مع I", xp:10 },
      { id:"prescont-t0-2", type:"translate", arabic:"هي تطبخ الآن", options:["She is cooking now","She cooking now","She is cook now","She is cooks now"], correctAnswer:"She is cooking now", explanation:"is + cooking — مع she", xp:11 },
      { id:"prescont-t0-3", type:"listen_select", listenSentence:"They are playing football", options:["playing","play","plays","played"], correctAnswer:"playing", explanation:"الجملة: «إنهم يلعبون كرة القدم» — are + playing", xp:10 },
      { id:"prescont-t0-4", type:"picture_match", word:"reading", pictureOptions:[{emoji:"📖",label:"reading"},{emoji:"✍️",label:"writing"},{emoji:"🏃",label:"running"},{emoji:"🍳",label:"cooking"}], correctAnswer:"reading", explanation:"reading = يقرأ 📖", xp:10 },
      { id:"prescont-t0-5", type:"word_order", sentence:"He is sleeping", correctAnswer:"He is sleeping", explanation:"is + sleeping — مع he", xp:11 },
      { id:"prescont-t0-6", type:"translate", arabic:"نحن ندرس الإنجليزية", options:["We are studying English","We studying English","We is studying English","We are study English"], correctAnswer:"We are studying English", explanation:"are + studying — مع we", xp:11 },
      { id:"prescont-t0-7", type:"translate", arabic:"الطفل يبكي", options:["The baby is crying","The baby crying","The baby is cry","The baby are crying"], correctAnswer:"The baby is crying", explanation:"is + crying — مفرد", xp:11 },
      { id:"prescont-t0-8", type:"word_order", sentence:"She is writing a letter", correctAnswer:"She is writing a letter", explanation:"write → writing (نحذف e ونضيف ing)", xp:10 },
      { id:"prescont-t0-9", type:"listen_select", listenSentence:"I am drinking water", options:["drinking","drink","drinks","drank"], correctAnswer:"drinking", explanation:"الجملة: «أنا أشرب الماء» — am + drinking", xp:10 },
      { id:"prescont-t0-10", type:"picture_match", word:"running", pictureOptions:[{emoji:"🏃",label:"running"},{emoji:"🏊",label:"swimming"},{emoji:"🚴",label:"cycling"},{emoji:"🧗",label:"climbing"}], correctAnswer:"running", explanation:"running = يجري 🏃", xp:11 },
    ],
    // MEDIUM — negation, questions, vs present simple
    t1: [
      { id:"prescont-t1-1", type:"word_order", sentence:"What are you doing now", correctAnswer:"What are you doing now", explanation:"What + are + you + doing — سؤال عن حدث جارٍ", xp:13 },
      { id:"prescont-t1-2", type:"translate", arabic:"هو لا يعمل اليوم", options:["He isn't working today","He isn't work today","He doesn't working today","He not working today"], correctAnswer:"He isn't working today", explanation:"isn't + working — النفي في المضارع المستمر", xp:14 },
      { id:"prescont-t1-3", type:"listen_select", listenSentence:"Are you listening to me", options:["listening","listen","listens","listened"], correctAnswer:"listening", explanation:"الجملة: «هل تستمع إليّ؟» — Are + listening", xp:14 },
      { id:"prescont-t1-4", type:"picture_match", word:"cooking", pictureOptions:[{emoji:"🍳",label:"cooking"},{emoji:"🧹",label:"cleaning"},{emoji:"🛏️",label:"sleeping"},{emoji:"📺",label:"watching"}], correctAnswer:"cooking", explanation:"cooking = يطبخ 🍳", xp:13 },
      { id:"prescont-t1-5", type:"word_order", sentence:"Why is the baby crying", correctAnswer:"Why is the baby crying", explanation:"Why + is + فاعل + v-ing", xp:14 },
      { id:"prescont-t1-6", type:"translate", arabic:"إنهم لا يشاهدون التلفاز الآن", options:["They aren't watching TV now","They aren't watch TV now","They don't watching TV now","They isn't watching TV now"], correctAnswer:"They aren't watching TV now", explanation:"aren't + watching — نفي الجمع", xp:15 },
      { id:"prescont-t1-7", type:"translate", arabic:"ماذا تطبخ أمي؟", options:["What is mum cooking?","What is mum cook?","What does mum cooking?","What mum is cooking?"], correctAnswer:"What is mum cooking?", explanation:"What + is + فاعل + cooking", xp:14 },
      { id:"prescont-t1-8", type:"word_order", sentence:"The children are wearing their coats", correctAnswer:"The children are wearing their coats", explanation:"are + wearing — مع الجمع", xp:14 },
      { id:"prescont-t1-9", type:"listen_select", listenSentence:"She is wearing a red dress", options:["wearing","wear","wears","wore"], correctAnswer:"wearing", explanation:"الجملة: «ترتدي فستاناً أحمر» — is + wearing", xp:14 },
      { id:"prescont-t1-10", type:"picture_match", word:"sleeping", pictureOptions:[{emoji:"😴",label:"sleeping"},{emoji:"🍽️",label:"eating"},{emoji:"🚶",label:"walking"},{emoji:"💃",label:"dancing"}], correctAnswer:"sleeping", explanation:"sleeping = ينام 😴", xp:13 },
    ],
    // HARD — simple vs continuous contrast, stative verbs, always + ing
    t2: [
      { id:"prescont-t2-1", type:"translate", arabic:"عادةً أستيقظ مبكراً، لكنني اليوم أنام لوقت متأخر", options:["I usually wake up early, but today I'm sleeping late","I usually waking up early, but today I sleep late","I usually wake up early, but today I sleeping late","I'm usually waking up early, but today I'm sleeping late"], correctAnswer:"I usually wake up early, but today I'm sleeping late", explanation:"البسيط للعادة (usually) والمستمر للاستثناء المؤقت (today)", xp:17 },
      { id:"prescont-t2-2", type:"word_order", sentence:"Look the sun is shining", correctAnswer:"Look the sun is shining", explanation:"is shining — حدث يجري الآن (Look!)", xp:16 },
      { id:"prescont-t2-3", type:"listen_select", listenSentence:"The water is boiling now", options:["boiling","boil","boils","boiled"], correctAnswer:"boiling", explanation:"الجملة: «الماء يغلي الآن» — is + boiling", xp:16 },
      { id:"prescont-t2-4", type:"picture_match", word:"raining", pictureOptions:[{emoji:"🌧️",label:"raining"},{emoji:"☀️",label:"shining"},{emoji:"❄️",label:"snowing"},{emoji:"🌬️",label:"blowing"}], correctAnswer:"raining", explanation:"It is raining — تمطر الآن 🌧️", xp:16 },
      { id:"prescont-t2-5", type:"translate", arabic:"هل تفهم هذا الدرس؟", options:["Do you understand this lesson?","Are you understanding this lesson?","Do you understanding this lesson?","Are you understand this lesson?"], correctAnswer:"Do you understand this lesson?", explanation:"understand فعل حالة لا يأتي في المضارع المستمر", xp:18 },
      { id:"prescont-t2-6", type:"word_order", sentence:"He is always interrupting me", correctAnswer:"He is always interrupting me", explanation:"always + المستمر للتعبير عن التذمّر من عادة مزعجة", xp:17 },
      { id:"prescont-t2-7", type:"translate", arabic:"إنها تتحسّن يوماً بعد يوم", options:["She is getting better every day","She is get better every day","She getting better every day","She are getting better every day"], correctAnswer:"She is getting better every day", explanation:"is + getting — للتغيّر التدريجي", xp:17 },
      { id:"prescont-t2-8", type:"word_order", sentence:"They are building a new bridge", correctAnswer:"They are building a new bridge", explanation:"are + building — مشروع جارٍ الآن", xp:16 },
      { id:"prescont-t2-9", type:"listen_select", listenSentence:"My phone is charging at the moment", options:["charging","charge","charged","charges"], correctAnswer:"charging", explanation:"الجملة: «هاتفي يشحن الآن» — is + charging", xp:17 },
      { id:"prescont-t2-10", type:"picture_match", word:"snowing", pictureOptions:[{emoji:"❄️",label:"snowing"},{emoji:"🌧️",label:"raining"},{emoji:"⛅",label:"clearing"},{emoji:"🌬️",label:"blowing"}], correctAnswer:"snowing", explanation:"It is snowing — تثلج الآن ❄️", xp:16 },
    ],
    // HIGH — future arrangements, subtle nuance
    t3: [
      { id:"prescont-t3-1", type:"translate", arabic:"أنا أقابل المدير غداً صباحاً", options:["I'm meeting the manager tomorrow morning","I'm meet the manager tomorrow morning","I meeting the manager tomorrow morning","I'm meeting the manager in tomorrow morning"], correctAnswer:"I'm meeting the manager tomorrow morning", explanation:"المضارع المستمر لترتيب مستقبلي مؤكد", xp:22 },
      { id:"prescont-t3-2", type:"word_order", sentence:"We are flying to Cairo next week", correctAnswer:"We are flying to Cairo next week", explanation:"are flying … next week — ترتيب مستقبلي مخطط له", xp:23 },
      { id:"prescont-t3-3", type:"listen_select", listenSentence:"She is starting her new job on Monday", options:["starting","start","starts","started"], correctAnswer:"starting", explanation:"الجملة: «ستبدأ عملها الجديد الإثنين» — ترتيب مستقبلي", xp:23 },
      { id:"prescont-t3-4", type:"picture_match", word:"flying", pictureOptions:[{emoji:"✈️",label:"flying"},{emoji:"🚗",label:"driving"},{emoji:"🚆",label:"travelling"},{emoji:"🚢",label:"sailing"}], correctAnswer:"flying", explanation:"flying = يسافر بالطائرة ✈️", xp:22 },
      { id:"prescont-t3-5", type:"translate", arabic:"ماذا تفعل عطلة نهاية الأسبوع المقبلة؟", options:["What are you doing next weekend?","What do you do next weekend?","What are you do next weekend?","What you are doing next weekend?"], correctAnswer:"What are you doing next weekend?", explanation:"المستمر للسؤال عن الخطط المستقبلية", xp:24 },
      { id:"prescont-t3-6", type:"word_order", sentence:"I am seeing the doctor this afternoon", correctAnswer:"I am seeing the doctor this afternoon", explanation:"am seeing — موعد مرتّب مع الطبيب (مستقبل)", xp:23 },
      { id:"prescont-t3-7", type:"translate", arabic:"إنهم يقيمون حفلة يوم السبت", options:["They're having a party on Saturday","They have a party on Saturday","They're have a party on Saturday","They having a party on Saturday"], correctAnswer:"They're having a party on Saturday", explanation:"are having — ترتيب مستقبلي (on Saturday)", xp:24 },
      { id:"prescont-t3-8", type:"translate", arabic:"أنا أنتظر مكالمة مهمة", options:["I'm waiting for an important call","I wait for an important call","I'm waiting an important call","I'm waiting for important call"], correctAnswer:"I'm waiting for an important call", explanation:"wait for — انتظار شيء؛ am waiting حدث جارٍ", xp:24 },
      { id:"prescont-t3-9", type:"listen_select", listenSentence:"The train is arriving in five minutes", options:["arriving","arrive","arrives","arrived"], correctAnswer:"arriving", explanation:"الجملة: «القطار يصل خلال خمس دقائق» — is + arriving", xp:23 },
      { id:"prescont-t3-10", type:"picture_match", word:"celebrating", pictureOptions:[{emoji:"🎉",label:"celebrating"},{emoji:"😴",label:"sleeping"},{emoji:"🧹",label:"cleaning"},{emoji:"🍳",label:"cooking"}], correctAnswer:"celebrating", explanation:"celebrating = يحتفل 🎉", xp:25 },
    ],
  },

  // ── Objective: shopping vocabulary, asking about price and bargaining,
  //    handling money, and common shop phrases. ──
  "Shopping & Money": {
    // EASY — basic shopping words and prices
    t0: [
      { id:"shop-t0-1", type:"word_order", sentence:"How much is this", correctAnswer:"How much is this", explanation:"How much is this? — كم سعر هذا؟", xp:10 },
      { id:"shop-t0-2", type:"translate", arabic:"أريد شراء قميص", options:["I want to buy a shirt","I want buy a shirt","I want to buying a shirt","I want to buy shirt"], correctAnswer:"I want to buy a shirt", explanation:"want to + مصدر (buy)", xp:11 },
      { id:"shop-t0-3", type:"listen_select", listenSentence:"This shirt is very cheap", options:["cheap","expensive","big","small"], correctAnswer:"cheap", explanation:"الجملة: «هذا القميص رخيص جداً» — cheap = رخيص", xp:10 },
      { id:"shop-t0-4", type:"picture_match", word:"money", pictureOptions:[{emoji:"💵",label:"money"},{emoji:"💳",label:"card"},{emoji:"🛍️",label:"bag"},{emoji:"🧾",label:"receipt"}], correctAnswer:"money", explanation:"money = مال 💵", xp:10 },
      { id:"shop-t0-5", type:"word_order", sentence:"I need a new bag", correctAnswer:"I need a new bag", explanation:"a new bag — حقيبة جديدة", xp:11 },
      { id:"shop-t0-6", type:"translate", arabic:"كم سعر هذا؟", options:["How much is this?","How many is this?","How much this is?","How much are this?"], correctAnswer:"How much is this?", explanation:"How much للسعر مع المفرد", xp:11 },
      { id:"shop-t0-7", type:"translate", arabic:"إنه غالٍ جداً", options:["It is too expensive","It is too expensiv","It is to expensive","It is too expansive"], correctAnswer:"It is too expensive", explanation:"too expensive = غالٍ جداً", xp:11 },
      { id:"shop-t0-8", type:"word_order", sentence:"I like this red dress", correctAnswer:"I like this red dress", explanation:"this red dress — هذا الفستان الأحمر", xp:10 },
      { id:"shop-t0-9", type:"listen_select", listenSentence:"Here is your receipt", options:["receipt","money","change","card"], correctAnswer:"receipt", explanation:"الجملة: «هذا إيصالك» — receipt = إيصال", xp:10 },
      { id:"shop-t0-10", type:"picture_match", word:"bag", pictureOptions:[{emoji:"🛍️",label:"bag"},{emoji:"👕",label:"shirt"},{emoji:"👗",label:"dress"},{emoji:"👟",label:"shoes"}], correctAnswer:"bag", explanation:"bag = حقيبة 🛍️", xp:11 },
    ],
    // MEDIUM — trying on, sizes, paying
    t1: [
      { id:"shop-t1-1", type:"word_order", sentence:"Can I try this on", correctAnswer:"Can I try this on", explanation:"try on — يقيس الملابس", xp:13 },
      { id:"shop-t1-2", type:"translate", arabic:"هل لديكم هذا بمقاس أكبر؟", options:["Do you have this in a bigger size?","Do you have this in bigger size?","Do you have this on a bigger size?","Have you this in a bigger size?"], correctAnswer:"Do you have this in a bigger size?", explanation:"in a bigger size — بمقاس أكبر", xp:14 },
      { id:"shop-t1-3", type:"listen_select", listenSentence:"Where is the fitting room", options:["fitting","waiting","living","meeting"], correctAnswer:"fitting", explanation:"الجملة: «أين غرفة القياس؟» — fitting room = غرفة القياس", xp:14 },
      { id:"shop-t1-4", type:"picture_match", word:"shirt", pictureOptions:[{emoji:"👕",label:"shirt"},{emoji:"👖",label:"trousers"},{emoji:"🧥",label:"jacket"},{emoji:"🧤",label:"gloves"}], correctAnswer:"shirt", explanation:"shirt = قميص 👕", xp:13 },
      { id:"shop-t1-5", type:"word_order", sentence:"How much does it cost", correctAnswer:"How much does it cost", explanation:"How much does it cost? — كم يكلّف؟", xp:14 },
      { id:"shop-t1-6", type:"translate", arabic:"أبحث عن حذاء جديد", options:["I'm looking for new shoes","I'm looking for a new shoes","I looking for new shoes","I'm look for new shoes"], correctAnswer:"I'm looking for new shoes", explanation:"look for — يبحث عن؛ shoes جمع بلا a", xp:14 },
      { id:"shop-t1-7", type:"translate", arabic:"هل يمكنني الدفع بالبطاقة؟", options:["Can I pay by card?","Can I pay by a card?","Can I paying by card?","Can I pays by card?"], correctAnswer:"Can I pay by card?", explanation:"pay by card — تعبير ثابت للدفع بالبطاقة (بلا أداة)", xp:15 },
      { id:"shop-t1-8", type:"word_order", sentence:"These shoes are too small", correctAnswer:"These shoes are too small", explanation:"too small — صغير جداً", xp:14 },
      { id:"shop-t1-9", type:"listen_select", listenSentence:"Do you accept credit cards", options:["credit","debit","cash","coin"], correctAnswer:"credit", explanation:"الجملة: «هل تقبلون بطاقات الائتمان؟» — credit card = بطاقة ائتمان", xp:14 },
      { id:"shop-t1-10", type:"picture_match", word:"card", pictureOptions:[{emoji:"💳",label:"card"},{emoji:"💵",label:"cash"},{emoji:"🪙",label:"coin"},{emoji:"🧾",label:"bill"}], correctAnswer:"card", explanation:"card = بطاقة 💳", xp:13 },
    ],
    // HARD — discounts, refunds, exchanges
    t2: [
      { id:"shop-t2-1", type:"translate", arabic:"هل يوجد خصم على هذا الصنف؟", options:["Is there a discount on this item?","Is there a discount in this item?","Is there discount on this item?","Are there a discount on this item?"], correctAnswer:"Is there a discount on this item?", explanation:"a discount on — خصم على صنف", xp:16 },
      { id:"shop-t2-2", type:"word_order", sentence:"Can you give me a better price", correctAnswer:"Can you give me a better price", explanation:"a better price — سعر أفضل (تفاوض مؤدب)", xp:16 },
      { id:"shop-t2-3", type:"listen_select", listenSentence:"They are having a big sale today", options:["sale","price","size","cash"], correctAnswer:"sale", explanation:"الجملة: «لديهم تخفيضات كبيرة اليوم» — sale = تخفيضات", xp:16 },
      { id:"shop-t2-4", type:"picture_match", word:"price tag", pictureOptions:[{emoji:"🏷️",label:"price tag"},{emoji:"🧾",label:"receipt"},{emoji:"💰",label:"wallet"},{emoji:"🛒",label:"trolley"}], correctAnswer:"price tag", explanation:"price tag = بطاقة السعر 🏷️", xp:16 },
      { id:"shop-t2-5", type:"translate", arabic:"أودّ استرداد المال من فضلك", options:["I'd like a refund please","I'd like a refound please","I'd like refund please","I'd like a return money please"], correctAnswer:"I'd like a refund please", explanation:"a refund — استرداد المال", xp:17 },
      { id:"shop-t2-6", type:"word_order", sentence:"Could I get a refund for this", correctAnswer:"Could I get a refund for this", explanation:"a refund for — استرداد ثمن هذا", xp:17 },
      { id:"shop-t2-7", type:"translate", arabic:"هذا أغلى مما توقعت", options:["This is more expensive than I expected","This is more expensive then I expected","This is expensiver than I expected","This is more expensive than I expect"], correctAnswer:"This is more expensive than I expected", explanation:"more expensive than — أغلى من (مقارنة)", xp:18 },
      { id:"shop-t2-8", type:"translate", arabic:"هل يمكنني استبدال هذا بمقاس آخر؟", options:["Can I exchange this for another size?","Can I exchange this for other size?","Can I exchange this with another size?","Can I exchanging this for another size?"], correctAnswer:"Can I exchange this for another size?", explanation:"exchange this for — استبدل هذا بـ", xp:17 },
      { id:"shop-t2-9", type:"listen_select", listenSentence:"Keep the receipt for your refund", options:["receipt","discount","refund","change"], correctAnswer:"receipt", explanation:"الجملة: «احتفظ بالإيصال للاسترداد» — receipt = إيصال", xp:17 },
      { id:"shop-t2-10", type:"picture_match", word:"trolley", pictureOptions:[{emoji:"🛒",label:"trolley"},{emoji:"🛍️",label:"bag"},{emoji:"🧺",label:"basket"},{emoji:"📦",label:"box"}], correctAnswer:"trolley", explanation:"trolley = عربة التسوق 🛒", xp:16 },
    ],
    // HIGH — idiomatic money expressions, negotiation nuance
    t3: [
      { id:"shop-t3-1", type:"translate", arabic:"هذا الفستان يستحق ثمنه تماماً", options:["This dress is worth every penny","This dress is worthy every penny","This dress worth every penny","This dress is worth all penny"], correctAnswer:"This dress is worth every penny", explanation:"worth every penny — تعبير اصطلاحي: يستحق كل قرش", xp:22 },
      { id:"shop-t3-2", type:"word_order", sentence:"I'm just browsing thank you", correctAnswer:"I'm just browsing thank you", explanation:"just browsing — مجرد تصفّح/نظر دون شراء", xp:23 },
      { id:"shop-t3-3", type:"listen_select", listenSentence:"That jacket costs a fortune", options:["fortune","bargain","discount","receipt"], correctAnswer:"fortune", explanation:"الجملة: «تلك السترة تكلّف ثروة» — cost a fortune = باهظ الثمن", xp:23 },
      { id:"shop-t3-4", type:"picture_match", word:"diamond", pictureOptions:[{emoji:"💎",label:"diamond"},{emoji:"💍",label:"ring"},{emoji:"👑",label:"crown"},{emoji:"⌚",label:"watch"}], correctAnswer:"diamond", explanation:"diamond = ماسة (سلعة باهظة) 💎", xp:22 },
      { id:"shop-t3-5", type:"translate", arabic:"اشتريته بنصف السعر", options:["I bought it at half price","I bought it on half price","I buy it at half price","I bought it at a half price"], correctAnswer:"I bought it at half price", explanation:"at half price — بنصف السعر", xp:24 },
      { id:"shop-t3-6", type:"word_order", sentence:"It was an absolute bargain", correctAnswer:"It was an absolute bargain", explanation:"an absolute bargain — صفقة رابحة جداً", xp:23 },
      { id:"shop-t3-7", type:"translate", arabic:"هل يمكنك أن تخفّض السعر قليلاً؟", options:["Could you bring the price down a little?","Could you bring the price down a few?","Could you bringing the price down a little?","Could you bring down the price little?"], correctAnswer:"Could you bring the price down a little?", explanation:"bring the price down — يخفّض السعر", xp:24 },
      { id:"shop-t3-8", type:"translate", arabic:"لقد أنفقت ثروة على الملابس", options:["I've spent a fortune on clothes","I've spend a fortune on clothes","I've spent a fortune in clothes","I've spent fortune on clothes"], correctAnswer:"I've spent a fortune on clothes", explanation:"spend a fortune on — أنفق ثروة على (spend → spent)", xp:24 },
      { id:"shop-t3-9", type:"listen_select", listenSentence:"This offer is an absolute bargain", options:["bargain","fortune","expense","refund"], correctAnswer:"bargain", explanation:"الجملة: «هذا العرض صفقة رابحة» — bargain = صفقة رخيصة", xp:23 },
      { id:"shop-t3-10", type:"picture_match", word:"wallet", pictureOptions:[{emoji:"👛",label:"wallet"},{emoji:"💼",label:"briefcase"},{emoji:"🎒",label:"backpack"},{emoji:"👝",label:"purse"}], correctAnswer:"wallet", explanation:"wallet = محفظة 👛", xp:25 },
    ],
  },
};
