import { Link, useLocation } from "wouter";
import {
  Route, Trophy, Flame,
  Shield, LogIn, LogOut, User, Menu, X,
  Sparkles, BookMarked, MoreHorizontal, ChevronRight, Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetStats, type UserStats } from "@/lib/api-hooks";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { OwlMascot } from "@/components/owl-mascot";
import owlImg from "@/assets/owl-mascot.png";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Bottom nav: 5 items max ──
const BOTTOM_NAV = [
  { name: "الخارطة",  href: "/",          icon: Route },
  { name: "الإنجازات", href: "/achievements", icon: Trophy },
  { name: "القراءة",   href: "/reading",    icon: BookMarked },
  { name: "المزيد",    href: "__more__",    icon: MoreHorizontal },
];

// ── Sidebar / drawer: full list ──
const navigation = [
  { name: "خارطة التعلم",   href: "/",            icon: Route },
  { name: "الإنجازات",      href: "/achievements",icon: Trophy },
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
        <OwlMascot state="auto" size={76} />
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
          <img src={owlImg} alt="مسار الإنجليزية" className="w-10 h-10 object-contain shrink-0" draggable={false} />
          <div>
            <span className="font-bold text-lg text-primary tracking-tight leading-none block">مسار الإنجليزية</span>
            <span className="text-xs text-muted-foreground">EnglishPath</span>
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
            transition={{ type:"spring", stiffness:300, damping:30 }}
            className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-sidebar rounded-t-3xl border-t border-sidebar-border pb-8 pt-4 shadow-2xl">

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
            <div className="px-4 space-y-1">
              {moreItems.map(item => {
                const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href} onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all",
                      isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                    )}>
                    <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", isActive ? "bg-primary/15" : "bg-muted")}>
                      <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                    </div>
                    <span className="font-semibold text-sm">{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground mr-auto rotate-180" />
                  </Link>
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

  const sharedProps = { location, stats, user, authLoading, login, logout };

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">

      {/* Desktop sidebar */}
      <div className="hidden md:flex w-64 border-l border-sidebar-border bg-sidebar flex-col fixed inset-y-0 right-0 z-40">
        <SidebarContent {...sharedProps} />
      </div>

      {/* Mobile top header */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 h-14 bg-sidebar border-b border-sidebar-border flex items-center justify-between px-4">
        <button onClick={() => setMobileMenuOpen(true)}
          className="w-9 h-9 rounded-xl bg-muted/50 flex items-center justify-center" aria-label="القائمة">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5">
          <img src={owlImg} alt="مسار الإنجليزية" className="w-8 h-8 object-contain" draggable={false} />
          <span className="font-bold text-sm text-primary">مسار الإنجليزية</span>
        </div>
        {stats && stats.streak > 0 ? (
          <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 rounded-lg px-2 py-1">
            <Flame className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-xs font-bold text-orange-400">{stats.streak}</span>
          </div>
        ) : <div className="w-9" />}
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 z-50" onClick={() => setMobileMenuOpen(false)} />
            <motion.div key="drawer" initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }}
              transition={{ type:"spring", stiffness:320, damping:32 }}
              className="md:hidden fixed inset-y-0 right-0 w-72 bg-sidebar border-l border-sidebar-border z-50 flex flex-col overflow-y-auto">
              <button onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
              <SidebarContent {...sharedProps} onNavClick={() => setMobileMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="md:mr-64 flex flex-col min-h-screen pt-14 md:pt-0 pb-20 md:pb-0">
        <main className="flex-1 p-4 md:p-8">
          <div className="mx-auto max-w-6xl w-full">{children}</div>
        </main>
      </div>

      {/* Mobile bottom nav — 5 items */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-sidebar border-t border-sidebar-border"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="flex items-center justify-around h-16 px-2">
          {BOTTOM_NAV.map(item => {
            if (item.href === "__more__") {
              return (
                <button key="more" onClick={() => setMoreOpen(true)}
                  className={cn(
                    "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all",
                    moreOpen ? "text-primary" : "text-muted-foreground"
                  )}>
                  <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center transition-all", moreOpen ? "bg-primary/15" : "")}>
                    <MoreHorizontal className={cn("h-5 w-5", moreOpen ? "text-primary" : "")} />
                  </div>
                  <span className="text-[10px] font-bold leading-none">المزيد</span>
                </button>
              );
            }
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center transition-all", isActive ? "bg-primary/15" : "")}>
                  <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "")} />
                </div>
                <span className={cn("text-[10px] font-bold leading-none", isActive ? "text-primary" : "")}>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* More Sheet */}
      <MoreSheet open={moreOpen} onClose={() => setMoreOpen(false)}
        location={location} user={user} stats={stats}
        login={login} logout={logout} />
    </div>
  );
}
