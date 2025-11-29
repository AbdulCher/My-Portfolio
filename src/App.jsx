// ============================================
// App.js - VERSION CORRIGÉE
// ============================================
import { useAOSInit } from "./hooks/useAOSInit";
import Header from "./components/Header";
import MainPage from "./sections/MainPage";
import Footer from "./components/Footer";

export default function App() {
  useAOSInit({
    once: false,
    offset: 120,
    duration: 800
  });

  return (
    <div className="relative">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}