import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ParticleNetwork from "../animate/ParticleNetwork";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Works() {
  const [modalProject, setModalProject] = useState(null);
  const sectionRef = useRef(null);
  

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="relative snap-start w-full 
        bg-[#001524] flex flex-col items-center 
        justify-center p-6 lg:px-16 py-36"
     
    >
      {/* <ParticleNetwork /> */}

      <h2 className="text-[#ece5dd] mb-12 text-xl md:text-2xl xl:text-3xl lg:text-4xl font-semibold">
        Mes Projets
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => {
          const fromLeft = index % 2 === 0;

          return (
            <motion.div
              
            >
              <ProjectCard project={project} onOpen={setModalProject} />
            </motion.div>
          );
        })}
      </div>

     
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}

     
      
    </section>
  );
}
