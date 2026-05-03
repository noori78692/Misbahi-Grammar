import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language";
import { ThemeProvider } from "@/contexts/theme";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Levels from "@/pages/Levels";
import LessonsList from "@/pages/LessonsList";
import LessonPage from "@/pages/LessonPage";
import QuizPage from "@/pages/QuizPage";
import ConfusablesPage from "@/pages/ConfusablesPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/levels" component={Levels} />
        <Route path="/level/:level/lessons" component={LessonsList} />
        <Route path="/level/:level/lesson/:id" component={LessonPage} />
        <Route path="/quiz/:level" component={QuizPage} />
        <Route path="/confusables" component={ConfusablesPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
