import BgPortfolio from "../animate/BgPortfolio";
import useAOS from "../hooks/useAOSInit";
import Icons from "../components/Icons";

export default function About() {
  
useAOS();
  return (
    <section
      id="apropos"
      className="
        min-h-screen flex flex-col justify-center px-8 py-24
        snap-start w-full relative bg-[#001524] text-[#ece5dd]
        items-center md:px-12 lg:px-20
      "
    >
      {/* Effet de fond optimisé */}
      {/* <ParticleNetwork /> */}

      <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-20">
        {/* Texte de gauche */}
        <article className="flex-1 text-left space-y-6"
            data-aos="fade-up">
          <h2 className="text-[#ece5dd] text-xl 
                md:text-2xl xl:text-3xl lg:text-4xl font-semibold"
                >
            À propos de <span className="text-[#ff7d00]">ChaChaDev</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl opacity-90">
            Après une formation complète chez <strong>OpenClassrooms</strong>, j’ai appris
            à transformer des maquettes Figma en sites web modernes et responsives.
            Curieux et rigoureux, j’aime relever des défis techniques et concevoir
            des interfaces élégantes et fonctionnelles.
          </p>
        </article>

        {/* Bloc des 3 compétences */}
        <article
          className="flex-1 flex flex-col items-center lg:items-start w-full"

        >
          <figure className="w-full pl-0 grid gap-8"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-offset="200"       // Décalage du déclenchement
            data-aos-once="false"       // Répéter l'animation
            data-aos-anchor-placement="center" // Point d'ancrage
          >
           
              <div className="bg-[#001524]/14 p-2 rounded-lg shadow-sm shadow-[#ffecd1]/40 text-center">
                <h3 className="text-xl">Booki</h3>
                <p className="text-md opacity-90">Intégration HTML/CSS responsive</p>
              </div>
            
              <div className="bg-[#001524]/14 p-2 rounded-lg shadow-sm shadow-[#ffecd1]/40 text-center">
                <h3 className="text-xl">Sophie Bluel</h3>
                <p className="text-md opacity-90">JavaScript dynamique</p>
              </div>
            

            
              <div className="bg-[#001524]/14 p-2 rounded-lg shadow-sm shadow-[#ffecd1]/40 text-center">
                <h3 className="text-xl">Kasa</h3>
                <p className="text-md opacity-90">Application React complète</p>
              </div>
            
          </figure>

          <a
            href="#projets"
            className="
              mt-14 mb-10 bg-[#27818f] text-[#ece5dd]
              px-6 py-2 rounded
              hover:bg-[#ff7d00] hover:text-black transition
              self-center
            "
            data-aos="fade-up"
          >
            Mes projets →
          </a>
        </article>
      </div>

  <BgPortfolio />
<Icons />
      {/* Icônes optimisées (one-time anim + hover) */}


      {/* <SpinningCube /> */}
    </section>
  );
}
