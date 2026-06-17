import type { TieredBank } from "./types";

// ══════════════════════════════════════════════════════════════
// الوحدة 4 — تنقل في المطار
//   درس 1: في المطار — ticket, passport, gate, flight, boarding
//   درس 2: جمل السفر — where, time, board, depart, luggage
//   درس 3: في الطائرة — window seat, aisle seat, seat belt, landing
//   تحدي: كل الكلمات معاً
// ══════════════════════════════════════════════════════════════

export const unit4AirportBank: Record<string, TieredBank> = {

  // ── الدرس 1: في المطار ──
  "في المطار": {
    t0: [
      { id:"ai1-t0-1", type:"translate", arabic:"تذكرة", options:["ticket","passport","gate","flight"], correctAnswer:"ticket", explanation:"ticket = تذكرة 🎫", xp:10 },
      { id:"ai1-t0-2", type:"listen_select", listenSentence:"passport", options:["passport","ticket","gate","flight"], correctAnswer:"passport", explanation:"passport = جواز سفر 🛂", xp:10 },
      { id:"ai1-t0-3", type:"translate", arabic:"بوابة", options:["gate","flight","ticket","seat"], correctAnswer:"gate", explanation:"gate = بوابة 🚪", xp:10 },
      { id:"ai1-t0-4", type:"word_order", sentence:"This is my ticket", correctAnswer:"This is my ticket", explanation:"This is my ticket = هذه تذكرتي", xp:12 },
      { id:"ai1-t0-5", type:"listen_select", listenSentence:"the flight", options:["flight","gate","ticket","seat"], correctAnswer:"flight", explanation:"flight = رحلة جوية ✈️", xp:12 },
      { id:"ai1-t0-6", type:"translate", arabic:"رحلة جوية", options:["flight","gate","ticket","seat"], correctAnswer:"flight", explanation:"flight = رحلة جوية", xp:10 },
      { id:"ai1-t0-7", type:"word_order", sentence:"Where is my passport", correctAnswer:"Where is my passport", explanation:"Where is my passport? = أين جوازي؟", xp:12 },
      { id:"ai1-t0-8", type:"fill_blank", blankSentence:"This is my ___", blankOptions:["passport","where","gate"], correctAnswer:"passport", explanation:"my passport = جوازي", xp:12 },
      { id:"ai1-t0-9", type:"matching", pairs:[{en:"ticket",ar:"تذكرة"},{en:"passport",ar:"جواز سفر"},{en:"gate",ar:"بوابة"},{en:"flight",ar:"رحلة"},{en:"airport",ar:"مطار"},{en:"travel",ar:"سفر"}], correctAnswer:"matched", explanation:"أحسنت! طابقت كلمات المطار", xp:15 },
    ],
    t1: [
      { id:"ai1-t1-1", type:"translate", arabic:"صعود الطائرة", options:["boarding","landing","ticket","gate"], correctAnswer:"boarding", explanation:"boarding = الصعود للطائرة", xp:12 },
      { id:"ai1-t1-2", type:"word_order", sentence:"Here is my boarding pass", correctAnswer:"Here is my boarding pass", explanation:"boarding pass = بطاقة الصعود", xp:13 },
      { id:"ai1-t1-3", type:"listen_select", listenSentence:"Where is the gate", options:["gate","ticket","flight","seat"], correctAnswer:"gate", explanation:"Where is the gate = أين البوابة", xp:12 },
      { id:"ai1-t1-4", type:"translate", arabic:"أين تذكرتي؟", options:["Where is my ticket?","Where my ticket?","Ticket where is?","My ticket where?"], correctAnswer:"Where is my ticket?", explanation:"Where is my ticket? = أين تذكرتي؟", xp:13 },
      { id:"ai1-t1-5", type:"fill_blank", blankSentence:"Where is the ___", blankOptions:["gate","where","my"], correctAnswer:"gate", explanation:"Where is the gate = أين البوابة", xp:13 },
      { id:"ai1-t1-6", type:"word_order", sentence:"My flight is at gate five", correctAnswer:"My flight is at gate five", explanation:"رحلتي عند البوابة خمسة", xp:13 },
      { id:"ai1-t1-7", type:"translate", arabic:"بوابة", options:["gate","ticket","flight","seat"], correctAnswer:"gate", explanation:"gate = بوابة", xp:12 },
      { id:"ai1-t1-8", type:"matching", pairs:[{en:"ticket",ar:"تذكرة"},{en:"passport",ar:"جواز"},{en:"boarding",ar:"صعود"},{en:"gate",ar:"بوابة"},{en:"flight",ar:"رحلة"},{en:"airport",ar:"مطار"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"ai1-t1-9", type:"fill_blank", blankSentence:"Here is my ___ pass", blankOptions:["boarding","gate","flight"], correctAnswer:"boarding", explanation:"boarding pass = بطاقة الصعود", xp:13 },
    ],
    t2: [
      { id:"ai1-t2-1", type:"word_order", sentence:"Where is the boarding gate please", correctAnswer:"Where is the boarding gate please", explanation:"سؤال مهذب عن البوابة", xp:14 },
      { id:"ai1-t2-2", type:"translate", arabic:"رحلتي عند البوابة العاشرة", options:["My flight is at gate ten","Flight my gate ten","My gate flight ten","Ten gate my flight"], correctAnswer:"My flight is at gate ten", explanation:"موقع البوابة", xp:15 },
      { id:"ai1-t2-3", type:"listen_select", listenSentence:"Here is my passport", options:["passport","ticket","gate","flight"], correctAnswer:"passport", explanation:"my passport = جوازي", xp:14 },
      { id:"ai1-t2-4", type:"fill_blank", blankSentence:"My ___ is at gate five", blankOptions:["flight","ticket","gate"], correctAnswer:"flight", explanation:"My flight = رحلتي", xp:15 },
      { id:"ai1-t2-5", type:"word_order", sentence:"I have my ticket and passport", correctAnswer:"I have my ticket and passport", explanation:"معي تذكرتي وجوازي", xp:14 },
      { id:"ai1-t2-6", type:"translate", arabic:"أين بوابة الصعود؟", options:["Where is the boarding gate?","Where boarding gate?","Boarding gate where?","Gate where boarding?"], correctAnswer:"Where is the boarding gate?", explanation:"سؤال عن البوابة", xp:15 },
      { id:"ai1-t2-7", type:"matching", pairs:[{en:"boarding",ar:"صعود"},{en:"flight",ar:"رحلة"},{en:"gate",ar:"بوابة"},{en:"passport",ar:"جواز"},{en:"ticket",ar:"تذكرة"},{en:"travel",ar:"سفر"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"ai1-t2-8", type:"fill_blank", blankSentence:"I have my ticket and ___", blankOptions:["passport","gate","where"], correctAnswer:"passport", explanation:"ticket and passport = التذكرة والجواز", xp:15 },
      { id:"ai1-t2-9", type:"listen_select", listenSentence:"My flight is now boarding", options:["boarding","gate","ticket","flight"], correctAnswer:"boarding", explanation:"now boarding = الصعود الآن", xp:14 },
    ],
    t3: [
      { id:"ai1-t3-1", type:"word_order", sentence:"My flight is now boarding at gate five", correctAnswer:"My flight is now boarding at gate five", explanation:"إعلان صعود الرحلة", xp:18 },
      { id:"ai1-t3-2", type:"translate", arabic:"معي تذكرتي وجوازي وبطاقة الصعود", options:["I have my ticket passport and boarding pass","I ticket passport boarding","My ticket and passport boarding","I have ticket boarding passport my"], correctAnswer:"I have my ticket passport and boarding pass", explanation:"كل وثائق السفر", xp:20 },
      { id:"ai1-t3-3", type:"listen_select", listenSentence:"Where is the gate", options:["gate","ticket","flight","passport"], correctAnswer:"gate", explanation:"Where is the gate = أين البوابة", xp:18 },
      { id:"ai1-t3-4", type:"fill_blank", blankSentence:"My flight is boarding at ___ five", blankOptions:["gate","ticket","flight"], correctAnswer:"gate", explanation:"at gate five = عند البوابة خمسة", xp:18 },
      { id:"ai1-t3-5", type:"matching", pairs:[{en:"ticket",ar:"تذكرة"},{en:"passport",ar:"جواز"},{en:"gate",ar:"بوابة"},{en:"flight",ar:"رحلة"},{en:"boarding",ar:"صعود"},{en:"airport",ar:"مطار"}], correctAnswer:"matched", explanation:"رائع! راجعت كلمات المطار", xp:18 },
      { id:"ai1-t3-6", type:"word_order", sentence:"Where is the boarding gate", correctAnswer:"Where is the boarding gate", explanation:"أين بوابة الصعود", xp:18 },
      { id:"ai1-t3-7", type:"translate", arabic:"رحلتي تصعد الآن عند البوابة الثامنة", options:["My flight is now boarding at gate eight","Flight boarding gate eight now","My gate eight flight boarding","Now boarding flight my gate eight"], correctAnswer:"My flight is now boarding at gate eight", explanation:"إعلان الصعود", xp:20 },
    ],
  },

  // ── الدرس 2: جمل السفر ──
  "جمل السفر": {
    t0: [
      { id:"ai2-t0-1", type:"translate", arabic:"أمتعة", options:["luggage","ticket","gate","seat"], correctAnswer:"luggage", explanation:"luggage = أمتعة 🧳", xp:10 },
      { id:"ai2-t0-2", type:"listen_select", listenSentence:"departure", options:["departure","arrival","ticket","gate"], correctAnswer:"departure", explanation:"departure = مغادرة", xp:10 },
      { id:"ai2-t0-3", type:"translate", arabic:"وصول", options:["arrival","departure","gate","seat"], correctAnswer:"arrival", explanation:"arrival = وصول", xp:10 },
      { id:"ai2-t0-4", type:"word_order", sentence:"Where is my luggage", correctAnswer:"Where is my luggage", explanation:"Where is my luggage? = أين أمتعتي؟", xp:12 },
      { id:"ai2-t0-5", type:"listen_select", listenSentence:"What time is departure", options:["departure","arrival","gate","time"], correctAnswer:"departure", explanation:"departure = المغادرة", xp:12 },
      { id:"ai2-t0-6", type:"translate", arabic:"وقت", options:["time","gate","seat","flight"], correctAnswer:"time", explanation:"time = وقت", xp:10 },
      { id:"ai2-t0-7", type:"word_order", sentence:"What time is the flight", correctAnswer:"What time is the flight", explanation:"كم الساعة الرحلة؟", xp:12 },
      { id:"ai2-t0-8", type:"fill_blank", blankSentence:"Where is my ___", blankOptions:["luggage","time","where"], correctAnswer:"luggage", explanation:"my luggage = أمتعتي", xp:12 },
      { id:"ai2-t0-9", type:"matching", pairs:[{en:"luggage",ar:"أمتعة"},{en:"departure",ar:"مغادرة"},{en:"arrival",ar:"وصول"},{en:"time",ar:"وقت"},{en:"flight",ar:"رحلة"},{en:"gate",ar:"بوابة"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ai2-t1-1", type:"word_order", sentence:"What time does the flight depart", correctAnswer:"What time does the flight depart", explanation:"متى تغادر الرحلة؟", xp:13 },
      { id:"ai2-t1-2", type:"translate", arabic:"أين منطقة الوصول؟", options:["Where is the arrival area?","Where arrival area?","Arrival area where?","Area arrival where?"], correctAnswer:"Where is the arrival area?", explanation:"السؤال عن الوصول", xp:13 },
      { id:"ai2-t1-3", type:"listen_select", listenSentence:"Where is my luggage", options:["luggage","ticket","gate","time"], correctAnswer:"luggage", explanation:"my luggage = أمتعتي", xp:12 },
      { id:"ai2-t1-4", type:"fill_blank", blankSentence:"What time is ___", blankOptions:["departure","luggage","gate"], correctAnswer:"departure", explanation:"time of departure = وقت المغادرة", xp:13 },
      { id:"ai2-t1-5", type:"word_order", sentence:"My flight departs at six", correctAnswer:"My flight departs at six", explanation:"رحلتي تغادر الساعة السادسة", xp:13 },
      { id:"ai2-t1-6", type:"translate", arabic:"متى المغادرة؟", options:["What time is departure?","When departure?","Departure when time?","Time departure what?"], correctAnswer:"What time is departure?", explanation:"السؤال عن المغادرة", xp:13 },
      { id:"ai2-t1-7", type:"matching", pairs:[{en:"departure",ar:"مغادرة"},{en:"arrival",ar:"وصول"},{en:"luggage",ar:"أمتعة"},{en:"time",ar:"وقت"},{en:"depart",ar:"يغادر"},{en:"board",ar:"يصعد"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"ai2-t1-8", type:"fill_blank", blankSentence:"My flight ___ at six", blankOptions:["departs","arrival","time"], correctAnswer:"departs", explanation:"departs = يغادر", xp:13 },
      { id:"ai2-t1-9", type:"listen_select", listenSentence:"What time is arrival", options:["arrival","departure","gate","luggage"], correctAnswer:"arrival", explanation:"arrival = الوصول", xp:12 },
    ],
    t2: [
      { id:"ai2-t2-1", type:"word_order", sentence:"What time does the flight board", correctAnswer:"What time does the flight board", explanation:"متى يبدأ صعود الرحلة؟", xp:14 },
      { id:"ai2-t2-2", type:"translate", arabic:"رحلتي تغادر الساعة الثامنة", options:["My flight departs at eight","Flight my eight departs","My departs flight eight","Eight departs my flight"], correctAnswer:"My flight departs at eight", explanation:"وقت المغادرة", xp:15 },
      { id:"ai2-t2-3", type:"listen_select", listenSentence:"What time does it board", options:["board","time","gate","depart"], correctAnswer:"board", explanation:"board = الصعود", xp:14 },
      { id:"ai2-t2-4", type:"fill_blank", blankSentence:"The flight ___ at gate five", blankOptions:["boards","time","luggage"], correctAnswer:"boards", explanation:"boards = يصعد", xp:15 },
      { id:"ai2-t2-5", type:"word_order", sentence:"Where can I find my luggage", correctAnswer:"Where can I find my luggage", explanation:"أين أجد أمتعتي؟", xp:14 },
      { id:"ai2-t2-6", type:"translate", arabic:"متى يبدأ صعود الرحلة؟", options:["What time does the flight board?","When flight board?","Flight board what time?","Board flight when?"], correctAnswer:"What time does the flight board?", explanation:"السؤال عن الصعود", xp:15 },
      { id:"ai2-t2-7", type:"matching", pairs:[{en:"board",ar:"يصعد"},{en:"depart",ar:"يغادر"},{en:"arrival",ar:"وصول"},{en:"luggage",ar:"أمتعة"},{en:"time",ar:"وقت"},{en:"gate",ar:"بوابة"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"ai2-t2-8", type:"fill_blank", blankSentence:"What time does the flight ___", blankOptions:["depart","gate","luggage"], correctAnswer:"depart", explanation:"depart = يغادر", xp:15 },
      { id:"ai2-t2-9", type:"listen_select", listenSentence:"The flight departs at nine", options:["departs","board","arrival","gate"], correctAnswer:"departs", explanation:"departs = يغادر", xp:14 },
    ],
    t3: [
      { id:"ai2-t3-1", type:"word_order", sentence:"What time does the flight depart and board", correctAnswer:"What time does the flight depart and board", explanation:"السؤال عن المغادرة والصعود", xp:18 },
      { id:"ai2-t3-2", type:"translate", arabic:"رحلتي تغادر الساعة السابعة وتصل التاسعة", options:["My flight departs at seven and arrives at nine","Flight departs seven arrives nine","My seven departs nine arrives","Departs seven arrives nine flight"], correctAnswer:"My flight departs at seven and arrives at nine", explanation:"أوقات الرحلة", xp:20 },
      { id:"ai2-t3-3", type:"listen_select", listenSentence:"Where is my luggage", options:["luggage","departure","arrival","gate"], correctAnswer:"luggage", explanation:"my luggage = أمتعتي", xp:18 },
      { id:"ai2-t3-4", type:"fill_blank", blankSentence:"The flight departs at six and ___ at eight", blankOptions:["arrives","board","luggage"], correctAnswer:"arrives", explanation:"arrives = يصل", xp:18 },
      { id:"ai2-t3-5", type:"matching", pairs:[{en:"departure",ar:"مغادرة"},{en:"arrival",ar:"وصول"},{en:"board",ar:"يصعد"},{en:"luggage",ar:"أمتعة"},{en:"time",ar:"وقت"},{en:"depart",ar:"يغادر"}], correctAnswer:"matched", explanation:"رائع! راجعت جمل السفر", xp:18 },
      { id:"ai2-t3-6", type:"word_order", sentence:"My flight departs at eight", correctAnswer:"My flight departs at eight", explanation:"وقت المغادرة", xp:18 },
      { id:"ai2-t3-7", type:"translate", arabic:"أين أجد أمتعتي بعد الوصول؟", options:["Where can I find my luggage after arrival?","Where luggage after arrival?","My luggage where after arrival?","After arrival luggage where?"], correctAnswer:"Where can I find my luggage after arrival?", explanation:"سؤال بعد الوصول", xp:20 },
    ],
  },

  // ── الدرس 3: في الطائرة ──
  "في الطائرة": {
    t0: [
      { id:"ai3-t0-1", type:"translate", arabic:"مقعد", options:["seat","belt","window","aisle"], correctAnswer:"seat", explanation:"seat = مقعد 💺", xp:10 },
      { id:"ai3-t0-2", type:"listen_select", listenSentence:"window seat", options:["window","aisle","seat","belt"], correctAnswer:"window", explanation:"window seat = مقعد النافذة", xp:10 },
      { id:"ai3-t0-3", type:"translate", arabic:"حزام الأمان", options:["seat belt","window","aisle","seat"], correctAnswer:"seat belt", explanation:"seat belt = حزام الأمان", xp:10 },
      { id:"ai3-t0-4", type:"word_order", sentence:"This is my seat", correctAnswer:"This is my seat", explanation:"This is my seat = هذا مقعدي", xp:12 },
      { id:"ai3-t0-5", type:"listen_select", listenSentence:"the aisle seat", options:["aisle","window","seat","belt"], correctAnswer:"aisle", explanation:"aisle seat = مقعد الممر", xp:12 },
      { id:"ai3-t0-6", type:"translate", arabic:"مقعد النافذة", options:["window seat","aisle seat","seat belt","my seat"], correctAnswer:"window seat", explanation:"window seat = مقعد النافذة", xp:10 },
      { id:"ai3-t0-7", type:"word_order", sentence:"Please fasten your seat belt", correctAnswer:"Please fasten your seat belt", explanation:"اربط حزام الأمان من فضلك", xp:12 },
      { id:"ai3-t0-8", type:"fill_blank", blankSentence:"This is my window ___", blankOptions:["seat","belt","aisle"], correctAnswer:"seat", explanation:"window seat = مقعد النافذة", xp:12 },
      { id:"ai3-t0-9", type:"matching", pairs:[{en:"seat",ar:"مقعد"},{en:"window seat",ar:"مقعد نافذة"},{en:"aisle seat",ar:"مقعد ممر"},{en:"seat belt",ar:"حزام الأمان"},{en:"airplane",ar:"طائرة"},{en:"landing",ar:"هبوط"}], correctAnswer:"matched", explanation:"أحسنت!", xp:15 },
    ],
    t1: [
      { id:"ai3-t1-1", type:"word_order", sentence:"I want a window seat", correctAnswer:"I want a window seat", explanation:"أريد مقعد نافذة", xp:13 },
      { id:"ai3-t1-2", type:"translate", arabic:"أين مقعدي؟", options:["Where is my seat?","Where my seat?","Seat where my?","My seat where?"], correctAnswer:"Where is my seat?", explanation:"السؤال عن المقعد", xp:13 },
      { id:"ai3-t1-3", type:"listen_select", listenSentence:"fasten your seat belt", options:["belt","seat","window","aisle"], correctAnswer:"belt", explanation:"seat belt = حزام الأمان", xp:12 },
      { id:"ai3-t1-4", type:"fill_blank", blankSentence:"I want an ___ seat", blankOptions:["aisle","belt","window"], correctAnswer:"aisle", explanation:"aisle seat = مقعد الممر", xp:13 },
      { id:"ai3-t1-5", type:"word_order", sentence:"The plane is landing now", correctAnswer:"The plane is landing now", explanation:"الطائرة تهبط الآن", xp:13 },
      { id:"ai3-t1-6", type:"translate", arabic:"اربط حزام الأمان", options:["Fasten your seat belt","Fasten seat belt your","Your belt fasten seat","Seat belt fasten your"], correctAnswer:"Fasten your seat belt", explanation:"تعليمة السلامة", xp:13 },
      { id:"ai3-t1-7", type:"matching", pairs:[{en:"window seat",ar:"مقعد نافذة"},{en:"aisle seat",ar:"مقعد ممر"},{en:"seat belt",ar:"حزام الأمان"},{en:"landing",ar:"هبوط"},{en:"seat",ar:"مقعد"},{en:"airplane",ar:"طائرة"}], correctAnswer:"matched", explanation:"رائع!", xp:15 },
      { id:"ai3-t1-8", type:"fill_blank", blankSentence:"The plane is ___ now", blankOptions:["landing","seat","belt"], correctAnswer:"landing", explanation:"landing = الهبوط", xp:13 },
      { id:"ai3-t1-9", type:"listen_select", listenSentence:"a window seat please", options:["window","aisle","seat","belt"], correctAnswer:"window", explanation:"window seat = مقعد النافذة", xp:12 },
    ],
    t2: [
      { id:"ai3-t2-1", type:"word_order", sentence:"Could I have a window seat please", correctAnswer:"Could I have a window seat please", explanation:"طلب مهذب لمقعد النافذة", xp:14 },
      { id:"ai3-t2-2", type:"translate", arabic:"أفضّل مقعد الممر", options:["I prefer an aisle seat","I prefer aisle seat an","Aisle seat I prefer","Prefer I aisle an seat"], correctAnswer:"I prefer an aisle seat", explanation:"تفضيل المقعد", xp:15 },
      { id:"ai3-t2-3", type:"listen_select", listenSentence:"Please fasten your seat belt", options:["belt","seat","window","landing"], correctAnswer:"belt", explanation:"seat belt = حزام الأمان", xp:14 },
      { id:"ai3-t2-4", type:"fill_blank", blankSentence:"Please fasten your seat ___", blankOptions:["belt","window","aisle"], correctAnswer:"belt", explanation:"seat belt = حزام الأمان", xp:15 },
      { id:"ai3-t2-5", type:"word_order", sentence:"The plane is landing in ten minutes", correctAnswer:"The plane is landing in ten minutes", explanation:"الطائرة تهبط خلال عشر دقائق", xp:14 },
      { id:"ai3-t2-6", type:"translate", arabic:"هل يمكنني الحصول على مقعد نافذة؟", options:["Could I have a window seat?","Could window seat I?","Window seat could I?","I could window seat?"], correctAnswer:"Could I have a window seat?", explanation:"طلب المقعد", xp:15 },
      { id:"ai3-t2-7", type:"matching", pairs:[{en:"window seat",ar:"مقعد نافذة"},{en:"aisle seat",ar:"مقعد ممر"},{en:"seat belt",ar:"حزام الأمان"},{en:"landing",ar:"هبوط"},{en:"airplane",ar:"طائرة"},{en:"seat",ar:"مقعد"}], correctAnswer:"matched", explanation:"ممتاز!", xp:16 },
      { id:"ai3-t2-8", type:"fill_blank", blankSentence:"I prefer a ___ seat", blankOptions:["window","belt","landing"], correctAnswer:"window", explanation:"window seat = مقعد النافذة", xp:15 },
      { id:"ai3-t2-9", type:"listen_select", listenSentence:"The plane is landing", options:["landing","window","aisle","seat"], correctAnswer:"landing", explanation:"landing = الهبوط", xp:14 },
    ],
    t3: [
      { id:"ai3-t3-1", type:"word_order", sentence:"Could I have a window seat near the front please", correctAnswer:"Could I have a window seat near the front please", explanation:"طلب مفصّل لمقعد", xp:18 },
      { id:"ai3-t3-2", type:"translate", arabic:"اربط حزام الأمان، الطائرة تهبط الآن", options:["Fasten your seat belt, the plane is landing now","Fasten belt plane landing","Belt fasten plane landing now","Plane landing fasten belt now"], correctAnswer:"Fasten your seat belt, the plane is landing now", explanation:"تعليمة الهبوط", xp:20 },
      { id:"ai3-t3-3", type:"listen_select", listenSentence:"a window seat please", options:["window","aisle","belt","landing"], correctAnswer:"window", explanation:"window seat = مقعد النافذة", xp:18 },
      { id:"ai3-t3-4", type:"fill_blank", blankSentence:"Please fasten your seat belt before ___", blankOptions:["landing","seat","window"], correctAnswer:"landing", explanation:"before landing = قبل الهبوط", xp:18 },
      { id:"ai3-t3-5", type:"matching", pairs:[{en:"window seat",ar:"مقعد نافذة"},{en:"aisle seat",ar:"مقعد ممر"},{en:"seat belt",ar:"حزام الأمان"},{en:"landing",ar:"هبوط"},{en:"airplane",ar:"طائرة"},{en:"seat",ar:"مقعد"}], correctAnswer:"matched", explanation:"رائع! راجعت كلمات الطائرة", xp:18 },
      { id:"ai3-t3-6", type:"word_order", sentence:"I prefer a window seat", correctAnswer:"I prefer a window seat", explanation:"تفضيل المقعد", xp:18 },
      { id:"ai3-t3-7", type:"translate", arabic:"هل يمكنني الحصول على مقعد ممر قرب المقدمة؟", options:["Could I have an aisle seat near the front?","Could aisle seat front near?","Aisle seat near front could?","Near front aisle seat could I?"], correctAnswer:"Could I have an aisle seat near the front?", explanation:"طلب مفصّل", xp:20 },
    ],
  },

  // ── التحدي: تحدي الوحدة ──
  "تحدي الوحدة": {
    t0: [
      { id:"aic-t0-1", type:"word_order", sentence:"This is my ticket and passport", correctAnswer:"This is my ticket and passport", explanation:"وثائق السفر", xp:15 },
      { id:"aic-t0-2", type:"translate", arabic:"أين بوابة الصعود؟", options:["Where is the boarding gate?","Where boarding gate?","Boarding where gate?","Gate boarding where?"], correctAnswer:"Where is the boarding gate?", explanation:"السؤال عن البوابة", xp:15 },
      { id:"aic-t0-3", type:"listen_select", listenSentence:"a window seat please", options:["window","aisle","gate","ticket"], correctAnswer:"window", explanation:"window seat = مقعد النافذة", xp:15 },
      { id:"aic-t0-4", type:"fill_blank", blankSentence:"My flight is at ___ five", blankOptions:["gate","time","seat"], correctAnswer:"gate", explanation:"at gate five = عند البوابة خمسة", xp:15 },
      { id:"aic-t0-5", type:"matching", pairs:[{en:"ticket",ar:"تذكرة"},{en:"gate",ar:"بوابة"},{en:"seat",ar:"مقعد"},{en:"luggage",ar:"أمتعة"},{en:"flight",ar:"رحلة"},{en:"landing",ar:"هبوط"}], correctAnswer:"matched", explanation:"أحسنت!", xp:16 },
      { id:"aic-t0-6", type:"translate", arabic:"اربط حزام الأمان", options:["Fasten your seat belt","Fasten belt seat","Belt fasten seat","Seat belt fasten"], correctAnswer:"Fasten your seat belt", explanation:"تعليمة السلامة", xp:15 },
      { id:"aic-t0-7", type:"word_order", sentence:"What time does the flight board", correctAnswer:"What time does the flight board", explanation:"وقت الصعود", xp:15 },
    ],
    t1: [
      { id:"aic-t1-1", type:"translate", arabic:"رحلتي تغادر الساعة الثامنة", options:["My flight departs at eight","Flight departs eight","My eight departs flight","Departs eight flight my"], correctAnswer:"My flight departs at eight", explanation:"وقت المغادرة", xp:16 },
      { id:"aic-t1-2", type:"word_order", sentence:"Where can I find my luggage", correctAnswer:"Where can I find my luggage", explanation:"البحث عن الأمتعة", xp:16 },
      { id:"aic-t1-3", type:"listen_select", listenSentence:"Please fasten your seat belt", options:["belt","seat","window","gate"], correctAnswer:"belt", explanation:"seat belt = حزام الأمان", xp:16 },
      { id:"aic-t1-4", type:"fill_blank", blankSentence:"I prefer a ___ seat", blankOptions:["window","gate","ticket"], correctAnswer:"window", explanation:"window seat = مقعد النافذة", xp:16 },
      { id:"aic-t1-5", type:"matching", pairs:[{en:"departure",ar:"مغادرة"},{en:"arrival",ar:"وصول"},{en:"boarding",ar:"صعود"},{en:"seat belt",ar:"حزام الأمان"},{en:"luggage",ar:"أمتعة"},{en:"gate",ar:"بوابة"}], correctAnswer:"matched", explanation:"رائع!", xp:17 },
      { id:"aic-t1-6", type:"translate", arabic:"أين منطقة الوصول؟", options:["Where is the arrival area?","Where arrival?","Arrival where area?","Area where arrival?"], correctAnswer:"Where is the arrival area?", explanation:"السؤال عن الوصول", xp:16 },
      { id:"aic-t1-7", type:"word_order", sentence:"This is my boarding pass", correctAnswer:"This is my boarding pass", explanation:"بطاقة الصعود", xp:16 },
    ],
    t2: [
      { id:"aic-t2-1", type:"word_order", sentence:"My flight is now boarding at gate ten", correctAnswer:"My flight is now boarding at gate ten", explanation:"إعلان الصعود", xp:18 },
      { id:"aic-t2-2", type:"translate", arabic:"هل يمكنني الحصول على مقعد نافذة؟", options:["Could I have a window seat?","Could window seat?","Window could I seat?","Seat window could?"], correctAnswer:"Could I have a window seat?", explanation:"طلب المقعد", xp:18 },
      { id:"aic-t2-3", type:"listen_select", listenSentence:"What time does it board", options:["board","time","gate","seat"], correctAnswer:"board", explanation:"board = الصعود", xp:18 },
      { id:"aic-t2-4", type:"fill_blank", blankSentence:"The plane is ___ now", blankOptions:["landing","seat","gate"], correctAnswer:"landing", explanation:"landing = الهبوط", xp:18 },
      { id:"aic-t2-5", type:"matching", pairs:[{en:"window seat",ar:"مقعد نافذة"},{en:"aisle seat",ar:"مقعد ممر"},{en:"boarding",ar:"صعود"},{en:"departure",ar:"مغادرة"},{en:"luggage",ar:"أمتعة"},{en:"landing",ar:"هبوط"}], correctAnswer:"matched", explanation:"ممتاز!", xp:18 },
      { id:"aic-t2-6", type:"translate", arabic:"متى تغادر الرحلة؟", options:["What time does the flight depart?","When flight depart?","Flight depart when?","Depart flight what time?"], correctAnswer:"What time does the flight depart?", explanation:"وقت المغادرة", xp:18 },
      { id:"aic-t2-7", type:"word_order", sentence:"Could I have an aisle seat please", correctAnswer:"Could I have an aisle seat please", explanation:"طلب مقعد الممر", xp:18 },
    ],
    t3: [
      { id:"aic-t3-1", type:"word_order", sentence:"My flight is now boarding at gate five please go there", correctAnswer:"My flight is now boarding at gate five please go there", explanation:"إعلان شامل للصعود", xp:22 },
      { id:"aic-t3-2", type:"translate", arabic:"معي تذكرتي وجوازي وأبحث عن البوابة", options:["I have my ticket and passport and I am looking for the gate","I ticket passport looking gate","My ticket passport gate looking","I have ticket gate passport looking"], correctAnswer:"I have my ticket and passport and I am looking for the gate", explanation:"جملة سفر شاملة", xp:22 },
      { id:"aic-t3-3", type:"listen_select", listenSentence:"Please fasten your seat belt", options:["belt","seat","window","landing"], correctAnswer:"belt", explanation:"seat belt = حزام الأمان", xp:20 },
      { id:"aic-t3-4", type:"fill_blank", blankSentence:"The flight departs at seven and ___ at nine", blankOptions:["arrives","board","gate"], correctAnswer:"arrives", explanation:"arrives = يصل", xp:22 },
      { id:"aic-t3-5", type:"matching", pairs:[{en:"ticket",ar:"تذكرة"},{en:"gate",ar:"بوابة"},{en:"boarding",ar:"صعود"},{en:"window seat",ar:"مقعد نافذة"},{en:"landing",ar:"هبوط"},{en:"luggage",ar:"أمتعة"}], correctAnswer:"matched", explanation:"رائع! أتقنت الوحدة 👑", xp:22 },
      { id:"aic-t3-6", type:"word_order", sentence:"Where is the boarding gate please", correctAnswer:"Where is the boarding gate please", explanation:"سؤال مهذب", xp:22 },
      { id:"aic-t3-7", type:"translate", arabic:"رحلتي تصعد عند البوابة الثامنة وأفضّل مقعد نافذة", options:["My flight boards at gate eight and I prefer a window seat","Flight gate eight window seat","My gate eight prefer window","Boards gate eight window prefer"], correctAnswer:"My flight boards at gate eight and I prefer a window seat", explanation:"جملة سفر كاملة 👑", xp:24 },
    ],
  },
};
