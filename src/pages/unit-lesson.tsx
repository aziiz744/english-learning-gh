import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useParams, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { getLessonMiniExercises, getAllStationExercises } from "@/lib/lesson-exercises";
import type { ExObj } from "@/lib/lesson-exercises";
import { supabase } from "@/lib/supabase";

import { useAuth } from "@/hooks/use-auth";
import { useSound, unlockAudio } from "@/hooks/useSound";
import { DrinkArt, PICTURE_WORDS, emojiFor } from "@/components/drink-art";
import { translateWord } from "@/lib/word-glossary";
import { addReviewItem } from "@/lib/review-library";
import { addDailyXp } from "@/lib/daily-goal";
import { hapticSuccess, hapticError } from "@/lib/native";
import { Mascot } from "@/components/mascot";
import { Heart, Check, X, ArrowRight, Trophy, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Lesson map ────────────────────────────────────────────────────────────────
// كل نجمة = bank عنوانه، فيها 4 دروس داخلية (t0..t3)، كل درس 7 أسئلة
const LESSON_MAP: Record<string, { title: string; unitTitle: string; emoji: string; color: string; isReview?: boolean; reviewTitles?: string[]; crossReviewTitles?: string[]; isUnitFinal?: boolean; isChallenge?: boolean; isPractice?: boolean; practiceTitles?: string[]; vocab?: {en:string;ar:string}[] }> = {
  "drinks-1": { title: "الكلمات الأساسية", unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-2": { title: "كلمات جديدة",      unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-t": { title: "كنز المراجعة",     unitTitle: "قدّم واقبل المشروبات", emoji: "💎", color: "#22a55e", isReview: true, reviewTitles: ["الكلمات الأساسية", "كلمات جديدة"] },
  "drinks-3": { title: "جمل كاملة",        unitTitle: "قدّم واقبل المشروبات", emoji: "☕", color: "#22a55e" },
  "drinks-c": { title: "تحدي الوحدة",      unitTitle: "قدّم واقبل المشروبات", emoji: "🏆", color: "#22a55e", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"tea",ar:"شاي"},{en:"coffee",ar:"قهوة"},{en:"water",ar:"ماء"},{en:"juice",ar:"عصير"},{en:"milk",ar:"حليب"},
      {en:"yes",ar:"نعم"},{en:"no",ar:"لا"},{en:"please",ar:"من فضلك"},{en:"thank you",ar:"شكراً"},{en:"sorry",ar:"آسف"},
      {en:"more",ar:"المزيد"},{en:"would like",ar:"أودّ"},{en:"want",ar:"أريد"},{en:"have",ar:"أملك"},{en:"some",ar:"بعض"},
    ] },

  // ── الوحدة 2: قدّم نفسك وعائلتك ──
  "intro-1": { title: "ما اسمك؟",       unitTitle: "قدّم نفسك وعائلتك", emoji: "👋", color: "#7c3aed" },
  "intro-2": { title: "من أين أنت؟",    unitTitle: "قدّم نفسك وعائلتك", emoji: "🌍", color: "#7c3aed" },
  "intro-t": { title: "كنز المراجعة",   unitTitle: "قدّم نفسك وعائلتك", emoji: "💎", color: "#7c3aed", isReview: true, reviewTitles: ["ما اسمك؟", "من أين أنت؟"], crossReviewTitles: ["الكلمات الأساسية"] },
  "intro-3": { title: "عائلتك",         unitTitle: "قدّم نفسك وعائلتك", emoji: "👨‍👩‍👧", color: "#7c3aed" },
  "intro-c": { title: "تحدي الوحدة",    unitTitle: "قدّم نفسك وعائلتك", emoji: "🏆", color: "#7c3aed", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"name",ar:"اسم"},{en:"my name is",ar:"اسمي"},{en:"what",ar:"ما"},{en:"your",ar:"خاصتك"},{en:"I am",ar:"أنا"},
      {en:"from",ar:"من"},{en:"where",ar:"أين"},{en:"hello",ar:"مرحباً"},{en:"nice to meet you",ar:"سررت بلقائك"},
      {en:"mother",ar:"أم"},{en:"father",ar:"أب"},{en:"brother",ar:"أخ"},{en:"sister",ar:"أخت"},{en:"family",ar:"عائلة"},
    ] },

  // ── الوحدة 3: قل من أين أنت؟ (الأماكن والاتجاهات) ──
  "places-1": { title: "أماكن في المدينة", unitTitle: "قل من أين أنت؟", emoji: "🏙️", color: "#d4622a" },
  "places-2": { title: "أين تقع؟",         unitTitle: "قل من أين أنت؟", emoji: "📍", color: "#d4622a" },
  "places-t": { title: "كنز المراجعة",     unitTitle: "قل من أين أنت؟", emoji: "💎", color: "#d4622a", isReview: true, reviewTitles: ["أماكن في المدينة", "أين تقع؟"], crossReviewTitles: ["ما اسمك؟", "الصفات الأساسية"] },
  "places-3": { title: "الاتجاهات",        unitTitle: "قل من أين أنت؟", emoji: "🧭", color: "#d4622a" },
  "places-c": { title: "تحدي الوحدة",      unitTitle: "قل من أين أنت؟", emoji: "🏆", color: "#d4622a", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"school",ar:"مدرسة"},{en:"hospital",ar:"مستشفى"},{en:"market",ar:"سوق"},{en:"park",ar:"حديقة"},{en:"bank",ar:"بنك"},
      {en:"next to",ar:"بجانب"},{en:"behind",ar:"خلف"},{en:"in front of",ar:"أمام"},{en:"near",ar:"قريب"},
      {en:"turn left",ar:"انعطف يساراً"},{en:"turn right",ar:"انعطف يميناً"},{en:"go straight",ar:"اذهب مستقيماً"},{en:"where",ar:"أين"},{en:"here",ar:"هنا"},
    ] },

  // ── الوحدة 4: تنقل في المطار ──
  "airport-1": { title: "في المطار",  unitTitle: "تنقل في المطار", emoji: "✈️", color: "#0891b2" },
  "airport-2": { title: "جمل السفر",  unitTitle: "تنقل في المطار", emoji: "🧳", color: "#0891b2" },
  "airport-p": { title: "في المطار",  unitTitle: "تنقل في المطار", emoji: "🏋️", color: "#0891b2" , isPractice: true, practiceTitles: ["في المطار", "جمل السفر", "في الطائرة"] },
  "airport-t": { title: "كنز المراجعة", unitTitle: "تنقل في المطار", emoji: "💎", color: "#0891b2", isReview: true, reviewTitles: ["في المطار", "جمل السفر"], crossReviewTitles: ["أماكن في المدينة", "أسماء الأطعمة"] },
  "airport-3": { title: "في الطائرة", unitTitle: "تنقل في المطار", emoji: "💺", color: "#0891b2" },
  "airport-c": { title: "تحدي الوحدة", unitTitle: "تنقل في المطار", emoji: "🏆", color: "#0891b2", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"ticket",ar:"تذكرة"},{en:"passport",ar:"جواز سفر"},{en:"gate",ar:"بوابة"},{en:"flight",ar:"رحلة"},{en:"boarding",ar:"صعود"},
      {en:"luggage",ar:"أمتعة"},{en:"departure",ar:"مغادرة"},{en:"arrival",ar:"وصول"},{en:"window seat",ar:"مقعد نافذة"},
      {en:"aisle seat",ar:"مقعد ممر"},{en:"seat belt",ar:"حزام الأمان"},{en:"airplane",ar:"طائرة"},{en:"airport",ar:"مطار"},{en:"travel",ar:"سفر"},
    ] },

  // ── الوحدة 5: استخدم الصفات لوصف الأسماء ──
  "adj-1": { title: "الصفات الأساسية", unitTitle: "استخدم الصفات لوصف الأسماء", emoji: "🎨", color: "#22a55e" },
  "adj-2": { title: "صف الأشياء",     unitTitle: "استخدم الصفات لوصف الأسماء", emoji: "🖌️", color: "#22a55e" },
  "adj-p": { title: "الصفات الأساسية", unitTitle: "استخدم الصفات لوصف الأسماء", emoji: "🏋️", color: "#22a55e" , isPractice: true, practiceTitles: ["الصفات الأساسية", "صف الأشياء", "قارن بين الأشياء"] },
  "adj-t": { title: "كنز المراجعة",    unitTitle: "استخدم الصفات لوصف الأسماء", emoji: "💎", color: "#22a55e", isReview: true, reviewTitles: ["الصفات الأساسية", "صف الأشياء"], crossReviewTitles: ["الكلمات الأساسية", "ما اسمك؟"] },
  "adj-3": { title: "قارن بين الأشياء", unitTitle: "استخدم الصفات لوصف الأسماء", emoji: "⚖️", color: "#22a55e" },
  "adj-c": { title: "تحدي الوحدة",     unitTitle: "استخدم الصفات لوصف الأسماء", emoji: "🏆", color: "#22a55e", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"big",ar:"كبير"},{en:"small",ar:"صغير"},{en:"fast",ar:"سريع"},{en:"slow",ar:"بطيء"},{en:"old",ar:"قديم"},{en:"new",ar:"جديد"},
      {en:"tall",ar:"طويل"},{en:"short",ar:"قصير"},{en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},
      {en:"bigger than",ar:"أكبر من"},{en:"smaller than",ar:"أصغر من"},{en:"the biggest",ar:"الأكبر"},{en:"very",ar:"جداً"},
    ] },

  // ── الوحدة 6: اطلب الطعام والمشروبات ──
  "food-1": { title: "أسماء الأطعمة",   unitTitle: "اطلب الطعام والمشروبات", emoji: "🍽️", color: "#db2777" },
  "food-2": { title: "في المطعم",       unitTitle: "اطلب الطعام والمشروبات", emoji: "🍴", color: "#db2777" },
  "food-p": { title: "أسماء الأطعمة",   unitTitle: "اطلب الطعام والمشروبات", emoji: "🏋️", color: "#db2777" , isPractice: true, practiceTitles: ["أسماء الأطعمة", "في المطعم", "المشروبات والحلويات"] },
  "food-t": { title: "كنز المراجعة",    unitTitle: "اطلب الطعام والمشروبات", emoji: "💎", color: "#db2777", isReview: true, reviewTitles: ["أسماء الأطعمة", "في المطعم"], crossReviewTitles: ["الصفات الأساسية", "أماكن في المدينة"] },
  "food-3": { title: "المشروبات والحلويات", unitTitle: "اطلب الطعام والمشروبات", emoji: "🍰", color: "#db2777" },
  "food-c": { title: "تحدي الوحدة",     unitTitle: "اطلب الطعام والمشروبات", emoji: "🏆", color: "#db2777", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"rice",ar:"أرز"},{en:"chicken",ar:"دجاج"},{en:"bread",ar:"خبز"},{en:"salad",ar:"سلطة"},{en:"soup",ar:"شوربة"},
      {en:"Can I have",ar:"هل يمكنني"},{en:"I'd like",ar:"أودّ"},{en:"the bill",ar:"الفاتورة"},{en:"menu",ar:"قائمة"},
      {en:"cake",ar:"كيك"},{en:"dessert",ar:"حلوى"},{en:"ice cream",ar:"آيس كريم"},{en:"delicious",ar:"لذيذ"},{en:"order",ar:"طلب"},
    ] },

  // ── الوحدة 7: استخدم الزمن المضارع للمهن ──
  "pj-1": { title: "أفعال المهن",  unitTitle: "استخدم الزمن المضارع للمهن", emoji: "💼", color: "#16a34a" },
  "pj-2": { title: "جمل المضارع",  unitTitle: "استخدم الزمن المضارع للمهن", emoji: "✍️", color: "#16a34a" },
  "pj-p": { title: "أفعال المهن",  unitTitle: "استخدم الزمن المضارع للمهن", emoji: "🏋️", color: "#16a34a" , isPractice: true, practiceTitles: ["أفعال المهن", "جمل المضارع", "اسأل عن المهن"] },
  "pj-t": { title: "كنز المراجعة", unitTitle: "استخدم الزمن المضارع للمهن", emoji: "💎", color: "#16a34a", isReview: true, reviewTitles: ["أفعال المهن", "جمل المضارع"], crossReviewTitles: ["أسماء الأطعمة", "في المطار"] },
  "pj-3": { title: "اسأل عن المهن", unitTitle: "استخدم الزمن المضارع للمهن", emoji: "❓", color: "#16a34a" },
  "pj-c": { title: "تحدي الوحدة",  unitTitle: "استخدم الزمن المضارع للمهن", emoji: "🏆", color: "#16a34a", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"teach",ar:"يُعلّم"},{en:"drive",ar:"يقود"},{en:"cook",ar:"يطبخ"},{en:"build",ar:"يبني"},{en:"write",ar:"يكتب"},
      {en:"teacher",ar:"معلّم"},{en:"driver",ar:"سائق"},{en:"doctor",ar:"طبيب"},{en:"work",ar:"يعمل"},
      {en:"What do you do",ar:"ما عملك"},{en:"Where do you work",ar:"أين تعمل"},{en:"job",ar:"وظيفة"},{en:"he teaches",ar:"هو يُعلّم"},{en:"she works",ar:"هي تعمل"},
    ] },

  // ── الوحدة 8: استخدم الزمن المضارع (الروتين اليومي) ──
  "pr-1": { title: "أفعال يومية",   unitTitle: "استخدم الزمن المضارع", emoji: "⏰", color: "#fb923c" },
  "pr-2": { title: "روتينك اليومي", unitTitle: "استخدم الزمن المضارع", emoji: "🌅", color: "#fb923c" },
  "pr-p": { title: "أفعال يومية",   unitTitle: "استخدم الزمن المضارع", emoji: "🏋️", color: "#fb923c" , isPractice: true, practiceTitles: ["أفعال يومية", "روتينك اليومي", "الكلمات الزمنية"] },
  "pr-t": { title: "كنز المراجعة",  unitTitle: "استخدم الزمن المضارع", emoji: "💎", color: "#fb923c", isReview: true, reviewTitles: ["أفعال يومية", "روتينك اليومي"], crossReviewTitles: ["في المطار", "أفعال المهن"] },
  "pr-3": { title: "الكلمات الزمنية", unitTitle: "استخدم الزمن المضارع", emoji: "📅", color: "#fb923c" },
  "pr-c": { title: "تحدي الوحدة",   unitTitle: "استخدم الزمن المضارع", emoji: "🏆", color: "#fb923c", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"eat",ar:"يأكل"},{en:"sleep",ar:"ينام"},{en:"walk",ar:"يمشي"},{en:"read",ar:"يقرأ"},{en:"watch",ar:"يشاهد"},
      {en:"wake up",ar:"يستيقظ"},{en:"go",ar:"يذهب"},{en:"play",ar:"يلعب"},
      {en:"always",ar:"دائماً"},{en:"usually",ar:"عادةً"},{en:"sometimes",ar:"أحياناً"},{en:"never",ar:"أبداً"},{en:"every day",ar:"كل يوم"},{en:"breakfast",ar:"فطور"},
    ] },

  // ── الوحدة 9: تحدث عن الطقس ──
  "wt-1": { title: "كلمات الطقس",   unitTitle: "تحدث عن الطقس", emoji: "🌤️", color: "#f87171" },
  "wt-2": { title: "صف الطقس",      unitTitle: "تحدث عن الطقس", emoji: "🌡️", color: "#f87171" },
  "wt-p": { title: "كلمات الطقس",   unitTitle: "تحدث عن الطقس", emoji: "🏋️", color: "#f87171" , isPractice: true, practiceTitles: ["كلمات الطقس", "صف الطقس", "الفصول الأربعة"] },
  "wt-t": { title: "كنز المراجعة",  unitTitle: "تحدث عن الطقس", emoji: "💎", color: "#f87171", isReview: true, reviewTitles: ["كلمات الطقس", "صف الطقس"], crossReviewTitles: ["أفعال المهن", "أفعال يومية"] },
  "wt-3": { title: "الفصول الأربعة", unitTitle: "تحدث عن الطقس", emoji: "🍂", color: "#f87171" },
  "wt-c": { title: "تحدي الوحدة",   unitTitle: "تحدث عن الطقس", emoji: "🏆", color: "#f87171", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"sunny",ar:"مشمس"},{en:"rainy",ar:"ممطر"},{en:"cloudy",ar:"غائم"},{en:"windy",ar:"عاصف"},{en:"snowy",ar:"مثلج"},
      {en:"hot",ar:"حار"},{en:"cold",ar:"بارد"},{en:"weather",ar:"طقس"},{en:"today",ar:"اليوم"},
      {en:"spring",ar:"ربيع"},{en:"summer",ar:"صيف"},{en:"autumn",ar:"خريف"},{en:"winter",ar:"شتاء"},{en:"season",ar:"فصل"},
    ] },

  // ── الوحدة 10: تحدث عن حيواناتك الأليفة ──
  "pet-1": { title: "أسماء الحيوانات", unitTitle: "تحدث عن حيواناتك الأليفة", emoji: "🐾", color: "#a78bfa" },
  "pet-2": { title: "صف حيوانك",       unitTitle: "تحدث عن حيواناتك الأليفة", emoji: "🐱", color: "#a78bfa" },
  "pet-p": { title: "أسماء الحيوانات", unitTitle: "تحدث عن حيواناتك الأليفة", emoji: "🏋️", color: "#a78bfa" , isPractice: true, practiceTitles: ["أسماء الحيوانات", "صف حيوانك", "العناية بالحيوان"] },
  "pet-t": { title: "كنز المراجعة",    unitTitle: "تحدث عن حيواناتك الأليفة", emoji: "💎", color: "#a78bfa", isReview: true, reviewTitles: ["أسماء الحيوانات", "صف حيوانك"], crossReviewTitles: ["أفعال يومية", "كلمات الطقس"] },
  "pet-3": { title: "العناية بالحيوان", unitTitle: "تحدث عن حيواناتك الأليفة", emoji: "🦴", color: "#a78bfa" },
  "pet-c": { title: "تحدي الوحدة",     unitTitle: "تحدث عن حيواناتك الأليفة", emoji: "🏆", color: "#a78bfa", isUnitFinal: true, isChallenge: true,
    vocab: [
      {en:"cat",ar:"قطة"},{en:"dog",ar:"كلب"},{en:"bird",ar:"طائر"},{en:"fish",ar:"سمكة"},{en:"rabbit",ar:"أرنب"},
      {en:"fluffy",ar:"كثيف الفرو"},{en:"playful",ar:"مرح"},{en:"cute",ar:"لطيف"},{en:"gentle",ar:"لطيف"},
      {en:"feed",ar:"يُطعم"},{en:"walk",ar:"يمشّي"},{en:"play",ar:"يلعب"},{en:"vet",ar:"طبيب بيطري"},{en:"pet",ar:"حيوان أليف"},
    ] },

  // ══════════ القسم الثاني ══════════
  // الوحدة 11: تسوّق لشراء الملابس
  "clothes-1": { title: "أسماء الملابس", unitTitle: "تسوّق لشراء الملابس", emoji: "👕", color: "#0ea5e9" },
  "clothes-2": { title: "في متجر الملابس", unitTitle: "تسوّق لشراء الملابس", emoji: "🛍️", color: "#0ea5e9" },
  "clothes-t": { title: "كنز المراجعة", unitTitle: "تسوّق لشراء الملابس", emoji: "💎", color: "#0ea5e9", isReview: true, reviewTitles: ["أسماء الملابس", "في متجر الملابس"] },
  "clothes-3": { title: "اطلب الملابس", unitTitle: "تسوّق لشراء الملابس", emoji: "🧥", color: "#0ea5e9" },
  "clothes-c": { title: "تحدي الوحدة", unitTitle: "تسوّق لشراء الملابس", emoji: "🏆", color: "#0ea5e9", isUnitFinal: true, isChallenge: true },

  // الوحدة 12: قم بجولة في منزلك
  "house-1": { title: "غرف المنزل", unitTitle: "قم بجولة في منزلك", emoji: "🏠", color: "#f97316" },
  "house-2": { title: "الأثاث", unitTitle: "قم بجولة في منزلك", emoji: "🛋️", color: "#f97316" },
  "house-t": { title: "كنز المراجعة", unitTitle: "قم بجولة في منزلك", emoji: "💎", color: "#f97316", isReview: true, reviewTitles: ["غرف المنزل", "الأثاث"], crossReviewTitles: ["أسماء الملابس"] },
  "house-3": { title: "أين الأشياء", unitTitle: "قم بجولة في منزلك", emoji: "📦", color: "#f97316" },
  "house-c": { title: "تحدي الوحدة", unitTitle: "قم بجولة في منزلك", emoji: "🏆", color: "#f97316", isUnitFinal: true, isChallenge: true },

  // الوحدة 13: المضارع من "يكون"
  "tobe-1": { title: "أنا أكون، أنت تكون", unitTitle: "استخدم المضارع من يكون", emoji: "📝", color: "#8b5cf6" },
  "tobe-2": { title: "جمل مع يكون", unitTitle: "استخدم المضارع من يكون", emoji: "✍️", color: "#8b5cf6" },
  "tobe-t": { title: "كنز المراجعة", unitTitle: "استخدم المضارع من يكون", emoji: "💎", color: "#8b5cf6", isReview: true, reviewTitles: ["أنا أكون، أنت تكون", "جمل مع يكون"], crossReviewTitles: ["غرف المنزل"] },
  "tobe-3": { title: "يكون مع الصفات", unitTitle: "استخدم المضارع من يكون", emoji: "🎯", color: "#8b5cf6" },
  "tobe-c": { title: "تحدي الوحدة", unitTitle: "استخدم المضارع من يكون", emoji: "🏆", color: "#8b5cf6", isUnitFinal: true, isChallenge: true },

  // الوحدة 14: اختصارات المضارع من "يكون"
  "contr-1": { title: "الاختصارات الأساسية", unitTitle: "اختصارات المضارع من يكون", emoji: "✂️", color: "#ec4899" },
  "contr-2": { title: "الاختصارات في جمل", unitTitle: "اختصارات المضارع من يكون", emoji: "💬", color: "#ec4899" },
  "contr-t": { title: "كنز المراجعة", unitTitle: "اختصارات المضارع من يكون", emoji: "💎", color: "#ec4899", isReview: true, reviewTitles: ["الاختصارات الأساسية", "الاختصارات في جمل"], crossReviewTitles: ["أنا أكون، أنت تكون"] },
  "contr-3": { title: "اختصارات النفي", unitTitle: "اختصارات المضارع من يكون", emoji: "🚫", color: "#ec4899" },
  "contr-c": { title: "تحدي الوحدة", unitTitle: "اختصارات المضارع من يكون", emoji: "🏆", color: "#ec4899", isUnitFinal: true, isChallenge: true },

  // الوحدة 15: اطلب الطعام والمشروبات
  "order-1": { title: "قائمة الطعام", unitTitle: "اطلب الطعام والمشروبات", emoji: "📋", color: "#14b8a6" },
  "order-2": { title: "اطلب بأدب", unitTitle: "اطلب الطعام والمشروبات", emoji: "🙏", color: "#14b8a6" },
  "order-t": { title: "كنز المراجعة", unitTitle: "اطلب الطعام والمشروبات", emoji: "💎", color: "#14b8a6", isReview: true, reviewTitles: ["قائمة الطعام", "اطلب بأدب"], crossReviewTitles: ["الاختصارات الأساسية"] },
  "order-3": { title: "في المطعم والطلب", unitTitle: "اطلب الطعام والمشروبات", emoji: "🍽️", color: "#14b8a6" },
  "order-c": { title: "تحدي الوحدة", unitTitle: "اطلب الطعام والمشروبات", emoji: "🏆", color: "#14b8a6", isUnitFinal: true, isChallenge: true },

  // ── الدفعة 2 (الوحدات 16-20) ──
  // الوحدة 16: تواصل في العمل
  "work-1": { title: "كلمات العمل", unitTitle: "تواصل في العمل", emoji: "🏢", color: "#0284c7" },
  "work-2": { title: "في الاجتماع", unitTitle: "تواصل في العمل", emoji: "📊", color: "#0284c7" },
  "work-t": { title: "كنز المراجعة", unitTitle: "تواصل في العمل", emoji: "💎", color: "#0284c7", isReview: true, reviewTitles: ["كلمات العمل", "في الاجتماع"], crossReviewTitles: ["قائمة الطعام"] },
  "work-3": { title: "التواصل المهني", unitTitle: "تواصل في العمل", emoji: "📧", color: "#0284c7" },
  "work-c": { title: "تحدي الوحدة", unitTitle: "تواصل في العمل", emoji: "🏆", color: "#0284c7", isUnitFinal: true, isChallenge: true },

  // الوحدة 17: المضارع للمشاعر
  "feel-1": { title: "المشاعر", unitTitle: "استخدم المضارع للمشاعر", emoji: "😊", color: "#eab308" },
  "feel-2": { title: "كيف تشعر", unitTitle: "استخدم المضارع للمشاعر", emoji: "💭", color: "#eab308" },
  "feel-t": { title: "كنز المراجعة", unitTitle: "استخدم المضارع للمشاعر", emoji: "💎", color: "#eab308", isReview: true, reviewTitles: ["المشاعر", "كيف تشعر"], crossReviewTitles: ["كلمات العمل"] },
  "feel-3": { title: "التعبير عن المشاعر", unitTitle: "استخدم المضارع للمشاعر", emoji: "❤️", color: "#eab308" },
  "feel-c": { title: "تحدي الوحدة", unitTitle: "استخدم المضارع للمشاعر", emoji: "🏆", color: "#eab308", isUnitFinal: true, isChallenge: true },

  // الوحدة 18: اطلب المساعدة في الصف
  "class-1": { title: "كلمات الصف", unitTitle: "اطلب المساعدة في الصف", emoji: "📚", color: "#16a34a" },
  "class-2": { title: "اطلب المساعدة", unitTitle: "اطلب المساعدة في الصف", emoji: "🙋", color: "#16a34a" },
  "class-t": { title: "كنز المراجعة", unitTitle: "اطلب المساعدة في الصف", emoji: "💎", color: "#16a34a", isReview: true, reviewTitles: ["كلمات الصف", "اطلب المساعدة"], crossReviewTitles: ["المشاعر"] },
  "class-3": { title: "في الدرس", unitTitle: "اطلب المساعدة في الصف", emoji: "✏️", color: "#16a34a" },
  "class-c": { title: "تحدي الوحدة", unitTitle: "اطلب المساعدة في الصف", emoji: "🏆", color: "#16a34a", isUnitFinal: true, isChallenge: true },

  // الوحدة 19: اطلب المساعدة أثناء التسوق
  "shop-1": { title: "كلمات التسوق", unitTitle: "اطلب المساعدة أثناء التسوق", emoji: "🛒", color: "#dc2626" },
  "shop-2": { title: "اسأل عن المنتجات", unitTitle: "اطلب المساعدة أثناء التسوق", emoji: "🔍", color: "#dc2626" },
  "shop-t": { title: "كنز المراجعة", unitTitle: "اطلب المساعدة أثناء التسوق", emoji: "💎", color: "#dc2626", isReview: true, reviewTitles: ["كلمات التسوق", "اسأل عن المنتجات"], crossReviewTitles: ["كلمات الصف"] },
  "shop-3": { title: "الدفع والمساعدة", unitTitle: "اطلب المساعدة أثناء التسوق", emoji: "💳", color: "#dc2626" },
  "shop-c": { title: "تحدي الوحدة", unitTitle: "اطلب المساعدة أثناء التسوق", emoji: "🏆", color: "#dc2626", isUnitFinal: true, isChallenge: true },

  // الوحدة 20: تعابير الوقت
  "time-1": { title: "كم الساعة", unitTitle: "استخدم تعابير الوقت", emoji: "🕐", color: "#9333ea" },
  "time-2": { title: "أوقات اليوم", unitTitle: "استخدم تعابير الوقت", emoji: "🌅", color: "#9333ea" },
  "time-t": { title: "كنز المراجعة", unitTitle: "استخدم تعابير الوقت", emoji: "💎", color: "#9333ea", isReview: true, reviewTitles: ["كم الساعة", "أوقات اليوم"], crossReviewTitles: ["كلمات التسوق"] },
  "time-3": { title: "تعابير الوقت", unitTitle: "استخدم تعابير الوقت", emoji: "📅", color: "#9333ea" },
  "time-c": { title: "تحدي الوحدة", unitTitle: "استخدم تعابير الوقت", emoji: "🏆", color: "#9333ea", isUnitFinal: true, isChallenge: true },

  // ── الدفعة 3 (الوحدات 21-25) ──
  // الوحدة 21: ناقش الرياضات
  "sport-1": { title: "أنواع الرياضات", unitTitle: "ناقش الرياضات", emoji: "⚽", color: "#65a30d" },
  "sport-2": { title: "ممارسة الرياضة", unitTitle: "ناقش الرياضات", emoji: "🏀", color: "#65a30d" },
  "sport-t": { title: "كنز المراجعة", unitTitle: "ناقش الرياضات", emoji: "💎", color: "#65a30d", isReview: true, reviewTitles: ["أنواع الرياضات", "ممارسة الرياضة"], crossReviewTitles: ["كم الساعة"] },
  "sport-3": { title: "ناقش الرياضة", unitTitle: "ناقش الرياضات", emoji: "🏆", color: "#65a30d" },
  "sport-c": { title: "تحدي الوحدة", unitTitle: "ناقش الرياضات", emoji: "🏆", color: "#65a30d", isUnitFinal: true, isChallenge: true },

  // الوحدة 22: ظروف التكرار والوقت
  "adv-1": { title: "ظروف التكرار", unitTitle: "ظروف التكرار والوقت", emoji: "🔄", color: "#0d9488" },
  "adv-2": { title: "عبارات التكرار", unitTitle: "ظروف التكرار والوقت", emoji: "📆", color: "#0d9488" },
  "adv-t": { title: "كنز المراجعة", unitTitle: "ظروف التكرار والوقت", emoji: "💎", color: "#0d9488", isReview: true, reviewTitles: ["ظروف التكرار", "عبارات التكرار"], crossReviewTitles: ["أنواع الرياضات"] },
  "adv-3": { title: "استخدامها في جمل", unitTitle: "ظروف التكرار والوقت", emoji: "✍️", color: "#0d9488" },
  "adv-c": { title: "تحدي الوحدة", unitTitle: "ظروف التكرار والوقت", emoji: "🏆", color: "#0d9488", isUnitFinal: true, isChallenge: true },

  // الوحدة 23: صف روتينك اليومي
  "rout-1": { title: "روتين الصباح", unitTitle: "صف روتينك اليومي", emoji: "🌅", color: "#ea580c" },
  "rout-2": { title: "روتين المساء", unitTitle: "صف روتينك اليومي", emoji: "🌙", color: "#ea580c" },
  "rout-t": { title: "كنز المراجعة", unitTitle: "صف روتينك اليومي", emoji: "💎", color: "#ea580c", isReview: true, reviewTitles: ["روتين الصباح", "روتين المساء"], crossReviewTitles: ["ظروف التكرار"] },
  "rout-3": { title: "صف يومك", unitTitle: "صف روتينك اليومي", emoji: "📝", color: "#ea580c" },
  "rout-c": { title: "تحدي الوحدة", unitTitle: "صف روتينك اليومي", emoji: "🏆", color: "#ea580c", isUnitFinal: true, isChallenge: true },

  // الوحدة 24: احجز غرفة في فندق
  "hotel-1": { title: "كلمات الفندق", unitTitle: "احجز غرفة في فندق", emoji: "🏨", color: "#0369a1" },
  "hotel-2": { title: "احجز غرفة", unitTitle: "احجز غرفة في فندق", emoji: "🛏️", color: "#0369a1" },
  "hotel-t": { title: "كنز المراجعة", unitTitle: "احجز غرفة في فندق", emoji: "💎", color: "#0369a1", isReview: true, reviewTitles: ["كلمات الفندق", "احجز غرفة"], crossReviewTitles: ["روتين الصباح"] },
  "hotel-3": { title: "في الفندق", unitTitle: "احجز غرفة في فندق", emoji: "🛎️", color: "#0369a1" },
  "hotel-c": { title: "تحدي الوحدة", unitTitle: "احجز غرفة في فندق", emoji: "🏆", color: "#0369a1", isUnitFinal: true, isChallenge: true },

  // الوحدة 25: أدوات التعريف
  "art-1": { title: "a و an", unitTitle: "استخدم أدوات التعريف", emoji: "🔤", color: "#7c3aed" },
  "art-2": { title: "أداة the", unitTitle: "استخدم أدوات التعريف", emoji: "📌", color: "#7c3aed" },
  "art-t": { title: "كنز المراجعة", unitTitle: "استخدم أدوات التعريف", emoji: "💎", color: "#7c3aed", isReview: true, reviewTitles: ["a و an", "أداة the"], crossReviewTitles: ["كلمات الفندق"] },
  "art-3": { title: "استخدامها معاً", unitTitle: "استخدم أدوات التعريف", emoji: "🎯", color: "#7c3aed" },
  "art-c": { title: "تحدي الوحدة", unitTitle: "استخدم أدوات التعريف", emoji: "🏆", color: "#7c3aed", isUnitFinal: true, isChallenge: true },

  // ── الدفعة 4 (الوحدات 26-30) ──
  // الوحدة 26: صف أفراد عائلتك
  "fam-1": { title: "أفراد العائلة", unitTitle: "صف أفراد عائلتك", emoji: "👪", color: "#e11d48" },
  "fam-2": { title: "صف شخصيتهم", unitTitle: "صف أفراد عائلتك", emoji: "💖", color: "#e11d48" },
  "fam-t": { title: "كنز المراجعة", unitTitle: "صف أفراد عائلتك", emoji: "💎", color: "#e11d48", isReview: true, reviewTitles: ["أفراد العائلة", "صف شخصيتهم"], crossReviewTitles: ["a و an"] },
  "fam-3": { title: "تحدث عن عائلتك", unitTitle: "صف أفراد عائلتك", emoji: "🗣️", color: "#e11d48" },
  "fam-c": { title: "تحدي الوحدة", unitTitle: "صف أفراد عائلتك", emoji: "🏆", color: "#e11d48", isUnitFinal: true, isChallenge: true },

  // الوحدة 27: صف ممتلكاتك
  "poss-1": { title: "الملكية", unitTitle: "صف ممتلكاتك", emoji: "🔑", color: "#0891b2" },
  "poss-2": { title: "ممتلكات", unitTitle: "صف ممتلكاتك", emoji: "📱", color: "#0891b2" },
  "poss-t": { title: "كنز المراجعة", unitTitle: "صف ممتلكاتك", emoji: "💎", color: "#0891b2", isReview: true, reviewTitles: ["الملكية", "ممتلكات"], crossReviewTitles: ["أفراد العائلة"] },
  "poss-3": { title: "لمن هذا", unitTitle: "صف ممتلكاتك", emoji: "❓", color: "#0891b2" },
  "poss-c": { title: "تحدي الوحدة", unitTitle: "صف ممتلكاتك", emoji: "🏆", color: "#0891b2", isUnitFinal: true, isChallenge: true },

  // الوحدة 28: افرز الأشياء المفقودة
  "lost-1": { title: "المفقودات", unitTitle: "افرز الأشياء المفقودة", emoji: "🔍", color: "#b45309" },
  "lost-2": { title: "صف الشيء المفقود", unitTitle: "افرز الأشياء المفقودة", emoji: "📋", color: "#b45309" },
  "lost-t": { title: "كنز المراجعة", unitTitle: "افرز الأشياء المفقودة", emoji: "💎", color: "#b45309", isReview: true, reviewTitles: ["المفقودات", "صف الشيء المفقود"], crossReviewTitles: ["الملكية"] },
  "lost-3": { title: "في مكتب المفقودات", unitTitle: "افرز الأشياء المفقودة", emoji: "🏢", color: "#b45309" },
  "lost-c": { title: "تحدي الوحدة", unitTitle: "افرز الأشياء المفقودة", emoji: "🏆", color: "#b45309", isUnitFinal: true, isChallenge: true },

  // الوحدة 29: تسوق للملابس
  "wear-1": { title: "ملابس متنوّعة", unitTitle: "تسوّق للملابس", emoji: "🧥", color: "#7c2d12" },
  "wear-2": { title: "المقاسات والقياس", unitTitle: "تسوّق للملابس", emoji: "📏", color: "#7c2d12" },
  "wear-t": { title: "كنز المراجعة", unitTitle: "تسوّق للملابس", emoji: "💎", color: "#7c2d12", isReview: true, reviewTitles: ["ملابس متنوّعة", "المقاسات والقياس"], crossReviewTitles: ["المفقودات"] },
  "wear-3": { title: "اتخاذ القرار", unitTitle: "تسوّق للملابس", emoji: "✅", color: "#7c2d12" },
  "wear-c": { title: "تحدي الوحدة", unitTitle: "تسوّق للملابس", emoji: "🏆", color: "#7c2d12", isUnitFinal: true, isChallenge: true },

  // الوحدة 30: جمع التكسير
  "plur-1": { title: "جموع شاذة شائعة", unitTitle: "كوّن جمع التكسير", emoji: "🔢", color: "#4f46e5" },
  "plur-2": { title: "المزيد من الجموع", unitTitle: "كوّن جمع التكسير", emoji: "📚", color: "#4f46e5" },
  "plur-t": { title: "كنز المراجعة", unitTitle: "كوّن جمع التكسير", emoji: "💎", color: "#4f46e5", isReview: true, reviewTitles: ["جموع شاذة شائعة", "المزيد من الجموع"], crossReviewTitles: ["ملابس متنوّعة"] },
  "plur-3": { title: "الجموع في جمل", unitTitle: "كوّن جمع التكسير", emoji: "✍️", color: "#4f46e5" },
  "plur-c": { title: "تحدي الوحدة", unitTitle: "كوّن جمع التكسير", emoji: "🏆", color: "#4f46e5", isUnitFinal: true, isChallenge: true },

  // ── الدفعة 5 (الوحدات 31-35) ──
  // الوحدة 31: تنقّل في مدينة غير مألوفة
  "city-1": { title: "أماكن المدينة", unitTitle: "تنقّل في مدينة غير مألوفة", emoji: "🏙️", color: "#0e7490" },
  "city-2": { title: "اتجاهات المدينة", unitTitle: "تنقّل في مدينة غير مألوفة", emoji: "🧭", color: "#0e7490" },
  "city-t": { title: "كنز المراجعة", unitTitle: "تنقّل في مدينة غير مألوفة", emoji: "💎", color: "#0e7490", isReview: true, reviewTitles: ["أماكن المدينة", "اتجاهات المدينة"], crossReviewTitles: ["جموع شاذة شائعة"] },
  "city-3": { title: "اسأل عن الطريق", unitTitle: "تنقّل في مدينة غير مألوفة", emoji: "🗺️", color: "#0e7490" },
  "city-c": { title: "تحدي الوحدة", unitTitle: "تنقّل في مدينة غير مألوفة", emoji: "🏆", color: "#0e7490", isUnitFinal: true, isChallenge: true },

  // الوحدة 32: النفي في المضارع
  "neg-1": { title: "النفي بـ don't", unitTitle: "كوّن النفي في المضارع", emoji: "🚫", color: "#be123c" },
  "neg-2": { title: "النفي بـ doesn't", unitTitle: "كوّن النفي في المضارع", emoji: "❌", color: "#be123c" },
  "neg-t": { title: "كنز المراجعة", unitTitle: "كوّن النفي في المضارع", emoji: "💎", color: "#be123c", isReview: true, reviewTitles: ["النفي بـ don't", "النفي بـ doesn't"], crossReviewTitles: ["أماكن المدينة"] },
  "neg-3": { title: "النفي في جمل", unitTitle: "كوّن النفي في المضارع", emoji: "✍️", color: "#be123c" },
  "neg-c": { title: "تحدي الوحدة", unitTitle: "كوّن النفي في المضارع", emoji: "🏆", color: "#be123c", isUnitFinal: true, isChallenge: true },

  // الوحدة 33: تحدّث عن الأعراض
  "symp-1": { title: "الجسم والألم", unitTitle: "تحدّث عن الأعراض", emoji: "🤕", color: "#0f766e" },
  "symp-2": { title: "الأعراض", unitTitle: "تحدّث عن الأعراض", emoji: "🤒", color: "#0f766e" },
  "symp-t": { title: "كنز المراجعة", unitTitle: "تحدّث عن الأعراض", emoji: "💎", color: "#0f766e", isReview: true, reviewTitles: ["الجسم والألم", "الأعراض"], crossReviewTitles: ["النفي بـ don't"] },
  "symp-3": { title: "عند الطبيب", unitTitle: "تحدّث عن الأعراض", emoji: "👨‍⚕️", color: "#0f766e" },
  "symp-c": { title: "تحدي الوحدة", unitTitle: "تحدّث عن الأعراض", emoji: "🏆", color: "#0f766e", isUnitFinal: true, isChallenge: true },

  // الوحدة 34: أسئلة بـ"يكون"
  "beq-1": { title: "أسئلة Are/Is", unitTitle: "كوّن أسئلة بيكون", emoji: "❓", color: "#9333ea" },
  "beq-2": { title: "أسئلة الاستفهام", unitTitle: "كوّن أسئلة بيكون", emoji: "🔍", color: "#9333ea" },
  "beq-t": { title: "كنز المراجعة", unitTitle: "كوّن أسئلة بيكون", emoji: "💎", color: "#9333ea", isReview: true, reviewTitles: ["أسئلة Are/Is", "أسئلة بكلمات الاستفهام"], crossReviewTitles: ["الجسم والألم"] },
  "beq-3": { title: "إجابات قصيرة", unitTitle: "كوّن أسئلة بيكون", emoji: "💬", color: "#9333ea" },
  "beq-c": { title: "تحدي الوحدة", unitTitle: "كوّن أسئلة بيكون", emoji: "🏆", color: "#9333ea", isUnitFinal: true, isChallenge: true },

  // الوحدة 35: المضارع المستمر
  "cont-1": { title: "تكوين ing", unitTitle: "استخدم المضارع المستمر", emoji: "⏳", color: "#c026d3" },
  "cont-2": { title: "أفعال شائعة", unitTitle: "استخدم المضارع المستمر", emoji: "🏃", color: "#c026d3" },
  "cont-t": { title: "كنز المراجعة", unitTitle: "استخدم المضارع المستمر", emoji: "💎", color: "#c026d3", isReview: true, reviewTitles: ["تكوين ing", "أفعال شائعة"], crossReviewTitles: ["أسئلة Are/Is"] },
  "cont-3": { title: "استخدامه الآن", unitTitle: "استخدم المضارع المستمر", emoji: "⌛", color: "#c026d3" },
  "cont-c": { title: "تحدي الوحدة", unitTitle: "استخدم المضارع المستمر", emoji: "🏆", color: "#c026d3", isUnitFinal: true, isChallenge: true },

  // ── الدفعة 6 (الوحدات 36-40) — الأخيرة ──
  // الوحدة 36: الطقس والطبيعة
  "wthr-1": { title: "الطقس", unitTitle: "تحدّث عن الطقس والطبيعة", emoji: "🌤️", color: "#0284c7" },
  "wthr-2": { title: "الطبيعة", unitTitle: "تحدّث عن الطقس والطبيعة", emoji: "⛰️", color: "#0284c7" },
  "wthr-t": { title: "كنز المراجعة", unitTitle: "تحدّث عن الطقس والطبيعة", emoji: "💎", color: "#0284c7", isReview: true, reviewTitles: ["الطقس", "الطبيعة"], crossReviewTitles: ["تكوين ing"] },
  "wthr-3": { title: "تحدّث عنهما", unitTitle: "تحدّث عن الطقس والطبيعة", emoji: "🍃", color: "#0284c7" },
  "wthr-c": { title: "تحدي الوحدة", unitTitle: "تحدّث عن الطقس والطبيعة", emoji: "🏆", color: "#0284c7", isUnitFinal: true, isChallenge: true },

  // الوحدة 37: أسئلة المضارع المستمر
  "cq-1": { title: "أسئلة المستمر", unitTitle: "كوّن أسئلة في المضارع المستمر", emoji: "❓", color: "#7c3aed" },
  "cq-2": { title: "أسئلة الاستفهام", unitTitle: "كوّن أسئلة في المضارع المستمر", emoji: "🔍", color: "#7c3aed" },
  "cq-t": { title: "كنز المراجعة", unitTitle: "كوّن أسئلة في المضارع المستمر", emoji: "💎", color: "#7c3aed", isReview: true, reviewTitles: ["أسئلة المستمر", "أسئلة الاستفهام"], crossReviewTitles: ["الطقس"] },
  "cq-3": { title: "إجابات المستمر القصيرة", unitTitle: "كوّن أسئلة في المضارع المستمر", emoji: "💬", color: "#7c3aed" },
  "cq-c": { title: "تحدي الوحدة", unitTitle: "كوّن أسئلة في المضارع المستمر", emoji: "🏆", color: "#7c3aed", isUnitFinal: true, isChallenge: true },

  // الوحدة 38: تحدّث عن المدرسة
  "schl-1": { title: "المواد الدراسية", unitTitle: "تحدّث عن المدرسة", emoji: "📐", color: "#16a34a" },
  "schl-2": { title: "في المدرسة", unitTitle: "تحدّث عن المدرسة", emoji: "🎒", color: "#16a34a" },
  "schl-t": { title: "كنز المراجعة", unitTitle: "تحدّث عن المدرسة", emoji: "💎", color: "#16a34a", isReview: true, reviewTitles: ["المواد الدراسية", "في المدرسة"], crossReviewTitles: ["أسئلة المستمر"] },
  "schl-3": { title: "تحدّث عن دراستك", unitTitle: "تحدّث عن المدرسة", emoji: "🎓", color: "#16a34a" },
  "schl-c": { title: "تحدي الوحدة", unitTitle: "تحدّث عن المدرسة", emoji: "🏆", color: "#16a34a", isUnitFinal: true, isChallenge: true },

  // الوحدة 39: أفعال الأمر المثبتة
  "imp-1": { title: "أوامر بسيطة", unitTitle: "استخدم أفعال الأمر المثبتة", emoji: "👉", color: "#ea580c" },
  "imp-2": { title: "إعطاء التعليمات", unitTitle: "استخدم أفعال الأمر المثبتة", emoji: "📋", color: "#ea580c" },
  "imp-t": { title: "كنز المراجعة", unitTitle: "استخدم أفعال الأمر المثبتة", emoji: "💎", color: "#ea580c", isReview: true, reviewTitles: ["أوامر بسيطة", "إعطاء التعليمات"], crossReviewTitles: ["المواد الدراسية"] },
  "imp-3": { title: "الأمر المهذّب", unitTitle: "استخدم أفعال الأمر المثبتة", emoji: "🙏", color: "#ea580c" },
  "imp-c": { title: "تحدي الوحدة", unitTitle: "استخدم أفعال الأمر المثبتة", emoji: "🏆", color: "#ea580c", isUnitFinal: true, isChallenge: true },

  // الوحدة 40: نصائح السلامة (الأخيرة!)
  "safe-1": { title: "علامات السلامة", unitTitle: "قدّم نصائح السلامة", emoji: "⚠️", color: "#dc2626" },
  "safe-2": { title: "قواعد السلامة", unitTitle: "قدّم نصائح السلامة", emoji: "🛡️", color: "#dc2626" },
  "safe-t": { title: "كنز المراجعة", unitTitle: "قدّم نصائح السلامة", emoji: "💎", color: "#dc2626", isReview: true, reviewTitles: ["علامات السلامة", "قواعد السلامة"], crossReviewTitles: ["أوامر بسيطة"] },
  "safe-3": { title: "حالات الطوارئ", unitTitle: "قدّم نصائح السلامة", emoji: "🚨", color: "#dc2626" },
  "safe-c": { title: "تحدي الوحدة", unitTitle: "قدّم نصائح السلامة", emoji: "🎉", color: "#dc2626", isUnitFinal: true, isChallenge: true },
};

