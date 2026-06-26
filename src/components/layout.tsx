import { Link, useLocation } from "wouter";
import {
  Route, Trophy, Flame, Zap,
  Shield, LogIn, LogOut, User, X,
  Sparkles, BookMarked, MoreHorizontal, ChevronRight, Activity, Lock, Library,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetStats, type UserStats } from "@/lib/api-hooks";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/mascot";
import { useState, useEffect, useCallback, useRef, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Bottom nav: 5 items max ──
const BOTTOM_NAV = [
  { name: "الخارطة",  href: "/",          icon: Route },
  { name: "المراجعة", href: "/review",     icon: Library },
  { name: "المسابقات", href: "/competitions", icon: Zap },
  { name: "المزيد",    href: "__more__",    icon: MoreHorizontal },
];

// ── Sidebar / drawer: full list ──
const navigation = [
  { name: "خارطة التعلم",   href: "/",            icon: Route },
  { name: "الإنجازات",      href: "/achievements",icon: Trophy },
  { name: "مكتبة المراجعة", href: "/review",      icon: Library },
  { name: "المسابقات",      href: "/competitions",icon: Zap },
  { name: "القراءة",        href: "/reading",     icon: BookMarked },
  { name: "عضوية Pro",      href: "/pro",         icon: Sparkles },
];

const TUTOR_TIPS = [
  "مرحباً! أنا أستاذك الخاص في الإنجليزية 👋",
  "التكرار هو مفتاح الإتقان ✨",
  "درس يومي = تقدم حقيقي 📈",
  "لا تنسَ تفعيل السلسلة اليومية 🔥",
  "حاول الاختبار بعد كل مستوى 🎯",
  "الخطأ جزء من التعلم 💪",
  "أنت أقرب مما تظن من الإتقان 👑",
  "كل جلسة تعلم تقربك خطوة للأمام 🚀",
];

function SidebarMascot() {
  const [tipIdx, setTipIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const nextTip = useCallback(() => {
    setVisible(false);
    setTimeout(() => { setTipIdx(i => (i + 1) % TUTOR_TIPS.length); setVisible(true); }, 300);
  }, []);
  useEffect(() => { const id = setInterval(nextTip, 5000); return () => clearInterval(id); }, [nextTip]);
  return (
    <button onClick={nextTip} className="w-full px-3 pb-3 flex items-end gap-2 cursor-pointer group" title="انقر للحصول على نصيحة جديدة">
      <div className="shrink-0 transition-transform group-hover:scale-110">
        <Mascot state="idle" className="w-16 h-20" />
      </div>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div key={tipIdx} initial={{ opacity:0, x:-6 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:6 }} transition={{ duration:0.25 }}
            className="flex-1 bg-primary/10 border border-primary/20 rounded-xl rounded-br-sm px-2.5 py-2 text-[11px] font-semibold text-primary text-right leading-snug">
            {TUTOR_TIPS[tipIdx]}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

type AuthUser = ReturnType<typeof useAuth>["user"];

function SidebarContent({ location, stats, user, authLoading, login, logout, onNavClick }: {
  location: string; stats: UserStats | undefined; user: AuthUser;
  authLoading: boolean; login: () => void; logout: () => void; onNavClick?: () => void;
}): React.JSX.Element {
  return (
    <>
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Owlio"
            width={36}
            height={36}
            className="shrink-0 rounded-xl"
            style={{ width: 36, height: 36, objectFit: "cover", display: "block" }}
          />
          <div>
            <span className="font-bold text-lg text-primary tracking-tight leading-none block">Owlio</span>
            <span className="text-xs text-muted-foreground">مسار الإنجليزية</span>
          </div>
        </div>
      </div>

      {/* Streak */}
      {stats && stats.streak > 0 && (
        <div className="mx-4 mt-3 flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-3 py-2">
          <Flame className="h-4 w-4 text-orange-400 shrink-0" />
          <span className="text-sm font-bold text-orange-400">{stats.streak} يوم متواصل</span>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-4 py-4">
          {navigation.map(item => {
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href} onClick={onNavClick}
                className={cn(
                  isActive ? "bg-primary text-primary-foreground shadow-md" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground",
                  "group flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 gap-3"
                )}>
                <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                {item.name}
              </Link>
            );
          })}
          {user?.isAdmin && (
            <Link href="/admin" onClick={onNavClick}
              className={cn(
                location.startsWith("/admin") ? "bg-amber-500/20 text-amber-400" : "text-sidebar-foreground hover:bg-amber-500/10 hover:text-amber-400",
                "group flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 gap-3"
              )}>
              <Shield className="h-5 w-5 shrink-0" />
              لوحة الإدارة
            </Link>
          )}
          {user?.isAdmin && (
            <Link href="/admin-stats" onClick={onNavClick}
              className={cn(
                location.startsWith("/admin-stats") ? "bg-blue-500/20 text-blue-400" : "text-sidebar-foreground hover:bg-blue-500/10 hover:text-blue-400",
                "group flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 gap-3"
              )}>
              <Activity className="h-5 w-5 shrink-0" />
              إحصائيات الموقع
            </Link>
          )}
        </nav>

        {/* XP */}
        {stats && (
          <div className="px-4 pb-2">
            <div className="bg-muted/50 rounded-xl p-3 text-center">
              <div className="text-xs text-muted-foreground mb-1">إجمالي النقاط</div>
              <div className="text-xl font-bold text-primary">{stats.totalXp.toLocaleString()} XP</div>
              <div className="text-xs text-muted-foreground mt-1">{stats.level}</div>
            </div>
          </div>
        )}

        <SidebarMascot />

        {/* Auth */}
        <div className="p-4 border-t border-sidebar-border">
          {authLoading ? (
            <div className="h-10 bg-muted/30 rounded-xl animate-pulse" />
          ) : user ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-border shrink-0">
                  {user.profileImageUrl ? <img src={user.profileImageUrl} alt="" className="w-full h-full object-cover rounded-full" /> : <User className="w-4 h-4 text-primary" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold truncate">
                    {user.firstName ? `${user.firstName} ${user.lastName ?? ""}`.trim() : (user.email ?? "مستخدم")}
                  </div>
                  {user.isAdmin && <div className="text-xs text-amber-400 flex items-center gap-1"><Shield className="w-3 h-3" /> مدير</div>}
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2 text-xs" onClick={logout}>
                <LogOut className="w-3.5 h-3.5" /> تسجيل الخروج
              </Button>
            </div>
          ) : (
            <Button className="w-full gap-2 text-sm" onClick={login}>
              <LogIn className="w-4 h-4" /> تسجيل الدخول
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

// ── More Sheet (slide up) ──
function MoreSheet({ open, onClose, location, user, stats, login, logout }: {
  open: boolean; onClose: () => void; location: string;
  user: AuthUser; stats: UserStats | undefined;
  login: () => void; logout: () => void;
}) {
  const moreItems = [
    { name: "الإنجازات",  href: "/achievements", icon: Trophy },
    { name: "القراءة",    href: "/reading",       icon: BookMarked },
    { name: "عضوية Pro",  href: "/pro",           icon: Sparkles },
    { name: "سياسة الخصوصية", href: "/privacy",   icon: Lock },
  ];
  if (user?.isAdmin) moreItems.push({ name: "لوحة الإدارة", href: "/admin", icon: Shield });
  if (user?.isAdmin) moreItems.push({ name: "إحصائيات الموقع", href: "/admin-stats", icon: Activity });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={onClose} />
          <motion.div key="sheet"
            initial={{ y:"100%" }} animate={{ y:0 }} exit={{ y:"100%" }}
            transition={{ type:"spring", stiffness:340, damping:34, mass: 0.8 }}
            className="fixed bottom-0 inset-x-0 z-50 md:hidden pb-8 pt-4"
            style={{
              background: "hsl(var(--sidebar) / 0.92)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              borderTopLeftRadius: 28, borderTopRightRadius: 28,
              borderTop: "1px solid hsl(var(--sidebar-border) / 0.5)",
              boxShadow: "0 -12px 40px rgba(0,0,0,0.3)",
            }}>

            {/* Handle */}
            <div className="w-10 h-1 bg-muted-foreground/30 rounded-full mx-auto mb-5" />

            {/* User info */}
            {user && (
              <div className="flex items-center gap-3 px-5 pb-4 border-b border-sidebar-border mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-border shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{user.email ?? "مستخدم"}</p>
                  {stats && <p className="text-xs text-primary">{stats.totalXp.toLocaleString()} XP · {stats.level}</p>}
                </div>
                {stats?.streak > 0 && (
                  <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 rounded-lg px-2 py-1">
                    <Flame className="h-3.5 w-3.5 text-orange-400" />
                    <span className="text-xs font-bold text-orange-400">{stats.streak}</span>
                  </div>
                )}
              </div>
            )}

            {/* Links */}
            <div className="px-4 space-y-1.5">
              {moreItems.map((item, i) => {
                const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <motion.div key={item.href}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, type: "spring", stiffness: 400, damping: 30 }}>
                    <Link href={item.href} onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all active:scale-[0.98]",
                        isActive ? "bg-primary/12" : "hover:bg-muted/60"
                      )}
                      style={ isActive ? { border: "1px solid hsl(var(--primary) / 0.3)" } : {} }>
                      <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0", isActive ? "bg-primary/20" : "bg-muted/70")}>
                        <Icon className={cn("w-[19px] h-[19px]", isActive ? "text-primary" : "text-muted-foreground")} />
                      </div>
                      <span className={cn("font-bold text-sm", isActive ? "text-primary" : "text-foreground")}>{item.name}</span>
                      <ChevronRight className={cn("w-4 h-4 mr-auto rotate-180", isActive ? "text-primary" : "text-muted-foreground/50")} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Auth buttons */}
            <div className="px-4 mt-4 pt-4 border-t border-sidebar-border">
              {user ? (
                <button onClick={() => { logout(); onClose(); }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all">
                  <LogOut className="w-5 h-5" />
                  <span className="font-semibold text-sm">تسجيل الخروج</span>
                </button>
              ) : (
                <Button className="w-full gap-2" onClick={() => { login(); onClose(); }}>
                  <LogIn className="w-4 h-4" /> تسجيل الدخول
                </Button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { data: stats } = useGetStats();
  const { user, isLoading: authLoading, login, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // ترتيب الصفحات لتحديد اتجاه السحب (RTL: الخارطة يمين، المسابقات يسار)
  const NAV_ORDER: Record<string, number> = { "/": 0, "/roadmap": 0, "/review": 1, "/competitions": 2 };
  const prevLoc = useRef(location);
  const direction = useRef(0);
  const fromOrder = NAV_ORDER[prevLoc.current];
  const toOrder = NAV_ORDER[location];
  if (location !== prevLoc.current) {
    const goingToRoadmap = location === "/" || location === "/roadmap";
    if (goingToRoadmap) {
      direction.current = 0; // الخارطة فيها عناصر ثابتة (الدليل) → تلاشٍ فقط لتجنّب كسرها
    } else if (fromOrder !== undefined && toOrder !== undefined) {
      direction.current = toOrder > fromOrder ? 1 : -1;
    } else {
      direction.current = 0;
    }
    prevLoc.current = location;
  }

  const sharedProps = { location, stats, user, authLoading, login, logout };

  // الجواهر للهيدر (تقريب من XP: كل 10 XP ≈ جوهرة، مبسّط)
  const headerGems = stats ? Math.floor((stats.totalXp ?? 0) / 10) : 0;

  // صفحات "غامرة" تخفي الهيدر والشريط السفلي (التمارين، الاختبارات)
  const isImmersive = /^\/(u|jump|level-test|section-test)\//.test(location) ||
    location === "/section-test" || location === "/reset-password";

  return (
    <div className="min-h-screen text-foreground" dir="rtl"
      style={{
        background: `
          radial-gradient(ellipse 90% 45% at 50% -5%, hsl(185 80% 43% / 0.22), transparent 55%),
          radial-gradient(ellipse 70% 40% at 95% 8%, hsl(160 70% 45% / 0.12), transparent 50%),
          radial-gradient(ellipse 80% 50% at 5% 95%, hsl(200 75% 42% / 0.10), transparent 55%),
          hsl(var(--background))
        `,
        backgroundAttachment: "fixed",
      }}>

      {/* Desktop sidebar */}
      <div className="hidden md:flex w-64 border-l border-sidebar-border bg-sidebar flex-col fixed inset-y-0 right-0 z-40">
        <SidebarContent {...sharedProps} />
      </div>

      {/* Mobile top header — عصري زجاجي عائم (متناسق مع الشريط السفلي) */}
      {!isImmersive && (
      <header className="md:hidden fixed top-0 inset-x-0 z-50"
        style={{
          paddingTop: "max(env(safe-area-inset-top, 0px), 8px)",
          paddingLeft: 14, paddingRight: 14, paddingBottom: 8,
        }}>
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "hsl(var(--sidebar) / 0.78)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid hsl(var(--sidebar-border) / 0.5)",
            borderRadius: 22,
            padding: "7px 14px",
            boxShadow: "0 6px 24px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.05) inset",
            height: 48,
          }}>
          {/* اللوقو + الاسم */}
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <img
              src="/logo.png"
              alt="Owlio"
              width={30}
              height={30}
              className="shrink-0 rounded-xl object-cover"
              style={{ width: 30, height: 30 }}
            />
            <span style={{ fontWeight: 900, fontSize: 17, color: "hsl(var(--primary))", fontFamily: "'Outfit', sans-serif", letterSpacing: 0.3 }}>Owlio</span>
          </div>

          {/* الإحصائيات المصغّرة (ستريك · جواهر · قلوب) */}
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            {/* الستريك */}
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <span style={{ color: "#f97316", fontWeight: 900, fontSize: 13 }}>{stats?.streak ?? 0}</span>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M12 2 C12 6 8 8 8 13 C8 16 10 19 12 19 C14 19 16 16 16 13 C16 11 15 10 15 10 C15 13 13 14 13 12 C13 9 12 6 12 2 Z" fill="#f97316"/>
                <path d="M12 19 C10.5 19 9.5 17 9.5 15 C9.5 17 11 18 12 18 C13 18 14.5 17 14.5 15 C14.5 17 13.5 19 12 19 Z" fill="#fbbf24"/>
              </svg>
            </div>
            {/* الجواهر */}
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <span style={{ color: "#0ea5e9", fontWeight: 900, fontSize: 13 }}>{headerGems}</span>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M6 3 H18 L22 9 L12 22 L2 9 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1"/>
                <path d="M6 3 L9 9 L12 22 L2 9 Z" fill="#7dd3fc" opacity="0.9"/>
                <path d="M18 3 L15 9 L12 22 L22 9 Z" fill="#0ea5e9" opacity="0.7"/>
              </svg>
            </div>
            {/* القلوب */}
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <span style={{ color: "#ef4444", fontWeight: 900, fontSize: 13 }}>5</span>
              <svg width="15" height="15" viewBox="0 0 24 24">
                <path d="M12 21 C5 15 3 11 3 8 C3 5 5 3 8 3 C10 3 11 4.5 12 6 C13 4.5 14 3 16 3 C19 3 21 5 21 8 C21 11 19 15 12 21 Z" fill="#ef4444"/>
              </svg>
            </div>
          </div>
        </div>
      </header>
      )}

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 z-50" onClick={() => setMobileMenuOpen(false)} />
            <motion.div key="drawer" initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }}
              transition={{ type:"spring", stiffness:320, damping:32 }}
              className="md:hidden fixed inset-y-0 right-0 w-72 bg-sidebar border-l border-sidebar-border z-50 flex flex-col overflow-y-auto"
              style={{
                paddingTop: "max(env(safe-area-inset-top, 0px), 12px)",
                paddingBottom: "env(safe-area-inset-bottom, 0px)",
              }}>
              <button onClick={() => setMobileMenuOpen(false)}
                className="absolute left-4 w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center z-10"
                style={{ top: "max(env(safe-area-inset-top, 0px), 12px)" }}>
                <X className="w-4 h-4" />
              </button>
              <SidebarContent {...sharedProps} onNavClick={() => setMobileMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className={cn("md:mr-64 flex flex-col md:pb-0", isImmersive ? "overflow-hidden" : "min-h-screen pb-28 content-top-safe")}
        style={isImmersive ? { height: "100dvh" } : undefined}>
        <main className={cn("safe-x", isImmersive ? "flex-1 min-h-0 flex flex-col overflow-hidden" : "flex-1 px-3 py-4 md:p-8")} style={{ overflow: "hidden" }}>
          <motion.div
            key={location}
            initial={{ opacity: 0, x: direction.current === 0 ? 0 : direction.current * 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", ease: [0.32, 0.72, 0, 1], duration: 0.3 }}
            className={cn("mx-auto w-full", isImmersive ? "flex-1 min-h-0 flex flex-col" : "max-w-6xl")}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Mobile bottom nav — 5 items */}
      {!isImmersive && (
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 10px)", paddingLeft: 14, paddingRight: 14 }}>
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "hsl(var(--sidebar) / 0.78)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid hsl(var(--sidebar-border) / 0.5)",
            borderRadius: 28,
            padding: "8px 10px",
            boxShadow: "0 10px 36px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.05) inset",
            gap: 4,
          }}>
          {BOTTOM_NAV.map(item => {
            const isMore = item.href === "__more__";
            const isActive = isMore
              ? moreOpen
              : (location === item.href || (item.href !== "/" && location.startsWith(item.href)));
            const Icon = item.icon;

            // العنصر النشط = كبسولة بارزة + مؤشّر منزلق (layoutId) سلس
            const content = (
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {isActive && (
                  <motion.div
                    layoutId="navActiveCapsule"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    style={{
                      position: "absolute", inset: 0,
                      background: "hsl(var(--primary))",
                      borderRadius: 18,
                      boxShadow: "0 4px 14px hsl(var(--primary) / 0.45)",
                    }}
                  />
                )}
                <div style={{
                  position: "relative", zIndex: 1,
                  display: "flex", alignItems: "center", gap: isActive ? 7 : 0,
                  padding: isActive ? "10px 16px" : "11px",
                  transition: "padding 0.2s ease, gap 0.2s ease",
                }}>
                  <Icon className={isActive ? "h-[21px] w-[21px]" : "h-[22px] w-[22px]"}
                    style={{ color: isActive ? "white" : "hsl(var(--muted-foreground))", strokeWidth: isActive ? 2.5 : 2, transition: "color 0.2s" }} />
                  <motion.span
                    animate={{ width: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: 13, fontWeight: 800, color: "white", whiteSpace: "nowrap", overflow: "hidden" }}>
                    {isMore ? "المزيد" : item.name}
                  </motion.span>
                </div>
              </div>
            );

            const wrapStyle: CSSProperties = {
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", background: "none", border: "none", padding: 0,
            };

            if (isMore) {
              return (
                <button key="more" onClick={() => setMoreOpen(true)} style={wrapStyle}>
                  {content}
                </button>
              );
            }
            return (
              <Link key={item.href} href={item.href} style={wrapStyle}>
                {content}
              </Link>
            );
          })}
        </div>
      </nav>
      )}

      {/* More Sheet */}
      <MoreSheet open={moreOpen} onClose={() => setMoreOpen(false)}
        location={location} user={user} stats={stats}
        login={login} logout={logout} />
    </div>
  );
}
