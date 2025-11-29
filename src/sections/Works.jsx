import { useState, useRef } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Icons from "../components/Icons";
import BgChacha from "../animate/BgChacha";

export default function Works() {
  const [modalProject, setModalProject] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="min-h-screen flex flex-col justify-center px-8 py-24
        snap-start w-full relative
        bg-[#001524] text-[#ece5dd] items-center
        md:px-12 lg:px-20"
    >
      <h2 className="
      text-[#ece5dd] text-xl mb-14
                md:text-2xl xl:text-3xl lg:text-4xl font-semibold">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-6 w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-left"
            data-aos-delay={index * 150} // <-- delay progressif
            data-aos-offset="200"       // Décalage du déclenchement
            data-aos-once="false"       // Répéter l'animation
            data-aos-anchor-placement="center" // Point d'ancrage
          >
            <ProjectCard project={project} onOpen={setModalProject} />
          </div>
        ))}
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
      <div className="mt-' mb-8">
        <BgChacha />
      </div>
      
      <Icons />
    </section>
  );
}