// ── خريطة اختبار القفز: لكل وحدة، عناوين الوحدات السابقة (متراكمة) ──
const JUMP_MAP: Record<string, { unitTitle: string; color: string; prevTitles: string[] }> = {
  // القفز لوحدة 2 = اختبار وحدة 1 (المشروبات)
  "unit-intro": { unitTitle: "قدّم نفسك وعائلتك", color: "#7c3aed",
    prevTitles: ["الكلمات الأساسية", "كلمات جديدة", "جمل كاملة"] },
  // القفز لوحدة 3 = اختبار وحدتي 1+2
  "unit-places": { unitTitle: "قل من أين أنت؟", color: "#d4622a",
    prevTitles: ["الكلمات الأساسية", "كلمات جديدة", "جمل كاملة", "ما اسمك؟", "من أين أنت؟", "عائلتك"] },
  // القفز لوحدة 4 = اختبار وحدات 1+2+3
  "unit-airport": { unitTitle: "تنقل في المطار", color: "#0891b2",
    prevTitles: ["الكلمات الأساسية", "كلمات جديدة", "جمل كاملة", "ما اسمك؟", "من أين أنت؟", "عائلتك", "أماكن في المدينة", "أين تقع؟", "الاتجاهات"] },
  // القفز لوحدة 5 = اختبار وحدات 1-4
  "unit-adjectives": { unitTitle: "استخدم الصفات لوصف الأسماء", color: "#22a55e",
    prevTitles: ["الكلمات الأساسية", "كلمات جديدة", "جمل كاملة", "ما اسمك؟", "من أين أنت؟", "عائلتك", "أماكن في المدينة", "أين تقع؟", "الاتجاهات", "في المطار", "جمل السفر", "في الطائرة"] },
  // القفز لوحدة 6 = اختبار وحدات 1-5
  "unit-food": { unitTitle: "اطلب الطعام والمشروبات", color: "#db2777",
    prevTitles: ["الكلمات الأساسية", "كلمات جديدة", "جمل كاملة", "ما اسمك؟", "من أين أنت؟", "عائلتك", "أماكن في المدينة", "أين تقع؟", "الاتجاهات", "في المطار", "جمل السفر", "في الطائرة", "الصفات الأساسية", "صف الأشياء", "قارن بين الأشياء"] },
  // القفز لوحدة 7 = اختبار وحدات 1-6
  "unit-present-jobs": { unitTitle: "استخدم الزمن المضارع للمهن", color: "#16a34a",
    prevTitles: ["جمل كاملة", "عائلتك", "الاتجاهات", "في الطائرة", "قارن بين الأشياء", "أسماء الأطعمة", "في المطعم", "المشروبات والحلويات"] },
  // القفز لوحدة 8 = اختبار وحدات 1-7
  "unit-present": { unitTitle: "استخدم الزمن المضارع", color: "#fb923c",
    prevTitles: ["جمل كاملة", "عائلتك", "الاتجاهات", "في الطائرة", "قارن بين الأشياء", "في المطعم", "أفعال المهن", "جمل المضارع", "اسأل عن المهن"] },
  // القفز لوحدة 9 = اختبار وحدات 1-8
  "unit-weather": { unitTitle: "تحدث عن الطقس", color: "#f87171",
    prevTitles: ["عائلتك", "الاتجاهات", "في الطائرة", "قارن بين الأشياء", "في المطعم", "اسأل عن المهن", "أفعال يومية", "روتينك اليومي", "الكلمات الزمنية"] },
  // القفز لوحدة 10 = اختبار وحدات 1-9
  "unit-pets": { unitTitle: "تحدث عن حيواناتك الأليفة", color: "#a78bfa",
    prevTitles: ["عائلتك", "الاتجاهات", "في الطائرة", "قارن بين الأشياء", "في المطعم", "اسأل عن المهن", "روتينك اليومي", "كلمات الطقس", "صف الطقس", "الفصول الأربعة"] },

  // ════════ القسم الثاني (وحدات 11-40) ════════
  "unit-clothes": { unitTitle: "تسوّق لشراء الملابس", color: "#0ea5e9",
    prevTitles: ["أسماء الحيوانات", "صف حيوانك", "العناية بالحيوان"] },
  "unit-house": { unitTitle: "قم بجولة في منزلك", color: "#f97316",
    prevTitles: ["أسماء الملابس", "في متجر الملابس", "اطلب الملابس"] },
  "unit-tobe": { unitTitle: "استخدم المضارع من يكون", color: "#8b5cf6",
    prevTitles: ["غرف المنزل", "الأثاث", "أين الأشياء"] },
  "unit-contr": { unitTitle: "اختصارات المضارع من يكون", color: "#ec4899",
    prevTitles: ["أنا أكون، أنت تكون", "جمل مع يكون", "يكون مع الصفات"] },
  "unit-order": { unitTitle: "اطلب الطعام والمشروبات", color: "#14b8a6",
    prevTitles: ["الاختصارات الأساسية", "الاختصارات في جمل", "اختصارات النفي"] },
  "unit-work": { unitTitle: "تواصل في العمل", color: "#0284c7",
    prevTitles: ["قائمة الطعام", "اطلب بأدب", "في المطعم"] },
  "unit-feel": { unitTitle: "استخدم المضارع للمشاعر", color: "#eab308",
    prevTitles: ["كلمات العمل", "في الاجتماع", "التواصل المهني"] },
  "unit-class": { unitTitle: "اطلب المساعدة في الصف", color: "#16a34a",
    prevTitles: ["المشاعر", "كيف تشعر", "التعبير عن المشاعر"] },
  "unit-shop": { unitTitle: "اطلب المساعدة أثناء التسوق", color: "#dc2626",
    prevTitles: ["كلمات الصف", "اطلب المساعدة", "في الدرس"] },
  "unit-time": { unitTitle: "استخدم تعابير الوقت", color: "#9333ea",
    prevTitles: ["كلمات التسوق", "اسأل عن المنتجات", "الدفع والمساعدة"] },
  "unit-sport": { unitTitle: "ناقش الرياضات", color: "#65a30d",
    prevTitles: ["كم الساعة", "أوقات اليوم", "تعابير الوقت"] },
  "unit-adv": { unitTitle: "ظروف التكرار والوقت", color: "#0d9488",
    prevTitles: ["أنواع الرياضات", "ممارسة الرياضة", "ناقش الرياضة"] },
  "unit-rout": { unitTitle: "صف روتينك اليومي", color: "#ea580c",
    prevTitles: ["ظروف التكرار", "عبارات التكرار", "استخدامها في جمل"] },
  "unit-hotel": { unitTitle: "احجز غرفة في فندق", color: "#0369a1",
    prevTitles: ["روتين الصباح", "روتين المساء", "صف يومك"] },
  "unit-art": { unitTitle: "استخدم أدوات التعريف", color: "#7c3aed",
    prevTitles: ["كلمات الفندق", "احجز غرفة", "في الفندق"] },
  "unit-fam": { unitTitle: "صف أفراد عائلتك", color: "#e11d48",
    prevTitles: ["a و an", "أداة the", "استخدامها معاً"] },
  "unit-poss": { unitTitle: "صف ممتلكاتك", color: "#0891b2",
    prevTitles: ["أفراد العائلة", "صف شخصيتهم", "تحدث عن عائلتك"] },
  "unit-lost": { unitTitle: "افرز الأشياء المفقودة", color: "#b45309",
    prevTitles: ["الملكية", "ممتلكات", "لمن هذا"] },
  "unit-wear": { unitTitle: "تسوّق للملابس", color: "#7c2d12",
    prevTitles: ["المفقودات", "صف الشيء المفقود", "في مكتب المفقودات"] },
  "unit-plur": { unitTitle: "كوّن جمع التكسير", color: "#4f46e5",
    prevTitles: ["ملابس متنوّعة", "المقاسات والقياس", "اتخاذ القرار"] },
  "unit-city": { unitTitle: "تنقّل في مدينة غير مألوفة", color: "#0e7490",
    prevTitles: ["جموع شاذة شائعة", "المزيد من الجموع", "استخدامها في جمل"] },
  "unit-neg": { unitTitle: "كوّن النفي في المضارع", color: "#be123c",
    prevTitles: ["أماكن المدينة", "الاتجاهات", "اسأل عن الطريق"] },
  "unit-symp": { unitTitle: "تحدّث عن الأعراض", color: "#0f766e",
    prevTitles: ["النفي بـ don't", "النفي بـ doesn't", "النفي في جمل"] },
  "unit-beq": { unitTitle: "كوّن أسئلة بيكون", color: "#9333ea",
    prevTitles: ["الجسم والألم", "الأعراض", "عند الطبيب"] },
  "unit-cont": { unitTitle: "استخدم المضارع المستمر", color: "#c026d3",
    prevTitles: ["أسئلة Are/Is", "أسئلة الاستفهام", "إجابات قصيرة"] },
  "unit-wthr": { unitTitle: "تحدّث عن الطقس والطبيعة", color: "#0284c7",
    prevTitles: ["تكوين ing", "أفعال شائعة", "استخدامه الآن"] },
  "unit-cq": { unitTitle: "كوّن أسئلة في المضارع المستمر", color: "#7c3aed",
    prevTitles: ["الطقس", "الطبيعة", "تحدّث عنهما"] },
  "unit-schl": { unitTitle: "تحدّث عن المدرسة", color: "#16a34a",
    prevTitles: ["أسئلة المستمر", "أسئلة الاستفهام", "إجابات قصيرة"] },
  "unit-imp": { unitTitle: "استخدم أفعال الأمر المثبتة", color: "#ea580c",
    prevTitles: ["المواد الدراسية", "في المدرسة", "تحدّث عن دراستك"] },
  "unit-safe": { unitTitle: "قدّم نصائح السلامة", color: "#dc2626",
    prevTitles: ["أوامر بسيطة", "إعطاء التعليمات", "الأمر المهذّب"] },
};

