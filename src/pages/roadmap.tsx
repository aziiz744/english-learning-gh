import { useState, useRef, useEffect, useCallback } from "react";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/lib/supabase";
import { OwlMascot } from "@/components/owl-mascot";

interface UnitLesson {
  id: string;
  type: "lesson" | "treasure" | "challenge" | "practice";
  title: string;
  description: string;
  words?: string[];
  vocab?: { word: string; arabic: string; emoji: string }[];
}
interface Unit { id: string; title: string; emoji: string; color: string; sectionTitle?: string; pathVariant?: string; lessons: UnitLesson[]; }
interface Chapter { id: string; title: string; emoji: string; gradient: string; color: string; units: Unit[]; }

// Section divider interface
interface Section { id: string; title: string; color: string; units: Unit[]; }

const CHAPTERS: Chapter[] = [
  {
    id: "beginner", title: "المبتدئ", emoji: "🌱",
    gradient: "from-emerald-600 to-green-700", color: "#22a55e",
    units: [
      // ── القسم 1: قدّم واقبل المشروبات ──
      {
        id: "unit-drinks", title: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e",
        sectionTitle: "",  // أول وحدة — بدون فاصل فوقها
        lessons: [
          { id: "drinks-1", type: "lesson", title: "الكلمات الأساسية", description: "تعلّم كلمات المشروبات الأساسية مع سماع نطقها.", words: ["tea","coffee","water","juice","milk","yes","no"],
            vocab: [
              { word:"tea",    arabic:"شاي",    emoji:"🍵" },
              { word:"coffee", arabic:"قهوة",   emoji:"☕" },
              { word:"water",  arabic:"ماء",    emoji:"💧" },
              { word:"juice",  arabic:"عصير",   emoji:"🧃" },
              { word:"milk",   arabic:"حليب",   emoji:"🥛" },
              { word:"yes",    arabic:"نعم",    emoji:"✅" },
              { word:"no",     arabic:"لا",     emoji:"❌" },
            ]},
          { id: "drinks-2", type: "lesson", title: "كلمات جديدة", description: "كلمات الأدب والتفاعل مع الآخرين عند الطلب.", words: ["please","thank you","sorry","more"],
            vocab: [
              { word:"please",    arabic:"من فضلك", emoji:"🙏" },
              { word:"thank you", arabic:"شكراً",   emoji:"🙏" },
              { word:"sorry",     arabic:"آسف",     emoji:"😔" },
              { word:"more",      arabic:"المزيد",  emoji:"🔄" },
            ]},
          { id: "drinks-t", type: "treasure", title: "كنز المراجعة", description: "لعبة ممتعة تشمل جميع كلمات الدرسين — اجتزها واكسب نقاطاً مضاعفة!", words: [] },
          { id: "drinks-3", type: "lesson", title: "جمل كاملة", description: "استخدم الكلمات في جمل مثل Would you like some tea?", words: ["would","like","some","have","want"],
            vocab: [
              { word:"would", arabic:"سأودّ",  emoji:"🤔" },
              { word:"like",  arabic:"أحب",    emoji:"💚" },
              { word:"some",  arabic:"بعض",    emoji:"🔢" },
              { word:"have",  arabic:"أملك",   emoji:"👐" },
              { word:"want",  arabic:"أريد",   emoji:"🙋" },
            ]},
          { id: "drinks-c", type: "challenge", title: "تحدي الوحدة", description: "اختبار شامل لكل ما تعلمته — الكلمات والجمل والحوارات.", words: [] },
        ],
      },
      // ── القسم 2: قدّم نفسك وعائلتك — وحدة واحدة فقط ──
      {
        id: "unit-intro", title: "قدّم نفسك وعائلتك", emoji: "👋", color: "#7c3aed",
        sectionTitle: "قدّم نفسك وعائلتك",
        pathVariant: "zigzag",
        lessons: [
          { id: "intro-1", type: "lesson",    title: "ما اسمك؟",       description: "تعلّم كيف تقدّم نفسك بالإنجليزية.", words: ["name","I'm","my","what","your"] },
          { id: "intro-2", type: "lesson",    title: "من أين أنت؟",    description: "تعلّم كيف تذكر بلدك وتسأل الآخرين.", words: ["from","where","are","you","I"] },
          { id: "intro-t", type: "treasure",  title: "كنز المراجعة",   description: "راجع كل ما تعلمته!", words: [] },
          { id: "intro-3", type: "lesson",    title: "عائلتك",         description: "تعلّم كلمات العائلة: mother وfather وbrother وsister.", words: ["mother","father","brother","sister","family"] },
          { id: "intro-c", type: "challenge", title: "تحدي القسم",     description: "اختبار شامل للقسم الثاني!", words: [] },
        ],
      },
      // ── الوحدة 3: قل من أين أنت؟ ──
      {
        id: "unit-places", title: "قل من أين أنت؟", emoji: "🏙️", color: "#d4622a",
        sectionTitle: "قل من أين أنت؟",
        lessons: [
          { id: "places-1", type: "lesson",    title: "أماكن في المدينة", description: "تعلّم: school وhospital وmarket وpark.", words: ["school","hospital","market","park","bank"] },
          { id: "places-2", type: "lesson",    title: "أين تقع؟",         description: "next to وbehind وin front of.", words: ["next","behind","front","between","near"] },
          { id: "places-t", type: "treasure",  title: "كنز المراجعة",     description: "لعبة بكل كلمات الأماكن!", words: [] },
          { id: "places-3", type: "lesson",    title: "الاتجاهات",        description: "turn left وgo straight وturn right.", words: ["turn","left","right","straight","go"] },
          { id: "places-c", type: "challenge", title: "تحدي الوحدة",      description: "اختبار شامل للوحدة الثالثة!", words: [] },
        ],
      },
      // ── الوحدة 4: تنقل في المطار — سماوي ──
      {
        id: "unit-airport", title: "تنقل في المطار", emoji: "✈️", color: "#0891b2",
        sectionTitle: "تنقل في المطار",
        lessons: [
          { id: "airport-1", type: "lesson",    title: "في المطار",        description: "تعلّم كلمات المطار: ticket وpassport وgate وflight.", words: ["ticket","passport","gate","flight","boarding"] },
          { id: "airport-2", type: "lesson",    title: "جمل السفر",        description: "تعلّم جمل: Where is the gate? وWhat time does it board?", words: ["where","gate","time","board","depart"] },
          { id: "airport-p", type: "practice",  title: "تمرين المطار",     description: "تمرين مكثف على كل كلمات وجمل المطار قبل الكنز!", words: [] },
          { id: "airport-t", type: "treasure",  title: "كنز المراجعة",     description: "راجع كلمات المطار في لعبة ممتعة!", words: [] },
          { id: "airport-3", type: "lesson",    title: "في الطائرة",       description: "تعلّم جمل داخل الطائرة: window seat وaisle seat وseat belt.", words: ["window","aisle","seat","belt","landing"] },
          { id: "airport-c", type: "challenge", title: "تحدي الوحدة",      description: "اختبار شامل: تنقّل في المطار بثقة!", words: [] },
        ],
      },
      // ── الوحدة 5: استخدم الصفات — أخضر ──
      {
        id: "unit-adjectives", title: "استخدم الصفات لوصف الأسماء", emoji: "🎨", color: "#22a55e",
        sectionTitle: "استخدم الصفات لوصف الأسماء",
        pathVariant: "zigzag",
        lessons: [
          { id: "adj-1", type: "lesson",    title: "الصفات الأساسية",   description: "تعلّم: big وsmall وfast وslow وold وnew.", words: ["big","small","fast","slow","old","new"] },
          { id: "adj-2", type: "lesson",    title: "صف الأشياء",        description: "تعلّم كيف تصف الأشياء: The car is big. The house is old.", words: ["the","is","very","so","looks"] },
          { id: "adj-p", type: "practice",  title: "تمرين الصفات",      description: "تمرين مكثف على الصفات قبل الكنز!", words: [] },
          { id: "adj-t", type: "treasure",  title: "كنز المراجعة",      description: "راجع الصفات في لعبة ممتعة!", words: [] },
          { id: "adj-3", type: "lesson",    title: "قارن بين الأشياء",  description: "تعلّم: bigger than وsmaller than وthe biggest.", words: ["bigger","smaller","than","the","most"] },
          { id: "adj-c", type: "challenge", title: "تحدي الوحدة",       description: "اختبار شامل: صف واقارن بثقة!", words: [] },
        ],
      },
      // ── الوحدة 6: اطلب الطعام والمشروبات — وردي ──
      {
        id: "unit-food", title: "اطلب الطعام والمشروبات", emoji: "🍽️", color: "#db2777",
        sectionTitle: "اطلب الطعام والمشروبات",
        lessons: [
          { id: "food-1", type: "lesson",    title: "أسماء الأطعمة",     description: "تعلّم: rice وchicken وbread وsalad وsoup.", words: ["rice","chicken","bread","salad","soup"] },
          { id: "food-2", type: "lesson",    title: "في المطعم",          description: "تعلّم: Can I have...? وI'd like... وThe bill please.", words: ["can","have","like","bill","please"] },
          { id: "food-p", type: "practice",  title: "تمرين الطلب",        description: "تمرين مكثف على طلب الطعام قبل الكنز!", words: [] },
          { id: "food-t", type: "treasure",  title: "كنز المراجعة",       description: "راجع كلمات الطعام في لعبة ممتعة!", words: [] },
          { id: "food-3", type: "lesson",    title: "المشروبات والحلويات", description: "تعلّم: coffee وjuice وcake وice cream وdessert.", words: ["coffee","juice","cake","dessert","sweet"] },
          { id: "food-c", type: "challenge", title: "تحدي الوحدة",        description: "اختبار شامل: اطلب وجبتك بثقة!", words: [] },
        ],
      },
      // ── الوحدة 7: استخدم الزمن المضارع للمهن — أخضر ──
      {
        id: "unit-present-jobs", title: "استخدم الزمن المضارع للمهن", emoji: "💼", color: "#16a34a",
        sectionTitle: "استخدم الزمن المضارع للمهن",
        lessons: [
          { id: "pj-1", type: "lesson",    title: "أفعال المهن",         description: "تعلّم: teach وdrive وcook وbuild وwrite.", words: ["teach","drive","cook","build","write"] },
          { id: "pj-2", type: "lesson",    title: "جمل المضارع",         description: "تعلّم: He teaches. She drives. They cook.", words: ["he","she","they","works","teaches"] },
          { id: "pj-p", type: "practice",  title: "تمرين المهن",         description: "تمرين مكثف على أفعال المهن!", words: [] },
          { id: "pj-t", type: "treasure",  title: "كنز المراجعة",        description: "راجع المهن في لعبة ممتعة!", words: [] },
          { id: "pj-3", type: "lesson",    title: "اسأل عن المهن",       description: "تعلّم: What do you do? وWhere do you work?", words: ["what","where","do","work","job"] },
          { id: "pj-c", type: "challenge", title: "تحدي الوحدة",         description: "اختبار شامل: تحدث عن المهن!", words: [] },
        ],
      },
      // ── الوحدة 8: استخدم الزمن المضارع — برتقالي فاتح ──
      {
        id: "unit-present", title: "استخدم الزمن المضارع", emoji: "⏰", color: "#fb923c",
        sectionTitle: "استخدم الزمن المضارع",
        pathVariant: "zigzag",
        lessons: [
          { id: "pr-1", type: "lesson",    title: "أفعال يومية",         description: "تعلّم: eat وsleep وwalk وread وwatch.", words: ["eat","sleep","walk","read","watch"] },
          { id: "pr-2", type: "lesson",    title: "روتينك اليومي",       description: "تعلّم: I wake up at 7. I eat breakfast.", words: ["wake","brush","go","come","play"] },
          { id: "pr-p", type: "practice",  title: "تمرين المضارع",       description: "تمرين مكثف على الزمن المضارع!", words: [] },
          { id: "pr-t", type: "treasure",  title: "كنز المراجعة",        description: "راجع الأفعال اليومية!", words: [] },
          { id: "pr-3", type: "lesson",    title: "الكلمات الزمنية",     description: "تعلّم: always وusually وsometimes وnever.", words: ["always","usually","sometimes","never","often"] },
          { id: "pr-c", type: "challenge", title: "تحدي الوحدة",         description: "اختبار شامل: تحدث عن يومك!", words: [] },
        ],
      },
      // ── الوحدة 9: تحدث عن الطقس — أحمر فاتح ──
      {
        id: "unit-weather", title: "تحدث عن الطقس", emoji: "🌤️", color: "#f87171",
        sectionTitle: "تحدث عن الطقس",
        lessons: [
          { id: "wt-1", type: "lesson",    title: "كلمات الطقس",         description: "تعلّم: sunny وrainy وcloudy وwindy وsnowy.", words: ["sunny","rainy","cloudy","windy","cold"] },
          { id: "wt-2", type: "lesson",    title: "صف الطقس",            description: "تعلّم: It's hot today. The weather is nice.", words: ["it's","today","weather","nice","hot"] },
          { id: "wt-p", type: "practice",  title: "تمرين الطقس",         description: "تمرين مكثف على كلمات الطقس!", words: [] },
          { id: "wt-t", type: "treasure",  title: "كنز المراجعة",        description: "راجع كلمات الطقس!", words: [] },
          { id: "wt-3", type: "lesson",    title: "الفصول الأربعة",      description: "تعلّم: spring وsummer وautumn وwinter.", words: ["spring","summer","autumn","winter","season"] },
          { id: "wt-c", type: "challenge", title: "تحدي الوحدة",         description: "اختبار شامل: تحدث عن الطقس بثقة!", words: [] },
        ],
      },
      // ── الوحدة 10: تحدث عن حيواناتك الأليفة — بنفسجي فاتح ──
      {
        id: "unit-pets", title: "تحدث عن حيواناتك الأليفة", emoji: "🐾", color: "#a78bfa",
        sectionTitle: "تحدث عن حيواناتك الأليفة",
        pathVariant: "zigzag",
        lessons: [
          { id: "pet-1", type: "lesson",    title: "أسماء الحيوانات",    description: "تعلّم: cat وdog وbird وfish وrabbit.", words: ["cat","dog","bird","fish","rabbit"] },
          { id: "pet-2", type: "lesson",    title: "صف حيوانك",          description: "تعلّم: My cat is fluffy. He is playful.", words: ["my","fluffy","playful","gentle","cute"] },
          { id: "pet-p", type: "practice",  title: "تمرين الحيوانات",    description: "تمرين مكثف على الحيوانات!", words: [] },
          { id: "pet-t", type: "treasure",  title: "كنز المراجعة",       description: "راجع كلمات الحيوانات!", words: [] },
          { id: "pet-3", type: "lesson",    title: "العناية بالحيوان",   description: "تعلّم: feed وwalk وplay وgroom وvet.", words: ["feed","walk","play","groom","vet"] },
          { id: "pet-c", type: "challenge", title: "تحدي الوحدة",        description: "اختبار شامل: تحدث عن حيوانك الأليف!", words: [] },
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

// ─── Practice/Dumbbell Icon ──────────────────────────────────────────────────
function PracticeIcon({ color, locked }: { color: string; locked: boolean }) {
  const SIZE = 76;
  const r = SIZE / 2;
  const faceColor = locked ? "#2d3a4a" : color;
  const darkColor = locked ? "#151f2b" : shadeColor(color, -50);
  const gId = `practice-${color.replace("#","")}-${locked?"l":"u"}`;
  return (
    <div style={{ position: "relative", width: SIZE, height: SIZE + 10 }}>
      {!locked && (
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: SIZE * 0.8, height: SIZE * 0.25, borderRadius: "50%",
          background: color, opacity: 0.2, filter: "blur(10px)", zIndex: 0,
        }}/>
      )}
      <svg width={SIZE} height={SIZE} style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
        <defs>
          <radialGradient id={gId} cx="35%" cy="28%" r="75%">
            <stop offset="0%"  stopColor={locked ? "#3a4a5a" : lightenColor(faceColor)}/>
            <stop offset="50%" stopColor={faceColor}/>
            <stop offset="100%" stopColor={darkColor}/>
          </radialGradient>
        </defs>
        {/* Circle background */}
        <circle cx={r} cy={r} r={r-1} fill={darkColor} stroke={shadeColor(faceColor,-30)} strokeWidth={2}/>
        <circle cx={r} cy={r} r={r-7} fill={`url(#${gId})`}/>
        {/* Shine */}
        <ellipse cx={r*0.68} cy={r*0.44} rx={r*0.3} ry={r*0.11}
          fill="white" opacity={locked ? 0.04 : 0.15} transform={`rotate(-35 ${r} ${r})`}/>
        {/* Dumbbell icon — centered */}
        <g transform={`translate(${r-15}, ${r-10})`} opacity={locked ? 0.4 : 1}>
          {/* Bar */}
          <rect x="8" y="8" width="14" height="4" rx="2" fill="white"/>
          {/* Left weight plate outer */}
          <rect x="2" y="4" width="7" height="12" rx="3" fill="white"/>
          {/* Left weight plate inner */}
          <rect x="3.5" y="6" width="4" height="8" rx="2" fill={faceColor} opacity="0.5"/>
          {/* Right weight plate outer */}
          <rect x="21" y="4" width="7" height="12" rx="3" fill="white"/>
          {/* Right weight plate inner */}
          <rect x="22.5" y="6" width="4" height="8" rx="2" fill={faceColor} opacity="0.5"/>
          {/* Hand grip hint */}
          <rect x="13" y="6" width="4" height="8" rx="2" fill="white" opacity="0.3"/>
        </g>
      </svg>
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
  const trackR = r + 4; // الخط خارج الدائرة بفاصل واضح
  const circ   = 2 * Math.PI * trackR;
  const isGold = progress >= 4;
  const isActive = progress > 0 || !!isFirstOfSection || !!isJumpStation || isCurrent;

  // ألوان مريحة بعمق ثلاثي الأبعاد
  const faceTop   = isGold ? "#fbbf24" : isActive ? lightenColor(color) : "#3a4656";
  const faceMain  = isGold ? "#f59e0b" : isActive ? color : "#2d3a4a";
  const sideColor = isGold ? "#b45309" : isActive ? shadeColor(color, -60) : "#1a2330";
  const starColor = isGold ? "#ffffff" : isActive ? "#ffffff" : "#566578";
  // الخط بلون الوحدة نفسه (أو ذهبي للمكتمل)
  const trackColor = isGold ? "#f59e0b" : isActive ? color : "#2a3a4a";
  const arcFilled  = isGold
    ? `${circ} 0`
    : isJumpStation
    ? `0 ${circ}`
    : isActive ? `${circ * Math.min(progress / 4, 1)} ${circ}` : `0 ${circ}`;

  const gId = `sg-${SIZE}-${color.replace("#","")}-${isGold?"g":isActive?"a":"i"}`;
  const depth = SIZE * 0.11; // عمق الزاوية ثلاثية الأبعاد
  const pad = 8; // مساحة إضافية للخط الخارجي

  return (
    <div style={{ position: "relative", width: SIZE + pad*2, height: SIZE + depth + 6 + pad, marginLeft: -pad, marginTop: -pad }}>

      {/* Soft colored glow beneath */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: SIZE * 0.8, height: SIZE * 0.28, borderRadius: "50%",
        background: faceMain,
        opacity: isJumpStation ? 0.22 : isActive ? (isCurrent ? 0.3 : 0.14) : 0.05,
        filter: "blur(11px)", zIndex: 0,
      }}/>

      {/* Pulse ring for current */}
      {isCurrent && (
        <motion.div style={{
          position: "absolute", top: pad, left: pad, width: SIZE, height: SIZE,
          borderRadius: "50%", border: `2.5px solid ${color}`, zIndex: 2,
        }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        />
      )}

      <svg width={SIZE + pad*2} height={SIZE + depth + pad} style={{ position: "absolute", top: 0, left: 0, zIndex: 3, overflow:"visible" }}>
        <defs>
          <radialGradient id={gId} cx="38%" cy="30%" r="80%">
            <stop offset="0%"  stopColor={faceTop}/>
            <stop offset="55%" stopColor={faceMain}/>
            <stop offset="100%" stopColor={shadeColor(faceMain, -25)}/>
          </radialGradient>
        </defs>

        {/* ── خط التقدم (خارج الدائرة بفاصل، يوازي ميلان الدائرة) ── */}
        <motion.circle
          cx={r + pad} cy={r + pad + depth * 0.5} r={trackR} fill="none"
          stroke={trackColor} strokeWidth={5} strokeLinecap="round"
          strokeDasharray={arcFilled}
          style={{ filter: isActive ? `drop-shadow(0 0 4px ${trackColor}aa)` : "none", transform:"rotate(-90deg)", transformOrigin:`${r+pad}px ${r+pad+depth*0.5}px` }}
          initial={{ strokeDasharray:`0 ${circ}` }}
          animate={{ strokeDasharray: arcFilled }}
          transition={{ duration: 0.8, ease:"easeOut" }}
        />

        {/* ── الطبقة السفلية (العمق ثلاثي الأبعاد) ── */}
        <circle cx={r + pad} cy={r + pad + depth} r={r - 2} fill={sideColor}/>

        {/* ── الوجه العلوي ── */}
        <circle cx={r + pad} cy={r + pad} r={r - 2} fill={`url(#${gId})`}/>

        {/* لمعة علوية ناعمة */}
        <ellipse cx={(r + pad) - r*0.36} cy={(r + pad) - r*0.5} rx={r * 0.4} ry={r * 0.26}
          fill="white" opacity={isActive ? 0.16 : 0.05}/>

        {/* ── الأيقونة ── */}
        <g transform={`translate(${r + pad - SIZE * 0.21}, ${r + pad - SIZE * 0.21})`}>
          {isJumpStation && !isGold ? (
            <svg width={SIZE * 0.42} height={SIZE * 0.42} viewBox="0 0 28 28" fill="white" opacity="0.95"
              style={{ filter:`drop-shadow(0 2px 2px ${sideColor})` }}>
              <path d="M2 5 L12 14 L2 23 Z"/>
              <path d="M14 5 L24 14 L14 23 Z"/>
            </svg>
          ) : (
            <svg width={SIZE * 0.42} height={SIZE * 0.42} viewBox="0 0 24 24" fill={starColor}
              style={{ filter: isGold ? "drop-shadow(0 2px 3px #92400e)" : isActive ? `drop-shadow(0 2px 3px ${sideColor})` : "none" }}>
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
function lightenColor(hex: string, amt = 40): string {
  try {
    const n = parseInt(hex.replace("#",""), 16);
    const r = Math.min(255, (n >> 16) + amt);
    const g = Math.min(255, ((n >> 8) & 0xff) + amt);
    const b = Math.min(255, (n & 0xff) + amt);
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
        {lesson.type === "treasure" ? "كنز المراجعة 💎" : lesson.type === "challenge" ? "تحدي الوحدة 👑" : `الدرس ${lessonNum} · 4 دروس`}
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
      <path d={d} stroke="#3a4658" strokeWidth={6} fill="none" strokeLinecap="round" strokeDasharray="10 8"/>
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

function buildPath(count: number, variant?: string): { x: number; y: number }[] {
  // variant "zigzag" = تعرج أكثر حدة وعشوائية
  const cols = variant === "zigzag"
    ? [
        CANVAS_W / 2 - SIDE_PAD,      // يبدأ يسار
        CANVAS_W / 2 + SIDE_PAD + 10, // يمين أبعد
        CANVAS_W / 2 - 10,            // وسط يسار
        CANVAS_W / 2 + SIDE_PAD,      // يمين
        CANVAS_W / 2 - SIDE_PAD + 5,  // يسار قريب
        CANVAS_W / 2 + 20,            // وسط يمين
      ]
    : [
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


// ─── Guide Drawer — جمل الوحدة مع ترجمة وصوت ───────────────────────────────
const UNIT_GUIDE_PHRASES: Record<string, { en: string; ar: string }[]> = {
  "unit-drinks": [
    { en: "Would you like some tea?",   ar: "هل تودّ بعض الشاي؟" },
    { en: "Coffee or tea?",             ar: "قهوة أو شاي؟" },
    { en: "Water, please.",             ar: "ماء، من فضلك." },
    { en: "Yes please, thank you!",     ar: "نعم من فضلك، شكراً!" },
    { en: "No thank you, I'm fine.",    ar: "لا شكراً، أنا بخير." },
    { en: "Sorry, we have no juice.",   ar: "آسف، لا يوجد عصير." },
    { en: "Would you like some more?",  ar: "هل تريد المزيد؟" },
    { en: "I would like some milk.",    ar: "أودّ بعض الحليب." },
  ],
};

function speakText(text: string) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

function GuideDrawer({ section, chapter, onClose }: {
  section: { title: string; color: string; unitId: string };
  chapter: Chapter;
  onClose: () => void;
}) {
  const unit = chapter.units.find(u => u.id === section.unitId) ?? chapter.units[0];
  const phrases = UNIT_GUIDE_PHRASES[unit.id] ?? [];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 60 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "hsl(var(--card))",
          borderRadius: "24px 24px 0 0",
          padding: "20px 20px 44px",
          maxHeight: "85vh", overflowY: "auto",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Handle */}
        <div style={{ width: 40, height: 4, background: "hsl(var(--border))", borderRadius: 2, margin: "0 auto 18px" }}/>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
          <div>
            <h2 style={{ fontWeight: 900, fontSize: 20, margin: "0 0 4px", textAlign: "right" }}>دليل الوحدة 1</h2>
            <p style={{ color: "hsl(var(--muted-foreground))", fontSize: 13, margin: 0, textAlign: "right" }}>
              طالع الجمل الأساسية واستعرضها مع الترجمة
            </p>
          </div>
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: section.color + "20",
            border: `2px solid ${section.color}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, flexShrink: 0, marginRight: 12,
          }}>☕</div>
        </div>

        {/* Section label */}
        <div style={{ textAlign: "right", margin: "16px 0 8px" }}>
          <span style={{ color: section.color, fontSize: 12, fontWeight: 700 }}>الجمل الأساسية</span>
          <div style={{ fontWeight: 900, fontSize: 18 }}>{section.title}</div>
        </div>

        <div style={{ height: 1, background: "hsl(var(--border))", margin: "12px 0 16px" }}/>

        {/* Phrases */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {phrases.map((p, i) => (
            <div key={i} style={{
              background: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 16, padding: "14px 16px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 800, fontSize: 15, direction: "ltr", textAlign: "left", marginBottom: 4 }}>{p.en}</div>
                <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", borderBottom: `1.5px dashed ${section.color}60`, paddingBottom: 2, display: "inline-block" }}>{p.ar}</div>
              </div>
              <button
                onClick={() => speakText(p.en)}
                style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: section.color + "15",
                  border: `1.5px solid ${section.color}40`,
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginLeft: 12,
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={section.color}>
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Close */}
        <button onClick={onClose} style={{
          width: "100%", padding: "14px", marginTop: 20,
          background: section.color, border: "none", borderRadius: 16,
          color: "white", fontWeight: 800, fontSize: 15, cursor: "pointer",
          boxShadow: `0 4px 16px ${section.color}40`,
        }}>
          حسناً، جاهز للدرس! ✓
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Roadmap() {
  const [activeChapter] = useState(0);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [activePopup, setActivePopup] = useState<{ lessonId: string; x: number; y: number } | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const chapter = CHAPTERS[activeChapter];
  const sections = getSections(chapter);

  const allLessons = chapter.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id, unitColor: u.color })));
  const currentIdx = allLessons.findIndex(l => (progress[l.id] ?? 0) < 4);

  // Load unit progress from Supabase
  useEffect(() => {
    if (!user) return;
    supabase.from("unit_progress").select("lesson_id, sub_progress").eq("user_id", user.id)
      .then(({ data }) => {
        if (!data) return;
        const map: Record<string, number> = {};
        data.forEach((r: any) => { map[r.lesson_id] = r.sub_progress ?? 0; }); // 0-4 = ربع لكل درس
        setProgress(map);
      });
  }, [user]);

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
              onClick={e => { e.stopPropagation(); setShowGuide(true); }}
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
            const positions = buildPath(unit.lessons.length, unit.pathVariant);
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

                  {/* البومة حارسة الوحدة الأولى — على اليمين تطفو */}
                  {unitIdx === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      style={{ position: "absolute", right: -20, top: 40, zIndex: 5, pointerEvents: "none" }}>
                      {/* قاعدة دائرية */}
                      <div style={{
                        position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
                        width: 70, height: 18, borderRadius: "50%",
                        background: "radial-gradient(ellipse, rgba(79,195,247,0.3) 0%, transparent 70%)",
                        filter: "blur(3px)",
                      }}/>
                      <OwlMascot state="idle" size={84} />
                    </motion.div>
                  )}

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
                    const SIZE = lesson.type === "challenge" ? 90 : lesson.type === "treasure" ? 72 : lesson.type === "practice" ? 76 : 76;
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
                                  setLocation(`/u/${lesson.id}`);
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
                              {"القفز إلى هنا"}
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
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: idx * 0.08, type: "spring", stiffness: 200 }}
                          whileHover={!effectiveLocked ? { y: 3, transition: { duration: 0.15 } } : {}}
                          whileTap={!effectiveLocked ? { y: 7, scale: 0.97, transition: { duration: 0.1 } } : {}}
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
                          ) : lesson.type === "practice" ? (
                            <PracticeIcon color={unit.color} locked={effectiveLocked && lessonProgress === 0}/>
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

          {/* Next chapter card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              margin: "48px 16px 32px",
              background: "hsl(var(--card))",
              border: "1.5px solid hsl(var(--border))",
              borderRadius: 20,
              padding: "24px 20px",
              textAlign: "center",
            }}>
            {/* التالي badge */}
            <div style={{
              display: "inline-block",
              background: "hsl(var(--muted))",
              color: "hsl(var(--muted-foreground))",
              fontSize: 12, fontWeight: 700,
              padding: "3px 14px", borderRadius: 20,
              marginBottom: 14,
            }}>التالي</div>

            {/* العنوان مع قفل */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: "hsl(var(--foreground))" }}>القسم 2</span>
              <span style={{ fontSize: 20 }}>🔒</span>
            </div>

            {/* الوصف */}
            <p style={{ color: "hsl(var(--muted-foreground))", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              تعلّم كلمات، وعبارات، ومبادئ نحوية للتعاملات البسيطة
            </p>

            {/* زر القفز */}
            <button style={{
              width: "100%", padding: "13px 0",
              background: "transparent",
              border: "1.5px solid hsl(var(--border))",
              borderRadius: 14,
              color: "#38bdf8",
              fontWeight: 800, fontSize: 15,
              cursor: "pointer",
            }}>
              القفز إلى هنا؟
            </button>
          </motion.div>
          <div className="h-8"/>
        </motion.div>
      </div>

      {/* Guide Drawer */}
      <AnimatePresence>
        {showGuide && (
          <GuideDrawer
            section={activeSection}
            chapter={chapter}
            onClose={() => setShowGuide(false)}
          />
        )}
      </AnimatePresence>

      {/* Floating Mascot */}
      <FloatingMascot color={chapter.color} chapterId="beginner" />
    </Layout>
  );
}
