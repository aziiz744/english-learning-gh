import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, ChevronRight, BookOpen, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Story {
  id: number;
  title: string;
  titleAr: string;
  level: string;
  category: string;
  emoji: string;
  words: number;
  text: string;
}

const STORIES: Story[] = [
  { id: 1, title: "The Lost Dog", titleAr: "الكلب الضائع", level: "A1", category: "حيوانات", emoji: "🐕", words: 80,
    text: "Tom has a dog. His dog is small and white. His name is Max. One day, Max runs out of the house. Tom looks for Max in the park. He calls his name again and again. A girl hears Tom. She says, \"I saw a white dog near the school!\" Tom runs to the school. There is Max! Max is happy to see Tom. Tom hugs Max and says, \"Don't run away again!\" Max wags his tail. They walk home together." },
  { id: 2, title: "A New Friend", titleAr: "صديق جديد", level: "A1", category: "صداقة", emoji: "👫", words: 85,
    text: "Sara is new at school. She does not know anyone. She sits alone at lunch. A girl named Lily comes to her table. Lily smiles and says, \"Can I sit here?\" Sara says yes. They talk about their favorite colors and animals. Sara likes cats. Lily likes dogs. They laugh together. After lunch, they play in the yard. At the end of the day, Sara is happy. She has a new friend." },
  { id: 3, title: "The Big Storm", titleAr: "العاصفة الكبيرة", level: "A2", category: "طبيعة", emoji: "⛈️", words: 100,
    text: "One evening, dark clouds filled the sky. The wind began to blow very hard. Maria and her family heard thunder and saw lightning. Her little brother was scared. Maria held his hand and said, \"Don't worry, we are safe inside.\" Their mother made hot chocolate. They sat together by the window and watched the rain. The lights went out, so they used candles. It felt like an adventure. In the morning, the storm was gone. The sun came out, and everything looked clean and fresh." },
  { id: 4, title: "The Old Library", titleAr: "المكتبة القديمة", level: "A2", category: "مغامرة", emoji: "📚", words: 110,
    text: "Jake loved books. One Saturday, he found an old library on a small street. The door was heavy and made of dark wood. Inside, the smell of old books filled the air. A tall woman with white hair smiled at him. \"Welcome,\" she said. Jake walked through the shelves. He found a book about space, one about dinosaurs, and one about ancient Egypt. He could not choose just one. The librarian laughed and said, \"You can borrow three.\" Jake left the library with a big smile and three wonderful books." },
  { id: 5, title: "Learning to Cook", titleAr: "تعلم الطبخ", level: "B1", category: "حياة يومية", emoji: "🍳", words: 120,
    text: "Emma decided to learn how to cook. She started with something simple: scrambled eggs. She cracked two eggs into a bowl and added a little salt. She mixed them with a fork. Then she put butter in a pan and turned on the heat. When the butter melted, she poured in the eggs. She moved them gently with a wooden spoon. In three minutes, they were ready. She put them on toast and sat down to eat. They were delicious! She felt proud. The next day, she tried pasta. Cooking, she discovered, was not as difficult as she had thought." },
  { id: 6, title: "The Mountain Hike", titleAr: "رحلة الجبل", level: "B1", category: "مغامرة", emoji: "⛰️", words: 130,
    text: "Ahmed and his friends planned a hike up Green Mountain. They packed water, sandwiches, and warm jackets. The trail began through a thick forest. The air smelled of pine trees. After an hour, the trees became fewer and the path steeper. Ahmed's legs ached, but he kept going. At the top, the view was breathtaking. They could see the entire valley below, rivers shining like ribbons of silver. They sat and ate their sandwiches in silence, taking in the beauty. On the way down, they talked and laughed. Ahmed realized that the hardest part of any journey is simply starting." },
  { id: 7, title: "The Interview", titleAr: "المقابلة", level: "B2", category: "عمل", emoji: "💼", words: 140,
    text: "Nora prepared for weeks for her job interview. She researched the company, practiced common questions, and chose her best outfit. On the morning of the interview, she felt nervous but focused. The office was modern and quiet. The interviewer, Mr. Davis, shook her hand and offered her a seat. He asked about her experience, her strengths, and a time she had solved a difficult problem. Nora answered clearly and confidently. When she left, she felt she had done her best. Two days later, she received an email. She got the job. All those weeks of preparation had paid off." },
  { id: 8, title: "Digital Detox", titleAr: "الإدمان الرقمي", level: "B2", category: "تكنولوجيا", emoji: "📵", words: 150,
    text: "For years, Khalid checked his phone first thing every morning and last thing every night. He scrolled through social media during meals, while walking, and even in conversations. One day, a friend pointed out that Khalid had not truly listened to anyone in months. That comment stayed with him. He decided to try a one-week digital detox. No social media. No unnecessary apps. The first two days were uncomfortable. He felt restless and kept reaching for his phone. By the third day, something shifted. He noticed the color of the sky. He finished a book. He called his mother. By the end of the week, Khalid felt lighter and more present than he had in years." },
  { id: 9, title: "The Language of Music", titleAr: "لغة الموسيقى", level: "B1", category: "فن", emoji: "🎵", words: 125,
    text: "When Yuki moved to Brazil from Japan, she spoke no Portuguese. Communication was difficult and exhausting. But Yuki played the violin. One evening, her neighbor heard her playing and knocked on the door. He was a guitarist named Marco. They did not share a language, but they shared music. They began to play together every weekend. Through music, they communicated joy, sadness, and laughter. Over time, Yuki learned Portuguese, and Marco learned a few Japanese words. But they both agreed: before words, music had already made them friends. Some languages, they realized, need no translation." },
  { id: 10, title: "The Power of Habit", titleAr: "قوة العادة", level: "B2", category: "تطوير ذات", emoji: "⚡", words: 145,
    text: "Scientists have long studied how habits form and why they are so difficult to break. A habit, according to research, consists of three parts: a cue, a routine, and a reward. The cue triggers the behavior. The routine is the behavior itself. The reward is what makes the brain want to repeat it. Understanding this cycle is the key to change. If you want to build a new habit, attach it to an existing one. Want to read more? Put your book next to your coffee machine. Want to exercise? Lay out your gym clothes the night before. Small changes in the environment can make new habits far easier to sustain." },
  { id: 11, title: "The Robot Teacher", titleAr: "المعلم الروبوت", level: "A2", category: "تكنولوجيا", emoji: "🤖", words: 105,
    text: "In a school in the future, there is a robot teacher named Arlo. Arlo knows every subject. He speaks twenty languages and never gets tired. Every morning, he greets the students with a smile. He explains math, science, and history in fun ways. He plays games with them to help them learn. But one day, a student named Mia feels sad. Arlo notices. He sits next to her and says, \"Would you like to talk?\" Mia smiles and says, \"You're not just smart, Arlo. You're kind.\" Arlo's screen glows warmly. Being kind, he had learned, was the most important lesson of all." },
  { id: 12, title: "Midnight at the Museum", titleAr: "منتصف الليل في المتحف", level: "B1", category: "مغامرة", emoji: "🏛️", words: 135,
    text: "Leon worked as a night security guard at the city museum. Most nights were quiet and uneventful. But one Thursday, he heard footsteps. He checked the cameras: nothing. He walked through the Egyptian gallery, his flashlight sweeping the walls. Then he saw it — a small door behind the statue of Anubis that he had never noticed before. It was slightly open. His heart raced. He pushed it open and found a small room filled with artifacts not listed anywhere in the museum records. He called his supervisor immediately. The discovery made the news. That night, Leon had not only guarded history — he had found a hidden piece of it." },
  { id: 13, title: "The Art of Saying No", titleAr: "فن قول لا", level: "B2", category: "تطوير ذات", emoji: "✋", words: 145,
    text: "Many people struggle to say no. They agree to tasks they cannot handle, events they do not enjoy, and favors that drain their energy. This pattern is known as people-pleasing, and it often leads to stress and resentment. Learning to say no is not about being selfish. It is about being honest with yourself and others. A clear, polite refusal respects both your time and the other person's. You do not need to explain yourself at length. Simply saying, \"I appreciate you asking, but I can't commit to this right now,\" is enough. The more you practice saying no to the wrong things, the more energy you have for the right ones." },
  { id: 14, title: "A Letter to the Future", titleAr: "رسالة إلى المستقبل", level: "B1", category: "إنساني", emoji: "✉️", words: 128,
    text: "Dear future me, I am writing this on a quiet Sunday afternoon. I am seventeen years old, and I have no idea what the world will look like when you read this. I hope you are happy. I hope you found something that gives you purpose — not just a job, but a reason to wake up with energy. I hope you still love music and long walks and the smell of rain. I hope you kept in touch with the people who matter. I hope you took risks and did not let fear make your decisions. Most of all, I hope you are still curious. Curiosity is the best thing we have." },
  { id: 15, title: "The Science of Sleep", titleAr: "علم النوم", level: "B2", category: "علوم", emoji: "😴", words: 150,
    text: "Most adults know that sleep is important, but few understand why. During sleep, the brain performs essential maintenance. It consolidates memories, moving information from short-term to long-term storage. It flushes out waste products that accumulate during waking hours. It regulates hormones that control hunger, stress, and growth. Without adequate sleep, cognitive performance declines rapidly. Studies show that after just one night of poor sleep, reaction time, decision-making, and emotional regulation all suffer significantly. Despite this, modern life treats sleep as optional. Many people wear their lack of sleep like a badge of productivity. The irony is that the less you sleep, the less productive you actually become. Protecting your sleep is not laziness. It is strategy." },
];

