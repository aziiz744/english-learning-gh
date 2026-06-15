import { useState, useRef, useEffect, useCallback } from "react";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";

interface UnitLesson {
  id: string;
  type: "lesson" | "treasure" | "challenge";
  title: string;
  description: string;
  words?: string[];
}
interface Unit { id: string; title: string; emoji: string; color: string; sectionTitle?: string; lessons: UnitLesson[]; }
interface Chapter { id: string; title: string; emoji: string; gradient: string; color: string; units: Unit[]; }

// Section divider interface
interface Section { id: string; title: string; color: string; units: Unit[]; }

const CHAPTERS: Chapter[] = [
  {
    id: "beginner", title: "المبتدئ", emoji: "🌱",
    gradient: "from-green-900 to-emerald-900", color: "#166534",
    units: [
      // ── القسم 1: قدّم واقبل المشروبات ──
      {
        id: "unit-drinks", title: "قدّم واقبل المشروبات", emoji: "☕", color: "#166534",
        sectionTitle: "",  // أول وحدة — بدون فاصل فوقها
        lessons: [
          { id: "drinks-1", type: "lesson",    title: "الكلمات الأساسية", description: "ستتعلم كلمات المشروبات مثل tea وcoffee وwater وjuice مع سماع نطقها واختيار المعنى الصحيح.", words: ["tea","coffee","water","juice","milk"] },
          { id: "drinks-2", type: "lesson",    title: "كلمات جديدة",      description: "ستراجع كلمات الدرس الأول وتتعلم كلمات جديدة مثل please وthank you.", words: ["please","thank you","yes","no","sorry"] },
          { id: "drinks-t", type: "treasure",  title: "كنز المراجعة",     description: "لعبة ممتعة تشمل جميع كلمات الدرسين السابقين — اجتزها واكسب نقاطاً مضاعفة!", words: [] },
          { id: "drinks-3", type: "lesson",    title: "جمل كاملة",        description: "ستستخدم الكلمات في جمل كاملة مثل 'Would you like some tea?'", words: ["would","like","some","have","want"] },
          { id: "drinks-c", type: "challenge", title: "تحدي الوحدة",      description: "اختبار شامل لكل ما تعلمته — الكلمات والجمل والحوارات.", words: [] },
        ],
      },
      // ── القسم 2: قدّم نفسك وعائلتك — وحدة واحدة فقط ──
      {
        id: "unit-intro", title: "قدّم نفسك وعائلتك", emoji: "👋", color: "#4c1d95",
        sectionTitle: "قدّم نفسك وعائلتك",
        lessons: [
          { id: "intro-1", type: "lesson",    title: "ما اسمك؟",       description: "تعلّم كيف تقدّم نفسك بالإنجليزية.", words: ["name","I'm","my","what","your"] },
          { id: "intro-2", type: "lesson",    title: "من أين أنت؟",    description: "تعلّم كيف تذكر بلدك وتسأل الآخرين.", words: ["from","where","are","you","I"] },
          { id: "intro-t", type: "treasure",  title: "كنز المراجعة",   description: "راجع كل ما تعلمته!", words: [] },
          { id: "intro-3", type: "lesson",    title: "عائلتك",         description: "تعلّم كلمات العائلة: mother وfather وbrother وsister.", words: ["mother","father","brother","sister","family"] },
          { id: "intro-c", type: "challenge", title: "تحدي القسم",     description: "اختبار شامل للقسم الثاني!", words: [] },
        ],
      },
      // ── القسم 3: الأماكن والاتجاهات — وحدة واحدة فقط ──
      {
        id: "unit-places", title: "قل من أين أنت؟", emoji: "🏙️", color: "#7c2d12",
        sectionTitle: "قل من أين أنت؟",
        lessons: [
          { id: "places-1", type: "lesson",    title: "أماكن في المدينة", description: "تعلّم: school وhospital وmarket وpark.", words: ["school","hospital","market","park","bank"] },
          { id: "places-2", type: "lesson",    title: "أين تقع؟",         description: "next to وbehind وin front of.", words: ["next","behind","front","between","near"] },
          { id: "places-t", type: "treasure",  title: "كنز المراجعة",     description: "لعبة بكل كلمات الأماكن!", words: [] },
          { id: "places-3", type: "lesson",    title: "الاتجاهات",        description: "turn left وgo straight وturn right.", words: ["turn","left","right","straight","go"] },
          { id: "places-c", type: "challenge", title: "تحدي القسم",       description: "اختبار شامل للقسم الثالث!", words: [] },
        ],
      },
    ],
  },
];

