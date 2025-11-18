import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Works() {
  return (
    <section className="w-full py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
      <p className="text-gray-600 mb-10">
        Découvrez mes principales réalisations en développement web.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
