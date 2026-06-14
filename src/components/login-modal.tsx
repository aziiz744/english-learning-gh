import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { registerLoginModal } from "@/lib/modal-state";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, Loader2, Eye, EyeOff, UserPlus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Mode = "login" | "register";

export function LoginModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    registerLoginModal(() => { setOpen(true); setMode("login"); setError(""); setSuccess(""); });
  }, []);

  async function handleSubmit() {
    if (!email.trim() || !password.trim()) {
      setError("أدخل الإيميل وكلمة المرور");
      return;
    }
    if (password.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    setLoading(true);
    setError("");

    if (mode === "login") {
      const { error: err } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      setLoading(false);
      if (err) {
        if (err.message.includes("Invalid login")) setError("إيميل أو كلمة المرور غير صحيحة");
        else if (err.message.includes("Email not confirmed")) setError("لم يتم تأكيد الإيميل بعد");
        else setError("حدث خطأ، حاول مجدداً");
      } else {
        close();
      }
    } else {
      const { error: err } = await supabase.auth.signUp({ 
        email: email.trim(), 
        password,
        options: { emailRedirectTo: window.location.href }
      });
      setLoading(false);
      if (err) {
        if (err.message.includes("already registered")) setError("هذا الإيميل مسجل مسبقاً، جرّب تسجيل الدخول");
        else setError("حدث خطأ: " + err.message);
      } else {
        setSuccess("✅ تم إنشاء الحساب! يمكنك الدخول الآن.");
        setTimeout(() => setMode("login"), 1500);
      }
    }
  }

  function close() { 
    setOpen(false); 
    setEmail(""); 
    setPassword(""); 
    setError(""); 
    setSuccess(""); 
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={e => { if (e.target === e.currentTarget) close(); }}
        >
          <motion.div
            className="bg-card border border-border rounded-2xl w-full max-w-sm p-6 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-bold">
                  {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب جديد"}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {mode === "login" ? "أهلاً بعودتك 👋" : "ابدأ رحلتك مع الإنجليزية 🚀"}
                </p>
              </div>
              <button onClick={close} className="text-muted-foreground hover:text-foreground p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="pr-10 text-left"
                  dir="ltr"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type={showPass ? "text" : "password"}
                  placeholder="كلمة المرور"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  className="pr-10 pl-10 text-left"
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(s => !s)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-sm text-red-400 text-right bg-red-500/10 px-3 py-2 rounded-lg">
                  {error}
                </motion.p>
              )}

              {success && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-sm text-green-400 text-right bg-green-500/10 px-3 py-2 rounded-lg">
                  {success}
                </motion.p>
              )}

              <Button onClick={handleSubmit} disabled={loading} className="w-full gap-2 py-5">
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : mode === "login" ? (
                  <LogIn className="w-4 h-4" />
                ) : (
                  <UserPlus className="w-4 h-4" />
                )}
                {loading ? "جاري التحميل..." : mode === "login" ? "دخول" : "إنشاء الحساب"}
              </Button>

              {/* Toggle mode */}
              <div className="text-center text-sm text-muted-foreground pt-1">
                {mode === "login" ? (
                  <>
                    ما عندك حساب؟{" "}
                    <button onClick={() => { setMode("register"); setError(""); }}
                      className="text-primary font-medium hover:underline">
                      سجّل الآن
                    </button>
                  </>
                ) : (
                  <>
                    عندك حساب؟{" "}
                    <button onClick={() => { setMode("login"); setError(""); }}
                      className="text-primary font-medium hover:underline">
                      سجّل دخول
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
