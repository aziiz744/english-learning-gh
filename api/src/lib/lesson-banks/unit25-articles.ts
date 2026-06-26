import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 25: استخدم أدوات التعريف (a / an / the)
//   درس 1: a / an — متى نستخدم كلاً منهما
//   درس 2: the — أداة التعريف
//   درس 3: استخدامها معاً في جمل
// ══════════════════════════════════════════════════════════════

export const unit25ArticlesBank: Record<string, TieredBank> = {

  "a و an": {
    t0: [
      { id:"ar1-t0-1", type:"fill_blank", blankSentence:"I have ___ book", blankOptions:["a","an","the"], correctAnswer:"a", explanation:"a قبل الحرف الساكن: a book", xp:10 },
      { id:"ar1-t0-2", type:"fill_blank", blankSentence:"She has ___ apple", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an قبل حرف العلة: an apple", xp:10 },
      { id:"ar1-t0-3", type:"translate", arabic:"قطة (نكرة)", options:["a cat","an cat","the cat","cat"], correctAnswer:"a cat", explanation:"a cat = قطة (a قبل ساكن)", xp:10 },
      { id:"ar1-t0-4", type:"fill_blank", blankSentence:"He is ___ teacher", blankOptions:["a","an","the"], correctAnswer:"a", explanation:"a teacher (a قبل ساكن)", xp:12 },
      { id:"ar1-t0-5", type:"word_order", sentence:"I see a dog", correctAnswer:"I see a dog", explanation:"أرى كلباً", xp:12 },
      { id:"ar1-t0-6", type:"fill_blank", blankSentence:"It is ___ orange", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an orange (an قبل علة)", xp:12 },
      { id:"ar1-t0-7", type:"translate", arabic:"فيل (نكرة)", options:["an elephant","a elephant","the elephant","elephant"], correctAnswer:"an elephant", explanation:"an elephant (an قبل علة)", xp:12 },
      { id:"ar1-t0-8", type:"word_order", sentence:"She eats an egg", correctAnswer:"She eats an egg", explanation:"تأكل بيضة", xp:12 },
      { id:"ar1-t0-9", type:"matching", pairs:[{en:"a book",ar:"كتاب"},{en:"an apple",ar:"تفاحة"},{en:"a car",ar:"سيارة"},{en:"an egg",ar:"بيضة"},{en:"a house",ar:"منزل"},{en:"an hour",ar:"ساعة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ar1-t1-1", type:"fill_blank", blankSentence:"I want ___ umbrella", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an umbrella (an قبل علة)", xp:12 },
      { id:"ar1-t1-2", type:"word_order", sentence:"He has an interesting idea", correctAnswer:"He has an interesting idea", explanation:"لديه فكرة مثيرة", xp:14 },
      { id:"ar1-t1-3", type:"fill_blank", blankSentence:"There is ___ car outside", blankOptions:["a","an","the"], correctAnswer:"a", explanation:"a car (a قبل ساكن)", xp:13 },
      { id:"ar1-t1-4", type:"translate", arabic:"طبيب (نكرة)", options:["a doctor","an doctor","the doctor","doctor"], correctAnswer:"a doctor", explanation:"a doctor (a قبل ساكن)", xp:12 },
      { id:"ar1-t1-5", type:"fill_blank", blankSentence:"She wants ___ ice cream", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an ice cream (an قبل علة)", xp:14 },
      { id:"ar1-t1-6", type:"word_order", sentence:"I need a pen", correctAnswer:"I need a pen", explanation:"أحتاج قلماً", xp:14 },
      { id:"ar1-t1-7", type:"fill_blank", blankSentence:"He is ___ engineer", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an engineer (an قبل علة)", xp:13 },
      { id:"ar1-t1-8", type:"translate", arabic:"ساعة (نكرة)", options:["an hour","a hour","the hour","hour"], correctAnswer:"an hour", explanation:"an hour (h صامتة فنستخدم an)", xp:14 },
      { id:"ar1-t1-9", type:"matching", pairs:[{en:"a دائماً",ar:"قبل ساكن"},{en:"an دائماً",ar:"قبل علة"},{en:"a dog",ar:"كلب"},{en:"an idea",ar:"فكرة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ar1-t2-1", type:"word_order", sentence:"I bought a new phone yesterday", correctAnswer:"I bought a new phone yesterday", explanation:"اشتريت هاتفاً جديداً أمس", xp:16 },
      { id:"ar1-t2-2", type:"fill_blank", blankSentence:"My father is ___ honest man", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an honest (h صامتة)", xp:16 },
      { id:"ar1-t2-3", type:"translate", arabic:"إنه طالب جامعي", options:["He is a university student","He is an university student","He is the university student","He is university student"], correctAnswer:"He is a university student", explanation:"a university (u تُنطق yu فنستخدم a)", xp:16 },
      { id:"ar1-t2-4", type:"word_order", sentence:"She is reading an interesting book", correctAnswer:"She is reading an interesting book", explanation:"تقرأ كتاباً مثيراً", xp:16 },
      { id:"ar1-t2-5", type:"fill_blank", blankSentence:"We waited for ___ hour", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an hour (h صامتة)", xp:15 },
      { id:"ar1-t2-6", type:"word_order", sentence:"He gave me an apple and a banana", correctAnswer:"He gave me an apple and a banana", explanation:"أعطاني تفاحة وموزة", xp:16 },
      { id:"ar1-t2-7", type:"translate", arabic:"أريد كوباً من القهوة", options:["I want a cup of coffee","I want an cup of coffee","I want the cup of coffee","I want cup of coffee"], correctAnswer:"I want a cup of coffee", explanation:"a cup (a قبل ساكن)", xp:15 },
      { id:"ar1-t2-8", type:"fill_blank", blankSentence:"There is ___ old house there", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an old (o علة)", xp:15 },
    ],
    t3: [],
  },

  "أداة the": {
    t0: [
      { id:"ar2-t0-1", type:"fill_blank", blankSentence:"___ sun is hot", blankOptions:["The","A","An"], correctAnswer:"The", explanation:"The sun (شيء وحيد معروف)", xp:10 },
      { id:"ar2-t0-2", type:"translate", arabic:"الكتاب (معرفة)", options:["the book","a book","an book","book"], correctAnswer:"the book", explanation:"the book = الكتاب (معرّف)", xp:10 },
      { id:"ar2-t0-3", type:"word_order", sentence:"The car is red", correctAnswer:"The car is red", explanation:"السيارة حمراء", xp:12 },
      { id:"ar2-t0-4", type:"fill_blank", blankSentence:"Close ___ door please", blankOptions:["the","a","an"], correctAnswer:"the", explanation:"the door (باب محدّد)", xp:12 },
      { id:"ar2-t0-5", type:"listen_select", listenSentence:"the moon", options:["the","a","an","to"], correctAnswer:"the", explanation:"the moon (شيء وحيد)", xp:10 },
      { id:"ar2-t0-6", type:"translate", arabic:"المعلّم (معرفة)", options:["the teacher","a teacher","an teacher","teacher"], correctAnswer:"the teacher", explanation:"the teacher = المعلّم (محدّد)", xp:10 },
      { id:"ar2-t0-7", type:"word_order", sentence:"The dog is sleeping", correctAnswer:"The dog is sleeping", explanation:"الكلب نائم", xp:12 },
      { id:"ar2-t0-8", type:"fill_blank", blankSentence:"___ sky is blue", blankOptions:["The","A","An"], correctAnswer:"The", explanation:"The sky (شيء وحيد)", xp:12 },
      { id:"ar2-t0-9", type:"matching", pairs:[{en:"the sun",ar:"الشمس"},{en:"the moon",ar:"القمر"},{en:"the sky",ar:"السماء"},{en:"the door",ar:"الباب"},{en:"the book",ar:"الكتاب"},{en:"the car",ar:"السيارة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ar2-t1-1", type:"word_order", sentence:"The children are playing outside", correctAnswer:"The children are playing outside", explanation:"الأطفال يلعبون بالخارج", xp:14 },
      { id:"ar2-t1-2", type:"fill_blank", blankSentence:"I read ___ newspaper every day", blankOptions:["the","a","an"], correctAnswer:"the", explanation:"the newspaper (محدّد)", xp:13 },
      { id:"ar2-t1-3", type:"translate", arabic:"المطعم قريب", options:["The restaurant is near","A restaurant is near","An restaurant is near","Restaurant is near"], correctAnswer:"The restaurant is near", explanation:"the restaurant (محدّد)", xp:14 },
      { id:"ar2-t1-4", type:"fill_blank", blankSentence:"Pass me ___ salt please", blankOptions:["the","a","an"], correctAnswer:"the", explanation:"the salt (ملح محدّد)", xp:14 },
      { id:"ar2-t1-5", type:"listen_select", listenSentence:"the first time", options:["the","a","an","to"], correctAnswer:"the", explanation:"the first (مع الترتيب)", xp:13 },
      { id:"ar2-t1-6", type:"word_order", sentence:"The weather is nice today", correctAnswer:"The weather is nice today", explanation:"الطقس جميل اليوم", xp:14 },
      { id:"ar2-t1-7", type:"fill_blank", blankSentence:"She plays ___ piano", blankOptions:["the","a","an"], correctAnswer:"the", explanation:"play the piano (مع الآلات)", xp:14 },
      { id:"ar2-t1-8", type:"translate", arabic:"الأرض مستديرة", options:["The earth is round","A earth is round","An earth is round","Earth is round"], correctAnswer:"The earth is round", explanation:"the earth (شيء وحيد)", xp:13 },
      { id:"ar2-t1-9", type:"matching", pairs:[{en:"the piano",ar:"البيانو"},{en:"the earth",ar:"الأرض"},{en:"the first",ar:"الأول"},{en:"the salt",ar:"الملح"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ar2-t2-1", type:"word_order", sentence:"The movie we watched was very good", correctAnswer:"The movie we watched was very good", explanation:"الفيلم الذي شاهدناه كان جيداً", xp:16 },
      { id:"ar2-t2-2", type:"fill_blank", blankSentence:"___ people in this city are friendly", blankOptions:["The","A","An"], correctAnswer:"The", explanation:"the people (مجموعة محدّدة)", xp:15 },
      { id:"ar2-t2-3", type:"translate", arabic:"الجبال جميلة في الشتاء", options:["The mountains are beautiful in winter","A mountains are beautiful in winter","Mountains are beautiful in the winter","The mountain are beautiful in winter"], correctAnswer:"The mountains are beautiful in winter", explanation:"the mountains (محدّدة)", xp:16 },
      { id:"ar2-t2-4", type:"word_order", sentence:"The students passed the final exam", correctAnswer:"The students passed the final exam", explanation:"نجح الطلاب في الامتحان النهائي", xp:16 },
      { id:"ar2-t2-5", type:"fill_blank", blankSentence:"Could you turn on ___ light", blankOptions:["the","a","an"], correctAnswer:"the", explanation:"the light (ضوء محدّد)", xp:15 },
      { id:"ar2-t2-6", type:"translate", arabic:"النهر يمرّ عبر المدينة", options:["The river goes through the city","A river goes through the city","River goes through the city","The river go through the city"], correctAnswer:"The river goes through the city", explanation:"the river (محدّد)", xp:16 },
      { id:"ar2-t2-7", type:"word_order", sentence:"The food at the restaurant was great", correctAnswer:"The food at the restaurant was great", explanation:"الطعام في المطعم كان رائعاً", xp:15 },
      { id:"ar2-t2-8", type:"fill_blank", blankSentence:"___ best player won the prize", blankOptions:["The","A","An"], correctAnswer:"The", explanation:"the best (مع التفضيل)", xp:15 },
    ],
    t3: [],
  },

  "استخدامها معاً": {
    t0: [
      { id:"ar3-t0-1", type:"fill_blank", blankSentence:"I saw ___ cat. ___ cat was black", blankOptions:["a, The","the, A","an, The"], correctAnswer:"a, The", explanation:"a للنكرة أولاً، the عند الإعادة", xp:12 },
      { id:"ar3-t0-2", type:"word_order", sentence:"I have a car and the car is new", correctAnswer:"I have a car and the car is new", explanation:"a أولاً ثم the", xp:12 },
      { id:"ar3-t0-3", type:"fill_blank", blankSentence:"She bought ___ apple", blankOptions:["an","a","the"], correctAnswer:"an", explanation:"an apple (علة)", xp:10 },
      { id:"ar3-t0-4", type:"translate", arabic:"هناك كلب في الحديقة", options:["There is a dog in the garden","There is the dog in a garden","There is an dog in the garden","There is a dog in a garden"], correctAnswer:"There is a dog in the garden", explanation:"a dog (نكرة) the garden (معرّف)", xp:12 },
      { id:"ar3-t0-5", type:"fill_blank", blankSentence:"He is ___ doctor at ___ hospital", blankOptions:["a, the","the, a","an, the"], correctAnswer:"a, the", explanation:"a doctor (مهنة) the hospital (محدّد)", xp:12 },
      { id:"ar3-t0-6", type:"word_order", sentence:"The book on the table is mine", correctAnswer:"The book on the table is mine", explanation:"الكتاب على الطاولة لي", xp:12 },
      { id:"ar3-t0-7", type:"fill_blank", blankSentence:"I want ___ glass of water", blankOptions:["a","an","the"], correctAnswer:"a", explanation:"a glass (ساكن)", xp:10 },
      { id:"ar3-t0-8", type:"translate", arabic:"المعلّم يقرأ كتاباً", options:["The teacher reads a book","A teacher reads the book","The teacher reads the book","A teacher reads a book"], correctAnswer:"The teacher reads a book", explanation:"the teacher (محدّد) a book (نكرة)", xp:12 },
      { id:"ar3-t0-9", type:"matching", pairs:[{en:"a + ساكن",ar:"a book"},{en:"an + علة",ar:"an egg"},{en:"the + محدّد",ar:"the sun"},{en:"a للنكرة",ar:"أول مرة"},{en:"the للمعرفة",ar:"معروف"},{en:"the + وحيد",ar:"the moon"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ar3-t1-1", type:"word_order", sentence:"I bought a shirt and the shirt is blue", correctAnswer:"I bought a shirt and the shirt is blue", explanation:"a أولاً ثم the", xp:14 },
      { id:"ar3-t1-2", type:"fill_blank", blankSentence:"There is ___ school near ___ park", blankOptions:["a, the","the, a","an, the"], correctAnswer:"a, the", explanation:"a school (نكرة) the park (محدّد)", xp:14 },
      { id:"ar3-t1-3", type:"translate", arabic:"رأيت رجلاً. كان الرجل طويلاً", options:["I saw a man. The man was tall","I saw the man. A man was tall","I saw an man. The man was tall","I saw a man. A man was tall"], correctAnswer:"I saw a man. The man was tall", explanation:"a أولاً، the عند الإعادة", xp:14 },
      { id:"ar3-t1-4", type:"fill_blank", blankSentence:"She is ___ artist and she loves ___ art", blankOptions:["an, no article","a, the","an, the"], correctAnswer:"an, no article", explanation:"an artist، لكن art بلا أداة (عام)", xp:14 },
      { id:"ar3-t1-5", type:"word_order", sentence:"The man in the car is my uncle", correctAnswer:"The man in the car is my uncle", explanation:"الرجل في السيارة عمي", xp:14 },
      { id:"ar3-t1-6", type:"translate", arabic:"اشترى منزلاً والمنزل كبير", options:["He bought a house and the house is big","He bought the house and a house is big","He bought an house and the house is big","He bought a house and a house is big"], correctAnswer:"He bought a house and the house is big", explanation:"a ثم the", xp:13 },
      { id:"ar3-t1-7", type:"fill_blank", blankSentence:"I need ___ umbrella because ___ rain is heavy", blankOptions:["an, the","a, the","an, a"], correctAnswer:"an, the", explanation:"an umbrella، the rain (محدّد)", xp:14 },
      { id:"ar3-t1-8", type:"word_order", sentence:"A bird is sitting on the tree", correctAnswer:"A bird is sitting on the tree", explanation:"طائر يجلس على الشجرة", xp:14 },
      { id:"ar3-t1-9", type:"matching", pairs:[{en:"a first time",ar:"أول مرة (نكرة)"},{en:"the second time",ar:"المرة الثانية"},{en:"a + جديد",ar:"شيء جديد"},{en:"the + معروف",ar:"شيء معروف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ar3-t2-1", type:"word_order", sentence:"The teacher gave the students a difficult test", correctAnswer:"The teacher gave the students a difficult test", explanation:"أعطى المعلّم الطلاب اختباراً صعباً", xp:16 },
      { id:"ar3-t2-2", type:"fill_blank", blankSentence:"I have ___ idea but ___ idea is not good", blankOptions:["an, the","a, the","an, a"], correctAnswer:"an, the", explanation:"an idea، the idea عند الإعادة", xp:16 },
      { id:"ar3-t2-3", type:"translate", arabic:"يعيش في منزل قرب البحر", options:["He lives in a house near the sea","He lives in the house near a sea","He lives in an house near the sea","He lives in a house near a sea"], correctAnswer:"He lives in a house near the sea", explanation:"a house (نكرة) the sea (وحيد)", xp:16 },
      { id:"ar3-t2-4", type:"word_order", sentence:"She works as a nurse at the hospital", correctAnswer:"She works as a nurse at the hospital", explanation:"تعمل ممرضة في المستشفى", xp:16 },
      { id:"ar3-t2-5", type:"fill_blank", blankSentence:"There is ___ restaurant and ___ restaurant is famous", blankOptions:["a, the","the, a","an, the"], correctAnswer:"a, the", explanation:"a ثم the عند الإعادة", xp:15 },
      { id:"ar3-t2-6", type:"translate", arabic:"المدير يريد اجتماعاً اليوم", options:["The manager wants a meeting today","A manager wants the meeting today","The manager wants the meeting today","A manager wants a meeting today"], correctAnswer:"The manager wants a meeting today", explanation:"the manager (محدّد) a meeting (نكرة)", xp:16 },
      { id:"ar3-t2-7", type:"word_order", sentence:"An old man was sitting on the bench", correctAnswer:"An old man was sitting on the bench", explanation:"رجل عجوز كان يجلس على المقعد", xp:15 },
      { id:"ar3-t2-8", type:"fill_blank", blankSentence:"I read ___ book about ___ history of Egypt", blankOptions:["a, the","the, a","an, the"], correctAnswer:"a, the", explanation:"a book (نكرة) the history (محدّد)", xp:15 },
    ],
    t3: [],
  },
};
