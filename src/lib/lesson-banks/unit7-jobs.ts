import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 7 — استخدم الزمن المضارع للمهن
//   درس 1: أفعال المهن — teach, drive, cook, build, write
//   درس 2: جمل المضارع — He teaches, She drives, They cook
//   درس 3: اسأل عن المهن — What do you do? Where do you work?
// ══════════════════════════════════════════════════════════════

export const unit7JobsBank: Record<string, TieredBank> = {

  // ── الدرس 1: أفعال المهن ──
  "أفعال المهن": {
    t0: [
    { id:"job-pic-1", type:"picture_match", word:"teacher", arabic:"معلم", pictureOptions:[{emoji:"",label:"teacher"},{emoji:"",label:"doctor"},{emoji:"",label:"driver"},{emoji:"",label:"cook"}], correctAnswer:"teacher", explanation:"معلم = teacher", xp:10 },
    { id:"job-pic-2", type:"picture_match", word:"doctor", arabic:"طبيب", pictureOptions:[{emoji:"",label:"doctor"},{emoji:"",label:"teacher"},{emoji:"",label:"cook"},{emoji:"",label:"nurse"}], correctAnswer:"doctor", explanation:"طبيب = doctor", xp:10 },
      { id:"pj1-t0-1", type:"translate", arabic:"يُعلّم", options:["teach","drive","cook","build"], correctAnswer:"teach", explanation:"teach = يُعلّم 👨‍🏫", xp:10 },
      { id:"pj1-t0-2", type:"listen_select", listenSentence:"drive", options:["drive","teach","cook","write"], correctAnswer:"drive", explanation:"drive = يقود 🚗", xp:10 },
      { id:"pj1-t0-3", type:"translate", arabic:"يطبخ", options:["cook","build","teach","drive"], correctAnswer:"cook", explanation:"cook = يطبخ 👨‍🍳", xp:10 },
      { id:"pj1-t0-4", type:"word_order", sentence:"I teach English", correctAnswer:"I teach English", explanation:"أنا أُعلّم الإنجليزية", xp:12 },
      { id:"pj1-t0-5", type:"listen_select", listenSentence:"build", options:["build","cook","drive","write"], correctAnswer:"build", explanation:"build = يبني 🏗️", xp:12 },
      { id:"pj1-t0-6", type:"translate", arabic:"يكتب", options:["write","read","cook","teach"], correctAnswer:"write", explanation:"write = يكتب ✍️", xp:10 },
      { id:"pj1-t0-7", type:"word_order", sentence:"I drive a car", correctAnswer:"I drive a car", explanation:"أنا أقود سيارة", xp:12 },
      { id:"pj1-t0-8", type:"fill_blank", blankSentence:"I ___ English at school", blankOptions:["teach","very","the"], correctAnswer:"teach", explanation:"I teach = أنا أُعلّم", xp:12 },
      { id:"pj1-t0-9", type:"matching", pairs:[{en:"teach",ar:"يُعلّم"},{en:"drive",ar:"يقود"},{en:"cook",ar:"يطبخ"},{en:"build",ar:"يبني"},{en:"write",ar:"يكتب"},{en:"work",ar:"يعمل"}], correctAnswer:"matched", explanation:"أحسنت! طابقت أفعال المهن", xp:15 },
    ],
    t1: [
      { id:"pj1-t1-1", type:"translate", arabic:"يبني", options:["build","cook","teach","drive"], correctAnswer:"build", explanation:"build = يبني", xp:12 },
      { id:"pj1-t1-2", type:"word_order", sentence:"I cook food every day", correctAnswer:"I cook food every day", explanation:"أطبخ الطعام كل يوم", xp:13 },
      { id:"pj1-t1-3", type:"listen_select", listenSentence:"I write books", options:["write","teach","cook","drive"], correctAnswer:"write", explanation:"write = يكتب", xp:12 },
      { id:"pj1-t1-4", type:"translate", arabic:"أنا أقود حافلة", options:["I drive a bus","I bus drive","Drive I bus","Bus I drive a"], correctAnswer:"I drive a bus", explanation:"I drive = أنا أقود", xp:13 },
      { id:"pj1-t1-5", type:"fill_blank", blankSentence:"I ___ food in a restaurant", blankOptions:["cook","very","the"], correctAnswer:"cook", explanation:"I cook = أنا أطبخ", xp:13 },
      { id:"pj1-t1-6", type:"word_order", sentence:"I build houses", correctAnswer:"I build houses", explanation:"أنا أبني بيوتاً", xp:13 },
      { id:"pj1-t1-7", type:"translate", arabic:"يقود", options:["drive","teach","cook","build"], correctAnswer:"drive", explanation:"drive = يقود", xp:12 },
      { id:"pj1-t1-8", type:"matching", pairs:[{en:"teach",ar:"يُعلّم"},{en:"drive",ar:"يقود"},{en:"cook",ar:"يطبخ"},{en:"write",ar:"يكتب"},{en:"work",ar:"يعمل"},{en:"job",ar:"وظيفة"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pj1-t1-9", type:"fill_blank", blankSentence:"I ___ books at home", blankOptions:["write","very","the"], correctAnswer:"write", explanation:"I write = أنا أكتب", xp:13 },
    ],
    t2: [
      { id:"pj1-t2-1", type:"word_order", sentence:"I teach English at a big school", correctAnswer:"I teach English at a big school", explanation:"أُعلّم في مدرسة كبيرة", xp:14 },
      { id:"pj1-t2-2", type:"translate", arabic:"أطبخ الطعام في مطعم", options:["I cook food in a restaurant","I food cook restaurant","Cook I food restaurant","Restaurant I cook food"], correctAnswer:"I cook food in a restaurant", explanation:"مكان العمل", xp:15 },
      { id:"pj1-t2-3", type:"listen_select", listenSentence:"I build big houses", options:["build","cook","teach","drive"], correctAnswer:"build", explanation:"build = يبني", xp:14 },
      { id:"pj1-t2-4", type:"fill_blank", blankSentence:"I ___ a taxi in the city", blankOptions:["drive","cook","very"], correctAnswer:"drive", explanation:"I drive a taxi = أقود سيارة أجرة", xp:15 },
      { id:"pj1-t2-5", type:"word_order", sentence:"I write books and stories", correctAnswer:"I write books and stories", explanation:"أكتب كتباً وقصصاً", xp:14 },
      { id:"pj1-t2-6", type:"translate", arabic:"أنا أبني المباني الكبيرة", options:["I build big buildings","I building big build","Build I big buildings","Big buildings I build"], correctAnswer:"I build big buildings", explanation:"وصف العمل", xp:15 },
      { id:"pj1-t2-7", type:"matching", pairs:[{en:"teach",ar:"يُعلّم"},{en:"drive",ar:"يقود"},{en:"cook",ar:"يطبخ"},{en:"build",ar:"يبني"},{en:"write",ar:"يكتب"},{en:"teacher",ar:"معلّم"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pj1-t2-8", type:"fill_blank", blankSentence:"I ___ English to students", blankOptions:["teach","cook","very"], correctAnswer:"teach", explanation:"teach to students = أُعلّم الطلاب", xp:15 },
      { id:"pj1-t2-9", type:"listen_select", listenSentence:"I cook in a restaurant", options:["cook","build","teach","write"], correctAnswer:"cook", explanation:"cook = يطبخ", xp:14 },
    ],
    t3: [
      { id:"pj1-t3-1", type:"word_order", sentence:"I teach English and write books", correctAnswer:"I teach English and write books", explanation:"عملان مختلفان", xp:18 },
      { id:"pj1-t3-2", type:"translate", arabic:"أقود حافلة وأطبخ في المساء", options:["I drive a bus and cook in the evening","I bus drive cook evening","Drive bus cook I evening","Bus I drive evening cook"], correctAnswer:"I drive a bus and cook in the evening", explanation:"عملان", xp:20 },
      { id:"pj1-t3-3", type:"listen_select", listenSentence:"I build houses every day", options:["build","cook","teach","drive"], correctAnswer:"build", explanation:"build = يبني", xp:18 },
      { id:"pj1-t3-4", type:"fill_blank", blankSentence:"I ___ stories for children", blankOptions:["write","cook","very"], correctAnswer:"write", explanation:"write stories = أكتب قصصاً", xp:18 },
      { id:"pj1-t3-5", type:"matching", pairs:[{en:"teach",ar:"يُعلّم"},{en:"drive",ar:"يقود"},{en:"cook",ar:"يطبخ"},{en:"build",ar:"يبني"},{en:"write",ar:"يكتب"},{en:"work",ar:"يعمل"}], correctAnswer:"matched", explanation:"رائع! راجعت أفعال المهن", xp:18 },
      { id:"pj1-t3-6", type:"word_order", sentence:"I cook food in a big restaurant", correctAnswer:"I cook food in a big restaurant", explanation:"أطبخ في مطعم كبير", xp:18 },
      { id:"pj1-t3-7", type:"translate", arabic:"أنا أُعلّم في المدرسة وأكتب في البيت", options:["I teach at school and write at home","I school teach home write","Teach school write home I","School I teach home write"], correctAnswer:"I teach at school and write at home", explanation:"عملان ومكانان", xp:20 },
    ],
  },

  // ── الدرس 2: جمل المضارع ──
  "جمل المضارع": {
    t0: [
      { id:"pj2-t0-1", type:"translate", arabic:"هو يُعلّم", options:["He teaches","He teach","Teaches he","He is teach"], correctAnswer:"He teaches", explanation:"He teaches = هو يُعلّم (يضاف s)", xp:10 },
      { id:"pj2-t0-2", type:"listen_select", listenSentence:"She drives", options:["drives","teaches","cooks","writes"], correctAnswer:"drives", explanation:"She drives = هي تقود", xp:10 },
      { id:"pj2-t0-3", type:"translate", arabic:"هم يطبخون", options:["They cook","They cooks","Cook they","They is cook"], correctAnswer:"They cook", explanation:"They cook = هم يطبخون (بدون s)", xp:10 },
      { id:"pj2-t0-4", type:"word_order", sentence:"He teaches at school", correctAnswer:"He teaches at school", explanation:"هو يُعلّم في المدرسة", xp:12 },
      { id:"pj2-t0-5", type:"listen_select", listenSentence:"She works hard", options:["works","teaches","drives","cooks"], correctAnswer:"works", explanation:"She works = هي تعمل", xp:12 },
      { id:"pj2-t0-6", type:"translate", arabic:"هي تعمل", options:["She works","She work","Works she","She is work"], correctAnswer:"She works", explanation:"She works = هي تعمل", xp:10 },
      { id:"pj2-t0-7", type:"word_order", sentence:"They cook every day", correctAnswer:"They cook every day", explanation:"هم يطبخون كل يوم", xp:12 },
      { id:"pj2-t0-8", type:"fill_blank", blankSentence:"He ___ at a school", blankOptions:["teaches","teach","teaching"], correctAnswer:"teaches", explanation:"He teaches = هو يُعلّم", xp:12 },
      { id:"pj2-t0-9", type:"matching", pairs:[{en:"he teaches",ar:"هو يُعلّم"},{en:"she drives",ar:"هي تقود"},{en:"they cook",ar:"هم يطبخون"},{en:"she works",ar:"هي تعمل"},{en:"he writes",ar:"هو يكتب"},{en:"work",ar:"يعمل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pj2-t1-1", type:"word_order", sentence:"She drives a car to work", correctAnswer:"She drives a car to work", explanation:"هي تقود سيارة للعمل", xp:13 },
      { id:"pj2-t1-2", type:"translate", arabic:"هو يكتب الكتب", options:["He writes books","He write books","Writes he books","He is write books"], correctAnswer:"He writes books", explanation:"He writes = هو يكتب", xp:13 },
      { id:"pj2-t1-3", type:"listen_select", listenSentence:"They build houses", options:["build","builds","building","built"], correctAnswer:"build", explanation:"They build = هم يبنون", xp:12 },
      { id:"pj2-t1-4", type:"fill_blank", blankSentence:"She ___ a taxi", blankOptions:["drives","drive","driving"], correctAnswer:"drives", explanation:"She drives = هي تقود", xp:13 },
      { id:"pj2-t1-5", type:"word_order", sentence:"He cooks in a restaurant", correctAnswer:"He cooks in a restaurant", explanation:"هو يطبخ في مطعم", xp:13 },
      { id:"pj2-t1-6", type:"translate", arabic:"هم يعملون بجد", options:["They work hard","They works hard","Work they hard","They is work hard"], correctAnswer:"They work hard", explanation:"They work = هم يعملون", xp:13 },
      { id:"pj2-t1-7", type:"matching", pairs:[{en:"he teaches",ar:"هو يُعلّم"},{en:"she drives",ar:"هي تقود"},{en:"they cook",ar:"هم يطبخون"},{en:"he writes",ar:"هو يكتب"},{en:"she works",ar:"هي تعمل"},{en:"they build",ar:"هم يبنون"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pj2-t1-8", type:"fill_blank", blankSentence:"He ___ books at home", blankOptions:["writes","write","writing"], correctAnswer:"writes", explanation:"He writes = هو يكتب", xp:13 },
      { id:"pj2-t1-9", type:"listen_select", listenSentence:"He teaches English", options:["teaches","teach","teaching","taught"], correctAnswer:"teaches", explanation:"He teaches = هو يُعلّم", xp:12 },
    ],
    t2: [
      { id:"pj2-t2-1", type:"word_order", sentence:"She drives a bus and he teaches", correctAnswer:"She drives a bus and he teaches", explanation:"عملان لشخصين", xp:14 },
      { id:"pj2-t2-2", type:"translate", arabic:"هو يطبخ ويعمل في مطعم", options:["He cooks and works in a restaurant","He cook work restaurant","Cooks works he restaurant","He is cook work restaurant"], correctAnswer:"He cooks and works in a restaurant", explanation:"عملان", xp:15 },
      { id:"pj2-t2-3", type:"listen_select", listenSentence:"She writes books every day", options:["writes","write","writing","wrote"], correctAnswer:"writes", explanation:"She writes = هي تكتب", xp:14 },
      { id:"pj2-t2-4", type:"fill_blank", blankSentence:"They ___ houses in the city", blankOptions:["build","builds","building"], correctAnswer:"build", explanation:"They build = هم يبنون", xp:15 },
      { id:"pj2-t2-5", type:"word_order", sentence:"He teaches and she drives", correctAnswer:"He teaches and she drives", explanation:"عملان مختلفان", xp:14 },
      { id:"pj2-t2-6", type:"translate", arabic:"هي تُعلّم في مدرسة كبيرة", options:["She teaches at a big school","She teach big school","Teaches she big school","Big school she teaches"], correctAnswer:"She teaches at a big school", explanation:"مكان العمل", xp:15 },
      { id:"pj2-t2-7", type:"matching", pairs:[{en:"he cooks",ar:"هو يطبخ"},{en:"she teaches",ar:"هي تُعلّم"},{en:"they build",ar:"هم يبنون"},{en:"he writes",ar:"هو يكتب"},{en:"she drives",ar:"هي تقود"},{en:"work",ar:"يعمل"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pj2-t2-8", type:"fill_blank", blankSentence:"She ___ a car to work", blankOptions:["drives","drive","driving"], correctAnswer:"drives", explanation:"She drives = هي تقود", xp:15 },
      { id:"pj2-t2-9", type:"listen_select", listenSentence:"They cook in the kitchen", options:["cook","cooks","cooking","cooked"], correctAnswer:"cook", explanation:"They cook = هم يطبخون", xp:14 },
    ],
    t3: [
      { id:"pj2-t3-1", type:"word_order", sentence:"He teaches English and she writes books", correctAnswer:"He teaches English and she writes books", explanation:"عملان لشخصين", xp:18 },
      { id:"pj2-t3-2", type:"translate", arabic:"هي تقود الحافلة وهو يطبخ في المطعم", options:["She drives the bus and he cooks in the restaurant","She bus drive he cook restaurant","Drives bus she cooks he restaurant","Bus she drives restaurant he cooks"], correctAnswer:"She drives the bus and he cooks in the restaurant", explanation:"عملان ومكانان", xp:20 },
      { id:"pj2-t3-3", type:"listen_select", listenSentence:"He builds tall buildings", options:["builds","build","building","built"], correctAnswer:"builds", explanation:"He builds = هو يبني", xp:18 },
      { id:"pj2-t3-4", type:"fill_blank", blankSentence:"She ___ English and he ___ a taxi", blankOptions:["teaches drives","teach drive","teaching driving"], correctAnswer:"teaches drives", explanation:"إضافة s للمفرد", xp:18 },
      { id:"pj2-t3-5", type:"matching", pairs:[{en:"he teaches",ar:"هو يُعلّم"},{en:"she drives",ar:"هي تقود"},{en:"they cook",ar:"هم يطبخون"},{en:"he writes",ar:"هو يكتب"},{en:"she works",ar:"هي تعمل"},{en:"they build",ar:"هم يبنون"}], correctAnswer:"matched", explanation:"رائع! راجعت جمل المضارع", xp:18 },
      { id:"pj2-t3-6", type:"word_order", sentence:"They cook and build every day", correctAnswer:"They cook and build every day", explanation:"عملان يومياً", xp:18 },
      { id:"pj2-t3-7", type:"translate", arabic:"هو يُعلّم في المدرسة وهي تطبخ في المطعم", options:["He teaches at school and she cooks at the restaurant","He school teach she cook restaurant","Teaches school he cooks she restaurant","School he teaches restaurant she cooks"], correctAnswer:"He teaches at school and she cooks at the restaurant", explanation:"عملان ومكانان", xp:20 },
    ],
  },

  // ── الدرس 3: اسأل عن المهن ──
  "اسأل عن المهن": {
    t0: [
      { id:"pj3-t0-1", type:"translate", arabic:"ما عملك؟", options:["What do you do?","What you do?","Do you what?","What do do you?"], correctAnswer:"What do you do?", explanation:"What do you do? = ما عملك؟", xp:10 },
      { id:"pj3-t0-2", type:"listen_select", listenSentence:"Where do you work", options:["work","do","what","job"], correctAnswer:"work", explanation:"Where do you work? = أين تعمل؟", xp:10 },
      { id:"pj3-t0-3", type:"translate", arabic:"وظيفة", options:["job","work","do","teach"], correctAnswer:"job", explanation:"job = وظيفة", xp:10 },
      { id:"pj3-t0-4", type:"word_order", sentence:"What do you do", correctAnswer:"What do you do", explanation:"ما عملك؟", xp:12 },
      { id:"pj3-t0-5", type:"listen_select", listenSentence:"I am a teacher", options:["teacher","driver","doctor","cook"], correctAnswer:"teacher", explanation:"teacher = معلّم", xp:12 },
      { id:"pj3-t0-6", type:"translate", arabic:"أنا معلّم", options:["I am a teacher","I teacher am","Teacher I am a","Am I teacher"], correctAnswer:"I am a teacher", explanation:"I am a teacher = أنا معلّم", xp:10 },
      { id:"pj3-t0-7", type:"word_order", sentence:"Where do you work", correctAnswer:"Where do you work", explanation:"أين تعمل؟", xp:12 },
      { id:"pj3-t0-8", type:"fill_blank", blankSentence:"What do you ___", blankOptions:["do","work","job"], correctAnswer:"do", explanation:"What do you do = ما عملك", xp:12 },
      { id:"pj3-t0-9", type:"matching", pairs:[{en:"What do you do",ar:"ما عملك"},{en:"Where do you work",ar:"أين تعمل"},{en:"job",ar:"وظيفة"},{en:"teacher",ar:"معلّم"},{en:"driver",ar:"سائق"},{en:"doctor",ar:"طبيب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pj3-t1-1", type:"word_order", sentence:"What do you do for work", correctAnswer:"What do you do for work", explanation:"ما عملك؟", xp:13 },
      { id:"pj3-t1-2", type:"translate", arabic:"أنا طبيب", options:["I am a doctor","I doctor am","Doctor I am a","Am doctor I"], correctAnswer:"I am a doctor", explanation:"doctor = طبيب", xp:13 },
      { id:"pj3-t1-3", type:"listen_select", listenSentence:"I am a driver", options:["driver","teacher","doctor","cook"], correctAnswer:"driver", explanation:"driver = سائق", xp:12 },
      { id:"pj3-t1-4", type:"fill_blank", blankSentence:"Where do you ___", blankOptions:["work","do","job"], correctAnswer:"work", explanation:"Where do you work = أين تعمل", xp:13 },
      { id:"pj3-t1-5", type:"word_order", sentence:"I work at a hospital", correctAnswer:"I work at a hospital", explanation:"أعمل في مستشفى", xp:13 },
      { id:"pj3-t1-6", type:"translate", arabic:"أين تعمل؟", options:["Where do you work?","Where you work?","Work you where?","Where work do you?"], correctAnswer:"Where do you work?", explanation:"السؤال عن مكان العمل", xp:13 },
      { id:"pj3-t1-7", type:"matching", pairs:[{en:"teacher",ar:"معلّم"},{en:"driver",ar:"سائق"},{en:"doctor",ar:"طبيب"},{en:"job",ar:"وظيفة"},{en:"work",ar:"يعمل"},{en:"What do you do",ar:"ما عملك"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pj3-t1-8", type:"fill_blank", blankSentence:"I am a ___ at a school", blankOptions:["teacher","driver","doctor"], correctAnswer:"teacher", explanation:"teacher at school = معلّم في مدرسة", xp:13 },
      { id:"pj3-t1-9", type:"listen_select", listenSentence:"What do you do", options:["do","work","job","teach"], correctAnswer:"do", explanation:"What do you do = ما عملك", xp:12 },
    ],
    t2: [
      { id:"pj3-t2-1", type:"word_order", sentence:"What do you do and where do you work", correctAnswer:"What do you do and where do you work", explanation:"سؤالان عن العمل", xp:14 },
      { id:"pj3-t2-2", type:"translate", arabic:"أنا معلّم وأعمل في مدرسة", options:["I am a teacher and I work at a school","I teacher work school","Teacher I work school","Am teacher I work school"], correctAnswer:"I am a teacher and I work at a school", explanation:"المهنة ومكان العمل", xp:15 },
      { id:"pj3-t2-3", type:"listen_select", listenSentence:"Where do you work", options:["work","do","job","what"], correctAnswer:"work", explanation:"Where do you work = أين تعمل", xp:14 },
      { id:"pj3-t2-4", type:"fill_blank", blankSentence:"I am a doctor and I work at a ___", blankOptions:["hospital","school","job"], correctAnswer:"hospital", explanation:"doctor at hospital = طبيب في مستشفى", xp:15 },
      { id:"pj3-t2-5", type:"word_order", sentence:"She is a doctor at a hospital", correctAnswer:"She is a doctor at a hospital", explanation:"هي طبيبة في مستشفى", xp:14 },
      { id:"pj3-t2-6", type:"translate", arabic:"ما وظيفتك؟", options:["What is your job?","What your job?","Job your what?","Your job what is?"], correctAnswer:"What is your job?", explanation:"السؤال عن الوظيفة", xp:15 },
      { id:"pj3-t2-7", type:"matching", pairs:[{en:"teacher",ar:"معلّم"},{en:"driver",ar:"سائق"},{en:"doctor",ar:"طبيب"},{en:"What do you do",ar:"ما عملك"},{en:"Where do you work",ar:"أين تعمل"},{en:"job",ar:"وظيفة"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pj3-t2-8", type:"fill_blank", blankSentence:"What is your ___", blankOptions:["job","work","do"], correctAnswer:"job", explanation:"your job = وظيفتك", xp:15 },
      { id:"pj3-t2-9", type:"listen_select", listenSentence:"I am a doctor", options:["doctor","teacher","driver","cook"], correctAnswer:"doctor", explanation:"doctor = طبيب", xp:14 },
    ],
    t3: [
      { id:"pj3-t3-1", type:"word_order", sentence:"What do you do and where do you work now", correctAnswer:"What do you do and where do you work now", explanation:"سؤالان عن العمل", xp:18 },
      { id:"pj3-t3-2", type:"translate", arabic:"أنا طبيب وأعمل في مستشفى كبير", options:["I am a doctor and I work at a big hospital","I doctor work big hospital","Doctor I work hospital big","Am doctor work I big hospital"], correctAnswer:"I am a doctor and I work at a big hospital", explanation:"المهنة ومكان العمل", xp:20 },
      { id:"pj3-t3-3", type:"listen_select", listenSentence:"What is your job", options:["job","work","do","teach"], correctAnswer:"job", explanation:"your job = وظيفتك", xp:18 },
      { id:"pj3-t3-4", type:"fill_blank", blankSentence:"I am a teacher and I ___ at a school", blankOptions:["work","do","job"], correctAnswer:"work", explanation:"I work = أنا أعمل", xp:18 },
      { id:"pj3-t3-5", type:"matching", pairs:[{en:"What do you do",ar:"ما عملك"},{en:"Where do you work",ar:"أين تعمل"},{en:"teacher",ar:"معلّم"},{en:"doctor",ar:"طبيب"},{en:"driver",ar:"سائق"},{en:"job",ar:"وظيفة"}], correctAnswer:"matched", explanation:"رائع! راجعت أسئلة المهن", xp:18 },
      { id:"pj3-t3-6", type:"word_order", sentence:"Where do you work now", correctAnswer:"Where do you work now", explanation:"أين تعمل الآن؟", xp:18 },
      { id:"pj3-t3-7", type:"translate", arabic:"ما عملك وأين تعمل؟ أنا معلّم في مدرسة", options:["What do you do and where do you work? I am a teacher at a school","What you do where work teacher school","Do you work teacher school what","Where what you do teacher school"], correctAnswer:"What do you do and where do you work? I am a teacher at a school", explanation:"حوار كامل عن العمل", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة ──
  "تحدي الوحدة": {
    t0: [
      { id:"pjc-t0-1", type:"word_order", sentence:"He teaches English at school", correctAnswer:"He teaches English at school", explanation:"هو يُعلّم في المدرسة", xp:15 },
      { id:"pjc-t0-2", type:"translate", arabic:"أنا أقود سيارة أجرة", options:["I drive a taxi","I taxi drive","Drive I taxi","Taxi I drive a"], correctAnswer:"I drive a taxi", explanation:"I drive = أنا أقود", xp:15 },
      { id:"pjc-t0-3", type:"listen_select", listenSentence:"What do you do", options:["do","work","job","teach"], correctAnswer:"do", explanation:"What do you do = ما عملك", xp:15 },
      { id:"pjc-t0-4", type:"fill_blank", blankSentence:"She ___ a car to work", blankOptions:["drives","drive","driving"], correctAnswer:"drives", explanation:"She drives = هي تقود", xp:15 },
      { id:"pjc-t0-5", type:"matching", pairs:[{en:"teach",ar:"يُعلّم"},{en:"drive",ar:"يقود"},{en:"cook",ar:"يطبخ"},{en:"teacher",ar:"معلّم"},{en:"doctor",ar:"طبيب"},{en:"job",ar:"وظيفة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"pjc-t0-6", type:"translate", arabic:"هي تعمل في مستشفى", options:["She works at a hospital","She work hospital","Works she hospital","She is work hospital"], correctAnswer:"She works at a hospital", explanation:"مكان العمل", xp:15 },
      { id:"pjc-t0-7", type:"word_order", sentence:"Where do you work", correctAnswer:"Where do you work", explanation:"أين تعمل؟", xp:15 },
    ],
    t1: [
      { id:"pjc-t1-1", type:"translate", arabic:"أنا معلّم وأعمل في مدرسة", options:["I am a teacher and I work at a school","I teacher work school","Teacher work I school","Am teacher I work school"], correctAnswer:"I am a teacher and I work at a school", explanation:"المهنة ومكان العمل", xp:16 },
      { id:"pjc-t1-2", type:"word_order", sentence:"He cooks in a restaurant", correctAnswer:"He cooks in a restaurant", explanation:"هو يطبخ في مطعم", xp:16 },
      { id:"pjc-t1-3", type:"listen_select", listenSentence:"Where do you work", options:["work","do","job","what"], correctAnswer:"work", explanation:"Where do you work = أين تعمل", xp:16 },
      { id:"pjc-t1-4", type:"fill_blank", blankSentence:"He ___ books at home", blankOptions:["writes","write","writing"], correctAnswer:"writes", explanation:"He writes = هو يكتب", xp:16 },
      { id:"pjc-t1-5", type:"matching", pairs:[{en:"he teaches",ar:"هو يُعلّم"},{en:"she drives",ar:"هي تقود"},{en:"doctor",ar:"طبيب"},{en:"driver",ar:"سائق"},{en:"What do you do",ar:"ما عملك"},{en:"job",ar:"وظيفة"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"pjc-t1-6", type:"translate", arabic:"ما عملك؟", options:["What do you do?","What you do?","Do what you?","What do do you?"], correctAnswer:"What do you do?", explanation:"السؤال عن العمل", xp:16 },
      { id:"pjc-t1-7", type:"word_order", sentence:"They build houses every day", correctAnswer:"They build houses every day", explanation:"هم يبنون كل يوم", xp:16 },
    ],
    t2: [
      { id:"pjc-t2-1", type:"word_order", sentence:"She drives a bus and he teaches English", correctAnswer:"She drives a bus and he teaches English", explanation:"عملان لشخصين", xp:18 },
      { id:"pjc-t2-2", type:"translate", arabic:"أنا طبيب وأعمل في مستشفى كبير", options:["I am a doctor and I work at a big hospital","I doctor work big hospital","Doctor work I hospital big","Am doctor I work hospital big"], correctAnswer:"I am a doctor and I work at a big hospital", explanation:"المهنة ومكان العمل", xp:18 },
      { id:"pjc-t2-3", type:"listen_select", listenSentence:"What is your job", options:["job","work","do","teach"], correctAnswer:"job", explanation:"your job = وظيفتك", xp:18 },
      { id:"pjc-t2-4", type:"fill_blank", blankSentence:"He ___ English and she ___ a taxi", blankOptions:["teaches drives","teach drive","teaching driving"], correctAnswer:"teaches drives", explanation:"إضافة s للمفرد", xp:18 },
      { id:"pjc-t2-5", type:"matching", pairs:[{en:"he cooks",ar:"هو يطبخ"},{en:"she teaches",ar:"هي تُعلّم"},{en:"doctor",ar:"طبيب"},{en:"teacher",ar:"معلّم"},{en:"Where do you work",ar:"أين تعمل"},{en:"job",ar:"وظيفة"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"pjc-t2-6", type:"translate", arabic:"هي تُعلّم في مدرسة كبيرة", options:["She teaches at a big school","She teach big school","Teaches she big school","Big school she teaches"], correctAnswer:"She teaches at a big school", explanation:"مكان العمل", xp:18 },
      { id:"pjc-t2-7", type:"word_order", sentence:"What do you do for work", correctAnswer:"What do you do for work", explanation:"ما عملك؟", xp:18 },
    ],
    t3: [
      { id:"pjc-t3-1", type:"word_order", sentence:"He teaches English and she writes books every day", correctAnswer:"He teaches English and she writes books every day", explanation:"عملان لشخصين", xp:22 },
      { id:"pjc-t3-2", type:"translate", arabic:"ما عملك وأين تعمل؟ أنا طبيب في مستشفى", options:["What do you do and where do you work? I am a doctor at a hospital","What you do work doctor hospital","Do you work doctor hospital what","Where what you doctor hospital work"], correctAnswer:"What do you do and where do you work? I am a doctor at a hospital", explanation:"حوار كامل عن العمل", xp:22 },
      { id:"pjc-t3-3", type:"listen_select", listenSentence:"She works at a hospital", options:["works","work","working","worked"], correctAnswer:"works", explanation:"She works = هي تعمل", xp:20 },
      { id:"pjc-t3-4", type:"fill_blank", blankSentence:"I am a ___ and I work at a school", blankOptions:["teacher","driver","doctor"], correctAnswer:"teacher", explanation:"teacher at school = معلّم في مدرسة", xp:22 },
      { id:"pjc-t3-5", type:"matching", pairs:[{en:"teach",ar:"يُعلّم"},{en:"drive",ar:"يقود"},{en:"What do you do",ar:"ما عملك"},{en:"Where do you work",ar:"أين تعمل"},{en:"doctor",ar:"طبيب"},{en:"job",ar:"وظيفة"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"pjc-t3-6", type:"word_order", sentence:"She drives a car to work every day", correctAnswer:"She drives a car to work every day", explanation:"هي تقود للعمل يومياً", xp:22 },
      { id:"pjc-t3-7", type:"translate", arabic:"هو يُعلّم في المدرسة وهي تعمل في مستشفى", options:["He teaches at school and she works at a hospital","He school teach she work hospital","Teaches he school works she hospital","School he teaches hospital she works"], correctAnswer:"He teaches at school and she works at a hospital", explanation:"عملان ومكانان 👑", xp:24 },
    ],
  },
};
