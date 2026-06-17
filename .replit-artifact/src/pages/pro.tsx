import { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { Crown, Heart, BookOpen, Zap, Clock, Bell, CheckCircle, XCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProData {
  is_pro: boolean;
  pro_expires_at: string | null;
}

const BENEFITS = [
  { icon: Heart, title: "قلوب لا نهائية 💙", desc: "تدرّب بلا انقطاع — لا خوف من نفاد القلوب أبداً", pro: true },
  { icon: BookOpen, title: "قصص القراءة المتقدمة", desc: "وصول كامل لمكتبة القصص مع الصوت والترجمة الفورية", pro: true },
  { icon: Zap, title: "مراجعة الأخطاء", desc: "الأسئلة التي أخطأت فيها تعود في نهاية التمرين للمراجعة", pro: true },
  { icon: MessageCircle, title: "تحدّث مع معلم AI 👨‍🏫", desc: "محادثة صوتية مع معلم ذكي يصحح أخطاءك ويحسّن مستواك", pro: true },
  { icon: Crown, title: "شارة Pro المميزة", desc: "شارة ذهبية تميزك في لوحة الإنجازات", pro: true },
  { icon: Heart, title: "قلوب محدودة (3 فقط)", desc: "القلوب الافتراضية للحسابات العادية", pro: false },
  { icon: BookOpen, title: "القصص مقفولة", desc: "مكتبة القراءة غير متاحة بدون Pro", pro: false },
];

function DaysBar({ days, total = 30 }: { days: number; total?: number }) {
  const pct = Math.max(0, Math.min(100, (days / total) * 100));
  const color = days <= 3 ? "bg-red-500" : days <= 10 ? "bg-amber-500" : "bg-primary";
  return (
    <div className="space-y-1.5">
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <motion.div className={cn("h-full rounded-full", color)}
          initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1 }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0 يوم</span>
        <span>{total} يوم</span>
      </div>
    </div>
  );
}

export default function Pro() {
  const { user } = useAuth();
  const [proData, setProData] = useState<ProData | null>(null);
  const [loading, setLoading] = useState(true);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    supabase.from("user_stats").select("is_pro, pro_expires_at")
      .eq("user_id", user.id).single()
      .then(({ data }) => {
        setProData(data as ProData);
        if (data?.pro_expires_at) {
          const diff = Math.ceil(
            (new Date(data.pro_expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
          );
          setDaysLeft(diff);
          if (diff <= 3 && diff > 0) setShowAlert(true);
        }
        setLoading(false);
      });
  }, [user]);

  const isPro = proData?.is_pro && daysLeft !== null && daysLeft > 0;

  if (loading) return (
    <Layout>
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4 space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
            <Crown className={cn("w-16 h-16 mx-auto", isPro ? "text-amber-400" : "text-muted-foreground")} />
          </motion.div>
          <h1 className="text-3xl font-bold">عضوية Pro</h1>
          <p className="text-muted-foreground">تجربة تعلم متميزة بدون قيود</p>
        </div>

        {/* Status Card */}
        <Card className={cn("border-2", isPro ? "border-amber-400/50 bg-amber-500/5" : "border-border")}>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">حالة اشتراكك</span>
              {isPro
                ? <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-3 py-1">👑 Pro نشط</Badge>
                : <Badge variant="outline" className="px-3 py-1">مجاني</Badge>
              }
            </div>

            {isPro && daysLeft !== null && (
              <>
                {/* Alert if expiring soon */}
                {showAlert && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                    <Bell className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-red-400">اشتراكك على وشك الانتهاء!</p>
                      <p className="text-xs text-muted-foreground">باقي {daysLeft} {daysLeft === 1 ? "يوم" : "أيام"} فقط — تواصل مع الإدارة للتجديد</p>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">الأيام المتبقية</span>
                    <span className={cn("font-bold text-xl", daysLeft <= 3 ? "text-red-400" : daysLeft <= 10 ? "text-amber-400" : "text-primary")}>
                      {daysLeft} يوم
                    </span>
                  </div>
                  <DaysBar days={daysLeft} />
                  <p className="text-xs text-muted-foreground text-center">
                    ينتهي في: {new Date(proData!.pro_expires_at!).toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
              </>
            )}

            {!isPro && (
              <div className="bg-muted/40 rounded-xl p-4 text-sm text-center space-y-1">
                <p className="font-medium">تريد الترقية إلى Pro؟</p>
                <p className="text-muted-foreground">تواصل مع الإدارة لتفعيل اشتراكك والاستمتاع بكل المزايا</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Benefits */}
        <div>
          <h2 className="text-lg font-bold mb-4">المزايا</h2>
          <div className="space-y-3">
            {BENEFITS.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}>
                <Card className={cn("border", b.pro ? "border-amber-500/20 bg-amber-500/5" : "border-border opacity-60")}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={cn("p-2 rounded-xl", b.pro ? "bg-amber-500/20" : "bg-muted")}>
                      <b.icon className={cn("w-5 h-5", b.pro ? "text-amber-400" : "text-muted-foreground")} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{b.title}</p>
                      <p className="text-xs text-muted-foreground">{b.desc}</p>
                    </div>
                    {b.pro
                      ? <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      : <XCircle className="w-5 h-5 text-muted-foreground/40 flex-shrink-0" />
                    }
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compare */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-bold mb-4 text-center">مقارنة الخطط</h3>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="font-medium text-muted-foreground">الميزة</div>
              <div className="font-bold">مجاني</div>
              <div className="font-bold text-amber-400">👑 Pro</div>
              {[
                ["القلوب", "3 قلوب", "∞ لا نهائية 💙"],
                ["القصص", "مقفولة 🔒", "كاملة ✅"],
                ["مراجعة الأخطاء", "❌", "✅"],
                ["شارة مميزة", "❌", "✅"],
              ].map(([feat, free, pro], i) => (
                <>
                  <div key={`f${i}`} className="text-muted-foreground py-2 border-t border-border">{feat}</div>
                  <div key={`fr${i}`} className="py-2 border-t border-border">{free}</div>
                  <div key={`p${i}`} className="py-2 border-t border-border text-amber-400">{pro}</div>
                </>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </Layout>
  );
}
