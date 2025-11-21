export default function ProjectCard({ project, onOpen }) {
  return (
    <div
      onClick={() => onOpen(project)}
      className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg group"
    >
      <img
        src={project.image} // <- bien image
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        {project.stack && <p className="text-sm opacity-90">{project.stack}</p>}
      </div>
    </div>
  );
}
