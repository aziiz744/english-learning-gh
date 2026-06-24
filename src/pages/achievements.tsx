import { useGetAchievements } from "@/lib/api-hooks";
import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { Trophy, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Achievements() {
  const { data: achievements, isLoading } = useGetAchievements();

  const earnedCount = achievements?.filter(a => a.isEarned).length || 0;
  const totalCount = achievements?.length || 0;

  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 bg-card p-4 md:p-6 rounded-2xl border border-yellow-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 md:gap-3">
              <Trophy className="h-7 w-7 md:h-8 md:w-8 text-yellow-400" />
              الإنجازات
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1">أكمل المهام واكسب الشارات المميزة</p>
          </div>

          <div className="flex items-center gap-3 md:gap-4 w-full md:min-w-[220px] md:w-auto">
            <div className="p-2.5 md:p-3 bg-yellow-500/10 rounded-full border border-yellow-500/20 shrink-0">
              <Trophy className="w-6 h-6 md:w-7 md:h-7 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between text-sm mb-2 font-bold">
                <span className="text-foreground">مكتسبة</span>
                <span className="text-yellow-400">{earnedCount} / {totalCount}</span>
              </div>
              <Progress value={totalCount > 0 ? (earnedCount / totalCount) * 100 : 0} className="h-3" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map((i) => <Skeleton key={i} className="h-44 rounded-xl" />)
          ) : achievements?.length ? (
            achievements.map((achievement, i) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
              >
                <Card
                  className={cn(
                    "overflow-hidden transition-all duration-300 h-full",
                    achievement.isEarned
                      ? "border-yellow-500/30 bg-yellow-500/5 hover-elevate"
                      : "border-border bg-card/50 opacity-60"
                  )}
                >
                  <CardContent className="p-4 md:p-6 text-center flex flex-col items-center">
                    <div className={cn(
                      "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-3 md:mb-4 shadow-sm relative",
                      achievement.isEarned
                        ? "bg-yellow-500/10 border-2 border-yellow-500/30"
                        : "bg-muted border-2 border-border"
                    )}>
                      {achievement.isEarned ? achievement.icon : <Lock className="w-7 h-7 text-muted-foreground" />}
                      {achievement.isEarned && (
                        <div className="absolute -top-1 -left-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground font-bold">✓</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold mb-1 line-clamp-1 text-sm">{achievement.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2 h-8 leading-relaxed">
                      {achievement.description}
                    </p>

                    {achievement.isEarned ? (
                      <div className="text-xs font-bold text-yellow-400 bg-yellow-500/10 px-3 py-1.5 rounded-full w-full border border-yellow-500/20">
                        ✨ مكتسبة!
                      </div>
                    ) : (
                      <div className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full w-full">
                        يتطلب {achievement.xpRequired.toLocaleString()} XP
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : null}
        </div>
      </div>
    </Layout>
  );
}
