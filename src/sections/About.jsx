import AnimatedCard from "../animate/AnimatedCard";
import ParticleNetwork from "../animate/ParticleNetwork";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="apropos"
      className="pt-35 snap-start bg-[#000000] flex flex-col items-center justify-between min-h-screen p-6 lg:px-16 py-10 relative w-full"
    >
      <ParticleNetwork />

      {/* ---------- CONTENEUR 2 COLONNES ---------- */}
      <div className="relative w-full flex flex-col lg:flex-row gap-16">

        {/* ------------ COLONNE GAUCHE ------------ */}
        <motion.div className="flex-1 text-left text-[#e5e5e5] flex flex-col justify-start pt-0">
          <h2 className="text-4xl font-bold mb-4">À propos</h2>

          <p className="text-lg lg:text-xl leading-relaxed">
            Après une formation complète chez <strong>OpenClassrooms</strong>,<br />
            j’ai appris à transformer des maquettes Figma en sites web modernes et responsives.<br />
            Curieux et rigoureux, j’aime relever des défis techniques et concevoir<br />
            des interfaces élégantes et fonctionnelles.
          </p>
        </motion.div>

        {/* ------------ COLONNE DROITE ------------ */}
        <div className="flex-1 flex flex-col items-center lg:items-start w-full">

          {/* Cards */}
          <motion.div className="w-full grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
            <AnimatedCard direction="left" delay={0.20}>
              <div className="relative bg-[#14213d] text-[#fca311] rounded-lg hover:shadow-xl transition p-4 shadow-sm shadow-[#fca311] flex flex-col items-center">
                <h3 className="relative text-2xl">Booki</h3>
                <p className="relative text-1xl text-center">
                  Intégration HTML/CSS responsive
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard direction="left" delay={0.40}>
              <div className="relative bg-[#14213d] text-[#fca311] rounded-lg hover:shadow-xl transition p-4 shadow-sm shadow-[#fca311] flex flex-col items-center">
                <h3 className="relative text-2xl">Sophie Bluel</h3>
                <p className="relative text-1xl text-center">
                  JavaScript dynamique
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard direction="left" delay={0.60}>
              <div className="bg-[#14213d] text-[#fca311] rounded-lg hover:shadow-xl transition p-4 shadow-sm shadow-[#fca311] flex flex-col items-center">
                <h3 className="text-2xl">Kasa</h3>
                <p className="text-1xl text-center">
                  Application React complète
                </p>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Bouton Mes Projets — CENTRÉ */}
          <a
            href="#projets"
            className="mt-20 bg-[#14213d] px-6 py-2 text-[#e5e5e5] rounded hover:bg-[#fca311] hover:text-[#000000] transition self-center"
          >
            Mes projets →
          </a>
        </div>
      </div>

      {/* ---------- BOUTONS EN BAS ---------- */}
      <div className="flex flex-row gap-4 mt-20 justify-center">
        <a href="#projets" className="bg-[#14213d] px-6 py-2 text-[#e5e5e5] rounded hover:bg-[#fca311] hover:text-[#000000] transition">
          GitHub
        </a>
        <a href="#apropos" className="bg-[#14213d] px-6 py-2 text-[#e5e5e5] rounded hover:bg-[#fca311] hover:text-[#000000] transition">
          Linkedin
        </a>
        <a href="#contact" className="bg-[#14213d] px-6 py-2 text-[#e5e5e5] rounded hover:bg-[#fca311] hover:text-[#000000] transition">
          Contact
        </a>
      </div>

    </motion.section>
  );
}
