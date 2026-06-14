import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ResetPassword() {
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Check if we have a valid session from the reset link
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
      else setError("رابط غير صالح أو منتهي الصلاحية");
    });
  }, []);

  async function handleReset() {
    if (!password || password.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }
    if (password !== confirm) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }
    setLoading(true);
    setError("");
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) setError("حدث خطأ: " + err.message);
    else {
      setDone(true);
      setTimeout(() => setLocation("/"), 2000);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl w-full max-w-sm p-6 shadow-2xl"
      >
        <div className="text-center mb-6">
          <Lock className="w-12 h-12 mx-auto text-primary mb-3" />
          <h1 className="text-xl font-bold">تغيير كلمة المرور</h1>
          <p className="text-sm text-muted-foreground mt-1">أدخل كلمة المرور الجديدة</p>
        </div>

        {done ? (
          <div className="text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
            <p className="font-bold text-green-400">تم تغيير كلمة المرور!</p>
            <p className="text-sm text-muted-foreground">جاري تحويلك للصفحة الرئيسية...</p>
          </div>
        ) : !ready ? (
          <div className="text-center text-red-400 text-sm">{error || "جاري التحقق..."}</div>
        ) : (
          <div className="space-y-3">
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type={showPass ? "text" : "password"}
                placeholder="كلمة المرور الجديدة"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="pr-10 pl-10"
                dir="ltr"
              />
              <button onClick={() => setShowPass(s => !s)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type={showPass ? "text" : "password"}
                placeholder="تأكيد كلمة المرور"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleReset()}
                className="pr-10"
                dir="ltr"
              />
            </div>

            {error && <p className="text-sm text-red-400 bg-red-500/10 px-3 py-2 rounded-lg">{error}</p>}

            <Button onClick={handleReset} disabled={loading} className="w-full py-5">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "حفظ كلمة المرور"}
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
