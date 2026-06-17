import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 6 — اطلب الطعام والمشروبات
//   درس 1: أسماء الأطعمة — rice, chicken, bread, salad, soup
//   درس 2: في المطعم — Can I have, I'd like, the bill, menu, order
//   درس 3: المشروبات والحلويات — cake, dessert, ice cream, coffee, juice
// ══════════════════════════════════════════════════════════════

export const unit6FoodBank: Record<string, TieredBank> = {

  // ── الدرس 1: أسماء الأطعمة ──
  "أسماء الأطعمة": {
    t0: [
      { id:"fo1-t0-1", type:"translate", arabic:"أرز", options:["rice","chicken","bread","soup"], correctAnswer:"rice", explanation:"rice = أرز 🍚", xp:10 },
      { id:"fo1-t0-2", type:"listen_select", listenSentence:"chicken", options:["chicken","rice","bread","salad"], correctAnswer:"chicken", explanation:"chicken = دجاج 🍗", xp:10 },
      { id:"fo1-t0-3", type:"translate", arabic:"خبز", options:["bread","rice","soup","salad"], correctAnswer:"bread", explanation:"bread = خبز 🍞", xp:10 },
      { id:"fo1-t0-4", type:"word_order", sentence:"I like rice and chicken", correctAnswer:"I like rice and chicken", explanation:"أحب الأرز والدجاج", xp:12 },
      { id:"fo1-t0-5", type:"listen_select", listenSentence:"the salad", options:["salad","soup","rice","bread"], correctAnswer:"salad", explanation:"salad = سلطة 🥗", xp:12 },
      { id:"fo1-t0-6", type:"translate", arabic:"شوربة", options:["soup","salad","rice","bread"], correctAnswer:"soup", explanation:"soup = شوربة 🍲", xp:10 },
      { id:"fo1-t0-7", type:"word_order", sentence:"This is good bread", correctAnswer:"This is good bread", explanation:"هذا خبز جيد", xp:12 },
      { id:"fo1-t0-8", type:"fill_blank", blankSentence:"I like ___ and chicken", blankOptions:["rice","very","the"], correctAnswer:"rice", explanation:"rice and chicken = أرز ودجاج", xp:12 },
      { id:"fo1-t0-9", type:"matching", pairs:[{en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"bread",ar:"خبز"},{en:"salad",ar:"سلطة"},{en:"soup",ar:"شوربة"},{en:"food",ar:"طعام"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الأطعمة", xp:15 },
    ],
    t1: [
      { id:"fo1-t1-1", type:"translate", arabic:"سلطة", options:["salad","soup","rice","bread"], correctAnswer:"salad", explanation:"salad = سلطة 🥗", xp:12 },
      { id:"fo1-t1-2", type:"word_order", sentence:"I want rice and salad", correctAnswer:"I want rice and salad", explanation:"أريد أرز وسلطة", xp:13 },
      { id:"fo1-t1-3", type:"listen_select", listenSentence:"I like chicken soup", options:["chicken","rice","bread","salad"], correctAnswer:"chicken", explanation:"chicken soup = شوربة دجاج", xp:12 },
      { id:"fo1-t1-4", type:"translate", arabic:"أحب الخبز", options:["I like bread","Bread like I","I bread like","Like bread I"], correctAnswer:"I like bread", explanation:"I like bread = أحب الخبز", xp:13 },
      { id:"fo1-t1-5", type:"fill_blank", blankSentence:"I want chicken and ___", blankOptions:["rice","very","the"], correctAnswer:"rice", explanation:"chicken and rice = دجاج وأرز", xp:13 },
      { id:"fo1-t1-6", type:"word_order", sentence:"The soup is very good", correctAnswer:"The soup is very good", explanation:"الشوربة لذيذة جداً", xp:13 },
      { id:"fo1-t1-7", type:"translate", arabic:"دجاج", options:["chicken","rice","bread","soup"], correctAnswer:"chicken", explanation:"chicken = دجاج", xp:12 },
      { id:"fo1-t1-8", type:"matching", pairs:[{en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"salad",ar:"سلطة"},{en:"soup",ar:"شوربة"},{en:"food",ar:"طعام"},{en:"meal",ar:"وجبة"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"fo1-t1-9", type:"fill_blank", blankSentence:"The ___ is very good", blankOptions:["soup","very","the"], correctAnswer:"soup", explanation:"The soup is good = الشوربة لذيذة", xp:13 },
    ],
    t2: [
      { id:"fo1-t2-1", type:"word_order", sentence:"I would like rice and chicken please", correctAnswer:"I would like rice and chicken please", explanation:"طلب مهذب", xp:14 },
      { id:"fo1-t2-2", type:"translate", arabic:"الدجاج والأرز لذيذان", options:["The chicken and rice are delicious","Chicken rice delicious","The delicious chicken rice","Rice chicken are delicious"], correctAnswer:"The chicken and rice are delicious", explanation:"وصف الطعام", xp:15 },
      { id:"fo1-t2-3", type:"listen_select", listenSentence:"The salad is fresh", options:["salad","soup","rice","bread"], correctAnswer:"salad", explanation:"fresh salad = سلطة طازجة", xp:14 },
      { id:"fo1-t2-4", type:"fill_blank", blankSentence:"I would like some ___ please", blankOptions:["soup","very","the"], correctAnswer:"soup", explanation:"some soup = بعض الشوربة", xp:15 },
      { id:"fo1-t2-5", type:"word_order", sentence:"The bread is fresh and warm", correctAnswer:"The bread is fresh and warm", explanation:"الخبز طازج ودافئ", xp:14 },
      { id:"fo1-t2-6", type:"translate", arabic:"أودّ بعض السلطة", options:["I would like some salad","I some salad like","Salad some I like","Like some I salad"], correctAnswer:"I would like some salad", explanation:"طلب السلطة", xp:15 },
      { id:"fo1-t2-7", type:"matching", pairs:[{en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"bread",ar:"خبز"},{en:"salad",ar:"سلطة"},{en:"delicious",ar:"لذيذ"},{en:"fresh",ar:"طازج"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"fo1-t2-8", type:"fill_blank", blankSentence:"The chicken is very ___", blankOptions:["delicious","the","is"], correctAnswer:"delicious", explanation:"delicious = لذيذ", xp:15 },
      { id:"fo1-t2-9", type:"listen_select", listenSentence:"The soup is hot", options:["soup","salad","rice","bread"], correctAnswer:"soup", explanation:"hot soup = شوربة ساخنة", xp:14 },
    ],
    t3: [
      { id:"fo1-t3-1", type:"word_order", sentence:"I would like rice chicken and salad please", correctAnswer:"I would like rice chicken and salad please", explanation:"طلب وجبة كاملة", xp:18 },
      { id:"fo1-t3-2", type:"translate", arabic:"الشوربة ساخنة والسلطة طازجة", options:["The soup is hot and the salad is fresh","Soup hot salad fresh","The hot soup fresh salad","Soup is hot fresh salad"], correctAnswer:"The soup is hot and the salad is fresh", explanation:"وصف بصفتين", xp:20 },
      { id:"fo1-t3-3", type:"listen_select", listenSentence:"The chicken is delicious", options:["chicken","rice","bread","soup"], correctAnswer:"chicken", explanation:"delicious = لذيذ", xp:18 },
      { id:"fo1-t3-4", type:"fill_blank", blankSentence:"The rice and chicken are ___", blankOptions:["delicious","the","very"], correctAnswer:"delicious", explanation:"delicious = لذيذ", xp:18 },
      { id:"fo1-t3-5", type:"matching", pairs:[{en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"bread",ar:"خبز"},{en:"salad",ar:"سلطة"},{en:"soup",ar:"شوربة"},{en:"delicious",ar:"لذيذ"}], correctAnswer:"matched", explanation:"رائع! راجعت الأطعمة", xp:18 },
      { id:"fo1-t3-6", type:"word_order", sentence:"I want some chicken soup", correctAnswer:"I want some chicken soup", explanation:"أريد شوربة دجاج", xp:18 },
      { id:"fo1-t3-7", type:"translate", arabic:"أودّ الأرز والدجاج، الطعام لذيذ", options:["I would like rice and chicken, the food is delicious","Rice chicken food delicious","I rice chicken delicious food","Like rice chicken food is delicious"], correctAnswer:"I would like rice and chicken, the food is delicious", explanation:"طلب ووصف", xp:20 },
    ],
  },

  // ── الدرس 2: في المطعم ──
  "في المطعم": {
    t0: [
      { id:"fo2-t0-1", type:"translate", arabic:"قائمة الطعام", options:["menu","bill","order","food"], correctAnswer:"menu", explanation:"menu = قائمة الطعام 📋", xp:10 },
      { id:"fo2-t0-2", type:"listen_select", listenSentence:"the bill please", options:["bill","menu","order","food"], correctAnswer:"bill", explanation:"the bill = الفاتورة 🧾", xp:10 },
      { id:"fo2-t0-3", type:"translate", arabic:"هل يمكنني الحصول على", options:["Can I have","I can have","Have I can","Can have I"], correctAnswer:"Can I have", explanation:"Can I have...? = هل يمكنني...؟", xp:10 },
      { id:"fo2-t0-4", type:"word_order", sentence:"Can I have the menu", correctAnswer:"Can I have the menu", explanation:"هل يمكنني الحصول على القائمة؟", xp:12 },
      { id:"fo2-t0-5", type:"listen_select", listenSentence:"I would like to order", options:["order","menu","bill","food"], correctAnswer:"order", explanation:"order = يطلب", xp:12 },
      { id:"fo2-t0-6", type:"translate", arabic:"أودّ", options:["I'd like","Like I'd","I like'd","D'like I"], correctAnswer:"I'd like", explanation:"I'd like = أودّ", xp:10 },
      { id:"fo2-t0-7", type:"word_order", sentence:"The bill please", correctAnswer:"The bill please", explanation:"الفاتورة من فضلك", xp:12 },
      { id:"fo2-t0-8", type:"fill_blank", blankSentence:"Can I have the ___", blankOptions:["menu","very","is"], correctAnswer:"menu", explanation:"the menu = القائمة", xp:12 },
      { id:"fo2-t0-9", type:"matching", pairs:[{en:"menu",ar:"قائمة"},{en:"the bill",ar:"الفاتورة"},{en:"order",ar:"طلب"},{en:"Can I have",ar:"هل يمكنني"},{en:"I'd like",ar:"أودّ"},{en:"waiter",ar:"نادل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fo2-t1-1", type:"word_order", sentence:"I would like to order now", correctAnswer:"I would like to order now", explanation:"أودّ أن أطلب الآن", xp:13 },
      { id:"fo2-t1-2", type:"translate", arabic:"هل يمكنني الحصول على القائمة؟", options:["Can I have the menu?","Can menu I have?","I can menu have?","Have I the menu can?"], correctAnswer:"Can I have the menu?", explanation:"طلب القائمة", xp:13 },
      { id:"fo2-t1-3", type:"listen_select", listenSentence:"Can I have the bill", options:["bill","menu","order","food"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:12 },
      { id:"fo2-t1-4", type:"fill_blank", blankSentence:"I'd like to ___ please", blankOptions:["order","menu","bill"], correctAnswer:"order", explanation:"to order = أن أطلب", xp:13 },
      { id:"fo2-t1-5", type:"word_order", sentence:"Can I have the bill please", correctAnswer:"Can I have the bill please", explanation:"الفاتورة من فضلك", xp:13 },
      { id:"fo2-t1-6", type:"translate", arabic:"أودّ أن أطلب", options:["I'd like to order","I order to like'd","Order I'd to like","To order I'd like"], correctAnswer:"I'd like to order", explanation:"طلب", xp:13 },
      { id:"fo2-t1-7", type:"matching", pairs:[{en:"menu",ar:"قائمة"},{en:"the bill",ar:"الفاتورة"},{en:"order",ar:"طلب"},{en:"waiter",ar:"نادل"},{en:"table",ar:"طاولة"},{en:"I'd like",ar:"أودّ"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"fo2-t1-8", type:"fill_blank", blankSentence:"Can I have the ___ please", blankOptions:["bill","very","is"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:13 },
      { id:"fo2-t1-9", type:"listen_select", listenSentence:"Here is the menu", options:["menu","bill","order","table"], correctAnswer:"menu", explanation:"the menu = القائمة", xp:12 },
    ],
    t2: [
      { id:"fo2-t2-1", type:"word_order", sentence:"Can I have the menu and order please", correctAnswer:"Can I have the menu and order please", explanation:"طلب القائمة والطلب", xp:14 },
      { id:"fo2-t2-2", type:"translate", arabic:"أودّ أن أطلب الدجاج والأرز", options:["I'd like to order chicken and rice","I order chicken rice","Order I'd chicken rice","To order chicken rice I'd"], correctAnswer:"I'd like to order chicken and rice", explanation:"طلب وجبة", xp:15 },
      { id:"fo2-t2-3", type:"listen_select", listenSentence:"Could I have the bill", options:["bill","menu","order","table"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:14 },
      { id:"fo2-t2-4", type:"fill_blank", blankSentence:"I'd like to order the ___", blankOptions:["chicken","very","is"], correctAnswer:"chicken", explanation:"order the chicken = أطلب الدجاج", xp:15 },
      { id:"fo2-t2-5", type:"word_order", sentence:"Could I have a table for two", correctAnswer:"Could I have a table for two", explanation:"طاولة لشخصين", xp:14 },
      { id:"fo2-t2-6", type:"translate", arabic:"هل يمكنني الحصول على الفاتورة؟", options:["Can I have the bill?","Can bill I have?","I have can bill?","Bill can I have?"], correctAnswer:"Can I have the bill?", explanation:"طلب الفاتورة", xp:15 },
      { id:"fo2-t2-7", type:"matching", pairs:[{en:"menu",ar:"قائمة"},{en:"the bill",ar:"الفاتورة"},{en:"order",ar:"طلب"},{en:"table",ar:"طاولة"},{en:"waiter",ar:"نادل"},{en:"I'd like",ar:"أودّ"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"fo2-t2-8", type:"fill_blank", blankSentence:"Could I have a ___ for two", blankOptions:["table","menu","bill"], correctAnswer:"table", explanation:"a table = طاولة", xp:15 },
      { id:"fo2-t2-9", type:"listen_select", listenSentence:"I would like to order", options:["order","menu","bill","table"], correctAnswer:"order", explanation:"order = يطلب", xp:14 },
    ],
    t3: [
      { id:"fo2-t3-1", type:"word_order", sentence:"Could I have the menu and a table for two please", correctAnswer:"Could I have the menu and a table for two please", explanation:"طلب مفصّل في المطعم", xp:18 },
      { id:"fo2-t3-2", type:"translate", arabic:"أودّ أن أطلب الدجاج والفاتورة بعد ذلك", options:["I'd like to order chicken and the bill after that","I order chicken bill after","Order chicken bill I'd after","To order chicken after bill"], correctAnswer:"I'd like to order chicken and the bill after that", explanation:"طلب مركّب", xp:20 },
      { id:"fo2-t3-3", type:"listen_select", listenSentence:"Can I have the menu please", options:["menu","bill","order","table"], correctAnswer:"menu", explanation:"the menu = القائمة", xp:18 },
      { id:"fo2-t3-4", type:"fill_blank", blankSentence:"Could I have the ___ after the meal", blankOptions:["bill","menu","order"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:18 },
      { id:"fo2-t3-5", type:"matching", pairs:[{en:"menu",ar:"قائمة"},{en:"the bill",ar:"الفاتورة"},{en:"order",ar:"طلب"},{en:"table",ar:"طاولة"},{en:"waiter",ar:"نادل"},{en:"I'd like",ar:"أودّ"}], correctAnswer:"matched", explanation:"رائع! راجعت جمل المطعم", xp:18 },
      { id:"fo2-t3-6", type:"word_order", sentence:"Can I have the bill please", correctAnswer:"Can I have the bill please", explanation:"الفاتورة من فضلك", xp:18 },
      { id:"fo2-t3-7", type:"translate", arabic:"أودّ قائمة الطعام وطاولة قرب النافذة", options:["I'd like the menu and a table near the window","I menu table window","Menu table near window I'd","Like menu window table I'd"], correctAnswer:"I'd like the menu and a table near the window", explanation:"طلب مفصّل", xp:20 },
    ],
  },

  // ── الدرس 3: المشروبات والحلويات ──
  "المشروبات والحلويات": {
    t0: [
      { id:"fo3-t0-1", type:"translate", arabic:"كيك", options:["cake","dessert","coffee","juice"], correctAnswer:"cake", explanation:"cake = كيك 🍰", xp:10 },
      { id:"fo3-t0-2", type:"listen_select", listenSentence:"ice cream", options:["ice cream","cake","coffee","juice"], correctAnswer:"ice cream", explanation:"ice cream = آيس كريم 🍦", xp:10 },
      { id:"fo3-t0-3", type:"translate", arabic:"حلوى", options:["dessert","cake","coffee","juice"], correctAnswer:"dessert", explanation:"dessert = حلوى 🍮", xp:10 },
      { id:"fo3-t0-4", type:"word_order", sentence:"I would like some cake", correctAnswer:"I would like some cake", explanation:"أودّ بعض الكيك", xp:12 },
      { id:"fo3-t0-5", type:"listen_select", listenSentence:"a cup of coffee", options:["coffee","juice","cake","dessert"], correctAnswer:"coffee", explanation:"coffee = قهوة ☕", xp:12 },
      { id:"fo3-t0-6", type:"translate", arabic:"عصير", options:["juice","coffee","cake","dessert"], correctAnswer:"juice", explanation:"juice = عصير 🧃", xp:10 },
      { id:"fo3-t0-7", type:"word_order", sentence:"The cake is sweet", correctAnswer:"The cake is sweet", explanation:"الكيك حلو", xp:12 },
      { id:"fo3-t0-8", type:"fill_blank", blankSentence:"I would like some ___", blankOptions:["cake","very","the"], correctAnswer:"cake", explanation:"some cake = بعض الكيك", xp:12 },
      { id:"fo3-t0-9", type:"matching", pairs:[{en:"cake",ar:"كيك"},{en:"dessert",ar:"حلوى"},{en:"ice cream",ar:"آيس كريم"},{en:"coffee",ar:"قهوة"},{en:"juice",ar:"عصير"},{en:"sweet",ar:"حلو"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"fo3-t1-1", type:"word_order", sentence:"I would like coffee and cake", correctAnswer:"I would like coffee and cake", explanation:"أودّ قهوة وكيك", xp:13 },
      { id:"fo3-t1-2", type:"translate", arabic:"الآيس كريم لذيذ", options:["The ice cream is delicious","Ice cream delicious is","The delicious ice cream","Ice cream is good delicious"], correctAnswer:"The ice cream is delicious", explanation:"وصف الحلوى", xp:13 },
      { id:"fo3-t1-3", type:"listen_select", listenSentence:"some juice please", options:["juice","coffee","cake","dessert"], correctAnswer:"juice", explanation:"some juice = بعض العصير", xp:12 },
      { id:"fo3-t1-4", type:"fill_blank", blankSentence:"I would like a ___ for dessert", blankOptions:["cake","very","is"], correctAnswer:"cake", explanation:"cake for dessert = كيك للحلوى", xp:13 },
      { id:"fo3-t1-5", type:"word_order", sentence:"The dessert is very sweet", correctAnswer:"The dessert is very sweet", explanation:"الحلوى حلوة جداً", xp:13 },
      { id:"fo3-t1-6", type:"translate", arabic:"أودّ بعض القهوة", options:["I'd like some coffee","I some coffee like","Coffee some I'd like","Like some coffee I'd"], correctAnswer:"I'd like some coffee", explanation:"طلب القهوة", xp:13 },
      { id:"fo3-t1-7", type:"matching", pairs:[{en:"cake",ar:"كيك"},{en:"dessert",ar:"حلوى"},{en:"coffee",ar:"قهوة"},{en:"juice",ar:"عصير"},{en:"sweet",ar:"حلو"},{en:"delicious",ar:"لذيذ"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"fo3-t1-8", type:"fill_blank", blankSentence:"The ice cream is very ___", blankOptions:["sweet","the","is"], correctAnswer:"sweet", explanation:"very sweet = حلو جداً", xp:13 },
      { id:"fo3-t1-9", type:"listen_select", listenSentence:"a piece of cake", options:["cake","juice","coffee","dessert"], correctAnswer:"cake", explanation:"a piece of cake = قطعة كيك", xp:12 },
    ],
    t2: [
      { id:"fo3-t2-1", type:"word_order", sentence:"I would like coffee and cake for dessert", correctAnswer:"I would like coffee and cake for dessert", explanation:"طلب الحلوى", xp:14 },
      { id:"fo3-t2-2", type:"translate", arabic:"الكيك حلو والقهوة ساخنة", options:["The cake is sweet and the coffee is hot","Cake sweet coffee hot","The sweet cake hot coffee","Cake is sweet hot coffee"], correctAnswer:"The cake is sweet and the coffee is hot", explanation:"وصف بصفتين", xp:15 },
      { id:"fo3-t2-3", type:"listen_select", listenSentence:"some ice cream please", options:["ice cream","cake","coffee","juice"], correctAnswer:"ice cream", explanation:"ice cream = آيس كريم", xp:14 },
      { id:"fo3-t2-4", type:"fill_blank", blankSentence:"I'd like a ___ of juice", blankOptions:["glass","cake","sweet"], correctAnswer:"glass", explanation:"a glass of juice = كأس عصير", xp:15 },
      { id:"fo3-t2-5", type:"word_order", sentence:"The dessert is sweet and delicious", correctAnswer:"The dessert is sweet and delicious", explanation:"الحلوى حلوة ولذيذة", xp:14 },
      { id:"fo3-t2-6", type:"translate", arabic:"أودّ آيس كريم للحلوى", options:["I'd like ice cream for dessert","I ice cream dessert","Ice cream I'd dessert","For dessert ice cream I'd"], correctAnswer:"I'd like ice cream for dessert", explanation:"طلب الحلوى", xp:15 },
      { id:"fo3-t2-7", type:"matching", pairs:[{en:"cake",ar:"كيك"},{en:"dessert",ar:"حلوى"},{en:"ice cream",ar:"آيس كريم"},{en:"coffee",ar:"قهوة"},{en:"sweet",ar:"حلو"},{en:"delicious",ar:"لذيذ"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"fo3-t2-8", type:"fill_blank", blankSentence:"I would like ___ for dessert", blankOptions:["cake","very","is"], correctAnswer:"cake", explanation:"cake for dessert = كيك للحلوى", xp:15 },
      { id:"fo3-t2-9", type:"listen_select", listenSentence:"The coffee is hot", options:["coffee","juice","cake","dessert"], correctAnswer:"coffee", explanation:"hot coffee = قهوة ساخنة", xp:14 },
    ],
    t3: [
      { id:"fo3-t3-1", type:"word_order", sentence:"I would like coffee cake and ice cream please", correctAnswer:"I would like coffee cake and ice cream please", explanation:"طلب حلويات متعددة", xp:18 },
      { id:"fo3-t3-2", type:"translate", arabic:"الكيك حلو والآيس كريم بارد", options:["The cake is sweet and the ice cream is cold","Cake sweet ice cream cold","The sweet cake cold ice cream","Cake is sweet cold ice cream"], correctAnswer:"The cake is sweet and the ice cream is cold", explanation:"وصف بصفتين", xp:20 },
      { id:"fo3-t3-3", type:"listen_select", listenSentence:"some cake for dessert", options:["cake","juice","coffee","ice cream"], correctAnswer:"cake", explanation:"cake for dessert = كيك للحلوى", xp:18 },
      { id:"fo3-t3-4", type:"fill_blank", blankSentence:"The dessert is sweet and ___", blankOptions:["delicious","the","very"], correctAnswer:"delicious", explanation:"delicious = لذيذ", xp:18 },
      { id:"fo3-t3-5", type:"matching", pairs:[{en:"cake",ar:"كيك"},{en:"dessert",ar:"حلوى"},{en:"ice cream",ar:"آيس كريم"},{en:"coffee",ar:"قهوة"},{en:"juice",ar:"عصير"},{en:"sweet",ar:"حلو"}], correctAnswer:"matched", explanation:"رائع! راجعت الحلويات", xp:18 },
      { id:"fo3-t3-6", type:"word_order", sentence:"I want some sweet dessert", correctAnswer:"I want some sweet dessert", explanation:"أريد حلوى حلوة", xp:18 },
      { id:"fo3-t3-7", type:"translate", arabic:"أودّ قهوة وكيك، الحلوى لذيذة جداً", options:["I'd like coffee and cake, the dessert is very delicious","Coffee cake dessert delicious","I coffee cake dessert very","Like coffee cake dessert is delicious"], correctAnswer:"I'd like coffee and cake, the dessert is very delicious", explanation:"طلب ووصف", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة ──
  "تحدي الوحدة": {
    t0: [
      { id:"foc-t0-1", type:"word_order", sentence:"Can I have the menu please", correctAnswer:"Can I have the menu please", explanation:"طلب القائمة", xp:15 },
      { id:"foc-t0-2", type:"translate", arabic:"أودّ الأرز والدجاج", options:["I'd like rice and chicken","I rice chicken","Rice chicken I'd","Like rice chicken I"], correctAnswer:"I'd like rice and chicken", explanation:"طلب وجبة", xp:15 },
      { id:"foc-t0-3", type:"listen_select", listenSentence:"the bill please", options:["bill","menu","cake","soup"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:15 },
      { id:"foc-t0-4", type:"fill_blank", blankSentence:"I would like some ___ for dessert", blankOptions:["cake","very","is"], correctAnswer:"cake", explanation:"cake for dessert = كيك للحلوى", xp:15 },
      { id:"foc-t0-5", type:"matching", pairs:[{en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"menu",ar:"قائمة"},{en:"cake",ar:"كيك"},{en:"the bill",ar:"الفاتورة"},{en:"order",ar:"طلب"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"foc-t0-6", type:"translate", arabic:"الشوربة لذيذة", options:["The soup is delicious","Soup delicious is","The delicious soup","Soup is good delicious"], correctAnswer:"The soup is delicious", explanation:"وصف الطعام", xp:15 },
      { id:"foc-t0-7", type:"word_order", sentence:"I would like some salad", correctAnswer:"I would like some salad", explanation:"طلب سلطة", xp:15 },
    ],
    t1: [
      { id:"foc-t1-1", type:"translate", arabic:"أودّ أن أطلب الدجاج والأرز", options:["I'd like to order chicken and rice","I order chicken rice","Order chicken rice I'd","To order chicken rice"], correctAnswer:"I'd like to order chicken and rice", explanation:"طلب وجبة", xp:16 },
      { id:"foc-t1-2", type:"word_order", sentence:"Can I have the bill please", correctAnswer:"Can I have the bill please", explanation:"طلب الفاتورة", xp:16 },
      { id:"foc-t1-3", type:"listen_select", listenSentence:"some ice cream please", options:["ice cream","cake","coffee","juice"], correctAnswer:"ice cream", explanation:"ice cream = آيس كريم", xp:16 },
      { id:"foc-t1-4", type:"fill_blank", blankSentence:"The chicken and rice are ___", blankOptions:["delicious","the","very"], correctAnswer:"delicious", explanation:"delicious = لذيذ", xp:16 },
      { id:"foc-t1-5", type:"matching", pairs:[{en:"cake",ar:"كيك"},{en:"dessert",ar:"حلوى"},{en:"menu",ar:"قائمة"},{en:"the bill",ar:"الفاتورة"},{en:"order",ar:"طلب"},{en:"delicious",ar:"لذيذ"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"foc-t1-6", type:"translate", arabic:"الكيك حلو والقهوة ساخنة", options:["The cake is sweet and the coffee is hot","Cake sweet coffee hot","The sweet cake hot coffee","Cake is sweet hot coffee"], correctAnswer:"The cake is sweet and the coffee is hot", explanation:"وصف بصفتين", xp:16 },
      { id:"foc-t1-7", type:"word_order", sentence:"I would like to order now", correctAnswer:"I would like to order now", explanation:"أودّ أن أطلب الآن", xp:16 },
    ],
    t2: [
      { id:"foc-t2-1", type:"word_order", sentence:"I would like to order chicken rice and salad", correctAnswer:"I would like to order chicken rice and salad", explanation:"طلب وجبة كاملة", xp:18 },
      { id:"foc-t2-2", type:"translate", arabic:"هل يمكنني الحصول على القائمة والطاولة؟", options:["Can I have the menu and a table?","Can menu table I?","I have menu table?","Menu table can I have?"], correctAnswer:"Can I have the menu and a table?", explanation:"طلب مركّب", xp:18 },
      { id:"foc-t2-3", type:"listen_select", listenSentence:"Could I have the bill", options:["bill","menu","cake","order"], correctAnswer:"bill", explanation:"the bill = الفاتورة", xp:18 },
      { id:"foc-t2-4", type:"fill_blank", blankSentence:"I'd like a ___ of juice", blankOptions:["glass","cake","sweet"], correctAnswer:"glass", explanation:"a glass of juice = كأس عصير", xp:18 },
      { id:"foc-t2-5", type:"matching", pairs:[{en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"cake",ar:"كيك"},{en:"the bill",ar:"الفاتورة"},{en:"menu",ar:"قائمة"},{en:"delicious",ar:"لذيذ"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"foc-t2-6", type:"translate", arabic:"الطعام لذيذ والحلوى حلوة", options:["The food is delicious and the dessert is sweet","Food delicious dessert sweet","The delicious food sweet dessert","Food is delicious sweet dessert"], correctAnswer:"The food is delicious and the dessert is sweet", explanation:"وصف بصفتين", xp:18 },
      { id:"foc-t2-7", type:"word_order", sentence:"Could I have a table for two", correctAnswer:"Could I have a table for two", explanation:"طاولة لشخصين", xp:18 },
    ],
    t3: [
      { id:"foc-t3-1", type:"word_order", sentence:"I would like to order chicken and rice with salad please", correctAnswer:"I would like to order chicken and rice with salad please", explanation:"طلب وجبة كاملة", xp:22 },
      { id:"foc-t3-2", type:"translate", arabic:"أودّ القائمة والدجاج والفاتورة بعد الوجبة", options:["I'd like the menu the chicken and the bill after the meal","Menu chicken bill meal","I menu chicken bill after","Like menu chicken after meal bill"], correctAnswer:"I'd like the menu the chicken and the bill after the meal", explanation:"طلب مركّب شامل", xp:22 },
      { id:"foc-t3-3", type:"listen_select", listenSentence:"Can I have the menu please", options:["menu","bill","cake","order"], correctAnswer:"menu", explanation:"the menu = القائمة", xp:20 },
      { id:"foc-t3-4", type:"fill_blank", blankSentence:"The food is delicious and the dessert is ___", blankOptions:["sweet","the","very"], correctAnswer:"sweet", explanation:"sweet = حلو", xp:22 },
      { id:"foc-t3-5", type:"matching", pairs:[{en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"menu",ar:"قائمة"},{en:"the bill",ar:"الفاتورة"},{en:"cake",ar:"كيك"},{en:"order",ar:"طلب"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"foc-t3-6", type:"word_order", sentence:"I would like coffee and cake for dessert", correctAnswer:"I would like coffee and cake for dessert", explanation:"طلب الحلوى", xp:22 },
      { id:"foc-t3-7", type:"translate", arabic:"أودّ أن أطلب الدجاج، والطعام لذيذ جداً", options:["I'd like to order chicken, and the food is very delicious","Order chicken food delicious","I chicken food very delicious","Like order chicken food is delicious"], correctAnswer:"I'd like to order chicken, and the food is very delicious", explanation:"طلب ووصف 👑", xp:24 },
    ],
  },
};
