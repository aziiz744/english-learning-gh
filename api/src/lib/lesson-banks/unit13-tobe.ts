import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 13: استخدم الزمن المضارع من "يكون" (am/is/are)
//   درس 1: I am / You are / He is — الأساسيات
//   درس 2: جمل كاملة مع am/is/are
//   درس 3: am/is/are مع الصفات والأماكن
// ══════════════════════════════════════════════════════════════

export const unit13ToBeBank: Record<string, TieredBank> = {

  "أنا أكون، أنت تكون": {
    t0: [
      { id:"tb1-t0-1", type:"translate", arabic:"أنا", options:["I am","you are","he is","we are"], correctAnswer:"I am", explanation:"I am = أنا (أكون)", xp:10 },
      { id:"tb1-t0-2", type:"translate", arabic:"أنت تكون", options:["you are","I am","he is","they are"], correctAnswer:"you are", explanation:"you are = أنت تكون", xp:10 },
      { id:"tb1-t0-3", type:"translate", arabic:"هو يكون", options:["he is","she is","it is","we are"], correctAnswer:"he is", explanation:"he is = هو يكون", xp:10 },
      { id:"tb1-t0-4", type:"word_order", sentence:"I am a student", correctAnswer:"I am a student", explanation:"أنا طالب", xp:12 },
      { id:"tb1-t0-5", type:"fill_blank", blankSentence:"I ___ happy", blankOptions:["am","is","are"], correctAnswer:"am", explanation:"مع I نستخدم am", xp:12 },
      { id:"tb1-t0-6", type:"translate", arabic:"هي تكون", options:["she is","he is","it is","you are"], correctAnswer:"she is", explanation:"she is = هي تكون", xp:10 },
      { id:"tb1-t0-7", type:"listen_select", listenSentence:"you are my friend", options:["are","am","is","be"], correctAnswer:"are", explanation:"you are = أنت تكون", xp:12 },
      { id:"tb1-t0-8", type:"fill_blank", blankSentence:"He ___ a teacher", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"مع he نستخدم is", xp:12 },
      { id:"tb1-t0-9", type:"matching", pairs:[{en:"I am",ar:"أنا أكون"},{en:"you are",ar:"أنت تكون"},{en:"he is",ar:"هو يكون"},{en:"she is",ar:"هي تكون"},{en:"we are",ar:"نحن نكون"},{en:"they are",ar:"هم يكونون"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"tb1-t1-1", type:"translate", arabic:"نحن نكون", options:["we are","they are","you are","I am"], correctAnswer:"we are", explanation:"we are = نحن نكون", xp:12 },
      { id:"tb1-t1-2", type:"translate", arabic:"هم يكونون", options:["they are","we are","you are","he is"], correctAnswer:"they are", explanation:"they are = هم يكونون", xp:12 },
      { id:"tb1-t1-3", type:"fill_blank", blankSentence:"We ___ from Egypt", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"مع we نستخدم are", xp:14 },
      { id:"tb1-t1-4", type:"word_order", sentence:"She is a doctor", correctAnswer:"She is a doctor", explanation:"هي طبيبة", xp:14 },
      { id:"tb1-t1-5", type:"listen_select", listenSentence:"they are students", options:["are","is","am","be"], correctAnswer:"are", explanation:"they are = هم يكونون", xp:13 },
      { id:"tb1-t1-6", type:"fill_blank", blankSentence:"It ___ a nice day", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"مع it نستخدم is", xp:14 },
      { id:"tb1-t1-7", type:"translate", arabic:"أنا من السعودية", options:["I am from Saudi Arabia","I from Saudi Arabia","I is from Saudi Arabia","Am I from Saudi Arabia"], correctAnswer:"I am from Saudi Arabia", explanation:"I am from = أنا من", xp:14 },
      { id:"tb1-t1-8", type:"word_order", sentence:"We are good friends", correctAnswer:"We are good friends", explanation:"نحن أصدقاء جيدون", xp:14 },
      { id:"tb1-t1-9", type:"matching", pairs:[{en:"am",ar:"مع I"},{en:"is",ar:"مع he/she/it"},{en:"are",ar:"مع you/we/they"},{en:"be",ar:"يكون"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"tb1-t2-1", type:"word_order", sentence:"My brother is a good student", correctAnswer:"My brother is a good student", explanation:"أخي طالب جيد", xp:16 },
      { id:"tb1-t2-2", type:"translate", arabic:"نحن سعداء جداً اليوم", options:["We are very happy today","We very happy today","We is very happy today","We are very happy day"], correctAnswer:"We are very happy today", explanation:"We are happy = نحن سعداء", xp:16 },
      { id:"tb1-t2-3", type:"fill_blank", blankSentence:"My parents ___ at home", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"parents جمع → are", xp:15 },
      { id:"tb1-t2-4", type:"word_order", sentence:"You are very kind to me", correctAnswer:"You are very kind to me", explanation:"أنت لطيف جداً معي", xp:16 },
      { id:"tb1-t2-5", type:"translate", arabic:"المدرسة قريبة من منزلي", options:["The school is near my house","The school near my house","School is near my house","The school is near house"], correctAnswer:"The school is near my house", explanation:"is near = قريبة من", xp:16 },
      { id:"tb1-t2-6", type:"fill_blank", blankSentence:"The children ___ in the garden", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"children جمع → are", xp:15 },
      { id:"tb1-t2-7", type:"word_order", sentence:"He is my best friend", correctAnswer:"He is my best friend", explanation:"هو صديقي المفضّل", xp:15 },
      { id:"tb1-t2-8", type:"translate", arabic:"أنا متعب اليوم", options:["I am tired today","I tired today","I is tired today","Am tired today"], correctAnswer:"I am tired today", explanation:"I am tired = أنا متعب", xp:15 },
    ],
    t3: [],
  },

  "جمل مع يكون": {
    t0: [
      { id:"tb2-t0-1", type:"fill_blank", blankSentence:"She ___ my sister", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"she is = هي تكون", xp:10 },
      { id:"tb2-t0-2", type:"word_order", sentence:"They are at school", correctAnswer:"They are at school", explanation:"هم في المدرسة", xp:12 },
      { id:"tb2-t0-3", type:"translate", arabic:"هو طويل", options:["He is tall","He tall","He are tall","He am tall"], correctAnswer:"He is tall", explanation:"He is tall = هو طويل", xp:10 },
      { id:"tb2-t0-4", type:"fill_blank", blankSentence:"You ___ a good cook", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"you are = أنت تكون", xp:12 },
      { id:"tb2-t0-5", type:"listen_select", listenSentence:"she is beautiful", options:["is","am","are","be"], correctAnswer:"is", explanation:"she is = هي تكون", xp:12 },
      { id:"tb2-t0-6", type:"word_order", sentence:"I am ready now", correctAnswer:"I am ready now", explanation:"أنا جاهز الآن", xp:12 },
      { id:"tb2-t0-7", type:"translate", arabic:"نحن في المنزل", options:["We are at home","We at home","We is at home","We am at home"], correctAnswer:"We are at home", explanation:"We are at home", xp:10 },
      { id:"tb2-t0-8", type:"fill_blank", blankSentence:"It ___ very hot", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"it is = إنه يكون", xp:12 },
      { id:"tb2-t0-9", type:"matching", pairs:[{en:"I am tall",ar:"أنا طويل"},{en:"he is short",ar:"هو قصير"},{en:"we are happy",ar:"نحن سعداء"},{en:"they are here",ar:"هم هنا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"tb2-t1-1", type:"word_order", sentence:"My friends are very nice", correctAnswer:"My friends are very nice", explanation:"أصدقائي لطفاء جداً", xp:14 },
      { id:"tb2-t1-2", type:"translate", arabic:"الطقس جميل اليوم", options:["The weather is nice today","The weather nice today","Weather is nice today","The weather are nice today"], correctAnswer:"The weather is nice today", explanation:"weather is = الطقس يكون", xp:14 },
      { id:"tb2-t1-3", type:"fill_blank", blankSentence:"The books ___ on the desk", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"books جمع → are", xp:14 },
      { id:"tb2-t1-4", type:"listen_select", listenSentence:"we are ready", options:["are","is","am","be"], correctAnswer:"are", explanation:"we are = نحن نكون", xp:13 },
      { id:"tb2-t1-5", type:"word_order", sentence:"He is very busy today", correctAnswer:"He is very busy today", explanation:"هو مشغول جداً اليوم", xp:14 },
      { id:"tb2-t1-6", type:"translate", arabic:"أنا جائع الآن", options:["I am hungry now","I hungry now","I is hungry now","Am hungry now"], correctAnswer:"I am hungry now", explanation:"I am hungry = أنا جائع", xp:14 },
      { id:"tb2-t1-7", type:"fill_blank", blankSentence:"She ___ a kind teacher", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"she is = هي تكون", xp:13 },
      { id:"tb2-t1-8", type:"word_order", sentence:"They are from Canada", correctAnswer:"They are from Canada", explanation:"هم من كندا", xp:14 },
      { id:"tb2-t1-9", type:"matching", pairs:[{en:"is busy",ar:"مشغول"},{en:"is hungry",ar:"جائع"},{en:"is ready",ar:"جاهز"},{en:"is tired",ar:"متعب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"tb2-t2-1", type:"word_order", sentence:"The students are in the classroom", correctAnswer:"The students are in the classroom", explanation:"الطلاب في الصف", xp:16 },
      { id:"tb2-t2-2", type:"translate", arabic:"والداي طبيبان", options:["My parents are doctors","My parents is doctors","My parents are doctor","My parent are doctors"], correctAnswer:"My parents are doctors", explanation:"parents are = الوالدان يكونان", xp:16 },
      { id:"tb2-t2-3", type:"fill_blank", blankSentence:"The food ___ delicious", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"food is = الطعام يكون", xp:15 },
      { id:"tb2-t2-4", type:"word_order", sentence:"We are happy to see you", correctAnswer:"We are happy to see you", explanation:"نحن سعداء برؤيتك", xp:16 },
      { id:"tb2-t2-5", type:"translate", arabic:"أنت محقّ تماماً", options:["You are completely right","You completely right","You is completely right","You are completely right now"], correctAnswer:"You are completely right", explanation:"You are right = أنت محقّ", xp:16 },
      { id:"tb2-t2-6", type:"fill_blank", blankSentence:"My sister and I ___ twins", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"sister and I = نحن → are", xp:15 },
      { id:"tb2-t2-7", type:"word_order", sentence:"This restaurant is very famous", correctAnswer:"This restaurant is very famous", explanation:"هذا المطعم مشهور جداً", xp:15 },
      { id:"tb2-t2-8", type:"translate", arabic:"الأطفال في الحديقة", options:["The children are in the garden","The children is in the garden","Children are in the garden","The children are in garden"], correctAnswer:"The children are in the garden", explanation:"children are = الأطفال يكونون", xp:16 },
    ],
    t3: [],
  },

  "يكون مع الصفات": {
    t0: [
      { id:"tb3-t0-1", type:"translate", arabic:"أنا سعيد", options:["I am happy","I happy","I is happy","Am happy"], correctAnswer:"I am happy", explanation:"I am happy = أنا سعيد", xp:10 },
      { id:"tb3-t0-2", type:"word_order", sentence:"He is very tall", correctAnswer:"He is very tall", explanation:"هو طويل جداً", xp:12 },
      { id:"tb3-t0-3", type:"fill_blank", blankSentence:"The box ___ heavy", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"box is = الصندوق يكون", xp:12 },
      { id:"tb3-t0-4", type:"translate", arabic:"نحن متعبون", options:["We are tired","We tired","We is tired","We am tired"], correctAnswer:"We are tired", explanation:"We are tired = نحن متعبون", xp:10 },
      { id:"tb3-t0-5", type:"listen_select", listenSentence:"it is cold", options:["is","am","are","be"], correctAnswer:"is", explanation:"it is cold = الجو بارد", xp:12 },
      { id:"tb3-t0-6", type:"word_order", sentence:"They are very kind", correctAnswer:"They are very kind", explanation:"هم لطفاء جداً", xp:12 },
      { id:"tb3-t0-7", type:"fill_blank", blankSentence:"You ___ very smart", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"you are = أنت تكون", xp:12 },
      { id:"tb3-t0-8", type:"translate", arabic:"إنها مشغولة", options:["She is busy","She busy","She are busy","She am busy"], correctAnswer:"She is busy", explanation:"She is busy = هي مشغولة", xp:10 },
      { id:"tb3-t0-9", type:"matching", pairs:[{en:"happy",ar:"سعيد"},{en:"tired",ar:"متعب"},{en:"busy",ar:"مشغول"},{en:"kind",ar:"لطيف"},{en:"smart",ar:"ذكي"},{en:"tall",ar:"طويل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"tb3-t1-1", type:"word_order", sentence:"The weather is cold and rainy", correctAnswer:"The weather is cold and rainy", explanation:"الطقس بارد وممطر", xp:14 },
      { id:"tb3-t1-2", type:"translate", arabic:"أصدقائي مشغولون اليوم", options:["My friends are busy today","My friends busy today","My friends is busy today","My friend are busy today"], correctAnswer:"My friends are busy today", explanation:"friends are busy", xp:14 },
      { id:"tb3-t1-3", type:"fill_blank", blankSentence:"This coffee ___ very hot", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"coffee is = القهوة تكون", xp:14 },
      { id:"tb3-t1-4", type:"listen_select", listenSentence:"you are right", options:["are","is","am","be"], correctAnswer:"are", explanation:"you are right = أنت محقّ", xp:13 },
      { id:"tb3-t1-5", type:"word_order", sentence:"I am proud of you", correctAnswer:"I am proud of you", explanation:"أنا فخور بك", xp:14 },
      { id:"tb3-t1-6", type:"translate", arabic:"الغرفة نظيفة ومرتّبة", options:["The room is clean and tidy","The room clean and tidy","Room is clean and tidy","The room are clean and tidy"], correctAnswer:"The room is clean and tidy", explanation:"is clean = نظيفة", xp:14 },
      { id:"tb3-t1-7", type:"fill_blank", blankSentence:"We ___ excited about the trip", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"we are excited = نحن متحمسون", xp:13 },
      { id:"tb3-t1-8", type:"word_order", sentence:"She is always happy", correctAnswer:"She is always happy", explanation:"هي سعيدة دائماً", xp:14 },
      { id:"tb3-t1-9", type:"matching", pairs:[{en:"clean",ar:"نظيف"},{en:"proud",ar:"فخور"},{en:"excited",ar:"متحمس"},{en:"famous",ar:"مشهور"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"tb3-t2-1", type:"word_order", sentence:"My grandparents are very healthy", correctAnswer:"My grandparents are very healthy", explanation:"أجدادي أصحّاء جداً", xp:16 },
      { id:"tb3-t2-2", type:"translate", arabic:"هذا الكتاب ممتع جداً", options:["This book is very interesting","This book very interesting","This book are very interesting","This book is very interest"], correctAnswer:"This book is very interesting", explanation:"is interesting = ممتع", xp:16 },
      { id:"tb3-t2-3", type:"fill_blank", blankSentence:"The streets ___ crowded today", blankOptions:["are","is","am"], correctAnswer:"are", explanation:"streets جمع → are", xp:15 },
      { id:"tb3-t2-4", type:"word_order", sentence:"You are the best teacher ever", correctAnswer:"You are the best teacher ever", explanation:"أنت أفضل معلّم على الإطلاق", xp:16 },
      { id:"tb3-t2-5", type:"translate", arabic:"نحن متأكدون من الإجابة", options:["We are sure about the answer","We sure about the answer","We is sure about the answer","We are sure about answer"], correctAnswer:"We are sure about the answer", explanation:"are sure = متأكدون", xp:16 },
      { id:"tb3-t2-6", type:"fill_blank", blankSentence:"The movie ___ really exciting", blankOptions:["is","am","are"], correctAnswer:"is", explanation:"movie is = الفيلم يكون", xp:15 },
      { id:"tb3-t2-7", type:"word_order", sentence:"They are happy with the results", correctAnswer:"They are happy with the results", explanation:"هم سعداء بالنتائج", xp:15 },
      { id:"tb3-t2-8", type:"translate", arabic:"أنا متأكد أنك ستنجح", options:["I am sure you will succeed","I sure you will succeed","I am sure you will success","Am sure you will succeed"], correctAnswer:"I am sure you will succeed", explanation:"I am sure = أنا متأكد", xp:16 },
    ],
    t3: [],
  },
};
