import React from "react";
import Header from "./components/Header";


function App() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
      

      <section id="accueil" className="snap-start h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-5xl text-white">Accueil</h1>
      </section>

      <section
        id="portfolio"
        className="snap-start h-screen bg-green-500 flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">Portfolio</h1>
      </section>

      <section
        id="apropos"
        className="snap-start h-screen bg-purple-500 flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">À propos</h1>
      </section>

      <section
        id="contact"
        className="snap-start h-screen bg-orange-500 flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">Contact</h1>
      </section>
    </div>
  );
}

export default App;
