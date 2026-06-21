import { useState, useRef, useEffect, useCallback } from "react";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/lib/supabase";

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
          { id: "intro-c", type: "challenge", title: "تحدي الوحدة",     description: "اختبار شامل لكل ما تعلمته في هذه الوحدة!", words: [] },
        ],
      },
      // ── الوحدة 3: قل من أين أنت؟ ──
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
  // ═══════════════ القسم الثاني — المتوسط ═══════════════
  {
    id: "intermediate", title: "المتوسط", emoji: "🚀",
    units: [
      // الوحدة 11: تسوّق لشراء الملابس
      {
        id: "unit-clothes", title: "تسوّق لشراء الملابس", emoji: "👕", color: "#0ea5e9",
        sectionTitle: "",
        lessons: [
          { id: "clothes-1", type: "lesson",    title: "أسماء الملابس",   description: "تعلّم: shirt وpants وdress وshoes وhat.", words: ["shirt","pants","dress","shoes","hat"] },
          { id: "clothes-2", type: "lesson",    title: "في متجر الملابس", description: "تعلّم: size وcolor وprice وbuy.", words: ["size","color","price","buy"] },
          { id: "clothes-t", type: "treasure",  title: "كنز المراجعة",    description: "راجع كلمات الملابس!", words: [] },
          { id: "clothes-3", type: "lesson",    title: "اطلب الملابس",     description: "تعلّم: I want وHow much وtoo big.", words: ["want","price","big","small"] },
          { id: "clothes-c", type: "challenge", title: "تحدي الوحدة",     description: "اختبار شامل: تسوّق للملابس بثقة!", words: [] },
        ],
      },
      // الوحدة 12: قم بجولة في منزلك
      {
        id: "unit-house", title: "قم بجولة في منزلك", emoji: "🏠", color: "#f97316",
        sectionTitle: "قم بجولة في منزلك",
        pathVariant: "zigzag",
        lessons: [
          { id: "house-1", type: "lesson",    title: "غرف المنزل", description: "تعلّم: kitchen وbedroom وbathroom.", words: ["kitchen","bedroom","bathroom","door"] },
          { id: "house-2", type: "lesson",    title: "الأثاث",     description: "تعلّم: table وchair وbed وsofa.", words: ["table","chair","bed","sofa"] },
          { id: "house-t", type: "treasure",  title: "كنز المراجعة", description: "راجع كلمات المنزل!", words: [] },
          { id: "house-3", type: "lesson",    title: "أين الأشياء", description: "تعلّم: in وon وunder وnear.", words: ["in","on","under","near"] },
          { id: "house-c", type: "challenge", title: "تحدي الوحدة", description: "اختبار شامل: قم بجولة في منزلك!", words: [] },
        ],
      },
      // الوحدة 13: المضارع من "يكون"
      {
        id: "unit-tobe", title: "استخدم المضارع من يكون", emoji: "📝", color: "#8b5cf6",
        sectionTitle: "استخدم المضارع من يكون",
        lessons: [
          { id: "tobe-1", type: "lesson",    title: "أنا أكون، أنت تكون", description: "تعلّم: am وis وare.", words: ["am","is","are"] },
          { id: "tobe-2", type: "lesson",    title: "جمل مع يكون",        description: "تعلّم جملاً كاملة مع am/is/are.", words: ["am","is","are"] },
          { id: "tobe-t", type: "treasure",  title: "كنز المراجعة",       description: "راجع المضارع من يكون!", words: [] },
          { id: "tobe-3", type: "lesson",    title: "يكون مع الصفات",     description: "تعلّم: I am happy. He is tall.", words: ["happy","tall","busy","tired"] },
          { id: "tobe-c", type: "challenge", title: "تحدي الوحدة",        description: "اختبار شامل: استخدم am/is/are!", words: [] },
        ],
      },
      // الوحدة 14: اختصارات المضارع من "يكون"
      {
        id: "unit-contr", title: "اختصارات المضارع من يكون", emoji: "✂️", color: "#ec4899",
        sectionTitle: "اختصارات المضارع من يكون",
        pathVariant: "zigzag",
        lessons: [
          { id: "contr-1", type: "lesson",    title: "الاختصارات الأساسية", description: "تعلّم: I'm وyou're وhe's.", words: ["I'm","you're","he's"] },
          { id: "contr-2", type: "lesson",    title: "الاختصارات في جمل",  description: "استخدم الاختصارات في جمل.", words: ["I'm","it's","we're"] },
          { id: "contr-t", type: "treasure",  title: "كنز المراجعة",       description: "راجع الاختصارات!", words: [] },
          { id: "contr-3", type: "lesson",    title: "اختصارات النفي",     description: "تعلّم: isn't وaren't.", words: ["isn't","aren't"] },
          { id: "contr-c", type: "challenge", title: "تحدي الوحدة",        description: "اختبار شامل: استخدم الاختصارات!", words: [] },
        ],
      },
      // الوحدة 15: اطلب الطعام والمشروبات
      {
        id: "unit-order", title: "اطلب الطعام والمشروبات", emoji: "🍽️", color: "#14b8a6",
        sectionTitle: "اطلب الطعام والمشروبات",
        lessons: [
          { id: "order-1", type: "lesson",    title: "قائمة الطعام", description: "تعلّم: menu وwaiter وbill وorder.", words: ["menu","waiter","bill","order"] },
          { id: "order-2", type: "lesson",    title: "اطلب بأدب",     description: "تعلّم: I would like وCan I have.", words: ["would","like","please","have"] },
          { id: "order-t", type: "treasure",  title: "كنز المراجعة",  description: "راجع كلمات المطعم!", words: [] },
          { id: "order-3", type: "lesson",    title: "في المطعم",     description: "تعلّم: table for two وthe bill وtip.", words: ["table","bill","tip","meal"] },
          { id: "order-c", type: "challenge", title: "تحدي الوحدة",   description: "اختبار شامل: اطلب الطعام بثقة!", words: [] },
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
  const SIZE = 76;
  const r = SIZE / 2;
  const depth = SIZE * 0.11;
  const pad = 5;
  const faceTop  = locked ? "#3a4656" : lightenColor(color);
  const faceMain = locked ? "#2d3a4a" : color;
  const sideCol  = locked ? "#1a2330" : shadeColor(color, -60);
  const gId = `crown-${color.replace("#","")}-${locked?"l":"u"}`;

  return (
    <div style={{ position: "relative", width: SIZE + pad*2, height: SIZE + depth + 6 + pad, marginLeft: -pad, marginTop: -pad }}>
      {!locked && (
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: SIZE * 0.8, height: SIZE * 0.28, borderRadius: "50%",
          background: color, opacity: 0.25, filter: "blur(10px)", zIndex: 0,
        }}/>
      )}
      <svg width={SIZE + pad*2} height={SIZE + depth + pad} style={{ position: "absolute", top: 0, left: 0, zIndex: 3, overflow:"visible" }}>
        <defs>
          <radialGradient id={gId} cx="38%" cy="30%" r="80%">
            <stop offset="0%"  stopColor={faceTop}/>
            <stop offset="55%" stopColor={faceMain}/>
            <stop offset="100%" stopColor={shadeColor(faceMain, -25)}/>
          </radialGradient>
        </defs>
        {/* العمق */}
        <circle cx={r+pad} cy={r+pad+depth} r={r-2} fill={sideCol}/>
        {/* الوجه */}
        <circle cx={r+pad} cy={r+pad} r={r-2} fill={`url(#${gId})`}/>
        {/* لمعة */}
        <ellipse cx={(r+pad)-r*0.36} cy={(r+pad)-r*0.5} rx={r*0.4} ry={r*0.26}
          fill="white" opacity={locked ? 0.05 : 0.14}/>
        {/* التاج — أكبر وأوضح */}
        <g transform={`translate(${r+pad-20}, ${r+pad-16})`}>
          {/* جسم التاج */}
          <path d="M2 26 L38 26 L34 10 L26 19 L20 4 L14 19 L6 10 Z"
            fill={locked ? "#4b5563" : "#fbbf24"}
            stroke={locked ? "#374151" : "#f59e0b"} strokeWidth="1.5"/>
          {/* قاعدة التاج */}
          <rect x="2" y="26" width="36" height="7" rx="3"
            fill={locked ? "#374151" : "#f59e0b"}/>
          {/* الجواهر */}
          {!locked && <>
            <circle cx="20" cy="7" r="3.5" fill="#fff" opacity="0.9"/>
            <circle cx="7" cy="13" r="2.5" fill="#fff" opacity="0.7"/>
            <circle cx="33" cy="13" r="2.5" fill="#fff" opacity="0.7"/>
          </>}
        </g>
      </svg>
    </div>
  );
}

// ─── Treasure chest (improved) ───────────────────────────────────────────────
function TreasureIcon({ unlocked }: { unlocked: boolean }) {
  const woodFront = unlocked ? "#a06a3a" : "#4b5563";
  const woodFrontD = unlocked ? "#7a4e28" : "#1f2937";
  const woodTop = unlocked ? "#b8814a" : "#6b7280";
  const band = unlocked ? "#6b4423" : "#374151";
  const bandD = unlocked ? "#4a2d15" : "#1f2937";
  const stud = unlocked ? "#8a6a48" : "#9ca3af";
  return (
    <div style={{ position: "relative", width: 76, height: 76 }}>
      {/* Ground shadow */}
      <div style={{
        position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
        width: 54, height: 10, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
        filter: "blur(5px)",
      }}/>
      <svg width="76" height="72" viewBox="0 0 76 72" fill="none">
        <defs>
          {unlocked && (
            <radialGradient id="tGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#eab308" stopOpacity="0"/>
            </radialGradient>
          )}
        </defs>

        {unlocked && <ellipse cx="38" cy="40" rx="30" ry="22" fill="url(#tGlow)" opacity="0.45"/>}

        {/* جسم الصندوق الأمامي */}
        <rect x="10" y="40" width="56" height="26" rx="4" fill={woodFront} stroke={bandD} strokeWidth="1.5"/>
        {/* الحافة العلوية */}
        <rect x="10" y="37" width="56" height="7" rx="3" fill={woodTop} stroke={bandD} strokeWidth="1.2"/>
        {/* ألواح عمودية */}
        <line x1="28" y1="44" x2="28" y2="64" stroke={bandD} strokeWidth="1" opacity="0.4"/>
        <line x1="48" y1="44" x2="48" y2="64" stroke={bandD} strokeWidth="1" opacity="0.4"/>
        {/* حزام أفقي */}
        <rect x="10" y="50" width="56" height="6" fill={band} stroke={bandD} strokeWidth="0.8"/>
        {/* أوتاد */}
        <rect x="15" y="51" width="4" height="4" rx="1" fill={stud}/>
        <rect x="57" y="51" width="4" height="4" rx="1" fill={stud}/>

        {/* جواهر داخل الصندوق عند الفتح */}
        {unlocked && <>
          <circle cx="28" cy="40" r="5" fill="#f472b6" stroke="#be185d" strokeWidth="0.8"/>
          <circle cx="38" cy="37" r="6" fill="#38bdf8" stroke="#0369a1" strokeWidth="0.8"/>
          <circle cx="48" cy="40" r="5" fill="#34d399" stroke="#047857" strokeWidth="0.8"/>
        </>}

        {/* القفل (مغلق فقط) */}
        {!unlocked && <>
          <rect x="32" y="46" width="12" height="13" rx="2.5" fill={stud} stroke={bandD} strokeWidth="1"/>
          <circle cx="38" cy="51" r="2.5" fill="#1f2937"/>
        </>}

        {/* الغطاء — يرتفع للأعلى إذا مفتوح */}
        <g transform={unlocked ? "translate(0,-30) rotate(-6 38 37)" : ""} style={{ transition: "transform 0.4s" }}>
          {/* واجهة الغطاء */}
          <path d="M10 37 L10 24 Q10 19 16 19 L60 19 Q66 19 66 24 L66 37 Z" fill={woodFront} stroke={bandD} strokeWidth="1.5"/>
          {/* سطح علوي */}
          <path d="M15 20 L61 20 L66 26 L10 26 Z" fill={woodTop} stroke={bandD} strokeWidth="1"/>
          {/* حزام على الغطاء */}
          <rect x="10" y="29" width="56" height="5" fill={band} stroke={bandD} strokeWidth="0.8"/>
          {/* أوتاد على الغطاء */}
          <rect x="15" y="30" width="4" height="3.5" rx="1" fill={stud}/>
          <rect x="57" y="30" width="4" height="3.5" rx="1" fill={stud}/>
        </g>

        {/* بريق عند الفتح */}
        {unlocked && <>
          <text x="12" y="20" fontSize="10">✨</text>
          <text x="58" y="18" fontSize="9">⭐</text>
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
  const depth = SIZE * 0.11; // عمق الزاوية ثلاثية الأبعاد
  const pad = 16; // مساحة إضافية للخط الخارجي
  const gap = 5; // الفاصل بين الخط والدائرة
  const trackRx = r + gap;            // أفقياً: نصف القطر + فاصل بسيط فقط
  const trackRy = r + depth/2 + gap;  // عمودياً: يشمل التمدد لأسفل
  // محيط البيضاوي التقريبي (Ramanujan)
  const ellipseCirc = Math.PI * (3*(trackRx+trackRy) - Math.sqrt((3*trackRx+trackRy)*(trackRx+3*trackRy)));
  const isGold = progress >= 4;
  const isActive = progress > 0 || !!isFirstOfSection || !!isJumpStation || isCurrent;

  // ألوان مريحة بعمق ثلاثي الأبعاد
  const faceTop   = isGold ? "#fbbf24" : isActive ? lightenColor(color) : "#3a4656";
  const faceMain  = isGold ? "#f59e0b" : isActive ? color : "#2d3a4a";
  const sideColor = isGold ? "#b45309" : isActive ? shadeColor(color, -60) : "#1a2330";
  const starColor = isGold ? "#ffffff" : isActive ? "#ffffff" : "#566578";

  // المسار الدائري يظهر فقط على الدائرة الحالية (آخر درس وقف عنده / يقدر يبدأ منه)
  const showTrack = isCurrent;
  const fillColor = isGold ? "#f59e0b" : color; // لون الجزء الممتلئ
  // كم يمتلئ (ربع لكل درس)
  const fillFraction = isGold ? 1 : Math.min(progress / 4, 1);
  const fillDash = `${ellipseCirc * fillFraction} ${ellipseCirc}`;

  const gId = `sg-${SIZE}-${color.replace("#","")}-${isGold?"g":isActive?"a":"i"}`;

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

        {/* ── الطبقة السفلية (العمق ثلاثي الأبعاد) — خلف كل شيء ── */}
        <circle cx={r + pad} cy={r + pad + depth} r={r - 2} fill={sideColor}/>

        {/* ── المسار ثلاثي الأبعاد (يظهر على الحالية أو المكتملة) ── */}
        {showTrack && (
          <>
            {/* (1) الطبقة السفلية للمسار — العمق ثلاثي الأبعاد (أغمق، منزاحة لأسفل) */}
            <ellipse
              cx={r + pad} cy={r + pad + depth/2 + depth*0.7}
              rx={trackRx} ry={trackRy} fill="none"
              stroke="#222e3c" strokeWidth={9} strokeLinecap="round"
              style={{ transform:"rotate(-90deg)", transformOrigin:`${r+pad}px ${r+pad+depth/2+depth*0.7}px` }}
            />
            {/* (2) المسار الرمادي الكامل (الوجه العلوي للخط) */}
            <ellipse
              cx={r + pad} cy={r + pad + depth/2}
              rx={trackRx} ry={trackRy} fill="none"
              stroke="#3a4656" strokeWidth={9} strokeLinecap="round"
              style={{ transform:"rotate(-90deg)", transformOrigin:`${r+pad}px ${r+pad+depth/2}px` }}
            />
            {/* (3) الجزء الممتلئ بلون الوحدة — له عمق سفلي أغمق */}
            <motion.ellipse
              cx={r + pad} cy={r + pad + depth/2 + depth*0.7}
              rx={trackRx} ry={trackRy} fill="none"
              stroke={shadeColor(fillColor, -55)} strokeWidth={9} strokeLinecap="round"
              style={{ transform:"rotate(-90deg)", transformOrigin:`${r+pad}px ${r+pad+depth/2+depth*0.7}px` }}
              initial={{ strokeDasharray:`0 ${ellipseCirc}` }}
              animate={{ strokeDasharray: fillDash }}
              transition={{ duration: 0.8, ease:"easeOut" }}
            />
            {/* (4) الجزء الممتلئ — الوجه العلوي الفاتح */}
            <motion.ellipse
              cx={r + pad} cy={r + pad + depth/2}
              rx={trackRx} ry={trackRy} fill="none"
              stroke={fillColor} strokeWidth={9} strokeLinecap="round"
              initial={{ strokeDasharray:`0 ${ellipseCirc}` }}
              animate={{ strokeDasharray: fillDash }}
              transition={{ duration: 0.8, ease:"easeOut" }}
              style={{ transform:"rotate(-90deg)", transformOrigin:`${r+pad}px ${r+pad+depth/2}px` }}
            />
          </>
        )}

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
function StationPopup({ lesson, color, unitTitle, lessonNum, totalLessons, lessonProgress, isJump, onClose, onStart }: {
  lesson: UnitLesson; color: string; unitTitle: string;
  lessonNum: number; totalLessons: number; lessonProgress: number; isJump?: boolean;
  onClose: () => void; onStart: () => void;
}) {
  const isTreasureDone = lesson.type === "treasure" && lessonProgress >= 4;
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
      {isJump ? (
        <>
          <p className="font-bold text-white text-center mb-1" style={{ fontSize: 15 }}>اختبار القفز</p>
          <p className="text-white/90 text-center mb-1" style={{ fontSize: 12.5, lineHeight: 1.5 }}>
            اجتز اختبار الوحدات السابقة للقفز إلى هنا
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:10, marginBottom:10, flexWrap:"wrap" }}>
            <span style={{ background:"rgba(255,255,255,0.18)", color:"white", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:10 }}>📝 12 سؤال</span>
            <span style={{ background:"rgba(255,255,255,0.18)", color:"white", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:10 }}>❤️ 3 محاولات</span>
          </div>
          <button onClick={onStart}
            style={{
              display: "block", width: "100%",
              background: "white", color: "#1e293b",
              fontWeight: 800, fontSize: 14,
              padding: "11px 0", borderRadius: 14,
              border: "none", cursor: "pointer",
              boxShadow: "0 4px 0 rgba(0,0,0,0.15)",
              transition: "transform 0.1s, box-shadow 0.1s",
            }}
            onMouseDown={e => (e.currentTarget.style.transform = "translateY(2px)", e.currentTarget.style.boxShadow = "0 2px 0 rgba(0,0,0,0.15)")}
            onMouseUp={e => (e.currentTarget.style.transform = "", e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.15)")}
          >
            ابدأ الاختبار
          </button>
        </>
      ) : (
        <>
          <p className="font-bold text-white text-center mb-0.5" style={{ fontSize: 15 }}>{unitTitle}</p>
          <p className="text-white/80 text-center mb-3" style={{ fontSize: 12 }}>
            {lesson.type === "treasure" ? "كنز المراجعة 💎" : lesson.type === "challenge" ? "تحدي الوحدة 👑" : `الدرس ${lessonNum} · 4 دروس`}
          </p>

          {/* Start button or completed state */}
          {isTreasureDone ? (
            <div style={{
              display: "block", width: "100%", textAlign: "center",
              background: "rgba(255,255,255,0.2)", color: "white",
              fontWeight: 800, fontSize: 14,
              padding: "10px 0", borderRadius: 14,
            }}>
              ✅ مكتمل — حصلت على المكافأة
            </div>
          ) : (
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
              {lesson.type === "treasure" ? "ابدأ المراجعة 💎 +20 XP" : "ابدأ +10 XP"}
            </button>
          )}
        </>
      )}
    </motion.div>
  );
}

// ─── SVG path connector ───────────────────────────────────────────────────────
function PathConnector({ fromX, fromY, toX, toY, color, bothDone, anyDone }: {
  fromX: number; fromY: number; toX: number; toY: number; color: string;
  bothDone: boolean; anyDone: boolean;
}) {
  const midY = (fromY + toY) / 2;
  const d = `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
  // ذهبي إذا الدائرتان مكتملتان، لون الوحدة إذا واحدة فقط، رمادي إذا لا شيء
  const lineColor = bothDone ? "#f59e0b" : color;
  const showColor = anyDone;
  return (
    <g>
      {/* مسار رمادي خلفي خفيف */}
      <path d={d} stroke="#3a4658" strokeWidth={4} fill="none" strokeLinecap="round" strokeDasharray="8 7" opacity={0.5}/>
      {/* المسار الملوّن (شفاف + سُمك بسيط) */}
      {showColor && (
        <motion.path d={d} stroke={lineColor} strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.55}
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
interface SectionInfo { id: string; title: string; color: string; gradient: string; unitId: string; emoji: string; }
function getSections(chapter: Chapter): SectionInfo[] {
  const sections: SectionInfo[] = [];
  chapter.units.forEach(u => {
    if (!u.sectionTitle && sections.length === 0) {
      sections.push({ id: "s0", title: u.title, color: u.color, gradient: chapter.gradient, unitId: u.id, emoji: u.emoji });
    } else if (u.sectionTitle) {
      sections.push({ id: u.id, title: u.sectionTitle, color: u.color, gradient: `linear-gradient(135deg, ${u.color}, ${u.color}bb)`, unitId: u.id, emoji: u.emoji });
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

// ─── دليل مختصر لكل وحدة (يظهر في الهيدر) ───
const UNIT_GUIDES: Record<string, string> = {
  "unit-drinks": "اطلب واقبل المشروبات بأدب: شاي، قهوة، ماء وعصير",
  "unit-intro": "قدّم نفسك واسأل عن الاسم والبلد والعائلة",
  "unit-places": "اسأل عن الأماكن والاتجاهات في المدينة",
  "unit-airport": "تنقّل في المطار: التذكرة، البوابة، والطائرة",
  "unit-adjectives": "صف الأشياء وقارن بينها بالصفات",
  "unit-food": "اطلب الطعام والمشروبات في المطعم",
  "unit-present-jobs": "تحدّث عن المهن بالزمن المضارع",
  "unit-present": "استخدم الزمن المضارع في حياتك اليومية",
  "unit-weather": "تحدّث عن الطقس والفصول",
  "unit-pets": "تحدّث عن حيواناتك الأليفة",
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Roadmap() {
  const [activeChapter] = useState(0);
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [activePopup, setActivePopup] = useState<{ lessonId: string; x: number; y: number } | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  // chapter/sections يُحسبان لاحقاً بعد معرفة sectionUnlocked

  const allLessons = chapter.units.flatMap(u => u.lessons.map(l => ({ ...l, unitId: u.id, unitColor: u.color })));
  const currentIdx = allLessons.findIndex(l => (progress[l.id] ?? 0) < 4);

  // Load unit progress from Supabase
  const [showSyncMsg, setShowSyncMsg] = useState(false);
  const didScrollToProgress = useRef(false);
  const loadProgress = useCallback(() => {
    if (!user) return;
    supabase.from("unit_progress").select("lesson_id, sub_progress").eq("user_id", user.id)
      .then(({ data }) => {
        if (!data) return;
        const map: Record<string, number> = {};
        data.forEach((r: any) => { map[r.lesson_id] = r.sub_progress ?? 0; });
        setProgress(map);
        // أظهر رسالة المزامنة مرة واحدة للمتعلّم المتقدّم (أكمل درساً واحداً على الأقل)
        const completedCount = Object.values(map).filter(v => v >= 4).length;
        if (completedCount >= 1 && !sessionStorage.getItem("syncMsgShown")) {
          setShowSyncMsg(true);
          sessionStorage.setItem("syncMsgShown", "1");
        }
      });
  }, [user]);

  useEffect(() => { loadProgress(); }, [loadProgress]);

  // مرّر تلقائياً لآخر درس وصل له المتعلّم (مرة واحدة بعد تحميل التقدم)
  useEffect(() => {
    if (didScrollToProgress.current) return;
    if (Object.keys(progress).length === 0) return; // انتظر تحميل التقدم
    const completedCount = Object.values(progress).filter(v => v >= 4).length;
    if (completedCount < 1) return; // مبتدئ — يبقى بالأعلى
    // انتظر رسم الدروس ثم مرّر للدرس الحالي
    const timer = setTimeout(() => {
      const el = document.querySelector('[data-is-current="1"]');
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        didScrollToProgress.current = true;
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [progress]);

  // عدد الجواهر = مجموع مكافآت الكنوز والتحديات المكتملة
  const gemCount = (() => {
    let g = 0;
    chapter.units.forEach(u => {
      u.lessons.forEach(l => {
        const done = (progress[l.id] ?? 0) >= 4;
        if (!done) return;
        if (l.type === "treasure") g += 20;      // كنز المراجعة
        else if (l.type === "challenge") g += 15; // تحدي الوحدة
        else g += 5;                              // درس عادي
      });
    });
    return g;
  })();

  const isPro = (user as any)?.isPro ?? false;

  // جلب الستريك + حالة فتح القسم من user_stats
  const [streak, setStreak] = useState(0);
  const [sectionUnlocked, setSectionUnlocked] = useState(1); // 1 = القسم الأول فقط، 2 = فُتح الثاني
  // اعرض القسم الثاني لو فُتح، وإلا القسم الأول
  const chapter = CHAPTERS[sectionUnlocked >= 2 && CHAPTERS.length > 1 ? 1 : 0];
  const sections = getSections(chapter);
  useEffect(() => {
    if (!user) return;
    supabase.from("user_stats").select("streak, section_unlocked").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => {
        if (data) {
          setStreak(data.streak ?? 0);
          setSectionUnlocked((data as any).section_unlocked ?? 1);
        }
      });
  }, [user]);

  // أي شارة مضغوطة لعرض توضيحها
  const [statInfo, setStatInfo] = useState<null | "gems" | "hearts" | "streak" | "lang">(null);

  // أعد تحميل التقدم عند العودة للصفحة (بعد اختبار القفز مثلاً)
  useEffect(() => {
    const onFocus = () => loadProgress();
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onFocus);
    };
  }, [loadProgress]);

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
      {/* ── رسالة مزامنة التقدّم (للمتعلّم المتقدّم) ── */}
      <AnimatePresence>
        {showSyncMsg && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={()=>setShowSyncMsg(false)}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.55)", zIndex:90, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
            <motion.div initial={{scale:0.85,y:20}} animate={{scale:1,y:0}} exit={{scale:0.85,y:20}}
              onClick={e=>e.stopPropagation()}
              style={{ background:"hsl(var(--card))", borderRadius:24, padding:"32px 24px", maxWidth:360, width:"100%", textAlign:"center", border:"2px solid hsl(var(--border))" }}>
              <motion.div animate={{ rotate:[0,-10,10,-10,0] }} transition={{ duration:0.6, delay:0.2 }} style={{ fontSize:56, marginBottom:14 }}>🔄</motion.div>
              <h2 style={{ fontWeight:900, fontSize:20, marginBottom:12, color:"hsl(var(--foreground))" }}>تم تحديث المنهج! ✨</h2>
              <p style={{ fontSize:15, color:"hsl(var(--muted-foreground))", lineHeight:1.8, direction:"rtl", marginBottom:24 }}>
                لقد قمنا بمزامنة تقدّمك ليتناسب مع محتوى منهج الإنجليزية الجديد والمطوّر. واصل من حيث توقّفت! 🚀
              </p>
              <button onClick={()=>setShowSyncMsg(false)}
                style={{ width:"100%", padding:"14px", background:activeSection.color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer", boxShadow:`0 4px 0 ${activeSection.color}99` }}>
                رائع، لنكمل! 🎯
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="animate-in fade-in duration-500 pb-8" onClick={handleBackdropClick}>
        <style>{`
          .roadmap-sticky-header { top: 46px; }
          .roadmap-stats-bar { top: 6px; background: hsl(var(--background)); }
          .roadmap-side-widgets { display: none; }
          @media (min-width: 1100px) {
            .roadmap-side-widgets {
              display: flex; flex-direction: column; gap: 16px;
              position: fixed; left: 24px; top: 96px; width: 260px; z-index: 25;
            }
          }
          @media (max-width: 767px) {
            .roadmap-stats-bar {
              top: calc(56px + env(safe-area-inset-top, 0px));
              padding-top: 8px; padding-bottom: 6px;
            }
            .roadmap-sticky-header { top: calc(98px + env(safe-area-inset-top, 0px)); }
          }
        `}</style>

        {/* ── اللوحات الجانبية (كمبيوتر فقط) ── */}
        <div className="roadmap-side-widgets">
          {/* لوحة المسابقات اليومية */}
          <div style={{ background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", borderRadius:18, padding:16 }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12, direction:"rtl" }}>
              <span style={{ fontWeight:800, fontSize:14, color:"hsl(var(--foreground))" }}>المسابقات اليومية</span>
              <button onClick={()=>setLocation("/competitions")} style={{ background:"none", border:"none", color:activeSection.color, fontSize:12, fontWeight:700, cursor:"pointer" }}>عرض الكل</button>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:10, direction:"rtl" }}>
              {/* أيقونة البرق */}
              <div style={{ width:40, height:40, borderRadius:12, background:"linear-gradient(135deg, #fbbf24, #f59e0b)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M13 2 L3 14 h7 l-1 8 L19 10 h-7 z"/></svg>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:12, fontWeight:800, color:"hsl(var(--foreground))", marginBottom:4, textAlign:"right" }}>احصل على 10 XP</div>
                <div style={{ height:18, background:"hsl(var(--muted))", borderRadius:10, overflow:"hidden", position:"relative" }}>
                  <div style={{ height:"100%", width:"0%", background:"linear-gradient(90deg, #fbbf24, #f59e0b)", borderRadius:10 }}/>
                  <span style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:"hsl(var(--foreground))" }}>0 / 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ── شريط البيانات المختصر (heart · gem · flame · flag) ── */}
        <div className="roadmap-stats-bar" style={{
          position: "sticky", zIndex: 31, display: "flex", justifyContent: "flex-start",
          alignItems: "center", gap: 16, padding: "6px 16px 0",
        }}>
          {/* القلوب */}
          <button onClick={(e)=>{e.stopPropagation(); setStatInfo("hearts");}} style={{
            display: "flex", alignItems: "center", gap: 5, cursor: "pointer",
            background: "none", border: "none", padding: 0,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" style={{ filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
              <path d="M12 21 C5 15 3 11 3 8 C3 5 5 3 8 3 C10 3 11 4.5 12 6 C13 4.5 14 3 16 3 C19 3 21 5 21 8 C21 11 19 15 12 21 Z"
                fill={isPro ? "#3b82f6" : "#ef4444"} stroke={isPro ? "#1d4ed8" : "#b91c1c"} strokeWidth="1"/>
            </svg>
            <span style={{ color: isPro ? "#3b82f6" : "#ef4444", fontWeight: 900, fontSize: 15 }}>{isPro ? "∞" : "5"}</span>
          </button>

          {/* الجواهر */}
          <button onClick={(e)=>{e.stopPropagation(); setStatInfo("gems");}} style={{
            display: "flex", alignItems: "center", gap: 5, cursor: "pointer",
            background: "none", border: "none", padding: 0,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" style={{ filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
              <path d="M6 3 H18 L22 9 L12 22 L2 9 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1"/>
              <path d="M6 3 L9 9 L12 22 L2 9 Z" fill="#7dd3fc" opacity="0.9"/>
              <path d="M18 3 L15 9 L12 22 L22 9 Z" fill="#0ea5e9" opacity="0.7"/>
              <path d="M2 9 H22" stroke="#0284c7" strokeWidth="0.8"/>
            </svg>
            <span style={{ color: "#0ea5e9", fontWeight: 900, fontSize: 15 }}>{gemCount}</span>
          </button>

          {/* الستريك */}
          <button onClick={(e)=>{e.stopPropagation(); setStatInfo("streak");}} style={{
            display: "flex", alignItems: "center", gap: 4, cursor: "pointer",
            background: "none", border: "none", padding: 0,
          }}>
            <span style={{ color: "#f97316", fontWeight: 900, fontSize: 15 }}>{streak}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" style={{ filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
              <path d="M12 2 C12 6 8 8 8 13 C8 16 10 19 12 19 C14 19 16 16 16 13 C16 11 15 10 15 10 C15 13 13 14 13 12 C13 9 12 6 12 2 Z" fill="#f97316" stroke="#ea580c" strokeWidth="0.8"/>
              <path d="M12 19 C10.5 19 9.5 17 9.5 15 C9.5 17 11 18 12 18 C13 18 14.5 17 14.5 15 C14.5 17 13.5 19 12 19 Z" fill="#fbbf24"/>
            </svg>
          </button>

          {/* علم أمريكا */}
          <button onClick={(e)=>{e.stopPropagation(); setStatInfo("lang");}} style={{
            display: "flex", alignItems: "center", gap: 5, cursor: "pointer",
            background: "none", border: "none", padding: 0,
          }}>
            <span style={{ color: "hsl(var(--foreground))", fontWeight: 900, fontSize: 15 }}>10</span>
            <svg width="26" height="18" viewBox="0 0 26 18" style={{ borderRadius: 3, boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
              <rect width="26" height="18" fill="#b22234"/>
              {[1,3,5,7,9,11].map(i=>(<rect key={i} y={i*1.38} width="26" height="1.38" fill="white"/>))}
              <rect width="11" height="9.7" fill="#3c3b6e"/>
              {[...Array(15)].map((_,i)=>(<circle key={i} cx={1.4+(i%5)*2} cy={1.4+Math.floor(i/5)*2.8} r="0.55" fill="white"/>))}
            </svg>
          </button>
        </div>

        {/* ── نافذة توضيح البيانات ── */}
        <AnimatePresence>
          {statInfo && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              onClick={()=>setStatInfo(null)}
              style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:70, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <motion.div initial={{scale:0.85,y:20}} animate={{scale:1,y:0}} exit={{scale:0.85,y:20}}
                onClick={e=>e.stopPropagation()}
                style={{ background:"hsl(var(--card))", borderRadius:22, padding:"26px 22px", maxWidth:320, width:"100%", textAlign:"center", border:"2px solid hsl(var(--border))" }}>
                <div style={{ fontSize:48, marginBottom:12 }}>
                  {statInfo==="streak" ? "🔥" : statInfo==="gems" ? "💎" : statInfo==="lang" ? "🇺🇸" : "❤️"}
                </div>
                <h3 style={{ fontWeight:900, fontSize:18, marginBottom:8, color:"hsl(var(--foreground))" }}>
                  {statInfo==="streak" ? "سلسلة التعلّم" : statInfo==="gems" ? "جواهرك" : statInfo==="lang" ? "لغة التعلّم" : "قلوب التمارين"}
                </h3>
                <p style={{ fontSize:14, color:"hsl(var(--muted-foreground))", lineHeight:1.7, direction:"rtl" }}>
                  {statInfo==="streak"
                    ? `لقد حافظت على تواصلك في التعلّم لمدة ${streak} ${streak===1?"يوم":"أيام"}! استمر يومياً لتكبر سلسلتك 🔥`
                    : statInfo==="gems"
                    ? `لديك ${gemCount} جوهرة 💎 اجمعها من فتح الكنوز وإكمال التحديات والدروس. قريباً ستتمكن من استخدامها!`
                    : statInfo==="lang"
                    ? "أنت تتعلّم اللغة الإنجليزية 🇺🇸 — لغة عالمية تفتح لك أبواب العمل والسفر والمعرفة. واصل التقدّم!"
                    : isPro
                    ? "لديك قلوب لا نهائية ♾️ بصفتك عضو Pro — تدرّب بلا حدود!"
                    : "لديك 5 قلوب للتمارين ❤️ كل إجابة خاطئة تكلّفك قلباً. اشترك في Pro للحصول على قلوب لا نهائية."}
                </p>
                <button onClick={()=>setStatInfo(null)}
                  style={{ marginTop:18, width:"100%", padding:"12px", background:activeSection.color, color:"white", border:"none", borderRadius:12, fontWeight:800, fontSize:15, cursor:"pointer" }}>
                  حسناً
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Sticky section header (ثلاثي الأبعاد) ── */}
        <motion.div
          key={activeSection.id}
          className="roadmap-sticky-header"
          initial={{ opacity: 0.7, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "sticky",
            zIndex: 30,
            padding: "8px 16px",
          }}
        >
          <div style={{ maxWidth: 360, margin: "0 auto", position: "relative" }}>
            {/* الطبقة السفلية (العمق ثلاثي الأبعاد) */}
            <div style={{
              position: "absolute", inset: 0, top: 6,
              background: shadeColor(activeSection.color, -55),
              borderRadius: 18,
            }}/>
            {/* الوجه العلوي */}
            <div style={{
              position: "relative",
              background: `linear-gradient(135deg, ${lightenColor(activeSection.color, 25)}, ${activeSection.color} 55%, ${shadeColor(activeSection.color, -20)})`,
              borderRadius: 18,
              padding: "12px 16px",
              boxShadow: `0 6px 0 ${shadeColor(activeSection.color, -55)}, 0 10px 22px ${activeSection.color}55`,
              border: `1.5px solid ${lightenColor(activeSection.color, 35)}`,
            }}>
              {/* لمعة علوية */}
              <div style={{
                position: "absolute", top: 4, left: 12, right: 12, height: 14,
                background: "linear-gradient(180deg, rgba(255,255,255,0.35), transparent)",
                borderRadius: 12, pointerEvents: "none",
              }}/>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                {/* Title — center */}
                <div style={{ flex: 1, textAlign: "center", padding: "0 4px" }}>
                  <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 11, fontWeight: 700, marginBottom: 2 }}>
                    القسم 1 · الوحدة {activeSectionIdx + 1} {activeSection.emoji}
                  </div>
                  <div style={{ color: "white", fontWeight: 900, fontSize: 16, lineHeight: 1.2, textShadow: `0 1px 2px ${shadeColor(activeSection.color, -60)}` }}>
                    {activeSection.title}
                  </div>
                  {/* دليل مختصر */}
                  <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 10.5, fontWeight: 600, marginTop: 3, lineHeight: 1.35 }}>
                    {UNIT_GUIDES[activeSection.unitId] ?? "تعلّم كلمات وجمل جديدة خطوة بخطوة"}
                  </div>
                </div>

                {/* Guidebook button */}
                <button
                  onClick={e => { e.stopPropagation(); setShowGuide(true); }}
                  style={{
                    background: "rgba(255,255,255,0.25)",
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    borderRadius: 12, padding: "7px 10px",
                    color: "white", fontWeight: 800, fontSize: 12,
                    cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                    flexShrink: 0, whiteSpace: "nowrap",
                    boxShadow: `0 3px 0 ${shadeColor(activeSection.color, -50)}`,
                  }}>
                  <span style={{ fontSize: 16 }}>📖</span>
                  <span>الدليل</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Page title */}
        <div className="text-center my-6">
          <div className="text-5xl mb-3">🗺️</div>
          <h1 className="text-3xl font-bold">خارطة التعلم</h1>
          <p className="text-muted-foreground mt-1 text-sm">طريقك من الصفر حتى إتقان الإنجليزية</p>
        </div>

        {/* Map */}
        <motion.div key={chapter.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: 380, margin: "0 auto", position: "relative" }}>

          {/* ترحيب القسم الثاني (يظهر فقط لو في القسم الثاني) */}
          {sectionUnlocked >= 2 && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              style={{ margin: "16px 16px 8px", background: "linear-gradient(135deg, #1e3a8a, #4338ca)", borderRadius: 20, padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 6 }}>🚀</div>
              <h2 style={{ fontSize: 19, fontWeight: 900, color: "white", marginBottom: 6 }}>القسم الثاني — المتوسط</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, direction: "rtl" }}>
                أتقنت الأساسيات! حان وقت كلمات وعبارات أكثر تقدّماً. 🎯
              </p>
            </motion.div>
          )}
          <>
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

                  {/* Connectors بين الدوائر */}
                  <svg width={CANVAS_W} height={svgH}
                    style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
                    {positions.map((pos, idx) => {
                      if (idx === 0) return null;
                      const prev = positions[idx - 1];
                      const prevDone = (progress[unit.lessons[idx - 1].id] ?? 0) >= 4;
                      const curDone  = (progress[unit.lessons[idx].id] ?? 0) >= 4;
                      return <PathConnector key={`c${idx}`}
                        fromX={prev.x} fromY={prev.y} toX={pos.x} toY={pos.y}
                        color={unit.color}
                        bothDone={prevDone && curDone}
                        anyDone={prevDone || curDone} />;
                    })}
                  </svg>

                  {/* Stations */}
                  {unit.lessons.map((lesson, idx) => {
                    const { x, y } = positions[idx];
                    const lessonProgress = progress[lesson.id] ?? 0;
                    const allIdx = allLessons.findIndex(l => l.id === lesson.id);
                    const jumpPassed = (progress[`jump-${unit.id}`] ?? 0) >= 4; // اجتاز اختبار القفز
                    const rawFirstOfSection = idx === 0 && !!unit.sectionTitle;
                    // current عادي أو أول درس في وحدة مفتوحة بالقفز
                    const isCurrent = allIdx === currentIdx || (rawFirstOfSection && jumpPassed && (progress[lesson.id] ?? 0) === 0);
                    // Normal lock: previous lesson not done
                    const normalLocked = allIdx > 0 && (progress[allLessons[allIdx - 1]?.id] ?? 0) < 4 && lessonProgress === 0;
                    // Section lock: if this unit belongs to section 2+, lock unless prev section challenge done
                    const thisSectionIdx = unit.sectionTitle
                      ? chapter.units.findIndex(u => u.id === unit.id)
                      : chapter.units.slice(0, unitIdx + 1).filter(u => !u.sectionTitle || u.id === unit.id).length - 1;
                    const prevSectionChallenge = unit.sectionTitle
                      ? chapter.units.slice(0, unitIdx).reverse().find(u => u.lessons.some(l => l.type === "challenge"))?.lessons.find(l => l.type === "challenge")?.id
                      : undefined;
                    const sectionLocked = jumpPassed
                      ? false
                      : prevSectionChallenge
                      ? (progress[prevSectionChallenge] ?? 0) < 4
                      : false;
                    // First station of each unit/section
                    const isFirstOfSection = idx === 0;
                    // إذا اجتاز القفز، أول درس متاح كنجمة عادية (لا سهمان)
                    const rawJumpStation = isFirstOfSection && !!unit.sectionTitle;
                    // سهمان فقط إذا: نقطة قفز + لم أصلها + ما اجتزت القفز
                    const isJumpStation = rawJumpStation && !isCurrent && lessonProgress === 0 && !jumpPassed;
                    // متاح كنجمة إذا اجتاز القفز (أول درس في الوحدة المفتوحة بالقفز)
                    const jumpUnlockedStation = rawJumpStation && jumpPassed && lessonProgress === 0;
                    const isLocked = jumpUnlockedStation
                      ? false
                      : normalLocked || (sectionLocked && !rawJumpStation && lessonProgress === 0);
                    const isTreasure = lesson.type === "treasure"; // kept for SIZE calc
                    const SIZE = lesson.type === "challenge" ? 90 : lesson.type === "treasure" ? 72 : lesson.type === "practice" ? 76 : 76;
                    const isPopupOpen = activePopup?.lessonId === lesson.id;
                    // القفز متاح: الوحدة مقفلة (ما وصلتها طبيعي) + ما اجتاز القفز بعد
                    const canJump = isJumpStation && sectionLocked && !jumpPassed;
                    // الدائرة قابلة للضغط: jump station يحتاج canJump، البقية حسب القفل
                    const effectiveLocked = isJumpStation ? !canJump : isLocked;

                    // lesson number (only count type=lesson)
                    const lessonNum = lessonStations.findIndex(l => l.id === lesson.id) + 1;

                    return (
                      <div key={lesson.id}
                        data-lesson-id={lesson.id}
                        data-is-current={allLessons[currentIdx]?.id === lesson.id ? "1" : undefined}
                        style={{
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
                                lessonProgress={lessonProgress}
                                isJump={isJumpStation && canJump}
                                onClose={() => setActivePopup(null)}
                                onStart={() => {
                                  setActivePopup(null);
                                  if (isJumpStation && canJump) {
                                    setLocation(`/jump/${unit.id}`);
                                  } else {
                                    setLocation(`/u/${lesson.id}`);
                                  }
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

          {/* بوابة القسم الثاني — اختبار القسم (في القسم الأول فقط) */}
          {sectionUnlocked < 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              margin: "48px 16px 32px",
              background: "linear-gradient(135deg, hsl(var(--card)), hsl(var(--muted)))",
              border: "2px solid hsl(var(--border))",
              borderRadius: 20,
              padding: "28px 20px",
              textAlign: "center",
            }}>
            <div style={{ fontSize: 44, marginBottom: 10 }}>🎓</div>
            <div style={{
              display: "inline-block", background: "#10b98122", color: "#10b981",
              fontSize: 12, fontWeight: 800, padding: "4px 16px", borderRadius: 20, marginBottom: 14,
            }}>بوابة القسم الثاني</div>

            <h3 style={{ fontSize: 20, fontWeight: 900, color: "hsl(var(--foreground))", marginBottom: 10 }}>
              اختبار القسم الأول
            </h3>
            <p style={{ color: "hsl(var(--muted-foreground))", fontSize: 14, lineHeight: 1.7, marginBottom: 8, direction: "rtl" }}>
              جاهز للقسم الثاني؟ اجتز الاختبار الشامل لتثبت إتقانك وتفتح المستوى التالي.
            </p>
            <p style={{ color: "hsl(var(--muted-foreground))", fontSize: 12, marginBottom: 20, direction: "rtl", opacity: 0.8 }}>
              💡 متمكّن من المواضيع؟ يمكنك الاختبار مباشرة دون إكمال كل الدروس.
            </p>

            <button onClick={() => setLocation("/section-test")}
              style={{
                width: "100%", padding: "15px 0",
                background: "linear-gradient(135deg, #34d399, #059669)",
                border: "none", borderRadius: 14, color: "white",
                fontWeight: 800, fontSize: 16, cursor: "pointer",
                boxShadow: "0 5px 0 #047857",
              }}>
              ابدأ اختبار القسم 🚀
            </button>
          </motion.div>
          )}
          </>
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
      {/* البومة الآن حارسة الوحدة — لا حاجة للروبوت القديم */}
    </Layout>
  );
}
