// رسوم SVG احترافية واضحة للمشروبات — بديل الإيموجي
import type { ReactElement } from "react";

// كوب مشروب ساخن (شاي/قهوة) — بطبق وبخار ومقبض
function HotCup({ liquid, liquidTop, rim }: { liquid: string; liquidTop: string; rim: string }) {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id={`hc-${liquid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={liquidTop}/>
          <stop offset="100%" stopColor={liquid}/>
        </linearGradient>
      </defs>
      {/* بخار */}
      <path d="M40 20 Q34 13 40 6 Q44 11 40 20" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" opacity="0.65"/>
      <path d="M52 20 Q58 13 52 6 Q48 11 52 20" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" opacity="0.65"/>
      <path d="M60 22 Q65 16 60 10" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      {/* طبق */}
      <ellipse cx="50" cy="90" rx="36" ry="7" fill="#cbd5e1"/>
      <ellipse cx="50" cy="88" rx="36" ry="6" fill="#eef2f6"/>
      {/* المقبض */}
      <path d="M74 44 Q90 44 90 58 Q90 70 73 67" stroke="#cbd5e1" strokeWidth="6" fill="none"/>
      <path d="M74 46 Q86 46 86 58 Q86 67 73 65" stroke="#ffffff" strokeWidth="3" fill="none"/>
      {/* جسم الكوب */}
      <path d="M24 34 L28 78 Q29 84 38 84 L62 84 Q71 84 72 78 L76 34 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5"/>
      {/* السائل */}
      <path d="M27 38 L30 76 Q31 80 38 80 L62 80 Q69 80 70 76 L73 38 Z" fill={`url(#hc-${liquid})`}/>
      {/* سطح السائل */}
      <ellipse cx="50" cy="38" rx="23" ry="5.5" fill={rim}/>
      <ellipse cx="50" cy="37" rx="18" ry="3.5" fill={liquidTop} opacity="0.6"/>
      {/* لمعة */}
      <path d="M34 44 L37 72" stroke="rgba(255,255,255,0.55)" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

// إيموجي معبّرة للكلمات البصرية في كل الوحدات (واضحة ومفهومة)
const EMOJI_ART: Record<string, string> = {
  // مشروبات
  tea:"🍵", coffee:"☕", water:"💧", juice:"🧃", milk:"🥛", drink:"🥤",
  // أماكن
  school:"🏫", hospital:"🏥", market:"🏪", park:"🌳", bank:"🏦", city:"🏙️",
  street:"🛣️", house:"🏠", restaurant:"🍽️", store:"🏬", mosque:"🕌", library:"📚",
  station:"🚉", bridge:"🌉", square:"⛲", hotel:"🏨", reception:"🛎️", office:"🏢",
  // مطار وسفر
  ticket:"🎫", passport:"🛂", gate:"🚪", plane:"✈️", bag:"🧳", airport:"🛫",
  // طعام
  rice:"🍚", chicken:"🍗", bread:"🍞", fish:"🐟", egg:"🥚", apple:"🍎",
  meat:"🥩", soup:"🍲", salad:"🥗", cheese:"🧀", fruit:"🍇", cake:"🍰",
  menu:"📋", bill:"🧾", receipt:"🧾", plate:"🍽️", card:"💳", cart:"🛒",
  // طقس وطبيعة
  sunny:"☀️", rainy:"🌧️", cloudy:"☁️", snowy:"❄️", windy:"💨", hot:"🔥", cold:"🧊",
  mountain:"⛰️", river:"🏞️", forest:"🌲", beach:"🏖️", sea:"🌊", lake:"🏞️",
  // حيوانات
  cat:"🐱", dog:"🐶", bird:"🐦", rabbit:"🐰", horse:"🐴", cow:"🐮", duck:"🦆",
  // مهن
  teacher:"👩‍🏫", doctor:"👨‍⚕️", driver:"🚗", cook:"👨‍🍳", nurse:"👩‍⚕️", police:"👮", boss:"👔",
  // ملابس
  shirt:"👕", dress:"👗", pants:"👖", jeans:"👖", shoes:"👟", jacket:"🧥",
  scarf:"🧣", hat:"🎩", sweater:"🧶", coat:"🧥", socks:"🧦", gloves:"🧤",
  // منزل
  door:"🚪", window:"🪟", kitchen:"🍳", bedroom:"🛏️", bathroom:"🛁",
  "living room":"🛋️", room:"🚪", table:"🪑", chair:"🪑", bed:"🛏️",
  // عائلة
  father:"👨", mother:"👩", brother:"👦", sister:"👧",
  grandfather:"👴", grandmother:"👵", uncle:"🧔", aunt:"👩", family:"👨‍👩‍👧‍👦",
  // مشاعر
  happy:"😊", sad:"😢", angry:"😠", tired:"😫", scared:"😨", excited:"🤩",
  bored:"😑", worried:"😟", calm:"😌", proud:"😎",
  // مدرسة
  math:"🔢", science:"🔬", history:"📜", art:"🎨", music:"🎵",
  book:"📖", pen:"🖊️", paper:"📄", homework:"📝", exam:"📝",
  // أدوات
  phone:"📱", watch:"⌚", clock:"🕐", alarm:"⏰", calendar:"📅", key:"🔑",
  wallet:"👛", glasses:"👓", umbrella:"☂️", laptop:"💻", email:"📧", report:"📊",
  // رياضة
  football:"⚽", basketball:"🏀", tennis:"🎾", swimming:"🏊", volleyball:"🏐",
  running:"🏃", "wake up":"⏰", shower:"🚿", sleep:"😴",
  // جسم وصحة
  head:"🧠", stomach:"🫃", foot:"🦶", tooth:"🦷", throat:"😷",
  // سلامة
  danger:"⚠️", warning:"⚠️", careful:"🚸", stop:"🛑", fire:"🔥",
  emergency:"🚨", police_car:"🚓", ambulance:"🚑", exit:"🚪",
  // أفعال
  sit:"🪑", stand:"🧍", open:"🔓", close:"🔒", listen:"👂", look:"👀",
  eat:"🍽️", come:"👋", press:"👆", put:"📥", take:"✋", follow:"👣",
  // ظروف التكرار (رموز تقريبية)
  always:"💯", usually:"🔄", sometimes:"🔸", never:"🚫",
};

export const DRINK_ART: Record<string, ReactElement> = {
  tea: <HotCup liquid="#a16207" liquidTop="#ca8a04" rim="#d97706"/>,
  coffee: <HotCup liquid="#422006" liquidTop="#6b3a1a" rim="#7c4a2a"/>,
  water: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="water-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
      </defs>
      {/* كأس */}
      <path d="M30 16 L35 86 Q35 90 42 90 L58 90 Q65 90 65 86 L70 16 Z" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2.5"/>
      {/* الماء */}
      <path d="M33 34 L37 83 Q37 86 42 86 L58 86 Q63 86 63 83 L67 34 Z" fill="url(#water-g)" opacity="0.75"/>
      <ellipse cx="50" cy="34" rx="17" ry="3.5" fill="#93c5fd"/>
      {/* فقاعات */}
      <circle cx="44" cy="54" r="3" fill="#dbeafe" opacity="0.9"/>
      <circle cx="56" cy="64" r="2.3" fill="#dbeafe" opacity="0.9"/>
      <circle cx="47" cy="74" r="2" fill="#dbeafe" opacity="0.9"/>
      {/* لمعة */}
      <path d="M39 38 L43 82" stroke="rgba(255,255,255,0.7)" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  ),
  juice: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="juice-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c"/>
          <stop offset="100%" stopColor="#ea580c"/>
        </linearGradient>
      </defs>
      {/* كأس */}
      <path d="M28 26 L33 86 Q33 90 40 90 L60 90 Q67 90 67 86 L72 26 Z" fill="#fff7ed" stroke="#fdba74" strokeWidth="2.5"/>
      {/* العصير */}
      <path d="M31 38 L35 84 Q35 87 40 87 L60 87 Q65 87 65 84 L69 38 Z" fill="url(#juice-g)"/>
      <ellipse cx="50" cy="38" rx="19" ry="4" fill="#fb923c"/>
      {/* شفّاطة */}
      <rect x="56" y="12" width="5.5" height="42" rx="2.75" fill="#ef4444" transform="rotate(12 58 33)"/>
      <rect x="56" y="12" width="2" height="42" rx="1" fill="#fca5a5" transform="rotate(12 58 33)"/>
      {/* شريحة برتقال */}
      <circle cx="70" cy="30" r="10" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5"/>
      <circle cx="70" cy="30" r="10" fill="none" stroke="#fed7aa" strokeWidth="1"/>
      <path d="M70 20 L70 40 M60 30 L80 30 M63 23 L77 37 M77 23 L63 37" stroke="#fff7ed" strokeWidth="1.3"/>
      {/* لمعة */}
      <path d="M37 42 L40 82" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  milk: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="milk-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#f1f5f9"/>
        </linearGradient>
      </defs>
      {/* طبق */}
      <ellipse cx="50" cy="90" rx="32" ry="6" fill="#e2e8f0"/>
      {/* كوب */}
      <path d="M28 30 L32 82 Q33 87 42 87 L58 87 Q67 87 68 82 L72 30 Z" fill="url(#milk-g)" stroke="#cbd5e1" strokeWidth="2.5"/>
      {/* الحليب */}
      <path d="M31 40 L34 80 Q35 84 42 84 L58 84 Q65 84 66 80 L69 40 Z" fill="#ffffff"/>
      <ellipse cx="50" cy="40" rx="19" ry="4.5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
      {/* قطرات */}
      <ellipse cx="44" cy="52" rx="3" ry="4" fill="#f1f5f9"/>
      {/* لمعة */}
      <path d="M37 44 L40 78" stroke="rgba(203,213,225,0.6)" strokeWidth="3" strokeLinecap="round"/>
      {/* حافة زرقاء */}
      <path d="M28 30 L72 30" stroke="#bfdbfe" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
};

// حوّل إيموجي إلى رمز يونيكود لرابط Twemoji
function emojiToCodepoint(emoji: string): string {
  const cps: string[] = [];
  for (const ch of emoji) {
    const cp = ch.codePointAt(0);
    if (cp && cp !== 0xFE0F) cps.push(cp.toString(16)); // تجاهل variation selector
  }
  return cps.join("-");
}

// مكوّن صورة Twemoji واضحة (PNG من CDN)
function TwemojiImg({ emoji }: { emoji: string }) {
  const code = emojiToCodepoint(emoji);
  const url = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/${code}.png`;
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <img src={url} alt="" draggable={false}
        style={{ width:"82%", height:"82%", objectFit:"contain" }}
        onError={(e)=>{ // لو فشل التحميل، اعرض الإيموجي العادي
          const t = e.currentTarget; t.style.display="none";
          const span = t.nextElementSibling as HTMLElement; if (span) span.style.display="flex";
        }}/>
      <span style={{ display:"none", fontSize:46, alignItems:"center", justifyContent:"center", width:"100%", height:"100%" }}>{emoji}</span>
    </div>
  );
}

export function DrinkArt({ label }: { label: string }): ReactElement {
  const key = label.toLowerCase().trim();
  // كل الكلمات البصرية (مشروبات وغيرها) بصور Twemoji واضحة عالية الجودة
  if (EMOJI_ART[key]) {
    return (
      <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow:"visible" }}>
        <circle cx="50" cy="50" r="44" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
        <foreignObject x="14" y="14" width="72" height="72">
          <TwemojiImg emoji={EMOJI_ART[key]}/>
        </foreignObject>
      </svg>
    );
  }
  // المشروبات المرسومة بـ SVG (احتياطي لو ما فيه إيموجي)
  if (DRINK_ART[key]) return DRINK_ART[key];
  // افتراضي
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="3"/>
      <text x="50" y="62" fontSize="34" textAnchor="middle">📦</text>
    </svg>
  );
}
