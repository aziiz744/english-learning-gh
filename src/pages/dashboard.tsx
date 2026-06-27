import { useState } from "react";
import { useGetStats, useGetAchievements } from "@/lib/api-hooks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Zap, BookOpen, Target, ChevronLeft, MapPin, Flame, Star, Library, GraduationCap, Trophy } from "lucide-react";
import { Link } from "wouter";
import { getVocabSummary } from "@/lib/vocab-stats";
import { getSkillStats, getWeakestSkill } from "@/lib/skill-tracker";
import { getGoal, GOALS, setGoal } from "@/lib/goals";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const LEVEL_MAP: Record<string, string> = {
  "Beginner": "مبتدئ A1",
  "Elementary": "أساسي A2",
  "Intermediate": "متوسط B1",
  "Upper Intermediate": "متقدم B2",
  "Advanced": "متمكن C1",
  "Proficiency": "إتقان C2",
};

const DAYS_AR = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

export default function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useGetStats();
  const vocab = getVocabSummary();
  const { data: achievements, isLoading: achievementsLoading } = useGetAchievements();
  const skillStats = getSkillStats();
  const weakest = getWeakestSkill();
  const [goal, setGoalState] = useState(() => getGoal());
  const [showGoalEdit, setShowGoalEdit] = useState(false);

  const recentAchievements = achievements?.filter(a => a.isEarned).slice(0, 3) || [];

  const today = new Date();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - 6 + i);
    return DAYS_AR[d.getDay()];
  });

  return (
    <>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">أهلاً بك! 👋</h1>
            <p className="text-muted-foreground mt-1">استمر في رحلتك نحو إتقان الإنجليزية</p>
          </div>
          {stats && stats.streak >= 3 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-2xl px-4 py-2"
            >
              <Flame className="h-5 w-5 text-orange-400 fire-glow" />
              <div className="text-right">
                <div className="text-xs text-orange-400/70">سلسلة نشاط</div>
                <div className="text-lg font-bold text-orange-400">{stats.streak} يوم 🔥</div>
              </div>
            </motion.div>
          )}
        </div>

        {statsLoading ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-32 rounded-xl" />)}
          </div>
        ) : stats ? (
          <>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">إجمالي النقاط</CardTitle>
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl md:text-3xl font-bold text-primary truncate">{stats.totalXp.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground mt-1">XP مكتسب</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card className="border-orange-500/20 bg-orange-500/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">سلسلة الأيام</CardTitle>
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Flame className="h-4 w-4 text-orange-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-400">{stats.streak}</div>
                    <div className="text-xs text-muted-foreground mt-1">يوم متواصل</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <Card className="border-blue-500/20 bg-blue-500/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">الدروس المكتملة</CardTitle>
                    <div className="p-1.5 bg-blue-500/10 rounded-lg">
                      <BookOpen className="h-4 w-4 text-blue-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-400">{stats.lessonsCompleted}</div>
                    <div className="text-xs text-muted-foreground mt-1">من أصل {stats.totalLessons} درس</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-green-500/20 bg-green-500/5">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">دقة الإجابات</CardTitle>
                    <div className="p-1.5 bg-green-500/10 rounded-lg">
                      <Target className="h-4 w-4 text-green-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-400">{stats.accuracy}%</div>
                    <div className="text-xs text-muted-foreground mt-1">معدل الصحة</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* ── بطاقة المفردات (الكلمات المتعلّمة والمراجعة) ── */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <Card className="border-primary/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent pointer-events-none" />
                <CardContent className="p-5 relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-base">رحلة مفرداتك</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* الكلمات المتعلّمة */}
                    <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-primary/5 border border-primary/15">
                      <div className="text-4xl font-black text-primary">{vocab.learned}</div>
                      <div className="text-xs text-muted-foreground mt-1.5 font-medium">كلمة تعلّمتها 🎓</div>
                    </div>
                    {/* الكلمات للمراجعة */}
                    <Link href="/review">
                      <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-orange-500/5 border border-orange-500/15 cursor-pointer hover:bg-orange-500/10 transition-colors h-full">
                        <div className="text-4xl font-black text-orange-400">{vocab.review}</div>
                        <div className="text-xs text-muted-foreground mt-1.5 font-medium flex items-center gap-1">
                          <Library className="h-3 w-3" /> للمراجعة
                        </div>
                      </div>
                    </Link>
                  </div>
                  {vocab.review > 0 && (
                    <Link href="/review">
                      <button className="w-full mt-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        <Library className="h-4 w-4" /> راجع كلماتك الصعبة
                      </button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-1 md:col-span-2 lg:col-span-4">
                <CardHeader>
                  <CardTitle>نشاط الأسبوع</CardTitle>
                  <CardDescription>نقاطك خلال الأيام السبعة الماضية</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={stats.weeklyXp.map((xp, i) => ({ day: weekDays[i], xp }))}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} fontSize={11} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} fontSize={11} />
                        <Tooltip
                          cursor={{ fill: 'hsl(var(--muted))' }}
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }}
                          formatter={(v) => [`${v} XP`, 'النقاط']}
                        />
                        <Bar dataKey="xp" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} maxBarSize={48} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 md:col-span-2 lg:col-span-3">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <CardTitle>المستوى الحالي</CardTitle>
                  </div>
                  <CardDescription>{LEVEL_MAP[stats.level] ?? stats.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-primary">{stats.currentLevelXp} XP</span>
                      <span className="text-muted-foreground">{stats.nextLevelXp} XP</span>
                    </div>
                    <div className="relative">
                      <Progress value={(stats.currentLevelXp / stats.nextLevelXp) * 100} className="h-4 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-foreground drop-shadow">
                          {Math.round((stats.currentLevelXp / stats.nextLevelXp) * 100)}%
                        </span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link href="/roadmap" className="w-full flex items-center justify-between p-4 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all group border border-primary/20">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                          <span className="font-semibold">واصل رحلتك</span>
                        </div>
                        <ChevronLeft className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : null}

        {/* ── كرت هدف التعلّم ── */}
        {goal && (
          <div className="mb-8">
            <div style={{
              background: `linear-gradient(135deg, ${goal.color}, ${goal.color}cc)`,
              borderRadius: 18, padding: "18px 20px",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{ fontSize: 40 }}>{goal.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 600, marginBottom: 2 }}>
                  هدفك الحالي
                </div>
                <div style={{ color: "#fff", fontSize: 18, fontWeight: 900 }}>
                  {goal.title}
                </div>
              </div>
              <button
                onClick={() => setShowGoalEdit(v => !v)}
                style={{
                  background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 12,
                  color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 14px", cursor: "pointer",
                }}>
                تغيير
              </button>
            </div>

            {/* خيارات تغيير الهدف */}
            {showGoalEdit && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>
                {GOALS.filter(g => g.id !== goal.id).map(g => (
                  <button
                    key={g.id}
                    onClick={() => { setGoal(g.id); setGoalState(g); setShowGoalEdit(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px", borderRadius: 14, cursor: "pointer",
                      background: "hsl(var(--card))", border: "2px solid hsl(var(--border))",
                      textAlign: "right",
                    }}>
                    <span style={{ fontSize: 24 }}>{g.emoji}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "hsl(var(--foreground))", flex: 1, direction: "rtl" }}>
                      {g.title}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        )}

        {/* ── تحليل نقاط القوة والضعف ── */}
        {skillStats.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-cyan-400" />
              تحليل مهاراتك
            </h2>

            {/* تنبيه أضعف مهارة */}
            {weakest && (
              <div style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                borderRadius: 16, padding: "16px 18px", marginBottom: 16,
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{ fontSize: 36 }}>{weakest.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 2 }}>
                    ركّز على: {weakest.skill}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.9)", fontSize: 13 }}>
                    إتقانك {weakest.mastery}% — تدرّب أكثر على هذه المهارة لتقويتها
                  </div>
                </div>
              </div>
            )}

            {/* قائمة المهارات مع نسب الإتقان */}
            <Card>
              <CardContent className="p-4 space-y-3">
                {skillStats.slice(0, 8).map((s) => {
                  const barColor = s.mastery >= 80 ? "#22c55e" : s.mastery >= 60 ? "#f59e0b" : "#ef4444";
                  return (
                    <div key={s.skill}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span style={{ fontSize: 18 }}>{s.emoji}</span>
                          <span className="text-sm font-semibold">{s.skill}</span>
                        </div>
                        <span className="text-sm font-bold" style={{ color: barColor }}>{s.mastery}%</span>
                      </div>
                      <div style={{ height: 8, background: "hsl(var(--muted))", borderRadius: 4, overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.mastery}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          style={{ height: "100%", background: barColor, borderRadius: 4 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            آخر الإنجازات
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {achievementsLoading ? (
              [1, 2, 3].map((i) => <Skeleton key={i} className="h-24 rounded-xl" />)
            ) : recentAchievements.length > 0 ? (
              recentAchievements.map((achievement, i) => (
                <motion.div key={achievement.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                  <Card className="bg-card border-yellow-500/20 bg-yellow-500/5 hover-elevate cursor-default">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-2xl shrink-0 border border-yellow-500/20">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm line-clamp-1">{achievement.name}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-1">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center p-10 bg-muted/30 rounded-xl text-muted-foreground border border-dashed border-muted">
                <div className="text-4xl mb-3">🏆</div>
                <p className="font-medium">أكمل الدروس لتكسب الإنجازات!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Trophy({ className }: { className?: string }) {
  return <Award className={className} />;
}
