export interface LessonMeta {
  arabic: string;
  icon: string;
  objectives: string[];
}

const META: Record<string, LessonMeta> = {
  // ── A1 Beginner ──
  "Greetings & Introductions": {
    arabic: "التحيات والتعارف", icon: "👋",
    objectives: [
      "تعلّم كيف تُحيّي الآخرين بالإنجليزية (Hello, Hi, Good morning...)",
      "تقديم نفسك: اسمك، عمرك، جنسيتك",
      "استخدام عبارات المجاملة الأساسية (Nice to meet you, How are you?)",
      "الفرق بين التحية الرسمية وغير الرسمية",
    ],
  },
  "The Verb 'To Be'": {
    arabic: "فعل 'يكون' (am/is/are)", icon: "📝",
    objectives: [
      "فهم فعل الكينونة: am / is / are وكيف يُستخدم مع الضمائر",
      "بناء جمل وصفية بسيطة (I am happy, She is a teacher)",
      "تحويل الجملة إلى نفي (I am not, He is not)",
      "صياغة أسئلة باستخدام is/am/are (Are you...? Is he...?)",
    ],
  },
  "Numbers & Counting": {
    arabic: "الأرقام والعد", icon: "🔢",
    objectives: [
      "حفظ الأرقام من 1 إلى 100 بالإنجليزية",
      "الأعداد الترتيبية: first, second, third...",
      "قراءة التواريخ والأوقات بالأرقام",
      "استخدام الأرقام في الحياة اليومية (أسعار، هواتف، عناوين)",
    ],
  },
  "Colors & Descriptions": {
    arabic: "الألوان والأوصاف", icon: "🎨",
    objectives: [
      "تسمية الألوان الأساسية والثانوية بالإنجليزية",
      "وصف الأشياء باستخدام الصفات (big, small, old, new)",
      "ترتيب الصفات قبل الاسم (a big red car)",
      "استخدام الصفات مع فعل to be (The sky is blue)",
    ],
  },
  "My Daily Routine": {
    arabic: "روتيني اليومي", icon: "⏰",
    objectives: [
      "أفعال الروتين اليومي (wake up, have breakfast, go to work)",
      "استخدام المضارع البسيط للعادات والروتين",
      "تعبيرات الوقت (in the morning, at noon, before bed)",
      "صياغة جمل عن عاداتك اليومية",
    ],
  },
  "Family Members": {
    arabic: "أفراد العائلة", icon: "👨‍👩‍👧‍👦",
    objectives: [
      "أسماء أفراد العائلة بالإنجليزية (mother, father, sibling...)",
      "وصف العلاقات العائلية (my brother's wife = my sister-in-law)",
      "ضمائر الملكية: my, your, his, her, our, their",
      "الحديث عن عائلتك بجمل بسيطة",
    ],
  },

  // ── A2 Elementary ──
  "Articles: A, An, The": {
    arabic: "التعريف والتنكير", icon: "📌",
    objectives: [
      "متى تستخدم 'a' و 'an' مع الأسماء النكرة",
      "متى تستخدم 'the' للإشارة إلى شيء محدد",
      "الأسماء التي لا تحتاج إلى أداة تعريف (no article)",
      "تمييز الأخطاء الشائعة في استخدام المحددات",
    ],
  },
  "Past Simple Tense": {
    arabic: "الماضي البسيط", icon: "⏪",
    objectives: [
      "تصريف الأفعال المنتظمة في الماضي (worked, played, visited)",
      "الأفعال الشاذة الشائعة وحفظها (go→went, eat→ate, see→saw)",
      "صياغة النفي في الماضي (didn't + فعل مضارع)",
      "طرح أسئلة في الماضي باستخدام Did",
    ],
  },
  "Food & Restaurants": {
    arabic: "الطعام والمطاعم", icon: "🍽️",
    objectives: [
      "مفردات الطعام والشراب الشائعة",
      "التعامل في المطعم: طلب الطعام والدفع",
      "أسماء الوجبات (breakfast, lunch, dinner) والمكونات",
      "التعبير عن التفضيلات (I like / I don't like / I prefer)",
    ],
  },
  "Asking for Directions": {
    arabic: "طلب الاتجاهات", icon: "🗺️",
    objectives: [
      "مفردات الاتجاهات: turn left/right, go straight, cross...",
      "كيف تطلب الاتجاهات بأدب (Excuse me, could you tell me...?)",
      "وصف الموقع باستخدام حروف الجر (next to, opposite, between)",
      "فهم التعليمات وإعطاؤها على الخريطة",
    ],
  },
  "Present Continuous Tense": {
    arabic: "المضارع المستمر", icon: "⏩",
    objectives: [
      "بناء المضارع المستمر: am/is/are + فعل + ing",
      "الفرق بين المضارع البسيط والمستمر",
      "استخدامه للأحداث الجارية الآن (I am reading this now)",
      "استخدامه للترتيبات المستقبلية (I am meeting her tomorrow)",
    ],
  },
  "Shopping & Money": {
    arabic: "التسوق والمال", icon: "🛒",
    objectives: [
      "مفردات التسوق: price, receipt, discount, size...",
      "كيف تسأل عن السعر وتتفاوض بالإنجليزية",
      "التعامل مع العملات والمبالغ",
      "جمل شائعة في المتاجر (Can I try this on? Do you have it in...?)",
    ],
  },

  // ── B1 Intermediate ──
  "Present Perfect Tense": {
    arabic: "المضارع التام", icon: "✅",
    objectives: [
      "بناء المضارع التام: have/has + تصريف ثالث للفعل",
      "الفرق بين المضارع التام والماضي البسيط",
      "استخدام: ever, never, already, yet, just, for, since",
      "التعبير عن تجارب الحياة (Have you ever been to...?)",
    ],
  },
  "Talking About the Future": {
    arabic: "الحديث عن المستقبل", icon: "🔮",
    objectives: [
      "الفرق بين will و going to وأين يُستخدم كل منهما",
      "المضارع المستمر للترتيبات المستقبلية",
      "التنبؤات والقرارات اللحظية (I think it will rain / I'll have the salad)",
      "عبارات زمنية مستقبلية (tomorrow, next week, in five years)",
    ],
  },
  "Comparatives & Superlatives": {
    arabic: "المقارنة والتفضيل", icon: "⚖️",
    objectives: [
      "قاعدة المقارنة: er + than أو more + صفة + than",
      "قاعدة التفضيل: the + est أو the most + صفة",
      "الصفات الشاذة: good→better→best / bad→worse→worst",
      "استخدام as...as للتعبير عن التساوي",
    ],
  },
  "Modals: Can, Could, Should, Must": {
    arabic: "الأفعال المساعدة", icon: "🎯",
    objectives: [
      "can / can't للقدرة والإمكانية في الحاضر",
      "could / couldn't للقدرة في الماضي أو الطلب المؤدب",
      "should / shouldn't للنصيحة والاقتراح",
      "must / mustn't للإلزام والضرورة أو التحذير",
    ],
  },
  "Reading: The Digital Age": {
    arabic: "العصر الرقمي", icon: "💻",
    objectives: [
      "مفردات التكنولوجيا والإنترنت والحياة الرقمية",
      "مهارة قراءة النصوص الإعلامية واستيعاب المعلومات",
      "التعبير عن الرأي حول التكنولوجيا",
      "كلمات ربط النصوص: however, furthermore, in contrast",
    ],
  },
  "Everyday Phrasal Verbs": {
    arabic: "الأفعال المركبة اليومية", icon: "🔗",
    objectives: [
      "مفهوم الفعل المركب (phrasal verb) وكيف يتغير معناه",
      "أشهر الأفعال المركبة: wake up, give up, look after, turn on/off",
      "الفرق بين الأفعال المركبة القابلة للفصل وغير القابلة",
      "استخدام الأفعال المركبة في جمل طبيعية",
    ],
  },

  // ── B2 Upper Intermediate ──
  "Passive Voice": {
    arabic: "المبني للمجهول", icon: "🔄",
    objectives: [
      "كيف تحوّل جملة من المبني للمعلوم إلى المجهول",
      "المبني للمجهول في الأزمنة المختلفة (was built, is made, has been sold)",
      "متى نستخدم المبني للمجهول وما سبب أهميته",
      "حذف الفاعل (by...) عندما لا يكون مهماً",
    ],
  },
  "Conditionals: Types 1, 2 & 3": {
    arabic: "جمل الشرط", icon: "🔀",
    objectives: [
      "الشرط النوع الأول: If + present → will (محتمل الحدوث)",
      "الشرط النوع الثاني: If + past → would (افتراضي)",
      "الشرط النوع الثالث: If + past perfect → would have (لو كان...)",
      "الشرط المختلط والتعابير: unless, as long as, provided that",
    ],
  },
  "Reported Speech": {
    arabic: "الكلام المنقول", icon: "💬",
    objectives: [
      "تحويل الكلام المباشر إلى غير المباشر (backshift للأزمنة)",
      "تغيير الضمائر وتعبيرات الزمان والمكان",
      "نقل الأسئلة والأوامر والطلبات",
      "أفعال القول الشائعة: say, tell, ask, explain, warn",
    ],
  },
  "Academic Reading: Climate Change": {
    arabic: "قراءة: تغير المناخ", icon: "🌍",
    objectives: [
      "مفردات البيئة والتغير المناخي بالإنجليزية الأكاديمية",
      "استراتيجيات القراءة السريعة وتحديد الفكرة الرئيسية",
      "تحليل حجج النصوص الأكاديمية ومناقشتها",
      "التعبير عن المشاكل البيئية وحلولها",
    ],
  },
  "Business English Essentials": {
    arabic: "إنجليزية الأعمال", icon: "💼",
    objectives: [
      "مفردات بيئة العمل والاجتماعات والمراسلات الرسمية",
      "كيف تكتب إيميلاً رسمياً بالإنجليزية",
      "عبارات العروض التقديمية والمفاوضات",
      "الفرق بين الأسلوب الرسمي وغير الرسمي في السياق المهني",
    ],
  },
  "Idioms & Expressions": {
    arabic: "التعابير الاصطلاحية", icon: "💡",
    objectives: [
      "ما هي الـ idioms ولماذا لا تُترجم حرفياً",
      "أشهر 20 تعبيراً اصطلاحياً في الإنجليزية اليومية",
      "استخدام التعابير في السياق الصحيح",
      "التفريق بين التعبير الاصطلاحي والمثل (proverb)",
    ],
  },

  // ── C1 Advanced ──
  "Advanced Modal Verbs": {
    arabic: "الأفعال المساعدة المتقدمة", icon: "🧠",
    objectives: [
      "الاستخدامات الدقيقة لـ must, should, may, might, can, could, would",
      "الاستخدام الماضوي: should have, could have, might have (لو كان...)",
      "التعبير عن الاحتمال والتوقع والضرورة بدقة عالية",
      "أسلوب الإقناع والتردد والتخمين بالأفعال المساعدة",
    ],
  },
  "Discourse Markers & Cohesion": {
    arabic: "أدوات الربط والترابط", icon: "🧩",
    objectives: [
      "أدوات الربط لإضافة المعلومات: furthermore, in addition, moreover",
      "أدوات التناقض: however, nevertheless, in contrast, despite",
      "أدوات السببية والنتيجة: consequently, therefore, as a result",
      "بناء نص متماسك ومتسق باستخدام أدوات الربط المناسبة",
    ],
  },
  "Formal Academic Writing": {
    arabic: "الكتابة الأكاديمية", icon: "📄",
    objectives: [
      "هيكل المقال الأكاديمي: مقدمة، جسم، خاتمة",
      "كيف تصيغ حجة قوية وتدعمها بأدلة",
      "الأسلوب الرسمي: تجنّب الاختصارات، الإيجاز، الدقة",
      "الاقتباس والتوثيق وتجنب الانتحال",
    ],
  },
  "Advanced Listening: Accents & Speed": {
    arabic: "الاستماع المتقدم", icon: "🎧",
    objectives: [
      "كيفية التكيّف مع لهجات إنجليزية مختلفة (بريطانية، أمريكية، أسترالية)",
      "استيعاب الكلام السريع والحوارات الطبيعية",
      "استراتيجيات الاستماع الفعّال واستخراج المعلومات",
      "التعرف على الـ connected speech (linking, elision, assimilation)",
    ],
  },
  "Argumentation & Critical Thinking": {
    arabic: "التفكير النقدي", icon: "⚡",
    objectives: [
      "بناء حجة منطقية متماسكة بالإنجليزية",
      "الرد على الحجج المضادة ودحضها بأدب",
      "التمييز بين الرأي والحقيقة والاستنتاج",
      "عبارات النقاش المتقدمة: I would argue that, It could be contended...",
    ],
  },
  "Advanced Vocabulary: Collocations": {
    arabic: "المتلازمات اللغوية", icon: "📖",
    objectives: [
      "مفهوم الـ collocation: كلمتان تلازمان بعضهما (make a decision / take a risk)",
      "الأخطاء الشائعة في المتلازمات وكيف تتجنبها",
      "متلازمات الفعل + الاسم والصفة + الاسم",
      "توسيع المفردات عبر تعلّم الكلمات ضمن سياقها",
    ],
  },

  // ── C2 Proficiency ──
  "Stylistic Devices & Rhetoric": {
    arabic: "الأساليب البلاغية", icon: "🎭",
    objectives: [
      "الاستعارة والتشبيه (metaphor, simile) في الإنجليزية",
      "أساليب الإقناع البلاغية: ethos, pathos, logos",
      "التكرار والتوازي البنيوي لتعزيز التأثير",
      "تحليل أثر الأساليب البلاغية في النصوص الأصيلة",
    ],
  },
  "Literary Texts: Analysis & Appreciation": {
    arabic: "تحليل النصوص الأدبية", icon: "📚",
    objectives: [
      "قراءة وتحليل نصوص أدبية إنجليزية أصيلة",
      "تمييز الأنواع الأدبية: شعر، قصة قصيرة، رواية، مسرحية",
      "تحليل الشخصيات والحبكة والرمزية",
      "الكتابة النقدية الأدبية باستخدام المصطلحات الأكاديمية",
    ],
  },
  "Nuanced Vocabulary: Register & Connotation": {
    arabic: "دقة المفردات والأسلوب", icon: "🎯",
    objectives: [
      "الفرق بين الكلمات ذات المعنى المتشابه (synonym nuance)",
      "مفهوم الـ register: رسمي / غير رسمي / تقني / عامي",
      "الدلالات الضمنية للكلمات (connotation: positive, negative, neutral)",
      "اختيار الكلمة المثلى حسب السياق والجمهور",
    ],
  },
  "Advanced Conversation: Debate Skills": {
    arabic: "مهارات النقاش", icon: "🗣️",
    objectives: [
      "كيف تُدير نقاشاً باحترافية بالإنجليزية",
      "عبارات المقاطعة المؤدبة والتحول في الكلام",
      "تقنيات الإقناع والتفاوض في النقاش",
      "استخدام الأدلة والأمثلة لدعم وجهة نظرك",
    ],
  },
  "The English of Innovation": {
    arabic: "لغة الابتكار والتقنية", icon: "🚀",
    objectives: [
      "مفردات ريادة الأعمال والتقنية والابتكار",
      "التحدث عن الأفكار الجديدة والمشاريع الناشئة",
      "اللغة المستخدمة في عالم الشركات الناشئة (startups)",
      "تقديم pitch مقنع لفكرة أو منتج",
    ],
  },
  "Writing for Publication": {
    arabic: "الكتابة للنشر", icon: "✍️",
    objectives: [
      "الفرق بين أنواع الكتابة: مقال، تقرير، بحث، مراجعة",
      "عملية الكتابة الكاملة: تخطيط، تحرير، مراجعة",
      "الأسلوب المناسب لنشر الكتابة في مجلات أو مواقع إلكترونية",
      "الاستفادة من التغذية الراجعة وتحسين النص",
    ],
  },
};

