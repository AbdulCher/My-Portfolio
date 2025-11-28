import profileImage from "../../img/profile.webp";
import BgChacha from "../animate/BgChacha";
import Icons from "../components/Icons";
import ParticleNetwork from "../animate/ParticleNetwork";

const Home = () => {
  return (
    <section
      id="accueil"
      className="snap-start min-h-screen w-full 
        relative flex flex-col items-center gap-10 
        px-6 md:px-12 lg:px-20 pt-28 bg-[#001524]"
    >
      <ParticleNetwork />
      {/* Texte + image */}
      <div className="w-full flex flex-col md:flex-row 
            items-center justify-center gap-10"
            >

        <article className="flex-1 text-center md:text-left space-y-6"
          data-aos="fade-down" data-aos-duration="1000">
          <h1 className="text-[#27818f] font-bold text-xl md:text-4xl 
                lg:text-5xl xl:text-6xl leading-tight"
                >
            DEVELOPPEUR WEB
          </h1>

          <h2 className="text-[#ece5dd] mt-4 text-md md:text-xl xl:text-2xl lg:text-2xl font-semibold">
            Passionné par le Front-End & l’UX moderne
          </h2>

          <p className="mt-6 text-[#ece5dd] max-w-xl text-base sm:text-lg md:text-xl mx-auto md:mx-0">
            J’aime créer des interfaces épurées, performantes et animées,
            tout en optimisant l’expérience utilisateur.
          </p>
        </article>

        <figure
          className="flex justify-end items-end"
          data-aos="fade-down"
        >
          <img
            src={profileImage}
            alt="profil"
            className="md:w-22 md:h-22 w-46 h-46 lg:w-56 lg:h-56 
              object-cover rounded-full shadow-xl border-4 border-[#ff7d00]"
            loading="lazy"
          />
        </figure>
      </div>

      {/* Background animé */}
      <div data-aos="fade-up">
        <BgChacha />
      </div>

      {/* Icônes */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Icons />
      </div>
    </section>
  );
};

export default Home;