async function translateWord(word: string): Promise<string> {
  const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  if (!clean) return "";
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=en|ar`
    );
    const data = await res.json();
    const translation = data.responseData?.translatedText;
    if (translation && translation !== clean) return translation;
    return clean;
  } catch { return clean; }
}

function ClickableText({ text, wordIndex, onWordClick, tooltip }: {
  text: string; wordIndex: number;
  onWordClick: (word: string, idx: number) => void;
  tooltip: { idx: number; word: string; translation: string } | null;
}) {
  const words = text.split(/(\s+)/);
  let wordCount = 0;
  return (
    <span dir="ltr" style={{unicodeBidi: "plaintext"}}>
      {words.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;
        const idx = wordCount++;
        const clean = token.replace(/[^a-zA-Z]/g, "");
        return (
          <span key={i} className="relative inline">
            <span
              onClick={() => clean && onWordClick(token, idx)}
              className={`transition-all duration-150 ${clean ? "cursor-pointer hover:text-primary underline-offset-2 hover:underline" : ""} ${
                idx === wordIndex
                  ? "bg-primary text-primary-foreground px-0.5 rounded font-bold"
                  : idx < wordIndex ? "text-muted-foreground" : "text-foreground"
              }`}
            >
              {token}
            </span>
            {tooltip?.idx === idx && clean && (
              <span className="absolute bottom-full left-0 mb-1 bg-card border border-border text-foreground text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-50 font-medium" dir="rtl">
                {tooltip.translation === "..." ? "⏳ جاري الترجمة..." : `🔤 ${tooltip.translation}`}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}

export default function Reading() {
  const [selected, setSelected] = useState<Story | null>(null);
  const [playing, setPlaying] = useState(false);
  const [tooltip, setTooltip] = useState<{ idx: number; word: string; translation: string } | null>(null);
  const [wordIndex, setWordIndex] = useState(-1);
  const [filter, setFilter] = useState<string>("الكل");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const wordsRef = useRef<string[]>([]);

  const categories = ["الكل", ...Array.from(new Set(STORIES.map(s => s.category)))];

  const filtered = filter === "الكل" ? STORIES : STORIES.filter(s => s.category === filter);

  async function handleWordClick(word: string, idx: number) {
    const clean = word.replace(/[^a-zA-Z]/g, "");
    if (!clean) return;
    setTooltip({ idx, word: clean, translation: "..." });
    const translation = await translateWord(clean);
    setTooltip({ idx, word: clean, translation });
    setTimeout(() => setTooltip(null), 3000);
  }

  function openStory(story: Story) {
    stopReading();
    setSelected(story);
    setWordIndex(-1);
    setPlaying(false);
  }

  function startReading() {
    if (!selected) return;
    window.speechSynthesis.cancel();
    const words = selected.text.split(" ");
    wordsRef.current = words;

    const utterance = new SpeechSynthesisUtterance(selected.text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;

    let currentWord = 0;
    utterance.onboundary = (e) => {
      if (e.name === "word") {
        setWordIndex(currentWord);
        currentWord++;
      }
    };
    utterance.onend = () => { setPlaying(false); setWordIndex(-1); };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setPlaying(true);
  }

  function stopReading() {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setWordIndex(-1);
  }

  function togglePlay() {
    if (playing) stopReading();
    else startReading();
  }

  useEffect(() => { return () => stopReading(); }, []);

  const levelColor = (level: string) =>
    level === "A1" ? "bg-green-500/20 text-green-400" :
    level === "A2" ? "bg-blue-500/20 text-blue-400" :
    level === "B1" ? "bg-amber-500/20 text-amber-400" :
    "bg-purple-500/20 text-purple-400";

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        {/* Pro Gate */}
        {isPro === false && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center py-16 space-y-5">
            <div className="text-6xl mb-4">👑</div>
            <h2 className="text-2xl font-bold">ميزة Pro حصرية</h2>
            <p className="text-muted-foreground leading-relaxed">
              قصص القراءة مع الصوت والترجمة الفورية متاحة لأعضاء Pro فقط.
            </p>
            <div className="bg-muted/40 border border-border rounded-2xl p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">للحصول على ميزة Pro:</p>
              <p>تواصل مع الإدارة عبر البريد الإلكتروني وسيتم تفعيل حسابك 🚀</p>
            </div>
          </motion.div>
        )}

        {isPro === null && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {isPro === true && (
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-7 h-7 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold">قصص للقراءة</h1>
                  <p className="text-sm text-muted-foreground">15 قصة مختارة — اختر وابدأ القراءة مع الصوت</p>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap mb-5">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setFilter(cat)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map(story => (
                  <motion.div key={story.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Card className="cursor-pointer hover:border-primary/50 transition-colors" onClick={() => openStory(story)}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-3xl">{story.emoji}</span>
                          <div className="flex gap-1">
                            <Badge className={`text-xs ${levelColor(story.level)}`}>{story.level}</Badge>
                            <Badge variant="outline" className="text-xs">{story.category}</Badge>
                          </div>
                        </div>
                        <h3 className="font-bold mb-0.5">{story.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{story.titleAr}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{story.words} كلمة</span>
                          <div className="flex items-center gap-1 text-primary text-sm">
                            ابدأ القراءة <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="story" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="flex items-center gap-3 mb-6">
                <button onClick={() => { stopReading(); setSelected(null); }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1">
                  ← رجوع
                </button>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex gap-2 mb-2">
                        <Badge className={`text-xs ${levelColor(selected.level)}`}>{selected.level}</Badge>
                        <Badge variant="outline" className="text-xs">{selected.category}</Badge>
                      </div>
                      <h2 className="text-xl font-bold">{selected.title}</h2>
                      <p className="text-sm text-muted-foreground">{selected.titleAr}</p>
                    </div>
                    <span className="text-4xl">{selected.emoji}</span>
                  </div>

                  {/* Audio Control */}
                  <div className="flex items-center gap-3 mb-6 p-3 bg-muted/40 rounded-xl border border-border/50">
                    <Button onClick={togglePlay} size="sm" className="gap-2 rounded-full">
                      {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {playing ? "إيقاف" : "تشغيل الصوت"}
                    </Button>
                    <Volume2 className={`w-4 h-4 ${playing ? "text-primary animate-pulse" : "text-muted-foreground"}`} />
                    <span className="text-xs text-muted-foreground">
                      {playing ? "جاري القراءة..." : "اضغط للاستماع مع تتبع النص"}
                    </span>
                  </div>

                  {/* Story Text with word highlighting + click to translate */}
                  <div className="text-lg leading-9 font-serif tracking-wide" dir="ltr" style={{textAlign: "left"}}>
                    <ClickableText
                      text={selected.text}
                      wordIndex={wordIndex}
                      onWordClick={handleWordClick}
                      tooltip={tooltip}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    💡 اضغط على أي كلمة لترجمتها
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        )}
      </div>
    </Layout>
  );
}
