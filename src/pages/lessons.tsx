import { useState } from "react";
import { useGetLessons } from "@/lib/api-hooks";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Clock, Award, Lock, BookOpen, Search } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LEVEL_LABELS: Record<string, string> = {
  "beginner": "مبتدئ A1",
  "elementary": "أساسي A2",
  "intermediate": "متوسط B1",
  "upper-intermediate": "متقدم B2",
  "advanced": "متمكن C1",
  "proficiency": "إتقان C2",
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
  "grammar": "قواعد",
  "vocabulary": "مفردات",
  "reading": "قراءة",
  "listening": "استماع",
  "speaking": "محادثة",
  "writing": "كتابة",
};

export default function Lessons() {
  const [level, setLevel] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");

  const { data: lessons, isLoading } = useGetLessons({
    level: level !== "all" ? level : undefined,
    category: category !== "all" ? category : undefined,
  });

  const completedCount = lessons?.filter(l => l.completedAt).length ?? 0;
  const totalCount = lessons?.length ?? 0;

  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">مكتبة الدروس 📚</h1>
            <p className="text-muted-foreground mt-1">
              {totalCount > 0 ? (
                <span>أكملت <span className="text-primary font-bold">{completedCount}</span> من {totalCount} درس</span>
              ) : "تصفّح جميع الدروس المتاحة"}
            </p>
          </div>

          <div className="flex gap-3">
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger className="w-[150px] bg-card">
                <SelectValue placeholder="المستوى" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل المستويات</SelectItem>
                <SelectItem value="beginner">مبتدئ A1</SelectItem>
                <SelectItem value="elementary">أساسي A2</SelectItem>
                <SelectItem value="intermediate">متوسط B1</SelectItem>
                <SelectItem value="upper-intermediate">متقدم B2</SelectItem>
                <SelectItem value="advanced">متمكن C1</SelectItem>
                <SelectItem value="proficiency">إتقان C2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[150px] bg-card">
                <SelectValue placeholder="الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل الفئات</SelectItem>
                <SelectItem value="grammar">قواعد</SelectItem>
                <SelectItem value="vocabulary">مفردات</SelectItem>
                <SelectItem value="reading">قراءة</SelectItem>
                <SelectItem value="listening">استماع</SelectItem>
                <SelectItem value="speaking">محادثة</SelectItem>
                <SelectItem value="writing">كتابة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            [1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} className="h-64 rounded-xl" />)
          ) : lessons?.length ? (
            lessons.map((lesson, i) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={lesson.isUnlocked ? `/lessons/${lesson.id}` : "#"}>
                  <Card className={cn(
                    "h-full flex flex-col transition-all duration-200 hover-elevate cursor-pointer",
                    lesson.completedAt
                      ? "border-primary/30 bg-primary/5"
                      : lesson.isUnlocked
                        ? "hover:border-primary/50 hover:shadow-lg"
                        : "opacity-50 grayscale cursor-not-allowed"
                  )}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-3">
                        <Badge className={cn("text-xs font-semibold border", LEVEL_COLORS[lesson.level] || "")}>
                          {LEVEL_LABELS[lesson.level] ?? lesson.level}
                        </Badge>
                        {lesson.completedAt ? (
                          <div className="bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : !lesson.isUnlocked ? (
                          <div className="bg-muted text-muted-foreground p-1.5 rounded-full">
                            <Lock className="w-3 h-3" />
                          </div>
                        ) : null}
                      </div>
                      <CardTitle className="line-clamp-2 text-base leading-snug">{lesson.title}</CardTitle>
                      <CardDescription className="text-xs">
                        {CATEGORY_LABELS[lesson.category] ?? lesson.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {lesson.description}
                      </p>
                    </CardContent>
                    <CardFooter className="border-t border-border/50 pt-3 flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{lesson.durationMinutes} دقيقة</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-primary" />
                        <span className="font-bold text-primary">{lesson.xpReward} XP</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-muted/20 rounded-xl border border-dashed border-muted">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-30" />
              <h3 className="text-lg font-bold text-foreground">لا توجد دروس</h3>
              <p className="text-muted-foreground mt-1">جرّب تغيير الفلاتر</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
