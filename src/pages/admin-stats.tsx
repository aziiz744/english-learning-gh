import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Users, TrendingUp, BookOpen, Crown, Activity, Clock, Target, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatsData {
  totalUsers: number;
  proUsers: number;
  activeToday: number;
  activeLast7: number;
  totalLessonsCompleted: number;
  totalXpAwarded: number;
  avgXpPerUser: number;
  avgLessonsPerUser: number;
  topUsers: { email: string; total_xp: number; streak: number; is_pro: boolean; exercises_completed: number }[];
  dailySignups: { date: string; count: number }[];
}

export default function AdminStats() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [data, setData] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    // Wait for auth to load before checking
    if (user === undefined) return; // still loading
    if (user === null || !user?.isAdmin) { setLocation("/"); return; }
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, [user]);

  async function load() {
    setLoading(true);
    try {
      // All stats
      const { data: stats } = await supabase.from("user_stats").select("*");
      // All progress
      const { data: progress } = await supabase.from("user_progress").select("user_id, lesson_id, completed_at");
      // All sessions (online)
      const { data: sessions } = await supabase.from("user_sessions").select("user_id, last_seen");

      const now = new Date();
      const todayStr = now.toDateString();
      const last7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const totalUsers = stats?.length ?? 0;
      const proUsers = stats?.filter(s => s.is_pro).length ?? 0;

      // Active users
      const activeToday = sessions?.filter(s => new Date(s.last_seen).toDateString() === todayStr).length ?? 0;
      const activeLast7 = sessions?.filter(s => new Date(s.last_seen) >= last7).length ?? 0;

      // Lesson completions (unique)
      const progressSet = new Map<string, Set<string>>();
      progress?.forEach(p => {
        if (!progressSet.has(p.user_id)) progressSet.set(p.user_id, new Set());
        progressSet.get(p.user_id)!.add(p.lesson_id);
      });
      const totalLessonsCompleted = Array.from(progressSet.values()).reduce((sum, s) => sum + s.size, 0);

      // XP
      const totalXpAwarded = stats?.reduce((sum, s) => sum + (s.total_xp ?? 0), 0) ?? 0;
      const avgXpPerUser = totalUsers > 0 ? Math.round(totalXpAwarded / totalUsers) : 0;
      const avgLessonsPerUser = totalUsers > 0 ? Math.round(totalLessonsCompleted / totalUsers) : 0;

      // Top 5 users by XP
      const topUsers = (stats ?? [])
        .sort((a, b) => (b.total_xp ?? 0) - (a.total_xp ?? 0))
        .slice(0, 5)
        .map(s => ({ email: s.email ?? "مجهول", total_xp: s.total_xp ?? 0, streak: s.streak ?? 0, is_pro: s.is_pro, exercises_completed: s.exercises_completed ?? 0 }));

      setData({ totalUsers, proUsers, activeToday, activeLast7, totalLessonsCompleted, totalXpAwarded, avgXpPerUser, avgLessonsPerUser, topUsers, dailySignups: [] });
      setLastUpdate(new Date());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  if (!user || !user?.isAdmin) return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const cards = data ? [
    { icon: Users,    label: "إجمالي المستخدمين",  value: data.totalUsers,              color: "text-blue-400",   bg: "bg-blue-500/10" },
    { icon: Crown,    label: "مشتركو Pro",          value: data.proUsers,                color: "text-yellow-400", bg: "bg-yellow-500/10" },
    { icon: Activity, label: "نشطون اليوم",         value: data.activeToday,             color: "text-green-400",  bg: "bg-green-500/10" },
    { icon: Clock,    label: "نشطون (7 أيام)",      value: data.activeLast7,             color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: BookOpen, label: "دروس مكتملة",         value: data.totalLessonsCompleted,   color: "text-cyan-400",   bg: "bg-cyan-500/10" },
    { icon: Zap,      label: "إجمالي XP الممنوح",   value: data.totalXpAwarded.toLocaleString(), color: "text-orange-400", bg: "bg-orange-500/10" },
    { icon: TrendingUp,label: "متوسط XP / مستخدم", value: data.avgXpPerUser,            color: "text-pink-400",   bg: "bg-pink-500/10" },
    { icon: Target,   label: "متوسط دروس / مستخدم", value: data.avgLessonsPerUser,       color: "text-indigo-400", bg: "bg-indigo-500/10" },
  ] : [];

  return (
    <div className="space-y-6 max-w-4xl mx-auto" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">📊 إحصائيات الموقع</h1>
          <p className="text-xs text-muted-foreground mt-1">آخر تحديث: {lastUpdate.toLocaleTimeString("ar")}</p>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading} className="gap-2 rounded-xl">
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          تحديث
        </Button>
      </div>

      {loading && !data ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[...Array(8)].map((_, i) => <div key={i} className="h-24 bg-muted/30 rounded-2xl animate-pulse" />)}
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cards.map((card, i) => (
              <motion.div key={card.label} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-4 space-y-2">
                <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <div className={`text-2xl font-bold ${card.color}`}>{card.value}</div>
                <div className="text-xs text-muted-foreground leading-tight">{card.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Pro conversion rate */}
          {data && data.totalUsers > 0 && (
            <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
              <h2 className="font-bold text-sm">معدل التحويل إلى Pro</h2>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div initial={{ width:0 }} animate={{ width:`${(data.proUsers/data.totalUsers*100).toFixed(1)}%` }}
                    transition={{ duration:1, delay:0.3 }}
                    className="h-full bg-gradient-to-l from-yellow-400 to-yellow-600 rounded-full" />
                </div>
                <span className="text-sm font-bold text-yellow-400 shrink-0">
                  {(data.proUsers / data.totalUsers * 100).toFixed(1)}%
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{data.proUsers} من {data.totalUsers} مستخدم مشترك في Pro</p>
            </div>
          )}

          {/* Top users */}
          {data && data.topUsers.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
              <h2 className="font-bold text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" /> أكثر المستخدمين نشاطاً
              </h2>
              <div className="space-y-2">
                {data.topUsers.map((u, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                      ${i === 0 ? "bg-yellow-500/20 text-yellow-400" : i === 1 ? "bg-gray-400/20 text-gray-400" : i === 2 ? "bg-orange-500/20 text-orange-400" : "bg-muted text-muted-foreground"}`}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate" dir="ltr">{u.email}</p>
                      <p className="text-xs text-muted-foreground">{u.exercises_completed} تمرين • {u.streak} يوم سلسلة</p>
                    </div>
                    <div className="text-left shrink-0 space-y-0.5">
                      <p className="text-xs font-bold text-primary">{u.total_xp.toLocaleString()} XP</p>
                      {u.is_pro && <span className="text-xs text-yellow-400">⭐ Pro</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
