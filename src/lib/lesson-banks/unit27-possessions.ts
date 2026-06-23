import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 27: صف ممتلكاتك
//   درس 1: الملكية — my, your, his, her, our, their
//   درس 2: ممتلكات — phone, watch, bag, keys, wallet
//   درس 3: لمن هذا — whose, it's mine, belongs to
// ══════════════════════════════════════════════════════════════

export const unit27PossessionsBank: Record<string, TieredBank> = {

  "الملكية": {
    t0: [
      { id:"po1-t0-1", type:"translate", arabic:"خاصتي", options:["my","your","his","her"], correctAnswer:"my", explanation:"my = خاصتي", xp:10 },
      { id:"po1-t0-2", type:"translate", arabic:"خاصتك", options:["your","my","his","our"], correctAnswer:"your", explanation:"your = خاصتك", xp:10 },
      { id:"po1-t0-3", type:"translate", arabic:"خاصته", options:["his","her","my","their"], correctAnswer:"his", explanation:"his = خاصته (مذكّر)", xp:10 },
      { id:"po1-t0-4", type:"word_order", sentence:"This is my book", correctAnswer:"This is my book", explanation:"هذا كتابي", xp:12 },
      { id:"po1-t0-5", type:"fill_blank", blankSentence:"This is ___ bag", blankOptions:["my","run","very"], correctAnswer:"my", explanation:"my bag = حقيبتي", xp:12 },
      { id:"po1-t0-6", type:"translate", arabic:"خاصتها", options:["her","his","my","your"], correctAnswer:"her", explanation:"her = خاصتها (مؤنّث)", xp:10 },
      { id:"po1-t0-7", type:"listen_select", listenSentence:"my phone", options:["my","by","why","I"], correctAnswer:"my", explanation:"my phone = هاتفي", xp:12 },
      { id:"po1-t0-8", type:"word_order", sentence:"That is her car", correctAnswer:"That is her car", explanation:"تلك سيارتها", xp:12 },
      { id:"po1-t0-9", type:"matching", pairs:[{en:"my",ar:"خاصتي"},{en:"your",ar:"خاصتك"},{en:"his",ar:"خاصته"},{en:"her",ar:"خاصتها"},{en:"our",ar:"خاصتنا"},{en:"their",ar:"خاصتهم"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"po1-t1-1", type:"translate", arabic:"خاصتنا", options:["our","their","your","my"], correctAnswer:"our", explanation:"our = خاصتنا", xp:12 },
      { id:"po1-t1-2", type:"translate", arabic:"خاصتهم", options:["their","our","his","her"], correctAnswer:"their", explanation:"their = خاصتهم", xp:12 },
      { id:"po1-t1-3", type:"word_order", sentence:"This is our house", correctAnswer:"This is our house", explanation:"هذا منزلنا", xp:14 },
      { id:"po1-t1-4", type:"fill_blank", blankSentence:"They love ___ new school", blankOptions:["their","run","very"], correctAnswer:"their", explanation:"their school = مدرستهم", xp:14 },
      { id:"po1-t1-5", type:"listen_select", listenSentence:"his name", options:["his","is","has","hits"], correctAnswer:"his", explanation:"his name = اسمه", xp:13 },
      { id:"po1-t1-6", type:"word_order", sentence:"Her dress is beautiful", correctAnswer:"Her dress is beautiful", explanation:"فستانها جميل", xp:14 },
      { id:"po1-t1-7", type:"translate", arabic:"هذه حقيبتهم", options:["This is their bag","This is theirs bag","This is them bag","This is their bags"], correctAnswer:"This is their bag", explanation:"their bag = حقيبتهم", xp:13 },
      { id:"po1-t1-8", type:"listen_select", listenSentence:"our home", options:["our","hour","are","or"], correctAnswer:"our", explanation:"our home = منزلنا", xp:13 },
      { id:"po1-t1-9", type:"matching", pairs:[{en:"my house",ar:"منزلي"},{en:"your car",ar:"سيارتك"},{en:"his book",ar:"كتابه"},{en:"her bag",ar:"حقيبتها"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"po1-t2-1", type:"word_order", sentence:"Our teacher gave us their books", correctAnswer:"Our teacher gave us their books", explanation:"أعطانا معلّمنا كتبهم", xp:16 },
      { id:"po1-t2-2", type:"translate", arabic:"سيارتهم أكبر من سيارتنا", options:["Their car is bigger than ours","Their car is bigger than our","Their car is bigger then ours","Their cars is bigger than ours"], correctAnswer:"Their car is bigger than ours", explanation:"ours = ملكنا", xp:16 },
      { id:"po1-t2-3", type:"fill_blank", blankSentence:"She forgot ___ keys at home", blankOptions:["her","run","very"], correctAnswer:"her", explanation:"her keys = مفاتيحها", xp:15 },
      { id:"po1-t2-4", type:"word_order", sentence:"His parents live in another city", correctAnswer:"His parents live in another city", explanation:"والداه يعيشان في مدينة أخرى", xp:16 },
      { id:"po1-t2-5", type:"translate", arabic:"نحن نحب منزلنا الجديد", options:["We love our new house","We love ours new house","We loves our new house","We love our new houses"], correctAnswer:"We love our new house", explanation:"our new house = منزلنا الجديد", xp:16 },
      { id:"po1-t2-6", type:"listen_select", listenSentence:"their old car", options:["their","there","they're","theirs"], correctAnswer:"their", explanation:"their car = سيارتهم", xp:15 },
      { id:"po1-t2-7", type:"word_order", sentence:"My friends brought their families", correctAnswer:"My friends brought their families", explanation:"أحضر أصدقائي عائلاتهم", xp:15 },
      { id:"po1-t2-8", type:"fill_blank", blankSentence:"The dog wagged ___ tail", blankOptions:["its","run","very"], correctAnswer:"its", explanation:"its tail = ذيله", xp:15 },
    ],
    t3: [],
  },

  "ممتلكات": {
    t0: [
      { id:"po2-t0-1", type:"translate", arabic:"هاتف", options:["phone","watch","bag","wallet"], correctAnswer:"phone", explanation:"phone = هاتف 📱", xp:10 },
      { id:"po2-t0-2", type:"listen_select", listenSentence:"watch", options:["watch","wash","wish","wet"], correctAnswer:"watch", explanation:"watch = ساعة يد ⌚", xp:10 },
      { id:"po2-t0-3", type:"translate", arabic:"حقيبة", options:["bag","phone","key","wallet"], correctAnswer:"bag", explanation:"bag = حقيبة 👜", xp:10 },
      { id:"po2-t0-4", type:"word_order", sentence:"This is my phone", correctAnswer:"This is my phone", explanation:"هذا هاتفي", xp:12 },
      { id:"po2-t0-5", type:"fill_blank", blankSentence:"I lost my ___", blankOptions:["keys","run","very"], correctAnswer:"keys", explanation:"my keys = مفاتيحي", xp:12 },
      { id:"po2-t0-6", type:"translate", arabic:"محفظة", options:["wallet","watch","phone","bag"], correctAnswer:"wallet", explanation:"wallet = محفظة 👛", xp:10 },
      { id:"po2-t0-7", type:"listen_select", listenSentence:"my keys", options:["keys","key","case","keep"], correctAnswer:"keys", explanation:"my keys = مفاتيحي", xp:12 },
      { id:"po2-t0-8", type:"word_order", sentence:"Where is my wallet", correctAnswer:"Where is my wallet", explanation:"أين محفظتي؟", xp:12 },
      { id:"po2-t0-9", type:"matching", pairs:[{en:"phone",ar:"هاتف"},{en:"watch",ar:"ساعة"},{en:"bag",ar:"حقيبة"},{en:"keys",ar:"مفاتيح"},{en:"wallet",ar:"محفظة"},{en:"glasses",ar:"نظارة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"po2-t1-1", type:"translate", arabic:"نظارة", options:["glasses","watch","phone","wallet"], correctAnswer:"glasses", explanation:"glasses = نظارة 👓", xp:12 },
      { id:"po2-t1-2", type:"word_order", sentence:"My watch is very expensive", correctAnswer:"My watch is very expensive", explanation:"ساعتي غالية جداً", xp:14 },
      { id:"po2-t1-3", type:"listen_select", listenSentence:"my umbrella", options:["umbrella","umbrellas","umpire","umbra"], correctAnswer:"umbrella", explanation:"umbrella = مظلّة ☂️", xp:13 },
      { id:"po2-t1-4", type:"translate", arabic:"مظلّة", options:["umbrella","wallet","glasses","watch"], correctAnswer:"umbrella", explanation:"umbrella = مظلّة", xp:12 },
      { id:"po2-t1-5", type:"fill_blank", blankSentence:"Have you seen my ___", blankOptions:["glasses","run","very"], correctAnswer:"glasses", explanation:"my glasses = نظارتي", xp:14 },
      { id:"po2-t1-6", type:"word_order", sentence:"I keep my keys in my bag", correctAnswer:"I keep my keys in my bag", explanation:"أحتفظ بمفاتيحي في حقيبتي", xp:14 },
      { id:"po2-t1-7", type:"translate", arabic:"حاسوب محمول", options:["laptop","desktop","tablet","phone"], correctAnswer:"laptop", explanation:"laptop = حاسوب محمول 💻", xp:13 },
      { id:"po2-t1-8", type:"listen_select", listenSentence:"a new laptop", options:["laptop","lap","lamp","last"], correctAnswer:"laptop", explanation:"laptop = حاسوب محمول", xp:13 },
      { id:"po2-t1-9", type:"matching", pairs:[{en:"glasses",ar:"نظارة"},{en:"umbrella",ar:"مظلّة"},{en:"laptop",ar:"حاسوب محمول"},{en:"camera",ar:"كاميرا"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"po2-t2-1", type:"word_order", sentence:"I always carry my phone and wallet", correctAnswer:"I always carry my phone and wallet", explanation:"أحمل دائماً هاتفي ومحفظتي", xp:16 },
      { id:"po2-t2-2", type:"translate", arabic:"تركت نظارتي على الطاولة", options:["I left my glasses on the table","I left my glass on the table","I leave my glasses on the table","I left my glasses on table"], correctAnswer:"I left my glasses on the table", explanation:"left my glasses = تركت نظارتي", xp:16 },
      { id:"po2-t2-3", type:"fill_blank", blankSentence:"My ___ is full of important cards", blankOptions:["wallet","run","very"], correctAnswer:"wallet", explanation:"my wallet = محفظتي", xp:15 },
      { id:"po2-t2-4", type:"word_order", sentence:"She bought a new laptop for work", correctAnswer:"She bought a new laptop for work", explanation:"اشترت حاسوباً جديداً للعمل", xp:16 },
      { id:"po2-t2-5", type:"translate", arabic:"لا أستطيع إيجاد مفاتيح سيارتي", options:["I can't find my car keys","I can't find my car key","I can't found my car keys","I can't find my cars keys"], correctAnswer:"I can't find my car keys", explanation:"car keys = مفاتيح السيارة", xp:16 },
      { id:"po2-t2-6", type:"listen_select", listenSentence:"a leather bag", options:["leather","letter","later","ladder"], correctAnswer:"leather", explanation:"leather bag = حقيبة جلدية", xp:15 },
      { id:"po2-t2-7", type:"word_order", sentence:"He always forgets his umbrella at home", correctAnswer:"He always forgets his umbrella at home", explanation:"ينسى مظلّته دائماً في المنزل", xp:15 },
      { id:"po2-t2-8", type:"fill_blank", blankSentence:"My ___ stopped working yesterday", blankOptions:["watch","run","very"], correctAnswer:"watch", explanation:"my watch = ساعتي", xp:15 },
    ],
    t3: [],
  },

  "لمن هذا": {
    t0: [
      { id:"po3-t0-1", type:"translate", arabic:"لمن؟", options:["whose","who","what","which"], correctAnswer:"whose", explanation:"whose = لمن", xp:10 },
      { id:"po3-t0-2", type:"word_order", sentence:"Whose bag is this", correctAnswer:"Whose bag is this", explanation:"لمن هذه الحقيبة؟", xp:12 },
      { id:"po3-t0-3", type:"listen_select", listenSentence:"it's mine", options:["mine","mind","mile","mime"], correctAnswer:"mine", explanation:"it's mine = إنه لي", xp:10 },
      { id:"po3-t0-4", type:"translate", arabic:"إنه لي", options:["it's mine","it's my","it's me","it's I"], correctAnswer:"it's mine", explanation:"it's mine = إنه ملكي", xp:12 },
      { id:"po3-t0-5", type:"fill_blank", blankSentence:"This pen is ___", blankOptions:["mine","run","very"], correctAnswer:"mine", explanation:"mine = ملكي", xp:12 },
      { id:"po3-t0-6", type:"translate", arabic:"إنه لك", options:["it's yours","it's your","it's you","it's yer"], correctAnswer:"it's yours", explanation:"it's yours = إنه ملكك", xp:10 },
      { id:"po3-t0-7", type:"listen_select", listenSentence:"it is hers", options:["hers","her","here","hear"], correctAnswer:"hers", explanation:"hers = ملكها", xp:12 },
      { id:"po3-t0-8", type:"word_order", sentence:"This book is yours", correctAnswer:"This book is yours", explanation:"هذا الكتاب لك", xp:12 },
      { id:"po3-t0-9", type:"matching", pairs:[{en:"whose",ar:"لمن"},{en:"mine",ar:"ملكي"},{en:"yours",ar:"ملكك"},{en:"his",ar:"ملكه"},{en:"hers",ar:"ملكها"},{en:"theirs",ar:"ملكهم"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"po3-t1-1", type:"word_order", sentence:"Whose keys are these", correctAnswer:"Whose keys are these", explanation:"لمن هذه المفاتيح؟", xp:14 },
      { id:"po3-t1-2", type:"translate", arabic:"هذه السيارة ملكهم", options:["This car is theirs","This car is their","This car is them","This car is theirs car"], correctAnswer:"This car is theirs", explanation:"theirs = ملكهم", xp:14 },
      { id:"po3-t1-3", type:"listen_select", listenSentence:"it belongs to me", options:["belongs","belong","belonged","belonging"], correctAnswer:"belongs", explanation:"belongs to = ينتمي إلى", xp:13 },
      { id:"po3-t1-4", type:"fill_blank", blankSentence:"That house is ___", blankOptions:["ours","run","very"], correctAnswer:"ours", explanation:"ours = ملكنا", xp:14 },
      { id:"po3-t1-5", type:"word_order", sentence:"This phone belongs to her", correctAnswer:"This phone belongs to her", explanation:"هذا الهاتف يخصّها", xp:14 },
      { id:"po3-t1-6", type:"translate", arabic:"هل هذا القلم لك؟", options:["Is this pen yours?","Is this pen your?","Is this pen you?","Is this pens yours?"], correctAnswer:"Is this pen yours?", explanation:"yours = ملكك", xp:13 },
      { id:"po3-t1-7", type:"listen_select", listenSentence:"it is theirs", options:["theirs","there","their","they're"], correctAnswer:"theirs", explanation:"theirs = ملكهم", xp:13 },
      { id:"po3-t1-8", type:"word_order", sentence:"These shoes are his", correctAnswer:"These shoes are his", explanation:"هذا الحذاء له", xp:14 },
      { id:"po3-t1-9", type:"matching", pairs:[{en:"ours",ar:"ملكنا"},{en:"theirs",ar:"ملكهم"},{en:"belongs to",ar:"يخصّ"},{en:"mine",ar:"ملكي"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"po3-t2-1", type:"word_order", sentence:"Whose phone is ringing on the table", correctAnswer:"Whose phone is ringing on the table", explanation:"هاتف من يرنّ على الطاولة؟", xp:16 },
      { id:"po3-t2-2", type:"translate", arabic:"هذه الحقيبة ليست لي، إنها لها", options:["This bag is not mine, it's hers","This bag is not mine, it's her","This bag is not my, it's hers","This bag is not mine, its hers"], correctAnswer:"This bag is not mine, it's hers", explanation:"mine / hers", xp:16 },
      { id:"po3-t2-3", type:"fill_blank", blankSentence:"This umbrella ___ to my brother", blankOptions:["belongs","run","very"], correctAnswer:"belongs", explanation:"belongs to = يخصّ", xp:15 },
      { id:"po3-t2-4", type:"word_order", sentence:"All these books are theirs not ours", correctAnswer:"All these books are theirs not ours", explanation:"كل هذه الكتب لهم لا لنا", xp:16 },
      { id:"po3-t2-5", type:"translate", arabic:"لمن هذه المحفظة التي على الأرض؟", options:["Whose wallet is this on the floor?","Whose wallet this on the floor?","Whose is wallet this on the floor?","Whose wallet is this on floor?"], correctAnswer:"Whose wallet is this on the floor?", explanation:"whose wallet = محفظة من", xp:16 },
      { id:"po3-t2-6", type:"listen_select", listenSentence:"it must be yours", options:["yours","your","you","yore"], correctAnswer:"yours", explanation:"it must be yours = لا بد أنه ملكك", xp:15 },
      { id:"po3-t2-7", type:"word_order", sentence:"The red car is mine and the blue is his", correctAnswer:"The red car is mine and the blue is his", explanation:"السيارة الحمراء لي والزرقاء له", xp:15 },
      { id:"po3-t2-8", type:"fill_blank", blankSentence:"I think these glasses are ___", blankOptions:["hers","run","very"], correctAnswer:"hers", explanation:"hers = ملكها", xp:15 },
    ],
    t3: [],
  },
};