// ─── Fox SVG Mascot ───────────────────────────────────────────────────────────
function FoxMascot() {
  return (
    <svg width="64" height="72" viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="52" cy="54" rx="10" ry="6" fill="#f97316" transform="rotate(-30 52 54)"/>
      <ellipse cx="54" cy="52" rx="5" ry="3" fill="#fef3c7" transform="rotate(-30 54 52)"/>
      <ellipse cx="32" cy="50" rx="14" ry="16" fill="#f97316"/>
      <ellipse cx="32" cy="54" rx="8" ry="10" fill="#fef3c7"/>
      <circle cx="32" cy="28" r="16" fill="#f97316"/>
      <polygon points="16,16 10,2 22,10" fill="#f97316"/>
      <polygon points="48,16 54,2 42,10" fill="#f97316"/>
      <polygon points="17,15 12,5 21,11" fill="#fca5a5"/>
      <polygon points="47,15 52,5 43,11" fill="#fca5a5"/>
      <ellipse cx="32" cy="32" rx="10" ry="8" fill="#fef3c7"/>
      <circle cx="26" cy="25" r="4" fill="white"/>
      <circle cx="38" cy="25" r="4" fill="white"/>
      <circle cx="27" cy="26" r="2.2" fill="#1e1b4b"/>
      <circle cx="39" cy="26" r="2.2" fill="#1e1b4b"/>
      <circle cx="27.8" cy="25" r="0.9" fill="white"/>
      <circle cx="39.8" cy="25" r="0.9" fill="white"/>
      <ellipse cx="32" cy="31" rx="2.5" ry="1.8" fill="#1e1b4b"/>
      <path d="M29 33 Q32 36 35 33" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="22" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.5"/>
      <ellipse cx="42" cy="30" rx="4" ry="2.5" fill="#fca5a5" opacity="0.5"/>
      <ellipse cx="20" cy="60" rx="5" ry="7" fill="#f97316" transform="rotate(-10 20 60)"/>
      <ellipse cx="44" cy="60" rx="5" ry="7" fill="#f97316" transform="rotate(10 44 60)"/>
    </svg>
  );
}

// ─── Robot SVG Mascot ─────────────────────────────────────────────────────────
function RobotMascot() {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
      <ellipse cx="28" cy="36" rx="14" ry="16" fill="#6366f1"/>
      <circle cx="28" cy="20" r="13" fill="#818cf8"/>
      <circle cx="23" cy="19" r="3.5" fill="white"/>
      <circle cx="33" cy="19" r="3.5" fill="white"/>
      <circle cx="23.8" cy="19.8" r="1.8" fill="#1e1b4b"/>
      <circle cx="33.8" cy="19.8" r="1.8" fill="#1e1b4b"/>
      <circle cx="24.5" cy="18.5" r="0.8" fill="white" opacity="0.9"/>
      <circle cx="34.5" cy="18.5" r="0.8" fill="white" opacity="0.9"/>
      <path d="M23 24 Q28 28 33 24" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="11" r="3.5" fill="#a5b4fc"/>
      <circle cx="40" cy="11" r="3.5" fill="#a5b4fc"/>
      <ellipse cx="14" cy="36" rx="4" ry="7" fill="#6366f1" transform="rotate(-15 14 36)"/>
      <ellipse cx="42" cy="36" rx="4" ry="7" fill="#6366f1" transform="rotate(15 42 36)"/>
      <rect x="22" y="32" width="12" height="10" rx="3" fill="#4f46e5" opacity="0.6"/>
      <text x="28" y="40" textAnchor="middle" fontSize="6" fill="#c7d2fe" fontWeight="bold">EN</text>
    </svg>
  );
}

// ─── Floating Mascot — يتغير حسب القسم ──────────────────────────────────────
function FloatingMascot({ color, chapterId }: { color: string; chapterId: string }) {
  const isFox = chapterId === "introduce";
  const msg = isFox ? "هيا نتعارف! 🦊" : "هيا نتعلم! 🎉";

  return (
    <div style={{ position: "fixed", bottom: 100, left: 16, zIndex: 40, pointerEvents: "none" }}>
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0, 0.25] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        style={{ position: "absolute", inset: -12, borderRadius: "50%", background: color, filter: "blur(14px)" }}
      />
      <motion.div
        animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -6] }}
        transition={{ repeat: Infinity, duration: 4, times: [0, 0.15, 0.85, 1] }}
        style={{
          position: "absolute", bottom: isFox ? 80 : 66,
          left: "50%", transform: "translateX(-50%)",
          background: "white", color: "#1e293b",
          fontSize: 11, fontWeight: 700,
          padding: "5px 12px", borderRadius: 14,
          whiteSpace: "nowrap", boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
        }}
      >
        {msg}
        <div style={{
          position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
          width: 0, height: 0,
          borderLeft: "6px solid transparent", borderRight: "6px solid transparent",
          borderTop: "6px solid white",
        }}/>
      </motion.div>

      {isFox ? (
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 8px 16px rgba(249,115,22,0.45))" }}
        >
          <motion.div style={{ position: "relative" }}>
            <FoxMascot />
            <motion.span
              animate={{ opacity: [0,1,0], y: [-5,-22,-32], x: [0,8,4] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              style={{ position: "absolute", top: 0, right: -4, fontSize: 13 }}>✨</motion.span>
            <motion.span
              animate={{ opacity: [0,1,0], y: [-5,-18,-28], x: [0,-6,-2] }}
              transition={{ repeat: Infinity, duration: 2.4, delay: 1.2 }}
              style={{ position: "absolute", top: 8, left: -4, fontSize: 11 }}>⭐</motion.span>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))" }}
        >
          <RobotMascot />
        </motion.div>
      )}
    </div>
  );
}

