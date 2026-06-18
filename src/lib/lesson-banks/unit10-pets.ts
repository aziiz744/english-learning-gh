import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 10 — تحدث عن حيواناتك الأليفة
//   درس 1: أسماء الحيوانات — cat, dog, bird, fish, rabbit
//   درس 2: صف حيوانك — My cat is fluffy, He is playful
//   درس 3: العناية بالحيوان — feed, walk, play, groom, vet
// ══════════════════════════════════════════════════════════════

export const unit10PetsBank: Record<string, TieredBank> = {

  // ── الدرس 1: أسماء الحيوانات ──
  "أسماء الحيوانات": {
    t0: [
    { id:"pet-pic-1", type:"picture_match", word:"cat", arabic:"قطة", pictureOptions:[{emoji:"",label:"cat"},{emoji:"",label:"dog"},{emoji:"",label:"bird"},{emoji:"",label:"rabbit"}], correctAnswer:"cat", explanation:"قطة = cat", xp:10 },
    { id:"pet-pic-2", type:"picture_match", word:"dog", arabic:"كلب", pictureOptions:[{emoji:"",label:"dog"},{emoji:"",label:"cat"},{emoji:"",label:"fish"},{emoji:"",label:"bird"}], correctAnswer:"dog", explanation:"كلب = dog", xp:10 },
      { id:"pe1-t0-1", type:"translate", arabic:"قطة", options:["cat","dog","bird","fish"], correctAnswer:"cat", explanation:"cat = قطة 🐱", xp:10 },
      { id:"pe1-t0-2", type:"listen_select", listenSentence:"dog", options:["dog","cat","bird","fish"], correctAnswer:"dog", explanation:"dog = كلب 🐶", xp:10 },
      { id:"pe1-t0-3", type:"translate", arabic:"طائر", options:["bird","fish","cat","rabbit"], correctAnswer:"bird", explanation:"bird = طائر 🐦", xp:10 },
      { id:"pe1-t0-4", type:"word_order", sentence:"I have a cat", correctAnswer:"I have a cat", explanation:"لديّ قطة", xp:12 },
      { id:"pe1-t0-5", type:"listen_select", listenSentence:"a fish", options:["fish","bird","cat","dog"], correctAnswer:"fish", explanation:"fish = سمكة 🐟", xp:12 },
      { id:"pe1-t0-6", type:"translate", arabic:"أرنب", options:["rabbit","cat","dog","bird"], correctAnswer:"rabbit", explanation:"rabbit = أرنب 🐰", xp:10 },
      { id:"pe1-t0-7", type:"word_order", sentence:"I have a dog", correctAnswer:"I have a dog", explanation:"لديّ كلب", xp:12 },
      { id:"pe1-t0-8", type:"fill_blank", blankSentence:"I have a ___", blankOptions:["cat","very","the"], correctAnswer:"cat", explanation:"a cat = قطة", xp:12 },
      { id:"pe1-t0-9", type:"matching", pairs:[{en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"bird",ar:"طائر"},{en:"fish",ar:"سمكة"},{en:"rabbit",ar:"أرنب"},{en:"pet",ar:"حيوان أليف"}], correctAnswer:"matched", explanation:"أحسنت! طابقت الحيوانات", xp:15 },
    ],
    t1: [
      { id:"pe1-t1-1", type:"translate", arabic:"سمكة", options:["fish","bird","cat","dog"], correctAnswer:"fish", explanation:"fish = سمكة", xp:12 },
      { id:"pe1-t1-2", type:"word_order", sentence:"I have a cat and a dog", correctAnswer:"I have a cat and a dog", explanation:"لديّ قطة وكلب", xp:13 },
      { id:"pe1-t1-3", type:"listen_select", listenSentence:"I have a rabbit", options:["rabbit","cat","dog","bird"], correctAnswer:"rabbit", explanation:"rabbit = أرنب", xp:12 },
      { id:"pe1-t1-4", type:"translate", arabic:"لديّ طائر", options:["I have a bird","I bird have","Have I bird","Bird I have a"], correctAnswer:"I have a bird", explanation:"I have a bird = لديّ طائر", xp:13 },
      { id:"pe1-t1-5", type:"fill_blank", blankSentence:"I have a cat and a ___", blankOptions:["dog","very","the"], correctAnswer:"dog", explanation:"cat and dog = قطة وكلب", xp:13 },
      { id:"pe1-t1-6", type:"word_order", sentence:"My pet is a fish", correctAnswer:"My pet is a fish", explanation:"حيواني سمكة", xp:13 },
      { id:"pe1-t1-7", type:"translate", arabic:"كلب", options:["dog","cat","bird","fish"], correctAnswer:"dog", explanation:"dog = كلب", xp:12 },
      { id:"pe1-t1-8", type:"matching", pairs:[{en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"bird",ar:"طائر"},{en:"rabbit",ar:"أرنب"},{en:"pet",ar:"حيوان أليف"},{en:"fish",ar:"سمكة"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pe1-t1-9", type:"fill_blank", blankSentence:"My pet is a ___", blankOptions:["rabbit","very","the"], correctAnswer:"rabbit", explanation:"a rabbit = أرنب", xp:13 },
    ],
    t2: [
      { id:"pe1-t2-1", type:"word_order", sentence:"I have a small cat at home", correctAnswer:"I have a small cat at home", explanation:"لديّ قطة صغيرة في البيت", xp:14 },
      { id:"pe1-t2-2", type:"translate", arabic:"لديّ كلب وقطة في البيت", options:["I have a dog and a cat at home","I dog cat home","Have dog cat I home","I home dog cat have"], correctAnswer:"I have a dog and a cat at home", explanation:"حيوانان", xp:15 },
      { id:"pe1-t2-3", type:"listen_select", listenSentence:"My pet is a bird", options:["bird","cat","dog","fish"], correctAnswer:"bird", explanation:"My pet is a bird = حيواني طائر", xp:14 },
      { id:"pe1-t2-4", type:"fill_blank", blankSentence:"I have a small ___ at home", blankOptions:["cat","very","the"], correctAnswer:"cat", explanation:"small cat = قطة صغيرة", xp:15 },
      { id:"pe1-t2-5", type:"word_order", sentence:"My dog is big and friendly", correctAnswer:"My dog is big and friendly", explanation:"كلبي كبير وودود", xp:14 },
      { id:"pe1-t2-6", type:"translate", arabic:"حيواني الأليف أرنب صغير", options:["My pet is a small rabbit","My pet small rabbit","Pet my small rabbit is","My small pet rabbit is"], correctAnswer:"My pet is a small rabbit", explanation:"وصف الحيوان", xp:15 },
      { id:"pe1-t2-7", type:"matching", pairs:[{en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"bird",ar:"طائر"},{en:"fish",ar:"سمكة"},{en:"rabbit",ar:"أرنب"},{en:"small",ar:"صغير"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pe1-t2-8", type:"fill_blank", blankSentence:"My ___ is big and friendly", blankOptions:["dog","very","the"], correctAnswer:"dog", explanation:"My dog = كلبي", xp:15 },
      { id:"pe1-t2-9", type:"listen_select", listenSentence:"I have a small fish", options:["fish","bird","cat","dog"], correctAnswer:"fish", explanation:"fish = سمكة", xp:14 },
    ],
    t3: [
      { id:"pe1-t3-1", type:"word_order", sentence:"I have a cat a dog and a bird", correctAnswer:"I have a cat a dog and a bird", explanation:"ثلاثة حيوانات", xp:18 },
      { id:"pe1-t3-2", type:"translate", arabic:"لديّ قطة صغيرة وكلب كبير", options:["I have a small cat and a big dog","I small cat big dog","Have small cat big I dog","I cat small dog big have"], correctAnswer:"I have a small cat and a big dog", explanation:"حيوانان بصفتين", xp:20 },
      { id:"pe1-t3-3", type:"listen_select", listenSentence:"My pet is a rabbit", options:["rabbit","cat","dog","bird"], correctAnswer:"rabbit", explanation:"rabbit = أرنب", xp:18 },
      { id:"pe1-t3-4", type:"fill_blank", blankSentence:"I have a big ___ and a small cat", blankOptions:["dog","very","the"], correctAnswer:"dog", explanation:"big dog = كلب كبير", xp:18 },
      { id:"pe1-t3-5", type:"matching", pairs:[{en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"bird",ar:"طائر"},{en:"fish",ar:"سمكة"},{en:"rabbit",ar:"أرنب"},{en:"pet",ar:"حيوان أليف"}], correctAnswer:"matched", explanation:"رائع! راجعت الحيوانات", xp:18 },
      { id:"pe1-t3-6", type:"word_order", sentence:"My cat is small and cute", correctAnswer:"My cat is small and cute", explanation:"قطتي صغيرة ولطيفة", xp:18 },
      { id:"pe1-t3-7", type:"translate", arabic:"لديّ قطة وكلب وطائر في البيت", options:["I have a cat a dog and a bird at home","I cat dog bird home","Have cat dog bird I home","I home cat dog bird have"], correctAnswer:"I have a cat a dog and a bird at home", explanation:"ثلاثة حيوانات", xp:20 },
    ],
  },

  // ── الدرس 2: صف حيوانك ──
  "صف حيوانك": {
    t0: [
      { id:"pe2-t0-1", type:"translate", arabic:"كثيف الفرو", options:["fluffy","playful","cute","gentle"], correctAnswer:"fluffy", explanation:"fluffy = كثيف الفرو", xp:10 },
      { id:"pe2-t0-2", type:"listen_select", listenSentence:"playful", options:["playful","fluffy","cute","gentle"], correctAnswer:"playful", explanation:"playful = مرح", xp:10 },
      { id:"pe2-t0-3", type:"translate", arabic:"لطيف", options:["cute","playful","fluffy","big"], correctAnswer:"cute", explanation:"cute = لطيف", xp:10 },
      { id:"pe2-t0-4", type:"word_order", sentence:"My cat is fluffy", correctAnswer:"My cat is fluffy", explanation:"قطتي كثيفة الفرو", xp:12 },
      { id:"pe2-t0-5", type:"listen_select", listenSentence:"He is gentle", options:["gentle","playful","fluffy","cute"], correctAnswer:"gentle", explanation:"gentle = لطيف/وديع", xp:12 },
      { id:"pe2-t0-6", type:"translate", arabic:"مرح", options:["playful","cute","gentle","fluffy"], correctAnswer:"playful", explanation:"playful = مرح", xp:10 },
      { id:"pe2-t0-7", type:"word_order", sentence:"My dog is playful", correctAnswer:"My dog is playful", explanation:"كلبي مرح", xp:12 },
      { id:"pe2-t0-8", type:"fill_blank", blankSentence:"My cat is ___", blankOptions:["fluffy","very","the"], correctAnswer:"fluffy", explanation:"fluffy = كثيف الفرو", xp:12 },
      { id:"pe2-t0-9", type:"matching", pairs:[{en:"fluffy",ar:"كثيف الفرو"},{en:"playful",ar:"مرح"},{en:"cute",ar:"لطيف"},{en:"gentle",ar:"وديع"},{en:"small",ar:"صغير"},{en:"big",ar:"كبير"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pe2-t1-1", type:"word_order", sentence:"My cat is cute and playful", correctAnswer:"My cat is cute and playful", explanation:"قطتي لطيفة ومرحة", xp:13 },
      { id:"pe2-t1-2", type:"translate", arabic:"كلبي وديع", options:["My dog is gentle","My dog gentle is","Dog my gentle is","Gentle my dog is"], correctAnswer:"My dog is gentle", explanation:"وصف الحيوان", xp:13 },
      { id:"pe2-t1-3", type:"listen_select", listenSentence:"My rabbit is cute", options:["cute","playful","fluffy","gentle"], correctAnswer:"cute", explanation:"cute = لطيف", xp:12 },
      { id:"pe2-t1-4", type:"fill_blank", blankSentence:"My dog is ___ and friendly", blankOptions:["playful","very","the"], correctAnswer:"playful", explanation:"playful = مرح", xp:13 },
      { id:"pe2-t1-5", type:"word_order", sentence:"My bird is small and cute", correctAnswer:"My bird is small and cute", explanation:"طائري صغير ولطيف", xp:13 },
      { id:"pe2-t1-6", type:"translate", arabic:"قطتي كثيفة الفرو", options:["My cat is fluffy","My cat fluffy is","Cat my fluffy is","Fluffy my cat is"], correctAnswer:"My cat is fluffy", explanation:"وصف القطة", xp:13 },
      { id:"pe2-t1-7", type:"matching", pairs:[{en:"fluffy",ar:"كثيف الفرو"},{en:"playful",ar:"مرح"},{en:"cute",ar:"لطيف"},{en:"gentle",ar:"وديع"},{en:"friendly",ar:"ودود"},{en:"small",ar:"صغير"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pe2-t1-8", type:"fill_blank", blankSentence:"My cat is cute and ___", blankOptions:["playful","very","the"], correctAnswer:"playful", explanation:"cute and playful = لطيف ومرح", xp:13 },
      { id:"pe2-t1-9", type:"listen_select", listenSentence:"My dog is gentle", options:["gentle","playful","fluffy","cute"], correctAnswer:"gentle", explanation:"gentle = وديع", xp:12 },
    ],
    t2: [
      { id:"pe2-t2-1", type:"word_order", sentence:"My cat is fluffy cute and playful", correctAnswer:"My cat is fluffy cute and playful", explanation:"ثلاث صفات", xp:14 },
      { id:"pe2-t2-2", type:"translate", arabic:"كلبي كبير ووديع ولطيف", options:["My dog is big gentle and friendly","My dog big gentle friendly","Dog my big gentle friendly","My big dog gentle friendly"], correctAnswer:"My dog is big gentle and friendly", explanation:"ثلاث صفات", xp:15 },
      { id:"pe2-t2-3", type:"listen_select", listenSentence:"My cat is very playful", options:["playful","fluffy","cute","gentle"], correctAnswer:"playful", explanation:"very playful = مرح جداً", xp:14 },
      { id:"pe2-t2-4", type:"fill_blank", blankSentence:"My rabbit is cute and ___", blankOptions:["fluffy","very","the"], correctAnswer:"fluffy", explanation:"cute and fluffy = لطيف وكثيف الفرو", xp:15 },
      { id:"pe2-t2-5", type:"word_order", sentence:"My dog is friendly and gentle", correctAnswer:"My dog is friendly and gentle", explanation:"كلبي ودود ووديع", xp:14 },
      { id:"pe2-t2-6", type:"translate", arabic:"قطتي صغيرة ولطيفة ومرحة", options:["My cat is small cute and playful","My cat small cute playful","Cat my small cute playful","My small cat cute playful"], correctAnswer:"My cat is small cute and playful", explanation:"ثلاث صفات", xp:15 },
      { id:"pe2-t2-7", type:"matching", pairs:[{en:"fluffy",ar:"كثيف الفرو"},{en:"playful",ar:"مرح"},{en:"cute",ar:"لطيف"},{en:"gentle",ar:"وديع"},{en:"friendly",ar:"ودود"},{en:"big",ar:"كبير"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pe2-t2-8", type:"fill_blank", blankSentence:"My dog is friendly and ___", blankOptions:["gentle","very","the"], correctAnswer:"gentle", explanation:"friendly and gentle = ودود ووديع", xp:15 },
      { id:"pe2-t2-9", type:"listen_select", listenSentence:"My rabbit is fluffy", options:["fluffy","playful","cute","gentle"], correctAnswer:"fluffy", explanation:"fluffy = كثيف الفرو", xp:14 },
    ],
    t3: [
      { id:"pe2-t3-1", type:"word_order", sentence:"My cat is fluffy cute and very playful", correctAnswer:"My cat is fluffy cute and very playful", explanation:"ثلاث صفات", xp:18 },
      { id:"pe2-t3-2", type:"translate", arabic:"كلبي كبير ووديع وقطتي صغيرة ولطيفة", options:["My dog is big and gentle and my cat is small and cute","My dog big gentle cat small cute","Dog big gentle my cat small cute","My big dog gentle cat my small cute"], correctAnswer:"My dog is big and gentle and my cat is small and cute", explanation:"وصف حيوانين", xp:20 },
      { id:"pe2-t3-3", type:"listen_select", listenSentence:"My cat is gentle and cute", options:["gentle","playful","fluffy","big"], correctAnswer:"gentle", explanation:"gentle = وديع", xp:18 },
      { id:"pe2-t3-4", type:"fill_blank", blankSentence:"My dog is big gentle and ___", blankOptions:["friendly","very","the"], correctAnswer:"friendly", explanation:"friendly = ودود", xp:18 },
      { id:"pe2-t3-5", type:"matching", pairs:[{en:"fluffy",ar:"كثيف الفرو"},{en:"playful",ar:"مرح"},{en:"cute",ar:"لطيف"},{en:"gentle",ar:"وديع"},{en:"friendly",ar:"ودود"},{en:"small",ar:"صغير"}], correctAnswer:"matched", explanation:"رائع! راجعت صفات الحيوان", xp:18 },
      { id:"pe2-t3-6", type:"word_order", sentence:"My bird is small cute and gentle", correctAnswer:"My bird is small cute and gentle", explanation:"طائري صغير لطيف ووديع", xp:18 },
      { id:"pe2-t3-7", type:"translate", arabic:"قطتي كثيفة الفرو ومرحة ولطيفة جداً", options:["My cat is fluffy playful and very cute","My cat fluffy playful cute","Cat my fluffy playful very cute","My fluffy cat playful very cute"], correctAnswer:"My cat is fluffy playful and very cute", explanation:"ثلاث صفات", xp:20 },
    ],
  },

  // ── الدرس 3: العناية بالحيوان ──
  "العناية بالحيوان": {
    t0: [
      { id:"pe3-t0-1", type:"translate", arabic:"يُطعم", options:["feed","walk","play","groom"], correctAnswer:"feed", explanation:"feed = يُطعم 🍖", xp:10 },
      { id:"pe3-t0-2", type:"listen_select", listenSentence:"walk the dog", options:["walk","feed","play","groom"], correctAnswer:"walk", explanation:"walk = يمشّي 🚶", xp:10 },
      { id:"pe3-t0-3", type:"translate", arabic:"يلعب", options:["play","feed","walk","groom"], correctAnswer:"play", explanation:"play = يلعب ⚽", xp:10 },
      { id:"pe3-t0-4", type:"word_order", sentence:"I feed my cat", correctAnswer:"I feed my cat", explanation:"أُطعم قطتي", xp:12 },
      { id:"pe3-t0-5", type:"listen_select", listenSentence:"the vet", options:["vet","feed","walk","play"], correctAnswer:"vet", explanation:"vet = طبيب بيطري", xp:12 },
      { id:"pe3-t0-6", type:"translate", arabic:"طبيب بيطري", options:["vet","feed","walk","play"], correctAnswer:"vet", explanation:"vet = طبيب بيطري", xp:10 },
      { id:"pe3-t0-7", type:"word_order", sentence:"I walk my dog", correctAnswer:"I walk my dog", explanation:"أمشّي كلبي", xp:12 },
      { id:"pe3-t0-8", type:"fill_blank", blankSentence:"I ___ my cat every day", blankOptions:["feed","very","the"], correctAnswer:"feed", explanation:"I feed = أُطعم", xp:12 },
      { id:"pe3-t0-9", type:"matching", pairs:[{en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"play",ar:"يلعب"},{en:"groom",ar:"يعتني"},{en:"vet",ar:"طبيب بيطري"},{en:"pet",ar:"حيوان أليف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"pe3-t1-1", type:"word_order", sentence:"I feed my cat every morning", correctAnswer:"I feed my cat every morning", explanation:"أُطعم قطتي كل صباح", xp:13 },
      { id:"pe3-t1-2", type:"translate", arabic:"أمشّي كلبي كل يوم", options:["I walk my dog every day","I walk dog every day","Walk my dog I day","I dog walk every day"], correctAnswer:"I walk my dog every day", explanation:"العناية اليومية", xp:13 },
      { id:"pe3-t1-3", type:"listen_select", listenSentence:"I play with my cat", options:["play","feed","walk","groom"], correctAnswer:"play", explanation:"play with = يلعب مع", xp:12 },
      { id:"pe3-t1-4", type:"fill_blank", blankSentence:"I ___ my dog every day", blankOptions:["walk","feed","very"], correctAnswer:"walk", explanation:"I walk = أمشّي", xp:13 },
      { id:"pe3-t1-5", type:"word_order", sentence:"I take my cat to the vet", correctAnswer:"I take my cat to the vet", explanation:"آخذ قطتي للطبيب البيطري", xp:13 },
      { id:"pe3-t1-6", type:"translate", arabic:"يعتني", options:["groom","feed","walk","play"], correctAnswer:"groom", explanation:"groom = يعتني/ينظّف", xp:13 },
      { id:"pe3-t1-7", type:"matching", pairs:[{en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"play",ar:"يلعب"},{en:"vet",ar:"طبيب بيطري"},{en:"groom",ar:"يعتني"},{en:"every day",ar:"كل يوم"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"pe3-t1-8", type:"fill_blank", blankSentence:"I ___ with my cat", blankOptions:["play","feed","very"], correctAnswer:"play", explanation:"play with = يلعب مع", xp:13 },
      { id:"pe3-t1-9", type:"listen_select", listenSentence:"I take my dog to the vet", options:["vet","feed","walk","play"], correctAnswer:"vet", explanation:"vet = طبيب بيطري", xp:12 },
    ],
    t2: [
      { id:"pe3-t2-1", type:"word_order", sentence:"I feed and walk my dog every day", correctAnswer:"I feed and walk my dog every day", explanation:"عنايتان", xp:14 },
      { id:"pe3-t2-2", type:"translate", arabic:"ألعب مع قطتي وأُطعمها", options:["I play with my cat and feed her","I play cat feed her","Play with cat I feed her","I cat play feed her"], correctAnswer:"I play with my cat and feed her", explanation:"عنايتان", xp:15 },
      { id:"pe3-t2-3", type:"listen_select", listenSentence:"I take my pet to the vet", options:["vet","feed","walk","play"], correctAnswer:"vet", explanation:"vet = طبيب بيطري", xp:14 },
      { id:"pe3-t2-4", type:"fill_blank", blankSentence:"I feed and ___ my dog", blankOptions:["walk","play","very"], correctAnswer:"walk", explanation:"feed and walk = يُطعم ويمشّي", xp:15 },
      { id:"pe3-t2-5", type:"word_order", sentence:"I play with my pet every evening", correctAnswer:"I play with my pet every evening", explanation:"ألعب مع حيواني كل مساء", xp:14 },
      { id:"pe3-t2-6", type:"translate", arabic:"آخذ كلبي للطبيب البيطري", options:["I take my dog to the vet","I dog vet take","Take my dog I vet","I vet dog take"], correctAnswer:"I take my dog to the vet", explanation:"زيارة الطبيب", xp:15 },
      { id:"pe3-t2-7", type:"matching", pairs:[{en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"play",ar:"يلعب"},{en:"groom",ar:"يعتني"},{en:"vet",ar:"طبيب بيطري"},{en:"care",ar:"عناية"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"pe3-t2-8", type:"fill_blank", blankSentence:"I take my cat to the ___", blankOptions:["vet","feed","very"], correctAnswer:"vet", explanation:"the vet = الطبيب البيطري", xp:15 },
      { id:"pe3-t2-9", type:"listen_select", listenSentence:"I feed my cat every morning", options:["feed","walk","play","groom"], correctAnswer:"feed", explanation:"feed = يُطعم", xp:14 },
    ],
    t3: [
      { id:"pe3-t3-1", type:"word_order", sentence:"I feed walk and play with my dog every day", correctAnswer:"I feed walk and play with my dog every day", explanation:"ثلاث عنايات", xp:18 },
      { id:"pe3-t3-2", type:"translate", arabic:"أُطعم قطتي وألعب معها وآخذها للطبيب", options:["I feed my cat play with her and take her to the vet","I feed cat play take vet","Feed cat play her I vet take","I cat feed play her vet take"], correctAnswer:"I feed my cat play with her and take her to the vet", explanation:"عناية شاملة", xp:20 },
      { id:"pe3-t3-3", type:"listen_select", listenSentence:"I walk my dog every day", options:["walk","feed","play","groom"], correctAnswer:"walk", explanation:"walk = يمشّي", xp:18 },
      { id:"pe3-t3-4", type:"fill_blank", blankSentence:"I feed walk and ___ with my pet", blankOptions:["play","groom","very"], correctAnswer:"play", explanation:"play = يلعب", xp:18 },
      { id:"pe3-t3-5", type:"matching", pairs:[{en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"play",ar:"يلعب"},{en:"groom",ar:"يعتني"},{en:"vet",ar:"طبيب بيطري"},{en:"pet",ar:"حيوان أليف"}], correctAnswer:"matched", explanation:"رائع! راجعت العناية بالحيوان", xp:18 },
      { id:"pe3-t3-6", type:"word_order", sentence:"I take my pet to the vet every month", correctAnswer:"I take my pet to the vet every month", explanation:"زيارة شهرية للطبيب", xp:18 },
      { id:"pe3-t3-7", type:"translate", arabic:"أُطعم وأمشّي وألعب مع كلبي كل يوم", options:["I feed walk and play with my dog every day","I feed walk play dog day","Feed walk play I dog day","I dog feed walk play day"], correctAnswer:"I feed walk and play with my dog every day", explanation:"عناية يومية شاملة", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة ──
  "تحدي الوحدة": {
    t0: [
      { id:"pec-t0-1", type:"word_order", sentence:"I have a cat and a dog", correctAnswer:"I have a cat and a dog", explanation:"لديّ قطة وكلب", xp:15 },
      { id:"pec-t0-2", type:"translate", arabic:"قطتي كثيفة الفرو ولطيفة", options:["My cat is fluffy and cute","My cat fluffy cute","Cat my fluffy cute","My fluffy cat cute"], correctAnswer:"My cat is fluffy and cute", explanation:"وصف القطة", xp:15 },
      { id:"pec-t0-3", type:"listen_select", listenSentence:"I feed my cat", options:["feed","walk","play","groom"], correctAnswer:"feed", explanation:"feed = يُطعم", xp:15 },
      { id:"pec-t0-4", type:"fill_blank", blankSentence:"I ___ my dog every day", blankOptions:["walk","feed","very"], correctAnswer:"walk", explanation:"I walk = أمشّي", xp:15 },
      { id:"pec-t0-5", type:"matching", pairs:[{en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"feed",ar:"يُطعم"},{en:"playful",ar:"مرح"},{en:"vet",ar:"طبيب بيطري"},{en:"cute",ar:"لطيف"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"pec-t0-6", type:"translate", arabic:"كلبي مرح", options:["My dog is playful","My dog playful","Dog my playful","Playful my dog"], correctAnswer:"My dog is playful", explanation:"وصف الكلب", xp:15 },
      { id:"pec-t0-7", type:"word_order", sentence:"I play with my pet", correctAnswer:"I play with my pet", explanation:"ألعب مع حيواني", xp:15 },
    ],
    t1: [
      { id:"pec-t1-1", type:"translate", arabic:"لديّ قطة صغيرة وكلب كبير", options:["I have a small cat and a big dog","I small cat big dog","Have small cat big I dog","I cat small dog big have"], correctAnswer:"I have a small cat and a big dog", explanation:"حيوانان بصفتين", xp:16 },
      { id:"pec-t1-2", type:"word_order", sentence:"I walk my dog every day", correctAnswer:"I walk my dog every day", explanation:"أمشّي كلبي يومياً", xp:16 },
      { id:"pec-t1-3", type:"listen_select", listenSentence:"My cat is cute and playful", options:["cute","fluffy","gentle","big"], correctAnswer:"cute", explanation:"cute = لطيف", xp:16 },
      { id:"pec-t1-4", type:"fill_blank", blankSentence:"I take my cat to the ___", blankOptions:["vet","feed","very"], correctAnswer:"vet", explanation:"the vet = الطبيب البيطري", xp:16 },
      { id:"pec-t1-5", type:"matching", pairs:[{en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"play",ar:"يلعب"},{en:"fluffy",ar:"كثيف الفرو"},{en:"gentle",ar:"وديع"},{en:"vet",ar:"طبيب بيطري"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"pec-t1-6", type:"translate", arabic:"قطتي كثيفة الفرو ومرحة", options:["My cat is fluffy and playful","My cat fluffy playful","Cat my fluffy playful","My fluffy cat playful"], correctAnswer:"My cat is fluffy and playful", explanation:"وصف بصفتين", xp:16 },
      { id:"pec-t1-7", type:"word_order", sentence:"I feed and play with my cat", correctAnswer:"I feed and play with my cat", explanation:"عنايتان", xp:16 },
    ],
    t2: [
      { id:"pec-t2-1", type:"word_order", sentence:"My cat is fluffy cute and very playful", correctAnswer:"My cat is fluffy cute and very playful", explanation:"ثلاث صفات", xp:18 },
      { id:"pec-t2-2", type:"translate", arabic:"أُطعم قطتي وألعب معها كل يوم", options:["I feed my cat and play with her every day","I feed cat play her day","Feed cat play I her day","I cat feed play her day"], correctAnswer:"I feed my cat and play with her every day", explanation:"عنايتان", xp:18 },
      { id:"pec-t2-3", type:"listen_select", listenSentence:"I take my pet to the vet", options:["vet","feed","walk","play"], correctAnswer:"vet", explanation:"vet = طبيب بيطري", xp:18 },
      { id:"pec-t2-4", type:"fill_blank", blankSentence:"My dog is big gentle and ___", blankOptions:["friendly","very","the"], correctAnswer:"friendly", explanation:"friendly = ودود", xp:18 },
      { id:"pec-t2-5", type:"matching", pairs:[{en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"fluffy",ar:"كثيف الفرو"},{en:"vet",ar:"طبيب بيطري"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"pec-t2-6", type:"translate", arabic:"كلبي كبير ووديع ولطيف", options:["My dog is big gentle and friendly","My dog big gentle friendly","Dog my big gentle friendly","My big dog gentle friendly"], correctAnswer:"My dog is big gentle and friendly", explanation:"ثلاث صفات", xp:18 },
      { id:"pec-t2-7", type:"word_order", sentence:"I feed walk and play with my dog", correctAnswer:"I feed walk and play with my dog", explanation:"ثلاث عنايات", xp:18 },
    ],
    t3: [
      { id:"pec-t3-1", type:"word_order", sentence:"I have a fluffy cat and a friendly dog at home", correctAnswer:"I have a fluffy cat and a friendly dog at home", explanation:"حيوانان بصفتين", xp:22 },
      { id:"pec-t3-2", type:"translate", arabic:"أُطعم قطتي وأمشّي كلبي وآخذهما للطبيب", options:["I feed my cat walk my dog and take them to the vet","I feed cat walk dog vet","Feed cat walk dog I vet take","I cat feed dog walk vet take"], correctAnswer:"I feed my cat walk my dog and take them to the vet", explanation:"عناية شاملة", xp:22 },
      { id:"pec-t3-3", type:"listen_select", listenSentence:"My cat is fluffy and cute", options:["fluffy","playful","gentle","big"], correctAnswer:"fluffy", explanation:"fluffy = كثيف الفرو", xp:20 },
      { id:"pec-t3-4", type:"fill_blank", blankSentence:"I feed walk and ___ with my pet every day", blankOptions:["play","groom","very"], correctAnswer:"play", explanation:"play = يلعب", xp:22 },
      { id:"pec-t3-5", type:"matching", pairs:[{en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"playful",ar:"مرح"},{en:"vet",ar:"طبيب بيطري"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"pec-t3-6", type:"word_order", sentence:"My pet is small cute and very playful", correctAnswer:"My pet is small cute and very playful", explanation:"ثلاث صفات", xp:22 },
      { id:"pec-t3-7", type:"translate", arabic:"لديّ قطة لطيفة وكلب ودود وأعتني بهما كل يوم", options:["I have a cute cat and a friendly dog and I care for them every day","I cute cat friendly dog care day","Have cute cat friendly dog I care day","I cat cute dog friendly care day"], correctAnswer:"I have a cute cat and a friendly dog and I care for them every day", explanation:"وصف وعناية 👑", xp:24 },
    ],
  },
};
