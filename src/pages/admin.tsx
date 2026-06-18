import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Activity, Trophy, Crown, Ban, Trash2, RefreshCw } from "lucide-react";

interface UserData {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string;
  stats?: { total_xp: number; streak: number; exercises_completed: number; is_pro: boolean };
  progress_count?: number;
  gems?: number;
  current_unit?: number;
  current_unit_title?: string;
  is_online?: boolean;
}

// ترتيب الوحدات (prefix → رقم الوحدة + الاسم)
const UNIT_ORDER: { prefix: string; num: number; title: string }[] = [
  { prefix: "drinks", num: 1,  title: "المشروبات" },
  { prefix: "intro",  num: 2,  title: "التعريف بالنفس" },
  { prefix: "places", num: 3,  title: "الأماكن" },
  { prefix: "airport",num: 4,  title: "المطار" },
  { prefix: "adj",    num: 5,  title: "الصفات" },
  { prefix: "food",   num: 6,  title: "الطعام" },
  { prefix: "pj",     num: 7,  title: "المهن" },
  { prefix: "pr",     num: 8,  title: "المضارع" },
  { prefix: "wt",     num: 9,  title: "الطقس" },
  { prefix: "pet",    num: 10, title: "الحيوانات" },
];
function unitFromLessonId(lessonId: string): { num: number; title: string } | null {
  // طابق أطول prefix أولاً (pj قبل p مثلاً)
  const sorted = [...UNIT_ORDER].sort((a,b)=>b.prefix.length-a.prefix.length);
  for (const u of sorted) {
    if (lessonId.startsWith(u.prefix + "-")) return { num: u.num, title: u.title };
  }
  return null;
}

