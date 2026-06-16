import { useState, useEffect } from "react";

// البومة السماوية — هوية الموقع التحفيزية (SVG)
// states: idle | happy | sad | celebrate
export function OwlMascot({ state = "idle", size = 120, message }: {
  state?: "idle" | "happy" | "sad" | "celebrate";
  size?: number;
  message?: string;
}) {
  const [jump, setJump] = useState(false);

  useEffect(() => {
    if (state === "happy" || state === "celebrate") {
      setJump(true);
      const t = setTimeout(() => setJump(false), 700);
      return () => clearTimeout(t);
    }
  }, [state]);

  const sad = state === "sad";
  const animClass = jump ? "owl-celebrate" : "owl-float";

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", userSelect: "none" }}>
      {/* فقاعة الكلام */}
      {message && (
        <div style={{
          background: "#fff", border: "3px solid #38bdf8", borderRadius: 16,
          padding: "8px 16px", fontWeight: 900, color: "#0284c7", fontSize: 14,
          boxShadow: "0 6px 14px rgba(0,0,0,0.12)", marginBottom: 12,
          position: "relative", textAlign: "center", whiteSpace: "nowrap", direction: "ltr",
        }}>
          {message}
          <div style={{ position:"absolute", bottom:-11, left:"50%", transform:"translateX(-50%)", width:0, height:0, borderLeft:"9px solid transparent", borderRight:"9px solid transparent", borderTop:"11px solid #38bdf8" }}/>
          <div style={{ position:"absolute", bottom:-7, left:"50%", transform:"translateX(-50%)", width:0, height:0, borderLeft:"7px solid transparent", borderRight:"7px solid transparent", borderTop:"8px solid #fff" }}/>
        </div>
      )}

      <div className={animClass} style={{ width: size, height: size, transformOrigin: "bottom center" }}>
        <svg viewBox="0 0 200 200" width={size} height={size}>
          <defs>
            <radialGradient id="owlBody" cx="42%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#7dd3fc"/>
              <stop offset="60%" stopColor="#38bdf8"/>
              <stop offset="100%" stopColor="#0ea5e9"/>
            </radialGradient>
            <radialGradient id="owlBelly" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#e0f2fe"/>
              <stop offset="100%" stopColor="#bae6fd"/>
            </radialGradient>
          </defs>

          {/* السماعات — القوس */}
          <path d="M52 78 Q100 18 148 78" fill="none" stroke="#fb923c" strokeWidth="11" strokeLinecap="round"/>

          {/* الأجنحة المفرودة */}
          <g className={jump ? "owl-wing-jump" : "owl-wing"}>
            <ellipse cx="38" cy="115" rx="20" ry="34" fill="#0ea5e9" transform="rotate(28 38 115)"/>
          </g>
          <g className={jump ? "owl-wing-jump-r" : "owl-wing-r"}>
            <ellipse cx="162" cy="115" rx="20" ry="34" fill="#0ea5e9" transform="rotate(-28 162 115)"/>
          </g>

          {/* الجسم */}
          <ellipse cx="100" cy="115" rx="62" ry="68" fill="url(#owlBody)"/>

          {/* البطن */}
          <ellipse cx="100" cy="130" rx="38" ry="44" fill="url(#owlBelly)"/>

          {/* أذنا البومة (ريش علوي) */}
          <path d="M62 62 Q58 40 76 50 Z" fill="#0ea5e9"/>
          <path d="M138 62 Q142 40 124 50 Z" fill="#0ea5e9"/>

          {/* السماعات — الوسادات */}
          <ellipse cx="48" cy="92" rx="15" ry="20" fill="#fb923c"/>
          <ellipse cx="152" cy="92" rx="15" ry="20" fill="#fb923c"/>
          <ellipse cx="48" cy="92" rx="8" ry="13" fill="#ea580c"/>
          <ellipse cx="152" cy="92" rx="8" ry="13" fill="#ea580c"/>

          {/* العيون البيضاء الكبيرة */}
          <circle cx="80" cy="95" r="26" fill="#fff" stroke="#bae6fd" strokeWidth="2"/>
          <circle cx="120" cy="95" r="26" fill="#fff" stroke="#bae6fd" strokeWidth="2"/>

          {/* الحدقات */}
          {sad ? (
            <>
              <circle cx="80" cy="102" r="13" fill="#1e3a4a"/>
              <circle cx="120" cy="102" r="13" fill="#1e3a4a"/>
            </>
          ) : (
            <>
              <circle cx="82" cy="97" r="14" fill="#1e3a4a"/>
              <circle cx="118" cy="97" r="14" fill="#1e3a4a"/>
            </>
          )}
          {/* لمعة العيون */}
          <circle cx={sad?76:78} cy={sad?97:92} r="5" fill="#fff"/>
          <circle cx={sad?116:114} cy={sad?97:92} r="5" fill="#fff"/>

          {/* حواجب حزينة */}
          {sad && (
            <>
              <path d="M64 74 L94 82" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round"/>
              <path d="M136 74 L106 82" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round"/>
            </>
          )}

          {/* المنقار */}
          <path d="M100 112 L90 124 L110 124 Z" fill="#fbbf24"/>

          {/* القدمان */}
          <ellipse cx="84" cy="180" rx="11" ry="7" fill="#fbbf24"/>
          <ellipse cx="116" cy="180" rx="11" ry="7" fill="#fbbf24"/>
        </svg>
      </div>

      <style>{`
        @keyframes owlFloat { 0%{transform:translateY(0) rotate(0)} 25%{transform:translateY(-8px) rotate(-3deg)} 75%{transform:translateY(-4px) rotate(3deg)} 100%{transform:translateY(0) rotate(0)} }
        @keyframes owlCelebrate {
          0%{transform:scale(1) translateY(0) rotate(0)}
          25%{transform:scale(1.1,0.9) translateY(0) rotate(0)}
          50%{transform:scale(0.92,1.12) translateY(-40px) rotate(360deg)}
          75%{transform:scale(1.04,0.96) translateY(0) rotate(360deg)}
          100%{transform:scale(1) translateY(0) rotate(360deg)}
        }
        .owl-float { animation: owlFloat 3s ease-in-out infinite; }
        .owl-celebrate { animation: owlCelebrate 0.7s cubic-bezier(0.175,0.885,0.32,1.275); }
        @keyframes wingFlap { 0%,100%{transform:rotate(0)} 50%{transform:rotate(-12deg)} }
        @keyframes wingFlapR { 0%,100%{transform:rotate(0)} 50%{transform:rotate(12deg)} }
        .owl-wing { animation: wingFlap 2.5s ease-in-out infinite; transform-origin:38px 90px; }
        .owl-wing-r { animation: wingFlapR 2.5s ease-in-out infinite; transform-origin:162px 90px; }
        .owl-wing-jump { transform: rotate(-30deg); transform-origin:38px 90px; transition:transform 0.2s; }
        .owl-wing-jump-r { transform: rotate(30deg); transform-origin:162px 90px; transition:transform 0.2s; }
      `}</style>
    </div>
  );
}