// ── مولّد أسئلة الصور (لزيادة توازن الأنماط) ──
// يستخرج كلمات لها إيموجي من أسئلة المحطة ويبني أسئلة صور
function genPictureFromExercises(exercises: ExObj[], count: number, idPrefix: string): ExObj[] {
  // اجمع الكلمات الإنجليزية المفردة التي لها إيموجي
  const wordSet = new Set<string>();
  exercises.forEach(ex => {
    // من أسئلة الصور الموجودة (labels)
    ex.pictureOptions?.forEach(o => {
      if (PICTURE_WORDS.includes(o.label.toLowerCase().trim())) wordSet.add(o.label.toLowerCase().trim());
    });
    // من الإجابات المفردة (كلمة واحدة لها إيموجي)
    const ca = (ex.correctAnswer ?? "").toLowerCase().trim();
    if (ca && !ca.includes(" ") && PICTURE_WORDS.includes(ca)) wordSet.add(ca);
  });

  const words = [...wordSet];
  if (words.length < 4) return [];

  const shuffled = [...words].sort(() => Math.random() - 0.5);
  const questions: ExObj[] = [];

  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    const correct = shuffled[i];
    const distractors = words
      .filter(w => w !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    if (distractors.length < 3) continue;

    const options = [correct, ...distractors]
      .sort(() => Math.random() - 0.5)
      .map(w => ({ emoji: emojiFor(w), label: w }));

    questions.push({
      id: `${idPrefix}-genpic-${i}`,
      type: "picture_match",
      word: correct,
      pictureOptions: options,
      correctAnswer: correct,
      explanation: `${correct} ${emojiFor(correct)}`,
      xp: 10,
    } as ExObj);
  }
  return questions;
}

