import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 40: قدّم نصائح السلامة (الوحدة الأخيرة!)
//   درس 1: علامات السلامة — danger, warning, careful, stop
//   درس 2: قواعد السلامة — must, don't, always, never
//   درس 3: في حالات الطوارئ — emergency, call, help, fire
// ══════════════════════════════════════════════════════════════

export const unit40SafetyBank: Record<string, TieredBank> = {

  "علامات السلامة": {
    t0: [
      { id:"sf-pic-1", type:"picture_match", word:"danger", arabic:"خطر", pictureOptions:[{emoji:"⚠️",label:"danger"},{emoji:"🛑",label:"stop"},{emoji:"🚸",label:"careful"},{emoji:"🔥",label:"fire"}], correctAnswer:"danger", explanation:"خطر = danger ⚠️", xp:10 },
      { id:"sa1-t0-1", type:"translate", arabic:"خطر", options:["danger","warning","safe","careful"], correctAnswer:"danger", explanation:"danger = خطر ⚠️", xp:10 },
      { id:"sa1-t0-2", type:"listen_select", listenSentence:"warning", options:["warning","warming","walking","working"], correctAnswer:"warning", explanation:"warning = تحذير", xp:10 },
      { id:"sa1-t0-3", type:"translate", arabic:"قف/توقّف", options:["stop","go","wait","run"], correctAnswer:"stop", explanation:"stop = قف 🛑", xp:10 },
      { id:"sa1-t0-4", type:"word_order", sentence:"Be careful please", correctAnswer:"Be careful please", explanation:"كن حذراً من فضلك", xp:12 },
      { id:"sa1-t0-5", type:"fill_blank", blankSentence:"This area is ___", blankOptions:["dangerous","run","very"], correctAnswer:"dangerous", explanation:"dangerous = خطير", xp:12 },
      { id:"sa1-t0-6", type:"translate", arabic:"حذِر", options:["careful","careless","careful","carrying"], correctAnswer:"careful", explanation:"careful = حذِر", xp:10 },
      { id:"sa1-t0-7", type:"listen_select", listenSentence:"be careful", options:["careful","carful","careless","carefully"], correctAnswer:"careful", explanation:"be careful = كن حذراً", xp:12 },
      { id:"sa1-t0-8", type:"word_order", sentence:"Stop right now", correctAnswer:"Stop right now", explanation:"قف الآن", xp:12 },
      { id:"sa1-t0-9", type:"matching", pairs:[{en:"danger",ar:"خطر"},{en:"warning",ar:"تحذير"},{en:"stop",ar:"قف"},{en:"careful",ar:"حذِر"},{en:"safe",ar:"آمن"},{en:"caution",ar:"احتراس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sa1-t1-1", type:"translate", arabic:"آمن", options:["safe","danger","risky","careful"], correctAnswer:"safe", explanation:"safe = آمن", xp:12 },
      { id:"sa1-t1-2", type:"word_order", sentence:"Watch out for the car", correctAnswer:"Watch out for the car", explanation:"احذر السيارة", xp:14 },
      { id:"sa1-t1-3", type:"listen_select", listenSentence:"no entry", options:["entry","entree","enter","entrance"], correctAnswer:"entry", explanation:"no entry = ممنوع الدخول", xp:13 },
      { id:"sa1-t1-4", type:"translate", arabic:"احترس", options:["caution","careless","caring","catching"], correctAnswer:"caution", explanation:"caution = احتراس", xp:12 },
      { id:"sa1-t1-5", type:"fill_blank", blankSentence:"___ out, the floor is wet", blankOptions:["Watch","Run","Very"], correctAnswer:"Watch", explanation:"Watch out = احذر", xp:14 },
      { id:"sa1-t1-6", type:"word_order", sentence:"This sign means danger", correctAnswer:"This sign means danger", explanation:"هذه العلامة تعني خطراً", xp:14 },
      { id:"sa1-t1-7", type:"translate", arabic:"ممنوع", options:["forbidden","allowed","welcome","open"], correctAnswer:"forbidden", explanation:"forbidden = ممنوع", xp:13 },
      { id:"sa1-t1-8", type:"listen_select", listenSentence:"keep out", options:["out","ought","oat","aunt"], correctAnswer:"out", explanation:"keep out = ابقَ خارجاً", xp:13 },
      { id:"sa1-t1-9", type:"matching", pairs:[{en:"safe",ar:"آمن"},{en:"caution",ar:"احتراس"},{en:"forbidden",ar:"ممنوع"},{en:"watch out",ar:"احذر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sa1-t2-1", type:"word_order", sentence:"Be very careful when crossing the road", correctAnswer:"Be very careful when crossing the road", explanation:"كن حذراً جداً عند عبور الطريق", xp:16 },
      { id:"sa1-t2-2", type:"translate", arabic:"هذه المنطقة خطيرة جداً", options:["This area is very dangerous","This area is very danger","This areas is very dangerous","This area is very dangerously"], correctAnswer:"This area is very dangerous", explanation:"dangerous = خطير", xp:16 },
      { id:"sa1-t2-3", type:"fill_blank", blankSentence:"The sign says no ___ allowed", blankOptions:["entry","run","very"], correctAnswer:"entry", explanation:"no entry = ممنوع الدخول", xp:15 },
      { id:"sa1-t2-4", type:"word_order", sentence:"Always follow the safety instructions", correctAnswer:"Always follow the safety instructions", explanation:"اتبع تعليمات السلامة دائماً", xp:16 },
      { id:"sa1-t2-5", type:"translate", arabic:"احترس من الأرضية المبلّلة", options:["Be careful of the wet floor","Be careful of the wet floors","Be careful for the wet floor","Be careful of the wet floored"], correctAnswer:"Be careful of the wet floor", explanation:"wet floor = أرضية مبلّلة", xp:16 },
      { id:"sa1-t2-6", type:"listen_select", listenSentence:"high voltage", options:["voltage","village","village","voyage"], correctAnswer:"voltage", explanation:"high voltage = جهد عالٍ", xp:15 },
      { id:"sa1-t2-7", type:"word_order", sentence:"Keep away from the edge of the platform", correctAnswer:"Keep away from the edge of the platform", explanation:"ابتعد عن حافة الرصيف", xp:15 },
      { id:"sa1-t2-8", type:"fill_blank", blankSentence:"Please pay ___ to the warning signs", blankOptions:["attention","run","very"], correctAnswer:"attention", explanation:"pay attention = انتبه", xp:15 },
    ],
    t3: [],
  },

  "قواعد السلامة": {
    t0: [
      { id:"sa2-t0-1", type:"translate", arabic:"يجب أن", options:["must","may","might","can"], correctAnswer:"must", explanation:"must = يجب أن", xp:10 },
      { id:"sa2-t0-2", type:"word_order", sentence:"You must wear a helmet", correctAnswer:"You must wear a helmet", explanation:"يجب أن ترتدي خوذة", xp:12 },
      { id:"sa2-t0-3", type:"listen_select", listenSentence:"don't touch", options:["touch","teach","torch","tough"], correctAnswer:"touch", explanation:"don't touch = لا تلمس", xp:10 },
      { id:"sa2-t0-4", type:"translate", arabic:"لا تلمس", options:["don't touch","don't teach","do touch","don't watch"], correctAnswer:"don't touch", explanation:"don't touch = لا تلمس", xp:12 },
      { id:"sa2-t0-5", type:"fill_blank", blankSentence:"You ___ wear a seatbelt", blankOptions:["must","run","very"], correctAnswer:"must", explanation:"must = يجب أن", xp:12 },
      { id:"sa2-t0-6", type:"word_order", sentence:"Never play with fire", correctAnswer:"Never play with fire", explanation:"لا تلعب بالنار أبداً", xp:12 },
      { id:"sa2-t0-7", type:"listen_select", listenSentence:"always check", options:["always","also","already","almost"], correctAnswer:"always", explanation:"always check = تحقّق دائماً", xp:12 },
      { id:"sa2-t0-8", type:"translate", arabic:"لا تركض", options:["don't run","do run","don't ran","don't runs"], correctAnswer:"don't run", explanation:"don't run = لا تركض", xp:10 },
      { id:"sa2-t0-9", type:"matching", pairs:[{en:"must",ar:"يجب أن"},{en:"don't",ar:"لا تفعل"},{en:"always",ar:"دائماً"},{en:"never",ar:"أبداً"},{en:"should",ar:"ينبغي"},{en:"careful",ar:"حذِر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sa2-t1-1", type:"word_order", sentence:"You should always wear a seatbelt", correctAnswer:"You should always wear a seatbelt", explanation:"يجب أن ترتدي حزام الأمان دائماً", xp:14 },
      { id:"sa2-t1-2", type:"translate", arabic:"لا تستخدم الهاتف أثناء القيادة", options:["Don't use your phone while driving","Don't use your phone while drive","Don't uses your phone while driving","Do use your phone while driving"], correctAnswer:"Don't use your phone while driving", explanation:"while driving = أثناء القيادة", xp:14 },
      { id:"sa2-t1-3", type:"listen_select", listenSentence:"never leave it open", options:["leave","live","love","leaf"], correctAnswer:"leave", explanation:"never leave = لا تترك أبداً", xp:13 },
      { id:"sa2-t1-4", type:"fill_blank", blankSentence:"You must ___ keep this locked", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always = دائماً", xp:14 },
      { id:"sa2-t1-5", type:"word_order", sentence:"Don't leave children alone near water", correctAnswer:"Don't leave children alone near water", explanation:"لا تترك الأطفال وحدهم قرب الماء", xp:14 },
      { id:"sa2-t1-6", type:"translate", arabic:"يجب أن تطفئ النار قبل النوم", options:["You must put out the fire before sleeping","You must put out the fire before sleep","You must puts out the fire before sleeping","You must put out fire before sleeping"], correctAnswer:"You must put out the fire before sleeping", explanation:"put out the fire = أطفئ النار", xp:13 },
      { id:"sa2-t1-7", type:"listen_select", listenSentence:"keep medicine away", options:["away","awake","aware","always"], correctAnswer:"away", explanation:"keep away = أبعِد", xp:13 },
      { id:"sa2-t1-8", type:"word_order", sentence:"Always lock the door at night", correctAnswer:"Always lock the door at night", explanation:"أقفل الباب ليلاً دائماً", xp:14 },
      { id:"sa2-t1-9", type:"matching", pairs:[{en:"should",ar:"ينبغي"},{en:"must",ar:"يجب"},{en:"put out",ar:"يطفئ"},{en:"keep away",ar:"يُبعد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sa2-t2-1", type:"word_order", sentence:"You must always read the instructions before using it", correctAnswer:"You must always read the instructions before using it", explanation:"يجب قراءة التعليمات قبل الاستخدام", xp:16 },
      { id:"sa2-t2-2", type:"translate", arabic:"لا تترك الموقد مشتعلاً دون مراقبة", options:["Never leave the stove on unattended","Never leave the stove on unattend","Never leaves the stove on unattended","Never leave the stove on unattendeds"], correctAnswer:"Never leave the stove on unattended", explanation:"unattended = دون مراقبة", xp:16 },
      { id:"sa2-t2-3", type:"fill_blank", blankSentence:"You ___ never share your password", blankOptions:["should","run","very"], correctAnswer:"should", explanation:"should never = ينبغي ألا أبداً", xp:15 },
      { id:"sa2-t2-4", type:"word_order", sentence:"Keep all dangerous items out of reach", correctAnswer:"Keep all dangerous items out of reach", explanation:"أبعِد كل الأشياء الخطيرة عن المتناول", xp:16 },
      { id:"sa2-t2-5", type:"translate", arabic:"تأكّد دائماً من إغلاق الغاز", options:["Always make sure to turn off the gas","Always make sure to turns off the gas","Always makes sure to turn off the gas","Always make sure to turn off gas"], correctAnswer:"Always make sure to turn off the gas", explanation:"make sure = تأكّد", xp:16 },
      { id:"sa2-t2-6", type:"listen_select", listenSentence:"wear protective gear", options:["protective","protection","protected","protecting"], correctAnswer:"protective", explanation:"protective gear = معدّات واقية", xp:15 },
      { id:"sa2-t2-7", type:"word_order", sentence:"Do not block the emergency exit", correctAnswer:"Do not block the emergency exit", explanation:"لا تسدّ مخرج الطوارئ", xp:15 },
      { id:"sa2-t2-8", type:"fill_blank", blankSentence:"You must ___ follow the safety rules", blankOptions:["always","run","very"], correctAnswer:"always", explanation:"always follow = اتبع دائماً", xp:15 },
    ],
    t3: [],
  },

  "حالات الطوارئ": {
    t0: [
      { id:"sa3-t0-1", type:"translate", arabic:"طوارئ", options:["emergency","emerge","energy","engine"], correctAnswer:"emergency", explanation:"emergency = طوارئ 🚨", xp:10 },
      { id:"sa3-t0-2", type:"word_order", sentence:"Call for help", correctAnswer:"Call for help", explanation:"اطلب المساعدة", xp:12 },
      { id:"sa3-t0-3", type:"listen_select", listenSentence:"fire", options:["fire","fair","far","fear"], correctAnswer:"fire", explanation:"fire = حريق 🔥", xp:10 },
      { id:"sa3-t0-4", type:"translate", arabic:"حريق", options:["fire","water","smoke","heat"], correctAnswer:"fire", explanation:"fire = حريق", xp:10 },
      { id:"sa3-t0-5", type:"fill_blank", blankSentence:"Call the ___ now", blankOptions:["police","run","very"], correctAnswer:"police", explanation:"police = الشرطة 🚓", xp:12 },
      { id:"sa3-t0-6", type:"translate", arabic:"ساعدني!", options:["Help me!","Helps me!","Help I!","Help me"], correctAnswer:"Help me!", explanation:"Help me! = ساعدني!", xp:10 },
      { id:"sa3-t0-7", type:"listen_select", listenSentence:"ambulance", options:["ambulance","ambulant","ambition","ambush"], correctAnswer:"ambulance", explanation:"ambulance = إسعاف 🚑", xp:12 },
      { id:"sa3-t0-8", type:"word_order", sentence:"There is a fire", correctAnswer:"There is a fire", explanation:"يوجد حريق", xp:12 },
      { id:"sa3-t0-9", type:"matching", pairs:[{en:"emergency",ar:"طوارئ"},{en:"fire",ar:"حريق"},{en:"police",ar:"شرطة"},{en:"ambulance",ar:"إسعاف"},{en:"help",ar:"مساعدة"},{en:"danger",ar:"خطر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sa3-t1-1", type:"word_order", sentence:"Call an ambulance immediately", correctAnswer:"Call an ambulance immediately", explanation:"اتّصل بالإسعاف فوراً", xp:14 },
      { id:"sa3-t1-2", type:"translate", arabic:"هناك حالة طارئة", options:["There is an emergency","There is a emergency","There is an emergencies","There are an emergency"], correctAnswer:"There is an emergency", explanation:"an emergency = حالة طارئة", xp:14 },
      { id:"sa3-t1-3", type:"listen_select", listenSentence:"the exit is here", options:["exit","exist","extra","expert"], correctAnswer:"exit", explanation:"exit = مخرج", xp:13 },
      { id:"sa3-t1-4", type:"fill_blank", blankSentence:"Use the emergency ___", blankOptions:["exit","run","very"], correctAnswer:"exit", explanation:"emergency exit = مخرج الطوارئ", xp:14 },
      { id:"sa3-t1-5", type:"word_order", sentence:"Stay calm and walk slowly", correctAnswer:"Stay calm and walk slowly", explanation:"ابقَ هادئاً وامشِ ببطء", xp:14 },
      { id:"sa3-t1-6", type:"translate", arabic:"اخرج من المبنى فوراً", options:["Leave the building immediately","Leave the buildings immediately","Leaves the building immediately","Leave building immediately"], correctAnswer:"Leave the building immediately", explanation:"leave immediately = اخرج فوراً", xp:13 },
      { id:"sa3-t1-7", type:"listen_select", listenSentence:"stay calm", options:["calm","came","cam","claim"], correctAnswer:"calm", explanation:"stay calm = ابقَ هادئاً", xp:13 },
      { id:"sa3-t1-8", type:"word_order", sentence:"Where is the nearest hospital", correctAnswer:"Where is the nearest hospital", explanation:"أين أقرب مستشفى؟", xp:14 },
      { id:"sa3-t1-9", type:"matching", pairs:[{en:"exit",ar:"مخرج"},{en:"stay calm",ar:"ابقَ هادئاً"},{en:"immediately",ar:"فوراً"},{en:"hospital",ar:"مستشفى"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sa3-t2-1", type:"word_order", sentence:"In case of fire use the stairs not the elevator", correctAnswer:"In case of fire use the stairs not the elevator", explanation:"عند الحريق استخدم الدرج لا المصعد", xp:16 },
      { id:"sa3-t2-2", type:"translate", arabic:"اتّصل بالطوارئ على الرقم 911", options:["Call emergency services on 911","Call emergency service on 911","Calls emergency services on 911","Call emergency services in 911"], correctAnswer:"Call emergency services on 911", explanation:"emergency services = خدمات الطوارئ", xp:16 },
      { id:"sa3-t2-3", type:"fill_blank", blankSentence:"Stay calm and follow the ___ plan", blankOptions:["evacuation","run","very"], correctAnswer:"evacuation", explanation:"evacuation plan = خطة الإخلاء", xp:15 },
      { id:"sa3-t2-4", type:"word_order", sentence:"Help the injured person and call for help", correctAnswer:"Help the injured person and call for help", explanation:"ساعد المصاب واطلب المساعدة", xp:16 },
      { id:"sa3-t2-5", type:"translate", arabic:"تعلّم مكان طفّاية الحريق", options:["Learn where the fire extinguisher is","Learn where the fire extinguisher are","Learns where the fire extinguisher is","Learn where the fire extinguishers is"], correctAnswer:"Learn where the fire extinguisher is", explanation:"fire extinguisher = طفّاية الحريق", xp:16 },
      { id:"sa3-t2-6", type:"listen_select", listenSentence:"the first aid kit", options:["aid","aide","add","aim"], correctAnswer:"aid", explanation:"first aid = إسعافات أولية", xp:15 },
      { id:"sa3-t2-7", type:"word_order", sentence:"Keep emergency numbers near your phone", correctAnswer:"Keep emergency numbers near your phone", explanation:"احتفظ بأرقام الطوارئ قرب هاتفك", xp:15 },
      { id:"sa3-t2-8", type:"fill_blank", blankSentence:"Stay safe and look after each ___", blankOptions:["other","run","very"], correctAnswer:"other", explanation:"each other = بعضكم البعض", xp:15 },
    ],
    t3: [],
  },
};
