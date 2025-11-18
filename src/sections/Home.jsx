import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

export default function Home() {
  return (
    <section
      id="accueil"
      className="snap-start h-screen bg-gray-900 flex flex-col lg:flex-row items-center justify-center p-6 lg:px-16 gap-10"
    >
      {/* Texte (Desktop à gauche, Mobile en haut) */}
      <motion.div
        className="flex flex-col lg:items-start items-center text-center lg:text-left space-y-6 lg:flex-1"
        animate={{ x: 0 }}
        initial={{ x: -50 }}
        transition={transition}
      >
        <h1 className="text-5xl lg:text-6xl text-white font-bold leading-tight">
          
          Intégrateur web
        </h1>

        <h2 className="text-3xl lg:text-4xl text-white font-semibold">
          NNNNNN<br />
          NNNNN<br />
          NNNNN
        </h2>

        <p className="text-white text-lg lg:text-xl leading-relaxed max-w-md">
          Je transforme des maquettes Figma en sites web modernes et responsives.
          Curieux et rigoureux, j’aime relever des défis techniques et concevoir
          des interfaces élégantes et fonctionnelles.
        </p>
      </motion.div>

      {/* Image (Desktop à droite, Mobile après h2) */}
      <motion.div
        className="lg:flex-1 flex justify-center items-center"
        animate={{ x: 0 }}
        initial={{ x: 50 }}
        transition={transition}
      >
        <img
          src="/img/profile.jpg"
          alt="Profil"
          className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
}
