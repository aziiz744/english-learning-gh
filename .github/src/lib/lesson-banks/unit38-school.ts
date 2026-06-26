import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 38: تحدّث عن المدرسة
//   درس 1: المواد الدراسية — math, science, history, English, art
//   درس 2: في المدرسة — classroom, homework, exam, grade, break
//   درس 3: تحدث عن دراستك — favorite subject, good at, study
// ══════════════════════════════════════════════════════════════

export const unit38SchoolBank: Record<string, TieredBank> = {

  "المواد الدراسية": {
    t0: [
      { id:"sc-pic-1", type:"picture_match", word:"math", arabic:"رياضيات", pictureOptions:[{emoji:"🔢",label:"math"},{emoji:"🔬",label:"science"},{emoji:"📜",label:"history"},{emoji:"🎨",label:"art"}], correctAnswer:"math", explanation:"رياضيات = math 🔢", xp:10 },
      { id:"sc1-t0-1", type:"translate", arabic:"رياضيات", options:["math","science","history","art"], correctAnswer:"math", explanation:"math = رياضيات 🔢", xp:10 },
      { id:"sc1-t0-2", type:"listen_select", listenSentence:"science", options:["science","silence","sense","scene"], correctAnswer:"science", explanation:"science = علوم 🔬", xp:10 },
      { id:"sc1-t0-3", type:"translate", arabic:"تاريخ", options:["history","science","math","art"], correctAnswer:"history", explanation:"history = تاريخ 📜", xp:10 },
      { id:"sc1-t0-4", type:"word_order", sentence:"I like math", correctAnswer:"I like math", explanation:"أحب الرياضيات", xp:12 },
      { id:"sc1-t0-5", type:"fill_blank", blankSentence:"My favorite subject is ___", blankOptions:["science","run","very"], correctAnswer:"science", explanation:"favorite subject = المادة المفضّلة", xp:12 },
      { id:"sc1-t0-6", type:"translate", arabic:"فنون", options:["art","math","science","music"], correctAnswer:"art", explanation:"art = فنون 🎨", xp:10 },
      { id:"sc1-t0-7", type:"listen_select", listenSentence:"English class", options:["English","England","Englishs","Englands"], correctAnswer:"English", explanation:"English = الإنجليزية", xp:12 },
      { id:"sc1-t0-8", type:"word_order", sentence:"We study science", correctAnswer:"We study science", explanation:"ندرس العلوم", xp:12 },
      { id:"sc1-t0-9", type:"matching", pairs:[{en:"math",ar:"رياضيات"},{en:"science",ar:"علوم"},{en:"history",ar:"تاريخ"},{en:"English",ar:"إنجليزية"},{en:"art",ar:"فنون"},{en:"music",ar:"موسيقى"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sc1-t1-1", type:"translate", arabic:"جغرافيا", options:["geography","history","science","biology"], correctAnswer:"geography", explanation:"geography = جغرافيا 🗺️", xp:12 },
      { id:"sc1-t1-2", type:"word_order", sentence:"History is my favorite subject", correctAnswer:"History is my favorite subject", explanation:"التاريخ مادتي المفضّلة", xp:14 },
      { id:"sc1-t1-3", type:"listen_select", listenSentence:"chemistry", options:["chemistry","chimney","cemetery","ceremony"], correctAnswer:"chemistry", explanation:"chemistry = كيمياء 🧪", xp:13 },
      { id:"sc1-t1-4", type:"translate", arabic:"موسيقى", options:["music","art","math","science"], correctAnswer:"music", explanation:"music = موسيقى 🎵", xp:12 },
      { id:"sc1-t1-5", type:"fill_blank", blankSentence:"I am good at ___", blankOptions:["math","run","very"], correctAnswer:"math", explanation:"good at math = جيد في الرياضيات", xp:14 },
      { id:"sc1-t1-6", type:"word_order", sentence:"We have science on Monday", correctAnswer:"We have science on Monday", explanation:"لدينا علوم يوم الإثنين", xp:14 },
      { id:"sc1-t1-7", type:"translate", arabic:"أحياء", options:["biology","chemistry","physics","geology"], correctAnswer:"biology", explanation:"biology = أحياء", xp:13 },
      { id:"sc1-t1-8", type:"listen_select", listenSentence:"physics is hard", options:["physics","physical","physician","physique"], correctAnswer:"physics", explanation:"physics = فيزياء", xp:13 },
      { id:"sc1-t1-9", type:"matching", pairs:[{en:"geography",ar:"جغرافيا"},{en:"chemistry",ar:"كيمياء"},{en:"biology",ar:"أحياء"},{en:"physics",ar:"فيزياء"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sc1-t2-1", type:"word_order", sentence:"My favorite subjects are math and science", correctAnswer:"My favorite subjects are math and science", explanation:"موادي المفضّلة الرياضيات والعلوم", xp:16 },
      { id:"sc1-t2-2", type:"translate", arabic:"أجد الكيمياء صعبة جداً", options:["I find chemistry very difficult","I find chemistry very difficults","I finds chemistry very difficult","I find chemistry very difficulty"], correctAnswer:"I find chemistry very difficult", explanation:"find difficult = أجد صعباً", xp:16 },
      { id:"sc1-t2-3", type:"fill_blank", blankSentence:"I want to study ___ at university", blankOptions:["science","run","very"], correctAnswer:"science", explanation:"study science = دراسة العلوم", xp:15 },
      { id:"sc1-t2-4", type:"word_order", sentence:"We have three classes before lunch", correctAnswer:"We have three classes before lunch", explanation:"لدينا ثلاث حصص قبل الغداء", xp:16 },
      { id:"sc1-t2-5", type:"translate", arabic:"المعلّم يشرح درس التاريخ", options:["The teacher is explaining the history lesson","The teacher is explaining history lesson","The teacher explaining the history lesson","The teacher is explain the history lesson"], correctAnswer:"The teacher is explaining the history lesson", explanation:"is explaining = يشرح", xp:16 },
      { id:"sc1-t2-6", type:"listen_select", listenSentence:"a difficult subject", options:["subject","subjects","object","suggest"], correctAnswer:"subject", explanation:"subject = مادة دراسية", xp:15 },
      { id:"sc1-t2-7", type:"word_order", sentence:"Science helps us understand the world", correctAnswer:"Science helps us understand the world", explanation:"العلوم تساعدنا على فهم العالم", xp:15 },
      { id:"sc1-t2-8", type:"fill_blank", blankSentence:"English is an important ___", blankOptions:["subject","run","very"], correctAnswer:"subject", explanation:"an important subject = مادة مهمّة", xp:15 },
    ],
    t3: [],
  },

  "في المدرسة": {
    t0: [
      { id:"sc2-t0-1", type:"translate", arabic:"صف دراسي", options:["classroom","homework","exam","grade"], correctAnswer:"classroom", explanation:"classroom = صف دراسي", xp:10 },
      { id:"sc2-t0-2", type:"listen_select", listenSentence:"homework", options:["homework","housework","homeroom","handwork"], correctAnswer:"homework", explanation:"homework = واجب منزلي 📝", xp:10 },
      { id:"sc2-t0-3", type:"translate", arabic:"امتحان", options:["exam","grade","break","class"], correctAnswer:"exam", explanation:"exam = امتحان", xp:10 },
      { id:"sc2-t0-4", type:"word_order", sentence:"I have a lot of homework", correctAnswer:"I have a lot of homework", explanation:"لديّ الكثير من الواجبات", xp:12 },
      { id:"sc2-t0-5", type:"fill_blank", blankSentence:"We have an ___ tomorrow", blankOptions:["exam","run","very"], correctAnswer:"exam", explanation:"an exam = امتحان", xp:12 },
      { id:"sc2-t0-6", type:"translate", arabic:"درجة/علامة", options:["grade","class","exam","break"], correctAnswer:"grade", explanation:"grade = درجة/علامة", xp:10 },
      { id:"sc2-t0-7", type:"listen_select", listenSentence:"during the break", options:["break","brake","brick","brave"], correctAnswer:"break", explanation:"break = استراحة", xp:12 },
      { id:"sc2-t0-8", type:"word_order", sentence:"The exam was difficult", correctAnswer:"The exam was difficult", explanation:"كان الامتحان صعباً", xp:12 },
      { id:"sc2-t0-9", type:"matching", pairs:[{en:"classroom",ar:"صف دراسي"},{en:"homework",ar:"واجب منزلي"},{en:"exam",ar:"امتحان"},{en:"grade",ar:"درجة"},{en:"break",ar:"استراحة"},{en:"lesson",ar:"درس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sc2-t1-1", type:"translate", arabic:"تمرين", options:["exercise","exam","essay","example"], correctAnswer:"exercise", explanation:"exercise = تمرين", xp:12 },
      { id:"sc2-t1-2", type:"word_order", sentence:"I need to finish my homework", correctAnswer:"I need to finish my homework", explanation:"أحتاج لإنهاء واجبي", xp:14 },
      { id:"sc2-t1-3", type:"listen_select", listenSentence:"a good grade", options:["grade","grace","great","grain"], correctAnswer:"grade", explanation:"a good grade = درجة جيدة", xp:13 },
      { id:"sc2-t1-4", type:"translate", arabic:"مقال", options:["essay","exam","exercise","example"], correctAnswer:"essay", explanation:"essay = مقال", xp:12 },
      { id:"sc2-t1-5", type:"fill_blank", blankSentence:"I got a high ___ on the test", blankOptions:["grade","run","very"], correctAnswer:"grade", explanation:"high grade = درجة عالية", xp:14 },
      { id:"sc2-t1-6", type:"word_order", sentence:"We study together in the library", correctAnswer:"We study together in the library", explanation:"ندرس معاً في المكتبة", xp:14 },
      { id:"sc2-t1-7", type:"translate", arabic:"مكتبة", options:["library","laboratory","classroom","cafeteria"], correctAnswer:"library", explanation:"library = مكتبة 📚", xp:13 },
      { id:"sc2-t1-8", type:"listen_select", listenSentence:"in the laboratory", options:["laboratory","library","lavatory","laborer"], correctAnswer:"laboratory", explanation:"laboratory = مختبر", xp:13 },
      { id:"sc2-t1-9", type:"matching", pairs:[{en:"exercise",ar:"تمرين"},{en:"essay",ar:"مقال"},{en:"library",ar:"مكتبة"},{en:"laboratory",ar:"مختبر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sc2-t2-1", type:"word_order", sentence:"I have to study hard for my final exams", correctAnswer:"I have to study hard for my final exams", explanation:"عليّ الدراسة بجدّ لامتحاناتي النهائية", xp:16 },
      { id:"sc2-t2-2", type:"translate", arabic:"حصلت على درجات ممتازة هذا الفصل", options:["I got excellent grades this term","I got excellent grade this term","I get excellent grades this term","I got excellent grades this terms"], correctAnswer:"I got excellent grades this term", explanation:"excellent grades = درجات ممتازة", xp:16 },
      { id:"sc2-t2-3", type:"fill_blank", blankSentence:"We do experiments in the science ___", blankOptions:["laboratory","run","very"], correctAnswer:"laboratory", explanation:"science laboratory = مختبر العلوم", xp:15 },
      { id:"sc2-t2-4", type:"word_order", sentence:"The students are taking their exam now", correctAnswer:"The students are taking their exam now", explanation:"يؤدّي الطلاب امتحانهم الآن", xp:16 },
      { id:"sc2-t2-5", type:"translate", arabic:"الواجب المنزلي مستحقّ يوم الجمعة", options:["The homework is due on Friday","The homework is due on Fridays","The homework due on Friday","The homeworks is due on Friday"], correctAnswer:"The homework is due on Friday", explanation:"due on Friday = مستحقّ الجمعة", xp:16 },
      { id:"sc2-t2-6", type:"listen_select", listenSentence:"the cafeteria is closed", options:["cafeteria","cafe","cafeteria","cafeterias"], correctAnswer:"cafeteria", explanation:"cafeteria = مقصف", xp:15 },
      { id:"sc2-t2-7", type:"word_order", sentence:"We have a short break between classes", correctAnswer:"We have a short break between classes", explanation:"لدينا استراحة قصيرة بين الحصص", xp:15 },
      { id:"sc2-t2-8", type:"fill_blank", blankSentence:"The teacher will ___ our exams tomorrow", blankOptions:["grade","run","very"], correctAnswer:"grade", explanation:"grade exams = تصحيح الامتحانات", xp:15 },
    ],
    t3: [],
  },

  "تحدّث عن دراستك": {
    t0: [
      { id:"sc3-t0-1", type:"translate", arabic:"المادة المفضّلة", options:["favorite subject","favorite teacher","favorite class","favorite book"], correctAnswer:"favorite subject", explanation:"favorite subject = المادة المفضّلة", xp:10 },
      { id:"sc3-t0-2", type:"word_order", sentence:"My favorite subject is math", correctAnswer:"My favorite subject is math", explanation:"مادتي المفضّلة الرياضيات", xp:12 },
      { id:"sc3-t0-3", type:"listen_select", listenSentence:"good at science", options:["good","food","wood","mood"], correctAnswer:"good", explanation:"good at = جيد في", xp:10 },
      { id:"sc3-t0-4", type:"translate", arabic:"أنا جيد في", options:["I am good at","I am good in","I am good on","I good at"], correctAnswer:"I am good at", explanation:"good at = جيد في", xp:12 },
      { id:"sc3-t0-5", type:"fill_blank", blankSentence:"I ___ English every day", blankOptions:["study","run","very"], correctAnswer:"study", explanation:"study English = أدرس الإنجليزية", xp:12 },
      { id:"sc3-t0-6", type:"word_order", sentence:"I study at night", correctAnswer:"I study at night", explanation:"أدرس في الليل", xp:12 },
      { id:"sc3-t0-7", type:"listen_select", listenSentence:"I love learning", options:["learning","leaning","leaving","leading"], correctAnswer:"learning", explanation:"learning = التعلّم", xp:12 },
      { id:"sc3-t0-8", type:"translate", arabic:"أحب التعلّم", options:["I love learning","I love learn","I loves learning","I love to learns"], correctAnswer:"I love learning", explanation:"love learning = أحب التعلّم", xp:10 },
      { id:"sc3-t0-9", type:"matching", pairs:[{en:"favorite subject",ar:"المادة المفضّلة"},{en:"good at",ar:"جيد في"},{en:"study",ar:"يدرس"},{en:"learn",ar:"يتعلّم"},{en:"understand",ar:"يفهم"},{en:"practice",ar:"يتدرّب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sc3-t1-1", type:"word_order", sentence:"I am really good at solving problems", correctAnswer:"I am really good at solving problems", explanation:"أنا بارع في حلّ المسائل", xp:14 },
      { id:"sc3-t1-2", type:"translate", arabic:"أجد الرياضيات سهلة", options:["I find math easy","I find math easily","I finds math easy","I find maths easy"], correctAnswer:"I find math easy", explanation:"find math easy = أجد الرياضيات سهلة", xp:14 },
      { id:"sc3-t1-3", type:"listen_select", listenSentence:"I want to improve", options:["improve","improves","improved","improving"], correctAnswer:"improve", explanation:"improve = يتحسّن", xp:13 },
      { id:"sc3-t1-4", type:"fill_blank", blankSentence:"I need to ___ harder for the test", blankOptions:["study","run","very"], correctAnswer:"study", explanation:"study harder = أدرس بجدّ أكثر", xp:14 },
      { id:"sc3-t1-5", type:"word_order", sentence:"Science is interesting but difficult", correctAnswer:"Science is interesting but difficult", explanation:"العلوم ممتعة لكن صعبة", xp:14 },
      { id:"sc3-t1-6", type:"translate", arabic:"أريد تحسين لغتي الإنجليزية", options:["I want to improve my English","I want to improve my Englishs","I want improve my English","I want to improves my English"], correctAnswer:"I want to improve my English", explanation:"improve my English = تحسين إنجليزيتي", xp:13 },
      { id:"sc3-t1-7", type:"listen_select", listenSentence:"a great teacher", options:["teacher","teaches","teaching","taught"], correctAnswer:"teacher", explanation:"a great teacher = معلّم رائع", xp:13 },
      { id:"sc3-t1-8", type:"word_order", sentence:"I always do my homework on time", correctAnswer:"I always do my homework on time", explanation:"أؤدّي واجبي في الوقت دائماً", xp:14 },
      { id:"sc3-t1-9", type:"matching", pairs:[{en:"improve",ar:"يتحسّن"},{en:"solve",ar:"يحلّ"},{en:"interesting",ar:"ممتع"},{en:"difficult",ar:"صعب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sc3-t2-1", type:"word_order", sentence:"I want to become a doctor in the future", correctAnswer:"I want to become a doctor in the future", explanation:"أريد أن أصبح طبيباً في المستقبل", xp:16 },
      { id:"sc3-t2-2", type:"translate", arabic:"أدرس بجدّ لأحقّق أحلامي", options:["I study hard to achieve my dreams","I study hard to achieve my dream","I studies hard to achieve my dreams","I study hard to achieves my dreams"], correctAnswer:"I study hard to achieve my dreams", explanation:"achieve my dreams = أحقّق أحلامي", xp:16 },
      { id:"sc3-t2-3", type:"fill_blank", blankSentence:"My goal is to ___ at university", blankOptions:["study","run","very"], correctAnswer:"study", explanation:"study at university = الدراسة بالجامعة", xp:15 },
      { id:"sc3-t2-4", type:"word_order", sentence:"Learning a new language opens many doors", correctAnswer:"Learning a new language opens many doors", explanation:"تعلّم لغة جديدة يفتح أبواباً كثيرة", xp:16 },
      { id:"sc3-t2-5", type:"translate", arabic:"أعتقد أن التعليم مهمّ جداً", options:["I think education is very important","I think education is very importance","I thinks education is very important","I think educations is very important"], correctAnswer:"I think education is very important", explanation:"education = التعليم", xp:16 },
      { id:"sc3-t2-6", type:"listen_select", listenSentence:"hard work pays off", options:["pays","plays","prays","pays"], correctAnswer:"pays", explanation:"pays off = يؤتي ثماره", xp:15 },
      { id:"sc3-t2-7", type:"word_order", sentence:"I enjoy working on group projects", correctAnswer:"I enjoy working on group projects", explanation:"أستمتع بالعمل على المشاريع الجماعية", xp:15 },
      { id:"sc3-t2-8", type:"fill_blank", blankSentence:"Practice makes ___", blankOptions:["perfect","run","very"], correctAnswer:"perfect", explanation:"practice makes perfect = التكرار يُتقن", xp:15 },
    ],
    t3: [],
  },
};