// ── TTS ───────────────────────────────────────────────────────────────────────
function lightColor(hex: string): string {
  try {
    const n = parseInt(hex.replace("#",""), 16);
    const r = Math.min(255, (n >> 16) + 60);
    const g = Math.min(255, ((n >> 8) & 0xff) + 60);
    const b = Math.min(255, (n & 0xff) + 60);
    return `rgb(${r},${g},${b})`;
  } catch { return hex; }
}

// أصوات متعددة — لكن صوت ثابت لكل سؤال (يُمرّر voiceKey)
let _cachedVoices: SpeechSynthesisVoice[] = [];
function loadVoices() {
  if (!window.speechSynthesis) return;
  const all = window.speechSynthesis.getVoices();
  // الأولوية للأصوات الطبيعية عالية الجودة (Google/Microsoft Neural)
  const premium = all.filter(v =>
    /en[-_]/i.test(v.lang) &&
    /(google|natural|neural|premium|enhanced|siri)/i.test(v.name + v.voiceURI)
  );
  // الأصوات الأنثوية الواضحة (مناسبة لتعلّم اللغة)
  const preferred = all.filter(v =>
    /en[-_]/i.test(v.lang) &&
    /(female|woman|girl|samantha|victoria|karen|moira|tessa|fiona|google us english|zira|aria|jenny|salli|joanna|kimberly|ivy)/i.test(v.name + v.voiceURI)
  );
  const englishVoices = all.filter(v => /en[-_]/i.test(v.lang));
  // الأفضلية: premium → preferred → أي إنجليزي
  const pool = premium.length >= 1 ? premium
    : preferred.length >= 2 ? preferred
    : englishVoices;
  _cachedVoices = pool.slice(0, 6);
}
if (typeof window !== "undefined" && window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// حوّل نصاً لرقم ثابت (عشان نفس السؤال = نفس الصوت)
function _hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
  return Math.abs(h);
}

function speak(text: string, rate = 0.85, voiceKey?: string) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  if (_cachedVoices.length === 0) loadVoices();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = rate;
  if (_cachedVoices.length > 0) {
    // الصوت ثابت لكل سؤال (حسب voiceKey)، أو حسب النص إن لم يُمرّر
    const idx = _hashStr(voiceKey ?? text) % _cachedVoices.length;
    u.voice = _cachedVoices[idx];
    u.pitch = 1.12;
  }
  window.speechSynthesis.speak(u);
}
function speakSlow(text: string, voiceKey?: string) { speak(text, 0.5, voiceKey); }

// مؤثرات صوتية لفتح الكنز
function playChestOpen() {
  try {
    const ac = new (window.AudioContext || (window as any).webkitAudioContext)();
    // صوت فتح الغطاء (صرير خشبي → نغمة صاعدة)
    const now = ac.currentTime;
    // نغمة صاعدة سحرية
    [523, 659, 784, 1047].forEach((freq, i) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq; o.type = "triangle";
      const t = now + i * 0.1;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.15, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
      o.start(t); o.stop(t + 0.4);
    });
  } catch {}
}

function playGemSparkle() {
  try {
    const ac = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = ac.currentTime;
    // رنين جواهر متلألئة
    [1568, 2093, 2637].forEach((freq, i) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq; o.type = "sine";
      const t = now + 0.3 + i * 0.08;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.1, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      o.start(t); o.stop(t + 0.5);
    });
  } catch {}
}

// ── Hearts ────────────────────────────────────────────────────────────────────
function Hearts({ count, isPro }: { count: number; isPro: boolean }) {
  return (
    <div className="flex items-center gap-1.5 flex-shrink-0">
      <span className={cn("text-sm font-extrabold", isPro ? "text-blue-400" : "text-red-500")}>
        {isPro ? "∞" : count}
      </span>
      <motion.div animate={{ scale:[1,1.15,1] }} transition={{ duration:0.3 }} key={count}>
        <Heart className={cn("w-6 h-6", isPro ? "fill-blue-400 text-blue-400" : "fill-red-500 text-red-500")} />
      </motion.div>
    </div>
  );
}

// ── Dotted word with hover-speak ──────────────────────────────────────────────
function W({ word, color }: { word: string; color: string }) {
  return (
    <span
      onClick={() => speak(word)}
      style={{ borderBottom:`2px dotted ${color}`, cursor:"pointer", fontWeight:800, direction:"ltr", display:"inline" }}
    >{word}</span>
  );
}

// ── Feedback bar ──────────────────────────────────────────────────────────────
function FeedbackBar({ correct, explanation, correctAnswer, onNext, color }: {
  correct: boolean; explanation: string; correctAnswer?: string;
  onNext: () => void; color: string;
}) {
  // رسائل تشجيع متنوّعة
  const okMsgs = ["إجابة صحيحة! 🎉", "ممتاز! 🌟", "أحسنت! 👏", "رائع! 💪", "بالضبط! ✨", "عمل رائع! 🔥", "أنت مبدع! 🚀", "صحيح تماماً! 💯", "ما شاء الله! 🌙", "إجابة موفّقة! ⭐", "تقدّم رائع! 📈", "أنت بطل! 🏆"];
  const noMsgs = ["لا بأس، تعلّمنا شيئاً! 💪", "قريب! حاول التذكّر 🤔", "لا تيأس، المحاولة القادمة! 🌱"];
  const msg = correct
    ? okMsgs[Math.floor(Math.random()*okMsgs.length)]
    : noMsgs[Math.floor(Math.random()*noMsgs.length)];
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
      className={cn("rounded-2xl border-2 overflow-hidden", correct ? "bg-green-500/10 border-green-500/40" : "bg-red-500/10 border-red-500/40")}>
      {/* Top bar */}
      <div className={cn("px-4 py-3 flex items-center gap-2.5", correct ? "bg-green-500/15" : "bg-red-500/15")}>
        <span className="text-2xl">{correct ? "✅" : "❌"}</span>
        <h4 className={cn("font-extrabold text-base", correct ? "text-green-400" : "text-red-400")}>{msg}</h4>
      </div>
      {/* Body */}
      <div className="px-4 py-3 space-y-2.5">
        {!correct && correctAnswer && (
          <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
            <Check className="w-5 h-5 text-green-400 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground mb-0.5">الإجابة الصحيحة <span style={{ opacity:0.7 }}>· اضغط الكلمة لمعناها</span></div>
              <div className="text-green-400 font-bold text-base" style={{ direction:"ltr" }}>
                {correctAnswer.split(" ").map((w, i) => (
                  <span key={i}>
                    <WordChip word={w} color="#22c55e" isNew={isNewWord(w)} />
                    {i < correctAnswer.split(" ").length - 1 ? " " : ""}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={()=>speak(correctAnswer, 0.85)} style={{ width:38, height:38, borderRadius:10, background:"#22c55e22", border:"none", cursor:"pointer", fontSize:18, flexShrink:0 }}>🔊</button>
          </div>
        )}
        {explanation && (
          <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background:`${color}10`, border:`1px solid ${color}30` }}>
            <span style={{ fontSize:16 }}>💡</span>
            <p className="text-sm leading-relaxed flex-1" style={{ color:"hsl(var(--foreground))", direction:"rtl" }}>{explanation}</p>
          </div>
        )}
        <button onClick={onNext}
          style={{ width:"100%", padding:"14px", borderRadius:14, border:"none", fontWeight:800, fontSize:15, cursor:"pointer",
            background: correct ? "#22c55e" : color, color:"white", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            boxShadow: correct ? "0 4px 0 #16a34a" : `0 4px 0 ${color}99` }}>
          متابعة <ArrowRight size={18}/>
        </button>
      </div>
    </motion.div>
  );
}

// ── Word Order ────────────────────────────────────────────────────────────────
function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── نظام تتبّع الكلمات الجديدة على المتعلّم ──
const SEEN_WORDS_KEY = "seenWords";
function getSeenWords(): Set<string> {
  try {
    const raw = localStorage.getItem(SEEN_WORDS_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch { return new Set(); }
}
function markWordSeen(word: string) {
  try {
    const key = word.toLowerCase().replace(/[.,!?]/g, "").trim();
    if (!key) return;
    const seen = getSeenWords();
    if (!seen.has(key)) {
      seen.add(key);
      localStorage.setItem(SEEN_WORDS_KEY, JSON.stringify([...seen]));
    }
  } catch { /* ignore */ }
}
function isNewWord(word: string): boolean {
  const key = word.toLowerCase().replace(/[.,!?]/g, "").trim();
  if (!key || !translateWord(key)) return false; // فقط الكلمات اللي لها ترجمة
  return !getSeenWords().has(key);
}

// ── كلمة قابلة للنقر: تعرض الترجمة + لون مميّز لو جديدة ──
function WordChip({ word, color, isNew, onSpeak }: { word: string; color: string; isNew: boolean; onSpeak?: () => void }) {
  const [showTip, setShowTip] = useState(false);
  const translation = translateWord(word);
  const handleClick = () => {
    if (translation) setShowTip(v => !v);
    if (onSpeak) onSpeak();
    if (isNew) markWordSeen(word);
  };
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span onClick={handleClick}
        style={{
          cursor: translation ? "pointer" : "default",
          borderBottom: translation ? `2px dotted ${isNew ? "#f59e0b" : color + "70"}` : "none",
          color: isNew ? "#d97706" : "inherit",
          fontWeight: isNew ? 800 : "inherit",
          padding: "0 1px",
        }}>
        {word}
        {isNew && <span style={{ fontSize: 9, verticalAlign: "super", color: "#f59e0b" }}>✦</span>}
      </span>
      <AnimatePresence>
        {showTip && translation && (
          <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            onClick={() => setShowTip(false)}
            style={{
              position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)",
              marginBottom: 6, background: "hsl(var(--popover))", color: "hsl(var(--popover-foreground))",
              border: `2px solid ${color}`, borderRadius: 10, padding: "5px 12px", fontSize: 14, fontWeight: 700,
              whiteSpace: "nowrap", zIndex: 50, boxShadow: "0 4px 12px rgba(0,0,0,0.2)", direction: "rtl",
            }}>
            {translation}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

function WordOrderQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [wordBank] = useState(() => {
    const words = ex.sentence!.split(" ").map((w, i) => ({ w, i }));
    if (words.length < 2) return words;
    let shuffled = shuffleArr(words);
    // أعد الخلط إذا طلع نفس ترتيب الجملة الأصلية
    let tries = 0;
    while (tries < 10 && shuffled.map(x => x.w).join(" ") === ex.sentence) {
      shuffled = shuffleArr(words);
      tries++;
    }
    return shuffled;
  });
  const [selected, setSelected] = useState<{w:string;i:number}[]>([]);
  const [remaining, setRemaining] = useState(wordBank);
  const [submitted, setSubmitted] = useState(false);

  useEffect(()=>{ const t = setTimeout(()=>speak(ex.correctAnswer, 0.85, ex.id), 350); return ()=>clearTimeout(t); },[]);

  const add = (item:{w:string;i:number}, idx:number) => {
    if (submitted) return;
    setSelected(s=>[...s,item]);
    setRemaining(r=>r.filter((_,j)=>j!==idx));
  };
  const remove = (idx:number) => {
    if (submitted) return;
    setRemaining(r=>[...r,selected[idx]]);
    setSelected(s=>s.filter((_,j)=>j!==idx));
  };
  const submit = () => {
    setSubmitted(true);
    onAnswer(selected.map(x=>x.w).join(" ") === ex.correctAnswer, selected.map(x=>x.w).join(" "));
  };

  return (
    <div>
      {/* شارة كلمة جديدة + التعليمة */}
      <div style={{ textAlign:"center", marginBottom:20 }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:6, marginBottom:8 }}>
          <span style={{ fontSize:13, fontWeight:800, color }}>🔤 ترتيب الجملة</span>
        </div>
        <div style={{ fontSize:19, fontWeight:900, color:"hsl(var(--foreground))", direction:"rtl", marginBottom:4 }}>
          رتّب الكلمات لتكوين الجملة الصحيحة
        </div>
        <div style={{ fontSize:12.5, color:"hsl(var(--muted-foreground))", direction:"rtl" }}>
          استمع للجملة 🔊 ثم اضغط الكلمات بالترتيب الصحيح
        </div>
      </div>

      {/* أزرار الصوت فقط — بدون عرض الجملة (حتى يستمع المتعلّم) */}
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:14, marginBottom:24 }}>
        <motion.button whileTap={{scale:0.92}} onClick={()=>speak(ex.correctAnswer, 0.85, ex.id)}
          style={{ width:84, height:84, borderRadius:22, background:color, border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 6px 0 ${color}99, 0 8px 20px ${color}40` }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </motion.button>
        <motion.button whileTap={{scale:0.92}} onClick={()=>speakSlow(ex.correctAnswer, ex.id)}
          style={{ width:64, height:64, borderRadius:18, background:`${color}18`, border:`2px solid ${color}45`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 4px 0 ${color}30` }}>
          <span style={{ fontSize:30 }}>🐢</span>
        </motion.button>
      </div>

      {/* منطقة الإجابة — سطران بخطوط */}
      <div style={{ minHeight:84, marginBottom:24, borderTop:"2px solid hsl(var(--border))", borderBottom:"2px solid hsl(var(--border))", padding:"12px 4px", display:"flex", flexWrap:"wrap", gap:8, alignContent:"flex-start" }}>
        {selected.length === 0 && <span style={{ color:"hsl(var(--muted-foreground))", fontSize:13, margin:"auto", opacity:0.6 }}>اضغط على الكلمات بالأسفل لترتيبها</span>}
        {selected.map((item,i)=>(
          <motion.button key={item.i} initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} onClick={()=>remove(i)} disabled={submitted}
            style={{ background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", borderRadius:12, padding:"8px 16px", fontSize:16, fontWeight:700, cursor:submitted?"default":"pointer", boxShadow:"0 2px 0 hsl(var(--border))", color:"hsl(var(--foreground))" }}>
            {item.w}
          </motion.button>
        ))}
      </div>

      {/* بنك الكلمات */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:8, justifyContent:"center" }}>
        {remaining.map((item,i)=>(
          <motion.button key={item.i} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} whileTap={{scale:0.94}} onClick={()=>add(item,i)} disabled={submitted}
            style={{ background:"hsl(var(--card))", border:"2px solid hsl(var(--border))", borderRadius:12, padding:"9px 18px", fontSize:16, fontWeight:700, cursor:submitted?"default":"pointer", boxShadow:"0 3px 0 hsl(var(--border))", color:"hsl(var(--foreground))" }}>
            {item.w}
          </motion.button>
        ))}
      </div>

      {/* زر تحقّق — رمادي ثم ملوّن */}
      {!submitted && (
        <button onClick={submit} disabled={selected.length===0}
          style={{ width:"100%", padding:15, marginTop:20,
            background:selected.length===0 ? "hsl(var(--muted))" : color,
            color:selected.length===0 ? "hsl(var(--muted-foreground))" : "white",
            border:"none", borderRadius:14, fontWeight:800, fontSize:16,
            cursor:selected.length===0?"default":"pointer",
            boxShadow:selected.length===0 ? "none" : `0 4px 0 ${color}99`,
            transition:"all 0.2s" }}>
          تحقّق
        </button>
      )}
    </div>
  );
}

