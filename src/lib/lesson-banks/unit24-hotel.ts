import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// القسم 2 — الوحدة 24: احجز غرفة في فندق
//   درس 1: كلمات الفندق — hotel, room, key, reception, booking
//   درس 2: احجز غرفة — single, double, night, available, reserve
//   درس 3: في الفندق — check in, check out, breakfast included
// ══════════════════════════════════════════════════════════════

export const unit24HotelBank: Record<string, TieredBank> = {

  "كلمات الفندق": {
    t0: [
      { id:"ht-pic-1", type:"picture_match", word:"hotel", arabic:"فندق", pictureOptions:[{emoji:"🏨",label:"hotel"},{emoji:"🔑",label:"key"},{emoji:"🛏️",label:"room"},{emoji:"🛎️",label:"reception"}], correctAnswer:"hotel", explanation:"فندق = hotel 🏨", xp:10 },
      { id:"ht1-t0-1", type:"translate", arabic:"فندق", options:["hotel","room","key","reception"], correctAnswer:"hotel", explanation:"hotel = فندق 🏨", xp:10 },
      { id:"ht1-t0-2", type:"listen_select", listenSentence:"room", options:["room","roam","rome","broom"], correctAnswer:"room", explanation:"room = غرفة 🛏️", xp:10 },
      { id:"ht1-t0-3", type:"translate", arabic:"مفتاح", options:["key","room","door","bed"], correctAnswer:"key", explanation:"key = مفتاح 🔑", xp:10 },
      { id:"ht1-t0-4", type:"word_order", sentence:"This is a nice hotel", correctAnswer:"This is a nice hotel", explanation:"هذا فندق جميل", xp:12 },
      { id:"ht1-t0-5", type:"fill_blank", blankSentence:"I need a ___ for tonight", blankOptions:["room","run","very"], correctAnswer:"room", explanation:"a room = غرفة", xp:12 },
      { id:"ht1-t0-6", type:"translate", arabic:"الاستقبال", options:["reception","room","key","hotel"], correctAnswer:"reception", explanation:"reception = الاستقبال 🛎️", xp:10 },
      { id:"ht1-t0-7", type:"listen_select", listenSentence:"the key", options:["key","kay","kee","keep"], correctAnswer:"key", explanation:"the key = المفتاح", xp:12 },
      { id:"ht1-t0-8", type:"word_order", sentence:"Where is my room", correctAnswer:"Where is my room", explanation:"أين غرفتي؟", xp:12 },
      { id:"ht1-t0-9", type:"matching", pairs:[{en:"hotel",ar:"فندق"},{en:"room",ar:"غرفة"},{en:"key",ar:"مفتاح"},{en:"reception",ar:"استقبال"},{en:"booking",ar:"حجز"},{en:"guest",ar:"نزيل"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ht1-t1-1", type:"translate", arabic:"حجز", options:["booking","room","key","hotel"], correctAnswer:"booking", explanation:"booking = حجز", xp:12 },
      { id:"ht1-t1-2", type:"word_order", sentence:"I have a booking for two nights", correctAnswer:"I have a booking for two nights", explanation:"لديّ حجز لليلتين", xp:14 },
      { id:"ht1-t1-3", type:"listen_select", listenSentence:"the reception", options:["reception","recipe","receive","recent"], correctAnswer:"reception", explanation:"the reception = الاستقبال", xp:13 },
      { id:"ht1-t1-4", type:"translate", arabic:"نزيل", options:["guest","host","clerk","staff"], correctAnswer:"guest", explanation:"guest = نزيل", xp:12 },
      { id:"ht1-t1-5", type:"fill_blank", blankSentence:"I have a ___ under my name", blankOptions:["booking","run","very"], correctAnswer:"booking", explanation:"a booking = حجز", xp:14 },
      { id:"ht1-t1-6", type:"word_order", sentence:"The hotel has a swimming pool", correctAnswer:"The hotel has a swimming pool", explanation:"الفندق به مسبح", xp:14 },
      { id:"ht1-t1-7", type:"translate", arabic:"حقيبة سفر", options:["luggage","baggage","handbag","backpack"], correctAnswer:"luggage", explanation:"luggage = أمتعة 🧳", xp:12 },
      { id:"ht1-t1-8", type:"listen_select", listenSentence:"my luggage", options:["luggage","language","baggage","massage"], correctAnswer:"luggage", explanation:"luggage = أمتعة", xp:13 },
      { id:"ht1-t1-9", type:"matching", pairs:[{en:"booking",ar:"حجز"},{en:"guest",ar:"نزيل"},{en:"luggage",ar:"أمتعة"},{en:"lobby",ar:"بهو"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ht1-t2-1", type:"word_order", sentence:"I would like to book a room please", correctAnswer:"I would like to book a room please", explanation:"أودّ حجز غرفة من فضلك", xp:16 },
      { id:"ht1-t2-2", type:"translate", arabic:"لديّ حجز باسم أحمد", options:["I have a booking under Ahmed","I have a booking under Ahmeds","I have booking under Ahmed","I have a book under Ahmed"], correctAnswer:"I have a booking under Ahmed", explanation:"booking under = حجز باسم", xp:16 },
      { id:"ht1-t2-3", type:"fill_blank", blankSentence:"Can I leave my ___ here", blankOptions:["luggage","run","very"], correctAnswer:"luggage", explanation:"my luggage = أمتعتي", xp:15 },
      { id:"ht1-t2-4", type:"word_order", sentence:"The reception is open all day", correctAnswer:"The reception is open all day", explanation:"الاستقبال مفتوح طوال اليوم", xp:16 },
      { id:"ht1-t2-5", type:"translate", arabic:"أين بهو الفندق؟", options:["Where is the hotel lobby?","Where the hotel lobby?","Where is hotel lobby?","Where is the hotel lobbies?"], correctAnswer:"Where is the hotel lobby?", explanation:"lobby = بهو", xp:16 },
      { id:"ht1-t2-6", type:"listen_select", listenSentence:"a comfortable room", options:["comfortable","comfort","comfortably","comforter"], correctAnswer:"comfortable", explanation:"comfortable = مريح", xp:15 },
      { id:"ht1-t2-7", type:"word_order", sentence:"I lost my room key", correctAnswer:"I lost my room key", explanation:"فقدت مفتاح غرفتي", xp:15 },
      { id:"ht1-t2-8", type:"fill_blank", blankSentence:"The ___ will help you", blankOptions:["reception","run","very"], correctAnswer:"reception", explanation:"the reception = الاستقبال", xp:15 },
    ],
    t3: [],
  },

  "احجز غرفة": {
    t0: [
      { id:"ht2-t0-1", type:"translate", arabic:"غرفة فردية", options:["single room","double room","big room","small room"], correctAnswer:"single room", explanation:"single room = غرفة فردية", xp:10 },
      { id:"ht2-t0-2", type:"translate", arabic:"غرفة مزدوجة", options:["double room","single room","big room","small room"], correctAnswer:"double room", explanation:"double room = غرفة مزدوجة", xp:10 },
      { id:"ht2-t0-3", type:"listen_select", listenSentence:"for two nights", options:["nights","knights","lights","rights"], correctAnswer:"nights", explanation:"two nights = ليلتان", xp:10 },
      { id:"ht2-t0-4", type:"word_order", sentence:"I want a single room", correctAnswer:"I want a single room", explanation:"أريد غرفة فردية", xp:12 },
      { id:"ht2-t0-5", type:"fill_blank", blankSentence:"For how many ___", blankOptions:["nights","run","very"], correctAnswer:"nights", explanation:"how many nights = كم ليلة", xp:12 },
      { id:"ht2-t0-6", type:"translate", arabic:"متاح", options:["available","busy","full","closed"], correctAnswer:"available", explanation:"available = متاح", xp:10 },
      { id:"ht2-t0-7", type:"listen_select", listenSentence:"is it available", options:["available","avoidable","adorable","admirable"], correctAnswer:"available", explanation:"available = متاح", xp:12 },
      { id:"ht2-t0-8", type:"word_order", sentence:"The room is available", correctAnswer:"The room is available", explanation:"الغرفة متاحة", xp:12 },
      { id:"ht2-t0-9", type:"matching", pairs:[{en:"single room",ar:"غرفة فردية"},{en:"double room",ar:"غرفة مزدوجة"},{en:"night",ar:"ليلة"},{en:"available",ar:"متاح"},{en:"reserve",ar:"يحجز"},{en:"price",ar:"سعر"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ht2-t1-1", type:"word_order", sentence:"Do you have a room available", correctAnswer:"Do you have a room available", explanation:"هل لديك غرفة متاحة؟", xp:14 },
      { id:"ht2-t1-2", type:"translate", arabic:"كم سعر الليلة؟", options:["How much is one night?","How much one night?","How much is a night?","How many is one night?"], correctAnswer:"How much is one night?", explanation:"price per night = سعر الليلة", xp:14 },
      { id:"ht2-t1-3", type:"listen_select", listenSentence:"reserve a room", options:["reserve","preserve","deserve","observe"], correctAnswer:"reserve", explanation:"reserve = يحجز", xp:13 },
      { id:"ht2-t1-4", type:"translate", arabic:"يحجز", options:["reserve","receive","return","remove"], correctAnswer:"reserve", explanation:"reserve = يحجز", xp:12 },
      { id:"ht2-t1-5", type:"fill_blank", blankSentence:"I want to ___ a room", blankOptions:["reserve","run","very"], correctAnswer:"reserve", explanation:"reserve = يحجز", xp:14 },
      { id:"ht2-t1-6", type:"word_order", sentence:"A double room for three nights", correctAnswer:"A double room for three nights", explanation:"غرفة مزدوجة لثلاث ليالٍ", xp:14 },
      { id:"ht2-t1-7", type:"translate", arabic:"بإطلالة على البحر", options:["with a sea view","with sea view","with a sea views","with the sea view"], correctAnswer:"with a sea view", explanation:"sea view = إطلالة بحرية", xp:13 },
      { id:"ht2-t1-8", type:"listen_select", listenSentence:"fully booked", options:["booked","cooked","looked","hooked"], correctAnswer:"booked", explanation:"fully booked = محجوز بالكامل", xp:13 },
      { id:"ht2-t1-9", type:"matching", pairs:[{en:"reserve",ar:"يحجز"},{en:"sea view",ar:"إطلالة بحرية"},{en:"available",ar:"متاح"},{en:"booked",ar:"محجوز"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ht2-t2-1", type:"word_order", sentence:"I would like to reserve a double room", correctAnswer:"I would like to reserve a double room", explanation:"أودّ حجز غرفة مزدوجة", xp:16 },
      { id:"ht2-t2-2", type:"translate", arabic:"هل لديكم غرف متاحة هذا الأسبوع؟", options:["Do you have rooms available this week?","Do you have room available this week?","Do you have rooms available this weeks?","Do you have rooms availables this week?"], correctAnswer:"Do you have rooms available this week?", explanation:"rooms available = غرف متاحة", xp:16 },
      { id:"ht2-t2-3", type:"fill_blank", blankSentence:"I'd like a room with a ___ view", blankOptions:["sea","run","very"], correctAnswer:"sea", explanation:"sea view = إطلالة بحرية", xp:15 },
      { id:"ht2-t2-4", type:"word_order", sentence:"How much does it cost per night", correctAnswer:"How much does it cost per night", explanation:"كم يكلّف في الليلة؟", xp:16 },
      { id:"ht2-t2-5", type:"translate", arabic:"أريد حجز غرفة لثلاث ليالٍ", options:["I want to book a room for three nights","I want to book a room for three night","I want book a room for three nights","I want to book a rooms for three nights"], correctAnswer:"I want to book a room for three nights", explanation:"for three nights = لثلاث ليالٍ", xp:16 },
      { id:"ht2-t2-6", type:"listen_select", listenSentence:"a room with a balcony", options:["balcony","baloney","balconies","balcon"], correctAnswer:"balcony", explanation:"balcony = شرفة", xp:15 },
      { id:"ht2-t2-7", type:"word_order", sentence:"Is breakfast included in the price", correctAnswer:"Is breakfast included in the price", explanation:"هل الفطور مشمول بالسعر؟", xp:15 },
      { id:"ht2-t2-8", type:"fill_blank", blankSentence:"The room is ___ for tonight", blankOptions:["available","run","very"], correctAnswer:"available", explanation:"available = متاح", xp:15 },
    ],
    t3: [],
  },

  "في الفندق": {
    t0: [
      { id:"ht3-t0-1", type:"translate", arabic:"تسجيل الوصول", options:["check in","check out","sign in","log in"], correctAnswer:"check in", explanation:"check in = تسجيل الوصول", xp:10 },
      { id:"ht3-t0-2", type:"translate", arabic:"تسجيل المغادرة", options:["check out","check in","sign out","log out"], correctAnswer:"check out", explanation:"check out = تسجيل المغادرة", xp:10 },
      { id:"ht3-t0-3", type:"listen_select", listenSentence:"check in", options:["check","chick","cheek","chalk"], correctAnswer:"check", explanation:"check in = تسجيل الوصول", xp:10 },
      { id:"ht3-t0-4", type:"word_order", sentence:"I want to check in", correctAnswer:"I want to check in", explanation:"أريد تسجيل الوصول", xp:12 },
      { id:"ht3-t0-5", type:"fill_blank", blankSentence:"What time is ___ out", blankOptions:["check","run","very"], correctAnswer:"check", explanation:"check out = المغادرة", xp:12 },
      { id:"ht3-t0-6", type:"translate", arabic:"الفطور مشمول", options:["breakfast included","breakfast include","breakfast including","breakfast includes"], correctAnswer:"breakfast included", explanation:"breakfast included = الفطور مشمول", xp:10 },
      { id:"ht3-t0-7", type:"listen_select", listenSentence:"check out time", options:["out","ought","oat","aunt"], correctAnswer:"out", explanation:"check out = المغادرة", xp:12 },
      { id:"ht3-t0-8", type:"word_order", sentence:"Breakfast is included", correctAnswer:"Breakfast is included", explanation:"الفطور مشمول", xp:12 },
      { id:"ht3-t0-9", type:"matching", pairs:[{en:"check in",ar:"تسجيل الوصول"},{en:"check out",ar:"تسجيل المغادرة"},{en:"included",ar:"مشمول"},{en:"wifi",ar:"واي فاي"},{en:"breakfast",ar:"فطور"},{en:"service",ar:"خدمة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ht3-t1-1", type:"word_order", sentence:"What time is check out", correctAnswer:"What time is check out", explanation:"متى موعد المغادرة؟", xp:14 },
      { id:"ht3-t1-2", type:"translate", arabic:"هل الفطور مشمول؟", options:["Is breakfast included?","Is breakfast include?","Breakfast is included?","Is breakfast includes?"], correctAnswer:"Is breakfast included?", explanation:"breakfast included = الفطور مشمول", xp:14 },
      { id:"ht3-t1-3", type:"listen_select", listenSentence:"the wifi password", options:["password","passport","passage","passenger"], correctAnswer:"password", explanation:"wifi password = كلمة سر الواي فاي", xp:13 },
      { id:"ht3-t1-4", type:"translate", arabic:"كلمة السر", options:["password","passport","passage","passenger"], correctAnswer:"password", explanation:"password = كلمة السر", xp:12 },
      { id:"ht3-t1-5", type:"fill_blank", blankSentence:"Can I have the wifi ___", blankOptions:["password","run","very"], correctAnswer:"password", explanation:"wifi password = كلمة سر الشبكة", xp:14 },
      { id:"ht3-t1-6", type:"word_order", sentence:"The room service is excellent", correctAnswer:"The room service is excellent", explanation:"خدمة الغرف ممتازة", xp:14 },
      { id:"ht3-t1-7", type:"translate", arabic:"خدمة الغرف", options:["room service","room price","room key","room number"], correctAnswer:"room service", explanation:"room service = خدمة الغرف", xp:13 },
      { id:"ht3-t1-8", type:"listen_select", listenSentence:"extra towels", options:["towels","tower","towel","towels"], correctAnswer:"towels", explanation:"towels = مناشف", xp:13 },
      { id:"ht3-t1-9", type:"matching", pairs:[{en:"password",ar:"كلمة سر"},{en:"room service",ar:"خدمة الغرف"},{en:"towels",ar:"مناشف"},{en:"included",ar:"مشمول"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t2: [
      { id:"ht3-t2-1", type:"word_order", sentence:"I would like to check out now please", correctAnswer:"I would like to check out now please", explanation:"أودّ تسجيل المغادرة الآن", xp:16 },
      { id:"ht3-t2-2", type:"translate", arabic:"هل يمكنني الحصول على مناشف إضافية؟", options:["Can I have extra towels?","Can I have extra towel?","Can I has extra towels?","Can I have extras towels?"], correctAnswer:"Can I have extra towels?", explanation:"extra towels = مناشف إضافية", xp:16 },
      { id:"ht3-t2-3", type:"fill_blank", blankSentence:"Check ___ time is at noon", blankOptions:["out","run","very"], correctAnswer:"out", explanation:"check out time = موعد المغادرة", xp:15 },
      { id:"ht3-t2-4", type:"word_order", sentence:"The air conditioning is not working", correctAnswer:"The air conditioning is not working", explanation:"المكيّف لا يعمل", xp:16 },
      { id:"ht3-t2-5", type:"translate", arabic:"شكراً، كانت إقامة رائعة", options:["Thank you, it was a great stay","Thank you, it was great stay","Thank you, it was a great stays","Thank you, it is a great stay"], correctAnswer:"Thank you, it was a great stay", explanation:"a great stay = إقامة رائعة", xp:16 },
      { id:"ht3-t2-6", type:"listen_select", listenSentence:"a wake up call", options:["call","cool","coal","kill"], correctAnswer:"call", explanation:"wake up call = مكالمة إيقاظ", xp:15 },
      { id:"ht3-t2-7", type:"word_order", sentence:"Could you call a taxi for me", correctAnswer:"Could you call a taxi for me", explanation:"هل تطلب لي سيارة أجرة؟", xp:15 },
      { id:"ht3-t2-8", type:"fill_blank", blankSentence:"Is the breakfast ___ in the price", blankOptions:["included","run","very"], correctAnswer:"included", explanation:"included = مشمول", xp:15 },
    ],
    t3: [],
  },
};