export default function Admin() {
  const { user, isLoading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    if (authLoading) return;
    if (authLoading) return;
    if (!user?.isAdmin) { setLocation("/"); return; }
    loadUsers();
    // Auto-refresh every 30 seconds to update online status
    const interval = setInterval(loadUsers, 30000);
    return () => clearInterval(interval);
  }, [user, authLoading]);

  async function loadUsers() {
    setLoading(true);
    try {
      const { data: stats } = await supabase.from("user_stats").select("*");
      // التقدم الفعلي في جدول unit_progress (sub_progress 0-4 لكل درس)
      const { data: progress } = await supabase.from("unit_progress").select("user_id, lesson_id, sub_progress");
      const { data: sessions } = await supabase.from("user_sessions").select("*");

      // Count online (last 10 min)
      const fiveMinAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
      const online = sessions?.filter((s: any) => s.last_seen > fiveMinAgo) ?? [];
      setOnlineCount(online.length);

      // لكل مستخدم: عدد الدروس المكتملة + الجواهر + أبعد وحدة وصلها
      const progressMap: Record<string, number> = {};   // دروس مكتملة (sub_progress>=4)
      const gemsMap: Record<string, number> = {};        // مجموع الجواهر
      const unitMap: Record<string, number> = {};        // أعلى رقم وحدة فيها تقدم
      progress?.forEach((p: any) => {
        const done = (p.sub_progress ?? 0) >= 4;
        // الجواهر: كنز=20، تحدي=15، درس عادي=5 (حسب نوع الدرس من lesson_id)
        if (done) {
          progressMap[p.user_id] = (progressMap[p.user_id] ?? 0) + 1;
          const lid = p.lesson_id as string;
          let g = 5;
          if (lid.endsWith("-t")) g = 20;       // كنز المراجعة
          else if (lid.endsWith("-c")) g = 15;  // تحدي الوحدة
          gemsMap[p.user_id] = (gemsMap[p.user_id] ?? 0) + g;
        }
        // أبعد وحدة فيها أي تقدم
        if ((p.sub_progress ?? 0) > 0) {
          const u = unitFromLessonId(p.lesson_id);
          if (u && (!unitMap[p.user_id] || u.num > unitMap[p.user_id])) {
            unitMap[p.user_id] = u.num;
          }
        }
      });

      const statsMap: Record<string, any> = {};
      (stats ?? []).forEach((s: any) => { statsMap[s.user_id] = s; });

      // Get ALL users from auth via SQL function
      const { data: authUsers } = await supabase.rpc("get_all_users");

      const userList: UserData[] = (authUsers ?? []).map((u: any) => {
        const s = statsMap[u.id];
        const unitNum = unitMap[u.id] ?? 0;
        const unitTitle = UNIT_ORDER.find(x => x.num === unitNum)?.title;
        return {
          id: u.id,
          email: u.email ?? `مستخدم-${u.id.slice(0, 8)}`,
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
          stats: s,
          progress_count: progressMap[u.id] ?? 0,
          gems: gemsMap[u.id] ?? 0,
          current_unit: unitNum,
          current_unit_title: unitTitle,
          is_online: online.some((o: any) => o.user_id === u.id),
        };
      });

      setUsers(userList);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  async function togglePro(userId: string, current: boolean) {
    const expiresAt = !current
      ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      : null;

    try {
      // Try RPC first
      const { error: rpcError } = await supabase.rpc("admin_set_pro", {
        target_user_id: userId,
        new_is_pro: !current,
        new_expires_at: expiresAt,
      });

      if (rpcError) {
        // Fallback: direct upsert
        const { error: upsertError } = await supabase
          .from("user_stats")
          .upsert({
            user_id: userId,
            is_pro: !current,
            pro_expires_at: expiresAt,
            total_xp: 0,
            streak: 0,
            exercises_completed: 0,
            weekly_xp: [0,0,0,0,0,0,0],
            last_activity_date: new Date().toISOString().split("T")[0],
          }, { onConflict: "user_id" });

        if (upsertError) throw upsertError;
      }

      await new Promise(r => setTimeout(r, 800));
      await loadUsers();
    } catch (err: any) {
      console.error("Pro grant error:", err);
      alert("حدث خطأ: " + (err?.message ?? "غير معروف"));
    }
  }

  async function deleteUser(userId: string, email: string) {
    if (!confirm(`هل أنت متأكد من حذف مستخدم ${email}؟
سيتم حذف جميع بياناته نهائياً.`)) return;
    
    try {
      const { error } = await supabase.rpc("admin_delete_user", {
        target_user_id: userId,
      });
      if (error) throw error;
      await loadUsers();
    } catch (err: any) {
      console.error("Delete error:", err);
      alert("حدث خطأ أثناء الحذف: " + (err?.message ?? "غير معروف"));
    }
  }

  if (!user?.isAdmin) return null;

  const totalUsers = users.length;
  const proUsers = users.filter(u => u.stats?.is_pro).length;
  const inactiveCount = totalUsers - onlineCount;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Crown className="w-6 h-6 text-amber-400" /> لوحة الإدارة
          </h1>
          <Button variant="outline" size="sm" onClick={loadUsers} className="gap-2">
            <RefreshCw className="w-4 h-4" /> تحديث
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-1 text-blue-400" />
              <div className="text-2xl font-bold">{totalUsers}</div>
              <div className="text-xs text-muted-foreground">إجمالي المستخدمين</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 mx-auto mb-1 text-green-400" />
              <div className="text-2xl font-bold text-green-400">{onlineCount}</div>
              <div className="text-xs text-muted-foreground">متصل الآن</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 mx-auto mb-1 text-gray-400" />
              <div className="text-2xl font-bold text-gray-400">{inactiveCount}</div>
              <div className="text-xs text-muted-foreground">غير نشط</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Crown className="w-6 h-6 mx-auto mb-1 text-amber-400" />
              <div className="text-2xl font-bold text-amber-400">{proUsers}</div>
              <div className="text-xs text-muted-foreground">مشتركو Pro</div>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>المستخدمون</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">جاري التحميل...</div>
            ) : users.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">لا يوجد مستخدمون بعد</div>
            ) : (
              <div className="space-y-3">
                {users.map(u => (
                  <div key={u.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-xl border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${u.is_online ? "bg-green-400" : "bg-gray-500"}`} />
                      <div>
                        <div className="font-medium text-sm flex items-center gap-2">
                          {u.email}
                          {u.stats?.is_pro && <Badge className="bg-amber-500/20 text-amber-400 text-xs">Pro</Badge>}
                        </div>
                        <div className="text-xs text-muted-foreground flex gap-3 mt-0.5 flex-wrap">
                          <span>⚡ {u.stats?.total_xp ?? 0} XP</span>
                          <span>💎 {u.gems ?? 0} جوهرة</span>
                          <span>📚 {u.progress_count} درس</span>
                          <span>🔥 {u.stats?.streak ?? 0} يوم</span>
                          {u.current_unit && u.current_unit > 0 ? (
                            <span className="text-primary font-bold">📍 الوحدة {u.current_unit} ({u.current_unit_title})</span>
                          ) : (
                            <span className="opacity-60">📍 لم يبدأ</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant={u.stats?.is_pro ? "outline" : "default"}
                        className="gap-1 text-xs h-7"
                        onClick={() => togglePro(u.id, u.stats?.is_pro ?? false)}
                      >
                        <Crown className="w-3 h-3" />
                        {u.stats?.is_pro ? "إلغاء Pro" : "منح Pro"}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="gap-1 text-xs h-7"
                        onClick={() => deleteUser(u.id, u.email)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
