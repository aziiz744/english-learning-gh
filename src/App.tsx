import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState, lazy, Suspense } from "react";
import { supabase } from "@/lib/supabase";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LoginModal } from "@/components/login-modal";
import { ErrorBoundary } from "@/components/error-boundary";
import { WelcomeModal } from "@/components/welcome-modal";
import { SplashScreen } from "@/components/splash-screen";

// الصفحات الأساسية (تُحمّل فوراً لأنها أول ما يُفتح)
import Roadmap from "@/pages/roadmap";
import NotFound from "@/pages/not-found";

// باقي الصفحات تُحمّل عند الحاجة فقط (lazy) — يسرّع فتح التطبيق
const Dashboard = lazy(() => import("@/pages/dashboard"));
const Chapter = lazy(() => import("@/pages/chapter"));
const Lessons = lazy(() => import("@/pages/lessons"));
const LessonDetail = lazy(() => import("@/pages/lesson-detail"));
const UnitLesson = lazy(() => import("@/pages/unit-lesson"));
const Achievements = lazy(() => import("@/pages/achievements"));
const LevelTest = lazy(() => import("@/pages/level-test"));
const Admin = lazy(() => import("@/pages/admin"));
const Reading = lazy(() => import("@/pages/reading"));
const Competitions = lazy(() => import("@/pages/competitions"));
const SectionTest = lazy(() => import("@/pages/section-test"));
const Grammar = lazy(() => import("@/pages/grammar"));
const Pro = lazy(() => import("@/pages/pro"));
const ResetPassword = lazy(() => import("@/pages/reset-password"));
const TeacherPage = lazy(() => import("@/pages/teacher"));
const AdminStats = lazy(() => import("@/pages/admin-stats"));
const Privacy = lazy(() => import("@/pages/privacy"));
const ReviewLibrary = lazy(() => import("@/pages/review-library"));

const queryClient = new QueryClient();

// شاشة تحميل أنيقة أثناء تحميل الصفحات الكسولة
function PageLoader() {
  return (
    <div style={{
      minHeight: "70vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 16,
    }}>
      <img src="/logo.png" alt="مسار الإنجليزية" width={64} height={64}
        style={{ width: 64, height: 64, borderRadius: 18, animation: "logoPulse 1.4s ease-in-out infinite" }} />
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        border: "3px solid hsl(var(--muted))", borderTopColor: "#16B6C6",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes logoPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(0.94); } }
      `}</style>
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  // العودة لأعلى الصفحة عند كل انتقال (تجربة أفضل)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <Suspense fallback={<PageLoader />}>
    <Switch>
      <Route path="/" component={Roadmap} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/chapter/:level" component={Chapter} />
      <Route path="/lessons" component={Lessons} />
      <Route path="/lessons/:id" component={LessonDetail} />
      <Route path="/u/:id" component={UnitLesson} />
      <Route path="/jump/:unitId" component={UnitLesson} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/level-test/:level" component={LevelTest} />
      <Route path="/admin" component={Admin} />
      <Route path="/reading" component={Reading} />
      <Route path="/competitions" component={Competitions} />
      <Route path="/section-test" component={SectionTest} />
      <Route path="/grammar" component={Grammar} />
      <Route path="/pro" component={Pro} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/teacher" component={TeacherPage} />
      <Route path="/admin-stats" component={AdminStats} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/review" component={ReviewLibrary} />
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

function App() {
  const [isRecovery, setIsRecovery] = useState(false);
  // شاشة الترحيب: تظهر مرّة عند فتح التطبيق
  const [showSplash, setShowSplash] = useState(() => {
    // لا تظهر إذا كانت الجلسة مفتوحة سابقاً (تنقّل داخلي)
    try { return !sessionStorage.getItem("splashShown"); } catch { return true; }
  });

  useEffect(() => {
    if (!showSplash) {
      try { sessionStorage.setItem("splashShown", "1"); } catch { /* ignore */ }
    }
  }, [showSplash]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsRecovery(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  if (isRecovery) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Suspense fallback={<PageLoader />}>
            <ResetPassword onDone={() => setIsRecovery(false)} />
          </Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <LoginModal />
          <WelcomeModal />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
