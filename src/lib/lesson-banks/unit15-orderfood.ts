import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 15: اطلب الطعام والمشروبات (في المطعم - مستوى أعلى)
//   درس 1: قائمة الطعام — menu, order, waiter, bill
//   درس 2: اطلب بأدب — I would like, Can I have, please
//   درس 3: في المطعم — table for two, the bill, tip
// ══════════════════════════════════════════════════════════════

export const unit15OrderFoodBank: Record<string, TieredBank> = {

  "قائمة الطعام": {
    t0: [
      { id:"of-pic-1", type:"picture_match", word:"menu", arabic:"قائمة طعام", pictureOptions:[{emoji:"📋",label:"menu"},{emoji:"🧾",label:"bill"},{emoji:"🍽️",label:"plate"},{emoji:"🥤",label:"drink"}], correctAnswer:"menu", explanation:"قائمة طعام = menu 📋", xp:10 },
      { id:"of1-t0-1", type:"translate", arabic:"قائمة طعام", options:["menu","bill","order","waiter"], correctAnswer:"menu", explanation:"menu = قائمة طعام 📋", xp:10 },
      { id:"of1-t0-2", type:"listen_select", listenSentence:"waiter", options:["waiter","menu","bill","table"], correctAnswer:"waiter", explanation:"waiter = نادل", xp:10 },
      { id:"of1-t0-3", type:"translate", arabic:"فاتورة", options:["bill","menu","order","tip"], correctAnswer:"bill", explanation:"bill = فاتورة 🧾", xp:10 },
      { id:"of1-t0-4", type:"word_order", sentence:"Can I see the menu", correctAnswer:"Can I see the menu", explanation:"هل يمكنني رؤية القائمة؟", xp:12 },
      { id:"of1-t0-5", type:"fill_blank", blankSentence:"The ___ please", blankOptions:["menu","run","very"], correctAnswer:"menu", explanation:"the menu = القائمة", xp:12 },
      { id:"of1-t0-6", type:"translate", arabic:"يطلب", options:["order","eat","drink","pay"], correctAnswer:"order", explanation:"order = يطلب", xp:10 },
      { id:"of1-t0-7", type:"listen_select", listenSentence:"the bill", options:["bill","menu","order","table"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:12 },
      { id:"of1-t0-8", type:"word_order", sentence:"I want to order food", correctAnswer:"I want to order food", explanation:"أريد طلب طعام", xp:12 },
      { id:"of1-t0-9", type:"matching", pairs:[{en:"menu",ar:"قائمة طعام"},{en:"bill",ar:"فاتورة"},{en:"waiter",ar:"نادل"},{en:"order",ar:"يطلب"},{en:"table",ar:"طاولة"},{en:"tip",ar:"بقشيش"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"of1-t1-1", type:"translate", arabic:"نادل", options:["waiter","cook","menu","bill"], correctAnswer:"waiter", explanation:"waiter = نادل", xp:12 },
      { id:"of1-t1-2", type:"word_order", sentence:"Can we have the menu please", correctAnswer:"Can we have the menu please", explanation:"هل يمكننا الحصول على القائمة؟", xp:14 },
      { id:"of1-t1-3", type:"listen_select", listenSentence:"a table for two", options:["table","menu","bill","order"], correctAnswer:"table", explanation:"a table for two = طاولة لشخصين", xp:13 },
      { id:"of1-t1-4", type:"translate", arabic:"طبق", options:["dish","menu","bill","tip"], correctAnswer:"dish", explanation:"dish = طبق", xp:12 },
      { id:"of1-t1-5", type:"fill_blank", blankSentence:"Can I have the ___ please", blankOptions:["bill","run","very"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:14 },
      { id:"of1-t1-6", type:"word_order", sentence:"What do you recommend", correctAnswer:"What do you recommend", explanation:"بماذا تنصح؟", xp:14 },
      { id:"of1-t1-7", type:"translate", arabic:"طبق اليوم", options:["dish of the day","day of the dish","dish the day","of the day dish"], correctAnswer:"dish of the day", explanation:"dish of the day = طبق اليوم", xp:13 },
      { id:"of1-t1-8", type:"listen_select", listenSentence:"the waiter is coming", options:["waiter","menu","bill","cook"], correctAnswer:"waiter", explanation:"the waiter = النادل", xp:13 },
      { id:"of1-t1-9", type:"matching", pairs:[{en:"dish",ar:"طبق"},{en:"waiter",ar:"نادل"},{en:"recommend",ar:"ينصح"},{en:"tip",ar:"بقشيش"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"of1-t2-1", type:"word_order", sentence:"Could we have a table for four", correctAnswer:"Could we have a table for four", explanation:"هل يمكننا طاولة لأربعة؟", xp:16 },
      { id:"of1-t2-2", type:"translate", arabic:"ما الذي تنصح به؟", options:["What do you recommend?","What you recommend?","What do recommend you?","What do you recommends?"], correctAnswer:"What do you recommend?", explanation:"recommend = ينصح", xp:16 },
      { id:"of1-t2-3", type:"fill_blank", blankSentence:"We would like to ___ now", blankOptions:["order","run","very"], correctAnswer:"order", explanation:"to order = أن نطلب", xp:15 },
      { id:"of1-t2-4", type:"word_order", sentence:"The food here is delicious", correctAnswer:"The food here is delicious", explanation:"الطعام هنا لذيذ", xp:16 },
      { id:"of1-t2-5", type:"translate", arabic:"هل يمكننا الحصول على الفاتورة؟", options:["Can we have the bill?","Can we have bill?","We can have the bill?","Can have we the bill?"], correctAnswer:"Can we have the bill?", explanation:"the bill = الفاتورة", xp:16 },
      { id:"of1-t2-6", type:"listen_select", listenSentence:"is service included", options:["service","menu","bill","tip"], correctAnswer:"service", explanation:"service = الخدمة", xp:15 },
      { id:"of1-t2-7", type:"word_order", sentence:"Everything was very good", correctAnswer:"Everything was very good", explanation:"كان كل شيء جيداً جداً", xp:15 },
      { id:"of1-t2-8", type:"fill_blank", blankSentence:"Is the ___ included", blankOptions:["tip","run","very"], correctAnswer:"tip", explanation:"the tip = البقشيش", xp:15 },
    ],
    t3: [],
  },

  "اطلب بأدب": {
    t0: [
      { id:"of2-t0-1", type:"translate", arabic:"أودّ", options:["I would like","I want","I have","I do"], correctAnswer:"I would like", explanation:"I would like = أودّ", xp:10 },
      { id:"of2-t0-2", type:"word_order", sentence:"I would like a coffee", correctAnswer:"I would like a coffee", explanation:"أودّ قهوة", xp:12 },
      { id:"of2-t0-3", type:"listen_select", listenSentence:"can I have water", options:["have","has","had","having"], correctAnswer:"have", explanation:"Can I have = هل يمكنني الحصول على", xp:12 },
      { id:"of2-t0-4", type:"translate", arabic:"من فضلك", options:["please","sorry","thanks","welcome"], correctAnswer:"please", explanation:"please = من فضلك", xp:10 },
      { id:"of2-t0-5", type:"fill_blank", blankSentence:"I would ___ some tea", blankOptions:["like","run","very"], correctAnswer:"like", explanation:"would like = أودّ", xp:12 },
      { id:"of2-t0-6", type:"word_order", sentence:"Can I have the menu please", correctAnswer:"Can I have the menu please", explanation:"هل يمكنني القائمة من فضلك؟", xp:12 },
      { id:"of2-t0-7", type:"translate", arabic:"أودّ السلطة", options:["I would like the salad","I would like salad the","I like would the salad","I would the like salad"], correctAnswer:"I would like the salad", explanation:"would like = أودّ", xp:12 },
      { id:"of2-t0-8", type:"listen_select", listenSentence:"a glass of juice", options:["glass","cup","plate","bowl"], correctAnswer:"glass", explanation:"a glass of = كأس من", xp:12 },
      { id:"of2-t0-9", type:"matching", pairs:[{en:"I would like",ar:"أودّ"},{en:"Can I have",ar:"هل يمكنني"},{en:"please",ar:"من فضلك"},{en:"thank you",ar:"شكراً"},{en:"a glass",ar:"كأس"},{en:"a cup",ar:"فنجان"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"of2-t1-1", type:"word_order", sentence:"Can I have a cup of tea", correctAnswer:"Can I have a cup of tea", explanation:"هل يمكنني فنجان شاي؟", xp:14 },
      { id:"of2-t1-2", type:"translate", arabic:"أودّ بعض الماء من فضلك", options:["I would like some water please","I would like water some please","I like would some water please","I would some like water please"], correctAnswer:"I would like some water please", explanation:"would like some = أودّ بعض", xp:14 },
      { id:"of2-t1-3", type:"fill_blank", blankSentence:"Can I ___ the salt please", blankOptions:["have","run","very"], correctAnswer:"have", explanation:"Can I have = هل يمكنني", xp:14 },
      { id:"of2-t1-4", type:"listen_select", listenSentence:"with sugar please", options:["sugar","salt","milk","ice"], correctAnswer:"sugar", explanation:"with sugar = بالسكر", xp:13 },
      { id:"of2-t1-5", type:"word_order", sentence:"I would like to order now", correctAnswer:"I would like to order now", explanation:"أودّ أن أطلب الآن", xp:14 },
      { id:"of2-t1-6", type:"translate", arabic:"بدون سكر من فضلك", options:["No sugar please","No sugar the please","Not sugar please","No the sugar please"], correctAnswer:"No sugar please", explanation:"no sugar = بدون سكر", xp:14 },
      { id:"of2-t1-7", type:"fill_blank", blankSentence:"I'd like it ___ ice", blankOptions:["with","run","very"], correctAnswer:"with", explanation:"with ice = مع ثلج", xp:13 },
      { id:"of2-t1-8", type:"word_order", sentence:"Could I have the bill", correctAnswer:"Could I have the bill", explanation:"هل يمكنني الفاتورة؟", xp:14 },
      { id:"of2-t1-9", type:"matching", pairs:[{en:"with sugar",ar:"بالسكر"},{en:"no sugar",ar:"بدون سكر"},{en:"with ice",ar:"مع ثلج"},{en:"hot",ar:"ساخن"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"of2-t2-1", type:"word_order", sentence:"I would like a glass of orange juice", correctAnswer:"I would like a glass of orange juice", explanation:"أودّ كأس عصير برتقال", xp:16 },
      { id:"of2-t2-2", type:"translate", arabic:"هل يمكنني الحصول على القائمة من فضلك؟", options:["Could I have the menu please?","Could I have menu please?","Could have I the menu please?","Could I the menu have please?"], correctAnswer:"Could I have the menu please?", explanation:"Could I have = هل يمكنني", xp:16 },
      { id:"of2-t2-3", type:"fill_blank", blankSentence:"I would like my coffee ___ milk", blankOptions:["with","run","very"], correctAnswer:"with", explanation:"with milk = بالحليب", xp:15 },
      { id:"of2-t2-4", type:"word_order", sentence:"Can we order some appetizers first", correctAnswer:"Can we order some appetizers first", explanation:"هل نطلب بعض المقبّلات أولاً؟", xp:16 },
      { id:"of2-t2-5", type:"translate", arabic:"أودّ شيئاً خفيفاً", options:["I would like something light","I would like something lights","I like would something light","I would something like light"], correctAnswer:"I would like something light", explanation:"something light = شيء خفيف", xp:16 },
      { id:"of2-t2-6", type:"listen_select", listenSentence:"that sounds delicious", options:["delicious","expensive","spicy","cold"], correctAnswer:"delicious", explanation:"delicious = لذيذ", xp:15 },
      { id:"of2-t2-7", type:"word_order", sentence:"Thank you for the great service", correctAnswer:"Thank you for the great service", explanation:"شكراً على الخدمة الرائعة", xp:15 },
      { id:"of2-t2-8", type:"fill_blank", blankSentence:"I'd like the chicken, ___ please", blankOptions:["grilled","run","very"], correctAnswer:"grilled", explanation:"grilled = مشوي", xp:15 },
    ],
    t3: [],
  },

  "في المطعم": {
    t0: [
      { id:"of3-t0-1", type:"translate", arabic:"طاولة لشخصين", options:["table for two","table two for","for table two","two table for"], correctAnswer:"table for two", explanation:"table for two = طاولة لشخصين", xp:12 },
      { id:"of3-t0-2", type:"word_order", sentence:"The food is ready", correctAnswer:"The food is ready", explanation:"الطعام جاهز", xp:12 },
      { id:"of3-t0-3", type:"listen_select", listenSentence:"enjoy your meal", options:["meal","menu","table","bill"], correctAnswer:"meal", explanation:"enjoy your meal = بالهناء والشفاء", xp:12 },
      { id:"of3-t0-4", type:"translate", arabic:"بقشيش", options:["tip","bill","menu","order"], correctAnswer:"tip", explanation:"tip = بقشيش", xp:10 },
      { id:"of3-t0-5", type:"fill_blank", blankSentence:"A table ___ two please", blankOptions:["for","run","very"], correctAnswer:"for", explanation:"table for two = طاولة لشخصين", xp:12 },
      { id:"of3-t0-6", type:"word_order", sentence:"This is very delicious", correctAnswer:"This is very delicious", explanation:"هذا لذيذ جداً", xp:12 },
      { id:"of3-t0-7", type:"translate", arabic:"وجبة", options:["meal","menu","table","dish"], correctAnswer:"meal", explanation:"meal = وجبة", xp:10 },
      { id:"of3-t0-8", type:"listen_select", listenSentence:"the bill please", options:["bill","tip","meal","menu"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:12 },
      { id:"of3-t0-9", type:"matching", pairs:[{en:"meal",ar:"وجبة"},{en:"tip",ar:"بقشيش"},{en:"table for two",ar:"طاولة لشخصين"},{en:"ready",ar:"جاهز"},{en:"delicious",ar:"لذيذ"},{en:"enjoy",ar:"استمتع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"of3-t1-1", type:"word_order", sentence:"Can we have a table by the window", correctAnswer:"Can we have a table by the window", explanation:"هل يمكننا طاولة قرب النافذة؟", xp:14 },
      { id:"of3-t1-2", type:"translate", arabic:"الفاتورة من فضلك", options:["The bill please","Bill the please","Please the bill","The please bill"], correctAnswer:"The bill please", explanation:"the bill = الفاتورة", xp:14 },
      { id:"of3-t1-3", type:"fill_blank", blankSentence:"Enjoy your ___", blankOptions:["meal","run","very"], correctAnswer:"meal", explanation:"enjoy your meal = بالهناء", xp:14 },
      { id:"of3-t1-4", type:"listen_select", listenSentence:"keep the change", options:["change","menu","table","tip"], correctAnswer:"change", explanation:"keep the change = احتفظ بالباقي", xp:13 },
      { id:"of3-t1-5", type:"word_order", sentence:"The service was excellent", correctAnswer:"The service was excellent", explanation:"كانت الخدمة ممتازة", xp:14 },
      { id:"of3-t1-6", type:"translate", arabic:"كانت الوجبة لذيذة", options:["The meal was delicious","The meal delicious was","Was the meal delicious","The delicious meal was"], correctAnswer:"The meal was delicious", explanation:"the meal was = كانت الوجبة", xp:14 },
      { id:"of3-t1-7", type:"fill_blank", blankSentence:"Let's leave a ___", blankOptions:["tip","run","very"], correctAnswer:"tip", explanation:"leave a tip = نترك بقشيشاً", xp:13 },
      { id:"of3-t1-8", type:"word_order", sentence:"We had a wonderful time", correctAnswer:"We had a wonderful time", explanation:"قضينا وقتاً رائعاً", xp:14 },
      { id:"of3-t1-9", type:"matching", pairs:[{en:"change",ar:"الباقي"},{en:"service",ar:"الخدمة"},{en:"excellent",ar:"ممتاز"},{en:"meal",ar:"وجبة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"of3-t2-1", type:"word_order", sentence:"Could we have a table for four people", correctAnswer:"Could we have a table for four people", explanation:"هل يمكننا طاولة لأربعة أشخاص؟", xp:16 },
      { id:"of3-t2-2", type:"translate", arabic:"كل شيء كان رائعاً، شكراً", options:["Everything was great, thank you","Everything great was, thank you","Everything was great, you thank","Everything was great thank you"], correctAnswer:"Everything was great, thank you", explanation:"Everything was great", xp:16 },
      { id:"of3-t2-3", type:"fill_blank", blankSentence:"Is the tip ___ in the bill", blankOptions:["included","run","very"], correctAnswer:"included", explanation:"included = مشمول", xp:15 },
      { id:"of3-t2-4", type:"word_order", sentence:"We would like to pay separately", correctAnswer:"We would like to pay separately", explanation:"نودّ الدفع بشكل منفصل", xp:16 },
      { id:"of3-t2-5", type:"translate", arabic:"هل يمكننا الجلوس بالخارج؟", options:["Can we sit outside?","Can we sit outside the?","We can sit outside?","Can sit we outside?"], correctAnswer:"Can we sit outside?", explanation:"sit outside = الجلوس بالخارج", xp:16 },
      { id:"of3-t2-6", type:"listen_select", listenSentence:"that was a great meal", options:["meal","menu","table","tip"], correctAnswer:"meal", explanation:"a great meal = وجبة رائعة", xp:15 },
      { id:"of3-t2-7", type:"word_order", sentence:"We will definitely come back", correctAnswer:"We will definitely come back", explanation:"سنعود بالتأكيد", xp:15 },
      { id:"of3-t2-8", type:"fill_blank", blankSentence:"My compliments to the ___", blankOptions:["chef","run","very"], correctAnswer:"chef", explanation:"the chef = الطاهي", xp:15 },
    ],
    t3: [],
  },
};
