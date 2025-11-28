

import { useAOSInit } from "./hooks/useAOSInit";
import Header from "./components/Header";
import MainPage from "./sections/MainPage";
import Footer from "./components/Footer";

export default function App() {

  useAOSInit();

  return (
    <div className="relativerelative snap-y snap-mandatory h-screen">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}
