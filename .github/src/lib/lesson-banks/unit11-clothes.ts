import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 11: تسوّق لشراء الملابس
//   درس 1: أسماء الملابس — shirt, pants, dress, shoes, hat
//   درس 2: في متجر الملابس — size, color, price, try on, buy
//   درس 3: اطلب الملابس — I want, How much, too big, too small
// ══════════════════════════════════════════════════════════════

export const unit11ClothesBank: Record<string, TieredBank> = {

  // ── الدرس 1: أسماء الملابس ──
  "أسماء الملابس": {
    t0: [
      { id:"cl-pic-1", type:"picture_match", word:"shirt", arabic:"قميص", pictureOptions:[{emoji:"👕",label:"shirt"},{emoji:"👖",label:"pants"},{emoji:"👗",label:"dress"},{emoji:"👟",label:"shoes"}], correctAnswer:"shirt", explanation:"قميص = shirt 👕", xp:10 },
      { id:"cl-pic-2", type:"picture_match", word:"shoes", arabic:"حذاء", pictureOptions:[{emoji:"👟",label:"shoes"},{emoji:"🧢",label:"hat"},{emoji:"👕",label:"shirt"},{emoji:"👗",label:"dress"}], correctAnswer:"shoes", explanation:"حذاء = shoes 👟", xp:10 },
      { id:"cl1-t0-1", type:"translate", arabic:"قميص", options:["shirt","pants","dress","hat"], correctAnswer:"shirt", explanation:"shirt = قميص 👕", xp:10 },
      { id:"cl1-t0-2", type:"listen_select", listenSentence:"pants", options:["pants","shirt","shoes","hat"], correctAnswer:"pants", explanation:"pants = بنطال 👖", xp:10 },
      { id:"cl1-t0-3", type:"translate", arabic:"فستان", options:["dress","shoes","hat","shirt"], correctAnswer:"dress", explanation:"dress = فستان 👗", xp:10 },
      { id:"cl1-t0-4", type:"word_order", sentence:"This is a shirt", correctAnswer:"This is a shirt", explanation:"This is a shirt = هذا قميص", xp:12 },
      { id:"cl1-t0-5", type:"listen_select", listenSentence:"shoes", options:["shoes","hat","dress","pants"], correctAnswer:"shoes", explanation:"shoes = حذاء 👟", xp:12 },
      { id:"cl1-t0-6", type:"translate", arabic:"قبعة", options:["hat","shoes","pants","dress"], correctAnswer:"hat", explanation:"hat = قبعة 🧢", xp:10 },
      { id:"cl1-t0-7", type:"fill_blank", blankSentence:"I have a ___", blankOptions:["shirt","very","blue"], correctAnswer:"shirt", explanation:"a shirt = قميص", xp:12 },
      { id:"cl1-t0-8", type:"matching", pairs:[{en:"shirt",ar:"قميص"},{en:"pants",ar:"بنطال"},{en:"dress",ar:"فستان"},{en:"shoes",ar:"حذاء"},{en:"hat",ar:"قبعة"},{en:"coat",ar:"معطف"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الملابس", xp:15 },
    ],
    t1: [
      { id:"cl1-t1-1", type:"translate", arabic:"بنطال", options:["pants","shirt","hat","shoes"], correctAnswer:"pants", explanation:"pants = بنطال 👖", xp:12 },
      { id:"cl1-t1-2", type:"word_order", sentence:"I like this dress", correctAnswer:"I like this dress", explanation:"أحب هذا الفستان", xp:14 },
      { id:"cl1-t1-3", type:"listen_select", listenSentence:"a red hat", options:["hat","shoes","shirt","dress"], correctAnswer:"hat", explanation:"a red hat = قبعة حمراء", xp:13 },
      { id:"cl1-t1-4", type:"translate", arabic:"معطف", options:["coat","shirt","hat","socks"], correctAnswer:"coat", explanation:"coat = معطف 🧥", xp:12 },
      { id:"cl1-t1-5", type:"fill_blank", blankSentence:"She wears a ___", blankOptions:["dress","run","eat"], correctAnswer:"dress", explanation:"wears a dress = ترتدي فستاناً", xp:14 },
      { id:"cl1-t1-6", type:"word_order", sentence:"These shoes are nice", correctAnswer:"These shoes are nice", explanation:"هذا الحذاء جميل", xp:14 },
      { id:"cl1-t1-7", type:"translate", arabic:"جوارب", options:["socks","shoes","hat","coat"], correctAnswer:"socks", explanation:"socks = جوارب 🧦", xp:12 },
      { id:"cl1-t1-8", type:"listen_select", listenSentence:"my new coat", options:["coat","hat","dress","socks"], correctAnswer:"coat", explanation:"my new coat = معطفي الجديد", xp:13 },
      { id:"cl1-t1-9", type:"matching", pairs:[{en:"coat",ar:"معطف"},{en:"socks",ar:"جوارب"},{en:"shoes",ar:"حذاء"},{en:"hat",ar:"قبعة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cl1-t2-1", type:"word_order", sentence:"I want to buy a new shirt", correctAnswer:"I want to buy a new shirt", explanation:"أريد شراء قميص جديد", xp:16 },
      { id:"cl1-t2-2", type:"translate", arabic:"أحتاج حذاءً جديداً", options:["I need new shoes","I need new shoe","I needs new shoes","I need shoes new"], correctAnswer:"I need new shoes", explanation:"I need new shoes", xp:16 },
      { id:"cl1-t2-3", type:"fill_blank", blankSentence:"This coat is too ___", blankOptions:["big","run","blue"], correctAnswer:"big", explanation:"too big = كبير جداً", xp:15 },
      { id:"cl1-t2-4", type:"word_order", sentence:"She is wearing a blue dress", correctAnswer:"She is wearing a blue dress", explanation:"إنها ترتدي فستاناً أزرق", xp:16 },
      { id:"cl1-t2-5", type:"listen_select", listenSentence:"I like your shoes", options:["shoes","hat","coat","socks"], correctAnswer:"shoes", explanation:"I like your shoes = يعجبني حذاؤك", xp:15 },
      { id:"cl1-t2-6", type:"translate", arabic:"هذا القميص جميل", options:["This shirt is nice","This shirt nice","This is shirt nice","Shirt this is nice"], correctAnswer:"This shirt is nice", explanation:"This shirt is nice", xp:16 },
      { id:"cl1-t2-7", type:"word_order", sentence:"Where are my socks", correctAnswer:"Where are my socks", explanation:"أين جواربي؟", xp:15 },
      { id:"cl1-t2-8", type:"fill_blank", blankSentence:"I ___ a warm coat", blankOptions:["need","is","the"], correctAnswer:"need", explanation:"I need = أحتاج", xp:15 },
    ],
    t3: [],
  },

  // ── الدرس 2: في متجر الملابس ──
  "في متجر الملابس": {
    t0: [
      { id:"cl2-t0-1", type:"translate", arabic:"مقاس", options:["size","color","price","shop"], correctAnswer:"size", explanation:"size = مقاس", xp:10 },
      { id:"cl2-t0-2", type:"listen_select", listenSentence:"color", options:["color","size","price","buy"], correctAnswer:"color", explanation:"color = لون 🎨", xp:10 },
      { id:"cl2-t0-3", type:"translate", arabic:"سعر", options:["price","size","color","shop"], correctAnswer:"price", explanation:"price = سعر 💰", xp:10 },
      { id:"cl2-t0-4", type:"word_order", sentence:"What is the price", correctAnswer:"What is the price", explanation:"ما السعر؟", xp:12 },
      { id:"cl2-t0-5", type:"fill_blank", blankSentence:"What ___ do you want", blankOptions:["size","run","eat"], correctAnswer:"size", explanation:"What size = أي مقاس", xp:12 },
      { id:"cl2-t0-6", type:"translate", arabic:"يشتري", options:["buy","sell","wear","shop"], correctAnswer:"buy", explanation:"buy = يشتري", xp:10 },
      { id:"cl2-t0-7", type:"listen_select", listenSentence:"small size", options:["small","big","red","new"], correctAnswer:"small", explanation:"small size = مقاس صغير", xp:12 },
      { id:"cl2-t0-8", type:"word_order", sentence:"I want a small size", correctAnswer:"I want a small size", explanation:"أريد مقاساً صغيراً", xp:12 },
      { id:"cl2-t0-9", type:"matching", pairs:[{en:"size",ar:"مقاس"},{en:"color",ar:"لون"},{en:"price",ar:"سعر"},{en:"buy",ar:"يشتري"},{en:"shop",ar:"متجر"},{en:"sell",ar:"يبيع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cl2-t1-1", type:"translate", arabic:"كم سعره؟", options:["How much is it?","How many is it?","What much is it?","How much it is?"], correctAnswer:"How much is it?", explanation:"How much is it? = كم سعره؟", xp:14 },
      { id:"cl2-t1-2", type:"word_order", sentence:"Can I try this on", correctAnswer:"Can I try this on", explanation:"هل يمكنني تجربة هذا؟", xp:14 },
      { id:"cl2-t1-3", type:"listen_select", listenSentence:"a large size", options:["large","small","red","cheap"], correctAnswer:"large", explanation:"large size = مقاس كبير", xp:13 },
      { id:"cl2-t1-4", type:"translate", arabic:"رخيص", options:["cheap","expensive","big","small"], correctAnswer:"cheap", explanation:"cheap = رخيص", xp:12 },
      { id:"cl2-t1-5", type:"fill_blank", blankSentence:"This shirt is too ___", blankOptions:["expensive","run","the"], correctAnswer:"expensive", explanation:"too expensive = غالٍ جداً", xp:14 },
      { id:"cl2-t1-6", type:"word_order", sentence:"Do you have a bigger size", correctAnswer:"Do you have a bigger size", explanation:"هل لديك مقاس أكبر؟", xp:14 },
      { id:"cl2-t1-7", type:"translate", arabic:"غالٍ", options:["expensive","cheap","small","new"], correctAnswer:"expensive", explanation:"expensive = غالٍ", xp:12 },
      { id:"cl2-t1-8", type:"listen_select", listenSentence:"How much is this", options:["much","many","more","most"], correctAnswer:"much", explanation:"How much = كم", xp:13 },
      { id:"cl2-t1-9", type:"matching", pairs:[{en:"cheap",ar:"رخيص"},{en:"expensive",ar:"غالٍ"},{en:"large",ar:"كبير"},{en:"small",ar:"صغير"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cl2-t2-1", type:"word_order", sentence:"How much does this dress cost", correctAnswer:"How much does this dress cost", explanation:"كم يكلّف هذا الفستان؟", xp:16 },
      { id:"cl2-t2-2", type:"translate", arabic:"هل يمكنني تجربته؟", options:["Can I try it on?","Can I try it?","I can try it on?","Can try I it on?"], correctAnswer:"Can I try it on?", explanation:"Can I try it on?", xp:16 },
      { id:"cl2-t2-3", type:"fill_blank", blankSentence:"Do you have this in ___", blankOptions:["blue","run","very"], correctAnswer:"blue", explanation:"in blue = باللون الأزرق", xp:15 },
      { id:"cl2-t2-4", type:"word_order", sentence:"This is too expensive for me", correctAnswer:"This is too expensive for me", explanation:"هذا غالٍ جداً بالنسبة لي", xp:16 },
      { id:"cl2-t2-5", type:"translate", arabic:"أين غرفة القياس؟", options:["Where is the fitting room?","Where the fitting room?","Where is fitting room?","Where fitting room is?"], correctAnswer:"Where is the fitting room?", explanation:"غرفة القياس = fitting room", xp:16 },
      { id:"cl2-t2-6", type:"listen_select", listenSentence:"It is on sale", options:["sale","size","sell","small"], correctAnswer:"sale", explanation:"on sale = للبيع بتخفيض", xp:15 },
      { id:"cl2-t2-7", type:"word_order", sentence:"I will take this one", correctAnswer:"I will take this one", explanation:"سآخذ هذا", xp:15 },
      { id:"cl2-t2-8", type:"fill_blank", blankSentence:"Can I pay by ___", blankOptions:["card","run","big"], correctAnswer:"card", explanation:"pay by card = الدفع بالبطاقة", xp:15 },
    ],
    t3: [],
  },

  // ── الدرس 3: اطلب الملابس ──
  "اطلب الملابس": {
    t0: [
      { id:"cl3-t0-1", type:"translate", arabic:"أريد", options:["I want","I have","I am","I do"], correctAnswer:"I want", explanation:"I want = أريد", xp:10 },
      { id:"cl3-t0-2", type:"word_order", sentence:"I want a hat", correctAnswer:"I want a hat", explanation:"أريد قبعة", xp:12 },
      { id:"cl3-t0-3", type:"listen_select", listenSentence:"too big", options:["big","small","new","old"], correctAnswer:"big", explanation:"too big = كبير جداً", xp:10 },
      { id:"cl3-t0-4", type:"translate", arabic:"صغير جداً", options:["too small","too big","very new","so old"], correctAnswer:"too small", explanation:"too small = صغير جداً", xp:12 },
      { id:"cl3-t0-5", type:"fill_blank", blankSentence:"I want to ___ a shirt", blankOptions:["buy","is","the"], correctAnswer:"buy", explanation:"to buy = أن يشتري", xp:12 },
      { id:"cl3-t0-6", type:"word_order", sentence:"How much is this hat", correctAnswer:"How much is this hat", explanation:"كم سعر هذه القبعة؟", xp:12 },
      { id:"cl3-t0-7", type:"listen_select", listenSentence:"I like it", options:["like","want","have","need"], correctAnswer:"like", explanation:"I like it = يعجبني", xp:10 },
      { id:"cl3-t0-8", type:"translate", arabic:"أحتاج", options:["I need","I want","I like","I have"], correctAnswer:"I need", explanation:"I need = أحتاج", xp:10 },
      { id:"cl3-t0-9", type:"matching", pairs:[{en:"I want",ar:"أريد"},{en:"I need",ar:"أحتاج"},{en:"too big",ar:"كبير جداً"},{en:"too small",ar:"صغير جداً"},{en:"buy",ar:"يشتري"},{en:"price",ar:"سعر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"cl3-t1-1", type:"word_order", sentence:"Can I see that shirt", correctAnswer:"Can I see that shirt", explanation:"هل يمكنني رؤية ذلك القميص؟", xp:14 },
      { id:"cl3-t1-2", type:"translate", arabic:"هذا كبير جداً عليّ", options:["This is too big for me","This too big for me","This is big too for me","This is too big me"], correctAnswer:"This is too big for me", explanation:"too big for me", xp:14 },
      { id:"cl3-t1-3", type:"listen_select", listenSentence:"I will buy it", options:["buy","sell","try","wear"], correctAnswer:"buy", explanation:"I will buy it = سأشتريه", xp:13 },
      { id:"cl3-t1-4", type:"fill_blank", blankSentence:"Do you have a ___ color", blankOptions:["different","run","very"], correctAnswer:"different", explanation:"different color = لون مختلف", xp:14 },
      { id:"cl3-t1-5", type:"word_order", sentence:"I need a smaller size", correctAnswer:"I need a smaller size", explanation:"أحتاج مقاساً أصغر", xp:14 },
      { id:"cl3-t1-6", type:"translate", arabic:"كم سعر هذا؟", options:["How much is this?","How many is this?","What much is this?","How is this much?"], correctAnswer:"How much is this?", explanation:"How much is this?", xp:14 },
      { id:"cl3-t1-7", type:"listen_select", listenSentence:"in a different color", options:["color","price","size","shop"], correctAnswer:"color", explanation:"different color = لون مختلف", xp:13 },
      { id:"cl3-t1-8", type:"word_order", sentence:"Thank you very much", correctAnswer:"Thank you very much", explanation:"شكراً جزيلاً", xp:13 },
      { id:"cl3-t1-9", type:"matching", pairs:[{en:"smaller",ar:"أصغر"},{en:"bigger",ar:"أكبر"},{en:"different",ar:"مختلف"},{en:"same",ar:"نفس"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"cl3-t2-1", type:"word_order", sentence:"Can I try this dress in blue", correctAnswer:"Can I try this dress in blue", explanation:"هل أجرّب هذا الفستان بالأزرق؟", xp:16 },
      { id:"cl3-t2-2", type:"translate", arabic:"هل يمكنك مساعدتي؟", options:["Can you help me?","Can you help I?","You can help me?","Can help you me?"], correctAnswer:"Can you help me?", explanation:"Can you help me?", xp:16 },
      { id:"cl3-t2-3", type:"fill_blank", blankSentence:"I am looking ___ a coat", blankOptions:["for","run","the"], correctAnswer:"for", explanation:"looking for = أبحث عن", xp:15 },
      { id:"cl3-t2-4", type:"word_order", sentence:"This size is perfect for me", correctAnswer:"This size is perfect for me", explanation:"هذا المقاس مثالي لي", xp:16 },
      { id:"cl3-t2-5", type:"translate", arabic:"سآخذ هذا من فضلك", options:["I will take this please","I take this please","I will this take please","Take I will this please"], correctAnswer:"I will take this please", explanation:"I will take this please", xp:16 },
      { id:"cl3-t2-6", type:"listen_select", listenSentence:"It fits me well", options:["fits","sits","hits","fixs"], correctAnswer:"fits", explanation:"It fits me = إنه يناسبني", xp:15 },
      { id:"cl3-t2-7", type:"word_order", sentence:"How much are these shoes", correctAnswer:"How much are these shoes", explanation:"كم سعر هذا الحذاء؟", xp:15 },
      { id:"cl3-t2-8", type:"fill_blank", blankSentence:"I am ___ for a gift", blankOptions:["looking","run","very"], correctAnswer:"looking", explanation:"looking for = أبحث عن", xp:15 },
    ],
    t3: [],
  },
};
