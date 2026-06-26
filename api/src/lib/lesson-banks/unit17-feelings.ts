import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 17: استخدم الزمن المضارع للمشاعر
//   درس 1: المشاعر — happy, sad, angry, tired, scared
//   درس 2: كيف تشعر — I feel, How do you feel, feel like
//   درس 3: التعبير عن المشاعر — because, when, makes me
// ══════════════════════════════════════════════════════════════

export const unit17FeelingsBank: Record<string, TieredBank> = {

  "المشاعر": {
    t0: [
      { id:"fe-pic-1", type:"picture_match", word:"happy", arabic:"سعيد", pictureOptions:[{emoji:"😊",label:"happy"},{emoji:"😢",label:"sad"},{emoji:"😠",label:"angry"},{emoji:"😴",label:"tired"}], correctAnswer:"happy", explanation:"سعيد = happy 😊", xp:10 },
      { id:"fe-pic-2", type:"picture_match", word:"sad", arabic:"حزين", pictureOptions:[{emoji:"😢",label:"sad"},{emoji:"😊",label:"happy"},{emoji:"😠",label:"angry"},{emoji:"😱",label:"scared"}], correctAnswer:"sad", explanation:"حزين = sad 😢", xp:10 },
      { id:"fe1-t0-1", type:"translate", arabic:"سعيد", options:["happy","sad","angry","tired"], correctAnswer:"happy", explanation:"happy = سعيد 😊", xp:10 },
      { id:"fe1-t0-2", type:"listen_select", listenSentence:"sad", options:["sad","happy","angry","scared"], correctAnswer:"sad", explanation:"sad = حزين 😢", xp:10 },
      { id:"fe1-t0-3", type:"translate", arabic:"غاضب", options:["angry","happy","sad","tired"], correctAnswer:"angry", explanation:"angry = غاضب 😠", xp:10 },
      { id:"fe1-t0-4", type:"word_order", sentence:"I am happy", correctAnswer:"I am happy", explanation:"أنا سعيد", xp:12 },
      { id:"fe1-t0-5", type:"fill_blank", blankSentence:"She is ___ today", blankOptions:["happy","run","very"], correctAnswer:"happy", explanation:"is happy = سعيدة", xp:12 },
      { id:"fe1-t0-6", type:"translate", arabic:"خائف", options:["scared","tired","angry","sad"], correctAnswer:"scared", explanation:"scared = خائف 😱", xp:10 },
      { id:"fe1-t0-7", type:"listen_select", listenSentence:"tired", options:["tired","happy","angry","scared"], correctAnswer:"tired", explanation:"tired = متعب 😴", xp:12 },
      { id:"fe1-t0-8", type:"word_order", sentence:"He is very tired", correctAnswer:"He is very tired", explanation:"هو متعب جداً", xp:12 },
      { id:"fe1-t0-9", type:"matching", pairs:[{en:"happy",ar:"سعيد"},{en:"sad",ar:"حزين"},{en:"angry",ar:"غاضب"},{en:"tired",ar:"متعب"},{en:"scared",ar:"خائف"},{en:"excited",ar:"متحمس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fe1-t1-1", type:"translate", arabic:"متحمس", options:["excited","tired","scared","bored"], correctAnswer:"excited", explanation:"excited = متحمس 🤩", xp:12 },
      { id:"fe1-t1-2", type:"word_order", sentence:"They are excited about the trip", correctAnswer:"They are excited about the trip", explanation:"هم متحمسون للرحلة", xp:14 },
      { id:"fe1-t1-3", type:"listen_select", listenSentence:"I am bored", options:["bored","tired","scared","sad"], correctAnswer:"bored", explanation:"bored = ملول 😑", xp:13 },
      { id:"fe1-t1-4", type:"translate", arabic:"قلق", options:["worried","happy","excited","calm"], correctAnswer:"worried", explanation:"worried = قلق 😟", xp:12 },
      { id:"fe1-t1-5", type:"fill_blank", blankSentence:"Why are you ___", blankOptions:["sad","run","very"], correctAnswer:"sad", explanation:"are you sad = حزين", xp:14 },
      { id:"fe1-t1-6", type:"word_order", sentence:"We are very happy today", correctAnswer:"We are very happy today", explanation:"نحن سعداء جداً اليوم", xp:14 },
      { id:"fe1-t1-7", type:"translate", arabic:"هادئ", options:["calm","angry","worried","scared"], correctAnswer:"calm", explanation:"calm = هادئ 😌", xp:12 },
      { id:"fe1-t1-8", type:"listen_select", listenSentence:"she is worried", options:["worried","excited","bored","calm"], correctAnswer:"worried", explanation:"worried = قلقة", xp:13 },
      { id:"fe1-t1-9", type:"matching", pairs:[{en:"excited",ar:"متحمس"},{en:"bored",ar:"ملول"},{en:"worried",ar:"قلق"},{en:"calm",ar:"هادئ"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"fe1-t2-1", type:"word_order", sentence:"I am very excited about the news", correctAnswer:"I am very excited about the news", explanation:"أنا متحمس جداً للخبر", xp:16 },
      { id:"fe1-t2-2", type:"translate", arabic:"إنها قلقة بشأن الامتحان", options:["She is worried about the exam","She worried about the exam","She is worried about exam","She is worry about the exam"], correctAnswer:"She is worried about the exam", explanation:"worried about = قلقة بشأن", xp:16 },
      { id:"fe1-t2-3", type:"fill_blank", blankSentence:"They are ___ after the long day", blankOptions:["tired","run","very"], correctAnswer:"tired", explanation:"tired = متعبون", xp:15 },
      { id:"fe1-t2-4", type:"word_order", sentence:"He feels happy when he plays", correctAnswer:"He feels happy when he plays", explanation:"يشعر بالسعادة عندما يلعب", xp:16 },
      { id:"fe1-t2-5", type:"translate", arabic:"أنا متحمس ولكن متوتر قليلاً", options:["I am excited but a little nervous","I am excited but a little nervous now","I excited but a little nervous","I am excited but little nervous"], correctAnswer:"I am excited but a little nervous", explanation:"nervous = متوتر", xp:16 },
      { id:"fe1-t2-6", type:"listen_select", listenSentence:"feeling much better", options:["better","batter","bitter","butter"], correctAnswer:"better", explanation:"feeling better = أشعر بتحسّن", xp:15 },
      { id:"fe1-t2-7", type:"word_order", sentence:"We are proud of our team", correctAnswer:"We are proud of our team", explanation:"نحن فخورون بفريقنا", xp:15 },
      { id:"fe1-t2-8", type:"fill_blank", blankSentence:"She looks ___ today", blankOptions:["happy","run","very"], correctAnswer:"happy", explanation:"looks happy = تبدو سعيدة", xp:15 },
    ],
    t3: [],
  },

  "كيف تشعر": {
    t0: [
      { id:"fe2-t0-1", type:"translate", arabic:"أشعر", options:["I feel","I am","I have","I do"], correctAnswer:"I feel", explanation:"I feel = أشعر", xp:10 },
      { id:"fe2-t0-2", type:"word_order", sentence:"I feel happy", correctAnswer:"I feel happy", explanation:"أشعر بالسعادة", xp:12 },
      { id:"fe2-t0-3", type:"listen_select", listenSentence:"how do you feel", options:["feel","fill","fall","fail"], correctAnswer:"feel", explanation:"how do you feel = كيف تشعر", xp:10 },
      { id:"fe2-t0-4", type:"translate", arabic:"كيف تشعر؟", options:["How do you feel?","How you feel?","How do you feels?","How feel you?"], correctAnswer:"How do you feel?", explanation:"How do you feel? = كيف تشعر؟", xp:12 },
      { id:"fe2-t0-5", type:"fill_blank", blankSentence:"I ___ tired today", blankOptions:["feel","run","very"], correctAnswer:"feel", explanation:"I feel tired = أشعر بالتعب", xp:12 },
      { id:"fe2-t0-6", type:"word_order", sentence:"She feels sad", correctAnswer:"She feels sad", explanation:"تشعر بالحزن", xp:12 },
      { id:"fe2-t0-7", type:"listen_select", listenSentence:"I feel great", options:["great","grate","greet","grit"], correctAnswer:"great", explanation:"I feel great = أشعر بأني رائع", xp:10 },
      { id:"fe2-t0-8", type:"translate", arabic:"أشعر أني بخير", options:["I feel fine","I feel fines","I feels fine","I feel finely"], correctAnswer:"I feel fine", explanation:"I feel fine = أشعر أني بخير", xp:10 },
      { id:"fe2-t0-9", type:"matching", pairs:[{en:"I feel",ar:"أشعر"},{en:"How do you feel",ar:"كيف تشعر"},{en:"I feel fine",ar:"أشعر بخير"},{en:"feel better",ar:"أشعر بتحسّن"},{en:"feel sick",ar:"أشعر بمرض"},{en:"feel good",ar:"أشعر بخير"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fe2-t1-1", type:"word_order", sentence:"He feels better now", correctAnswer:"He feels better now", explanation:"يشعر بتحسّن الآن", xp:14 },
      { id:"fe2-t1-2", type:"translate", arabic:"أشعر بالتعب قليلاً", options:["I feel a little tired","I feel a little tire","I feel little tired","I feels a little tired"], correctAnswer:"I feel a little tired", explanation:"a little tired = متعب قليلاً", xp:14 },
      { id:"fe2-t1-3", type:"listen_select", listenSentence:"I don't feel well", options:["well","will","wall","wheel"], correctAnswer:"well", explanation:"don't feel well = لا أشعر بخير", xp:13 },
      { id:"fe2-t1-4", type:"fill_blank", blankSentence:"How are you ___ today", blankOptions:["feeling","run","very"], correctAnswer:"feeling", explanation:"how are you feeling = كيف تشعر", xp:14 },
      { id:"fe2-t1-5", type:"word_order", sentence:"I feel like having coffee", correctAnswer:"I feel like having coffee", explanation:"أرغب في تناول قهوة", xp:14 },
      { id:"fe2-t1-6", type:"translate", arabic:"تشعر بالحماس", options:["She feels excited","She feel excited","She feels excite","She feeling excited"], correctAnswer:"She feels excited", explanation:"feels excited = تشعر بالحماس", xp:13 },
      { id:"fe2-t1-7", type:"listen_select", listenSentence:"feeling sleepy", options:["sleepy","sloppy","slippy","sleepily"], correctAnswer:"sleepy", explanation:"feeling sleepy = أشعر بالنعاس", xp:13 },
      { id:"fe2-t1-8", type:"word_order", sentence:"They feel happy together", correctAnswer:"They feel happy together", explanation:"يشعرون بالسعادة معاً", xp:14 },
      { id:"fe2-t1-9", type:"matching", pairs:[{en:"feel like",ar:"أرغب في"},{en:"feel well",ar:"أشعر بخير"},{en:"feeling",ar:"شعور"},{en:"feel sleepy",ar:"أشعر بالنعاس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"fe2-t2-1", type:"word_order", sentence:"How do you feel about the plan", correctAnswer:"How do you feel about the plan", explanation:"كيف تشعر حيال الخطة؟", xp:16 },
      { id:"fe2-t2-2", type:"translate", arabic:"أشعر بتحسّن كبير اليوم", options:["I feel much better today","I feel much better day","I feel many better today","I feels much better today"], correctAnswer:"I feel much better today", explanation:"much better = أفضل بكثير", xp:16 },
      { id:"fe2-t2-3", type:"fill_blank", blankSentence:"I ___ like going out tonight", blankOptions:["feel","run","very"], correctAnswer:"feel", explanation:"feel like = أرغب في", xp:15 },
      { id:"fe2-t2-4", type:"word_order", sentence:"She feels nervous before the test", correctAnswer:"She feels nervous before the test", explanation:"تشعر بالتوتر قبل الاختبار", xp:16 },
      { id:"fe2-t2-5", type:"translate", arabic:"لا أشعر أني بخير اليوم", options:["I don't feel well today","I don't feel good today","I not feel well today","I don't feels well today"], correctAnswer:"I don't feel well today", explanation:"don't feel well = لا أشعر بخير", xp:16 },
      { id:"fe2-t2-6", type:"listen_select", listenSentence:"feeling much stronger", options:["stronger","strange","stranger","strongly"], correctAnswer:"stronger", explanation:"stronger = أقوى", xp:15 },
      { id:"fe2-t2-7", type:"word_order", sentence:"We feel grateful for your help", correctAnswer:"We feel grateful for your help", explanation:"نشعر بالامتنان لمساعدتك", xp:15 },
      { id:"fe2-t2-8", type:"fill_blank", blankSentence:"Do you feel ___ now", blankOptions:["better","run","very"], correctAnswer:"better", explanation:"feel better = تشعر بتحسّن", xp:15 },
    ],
    t3: [],
  },

  "التعبير عن المشاعر": {
    t0: [
      { id:"fe3-t0-1", type:"translate", arabic:"لأن", options:["because","when","but","and"], correctAnswer:"because", explanation:"because = لأن", xp:10 },
      { id:"fe3-t0-2", type:"word_order", sentence:"I am happy because it is sunny", correctAnswer:"I am happy because it is sunny", explanation:"أنا سعيد لأن الجو مشمس", xp:12 },
      { id:"fe3-t0-3", type:"listen_select", listenSentence:"when I am sad", options:["when","then","than","that"], correctAnswer:"when", explanation:"when = عندما", xp:10 },
      { id:"fe3-t0-4", type:"translate", arabic:"عندما", options:["when","because","but","so"], correctAnswer:"when", explanation:"when = عندما", xp:10 },
      { id:"fe3-t0-5", type:"fill_blank", blankSentence:"I am tired ___ I worked a lot", blankOptions:["because","run","very"], correctAnswer:"because", explanation:"because = لأن", xp:12 },
      { id:"fe3-t0-6", type:"word_order", sentence:"Music makes me happy", correctAnswer:"Music makes me happy", explanation:"الموسيقى تسعدني", xp:12 },
      { id:"fe3-t0-7", type:"listen_select", listenSentence:"it makes me sad", options:["makes","make","making","made"], correctAnswer:"makes", explanation:"makes me = يجعلني", xp:12 },
      { id:"fe3-t0-8", type:"translate", arabic:"هذا يجعلني سعيداً", options:["This makes me happy","This make me happy","This makes me happily","This makes I happy"], correctAnswer:"This makes me happy", explanation:"makes me happy = يجعلني سعيداً", xp:10 },
      { id:"fe3-t0-9", type:"matching", pairs:[{en:"because",ar:"لأن"},{en:"when",ar:"عندما"},{en:"makes me",ar:"يجعلني"},{en:"so",ar:"لذلك"},{en:"but",ar:"لكن"},{en:"and",ar:"و"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fe3-t1-1", type:"word_order", sentence:"I feel sad when it rains", correctAnswer:"I feel sad when it rains", explanation:"أشعر بالحزن عندما تمطر", xp:14 },
      { id:"fe3-t1-2", type:"translate", arabic:"اللعب يجعلني سعيداً", options:["Playing makes me happy","Playing make me happy","Play makes me happy","Playing makes me happily"], correctAnswer:"Playing makes me happy", explanation:"makes me happy = يجعلني سعيداً", xp:14 },
      { id:"fe3-t1-3", type:"listen_select", listenSentence:"because I love it", options:["because","when","but","so"], correctAnswer:"because", explanation:"because = لأن", xp:13 },
      { id:"fe3-t1-4", type:"fill_blank", blankSentence:"I smile ___ I see you", blankOptions:["when","run","very"], correctAnswer:"when", explanation:"when = عندما", xp:14 },
      { id:"fe3-t1-5", type:"word_order", sentence:"This song makes me feel happy", correctAnswer:"This song makes me feel happy", explanation:"هذه الأغنية تسعدني", xp:14 },
      { id:"fe3-t1-6", type:"translate", arabic:"أنا متعب لذلك سأنام", options:["I am tired so I will sleep","I am tired so I sleep","I am tired so I will slept","I tired so I will sleep"], correctAnswer:"I am tired so I will sleep", explanation:"so = لذلك", xp:14 },
      { id:"fe3-t1-7", type:"listen_select", listenSentence:"it makes me smile", options:["smile","small","smell","smart"], correctAnswer:"smile", explanation:"makes me smile = يجعلني أبتسم", xp:13 },
      { id:"fe3-t1-8", type:"word_order", sentence:"I am happy when I am with friends", correctAnswer:"I am happy when I am with friends", explanation:"أسعد عندما أكون مع الأصدقاء", xp:14 },
      { id:"fe3-t1-9", type:"matching", pairs:[{en:"so",ar:"لذلك"},{en:"makes me smile",ar:"يجعلني أبتسم"},{en:"when it rains",ar:"عندما تمطر"},{en:"because I love",ar:"لأني أحب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"fe3-t2-1", type:"word_order", sentence:"I feel happy because I passed the exam", correctAnswer:"I feel happy because I passed the exam", explanation:"أشعر بالسعادة لأني نجحت", xp:16 },
      { id:"fe3-t2-2", type:"translate", arabic:"قضاء الوقت مع عائلتي يجعلني سعيداً", options:["Spending time with my family makes me happy","Spending time with my family make me happy","Spend time with my family makes me happy","Spending time my family makes me happy"], correctAnswer:"Spending time with my family makes me happy", explanation:"makes me happy = يجعلني سعيداً", xp:16 },
      { id:"fe3-t2-3", type:"fill_blank", blankSentence:"I feel calm ___ I listen to music", blankOptions:["when","run","very"], correctAnswer:"when", explanation:"when = عندما", xp:15 },
      { id:"fe3-t2-4", type:"word_order", sentence:"Helping others makes me feel good", correctAnswer:"Helping others makes me feel good", explanation:"مساعدة الآخرين تُشعرني بالرضا", xp:16 },
      { id:"fe3-t2-5", type:"translate", arabic:"أشعر بالتوتر عندما أتحدث أمام الناس", options:["I feel nervous when I speak in front of people","I feel nervous when I speak front of people","I feel nervous when I speaks in front of people","I feel nervous I speak in front of people"], correctAnswer:"I feel nervous when I speak in front of people", explanation:"nervous when = متوتر عندما", xp:16 },
      { id:"fe3-t2-6", type:"listen_select", listenSentence:"that makes me proud", options:["proud","pround","prood","proad"], correctAnswer:"proud", explanation:"makes me proud = يجعلني فخوراً", xp:15 },
      { id:"fe3-t2-7", type:"word_order", sentence:"I am grateful because you helped me", correctAnswer:"I am grateful because you helped me", explanation:"أنا ممتن لأنك ساعدتني", xp:15 },
      { id:"fe3-t2-8", type:"fill_blank", blankSentence:"Good news ___ me happy", blankOptions:["makes","run","very"], correctAnswer:"makes", explanation:"makes me happy = يجعلني سعيداً", xp:15 },
    ],
    t3: [],
  },
};
