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
  is_online?: boolean;
}

export default function Admin() {
  const { user, isLoading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    if (authLoading) return; // wait for auth to finish
    if (!user?.isAdmin) { setLocation("/"); return; }
    loadUsers();
  }, [user, authLoading]);

  async function loadUsers() {
    setLoading(true);
    try {
      // Get all user stats
      const { data: stats } = await supabase.from("user_stats").select("*");
      const { data: progress } = await supabase.from("user_progress").select("user_id");
      const { data: sessions } = await supabase.from("user_sessions").select("*");

      // Count online (last 5 min)
      const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
      const online = sessions?.filter(s => s.last_seen > fiveMinAgo) ?? [];
      setOnlineCount(online.length);

      // Build user list from stats
      const progressMap: Record<string, number> = {};
      progress?.forEach((p: any) => {
        progressMap[p.user_id] = (progressMap[p.user_id] ?? 0) + 1;
      });

      const userList: UserData[] = (stats ?? []).map((s: any) => ({
        id: s.user_id,
        email: "مستخدم " + s.user_id.slice(0, 8),
        created_at: s.updated_at ?? new Date().toISOString(),
        last_sign_in_at: s.updated_at ?? new Date().toISOString(),
        stats: s,
        progress_count: progressMap[s.user_id] ?? 0,
        is_online: online.some((o: any) => o.user_id === s.user_id),
      }));

      setUsers(userList);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  async function togglePro(userId: string, current: boolean) {
    await supabase.from("user_stats").update({ is_pro: !current }).eq("user_id", userId);
    loadUsers();
  }

  async function deleteUser(userId: string) {
    if (!confirm("هل أنت متأكد من حذف هذا المستخدم؟")) return;
    await supabase.from("user_progress").delete().eq("user_id", userId);
    await supabase.from("user_stats").delete().eq("user_id", userId);
    await supabase.from("user_sessions").delete().eq("user_id", userId);
    loadUsers();
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
                        <div className="text-xs text-muted-foreground flex gap-3 mt-0.5">
                          <span>⚡ {u.stats?.total_xp ?? 0} XP</span>
                          <span>📚 {u.progress_count} درس</span>
                          <span>🔥 {u.stats?.streak ?? 0} يوم</span>
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
                        onClick={() => deleteUser(u.id)}
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
