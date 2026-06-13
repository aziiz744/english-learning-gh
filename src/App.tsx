import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LoginModal } from "@/components/login-modal";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import Roadmap from "@/pages/roadmap";
import Chapter from "@/pages/chapter";
import Lessons from "@/pages/lessons";
import LessonDetail from "@/pages/lesson-detail";
import Achievements from "@/pages/achievements";
import LevelTest from "@/pages/level-test";
import Admin from "@/pages/admin";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/chapter/:level" component={Chapter} />
      <Route path="/lessons" component={Lessons} />
      <Route path="/lessons/:id" component={LessonDetail} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/level-test/:level" component={LevelTest} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <LoginModal />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
