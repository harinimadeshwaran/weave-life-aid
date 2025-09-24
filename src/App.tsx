import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import RegisterDonor from "./pages/RegisterDonor";
import UserDashboard from "./pages/UserDashboard";
import DonorDashboard from "./pages/DonorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Auth Context
interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'donor';
  bloodGroup?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (userData: AuthUser) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthContext.Provider value={{ user, login, logout }}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register/user" element={<RegisterUser />} />
              <Route path="/register/donor" element={<RegisterDonor />} />
              <Route path="/dashboard/user/*" element={<UserDashboard />} />
              <Route path="/dashboard/donor/*" element={<DonorDashboard />} />
              <Route path="/dashboard/admin/*" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
