import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language";
import { ThemeProvider } from "@/contexts/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Levels from "@/pages/Levels";
import LessonsList from "@/pages/LessonsList";
import LessonPage from "@/pages/LessonPage";
import QuizPage from "@/pages/QuizPage";
import ConfusablesPage from "@/pages/ConfusablesPage";
import TranslatorPage from "@/pages/TranslatorPage";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Capacitor } from "@capacitor/core";
import { App as CapacitorApp } from "@capacitor/app";

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
        <Route path="/translator" component={TranslatorPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const [location] = useLocation();

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const listener = CapacitorApp.addListener("backButton", () => {
      if (window.history.length > 1 && location !== "/") {
        window.history.back();
      } else {
        CapacitorApp.exitApp();
      }
    });

    return () => {
      listener.then((l) => l.remove());
    };
  }, [location]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <div className="min-h-screen flex flex-col">
                <Router />
                <Footer />
              </div>
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
