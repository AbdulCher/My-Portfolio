import React from "react";
import { motion } from "framer-motion";
import Projects from "./Works";


const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
}
function Home() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">


      <section id="accueil" className="snap-start h-screen bg-gray-900 flex items-center justify-between p-6 lg:px-8">
        
        <motion.div animate={{ x: 100 }} transition={transition}>
          <h1 className="text-5xl text-white animate-bounceScale">NDIAYE<br></br>CHEIKH<br></br>ABDUL</h1>
        </motion.div>
        <div className=" text-white flex items-start justify-start ">
            <h2 className="text-8xl flex items-start absolute start-30 top-30">Intégrateur web<br></br></h2>
        </div>
        <motion.div animate={{ x: -100 }} transition={transition}>
          <img className="h-60 w-60 object-cover rounded-full ..." src="/img/profile.jpg" />
        </motion.div>

      </section>

      

      <section
        id="projets"
        className="snap-start h-screen bg-purple-950 flex items-center justify-center"
      >

      <Projects />
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

export default Home;