// ─── Crown icon for challenge stations ───────────────────────────────────────
function CrownIcon({ color, locked }: { color: string; locked: boolean }) {
  const SIZE = 90;
  const r = SIZE / 2;
  const gold = locked ? "#4b5563" : color;
  const light = locked ? "#6b7280" : lightenColor(color);
  const dark  = locked ? "#1f2937" : shadeColor(color, -55);
  const gId = `crown-${color.replace("#","")}-${locked?"l":"u"}`;
  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE + 10 }}>
      {/* Glow */}
      {!locked && (
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: SIZE * 0.85, height: SIZE * 0.28, borderRadius: "50%",
          background: color, opacity: 0.35, filter: "blur(12px)", zIndex: 0,
        }}/>
      )}
      <svg width={SIZE} height={SIZE} style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
        <defs>
          <radialGradient id={gId} cx="35%" cy="28%" r="75%">
            <stop offset="0%"  stopColor={light}/>
            <stop offset="50%" stopColor={gold}/>
            <stop offset="100%" stopColor={dark}/>
          </radialGradient>
        </defs>
        {/* Outer ring */}
        <circle cx={r} cy={r} r={r-1} fill={dark} stroke={shadeColor(gold,-30)} strokeWidth={2}/>
        {/* Inner face */}
        <circle cx={r} cy={r} r={r-7} fill={`url(#${gId})`}/>
        {/* Shine */}
        <ellipse cx={r*0.68} cy={r*0.44} rx={r*0.3} ry={r*0.11}
          fill="white" opacity={locked ? 0.05 : 0.2} transform={`rotate(-35 ${r} ${r})`}/>
        {/* Crown icon */}
        <g transform={`translate(${r-18}, ${r-14})`}>
          <path d="M3 22 L33 22 L30 10 L22 17 L18 6 L14 17 L6 10 Z"
            fill={locked ? "#4b5563" : "white"} opacity={locked ? 0.5 : 1}/>
          <rect x="3" y="22" width="30" height="5" rx="2"
            fill={locked ? "#374151" : "rgba(255,255,255,0.7)"}/>
          {/* Crown gems */}
          {!locked && <>
            <circle cx="18" cy="8" r="2.5" fill="#fef08a"/>
            <circle cx="7" cy="12" r="2" fill="#fef08a"/>
            <circle cx="29" cy="12" r="2" fill="#fef08a"/>
          </>}
        </g>
      </svg>
    </div>
  );
}

