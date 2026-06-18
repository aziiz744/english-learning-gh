// رسوم SVG واضحة جداً للمفردات — بديل الإيموجي
import type { ReactElement } from "react";

function Cup({ liquid, liquidTop, steam = false }: { liquid: string; liquidTop: string; steam?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      {steam && (
        <>
          <path d="M40 22 Q34 14 40 6" stroke="#cbd5e1" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
          <path d="M52 22 Q58 14 52 6" stroke="#cbd5e1" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
        </>
      )}
      <ellipse cx="50" cy="88" rx="34" ry="7" fill="#cbd5e1"/>
      <ellipse cx="50" cy="86" rx="34" ry="6" fill="#e2e8f0"/>
      <path d="M24 34 L28 76 Q28 82 36 82 L64 82 Q72 82 72 76 L76 34 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5"/>
      <path d="M27 38 L30 74 Q30 78 36 78 L64 78 Q70 78 70 74 L73 38 Z" fill={liquid}/>
      <ellipse cx="50" cy="38" rx="22" ry="5" fill={liquidTop}/>
      <path d="M76 42 Q90 42 90 54 Q90 66 74 64" stroke="#94a3b8" strokeWidth="4" fill="none"/>
      <path d="M34 42 L37 70" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export const DRINK_ART: Record<string, ReactElement> = {
  tea: <Cup liquid="#b45309" liquidTop="#d97706" steam />,
  coffee: <Cup liquid="#3b2414" liquidTop="#5c3a21" steam />,
  water: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M32 18 L36 84 Q36 88 42 88 L58 88 Q64 88 64 84 L68 18 Z" fill="#dbeafe" stroke="#60a5fa" strokeWidth="2.5" opacity="0.5"/>
      <path d="M34 32 L37 82 Q37 85 42 85 L58 85 Q63 85 63 82 L66 32 Z" fill="#3b82f6" opacity="0.55"/>
      <ellipse cx="50" cy="32" rx="16" ry="3.5" fill="#60a5fa"/>
      <circle cx="45" cy="55" r="2.5" fill="#bfdbfe"/>
      <circle cx="55" cy="65" r="2" fill="#bfdbfe"/>
      <circle cx="48" cy="72" r="1.8" fill="#bfdbfe"/>
      <path d="M40 36 L43 80" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  juice: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M30 26 L34 84 Q34 88 40 88 L60 88 Q66 88 66 84 L70 26 Z" fill="#fed7aa" stroke="#fb923c" strokeWidth="2.5" opacity="0.6"/>
      <path d="M32 38 L35 82 Q35 85 40 85 L60 85 Q65 85 65 82 L68 38 Z" fill="#f97316"/>
      <ellipse cx="50" cy="38" rx="18" ry="4" fill="#fb923c"/>
      <rect x="56" y="14" width="5" height="40" rx="2.5" fill="#ef4444" transform="rotate(12 58 34)"/>
      <circle cx="68" cy="32" r="9" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5"/>
      <path d="M68 23 L68 41 M59 32 L77 32 M62 26 L74 38 M74 26 L62 38" stroke="#fed7aa" strokeWidth="1.2"/>
    </svg>
  ),
  milk: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <ellipse cx="50" cy="88" rx="32" ry="6" fill="#e2e8f0"/>
      <path d="M28 30 L32 80 Q32 85 38 85 L62 85 Q68 85 68 80 L72 30 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2.5"/>
      <path d="M31 36 L34 78 Q34 82 38 82 L62 82 Q66 82 66 78 L69 36 Z" fill="#ffffff"/>
      <ellipse cx="50" cy="36" rx="19" ry="4.5" fill="#f1f5f9"/>
      <ellipse cx="50" cy="36" rx="10" ry="2.5" fill="#fdfdfd"/>
      <path d="M38 40 L41 76" stroke="rgba(203,213,225,0.5)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  yes: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#dcfce7" stroke="#22c55e" strokeWidth="3"/>
      <path d="M32 52 L45 66 L70 36" stroke="#16a34a" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  no: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#fee2e2" stroke="#ef4444" strokeWidth="3"/>
      <path d="M36 36 L64 64 M64 36 L36 64" stroke="#dc2626" strokeWidth="9" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  please: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3"/>
      <circle cx="40" cy="46" r="4" fill="#92400e"/>
      <circle cx="60" cy="46" r="4" fill="#92400e"/>
      <path d="M36 62 Q50 72 64 62" stroke="#92400e" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  "thank you": (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#fce7f3" stroke="#ec4899" strokeWidth="3"/>
      <path d="M50 70 C30 54 32 38 44 38 C50 38 50 44 50 46 C50 44 50 38 56 38 C68 38 70 54 50 70 Z" fill="#ec4899"/>
    </svg>
  ),
  sorry: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#e0e7ff" stroke="#6366f1" strokeWidth="3"/>
      <circle cx="40" cy="44" r="4" fill="#3730a3"/>
      <circle cx="60" cy="44" r="4" fill="#3730a3"/>
      <path d="M36 66 Q50 56 64 66" stroke="#3730a3" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  more: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3"/>
      <path d="M50 30 L50 70 M30 50 L70 50" stroke="#2563eb" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  ),
  some: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#f3e8ff" stroke="#a855f7" strokeWidth="3"/>
      <circle cx="36" cy="50" r="6" fill="#9333ea"/>
      <circle cx="50" cy="50" r="6" fill="#9333ea"/>
      <circle cx="64" cy="50" r="6" fill="#9333ea"/>
    </svg>
  ),
  "would like": (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#d1fae5" stroke="#10b981" strokeWidth="3"/>
      <path d="M50 32 C44 32 42 38 42 44 L42 58 L38 54 C35 51 31 55 34 58 L44 70 Q48 74 54 74 L62 74 Q68 74 68 66 L68 48 Q68 44 64 44 Q60 44 60 48 L60 44 Q60 40 56 40 Q52 40 52 44 L52 38 Q52 32 50 32 Z" fill="#34d399" stroke="#059669" strokeWidth="1.5"/>
    </svg>
  ),
};

export function DrinkArt({ label }: { label: string }): ReactElement {
  const key = label.toLowerCase().trim();
  return DRINK_ART[key] ?? (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="38" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="3"/>
      <text x="50" y="62" fontSize="34" textAnchor="middle">🥤</text>
    </svg>
  );
}
