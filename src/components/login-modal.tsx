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
      const { error: err } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: `${window.location.origin}/reset-password` },
      });
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