// ─── Treasure chest (improved) ───────────────────────────────────────────────
function TreasureIcon({ unlocked }: { unlocked: boolean }) {
  return (
    <div style={{ position: "relative", width: 76, height: 76 }}>
      {/* Ground shadow */}
      <div style={{
        position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
        width: 54, height: 10, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
        filter: "blur(5px)",
      }}/>
      <svg width="76" height="70" viewBox="0 0 76 70" fill="none">
        <defs>
          <linearGradient id="chestBodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={unlocked ? "#b45309" : "#4b5563"}/>
            <stop offset="100%" stopColor={unlocked ? "#78350f" : "#1f2937"}/>
          </linearGradient>
          <linearGradient id="chestLidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={unlocked ? "#d97706" : "#6b7280"}/>
            <stop offset="100%" stopColor={unlocked ? "#92400e" : "#374151"}/>
          </linearGradient>
          <linearGradient id="chestBandGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={unlocked ? "#fbbf24" : "#9ca3af"}/>
            <stop offset="100%" stopColor={unlocked ? "#d97706" : "#6b7280"}/>
          </linearGradient>
          {unlocked && (
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#eab308" stopOpacity="0"/>
            </radialGradient>
          )}
        </defs>

        {/* Glow behind when unlocked */}
        {unlocked && <ellipse cx="38" cy="38" rx="30" ry="28" fill="url(#glowGrad)" opacity="0.4"/>}

        {/* Chest body */}
        <rect x="8" y="34" width="60" height="28" rx="5" fill="url(#chestBodyGrad)"/>
        {/* Body side shadow */}
        <rect x="8" y="34" width="60" height="8" rx="5" fill="black" opacity="0.2"/>
        {/* Body highlight */}
        <rect x="10" y="36" width="56" height="4" rx="3" fill="white" opacity="0.08"/>

        {/* Horizontal band */}
        <rect x="8" y="44" width="60" height="7" fill="url(#chestBandGrad)"/>
        <rect x="8" y="44" width="60" height="2" fill="white" opacity="0.15"/>

        {/* Vertical band stripes */}
        <rect x="34" y="34" width="8" height="28" fill="url(#chestBandGrad)" opacity="0.7"/>

        {/* Lock */}
        <rect x="31" y="40" width="14" height="11" rx="3" fill={unlocked ? "#fef08a" : "#9ca3af"}/>
        <path d="M34 40 Q34 35 38 35 Q42 35 42 40" stroke={unlocked ? "#d97706" : "#6b7280"} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="38" cy="45" r="2" fill={unlocked ? "#d97706" : "#4b5563"}/>

        {/* Lid */}
        <rect x="8" y="18" width="60" height="18" rx="6" fill="url(#chestLidGrad)"/>
        <rect x="8" y="18" width="60" height="6" rx="6" fill="white" opacity="0.1"/>
        {/* Lid band */}
        <rect x="8" y="30" width="60" height="6" fill="url(#chestBandGrad)" opacity="0.8"/>

        {/* Lid top highlight */}
        <ellipse cx="38" cy="19" rx="22" ry="3" fill="white" opacity="0.12"/>

        {/* Coins when unlocked */}
        {unlocked && <>
          <circle cx="24" cy="32" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
          <circle cx="38" cy="28" r="6" fill="#fef08a" stroke="#eab308" strokeWidth="1"/>
          <circle cx="52" cy="32" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
          <circle cx="31" cy="29" r="4" fill="#fde68a" stroke="#eab308" strokeWidth="0.5"/>
          <circle cx="45" cy="29" r="4" fill="#fde68a" stroke="#eab308" strokeWidth="0.5"/>
          {/* Sparkles */}
          <text x="14" y="22" fontSize="10">✨</text>
          <text x="54" y="20" fontSize="9">⭐</text>
        </>}
      </svg>
    </div>
  );
}

