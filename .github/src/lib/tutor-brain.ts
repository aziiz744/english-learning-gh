// Rule-based English tutor brain — no API key needed
// Pattern matching on Arabic + English keywords → Arabic responses

export interface TutorResponse {
  text: string;
  suggestions?: string[];
}

interface Rule {
  patterns: RegExp[];
  response: () => TutorResponse;
}

const rules: Rule[] = [
  // ─── Greetings ───────────────────────────────────────────
  {
    patterns: [/مرحب|هلا|السلام|هاي|اهلين|سلام|hi\b|hello/i],
    response: () => ({
      text: "أهلاً وسهلاً! 🦉 أنا المساعد الإنجليزي الخاص بك. اسألني أي شيء عن قواعد الإنجليزية أو المفردات أو حتى تلميحات للدروس!",
      suggestions: ["ما الفرق بين was و were؟", "متى أستخدم a و an؟", "كيف أتحسن في الإنجليزية؟"],
    }),
  },
  // ─── Was / Were ───────────────────────────────────────────
  {
    patterns: [/was.{0,10}were|were.{0,10}was/i],
    response: () => ({
      text: `**was vs were** 🔤

• **was** → مع: I, he, she, it
  - *I was tired.* (كنت متعباً)
  - *She was happy.* (كانت سعيدة)

• **were** → مع: you, we, they
  - *They were late.* (كانوا متأخرين)
  - *We were together.* (كنا معاً)

💡 **حيلة**: إذا كان الضمير يقبل "are" في المضارع → استخدم **were** في الماضي`,
      suggestions: ["ما الفرق بين do و does؟", "كيف أكوّن السؤال في الماضي؟"],
    }),
  },
  // ─── Do / Does ───────────────────────────────────────────
  {
    patterns: [/do.{0,10}does|does.{0,10}do/i],
    response: () => ({
      text: `**do vs does** 🔤

• **do** → مع: I, you, we, they
  - *Do you like coffee?*

• **does** → مع: he, she, it
  - *Does she speak Arabic?*

💡 **قاعدة**: حين تستخدم does، الفعل يبقى مجرداً (بدون s)
  - ✅ *Does he **play** football?*
  - ❌ *Does he **plays** football?*`,
      suggestions: ["ما الفرق بين is/am/are؟", "كيف أنفي الجملة؟"],
    }),
  },
  // ─── Is / Am / Are ───────────────────────────────────────
  {
    patterns: [/\bam\b.{0,15}\bis\b|\bis\b.{0,15}\bare\b|am.{0,10}are|is.*am.*are/i, /متى.{0,10}(am|is|are)/i],
    response: () => ({
      text: `**am / is / are** 🔤

| الضمير | الفعل |
|--------|-------|
| I | **am** |
| He / She / It | **is** |
| You / We / They | **are** |

**أمثلة:**
- *I **am** a student.* — أنا طالب
- *He **is** my friend.* — هو صديقي
- *They **are** happy.* — هم سعداء`,
      suggestions: ["ما الفرق بين was و were؟", "كيف أكوّن النفي؟"],
    }),
  },
  // ─── Articles a / an / the ───────────────────────────────
  {
    patterns: [/\ba\b.{0,10}\ban\b|\ban\b.{0,10}\ba\b|\bthe\b.{0,15}متى|متى.{0,15}\bthe\b|article|نكرة|معرفة/i],
    response: () => ({
      text: `**a / an / the** — أدوات التعريف والتنكير 🔤

• **a** → قبل كلمات تبدأ بصوت ساكن
  - *a book, a car, a university* (الـ u هنا صوت /ju/)

• **an** → قبل كلمات تبدأ بصوت حرف علة (a, e, i, o, u)
  - *an apple, an hour* (الـ h صامتة)

• **the** → للحديث عن شيء محدد معروف للطرفين
  - *The sun is bright.* (الشمس — وحيدة)
  - *Pass me the salt.* (الملح — الذي أمامنا)

💡 **لا نستخدم the مع**: الدول، المدن، والأسماء العلم بشكل عام`,
      suggestions: ["متى لا نستخدم the؟", "ما الفرق بين some و any؟"],
    }),
  },
  // ─── Present Simple ───────────────────────────────────────
  {
    patterns: [/مضارع بسيط|present simple/i],
    response: () => ({
      text: `**المضارع البسيط — Present Simple** 🕐

**الاستخدام:**
- العادات والروتين: *I wake up at 7 every day.*
- الحقائق: *The sun rises in the east.*
- المشاعر الثابتة: *I love Arabic food.*

**التكوين:**
- I/You/We/They + فعل مجرد: *I **go**, they **play***
- He/She/It + فعل + **s**: *He **goes**, she **plays***

**النفي:** don't / doesn't + فعل مجرد
- *I **don't** like coffee.*
- *She **doesn't** eat meat.*`,
      suggestions: ["ما الفرق بين Present Simple و Present Continuous؟"],
    }),
  },
  // ─── Present Continuous ───────────────────────────────────
  {
    patterns: [/present continuous|مضارع مستمر/i],
    response: () => ({
      text: `**المضارع المستمر — Present Continuous** 🔄

**الاستخدام:**
- شيء يحدث الآن: *I am studying right now.*
- خطة مستقبلية: *She is leaving tomorrow.*

**التكوين:** am/is/are + فعل + **ing**
- *I **am eating**.*
- *He **is running**.*
- *They **are sleeping**.*

⚠️ **أفعال لا تأتي بـ -ing** (state verbs):
*love, know, believe, want, need, have, see, hear*

✅ *I **know** the answer.* (وليس: I am knowing)`,
      suggestions: ["ما الفرق بين Present Simple و Present Continuous؟", "ما هي أفعال الحالة؟"],
    }),
  },
  // ─── Past Simple ─────────────────────────────────────────
  {
    patterns: [/past simple|ماضي بسيط|الماضي البسيط/i],
    response: () => ({
      text: `**الماضي البسيط — Past Simple** ⏪

**الاستخدام:** أحداث انتهت في وقت محدد في الماضي

**الأفعال المنتظمة:** أضف **-ed**
- *work → worked, play → played, study → studied*

**الأفعال الشاذة (irregular):**
| مضارع | ماضي |
|-------|------|
| go | went |
| eat | ate |
| come | came |
| see | saw |
| take | took |

**النفي:** didn't + فعل مجرد
- *I **didn't go** to school yesterday.*

**السؤال:** Did + فاعل + فعل مجرد?
- ***Did** you **eat** lunch?*`,
      suggestions: ["ما الفرق بين Past Simple و Present Perfect؟", "كيف أتذكر الأفعال الشاذة؟"],
    }),
  },
  // ─── Present Perfect ─────────────────────────────────────
  {
    patterns: [/present perfect|ماضٍ تام|ماضي تام/i],
    response: () => ({
      text: `**الماضي التام — Present Perfect** ✅

**التكوين:** have/has + **past participle**
- *I **have eaten**. She **has gone**.*

**الاستخدام:**
1. تجربة في الحياة: *I **have visited** Paris.* (Have you ever...?)
2. شيء انتهى مؤخراً: *She **has just left**.*
3. شيء بدأ وما زال: *I **have lived** here for 5 years.*

**الكلمات الدالة:**
- ever, never, already, just, yet, since, for

💡 **الفرق مع Past Simple:**
- Past Simple: وقت محدد → *I visited Paris **in 2019**.*
- Present Perfect: بدون وقت محدد → *I **have visited** Paris.*`,
      suggestions: ["ما الفرق بين for و since؟", "ما الفرق بين just و already و yet؟"],
    }),
  },
  // ─── Future ───────────────────────────────────────────────
  {
    patterns: [/مستقبل|future|will\b|going to/i],
    response: () => ({
      text: `**المستقبل في الإنجليزية** 🔮

**1. will + فعل مجرد** — قرار لحظي أو توقع:
- *I **will help** you.* (قررت الآن)
- *It **will rain** tomorrow.* (توقع)

**2. going to + فعل مجرد** — خطة مسبقة أو نية:
- *I **am going to travel** next week.* (قررت مسبقاً)
- *Look at those clouds — it **is going to rain**!* (دليل واضح)

**3. Present Continuous** — اتفاق محدد:
- *We **are meeting** at 6pm.* (موعد مرتب)

💡 **قاعدة سريعة:**
- لحظي → **will**
- مخطط → **going to**
- موعد محدد → **Present Continuous**`,
      suggestions: ["ما الفرق بين will و shall؟", "كيف أعبر عن الشرط بالمستقبل؟"],
    }),
  },
  // ─── Prepositions in/on/at ────────────────────────────────
  {
    patterns: [/حروف الجر|preposition|in.{0,8}on.{0,8}at|on.{0,8}at.{0,8}in/i, /متى.*\b(in|on|at)\b/i],
    response: () => ({
      text: `**حروف الجر: in / on / at** 🗺️

**للوقت:**
| حرف الجر | الاستخدام | مثال |
|-----------|-----------|------|
| **at** | وقت محدد | at 3pm, at noon |
| **on** | يوم / تاريخ | on Monday, on July 4th |
| **in** | شهر / سنة / موسم | in July, in 2024, in winter |

**للمكان:**
| حرف الجر | الاستخدام | مثال |
|-----------|-----------|------|
| **at** | نقطة محددة | at the door, at school |
| **on** | سطح | on the table, on the wall |
| **in** | داخل شيء | in the box, in the city |

💡 **استثناءات شائعة:**
- at home, at work, at school (وليس in)
- in the morning / afternoon / evening
- at night (استثناء!)`,
      suggestions: ["ما الفرق بين in time و on time؟", "كيف أستخدم for و since؟"],
    }),
  },
  // ─── Comparatives / Superlatives ─────────────────────────
  {
    patterns: [/comparati|superlati|مقارن|تفضيل|أكبر|أصغر|أفضل|أسوأ/i],
    response: () => ({
      text: `**المقارنة والتفضيل** 📊

**Comparative (مقارنة بين اثنين):**
- كلمات قصيرة: أضف **-er** + than → *taller than, bigger than*
- كلمات طويلة: **more** + صفة + than → *more beautiful than*

**Superlative (أفضل/أسوأ بين مجموعة):**
- كلمات قصيرة: **the** + صفة + **-est** → *the tallest, the biggest*
- كلمات طويلة: **the most** + صفة → *the most beautiful*

**أمثلة شاذة:**
| الصفة | Comparative | Superlative |
|-------|-------------|-------------|
| good | better | the best |
| bad | worse | the worst |
| far | farther/further | the farthest |
| little | less | the least |`,
      suggestions: ["كيف أستخدم as...as للمقارنة؟", "ما الفرق بين fewer و less؟"],
    }),
  },
  // ─── Conditionals ─────────────────────────────────────────
  {
    patterns: [/conditional|شرط|لو|if.{0,15}would|جملة شرطية/i],
    response: () => ({
      text: `**الجمل الشرطية — Conditionals** 🔀

**Zero Conditional** — حقيقة عامة:
*If you heat water, it boils.*

**First Conditional** — شرط محتمل:
*If it **rains**, I **will stay** home.*
(شرط مضارع → نتيجة بـ will)

**Second Conditional** — شرط غير محتمل (خيال):
*If I **were** rich, I **would travel** the world.*
(شرط ماضٍ → نتيجة بـ would)

**Third Conditional** — شرط في الماضي (لم يحدث):
*If I **had studied**, I **would have passed**.*
(شرط past perfect → نتيجة بـ would have)

💡 **قاعدة If I were** — نستخدم were (وليس was) في الثاني مع I`,
      suggestions: ["ما الفرق بين unless و if not؟", "كيف أستخدم wish للتمني؟"],
    }),
  },
  // ─── Passive Voice ─────────────────────────────────────────
  {
    patterns: [/passive|مبني للمجهول|المجهول/i],
    response: () => ({
      text: `**المبني للمجهول — Passive Voice** 🔄

**التكوين:** am/is/are/was/were + **past participle**

| زمن | مثال |
|-----|------|
| Present Simple | *The book **is written**.* |
| Past Simple | *The letter **was sent**.* |
| Present Continuous | *The house **is being built**.* |
| Present Perfect | *The work **has been done**.* |
| Future | *The car **will be fixed**.* |

**متى تستخدمه؟**
- الفاعل مجهول: *My phone **was stolen**.*
- التركيز على الحدث لا الفاعل: *English **is spoken** worldwide.*
- الأسلوب الرسمي والعلمي

**لإظهار الفاعل:** أضف **by**
- *The novel **was written by** Dickens.*`,
      suggestions: ["ما الفرق بين active و passive؟", "كيف أحول جملة إلى مبني للمجهول؟"],
    }),
  },
  // ─── Modal verbs ──────────────────────────────────────────
  {
    patterns: [/modal|can|could|must|should|may|might|would|shall|have to|need to|أفعال مساعدة/i],
    response: () => ({
      text: `**الأفعال المساعدة — Modal Verbs** ⚡

| الفعل | الاستخدام | مثال |
|-------|-----------|------|
| **can** | قدرة | I **can** swim. |
| **could** | قدرة ماضية / طلب مؤدب | **Could** you help me? |
| **must** | إلزام (من الشخص نفسه) | I **must** study. |
| **have to** | إلزام خارجي | I **have to** wear uniform. |
| **should** | نصيحة | You **should** sleep early. |
| **may** | إذن رسمي | **May** I come in? |
| **might** | احتمال ضعيف | It **might** rain. |
| **will** | مستقبل / إرادة | I **will** help you. |
| **would** | طلب مؤدب / خيال | I **would** like tea. |

💡 **قاعدة**: بعد كل modal → فعل مجرد دائماً (بدون to في معظمها)`,
      suggestions: ["ما الفرق بين must و have to؟", "كيف أعبر عن الاحتمال؟"],
    }),
  },
  // ─── Pronouns ─────────────────────────────────────────────
  {
    patterns: [/pronoun|ضمير|ضمائر/i],
    response: () => ({
      text: `**الضمائر — Pronouns** 👤

| الضمير | فاعل | مفعول | ملكية صفة | ملكية اسم |
|--------|------|-------|-----------|----------|
| I/me | I | me | my | mine |
| You | you | you | your | yours |
| He/him | he | him | his | his |
| She/her | she | her | her | hers |
| It | it | it | its | its |
| We/us | we | us | our | ours |
| They/them | they | them | their | theirs |

**أمثلة:**
- ***She** loves *him*.* (فاعل + مفعول)
- *This is **her** book.* (ملكية صفة)
- *This book is **hers**.* (ملكية اسم)`,
      suggestions: ["كيف أستخدم reflexive pronouns؟", "ما الفرق بين who و whom؟"],
    }),
  },
  // ─── Vocabulary tips ─────────────────────────────────────
  {
    patterns: [/مفردات|vocabulary|كلمات جديدة|أتذكر|حفظ الكلمات/i],
    response: () => ({
      text: `**نصائح لتعلم المفردات** 📚

**1. طريقة السياق** — تعلم الكلمة في جملة، ليس وحدها
- *بدل:* memorize → *استخدم:* "I need to **memorize** my speech"

**2. التجميع الموضوعي** — تعلم كلمات في مجموعات
- أسرة الطعام: *cook, bake, boil, fry, taste*

**3. قاعدة التكرار المتباعد (Spaced Repetition)**
- راجع الكلمة بعد: يوم، أسبوع، شهر

**4. استخدم الكلمة في 3 جمل** — لكل كلمة جديدة

**5. ربط الكلمات بصور ذهنية** — كلما كانت الصورة أغرب، كلما تذكرتها أكثر

**6. قراءة + استماع** — تعرض للكلمة في سياقات مختلفة

🎯 **هدف يومي**: 10 كلمات جديدة مع مراجعة 20 كلمة قديمة`,
      suggestions: ["ما الكلمات الأكثر استخداماً في الإنجليزية؟", "كيف أحسن نطقي؟"],
    }),
  },
  // ─── Pronunciation ────────────────────────────────────────
  {
    patterns: [/نطق|pronunciation|أقرأ|أتكلم|speak|تحدث/i],
    response: () => ({
      text: `**نصائح لتحسين النطق** 🗣️

**1. استمع بنشاط** — استمع وقلّد بدلاً من القراءة فقط
- موارد رائعة: TED Talks، BBC Learning English

**2. تدرب على الأصوات الصعبة:**
- الـ th: ضع لسانك بين أسنانك → *this, three, think*
- الـ v: احتك أسنانك العليا بشفتك السفلى → *very, voice*
- الـ p vs b: الهواء مع p → *pan vs ban*

**3. الإيقاع والتنغيم (Stress)**
- الكلمات الطويلة لها مقطع رئيسي مشدد: *pho-TO-gra-phy*

**4. اقرأ بصوت عالٍ يومياً** — 5 دقائق تكفي

**5. سجّل صوتك وقارنه** — الطريقة الأسرع للتحسن`,
      suggestions: ["ما الفرق بين British و American English؟", "كيف أتعلم Intonation؟"],
    }),
  },
  // ─── Common mistakes ──────────────────────────────────────
  {
    patterns: [/أخطاء شائعة|mistakes|خطأ شائع|غلطة/i],
    response: () => ({
      text: `**أشهر الأخطاء الشائعة للعرب** ⚠️

❌ *I am **agree*** → ✅ *I **agree***
(agree فعل وليس صفة)

❌ *She **don't** like coffee.* → ✅ *She **doesn't** like coffee.*

❌ *I have **18 years**.* → ✅ *I **am** 18 years old.*
(العمر بـ be، ليس have)

❌ *We **discussed about** the problem.* → ✅ *We **discussed** the problem.*
(discuss لا تحتاج about)

❌ *He is **more taller** than me.* → ✅ *He is **taller** than me.*

❌ *I will **go** to sleep **before** I brushed my teeth.* → ✅ *I will brush my teeth **before** I **go** to sleep.*

❌ *The informations are...* → ✅ *The information is...*
(information لا تُجمع)

❌ *I **am wanting** to eat.* → ✅ *I **want** to eat.*
(want لا تأتي بـ -ing)`,
      suggestions: ["ما الفرق بين make و do؟", "متى أستخدم to + فعل؟"],
    }),
  },
  // ─── Make vs Do ───────────────────────────────────────────
  {
    patterns: [/make.{0,10}do|do.{0,10}make|الفرق.*make|make.*الفرق/i],
    response: () => ({
      text: `**make vs do** 🛠️

**make** → إنشاء شيء، إنتاجه:
- make a cake / make a decision / make a mistake
- make money / make friends / make noise
- make a phone call / make a promise

**do** → أداء نشاط، عمل شيء:
- do homework / do exercise / do business
- do your best / do a favor / do research
- do the dishes / do cleaning

💡 **قاعدة عامة:**
- make = تنتج شيئاً ملموساً أو قراراً
- do = تؤدي نشاطاً أو واجباً

**أمثلة مقارنة:**
- *Can you **make** a list?* (تُنشئ القائمة)
- *Can you **do** the shopping?* (تؤدي المهمة)`,
      suggestions: ["ما الفرق بين say و tell و speak و talk؟"],
    }),
  },
  // ─── Tips for learning ────────────────────────────────────
  {
    patterns: [/كيف أتحسن|نصائح|أفضل طريقة|تعلم|level up|أرفع مستواي/i],
    response: () => ({
      text: `**أفضل استراتيجيات تعلم الإنجليزية** 🚀

**1. الاستمرارية** — 20 دقيقة كل يوم > ساعتان أسبوعياً

**2. المدخلات القابلة للفهم (i+1)**
- اقرأ واستمع لمحتوى أصعب منك بقليل فقط

**3. الإخراج (Output)**
- تكلم، اكتب، عبّر عن أفكارك بالإنجليزية

**4. لا تترجم كل كلمة**
- فكّر بالإنجليزية مباشرةً قدر الإمكان

**5. خطأك = فرصتك**
- لا تخجل من الأخطاء، هي خطوات التعلم

**6. ربط التعلم بمصالحك**
- لو تحب السينما → شاهد أفلام إنجليزية
- لو تحب الألعاب → العب بالإنجليزية

**7. التطبيق الفوري**
- عند تعلم قاعدة → استخدمها في 3 جمل فورًا

🎯 **مستواك في EnglishPath يتحسن بالاستمرار — واصل!**`,
      suggestions: ["كيف أحسن نطقي؟", "كيف أتذكر المفردات الجديدة؟"],
    }),
  },
  // ─── For / Since ──────────────────────────────────────────
  {
    patterns: [/\bfor\b.{0,10}\bsince\b|\bsince\b.{0,10}\bfor\b|الفرق.*for.*since/i],
    response: () => ({
      text: `**for vs since** ⏱️

**for** → مدة زمنية (period of time):
- *I have lived here **for** 5 years.*
- *She studied **for** 3 hours.*
- for + عدد: for 2 days, for a week, for months

**since** → نقطة بداية محددة (point in time):
- *I have lived here **since** 2019.*
- *She has been sick **since** Monday.*
- since + تاريخ أو حدث: since 2020, since I was young

💡 **اختبار سريع:**
- هل يمكنك قول "من ... إلى الآن؟" → **since**
- هل يمكنك قول "مدة ...؟" → **for**

- *I've known him **for** 10 years.* (مدة 10 سنوات)
- *I've known him **since** 2014.* (من عام 2014)`,
      suggestions: ["ما الفرق بين already و yet و just؟"],
    }),
  },
  // ─── Already / Yet / Just ─────────────────────────────────
  {
    patterns: [/already|yet\b|just\b|بالفعل|yet.*already|just.*already/i],
    response: () => ({
      text: `**already / yet / just** ✅

**already** → حدث الشيء (أسرع من المتوقع):
- موقعه: قبل الفعل الرئيسي أو في نهاية الجملة
- *I have **already** eaten.* (أكلت بالفعل)
- مع الإيجابية والأسئلة

**yet** → لم يحدث بعد (متوقع أن يحدث):
- موقعه: في نهاية الجملة
- *I haven't finished **yet**.* (لم أنتهِ بعد)
- *Have you called him **yet**?* (هل اتصلت به؟)
- مع النفي والأسئلة

**just** → حدث للتو (منذ لحظات):
- موقعه: قبل الفعل الرئيسي
- *She has **just** arrived.* (وصلت للتو)
- مع الإيجابية`,
      suggestions: ["ما الفرق بين Present Perfect و Past Simple؟"],
    }),
  },
  // ─── Numbers / Encouragement ──────────────────────────────
  {
    patterns: [/نجحت|أحسنت|شكر|ممتاز|رائع|برافو|great|good job|well done/i],
    response: () => ({
      text: `شكراً لك! 🎉 أنت تسير بشكل رائع في رحلة تعلم الإنجليزية! 

تذكّر: كل خطوة صغيرة تقربك من إتقان اللغة. استمر في التدرب يومياً وستلاحظ الفرق بسرعة! 💪

هل تريد أن تسألني عن قاعدة معينة أو تحتاج مساعدة في شيء محدد؟`,
      suggestions: ["كيف أتحسن في الإنجليزية؟", "ما الفرق بين أي قاعدتين؟"],
    }),
  },
  // ─── Default fallback ─────────────────────────────────────
  {
    patterns: [/.*/],
    response: () => ({
      text: `سؤال رائع! 🦉 دعني أساعدك...

للحصول على أفضل إجابة، اسألني بشكل محدد مثل:
- "ما الفرق بين _____ و ______؟"
- "كيف أستخدم _______؟"
- "متى أستخدم _______؟"

يمكنني شرح: الأزمنة، حروف الجر، الصفات، أدوات التعريف، الأفعال المساعدة، وأكثر!`,
      suggestions: ["ما الفرق بين was و were؟", "متى أستخدم a و an؟", "ما هي أشهر الأخطاء الشائعة؟", "كيف أتحسن في الإنجليزية؟"],
    }),
  },
];

export function getTutorResponse(userMessage: string): TutorResponse {
  for (const rule of rules) {
    if (rule.patterns.some(p => p.test(userMessage))) {
      return rule.response();
    }
  }
  return rules[rules.length - 1].response();
}
