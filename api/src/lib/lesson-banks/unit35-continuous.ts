import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 35: استخدم المضارع المستمر (ing)
//   درس 1: تكوين ing — am/is/are + verb-ing
//   درس 2: أفعال شائعة — eating, reading, watching, playing
//   درس 3: استخدامه — now, at the moment, right now
// ══════════════════════════════════════════════════════════════

export const unit35ContinuousBank: Record<string, TieredBank> = {

  "تكوين ing": {
    t0: [
      { id:"pc1-t0-1", type:"fill_blank", blankSentence:"I am ___", blankOptions:["reading","read","reads"], correctAnswer:"reading", explanation:"am + reading = أقرأ الآن", xp:10 },
      { id:"pc1-t0-2", type:"translate", arabic:"أنا آكل", options:["I am eating","I eat","I eats","I eating"], correctAnswer:"I am eating", explanation:"I am eating = أنا آكل (الآن)", xp:10 },
      { id:"pc1-t0-3", type:"word_order", sentence:"She is reading a book", correctAnswer:"She is reading a book", explanation:"هي تقرأ كتاباً", xp:12 },
      { id:"pc1-t0-4", type:"fill_blank", blankSentence:"He is ___ football", blankOptions:["playing","play","plays"], correctAnswer:"playing", explanation:"is + playing = يلعب الآن", xp:12 },
      { id:"pc1-t0-5", type:"translate", arabic:"هم يلعبون", options:["They are playing","They play","They plays","They playing"], correctAnswer:"They are playing", explanation:"They are playing = يلعبون الآن", xp:12 },
      { id:"pc1-t0-6", type:"listen_select", listenSentence:"I am working", options:["working","work","works","worked"], correctAnswer:"working", explanation:"am working = أعمل الآن", xp:10 },
      { id:"pc1-t0-7", type:"word_order", sentence:"We are watching TV", correctAnswer:"We are watching TV", explanation:"نشاهد التلفاز", xp:12 },
      { id:"pc1-t0-8", type:"fill_blank", blankSentence:"You are ___ now", blankOptions:["sleeping","sleep","sleeps"], correctAnswer:"sleeping", explanation:"are + sleeping = تنام الآن", xp:12 },
      { id:"pc1-t0-9", type:"matching", pairs:[{en:"am reading",ar:"أقرأ"},{en:"is playing",ar:"يلعب"},{en:"are watching",ar:"يشاهدون"},{en:"am eating",ar:"آكل"},{en:"is working",ar:"يعمل"},{en:"are sleeping",ar:"ينامون"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pc1-t1-1", type:"word_order", sentence:"They are studying English", correctAnswer:"They are studying English", explanation:"يدرسون الإنجليزية", xp:14 },
      { id:"pc1-t1-2", type:"translate", arabic:"هي تطبخ العشاء", options:["She is cooking dinner","She cooking dinner","She cooks dinner","She is cook dinner"], correctAnswer:"She is cooking dinner", explanation:"is cooking = تطبخ الآن", xp:14 },
      { id:"pc1-t1-3", type:"fill_blank", blankSentence:"The baby is ___", blankOptions:["crying","cry","cries"], correctAnswer:"crying", explanation:"is crying = يبكي الآن", xp:13 },
      { id:"pc1-t1-4", type:"listen_select", listenSentence:"he is running", options:["running","run","runs","runned"], correctAnswer:"running", explanation:"is running = يجري الآن", xp:14 },
      { id:"pc1-t1-5", type:"word_order", sentence:"I am writing a letter", correctAnswer:"I am writing a letter", explanation:"أكتب رسالة", xp:14 },
      { id:"pc1-t1-6", type:"translate", arabic:"نحن ننتظر الحافلة", options:["We are waiting for the bus","We waiting for the bus","We wait for the bus","We are wait for the bus"], correctAnswer:"We are waiting for the bus", explanation:"are waiting = ننتظر الآن", xp:13 },
      { id:"pc1-t1-7", type:"fill_blank", blankSentence:"They are ___ a movie", blankOptions:["watching","watch","watches"], correctAnswer:"watching", explanation:"are watching = يشاهدون", xp:13 },
      { id:"pc1-t1-8", type:"word_order", sentence:"He is driving to work", correctAnswer:"He is driving to work", explanation:"يقود إلى العمل", xp:14 },
      { id:"pc1-t1-9", type:"matching", pairs:[{en:"cooking",ar:"يطبخ"},{en:"writing",ar:"يكتب"},{en:"running",ar:"يجري"},{en:"waiting",ar:"ينتظر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"pc1-t2-1", type:"word_order", sentence:"My sister is studying for her exam", correctAnswer:"My sister is studying for her exam", explanation:"أختي تدرس لامتحانها", xp:16 },
      { id:"pc1-t2-2", type:"translate", arabic:"الأطفال يلعبون في الحديقة الآن", options:["The children are playing in the garden now","The children is playing in the garden now","The children are play in the garden now","The children are playing in garden now"], correctAnswer:"The children are playing in the garden now", explanation:"are playing = يلعبون الآن", xp:16 },
      { id:"pc1-t2-3", type:"fill_blank", blankSentence:"Look! It is ___ outside", blankOptions:["raining","rain","rains"], correctAnswer:"raining", explanation:"is raining = تمطر الآن", xp:15 },
      { id:"pc1-t2-4", type:"word_order", sentence:"We are having dinner at the moment", correctAnswer:"We are having dinner at the moment", explanation:"نتناول العشاء الآن", xp:16 },
      { id:"pc1-t2-5", type:"translate", arabic:"إنه يستمع إلى الموسيقى", options:["He is listening to music","He listening to music","He listens to music","He is listen to music"], correctAnswer:"He is listening to music", explanation:"is listening = يستمع الآن", xp:16 },
      { id:"pc1-t2-6", type:"listen_select", listenSentence:"she is smiling", options:["smiling","smile","smiles","smiled"], correctAnswer:"smiling", explanation:"is smiling = تبتسم الآن", xp:15 },
      { id:"pc1-t2-7", type:"word_order", sentence:"They are building a new house", correctAnswer:"They are building a new house", explanation:"يبنون منزلاً جديداً", xp:15 },
      { id:"pc1-t2-8", type:"fill_blank", blankSentence:"I am ___ my homework right now", blankOptions:["doing","do","does"], correctAnswer:"doing", explanation:"am doing = أؤدّي الآن", xp:15 },
    ],
    t3: [],
  },

  "أفعال شائعة": {
    t0: [
      { id:"pc2-t0-1", type:"translate", arabic:"آكل (الآن)", options:["eating","eat","eats","ate"], correctAnswer:"eating", explanation:"eating = يأكل الآن", xp:10 },
      { id:"pc2-t0-2", type:"translate", arabic:"أقرأ (الآن)", options:["reading","read","reads","readed"], correctAnswer:"reading", explanation:"reading = يقرأ الآن", xp:10 },
      { id:"pc2-t0-3", type:"listen_select", listenSentence:"watching TV", options:["watching","watch","watches","watched"], correctAnswer:"watching", explanation:"watching = يشاهد", xp:10 },
      { id:"pc2-t0-4", type:"word_order", sentence:"I am eating now", correctAnswer:"I am eating now", explanation:"آكل الآن", xp:12 },
      { id:"pc2-t0-5", type:"fill_blank", blankSentence:"She is ___ a book", blankOptions:["reading","read","reads"], correctAnswer:"reading", explanation:"is reading = تقرأ الآن", xp:12 },
      { id:"pc2-t0-6", type:"translate", arabic:"يلعب (الآن)", options:["playing","play","plays","played"], correctAnswer:"playing", explanation:"playing = يلعب الآن", xp:10 },
      { id:"pc2-t0-7", type:"listen_select", listenSentence:"they are talking", options:["talking","talk","talks","talked"], correctAnswer:"talking", explanation:"talking = يتحدّثون", xp:12 },
      { id:"pc2-t0-8", type:"word_order", sentence:"He is drinking water", correctAnswer:"He is drinking water", explanation:"يشرب الماء", xp:12 },
      { id:"pc2-t0-9", type:"matching", pairs:[{en:"eating",ar:"يأكل"},{en:"reading",ar:"يقرأ"},{en:"watching",ar:"يشاهد"},{en:"playing",ar:"يلعب"},{en:"drinking",ar:"يشرب"},{en:"talking",ar:"يتحدّث"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pc2-t1-1", type:"word_order", sentence:"The students are listening carefully", correctAnswer:"The students are listening carefully", explanation:"يستمع الطلاب بانتباه", xp:14 },
      { id:"pc2-t1-2", type:"translate", arabic:"إنها تكتب ملاحظات", options:["She is writing notes","She writing notes","She writes notes","She is write notes"], correctAnswer:"She is writing notes", explanation:"is writing = تكتب الآن", xp:14 },
      { id:"pc2-t1-3", type:"listen_select", listenSentence:"he is swimming", options:["swimming","swim","swims","swam"], correctAnswer:"swimming", explanation:"swimming = يسبح الآن", xp:13 },
      { id:"pc2-t1-4", type:"fill_blank", blankSentence:"We are ___ to the radio", blankOptions:["listening","listen","listens"], correctAnswer:"listening", explanation:"are listening = نستمع الآن", xp:14 },
      { id:"pc2-t1-5", type:"word_order", sentence:"They are dancing at the party", correctAnswer:"They are dancing at the party", explanation:"يرقصون في الحفلة", xp:14 },
      { id:"pc2-t1-6", type:"translate", arabic:"الكلب ينبح", options:["The dog is barking","The dog barking","The dog barks","The dog is bark"], correctAnswer:"The dog is barking", explanation:"is barking = ينبح الآن", xp:13 },
      { id:"pc2-t1-7", type:"listen_select", listenSentence:"I am cleaning", options:["cleaning","clean","cleans","cleaned"], correctAnswer:"cleaning", explanation:"cleaning = ينظّف الآن", xp:13 },
      { id:"pc2-t1-8", type:"word_order", sentence:"She is taking photos", correctAnswer:"She is taking photos", explanation:"تلتقط صوراً", xp:14 },
      { id:"pc2-t1-9", type:"matching", pairs:[{en:"swimming",ar:"يسبح"},{en:"dancing",ar:"يرقص"},{en:"listening",ar:"يستمع"},{en:"cleaning",ar:"ينظّف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"pc2-t2-1", type:"word_order", sentence:"My mother is preparing a delicious meal", correctAnswer:"My mother is preparing a delicious meal", explanation:"أمي تُعدّ وجبة لذيذة", xp:16 },
      { id:"pc2-t2-2", type:"translate", arabic:"إنهم يبنون مدرسة جديدة في الحيّ", options:["They are building a new school in the area","They building a new school in the area","They build a new school in the area","They are build a new school in the area"], correctAnswer:"They are building a new school in the area", explanation:"are building = يبنون الآن", xp:16 },
      { id:"pc2-t2-3", type:"fill_blank", blankSentence:"The teacher is ___ the lesson", blankOptions:["explaining","explain","explains"], correctAnswer:"explaining", explanation:"is explaining = يشرح الآن", xp:15 },
      { id:"pc2-t2-4", type:"word_order", sentence:"We are planning a trip to the mountains", correctAnswer:"We are planning a trip to the mountains", explanation:"نخطّط لرحلة إلى الجبال", xp:16 },
      { id:"pc2-t2-5", type:"translate", arabic:"الطفل يتعلّم المشي", options:["The baby is learning to walk","The baby learning to walk","The baby learns to walk","The baby is learn to walk"], correctAnswer:"The baby is learning to walk", explanation:"is learning = يتعلّم الآن", xp:16 },
      { id:"pc2-t2-6", type:"listen_select", listenSentence:"they are celebrating", options:["celebrating","celebrate","celebrates","celebrated"], correctAnswer:"celebrating", explanation:"celebrating = يحتفلون", xp:15 },
      { id:"pc2-t2-7", type:"word_order", sentence:"She is helping her friend with the project", correctAnswer:"She is helping her friend with the project", explanation:"تساعد صديقتها في المشروع", xp:15 },
      { id:"pc2-t2-8", type:"fill_blank", blankSentence:"The workers are ___ the road", blankOptions:["fixing","fix","fixes"], correctAnswer:"fixing", explanation:"are fixing = يصلحون الآن", xp:15 },
    ],
    t3: [],
  },

  "استخدامه الآن": {
    t0: [
      { id:"pc3-t0-1", type:"translate", arabic:"الآن", options:["now","then","later","soon"], correctAnswer:"now", explanation:"now = الآن", xp:10 },
      { id:"pc3-t0-2", type:"word_order", sentence:"I am studying now", correctAnswer:"I am studying now", explanation:"أدرس الآن", xp:12 },
      { id:"pc3-t0-3", type:"listen_select", listenSentence:"right now", options:["right","write","ride","rate"], correctAnswer:"right", explanation:"right now = الآن تماماً", xp:10 },
      { id:"pc3-t0-4", type:"fill_blank", blankSentence:"She is sleeping ___ now", blankOptions:["right","run","very"], correctAnswer:"right", explanation:"right now = الآن تماماً", xp:12 },
      { id:"pc3-t0-5", type:"translate", arabic:"في هذه اللحظة", options:["at the moment","at the time","in the moment","on the moment"], correctAnswer:"at the moment", explanation:"at the moment = في هذه اللحظة", xp:12 },
      { id:"pc3-t0-6", type:"word_order", sentence:"They are working right now", correctAnswer:"They are working right now", explanation:"يعملون الآن", xp:12 },
      { id:"pc3-t0-7", type:"listen_select", listenSentence:"at the moment", options:["moment","movement","monument","mount"], correctAnswer:"moment", explanation:"at the moment = الآن", xp:12 },
      { id:"pc3-t0-8", type:"fill_blank", blankSentence:"He is busy ___ the moment", blankOptions:["at","run","very"], correctAnswer:"at", explanation:"at the moment = في هذه اللحظة", xp:12 },
      { id:"pc3-t0-9", type:"matching", pairs:[{en:"now",ar:"الآن"},{en:"right now",ar:"الآن تماماً"},{en:"at the moment",ar:"في هذه اللحظة"},{en:"currently",ar:"حالياً"},{en:"today",ar:"اليوم"},{en:"these days",ar:"هذه الأيام"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pc3-t1-1", type:"word_order", sentence:"What are you doing right now", correctAnswer:"What are you doing right now", explanation:"ماذا تفعل الآن؟", xp:14 },
      { id:"pc3-t1-2", type:"translate", arabic:"إنها تعمل حالياً", options:["She is working currently","She working currently","She works currently","She is work currently"], correctAnswer:"She is working currently", explanation:"currently = حالياً", xp:14 },
      { id:"pc3-t1-3", type:"listen_select", listenSentence:"these days", options:["these","this","those","that"], correctAnswer:"these", explanation:"these days = هذه الأيام", xp:13 },
      { id:"pc3-t1-4", type:"fill_blank", blankSentence:"I am learning English ___ days", blankOptions:["these","run","very"], correctAnswer:"these", explanation:"these days = هذه الأيام", xp:14 },
      { id:"pc3-t1-5", type:"word_order", sentence:"He is not working at the moment", correctAnswer:"He is not working at the moment", explanation:"لا يعمل في الوقت الحالي", xp:14 },
      { id:"pc3-t1-6", type:"translate", arabic:"ماذا يفعلون الآن؟", options:["What are they doing now?","What they are doing now?","What are they do now?","What are they doing now"], correctAnswer:"What are they doing now?", explanation:"What are they doing now?", xp:13 },
      { id:"pc3-t1-7", type:"listen_select", listenSentence:"I am busy now", options:["busy","busly","buzz","bury"], correctAnswer:"busy", explanation:"I am busy now = أنا مشغول الآن", xp:13 },
      { id:"pc3-t1-8", type:"word_order", sentence:"We are not going out tonight", correctAnswer:"We are not going out tonight", explanation:"لن نخرج الليلة", xp:14 },
      { id:"pc3-t1-9", type:"matching", pairs:[{en:"What are you doing",ar:"ماذا تفعل"},{en:"currently",ar:"حالياً"},{en:"these days",ar:"هذه الأيام"},{en:"at the moment",ar:"الآن"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"pc3-t2-1", type:"word_order", sentence:"What are you working on at the moment", correctAnswer:"What are you working on at the moment", explanation:"على ماذا تعمل الآن؟", xp:16 },
      { id:"pc3-t2-2", type:"translate", arabic:"أنا أبحث عن وظيفة جديدة هذه الأيام", options:["I am looking for a new job these days","I looking for a new job these days","I look for a new job these days","I am looking for new job these days"], correctAnswer:"I am looking for a new job these days", explanation:"looking for these days", xp:16 },
      { id:"pc3-t2-3", type:"fill_blank", blankSentence:"They are ___ building their new home", blankOptions:["currently","run","very"], correctAnswer:"currently", explanation:"currently = حالياً", xp:15 },
      { id:"pc3-t2-4", type:"word_order", sentence:"Why are you smiling like that", correctAnswer:"Why are you smiling like that", explanation:"لماذا تبتسم هكذا؟", xp:16 },
      { id:"pc3-t2-5", type:"translate", arabic:"إنه لا يدرس في الوقت الحالي", options:["He is not studying at the moment","He not studying at the moment","He is not study at the moment","He isn't study at the moment"], correctAnswer:"He is not studying at the moment", explanation:"is not studying = لا يدرس الآن", xp:16 },
      { id:"pc3-t2-6", type:"listen_select", listenSentence:"everyone is waiting", options:["waiting","wait","waits","waited"], correctAnswer:"waiting", explanation:"is waiting = ينتظر", xp:15 },
      { id:"pc3-t2-7", type:"word_order", sentence:"The economy is changing very fast these days", correctAnswer:"The economy is changing very fast these days", explanation:"الاقتصاد يتغيّر بسرعة هذه الأيام", xp:15 },
      { id:"pc3-t2-8", type:"fill_blank", blankSentence:"She is ___ working from home now", blankOptions:["currently","run","very"], correctAnswer:"currently", explanation:"currently = حالياً", xp:15 },
    ],
    t3: [],
  },
};