// ── Translate ─────────────────────────────────────────────────────────────────
function TranslateQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const choose = (o: string) => {
    if (confirmed) return;
    setPicked(o);
    speak(o, 0.85, ex.id);
  };

  const confirm = () => {
    if (!picked || confirmed) return;
    setConfirmed(true);
    onAnswer(picked === ex.correctAnswer, picked);
  };

  return (
    <div>
      {/* التعليمة */}
      <div style={{ textAlign:"center", marginBottom:22 }}>
        <div style={{ fontSize:13, fontWeight:800, color, marginBottom:6 }}>🔄 الترجمة</div>
        {isNewWord(ex.correctAnswer ?? "") && (
          <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#f59e0b18", border:"1.5px solid #f59e0b55", borderRadius:14, padding:"3px 12px", marginBottom:8 }}>
            <span style={{ fontSize:12, fontWeight:800, color:"#d97706" }}>✦ كلمة جديدة</span>
          </div>
        )}
        <div style={{ fontSize:13, fontWeight:700, color:"hsl(var(--muted-foreground))", marginBottom:12, direction:"rtl" }}>اختر الترجمة الإنجليزية الصحيحة للكلمة التالية</div>
        <div style={{ fontSize:24, fontWeight:900, color:"hsl(var(--foreground))", direction:"rtl", lineHeight:1.5 }}>{ex.arabic}</div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:16 }}>
        {(ex.options??[]).map(o=>{
          const isPicked = o===picked;
          let bg = "hsl(var(--card))", border = "2px solid hsl(var(--border))", shadow = "0 3px 0 hsl(var(--border))";
          if (isPicked && !confirmed) { bg=`${color}14`; border=`2px solid ${color}`; shadow=`0 3px 0 ${color}`; }
          return (
            <motion.button key={o} whileTap={{scale:0.98}} onClick={()=>choose(o)} disabled={confirmed}
              style={{ padding:"15px 18px", borderRadius:14, fontSize:16, fontWeight:700, cursor:confirmed?"default":"pointer",
                textAlign:"left", direction:"ltr", background:bg, border, boxShadow:shadow,
                display:"flex", alignItems:"center", justifyContent:"space-between", minHeight:54,
                color:"hsl(var(--foreground))" }}>
              <span>{o}</span>
              <span onClick={e=>{e.stopPropagation();speak(o, 0.85, ex.id);}}
                style={{ fontSize:18, opacity:0.5, cursor:"pointer" }}>🔊</span>
            </motion.button>
          );
        })}
      </div>
      {!confirmed && (
        <button onClick={confirm} disabled={!picked}
          style={{ width:"100%", padding:15, marginTop:8,
            background:picked?color:"hsl(var(--muted))", color:picked?"white":"hsl(var(--muted-foreground))",
            border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:picked?"pointer":"default",
            boxShadow:picked?`0 4px 0 ${color}99`:"none", transition:"all 0.2s" }}>
          تحقّق
        </button>
      )}
    </div>
  );
}

