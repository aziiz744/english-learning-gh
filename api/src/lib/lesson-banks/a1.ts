import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// A1 – BEGINNER
// ══════════════════════════════════════════════════════════════

export const a1Banks: Record<string, TieredBank> = {
  // ── GOLD-STANDARD REFERENCE LESSON ──
  // Objective: greetings, introducing yourself (name/age/nationality),
  // courtesy phrases, formal vs informal register.
  "Greetings & Introductions": {
    // EASY — recognition, short sentences
    t0: [
      { id:"greet-t0-1", type:"word_order", sentence:"Hello my name is Omar", correctAnswer:"Hello my name is Omar", explanation:"Hello, my name is... — أبسط طريقة لتعريف النفس", xp:10 },
      { id:"greet-t0-2", type:"translate", arabic:"مرحباً، كيف حالك؟", options:["Hello, how are you?","Hello, who are you?","Hi, how old are you?","Hey, where are you?"], correctAnswer:"Hello, how are you?", explanation:"how are you = كيف حالك", xp:10 },
      { id:"greet-t0-3", type:"listen_select", listenSentence:"Good morning everyone", options:["morning","evening","afternoon","night"], correctAnswer:"morning", explanation:"الجملة: «صباح الخير للجميع» — الكلمة هي morning", xp:10 },
      { id:"greet-t0-4", type:"picture_match", word:"wave hello", pictureOptions:[{emoji:"👋",label:"wave hello"},{emoji:"🤝",label:"handshake"},{emoji:"🙏",label:"thank you"},{emoji:"✋",label:"stop"}], correctAnswer:"wave hello", explanation:"👋 = wave hello = التحية باليد", xp:10 },
      { id:"greet-t0-5", type:"word_order", sentence:"Nice to meet you", correctAnswer:"Nice to meet you", explanation:"Nice to meet you — عبارة المجاملة عند التعارف", xp:10 },
      { id:"greet-t0-6", type:"translate", arabic:"أنا من مصر", options:["I am from Egypt","I am from Egyptian","I from Egypt","I am in Egypt"], correctAnswer:"I am from Egypt", explanation:"I am from + الدولة — للتعريف بالجنسية", xp:10 },
      { id:"greet-t0-7", type:"word_order", sentence:"Good morning teacher", correctAnswer:"Good morning teacher", explanation:"Good morning — تحية الصباح", xp:10 },
      { id:"greet-t0-8", type:"translate", arabic:"اسمي سارة", options:["My name is Sara","My name Sara","I name is Sara","Me name is Sara"], correctAnswer:"My name is Sara", explanation:"My name is + الاسم", xp:10 },
      { id:"greet-t0-9", type:"listen_select", listenSentence:"I am from Saudi Arabia", options:["Saudi Arabia","Egypt","Jordan","Morocco"], correctAnswer:"Saudi Arabia", explanation:"الجملة: «أنا من المملكة العربية السعودية»", xp:10 },
      { id:"greet-t0-10", type:"picture_match", word:"teacher", pictureOptions:[{emoji:"👩‍🏫",label:"teacher"},{emoji:"👨‍⚕️",label:"doctor"},{emoji:"👮",label:"police"},{emoji:"👷",label:"worker"}], correctAnswer:"teacher", explanation:"teacher = مدرّس/ة 👩‍🏫", xp:10 },
    ],
    // MEDIUM — questions, longer sentences
    t1: [
      { id:"greet-t1-1", type:"word_order", sentence:"Where are you from", correctAnswer:"Where are you from", explanation:"Where are you from? — السؤال عن البلد", xp:13 },
      { id:"greet-t1-2", type:"translate", arabic:"كم عمرك؟", options:["How old are you?","How age are you?","What old are you?","How many years you?"], correctAnswer:"How old are you?", explanation:"How old are you? — السؤال عن العمر", xp:13 },
      { id:"greet-t1-3", type:"word_order", sentence:"This is my friend Khalid", correctAnswer:"This is my friend Khalid", explanation:"This is + اسم — لتقديم شخص آخر", xp:13 },
      { id:"greet-t1-4", type:"translate", arabic:"يسعدني لقاؤك، أنا أحمد", options:["Nice to meet you, I am Ahmad","Nice to meet you, I Ahmad","Nice meet you, I am Ahmad","Nice to meeting you, I am Ahmad"], correctAnswer:"Nice to meet you, I am Ahmad", explanation:"Nice to meet you + I am — تحية وتعريف", xp:14 },
      { id:"greet-t1-5", type:"listen_select", listenSentence:"This is my friend Khalid", options:["Khalid","Karim","Kamal","Khaled"], correctAnswer:"Khalid", explanation:"الجملة: «هذا صديقي خالد» — الاسم هو Khalid", xp:13 },
      { id:"greet-t1-6", type:"word_order", sentence:"Let me introduce myself", correctAnswer:"Let me introduce myself", explanation:"Let me introduce myself — دعني أعرّف نفسي", xp:14 },
      { id:"greet-t1-7", type:"translate", arabic:"من أين أنت؟", options:["Where are you from?","Where you are from?","From where you are?","Where do you from?"], correctAnswer:"Where are you from?", explanation:"ترتيب السؤال الصحيح: Where are you from?", xp:13 },
      { id:"greet-t1-8", type:"picture_match", word:"friends", pictureOptions:[{emoji:"👫",label:"friends"},{emoji:"👨‍👩‍👧",label:"family"},{emoji:"🧑‍🤝‍🧑",label:"team"},{emoji:"👶",label:"baby"}], correctAnswer:"friends", explanation:"friends = أصدقاء 👫", xp:13 },
      { id:"greet-t1-9", type:"translate", arabic:"صباح الخير، أنا طالب جديد", options:["Good morning, I am a new student","Good morning, I am new student","Good morning, I a new student","Good morning, I am a student new"], correctAnswer:"Good morning, I am a new student", explanation:"a new student — الصفة قبل الاسم مع أداة a", xp:15 },
      { id:"greet-t1-10", type:"listen_select", listenSentence:"I come from Jordan", options:["Jordan","Sudan","Lebanon","Oman"], correctAnswer:"Jordan", explanation:"الجملة: «أنا قادم من الأردن» — البلد هو Jordan", xp:14 },
    ],
    // HARD — complex sentences, formal/informal, trap distractors
    t2: [
      { id:"greet-t2-1", type:"word_order", sentence:"I would like to introduce my colleague", correctAnswer:"I would like to introduce my colleague", explanation:"I would like to introduce — تقديم رسمي مؤدب", xp:16 },
      { id:"greet-t2-2", type:"translate", arabic:"اسمحوا لي أن أعرّفكم بزميلي", options:["Allow me to introduce my colleague","Allow me introduce my colleague","Let me to introduce my colleague","Allow me introducing my colleague"], correctAnswer:"Allow me to introduce my colleague", explanation:"Allow me to + مصدر — صيغة رسمية للتقديم", xp:17 },
      { id:"greet-t2-3", type:"word_order", sentence:"It is a pleasure to meet you", correctAnswer:"It is a pleasure to meet you", explanation:"It is a pleasure to meet you — تحية رسمية", xp:16 },
      { id:"greet-t2-4", type:"translate", arabic:"كيف تسير أمورك هذه الأيام؟", options:["How are things going these days?","How are things go these days?","How things are going these days?","How is things going these days?"], correctAnswer:"How are things going these days?", explanation:"How are things going? — سؤال غير رسمي عن الأحوال", xp:17 },
      { id:"greet-t2-5", type:"listen_select", listenSentence:"Pleased to make your acquaintance", options:["acquaintance","appointment","arrangement","achievement"], correctAnswer:"acquaintance", explanation:"الجملة: «سررت بمعرفتك» — الكلمة هي acquaintance", xp:18 },
      { id:"greet-t2-6", type:"translate", arabic:"تشرّفت بمعرفتك", options:["I'm pleased to meet you","I'm please to meet you","I pleased to meet you","I'm pleased meeting you"], correctAnswer:"I'm pleased to meet you", explanation:"I'm pleased to meet you — تحية رسمية مهذبة", xp:17 },
      { id:"greet-t2-7", type:"word_order", sentence:"Have we met somewhere before", correctAnswer:"Have we met somewhere before", explanation:"Have we met...? — سؤال عن لقاء سابق", xp:17 },
      { id:"greet-t2-8", type:"picture_match", word:"colleague", pictureOptions:[{emoji:"🧑‍💼",label:"colleague"},{emoji:"👨‍🍳",label:"chef"},{emoji:"🧑‍🌾",label:"farmer"},{emoji:"🧑‍🎤",label:"singer"}], correctAnswer:"colleague", explanation:"colleague = زميل عمل 🧑‍💼", xp:16 },
      { id:"greet-t2-9", type:"translate", arabic:"دعني أقدّم نفسي بإيجاز", options:["Let me briefly introduce myself","Let me brief introduce myself","Let me introduce briefly me","Let me introducing myself briefly"], correctAnswer:"Let me briefly introduce myself", explanation:"briefly — ظرف بين الفاعل المساعد والفعل", xp:18 },
      { id:"greet-t2-10", type:"listen_select", listenSentence:"I don't think we have been introduced", options:["introduced","interested","interrupted","invited"], correctAnswer:"introduced", explanation:"الجملة: «لا أظن أننا تعارفنا» — الكلمة هي introduced", xp:18 },
    ],
    // HIGH — exam-level, idiomatic, register-sensitive
    t3: [
      { id:"greet-t3-1", type:"word_order", sentence:"I don't believe we have had the pleasure", correctAnswer:"I don't believe we have had the pleasure", explanation:"have had the pleasure — تعبير راقٍ للتعارف لأول مرة", xp:22 },
      { id:"greet-t3-2", type:"translate", arabic:"اسمح لي أن أرحّب بك نيابةً عن الفريق", options:["Allow me to welcome you on behalf of the team","Allow me welcome you on behalf the team","Allow me to welcome you in behalf of the team","Let me to welcome you on behalf of the team"], correctAnswer:"Allow me to welcome you on behalf of the team", explanation:"on behalf of — نيابةً عن", xp:24 },
      { id:"greet-t3-3", type:"word_order", sentence:"Please allow me to introduce our guest speaker", correctAnswer:"Please allow me to introduce our guest speaker", explanation:"تقديم المتحدث الضيف بأسلوب رسمي", xp:23 },
      { id:"greet-t3-4", type:"translate", arabic:"تسعدني للغاية مقابلتك أخيراً", options:["I'm absolutely delighted to finally meet you","I'm absolute delighted to finally meet you","I'm absolutely delight to finally meet you","I'm absolutely delighted finally to meet you"], correctAnswer:"I'm absolutely delighted to finally meet you", explanation:"absolutely delighted — مبالغة مؤدبة في السرور", xp:24 },
      { id:"greet-t3-5", type:"listen_select", listenSentence:"It is a real honour to make your acquaintance", options:["honour","honesty","harmony","heritage"], correctAnswer:"honour", explanation:"الجملة: «إنه لشرف حقيقي أن أتعرف بك» — الكلمة هي honour", xp:23 },
      { id:"greet-t3-6", type:"translate", arabic:"كنت أتطلّع لمقابلتك منذ مدة", options:["I've been looking forward to meeting you","I've been looking forward to meet you","I'm looking forward to met you","I've looked forward meeting you"], correctAnswer:"I've been looking forward to meeting you", explanation:"look forward to + v-ing — التطلّع لشيء", xp:24 },
      { id:"greet-t3-7", type:"word_order", sentence:"How do you do I am the new manager", correctAnswer:"How do you do I am the new manager", explanation:"How do you do — تحية رسمية جداً عند أول لقاء", xp:23 },
      { id:"greet-t3-8", type:"picture_match", word:"handshake", pictureOptions:[{emoji:"🤝",label:"handshake"},{emoji:"👏",label:"applause"},{emoji:"🙌",label:"celebrate"},{emoji:"🤲",label:"offer"}], correctAnswer:"handshake", explanation:"handshake = مصافحة 🤝 — التحية الرسمية", xp:22 },
      { id:"greet-t3-9", type:"translate", arabic:"أهلاً بك في الفريق", options:["Welcome aboard","Welcome abroad","Welcome on board the","Welcome a board"], correctAnswer:"Welcome aboard", explanation:"Welcome aboard — تعبير اصطلاحي للترحيب بعضو جديد", xp:24 },
      { id:"greet-t3-10", type:"listen_select", listenSentence:"I would be delighted to introduce you to the board", options:["board","broad","border","boredom"], correctAnswer:"board", explanation:"الجملة: «يسعدني أن أقدّمك لمجلس الإدارة» — الكلمة هي board", xp:25 },
    ],
  },

  // ── THE VERB 'TO BE' ──
  // Objective: am/is/are with pronouns, descriptive sentences, negation, questions.
  "The Verb 'To Be'": {
    // EASY — affirmative am/is/are, recognition
    t0: [
      { id:"tobe-t0-1", type:"word_order", sentence:"I am a student", correctAnswer:"I am a student", explanation:"I + am دائماً", xp:10 },
      { id:"tobe-t0-2", type:"translate", arabic:"هي معلمة", options:["She is a teacher","She are a teacher","She is teacher","She am a teacher"], correctAnswer:"She is a teacher", explanation:"she + is مع المفرد الغائب", xp:10 },
      { id:"tobe-t0-3", type:"listen_select", listenSentence:"She is a doctor", options:["is","am","are","be"], correctAnswer:"is", explanation:"is تُستخدم مع he/she/it", xp:10 },
      { id:"tobe-t0-4", type:"picture_match", word:"happy", pictureOptions:[{emoji:"😀",label:"happy"},{emoji:"😢",label:"sad"},{emoji:"😡",label:"angry"},{emoji:"😴",label:"tired"}], correctAnswer:"happy", explanation:"happy = سعيد 😀", xp:10 },
      { id:"tobe-t0-5", type:"word_order", sentence:"We are friends", correctAnswer:"We are friends", explanation:"we + are مع الجمع", xp:11 },
      { id:"tobe-t0-6", type:"translate", arabic:"أنا سعيد", options:["I am happy","I is happy","I are happy","I be happy"], correctAnswer:"I am happy", explanation:"الضمير I يأخذ am", xp:10 },
      { id:"tobe-t0-7", type:"word_order", sentence:"You are tall", correctAnswer:"You are tall", explanation:"you + are", xp:11 },
      { id:"tobe-t0-8", type:"translate", arabic:"هم طلاب", options:["They are students","They is students","They am students","They are student"], correctAnswer:"They are students", explanation:"they + are، والجمع students", xp:11 },
      { id:"tobe-t0-9", type:"listen_select", listenSentence:"It is a big house", options:["is","are","am","do"], correctAnswer:"is", explanation:"it + is", xp:11 },
      { id:"tobe-t0-10", type:"picture_match", word:"tall", pictureOptions:[{emoji:"🦒",label:"tall"},{emoji:"🐁",label:"small"},{emoji:"🐘",label:"big"},{emoji:"🐈",label:"cat"}], correctAnswer:"tall", explanation:"tall = طويل 🦒", xp:12 },
    ],
    // MEDIUM — negation and questions
    t1: [
      { id:"tobe-t1-1", type:"word_order", sentence:"She is not at home", correctAnswer:"She is not at home", explanation:"is + not للنفي", xp:13 },
      { id:"tobe-t1-2", type:"translate", arabic:"هل أنت طالب؟", options:["Are you a student?","Is you a student?","Am you a student?","You are a student?"], correctAnswer:"Are you a student?", explanation:"السؤال يبدأ بـ Are مع you", xp:13 },
      { id:"tobe-t1-3", type:"word_order", sentence:"Are you ready now", correctAnswer:"Are you ready now", explanation:"Are you...? — صيغة السؤال", xp:13 },
      { id:"tobe-t1-4", type:"translate", arabic:"هو ليس سعيداً", options:["He is not happy","He are not happy","He not is happy","He is no happy"], correctAnswer:"He is not happy", explanation:"is not = النفي مع he", xp:14 },
      { id:"tobe-t1-5", type:"listen_select", listenSentence:"Is she your sister", options:["Is","Are","Am","Was"], correctAnswer:"Is", explanation:"السؤال يبدأ بـ Is مع she", xp:13 },
      { id:"tobe-t1-6", type:"word_order", sentence:"They are not here today", correctAnswer:"They are not here today", explanation:"are not للنفي مع الجمع", xp:14 },
      { id:"tobe-t1-7", type:"translate", arabic:"نحن لسنا متأخرين", options:["We are not late","We is not late","We are not lately","We not are late"], correctAnswer:"We are not late", explanation:"we + are not", xp:14 },
      { id:"tobe-t1-8", type:"picture_match", word:"sad", pictureOptions:[{emoji:"😢",label:"sad"},{emoji:"😀",label:"happy"},{emoji:"😮",label:"surprised"},{emoji:"😎",label:"cool"}], correctAnswer:"sad", explanation:"sad = حزين 😢", xp:13 },
      { id:"tobe-t1-9", type:"translate", arabic:"هل هم في المدرسة؟", options:["Are they at school?","Is they at school?","Are them at school?","They are at school?"], correctAnswer:"Are they at school?", explanation:"Are + they للسؤال", xp:15 },
      { id:"tobe-t1-10", type:"listen_select", listenSentence:"Am I late for the meeting", options:["Am","Is","Are","Be"], correctAnswer:"Am", explanation:"السؤال مع I يبدأ بـ Am", xp:15 },
    ],
    // HARD — contractions, there is/are, short answers, compound
    t2: [
      { id:"tobe-t2-1", type:"word_order", sentence:"There are many books on the table", correctAnswer:"There are many books on the table", explanation:"There are + جمع", xp:16 },
      { id:"tobe-t2-2", type:"translate", arabic:"إنها ليست في المنزل بل في العمل", options:["She isn't at home but at work","She not at home but at work","She isn't at home but in work","She isn't home but at work"], correctAnswer:"She isn't at home but at work", explanation:"isn't = is not، وحرف الجر at work", xp:16 },
      { id:"tobe-t2-3", type:"word_order", sentence:"He is tired but he is happy", correctAnswer:"He is tired but he is happy", explanation:"كل فقرة تحتاج is مع but", xp:16 },
      { id:"tobe-t2-4", type:"translate", arabic:"هل هناك مطعم قريب؟", options:["Is there a restaurant nearby?","Are there a restaurant nearby?","Is there restaurant nearby?","There is a restaurant nearby?"], correctAnswer:"Is there a restaurant nearby?", explanation:"Is there + اسم مفرد", xp:17 },
      { id:"tobe-t2-5", type:"listen_select", listenSentence:"There aren't any students in the class", options:["aren't","isn't","wasn't","weren't"], correctAnswer:"aren't", explanation:"aren't = are not مع الجمع", xp:17 },
      { id:"tobe-t2-6", type:"translate", arabic:"نحن لسنا متأكدين مما إذا كان جاهزاً", options:["We aren't sure if he is ready","We aren't sure if he ready","We not sure if he is ready","We aren't sure is he ready"], correctAnswer:"We aren't sure if he is ready", explanation:"aren't sure if + جملة", xp:17 },
      { id:"tobe-t2-7", type:"word_order", sentence:"My parents are at work and I am at school", correctAnswer:"My parents are at work and I am at school", explanation:"are مع parents و am مع I", xp:17 },
      { id:"tobe-t2-8", type:"picture_match", word:"angry", pictureOptions:[{emoji:"😡",label:"angry"},{emoji:"😀",label:"happy"},{emoji:"😨",label:"scared"},{emoji:"🥱",label:"bored"}], correctAnswer:"angry", explanation:"angry = غاضب 😡", xp:16 },
      { id:"tobe-t2-9", type:"translate", arabic:"أليس هو طبيباً؟", options:["Isn't he a doctor?","Is not he a doctor?","Isn't he doctor?","Aren't he a doctor?"], correctAnswer:"Isn't he a doctor?", explanation:"النفي الاستفهامي: Isn't he...?", xp:18 },
      { id:"tobe-t2-10", type:"listen_select", listenSentence:"Yes she is the new manager", options:["is","are","am","been"], correctAnswer:"is", explanation:"الإجابة القصيرة: Yes, she is", xp:18 },
    ],
    // HIGH — was/were, tag questions, formal/integrative
    t3: [
      { id:"tobe-t3-1", type:"word_order", sentence:"You are the new teacher aren't you", correctAnswer:"You are the new teacher aren't you", explanation:"السؤال الذيلي: ...aren't you?", xp:21 },
      { id:"tobe-t3-2", type:"translate", arabic:"لقد كانوا في الاجتماع طوال الصباح", options:["They were in the meeting all morning","They was in the meeting all morning","They are in the meeting all morning","They were in the meeting all the morning"], correctAnswer:"They were in the meeting all morning", explanation:"were = ماضي are للجمع", xp:22 },
      { id:"tobe-t3-3", type:"word_order", sentence:"She is rarely late for her appointments", correctAnswer:"She is rarely late for her appointments", explanation:"ظرف rarely بعد is", xp:22 },
      { id:"tobe-t3-4", type:"translate", arabic:"إنه ليس مجرد زميل بل صديق مقرّب", options:["He is not just a colleague but a close friend","He is not just colleague but a close friend","He isn't just a colleague but close friend","He is no just a colleague but a close friend"], correctAnswer:"He is not just a colleague but a close friend", explanation:"not just... but — أسلوب توكيد", xp:23 },
      { id:"tobe-t3-5", type:"listen_select", listenSentence:"There have been several changes lately", options:["been","being","be","was"], correctAnswer:"been", explanation:"have been — المضارع التام للفعل be", xp:23 },
      { id:"tobe-t3-6", type:"translate", arabic:"كنتُ متعباً جداً لدرجة أنني لم أستطع التركيز", options:["I was so tired that I couldn't focus","I was so tired that I can't focus","I were so tired that I couldn't focus","I was so tired so I couldn't focus"], correctAnswer:"I was so tired that I couldn't focus", explanation:"so + صفة + that — للنتيجة، was للماضي", xp:24 },
      { id:"tobe-t3-7", type:"word_order", sentence:"They were not aware of the new rules", correctAnswer:"They were not aware of the new rules", explanation:"were not = نفي الماضي للجمع", xp:23 },
      { id:"tobe-t3-8", type:"picture_match", word:"surprised", pictureOptions:[{emoji:"😲",label:"surprised"},{emoji:"😀",label:"happy"},{emoji:"😭",label:"crying"},{emoji:"😐",label:"neutral"}], correctAnswer:"surprised", explanation:"surprised = مندهش 😲", xp:21 },
      { id:"tobe-t3-9", type:"translate", arabic:"إنها واحدة من أكثر المدن أماناً في العالم", options:["It is one of the safest cities in the world","It is one of the safer cities in the world","It is one of safest cities in the world","It are one of the safest cities in the world"], correctAnswer:"It is one of the safest cities in the world", explanation:"It is one of the + تفضيل + جمع", xp:24 },
      { id:"tobe-t3-10", type:"listen_select", listenSentence:"Were you aware of the situation", options:["Were","Was","Are","Been"], correctAnswer:"Were", explanation:"Were you...? — سؤال الماضي مع you", xp:25 },
    ],
  },

  // ── NUMBERS & COUNTING ──
  // Objective: numbers 1–100, ordinals, dates & times, numbers in daily life.
  "Numbers & Counting": {
    // EASY — basic cardinal numbers
    t0: [
      { id:"num-t0-1", type:"word_order", sentence:"I have three books", correctAnswer:"I have three books", explanation:"three = ثلاثة", xp:10 },
      { id:"num-t0-2", type:"translate", arabic:"خمسة", options:["five","four","nine","fifteen"], correctAnswer:"five", explanation:"five = خمسة (5)", xp:10 },
      { id:"num-t0-3", type:"listen_select", listenSentence:"I have seven apples", options:["seven","seventy","eleven","seventeen"], correctAnswer:"seven", explanation:"الجملة: «لدي سبع تفاحات» — العدد seven", xp:10 },
      { id:"num-t0-4", type:"picture_match", word:"three", pictureOptions:[{emoji:"3️⃣",label:"three"},{emoji:"5️⃣",label:"five"},{emoji:"7️⃣",label:"seven"},{emoji:"9️⃣",label:"nine"}], correctAnswer:"three", explanation:"3️⃣ = three", xp:10 },
      { id:"num-t0-5", type:"translate", arabic:"عشرة", options:["ten","two","twelve","twenty"], correctAnswer:"ten", explanation:"ten = عشرة (10)", xp:11 },
      { id:"num-t0-6", type:"word_order", sentence:"There are eight students", correctAnswer:"There are eight students", explanation:"eight = ثمانية", xp:11 },
      { id:"num-t0-7", type:"translate", arabic:"واحد، اثنان، ثلاثة", options:["one, two, three","one, two, four","two, three, four","one, three, five"], correctAnswer:"one, two, three", explanation:"العد التصاعدي: one two three", xp:11 },
      { id:"num-t0-8", type:"listen_select", listenSentence:"She is twelve years old", options:["twelve","twenty","two","ten"], correctAnswer:"twelve", explanation:"الجملة: «عمرها اثنتا عشرة سنة» — twelve", xp:11 },
      { id:"num-t0-9", type:"picture_match", word:"two", pictureOptions:[{emoji:"2️⃣",label:"two"},{emoji:"4️⃣",label:"four"},{emoji:"6️⃣",label:"six"},{emoji:"8️⃣",label:"eight"}], correctAnswer:"two", explanation:"2️⃣ = two", xp:11 },
      { id:"num-t0-10", type:"translate", arabic:"ستة", options:["six","sixteen","sixty","seven"], correctAnswer:"six", explanation:"six = ستة (6)", xp:12 },
    ],
    // MEDIUM — tens, ordinals, prices, telling time
    t1: [
      { id:"num-t1-1", type:"word_order", sentence:"I am twenty years old", correctAnswer:"I am twenty years old", explanation:"twenty = عشرون (20)", xp:13 },
      { id:"num-t1-2", type:"translate", arabic:"خمسة وعشرون", options:["twenty-five","twenty-four","thirty-five","fifty-two"], correctAnswer:"twenty-five", explanation:"twenty-five = 25", xp:13 },
      { id:"num-t1-3", type:"listen_select", listenSentence:"The book costs thirty dollars", options:["thirty","thirteen","three","thirsty"], correctAnswer:"thirty", explanation:"الجملة: «يكلف ثلاثين دولاراً» — thirty (30)", xp:13 },
      { id:"num-t1-4", type:"translate", arabic:"الأول", options:["first","one","once","fourth"], correctAnswer:"first", explanation:"first = الأول (عدد ترتيبي)", xp:14 },
      { id:"num-t1-5", type:"word_order", sentence:"She is the second student", correctAnswer:"She is the second student", explanation:"second = الثاني", xp:14 },
      { id:"num-t1-6", type:"translate", arabic:"كم الساعة؟ إنها الثالثة", options:["What time is it? It's three o'clock","What time it is? It's three o'clock","What time is it? Its three o'clock","How time is it? It's three o'clock"], correctAnswer:"What time is it? It's three o'clock", explanation:"o'clock — للساعة التامة", xp:15 },
      { id:"num-t1-7", type:"picture_match", word:"first", pictureOptions:[{emoji:"🥇",label:"first"},{emoji:"🥈",label:"second"},{emoji:"🥉",label:"third"},{emoji:"🏅",label:"medal"}], correctAnswer:"first", explanation:"🥇 = first = المركز الأول", xp:14 },
      { id:"num-t1-8", type:"translate", arabic:"أربعون", options:["forty","fourteen","four","fourty"], correctAnswer:"forty", explanation:"forty = 40 (تُكتب forty وليس fourty)", xp:14 },
      { id:"num-t1-9", type:"listen_select", listenSentence:"My address is fifteen Main Street", options:["fifteen","fifty","five","fifteenth"], correctAnswer:"fifteen", explanation:"الجملة عن العنوان — الرقم fifteen (15)", xp:15 },
      { id:"num-t1-10", type:"word_order", sentence:"The meeting is at nine thirty", correctAnswer:"The meeting is at nine thirty", explanation:"nine thirty = التاسعة والنصف", xp:15 },
    ],
    // HARD — hundreds, dates, exact times, decimals
    t2: [
      { id:"num-t2-1", type:"word_order", sentence:"There are one hundred and fifty pages", correctAnswer:"There are one hundred and fifty pages", explanation:"one hundred and fifty = 150", xp:16 },
      { id:"num-t2-2", type:"translate", arabic:"الثالث والعشرون من مايو", options:["the twenty-third of May","the twenty-three of May","the thirty-third of May","the twenty-third of March"], correctAnswer:"the twenty-third of May", explanation:"التاريخ: عدد ترتيبي + of + الشهر", xp:16 },
      { id:"num-t2-3", type:"listen_select", listenSentence:"The train leaves at quarter past seven", options:["quarter","half","third","minute"], correctAnswer:"quarter", explanation:"quarter past = والربع", xp:17 },
      { id:"num-t2-4", type:"translate", arabic:"مئتان وخمسون", options:["two hundred and fifty","two hundreds and fifty","two hundred and fifteen","twenty hundred fifty"], correctAnswer:"two hundred and fifty", explanation:"hundred لا تُجمع بعد رقم: two hundred", xp:17 },
      { id:"num-t2-5", type:"word_order", sentence:"The price is ninety nine dollars", correctAnswer:"The price is ninety nine dollars", explanation:"ninety nine = 99", xp:16 },
      { id:"num-t2-6", type:"translate", arabic:"إنها الساعة الثامنة إلا ربعاً", options:["It's a quarter to eight","It's a quarter past eight","It's quarter to eight o'clock","It's a quarter for eight"], correctAnswer:"It's a quarter to eight", explanation:"quarter to = إلا ربعاً", xp:18 },
      { id:"num-t2-7", type:"picture_match", word:"clock", pictureOptions:[{emoji:"🕐",label:"clock"},{emoji:"📅",label:"calendar"},{emoji:"💰",label:"money"},{emoji:"📞",label:"phone"}], correctAnswer:"clock", explanation:"🕐 = clock = الساعة", xp:16 },
      { id:"num-t2-8", type:"translate", arabic:"اثنان فاصلة خمسة", options:["two point five","two comma five","two and five","two dot five"], correctAnswer:"two point five", explanation:"الكسور العشرية تُقرأ بـ point", xp:18 },
      { id:"num-t2-9", type:"listen_select", listenSentence:"It is the fifth of January", options:["fifth","fifteenth","fourth","fiftieth"], correctAnswer:"fifth", explanation:"الجملة عن التاريخ — fifth = الخامس", xp:18 },
      { id:"num-t2-10", type:"word_order", sentence:"The total is three thousand riyals", correctAnswer:"The total is three thousand riyals", explanation:"three thousand = 3000", xp:17 },
    ],
    // HIGH — large numbers, fractions, years, percentages, phone numbers
    t3: [
      { id:"num-t3-1", type:"word_order", sentence:"The population is over two million people", correctAnswer:"The population is over two million people", explanation:"million مفردة بعد العدد: two million", xp:21 },
      { id:"num-t3-2", type:"translate", arabic:"ثلاثة أرباع الطلاب نجحوا", options:["Three quarters of the students passed","Three quarter of the students passed","Three fourths of the student passed","Three quarters of the students passes"], correctAnswer:"Three quarters of the students passed", explanation:"three quarters = ثلاثة أرباع", xp:22 },
      { id:"num-t3-3", type:"listen_select", listenSentence:"He was born in nineteen ninety eight", options:["ninety","nineteen","nine","ninetieth"], correctAnswer:"ninety", explanation:"سنة 1998 تُقرأ nineteen ninety-eight", xp:23 },
      { id:"num-t3-4", type:"translate", arabic:"بلغت الفاتورة ألفاً ومئتين وخمسين دولاراً", options:["The bill came to one thousand two hundred and fifty dollars","The bill came to a thousand two hundreds and fifty dollars","The bill came to one thousand two hundred fifty dollar","The bill came to one thousands two hundred and fifty dollars"], correctAnswer:"The bill came to one thousand two hundred and fifty dollars", explanation:"thousand/hundred مفردة بعد العدد", xp:24 },
      { id:"num-t3-5", type:"word_order", sentence:"Nearly half of the staff are absent today", correctAnswer:"Nearly half of the staff are absent today", explanation:"half of = نصف", xp:22 },
      { id:"num-t3-6", type:"translate", arabic:"يبدأ العرض في تمام الساعة السابعة والنصف مساءً", options:["The show starts at half past seven in the evening","The show starts at seven and half in the evening","The show starts at half to seven in the evening","The show starts at half past seven in evening"], correctAnswer:"The show starts at half past seven in the evening", explanation:"half past seven = السابعة والنصف", xp:24 },
      { id:"num-t3-7", type:"picture_match", word:"calendar", pictureOptions:[{emoji:"📅",label:"calendar"},{emoji:"⏰",label:"alarm"},{emoji:"🧮",label:"abacus"},{emoji:"💵",label:"dollar"}], correctAnswer:"calendar", explanation:"📅 = calendar = التقويم/التاريخ", xp:21 },
      { id:"num-t3-8", type:"translate", arabic:"زاد السعر بنسبة خمسة وعشرين بالمئة", options:["The price increased by twenty-five percent","The price increased by twenty-five percents","The price increased of twenty-five percent","The price increased by twenty-five present"], correctAnswer:"The price increased by twenty-five percent", explanation:"percent لا تُجمع، ونستخدم by للزيادة", xp:24 },
      { id:"num-t3-9", type:"listen_select", listenSentence:"Please call me at five double two seven", options:["double","triple","second","couple"], correctAnswer:"double", explanation:"في أرقام الهاتف نقول double لتكرار الرقم", xp:23 },
      { id:"num-t3-10", type:"word_order", sentence:"Two thirds of the earth is covered with water", correctAnswer:"Two thirds of the earth is covered with water", explanation:"two thirds = ثلثان", xp:25 },
    ],
  },

  // ── COLORS & DESCRIPTIONS ──
  // Objective: colors, descriptive adjectives, adjective order, adjectives with to be.
  "Colors & Descriptions": {
    // EASY — basic colors
    t0: [
      { id:"color-t0-1", type:"word_order", sentence:"The sky is blue", correctAnswer:"The sky is blue", explanation:"الاسم + is + اللون", xp:10 },
      { id:"color-t0-2", type:"translate", arabic:"أحمر", options:["red","blue","green","black"], correctAnswer:"red", explanation:"red = أحمر", xp:10 },
      { id:"color-t0-3", type:"listen_select", listenSentence:"The apple is green", options:["green","red","yellow","brown"], correctAnswer:"green", explanation:"الجملة: «التفاحة خضراء» — green", xp:10 },
      { id:"color-t0-4", type:"picture_match", word:"yellow", pictureOptions:[{emoji:"💛",label:"yellow"},{emoji:"❤️",label:"red"},{emoji:"💙",label:"blue"},{emoji:"💚",label:"green"}], correctAnswer:"yellow", explanation:"💛 = yellow = أصفر", xp:10 },
      { id:"color-t0-5", type:"word_order", sentence:"The grass is green", correctAnswer:"The grass is green", explanation:"green = أخضر", xp:11 },
      { id:"color-t0-6", type:"translate", arabic:"أسود", options:["black","white","brown","grey"], correctAnswer:"black", explanation:"black = أسود", xp:11 },
      { id:"color-t0-7", type:"translate", arabic:"السيارة بيضاء", options:["The car is white","The car is white color","The white car is","The car white is"], correctAnswer:"The car is white", explanation:"الاسم + is + اللون", xp:11 },
      { id:"color-t0-8", type:"listen_select", listenSentence:"My bag is black", options:["black","white","blue","pink"], correctAnswer:"black", explanation:"الجملة: «حقيبتي سوداء» — black", xp:11 },
      { id:"color-t0-9", type:"picture_match", word:"red", pictureOptions:[{emoji:"🍎",label:"red"},{emoji:"🍌",label:"yellow"},{emoji:"🫐",label:"blue"},{emoji:"🥦",label:"green"}], correctAnswer:"red", explanation:"🍎 أحمر = red", xp:11 },
      { id:"color-t0-10", type:"word_order", sentence:"It is a big house", correctAnswer:"It is a big house", explanation:"الصفة big قبل الاسم house", xp:12 },
    ],
    // MEDIUM — adjectives, big/small/old/new, adjective before noun
    t1: [
      { id:"color-t1-1", type:"word_order", sentence:"I have a small old car", correctAnswer:"I have a small old car", explanation:"الصفات قبل الاسم: small old car", xp:13 },
      { id:"color-t1-2", type:"translate", arabic:"بيت كبير", options:["a big house","a house big","a big houses","big a house"], correctAnswer:"a big house", explanation:"الصفة قبل الاسم: big house", xp:13 },
      { id:"color-t1-3", type:"listen_select", listenSentence:"She has a new white phone", options:["white","black","green","red"], correctAnswer:"white", explanation:"الجملة عن هاتف أبيض — white", xp:13 },
      { id:"color-t1-4", type:"translate", arabic:"أحذية قديمة", options:["old shoes","shoes old","olds shoes","old shoe"], correctAnswer:"old shoes", explanation:"الصفة لا تُجمع: old shoes", xp:14 },
      { id:"color-t1-5", type:"word_order", sentence:"This is a long red dress", correctAnswer:"This is a long red dress", explanation:"الحجم/الطول قبل اللون: long red", xp:14 },
      { id:"color-t1-6", type:"translate", arabic:"السماء زرقاء والشمس صفراء", options:["The sky is blue and the sun is yellow","The sky blue and the sun yellow","The sky is blue and the sun yellow is","The blue sky and the yellow sun"], correctAnswer:"The sky is blue and the sun is yellow", explanation:"كل جملة تحتاج is", xp:15 },
      { id:"color-t1-7", type:"picture_match", word:"big", pictureOptions:[{emoji:"🐘",label:"big"},{emoji:"🐜",label:"small"},{emoji:"📏",label:"long"},{emoji:"⚪",label:"round"}], correctAnswer:"big", explanation:"🐘 = big = كبير", xp:14 },
      { id:"color-t1-8", type:"translate", arabic:"كتاب جديد", options:["a new book","a book new","new a book","an new book"], correctAnswer:"a new book", explanation:"الصفة قبل الاسم: new book", xp:14 },
      { id:"color-t1-9", type:"listen_select", listenSentence:"The box is very heavy", options:["heavy","light","empty","small"], correctAnswer:"heavy", explanation:"الجملة: «الصندوق ثقيل جداً» — heavy", xp:15 },
      { id:"color-t1-10", type:"word_order", sentence:"Her eyes are dark brown", correctAnswer:"Her eyes are dark brown", explanation:"dark brown = بني داكن", xp:15 },
    ],
    // HARD — adjective order (opinion-size-age-shape-color-material)
    t2: [
      { id:"color-t2-1", type:"word_order", sentence:"She bought a beautiful long blue dress", correctAnswer:"She bought a beautiful long blue dress", explanation:"الترتيب: رأي ثم حجم ثم لون", xp:16 },
      { id:"color-t2-2", type:"translate", arabic:"سيارة رياضية حمراء جديدة", options:["a new red sports car","a red new sports car","a sports red new car","a new sports red car"], correctAnswer:"a new red sports car", explanation:"الترتيب: العمر ثم اللون ثم الغرض", xp:16 },
      { id:"color-t2-3", type:"listen_select", listenSentence:"He wore an expensive leather jacket", options:["expensive","cheap","old","short"], correctAnswer:"expensive", explanation:"الجملة عن جاكيت غالٍ — expensive", xp:17 },
      { id:"color-t2-4", type:"translate", arabic:"طاولة خشبية مستديرة صغيرة", options:["a small round wooden table","a round small wooden table","a wooden small round table","a small wooden round table"], correctAnswer:"a small round wooden table", explanation:"الترتيب: الحجم ثم الشكل ثم المادة", xp:17 },
      { id:"color-t2-5", type:"word_order", sentence:"They live in a lovely little old house", correctAnswer:"They live in a lovely little old house", explanation:"الترتيب: رأي ثم حجم ثم عمر", xp:17 },
      { id:"color-t2-6", type:"translate", arabic:"اشترت قميصاً قطنياً أبيض", options:["She bought a white cotton shirt","She bought a cotton white shirt","She bought white a cotton shirt","She bought a white cottons shirt"], correctAnswer:"She bought a white cotton shirt", explanation:"اللون قبل المادة: white cotton", xp:17 },
      { id:"color-t2-7", type:"picture_match", word:"round", pictureOptions:[{emoji:"⚪",label:"round"},{emoji:"⬛",label:"square"},{emoji:"🔺",label:"triangle"},{emoji:"📏",label:"straight"}], correctAnswer:"round", explanation:"⚪ = round = مستدير", xp:16 },
      { id:"color-t2-8", type:"translate", arabic:"رجل عجوز لطيف", options:["a nice old man","an old nice man","a nice olds man","old a nice man"], correctAnswer:"a nice old man", explanation:"الرأي قبل العمر: nice old", xp:18 },
      { id:"color-t2-9", type:"listen_select", listenSentence:"The room is bright and spacious", options:["spacious","narrow","dark","dirty"], correctAnswer:"spacious", explanation:"الجملة عن غرفة واسعة — spacious", xp:18 },
      { id:"color-t2-10", type:"word_order", sentence:"He drives a shiny black German car", correctAnswer:"He drives a shiny black German car", explanation:"الترتيب: رأي ثم لون ثم أصل", xp:18 },
    ],
    // HIGH — nuanced shades, idiomatic color expressions
    t3: [
      { id:"color-t3-1", type:"word_order", sentence:"She has a stunning pair of emerald green eyes", correctAnswer:"She has a stunning pair of emerald green eyes", explanation:"emerald green = أخضر زمردي", xp:21 },
      { id:"color-t3-2", type:"translate", arabic:"كان وجهه شاحباً من الخوف", options:["His face turned pale with fear","His face turned pail with fear","His face turned pale of fear","His face turn pale with fear"], correctAnswer:"His face turned pale with fear", explanation:"turn pale = يشحب (pale وليست pail)", xp:23 },
      { id:"color-t3-3", type:"listen_select", listenSentence:"The sunset painted the sky in vivid crimson", options:["crimson","silver","golden","navy"], correctAnswer:"crimson", explanation:"crimson = قرمزي (درجة من الأحمر)", xp:23 },
      { id:"color-t3-4", type:"translate", arabic:"إنه يشعر بالحزن اليوم", options:["He is feeling blue today","He is feeling black today","He is feeling grey today","He is feeling green today"], correctAnswer:"He is feeling blue today", explanation:"feel blue = تعبير اصطلاحي للحزن", xp:24 },
      { id:"color-t3-5", type:"word_order", sentence:"The antique vase was a delicate shade of turquoise", correctAnswer:"The antique vase was a delicate shade of turquoise", explanation:"shade of = درجة لونية، turquoise = فيروزي", xp:23 },
      { id:"color-t3-6", type:"translate", arabic:"حصلت على الضوء الأخضر لبدء المشروع", options:["I got the green light to start the project","I got the green sign to start the project","I got green light to start the project","I got the green lights to start the project"], correctAnswer:"I got the green light to start the project", explanation:"green light = الإذن/الموافقة (تعبير اصطلاحي)", xp:24 },
      { id:"color-t3-7", type:"picture_match", word:"rainbow", pictureOptions:[{emoji:"🌈",label:"rainbow"},{emoji:"☁️",label:"cloud"},{emoji:"🌙",label:"moon"},{emoji:"⭐",label:"star"}], correctAnswer:"rainbow", explanation:"🌈 = rainbow = قوس قزح (كل الألوان)", xp:21 },
      { id:"color-t3-8", type:"translate", arabic:"كان غاضباً جداً لدرجة أن وجهه احمرّ", options:["He was so angry that his face went red","He was so angry that his face went red color","He was so angry his face went red","He was so angry that his face go red"], correctAnswer:"He was so angry that his face went red", explanation:"go/went red = يحمرّ الوجه من الغضب", xp:24 },
      { id:"color-t3-9", type:"listen_select", listenSentence:"The walls were painted a soft pastel shade", options:["pastel","neon","metallic","dull"], correctAnswer:"pastel", explanation:"pastel = الألوان الباهتة الهادئة", xp:23 },
      { id:"color-t3-10", type:"word_order", sentence:"Everything looked grey and gloomy on that rainy day", correctAnswer:"Everything looked grey and gloomy on that rainy day", explanation:"grey and gloomy = رمادي وكئيب", xp:25 },
    ],
  },

  // ── MY DAILY ROUTINE ──
  // Objective: routine verbs, present simple for habits, time expressions, daily habits.
  "My Daily Routine": {
    // EASY — basic routine verbs, present simple
    t0: [
      { id:"routine-t0-1", type:"word_order", sentence:"I wake up early", correctAnswer:"I wake up early", explanation:"wake up = أستيقظ", xp:10 },
      { id:"routine-t0-2", type:"translate", arabic:"أتناول الفطور", options:["I have breakfast","I have a breakfast","I has breakfast","I am breakfast"], correctAnswer:"I have breakfast", explanation:"have breakfast = أتناول الفطور", xp:10 },
      { id:"routine-t0-3", type:"listen_select", listenSentence:"I go to school every day", options:["school","work","home","gym"], correctAnswer:"school", explanation:"الجملة: «أذهب إلى المدرسة كل يوم» — school", xp:10 },
      { id:"routine-t0-4", type:"picture_match", word:"sleep", pictureOptions:[{emoji:"😴",label:"sleep"},{emoji:"🍽️",label:"eat"},{emoji:"🚿",label:"shower"},{emoji:"🏃",label:"run"}], correctAnswer:"sleep", explanation:"😴 = sleep = ينام", xp:10 },
      { id:"routine-t0-5", type:"word_order", sentence:"She goes to work", correctAnswer:"She goes to work", explanation:"she + goes (يضاف es)", xp:11 },
      { id:"routine-t0-6", type:"translate", arabic:"أشرب القهوة", options:["I drink coffee","I drink a coffee","I drinks coffee","I am drink coffee"], correctAnswer:"I drink coffee", explanation:"I + drink (مضارع بسيط)", xp:11 },
      { id:"routine-t0-7", type:"translate", arabic:"هو يستيقظ مبكراً", options:["He wakes up early","He wake up early","He waking up early","He is wakes up early"], correctAnswer:"He wakes up early", explanation:"he + يضاف s للفعل: wakes", xp:11 },
      { id:"routine-t0-8", type:"listen_select", listenSentence:"I brush my teeth in the morning", options:["teeth","hair","hands","face"], correctAnswer:"teeth", explanation:"brush my teeth = أنظّف أسناني", xp:11 },
      { id:"routine-t0-9", type:"picture_match", word:"eat", pictureOptions:[{emoji:"🍽️",label:"eat"},{emoji:"😴",label:"sleep"},{emoji:"📚",label:"study"},{emoji:"🚶",label:"walk"}], correctAnswer:"eat", explanation:"🍽️ = eat = يأكل", xp:11 },
      { id:"routine-t0-10", type:"word_order", sentence:"I go to bed at night", correctAnswer:"I go to bed at night", explanation:"go to bed = أذهب للنوم", xp:12 },
    ],
    // MEDIUM — time expressions, third person s, questions/negation
    t1: [
      { id:"routine-t1-1", type:"word_order", sentence:"She has lunch at noon", correctAnswer:"She has lunch at noon", explanation:"have → has مع she", xp:13 },
      { id:"routine-t1-2", type:"translate", arabic:"أذهب إلى العمل في الصباح", options:["I go to work in the morning","I go to work in morning","I go to work at the morning","I go to work on the morning"], correctAnswer:"I go to work in the morning", explanation:"in the morning — في الصباح", xp:13 },
      { id:"routine-t1-3", type:"listen_select", listenSentence:"He usually exercises in the evening", options:["evening","morning","afternoon","night"], correctAnswer:"evening", explanation:"الجملة: «يتمرّن عادة في المساء» — evening", xp:13 },
      { id:"routine-t1-4", type:"translate", arabic:"هي لا تشرب القهوة", options:["She doesn't drink coffee","She don't drink coffee","She doesn't drinks coffee","She not drink coffee"], correctAnswer:"She doesn't drink coffee", explanation:"doesn't + مصدر مع she", xp:14 },
      { id:"routine-t1-5", type:"word_order", sentence:"I always get up at seven", correctAnswer:"I always get up at seven", explanation:"always قبل الفعل", xp:14 },
      { id:"routine-t1-6", type:"translate", arabic:"متى تستيقظ؟", options:["When do you wake up?","When you wake up?","When do you wake up","When does you wake up?"], correctAnswer:"When do you wake up?", explanation:"When do you + مصدر", xp:15 },
      { id:"routine-t1-7", type:"picture_match", word:"shower", pictureOptions:[{emoji:"🚿",label:"shower"},{emoji:"🛏️",label:"bed"},{emoji:"🍳",label:"cook"},{emoji:"📖",label:"read"}], correctAnswer:"shower", explanation:"🚿 = shower = يستحم", xp:14 },
      { id:"routine-t1-8", type:"translate", arabic:"يقرأ كتاباً قبل النوم", options:["He reads a book before bed","He read a book before bed","He reads a book before the bed","He reads book before bed"], correctAnswer:"He reads a book before bed", explanation:"before bed — قبل النوم", xp:14 },
      { id:"routine-t1-9", type:"listen_select", listenSentence:"We have dinner together at home", options:["dinner","breakfast","lunch","snack"], correctAnswer:"dinner", explanation:"الجملة عن العشاء — dinner", xp:15 },
      { id:"routine-t1-10", type:"word_order", sentence:"They never watch TV in the morning", correctAnswer:"They never watch TV in the morning", explanation:"never قبل الفعل", xp:15 },
    ],
    // HARD — frequency adverbs placement, compound sentences, time clauses
    t2: [
      { id:"routine-t2-1", type:"word_order", sentence:"I usually have breakfast before I leave for work", correctAnswer:"I usually have breakfast before I leave for work", explanation:"usually قبل الفعل، before + جملة", xp:16 },
      { id:"routine-t2-2", type:"translate", arabic:"نادراً ما يصل متأخراً إلى المكتب", options:["He rarely arrives late at the office","He arrives rarely late at the office","He rarely arrive late at the office","He rarely arrives lately at the office"], correctAnswer:"He rarely arrives late at the office", explanation:"ظرف rarely قبل الفعل arrives", xp:17 },
      { id:"routine-t2-3", type:"listen_select", listenSentence:"She takes a quick shower after exercising", options:["after","before","during","while"], correctAnswer:"after", explanation:"after + v-ing — بعد ممارسة الرياضة", xp:17 },
      { id:"routine-t2-4", type:"translate", arabic:"كم مرة تذهب إلى النادي؟", options:["How often do you go to the gym?","How often you go to the gym?","How many do you go to the gym?","How often does you go to the gym?"], correctAnswer:"How often do you go to the gym?", explanation:"How often — كم مرة (سؤال التكرار)", xp:17 },
      { id:"routine-t2-5", type:"word_order", sentence:"After I finish work I go straight home", correctAnswer:"After I finish work I go straight home", explanation:"After + جملة زمنية", xp:16 },
      { id:"routine-t2-6", type:"translate", arabic:"عادةً ما يستغرق الأمر نصف ساعة للوصول إلى العمل", options:["It usually takes half an hour to get to work","It usually take half an hour to get to work","It usually takes half hour to get to work","It usually takes half an hour to getting to work"], correctAnswer:"It usually takes half an hour to get to work", explanation:"It takes + مدة + to + مصدر", xp:18 },
      { id:"routine-t2-7", type:"picture_match", word:"alarm clock", pictureOptions:[{emoji:"⏰",label:"alarm clock"},{emoji:"📱",label:"phone"},{emoji:"📺",label:"television"},{emoji:"☕",label:"coffee"}], correctAnswer:"alarm clock", explanation:"⏰ = alarm clock = المنبّه", xp:16 },
      { id:"routine-t2-8", type:"translate", arabic:"يتفقّد بريده الإلكتروني فور استيقاظه", options:["He checks his email as soon as he wakes up","He checks his email as soon he wakes up","He check his email as soon as he wakes up","He checks his email as soon as he wake up"], correctAnswer:"He checks his email as soon as he wakes up", explanation:"as soon as — حالما/فور", xp:18 },
      { id:"routine-t2-9", type:"listen_select", listenSentence:"My daily routine hardly ever changes", options:["hardly","always","often","sometimes"], correctAnswer:"hardly", explanation:"hardly ever = نادراً جداً", xp:18 },
      { id:"routine-t2-10", type:"word_order", sentence:"On weekdays she gets up at six o'clock", correctAnswer:"On weekdays she gets up at six o'clock", explanation:"On weekdays = في أيام الأسبوع", xp:17 },
    ],
    // HIGH — used to, complex time clauses, idiomatic habit talk
    t3: [
      { id:"routine-t3-1", type:"word_order", sentence:"I tend to unwind with a book before going to sleep", correctAnswer:"I tend to unwind with a book before going to sleep", explanation:"tend to = أميل إلى، unwind = أسترخي", xp:21 },
      { id:"routine-t3-2", type:"translate", arabic:"اعتدتُ أن أستيقظ مبكراً قبل أن أبدأ هذه الوظيفة", options:["I used to wake up early before I started this job","I use to wake up early before I started this job","I used to woke up early before I started this job","I used to wake up early before I start this job"], correctAnswer:"I used to wake up early before I started this job", explanation:"used to + مصدر — عادة في الماضي", xp:23 },
      { id:"routine-t3-3", type:"listen_select", listenSentence:"She juggles work and study throughout the week", options:["juggles","ignores","avoids","forgets"], correctAnswer:"juggles", explanation:"juggle = يوازن بين عدة مهام", xp:23 },
      { id:"routine-t3-4", type:"translate", arabic:"بمجرد أن أنتهي من عملي أذهب للجري", options:["The moment I finish work I go for a run","The moment I finish work I go for run","The moment I finish work I going for a run","The moment I finished work I go for a run"], correctAnswer:"The moment I finish work I go for a run", explanation:"the moment = حالما (جملة زمنية)", xp:24 },
      { id:"routine-t3-5", type:"word_order", sentence:"My mornings are always hectic and rushed", correctAnswer:"My mornings are always hectic and rushed", explanation:"hectic = مزدحم/محموم", xp:22 },
      { id:"routine-t3-6", type:"translate", arabic:"يبدأ يومه دائماً بكوب من الشاي", options:["He always kicks off his day with a cup of tea","He always kick off his day with a cup of tea","He always kicks off his day by a cup of tea","He always kicks his day off with cup of tea"], correctAnswer:"He always kicks off his day with a cup of tea", explanation:"kick off = يبدأ (تعبير اصطلاحي)", xp:24 },
      { id:"routine-t3-7", type:"picture_match", word:"breakfast", pictureOptions:[{emoji:"🍳",label:"breakfast"},{emoji:"🌙",label:"night"},{emoji:"🏢",label:"office"},{emoji:"🛌",label:"nap"}], correctAnswer:"breakfast", explanation:"🍳 = breakfast = الفطور", xp:21 },
      { id:"routine-t3-8", type:"translate", arabic:"يستغرق الأمر مني وقتاً لأستيقظ بشكل كامل في الصباح", options:["It takes me a while to fully wake up in the morning","It takes me a while to full wake up in the morning","It takes me while to fully wake up in the morning","It takes for me a while to fully wake up in the morning"], correctAnswer:"It takes me a while to fully wake up in the morning", explanation:"It takes me a while = يأخذ مني بعض الوقت", xp:24 },
      { id:"routine-t3-9", type:"listen_select", listenSentence:"I like to stick to a strict schedule on weekdays", options:["schedule","holiday","vacation","weekend"], correctAnswer:"schedule", explanation:"stick to a schedule = الالتزام بجدول", xp:23 },
      { id:"routine-t3-10", type:"word_order", sentence:"By the time I get home I am completely exhausted", correctAnswer:"By the time I get home I am completely exhausted", explanation:"By the time = بحلول الوقت الذي", xp:25 },
    ],
  },

  // ── FAMILY MEMBERS ──
  // Objective: family vocabulary, relationships, possessive pronouns, talking about family.
  "Family Members": {
    // EASY — basic family vocabulary
    t0: [
      { id:"family-t0-1", type:"word_order", sentence:"This is my mother", correctAnswer:"This is my mother", explanation:"This is my + الاسم", xp:10 },
      { id:"family-t0-2", type:"translate", arabic:"أب", options:["father","mother","brother","sister"], correctAnswer:"father", explanation:"father = أب", xp:10 },
      { id:"family-t0-3", type:"listen_select", listenSentence:"My brother is ten years old", options:["brother","sister","mother","father"], correctAnswer:"brother", explanation:"الجملة: «أخي عمره عشر سنوات» — brother", xp:10 },
      { id:"family-t0-4", type:"picture_match", word:"baby", pictureOptions:[{emoji:"👶",label:"baby"},{emoji:"👨",label:"man"},{emoji:"👵",label:"grandmother"},{emoji:"👧",label:"girl"}], correctAnswer:"baby", explanation:"👶 = baby = طفل رضيع", xp:10 },
      { id:"family-t0-5", type:"word_order", sentence:"I have one sister", correctAnswer:"I have one sister", explanation:"sister = أخت", xp:11 },
      { id:"family-t0-6", type:"translate", arabic:"أم", options:["mother","father","son","uncle"], correctAnswer:"mother", explanation:"mother = أم", xp:11 },
      { id:"family-t0-7", type:"translate", arabic:"هذا أخي", options:["This is my brother","This my brother","This is my brothers","This is mine brother"], correctAnswer:"This is my brother", explanation:"This is my + الاسم", xp:11 },
      { id:"family-t0-8", type:"listen_select", listenSentence:"My sister likes music", options:["sister","brother","mother","aunt"], correctAnswer:"sister", explanation:"الجملة: «أختي تحب الموسيقى» — sister", xp:11 },
      { id:"family-t0-9", type:"picture_match", word:"family", pictureOptions:[{emoji:"👨‍👩‍👧‍👦",label:"family"},{emoji:"👶",label:"baby"},{emoji:"👫",label:"friends"},{emoji:"🧑‍🏫",label:"teacher"}], correctAnswer:"family", explanation:"👨‍👩‍👧‍👦 = family = العائلة", xp:11 },
      { id:"family-t0-10", type:"word_order", sentence:"My father is a doctor", correctAnswer:"My father is a doctor", explanation:"My father = أبي", xp:12 },
    ],
    // MEDIUM — possessive pronouns, more members, simple description
    t1: [
      { id:"family-t1-1", type:"word_order", sentence:"Her grandmother lives with us", correctAnswer:"Her grandmother lives with us", explanation:"grandmother = الجدة، lives مع المفرد", xp:13 },
      { id:"family-t1-2", type:"translate", arabic:"جدّي كبير في السن", options:["My grandfather is old","My grandfather is older","My grandfather old is","Mine grandfather is old"], correctAnswer:"My grandfather is old", explanation:"My grandfather = جدّي", xp:13 },
      { id:"family-t1-3", type:"listen_select", listenSentence:"His uncle works in Dubai", options:["uncle","aunt","cousin","nephew"], correctAnswer:"uncle", explanation:"الجملة: «عمّه يعمل في دبي» — uncle", xp:13 },
      { id:"family-t1-4", type:"translate", arabic:"هذه ابنتهم", options:["This is their daughter","This is they daughter","This is their daughters","This is theirs daughter"], correctAnswer:"This is their daughter", explanation:"their = ضمير ملكية للجمع", xp:14 },
      { id:"family-t1-5", type:"word_order", sentence:"Our parents are very kind", correctAnswer:"Our parents are very kind", explanation:"Our = لنا (ضمير ملكية)", xp:14 },
      { id:"family-t1-6", type:"translate", arabic:"عمتي تعيش في القاهرة", options:["My aunt lives in Cairo","My aunt live in Cairo","My aunt lives at Cairo","Mine aunt lives in Cairo"], correctAnswer:"My aunt lives in Cairo", explanation:"aunt = عمة/خالة، lives مع المفرد", xp:14 },
      { id:"family-t1-7", type:"picture_match", word:"grandmother", pictureOptions:[{emoji:"👵",label:"grandmother"},{emoji:"👴",label:"grandfather"},{emoji:"👩",label:"mother"},{emoji:"👧",label:"daughter"}], correctAnswer:"grandmother", explanation:"👵 = grandmother = الجدة", xp:14 },
      { id:"family-t1-8", type:"translate", arabic:"كم عدد إخوتك؟", options:["How many brothers do you have?","How many brother do you have?","How much brothers do you have?","How many brothers you have?"], correctAnswer:"How many brothers do you have?", explanation:"How many + جمع + do you have", xp:15 },
      { id:"family-t1-9", type:"listen_select", listenSentence:"Their son goes to university", options:["son","daughter","child","cousin"], correctAnswer:"son", explanation:"الجملة: «ابنهم يذهب للجامعة» — son", xp:15 },
      { id:"family-t1-10", type:"word_order", sentence:"My cousin and I are the same age", correctAnswer:"My cousin and I are the same age", explanation:"cousin = ابن/ابنة العم أو الخال", xp:15 },
    ],
    // HARD — in-law relationships, possessive 's, extended family
    t2: [
      { id:"family-t2-1", type:"word_order", sentence:"My brother's wife is my sister-in-law", correctAnswer:"My brother's wife is my sister-in-law", explanation:"sister-in-law = زوجة الأخ", xp:16 },
      { id:"family-t2-2", type:"translate", arabic:"والد زوجتي لطيف جداً", options:["My father-in-law is very kind","My father in law is very kind","My father-in-laws is very kind","My father-in-law are very kind"], correctAnswer:"My father-in-law is very kind", explanation:"father-in-law = والد الزوج/ة", xp:17 },
      { id:"family-t2-3", type:"listen_select", listenSentence:"My niece just started school", options:["niece","nephew","cousin","sibling"], correctAnswer:"niece", explanation:"niece = ابنة الأخ/الأخت", xp:17 },
      { id:"family-t2-4", type:"translate", arabic:"ابنة عمي تدرس الطب", options:["My cousin studies medicine","My cousin study medicine","My cousins studies medicine","My cousin studying medicine"], correctAnswer:"My cousin studies medicine", explanation:"cousin = ابن/ابنة العم أو الخال", xp:17 },
      { id:"family-t2-5", type:"word_order", sentence:"Sara's husband is an engineer", correctAnswer:"Sara's husband is an engineer", explanation:"الملكية بإضافة 's: Sara's husband", xp:16 },
      { id:"family-t2-6", type:"translate", arabic:"جدّاي من جهة أمي مسافران", options:["My grandparents on my mother's side are travelling","My grandparents in my mother's side are travelling","My grandparents on my mother side are travelling","My grandparent on my mother's side are travelling"], correctAnswer:"My grandparents on my mother's side are travelling", explanation:"on my mother's side = من جهة الأم", xp:18 },
      { id:"family-t2-7", type:"picture_match", word:"couple", pictureOptions:[{emoji:"👩‍❤️‍👨",label:"couple"},{emoji:"👶",label:"baby"},{emoji:"👨‍👩‍👧‍👦",label:"family"},{emoji:"👵",label:"grandmother"}], correctAnswer:"couple", explanation:"👩‍❤️‍👨 = couple = زوجان", xp:16 },
      { id:"family-t2-8", type:"translate", arabic:"ابن أخي أصغر مني بعامين", options:["My nephew is two years younger than me","My nephew is two years younger than I","My nephew is two year younger than me","My nephew is younger two years than me"], correctAnswer:"My nephew is two years younger than me", explanation:"younger than = أصغر من، nephew = ابن الأخ", xp:18 },
      { id:"family-t2-9", type:"listen_select", listenSentence:"My stepfather is a teacher", options:["stepfather","stepmother","father","brother"], correctAnswer:"stepfather", explanation:"stepfather = زوج الأم", xp:18 },
      { id:"family-t2-10", type:"word_order", sentence:"All my relatives gathered for the celebration", correctAnswer:"All my relatives gathered for the celebration", explanation:"relatives = الأقارب", xp:17 },
    ],
    // HIGH — nuanced vocabulary, idiomatic family expressions
    t3: [
      { id:"family-t3-1", type:"word_order", sentence:"My great-grandfather lived to be a hundred", correctAnswer:"My great-grandfather lived to be a hundred", explanation:"great-grandfather = الجد الأكبر", xp:21 },
      { id:"family-t3-2", type:"translate", arabic:"إنهم عائلة مترابطة جداً", options:["They are a very close-knit family","They are a very close-knit families","They are very close-knit family","They are a very closed-knit family"], correctAnswer:"They are a very close-knit family", explanation:"close-knit family = عائلة مترابطة", xp:23 },
      { id:"family-t3-3", type:"listen_select", listenSentence:"She takes after her mother in many ways", options:["after","off","over","up"], correctAnswer:"after", explanation:"take after = يشبه (في الصفات)", xp:23 },
      { id:"family-t3-4", type:"translate", arabic:"تربّى على يد جدّيه", options:["He was raised by his grandparents","He was raise by his grandparents","He was raised from his grandparents","He raised by his grandparents"], correctAnswer:"He was raised by his grandparents", explanation:"was raised by — تربّى على يد (مبني للمجهول)", xp:24 },
      { id:"family-t3-5", type:"word_order", sentence:"Blood is thicker than water they always say", correctAnswer:"Blood is thicker than water they always say", explanation:"Blood is thicker than water = الدم لا يصير ماء (مثل)", xp:22 },
      { id:"family-t3-6", type:"translate", arabic:"هو الابن البكر في العائلة", options:["He is the eldest son in the family","He is the elder son in the family","He is the eldmost son in the family","He is the most eldest son in the family"], correctAnswer:"He is the eldest son in the family", explanation:"eldest = الأكبر سناً (للعائلة)", xp:24 },
      { id:"family-t3-7", type:"picture_match", word:"pregnant", pictureOptions:[{emoji:"🤰",label:"pregnant"},{emoji:"👶",label:"baby"},{emoji:"👰",label:"bride"},{emoji:"👵",label:"grandmother"}], correctAnswer:"pregnant", explanation:"🤰 = pregnant = حامل", xp:21 },
      { id:"family-t3-8", type:"translate", arabic:"نشأنا معاً تحت سقف واحد", options:["We grew up together under one roof","We grew up together under one roofs","We grow up together under one roof","We grew up together under a one roof"], correctAnswer:"We grew up together under one roof", explanation:"under one roof = تحت سقف واحد، grew up = نشأ", xp:24 },
      { id:"family-t3-9", type:"listen_select", listenSentence:"My siblings and I are very supportive of each other", options:["siblings","parents","cousins","neighbours"], correctAnswer:"siblings", explanation:"siblings = الإخوة والأخوات", xp:23 },
      { id:"family-t3-10", type:"word_order", sentence:"Family ties remain strong despite the distance", correctAnswer:"Family ties remain strong despite the distance", explanation:"family ties = الروابط الأسرية", xp:25 },
    ],
  },
};
