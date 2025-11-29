// ============================================
// sections/MainPage.js - VERSION CORRIGÉE
// ============================================
import Hero from "./Hero";
import About from "./About";
import Works from "./Works";
import Skills from "./Skills";
import Contact from "./Contact";

export default function MainPage() {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
    </main>
  );
}