// ── Listen & Select ───────────────────────────────────────────────────────────
function ListenQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);
  useEffect(()=>{
    // تشغيل تلقائي موثوق — ننتظر جاهزية المحرك
    const play = () => speak(ex.listenSentence!, 0.85, ex.id);
    const t = setTimeout(play, 400);
    return ()=>clearTimeout(t);
  },[]);

  const choose = (o: string) => {
    if (picked) return;
    setPicked(o);
    onAnswer(o===ex.correctAnswer, o);
  };

  return (
    <div>
      {/* التعليمة */}
      <div style={{ textAlign:"center", marginBottom:18 }}>
        <div style={{ fontSize:13, fontWeight:800, color, marginBottom:6 }}>🎧 الاستماع</div>
        <div style={{ fontSize:14, fontWeight:700, color:"hsl(var(--foreground))", direction:"rtl" }}>استمع جيداً ثم اختر ما سمعته</div>
      </div>
      {/* Audio buttons: عادي + سلحفاة بطيء */}
      <div style={{ display:"flex", gap:14, justifyContent:"center", alignItems:"center", marginBottom:14 }}>
        {/* عادي — كبير */}
        <motion.button whileTap={{scale:0.92}} onClick={()=>speak(ex.listenSentence!, 0.85, ex.id)}
          style={{ width:96, height:96, borderRadius:24, background:color, border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 6px 0 ${color}99, 0 8px 22px ${color}40` }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </motion.button>
        {/* سلحفاة — بطيء */}
        <motion.button whileTap={{scale:0.92}} onClick={()=>speakSlow(ex.listenSentence!, ex.id)}
          style={{ width:72, height:72, borderRadius:20, background:`${color}18`, border:`2px solid ${color}45`, cursor:"pointer",
            display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 4px 0 ${color}30` }}>
          <span style={{ fontSize:34 }}>🐢</span>
        </motion.button>
      </div>
      <div style={{ fontSize:12, color:"hsl(var(--muted-foreground))", textAlign:"center", marginBottom:24 }}>اضغط 🔊 للعادي أو 🐢 للبطيء</div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {(ex.options??[]).map(o=>{
          const isCorrect=o===ex.correctAnswer, isPicked=o===picked;
          const bc = isPicked?(isCorrect?"#16a34a":"#dc2626"):(picked&&isCorrect?"#16a34a":"hsl(var(--border))");
          return (
            <motion.button key={o} whileTap={{scale:0.98}} onClick={()=>choose(o)} disabled={!!picked}
              style={{ padding:"15px 18px", borderRadius:14, fontSize:16, fontWeight:800, cursor:picked?"default":"pointer", direction:"ltr", minHeight:54,
                color:"hsl(var(--foreground))",
                background:isPicked?(isCorrect?"#16a34a14":"#dc262614"):(picked&&isCorrect?"#16a34a14":"hsl(var(--card))"),
                border:`2px solid ${bc}`, boxShadow:`0 3px 0 ${bc==="hsl(var(--border))"?"hsl(var(--border))":bc}` }}>
              {o}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ── Picture Match (ستايل احترافي: بطاقات + أرقام + نص) ───────────────────────
const PIC_AR: Record<string,string> = {
  tea:"شاي", coffee:"قهوة", water:"ماء", juice:"عصير", milk:"حليب",
};
function PictureQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);

  const choose = (label: string) => {
    if (picked) return;
    speak(label, 0.85, ex.id);
    setPicked(label);
    onAnswer(label===ex.correctAnswer, label);
  };

  const arabicWord = PIC_AR[ex.word ?? ""] ?? ex.arabic ?? ex.word;

  return (
    <div>
      {/* شارة كلمة جديدة + السؤال */}
      <div style={{ textAlign:"center", marginBottom:26 }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:6, marginBottom:8 }}>
          <span style={{ fontSize:13, fontWeight:800, color }}>🖼️ مطابقة الصورة</span>
        </div>
        <div style={{ fontSize:12.5, fontWeight:700, color:"hsl(var(--muted-foreground))", marginBottom:8, direction:"rtl" }}>اختر الصورة التي تدل على الكلمة</div>
        <div style={{ fontSize:21, fontWeight:900, color:"hsl(var(--foreground))", direction:"rtl" }}>
          أي واحدة من هذه "{arabicWord}"؟
        </div>
      </div>

      {/* البطاقات */}
      <div style={{ display:"grid", gridTemplateColumns:(ex.pictureOptions?.length??4)===3?"1fr 1fr 1fr":"1fr 1fr", gap:12 }}>
        {(ex.pictureOptions??[]).map((o,i)=>{
          const isCorrect=o.label===ex.correctAnswer, isPicked=o.label===picked;
          const borderC = isPicked?(isCorrect?"#16a34a":"#dc2626"):(picked&&isCorrect?"#16a34a":"hsl(var(--border))");
          const bgC = isPicked?(isCorrect?"#16a34a14":"#dc262614"):(picked&&isCorrect?"#16a34a14":"hsl(var(--card))");
          return (
            <motion.button key={o.label} whileTap={{scale:0.96}} onClick={()=>choose(o.label)}
              style={{ position:"relative", padding:"16px 8px 10px", borderRadius:16, cursor:picked?"default":"pointer",
                display:"flex", flexDirection:"column", alignItems:"center", gap:12, minHeight:140,
                background:bgC, border:`2px solid ${borderC}`,
                boxShadow:isPicked||(picked&&isCorrect)?`0 3px 0 ${borderC}`:"0 2px 0 hsl(var(--border))" }}>
              {/* الصورة */}
              <div style={{ width:74, height:74, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <DrinkArt label={o.label}/>
              </div>
              {/* النص الإنجليزي + الرقم */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", padding:"0 4px", marginTop:"auto" }}>
                <span style={{ width:22, height:22, borderRadius:6, border:"1.5px solid hsl(var(--border))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:"hsl(var(--muted-foreground))" }}>{i+1}</span>
                <span style={{ fontSize:14, fontWeight:800, color:"hsl(var(--foreground))" }}>{o.label}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ── Fill Blank (اتبع النمط) ──────────────────────────────────────────────────
function FillBlankQ({ ex, color, onAnswer }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void }) {
  const [picked, setPicked] = useState<string|null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const parts = (ex.blankSentence ?? "").split("___");

  useEffect(()=>{ const t=setTimeout(()=>speak((ex.blankSentence??"").replace("___", ex.correctAnswer), 0.85, ex.id), 300); return ()=>clearTimeout(t); },[]);

  const confirm = () => {
    if (!picked || confirmed) return;
    setConfirmed(true);
    onAnswer(picked === ex.correctAnswer, picked);
  };

  return (
    <div>
      {/* التعليمة */}
      <div style={{ textAlign:"center", marginBottom:18 }}>
        <div style={{ fontSize:13, fontWeight:800, color, marginBottom:6 }}>✏️ إكمال الفراغ</div>
        <div style={{ fontSize:14, fontWeight:700, color:"hsl(var(--foreground))", direction:"rtl" }}>اختر الكلمة المناسبة لإكمال الجملة</div>
      </div>
      {/* Audio */}
      <div style={{ display:"flex", gap:12, justifyContent:"center", alignItems:"center", marginBottom:24 }}>
        <motion.button whileTap={{scale:0.92}} onClick={()=>speak((ex.blankSentence??"").replace("___", picked ?? ex.correctAnswer), 0.85, ex.id)}
          style={{ width:64, height:64, borderRadius:18, background:color, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 5px 0 ${color}99, 0 7px 18px ${color}40` }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </motion.button>
        <motion.button whileTap={{scale:0.92}} onClick={()=>speakSlow((ex.blankSentence??"").replace("___", picked ?? ex.correctAnswer), ex.id)}
          style={{ width:52, height:52, borderRadius:16, background:`${color}18`, border:`2px solid ${color}45`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 3px 0 ${color}30` }}>
          <span style={{ fontSize:26 }}>🐢</span>
        </motion.button>
      </div>

      {/* Sentence with blank */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:28, fontSize:24, fontWeight:800, direction:"ltr", flexWrap:"wrap", color:"hsl(var(--foreground))" }}>
        <span>{parts[0]}</span>
        <span style={{ minWidth:90, borderBottom:`3px solid ${picked?color:"hsl(var(--border))"}`, textAlign:"center", color:picked?color:"transparent", paddingBottom:2 }}>{picked ?? "__"}</span>
        <span>{parts[1]}</span>
      </div>

      {/* Options */}
      <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", marginBottom:20 }}>
        {(ex.blankOptions??[]).map(o=>(
          <motion.button key={o} whileTap={{scale:0.96}} onClick={()=>!confirmed && setPicked(o)} disabled={confirmed}
            style={{ padding:"11px 22px", borderRadius:12, fontSize:16, fontWeight:800, direction:"ltr", cursor:confirmed?"default":"pointer",
              color:"hsl(var(--foreground))",
              background: picked===o ? `${color}14` : "hsl(var(--card))",
              border: `2px solid ${picked===o ? color : "hsl(var(--border))"}`,
              boxShadow: `0 3px 0 ${picked===o ? color : "hsl(var(--border))"}` }}>{o}</motion.button>
        ))}
      </div>

      {!confirmed && (
        <button onClick={confirm} disabled={!picked}
          style={{ width:"100%", padding:15, marginTop:8,
            background:picked?color:"hsl(var(--muted))", color:picked?"white":"hsl(var(--muted-foreground))",
            border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:picked?"pointer":"default",
            boxShadow:picked?`0 4px 0 ${color}99`:"none", transition:"all 0.2s" }}>
          تحقّق
        </button>
      )}
    </div>
  );
}

// ── Matching pairs (الأزواج المتطابقة) ───────────────────────────────────────
function MatchingQ({ ex, color, onAnswer, onMatchError }: { ex: ExObj; color: string; onAnswer: (ok:boolean, answer:string) => void; onMatchError?: (en:string, ar:string) => void }) {
  const pairs = ex.pairs ?? [];
  const [enCol] = useState(()=>[...pairs].sort(()=>Math.random()-0.5));
  const [arCol] = useState(()=>[...pairs].sort(()=>Math.random()-0.5));
  const [selected, setSelected] = useState<{ col:"en"|"ar"; en:string } | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongKey, setWrongKey] = useState<string|null>(null);
  const [hadError, setHadError] = useState(false);

  const playMatchCorrect = () => {
    try {
      const ac = new (window.AudioContext||(window as any).webkitAudioContext)();
      const o = ac.createOscillator(); const g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = 660; o.type="sine";
      g.gain.setValueAtTime(0.1, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+0.3);
      o.start(); o.stop(ac.currentTime+0.3);
    } catch {}
  };

  const tryMatch = (col:"en"|"ar", en:string) => {
    if (matched.has(en)) return;
    if (col === "en") speak(en, 0.85, ex.id);
    if (!selected) { setSelected({ col, en }); return; }
    if (selected.col === col) { setSelected({ col, en }); return; }
    if (selected.en === en) {
      playMatchCorrect();
      const nm = new Set(matched); nm.add(en);
      setMatched(nm); setSelected(null);
      if (nm.size === pairs.length) {
        // إذا أخطأ أثناء المطابقة، سجّلها كإجابة فيها أخطاء (لكن أكملها)
        setTimeout(()=>onAnswer(!hadError, hadError ? "__match_error__" : "matched"), 600);
      }
    } else {
      // محاولة خاطئة — سجّل الزوج الصحيح للكلمة المختارة في المكتبة
      setHadError(true);
      const correctPair = ex.pairs?.find(p => p.en === selected.en);
      if (correctPair && onMatchError) onMatchError(correctPair.en, correctPair.ar);
      setWrongKey(col+en);
      setTimeout(()=>{ setWrongKey(null); setSelected(null); }, 600);
    }
  };

  return (
    <div>
      {/* التعليمة */}
      <div style={{ textAlign:"center", marginBottom:18 }}>
        <div style={{ fontSize:13, fontWeight:800, color, marginBottom:6 }}>🔗 المطابقة</div>
        <div style={{ fontSize:14, fontWeight:700, color:"hsl(var(--foreground))", direction:"rtl" }}>اضغط الكلمة الإنجليزية ثم معناها بالعربية</div>
      </div>
      <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
        <div style={{ flex:1, maxWidth:200, display:"flex", flexDirection:"column", gap:8 }}>
          {enCol.map(p=>{
            const isMatched = matched.has(p.en);
            const isSelected = selected?.col==="en" && selected.en===p.en;
            const isWrong = wrongKey === "en"+p.en;
            return (
              <motion.button key={p.en} whileTap={{scale:0.96}} onClick={()=>tryMatch("en", p.en)}
                animate={isMatched?{opacity:0.4,scale:0.96}:isWrong?{x:[0,-6,6,-6,0]}:{}}
                style={{ padding:"12px 10px", borderRadius:12, fontSize:14, fontWeight:800, direction:"ltr", cursor:isMatched?"default":"pointer",
                  background: isMatched ? `${color}15` : isSelected ? `${color}30` : isWrong ? "#dc262620" : "hsl(var(--card))",
                  border: `2px solid ${isMatched ? color : isSelected ? color : isWrong ? "#dc2626" : "hsl(var(--border))"}` }}>
                {isMatched ? "✓ "+p.en : p.en}
              </motion.button>
            );
          })}
        </div>
        <div style={{ flex:1, maxWidth:200, display:"flex", flexDirection:"column", gap:8 }}>
          {arCol.map(p=>{
            const isMatched = matched.has(p.en);
            const isSelected = selected?.col==="ar" && selected.en===p.en;
            const isWrong = wrongKey === "ar"+p.en;
            return (
              <motion.button key={p.ar} whileTap={{scale:0.96}} onClick={()=>tryMatch("ar", p.en)}
                animate={isMatched?{opacity:0.4,scale:0.96}:isWrong?{x:[0,-6,6,-6,0]}:{}}
                style={{ padding:"12px 10px", borderRadius:12, fontSize:14, fontWeight:800, direction:"rtl", cursor:isMatched?"default":"pointer",
                  background: isMatched ? `${color}15` : isSelected ? `${color}30` : isWrong ? "#dc262620" : "hsl(var(--card))",
                  border: `2px solid ${isMatched ? color : isSelected ? color : isWrong ? "#dc2626" : "hsl(var(--border))"}` }}>
                {isMatched ? "✓ "+p.ar : p.ar}
              </motion.button>
            );
          })}
        </div>
      </div>
      <p style={{ textAlign:"center", fontSize:13, color:"hsl(var(--muted-foreground))", marginTop:20 }}>
        {selected ? "الآن اختر ما يطابقها من العمود الآخر" : "اختر أي كلمة لبدء المطابقة"}
      </p>
    </div>
  );
}

// ── Chest Open Screen (فتح صندوق الكنز) ──────────────────────────────────────
function ChestOpenScreen({ xp, color, onBack }: { xp:number; color:string; onBack:()=>void }) {
  const [phase, setPhase] = useState<"intro"|"shaking"|"opening"|"done">("intro");

  const startOpening = () => {
    setPhase("shaking");
    setTimeout(()=>{ setPhase("opening"); playChestOpen(); }, 800);
    setTimeout(()=>{ playGemSparkle(); }, 1000);
    setTimeout(()=>setPhase("done"), 1500);
  };

  const opened = phase === "opening" || phase === "done";
  const gems = ["💎","💰","⭐","💎","✨","💎","🪙","💎"];

  // ── لوحة تمهيدية قبل فتح الكنز ──
  if (phase === "intro") {
    return (
      <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-sm mx-auto p-6">
          {/* صندوق مقفل ثلاثي الأبعاد */}
          <motion.div
            animate={{ y:[0,-6,0] }} transition={{ repeat:Infinity, duration:2 }}
            style={{ width:200, height:170, margin:"0 auto 20px" }}>
            <OrnateChest opened={false} color={color} glow={false}/>
          </motion.div>
          <h2 className="text-2xl font-bold mb-2" style={{ color }}>💎 كنز المراجعة</h2>
          <p className="text-muted-foreground text-sm mb-2" style={{ direction:"rtl", lineHeight:1.7 }}>
            هذا الكنز يحوي أسئلة من <b>الدروس السابقة</b> لتختبر ما تعلّمته.
          </p>
          <p className="text-sm mb-6" style={{ direction:"rtl", color, fontWeight:700 }}>
            هل تستطيع الإجابة وفتح الكنز؟ 🗝️
          </p>
          <button onClick={startOpening}
            style={{ width:"100%", padding:"14px", background:`linear-gradient(135deg, ${lightColor(color)}, ${color})`, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer", boxShadow:`0 5px 0 ${color}99` }}>
            افتح الكنز 💎
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex-1 flex items-center justify-center">
      <div className="text-center max-w-sm mx-auto p-6">
        <div style={{ position:"relative", width:240, height:240, margin:"0 auto 24px" }}>
          {/* وهج خلفي ينبض */}
          <AnimatePresence>
            {opened && (
              <motion.div initial={{opacity:0,scale:0.3}} animate={{opacity:[0,1,0.7],scale:[0.3,1.4,1.1]}}
                transition={{ duration:0.9 }}
                style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <div style={{ width:230, height:230, borderRadius:"50%",
                  background:`radial-gradient(circle, #fde68a88 0%, ${color}30 45%, transparent 72%)` }}/>
              </motion.div>
            )}
          </AnimatePresence>

          {/* أشعة دوّارة */}
          <AnimatePresence>
            {opened && (
              <motion.div initial={{opacity:0,rotate:0}} animate={{opacity:[0,0.7,0.35],rotate:120}}
                transition={{ duration:1.4 }}
                style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="240" height="240" viewBox="0 0 240 240">
                  {[...Array(12)].map((_,i)=>(
                    <rect key={i} x="117" y="14" width="5" height="58" fill="#fbbf24" opacity="0.4"
                      transform={`rotate(${i*30} 120 120)`}/>
                  ))}
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* الجواهر تنفجر للأعلى */}
          <AnimatePresence>
            {opened && gems.map((gem,i)=>{
              const angle = (i/(gems.length-1))*Math.PI - Math.PI; // قوس علوي كامل
              const dist = 80 + (i%3)*16;
              return (
                <motion.div key={i}
                  initial={{ x:120, y:140, opacity:0, scale:0, rotate:0 }}
                  animate={{
                    x:120 + Math.cos(angle)*dist,
                    y:140 + Math.sin(angle)*dist - 10,
                    opacity:[0,1,1,0.9], scale:[0,1.4,1], rotate:(i%2?360:-360),
                  }}
                  transition={{ delay:0.15+i*0.05, duration:1.1, type:"spring", stiffness:75 }}
                  style={{ position:"absolute", fontSize:32, zIndex:5 }}>
                  {gem}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* الصندوق الفخم */}
          <motion.div
            animate={
              phase==="shaking" ? { rotate:[0,-6,6,-6,6,0], x:[0,-3,3,-3,3,0] } :
              phase==="opening" ? { scale:[1,1.18,1], y:[0,-10,0] } : {}
            }
            transition={ phase==="shaking" ? { repeat:Infinity, duration:0.4 } : { duration:0.45 } }
            style={{ position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)", zIndex:3, width:210, height:180 }}>
            <OrnateChest opened={opened} color={color} glow={opened}/>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0,y:10}} animate={{opacity:phase==="done"?1:0,y:phase==="done"?0:10}} transition={{duration:0.4}}>
          <h2 className="text-2xl font-bold mb-2" style={{ color }}>🎉 أحسنت! فتحت الكنز</h2>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#38bdf8,#0ea5e9)", borderRadius:16, padding:"10px 24px", marginBottom:8, boxShadow:"0 4px 12px rgba(14,165,233,0.4)" }}>
            <span style={{ fontSize:24 }}>💎</span>
            <span style={{ fontWeight:900, fontSize:20, color:"white" }}>+20 جوهرة</span>
          </div>
          <div style={{ fontSize:13, color:"hsl(var(--muted-foreground))", marginBottom:20 }}>+{xp} XP</div>
          <button onClick={onBack} style={{ width:"100%", padding:"14px", background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>
            واصل الرحلة 🗺️
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── صندوق كنز قديم فخم ثلاثي الأبعاد ──
function OrnateChest({ opened, color, glow }: { opened:boolean; color:string; glow:boolean }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 180">
      <defs>
        <linearGradient id="chestWoodFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a06a3a"/><stop offset="100%" stopColor="#7a4e28"/></linearGradient>
        <linearGradient id="chestWoodTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b8814a"/><stop offset="100%" stopColor="#9a6838"/></linearGradient>
        <linearGradient id="chestLidFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a06a3a"/><stop offset="100%" stopColor="#85572f"/></linearGradient>
        <radialGradient id="chestGlow" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#fffbeb"/><stop offset="55%" stopColor="#fde68a"/><stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/></radialGradient>
      </defs>

      {/* ظل أرضي */}
      <ellipse cx="100" cy="166" rx="62" ry="9" fill="rgba(0,0,0,0.18)"/>

      {/* ── جسم الصندوق (الصندوق السفلي) ── */}
      {/* الجانب الأمامي */}
      <rect x="44" y="96" width="112" height="60" rx="5" fill="url(#chestWoodFront)" stroke="#5c3a1c" strokeWidth="2.5"/>
      {/* حافة علوية للصندوق (سماكة) */}
      <rect x="44" y="92" width="112" height="12" rx="4" fill="url(#chestWoodTop)" stroke="#5c3a1c" strokeWidth="2"/>
      {/* ألواح خشبية عمودية */}
      <line x1="72" y1="104" x2="72" y2="153" stroke="#5c3a1c" strokeWidth="1.5" opacity="0.4"/>
      <line x1="100" y1="104" x2="100" y2="153" stroke="#5c3a1c" strokeWidth="1.5" opacity="0.4"/>
      <line x1="128" y1="104" x2="128" y2="153" stroke="#5c3a1c" strokeWidth="1.5" opacity="0.4"/>
      {/* أحزمة معدنية أفقية */}
      <rect x="44" y="118" width="112" height="9" fill="#6b4423" stroke="#4a2d15" strokeWidth="1"/>
      <rect x="44" y="142" width="112" height="9" fill="#6b4423" stroke="#4a2d15" strokeWidth="1"/>
      {/* أوتاد معدنية على الزوايا */}
      {[52,148].map(x=>(<g key={x}>
        <rect x={x-3} y="120" width="6" height="5" rx="1" fill="#8a6a48"/>
        <rect x={x-3} y="144" width="6" height="5" rx="1" fill="#8a6a48"/>
      </g>))}

      {/* توهج وجواهر داخل الصندوق عند الفتح */}
      {glow && <ellipse cx="100" cy="96" rx="50" ry="16" fill="url(#chestGlow)"/>}
      {opened && (
        <g>
          <circle cx="80" cy="94" r="7" fill="#f472b6" stroke="#be185d" strokeWidth="1"/>
          <circle cx="100" cy="90" r="8" fill="#38bdf8" stroke="#0369a1" strokeWidth="1"/>
          <circle cx="120" cy="94" r="7" fill="#34d399" stroke="#047857" strokeWidth="1"/>
          <rect x="92" y="88" width="9" height="9" rx="2" fill="#fbbf24" stroke="#b45309" strokeWidth="1" transform="rotate(45 96 92)"/>
        </g>
      )}

      {/* القفل المعدني (يختفي عند الفتح) */}
      {!opened && (
        <g>
          <rect x="91" y="106" width="18" height="20" rx="3" fill="#8a6a48" stroke="#4a2d15" strokeWidth="1.5"/>
          <circle cx="100" cy="114" r="3.5" fill="#3a2410"/>
          <rect x="98.5" y="114" width="3" height="7" fill="#3a2410"/>
        </g>
      )}

      {/* ── الغطاء (يرتفع للأعلى عند الفتح) ── */}
      <motion.g
        animate={opened ? { y:-46, rotate:-8 } : { y:0, rotate:0 }}
        transition={{ type:"spring", stiffness:90, damping:13 }}
        style={{ transformOrigin:"100px 90px", transformBox:"fill-box" } as any}>
        {/* الغطاء — شكل شبه منحرف مسطّح */}
        <path d="M44 92 L44 74 Q44 66 54 66 L146 66 Q156 66 156 74 L156 92 Z" fill="url(#chestLidFront)" stroke="#5c3a1c" strokeWidth="2.5"/>
        {/* السطح العلوي للغطاء */}
        <path d="M50 68 L150 68 L156 76 L44 76 Z" fill="url(#chestWoodTop)" stroke="#5c3a1c" strokeWidth="1.5"/>
        {/* حزام معدني على الغطاء */}
        <rect x="44" y="80" width="112" height="8" fill="#6b4423" stroke="#4a2d15" strokeWidth="1"/>
        {/* أوتاد على الغطاء */}
        {[52,148].map(x=>(<rect key={"lp"+x} x={x-3} y="81.5" width="6" height="5" rx="1" fill="#8a6a48"/>))}
        {/* لمعة */}
        <path d="M55 72 L145 72" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none"/>
      </motion.g>
    </svg>
  );
}

// ── Unit Complete Screen (إنجاز الوحدة كاملة + ملخص الكلمات) ─────────────────
function UnitCompleteScreen({ unitTitle, vocab, xpEarned, color, onBack }: {
  unitTitle:string; vocab:{en:string;ar:string}[]; xpEarned:number; color:string; onBack:()=>void;
}) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex-1 flex items-center justify-center" style={{ overflowY:"auto" }}>
      <div className="w-full max-w-md mx-auto p-4">
        {/* Trophy header */}
        <div className="text-center mb-6">
          <motion.div initial={{scale:0,rotate:-30}} animate={{scale:1,rotate:0}} transition={{type:"spring",stiffness:150}}
            style={{ fontSize:72, marginBottom:8 }}>🏆</motion.div>
          <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
            className="text-2xl font-bold mb-1" style={{ color }}>أكملت الوحدة! 🎉</motion.h2>
          <p className="text-muted-foreground text-sm" style={{ direction:"rtl" }}>{unitTitle}</p>
        </div>

        {/* XP badge */}
        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.35}}
          style={{ display:"flex", justifyContent:"center", gap:12, marginBottom:24 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, background:`${color}20`, border:`2px solid ${color}50`, borderRadius:14, padding:"10px 20px" }}>
            <Star className="w-5 h-5" style={{ color, fill:color }}/>
            <span style={{ fontWeight:900, fontSize:18, color }}>+{xpEarned} XP</span>
          </div>
        </motion.div>

        {/* Vocabulary summary */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.5}}
          style={{ background:"hsl(var(--card))", borderRadius:18, padding:"18px 16px", border:"2px solid hsl(var(--border))", marginBottom:20 }}>
          <h3 style={{ fontWeight:800, fontSize:15, marginBottom:14, textAlign:"center" }}>📚 الكلمات التي تعلّمتها</h3>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {vocab.map((w,i)=>(
              <motion.div key={w.en} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.55+i*0.03}}
                onClick={()=>speak(w.en)}
                style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:6, background:`${color}10`, borderRadius:10, padding:"8px 12px", cursor:"pointer" }}>
                <span style={{ fontWeight:800, fontSize:14, direction:"ltr", color }}>{w.en}</span>
                <span style={{ fontSize:13, color:"hsl(var(--muted-foreground))", direction:"rtl" }}>{w.ar}</span>
              </motion.div>
            ))}
          </div>
          <p style={{ fontSize:11, color:"hsl(var(--muted-foreground))", textAlign:"center", marginTop:12 }}>اضغط أي كلمة لسماع نطقها 🔊</p>
        </motion.div>

        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.7}}
          onClick={onBack}
          style={{ width:"100%", padding:"14px", background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>
          واصل إلى الوحدة التالية
        </motion.button>
      </div>
    </motion.div>
  );
}

// ── Completion Screen ─────────────────────────────────────────────────────────
function CompletionScreen({ score, total, xpEarned, hearts, isPro, subLesson, isLast, color, mistakes, onPracticeMistakes, onNext, onRetry, onBack }: {
  score:number; total:number; xpEarned:number; hearts:number; isPro:boolean;
  subLesson:number; isLast:boolean; color:string;
  mistakes:{ question:string; correct:string; yourAnswer:string; ex:ExObj }[];
  onPracticeMistakes:()=>void;
  onNext:()=>void; onRetry:()=>void; onBack:()=>void;
}) {
  const pct = Math.round((score/total)*100);
  const stars = pct>=90?3:pct>=70?2:1;

  return (
    <motion.div initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:150}}
      className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md text-center overflow-hidden border-2 border-primary/30 rounded-2xl shadow-2xl bg-card">
        {/* Header */}
        <div className="py-8 flex flex-col items-center bg-primary/10 relative">
          <motion.div animate={{rotate:[0,-10,10,-10,0],scale:[1,1.1,1]}} transition={{delay:0.3,duration:0.6}}
            className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 shadow-xl shadow-primary/30">
            <Trophy className="w-12 h-12" />
          </motion.div>
          <h2 className="text-2xl font-bold text-primary mb-1">{isLast ? "🎉 أكملت المحطة!" : "🎯 أحسنت!"}</h2>
          {/* Sub-lesson dots */}
          <div style={{ display:"flex", gap:8, margin:"10px 0 4px" }}>
            {[1,2,3,4].map(i=>(
              <motion.div key={i} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3+i*0.1}}
                style={{ width:30, height:30, borderRadius:"50%",
                  background: i <= subLesson ? color : "hsl(var(--muted))",
                  border:`2px solid ${i <= subLesson ? color : "hsl(var(--border))"}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color:"white", fontWeight:800, fontSize:13 }}>
                {i <= subLesson ? "✓" : i}
              </motion.div>
            ))}
          </div>
          <p style={{ fontSize:13, color:"hsl(var(--muted-foreground))", marginTop:4 }}>
            الدرس {subLesson} من 4 {subLesson >= 1 && subLesson <= 4 ? `· ${STAGE_NAMES[subLesson-1]}` : ""}
          </p>
          <div className="flex gap-1 mt-2">
            {[0,1,2].map(i=>(
              <motion.div key={i} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5+i*0.15}}>
                <Star className={cn("w-5 h-5", i<stars?"text-amber-400 fill-amber-400":"text-muted-foreground/20")}/>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Stats */}
        <div className="p-6">
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 bg-muted/50 rounded-2xl flex flex-col items-center">
              <div className="text-xs text-muted-foreground mb-1">الدقة</div>
              <div className="text-2xl font-bold">{pct}%</div>
            </div>
            <div className="p-3 bg-primary/10 rounded-2xl flex flex-col items-center border border-primary/20">
              <div className="text-xs text-muted-foreground mb-1">XP</div>
              <div className="text-2xl font-bold text-primary">+{xpEarned}</div>
            </div>
            <div className="p-3 bg-muted/50 rounded-2xl flex flex-col items-center">
              <div className="text-xs text-muted-foreground mb-1">الإجابات</div>
              <div className="text-2xl font-bold">{score}/{total}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-5 text-sm text-muted-foreground">
            <span>القلوب المتبقية:</span>
            <Hearts count={hearts} isPro={isPro}/>
          </div>

          {/* ── مراجعة الأخطاء (تعلّم ممّا أخطأت فيه) ── */}
          {mistakes.length > 0 && (
            <div style={{ marginBottom: 20, textAlign: "right" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, direction: "rtl" }}>
                <span style={{ fontSize: 16 }}>📝</span>
                <span style={{ fontWeight: 800, fontSize: 14, color: "hsl(var(--foreground))" }}>
                  راجع أخطاءك ({mistakes.length})
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 200, overflowY: "auto" }}>
                {mistakes.map((m, i) => (
                  <div key={i} style={{
                    background: "hsl(var(--muted) / 0.4)", borderRadius: 12, padding: "10px 12px",
                    border: "1px solid hsl(var(--border))", direction: "rtl",
                  }}>
                    <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginBottom: 4 }}>{m.question}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: "#22c55e", direction: "ltr" }}>✓ {m.correct}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); speak(m.correct, 0.85); }}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, padding: 0 }}
                        aria-label="استمع">🔊</button>
                    </div>
                  </div>
                ))}
              </div>
              {/* زر التدرّب على الأخطاء */}
              <button
                onClick={onPracticeMistakes}
                style={{
                  width: "100%", marginTop: 12, padding: "12px",
                  background: `${color}18`, border: `2px solid ${color}`,
                  borderRadius: 14, fontWeight: 800, fontSize: 14, color,
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}>
                <span style={{ fontSize: 17 }}>🎯</span>
                تدرّب على هذه الأخطاء
              </button>
            </div>
          )}

          <div className="space-y-3">
            {isLast ? (
              <button onClick={onBack} style={{ width:"100%", padding:"14px", background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                واصل الرحلة 🗺️ <ArrowRight size={18}/>
              </button>
            ) : (
              <button onClick={onNext} style={{ width:"100%", padding:"14px", background:color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                الدرس التالي <ArrowRight size={18}/>
              </button>
            )}
            <button onClick={onRetry} style={{ width:"100%", padding:"12px", background:"transparent", border:"2px solid hsl(var(--border))", borderRadius:14, fontWeight:700, fontSize:14, cursor:"pointer" }}>
              أعد هذا الدرس 🔄
            </button>
            {!isLast && (
              <button onClick={onBack} style={{ width:"100%", padding:"10px", background:"transparent", border:"none", color:"hsl(var(--muted-foreground))", fontWeight:700, fontSize:13, cursor:"pointer" }}>
                الخروج للخارطة
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Game Over ─────────────────────────────────────────────────────────────────
function GameOverScreen({ score, total, isPro, onRetry, onBack }: {
  score:number; total:number; isPro:boolean; onRetry:()=>void; onBack:()=>void;
}) {
  return (
    <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md text-center border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl bg-card">
        <div className="bg-red-500/10 py-12 flex flex-col items-center">
          <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:200}}>
            <div className="text-7xl mb-4">💔</div>
          </motion.div>
          <h2 className="text-3xl font-bold text-red-400 mb-2">نفدت القلوب!</h2>
          <p className="text-muted-foreground">لا تستسلم، حاول مرة أخرى!</p>
        </div>
        <div className="p-8 space-y-4">
          <p className="text-muted-foreground text-sm">أجبت بشكل صحيح على <span className="font-bold text-foreground">{score}</span> من {total} سؤال</p>
          {!isPro && (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-sm text-right">
              <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">💙 هل تعلم؟</div>
              <p className="text-muted-foreground">بالحصول على <span className="text-blue-400 font-bold">Pro</span> ستحصل على قلوب لا نهائية 💙</p>
            </div>
          )}
          <button onClick={onRetry} style={{ width:"100%", padding:"14px", background:"hsl(var(--primary))", color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>حاول مرة أخرى 🔄</button>
          <button onClick={onBack} style={{ width:"100%", padding:"12px", background:"transparent", border:"2px solid hsl(var(--border))", borderRadius:14, fontWeight:700, fontSize:14, cursor:"pointer" }}>رجوع للخارطة</button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
// ── نصائح القواعد المبسّطة لكل وحدة (تظهر قبل بداية الدرس) ──
const GRAMMAR_TIPS: Record<string, { title: string; tip: string; example: string }> = {
  drinks:  { title: "الطلب بأدب", tip: "نستخدم please للطلب بأدب، وthank you للشكر. نضعها عادة في نهاية الجملة.", example: "Tea, please. — شاي، من فضلك" },
  intro:   { title: "فعل الكينونة am/is/are", tip: "مع I نستخدم am، ومع he/she/it نستخدم is، ومع you/we/they نستخدم are.", example: "I am Ali. — He is a teacher." },
  places:  { title: "السؤال بـ Where", tip: "نبدأ سؤال المكان بـ Where (أين)، ونستخدم in/at للموقع.", example: "Where is the school? — أين المدرسة؟" },
  airport: { title: "أداة التعريف the", tip: "نستخدم the عند الحديث عن شيء محدّد معروف للطرفين.", example: "Where is the gate? — أين البوابة؟" },
  adj:     { title: "موضع الصفة", tip: "في الإنجليزية الصفة تأتي قبل الاسم، عكس العربية.", example: "a big house — بيت كبير (الصفة أولاً)" },
  food:    { title: "طلب الطعام", tip: "نستخدم I would like (أودّ) للطلب المهذّب في المطعم.", example: "I would like rice. — أودّ أرزاً" },
  pj:      { title: "الفعل في المضارع", tip: "الفعل يبقى كما هو مع I/you/we/they. لكن مع he/she/it نضيف s أو es في النهاية.", example: "I work ✓ — He works ✓ (أضفنا s)" },
  pr:      { title: "ظروف التكرار", tip: "always (دائماً)، usually (عادة)، sometimes (أحياناً)، never (أبداً) تأتي قبل الفعل الأساسي.", example: "I always eat breakfast. — أتناول الفطور دائماً" },
  wt:      { title: "وصف الطقس بـ It is", tip: "نبدأ وصف الطقس بـ It is (الجو...).", example: "It is sunny. — الجو مشمس" },
  pet:     { title: "الملكية بـ have/has", tip: "نستخدم have مع I/you/we/they، وhas مع he/she/it.", example: "I have a cat. — She has a dog." },
};
function grammarTipForLesson(lessonId: string): { title: string; tip: string; example: string } | null {
  const sorted = Object.keys(GRAMMAR_TIPS).sort((a,b)=>b.length-a.length);
  for (const pre of sorted) {
    if (lessonId.startsWith(pre + "-")) return GRAMMAR_TIPS[pre];
  }
  return null;
}

// أسماء مراحل التدرّج التعليمي (حسب رقم الدرس الداخلي)
const STAGE_NAMES = ["تعرّف", "استخدم", "كوّن", "أتقن"];
const STAGE_DESC = ["تعرّف على الكلمات الجديدة", "استخدمها في عبارات", "كوّن جملاً كاملة", "أتقن واختبر نفسك"];

const MAX_HEARTS = 5;

export default function UnitLesson() {
  const { id, unitId } = useParams<{ id: string; unitId: string }>();
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading, login } = useAuth();
  const { playCorrect, playWrong, playComplete } = useSound();

  // وضع القفز: المسار /jump/:unitId (نكتشفه عبر وجود unitId param)
  const isJumpMode = !!unitId;

  // meta عادي أو meta مُركّب لوضع القفز (مستقر عبر useMemo)
  const meta = useMemo(() => {
    if (isJumpMode && unitId) {
      const jumpInfo = JUMP_MAP[unitId];
      if (jumpInfo) {
        return { title: "اختبار القفز", unitTitle: jumpInfo.unitTitle, emoji: "🎯", color: jumpInfo.color,
          isJump: true, jumpPrevTitles: jumpInfo.prevTitles, jumpTargetUnit: unitId } as any;
      }
    }
    return id ? LESSON_MAP[id] : undefined;
  }, [isJumpMode, unitId, id]);

  const isPro = user?.isPro;
  const proLoaded = !authLoading; // use auth loading state
  const [subLesson, setSubLesson] = useState(0); // 0..3 = الدرس الداخلي الحالي
  const [maxSubReached, setMaxSubReached] = useState(0); // أعلى تقدم محفوظ (لا يقل)
  const [resumeLoaded, setResumeLoaded] = useState(false);
  const [queue, setQueue] = useState<ExObj[]>([]);
  const [doneCount, setDoneCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [hearts, setHearts] = useState(isJumpMode ? 3 : MAX_HEARTS);
  const [score, setScore] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showStreakPop, setShowStreakPop] = useState(false);
  // تتبّع الأخطاء لعرضها في ملخّص نهاية الدرس (للمراجعة)
  const [mistakes, setMistakes] = useState<{ question: string; correct: string; yourAnswer: string; ex: ExObj }[]>([]);
  // وضع التدرّب على الأخطاء (يعيد الأسئلة الغلط فقط)
  const [practiceMode, setPracticeMode] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [phase, setPhase] = useState<"playing"|"gameover"|"finish"|"subdone"|"chest"|"unitdone"|"jumpdone">("playing");
  // لوحة تمهيدية لدرس الدمبل (practice) — تظهر مرة واحدة في البداية
  const [showPracticeIntro, setShowPracticeIntro] = useState(false);
  useEffect(() => {
    if (meta?.isPractice && !isJumpMode) setShowPracticeIntro(true);
  }, [meta, isJumpMode]);
  // نصيحة القواعد — تظهر مرة عند بداية الدرس الأول في الوحدة
  const grammarTip = id ? grammarTipForLesson(id) : null;
  const [showGrammarTip, setShowGrammarTip] = useState(false);
  useEffect(() => {
    // اعرضها فقط في الدرس الأول من الوحدة (ينتهي بـ -1) وليس في القفز
    if (id && /-1$/.test(id) && grammarTip && !isJumpMode) setShowGrammarTip(true);
  }, [id, isJumpMode]);
  const [feedback, setFeedback] = useState<{ ok: boolean; explanation: string; correctAnswer: string } | null>(null);
  const [mascotState, setMascotState] = useState<"idle"|"correct"|"wrong"|"complete">("idle");
  const mascotTimer = useRef<ReturnType<typeof setTimeout>>();



  const loadExercises = useCallback((tier: number) => {
    if (!meta) return;
    let raw: ExObj[] = [];
    try {
      if (meta.isJump && meta.jumpPrevTitles) {
        // اختبار القفز — 12 سؤال متراكم من كل الوحدات السابقة، الأصعب، بدون ترجمة
        const pool: ExObj[] = [];
        meta.jumpPrevTitles.forEach((title: string) => {
          pool.push(...getLessonMiniExercises(title, 6, 3));
          pool.push(...getLessonMiniExercises(title, 6, 2));
        });
        const seen = new Set<string>();
        raw = pool.filter(ex => {
          if (ex.type === "translate") return false;
          if (seen.has(ex.id)) return false;
          seen.add(ex.id);
          return true;
        }).sort(() => Math.random() - 0.5).slice(0, 12);
      } else if (meta.isChallenge) {
      // التحدي — اختبار واحد: 10 أسئلة صعبة من كل المستويات، بدون ترجمة
      const pool = [
        ...getLessonMiniExercises(meta.title, 9, 3),
        ...getLessonMiniExercises(meta.title, 9, 2),
        ...getLessonMiniExercises(meta.title, 9, 1),
      ];
      const seen = new Set<string>();
      raw = pool.filter(ex => {
        if (ex.type === "translate") return false; // بدون ترجمة
        if (seen.has(ex.id)) return false;
        seen.add(ex.id);
        return true;
      }).sort(() => Math.random() - 0.5).slice(0, 10);
      } else if (meta.isPractice && meta.practiceTitles) {
        // درس الدمبل — مراجعة شاملة: أسئلة متنوعة من كل دروس الوحدة
        const pool: ExObj[] = [];
        meta.practiceTitles.forEach((title: string) => {
          pool.push(...getLessonMiniExercises(title, 4, 1));
          pool.push(...getLessonMiniExercises(title, 4, 2));
          pool.push(...getLessonMiniExercises(title, 3, 0));
        });
        const seen = new Set<string>();
        raw = pool.filter(ex => {
          if (seen.has(ex.id)) return false;
          seen.add(ex.id);
          return true;
        }).sort(() => Math.random() - 0.5).slice(0, 10);
      } else if (meta.isReview && meta.reviewTitles) {
        // كنز المراجعة — أسئلة من الوحدة الحالية + مراجعة تراكمية من وحدات سابقة
        raw = [];
        // 6 أسئلة سهلة من الوحدة الحالية
        meta.reviewTitles.forEach((title: string) => {
          raw.push(...getLessonMiniExercises(title, 3, 0));
          raw.push(...getLessonMiniExercises(title, 2, 1));
        });
        let current = raw.sort(() => Math.random() - 0.5).slice(0, 6);
        // 3 أسئلة تراكمية من وحدات سابقة (تثبيت ومنع النسيان)
        let crossReview: ExObj[] = [];
        if (meta.crossReviewTitles && meta.crossReviewTitles.length > 0) {
          meta.crossReviewTitles.forEach((title: string) => {
            crossReview.push(...getLessonMiniExercises(title, 2, 0));
          });
          crossReview = crossReview.sort(() => Math.random() - 0.5).slice(0, 3);
        }
        // ادمج: أسئلة الوحدة + المراجعة التراكمية، بدون تكرار
        const seen = new Set<string>();
        raw = [...current, ...crossReview].filter(ex => {
          if (seen.has(ex.id)) return false;
          seen.add(ex.id); return true;
        });
      } else {
        // ── نظام التدرّج التعليمي (بدون تكرار) ──
        // المحطة فيها ~27 سؤال (3 مستويات). نوزّعها على 4 دروس تدرّجياً:
        //   الدرس 1: تعرّف (أسهل) · الدرس 2: استخدم · الدرس 3: كوّن · الدرس 4: أتقن (أصعب)
        const t = (tier as 0|1|2|3);
        // كل أسئلة المحطة مرتّبة من الأسهل للأصعب (t0→t1→t2→t3) بترتيب ثابت
        const all = getAllStationExercises(meta.title);
        // رتّب حسب المستوى المستخرج من id (t0/t1/t2/t3) ثم حسب id
        const tierOf = (ex: ExObj) => {
          const m = ex.id.match(/-t(\d)-/);
          return m ? parseInt(m[1]) : 0;
        };
        const ordered = [...all].sort((a, b) => {
          const ta = tierOf(a), tb = tierOf(b);
          if (ta !== tb) return ta - tb;       // الأسهل أولاً
          return a.id.localeCompare(b.id);
        });
        // وزّع تدرّجياً: الدرس t يأخذ شريحة متتالية (تدرّج طبيعي بالصعوبة)
        // 4 دروس، كل درس يأخذ ربع الأسئلة بالترتيب التصاعدي
        const perLesson = Math.ceil(ordered.length / 4);
        let slice = ordered.slice(t * perLesson, (t + 1) * perLesson);

        // اضمن وجود نمط الصور في كل درس (إن وُجدت في المحطة)
        const usedIds = new Set(slice.map(e => e.id));
        const hasPic = slice.some(e => e.type === "picture_match");
        if (!hasPic) {
          const pic = ordered.find(e => e.type === "picture_match");
          if (pic) {
            // أضف نسخة الصورة (التكرار الوحيد المسموح — لضمان النمط)
            slice = [pic, ...slice];
          }
        }
        // اضمن 6-8 أسئلة: لو قلّت، أكمل من غير المستخدم
        if (slice.length < 6) {
          for (const ex of ordered) {
            if (slice.length >= 7) break;
            if (!usedIds.has(ex.id)) { slice.push(ex); usedIds.add(ex.id); }
          }
        }
        raw = slice.slice(0, 8).sort(() => Math.random() - 0.5);
        // ── زيادة توازن الأنماط: اضمن سؤال صورة (أو اثنين) في الدرس ──
        const picCount = raw.filter(e => e.type === "picture_match").length;
        if (picCount < 1) {
          // ولّد أسئلة صور من كلمات المحطة كاملةً
          const generated = genPictureFromExercises(all, 2, `${meta.title}-${t}`);
          if (generated.length > 0) {
            // استبدل آخر سؤال (غير صورة) بسؤال صورة مولّد، للحفاظ على العدد
            const nonPicIdx = raw.map((e,idx)=>({e,idx})).filter(x=>x.e.type!=="picture_match");
            if (nonPicIdx.length > 0) {
              raw[nonPicIdx[nonPicIdx.length-1].idx] = generated[0];
            } else {
              raw.push(generated[0]);
            }
          }
        }
      }
    } catch (err) {
      console.error("loadExercises error:", err);
      raw = [];
    }
    // اخلط ترتيب الأسئلة + اخلط الخيارات داخل كل سؤال
    const shuffled = [...raw]
      .sort(() => Math.random() - 0.5)
      .map(ex => {
        const copy = { ...ex };
        if (copy.options && copy.options.length > 1) {
          copy.options = [...copy.options].sort(() => Math.random() - 0.5);
        }
        if (copy.pictureOptions && copy.pictureOptions.length > 1) {
          copy.pictureOptions = [...copy.pictureOptions].sort(() => Math.random() - 0.5);
        }
        return copy;
      });
    setQueue(shuffled);
    setDoneCount(0);
    setTotalCount(0);
    setScore(0);
    setXpEarned(0);
    setStreak(0);
    setMistakes([]);
    setHearts(meta.isJump ? 3 : MAX_HEARTS);
    setPhase("playing");
    setFeedback(null);
    setMascotState("idle");
  }, [meta]);

  // اقرأ التقدم المحفوظ وابدأ من الدرس الداخلي الصحيح (مرة واحدة)
  useEffect(() => {
    // وضع القفز: لا resume ولا انتظار auth، حمّل مباشرة
    if (isJumpMode) { setResumeLoaded(true); return; }
    if (!user || !id || resumeLoaded) { if (!user && proLoaded) setResumeLoaded(true); return; }
    supabase.from("unit_progress").select("sub_progress").eq("user_id", user.id).eq("lesson_id", id).maybeSingle()
      .then(({ data }) => {
        const saved = data?.sub_progress ?? 0;
        setMaxSubReached(saved);
        if (saved > 0 && saved < 4) setSubLesson(saved);
        setResumeLoaded(true);
      });
  }, [user, id, proLoaded, isJumpMode]);

  // ضمان إضافي: في وضع القفز، حمّل الأسئلة فور توفر meta
  useEffect(() => {
    if (isJumpMode && meta && queue.length === 0 && phase === "playing") {
      loadExercises(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isJumpMode, meta]);

  useEffect(() => { if (resumeLoaded) loadExercises(subLesson); }, [loadExercises, subLesson, resumeLoaded]);

  const setMascotFor = (state: "correct"|"wrong"|"complete", dur = 2500) => {
    clearTimeout(mascotTimer.current);
    setMascotState(state);
    if (state !== "complete") {
      mascotTimer.current = setTimeout(() => setMascotState("idle"), dur);
    }
  };

  const handleAnswer = (ok: boolean, answer: string) => {
    const ex = queue[0];
    setTotalCount(t => t + 1);
    // علّم كلمات الإجابة الصحيحة كـ"مرئية" (تنتقل من جديدة لمعروفة بعد تعلّمها)
    if (ex.correctAnswer) {
      ex.correctAnswer.split(" ").forEach(w => markWordSeen(w));
    }
    if (ok) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      // كل 3 إجابات صحيحة متتالية → احتفال
      if (newStreak > 0 && newStreak % 3 === 0) {
        setShowStreakPop(true);
        setTimeout(() => setShowStreakPop(false), 2000);
      }
      playCorrect();
      hapticSuccess();
      setMascotFor("correct");
      setScore(s => s + 1);
      setXpEarned(x => x + (ex.xp ?? 10));
      if (!practiceMode) addDailyXp(ex.xp ?? 10); // أضف للهدف اليومي
      setFeedback({ ok: true, explanation: ex.explanation, correctAnswer: ex.correctAnswer });
    } else {
      setStreak(0); // كسر الستريك
      playWrong();
      hapticError();
      setMascotFor("wrong");
      // سجّل الخطأ للمراجعة في نهاية الدرس
      const questionText = ex.arabic || ex.sentence || ex.blankSentence || ex.listenSentence || ex.prompt || "سؤال";
      setMistakes(m => {
        if (m.some(x => x.correct === ex.correctAnswer && x.question === questionText)) return m;
        return [...m, { question: questionText, correct: ex.correctAnswer ?? "", yourAnswer: answer, ex }];
      });
      // احفظ في مكتبة المراجعة الشخصية (دائم عبر كل الدروس) — عدا وضع التدرّب
      if (!practiceMode && ex.correctAnswer) {
        addReviewItem({ correct: ex.correctAnswer, question: questionText, unitTitle: meta.unitTitle ?? "" });
      }
      if (isPro === false) {
        const newH = hearts - 1;
        setHearts(newH);
        if (newH <= 0) {
          setFeedback({ ok: false, explanation: ex.explanation, correctAnswer: ex.correctAnswer });
          return;
        }
      }
      setFeedback({ ok: false, explanation: ex.explanation, correctAnswer: ex.correctAnswer });
    }
  };

  // تدرّب على الأخطاء: يعيد الأسئلة الغلط فقط لترسيخها
  const practiceMistakes = () => {
    if (mistakes.length === 0) return;
    const mistakeExercises = mistakes.map(m => m.ex);
    setQueue(shuffleArr(mistakeExercises));
    setDoneCount(0);
    setTotalCount(0);
    setScore(0);
    setStreak(0);
    setMistakes([]);
    setPracticeMode(true);
    setFeedback(null);
    setPhase("playing");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  const handleNext = () => {
    if (!feedback) return;
    const ok = feedback.ok;
    const ex = queue[0];
    setFeedback(null);

    if (!ok && hearts <= 0 && isPro === false) {
      setPhase("gameover");
      return;
    }

    if (ok) {
      const rest = queue.slice(1);
      setDoneCount(d => d + 1);

      if (rest.length === 0) {
        // وضع التدرّب على الأخطاء: انتهى — ارجع لشاشة النهاية بدون حفظ تقدّم
        if (practiceMode) {
          setPracticeMode(false);
          setMascotFor("complete", 0);
          playComplete();
          setQueue([]);
          setPhase("finish");
          return;
        }
        // وضع القفز — اجتاز الاختبار، افتح الوحدة المستهدفة
        if (meta.isJump) {
          // افتح أول درس في الوحدة المستهدفة (sub_progress=0 لكنه متاح)
          if (user && meta.jumpTargetUnit) {
            // علّم اجتياز القفز بحفظ صف خاص يفتح الوحدة
            const jumpKey = `jump-${meta.jumpTargetUnit}`;
            supabase.from("unit_progress").upsert({
              user_id: user.id,
              lesson_id: jumpKey,
              sub_progress: 4,
              completed_at: new Date().toISOString(),
              score: Math.round(((score) / Math.max(totalCount, 1)) * 100),
            }, { onConflict: "user_id,lesson_id" }).then(({ error }) => {
              if (error) console.warn("jump save failed:", error.message);
            });
          }
          setMascotFor("complete", 0);
          playComplete();
          setQueue([]);
          setPhase("jumpdone");
          return;
        }
        // خلصنا كل أسئلة الدرس الداخلي
        const isReview = !!meta.isReview;
        const isChallenge = !!meta.isChallenge;
        const isPractice = !!meta.isPractice;
        const oneShot = isReview || isChallenge || isPractice; // الكنز والتحدي والدمبل = اختبار واحد
        const completedSub = oneShot ? 4 : subLesson + 1;
        const saveSub = Math.max(completedSub, maxSubReached);
        setMaxSubReached(saveSub);
        const bonusXp = isReview ? xpEarned + 20 : xpEarned;

        if (user) {
          supabase.from("unit_progress").upsert({
            user_id: user.id,
            lesson_id: id,
            sub_progress: saveSub,
            completed_at: saveSub >= 4 ? new Date().toISOString() : null,
            score: Math.round(((score) / Math.max(totalCount, 1)) * 100),
          }, { onConflict: "user_id,lesson_id" }).then(({ error }) => {
            if (error) console.warn("progress save failed:", error.message);
          });
          supabase.from("user_stats").select("total_xp,weekly_xp,exercises_completed")
            .eq("user_id", user.id).single().then(({ data }) => {
              if (data) {
                supabase.from("user_stats").update({
                  total_xp: (data.total_xp ?? 0) + bonusXp,
                  weekly_xp: (data.weekly_xp ?? 0) + bonusXp,
                  exercises_completed: (data.exercises_completed ?? 0) + 1,
                }).eq("user_id", user.id);
              }
            });
        }

        setMascotFor("complete", 0);
        playComplete();
        setQueue([]);
        // إذا كان التحدي النهائي واكتمل آخر درس → شاشة إنجاز الوحدة
        if (meta.isUnitFinal && completedSub >= 4) {
          setPhase("unitdone");
        } else {
          setPhase(isReview ? "chest" : "finish");
        }
      } else {
        setQueue(rest);
      }
    } else {
      // خطأ — ادفع السؤال لآخر القائمة وأعد تركيب المكوّن
      setQueue(q => [...q.slice(1), { ...ex, id: `${ex.id}-r${Date.now()}` }]);
    }
  };

  const progress = (doneCount / Math.max(doneCount + queue.length, 1)) * 100;
  const ex = queue[0];


  // ── بوابة تسجيل الدخول — لا يمكن دخول الدروس بدون حساب ──
  if (!authLoading && !user) return (
    <>
      <div style={{ maxWidth:400, margin:"0 auto", padding:"40px 20px", minHeight:"calc(100svh - 160px)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center" }}>
        <div style={{ marginBottom:8 }}>
          <Mascot state="thinking" className="w-28 h-32"/>
        </div>
        <div style={{ fontSize:54, marginBottom:4 }}>🔒</div>
        <h2 style={{ fontWeight:900, fontSize:23, marginBottom:12, color:"hsl(var(--foreground))" }}>سجّل دخولك أولاً</h2>
        <p style={{ fontSize:15, color:"hsl(var(--muted-foreground))", lineHeight:1.8, direction:"rtl", marginBottom:28 }}>
          لبدء الدروس وحفظ تقدّمك وجمع الجواهر والحفاظ على سلسلتك اليومية، تحتاج إلى تسجيل الدخول. إنه مجاني وسريع! 🚀
        </p>
        <button onClick={login}
          style={{ width:"100%", maxWidth:300, padding:"15px", background:meta?.color ?? "hsl(var(--primary))", color:"white", border:"none", borderRadius:16, fontWeight:800, fontSize:16, cursor:"pointer", boxShadow:`0 5px 0 ${meta?.color ?? "hsl(var(--primary))"}99`, display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 11v2h5.59c-.5 2.3-2.5 4-5.59 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.5 0 2.85.55 3.9 1.45L17.4 5.4C15.95 4.05 14.07 3.2 12 3.2 7.03 3.2 3 7.23 3 12s4.03 8.8 9 8.8c5.2 0 8.6-3.65 8.6-8.8 0-.55-.05-1.1-.15-1.6H12z"/></svg>
          تسجيل الدخول بـ Google
        </button>
        <button onClick={()=>setLocation("/")}
          style={{ marginTop:14, padding:"10px 20px", background:"transparent", color:"hsl(var(--muted-foreground))", border:"none", fontWeight:700, fontSize:14, cursor:"pointer" }}>
          العودة للخارطة
        </button>
      </div>
    </>
  );

  if (!meta) return (
    <>
      <div style={{ textAlign:"center", padding:60 }}>
        <div style={{ fontSize:64, marginBottom:16 }}>😕</div>
        <h2 style={{ marginBottom:16 }}>الدرس غير موجود</h2>
        <button onClick={()=>history.back()} style={{ padding:"10px 24px", background:"hsl(var(--primary))", color:"white", border:"none", borderRadius:12, fontWeight:700, cursor:"pointer" }}>رجوع</button>
      </div>
    </>
  );

  return (
    <>
      {/* توهّج خلفي بلون الوحدة (يعطي عمق وتناسق) */}
      <div style={{
        position:"fixed", inset:0, zIndex:-1, pointerEvents:"none",
        background:`
          radial-gradient(ellipse 100% 40% at 50% 0%, ${meta.color}22, transparent 60%),
          radial-gradient(ellipse 80% 40% at 50% 100%, ${meta.color}14, transparent 60%),
          hsl(var(--background))
        `,
      }}/>
      <div style={{ maxWidth:440, margin:"0 auto", padding:"calc(max(env(safe-area-inset-top, 0px), 8px) + 8px) 16px 0", height:"100svh", display:"flex", flexDirection:"column" }}>

        {phase === "gameover" && <GameOverScreen score={score} total={totalCount} isPro={isPro??false} onRetry={()=>loadExercises(subLesson)} onBack={()=>setLocation("/roadmap")}/>}
        {phase === "chest"    && <ChestOpenScreen xp={xpEarned + 20} color={meta.color} onBack={()=>setLocation("/roadmap")}/>}
        {phase === "unitdone" && <UnitCompleteScreen unitTitle={meta.unitTitle} vocab={meta.vocab ?? []} xpEarned={xpEarned} color={meta.color} onBack={()=>setLocation("/roadmap")}/>}
        {phase === "jumpdone" && (
          <motion.div initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{type:"spring"}} className="flex-1 flex items-center justify-center">
            <div className="text-center max-w-sm mx-auto p-6">
              <motion.div initial={{scale:0,rotate:-30}} animate={{scale:1,rotate:0}} transition={{type:"spring",stiffness:150}} style={{ fontSize:72, marginBottom:12 }}>🎯</motion.div>
              <h2 className="text-2xl font-bold mb-2" style={{ color:meta.color }}>اجتزت الاختبار! 🎉</h2>
              <p className="text-muted-foreground text-sm mb-6" style={{ direction:"rtl" }}>
                فتحت وحدة "{meta.unitTitle}" — ابدأ التدرّب الآن!
              </p>
              <button onClick={()=>setLocation("/roadmap")}
                style={{ width:"100%", padding:"14px", background:meta.color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:16, cursor:"pointer" }}>
                ابدأ الوحدة الجديدة
              </button>
            </div>
          </motion.div>
        )}
        {phase === "finish"   && <CompletionScreen
          score={score} total={totalCount} xpEarned={xpEarned} hearts={hearts} isPro={isPro??false}
          subLesson={subLesson+1} isLast={subLesson+1 >= 4} color={meta.color}
          mistakes={mistakes}
          onPracticeMistakes={practiceMistakes}
          onNext={()=>setSubLesson(s=>s+1)}
          onRetry={()=>loadExercises(subLesson)}
          onBack={()=>setLocation("/roadmap")}/>}

        {/* ── لوحة نصيحة القواعد (بداية الوحدة) ── */}
        {showGrammarTip && grammarTip && phase === "playing" && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}}
            style={{ position:"fixed", inset:0, background:"hsl(var(--background))", zIndex:81, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
            <motion.div initial={{scale:0.9,y:20}} animate={{scale:1,y:0}} className="max-w-sm mx-auto" style={{ width:"100%" }}>
              <div style={{ textAlign:"center", marginBottom:18 }}>
                <div style={{ fontSize:52, marginBottom:8 }}>💡</div>
                <div style={{ display:"inline-block", background:`${meta.color}18`, color:meta.color, fontWeight:800, fontSize:13, padding:"5px 16px", borderRadius:20, marginBottom:10 }}>
                  قاعدة سريعة
                </div>
                <h2 style={{ fontWeight:900, fontSize:21, color:meta.color, marginBottom:14, direction:"rtl" }}>{grammarTip.title}</h2>
              </div>
              {/* النصيحة */}
              <div style={{ background:"hsl(var(--card))", border:`2px solid hsl(var(--border))`, borderRadius:16, padding:"18px 20px", marginBottom:14, direction:"rtl" }}>
                <p style={{ fontSize:15, lineHeight:1.8, color:"hsl(var(--foreground))", margin:0 }}>{grammarTip.tip}</p>
              </div>
              {/* المثال */}
              <div style={{ background:`${meta.color}10`, border:`2px solid ${meta.color}40`, borderRadius:16, padding:"14px 20px", marginBottom:24, textAlign:"center" }}>
                <div style={{ fontSize:11, fontWeight:700, color:meta.color, marginBottom:6 }}>مثال</div>
                <div style={{ fontSize:16, fontWeight:800, color:"hsl(var(--foreground))", direction:"ltr" }}>{grammarTip.example}</div>
              </div>
              <button onClick={()=>setShowGrammarTip(false)}
                style={{ width:"100%", padding:"15px", background:`linear-gradient(135deg, ${lightColor(meta.color)}, ${meta.color})`, color:"white", border:"none", borderRadius:16, fontWeight:800, fontSize:16, cursor:"pointer", boxShadow:`0 5px 0 ${meta.color}99` }}>
                فهمت، لنبدأ! 🚀
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* ── لوحة تمهيدية لدرس الدمبل (تمرين إضافي) ── */}
        {showPracticeIntro && phase === "playing" && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}}
            style={{ position:"fixed", inset:0, background:"hsl(var(--background))", zIndex:80, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
            <motion.div initial={{scale:0.9,y:20}} animate={{scale:1,y:0}} className="text-center max-w-sm mx-auto">
              <div style={{ display:"flex", justifyContent:"center", marginBottom:12 }}>
                <motion.div animate={{ y:[0,-8,0], rotate:[0,-5,5,0] }} transition={{ repeat:Infinity, duration:2 }} style={{ fontSize:64 }}>🏋️</motion.div>
              </div>
              <div style={{ display:"inline-block", background:`${meta.color}18`, color:meta.color, fontWeight:800, fontSize:13, padding:"5px 16px", borderRadius:20, marginBottom:14 }}>
                🏋️ تمرين إضافي خاص بك
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color:meta.color }}>قوِّ مهاراتك!</h2>
              <p className="text-muted-foreground mb-7" style={{ direction:"rtl", lineHeight:1.8, fontSize:14.5 }}>
                هذا التمرين الإضافي سيساعدك على اكتساب <b>كلمات جديدة</b> ويُمرّنك أكثر على <b>تكوين الجمل</b> في موضوع هذه الوحدة — حتى ترسّخ ما تعلّمته وتصبح أكثر إتقاناً. 💪
              </p>
              <button onClick={()=>setShowPracticeIntro(false)}
                style={{ width:"100%", padding:"15px", background:`linear-gradient(135deg, ${lightColor(meta.color)}, ${meta.color})`, color:"white", border:"none", borderRadius:16, fontWeight:800, fontSize:16, cursor:"pointer", boxShadow:`0 5px 0 ${meta.color}99` }}>
                هيا نبدأ التمرين 🚀
              </button>
            </motion.div>
          </motion.div>
        )}

        {phase === "playing" && <>
          {/* Top bar — عصري زجاجي (قلوب · شريط تقدّم · إغلاق) */}
          <div style={{
            display:"flex", alignItems:"center", gap:12, padding:"10px 14px", marginBottom:18,
            position:"sticky", top:10, zIndex:20, flexShrink:0,
            background:"hsl(var(--sidebar) / 0.78)",
            backdropFilter:"blur(24px) saturate(180%)",
            WebkitBackdropFilter:"blur(24px) saturate(180%)",
            border:"1px solid hsl(var(--sidebar-border) / 0.5)",
            borderRadius:20,
            boxShadow:"0 6px 24px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.05) inset",
          }}>
            {/* القلوب — يسار */}
            {proLoaded && <Hearts count={hearts} isPro={isPro}/>}
            {/* شريط التقدم */}
            <div style={{ flex:1, height:12, background:"hsl(var(--muted) / 0.6)", borderRadius:10, overflow:"hidden", minWidth:0 }}>
              <motion.div animate={{ width:`${progress}%` }} style={{ height:"100%", background:`linear-gradient(90deg, ${meta.color}, ${lightColor(meta.color)})`, borderRadius:10, boxShadow:`0 0 12px ${meta.color}80` }} transition={{ type:"spring", stiffness:120, damping:20 }}>
                {/* لمعة علوية */}
                <div style={{ height:"38%", margin:"2px 6px 0", background:"rgba(255,255,255,0.4)", borderRadius:6 }}/>
              </motion.div>
            </div>
            {/* زر الإغلاق — يمين */}
            <button onClick={()=>setShowExitConfirm(true)} style={{ width:30, height:30, borderRadius:"50%", background:"hsl(var(--muted) / 0.5)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:17, color:"hsl(var(--muted-foreground))" }}>✕</button>
          </div>

          {/* شارة مرحلة التدرّج (للدروس العادية فقط) */}
          {!meta.isReview && !meta.isChallenge && !meta.isPractice && !isJumpMode && subLesson >= 0 && subLesson <= 3 && (
            <div style={{ display:"flex", justifyContent:"center", marginBottom:14, flexShrink:0 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:`${meta.color}14`, border:`1.5px solid ${meta.color}35`, borderRadius:20, padding:"5px 14px" }}>
                <span style={{ fontSize:13, fontWeight:800, color:meta.color }}>
                  {["①","②","③","④"][subLesson]} {STAGE_NAMES[subLesson]}
                </span>
                <span style={{ fontSize:11, color:"hsl(var(--muted-foreground))" }}>· {STAGE_DESC[subLesson]}</span>
              </div>
            </div>
          )}

          {/* Main content area */}
          <div style={{ overflowY:"auto", display:"flex", flexDirection:"column", paddingBottom:16 }}>
            {/* Question — يبقى ظاهر حتى بعد الإجابة */}
            <AnimatePresence mode="wait" initial={false}>
              {ex && (
                <motion.div key={ex.id}
                  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
                  transition={{duration:0.18,ease:"easeInOut"}}
                  style={{width:"100%"}}>
                  {ex.type==="word_order"    && <WordOrderQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="translate"     && <TranslateQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="listen_select" && <ListenQ     ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="picture_match" && <PictureQ    ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="fill_blank"    && <FillBlankQ  ex={ex} color={meta.color} onAnswer={handleAnswer}/>}
                  {ex.type==="matching"      && <MatchingQ   ex={ex} color={meta.color} onAnswer={handleAnswer} onMatchError={(en, ar) => {
                    if (!practiceMode) addReviewItem({ correct: en, question: ar, unitTitle: meta.unitTitle ?? "" });
                  }}/>}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Streak popup — رسالة تحفيز (موضع مناسب أعلى الشاشة) */}
          <AnimatePresence>
            {showStreakPop && (
              <motion.div
                initial={{ opacity:0, scale:0.6, y:-10 }} animate={{ opacity:1, scale:1, y:0 }} exit={{ opacity:0, scale:0.6, y:-10 }}
                style={{ position:"fixed", top:"calc(76px + env(safe-area-inset-top, 0px))", left:0, right:0, zIndex:50,
                  display:"flex", justifyContent:"center", pointerEvents:"none", padding:"0 16px" }}>
                <div style={{
                  background:`linear-gradient(135deg, ${lightColor(meta.color)}, ${meta.color})`,
                  color:"white", fontWeight:900, fontSize:17, padding:"10px 22px", borderRadius:18,
                  whiteSpace:"nowrap", boxShadow:`0 6px 22px ${meta.color}70`,
                  border:"2px solid rgba(255,255,255,0.4)", display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:22 }}>🔥</span>
                  <span>{streak} إجابات متتالية!</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feedback bar — عرض كامل، الشخصية مخفية */}
          <div style={{ flexShrink:0, paddingBottom:8 }}>
            <AnimatePresence>
              {feedback && (
                <motion.div key="fb" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:16}}>
                  <FeedbackBar correct={feedback.ok} explanation={feedback.explanation} correctAnswer={feedback.correctAnswer} onNext={handleNext} color={meta.color}/>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>}

        {/* Exit confirmation modal */}
        <AnimatePresence>
          {showExitConfirm && (
            <motion.div
              initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              onClick={()=>setShowExitConfirm(false)}
              style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:60, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
              <motion.div
                initial={{scale:0.85,y:20}} animate={{scale:1,y:0}} exit={{scale:0.85,y:20}}
                onClick={e=>e.stopPropagation()}
                style={{ background:"hsl(var(--card))", borderRadius:24, padding:"28px 24px", maxWidth:340, width:"100%", textAlign:"center", border:"2px solid hsl(var(--border))" }}>
                <div style={{ fontSize:52, marginBottom:12 }}>🛑</div>
                <h3 style={{ fontWeight:900, fontSize:19, marginBottom:8 }}>انتظر، لا ترحل!</h3>
                <p style={{ color:"hsl(var(--muted-foreground))", fontSize:14, lineHeight:1.6, marginBottom:24 }}>
                  ستفقد تقدّم هذا الدرس إذا غادرت الآن
                </p>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  <button onClick={()=>setShowExitConfirm(false)}
                    style={{ width:"100%", padding:"13px", background:meta.color, color:"white", border:"none", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>
                    تابع التعلم 💪
                  </button>
                  <button onClick={()=>setLocation("/roadmap")}
                    style={{ width:"100%", padding:"13px", background:"transparent", border:"2px solid #dc2626", color:"#dc2626", borderRadius:14, fontWeight:800, fontSize:15, cursor:"pointer" }}>
                    إنهاء الجلسة
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
