import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 2 — قدّم نفسك وعائلتك
// الكلمات الجديدة بالتراكم:
//   درس 1 (t0): name, my name is, what, your, I am, hello
//   درس 2 (t1): + from, where, are, you, nice to meet you
//   درس 3 (t2): + mother, father, brother, sister, family
//   تحدي (t3): جميع الكلمات معاً
// نفس أنماط الوحدة الأولى ونفس المستوى
// ══════════════════════════════════════════════════════════════

export const unit2IntroBank: Record<string, TieredBank> = {

  // ── الدرس 1: ما اسمك؟ ──
  "ما اسمك؟": {
    t0: [
    { id:"in-greet-1", type:"translate", arabic:"صباح الخير", options:["good morning","good night","goodbye","hello"], correctAnswer:"good morning", explanation:"صباح الخير = good morning", xp:10 },
    { id:"in-greet-2", type:"translate", arabic:"تصبح على خير", options:["good night","good morning","goodbye","welcome"], correctAnswer:"good night", explanation:"تصبح على خير = good night", xp:10 },
    { id:"in-greet-3", type:"translate", arabic:"مع السلامة", options:["goodbye","hello","good morning","please"], correctAnswer:"goodbye", explanation:"مع السلامة = goodbye", xp:10 },
    { id:"in-greet-4", type:"translate", arabic:"أهلاً وسهلاً", options:["welcome","goodbye","sorry","good night"], correctAnswer:"welcome", explanation:"أهلاً وسهلاً = welcome", xp:10 },
      { id:"in1-t0-1", type:"translate", arabic:"اسم", options:["name","from","where","family"], correctAnswer:"name", explanation:"name = اسم", xp:10 },
      { id:"in1-t0-2", type:"listen_select", listenSentence:"hello", options:["hello","name","what","you"], correctAnswer:"hello", explanation:"hello = مرحباً 👋", xp:10 },
      { id:"in1-t0-3", type:"translate", arabic:"ما", options:["what","where","who","why"], correctAnswer:"what", explanation:"what = ما/ماذا", xp:10 },
      { id:"in1-t0-4", type:"word_order", sentence:"What is your name", correctAnswer:"What is your name", explanation:"What is your name? = ما اسمك؟", xp:12 },
      { id:"in1-t0-5", type:"listen_select", listenSentence:"My name is Sam", options:["name","hello","from","what"], correctAnswer:"name", explanation:"My name is... = اسمي...", xp:12 },
      { id:"in1-t0-6", type:"translate", arabic:"أنا", options:["I am","you are","he is","we are"], correctAnswer:"I am", explanation:"I am = أنا (أكون)", xp:10 },
      { id:"in1-t0-7", type:"word_order", sentence:"My name is Ali", correctAnswer:"My name is Ali", explanation:"My name is Ali = اسمي علي", xp:12 },
      { id:"in1-t0-8", type:"fill_blank", blankSentence:"What is ___ name", blankOptions:["your","you","my"], correctAnswer:"your", explanation:"your name = اسمك", xp:12 },
      { id:"in1-t0-9", type:"matching", pairs:[{en:"name",ar:"اسم"},{en:"hello",ar:"مرحباً"},{en:"what",ar:"ما"},{en:"I am",ar:"أنا"},{en:"your",ar:"خاصتك"},{en:"friend",ar:"صديق"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الكلمات الأساسية", xp:15 },
    ],
    t1: [
      { id:"in1-t1-1", type:"translate", arabic:"مرحباً", options:["hello","name","what","your"], correctAnswer:"hello", explanation:"hello = مرحباً 👋", xp:12 },
      { id:"in1-t1-2", type:"word_order", sentence:"Hello my name is Sara", correctAnswer:"Hello my name is Sara", explanation:"تقديم النفس: Hello, my name is...", xp:13 },
      { id:"in1-t1-3", type:"listen_select", listenSentence:"What is your name", options:["name","hello","family","from"], correctAnswer:"name", explanation:"What is your name = ما اسمك", xp:12 },
      { id:"in1-t1-4", type:"translate", arabic:"اسمي علي", options:["My name is Ali","Your name is Ali","I am name Ali","Name my Ali"], correctAnswer:"My name is Ali", explanation:"My name is Ali = اسمي علي", xp:13 },
      { id:"in1-t1-5", type:"fill_blank", blankSentence:"___ , my name is Sam", blankOptions:["Hello","Name","What"], correctAnswer:"Hello", explanation:"Hello = مرحباً (بداية التقديم)", xp:13 },
      { id:"in1-t1-6", type:"word_order", sentence:"What is your name please", correctAnswer:"What is your name please", explanation:"سؤال مهذب عن الاسم", xp:13 },
      { id:"in1-t1-7", type:"translate", arabic:"اسمك", options:["your name","my name","his name","the name"], correctAnswer:"your name", explanation:"your name = اسمك", xp:12 },
      { id:"in1-t1-8", type:"matching", pairs:[{en:"my name is",ar:"اسمي"},{en:"your name",ar:"اسمك"},{en:"hello",ar:"مرحباً"},{en:"what",ar:"ما"},{en:"I am",ar:"أنا"},{en:"hi",ar:"أهلاً"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"in1-t1-9", type:"fill_blank", blankSentence:"My ___ is Omar", blankOptions:["name","what","hello"], correctAnswer:"name", explanation:"My name is Omar = اسمي عمر", xp:13 },
    ],
    t2: [
      { id:"in1-t2-1", type:"word_order", sentence:"Hello what is your name", correctAnswer:"Hello what is your name", explanation:"تحية وسؤال عن الاسم", xp:14 },
      { id:"in1-t2-2", type:"translate", arabic:"مرحباً، اسمي سارة", options:["Hello, my name is Sara","Hello, your name is Sara","Hi, I name Sara","Hello, name my Sara"], correctAnswer:"Hello, my name is Sara", explanation:"تقديم كامل للنفس", xp:15 },
      { id:"in1-t2-3", type:"listen_select", listenSentence:"Nice to meet you", options:["nice","name","hello","what"], correctAnswer:"nice", explanation:"Nice to meet you = سررت بلقائك", xp:14 },
      { id:"in1-t2-4", type:"fill_blank", blankSentence:"Nice to ___ you", blankOptions:["meet","name","hello"], correctAnswer:"meet", explanation:"Nice to meet you = سررت بلقائك", xp:15 },
      { id:"in1-t2-5", type:"word_order", sentence:"Nice to meet you", correctAnswer:"Nice to meet you", explanation:"عبارة التعارف", xp:14 },
      { id:"in1-t2-6", type:"translate", arabic:"سررت بلقائك", options:["Nice to meet you","Nice to see you","Good to know you","Happy to meet"], correctAnswer:"Nice to meet you", explanation:"Nice to meet you = سررت بلقائك", xp:15 },
      { id:"in1-t2-7", type:"matching", pairs:[{en:"nice to meet you",ar:"سررت بلقائك"},{en:"my name is",ar:"اسمي"},{en:"hello",ar:"مرحباً"},{en:"what is",ar:"ما هو"},{en:"your name",ar:"اسمك"},{en:"friend",ar:"صديق"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"in1-t2-8", type:"fill_blank", blankSentence:"Hello, ___ name is Sam", blankOptions:["my","your","the"], correctAnswer:"my", explanation:"my name = اسمي", xp:15 },
      { id:"in1-t2-9", type:"listen_select", listenSentence:"My name is Lina", options:["name","nice","hello","meet"], correctAnswer:"name", explanation:"My name is = اسمي", xp:14 },
    ],
    t3: [
      { id:"in1-t3-1", type:"word_order", sentence:"Hello my name is Sam nice to meet you", correctAnswer:"Hello my name is Sam nice to meet you", explanation:"تقديم كامل مع تحية التعارف", xp:18 },
      { id:"in1-t3-2", type:"translate", arabic:"مرحباً، ما اسمك؟", options:["Hello, what is your name?","Hello, what your name?","Hi, your name what?","Hello, name is what?"], correctAnswer:"Hello, what is your name?", explanation:"تحية وسؤال", xp:18 },
      { id:"in1-t3-3", type:"listen_select", listenSentence:"Nice to meet you Sam", options:["nice","name","hello","what"], correctAnswer:"nice", explanation:"Nice to meet you = سررت بلقائك", xp:18 },
      { id:"in1-t3-4", type:"fill_blank", blankSentence:"Nice to meet ___", blankOptions:["you","your","name"], correctAnswer:"you", explanation:"meet you = ألقاك", xp:18 },
      { id:"in1-t3-5", type:"matching", pairs:[{en:"name",ar:"اسم"},{en:"hello",ar:"مرحباً"},{en:"nice to meet you",ar:"سررت بلقائك"},{en:"what",ar:"ما"},{en:"my name is",ar:"اسمي"},{en:"hi",ar:"أهلاً"}], correctAnswer:"matched", explanation:"رائع! راجعت كلمات التقديم", xp:18 },
      { id:"in1-t3-6", type:"word_order", sentence:"What is your name please", correctAnswer:"What is your name please", explanation:"سؤال مهذب", xp:18 },
      { id:"in1-t3-7", type:"translate", arabic:"اسمي عمر، سررت بلقائك", options:["My name is Omar, nice to meet you","I Omar, nice meet you","My name Omar, nice to meet","Name is Omar, meet you"], correctAnswer:"My name is Omar, nice to meet you", explanation:"تقديم كامل", xp:20 },
    ],
  },

  // ── الدرس 2: من أين أنت؟ ──
  "من أين أنت؟": {
    t0: [
      { id:"in2-t0-1", type:"translate", arabic:"من", options:["from","where","what","your"], correctAnswer:"from", explanation:"from = من", xp:10 },
      { id:"in2-t0-2", type:"listen_select", listenSentence:"where", options:["where","from","what","who"], correctAnswer:"where", explanation:"where = أين", xp:10 },
      { id:"in2-t0-3", type:"translate", arabic:"أين", options:["where","from","what","when"], correctAnswer:"where", explanation:"where = أين", xp:10 },
      { id:"in2-t0-4", type:"word_order", sentence:"Where are you from", correctAnswer:"Where are you from", explanation:"Where are you from? = من أين أنت؟", xp:12 },
      { id:"in2-t0-5", type:"listen_select", listenSentence:"I am from Egypt", options:["from","where","name","you"], correctAnswer:"from", explanation:"I am from... = أنا من...", xp:12 },
      { id:"in2-t0-6", type:"translate", arabic:"أنت", options:["you","I","he","we"], correctAnswer:"you", explanation:"you = أنت", xp:10 },
      { id:"in2-t0-7", type:"word_order", sentence:"I am from Saudi Arabia", correctAnswer:"I am from Saudi Arabia", explanation:"I am from = أنا من", xp:12 },
      { id:"in2-t0-8", type:"fill_blank", blankSentence:"Where ___ you from", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"are you = أنت (للسؤال)", xp:12 },
      { id:"in2-t0-9", type:"matching", pairs:[{en:"from",ar:"من"},{en:"where",ar:"أين"},{en:"you",ar:"أنت"},{en:"I am",ar:"أنا"},{en:"are",ar:"تكون"},{en:"country",ar:"بلد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"in2-t1-1", type:"word_order", sentence:"Where are you from", correctAnswer:"Where are you from", explanation:"السؤال عن البلد", xp:13 },
      { id:"in2-t1-2", type:"translate", arabic:"أنا من مصر", options:["I am from Egypt","I from Egypt","I am Egypt from","From I am Egypt"], correctAnswer:"I am from Egypt", explanation:"I am from Egypt = أنا من مصر", xp:13 },
      { id:"in2-t1-3", type:"listen_select", listenSentence:"Where are you from", options:["where","from","name","hello"], correctAnswer:"where", explanation:"Where = أين", xp:12 },
      { id:"in2-t1-4", type:"fill_blank", blankSentence:"I am ___ Saudi Arabia", blankOptions:["from","where","are"], correctAnswer:"from", explanation:"from = من", xp:13 },
      { id:"in2-t1-5", type:"word_order", sentence:"I am from Jordan", correctAnswer:"I am from Jordan", explanation:"ذكر البلد", xp:13 },
      { id:"in2-t1-6", type:"translate", arabic:"من أين أنت؟", options:["Where are you from?","Where you from?","From where you?","Where from are you?"], correctAnswer:"Where are you from?", explanation:"Where are you from? = من أين أنت؟", xp:13 },
      { id:"in2-t1-7", type:"matching", pairs:[{en:"where are you",ar:"أين أنت"},{en:"I am from",ar:"أنا من"},{en:"you",ar:"أنت"},{en:"from",ar:"من"},{en:"where",ar:"أين"},{en:"city",ar:"مدينة"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"in2-t1-8", type:"fill_blank", blankSentence:"Where are ___ from", blankOptions:["you","I","we"], correctAnswer:"you", explanation:"are you = أنت", xp:13 },
      { id:"in2-t1-9", type:"listen_select", listenSentence:"I am from Qatar", options:["from","where","name","you"], correctAnswer:"from", explanation:"I am from = أنا من", xp:12 },
    ],
    t2: [
      { id:"in2-t2-1", type:"word_order", sentence:"Where are you from my friend", correctAnswer:"Where are you from my friend", explanation:"سؤال ودود عن البلد", xp:14 },
      { id:"in2-t2-2", type:"translate", arabic:"أنا من السعودية، وأنت؟", options:["I am from Saudi Arabia, and you?","I from Saudi, you?","I am Saudi from, and you?","From Saudi I am, you?"], correctAnswer:"I am from Saudi Arabia, and you?", explanation:"ذكر البلد ثم السؤال", xp:15 },
      { id:"in2-t2-3", type:"listen_select", listenSentence:"He is from Egypt", options:["from","where","name","you"], correctAnswer:"from", explanation:"He is from = هو من", xp:14 },
      { id:"in2-t2-4", type:"fill_blank", blankSentence:"She is ___ Lebanon", blankOptions:["from","where","are"], correctAnswer:"from", explanation:"She is from = هي من", xp:15 },
      { id:"in2-t2-5", type:"word_order", sentence:"He is from a big city", correctAnswer:"He is from a big city", explanation:"He is from = هو من", xp:14 },
      { id:"in2-t2-6", type:"translate", arabic:"هي من الأردن", options:["She is from Jordan","She from Jordan","She is Jordan from","From Jordan she is"], correctAnswer:"She is from Jordan", explanation:"She is from Jordan = هي من الأردن", xp:15 },
      { id:"in2-t2-7", type:"matching", pairs:[{en:"he is from",ar:"هو من"},{en:"she is from",ar:"هي من"},{en:"I am from",ar:"أنا من"},{en:"where",ar:"أين"},{en:"from",ar:"من"},{en:"country",ar:"بلد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"in2-t2-8", type:"fill_blank", blankSentence:"Where ___ she from", blankOptions:["is","are","am"], correctAnswer:"is", explanation:"is she = هي (مفرد)", xp:15 },
      { id:"in2-t2-9", type:"listen_select", listenSentence:"She is from Dubai", options:["from","where","name","you"], correctAnswer:"from", explanation:"She is from = هي من", xp:14 },
    ],
    t3: [
      { id:"in2-t3-1", type:"word_order", sentence:"Where are you from and what is your name", correctAnswer:"Where are you from and what is your name", explanation:"سؤالان معاً", xp:18 },
      { id:"in2-t3-2", type:"translate", arabic:"أنا من مصر، سررت بلقائك", options:["I am from Egypt, nice to meet you","I Egypt from, nice meet","From Egypt I, nice to meet","I am Egypt, meet you nice"], correctAnswer:"I am from Egypt, nice to meet you", explanation:"تقديم كامل مع البلد", xp:20 },
      { id:"in2-t3-3", type:"listen_select", listenSentence:"Where are you from", options:["where","from","name","you"], correctAnswer:"where", explanation:"Where = أين", xp:18 },
      { id:"in2-t3-4", type:"fill_blank", blankSentence:"I am from ___ , and you?", blankOptions:["Egypt","where","from"], correctAnswer:"Egypt", explanation:"ذكر البلد", xp:18 },
      { id:"in2-t3-5", type:"matching", pairs:[{en:"where",ar:"أين"},{en:"from",ar:"من"},{en:"you",ar:"أنت"},{en:"I am",ar:"أنا"},{en:"country",ar:"بلد"},{en:"city",ar:"مدينة"}], correctAnswer:"matched", explanation:"رائع!", xp:18 },
      { id:"in2-t3-6", type:"word_order", sentence:"I am from Saudi Arabia", correctAnswer:"I am from Saudi Arabia", explanation:"ذكر البلد", xp:18 },
      { id:"in2-t3-7", type:"translate", arabic:"من أين أنتم؟", options:["Where are you all from?","Where you all from?","From where you all?","Where all from you?"], correctAnswer:"Where are you all from?", explanation:"السؤال للجمع", xp:20 },
    ],
  },

  // ── الدرس 3: عائلتك ──
  "عائلتك": {
    t0: [
      { id:"in3-t0-1", type:"translate", arabic:"أم", options:["mother","father","sister","brother"], correctAnswer:"mother", explanation:"mother = أم", xp:10 },
      { id:"in3-t0-2", type:"translate", arabic:"أب", options:["father","mother","brother","family"], correctAnswer:"father", explanation:"father = أب", xp:10 },
      { id:"in3-t0-3", type:"listen_select", listenSentence:"sister", options:["sister","brother","mother","father"], correctAnswer:"sister", explanation:"sister = أخت", xp:10 },
      { id:"in3-t0-4", type:"translate", arabic:"أخ", options:["brother","sister","father","family"], correctAnswer:"brother", explanation:"brother = أخ", xp:10 },
      { id:"in3-t0-5", type:"translate", arabic:"عائلة", options:["family","mother","father","sister"], correctAnswer:"family", explanation:"family = عائلة", xp:10 },
      { id:"in3-t0-6", type:"word_order", sentence:"This is my mother", correctAnswer:"This is my mother", explanation:"This is my mother = هذه أمي", xp:12 },
      { id:"in3-t0-7", type:"listen_select", listenSentence:"my family", options:["family","mother","father","sister"], correctAnswer:"family", explanation:"my family = عائلتي", xp:12 },
      { id:"in3-t0-8", type:"fill_blank", blankSentence:"This is my ___", blankOptions:["father","from","where"], correctAnswer:"father", explanation:"my father = أبي", xp:12 },
      { id:"in3-t0-9", type:"matching", pairs:[{en:"mother",ar:"أم"},{en:"father",ar:"أب"},{en:"brother",ar:"أخ"},{en:"sister",ar:"أخت"},{en:"family",ar:"عائلة"},{en:"son",ar:"ابن"}], correctAnswer:"matched", explanation:"أحسنت! طابقت أفراد العائلة", xp:15 },
    ],
    t1: [
      { id:"in3-t1-1", type:"word_order", sentence:"This is my family", correctAnswer:"This is my family", explanation:"This is my family = هذه عائلتي", xp:13 },
      { id:"in3-t1-2", type:"translate", arabic:"هذه أختي", options:["This is my sister","This my sister","This is sister my","Sister is my this"], correctAnswer:"This is my sister", explanation:"This is my sister = هذه أختي", xp:13 },
      { id:"in3-t1-3", type:"listen_select", listenSentence:"I have a brother", options:["brother","sister","mother","family"], correctAnswer:"brother", explanation:"I have a brother = لديّ أخ", xp:12 },
      { id:"in3-t1-4", type:"fill_blank", blankSentence:"I have a ___ and a sister", blankOptions:["brother","father","family"], correctAnswer:"brother", explanation:"brother and sister = أخ وأخت", xp:13 },
      { id:"in3-t1-5", type:"word_order", sentence:"I have a big family", correctAnswer:"I have a big family", explanation:"I have a big family = لديّ عائلة كبيرة", xp:13 },
      { id:"in3-t1-6", type:"translate", arabic:"هذا أبي", options:["This is my father","This my father","Father is my this","This is father my"], correctAnswer:"This is my father", explanation:"This is my father = هذا أبي", xp:13 },
      { id:"in3-t1-7", type:"matching", pairs:[{en:"family",ar:"عائلة"},{en:"mother",ar:"أم"},{en:"this is",ar:"هذا/هذه"},{en:"I have",ar:"لديّ"},{en:"father",ar:"أب"},{en:"daughter",ar:"بنت"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"in3-t1-8", type:"fill_blank", blankSentence:"This is ___ mother", blankOptions:["my","I","me"], correctAnswer:"my", explanation:"my mother = أمي", xp:13 },
      { id:"in3-t1-9", type:"listen_select", listenSentence:"my sister", options:["sister","brother","mother","family"], correctAnswer:"sister", explanation:"my sister = أختي", xp:12 },
    ],
    t2: [
      { id:"in3-t2-1", type:"word_order", sentence:"I have a mother and a father", correctAnswer:"I have a mother and a father", explanation:"ذكر الوالدين", xp:14 },
      { id:"in3-t2-2", type:"translate", arabic:"لديّ أخ وأخت", options:["I have a brother and a sister","I have brother sister","I a brother and sister","Have I a brother sister"], correctAnswer:"I have a brother and a sister", explanation:"ذكر الإخوة", xp:15 },
      { id:"in3-t2-3", type:"listen_select", listenSentence:"This is my mother", options:["mother","father","sister","brother"], correctAnswer:"mother", explanation:"my mother = أمي", xp:14 },
      { id:"in3-t2-4", type:"fill_blank", blankSentence:"My mother and ___ are here", blankOptions:["father","from","where"], correctAnswer:"father", explanation:"mother and father = الأم والأب", xp:15 },
      { id:"in3-t2-5", type:"word_order", sentence:"My family is very big", correctAnswer:"My family is very big", explanation:"وصف العائلة", xp:14 },
      { id:"in3-t2-6", type:"translate", arabic:"هذه عائلتي الكبيرة", options:["This is my big family","This my big family","This is big family my","My big family this is"], correctAnswer:"This is my big family", explanation:"This is my big family = هذه عائلتي الكبيرة", xp:15 },
      { id:"in3-t2-7", type:"matching", pairs:[{en:"brother",ar:"أخ"},{en:"sister",ar:"أخت"},{en:"father",ar:"أب"},{en:"mother",ar:"أم"},{en:"family",ar:"عائلة"},{en:"grandfather",ar:"جد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"in3-t2-8", type:"fill_blank", blankSentence:"I have ___ brothers", blankOptions:["two","from","where"], correctAnswer:"two", explanation:"two brothers = أخوان", xp:15 },
      { id:"in3-t2-9", type:"listen_select", listenSentence:"my brother and sister", options:["brother","family","mother","father"], correctAnswer:"brother", explanation:"brother and sister = أخ وأخت", xp:14 },
    ],
    t3: [
      { id:"in3-t3-1", type:"word_order", sentence:"This is my family my mother and my father", correctAnswer:"This is my family my mother and my father", explanation:"تقديم العائلة", xp:18 },
      { id:"in3-t3-2", type:"translate", arabic:"لديّ عائلة كبيرة وجميلة", options:["I have a big and nice family","I have big nice family","I a big family nice","Family big nice I have"], correctAnswer:"I have a big and nice family", explanation:"وصف العائلة", xp:20 },
      { id:"in3-t3-3", type:"listen_select", listenSentence:"This is my sister", options:["sister","brother","mother","father"], correctAnswer:"sister", explanation:"my sister = أختي", xp:18 },
      { id:"in3-t3-4", type:"fill_blank", blankSentence:"My ___ and father are kind", blankOptions:["mother","from","where"], correctAnswer:"mother", explanation:"mother and father = الوالدان", xp:18 },
      { id:"in3-t3-5", type:"matching", pairs:[{en:"family",ar:"عائلة"},{en:"mother",ar:"أم"},{en:"father",ar:"أب"},{en:"brother",ar:"أخ"},{en:"sister",ar:"أخت"},{en:"son",ar:"ابن"}], correctAnswer:"matched", explanation:"رائع! راجعت كلمات العائلة", xp:18 },
      { id:"in3-t3-6", type:"word_order", sentence:"I love my family", correctAnswer:"I love my family", explanation:"I love my family = أحب عائلتي", xp:18 },
      { id:"in3-t3-7", type:"translate", arabic:"هذا أخي وهذه أختي", options:["This is my brother and this is my sister","This my brother and sister","Brother and sister my this","This is brother sister my"], correctAnswer:"This is my brother and this is my sister", explanation:"تقديم الإخوة", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة (كل الكلمات) ──
  "تحدي الوحدة": {
    t0: [
      { id:"inc-t0-1", type:"word_order", sentence:"Hello what is your name", correctAnswer:"Hello what is your name", explanation:"تحية وسؤال", xp:15 },
      { id:"inc-t0-2", type:"translate", arabic:"اسمي علي، وأنت؟", options:["My name is Ali, and you?","I Ali, you?","Name Ali, and you?","My is Ali name, you?"], correctAnswer:"My name is Ali, and you?", explanation:"تقديم وسؤال", xp:15 },
      { id:"inc-t0-3", type:"listen_select", listenSentence:"Where are you from", options:["where","from","name","family"], correctAnswer:"where", explanation:"Where = أين", xp:15 },
      { id:"inc-t0-4", type:"fill_blank", blankSentence:"I am ___ Egypt", blankOptions:["from","where","name"], correctAnswer:"from", explanation:"I am from = أنا من", xp:15 },
      { id:"inc-t0-5", type:"matching", pairs:[{en:"name",ar:"اسم"},{en:"from",ar:"من"},{en:"family",ar:"عائلة"},{en:"hello",ar:"مرحباً"},{en:"where",ar:"أين"},{en:"friend",ar:"صديق"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"inc-t0-6", type:"translate", arabic:"هذه عائلتي", options:["This is my family","This my family","Family is my this","My family this is"], correctAnswer:"This is my family", explanation:"تقديم العائلة", xp:15 },
      { id:"inc-t0-7", type:"word_order", sentence:"Nice to meet you", correctAnswer:"Nice to meet you", explanation:"التعارف", xp:15 },
    ],
    t1: [
      { id:"inc-t1-1", type:"translate", arabic:"مرحباً، اسمي سارة، سررت بلقائك", options:["Hello, my name is Sara, nice to meet you","Hi, name Sara, meet you","Hello, I Sara, nice meet","My name Sara, nice to meet"], correctAnswer:"Hello, my name is Sara, nice to meet you", explanation:"تقديم كامل", xp:16 },
      { id:"inc-t1-2", type:"word_order", sentence:"Where are you from", correctAnswer:"Where are you from", explanation:"السؤال عن البلد", xp:16 },
      { id:"inc-t1-3", type:"listen_select", listenSentence:"This is my mother", options:["mother","father","sister","brother"], correctAnswer:"mother", explanation:"my mother = أمي", xp:16 },
      { id:"inc-t1-4", type:"fill_blank", blankSentence:"This is my ___ and sister", blankOptions:["brother","from","where"], correctAnswer:"brother", explanation:"brother and sister = أخ وأخت", xp:16 },
      { id:"inc-t1-5", type:"matching", pairs:[{en:"mother",ar:"أم"},{en:"father",ar:"أب"},{en:"brother",ar:"أخ"},{en:"sister",ar:"أخت"},{en:"family",ar:"عائلة"},{en:"son",ar:"ابن"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"inc-t1-6", type:"translate", arabic:"أنا من السعودية", options:["I am from Saudi Arabia","I from Saudi","I Saudi from","From Saudi I am"], correctAnswer:"I am from Saudi Arabia", explanation:"ذكر البلد", xp:16 },
      { id:"inc-t1-7", type:"word_order", sentence:"I have a big family", correctAnswer:"I have a big family", explanation:"وصف العائلة", xp:16 },
    ],
    t2: [
      { id:"inc-t2-1", type:"word_order", sentence:"Hello my name is Sam I am from Egypt", correctAnswer:"Hello my name is Sam I am from Egypt", explanation:"تقديم كامل مع البلد", xp:18 },
      { id:"inc-t2-2", type:"translate", arabic:"من أين أنت وما اسمك؟", options:["Where are you from and what is your name?","Where you from, name what?","From where, your name?","Where and what name you?"], correctAnswer:"Where are you from and what is your name?", explanation:"سؤالان", xp:18 },
      { id:"inc-t2-3", type:"listen_select", listenSentence:"This is my family", options:["family","mother","father","brother"], correctAnswer:"family", explanation:"my family = عائلتي", xp:18 },
      { id:"inc-t2-4", type:"fill_blank", blankSentence:"Nice to ___ you", blankOptions:["meet","name","from"], correctAnswer:"meet", explanation:"Nice to meet you", xp:18 },
      { id:"inc-t2-5", type:"matching", pairs:[{en:"nice to meet you",ar:"سررت بلقائك"},{en:"where are you from",ar:"من أين أنت"},{en:"my name is",ar:"اسمي"},{en:"family",ar:"عائلة"},{en:"hello",ar:"مرحباً"},{en:"friend",ar:"صديق"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"inc-t2-6", type:"translate", arabic:"هذه أمي وهذا أبي", options:["This is my mother and this is my father","This mother father my","My mother and father this","This is mother and father"], correctAnswer:"This is my mother and this is my father", explanation:"تقديم الوالدين", xp:18 },
      { id:"inc-t2-7", type:"word_order", sentence:"I love my family very much", correctAnswer:"I love my family very much", explanation:"التعبير عن الحب", xp:18 },
    ],
    t3: [
      { id:"inc-t3-1", type:"word_order", sentence:"Hello my name is Sam and I am from Egypt nice to meet you", correctAnswer:"Hello my name is Sam and I am from Egypt nice to meet you", explanation:"تقديم شامل كامل", xp:22 },
      { id:"inc-t3-2", type:"translate", arabic:"أنا من السعودية ولديّ عائلة كبيرة", options:["I am from Saudi Arabia and I have a big family","I Saudi and big family","From Saudi, family big","I am Saudi, have family big"], correctAnswer:"I am from Saudi Arabia and I have a big family", explanation:"تقديم شامل", xp:22 },
      { id:"inc-t3-3", type:"listen_select", listenSentence:"Nice to meet you", options:["nice","name","from","family"], correctAnswer:"nice", explanation:"Nice to meet you = سررت بلقائك", xp:20 },
      { id:"inc-t3-4", type:"fill_blank", blankSentence:"This is my ___ , my mother and father", blankOptions:["family","name","from"], correctAnswer:"family", explanation:"my family = عائلتي", xp:22 },
      { id:"inc-t3-5", type:"matching", pairs:[{en:"name",ar:"اسم"},{en:"from",ar:"من"},{en:"family",ar:"عائلة"},{en:"nice to meet you",ar:"سررت بلقائك"},{en:"hello",ar:"مرحباً"},{en:"where",ar:"أين"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"inc-t3-6", type:"word_order", sentence:"What is your name and where are you from", correctAnswer:"What is your name and where are you from", explanation:"سؤالان للتعارف", xp:22 },
      { id:"inc-t3-7", type:"translate", arabic:"مرحباً، اسمي عمر، أنا من الأردن، سررت بلقائك", options:["Hello, my name is Omar, I am from Jordan, nice to meet you","Hi Omar from Jordan, meet you","Hello Omar, Jordan, nice","My name Omar Jordan meet"], correctAnswer:"Hello, my name is Omar, I am from Jordan, nice to meet you", explanation:"تقديم كامل شامل 👑", xp:24 },
    ],
  },
};
