import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 3 — قل من أين أنت؟ (الأماكن والاتجاهات)
//   درس 1: أماكن في المدينة — school, hospital, market, park, bank
//   درس 2: أين تقع؟ — next to, behind, in front of, near, between
//   درس 3: الاتجاهات — turn left, turn right, go straight, stop, here
//   تحدي: كل الكلمات معاً
// نفس أنماط الوحدتين السابقتين ونفس المستوى
// ══════════════════════════════════════════════════════════════

export const unit3PlacesBank: Record<string, TieredBank> = {

  // ── الدرس 1: أماكن في المدينة ──
  "أماكن في المدينة": {
    t0: [
    { id:"pla-pic-1", type:"picture_match", word:"school", arabic:"مدرسة", pictureOptions:[{emoji:"",label:"school"},{emoji:"",label:"hospital"},{emoji:"",label:"market"},{emoji:"",label:"bank"}], correctAnswer:"school", explanation:"مدرسة = school", xp:10 },
    { id:"pla-pic-2", type:"picture_match", word:"hospital", arabic:"مستشفى", pictureOptions:[{emoji:"",label:"hospital"},{emoji:"",label:"school"},{emoji:"",label:"park"},{emoji:"",label:"market"}], correctAnswer:"hospital", explanation:"مستشفى = hospital", xp:10 },
      { id:"pl1-t0-1", type:"translate", arabic:"مدرسة", options:["school","hospital","market","park"], correctAnswer:"school", explanation:"school = مدرسة 🏫", xp:10 },
      { id:"pl1-t0-2", type:"listen_select", listenSentence:"hospital", options:["hospital","school","market","bank"], correctAnswer:"hospital", explanation:"hospital = مستشفى 🏥", xp:10 },
      { id:"pl1-t0-3", type:"translate", arabic:"سوق", options:["market","park","bank","school"], correctAnswer:"market", explanation:"market = سوق 🛒", xp:10 },
      { id:"pl1-t0-4", type:"word_order", sentence:"This is the school", correctAnswer:"This is the school", explanation:"This is the school = هذه المدرسة", xp:12 },
      { id:"pl1-t0-5", type:"listen_select", listenSentence:"the park", options:["park","bank","school","market"], correctAnswer:"park", explanation:"park = حديقة 🌳", xp:12 },
      { id:"pl1-t0-6", type:"translate", arabic:"بنك", options:["bank","park","market","hospital"], correctAnswer:"bank", explanation:"bank = بنك 🏦", xp:10 },
      { id:"pl1-t0-7", type:"word_order", sentence:"Where is the bank", correctAnswer:"Where is the bank", explanation:"Where is the bank? = أين البنك؟", xp:12 },
      { id:"pl1-t0-8", type:"fill_blank", blankSentence:"This is the ___", blankOptions:["hospital","where","near"], correctAnswer:"hospital", explanation:"the hospital = المستشفى", xp:12 },
      { id:"pl1-t0-9", type:"matching", pairs:[{en:"school",ar:"مدرسة"},{en:"hospital",ar:"مستشفى"},{en:"market",ar:"سوق"},{en:"park",ar:"حديقة"},{en:"bank",ar:"بنك"},{en:"city",ar:"مدينة"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الأماكن", xp:15 },
    ],
    t1: [
      { id:"pl1-t1-1", type:"translate", arabic:"حديقة", options:["park","school","bank","market"], correctAnswer:"park", explanation:"park = حديقة 🌳", xp:12 },
      { id:"pl1-t1-2", type:"word_order", sentence:"The school is here", correctAnswer:"The school is here", explanation:"The school is here = المدرسة هنا", xp:13 },
      { id:"pl1-t1-3", type:"listen_select", listenSentence:"Where is the market", options:["market","school","park","bank"], correctAnswer:"market", explanation:"Where is the market = أين السوق", xp:12 },
      { id:"pl1-t1-4", type:"translate", arabic:"أين المستشفى؟", options:["Where is the hospital?","Where the hospital?","Hospital where is?","Is where hospital?"], correctAnswer:"Where is the hospital?", explanation:"Where is the hospital? = أين المستشفى؟", xp:13 },
      { id:"pl1-t1-5", type:"fill_blank", blankSentence:"The ___ is near", blankOptions:["park","where","here"], correctAnswer:"park", explanation:"The park is near = الحديقة قريبة", xp:13 },
      { id:"pl1-t1-6", type:"word_order", sentence:"The bank is here", correctAnswer:"The bank is here", explanation:"The bank is here = البنك هنا", xp:13 },
      { id:"pl1-t1-7", type:"translate", arabic:"سوق", options:["market","park","bank","school"], correctAnswer:"market", explanation:"market = سوق", xp:12 },
      { id:"pl1-t1-8", type:"matching", pairs:[{en:"school",ar:"مدرسة"},{en:"hospital",ar:"مستشفى"},{en:"here",ar:"هنا"},{en:"where",ar:"أين"},{en:"near",ar:"قريب"},{en:"city",ar:"مدينة"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pl1-t1-9", type:"fill_blank", blankSentence:"Where is the ___", blankOptions:["bank","near","here"], correctAnswer:"bank", explanation:"Where is the bank = أين البنك", xp:13 },
    ],
    t2: [
      { id:"pl1-t2-1", type:"word_order", sentence:"The school is near the park", correctAnswer:"The school is near the park", explanation:"المدرسة قرب الحديقة", xp:14 },
      { id:"pl1-t2-2", type:"translate", arabic:"المستشفى قريب من هنا", options:["The hospital is near here","Hospital near is here","The near hospital here","Here is hospital near"], correctAnswer:"The hospital is near here", explanation:"وصف الموقع", xp:15 },
      { id:"pl1-t2-3", type:"listen_select", listenSentence:"The market is here", options:["market","park","school","bank"], correctAnswer:"market", explanation:"The market is here = السوق هنا", xp:14 },
      { id:"pl1-t2-4", type:"fill_blank", blankSentence:"The bank is ___ the school", blankOptions:["near","where","here"], correctAnswer:"near", explanation:"near the school = قرب المدرسة", xp:15 },
      { id:"pl1-t2-5", type:"word_order", sentence:"Where is the hospital please", correctAnswer:"Where is the hospital please", explanation:"سؤال مهذب", xp:14 },
      { id:"pl1-t2-6", type:"translate", arabic:"الحديقة بجانب السوق", options:["The park is next to the market","Park next market is","The next park market","Market next park is"], correctAnswer:"The park is next to the market", explanation:"وصف الموقع", xp:15 },
      { id:"pl1-t2-7", type:"matching", pairs:[{en:"market",ar:"سوق"},{en:"park",ar:"حديقة"},{en:"bank",ar:"بنك"},{en:"hospital",ar:"مستشفى"},{en:"near",ar:"قريب"},{en:"here",ar:"هنا"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pl1-t2-8", type:"fill_blank", blankSentence:"The ___ is near here", blankOptions:["school","where","near"], correctAnswer:"school", explanation:"The school is near = المدرسة قريبة", xp:15 },
      { id:"pl1-t2-9", type:"listen_select", listenSentence:"The park is near", options:["park","bank","market","school"], correctAnswer:"park", explanation:"The park is near = الحديقة قريبة", xp:14 },
    ],
    t3: [
      { id:"pl1-t3-1", type:"word_order", sentence:"The hospital is near the bank", correctAnswer:"The hospital is near the bank", explanation:"وصف موقع الأماكن", xp:18 },
      { id:"pl1-t3-2", type:"translate", arabic:"أين المدرسة؟ هي قريبة", options:["Where is the school? It is near","Where school? Near it","School where is near","Is the school where near"], correctAnswer:"Where is the school? It is near", explanation:"سؤال وجواب", xp:18 },
      { id:"pl1-t3-3", type:"listen_select", listenSentence:"Where is the hospital", options:["hospital","school","park","market"], correctAnswer:"hospital", explanation:"Where is the hospital = أين المستشفى", xp:18 },
      { id:"pl1-t3-4", type:"fill_blank", blankSentence:"The market is near the ___", blankOptions:["park","where","near"], correctAnswer:"park", explanation:"near the park = قرب الحديقة", xp:18 },
      { id:"pl1-t3-5", type:"matching", pairs:[{en:"school",ar:"مدرسة"},{en:"hospital",ar:"مستشفى"},{en:"market",ar:"سوق"},{en:"park",ar:"حديقة"},{en:"bank",ar:"بنك"},{en:"near",ar:"قريب"}], correctAnswer:"matched", explanation:"رائع! راجعت الأماكن", xp:18 },
      { id:"pl1-t3-6", type:"word_order", sentence:"The park is near here", correctAnswer:"The park is near here", explanation:"وصف الموقع", xp:18 },
      { id:"pl1-t3-7", type:"translate", arabic:"البنك قريب من المستشفى", options:["The bank is near the hospital","Bank near hospital is","The near bank hospital","Hospital near the bank"], correctAnswer:"The bank is near the hospital", explanation:"وصف الموقع", xp:20 },
    ],
  },

  // ── الدرس 2: أين تقع؟ ──
  "أين تقع؟": {
    t0: [
      { id:"pl2-t0-1", type:"translate", arabic:"بجانب", options:["next to","behind","near","between"], correctAnswer:"next to", explanation:"next to = بجانب", xp:10 },
      { id:"pl2-t0-2", type:"listen_select", listenSentence:"behind", options:["behind","next to","near","front"], correctAnswer:"behind", explanation:"behind = خلف", xp:10 },
      { id:"pl2-t0-3", type:"translate", arabic:"قريب", options:["near","behind","next to","between"], correctAnswer:"near", explanation:"near = قريب", xp:10 },
      { id:"pl2-t0-4", type:"word_order", sentence:"The park is near", correctAnswer:"The park is near", explanation:"The park is near = الحديقة قريبة", xp:12 },
      { id:"pl2-t0-5", type:"listen_select", listenSentence:"next to the bank", options:["next","behind","near","front"], correctAnswer:"next", explanation:"next to = بجانب", xp:12 },
      { id:"pl2-t0-6", type:"translate", arabic:"بين", options:["between","behind","near","next to"], correctAnswer:"between", explanation:"between = بين", xp:10 },
      { id:"pl2-t0-7", type:"word_order", sentence:"It is behind the school", correctAnswer:"It is behind the school", explanation:"It is behind = إنه خلف", xp:12 },
      { id:"pl2-t0-8", type:"fill_blank", blankSentence:"The bank is ___ the park", blankOptions:["near","where","here"], correctAnswer:"near", explanation:"near the park = قرب الحديقة", xp:12 },
      { id:"pl2-t0-9", type:"matching", pairs:[{en:"next to",ar:"بجانب"},{en:"behind",ar:"خلف"},{en:"near",ar:"قريب"},{en:"between",ar:"بين"},{en:"here",ar:"هنا"},{en:"there",ar:"هناك"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pl2-t1-1", type:"word_order", sentence:"The school is next to the park", correctAnswer:"The school is next to the park", explanation:"المدرسة بجانب الحديقة", xp:13 },
      { id:"pl2-t1-2", type:"translate", arabic:"المستشفى خلف البنك", options:["The hospital is behind the bank","Hospital behind bank is","The behind hospital bank","Bank behind the hospital"], correctAnswer:"The hospital is behind the bank", explanation:"وصف الموقع", xp:13 },
      { id:"pl2-t1-3", type:"listen_select", listenSentence:"behind the market", options:["behind","next","near","front"], correctAnswer:"behind", explanation:"behind = خلف", xp:12 },
      { id:"pl2-t1-4", type:"fill_blank", blankSentence:"The park is ___ to the bank", blankOptions:["next","behind","near"], correctAnswer:"next", explanation:"next to = بجانب", xp:13 },
      { id:"pl2-t1-5", type:"word_order", sentence:"It is in front of the school", correctAnswer:"It is in front of the school", explanation:"in front of = أمام", xp:13 },
      { id:"pl2-t1-6", type:"translate", arabic:"أمام", options:["in front of","behind","next to","near"], correctAnswer:"in front of", explanation:"in front of = أمام", xp:13 },
      { id:"pl2-t1-7", type:"matching", pairs:[{en:"next to",ar:"بجانب"},{en:"behind",ar:"خلف"},{en:"in front of",ar:"أمام"},{en:"near",ar:"قريب"},{en:"between",ar:"بين"},{en:"here",ar:"هنا"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pl2-t1-8", type:"fill_blank", blankSentence:"The market is ___ the school", blankOptions:["behind","where","here"], correctAnswer:"behind", explanation:"behind the school = خلف المدرسة", xp:13 },
      { id:"pl2-t1-9", type:"listen_select", listenSentence:"in front of the park", options:["front","behind","next","near"], correctAnswer:"front", explanation:"in front of = أمام", xp:12 },
    ],
    t2: [
      { id:"pl2-t2-1", type:"word_order", sentence:"The bank is between the school and the park", correctAnswer:"The bank is between the school and the park", explanation:"between ... and = بين ... و", xp:14 },
      { id:"pl2-t2-2", type:"translate", arabic:"الحديقة أمام المستشفى", options:["The park is in front of the hospital","Park front hospital is","The front park hospital","Hospital in front park"], correctAnswer:"The park is in front of the hospital", explanation:"وصف الموقع", xp:15 },
      { id:"pl2-t2-3", type:"listen_select", listenSentence:"between the bank and the park", options:["between","behind","next","front"], correctAnswer:"between", explanation:"between = بين", xp:14 },
      { id:"pl2-t2-4", type:"fill_blank", blankSentence:"The school is ___ of the market", blankOptions:["in front","behind","near"], correctAnswer:"in front", explanation:"in front of = أمام", xp:15 },
      { id:"pl2-t2-5", type:"word_order", sentence:"The market is behind the bank", correctAnswer:"The market is behind the bank", explanation:"السوق خلف البنك", xp:14 },
      { id:"pl2-t2-6", type:"translate", arabic:"المدرسة بين الحديقة والسوق", options:["The school is between the park and the market","School between park market","The between school park","Market between school park"], correctAnswer:"The school is between the park and the market", explanation:"وصف الموقع", xp:15 },
      { id:"pl2-t2-7", type:"matching", pairs:[{en:"between",ar:"بين"},{en:"in front of",ar:"أمام"},{en:"behind",ar:"خلف"},{en:"next to",ar:"بجانب"},{en:"near",ar:"قريب"},{en:"far",ar:"بعيد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pl2-t2-8", type:"fill_blank", blankSentence:"The hospital is ___ the school and the bank", blankOptions:["between","behind","near"], correctAnswer:"between", explanation:"between = بين", xp:15 },
      { id:"pl2-t2-9", type:"listen_select", listenSentence:"behind the hospital", options:["behind","next","front","near"], correctAnswer:"behind", explanation:"behind = خلف", xp:14 },
    ],
    t3: [
      { id:"pl2-t3-1", type:"word_order", sentence:"The park is in front of the school", correctAnswer:"The park is in front of the school", explanation:"الحديقة أمام المدرسة", xp:18 },
      { id:"pl2-t3-2", type:"translate", arabic:"البنك بجانب المستشفى وخلف السوق", options:["The bank is next to the hospital and behind the market","Bank next hospital behind market","The next bank market behind","Hospital next bank behind market"], correctAnswer:"The bank is next to the hospital and behind the market", explanation:"وصف مركّب", xp:20 },
      { id:"pl2-t3-3", type:"listen_select", listenSentence:"next to the school", options:["next","behind","front","between"], correctAnswer:"next", explanation:"next to = بجانب", xp:18 },
      { id:"pl2-t3-4", type:"fill_blank", blankSentence:"The market is ___ the park and the bank", blankOptions:["between","behind","near"], correctAnswer:"between", explanation:"between = بين", xp:18 },
      { id:"pl2-t3-5", type:"matching", pairs:[{en:"next to",ar:"بجانب"},{en:"behind",ar:"خلف"},{en:"in front of",ar:"أمام"},{en:"between",ar:"بين"},{en:"near",ar:"قريب"},{en:"far",ar:"بعيد"}], correctAnswer:"matched", explanation:"رائع! راجعت كلمات الموقع", xp:18 },
      { id:"pl2-t3-6", type:"word_order", sentence:"The school is near the hospital", correctAnswer:"The school is near the hospital", explanation:"المدرسة قرب المستشفى", xp:18 },
      { id:"pl2-t3-7", type:"translate", arabic:"الحديقة بين البنك والمدرسة", options:["The park is between the bank and the school","Park between bank school","The between park bank","School between park bank"], correctAnswer:"The park is between the bank and the school", explanation:"وصف الموقع", xp:20 },
    ],
  },

  // ── الدرس 3: الاتجاهات ──
  "الاتجاهات": {
    t0: [
      { id:"pl3-t0-1", type:"translate", arabic:"انعطف يساراً", options:["turn left","turn right","go straight","stop"], correctAnswer:"turn left", explanation:"turn left = انعطف يساراً ⬅️", xp:10 },
      { id:"pl3-t0-2", type:"listen_select", listenSentence:"turn right", options:["turn right","turn left","go straight","stop"], correctAnswer:"turn right", explanation:"turn right = انعطف يميناً ➡️", xp:10 },
      { id:"pl3-t0-3", type:"translate", arabic:"اذهب مستقيماً", options:["go straight","turn left","stop","turn right"], correctAnswer:"go straight", explanation:"go straight = اذهب مستقيماً ⬆️", xp:10 },
      { id:"pl3-t0-4", type:"word_order", sentence:"Turn left here", correctAnswer:"Turn left here", explanation:"Turn left here = انعطف يساراً هنا", xp:12 },
      { id:"pl3-t0-5", type:"listen_select", listenSentence:"go straight", options:["straight","left","right","stop"], correctAnswer:"straight", explanation:"go straight = اذهب مستقيماً", xp:12 },
      { id:"pl3-t0-6", type:"translate", arabic:"توقّف", options:["stop","go","turn","left"], correctAnswer:"stop", explanation:"stop = توقّف ✋", xp:10 },
      { id:"pl3-t0-7", type:"word_order", sentence:"Go straight and stop", correctAnswer:"Go straight and stop", explanation:"اذهب مستقيماً وتوقّف", xp:12 },
      { id:"pl3-t0-8", type:"fill_blank", blankSentence:"___ left at the bank", blankOptions:["Turn","Go","Stop"], correctAnswer:"Turn", explanation:"Turn left = انعطف يساراً", xp:12 },
      { id:"pl3-t0-9", type:"matching", pairs:[{en:"turn left",ar:"انعطف يساراً"},{en:"turn right",ar:"انعطف يميناً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"stop",ar:"توقّف"},{en:"here",ar:"هنا"},{en:"there",ar:"هناك"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الاتجاهات", xp:15 },
    ],
    t1: [
      { id:"pl3-t1-1", type:"word_order", sentence:"Turn right at the school", correctAnswer:"Turn right at the school", explanation:"انعطف يميناً عند المدرسة", xp:13 },
      { id:"pl3-t1-2", type:"translate", arabic:"اذهب مستقيماً ثم انعطف يساراً", options:["Go straight then turn left","Straight go then left","Go then straight left","Turn straight then go left"], correctAnswer:"Go straight then turn left", explanation:"اتجاهات متتابعة", xp:13 },
      { id:"pl3-t1-3", type:"listen_select", listenSentence:"turn left here", options:["left","right","straight","stop"], correctAnswer:"left", explanation:"turn left = انعطف يساراً", xp:12 },
      { id:"pl3-t1-4", type:"fill_blank", blankSentence:"Go ___ to the park", blankOptions:["straight","turn","stop"], correctAnswer:"straight", explanation:"go straight = اذهب مستقيماً", xp:13 },
      { id:"pl3-t1-5", type:"word_order", sentence:"Stop at the hospital", correctAnswer:"Stop at the hospital", explanation:"توقّف عند المستشفى", xp:13 },
      { id:"pl3-t1-6", type:"translate", arabic:"انعطف يميناً عند البنك", options:["Turn right at the bank","Right turn bank at","Turn bank right at","At the bank turn right"], correctAnswer:"Turn right at the bank", explanation:"اتجاه عند مكان", xp:13 },
      { id:"pl3-t1-7", type:"matching", pairs:[{en:"turn left",ar:"انعطف يساراً"},{en:"turn right",ar:"انعطف يميناً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"stop",ar:"توقّف"},{en:"here",ar:"هنا"},{en:"near",ar:"قريب"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pl3-t1-8", type:"fill_blank", blankSentence:"Turn ___ at the market", blankOptions:["right","go","stop"], correctAnswer:"right", explanation:"turn right = انعطف يميناً", xp:13 },
      { id:"pl3-t1-9", type:"listen_select", listenSentence:"go straight here", options:["straight","left","right","stop"], correctAnswer:"straight", explanation:"go straight = اذهب مستقيماً", xp:12 },
    ],
    t2: [
      { id:"pl3-t2-1", type:"word_order", sentence:"Go straight and turn left at the park", correctAnswer:"Go straight and turn left at the park", explanation:"اتجاهات مركّبة", xp:14 },
      { id:"pl3-t2-2", type:"translate", arabic:"انعطف يميناً ثم اذهب مستقيماً", options:["Turn right then go straight","Right turn go straight","Turn straight then right","Go right then turn straight"], correctAnswer:"Turn right then go straight", explanation:"اتجاهات متتابعة", xp:15 },
      { id:"pl3-t2-3", type:"listen_select", listenSentence:"turn right at the bank", options:["right","left","straight","stop"], correctAnswer:"right", explanation:"turn right = انعطف يميناً", xp:14 },
      { id:"pl3-t2-4", type:"fill_blank", blankSentence:"Turn left and ___ at the school", blankOptions:["stop","turn","near"], correctAnswer:"stop", explanation:"stop = توقّف", xp:15 },
      { id:"pl3-t2-5", type:"word_order", sentence:"Turn left then turn right", correctAnswer:"Turn left then turn right", explanation:"انعطف يساراً ثم يميناً", xp:14 },
      { id:"pl3-t2-6", type:"translate", arabic:"اذهب مستقيماً وتوقّف عند الحديقة", options:["Go straight and stop at the park","Straight go stop park","Go and straight stop park","Stop straight go at park"], correctAnswer:"Go straight and stop at the park", explanation:"اتجاهات مركّبة", xp:15 },
      { id:"pl3-t2-7", type:"matching", pairs:[{en:"turn left",ar:"انعطف يساراً"},{en:"turn right",ar:"انعطف يميناً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"stop",ar:"توقّف"},{en:"left",ar:"يسار"},{en:"right",ar:"يمين"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pl3-t2-8", type:"fill_blank", blankSentence:"Go straight then turn ___", blankOptions:["right","go","stop"], correctAnswer:"right", explanation:"turn right = انعطف يميناً", xp:15 },
      { id:"pl3-t2-9", type:"listen_select", listenSentence:"stop at the school", options:["stop","go","turn","left"], correctAnswer:"stop", explanation:"stop = توقّف", xp:14 },
    ],
    t3: [
      { id:"pl3-t3-1", type:"word_order", sentence:"Go straight then turn left at the bank", correctAnswer:"Go straight then turn left at the bank", explanation:"اتجاهات مركّبة كاملة", xp:18 },
      { id:"pl3-t3-2", type:"translate", arabic:"انعطف يميناً عند المدرسة ثم اذهب مستقيماً", options:["Turn right at the school then go straight","Right school turn go straight","Turn go right school straight","At school right turn go straight"], correctAnswer:"Turn right at the school then go straight", explanation:"اتجاهات مع أماكن", xp:20 },
      { id:"pl3-t3-3", type:"listen_select", listenSentence:"turn left at the park", options:["left","right","straight","stop"], correctAnswer:"left", explanation:"turn left = انعطف يساراً", xp:18 },
      { id:"pl3-t3-4", type:"fill_blank", blankSentence:"Turn right then ___ straight", blankOptions:["go","turn","stop"], correctAnswer:"go", explanation:"go straight = اذهب مستقيماً", xp:18 },
      { id:"pl3-t3-5", type:"matching", pairs:[{en:"turn left",ar:"انعطف يساراً"},{en:"turn right",ar:"انعطف يميناً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"stop",ar:"توقّف"},{en:"here",ar:"هنا"},{en:"there",ar:"هناك"}], correctAnswer:"matched", explanation:"رائع! راجعت الاتجاهات", xp:18 },
      { id:"pl3-t3-6", type:"word_order", sentence:"Stop here at the market", correctAnswer:"Stop here at the market", explanation:"توقّف هنا عند السوق", xp:18 },
      { id:"pl3-t3-7", type:"translate", arabic:"اذهب مستقيماً وانعطف يميناً عند المستشفى", options:["Go straight and turn right at the hospital","Straight go turn right hospital","Go and right turn straight hospital","Turn straight right go hospital"], correctAnswer:"Go straight and turn right at the hospital", explanation:"اتجاهات كاملة", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة (كل الكلمات) ──
  "تحدي الوحدة": {
    t0: [
      { id:"plc-t0-1", type:"word_order", sentence:"Where is the school", correctAnswer:"Where is the school", explanation:"أين المدرسة؟", xp:15 },
      { id:"plc-t0-2", type:"translate", arabic:"البنك بجانب الحديقة", options:["The bank is next to the park","Bank next park is","The next bank park","Park next the bank"], correctAnswer:"The bank is next to the park", explanation:"وصف الموقع", xp:15 },
      { id:"plc-t0-3", type:"listen_select", listenSentence:"turn left here", options:["left","right","straight","stop"], correctAnswer:"left", explanation:"turn left = انعطف يساراً", xp:15 },
      { id:"plc-t0-4", type:"fill_blank", blankSentence:"The hospital is ___ here", blankOptions:["near","where","turn"], correctAnswer:"near", explanation:"near here = قريب من هنا", xp:15 },
      { id:"plc-t0-5", type:"matching", pairs:[{en:"school",ar:"مدرسة"},{en:"market",ar:"سوق"},{en:"near",ar:"قريب"},{en:"turn left",ar:"انعطف يساراً"},{en:"stop",ar:"توقّف"},{en:"here",ar:"هنا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"plc-t0-6", type:"translate", arabic:"اذهب مستقيماً", options:["Go straight","Straight go","Go turn","Turn straight"], correctAnswer:"Go straight", explanation:"go straight = اذهب مستقيماً", xp:15 },
      { id:"plc-t0-7", type:"word_order", sentence:"Turn right at the park", correctAnswer:"Turn right at the park", explanation:"انعطف يميناً عند الحديقة", xp:15 },
    ],
    t1: [
      { id:"plc-t1-1", type:"translate", arabic:"المستشفى خلف البنك", options:["The hospital is behind the bank","Hospital behind bank","The behind hospital bank","Bank behind hospital"], correctAnswer:"The hospital is behind the bank", explanation:"وصف الموقع", xp:16 },
      { id:"plc-t1-2", type:"word_order", sentence:"Go straight then turn left", correctAnswer:"Go straight then turn left", explanation:"اتجاهات متتابعة", xp:16 },
      { id:"plc-t1-3", type:"listen_select", listenSentence:"The market is near here", options:["market","park","school","bank"], correctAnswer:"market", explanation:"The market is near = السوق قريب", xp:16 },
      { id:"plc-t1-4", type:"fill_blank", blankSentence:"The park is ___ to the school", blankOptions:["next","behind","turn"], correctAnswer:"next", explanation:"next to = بجانب", xp:16 },
      { id:"plc-t1-5", type:"matching", pairs:[{en:"next to",ar:"بجانب"},{en:"behind",ar:"خلف"},{en:"turn right",ar:"انعطف يميناً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"near",ar:"قريب"},{en:"stop",ar:"توقّف"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"plc-t1-6", type:"translate", arabic:"انعطف يميناً عند المدرسة", options:["Turn right at the school","Right turn school","Turn school right","At school right turn"], correctAnswer:"Turn right at the school", explanation:"اتجاه عند مكان", xp:16 },
      { id:"plc-t1-7", type:"word_order", sentence:"The bank is behind the market", correctAnswer:"The bank is behind the market", explanation:"البنك خلف السوق", xp:16 },
    ],
    t2: [
      { id:"plc-t2-1", type:"word_order", sentence:"The school is between the park and the bank", correctAnswer:"The school is between the park and the bank", explanation:"وصف مركّب", xp:18 },
      { id:"plc-t2-2", type:"translate", arabic:"اذهب مستقيماً وانعطف يساراً عند المستشفى", options:["Go straight and turn left at the hospital","Straight go left turn hospital","Go and turn straight left hospital","Turn go straight left hospital"], correctAnswer:"Go straight and turn left at the hospital", explanation:"اتجاهات مع أماكن", xp:18 },
      { id:"plc-t2-3", type:"listen_select", listenSentence:"turn right at the bank", options:["right","left","straight","stop"], correctAnswer:"right", explanation:"turn right = انعطف يميناً", xp:18 },
      { id:"plc-t2-4", type:"fill_blank", blankSentence:"The market is ___ the school and the park", blankOptions:["between","behind","near"], correctAnswer:"between", explanation:"between = بين", xp:18 },
      { id:"plc-t2-5", type:"matching", pairs:[{en:"between",ar:"بين"},{en:"in front of",ar:"أمام"},{en:"turn left",ar:"انعطف يساراً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"near",ar:"قريب"},{en:"far",ar:"بعيد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"plc-t2-6", type:"translate", arabic:"الحديقة أمام البنك", options:["The park is in front of the bank","Park front bank","The front park bank","Bank in front park"], correctAnswer:"The park is in front of the bank", explanation:"وصف الموقع", xp:18 },
      { id:"plc-t2-7", type:"word_order", sentence:"Turn left then go straight to the park", correctAnswer:"Turn left then go straight to the park", explanation:"اتجاهات مركّبة", xp:18 },
    ],
    t3: [
      { id:"plc-t3-1", type:"word_order", sentence:"Go straight and turn right at the school then stop", correctAnswer:"Go straight and turn right at the school then stop", explanation:"اتجاهات كاملة شاملة", xp:22 },
      { id:"plc-t3-2", type:"translate", arabic:"المستشفى بين المدرسة والسوق وقريب من الحديقة", options:["The hospital is between the school and the market and near the park","Hospital between school market near park","The between hospital near park market","Hospital near between school park market"], correctAnswer:"The hospital is between the school and the market and near the park", explanation:"وصف مركّب شامل", xp:22 },
      { id:"plc-t3-3", type:"listen_select", listenSentence:"go straight then stop", options:["straight","left","right","turn"], correctAnswer:"straight", explanation:"go straight = اذهب مستقيماً", xp:20 },
      { id:"plc-t3-4", type:"fill_blank", blankSentence:"Turn left at the bank then go ___", blankOptions:["straight","turn","near"], correctAnswer:"straight", explanation:"go straight = اذهب مستقيماً", xp:22 },
      { id:"plc-t3-5", type:"matching", pairs:[{en:"school",ar:"مدرسة"},{en:"between",ar:"بين"},{en:"turn left",ar:"انعطف يساراً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"near",ar:"قريب"},{en:"stop",ar:"توقّف"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"plc-t3-6", type:"word_order", sentence:"Where is the market please", correctAnswer:"Where is the market please", explanation:"سؤال مهذب عن المكان", xp:22 },
      { id:"plc-t3-7", type:"translate", arabic:"انعطف يساراً عند الحديقة ثم اذهب مستقيماً إلى المدرسة", options:["Turn left at the park then go straight to the school","Left turn park go straight school","Turn go left park straight school","At park left turn straight go school"], correctAnswer:"Turn left at the park then go straight to the school", explanation:"اتجاهات كاملة 👑", xp:24 },
    ],
  },
};
