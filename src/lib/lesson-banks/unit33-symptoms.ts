import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 33: تحدّث عن الأعراض
//   درس 1: أعضاء الجسم والألم — head, stomach, throat, ache, pain
//   درس 2: الأعراض — fever, cough, cold, tired, sick
//   درس 3: عند الطبيب — I have a, How long, take medicine, rest
// ══════════════════════════════════════════════════════════════

export const unit33SymptomsBank: Record<string, TieredBank> = {

  "الجسم والألم": {
    t0: [
      { id:"sy-pic-1", type:"picture_match", word:"head", arabic:"رأس", pictureOptions:[{emoji:"🧑",label:"head"},{emoji:"🫃",label:"stomach"},{emoji:"🦷",label:"tooth"},{emoji:"🦶",label:"foot"}], correctAnswer:"head", explanation:"رأس = head 🧑", xp:10 },
      { id:"sy1-t0-1", type:"translate", arabic:"رأس", options:["head","stomach","throat","back"], correctAnswer:"head", explanation:"head = رأس", xp:10 },
      { id:"sy1-t0-2", type:"listen_select", listenSentence:"stomach", options:["stomach","stone","store","storm"], correctAnswer:"stomach", explanation:"stomach = معدة", xp:10 },
      { id:"sy1-t0-3", type:"translate", arabic:"حلق", options:["throat","head","back","chest"], correctAnswer:"throat", explanation:"throat = حلق", xp:10 },
      { id:"sy1-t0-4", type:"word_order", sentence:"My head hurts", correctAnswer:"My head hurts", explanation:"رأسي يؤلمني", xp:12 },
      { id:"sy1-t0-5", type:"fill_blank", blankSentence:"I have a ___ ache", blankOptions:["head","run","very"], correctAnswer:"head", explanation:"headache = صداع", xp:12 },
      { id:"sy1-t0-6", type:"translate", arabic:"ألم", options:["pain","ache","hurt","sore"], correctAnswer:"pain", explanation:"pain = ألم", xp:10 },
      { id:"sy1-t0-7", type:"listen_select", listenSentence:"my back", options:["back","bake","bank","black"], correctAnswer:"back", explanation:"back = ظهر", xp:12 },
      { id:"sy1-t0-8", type:"word_order", sentence:"My stomach hurts", correctAnswer:"My stomach hurts", explanation:"معدتي تؤلمني", xp:12 },
      { id:"sy1-t0-9", type:"matching", pairs:[{en:"head",ar:"رأس"},{en:"stomach",ar:"معدة"},{en:"throat",ar:"حلق"},{en:"back",ar:"ظهر"},{en:"pain",ar:"ألم"},{en:"ache",ar:"وجع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sy1-t1-1", type:"translate", arabic:"صداع", options:["headache","stomachache","backache","toothache"], correctAnswer:"headache", explanation:"headache = صداع 🤕", xp:12 },
      { id:"sy1-t1-2", type:"word_order", sentence:"I have a bad headache", correctAnswer:"I have a bad headache", explanation:"لديّ صداع شديد", xp:14 },
      { id:"sy1-t1-3", type:"listen_select", listenSentence:"a sore throat", options:["sore","sour","saw","sort"], correctAnswer:"sore", explanation:"sore throat = التهاب الحلق", xp:13 },
      { id:"sy1-t1-4", type:"translate", arabic:"ألم في الأسنان", options:["toothache","headache","backache","earache"], correctAnswer:"toothache", explanation:"toothache = ألم الأسنان 🦷", xp:12 },
      { id:"sy1-t1-5", type:"fill_blank", blankSentence:"I have a sore ___", blankOptions:["throat","run","very"], correctAnswer:"throat", explanation:"sore throat = التهاب الحلق", xp:14 },
      { id:"sy1-t1-6", type:"word_order", sentence:"My back hurts a lot", correctAnswer:"My back hurts a lot", explanation:"ظهري يؤلمني كثيراً", xp:14 },
      { id:"sy1-t1-7", type:"translate", arabic:"ألم في المعدة", options:["stomachache","headache","backache","toothache"], correctAnswer:"stomachache", explanation:"stomachache = ألم المعدة", xp:13 },
      { id:"sy1-t1-8", type:"listen_select", listenSentence:"it hurts here", options:["hurts","hearts","hunts","hits"], correctAnswer:"hurts", explanation:"it hurts = إنه يؤلم", xp:13 },
      { id:"sy1-t1-9", type:"matching", pairs:[{en:"headache",ar:"صداع"},{en:"toothache",ar:"ألم الأسنان"},{en:"sore throat",ar:"التهاب الحلق"},{en:"stomachache",ar:"ألم المعدة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sy1-t2-1", type:"word_order", sentence:"I have had a headache since this morning", correctAnswer:"I have had a headache since this morning", explanation:"لديّ صداع منذ الصباح", xp:16 },
      { id:"sy1-t2-2", type:"translate", arabic:"يؤلمني حلقي عندما أبلع", options:["My throat hurts when I swallow","My throat hurt when I swallow","My throat hurts when I swallows","My throat hurts when I swallowed"], correctAnswer:"My throat hurts when I swallow", explanation:"hurts when I swallow", xp:16 },
      { id:"sy1-t2-3", type:"fill_blank", blankSentence:"The pain is in my lower ___", blankOptions:["back","run","very"], correctAnswer:"back", explanation:"lower back = أسفل الظهر", xp:15 },
      { id:"sy1-t2-4", type:"word_order", sentence:"My whole body aches today", correctAnswer:"My whole body aches today", explanation:"كل جسمي يؤلمني اليوم", xp:16 },
      { id:"sy1-t2-5", type:"translate", arabic:"عندي ألم حادّ في معدتي", options:["I have a sharp pain in my stomach","I have a sharp pain in my stomachs","I have sharp pain in my stomach","I have a sharp pain on my stomach"], correctAnswer:"I have a sharp pain in my stomach", explanation:"sharp pain = ألم حادّ", xp:16 },
      { id:"sy1-t2-6", type:"listen_select", listenSentence:"it feels sore", options:["sore","sour","saw","store"], correctAnswer:"sore", explanation:"it feels sore = يشعر بالألم", xp:15 },
      { id:"sy1-t2-7", type:"word_order", sentence:"I twisted my ankle yesterday", correctAnswer:"I twisted my ankle yesterday", explanation:"التويت كاحلي أمس", xp:15 },
      { id:"sy1-t2-8", type:"fill_blank", blankSentence:"The ___ in my knee is getting worse", blankOptions:["pain","run","very"], correctAnswer:"pain", explanation:"pain = ألم", xp:15 },
    ],
    t3: [],
  },

  "الأعراض": {
    t0: [
      { id:"sy2-t0-1", type:"translate", arabic:"حُمّى", options:["fever","cough","cold","sick"], correctAnswer:"fever", explanation:"fever = حُمّى 🤒", xp:10 },
      { id:"sy2-t0-2", type:"listen_select", listenSentence:"cough", options:["cough","cuff","cup","cook"], correctAnswer:"cough", explanation:"cough = سعال", xp:10 },
      { id:"sy2-t0-3", type:"translate", arabic:"زكام/برد", options:["cold","fever","cough","flu"], correctAnswer:"cold", explanation:"cold = زكام 🤧", xp:10 },
      { id:"sy2-t0-4", type:"word_order", sentence:"I have a fever", correctAnswer:"I have a fever", explanation:"لديّ حُمّى", xp:12 },
      { id:"sy2-t0-5", type:"fill_blank", blankSentence:"I have a bad ___", blankOptions:["cough","run","very"], correctAnswer:"cough", explanation:"a cough = سعال", xp:12 },
      { id:"sy2-t0-6", type:"translate", arabic:"مريض", options:["sick","tired","weak","cold"], correctAnswer:"sick", explanation:"sick = مريض", xp:10 },
      { id:"sy2-t0-7", type:"listen_select", listenSentence:"I feel sick", options:["sick","seek","sock","sack"], correctAnswer:"sick", explanation:"I feel sick = أشعر بالمرض", xp:12 },
      { id:"sy2-t0-8", type:"word_order", sentence:"I have a cold", correctAnswer:"I have a cold", explanation:"لديّ زكام", xp:12 },
      { id:"sy2-t0-9", type:"matching", pairs:[{en:"fever",ar:"حُمّى"},{en:"cough",ar:"سعال"},{en:"cold",ar:"زكام"},{en:"sick",ar:"مريض"},{en:"flu",ar:"إنفلونزا"},{en:"tired",ar:"متعب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sy2-t1-1", type:"translate", arabic:"إنفلونزا", options:["flu","cold","fever","cough"], correctAnswer:"flu", explanation:"flu = إنفلونزا", xp:12 },
      { id:"sy2-t1-2", type:"word_order", sentence:"I feel very tired and weak", correctAnswer:"I feel very tired and weak", explanation:"أشعر بالتعب والضعف", xp:14 },
      { id:"sy2-t1-3", type:"listen_select", listenSentence:"a runny nose", options:["runny","running","runner"," runs"], correctAnswer:"runny", explanation:"runny nose = سيلان الأنف", xp:13 },
      { id:"sy2-t1-4", type:"translate", arabic:"دوخة", options:["dizzy","sleepy","hungry","thirsty"], correctAnswer:"dizzy", explanation:"dizzy = دائخ", xp:12 },
      { id:"sy2-t1-5", type:"fill_blank", blankSentence:"I feel ___ and weak", blankOptions:["dizzy","run","very"], correctAnswer:"dizzy", explanation:"dizzy = دائخ", xp:14 },
      { id:"sy2-t1-6", type:"word_order", sentence:"She has a high fever", correctAnswer:"She has a high fever", explanation:"لديها حُمّى عالية", xp:14 },
      { id:"sy2-t1-7", type:"translate", arabic:"غثيان", options:["nausea","fever","cough","dizzy"], correctAnswer:"nausea", explanation:"nausea = غثيان", xp:13 },
      { id:"sy2-t1-8", type:"listen_select", listenSentence:"I have the flu", options:["flu","flew","flow","floor"], correctAnswer:"flu", explanation:"I have the flu = لديّ إنفلونزا", xp:13 },
      { id:"sy2-t1-9", type:"matching", pairs:[{en:"flu",ar:"إنفلونزا"},{en:"dizzy",ar:"دائخ"},{en:"runny nose",ar:"سيلان الأنف"},{en:"nausea",ar:"غثيان"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sy2-t2-1", type:"word_order", sentence:"I have had a fever for two days now", correctAnswer:"I have had a fever for two days now", explanation:"لديّ حُمّى منذ يومين", xp:16 },
      { id:"sy2-t2-2", type:"translate", arabic:"أشعر بالغثيان والدوخة", options:["I feel nauseous and dizzy","I feel nauseous and dizzily","I feel nausea and dizzy","I feel nauseous and dizziness"], correctAnswer:"I feel nauseous and dizzy", explanation:"nauseous and dizzy", xp:16 },
      { id:"sy2-t2-3", type:"fill_blank", blankSentence:"I think I am coming down ___ a cold", blankOptions:["with","run","very"], correctAnswer:"with", explanation:"coming down with = أُصاب بـ", xp:15 },
      { id:"sy2-t2-4", type:"word_order", sentence:"My symptoms started three days ago", correctAnswer:"My symptoms started three days ago", explanation:"بدأت أعراضي قبل ثلاثة أيام", xp:16 },
      { id:"sy2-t2-5", type:"translate", arabic:"لديّ سعال جافّ وحُمّى خفيفة", options:["I have a dry cough and a slight fever","I have a dry cough and a slight fevers","I have dry cough and a slight fever","I have a dry cough and slight fever"], correctAnswer:"I have a dry cough and a slight fever", explanation:"dry cough = سعال جافّ", xp:16 },
      { id:"sy2-t2-6", type:"listen_select", listenSentence:"I lost my appetite", options:["appetite","appoint","applaud","appear"], correctAnswer:"appetite", explanation:"lost my appetite = فقدت شهيتي", xp:15 },
      { id:"sy2-t2-7", type:"word_order", sentence:"I have been feeling unwell all week", correctAnswer:"I have been feeling unwell all week", explanation:"أشعر بالتوعّك طوال الأسبوع", xp:15 },
      { id:"sy2-t2-8", type:"fill_blank", blankSentence:"My ___ are getting worse every day", blankOptions:["symptoms","run","very"], correctAnswer:"symptoms", explanation:"symptoms = الأعراض", xp:15 },
    ],
    t3: [],
  },

  "عند الطبيب": {
    t0: [
      { id:"sy3-t0-1", type:"translate", arabic:"لديّ", options:["I have","I has","I am","I do"], correctAnswer:"I have", explanation:"I have = لديّ", xp:10 },
      { id:"sy3-t0-2", type:"word_order", sentence:"I have a headache", correctAnswer:"I have a headache", explanation:"لديّ صداع", xp:12 },
      { id:"sy3-t0-3", type:"listen_select", listenSentence:"take medicine", options:["medicine","medical","middle","model"], correctAnswer:"medicine", explanation:"take medicine = خذ الدواء 💊", xp:10 },
      { id:"sy3-t0-4", type:"translate", arabic:"دواء", options:["medicine","doctor","nurse","hospital"], correctAnswer:"medicine", explanation:"medicine = دواء", xp:10 },
      { id:"sy3-t0-5", type:"fill_blank", blankSentence:"You should ___ this medicine", blankOptions:["take","run","very"], correctAnswer:"take", explanation:"take medicine = خذ الدواء", xp:12 },
      { id:"sy3-t0-6", type:"translate", arabic:"يستريح", options:["rest","run","work","play"], correctAnswer:"rest", explanation:"rest = يستريح", xp:10 },
      { id:"sy3-t0-7", type:"listen_select", listenSentence:"get some rest", options:["rest","best","test","west"], correctAnswer:"rest", explanation:"get some rest = استرح", xp:12 },
      { id:"sy3-t0-8", type:"word_order", sentence:"You need to rest", correctAnswer:"You need to rest", explanation:"تحتاج للراحة", xp:12 },
      { id:"sy3-t0-9", type:"matching", pairs:[{en:"I have",ar:"لديّ"},{en:"medicine",ar:"دواء"},{en:"rest",ar:"راحة"},{en:"doctor",ar:"طبيب"},{en:"prescription",ar:"وصفة"},{en:"appointment",ar:"موعد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sy3-t1-1", type:"word_order", sentence:"How long have you been sick", correctAnswer:"How long have you been sick", explanation:"منذ متى وأنت مريض؟", xp:14 },
      { id:"sy3-t1-2", type:"translate", arabic:"أحتاج لرؤية طبيب", options:["I need to see a doctor","I need to see doctor","I need to sees a doctor","I need see a doctor"], correctAnswer:"I need to see a doctor", explanation:"see a doctor = رؤية طبيب", xp:14 },
      { id:"sy3-t1-3", type:"listen_select", listenSentence:"twice a day", options:["twice","twin","twist","twenty"], correctAnswer:"twice", explanation:"twice a day = مرتين يومياً", xp:13 },
      { id:"sy3-t1-4", type:"fill_blank", blankSentence:"Take this medicine ___ a day", blankOptions:["twice","run","very"], correctAnswer:"twice", explanation:"twice a day = مرتين يومياً", xp:14 },
      { id:"sy3-t1-5", type:"word_order", sentence:"You should drink a lot of water", correctAnswer:"You should drink a lot of water", explanation:"يجب أن تشرب كثيراً من الماء", xp:14 },
      { id:"sy3-t1-6", type:"translate", arabic:"أحتاج موعداً مع الطبيب", options:["I need an appointment with the doctor","I need a appointment with the doctor","I need an appointment with doctor","I need an appointments with the doctor"], correctAnswer:"I need an appointment with the doctor", explanation:"appointment = موعد", xp:13 },
      { id:"sy3-t1-7", type:"listen_select", listenSentence:"stay in bed", options:["bed","bad","bead","bid"], correctAnswer:"bed", explanation:"stay in bed = ابقَ في الفراش", xp:13 },
      { id:"sy3-t1-8", type:"word_order", sentence:"How do you feel today", correctAnswer:"How do you feel today", explanation:"كيف تشعر اليوم؟", xp:14 },
      { id:"sy3-t1-9", type:"matching", pairs:[{en:"appointment",ar:"موعد"},{en:"see a doctor",ar:"رؤية طبيب"},{en:"twice a day",ar:"مرتين يومياً"},{en:"stay in bed",ar:"البقاء بالفراش"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sy3-t2-1", type:"word_order", sentence:"I would like to make an appointment please", correctAnswer:"I would like to make an appointment please", explanation:"أودّ حجز موعد من فضلك", xp:16 },
      { id:"sy3-t2-2", type:"translate", arabic:"خذ هذا الدواء ثلاث مرات يومياً بعد الأكل", options:["Take this medicine three times a day after meals","Take this medicine three time a day after meals","Take this medicine three times a day after meal","Takes this medicine three times a day after meals"], correctAnswer:"Take this medicine three times a day after meals", explanation:"three times a day after meals", xp:16 },
      { id:"sy3-t2-3", type:"fill_blank", blankSentence:"You should get plenty of ___", blankOptions:["rest","run","very"], correctAnswer:"rest", explanation:"plenty of rest = الكثير من الراحة", xp:15 },
      { id:"sy3-t2-4", type:"word_order", sentence:"The doctor gave me a prescription for antibiotics", correctAnswer:"The doctor gave me a prescription for antibiotics", explanation:"أعطاني الطبيب وصفة مضادات حيوية", xp:16 },
      { id:"sy3-t2-5", type:"translate", arabic:"إذا لم تتحسّن، عُد بعد ثلاثة أيام", options:["If you don't feel better, come back in three days","If you don't feel better, come back in three day","If you doesn't feel better, come back in three days","If you don't feels better, come back in three days"], correctAnswer:"If you don't feel better, come back in three days", explanation:"come back in three days", xp:16 },
      { id:"sy3-t2-6", type:"listen_select", listenSentence:"drink plenty of fluids", options:["fluids","floods","flutes","flows"], correctAnswer:"fluids", explanation:"plenty of fluids = الكثير من السوائل", xp:15 },
      { id:"sy3-t2-7", type:"word_order", sentence:"You will feel better in a few days", correctAnswer:"You will feel better in a few days", explanation:"ستشعر بتحسّن خلال أيام", xp:15 },
      { id:"sy3-t2-8", type:"fill_blank", blankSentence:"Make sure you finish the whole ___", blankOptions:["prescription","run","very"], correctAnswer:"prescription", explanation:"finish the prescription = أكمل الوصفة", xp:15 },
    ],
    t3: [],
  },
};
