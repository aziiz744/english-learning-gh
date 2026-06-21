import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 16: تواصل في العمل
//   درس 1: كلمات العمل — office, meeting, email, boss, colleague
//   درس 2: في الاجتماع — report, project, deadline, present
//   درس 3: التواصل المهني — Could you, I'll send, Let me know
// ══════════════════════════════════════════════════════════════

export const unit16WorkBank: Record<string, TieredBank> = {

  "كلمات العمل": {
    t0: [
      { id:"wk-pic-1", type:"picture_match", word:"office", arabic:"مكتب", pictureOptions:[{emoji:"🏢",label:"office"},{emoji:"📧",label:"email"},{emoji:"👔",label:"boss"},{emoji:"📊",label:"report"}], correctAnswer:"office", explanation:"مكتب = office 🏢", xp:10 },
      { id:"wk1-t0-1", type:"translate", arabic:"مكتب", options:["office","meeting","email","boss"], correctAnswer:"office", explanation:"office = مكتب 🏢", xp:10 },
      { id:"wk1-t0-2", type:"listen_select", listenSentence:"meeting", options:["meeting","office","email","report"], correctAnswer:"meeting", explanation:"meeting = اجتماع", xp:10 },
      { id:"wk1-t0-3", type:"translate", arabic:"بريد إلكتروني", options:["email","office","boss","report"], correctAnswer:"email", explanation:"email = بريد إلكتروني 📧", xp:10 },
      { id:"wk1-t0-4", type:"word_order", sentence:"I work in an office", correctAnswer:"I work in an office", explanation:"أعمل في مكتب", xp:12 },
      { id:"wk1-t0-5", type:"fill_blank", blankSentence:"I have a ___ today", blankOptions:["meeting","run","very"], correctAnswer:"meeting", explanation:"a meeting = اجتماع", xp:12 },
      { id:"wk1-t0-6", type:"translate", arabic:"مدير", options:["boss","colleague","worker","staff"], correctAnswer:"boss", explanation:"boss = مدير 👔", xp:10 },
      { id:"wk1-t0-7", type:"listen_select", listenSentence:"my colleague", options:["colleague","boss","office","email"], correctAnswer:"colleague", explanation:"colleague = زميل", xp:12 },
      { id:"wk1-t0-8", type:"word_order", sentence:"He is my boss", correctAnswer:"He is my boss", explanation:"هو مديري", xp:12 },
      { id:"wk1-t0-9", type:"matching", pairs:[{en:"office",ar:"مكتب"},{en:"meeting",ar:"اجتماع"},{en:"email",ar:"بريد إلكتروني"},{en:"boss",ar:"مدير"},{en:"colleague",ar:"زميل"},{en:"work",ar:"عمل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"wk1-t1-1", type:"translate", arabic:"زميل", options:["colleague","boss","client","staff"], correctAnswer:"colleague", explanation:"colleague = زميل", xp:12 },
      { id:"wk1-t1-2", type:"word_order", sentence:"I have a meeting at nine", correctAnswer:"I have a meeting at nine", explanation:"لديّ اجتماع في التاسعة", xp:14 },
      { id:"wk1-t1-3", type:"listen_select", listenSentence:"send an email", options:["email","meeting","report","office"], correctAnswer:"email", explanation:"send an email = أرسل بريداً", xp:13 },
      { id:"wk1-t1-4", type:"translate", arabic:"عميل", options:["client","boss","colleague","staff"], correctAnswer:"client", explanation:"client = عميل", xp:12 },
      { id:"wk1-t1-5", type:"fill_blank", blankSentence:"Please reply to my ___", blankOptions:["email","run","very"], correctAnswer:"email", explanation:"my email = بريدي", xp:14 },
      { id:"wk1-t1-6", type:"word_order", sentence:"My boss is very kind", correctAnswer:"My boss is very kind", explanation:"مديري لطيف جداً", xp:14 },
      { id:"wk1-t1-7", type:"translate", arabic:"موظف", options:["employee","boss","client","office"], correctAnswer:"employee", explanation:"employee = موظف", xp:12 },
      { id:"wk1-t1-8", type:"listen_select", listenSentence:"at the office", options:["office","meeting","email","boss"], correctAnswer:"office", explanation:"at the office = في المكتب", xp:13 },
      { id:"wk1-t1-9", type:"matching", pairs:[{en:"client",ar:"عميل"},{en:"employee",ar:"موظف"},{en:"colleague",ar:"زميل"},{en:"boss",ar:"مدير"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"wk1-t2-1", type:"word_order", sentence:"I need to send an important email", correctAnswer:"I need to send an important email", explanation:"أحتاج إرسال بريد مهم", xp:16 },
      { id:"wk1-t2-2", type:"translate", arabic:"لديّ اجتماع مع المدير", options:["I have a meeting with the boss","I have a meeting the boss","I have meeting with the boss","I have a meeting with boss"], correctAnswer:"I have a meeting with the boss", explanation:"meeting with = اجتماع مع", xp:16 },
      { id:"wk1-t2-3", type:"fill_blank", blankSentence:"My ___ are very helpful", blankOptions:["colleagues","run","very"], correctAnswer:"colleagues", explanation:"colleagues = الزملاء", xp:15 },
      { id:"wk1-t2-4", type:"word_order", sentence:"The office is on the third floor", correctAnswer:"The office is on the third floor", explanation:"المكتب في الطابق الثالث", xp:16 },
      { id:"wk1-t2-5", type:"translate", arabic:"أعمل من المنزل اليوم", options:["I work from home today","I work home today","I work from home day","I working from home today"], correctAnswer:"I work from home today", explanation:"work from home = العمل من المنزل", xp:16 },
      { id:"wk1-t2-6", type:"listen_select", listenSentence:"the new project", options:["project","meeting","email","office"], correctAnswer:"project", explanation:"the new project = المشروع الجديد", xp:15 },
      { id:"wk1-t2-7", type:"word_order", sentence:"We have a busy week ahead", correctAnswer:"We have a busy week ahead", explanation:"لدينا أسبوع مزدحم", xp:15 },
      { id:"wk1-t2-8", type:"fill_blank", blankSentence:"I will call the ___ now", blankOptions:["client","run","very"], correctAnswer:"client", explanation:"the client = العميل", xp:15 },
    ],
    t3: [],
  },

  "في الاجتماع": {
    t0: [
      { id:"wk2-t0-1", type:"translate", arabic:"تقرير", options:["report","project","email","meeting"], correctAnswer:"report", explanation:"report = تقرير 📊", xp:10 },
      { id:"wk2-t0-2", type:"listen_select", listenSentence:"project", options:["project","report","email","office"], correctAnswer:"project", explanation:"project = مشروع", xp:10 },
      { id:"wk2-t0-3", type:"translate", arabic:"موعد نهائي", options:["deadline","report","project","meeting"], correctAnswer:"deadline", explanation:"deadline = موعد نهائي", xp:10 },
      { id:"wk2-t0-4", type:"word_order", sentence:"This is my report", correctAnswer:"This is my report", explanation:"هذا تقريري", xp:12 },
      { id:"wk2-t0-5", type:"fill_blank", blankSentence:"The ___ is due tomorrow", blankOptions:["report","run","very"], correctAnswer:"report", explanation:"the report = التقرير", xp:12 },
      { id:"wk2-t0-6", type:"translate", arabic:"يقدّم", options:["present","report","send","write"], correctAnswer:"present", explanation:"present = يقدّم", xp:10 },
      { id:"wk2-t0-7", type:"listen_select", listenSentence:"the deadline", options:["deadline","project","report","meeting"], correctAnswer:"deadline", explanation:"the deadline = الموعد النهائي", xp:12 },
      { id:"wk2-t0-8", type:"word_order", sentence:"We start the meeting now", correctAnswer:"We start the meeting now", explanation:"نبدأ الاجتماع الآن", xp:12 },
      { id:"wk2-t0-9", type:"matching", pairs:[{en:"report",ar:"تقرير"},{en:"project",ar:"مشروع"},{en:"deadline",ar:"موعد نهائي"},{en:"present",ar:"يقدّم"},{en:"task",ar:"مهمة"},{en:"plan",ar:"خطة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"wk2-t1-1", type:"translate", arabic:"مهمة", options:["task","report","project","plan"], correctAnswer:"task", explanation:"task = مهمة", xp:12 },
      { id:"wk2-t1-2", type:"word_order", sentence:"I will present the report", correctAnswer:"I will present the report", explanation:"سأقدّم التقرير", xp:14 },
      { id:"wk2-t1-3", type:"listen_select", listenSentence:"finish the project", options:["project","report","task","plan"], correctAnswer:"project", explanation:"finish the project = أنهِ المشروع", xp:13 },
      { id:"wk2-t1-4", type:"translate", arabic:"خطة", options:["plan","task","report","project"], correctAnswer:"plan", explanation:"plan = خطة", xp:12 },
      { id:"wk2-t1-5", type:"fill_blank", blankSentence:"We need a good ___", blankOptions:["plan","run","very"], correctAnswer:"plan", explanation:"a good plan = خطة جيدة", xp:14 },
      { id:"wk2-t1-6", type:"word_order", sentence:"The deadline is next week", correctAnswer:"The deadline is next week", explanation:"الموعد النهائي الأسبوع القادم", xp:14 },
      { id:"wk2-t1-7", type:"translate", arabic:"سأنهي المهمة اليوم", options:["I will finish the task today","I will finish task today","I finish the task today","I will finished the task today"], correctAnswer:"I will finish the task today", explanation:"finish the task = أنهِ المهمة", xp:13 },
      { id:"wk2-t1-8", type:"listen_select", listenSentence:"a great idea", options:["idea","plan","task","report"], correctAnswer:"idea", explanation:"a great idea = فكرة رائعة", xp:13 },
      { id:"wk2-t1-9", type:"matching", pairs:[{en:"task",ar:"مهمة"},{en:"plan",ar:"خطة"},{en:"idea",ar:"فكرة"},{en:"goal",ar:"هدف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"wk2-t2-1", type:"word_order", sentence:"Let us discuss the new project today", correctAnswer:"Let us discuss the new project today", explanation:"دعنا نناقش المشروع الجديد اليوم", xp:16 },
      { id:"wk2-t2-2", type:"translate", arabic:"هل يمكنك إرسال التقرير؟", options:["Can you send the report?","Can you send report?","You can send the report?","Can send you the report?"], correctAnswer:"Can you send the report?", explanation:"send the report = أرسل التقرير", xp:16 },
      { id:"wk2-t2-3", type:"fill_blank", blankSentence:"We must meet the ___", blankOptions:["deadline","run","very"], correctAnswer:"deadline", explanation:"meet the deadline = الالتزام بالموعد", xp:15 },
      { id:"wk2-t2-4", type:"word_order", sentence:"I have some questions about the plan", correctAnswer:"I have some questions about the plan", explanation:"لديّ أسئلة حول الخطة", xp:16 },
      { id:"wk2-t2-5", type:"translate", arabic:"المشروع يسير بشكل جيد", options:["The project is going well","The project going well","The project is go well","The project is going good"], correctAnswer:"The project is going well", explanation:"going well = يسير جيداً", xp:16 },
      { id:"wk2-t2-6", type:"listen_select", listenSentence:"let me explain", options:["explain","present","discuss","report"], correctAnswer:"explain", explanation:"let me explain = دعني أشرح", xp:15 },
      { id:"wk2-t2-7", type:"word_order", sentence:"We will finish on time", correctAnswer:"We will finish on time", explanation:"سننتهي في الوقت", xp:15 },
      { id:"wk2-t2-8", type:"fill_blank", blankSentence:"This is a great ___", blankOptions:["idea","run","very"], correctAnswer:"idea", explanation:"a great idea = فكرة رائعة", xp:15 },
    ],
    t3: [],
  },

  "التواصل المهني": {
    t0: [
      { id:"wk3-t0-1", type:"translate", arabic:"هل يمكنك", options:["Could you","Can you do","Would you do","Will you do"], correctAnswer:"Could you", explanation:"Could you = هل يمكنك (مهذّب)", xp:10 },
      { id:"wk3-t0-2", type:"word_order", sentence:"I will send the email", correctAnswer:"I will send the email", explanation:"سأرسل البريد", xp:12 },
      { id:"wk3-t0-3", type:"listen_select", listenSentence:"let me know", options:["know","go","show","grow"], correctAnswer:"know", explanation:"let me know = أعلمني", xp:10 },
      { id:"wk3-t0-4", type:"translate", arabic:"شكراً على وقتك", options:["Thank you for your time","Thank for your time","Thank you your time","Thanks you for your time"], correctAnswer:"Thank you for your time", explanation:"for your time = على وقتك", xp:12 },
      { id:"wk3-t0-5", type:"fill_blank", blankSentence:"___ you help me please", blankOptions:["Could","Run","Very"], correctAnswer:"Could", explanation:"Could you = هل يمكنك", xp:12 },
      { id:"wk3-t0-6", type:"word_order", sentence:"Let me know soon", correctAnswer:"Let me know soon", explanation:"أعلمني قريباً", xp:12 },
      { id:"wk3-t0-7", type:"listen_select", listenSentence:"of course", options:["course","horse","force","source"], correctAnswer:"course", explanation:"of course = بالطبع", xp:10 },
      { id:"wk3-t0-8", type:"translate", arabic:"لا مشكلة", options:["No problem","No problems","Not problem","No the problem"], correctAnswer:"No problem", explanation:"No problem = لا مشكلة", xp:10 },
      { id:"wk3-t0-9", type:"matching", pairs:[{en:"Could you",ar:"هل يمكنك"},{en:"let me know",ar:"أعلمني"},{en:"of course",ar:"بالطبع"},{en:"no problem",ar:"لا مشكلة"},{en:"I'll send",ar:"سأرسل"},{en:"thank you",ar:"شكراً"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"wk3-t1-1", type:"word_order", sentence:"Could you please call me back", correctAnswer:"Could you please call me back", explanation:"هل يمكنك معاودة الاتصال؟", xp:14 },
      { id:"wk3-t1-2", type:"translate", arabic:"سأرسل لك التفاصيل", options:["I'll send you the details","I'll send you details","I send you the details","I'll sent you the details"], correctAnswer:"I'll send you the details", explanation:"I'll send = سأرسل", xp:14 },
      { id:"wk3-t1-3", type:"listen_select", listenSentence:"as soon as possible", options:["possible","probable","possibly","passable"], correctAnswer:"possible", explanation:"as soon as possible = بأسرع وقت", xp:13 },
      { id:"wk3-t1-4", type:"fill_blank", blankSentence:"Please ___ me know", blankOptions:["let","run","very"], correctAnswer:"let", explanation:"let me know = أعلمني", xp:14 },
      { id:"wk3-t1-5", type:"word_order", sentence:"I will get back to you", correctAnswer:"I will get back to you", explanation:"سأعاود الرجوع إليك", xp:14 },
      { id:"wk3-t1-6", type:"translate", arabic:"بالتأكيد، سأفعل ذلك", options:["Sure, I will do that","Sure, I do that","Sure, I will do this","Sure, I will did that"], correctAnswer:"Sure, I will do that", explanation:"Sure = بالتأكيد", xp:14 },
      { id:"wk3-t1-7", type:"listen_select", listenSentence:"thank you so much", options:["much","mush","match","mash"], correctAnswer:"much", explanation:"thank you so much = شكراً جزيلاً", xp:13 },
      { id:"wk3-t1-8", type:"word_order", sentence:"Could we meet tomorrow morning", correctAnswer:"Could we meet tomorrow morning", explanation:"هل نلتقي صباح غد؟", xp:14 },
      { id:"wk3-t1-9", type:"matching", pairs:[{en:"I'll send",ar:"سأرسل"},{en:"get back",ar:"أعاود الرجوع"},{en:"sure",ar:"بالتأكيد"},{en:"call back",ar:"أعاود الاتصال"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"wk3-t2-1", type:"word_order", sentence:"Could you please send me the file", correctAnswer:"Could you please send me the file", explanation:"هل يمكنك إرسال الملف؟", xp:16 },
      { id:"wk3-t2-2", type:"translate", arabic:"سأرد عليك في أقرب وقت", options:["I'll reply to you as soon as possible","I'll reply you as soon as possible","I reply to you as soon as possible","I'll replies to you as soon as possible"], correctAnswer:"I'll reply to you as soon as possible", explanation:"reply as soon as possible", xp:16 },
      { id:"wk3-t2-3", type:"fill_blank", blankSentence:"Thank you for your ___", blankOptions:["help","run","very"], correctAnswer:"help", explanation:"for your help = على مساعدتك", xp:15 },
      { id:"wk3-t2-4", type:"word_order", sentence:"Please let me know if you need anything", correctAnswer:"Please let me know if you need anything", explanation:"أعلمني إن احتجت أي شيء", xp:16 },
      { id:"wk3-t2-5", type:"translate", arabic:"أتطلّع للعمل معك", options:["I look forward to working with you","I look forward working with you","I look forward to work with you","I looking forward to working with you"], correctAnswer:"I look forward to working with you", explanation:"look forward to = أتطلّع", xp:16 },
      { id:"wk3-t2-6", type:"listen_select", listenSentence:"have a good day", options:["good","food","wood","mood"], correctAnswer:"good", explanation:"have a good day = يوماً سعيداً", xp:15 },
      { id:"wk3-t2-7", type:"word_order", sentence:"I appreciate your quick response", correctAnswer:"I appreciate your quick response", explanation:"أقدّر ردّك السريع", xp:15 },
      { id:"wk3-t2-8", type:"fill_blank", blankSentence:"I'll get ___ to you soon", blankOptions:["back","run","very"], correctAnswer:"back", explanation:"get back to you = أعاود الرجوع", xp:15 },
    ],
    t3: [],
  },
};
