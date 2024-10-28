import { Project } from "../types/Project.type.ts";
import colors from "@data/Colors";
import { getContrastColor } from "@utils/color";

export default function ProjectItem({ project }: Readonly<{ project: Project }>) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const contrastColor = getContrastColor(randomColor);

  return (
    <a href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between overflow-hidden rounded-lg"
      style={{ backgroundColor: randomColor, color: contrastColor }}
    >
      <div className="flex flex-col gap-4 p-4 lg:p-6">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 p-4 lg:p-6">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-sm font-medium">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

