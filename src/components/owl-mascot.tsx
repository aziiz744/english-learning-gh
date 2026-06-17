// ── شخصية البومة "English Spark" — SVG ثلاثي الأبعاد مطابق للتصميم الأصلي ──
import { motion } from "framer-motion";

export type OwlState = "idle" | "correct" | "wrong" | "celebrate" | "thinking";

export function OwlMascot({ state = "idle", size = 120 }: { state?: OwlState; size?: number }) {
  const bodyAnim =
    state === "correct"   ? { y: [0, -14, 0], rotate: [0, -4, 4, 0], scale: [1, 1.08, 1] } :
    state === "wrong"     ? { x: [0, -6, 6, -6, 6, 0], rotate: [0, -3, 3, 0] } :
    state === "celebrate" ? { y: [0, -18, 0, -10, 0], rotate: [0, -8, 8, -5, 0] } :
    state === "thinking"  ? { rotate: [0, -3, 3, 0] } :
    { y: [0, -7, 0] };

  const bodyTrans: any =
    state === "idle"      ? { repeat: Infinity, duration: 2.6, ease: "easeInOut" } :
    state === "thinking"  ? { repeat: Infinity, duration: 1.8, ease: "easeInOut" } :
    { duration: state === "celebrate" ? 1.2 : 0.6, ease: "easeOut" };

  const wingAnim = state === "celebrate" || state === "correct"
    ? { rotate: [0, -18, 0, -18, 0] }
    : { rotate: [0, -6, 0] };
  const wingTrans: any = { repeat: Infinity, duration: state === "celebrate" ? 0.5 : 1.4, ease: "easeInOut" };

  return (
    <motion.div animate={bodyAnim} transition={bodyTrans}
      style={{ width: size, height: size, position: "relative", display: "inline-block" }}>
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <radialGradient id="owlBody" cx="42%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#7cc4e8"/>
            <stop offset="55%" stopColor="#4a9fd4"/>
            <stop offset="100%" stopColor="#2b6ca3"/>
          </radialGradient>
          <radialGradient id="owlBelly" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#fdf0d5"/>
            <stop offset="100%" stopColor="#f5d199"/>
          </radialGradient>
          <linearGradient id="owlWing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5aa9d9"/>
            <stop offset="100%" stopColor="#2b6ca3"/>
          </linearGradient>
          <linearGradient id="owlWingOrange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbb040"/>
            <stop offset="100%" stopColor="#ed8722"/>
          </linearGradient>
          <linearGradient id="owlBook" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82c4"/>
            <stop offset="100%" stopColor="#2563a0"/>
          </linearGradient>
          <radialGradient id="owlSpark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbe6"/>
            <stop offset="40%" stopColor="#ffe066"/>
            <stop offset="100%" stopColor="#ffd60a" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="capTassel" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fbb040"/>
            <stop offset="100%" stopColor="#ed8722"/>
          </radialGradient>
        </defs>

        {/* أحرف ABC تطير */}
        <motion.g animate={{ y: [0, -4, 0], opacity: [0.85, 1, 0.85] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <text x="34" y="48" fontSize="20" fontWeight="900" fill="#ed8722" transform="rotate(-15 34 48)">A</text>
          <text x="52" y="38" fontSize="16" fontWeight="900" fill="#4a9fd4" transform="rotate(8 52 38)">B</text>
          <text x="44" y="64" fontSize="14" fontWeight="900" fill="#fbb040" transform="rotate(-6 44 64)">C</text>
        </motion.g>

        {/* الجناح الخلفي المفرود */}
        <motion.g animate={wingAnim} transition={wingTrans} style={{ transformOrigin: "140px 110px", transformBox: "fill-box" } as any}>
          <path d="M138 100 Q175 70 190 95 Q185 110 165 115 Q180 120 178 135 Q160 138 145 125 Z" fill="url(#owlWing)"/>
          <path d="M140 105 Q168 85 182 100 Q172 110 158 110 Q170 118 165 128 Q150 128 142 118 Z" fill="url(#owlWingOrange)" opacity="0.9"/>
          <path d="M148 108 Q165 98 178 102" stroke="#d97316" strokeWidth="1.2" fill="none" opacity="0.5"/>
        </motion.g>

        {/* خطوط الطيران */}
        {(state === "idle" || state === "celebrate" || state === "correct") && (
          <g opacity="0.4">
            <path d="M178 120 Q188 124 184 132" stroke="#7cc4e8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M182 108 Q193 111 189 119" stroke="#7cc4e8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </g>
        )}

        {/* الجسم */}
        <ellipse cx="100" cy="120" rx="42" ry="46" fill="url(#owlBody)" stroke="#1e5a8a" strokeWidth="1.5"/>
        <ellipse cx="98" cy="128" rx="27" ry="32" fill="url(#owlBelly)"/>
        <g fill="#e8b876" opacity="0.5">
          <ellipse cx="90" cy="120" rx="3" ry="4"/>
          <ellipse cx="104" cy="122" rx="3" ry="4"/>
          <ellipse cx="97" cy="132" rx="3" ry="4"/>
          <ellipse cx="86" cy="135" rx="2.5" ry="3.5"/>
          <ellipse cx="108" cy="135" rx="2.5" ry="3.5"/>
        </g>

        {/* القدمان */}
        <g>
          <path d="M86 162 L82 172 M86 162 L86 173 M86 162 L90 172" strokeWidth="2.5" strokeLinecap="round" stroke="#ed8722" fill="none"/>
          <path d="M110 162 L106 172 M110 162 L110 173 M110 162 L114 172" strokeWidth="2.5" strokeLinecap="round" stroke="#ed8722" fill="none"/>
        </g>

        {/* الكتاب اللامع */}
        <g>
          <motion.circle cx="62" cy="118" r="22" fill="url(#owlSpark)"
            animate={{ scale: [1, 1.18, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}/>
          <g transform="rotate(-12 60 120)">
            <path d="M44 108 L62 104 L62 134 L44 138 Z" fill="url(#owlBook)" stroke="#1e4d7a" strokeWidth="1.2"/>
            <path d="M62 104 L80 108 L80 138 L62 134 Z" fill="#4a90d0" stroke="#1e4d7a" strokeWidth="1.2"/>
            <path d="M62 104 L62 134" stroke="#1e4d7a" strokeWidth="1.5"/>
            <path d="M70 116 L72 121 L77 121 L73 124 L75 129 L70 126 L65 129 L67 124 L63 121 L68 121 Z" fill="#ffd60a" stroke="#e8a800" strokeWidth="0.5"/>
          </g>
        </g>

        {/* الجناح الأمامي */}
        <path d="M72 110 Q58 118 60 132 Q66 136 74 130 Q70 120 78 114 Z" fill="url(#owlBody)" stroke="#1e5a8a" strokeWidth="1.2"/>

        {/* الرأس */}
        <ellipse cx="100" cy="78" rx="40" ry="36" fill="url(#owlBody)" stroke="#1e5a8a" strokeWidth="1.5"/>
        <path d="M70 52 Q66 40 74 44 Q76 50 78 56 Z" fill="#3a8bc4"/>
        <path d="M130 52 Q134 40 126 44 Q124 50 122 56 Z" fill="#3a8bc4"/>

        {/* النظارة */}
        <circle cx="84" cy="76" r="21" fill="#fdfdfd" stroke="#6b7280" strokeWidth="3"/>
        <circle cx="116" cy="76" r="21" fill="#fdfdfd" stroke="#6b7280" strokeWidth="3"/>
        <path d="M103 74 Q100 71 97 74" stroke="#6b7280" strokeWidth="3" fill="none"/>

        {/* العينان */}
        <motion.g
          animate={
            state === "thinking" ? { x: [0, 3, -3, 0] } :
            state === "wrong" ? { y: [0, 2, 0] } : {}
          }
          transition={{ repeat: state === "thinking" ? Infinity : 0, duration: 1.5 }}>
          <circle cx="86" cy="78" r="10" fill="#1a1a2e"/>
          <circle cx="89" cy="74" r="3.5" fill="#ffffff"/>
          <circle cx="84" cy="81" r="1.8" fill="#ffffff" opacity="0.7"/>
          <circle cx="114" cy="78" r="10" fill="#1a1a2e"/>
          <circle cx="117" cy="74" r="3.5" fill="#ffffff"/>
          <circle cx="112" cy="81" r="1.8" fill="#ffffff" opacity="0.7"/>
        </motion.g>

        {state === "wrong" && (
          <g fill="#3a8bc4">
            <path d="M65 70 Q84 64 103 70 L103 74 Q84 69 65 74 Z"/>
            <path d="M97 70 Q116 64 135 70 L135 74 Q116 69 97 74 Z"/>
          </g>
        )}

        {/* المنقار */}
        <path d="M100 88 L94 96 Q100 100 106 96 Z" fill="#ed8722" stroke="#c96815" strokeWidth="1"/>
        <ellipse cx="74" cy="92" rx="6" ry="4" fill="#f9a8b4" opacity="0.5"/>
        <ellipse cx="126" cy="92" rx="6" ry="4" fill="#f9a8b4" opacity="0.5"/>

        {/* قبعة التخرّج */}
        <g>
          <ellipse cx="100" cy="48" rx="24" ry="8" fill="#2a2a3e"/>
          <path d="M78 48 Q100 40 122 48 Q100 54 78 48 Z" fill="#1a1a2e"/>
          <path d="M68 40 L100 32 L132 40 L100 48 Z" fill="#1a1a2e" stroke="#0d0d1a" strokeWidth="1"/>
          <path d="M68 40 L100 32 L132 40 L100 48 Z" fill="#2a2a3e" opacity="0.4"/>
          <circle cx="100" cy="40" r="3" fill="#1a1a2e"/>
          <motion.g
            animate={{ rotate: state === "celebrate" ? [0, 12, -12, 0] : [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: state === "celebrate" ? 0.6 : 2.4, ease: "easeInOut" }}
            style={{ transformOrigin: "100px 40px", transformBox: "fill-box" } as any}>
            <path d="M100 40 Q116 44 120 58" stroke="#ed8722" strokeWidth="2" fill="none"/>
            <circle cx="120" cy="60" r="5" fill="url(#capTassel)"/>
            <path d="M117 60 L116 70 M120 62 L120 72 M123 60 L124 70" stroke="#ed8722" strokeWidth="1.5" strokeLinecap="round"/>
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}
