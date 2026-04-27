import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MapPage from "./pages/MapPage";
import DashboardPage from "./pages/DashboardPage";
import ReportsPage from "./pages/ReportsPage";
import AlertsPage from "./pages/AlertsPage";
import SubmitReportPage from "./pages/SubmitReportPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyReportsPage from "./pages/MyReportsPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/legal/TermsOfServicePage";
import DataPolicyPage from "./pages/legal/DataPolicyPage";
import CookiePolicyPage from "./pages/legal/CookiePolicyPage";
import NotFound from "./pages/NotFound";
import { useAuthStore } from "./utils/useAuthStore";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";

const queryClient = new QueryClient();

const App = () => {
  const { setUser, clearUser, initUser } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();

      const session = sessionData.session;

      if (!session) {
        clearUser();
        setInitialized(true);
        return;
      }

      const user = session.user;

      // get profile from DB (if you have profiles table)
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      initUser({
        id: user.id,
        email: user.email ?? "",
        name: profile?.name ?? user.user_metadata?.name ?? "",
        phone: profile?.phone ?? user.user_metadata?.phone ?? "",
      });

      setInitialized(true);
    };

    init();
  }, []);

  if (!initialized) {
    return (
      <div className="flex items-center justify-center h-screen">
        {/* <img
          src="/logo.png"
          alt="CO-FLARE logo"
          className="w-30 h-30 animate-spin [animation-duration:4s] opacity-60"
        /> */}
        Loading...
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/submit" element={<SubmitReportPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/my-reports" element={<MyReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/data-policy" element={<DataPolicyPage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
