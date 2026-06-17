// رسوم SVG احترافية للمفردات — بديل الإيموجي
import type { ReactElement } from "react";

export const DRINK_ART: Record<string, ReactElement> = {
  tea: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <defs><linearGradient id="teaCup" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fff"/><stop offset="100%" stopColor="#e2e8f0"/></linearGradient></defs>
      {/* بخار */}
      <path d="M32 18 Q28 12 32 8" stroke="#cbd5e1" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M42 18 Q46 12 42 8" stroke="#cbd5e1" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* الصحن */}
      <ellipse cx="40" cy="68" rx="28" ry="6" fill="#cbd5e1"/>
      {/* الكوب */}
      <path d="M20 30 L24 60 Q24 64 28 64 L52 64 Q56 64 56 60 L60 30 Z" fill="url(#teaCup)" stroke="#94a3b8" strokeWidth="1.5"/>
      {/* الشاي */}
      <ellipse cx="40" cy="32" rx="19" ry="4" fill="#b45309"/>
      <ellipse cx="40" cy="32" rx="16" ry="3" fill="#d97706"/>
      {/* المقبض */}
      <path d="M60 38 Q70 38 70 46 Q70 54 58 52" stroke="#94a3b8" strokeWidth="3" fill="none"/>
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <defs><linearGradient id="cofCup" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#78350f"/></linearGradient></defs>
      <path d="M32 16 Q28 10 32 6" stroke="#d6c4b0" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M42 16 Q46 10 42 6" stroke="#d6c4b0" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <ellipse cx="40" cy="68" rx="28" ry="6" fill="#cbd5e1"/>
      <path d="M18 28 L22 60 Q22 64 26 64 L54 64 Q58 64 58 60 L62 28 Z" fill="url(#cofCup)" stroke="#5c2e0a" strokeWidth="1.5"/>
      <ellipse cx="40" cy="30" rx="21" ry="4.5" fill="#451a03"/>
      <ellipse cx="40" cy="29" rx="17" ry="3" fill="#3d2817"/>
      {/* فقاعات الكريمة */}
      <circle cx="36" cy="29" r="2" fill="#d6c4b0" opacity="0.6"/>
      <circle cx="44" cy="30" r="1.5" fill="#d6c4b0" opacity="0.5"/>
      <path d="M62 36 Q72 36 72 44 Q72 52 60 50" stroke="#5c2e0a" strokeWidth="3" fill="none"/>
    </svg>
  ),
  water: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <defs><linearGradient id="waterG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7dd3fc"/><stop offset="100%" stopColor="#0ea5e9"/></linearGradient></defs>
      {/* الكأس */}
      <path d="M26 18 L30 64 Q30 68 34 68 L46 68 Q50 68 50 64 L54 18 Z" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1.5" opacity="0.5"/>
      {/* الماء */}
      <path d="M28 32 L31 63 Q31 66 34 66 L46 66 Q49 66 49 63 L52 32 Z" fill="url(#waterG)" opacity="0.85"/>
      {/* سطح الماء */}
      <ellipse cx="40" cy="32" rx="12" ry="2.5" fill="#bae6fd"/>
      {/* لمعة */}
      <path d="M33 38 L35 58" stroke="#fff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
      {/* قطرة */}
      <circle cx="40" cy="14" r="3.5" fill="#38bdf8"/>
    </svg>
  ),
  juice: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <defs><linearGradient id="juiceG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb923c"/><stop offset="100%" stopColor="#ea580c"/></linearGradient></defs>
      {/* الكوب */}
      <path d="M26 22 L30 64 Q30 68 34 68 L46 68 Q50 68 50 64 L54 22 Z" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5" opacity="0.5"/>
      {/* العصير */}
      <path d="M28 30 L31 63 Q31 66 34 66 L46 66 Q49 66 49 63 L52 30 Z" fill="url(#juiceG)"/>
      <ellipse cx="40" cy="30" rx="12" ry="2.5" fill="#fdba74"/>
      {/* شريحة برتقال */}
      <circle cx="52" cy="24" r="8" fill="#fb923c" stroke="#ea580c" strokeWidth="1"/>
      <circle cx="52" cy="24" r="5" fill="#fdba74"/>
      <path d="M52 19 L52 29 M47 24 L57 24" stroke="#ea580c" strokeWidth="0.8"/>
      {/* القشة */}
      <rect x="44" y="14" width="3" height="28" rx="1.5" fill="#ef4444" transform="rotate(12 45 28)"/>
    </svg>
  ),
  milk: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      <defs><linearGradient id="milkG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fff"/><stop offset="100%" stopColor="#f1f5f9"/></linearGradient></defs>
      {/* علبة الحليب */}
      <path d="M28 28 L28 66 Q28 68 30 68 L50 68 Q52 68 52 66 L52 28 Z" fill="url(#milkG)" stroke="#cbd5e1" strokeWidth="1.5"/>
      {/* السقف المثلث */}
      <path d="M28 28 L40 16 L52 28 Z" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5"/>
      <path d="M40 16 L40 28" stroke="#e2e8f0" strokeWidth="1"/>
      {/* شريط أزرق */}
      <rect x="28" y="40" width="24" height="12" fill="#38bdf8"/>
      {/* قطرة حليب */}
      <circle cx="40" cy="46" r="4" fill="#fff"/>
      <text x="40" y="49" fontSize="6" fill="#0284c7" textAnchor="middle" fontWeight="bold">M</text>
    </svg>
  ),
  please: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      {/* يدان مطبقتان (رجاء) */}
      <ellipse cx="40" cy="70" rx="22" ry="5" fill="#e2e8f0"/>
      <path d="M32 60 Q28 40 34 28 Q38 22 40 28 L40 58 Z" fill="#fcd9b8" stroke="#e0a878" strokeWidth="1.2"/>
      <path d="M48 60 Q52 40 46 28 Q42 22 40 28 L40 58 Z" fill="#fcd9b8" stroke="#e0a878" strokeWidth="1.2"/>
      <path d="M40 28 L40 58" stroke="#e0a878" strokeWidth="1"/>
      {/* بريق */}
      <text x="22" y="26" fontSize="12">✨</text>
    </svg>
  ),
  "thank you": (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      {/* قلب */}
      <path d="M40 64 C20 48 18 32 30 28 C36 26 40 32 40 36 C40 32 44 26 50 28 C62 32 60 48 40 64 Z" fill="#f87171" stroke="#dc2626" strokeWidth="1.5"/>
      <ellipse cx="34" cy="38" rx="4" ry="3" fill="#fff" opacity="0.4"/>
    </svg>
  ),
  sorry: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      {/* وجه حزين */}
      <circle cx="40" cy="40" r="26" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2"/>
      <circle cx="31" cy="35" r="3.5" fill="#78350f"/>
      <circle cx="49" cy="35" r="3.5" fill="#78350f"/>
      <path d="M30 52 Q40 44 50 52" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* دمعة */}
      <path d="M31 40 Q31 46 28 46 Q25 46 28 40 Z" fill="#38bdf8"/>
    </svg>
  ),
  more: (
    <svg viewBox="0 0 80 80" width="100%" height="100%">
      {/* علامة زائد دائرية */}
      <circle cx="40" cy="40" r="26" fill="#34d399" stroke="#059669" strokeWidth="2"/>
      <rect x="36" y="26" width="8" height="28" rx="4" fill="#fff"/>
      <rect x="26" y="36" width="28" height="8" rx="4" fill="#fff"/>
    </svg>
  ),
};

// fallback لأي كلمة بدون رسمة
export function DrinkArt({ label }: { label: string }) {
  const art = DRINK_ART[label.toLowerCase()];
  if (art) return art;
  return <span style={{ fontSize: 48 }}>🥤</span>;
}