const ARABIC_NAMES: Record<string, { arabic: string; icon: string }> = {
  "Food & Drink": { arabic: "الطعام والشراب", icon: "🍔" },
  "Simple Questions": { arabic: "الأسئلة البسيطة", icon: "❓" },
  "Basic Prepositions": { arabic: "حروف الجر", icon: "📍" },
  "The Alphabet & Phonics": { arabic: "الأبجدية والأصوات", icon: "🔤" },
  "Articles: A, An, The": { arabic: "أدوات التعريف", icon: "📌" },
  "Past Simple Tense": { arabic: "الماضي البسيط", icon: "⏪" },
  "Present Continuous": { arabic: "المضارع المستمر", icon: "⏩" },
  "Countable & Uncountable": { arabic: "الأسماء العددية", icon: "🔢" },
  "Comparative Adjectives": { arabic: "صفات المقارنة", icon: "⚖️" },
  "Future: Will & Going To": { arabic: "المستقبل", icon: "🔮" },
  "Modal Verbs: Can & Must": { arabic: "الأفعال المساعدة", icon: "🎯" },
  "Talking About Places": { arabic: "وصف الأماكن", icon: "🗺️" },
  "Shopping & Money": { arabic: "التسوق والمال", icon: "🛒" },
  "Weather & Seasons": { arabic: "الطقس والفصول", icon: "🌤️" },
  "Present Perfect": { arabic: "المضارع التام", icon: "✅" },
  "Past Continuous": { arabic: "الماضي المستمر", icon: "⏮️" },
  "Reported Speech": { arabic: "الكلام المنقول", icon: "💬" },
  "Conditionals 1 & 2": { arabic: "جمل الشرط", icon: "🔀" },
  "Passive Voice": { arabic: "المبني للمجهول", icon: "🔄" },
  "Relative Clauses": { arabic: "الجمل الموصولة", icon: "🔗" },
  "Vocabulary: Travel & Tourism": { arabic: "السفر والسياحة", icon: "✈️" },
  "Reading: News Articles": { arabic: "قراءة الأخبار", icon: "📰" },
  "Listening Skills": { arabic: "مهارات الاستماع", icon: "🎧" },
  "Writing Paragraphs": { arabic: "كتابة الفقرات", icon: "✍️" },
  "Advanced Conditionals": { arabic: "الشرط المتقدم", icon: "🔀" },
  "Modals: Advanced Use": { arabic: "الأفعال المساعدة المتقدمة", icon: "💭" },
  "Discourse Markers": { arabic: "أدوات الربط", icon: "🔗" },
  "Idiomatic Expressions": { arabic: "التعابير الاصطلاحية", icon: "💡" },
  "Formal vs Informal": { arabic: "الرسمي وغير الرسمي", icon: "🎭" },
  "Reading: Academic Texts": { arabic: "النصوص الأكاديمية", icon: "📚" },
  "Listening: Lectures": { arabic: "الاستماع للمحاضرات", icon: "🎓" },
  "Business English": { arabic: "إنجليزية الأعمال", icon: "💼" },
  "Essay Writing": { arabic: "كتابة المقال", icon: "📝" },
  "Vocabulary: Academic Word List": { arabic: "المفردات الأكاديمية", icon: "📖" },
  "Inversion & Emphasis": { arabic: "القلب والتوكيد", icon: "🔤" },
  "Advanced Passive Structures": { arabic: "المبني للمجهول المتقدم", icon: "🔄" },
  "Subjunctive Mood": { arabic: "المضارع الافتراضي", icon: "🤔" },
  "Hedging & Vagueness": { arabic: "أسلوب التحوط", icon: "🌫️" },
  "Cohesion & Coherence": { arabic: "التماسك والترابط", icon: "🧩" },
  "Formal Academic Writing": { arabic: "الكتابة الأكاديمية", icon: "🎓" },
  "Advanced Listening: Accents & Speed": { arabic: "الاستماع المتقدم", icon: "🎧" },
  "Argumentation & Critical Thinking": { arabic: "الحجة والتفكير الناقد", icon: "🧠" },
  "Advanced Vocabulary: Collocations": { arabic: "المتلازمات اللغوية", icon: "📚" },
  "Reading: Complex Texts": { arabic: "النصوص المعقدة", icon: "📖" },
  "Stylistic Devices & Rhetoric": { arabic: "الأساليب البلاغية", icon: "✨" },
  "Literary Texts: Analysis & Appreciation": { arabic: "تحليل النصوص الأدبية", icon: "📜" },
  "Nuanced Vocabulary: Register & Connotation": { arabic: "دقة المفردات", icon: "💎" },
  "Advanced Conversation: Debate Skills": { arabic: "مهارات النقاش", icon: "🗣️" },
  "The English of Innovation": { arabic: "لغة الابتكار", icon: "💡" },
  "Numbers & Counting": { arabic: "الأرقام والعد", icon: "🔢" },
  "Colors & Descriptions": { arabic: "الألوان والأوصاف", icon: "🎨" },
  "My Daily Routine": { arabic: "روتيني اليومي", icon: "⏰" },
  "Family Members": { arabic: "أفراد العائلة", icon: "👨‍👩‍👧‍👦" },
  "The Verb \'To Be\'": { arabic: "فعل 'يكون'", icon: "📝" },
  "Writing for Publication": { arabic: "الكتابة للنشر", icon: "✍️" },
};

export function getLessonMeta(title: string): LessonMeta {
  const extra = ARABIC_NAMES[title];
  if (META[title]) return META[title];
  if (extra) return { ...extra, objectives: [] };
  return { arabic: title, icon: "📚", objectives: [] };
}
