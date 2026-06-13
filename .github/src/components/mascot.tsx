import { motion, AnimatePresence, type Target, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export type MascotState = "idle" | "thinking" | "correct" | "wrong" | "combo" | "combo5" | "complete";

interface Config {
  mouth: string;
  brow1: string;
  brow2: string;
  pupilScale: number;
  leftPupilX: number;
  rightPupilX: number;
  pupilY: number;
  bubble: string | null;
  bubbleColor: string;
  armRaise: boolean;
}

const STATES: Record<MascotState, Config> = {
  idle: {
    mouth:   "M 48 74 Q 60 82 72 74",
    brow1:   "M 33 46 Q 43 42 53 46",
    brow2:   "M 67 46 Q 77 42 87 46",
    pupilScale: 1, leftPupilX: 43, rightPupilX: 77, pupilY: 59,
    bubble: null, bubbleColor: "", armRaise: false,
  },
  thinking: {
    mouth:   "M 51 76 Q 60 76 69 76",
    brow1:   "M 33 46 Q 43 42 53 46",
    brow2:   "M 67 43 Q 77 40 87 43",
    pupilScale: 0.9, leftPupilX: 41, rightPupilX: 75, pupilY: 59,
    bubble: "فكّر جيداً… 🤔", bubbleColor: "bg-muted border-border", armRaise: false,
  },
  correct: {
    mouth:   "M 44 71 Q 60 84 76 71",
    brow1:   "M 32 43 Q 43 39 54 43",
    brow2:   "M 66 43 Q 77 39 88 43",
    pupilScale: 1.15, leftPupilX: 43, rightPupilX: 77, pupilY: 57,
    bubble: "رائع جداً! 🎉", bubbleColor: "bg-green-500/10 border-green-500/30 text-green-400", armRaise: false,
  },
  wrong: {
    mouth:   "M 48 79 Q 60 71 72 79",
    brow1:   "M 33 45 Q 43 49 53 45",
    brow2:   "M 67 45 Q 77 49 87 45",
    pupilScale: 0.8, leftPupilX: 43, rightPupilX: 77, pupilY: 61,
    bubble: "لا بأس، حاول مرة أخرى 💪", bubbleColor: "bg-red-500/10 border-red-500/30 text-red-400", armRaise: false,
  },
  combo: {
    mouth:   "M 42 70 Q 60 86 78 70",
    brow1:   "M 31 41 Q 43 37 55 41",
    brow2:   "M 65 41 Q 77 37 89 41",
    pupilScale: 1.25, leftPupilX: 43, rightPupilX: 77, pupilY: 58,
    bubble: "سلسلة رائعة! 🔥", bubbleColor: "bg-amber-500/10 border-amber-500/30 text-amber-400", armRaise: true,
  },
  combo5: {
    mouth:   "M 38 68 Q 60 90 82 68",
    brow1:   "M 30 39 Q 43 34 56 39",
    brow2:   "M 64 39 Q 77 34 90 39",
    pupilScale: 1.35, leftPupilX: 43, rightPupilX: 77, pupilY: 56,
    bubble: "5 إجابات صحيحة متتالية! أنت رائع! 🌟🔥", bubbleColor: "bg-yellow-500/20 border-yellow-400/50 text-yellow-300", armRaise: true,
  },
  complete: {
    mouth:   "M 41 69 Q 60 87 79 69",
    brow1:   "M 31 41 Q 43 37 55 41",
    brow2:   "M 65 41 Q 77 37 89 41",
    pupilScale: 1.2, leftPupilX: 43, rightPupilX: 77, pupilY: 56,
    bubble: "أنت بطل! 🏆", bubbleColor: "bg-primary/10 border-primary/30 text-primary", armRaise: true,
  },
};

type AnimDef = Target & { transition?: Transition };
const BODY_ANIMS: Record<MascotState, AnimDef> = {
  idle:     { y: [0, -4, 0],                                  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
  thinking: { rotate: [-2, 2, -2],                            transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } },
  correct:  { y: [0, -22, -4, -16, 0],                        transition: { duration: 0.65, ease: "easeOut" } },
  wrong:    { x: [0, -10, 10, -8, 8, -4, 4, 0],              transition: { duration: 0.5,  ease: "easeOut" } },
  combo:    { y: [0, -18, 0, -12, 0], scale: [1, 1.08, 1, 1.05, 1], transition: { duration: 0.7 } },
  combo5:   { y: [0, -30, -5, -25, 0, -15, 0], scale: [1, 1.15, 1, 1.1, 1], rotate: [-8, 8, -5, 5, 0], transition: { duration: 1.2 } },
  complete: { y: [0, -26, -8, -20, 0], rotate: [-5, 5, -3, 3, 0], scale: [1, 1.12, 1], transition: { duration: 0.85 } },
};

export function Mascot({ state, className }: { state: MascotState; className?: string }) {
  const cfg = STATES[state];
  const pr = 5.5 * cfg.pupilScale;

  /* ── skin / shirt palette ── */
  const skin     = "#F5C5A3";
  const skinDark = "#E0A882";
  const hair     = "#3D2314";
  const shirt    = "#15803D";
  const shirtDk  = "#166534";
  const cap      = "#1E293B";
  const tassle   = "#22C55E";

  return (
    <div className={cn("flex flex-col items-center gap-2 relative", className)}>
      {/* Speech bubble */}
      <AnimatePresence>
        {cfg.bubble && (
          <motion.div
            key={state + "-bubble"}
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.22 }}
            className={cn(
              "relative text-xs font-bold px-3 py-2 rounded-2xl border shadow-lg whitespace-nowrap",
              cfg.bubbleColor || "bg-muted border-border text-foreground"
            )}
          >
            {cfg.bubble}
            <span className="absolute -bottom-2 right-1/2 translate-x-1/2 w-0 h-0
              border-l-[6px] border-r-[6px] border-t-[8px]
              border-l-transparent border-r-transparent border-t-current opacity-25" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Human teacher body */}
      <motion.div
        key={state}
        animate={BODY_ANIMS[state]}
        style={{ originX: "50%", originY: "100%" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 120 165" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
          {/* Ground shadow */}
          <ellipse cx="60" cy="162" rx="28" ry="4" fill="rgba(0,0,0,0.18)" />

          {/* ── Body / shirt ── */}
          <path
            d="M 28 108 C 40 100 50 96 60 96 C 70 96 80 100 92 108 L 97 162 L 23 162 Z"
            fill={shirt}
          />
          {/* Shirt shadow */}
          <path
            d="M 28 108 C 40 100 50 96 60 96 L 60 162 L 23 162 Z"
            fill={shirtDk} opacity="0.3"
          />

          {/* Collar V-neck */}
          <path d="M 46 97 L 60 114 L 74 97" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Tie */}
          <polygon points="57,110 55,132 60,138 65,132 63,110" fill="#0F4C81" />
          <polygon points="55,108 60,116 65,108" fill="#0D3D6E" />
          {/* Tie stripe */}
          <line x1="57.5" y1="118" x2="62.5" y2="118" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="57" y1="124" x2="63" y2="124" stroke="white" strokeWidth="1" opacity="0.4" />

          {/* ── Arms ── */}
          {cfg.armRaise ? (
            <>
              {/* Arms raised */}
              <path d="M 28 106 Q 10 86 8 62 Q 10 52 18 56 Q 26 60 26 76 L 36 104 Z" fill={shirt} />
              <path d="M 92 106 Q 110 86 112 62 Q 110 52 102 56 Q 94 60 94 76 L 84 104 Z" fill={shirt} />
              {/* Hands (raised) */}
              <ellipse cx="13" cy="54" rx="8" ry="9" fill={skin} />
              <ellipse cx="107" cy="54" rx="8" ry="9" fill={skin} />
              {/* Fingers hint */}
              <path d="M 8 50 Q 13 46 18 50" stroke={skinDark} strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 102 50 Q 107 46 112 50" stroke={skinDark} strokeWidth="1" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* Arms down */}
              <path d="M 28 110 Q 10 120 12 146 Q 13 154 22 152 Q 30 150 30 136 L 36 108 Z" fill={shirt} />
              <path d="M 92 110 Q 110 120 108 146 Q 107 154 98 152 Q 90 150 90 136 L 84 108 Z" fill={shirt} />
              {/* Hands (down) */}
              <ellipse cx="17" cy="154" rx="8" ry="9" fill={skin} />
              <ellipse cx="103" cy="154" rx="8" ry="9" fill={skin} />
              {/* Fingers hint */}
              <path d="M 12 150 Q 17 146 22 150" stroke={skinDark} strokeWidth="1" fill="none" strokeLinecap="round" />
              <path d="M 98 150 Q 103 146 108 150" stroke={skinDark} strokeWidth="1" fill="none" strokeLinecap="round" />
            </>
          )}

          {/* ── Neck ── */}
          <rect x="50" y="90" width="20" height="12" rx="4" fill={skin} />
          {/* Neck shadow */}
          <rect x="50" y="90" width="10" height="12" rx="4" fill={skinDark} opacity="0.25" />

          {/* ── Ears ── */}
          <ellipse cx="23" cy="64" rx="5" ry="7" fill={skin} />
          <ellipse cx="23" cy="64" rx="3" ry="5" fill={skinDark} opacity="0.4" />
          <ellipse cx="97" cy="64" rx="5" ry="7" fill={skin} />
          <ellipse cx="97" cy="64" rx="3" ry="5" fill={skinDark} opacity="0.4" />

          {/* ── Head ── */}
          <ellipse cx="60" cy="60" rx="37" ry="38" fill={skin} />
          {/* Head side shadow */}
          <ellipse cx="58" cy="60" rx="37" ry="38" fill={skinDark} opacity="0.08" clipPath="url(#leftHalf)" />

          {/* ── Hair ── */}
          {/* Hair back shape */}
          <path
            d="M 23 48 Q 22 22 40 16 Q 60 10 80 16 Q 98 22 97 48 Q 86 30 60 28 Q 34 30 23 48 Z"
            fill={hair}
          />
          {/* Hair side sweep */}
          <path d="M 23 48 Q 26 38 30 36 Q 32 44 28 52 Z" fill={hair} />
          <path d="M 97 48 Q 94 38 90 36 Q 88 44 92 52 Z" fill={hair} />

          {/* ── Graduation cap ── */}
          {/* Brim */}
          <rect x="24" y="26" width="72" height="7" rx="3" fill={cap} />
          {/* Cap top */}
          <rect x="34" y="12" width="52" height="16" rx="4" fill={cap} />
          {/* Cap shine */}
          <rect x="36" y="14" width="24" height="4" rx="2" fill="white" opacity="0.08" />
          {/* Tassel line */}
          <line x1="86" y1="16" x2="95" y2="34" stroke={tassle} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="95" cy="37" r="4" fill={tassle} />

          {/* ── Eyes ── */}
          {/* Eye whites */}
          <circle cx="43" cy="58" r="11" fill="white" />
          <circle cx="77" cy="58" r="11" fill="white" />
          {/* Eye rim */}
          <circle cx="43" cy="58" r="11" fill="none" stroke={skinDark} strokeWidth="0.8" />
          <circle cx="77" cy="58" r="11" fill="none" stroke={skinDark} strokeWidth="0.8" />

          {/* Pupils */}
          {state === "combo" ? (
            <>
              <text x="43" y="62" fontSize="13" textAnchor="middle" dominantBaseline="middle">⭐</text>
              <text x="77" y="62" fontSize="13" textAnchor="middle" dominantBaseline="middle">⭐</text>
            </>
          ) : (
            <>
              <circle
                cx={cfg.leftPupilX}  cy={cfg.pupilY} r={pr}
                fill="#1E293B"
                style={{ transition: "all 0.25s ease" }}
              />
              <circle
                cx={cfg.rightPupilX} cy={cfg.pupilY} r={pr}
                fill="#1E293B"
                style={{ transition: "all 0.25s ease" }}
              />
              {/* Iris ring */}
              <circle cx={cfg.leftPupilX}  cy={cfg.pupilY} r={pr * 0.6} fill="#334155" style={{ transition: "all 0.25s ease" }} />
              <circle cx={cfg.rightPupilX} cy={cfg.pupilY} r={pr * 0.6} fill="#334155" style={{ transition: "all 0.25s ease" }} />
            </>
          )}
          {/* Eye shine */}
          <circle cx="47" cy="55" r="2.5" fill="rgba(255,255,255,0.9)" />
          <circle cx="81" cy="55" r="2.5" fill="rgba(255,255,255,0.9)" />

          {/* ── Eyebrows ── */}
          <path
            d={cfg.brow1} stroke={hair} strokeWidth="2.8" fill="none" strokeLinecap="round"
            style={{ transition: "d 0.3s ease" }}
          />
          <path
            d={cfg.brow2} stroke={hair} strokeWidth="2.8" fill="none" strokeLinecap="round"
            style={{ transition: "d 0.3s ease" }}
          />

          {/* ── Nose ── */}
          <path d="M 57 64 Q 60 70 63 64" stroke={skinDark} strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* ── Cheeks ── */}
          <ellipse cx="28" cy="70" rx="9" ry="6" fill="rgba(251,113,133,0.28)" />
          <ellipse cx="92" cy="70" rx="9" ry="6" fill="rgba(251,113,133,0.28)" />

          {/* ── Mouth ── */}
          <path
            d={cfg.mouth} stroke="#C0694A" strokeWidth="2.8" fill="none" strokeLinecap="round"
            style={{ transition: "d 0.3s ease" }}
          />

          {/* ── Special effects ── */}
          {state === "wrong" && (
            <>
              <motion.ellipse cx="34" cy="68" rx="3" ry="4" fill="#93C5FD" opacity="0.85"
                animate={{ cy: [68, 80], opacity: [0.9, 0] }}
                transition={{ duration: 0.9, repeat: Infinity }} />
              <motion.ellipse cx="86" cy="68" rx="3" ry="4" fill="#93C5FD" opacity="0.85"
                animate={{ cy: [68, 80], opacity: [0.9, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: 0.25 }} />
            </>
          )}

          {state === "complete" && (
            <>
              <motion.text x="2" y="34" fontSize="14"
                animate={{ y: [34, 22, 34], rotate: [0, 20, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}>⭐</motion.text>
              <motion.text x="100" y="30" fontSize="14"
                animate={{ y: [30, 16, 30], rotate: [0, -20, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}>✨</motion.text>
            </>
          )}
        </svg>
      </motion.div>
    </div>
  );
}
