import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 30: كوّن جمع التكسير (الجموع الشاذة)
//   درس 1: جموع شائعة شاذة — man/men, woman/women, child/children
//   درس 2: المزيد — foot/feet, tooth/teeth, mouse/mice, person/people
//   درس 3: استخدامها في جمل — these, those, many
// ══════════════════════════════════════════════════════════════

export const unit30PluralsBank: Record<string, TieredBank> = {

  "جموع شاذة شائعة": {
    t0: [
      { id:"pl1-t0-1", type:"translate", arabic:"رجال (جمع man)", options:["men","mans","mens","man"], correctAnswer:"men", explanation:"man → men (جمع شاذ)", xp:10 },
      { id:"pl1-t0-2", type:"translate", arabic:"نساء (جمع woman)", options:["women","womans","womens","woman"], correctAnswer:"women", explanation:"woman → women", xp:10 },
      { id:"pl1-t0-3", type:"translate", arabic:"أطفال (جمع child)", options:["children","childs","childes","child"], correctAnswer:"children", explanation:"child → children", xp:10 },
      { id:"pl1-t0-4", type:"word_order", sentence:"The men are working", correctAnswer:"The men are working", explanation:"الرجال يعملون", xp:12 },
      { id:"pl1-t0-5", type:"fill_blank", blankSentence:"There are three ___", blankOptions:["children","childs","childrens"], correctAnswer:"children", explanation:"child → children", xp:12 },
      { id:"pl1-t0-6", type:"translate", arabic:"رجل واحد", options:["one man","one men","a men","one mans"], correctAnswer:"one man", explanation:"one man (مفرد)", xp:10 },
      { id:"pl1-t0-7", type:"listen_select", listenSentence:"two women", options:["women","woman","womans","womens"], correctAnswer:"women", explanation:"woman → women", xp:12 },
      { id:"pl1-t0-8", type:"word_order", sentence:"The children are happy", correctAnswer:"The children are happy", explanation:"الأطفال سعداء", xp:12 },
      { id:"pl1-t0-9", type:"matching", pairs:[{en:"man → men",ar:"رجل ← رجال"},{en:"woman → women",ar:"امرأة ← نساء"},{en:"child → children",ar:"طفل ← أطفال"},{en:"foot → feet",ar:"قدم ← أقدام"},{en:"tooth → teeth",ar:"سن ← أسنان"},{en:"person → people",ar:"شخص ← أشخاص"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pl1-t1-1", type:"fill_blank", blankSentence:"Two ___ are talking", blankOptions:["men","mans","mens"], correctAnswer:"men", explanation:"man → men", xp:12 },
      { id:"pl1-t1-2", type:"word_order", sentence:"Many women work here", correctAnswer:"Many women work here", explanation:"نساء كثيرات يعملن هنا", xp:14 },
      { id:"pl1-t1-3", type:"translate", arabic:"امرأة واحدة", options:["one woman","one women","a women","one womans"], correctAnswer:"one woman", explanation:"one woman (مفرد)", xp:13 },
      { id:"pl1-t1-4", type:"fill_blank", blankSentence:"The ___ are playing outside", blankOptions:["children","childs","childrens"], correctAnswer:"children", explanation:"child → children", xp:14 },
      { id:"pl1-t1-5", type:"word_order", sentence:"These men are doctors", correctAnswer:"These men are doctors", explanation:"هؤلاء الرجال أطباء", xp:14 },
      { id:"pl1-t1-6", type:"translate", arabic:"ثلاثة أطفال", options:["three children","three childs","three child","three childrens"], correctAnswer:"three children", explanation:"child → children", xp:13 },
      { id:"pl1-t1-7", type:"fill_blank", blankSentence:"Both ___ are teachers", blankOptions:["women","womans","womens"], correctAnswer:"women", explanation:"woman → women", xp:14 },
      { id:"pl1-t1-8", type:"listen_select", listenSentence:"the children play", options:["children","childs","childrens","child"], correctAnswer:"children", explanation:"child → children", xp:13 },
      { id:"pl1-t1-9", type:"matching", pairs:[{en:"men",ar:"رجال"},{en:"women",ar:"نساء"},{en:"children",ar:"أطفال"},{en:"one man",ar:"رجل واحد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"pl1-t2-1", type:"word_order", sentence:"The men and women are working together", correctAnswer:"The men and women are working together", explanation:"الرجال والنساء يعملون معاً", xp:16 },
      { id:"pl1-t2-2", type:"translate", arabic:"كل الأطفال في المدرسة", options:["All the children are at school","All the childs are at school","All the children is at school","All the childrens are at school"], correctAnswer:"All the children are at school", explanation:"children are = الأطفال يكونون", xp:16 },
      { id:"pl1-t2-3", type:"fill_blank", blankSentence:"How many ___ are in the room", blankOptions:["women","womans","womens"], correctAnswer:"women", explanation:"woman → women", xp:15 },
      { id:"pl1-t2-4", type:"word_order", sentence:"Three men were standing at the door", correctAnswer:"Three men were standing at the door", explanation:"ثلاثة رجال كانوا واقفين عند الباب", xp:16 },
      { id:"pl1-t2-5", type:"translate", arabic:"النساء يتحدّثن عن أطفالهنّ", options:["The women are talking about their children","The womans are talking about their children","The women is talking about their children","The women are talking about their childs"], correctAnswer:"The women are talking about their children", explanation:"women + children (جمعان شاذّان)", xp:16 },
      { id:"pl1-t2-6", type:"listen_select", listenSentence:"those men over there", options:["men","man","mans","mens"], correctAnswer:"men", explanation:"man → men", xp:15 },
      { id:"pl1-t2-7", type:"word_order", sentence:"The children love their new teacher", correctAnswer:"The children love their new teacher", explanation:"يحب الأطفال معلّمتهم الجديدة", xp:15 },
      { id:"pl1-t2-8", type:"fill_blank", blankSentence:"Several ___ joined the meeting", blankOptions:["men","mans","mens"], correctAnswer:"men", explanation:"man → men", xp:15 },
    ],
    t3: [],
  },

  "المزيد من الجموع": {
    t0: [
      { id:"pl2-t0-1", type:"translate", arabic:"أقدام (جمع foot)", options:["feet","foots","feets","foot"], correctAnswer:"feet", explanation:"foot → feet", xp:10 },
      { id:"pl2-t0-2", type:"translate", arabic:"أسنان (جمع tooth)", options:["teeth","tooths","teeths","tooth"], correctAnswer:"teeth", explanation:"tooth → teeth", xp:10 },
      { id:"pl2-t0-3", type:"translate", arabic:"أشخاص (جمع person)", options:["people","persons","peoples","person"], correctAnswer:"people", explanation:"person → people", xp:10 },
      { id:"pl2-t0-4", type:"word_order", sentence:"My feet are cold", correctAnswer:"My feet are cold", explanation:"قدماي باردتان", xp:12 },
      { id:"pl2-t0-5", type:"fill_blank", blankSentence:"Brush your ___ every day", blankOptions:["teeth","tooths","teeths"], correctAnswer:"teeth", explanation:"tooth → teeth", xp:12 },
      { id:"pl2-t0-6", type:"translate", arabic:"فأر واحد", options:["one mouse","one mice","a mice","one mouses"], correctAnswer:"one mouse", explanation:"mouse (مفرد)", xp:10 },
      { id:"pl2-t0-7", type:"listen_select", listenSentence:"many people", options:["people","peoples","persons","person"], correctAnswer:"people", explanation:"person → people", xp:12 },
      { id:"pl2-t0-8", type:"word_order", sentence:"Many people came today", correctAnswer:"Many people came today", explanation:"أشخاص كثيرون جاؤوا اليوم", xp:12 },
      { id:"pl2-t0-9", type:"matching", pairs:[{en:"foot → feet",ar:"قدم ← أقدام"},{en:"tooth → teeth",ar:"سن ← أسنان"},{en:"person → people",ar:"شخص ← أشخاص"},{en:"mouse → mice",ar:"فأر ← فئران"},{en:"fish → fish",ar:"سمكة ← أسماك"},{en:"sheep → sheep",ar:"خروف ← خراف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pl2-t1-1", type:"translate", arabic:"فئران (جمع mouse)", options:["mice","mouses","mouse","mices"], correctAnswer:"mice", explanation:"mouse → mice", xp:12 },
      { id:"pl2-t1-2", type:"word_order", sentence:"The dentist checked my teeth", correctAnswer:"The dentist checked my teeth", explanation:"فحص الطبيب أسناني", xp:14 },
      { id:"pl2-t1-3", type:"translate", arabic:"سمك (جمع fish)", options:["fish","fishes","fishs","fish"], correctAnswer:"fish", explanation:"fish → fish (نفس الكلمة)", xp:13 },
      { id:"pl2-t1-4", type:"fill_blank", blankSentence:"There are many ___ at the party", blankOptions:["people","persons","peoples"], correctAnswer:"people", explanation:"person → people", xp:14 },
      { id:"pl2-t1-5", type:"word_order", sentence:"My feet hurt after the walk", correctAnswer:"My feet hurt after the walk", explanation:"قدماي تؤلمانني بعد المشي", xp:14 },
      { id:"pl2-t1-6", type:"translate", arabic:"خراف (جمع sheep)", options:["sheep","sheeps","sheepes","ship"], correctAnswer:"sheep", explanation:"sheep → sheep (نفس الكلمة)", xp:13 },
      { id:"pl2-t1-7", type:"fill_blank", blankSentence:"I have two front ___", blankOptions:["teeth","tooths","teeths"], correctAnswer:"teeth", explanation:"tooth → teeth", xp:14 },
      { id:"pl2-t1-8", type:"listen_select", listenSentence:"three little mice", options:["mice","mouse","mouses","mices"], correctAnswer:"mice", explanation:"mouse → mice", xp:13 },
      { id:"pl2-t1-9", type:"matching", pairs:[{en:"mice",ar:"فئران"},{en:"feet",ar:"أقدام"},{en:"teeth",ar:"أسنان"},{en:"people",ar:"أشخاص"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"pl2-t2-1", type:"word_order", sentence:"Many people have problems with their teeth", correctAnswer:"Many people have problems with their teeth", explanation:"كثير من الناس لديهم مشاكل بأسنانهم", xp:16 },
      { id:"pl2-t2-2", type:"translate", arabic:"رأيت ثلاثة فئران في الحديقة", options:["I saw three mice in the garden","I saw three mouses in the garden","I saw three mouse in the garden","I saw three mices in the garden"], correctAnswer:"I saw three mice in the garden", explanation:"mouse → mice", xp:16 },
      { id:"pl2-t2-3", type:"fill_blank", blankSentence:"The farmer has fifty ___", blankOptions:["sheep","sheeps","sheepes"], correctAnswer:"sheep", explanation:"sheep → sheep", xp:15 },
      { id:"pl2-t2-4", type:"word_order", sentence:"How many people live in this city", correctAnswer:"How many people live in this city", explanation:"كم شخصاً يعيش في هذه المدينة؟", xp:16 },
      { id:"pl2-t2-5", type:"translate", arabic:"غسلت قدميّ وفرشت أسناني", options:["I washed my feet and brushed my teeth","I washed my foots and brushed my teeth","I washed my feet and brushed my tooths","I washed my feets and brushed my teeth"], correctAnswer:"I washed my feet and brushed my teeth", explanation:"feet + teeth (جمعان شاذّان)", xp:16 },
      { id:"pl2-t2-6", type:"listen_select", listenSentence:"caught three fish", options:["fish","fishes","fishs","fush"], correctAnswer:"fish", explanation:"fish → fish", xp:15 },
      { id:"pl2-t2-7", type:"word_order", sentence:"The children counted on their fingers", correctAnswer:"The children counted on their fingers", explanation:"عدّ الأطفال على أصابعهم", xp:15 },
      { id:"pl2-t2-8", type:"fill_blank", blankSentence:"Some ___ were swimming in the lake", blankOptions:["fish","fishes","fishs"], correctAnswer:"fish", explanation:"fish → fish", xp:15 },
    ],
    t3: [],
  },

  "استخدامها في جمل": {
    t0: [
      { id:"pl3-t0-1", type:"translate", arabic:"هؤلاء (للقريب)", options:["these","those","this","that"], correctAnswer:"these", explanation:"these = هؤلاء/هذه (جمع قريب)", xp:10 },
      { id:"pl3-t0-2", type:"translate", arabic:"أولئك (للبعيد)", options:["those","these","this","that"], correctAnswer:"those", explanation:"those = أولئك/تلك (جمع بعيد)", xp:10 },
      { id:"pl3-t0-3", type:"word_order", sentence:"These children are happy", correctAnswer:"These children are happy", explanation:"هؤلاء الأطفال سعداء", xp:12 },
      { id:"pl3-t0-4", type:"fill_blank", blankSentence:"___ men are tall", blankOptions:["These","This","Them"], correctAnswer:"These", explanation:"These men = هؤلاء الرجال", xp:12 },
      { id:"pl3-t0-5", type:"listen_select", listenSentence:"those people", options:["those","these","this","that"], correctAnswer:"those", explanation:"those people = أولئك الناس", xp:12 },
      { id:"pl3-t0-6", type:"translate", arabic:"كثير", options:["many","much","more","most"], correctAnswer:"many", explanation:"many = كثير (للمعدود)", xp:10 },
      { id:"pl3-t0-7", type:"word_order", sentence:"Those women are nurses", correctAnswer:"Those women are nurses", explanation:"أولئك النساء ممرضات", xp:12 },
      { id:"pl3-t0-8", type:"fill_blank", blankSentence:"There are many ___ here", blankOptions:["people","persons","peoples"], correctAnswer:"people", explanation:"many people = أشخاص كثيرون", xp:12 },
      { id:"pl3-t0-9", type:"matching", pairs:[{en:"these",ar:"هؤلاء (قريب)"},{en:"those",ar:"أولئك (بعيد)"},{en:"many",ar:"كثير"},{en:"some",ar:"بعض"},{en:"a few",ar:"قليل"},{en:"several",ar:"عدّة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pl3-t1-1", type:"word_order", sentence:"These men work in the same company", correctAnswer:"These men work in the same company", explanation:"هؤلاء الرجال يعملون في نفس الشركة", xp:14 },
      { id:"pl3-t1-2", type:"translate", arabic:"كم عدد الأشخاص هنا؟", options:["How many people are here?","How many person are here?","How much people are here?","How many peoples are here?"], correctAnswer:"How many people are here?", explanation:"how many people = كم شخصاً", xp:14 },
      { id:"pl3-t1-3", type:"listen_select", listenSentence:"those children", options:["those","these","this","that"], correctAnswer:"those", explanation:"those children = أولئك الأطفال", xp:13 },
      { id:"pl3-t1-4", type:"fill_blank", blankSentence:"___ women are my colleagues", blankOptions:["These","This","Them"], correctAnswer:"These", explanation:"These women = هؤلاء النساء", xp:14 },
      { id:"pl3-t1-5", type:"word_order", sentence:"Many people enjoy reading books", correctAnswer:"Many people enjoy reading books", explanation:"كثير من الناس يحبون قراءة الكتب", xp:14 },
      { id:"pl3-t1-6", type:"translate", arabic:"بعض الأطفال يلعبون في الحديقة", options:["Some children are playing in the park","Some childs are playing in the park","Some children is playing in the park","Some childrens are playing in the park"], correctAnswer:"Some children are playing in the park", explanation:"some children = بعض الأطفال", xp:13 },
      { id:"pl3-t1-7", type:"listen_select", listenSentence:"a few men", options:["few","view","new","through"], correctAnswer:"few", explanation:"a few men = بضعة رجال", xp:13 },
      { id:"pl3-t1-8", type:"word_order", sentence:"Those people are waiting for the bus", correctAnswer:"Those people are waiting for the bus", explanation:"أولئك الناس ينتظرون الحافلة", xp:14 },
      { id:"pl3-t1-9", type:"matching", pairs:[{en:"these men",ar:"هؤلاء الرجال"},{en:"those women",ar:"أولئك النساء"},{en:"many people",ar:"أشخاص كثيرون"},{en:"few children",ar:"أطفال قليلون"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"pl3-t2-1", type:"word_order", sentence:"Many people have lost their teeth as they age", correctAnswer:"Many people have lost their teeth as they age", explanation:"كثير من الناس يفقدون أسنانهم مع التقدّم بالعمر", xp:16 },
      { id:"pl3-t2-2", type:"translate", arabic:"هؤلاء الرجال والنساء متطوّعون", options:["These men and women are volunteers","These men and women is volunteers","These man and woman are volunteers","These men and women are volunteer"], correctAnswer:"These men and women are volunteers", explanation:"men and women + are", xp:16 },
      { id:"pl3-t2-3", type:"fill_blank", blankSentence:"How many ___ do you see", blankOptions:["mice","mouses","mouse"], correctAnswer:"mice", explanation:"mouse → mice", xp:15 },
      { id:"pl3-t2-4", type:"word_order", sentence:"Those children have very healthy teeth", correctAnswer:"Those children have very healthy teeth", explanation:"أولئك الأطفال لديهم أسنان صحية", xp:16 },
      { id:"pl3-t2-5", type:"translate", arabic:"عدّة أشخاص رأوا الحادث", options:["Several people saw the accident","Several persons saw the accident","Several peoples saw the accident","Several people seen the accident"], correctAnswer:"Several people saw the accident", explanation:"several people = عدّة أشخاص", xp:16 },
      { id:"pl3-t2-6", type:"listen_select", listenSentence:"these are my feet", options:["feet","foot","foots","feets"], correctAnswer:"feet", explanation:"foot → feet", xp:15 },
      { id:"pl3-t2-7", type:"word_order", sentence:"Many women and children attended the event", correctAnswer:"Many women and children attended the event", explanation:"كثير من النساء والأطفال حضروا الفعالية", xp:15 },
      { id:"pl3-t2-8", type:"fill_blank", blankSentence:"All these ___ are very kind", blankOptions:["people","persons","peoples"], correctAnswer:"people", explanation:"these people = هؤلاء الناس", xp:15 },
    ],
    t3: [],
  },
};
