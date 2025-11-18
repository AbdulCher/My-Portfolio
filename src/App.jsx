import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Home";
import About from "./sections/About";
import Works from "./sections/Works";



function App() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
      <Header />
      <Hero />
      <About />
      <Works />
    </div>
  );
}

export default App;
