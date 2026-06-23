import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { registerLoginModal } from "@/lib/modal-state";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, Loader2, Eye, EyeOff, UserPlus, LogIn, KeyRound, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Mode = "login" | "register" | "forgot";

export function LoginModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    registerLoginModal(() => {
      setOpen(true);
      setMode("login");
      setError("");
      setSuccess("");
      setEmail("");
      setPassword("");
    });
  }, []);

  function reset() {
    setError("");
    setSuccess("");
  }

  async function handleSubmit() {
    setError("");
    setSuccess("");

    if (!email.trim()) { setError("أدخل البريد الإلكتروني"); return; }

    if (mode === "forgot") {
      setLoading(true);
      const { error: err } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      setLoading(false);
      if (err) setError("حدث خطأ، تأكد من الإيميل");
      else setSuccess("✅ تم الإرسال! راجع بريدك الإلكتروني");
      return;
    }

    if (!password.trim()) { setError("أدخل كلمة المرور"); return; }
    if (password.length < 6) { setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل"); return; }

    setLoading(true);

    if (mode === "login") {
      const { error: err } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      setLoading(false);
      if (err) {
        if (err.message.includes("Invalid login credentials")) setError("إيميل أو كلمة المرور غير صحيحة");
        else if (err.message.includes("Email not confirmed")) setError("يرجى تأكيد بريدك الإلكتروني أولاً");
        else setError("حدث خطأ، حاول مجدداً");
      } else {
        close();
      }
    } else {
      const { data: signUpData, error: err } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: `${window.location.origin}/reset-password` },
      });
      if (!err && signUpData?.user) {
        // Save gender to user_stats
        await supabase.from("user_stats").upsert({
          user_id: signUpData.user.id,
          email: email.trim(),
          gender,
          total_xp: 0, streak: 0, exercises_completed: 0,
        });
      }
      setLoading(false);
      if (err) {
        if (err.message.includes("already registered")) setError("هذا الإيميل مسجل مسبقاً");
        else setError("حدث خطأ: " + err.message);
      } else {
        setSuccess("✅ تم إنشاء الحساب! يمكنك الدخول الآن.");
        setTimeout(() => { setMode("login"); setSuccess(""); }, 2000);
      }
    }
  }

  // ── تسجيل الدخول بحساب Google ──
  async function handleGoogle() {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (err) {
        setLoading(false);
        setError("تعذّر التسجيل بجوجل، حاول مجدداً");
      }
      // عند النجاح، المتصفّح يعيد التوجيه لجوجل ثم يرجع تلقائياً
    } catch {
      setLoading(false);
      setError("تعذّر التسجيل بجوجل، حاول مجدداً");
    }
  }

  function close() {
    setOpen(false);
    setEmail("");
    setPassword("");
    setError("");
    setSuccess("");
    setMode("login");
  }

  const titles: Record<Mode, string> = {
    login: "تسجيل الدخول",
    register: "إنشاء حساب جديد",
    forgot: "استعادة كلمة المرور",
  };

  const subtitles: Record<Mode, string> = {
    login: "أهلاً بعودتك 👋",
    register: "ابدأ رحلتك مع الإنجليزية 🚀",
    forgot: "سنرسل لك رابط إعادة التعيين 📧",
  };

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
                <h2 className="text-lg font-bold">{titles[mode]}</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{subtitles[mode]}</p>
              </div>
              <button onClick={close} className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={mode}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-3"
              >
                {/* Email field */}
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="pr-10 text-left"
                    dir="ltr"
                    autoComplete="email"
                  />
                </div>

                {/* Gender selector - only in register */}
                {mode === "register" && (
                  <div className="space-y-1.5">
                    <p className="text-xs text-muted-foreground text-right">الجنس</p>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setGender("male")}
                        className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-medium transition-all flex items-center justify-center gap-2
                          ${gender === "male" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                        👨‍🎓 ذكر
                      </button>
                      <button type="button" onClick={() => setGender("female")}
                        className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-medium transition-all flex items-center justify-center gap-2
                          ${gender === "female" ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                        👩‍🎓 أنثى
                      </button>
                    </div>
                  </div>
                )}

                {/* Password field - not shown in forgot mode */}
                {mode !== "forgot" && (
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
                      autoComplete={mode === "login" ? "current-password" : "new-password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(s => !s)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                )}

                {/* Forgot password link */}
                {mode === "login" && (
                  <div className="text-left">
                    <button
                      onClick={() => { setMode("forgot"); reset(); }}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      نسيت كلمة المرور؟
                    </button>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-sm text-red-400 text-right bg-red-500/10 px-3 py-2 rounded-lg border border-red-500/20">
                    ⚠️ {error}
                  </motion.p>
                )}

                {/* Success */}
                {success && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{success}</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-5 text-base font-bold"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : mode === "login" ? (
                    <><LogIn className="w-4 h-4 mr-2" /> دخول</>
                  ) : mode === "register" ? (
                    <><UserPlus className="w-4 h-4 mr-2" /> إنشاء الحساب</>
                  ) : (
                    <><KeyRound className="w-4 h-4 mr-2" /> إرسال رابط الاستعادة</>
                  )}
                </Button>

                {/* فاصل "أو" + زر جوجل — يظهر فقط في الدخول والتسجيل */}
                {mode !== "forgot" && (
                  <>
                    <div className="flex items-center gap-3 py-1">
                      <div className="flex-1 h-px bg-border" />
                      <span className="text-xs text-muted-foreground">أو</span>
                      <div className="flex-1 h-px bg-border" />
                    </div>

                    <button
                      onClick={handleGoogle}
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-border bg-card hover:bg-muted transition-colors font-bold text-sm disabled:opacity-60"
                    >
                      <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                      </svg>
                      <span>المتابعة بحساب Google</span>
                    </button>
                  </>
                )}

                {/* Mode switcher */}
                <div className="text-center text-sm text-muted-foreground pt-1 space-y-1">
                  {mode === "login" && (
                    <p>
                      ما عندك حساب؟{" "}
                      <button onClick={() => { setMode("register"); reset(); }}
                        className="text-primary font-medium hover:underline">
                        سجّل الآن
                      </button>
                    </p>
                  )}
                  {mode === "register" && (
                    <p>
                      عندك حساب؟{" "}
                      <button onClick={() => { setMode("login"); reset(); }}
                        className="text-primary font-medium hover:underline">
                        سجّل دخول
                      </button>
                    </p>
                  )}
                  {mode === "forgot" && (
                    <p>
                      <button onClick={() => { setMode("login"); reset(); }}
                        className="text-primary font-medium hover:underline">
                        ← رجوع لتسجيل الدخول
                      </button>
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
