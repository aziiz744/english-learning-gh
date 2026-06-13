import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { registerLoginModal } from "@/lib/modal-state";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    registerLoginModal(() => setOpen(true));
  }, []);

  async function handleSend() {
    if (!email.trim()) return;
    setLoading(true);
    setError("");
    const { error: err } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.href },
    });
    setLoading(false);
    if (err) setError("حدث خطأ، تأكد من الإيميل وحاول مجدداً");
    else setSent(true);
  }

  function close() { setOpen(false); setSent(false); setEmail(""); setError(""); }

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
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold">تسجيل الدخول</h2>
              <button onClick={close} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!sent ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-right">
                  أدخل إيميلك وسنرسل لك رابط تسجيل دخول فوري
                </p>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSend()}
                  className="text-left"
                  dir="ltr"
                />
                {error && <p className="text-sm text-red-400 text-right">{error}</p>}
                <Button onClick={handleSend} disabled={loading} className="w-full gap-2">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
                  {loading ? "جاري الإرسال..." : "أرسل رابط الدخول"}
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-3 py-4">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
                <p className="font-bold">تم الإرسال! 📬</p>
                <p className="text-sm text-muted-foreground">
                  راجع إيميلك <span className="text-primary font-medium">{email}</span> واضغط على الرابط للدخول
                </p>
                <Button variant="outline" onClick={close} className="w-full mt-2">حسناً</Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