// ─── Station circle — floating button style (مثل الصورة) ─────────────────────
function StationCircle({ type, progress, color, isCurrent, isFirstOfSection, isJumpStation, canJump }: {
  type: "lesson" | "challenge";
  progress: number;
  color: string;
  isCurrent: boolean;
  isFirstOfSection?: boolean;
  isJumpStation?: boolean;
  canJump?: boolean;
}) {
  const SIZE   = type === "challenge" ? 90 : 76;
  const r      = SIZE / 2;
  const trackR = r - 7;
  const circ   = 2 * Math.PI * trackR;
  const isGold = progress >= 4;
  const isActive = progress > 0 || !!isFirstOfSection || !!isJumpStation || isCurrent;

  const mainColor  = isGold ? "#eab308" : isActive ? (isJumpStation ? shadeColor(color, -20) : color) : "#2d3a4a";
  const darkColor  = isGold ? "#92400e" : isActive ? shadeColor(color, -55) : "#151f2b";
  const faceLight  = isGold ? "#fef08a" : isActive ? color : "#3a4a5a";
  const starColor  = isGold ? "#eab308" : isActive ? "#fff" : "#4b6070";
  const trackColor = isGold ? "#eab308" : isActive ? shadeColor(color, -20) : "#1e2d3d";
  const arcFilled  = isGold || isJumpStation
    ? `${circ} 0`
    : isActive ? `${circ * Math.min(progress / 4, 1)} ${circ}` : `0 ${circ}`;

  const gId = `sg-${SIZE}-${color.replace("#","")}-${isGold?"g":isActive?"a":"i"}`;

  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE + 10 }}>

      {/* Soft colored glow beneath */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: SIZE * 0.85, height: SIZE * 0.3, borderRadius: "50%",
        background: mainColor,
        opacity: isJumpStation ? 0.2 : isActive ? (isCurrent ? 0.25 : 0.12) : 0.05,
        filter: "blur(12px)", zIndex: 0,
      }}/>

      {/* Pulse ring for current */}
      {isCurrent && (
        <motion.div style={{
          position: "absolute", top: 0, left: 0, width: SIZE, height: SIZE,
          borderRadius: "50%", border: `2.5px solid ${color}`, zIndex: 2,
        }}
          animate={{ scale: [1, 1.55, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        />
      )}

      <svg width={SIZE} height={SIZE} style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}>
        <defs>
          <radialGradient id={gId} cx="35%" cy="28%" r="75%">
            <stop offset="0%"  stopColor={isJumpStation ? mainColor : faceLight} stopOpacity="1"/>
            <stop offset="45%" stopColor={mainColor} stopOpacity="1"/>
            <stop offset="100%" stopColor={darkColor} stopOpacity="1"/>
          </radialGradient>
          <radialGradient id={`${gId}-bg`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor={isActive ? shadeColor(mainColor, -20) : "#1a2535"}/>
            <stop offset="100%" stopColor={isActive ? shadeColor(mainColor, -55) : "#0d1520"}/>
          </radialGradient>
        </defs>

        {/* Outer dark border ring */}
        <circle cx={r} cy={r} r={r - 1} fill={isActive ? shadeColor(mainColor,-65) : "#0d1520"}
          stroke={darkColor} strokeWidth={2}/>

        {/* Inner face with gradient */}
        <circle cx={r} cy={r} r={r - 7} fill={`url(#${gId})`}/>

        {/* Progress / full arc */}
        <motion.circle
          cx={r} cy={r} r={trackR} fill="none"
          stroke={trackColor} strokeWidth={6} strokeLinecap="round"
          strokeDasharray={arcFilled}
          style={{ transform:"rotate(-90deg)", transformOrigin:`${r}px ${r}px` }}
          initial={{ strokeDasharray:`0 ${circ}` }}
          animate={{ strokeDasharray: arcFilled }}
          transition={{ duration: 0.8, ease:"easeOut" }}
        />

        {/* Top shine streak */}
        <ellipse cx={r * 0.68} cy={r * 0.44} rx={r * 0.32} ry={r * 0.12}
          fill="white" opacity={isActive ? 0.08 : 0.03}
          transform={`rotate(-35 ${r} ${r})`}/>

        {/* Bottom subtle rim */}
        <ellipse cx={r} cy={r * 1.62} rx={r * 0.55} ry={r * 0.1}
          fill={darkColor} opacity={isActive ? 0.5 : 0.2}/>

        {/* Icon */}
        <g transform={`translate(${r - SIZE * 0.21}, ${r - SIZE * 0.21})`}>
          {isJumpStation && !isGold ? (
            <svg width={SIZE * 0.42} height={SIZE * 0.42} viewBox="0 0 28 28" fill="white" opacity="0.95">
              <path d="M2 5 L12 14 L2 23 Z"/>
              <path d="M14 5 L24 14 L14 23 Z"/>
            </svg>
          ) : (
            <svg width={SIZE * 0.42} height={SIZE * 0.42} viewBox="0 0 24 24" fill={starColor}
              style={{ filter: isGold ? "drop-shadow(0 0 8px #eab30890)" : isActive ? `drop-shadow(0 1px 3px ${darkColor})` : "none" }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          )}
        </g>
      </svg>
    </div>
  );
}

// ─── Color helpers ────────────────────────────────────────────────────────────
function shadeColor(hex: string, pct: number): string {
  const n = parseInt(hex.replace("#",""), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + pct));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + pct));
  const b = Math.max(0, Math.min(255, (n & 0xff) + pct));
  return `rgb(${r},${g},${b})`;
}
function lightenColor(hex: string): string {
  try {
    const n = parseInt(hex.replace("#",""), 16);
    const r = Math.min(255, (n >> 16) + 40);
    const g = Math.min(255, ((n >> 8) & 0xff) + 40);
    const b = Math.min(255, (n & 0xff) + 40);
    return `rgb(${r},${g},${b})`;
  } catch { return hex; }
}

// ─── Duolingo-style popup card ────────────────────────────────────────────────
function StationPopup({ lesson, color, unitTitle, lessonNum, totalLessons, onClose, onStart }: {
  lesson: UnitLesson; color: string; unitTitle: string;
  lessonNum: number; totalLessons: number;
  onClose: () => void; onStart: () => void;
}) {
  const darkColor = color + "dd";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 10 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      style={{
        background: color,
        borderRadius: 20,
        padding: "16px 18px 14px",
        width: 220,
        boxShadow: `0 8px 32px ${color}60, 0 2px 8px rgba(0,0,0,0.3)`,
        position: "relative",
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Arrow down */}
      <div style={{
        position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)",
        width: 0, height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: `10px solid ${color}`,
      }}/>

      {/* Title */}
      <p className="font-bold text-white text-center mb-0.5" style={{ fontSize: 15 }}>{unitTitle}</p>
      <p className="text-white/80 text-center mb-3" style={{ fontSize: 12 }}>
        {lesson.type === "treasure" ? "كنز المراجعة 💎" : lesson.type === "challenge" ? "تحدي الوحدة 👑" : `النقطة ${lessonNum} · 4 دروس`}
      </p>

      {/* Start button */}
      <button onClick={onStart}
        style={{
          display: "block", width: "100%",
          background: "white", color: "#1e293b",
          fontWeight: 800, fontSize: 14,
          padding: "10px 0", borderRadius: 14,
          border: "none", cursor: "pointer",
          boxShadow: "0 4px 0 rgba(0,0,0,0.15)",
          transition: "transform 0.1s, box-shadow 0.1s",
        }}
        onMouseDown={e => (e.currentTarget.style.transform = "translateY(2px)", e.currentTarget.style.boxShadow = "0 2px 0 rgba(0,0,0,0.15)")}
        onMouseUp={e => (e.currentTarget.style.transform = "", e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.15)")}
      >
        ابدأ +10 XP
      </button>
    </motion.div>
  );
}

