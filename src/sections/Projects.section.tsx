import gridClassNames from "@layout/grid";
import Card from "../components/Card/Card";
import { useBreakpoint } from "@hooks/useBreakpoint";
import projects from "@data/Projects";
import ProjectItem from "@components/ProjectItem";
import { Project } from "../types/Project.type.ts";

export default function ProjectSection() {
  const isAboveMd = useBreakpoint("md").isAboveMd;
  const maxRendered = isAboveMd ? 6 : 3;
  const itemsToRender = projects.slice(0, maxRendered) as Project[];
  const gridCols = isAboveMd ? "grid-cols-3" : "grid-cols-1";

  return (
    <Card classNames={`${gridClassNames.projects}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <h3 className="text-lg/7 mb-4 font-medium text-gray-950 dark:text-white">Projects:</h3>
      <div className={`grid ${gridCols} lg:gap-6 gap-4`}>
        {itemsToRender.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Card>
  );
}
