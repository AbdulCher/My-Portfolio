import React from "react";
import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import LoaderScreen from "./animate/LoaderScreen";

import ParticleBackground from "./components/ParticleBackground";


export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoaderScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="relative">
          <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
            <Header />
            <Home />
            <About />
            <Works />
            <Skills />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}