// ─── SVG path connector ───────────────────────────────────────────────────────
function PathConnector({ fromX, fromY, toX, toY, color, done }: {
  fromX: number; fromY: number; toX: number; toY: number; color: string; done: boolean;
}) {
  const midY = (fromY + toY) / 2;
  const d = `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
  return (
    <g>
      <path d={d} stroke="#2d3748" strokeWidth={6} fill="none" strokeLinecap="round" strokeDasharray="10 7"/>
      {done && (
        <motion.path d={d} stroke={color} strokeWidth={6} fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </g>
  );
}

// ─── S-curve positions ────────────────────────────────────────────────────────
const CANVAS_W = 300;
const STEP_Y   = 110;
const SIDE_PAD = 65;

function buildPath(count: number): { x: number; y: number }[] {
  const cols = [
    CANVAS_W / 2 + SIDE_PAD,
    CANVAS_W / 2,
    CANVAS_W / 2 - SIDE_PAD,
    CANVAS_W / 2,
    CANVAS_W / 2 + SIDE_PAD,
  ];
  return Array.from({ length: count }, (_, i) => ({
    x: cols[i % cols.length],
    y: 60 + i * STEP_Y,
  }));
}

// ─── Section info extracted from units ───────────────────────────────────────
// Each unit with sectionTitle marks the start of a new visual section
interface SectionInfo { id: string; title: string; color: string; gradient: string; unitId: string; }
function getSections(chapter: Chapter): SectionInfo[] {
  const sections: SectionInfo[] = [];
  chapter.units.forEach(u => {
    // كل وحدة لها sectionTitle (أو أول وحدة) = بداية وحدة جديدة
    if (!u.sectionTitle && sections.length === 0) {
      // الوحدة الأولى
      sections.push({ id: "s0", title: u.title, color: u.color, gradient: chapter.gradient, unitId: u.id });
    } else if (u.sectionTitle) {
      sections.push({ id: u.id, title: u.sectionTitle, color: u.color, gradient: `linear-gradient(135deg, ${u.color}, ${u.color}bb)`, unitId: u.id });
    }
  });
  return sections;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Roadmap() {
  const [activeChapter] = useState(0);
  const [progress] = useState<Record<string, number>>({});
  const [activePopup, setActivePopup] = useState<{ lessonId: string; x: number; y: number } | null>(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const chapter = CHAPTERS[activeChapter];
  const sections = getSections(chapter);

  const allLessons = chapter.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id, unitColor: u.color })));
  const currentIdx = allLessons.findIndex(l => (progress[l.id] ?? 0) < 4);

  // Refs for each section divider — used for IntersectionObserver
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((sec, idx) => {
      const el = sectionRefs.current[sec.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSectionIdx(idx); },
        { threshold: 0.3, rootMargin: "-60px 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [sections.length]);

  const activeSection = sections[activeSectionIdx] ?? sections[0];

  // Close popup on outside click
  const handleBackdropClick = () => setActivePopup(null);

  return (
    <Layout>
      <div className="animate-in fade-in duration-500 pb-8" onClick={handleBackdropClick}>

        {/* ── Sticky section header ── */}
        <motion.div
          key={activeSection.id}
          initial={{ opacity: 0.7, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "sticky", top: 0, zIndex: 30,
            padding: "8px 20px",
            background: "hsl(var(--background))",
            borderBottom: `1.5px solid ${activeSection.color}25`,
          }}
        >
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: `linear-gradient(135deg, ${activeSection.color}, ${activeSection.color}cc)`,
            borderRadius: 16,
            padding: "11px 16px",
            boxShadow: `0 4px 18px ${activeSection.color}45`,
            maxWidth: 340,
            margin: "0 auto",
          }}>
            {/* Arrow right side */}
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 20, flexShrink: 0 }}>←</div>

            {/* Title — center */}
            <div style={{ textAlign: "center", flex: 1, padding: "0 10px" }}>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 600, marginBottom: 2 }}>
                القسم 1 ، الوحدة {activeSectionIdx + 1}
              </div>
              <div style={{ color: "white", fontWeight: 900, fontSize: 16, lineHeight: 1.2 }}>
                {activeSection.title}
              </div>
            </div>

            {/* Guidebook — left */}
            <button
              onClick={e => { e.stopPropagation(); alert("الدليل قادم قريباً!"); }}
              style={{
                background: "rgba(255,255,255,0.22)",
                border: "1.5px solid rgba(255,255,255,0.45)",
                borderRadius: 10, padding: "5px 11px",
                color: "white", fontWeight: 800, fontSize: 13,
                cursor: "pointer", display: "flex", alignItems: "center", gap: 4,
                flexShrink: 0, whiteSpace: "nowrap",
              }}>
              📖 الدليل
            </button>
          </div>
        </motion.div>

        {/* Page title */}
        <div className="text-center my-6">
          <div className="text-5xl mb-3">🗺️</div>
          <h1 className="text-3xl font-bold">خارطة التعلم</h1>
          <p className="text-muted-foreground mt-1 text-sm">طريقك من الصفر حتى إتقان الإنجليزية</p>
        </div>

        {/* Map */}
        <motion.div key={activeChapter} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: 380, margin: "0 auto", position: "relative" }}>

          {chapter.units.map((unit, unitIdx) => {
            const positions = buildPath(unit.lessons.length);
            const svgH = 60 + (unit.lessons.length - 1) * STEP_Y + 80;
            const lessonStations = unit.lessons.filter(l => l.type === "lesson");
            const unitNumbers = ["الأولى","الثانية","الثالثة","الرابعة"];
            const unitLabel = unitNumbers[unitIdx] ?? `${unitIdx + 1}`;

            return (
              <div key={unit.id} ref={unitIdx === 0 ? (el => { sectionRefs.current["s0"] = el; }) : undefined}>
                {/* Section divider line */}
                {unit.sectionTitle && (
                  <div ref={el => { sectionRefs.current[unit.id] = el; }}>
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      style={{ position: "relative", display: "flex", alignItems: "center", margin: "16px 8px 32px" }}
                    >
                      {/* Full line behind */}
                      <div style={{
                        position: "absolute", left: 0, right: 0, top: "50%",
                        height: 1.5, background: `linear-gradient(to right, transparent, ${unit.color}80, transparent)`,
                        transform: "translateY(-50%)",
                      }}/>
                      {/* Text with background so it sits ON TOP of line */}
                      <div style={{ flex: 1 }}/>
                      <span style={{
                        position: "relative",
                        background: "hsl(var(--background))",
                        padding: "0 12px",
                        color: unit.color, fontSize: 14, fontWeight: 900,
                        whiteSpace: "nowrap",
                        textShadow: `0 0 20px ${unit.color}80`,
                        letterSpacing: "0.02em",
                      }}>
                        {unit.sectionTitle}
                      </span>
                      <div style={{ flex: 1 }}/>
                    </motion.div>
                  </div>
                )}



                {/* Canvas */}
                <div style={{ position: "relative", width: CANVAS_W, margin: "0 auto", height: svgH }}>

                  {/* Connectors */}
                  <svg width={CANVAS_W} height={svgH}
                    style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                    {positions.map((pos, idx) => {
                      if (idx === 0) return null;
                      const prev = positions[idx - 1];
                      const done = (progress[unit.lessons[idx - 1].id] ?? 0) >= 4;
                      return <PathConnector key={`c${idx}`}
                        fromX={prev.x} fromY={prev.y} toX={pos.x} toY={pos.y}
                        color={unit.color} done={done} />;
                    })}
                  </svg>

                  {/* Stations */}
                  {unit.lessons.map((lesson, idx) => {
                    const { x, y } = positions[idx];
                    const lessonProgress = progress[lesson.id] ?? 0;
                    const allIdx = allLessons.findIndex(l => l.id === lesson.id);
                    const isCurrent = allIdx === currentIdx;
                    // Normal lock: previous lesson not done
                    const normalLocked = allIdx > 0 && (progress[allLessons[allIdx - 1]?.id] ?? 0) < 4 && lessonProgress === 0;
                    // Section lock: if this unit belongs to section 2+, lock unless prev section challenge done
                    const thisSectionIdx = unit.sectionTitle
                      ? chapter.units.findIndex(u => u.id === unit.id)
                      : chapter.units.slice(0, unitIdx + 1).filter(u => !u.sectionTitle || u.id === unit.id).length - 1;
                    const prevSectionChallenge = unit.sectionTitle
                      ? chapter.units.slice(0, unitIdx).reverse().find(u => u.lessons.some(l => l.type === "challenge"))?.lessons.find(l => l.type === "challenge")?.id
                      : undefined;
                    const sectionLocked = prevSectionChallenge
                      ? (progress[prevSectionChallenge] ?? 0) < 4
                      : false;
                    const isLocked = normalLocked || (sectionLocked && !isJumpStation && lessonProgress === 0);
                    const isTreasure = lesson.type === "treasure"; // kept for SIZE calc
                    const SIZE = lesson.type === "challenge" ? 90 : lesson.type === "treasure" ? 72 : 76;
                    const isPopupOpen = activePopup?.lessonId === lesson.id;
                    // First station of each unit/section
                    const isFirstOfSection = idx === 0;
                    // Is this the jump station? First station of a section that has sectionTitle
                    const isJumpStation = isFirstOfSection && !!unit.sectionTitle;
                    // Can the user jump? Previous section challenge done
                    const prevChallengeId = isJumpStation
                      ? chapter.units.slice(0, unitIdx).reverse()
                          .find(u => u.lessons.some(l => l.type === "challenge"))
                          ?.lessons.find(l => l.type === "challenge")?.id
                      : undefined;
                    const canJump = isJumpStation
                      ? (prevChallengeId ? (progress[prevChallengeId] ?? 0) >= 4 : false)
                      : false;
                    // Jump station is unlocked if canJump (even if locked normally)
                    const effectiveLocked = isJumpStation ? false : isLocked;

                    // lesson number (only count type=lesson)
                    const lessonNum = lessonStations.findIndex(l => l.id === lesson.id) + 1;

                    return (
                      <div key={lesson.id} style={{
                        position: "absolute",
                        left: x - SIZE / 2,
                        top: y - SIZE / 2,
                        width: SIZE,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}>
                        {/* Popup above station */}
                        <AnimatePresence>
                          {isPopupOpen && (
                            <div style={{
                              position: "absolute",
                              bottom: SIZE + 16,
                              left: "50%",
                              transform: "translateX(-50%)",
                              zIndex: 50,
                            }}
                              onClick={e => e.stopPropagation()}>
                              <StationPopup
                                lesson={lesson}
                                color={unit.color}
                                unitTitle={unit.title}
                                lessonNum={lessonNum}
                                totalLessons={lessonStations.length}
                                onClose={() => setActivePopup(null)}
                                onStart={() => {
                                  setActivePopup(null);
                                  window.location.href = `/lessons/unit-drinks/${lesson.id}`;
                                }}
                              />
                            </div>
                          )}
                        </AnimatePresence>

                        {/* Jump tooltip above jump station */}
                        {isJumpStation && lessonProgress < 4 && !isPopupOpen && (
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            style={{ position: "absolute", top: -52, display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none", zIndex: 10 }}>
                            <div style={{
                              background: "hsl(var(--card))",
                              border: `1.5px solid ${unit.color}60`,
                              color: canJump ? unit.color : "hsl(var(--muted-foreground))",
                              fontSize: 12, fontWeight: 800,
                              padding: "4px 14px", borderRadius: 12,
                              whiteSpace: "nowrap",
                              boxShadow: canJump ? `0 2px 10px ${unit.color}30` : "none",
                            }}>
                              {canJump ? "القفز إلى هنا؟" : "🔒 أكمل الوحدة السابقة"}
                            </div>
                            <div style={{ width:0, height:0, borderLeft:"6px solid transparent", borderRight:"6px solid transparent", borderTop:`7px solid hsl(var(--border))` }}/>
                          </motion.div>
                        )}

                        {/* "ابدأ" badge */}
                        {isCurrent && !isPopupOpen && !isJumpStation && (
                          <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                            style={{ position: "absolute", top: -46, display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
                            <div style={{
                              background: unit.color, color: "#fff",
                              fontSize: 13, fontWeight: 800,
                              padding: "4px 16px", borderRadius: 20,
                              whiteSpace: "nowrap",
                              boxShadow: `0 3px 10px ${unit.color}50`,
                            }}>ابدأ</div>
                            <div style={{
                              width: 0, height: 0,
                              borderLeft: "6px solid transparent",
                              borderRight: "6px solid transparent",
                              borderTop: `7px solid ${unit.color}`,
                            }}/>
                          </motion.div>
                        )}

                        {/* Station */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
                          whileHover={!effectiveLocked ? { scale: 1.07 } : {}}
                          whileTap={!effectiveLocked ? { scale: 0.94 } : {}}
                          onClick={e => {
                            e.stopPropagation();
                            if (!effectiveLocked) {
                              setActivePopup(isPopupOpen ? null : { lessonId: lesson.id, x, y });
                            }
                          }}
                          style={{ cursor: effectiveLocked ? "default" : "pointer" }}>
                          {lesson.type === "treasure" ? (
                            <TreasureIcon unlocked={lessonProgress >= 4}/>
                          ) : lesson.type === "challenge" ? (
                            <CrownIcon color={unit.color} locked={effectiveLocked && lessonProgress === 0}/>
                          ) : (
                            <StationCircle
                              type="lesson"
                              progress={effectiveLocked ? 0 : lessonProgress}
                              color={unit.color}
                              isCurrent={isCurrent}
                              isFirstOfSection={isFirstOfSection}
                              isJumpStation={isJumpStation}
                              canJump={canJump}
                            />
                          )}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Coming soon */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="text-center mt-16 space-y-2">
            <div className="text-3xl">🔜</div>
            <p className="text-sm text-muted-foreground">وحدات جديدة قادمة قريباً</p>
          </motion.div>
          <div className="h-16"/>
        </motion.div>
      </div>

      {/* Floating Mascot */}
      <FloatingMascot color={chapter.color} chapterId="beginner" />
    </Layout>
  );
}
