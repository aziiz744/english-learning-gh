import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronRight, CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Example { en: string; ar: string; }
interface Exercise { question: string; options: string[]; correct: number; explanation: string; }
interface GrammarRule {
  id: number; title: string; titleAr: string; level: string; emoji: string;
  explanation: string; structure: string;
  examples: Example[]; exercises: Exercise[];
}

const RULES: GrammarRule[] = [
  { id: 1, title: "Present Simple", titleAr: "المضارع البسيط", level: "A1", emoji: "⏰",
    explanation: "نستخدم المضارع البسيط للتعبير عن الحقائق، العادات، والروتين اليومي.",
    structure: "Subject + Verb (+ s/es للغائب المفرد)",
    examples: [
      { en: "I drink coffee every morning.", ar: "أشرب قهوة كل صباح." },
      { en: "She works in a hospital.", ar: "هي تعمل في مستشفى." },
      { en: "They play football on Fridays.", ar: "يلعبون كرة القدم يوم الجمعة." },
    ],
    exercises: [
      { question: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1, explanation: "مع الغائب المفرد (she/he/it) نضيف s أو es للفعل" },
      { question: "They ___ English at university.", options: ["studies", "study", "studying", "studied"], correct: 1, explanation: "مع الجمع (they) الفعل يبقى بدون تغيير" },
      { question: "The sun ___ in the east.", options: ["rise", "risen", "rises", "rising"], correct: 2, explanation: "حقيقة علمية + غائب مفرد = rises" },
      { question: "I ___ coffee every morning.", options: ["drinks", "drank", "drink", "drinking"], correct: 2, explanation: "مع المتكلم (I) الفعل يبقى بدون تغيير" },
      { question: "He ___ his homework after school.", options: ["do", "does", "done", "doing"], correct: 1, explanation: "مع الغائب المفرد (he) نضيف es للفعل do" },
    ]
  },
  { id: 2, title: "Past Simple", titleAr: "الماضي البسيط", level: "A2", emoji: "📅",
    explanation: "نستخدم الماضي البسيط للتعبير عن أحداث انتهت في وقت محدد في الماضي.",
    structure: "Subject + Verb(ed) للأفعال المنتظمة / V2 للأفعال الشاذة",
    examples: [
      { en: "I visited Paris last year.", ar: "زرت باريس العام الماضي." },
      { en: "She ate breakfast at 7am.", ar: "أكلت الفطور الساعة 7 صباحاً." },
      { en: "They went to the beach yesterday.", ar: "ذهبوا إلى الشاطئ أمس." },
    ],
    exercises: [
      { question: "She ___ a book last night.", options: ["read", "reads", "reading", "readed"], correct: 0, explanation: "read فعل شاذ، شكله في الماضي نفس الشكل (read)" },
      { question: "They ___ to Italy in 2020.", options: ["travel", "traveled", "travels", "traveling"], correct: 1, explanation: "فعل منتظم: traveled = travel + ed" },
      { question: "He ___ dinner yesterday.", options: ["cooked", "cook", "cooks", "cooking"], correct: 0, explanation: "فعل منتظم في الماضي: cooked" },
      { question: "I ___ my keys this morning.", options: ["lose", "lost", "loses", "losing"], correct: 1, explanation: "lose فعل شاذ، ماضيه lost" },
      { question: "We ___ a great movie last week.", options: ["watch", "watched", "watches", "watching"], correct: 1, explanation: "watched = watch + ed" },
    ]
  },
  { id: 3, title: "Present Continuous", titleAr: "المضارع المستمر", level: "A2", emoji: "🔄",
    explanation: "نستخدمه للتعبير عن أحداث تحدث الآن أو في الوقت الحالي.",
    structure: "Subject + am/is/are + Verb(ing)",
    examples: [
      { en: "I am studying English now.", ar: "أنا أدرس الإنجليزية الآن." },
      { en: "She is cooking dinner.", ar: "هي تطبخ العشاء." },
      { en: "They are playing in the garden.", ar: "هم يلعبون في الحديقة." },
    ],
    exercises: [
      { question: "She ___ a book right now.", options: ["read", "reads", "is reading", "was reading"], correct: 2, explanation: "المضارع المستمر: is + reading" },
      { question: "We ___ for the bus.", options: ["wait", "waited", "are waiting", "is waiting"], correct: 2, explanation: "مع we نستخدم are + waiting" },
      { question: "He ___ football at the moment.", options: ["play", "plays", "is playing", "played"], correct: 2, explanation: "at the moment تشير للمضارع المستمر" },
      { question: "I ___ to music now.", options: ["listen", "am listening", "is listening", "listened"], correct: 1, explanation: "مع I نستخدم am + listening" },
      { question: "The children ___ in the park.", options: ["run", "runs", "are running", "is running"], correct: 2, explanation: "مع الجمع: are + running" },
    ]
  },
  { id: 4, title: "Future with Will", titleAr: "المستقبل بـ Will", level: "A2", emoji: "🔮",
    explanation: "نستخدم will للتعبير عن قرارات آنية، تنبؤات، وعود.",
    structure: "Subject + will + Verb (base form)",
    examples: [
      { en: "I will call you tomorrow.", ar: "سأتصل بك غداً." },
      { en: "It will rain tonight.", ar: "ستمطر الليلة." },
      { en: "She will help you.", ar: "ستساعدك." },
    ],
    exercises: [
      { question: "I think it ___ tomorrow.", options: ["rains", "will rain", "rained", "raining"], correct: 1, explanation: "تنبؤ عن المستقبل: will rain" },
      { question: "She ___ you with your homework.", options: ["help", "will help", "helped", "helps"], correct: 1, explanation: "وعد/تنبؤ: will help" },
      { question: "We ___ the party next week.", options: ["plan", "will plan", "planned", "planning"], correct: 1, explanation: "حدث مستقبلي: will plan" },
      { question: "Don't worry, I ___ the dishes.", options: ["wash", "will wash", "washed", "washing"], correct: 1, explanation: "قرار آني: will wash" },
      { question: "He ___ a doctor one day.", options: ["is", "was", "will be", "being"], correct: 2, explanation: "تنبؤ مستقبلي: will be" },
    ]
  },
  { id: 5, title: "Conditionals Type 1", titleAr: "الشرط الأول", level: "B1", emoji: "🔀",
    explanation: "نستخدمه للتعبير عن شروط محتملة ونتائجها في المستقبل.",
    structure: "If + Present Simple, will + Verb",
    examples: [
      { en: "If it rains, I will stay home.", ar: "إذا أمطرت، سأبقى في المنزل." },
      { en: "If you study hard, you will pass.", ar: "إذا درست بجد، ستنجح." },
      { en: "If she calls, I will answer.", ar: "إذا اتصلت، سأرد." },
    ],
    exercises: [
      { question: "If you ___ hard, you will succeed.", options: ["work", "worked", "will work", "working"], correct: 0, explanation: "بعد if في الشرط الأول نستخدم Present Simple" },
      { question: "If it rains, we ___ inside.", options: ["stay", "stayed", "will stay", "staying"], correct: 2, explanation: "في نتيجة الشرط الأول نستخدم will + فعل" },
      { question: "She will be happy if she ___ the job.", options: ["get", "gets", "will get", "getting"], correct: 1, explanation: "بعد if: gets (present simple)" },
      { question: "If I ___ time, I will visit you.", options: ["have", "had", "will have", "having"], correct: 0, explanation: "بعد if: have (present simple)" },
      { question: "We will miss the train if we ___ late.", options: ["are", "were", "will be", "being"], correct: 0, explanation: "بعد if: are (present simple)" },
    ]
  },
  { id: 6, title: "Present Perfect", titleAr: "المضارع التام", level: "B1", emoji: "✅",
    explanation: "نستخدمه للتعبير عن أحداث ماضية لها تأثير على الحاضر.",
    structure: "Subject + have/has + Past Participle (V3)",
    examples: [
      { en: "I have visited France three times.", ar: "زرت فرنسا ثلاث مرات." },
      { en: "She has just finished her homework.", ar: "لقد أنهت واجبها للتو." },
      { en: "They have lived here for five years.", ar: "يعيشون هنا منذ خمس سنوات." },
    ],
    exercises: [
      { question: "She ___ her keys again!", options: ["lose", "lost", "has lost", "losing"], correct: 2, explanation: "حدث ماضٍ له تأثير حاضر: has lost" },
      { question: "I ___ never ___ sushi before.", options: ["have/eaten", "has/eaten", "have/eat", "had/eaten"], correct: 0, explanation: "المضارع التام مع never: have + eaten" },
      { question: "We ___ in this city since 2015.", options: ["live", "lived", "have lived", "has lived"], correct: 2, explanation: "مع since نستخدم المضارع التام: have lived" },
      { question: "He ___ already ___ his report.", options: ["has/finished", "have/finished", "had/finish", "has/finish"], correct: 0, explanation: "مع already: has + finished" },
      { question: "They ___ the movie yet?", options: ["have watched", "has watched", "watched", "watch"], correct: 0, explanation: "مع yet في السؤال: have + watched" },
    ]
  },
  { id: 7, title: "Passive Voice", titleAr: "المبني للمجهول", level: "B1", emoji: "🔄",
    explanation: "نستخدم المبني للمجهول عندما يكون الفاعل غير معروف أو غير مهم.",
    structure: "Subject + am/is/are/was/were + Past Participle",
    examples: [
      { en: "The book was written by J.K. Rowling.", ar: "كتبت الكتاب J.K. رولينج." },
      { en: "English is spoken worldwide.", ar: "تُتحدث الإنجليزية في جميع أنحاء العالم." },
      { en: "The car was repaired yesterday.", ar: "تم إصلاح السيارة أمس." },
    ],
    exercises: [
      { question: "The letter ___ by Mary.", options: ["write", "wrote", "was written", "is writing"], correct: 2, explanation: "الماضي المبني للمجهول: was + written" },
      { question: "English ___ in many countries.", options: ["speak", "spoke", "is spoken", "speaking"], correct: 2, explanation: "المضارع المبني للمجهول: is + spoken" },
      { question: "The windows ___ broken.", options: ["are", "were", "was", "is"], correct: 0, explanation: "مع الجمع (windows): are + broken" },
      { question: "The meal ___ by the chef.", options: ["prepare", "prepared", "was prepared", "is prepare"], correct: 2, explanation: "الماضي المبني للمجهول: was + prepared" },
      { question: "The report will ___ tomorrow.", options: ["submit", "submits", "be submitted", "submitted"], correct: 2, explanation: "المستقبل المبني للمجهول: will be + submitted" },
    ]
  },
  { id: 8, title: "Modal Verbs", titleAr: "الأفعال المساعدة", level: "A2", emoji: "💭",
    explanation: "الأفعال المساعدة تعبر عن الإمكانية، الضرورة، والإذن.",
    structure: "Subject + Modal + Verb (base form)",
    examples: [
      { en: "You must wear a seatbelt.", ar: "يجب أن ترتدي حزام الأمان." },
      { en: "She can speak three languages.", ar: "تستطيع التحدث بثلاث لغات." },
      { en: "You should see a doctor.", ar: "ينبغي أن تزور طبيباً." },
    ],
    exercises: [
      { question: "You ___ smoke here. It's forbidden.", options: ["can", "must", "should", "can't"], correct: 3, explanation: "can't = لا يمكن / ممنوع" },
      { question: "She ___ play the piano beautifully.", options: ["must", "can", "should", "have to"], correct: 1, explanation: "can = تستطيع / قادرة على" },
      { question: "You ___ see a doctor if you feel sick.", options: ["can", "must", "should", "might"], correct: 2, explanation: "should = ينبغي / نصيحة" },
      { question: "I ___ finish this by tomorrow.", options: ["should", "can", "must", "might"], correct: 2, explanation: "must = يجب / ضرورة" },
      { question: "It ___ rain today. The sky is dark.", options: ["must", "should", "might", "can"], correct: 2, explanation: "might = ربما / احتمال" },
    ]
  },
  { id: 9, title: "Articles: A, An, The", titleAr: "أدوات التعريف والتنكير", level: "A1", emoji: "📌",
    explanation: "a/an للأشياء غير المحددة، the للأشياء المحددة المعروفة.",
    structure: "a + حرف ساكن | an + حرف متحرك | the + معروف",
    examples: [
      { en: "I saw a cat in the garden.", ar: "رأيت قطة في الحديقة." },
      { en: "She is an engineer.", ar: "هي مهندسة." },
      { en: "The sun rises in the east.", ar: "تشرق الشمس من الشرق." },
    ],
    exercises: [
      { question: "I have ___ idea!", options: ["a", "an", "the", "-"], correct: 1, explanation: "idea تبدأ بحرف متحرك (i) فنستخدم an" },
      { question: "She is ___ best student in class.", options: ["a", "an", "the", "-"], correct: 2, explanation: "الأفضل = محدد = the" },
      { question: "He wants to be ___ doctor.", options: ["a", "an", "the", "-"], correct: 0, explanation: "مهنة غير محددة = a" },
      { question: "___ moon is very bright tonight.", options: ["A", "An", "The", "-"], correct: 2, explanation: "القمر شيء واحد معروف = the" },
      { question: "I ate ___ orange for breakfast.", options: ["a", "an", "the", "-"], correct: 1, explanation: "orange تبدأ بحرف متحرك = an" },
    ]
  },
  { id: 10, title: "Comparatives & Superlatives", titleAr: "صيغ المقارنة", level: "A2", emoji: "📊",
    explanation: "نستخدم المقارنة للمقارنة بين شيئين أو أكثر.",
    structure: "Adj+er + than | more + Adj + than | the + Adj+est | the most + Adj",
    examples: [
      { en: "She is taller than her sister.", ar: "هي أطول من أختها." },
      { en: "This is the most beautiful city.", ar: "هذه أجمل مدينة." },
      { en: "He is more intelligent than me.", ar: "هو أكثر ذكاءً مني." },
    ],
    exercises: [
      { question: "This car is ___ than that one.", options: ["expensiver", "more expensive", "most expensive", "expensive"], correct: 1, explanation: "للصفات الطويلة نستخدم more + صفة" },
      { question: "She is the ___ girl in class.", options: ["tall", "taller", "tallest", "more tall"], correct: 2, explanation: "التفضيل المطلق: the + est" },
      { question: "Today is ___ than yesterday.", options: ["hotter", "more hot", "hottest", "hot"], correct: 0, explanation: "hot صفة قصيرة: hot → hotter (مضاعفة الحرف الأخير)" },
      { question: "This is the ___ movie I've ever seen.", options: ["good", "better", "best", "gooder"], correct: 2, explanation: "good → best (شاذة)" },
      { question: "He runs ___ than his brother.", options: ["fast", "faster", "fastest", "more fast"], correct: 1, explanation: "fast صفة قصيرة: faster" },
    ]
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type View = "list" | "detail" | "practice";

export default function Grammar() {
  const [view, setView] = useState<View>("list");
  const [selected, setSelected] = useState<GrammarRule | null>(null);
  const [filter, setFilter] = useState("الكل");
  const [exIdx, setExIdx] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [shuffledExercises, setShuffledExercises] = useState<GrammarRule["exercises"]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<{text: string; origIdx: number}[][]>([]);
  const [done, setDone] = useState(false);

  const levels = ["الكل", "A1", "A2", "B1"];
  const filtered = filter === "الكل" ? RULES : RULES.filter(r => r.level === filter);
  const levelColor = (l: string) =>
    l === "A1" ? "bg-green-500/20 text-green-400" :
    l === "A2" ? "bg-blue-500/20 text-blue-400" : "bg-amber-500/20 text-amber-400";

  function openRule(rule: GrammarRule) {
    setSelected(rule);
    setView("detail");
  }

  function startPractice() {
    if (!selected) return;
    const exs = shuffle(selected.exercises);
    setShuffledExercises(exs);
    setShuffledOptions(exs.map(ex => shuffle(ex.options.map((text, origIdx) => ({ text, origIdx })))));
    setExIdx(0); setChosen(null); setShowFeedback(false); setCorrect(0); setDone(false);
    setView("practice");
  }

  function handleAnswer(optionOrigIdx: number) {
    if (showFeedback) return;
    setChosen(optionOrigIdx);
    setShowFeedback(true);
    if (optionOrigIdx === shuffledExercises[exIdx].correct) setCorrect(c => c + 1);
  }

  function next() {
    if (exIdx < shuffledExercises.length - 1) {
      setExIdx(i => i + 1); setChosen(null); setShowFeedback(false);
    } else { setDone(true); }
  }

  const currentEx = shuffledExercises[exIdx];
  const currentOpts = shuffledOptions[exIdx] ?? [];

  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <AnimatePresence mode="wait">

          {/* ── List ── */}
          {view === "list" && (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-7 h-7 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold">قواعد اللغة الإنجليزية</h1>
                  <p className="text-sm text-muted-foreground">شرح + أمثلة + تدريبات مكثفة</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mb-5">
                {levels.map(l => (
                  <button key={l} onClick={() => setFilter(l)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${filter === l ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {l}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filtered.map(rule => (
                  <motion.div key={rule.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Card className="cursor-pointer hover:border-primary/50 transition-colors" onClick={() => openRule(rule)}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <span className="text-3xl">{rule.emoji}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm">{rule.title}</span>
                            <Badge className={`text-xs ${levelColor(rule.level)}`}>{rule.level}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{rule.titleAr}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Detail ── */}
          {view === "detail" && selected && (
            <motion.div key="detail" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <button onClick={() => setView("list")} className="text-sm text-muted-foreground hover:text-foreground mb-4 flex items-center gap-1">← رجوع</button>
              <Card>
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selected.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold">{selected.title}</h2>
                        <Badge className={`text-xs ${levelColor(selected.level)}`}>{selected.level}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{selected.titleAr}</p>
                    </div>
                  </div>

                  <div className="bg-muted/40 border border-border rounded-xl p-4">
                    <p className="text-sm font-medium mb-1 text-primary">📖 الشرح</p>
                    <p className="text-sm leading-relaxed">{selected.explanation}</p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <p className="text-sm font-medium mb-1 text-primary">🏗️ البنية</p>
                    <p className="text-sm font-mono" dir="ltr">{selected.structure}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-3 text-primary">✨ أمثلة</p>
                    <div className="space-y-2">
                      {selected.examples.map((ex, i) => (
                        <div key={i} className="border border-border rounded-xl p-3">
                          <p className="font-medium text-sm" dir="ltr">{ex.en}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{ex.ar}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button onClick={startPractice} className="w-full gap-2 py-5 text-base">
                    🎯 ابدأ التدريب ({selected.exercises.length} أسئلة)
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* ── Practice ── */}
          {view === "practice" && selected && !done && currentEx && (
            <motion.div key="practice" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <button onClick={() => setView("detail")} className="text-sm text-muted-foreground hover:text-foreground mb-4 flex items-center gap-1">← رجوع</button>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>السؤال {exIdx + 1} من {shuffledExercises.length}</span>
                  <span>✅ {correct} صحيح</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((exIdx) / shuffledExercises.length) * 100}%` }} />
                </div>
              </div>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="text-lg font-medium text-center" dir="ltr">{currentEx.question}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {currentOpts.map((opt, i) => {
                      const isCorrect = opt.origIdx === currentEx.correct;
                      const isChosen = chosen === opt.origIdx;
                      let cls = "w-full p-3 rounded-xl border text-sm font-medium transition-all text-left";
                      if (!showFeedback) cls += " hover:border-primary/50 cursor-pointer border-border";
                      else if (isCorrect) cls += " bg-green-500/20 border-green-500 text-green-400";
                      else if (isChosen) cls += " bg-red-500/20 border-red-500 text-red-400";
                      else cls += " border-border opacity-50";
                      return (
                        <button key={i} className={cls} onClick={() => handleAnswer(opt.origIdx)} dir="ltr">
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>

                  {showFeedback && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-xl border text-sm ${chosen === currentEx.correct ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-red-500/10 border-red-500/30 text-red-400"}`}>
                      <div className="flex items-center gap-2 font-bold mb-1">
                        {chosen === currentEx.correct ? <><CheckCircle className="w-4 h-4" /> ممتاز!</> : <><XCircle className="w-4 h-4" /> خطأ!</>}
                      </div>
                      <p>{currentEx.explanation}</p>
                    </motion.div>
                  )}

                  {showFeedback && (
                    <Button onClick={next} className="w-full">
                      {exIdx < shuffledExercises.length - 1 ? "السؤال التالي →" : "انهاء التدريب 🏁"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* ── Done ── */}
          {view === "practice" && done && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-5 py-8">
              <div className="text-6xl">{correct === shuffledExercises.length ? "🏆" : correct >= shuffledExercises.length * 0.7 ? "⭐" : "💪"}</div>
              <h2 className="text-2xl font-bold">
                {correct === shuffledExercises.length ? "ممتاز! إجابات مثالية!" : correct >= shuffledExercises.length * 0.7 ? "أداء رائع!" : "استمر في التدريب!"}
              </h2>
              <p className="text-muted-foreground">
                أجبت بشكل صحيح على <span className="text-foreground font-bold">{correct}</span> من <span className="text-foreground font-bold">{shuffledExercises.length}</span> سؤال
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={startPractice} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" /> أعد التدريب
                </Button>
                <Button onClick={() => setView("detail")} className="gap-2">
                  العودة للشرح
                </Button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </>
  );
}
