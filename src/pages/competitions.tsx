import { Layout } from "@/components/layout";
import { Mascot } from "@/components/mascot";
import { motion } from "framer-motion";
import { Zap, Lock, Clock } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Competitions() {
  const { user } = useAuth();
  const [todayXp, setTodayXp] = useState(0);

  useEffect(() => {
    if (!user) return;
    supabase.from("user_stats").select("weekly_xp").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => {
        if (data?.weekly_xp) {
          const arr = data.weekly_xp as number[];
          const today = new Date().getDay();
          setTodayXp(arr[today] ?? 0);
        }
      });
  }, [user]);

  const dailyGoal = 10;
  const progress = Math.min(100, (todayXp / dailyGoal) * 100);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
        {/* بانر ترحيبي */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-6 flex items-center gap-4"
          style={{ background: "linear-gradient(135deg, #a855f7, #7c3aed)" }}>
          <div className="shrink-0">
            <Mascot state="correct" className="w-24 h-24" />
          </div>
          <div className="flex-1 text-right" style={{ direction: "rtl" }}>
            <h1 className="text-2xl font-extrabold text-white mb-1">مرحبًا بعودتك!</h1>
            <p className="text-white/90 text-sm font-medium">أكمل المسابقات للحصول على جوائز!</p>
          </div>
          {/* نجوم زينة */}
          <span className="absolute top-4 left-6 text-white/60 text-xl">✨</span>
          <span className="absolute bottom-5 left-16 text-white/40 text-lg">✨</span>
        </motion.div>

        {/* عنوان + المؤقّت */}
        <div className="flex items-center justify-between" style={{ direction: "rtl" }}>
          <h2 className="text-xl font-extrabold text-foreground">المسابقات اليومية</h2>
          <div className="flex items-center gap-1.5 text-purple-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-bold">13 ساعة</span>
          </div>
        </div>

        {/* مسابقة اليوم — احصل على XP */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="rounded-2xl border-2 border-border bg-card p-4 flex items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)" }}>
            <Zap className="w-6 h-6 text-white" fill="white" />
          </div>
          <div className="flex-1" style={{ direction: "rtl" }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-extrabold text-foreground">احصل على {dailyGoal} XP</span>
            </div>
            <div className="h-5 bg-muted rounded-full overflow-hidden relative">
              <motion.div animate={{ width: `${progress}%` }} transition={{ duration: 0.6 }}
                className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #fbbf24, #f59e0b)" }} />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                {todayXp} / {dailyGoal}
              </span>
            </div>
          </div>
        </motion.div>

        {/* مسابقات مقفلة */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="rounded-2xl border-2 border-border bg-card/50 p-5 flex items-center gap-4 opacity-70">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
            <Lock className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="flex-1 text-sm font-bold text-muted-foreground text-center" style={{ direction: "rtl" }}>
            ستتاح قريبًا مسابقات أكثر
          </p>
        </motion.div>

        {/* ملاحظة تحفيزية */}
        <p className="text-center text-xs text-muted-foreground" style={{ direction: "rtl" }}>
          أكمل دروسك اليومية لتجمع XP وتفوز بالمسابقات! 🏆
        </p>
      </div>
    </Layout>
  );
}
