import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 18: اطلب المساعدة في الصف
//   درس 1: كلمات الصف — teacher, question, answer, book, pen
//   درس 2: اطلب المساعدة — Can you help, I don't understand, repeat
//   درس 3: في الدرس — How do you say, What does it mean, slowly
// ══════════════════════════════════════════════════════════════

export const unit18ClassroomBank: Record<string, TieredBank> = {

  "كلمات الصف": {
    t0: [
      { id:"cr-pic-1", type:"picture_match", word:"book", arabic:"كتاب", pictureOptions:[{emoji:"📖",label:"book"},{emoji:"🖊️",label:"pen"},{emoji:"📝",label:"paper"},{emoji:"🎒",label:"bag"}], correctAnswer:"book", explanation:"كتاب = book 📖", xp:10 },
      { id:"cr1-t0-1", type:"translate", arabic:"معلّم", options:["teacher","student","question","book"], correctAnswer:"teacher", explanation:"teacher = معلّم", xp:10 },
      { id:"cr1-t0-2", type:"listen_select", listenSentence:"question", options:["question","answer","book","pen"], correctAnswer:"question", explanation:"question = سؤال", xp:10 },
      { id:"cr1-t0-3", type:"translate", arabic:"إجابة", options:["answer","question","book","pen"], correctAnswer:"answer", explanation:"answer = إجابة", xp:10 },
      { id:"cr1-t0-4", type:"word_order", sentence:"This is my book", correctAnswer:"This is my book", explanation:"هذا كتابي", xp:12 },
      { id:"cr1-t0-5", type:"fill_blank", blankSentence:"I have a ___", blankOptions:["question","run","very"], correctAnswer:"question", explanation:"a question = سؤال", xp:12 },
      { id:"cr1-t0-6", type:"translate", arabic:"قلم", options:["pen","book","paper","desk"], correctAnswer:"pen", explanation:"pen = قلم 🖊️", xp:10 },
      { id:"cr1-t0-7", type:"listen_select", listenSentence:"the answer", options:["answer","question","teacher","student"], correctAnswer:"answer", explanation:"the answer = الإجابة", xp:12 },
      { id:"cr1-t0-8", type:"word_order", sentence:"The teacher is here", correctAnswer:"The teacher is here", explanation:"المعلّم هنا", xp:12 },
      { id:"cr1-t0-9", type:"matching", pairs:[{en:"teacher",ar:"معلّم"},{en:"question",ar:"سؤال"},{en:"answer",ar:"إجابة"},{en:"book",ar:"كتاب"},{en:"pen",ar:"قلم"},{en:"student",ar:"طالب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cr1-t1-1", type:"translate", arabic:"طالب", options:["student","teacher","question","book"], correctAnswer:"student", explanation:"student = طالب", xp:12 },
      { id:"cr1-t1-2", type:"word_order", sentence:"I have a question for you", correctAnswer:"I have a question for you", explanation:"لديّ سؤال لك", xp:14 },
      { id:"cr1-t1-3", type:"listen_select", listenSentence:"open your book", options:["book","pen","paper","bag"], correctAnswer:"book", explanation:"open your book = افتح كتابك", xp:13 },
      { id:"cr1-t1-4", type:"translate", arabic:"ورقة", options:["paper","book","pen","desk"], correctAnswer:"paper", explanation:"paper = ورقة 📝", xp:12 },
      { id:"cr1-t1-5", type:"fill_blank", blankSentence:"Please write the ___", blankOptions:["answer","run","very"], correctAnswer:"answer", explanation:"the answer = الإجابة", xp:14 },
      { id:"cr1-t1-6", type:"word_order", sentence:"The lesson is interesting", correctAnswer:"The lesson is interesting", explanation:"الدرس ممتع", xp:14 },
      { id:"cr1-t1-7", type:"translate", arabic:"درس", options:["lesson","class","book","test"], correctAnswer:"lesson", explanation:"lesson = درس", xp:12 },
      { id:"cr1-t1-8", type:"listen_select", listenSentence:"a difficult question", options:["question","answer","lesson","book"], correctAnswer:"question", explanation:"difficult question = سؤال صعب", xp:13 },
      { id:"cr1-t1-9", type:"matching", pairs:[{en:"paper",ar:"ورقة"},{en:"lesson",ar:"درس"},{en:"student",ar:"طالب"},{en:"class",ar:"صف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cr1-t2-1", type:"word_order", sentence:"The teacher explains the lesson well", correctAnswer:"The teacher explains the lesson well", explanation:"المعلّم يشرح الدرس جيداً", xp:16 },
      { id:"cr1-t2-2", type:"translate", arabic:"أحتاج قلماً وورقة", options:["I need a pen and paper","I need pen and paper","I need a pen and a paper","I need a pen paper"], correctAnswer:"I need a pen and paper", explanation:"pen and paper = قلم وورقة", xp:16 },
      { id:"cr1-t2-3", type:"fill_blank", blankSentence:"I don't know the ___", blankOptions:["answer","run","very"], correctAnswer:"answer", explanation:"the answer = الإجابة", xp:15 },
      { id:"cr1-t2-4", type:"word_order", sentence:"Students must do their homework", correctAnswer:"Students must do their homework", explanation:"على الطلاب أداء واجباتهم", xp:16 },
      { id:"cr1-t2-5", type:"translate", arabic:"هذا الدرس مهم جداً", options:["This lesson is very important","This lesson very important","This lesson is very importance","This lesson are very important"], correctAnswer:"This lesson is very important", explanation:"important = مهم", xp:16 },
      { id:"cr1-t2-6", type:"listen_select", listenSentence:"raise your hand", options:["hand","head","hair","heart"], correctAnswer:"hand", explanation:"raise your hand = ارفع يدك", xp:15 },
      { id:"cr1-t2-7", type:"word_order", sentence:"I always do my homework", correctAnswer:"I always do my homework", explanation:"أؤدي واجبي دائماً", xp:15 },
      { id:"cr1-t2-8", type:"fill_blank", blankSentence:"The ___ is on page ten", blankOptions:["lesson","run","very"], correctAnswer:"lesson", explanation:"the lesson = الدرس", xp:15 },
    ],
    t3: [],
  },

  "اطلب المساعدة": {
    t0: [
      { id:"cr2-t0-1", type:"translate", arabic:"هل يمكنك مساعدتي؟", options:["Can you help me?","Can you help I?","You can help me?","Can help you me?"], correctAnswer:"Can you help me?", explanation:"Can you help me? = هل تساعدني؟", xp:10 },
      { id:"cr2-t0-2", type:"word_order", sentence:"I don't understand", correctAnswer:"I don't understand", explanation:"لا أفهم", xp:12 },
      { id:"cr2-t0-3", type:"listen_select", listenSentence:"please repeat", options:["repeat","read","reply","reach"], correctAnswer:"repeat", explanation:"please repeat = أعد من فضلك", xp:10 },
      { id:"cr2-t0-4", type:"translate", arabic:"لا أفهم", options:["I don't understand","I not understand","I don't understands","I don't understanding"], correctAnswer:"I don't understand", explanation:"don't understand = لا أفهم", xp:12 },
      { id:"cr2-t0-5", type:"fill_blank", blankSentence:"Can you ___ that please", blankOptions:["repeat","run","very"], correctAnswer:"repeat", explanation:"repeat = أعد", xp:12 },
      { id:"cr2-t0-6", type:"word_order", sentence:"Please help me", correctAnswer:"Please help me", explanation:"ساعدني من فضلك", xp:12 },
      { id:"cr2-t0-7", type:"listen_select", listenSentence:"I have a question", options:["question","answer","problem","lesson"], correctAnswer:"question", explanation:"I have a question = لديّ سؤال", xp:10 },
      { id:"cr2-t0-8", type:"translate", arabic:"من فضلك أعد", options:["Please repeat","Please repeats","Please repeating","Please to repeat"], correctAnswer:"Please repeat", explanation:"Please repeat = أعد من فضلك", xp:10 },
      { id:"cr2-t0-9", type:"matching", pairs:[{en:"Can you help",ar:"هل تساعد"},{en:"I don't understand",ar:"لا أفهم"},{en:"repeat",ar:"أعد"},{en:"slowly",ar:"ببطء"},{en:"please",ar:"من فضلك"},{en:"question",ar:"سؤال"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cr2-t1-1", type:"word_order", sentence:"Can you say that again", correctAnswer:"Can you say that again", explanation:"هل تقول ذلك مجدداً؟", xp:14 },
      { id:"cr2-t1-2", type:"translate", arabic:"لم أفهم السؤال", options:["I didn't understand the question","I didn't understand question","I don't understand the question","I didn't understood the question"], correctAnswer:"I didn't understand the question", explanation:"didn't understand = لم أفهم", xp:14 },
      { id:"cr2-t1-3", type:"listen_select", listenSentence:"speak slowly please", options:["slowly","slow","slower","slowest"], correctAnswer:"slowly", explanation:"speak slowly = تحدّث ببطء", xp:13 },
      { id:"cr2-t1-4", type:"fill_blank", blankSentence:"Could you ___ more slowly", blankOptions:["speak","run","very"], correctAnswer:"speak", explanation:"speak slowly = تحدّث ببطء", xp:14 },
      { id:"cr2-t1-5", type:"word_order", sentence:"I need some help please", correctAnswer:"I need some help please", explanation:"أحتاج بعض المساعدة", xp:14 },
      { id:"cr2-t1-6", type:"translate", arabic:"هل يمكنك أن تشرح؟", options:["Can you explain?","Can you explains?","You can explain?","Can explain you?"], correctAnswer:"Can you explain?", explanation:"Can you explain? = هل تشرح؟", xp:14 },
      { id:"cr2-t1-7", type:"listen_select", listenSentence:"I am confused", options:["confused","confuse","confusing","confusion"], correctAnswer:"confused", explanation:"I am confused = أنا محتار", xp:13 },
      { id:"cr2-t1-8", type:"word_order", sentence:"Can you write it down", correctAnswer:"Can you write it down", explanation:"هل يمكنك كتابتها؟", xp:14 },
      { id:"cr2-t1-9", type:"matching", pairs:[{en:"explain",ar:"يشرح"},{en:"slowly",ar:"ببطء"},{en:"again",ar:"مجدداً"},{en:"confused",ar:"محتار"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cr2-t2-1", type:"word_order", sentence:"Could you please explain this again", correctAnswer:"Could you please explain this again", explanation:"هل تشرح هذا مجدداً؟", xp:16 },
      { id:"cr2-t2-2", type:"translate", arabic:"أنا آسف، لم أفهم", options:["I'm sorry, I didn't understand","I'm sorry, I don't understand","I'm sorry, I didn't understood","I'm sorry, I not understand"], correctAnswer:"I'm sorry, I didn't understand", explanation:"didn't understand = لم أفهم", xp:16 },
      { id:"cr2-t2-3", type:"fill_blank", blankSentence:"Can you help me with this ___", blankOptions:["problem","run","very"], correctAnswer:"problem", explanation:"this problem = هذه المسألة", xp:15 },
      { id:"cr2-t2-4", type:"word_order", sentence:"I have a question about the lesson", correctAnswer:"I have a question about the lesson", explanation:"لديّ سؤال حول الدرس", xp:16 },
      { id:"cr2-t2-5", type:"translate", arabic:"هل يمكنك إعطائي مثالاً؟", options:["Can you give me an example?","Can you give me example?","Can you gives me an example?","You can give me an example?"], correctAnswer:"Can you give me an example?", explanation:"give an example = أعطِ مثالاً", xp:16 },
      { id:"cr2-t2-6", type:"listen_select", listenSentence:"now I understand", options:["understand","understood","understanding","understands"], correctAnswer:"understand", explanation:"now I understand = الآن فهمت", xp:15 },
      { id:"cr2-t2-7", type:"word_order", sentence:"Thank you for your help teacher", correctAnswer:"Thank you for your help teacher", explanation:"شكراً على مساعدتك أيها المعلّم", xp:15 },
      { id:"cr2-t2-8", type:"fill_blank", blankSentence:"Could you ___ the answer", blankOptions:["explain","run","very"], correctAnswer:"explain", explanation:"explain the answer = اشرح الإجابة", xp:15 },
    ],
    t3: [],
  },

  "في الدرس": {
    t0: [
      { id:"cr3-t0-1", type:"translate", arabic:"كيف تقول؟", options:["How do you say?","How you say?","How do you says?","How say you?"], correctAnswer:"How do you say?", explanation:"How do you say? = كيف تقول؟", xp:10 },
      { id:"cr3-t0-2", type:"word_order", sentence:"What does it mean", correctAnswer:"What does it mean", explanation:"ماذا يعني؟", xp:12 },
      { id:"cr3-t0-3", type:"listen_select", listenSentence:"in English", options:["English","Arabic","French","Spanish"], correctAnswer:"English", explanation:"in English = بالإنجليزية", xp:10 },
      { id:"cr3-t0-4", type:"translate", arabic:"ماذا يعني هذا؟", options:["What does this mean?","What this mean?","What does this means?","What mean this?"], correctAnswer:"What does this mean?", explanation:"What does this mean? = ماذا يعني؟", xp:12 },
      { id:"cr3-t0-5", type:"fill_blank", blankSentence:"How do you ___ this word", blankOptions:["say","run","very"], correctAnswer:"say", explanation:"how do you say = كيف تقول", xp:12 },
      { id:"cr3-t0-6", type:"word_order", sentence:"I understand now", correctAnswer:"I understand now", explanation:"فهمت الآن", xp:12 },
      { id:"cr3-t0-7", type:"listen_select", listenSentence:"what does it mean", options:["mean","main","moon","man"], correctAnswer:"mean", explanation:"what does it mean = ماذا يعني", xp:12 },
      { id:"cr3-t0-8", type:"translate", arabic:"كيف تكتبها؟", options:["How do you spell it?","How you spell it?","How do you spells it?","How spell you it?"], correctAnswer:"How do you spell it?", explanation:"How do you spell it? = كيف تكتبها؟", xp:10 },
      { id:"cr3-t0-9", type:"matching", pairs:[{en:"How do you say",ar:"كيف تقول"},{en:"What does it mean",ar:"ماذا يعني"},{en:"spell",ar:"تهجئة"},{en:"in English",ar:"بالإنجليزية"},{en:"understand",ar:"يفهم"},{en:"word",ar:"كلمة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cr3-t1-1", type:"word_order", sentence:"How do you say this in English", correctAnswer:"How do you say this in English", explanation:"كيف تقول هذا بالإنجليزية؟", xp:14 },
      { id:"cr3-t1-2", type:"translate", arabic:"ماذا تعني هذه الكلمة؟", options:["What does this word mean?","What this word mean?","What does this word means?","What mean this word?"], correctAnswer:"What does this word mean?", explanation:"What does it mean = ماذا يعني", xp:14 },
      { id:"cr3-t1-3", type:"listen_select", listenSentence:"on the board", options:["board","bored","beard","bird"], correctAnswer:"board", explanation:"on the board = على السبورة", xp:13 },
      { id:"cr3-t1-4", type:"fill_blank", blankSentence:"What is the ___ of this word", blankOptions:["meaning","run","very"], correctAnswer:"meaning", explanation:"meaning = معنى", xp:14 },
      { id:"cr3-t1-5", type:"word_order", sentence:"Can you spell that word", correctAnswer:"Can you spell that word", explanation:"هل تتهجّى تلك الكلمة؟", xp:14 },
      { id:"cr3-t1-6", type:"translate", arabic:"لا أعرف هذه الكلمة", options:["I don't know this word","I don't know word","I don't knows this word","I not know this word"], correctAnswer:"I don't know this word", explanation:"don't know = لا أعرف", xp:14 },
      { id:"cr3-t1-7", type:"listen_select", listenSentence:"write it on the board", options:["board","paper","book","desk"], correctAnswer:"board", explanation:"on the board = على السبورة", xp:13 },
      { id:"cr3-t1-8", type:"word_order", sentence:"What is the meaning of this", correctAnswer:"What is the meaning of this", explanation:"ما معنى هذا؟", xp:14 },
      { id:"cr3-t1-9", type:"matching", pairs:[{en:"meaning",ar:"معنى"},{en:"board",ar:"سبورة"},{en:"spell",ar:"تهجئة"},{en:"word",ar:"كلمة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cr3-t2-1", type:"word_order", sentence:"Could you tell me what this means", correctAnswer:"Could you tell me what this means", explanation:"هل تخبرني بمعنى هذا؟", xp:16 },
      { id:"cr3-t2-2", type:"translate", arabic:"كيف أنطق هذه الكلمة؟", options:["How do I pronounce this word?","How I pronounce this word?","How do I pronounces this word?","How pronounce I this word?"], correctAnswer:"How do I pronounce this word?", explanation:"pronounce = ينطق", xp:16 },
      { id:"cr3-t2-3", type:"fill_blank", blankSentence:"What is the English word ___ this", blankOptions:["for","run","very"], correctAnswer:"for", explanation:"word for = الكلمة لـ", xp:15 },
      { id:"cr3-t2-4", type:"word_order", sentence:"Can you explain this in another way", correctAnswer:"Can you explain this in another way", explanation:"هل تشرح هذا بطريقة أخرى؟", xp:16 },
      { id:"cr3-t2-5", type:"translate", arabic:"أريد أن أتعلّم المزيد من الكلمات", options:["I want to learn more words","I want to learn more word","I want learn more words","I want to learns more words"], correctAnswer:"I want to learn more words", explanation:"learn more words = أتعلّم كلمات أكثر", xp:16 },
      { id:"cr3-t2-6", type:"listen_select", listenSentence:"that is correct", options:["correct","collect","connect","correctly"], correctAnswer:"correct", explanation:"that is correct = هذا صحيح", xp:15 },
      { id:"cr3-t2-7", type:"word_order", sentence:"I have one more question please", correctAnswer:"I have one more question please", explanation:"لديّ سؤال آخر من فضلك", xp:15 },
      { id:"cr3-t2-8", type:"fill_blank", blankSentence:"How do you ___ this word", blankOptions:["pronounce","run","very"], correctAnswer:"pronounce", explanation:"pronounce = ينطق", xp:15 },
    ],
    t3: [],
  },
};
