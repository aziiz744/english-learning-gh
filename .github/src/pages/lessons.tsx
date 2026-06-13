import { useState, useMemo } from "react";
import { useGetLessons, useGetStats } from "@/lib/api-hooks";
import { useAuth } from "@/hooks/use-auth";
import { triggerLoginModal as openLoginModal } from "@/lib/modal-state";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Award, Lock, Search, Star, BookOpen, Filter } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LEVEL_LABELS: Record<string, string> = {
  "beginner": "مبتدئ A1", "elementary": "أساسي A2",
  "intermediate": "متوسط B1", "upper-intermediate": "متقدم B2",
  "advanced": "متمكن C1", "proficiency": "إتقان C2",
};

const LEVEL_COLORS: Record<string, string> = {
  "beginner": "bg-green-500/10 text-green-400 border-green-500/20",
  "elementary": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "intermediate": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "upper-intermediate": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "advanced": "bg-red-500/10 text-red-400 border-red-500/20",
  "proficiency": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const CATEGORY_LABELS: Record<string, string> = {
  "grammar": "قواعد 📝", "vocabulary": "مفردات 📖",
  "reading": "قراءة 📰", "listening": "استماع 🎧",
  "speaking": "محادثة 🗣️", "writing": "كتابة ✍️",
};

const LEVELS = ["all", "beginner", "elementary", "intermediate", "upper-intermediate", "advanced", "proficiency"];
const CATEGORIES = ["all", "grammar", "vocabulary", "reading", "listening", "speaking", "writing"];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map(i => (
        <Star key={i} className={cn("w-3.5 h-3.5", i <= count ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30")} />
      ))}
    </div>
  );
}

export default function Lessons() {
  const { user } = useAuth();
  const [level, setLevel] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [showLocked, setShowLocked] = useState(false);

  const { data: lessons, isLoading } = useGetLessons({
    level: level !== "all" ? level : undefined,
    category: category !== "all" ? category : undefined,
  });
  const { data: stats } = useGetStats();

  const filtered = useMemo(() => {
    if (!lessons) return [];
    return lessons.filter(l => {
      if (!showLocked && !l.isUnlocked) return false;
      if (search) return l.title.toLowerCase().includes(search.toLowerCase()) ||
        l.description.toLowerCase().includes(search.toLowerCase());
      return true;
    });
  }, [lessons, search, showLocked]);

  const completedCount = lessons?.filter(l => l.completedAt).length ?? 0;
  const totalUnlocked = lessons?.filter(l => l.isUnlocked).length ?? 0;
  const progressPct = totalUnlocked > 0 ? Math.round((completedCount / totalUnlocked) * 100) : 0;

  // Group by level
  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach(l => {
      if (!groups[l.level]) groups[l.level] = [];
      groups[l.level].push(l);
    });
    return groups;
  }, [filtered]);

  const levelOrder = LEVELS.filter(l => l !== "all");

  return (
    <Layout>
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" /> مكتبة الدروس
          </h1>
          <p className="text-muted-foreground mt-1">تصفّح جميع الدروس المتاحة وتابع تقدمك</p>
        </div>

        {/* Progress Bar */}
        {user && (
          <div className="bg-card border border-border rounded-2xl p-4 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium">تقدمك الكلي</span>
              <span className="text-primary font-bold">{completedCount} / {totalUnlocked} درس مكتمل</span>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>⚡ {stats?.totalXp ?? 0} XP</span>
              <span>{progressPct}% مكتمل</span>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث عن درس..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-xl pr-10 pl-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Level filter */}
          <div className="flex gap-2 flex-wrap">
            {LEVELS.map(l => (
              <button key={l} onClick={() => setLevel(l)}
                className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  level === l ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
                {l === "all" ? "كل المستويات" : LEVEL_LABELS[l]}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={cn("px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  category === c ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80")}>
                {c === "all" ? "كل الفئات" : CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>

          {/* Show locked toggle */}
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer w-fit">
            <input type="checkbox" checked={showLocked} onChange={e => setShowLocked(e.target.checked)}
              className="rounded" />
            إظهار الدروس المقفولة
          </label>
        </div>

        {/* Lessons grouped by level */}
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map(i => <Skeleton key={i} className="h-48 rounded-xl" />)}
          </div>
        ) : Object.keys(grouped).length === 0 ? (
          <div className="py-20 text-center bg-muted/20 rounded-xl border border-dashed">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-30" />
            <h3 className="text-lg font-bold">لا توجد دروس</h3>
            <p className="text-muted-foreground mt-1 text-sm">جرّب تغيير الفلاتر أو البحث</p>
          </div>
        ) : (
          <div className="space-y-8">
            {levelOrder.filter(l => grouped[l]?.length).map(lvl => (
              <div key={lvl}>
                {/* Level header */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={cn("text-sm px-3 py-1 border", LEVEL_COLORS[lvl])}>
                    {LEVEL_LABELS[lvl]}
                  </Badge>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">
                    {grouped[lvl].filter(l => l.completedAt).length} / {grouped[lvl].length} مكتمل
                  </span>
                </div>

                {/* Level progress */}
                <div className="w-full h-1.5 bg-muted rounded-full mb-4 overflow-hidden">
                  <div className="h-full bg-primary/60 rounded-full transition-all"
                    style={{ width: `${grouped[lvl].length > 0 ? (grouped[lvl].filter(l => l.completedAt).length / grouped[lvl].length) * 100 : 0}%` }} />
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {grouped[lvl].map((lesson, i) => (
                    <motion.div key={lesson.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}>
                      {!user && lesson.isUnlocked ? (
                        <div onClick={() => openLoginModal()} className="cursor-pointer">
                          <LessonCard lesson={lesson} />
                        </div>
                      ) : (
                        <Link href={lesson.isUnlocked ? `/lessons/${lesson.id}` : "#"}>
                          <LessonCard lesson={lesson} />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

function LessonCard({ lesson }: { lesson: any }) {
  const stars = lesson.stars ?? 0;
  const isDone = !!lesson.completedAt;
  const isLocked = !lesson.isUnlocked;

  return (
    <Card className={cn(
      "h-full flex flex-col transition-all duration-200 cursor-pointer group",
      isDone ? "border-primary/40 bg-primary/5 hover:border-primary/60" :
      isLocked ? "opacity-40 grayscale cursor-not-allowed" :
      "hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5"
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge className={cn("text-xs border", LEVEL_COLORS[lesson.level] || "")}>
            {CATEGORY_LABELS[lesson.category] ?? lesson.category}
          </Badge>
          {isDone ? (
            <div className="bg-primary text-primary-foreground p-1.5 rounded-full">
              <Check className="w-3 h-3" />
            </div>
          ) : isLocked ? (
            <div className="bg-muted text-muted-foreground p-1.5 rounded-full">
              <Lock className="w-3 h-3" />
            </div>
          ) : null}
        </div>
        <CardTitle className="line-clamp-2 text-sm leading-snug group-hover:text-primary transition-colors">
          {lesson.title}
        </CardTitle>
        <CardDescription className="text-xs line-clamp-2">{lesson.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-2">
        {/* Stars */}
        <div className="flex items-center gap-2">
          <StarRow count={stars} />
          {stars > 0 && <span className="text-xs text-muted-foreground">{stars}/3 نجوم</span>}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/50 pt-3 flex justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{lesson.durationMinutes} دقيقة</span>
        </div>
        <div className="flex items-center gap-1 text-primary font-bold">
          <Award className="w-3 h-3" />
          <span>{lesson.xpReward} XP</span>
        </div>
      </CardFooter>
    </Card>
  );
}
