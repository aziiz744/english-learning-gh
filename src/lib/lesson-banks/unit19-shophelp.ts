import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 19: اطلب المساعدة أثناء التسوق
//   درس 1: كلمات التسوق — store, aisle, cashier, cart, find
//   درس 2: اسأل عن المنتجات — Where can I find, Do you have, looking for
//   درس 3: الدفع والمساعدة — How much, cash or card, receipt
// ══════════════════════════════════════════════════════════════

export const unit19ShopHelpBank: Record<string, TieredBank> = {

  "كلمات التسوق": {
    t0: [
      { id:"sh-pic-1", type:"picture_match", word:"cart", arabic:"عربة تسوق", pictureOptions:[{emoji:"🛒",label:"cart"},{emoji:"🏪",label:"store"},{emoji:"💳",label:"card"},{emoji:"🧾",label:"receipt"}], correctAnswer:"cart", explanation:"عربة تسوق = cart 🛒", xp:10 },
      { id:"sh1-t0-1", type:"translate", arabic:"متجر", options:["store","cart","cashier","aisle"], correctAnswer:"store", explanation:"store = متجر 🏪", xp:10 },
      { id:"sh1-t0-2", type:"listen_select", listenSentence:"cart", options:["cart","card","cash","cat"], correctAnswer:"cart", explanation:"cart = عربة تسوق 🛒", xp:10 },
      { id:"sh1-t0-3", type:"translate", arabic:"أمين الصندوق", options:["cashier","customer","manager","seller"], correctAnswer:"cashier", explanation:"cashier = أمين الصندوق", xp:10 },
      { id:"sh1-t0-4", type:"word_order", sentence:"I need a cart", correctAnswer:"I need a cart", explanation:"أحتاج عربة", xp:12 },
      { id:"sh1-t0-5", type:"fill_blank", blankSentence:"The ___ is open", blankOptions:["store","run","very"], correctAnswer:"store", explanation:"the store = المتجر", xp:12 },
      { id:"sh1-t0-6", type:"translate", arabic:"ممرّ", options:["aisle","store","cart","cashier"], correctAnswer:"aisle", explanation:"aisle = ممرّ", xp:10 },
      { id:"sh1-t0-7", type:"listen_select", listenSentence:"the cashier", options:["cashier","customer","manager","seller"], correctAnswer:"cashier", explanation:"the cashier = أمين الصندوق", xp:12 },
      { id:"sh1-t0-8", type:"word_order", sentence:"Where is the store", correctAnswer:"Where is the store", explanation:"أين المتجر؟", xp:12 },
      { id:"sh1-t0-9", type:"matching", pairs:[{en:"store",ar:"متجر"},{en:"cart",ar:"عربة تسوق"},{en:"cashier",ar:"أمين الصندوق"},{en:"aisle",ar:"ممرّ"},{en:"customer",ar:"زبون"},{en:"find",ar:"يجد"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sh1-t1-1", type:"translate", arabic:"زبون", options:["customer","cashier","seller","manager"], correctAnswer:"customer", explanation:"customer = زبون", xp:12 },
      { id:"sh1-t1-2", type:"word_order", sentence:"I am looking for milk", correctAnswer:"I am looking for milk", explanation:"أبحث عن الحليب", xp:14 },
      { id:"sh1-t1-3", type:"listen_select", listenSentence:"in aisle five", options:["aisle","store","cart","cashier"], correctAnswer:"aisle", explanation:"in aisle five = في الممرّ الخامس", xp:13 },
      { id:"sh1-t1-4", type:"translate", arabic:"يجد", options:["find","look","search","get"], correctAnswer:"find", explanation:"find = يجد", xp:12 },
      { id:"sh1-t1-5", type:"fill_blank", blankSentence:"I can't ___ the bread", blankOptions:["find","run","very"], correctAnswer:"find", explanation:"can't find = لا أجد", xp:14 },
      { id:"sh1-t1-6", type:"word_order", sentence:"The shop closes at nine", correctAnswer:"The shop closes at nine", explanation:"المتجر يغلق في التاسعة", xp:14 },
      { id:"sh1-t1-7", type:"translate", arabic:"رفّ", options:["shelf","aisle","cart","store"], correctAnswer:"shelf", explanation:"shelf = رفّ", xp:12 },
      { id:"sh1-t1-8", type:"listen_select", listenSentence:"on the shelf", options:["shelf","aisle","cart","store"], correctAnswer:"shelf", explanation:"on the shelf = على الرفّ", xp:13 },
      { id:"sh1-t1-9", type:"matching", pairs:[{en:"customer",ar:"زبون"},{en:"find",ar:"يجد"},{en:"shelf",ar:"رفّ"},{en:"aisle",ar:"ممرّ"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sh1-t2-1", type:"word_order", sentence:"I am looking for the bread section", correctAnswer:"I am looking for the bread section", explanation:"أبحث عن قسم الخبز", xp:16 },
      { id:"sh1-t2-2", type:"translate", arabic:"المتجر مزدحم اليوم", options:["The store is crowded today","The store crowded today","The store is crowd today","The store is crowded day"], correctAnswer:"The store is crowded today", explanation:"crowded = مزدحم", xp:16 },
      { id:"sh1-t2-3", type:"fill_blank", blankSentence:"The fruits are in ___ three", blankOptions:["aisle","run","very"], correctAnswer:"aisle", explanation:"aisle three = الممرّ الثالث", xp:15 },
      { id:"sh1-t2-4", type:"word_order", sentence:"Excuse me where is the milk", correctAnswer:"Excuse me where is the milk", explanation:"عفواً، أين الحليب؟", xp:16 },
      { id:"sh1-t2-5", type:"translate", arabic:"أحتاج عربة تسوق كبيرة", options:["I need a big cart","I need big cart","I need a big carts","I needs a big cart"], correctAnswer:"I need a big cart", explanation:"a big cart = عربة كبيرة", xp:16 },
      { id:"sh1-t2-6", type:"listen_select", listenSentence:"at the checkout", options:["checkout","check","cheque","chicken"], correctAnswer:"checkout", explanation:"checkout = الكاشير", xp:15 },
      { id:"sh1-t2-7", type:"word_order", sentence:"The cashier is very friendly", correctAnswer:"The cashier is very friendly", explanation:"أمين الصندوق ودود جداً", xp:15 },
      { id:"sh1-t2-8", type:"fill_blank", blankSentence:"I will ask the ___ for help", blankOptions:["cashier","run","very"], correctAnswer:"cashier", explanation:"the cashier = أمين الصندوق", xp:15 },
    ],
    t3: [],
  },

  "اسأل عن المنتجات": {
    t0: [
      { id:"sh2-t0-1", type:"translate", arabic:"أين أجد؟", options:["Where can I find?","Where I find?","Where can I finds?","Where find I?"], correctAnswer:"Where can I find?", explanation:"Where can I find? = أين أجد؟", xp:10 },
      { id:"sh2-t0-2", type:"word_order", sentence:"Do you have apples", correctAnswer:"Do you have apples", explanation:"هل لديك تفاح؟", xp:12 },
      { id:"sh2-t0-3", type:"listen_select", listenSentence:"looking for", options:["looking","cooking","booking","hooking"], correctAnswer:"looking", explanation:"looking for = أبحث عن", xp:10 },
      { id:"sh2-t0-4", type:"translate", arabic:"هل لديك خبز؟", options:["Do you have bread?","Do you has bread?","You have bread?","Do have you bread?"], correctAnswer:"Do you have bread?", explanation:"Do you have? = هل لديك؟", xp:12 },
      { id:"sh2-t0-5", type:"fill_blank", blankSentence:"Where can I ___ the sugar", blankOptions:["find","run","very"], correctAnswer:"find", explanation:"where can I find = أين أجد", xp:12 },
      { id:"sh2-t0-6", type:"word_order", sentence:"I am looking for rice", correctAnswer:"I am looking for rice", explanation:"أبحث عن الأرز", xp:12 },
      { id:"sh2-t0-7", type:"listen_select", listenSentence:"do you have", options:["have","has","had","having"], correctAnswer:"have", explanation:"do you have = هل لديك", xp:10 },
      { id:"sh2-t0-8", type:"translate", arabic:"أبحث عن", options:["looking for","look for","looking at","look at"], correctAnswer:"looking for", explanation:"looking for = أبحث عن", xp:10 },
      { id:"sh2-t0-9", type:"matching", pairs:[{en:"Where can I find",ar:"أين أجد"},{en:"Do you have",ar:"هل لديك"},{en:"looking for",ar:"أبحث عن"},{en:"in stock",ar:"متوفّر"},{en:"sold out",ar:"نفد"},{en:"available",ar:"متاح"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sh2-t1-1", type:"word_order", sentence:"Where can I find the rice", correctAnswer:"Where can I find the rice", explanation:"أين أجد الأرز؟", xp:14 },
      { id:"sh2-t1-2", type:"translate", arabic:"هل هذا متوفّر؟", options:["Is this available?","Is this availables?","This is available?","Is available this?"], correctAnswer:"Is this available?", explanation:"available = متاح", xp:14 },
      { id:"sh2-t1-3", type:"listen_select", listenSentence:"it is sold out", options:["sold","cold","gold","told"], correctAnswer:"sold", explanation:"sold out = نفد", xp:13 },
      { id:"sh2-t1-4", type:"fill_blank", blankSentence:"Do you ___ this in a smaller size", blankOptions:["have","run","very"], correctAnswer:"have", explanation:"do you have = هل لديك", xp:14 },
      { id:"sh2-t1-5", type:"word_order", sentence:"I need help finding something", correctAnswer:"I need help finding something", explanation:"أحتاج مساعدة في إيجاد شيء", xp:14 },
      { id:"sh2-t1-6", type:"translate", arabic:"هل لديكم هذا بلون آخر؟", options:["Do you have this in another color?","Do you have this another color?","Do you has this in another color?","You have this in another color?"], correctAnswer:"Do you have this in another color?", explanation:"another color = لون آخر", xp:14 },
      { id:"sh2-t1-7", type:"listen_select", listenSentence:"it's in stock", options:["stock","stuck","stack","stick"], correctAnswer:"stock", explanation:"in stock = متوفّر", xp:13 },
      { id:"sh2-t1-8", type:"word_order", sentence:"Can you show me where it is", correctAnswer:"Can you show me where it is", explanation:"هل تريني أين هو؟", xp:14 },
      { id:"sh2-t1-9", type:"matching", pairs:[{en:"available",ar:"متاح"},{en:"sold out",ar:"نفد"},{en:"in stock",ar:"متوفّر"},{en:"show me",ar:"أرني"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sh2-t2-1", type:"word_order", sentence:"Excuse me can you help me find this", correctAnswer:"Excuse me can you help me find this", explanation:"عفواً، هل تساعدني في إيجاد هذا؟", xp:16 },
      { id:"sh2-t2-2", type:"translate", arabic:"هل لديكم المزيد في المخزن؟", options:["Do you have more in the back?","Do you have more in back?","Do you has more in the back?","You have more in the back?"], correctAnswer:"Do you have more in the back?", explanation:"in the back = في المخزن", xp:16 },
      { id:"sh2-t2-3", type:"fill_blank", blankSentence:"I'm ___ for a birthday gift", blankOptions:["looking","run","very"], correctAnswer:"looking", explanation:"looking for = أبحث عن", xp:15 },
      { id:"sh2-t2-4", type:"word_order", sentence:"Which aisle has the cleaning products", correctAnswer:"Which aisle has the cleaning products", explanation:"أي ممرّ به منتجات التنظيف؟", xp:16 },
      { id:"sh2-t2-5", type:"translate", arabic:"متى سيتوفّر مجدداً؟", options:["When will it be available again?","When it will be available again?","When will it available again?","When will be it available again?"], correctAnswer:"When will it be available again?", explanation:"available again = متوفّر مجدداً", xp:16 },
      { id:"sh2-t2-6", type:"listen_select", listenSentence:"let me check for you", options:["check","cheek","chick","chalk"], correctAnswer:"check", explanation:"let me check = دعني أتحقّق", xp:15 },
      { id:"sh2-t2-7", type:"word_order", sentence:"Thank you for your help", correctAnswer:"Thank you for your help", explanation:"شكراً على مساعدتك", xp:15 },
      { id:"sh2-t2-8", type:"fill_blank", blankSentence:"Is there a ___ one available", blankOptions:["cheaper","run","very"], correctAnswer:"cheaper", explanation:"cheaper = أرخص", xp:15 },
    ],
    t3: [],
  },

  "الدفع والمساعدة": {
    t0: [
      { id:"sh3-t0-1", type:"translate", arabic:"كم سعره؟", options:["How much is it?","How many is it?","How much it is?","How is it much?"], correctAnswer:"How much is it?", explanation:"How much? = كم؟", xp:10 },
      { id:"sh3-t0-2", type:"word_order", sentence:"Cash or card", correctAnswer:"Cash or card", explanation:"نقداً أم بطاقة؟", xp:12 },
      { id:"sh3-t0-3", type:"listen_select", listenSentence:"receipt", options:["receipt","recipe","receive","recent"], correctAnswer:"receipt", explanation:"receipt = إيصال 🧾", xp:10 },
      { id:"sh3-t0-4", type:"translate", arabic:"إيصال", options:["receipt","recipe","change","cash"], correctAnswer:"receipt", explanation:"receipt = إيصال", xp:10 },
      { id:"sh3-t0-5", type:"fill_blank", blankSentence:"Can I pay by ___", blankOptions:["card","run","very"], correctAnswer:"card", explanation:"pay by card = الدفع بالبطاقة", xp:12 },
      { id:"sh3-t0-6", type:"word_order", sentence:"Here is your change", correctAnswer:"Here is your change", explanation:"هذا الباقي", xp:12 },
      { id:"sh3-t0-7", type:"listen_select", listenSentence:"cash please", options:["cash","card","change","cart"], correctAnswer:"cash", explanation:"cash = نقد", xp:10 },
      { id:"sh3-t0-8", type:"translate", arabic:"نقد", options:["cash","card","change","coin"], correctAnswer:"cash", explanation:"cash = نقد", xp:10 },
      { id:"sh3-t0-9", type:"matching", pairs:[{en:"How much",ar:"كم"},{en:"cash",ar:"نقد"},{en:"card",ar:"بطاقة"},{en:"receipt",ar:"إيصال"},{en:"change",ar:"الباقي"},{en:"pay",ar:"يدفع"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"sh3-t1-1", type:"word_order", sentence:"Can I pay with my card", correctAnswer:"Can I pay with my card", explanation:"هل أدفع ببطاقتي؟", xp:14 },
      { id:"sh3-t1-2", type:"translate", arabic:"هل يمكنني الحصول على إيصال؟", options:["Can I have a receipt?","Can I have receipt?","Can I has a receipt?","Can have I a receipt?"], correctAnswer:"Can I have a receipt?", explanation:"a receipt = إيصال", xp:14 },
      { id:"sh3-t1-3", type:"listen_select", listenSentence:"your change", options:["change","chance","charge","chain"], correctAnswer:"change", explanation:"your change = الباقي", xp:13 },
      { id:"sh3-t1-4", type:"fill_blank", blankSentence:"How would you like to ___", blankOptions:["pay","run","very"], correctAnswer:"pay", explanation:"to pay = أن تدفع", xp:14 },
      { id:"sh3-t1-5", type:"word_order", sentence:"That will be ten dollars", correctAnswer:"That will be ten dollars", explanation:"سيكون ذلك عشرة دولارات", xp:14 },
      { id:"sh3-t1-6", type:"translate", arabic:"هل هناك خصم؟", options:["Is there a discount?","Is there discount?","Is there a discounts?","There is a discount?"], correctAnswer:"Is there a discount?", explanation:"discount = خصم", xp:14 },
      { id:"sh3-t1-7", type:"listen_select", listenSentence:"keep the change", options:["keep","kept","keeps","keeping"], correctAnswer:"keep", explanation:"keep the change = احتفظ بالباقي", xp:13 },
      { id:"sh3-t1-8", type:"word_order", sentence:"I will pay in cash", correctAnswer:"I will pay in cash", explanation:"سأدفع نقداً", xp:14 },
      { id:"sh3-t1-9", type:"matching", pairs:[{en:"discount",ar:"خصم"},{en:"pay",ar:"يدفع"},{en:"change",ar:"الباقي"},{en:"receipt",ar:"إيصال"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"sh3-t2-1", type:"word_order", sentence:"Could I have the receipt please", correctAnswer:"Could I have the receipt please", explanation:"هل أحصل على الإيصال؟", xp:16 },
      { id:"sh3-t2-2", type:"translate", arabic:"هل تقبلون البطاقات؟", options:["Do you accept cards?","Do you accept card?","Do you accepts cards?","You accept cards?"], correctAnswer:"Do you accept cards?", explanation:"accept cards = تقبل البطاقات", xp:16 },
      { id:"sh3-t2-3", type:"fill_blank", blankSentence:"There is a ___ on this item", blankOptions:["discount","run","very"], correctAnswer:"discount", explanation:"a discount = خصم", xp:15 },
      { id:"sh3-t2-4", type:"word_order", sentence:"I think there is a mistake in the bill", correctAnswer:"I think there is a mistake in the bill", explanation:"أظن أن هناك خطأ في الفاتورة", xp:16 },
      { id:"sh3-t2-5", type:"translate", arabic:"كم المجموع؟", options:["How much is the total?","How much the total?","How much is total?","How is the total much?"], correctAnswer:"How much is the total?", explanation:"the total = المجموع", xp:16 },
      { id:"sh3-t2-6", type:"listen_select", listenSentence:"have a nice day", options:["nice","rice","mice","dice"], correctAnswer:"nice", explanation:"have a nice day = يوماً سعيداً", xp:15 },
      { id:"sh3-t2-7", type:"word_order", sentence:"Thank you for shopping with us", correctAnswer:"Thank you for shopping with us", explanation:"شكراً للتسوّق معنا", xp:15 },
      { id:"sh3-t2-8", type:"fill_blank", blankSentence:"Would you like a ___", blankOptions:["bag","run","very"], correctAnswer:"bag", explanation:"a bag = كيس", xp:15 },
    ],
    t3: [],
  },
};
