import { Project } from "../types/Project.type.ts";

export default function ProjectItem({ project, expanded = false }: Readonly<{ project: Project, expanded?: boolean }>) {
  const height = expanded ? "h-60" : "h-full";
  const tagsToRender = project.tags.slice(0, 4);

  return (
    <a href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col justify-between overflow-hidden rounded-lg default-border hover-background h- ${height}`}>

      <div className="flex flex-col gap-4 p-4 lg:p-6">
        <h3 className="text-lg font-medium default-text-color">{project.title}</h3>
        {expanded && <p className="line-clamp-3 smooth-text-color">{project.description}</p>}
      </div>

      <div className="flex flex-wrap gap-2 p-4 lg:p-6">
        {tagsToRender.map((tag: string) => (
          <span key={tag} className="text-xs font-medium smooth-text-color default-border rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

