// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { scrollToTop } from "@/utils/scrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SystemDetails from "./pages/SystemDetails";
import Systems from "./pages/Systems";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Purchase from "./pages/Purchase";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Trial from "./pages/Trial";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Importe os novos componentes de status de pagamento
import PurchaseStatusPage from "./pages/PurchaseSuccess";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sistemas" element={<Systems />} />
            <Route path="/sistema/:id" element={<SystemDetails />} />
            <Route path="/demo/:id" element={<Demo />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/trial" element={<Trial />} />
            <Route path="/comprar/:id" element={<Purchase />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            {/* Novas rotas de status de pagamento */}
            <Route path="/purchase-success" element={<PurchaseStatusPage status="success" />} />
            <Route path="/purchase-failure" element={<PurchaseStatusPage status="failure" />} />
            <Route path="/purchase-pending" element={<PurchaseStatusPage status="pending" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;