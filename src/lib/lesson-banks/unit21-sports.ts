import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 21: ناقش الرياضات
//   درس 1: أنواع الرياضات — football, basketball, tennis, swimming
//   درس 2: ممارسة الرياضة — play, go, do, team, match
//   درس 3: ناقش الرياضة — favorite, win, lose, score
// ══════════════════════════════════════════════════════════════

export const unit21SportsBank: Record<string, TieredBank> = {

  "أنواع الرياضات": {
    t0: [
      { id:"sp-pic-1", type:"picture_match", word:"football", arabic:"كرة قدم", pictureOptions:[{emoji:"⚽",label:"football"},{emoji:"🏀",label:"basketball"},{emoji:"🎾",label:"tennis"},{emoji:"🏊",label:"swimming"}], correctAnswer:"football", explanation:"كرة قدم = football ⚽", xp:10 },
      { id:"sp-pic-2", type:"picture_match", word:"basketball", arabic:"كرة سلة", pictureOptions:[{emoji:"🏀",label:"basketball"},{emoji:"⚽",label:"football"},{emoji:"🎾",label:"tennis"},{emoji:"🏐",label:"volleyball"}], correctAnswer:"basketball", explanation:"كرة سلة = basketball 🏀", xp:10 },
      { id:"sp1-t0-1", type:"translate", arabic:"كرة قدم", options:["football","basketball","tennis","golf"], correctAnswer:"football", explanation:"football = كرة قدم ⚽", xp:10 },
      { id:"sp1-t0-2", type:"listen_select", listenSentence:"tennis", options:["tennis","football","golf","boxing"], correctAnswer:"tennis", explanation:"tennis = تنس 🎾", xp:10 },
      { id:"sp1-t0-3", type:"translate", arabic:"سباحة", options:["swimming","running","cycling","boxing"], correctAnswer:"swimming", explanation:"swimming = سباحة 🏊", xp:10 },
      { id:"sp1-t0-4", type:"word_order", sentence:"I like football", correctAnswer:"I like football", explanation:"أحب كرة القدم", xp:12 },
      { id:"sp1-t0-5", type:"fill_blank", blankSentence:"I play ___", blankOptions:["tennis","run","very"], correctAnswer:"tennis", explanation:"play tennis = ألعب التنس", xp:12 },
      { id:"sp1-t0-6", type:"translate", arabic:"كرة سلة", options:["basketball","football","tennis","golf"], correctAnswer:"basketball", explanation:"basketball = كرة سلة 🏀", xp:10 },
      { id:"sp1-t0-7", type:"listen_select", listenSentence:"swimming", options:["swimming","running","cycling","boxing"], correctAnswer:"swimming", explanation:"swimming = سباحة", xp:12 },
      { id:"sp1-t0-8", type:"word_order", sentence:"She plays tennis", correctAnswer:"She plays tennis", explanation:"تلعب التنس", xp:12 },
      { id:"sp1-t0-9", type:"matching", pairs:[{en:"football",ar:"كرة قدم"},{en:"basketball",ar:"كرة سلة"},{en:"tennis",ar:"تنس"},{en:"swimming",ar:"سباحة"},{en:"running",ar:"جري"},{en:"cycling",ar:"دراجات"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sp1-t1-1", type:"translate", arabic:"جري", options:["running","swimming","cycling","boxing"], correctAnswer:"running", explanation:"running = جري 🏃", xp:12 },
      { id:"sp1-t1-2", type:"word_order", sentence:"He plays basketball every day", correctAnswer:"He plays basketball every day", explanation:"يلعب كرة السلة كل يوم", xp:14 },
      { id:"sp1-t1-3", type:"listen_select", listenSentence:"go cycling", options:["cycling","running","swimming","boxing"], correctAnswer:"cycling", explanation:"go cycling = ركوب الدراجات 🚴", xp:13 },
      { id:"sp1-t1-4", type:"translate", arabic:"كرة طائرة", options:["volleyball","football","tennis","golf"], correctAnswer:"volleyball", explanation:"volleyball = كرة طائرة 🏐", xp:12 },
      { id:"sp1-t1-5", type:"fill_blank", blankSentence:"I go ___ in summer", blankOptions:["swimming","run","very"], correctAnswer:"swimming", explanation:"go swimming = أسبح", xp:14 },
      { id:"sp1-t1-6", type:"word_order", sentence:"We watch football on TV", correctAnswer:"We watch football on TV", explanation:"نشاهد كرة القدم في التلفاز", xp:14 },
      { id:"sp1-t1-7", type:"translate", arabic:"ملاكمة", options:["boxing","running","cycling","golf"], correctAnswer:"boxing", explanation:"boxing = ملاكمة 🥊", xp:12 },
      { id:"sp1-t1-8", type:"listen_select", listenSentence:"play volleyball", options:["volleyball","football","tennis","golf"], correctAnswer:"volleyball", explanation:"play volleyball = ألعب الكرة الطائرة", xp:13 },
      { id:"sp1-t1-9", type:"matching", pairs:[{en:"volleyball",ar:"كرة طائرة"},{en:"boxing",ar:"ملاكمة"},{en:"cycling",ar:"دراجات"},{en:"golf",ar:"جولف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sp1-t2-1", type:"word_order", sentence:"My favorite sport is basketball", correctAnswer:"My favorite sport is basketball", explanation:"رياضتي المفضّلة كرة السلة", xp:16 },
      { id:"sp1-t2-2", type:"translate", arabic:"أذهب للسباحة مرتين في الأسبوع", options:["I go swimming twice a week","I go swimming two a week","I go swim twice a week","I goes swimming twice a week"], correctAnswer:"I go swimming twice a week", explanation:"twice a week = مرتين أسبوعياً", xp:16 },
      { id:"sp1-t2-3", type:"fill_blank", blankSentence:"He is good ___ football", blankOptions:["at","run","very"], correctAnswer:"at", explanation:"good at = جيد في", xp:15 },
      { id:"sp1-t2-4", type:"word_order", sentence:"They practice tennis on weekends", correctAnswer:"They practice tennis on weekends", explanation:"يتدرّبون على التنس في العطلة", xp:16 },
      { id:"sp1-t2-5", type:"translate", arabic:"ما رياضتك المفضّلة؟", options:["What is your favorite sport?","What your favorite sport?","What is favorite sport?","What is your favorite sports?"], correctAnswer:"What is your favorite sport?", explanation:"favorite sport = الرياضة المفضّلة", xp:16 },
      { id:"sp1-t2-6", type:"listen_select", listenSentence:"join the team", options:["team","game","match","sport"], correctAnswer:"team", explanation:"join the team = انضم للفريق", xp:15 },
      { id:"sp1-t2-7", type:"word_order", sentence:"Running is good for your health", correctAnswer:"Running is good for your health", explanation:"الجري مفيد لصحتك", xp:15 },
      { id:"sp1-t2-8", type:"fill_blank", blankSentence:"I want to learn ___", blankOptions:["boxing","run","very"], correctAnswer:"boxing", explanation:"learn boxing = أتعلّم الملاكمة", xp:15 },
    ],
    t3: [],
  },

  "ممارسة الرياضة": {
    t0: [
      { id:"sp2-t0-1", type:"translate", arabic:"يلعب", options:["play","go","do","run"], correctAnswer:"play", explanation:"play = يلعب", xp:10 },
      { id:"sp2-t0-2", type:"word_order", sentence:"I play football", correctAnswer:"I play football", explanation:"ألعب كرة القدم", xp:12 },
      { id:"sp2-t0-3", type:"listen_select", listenSentence:"team", options:["team","game","match","ball"], correctAnswer:"team", explanation:"team = فريق", xp:10 },
      { id:"sp2-t0-4", type:"translate", arabic:"فريق", options:["team","match","game","player"], correctAnswer:"team", explanation:"team = فريق", xp:10 },
      { id:"sp2-t0-5", type:"fill_blank", blankSentence:"We ___ football together", blankOptions:["play","run","very"], correctAnswer:"play", explanation:"play football = نلعب كرة القدم", xp:12 },
      { id:"sp2-t0-6", type:"translate", arabic:"مباراة", options:["match","team","ball","player"], correctAnswer:"match", explanation:"match = مباراة", xp:10 },
      { id:"sp2-t0-7", type:"listen_select", listenSentence:"the game", options:["game","gate","gain","gaze"], correctAnswer:"game", explanation:"the game = اللعبة", xp:12 },
      { id:"sp2-t0-8", type:"word_order", sentence:"The team is ready", correctAnswer:"The team is ready", explanation:"الفريق جاهز", xp:12 },
      { id:"sp2-t0-9", type:"matching", pairs:[{en:"play",ar:"يلعب"},{en:"team",ar:"فريق"},{en:"match",ar:"مباراة"},{en:"game",ar:"لعبة"},{en:"player",ar:"لاعب"},{en:"ball",ar:"كرة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sp2-t1-1", type:"translate", arabic:"لاعب", options:["player","team","coach","fan"], correctAnswer:"player", explanation:"player = لاعب", xp:12 },
      { id:"sp2-t1-2", type:"word_order", sentence:"Our team won the match", correctAnswer:"Our team won the match", explanation:"فاز فريقنا بالمباراة", xp:14 },
      { id:"sp2-t1-3", type:"listen_select", listenSentence:"the coach", options:["coach","couch","catch","coat"], correctAnswer:"coach", explanation:"coach = مدرّب", xp:13 },
      { id:"sp2-t1-4", type:"translate", arabic:"مدرّب", options:["coach","player","fan","referee"], correctAnswer:"coach", explanation:"coach = مدرّب", xp:12 },
      { id:"sp2-t1-5", type:"fill_blank", blankSentence:"The ___ scored a goal", blankOptions:["player","run","very"], correctAnswer:"player", explanation:"the player = اللاعب", xp:14 },
      { id:"sp2-t1-6", type:"word_order", sentence:"They watch the game together", correctAnswer:"They watch the game together", explanation:"يشاهدون اللعبة معاً", xp:14 },
      { id:"sp2-t1-7", type:"translate", arabic:"هدف", options:["goal","ball","match","game"], correctAnswer:"goal", explanation:"goal = هدف ⚽", xp:12 },
      { id:"sp2-t1-8", type:"listen_select", listenSentence:"a great match", options:["match","catch","watch","much"], correctAnswer:"match", explanation:"a great match = مباراة رائعة", xp:13 },
      { id:"sp2-t1-9", type:"matching", pairs:[{en:"player",ar:"لاعب"},{en:"coach",ar:"مدرّب"},{en:"goal",ar:"هدف"},{en:"fan",ar:"مشجّع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sp2-t2-1", type:"word_order", sentence:"Our team plays a match tomorrow", correctAnswer:"Our team plays a match tomorrow", explanation:"يلعب فريقنا مباراة غداً", xp:16 },
      { id:"sp2-t2-2", type:"translate", arabic:"المدرّب يساعد اللاعبين", options:["The coach helps the players","The coach help the players","The coach helps the player","The coach helps players"], correctAnswer:"The coach helps the players", explanation:"helps the players = يساعد اللاعبين", xp:16 },
      { id:"sp2-t2-3", type:"fill_blank", blankSentence:"We watched the ___ on TV", blankOptions:["match","run","very"], correctAnswer:"match", explanation:"the match = المباراة", xp:15 },
      { id:"sp2-t2-4", type:"word_order", sentence:"He is the best player on the team", correctAnswer:"He is the best player on the team", explanation:"هو أفضل لاعب في الفريق", xp:16 },
      { id:"sp2-t2-5", type:"translate", arabic:"سجّل الفريق ثلاثة أهداف", options:["The team scored three goals","The team scored three goal","The team score three goals","The team scored threes goals"], correctAnswer:"The team scored three goals", explanation:"scored goals = سجّل أهدافاً", xp:16 },
      { id:"sp2-t2-6", type:"listen_select", listenSentence:"join our team", options:["join","joint","joy","jump"], correctAnswer:"join", explanation:"join our team = انضم لفريقنا", xp:15 },
      { id:"sp2-t2-7", type:"word_order", sentence:"The players train every morning", correctAnswer:"The players train every morning", explanation:"يتدرّب اللاعبون كل صباح", xp:15 },
      { id:"sp2-t2-8", type:"fill_blank", blankSentence:"He wants to be a ___", blankOptions:["player","run","very"], correctAnswer:"player", explanation:"a player = لاعب", xp:15 },
    ],
    t3: [],
  },

  "ناقش الرياضة": {
    t0: [
      { id:"sp3-t0-1", type:"translate", arabic:"مفضّل", options:["favorite","famous","fast","fun"], correctAnswer:"favorite", explanation:"favorite = مفضّل", xp:10 },
      { id:"sp3-t0-2", type:"translate", arabic:"يفوز", options:["win","lose","play","run"], correctAnswer:"win", explanation:"win = يفوز", xp:10 },
      { id:"sp3-t0-3", type:"listen_select", listenSentence:"lose", options:["lose","loose","close","choose"], correctAnswer:"lose", explanation:"lose = يخسر", xp:10 },
      { id:"sp3-t0-4", type:"translate", arabic:"يخسر", options:["lose","win","play","score"], correctAnswer:"lose", explanation:"lose = يخسر", xp:10 },
      { id:"sp3-t0-5", type:"fill_blank", blankSentence:"My favorite team will ___", blankOptions:["win","run","very"], correctAnswer:"win", explanation:"will win = سيفوز", xp:12 },
      { id:"sp3-t0-6", type:"word_order", sentence:"They won the game", correctAnswer:"They won the game", explanation:"فازوا باللعبة", xp:12 },
      { id:"sp3-t0-7", type:"listen_select", listenSentence:"the score", options:["score","store","sport","short"], correctAnswer:"score", explanation:"the score = النتيجة", xp:12 },
      { id:"sp3-t0-8", type:"translate", arabic:"نتيجة", options:["score","goal","win","match"], correctAnswer:"score", explanation:"score = نتيجة", xp:10 },
      { id:"sp3-t0-9", type:"matching", pairs:[{en:"favorite",ar:"مفضّل"},{en:"win",ar:"يفوز"},{en:"lose",ar:"يخسر"},{en:"score",ar:"نتيجة"},{en:"goal",ar:"هدف"},{en:"win",ar:"فوز"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sp3-t1-1", type:"word_order", sentence:"My favorite team is winning", correctAnswer:"My favorite team is winning", explanation:"فريقي المفضّل يفوز", xp:14 },
      { id:"sp3-t1-2", type:"translate", arabic:"من فاز بالمباراة؟", options:["Who won the match?","Who win the match?","Who won the matches?","Who won match?"], correctAnswer:"Who won the match?", explanation:"Who won = من فاز", xp:14 },
      { id:"sp3-t1-3", type:"listen_select", listenSentence:"what is the score", options:["score","store","sport","short"], correctAnswer:"score", explanation:"the score = النتيجة", xp:13 },
      { id:"sp3-t1-4", type:"fill_blank", blankSentence:"I think they will ___ the game", blankOptions:["win","run","very"], correctAnswer:"win", explanation:"win the game = يفوزون باللعبة", xp:14 },
      { id:"sp3-t1-5", type:"word_order", sentence:"The score is two to one", correctAnswer:"The score is two to one", explanation:"النتيجة 2 - 1", xp:14 },
      { id:"sp3-t1-6", type:"translate", arabic:"كانت مباراة رائعة", options:["It was a great match","It was great match","It was a great matches","It is a great match"], correctAnswer:"It was a great match", explanation:"a great match = مباراة رائعة", xp:13 },
      { id:"sp3-t1-7", type:"listen_select", listenSentence:"my favorite player", options:["favorite","famous","fast","funny"], correctAnswer:"favorite", explanation:"my favorite player = لاعبي المفضّل", xp:13 },
      { id:"sp3-t1-8", type:"word_order", sentence:"Which team do you support", correctAnswer:"Which team do you support", explanation:"أي فريق تشجّع؟", xp:14 },
      { id:"sp3-t1-9", type:"matching", pairs:[{en:"support",ar:"يشجّع"},{en:"win",ar:"يفوز"},{en:"score",ar:"نتيجة"},{en:"team",ar:"فريق"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sp3-t2-1", type:"word_order", sentence:"I think our team will win the championship", correctAnswer:"I think our team will win the championship", explanation:"أظن فريقنا سيفوز بالبطولة", xp:16 },
      { id:"sp3-t2-2", type:"translate", arabic:"من هو لاعبك المفضّل؟", options:["Who is your favorite player?","Who your favorite player?","Who is favorite player?","Who is your favorite players?"], correctAnswer:"Who is your favorite player?", explanation:"favorite player = اللاعب المفضّل", xp:16 },
      { id:"sp3-t2-3", type:"fill_blank", blankSentence:"They lost the game by one ___", blankOptions:["goal","run","very"], correctAnswer:"goal", explanation:"by one goal = بهدف واحد", xp:15 },
      { id:"sp3-t2-4", type:"word_order", sentence:"The final score was three to two", correctAnswer:"The final score was three to two", explanation:"النتيجة النهائية 3 - 2", xp:16 },
      { id:"sp3-t2-5", type:"translate", arabic:"أشجّع هذا الفريق منذ سنوات", options:["I have supported this team for years","I have supported this team for year","I supported this team for years","I have support this team for years"], correctAnswer:"I have supported this team for years", explanation:"supported for years = أشجّع منذ سنوات", xp:16 },
      { id:"sp3-t2-6", type:"listen_select", listenSentence:"a close game", options:["close","clothes","cloth","cloud"], correctAnswer:"close", explanation:"a close game = مباراة متقاربة", xp:15 },
      { id:"sp3-t2-7", type:"word_order", sentence:"It was an exciting match to watch", correctAnswer:"It was an exciting match to watch", explanation:"كانت مباراة مثيرة للمشاهدة", xp:15 },
      { id:"sp3-t2-8", type:"fill_blank", blankSentence:"My team always ___ at home", blankOptions:["wins","run","very"], correctAnswer:"wins", explanation:"always wins = يفوز دائماً", xp:15 },
    ],
    t3: [],
  },
};
