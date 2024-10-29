import gridClassNames from "@layout/grid";
import Card from "../components/Card/Card";
import { useBreakpoint } from "@hooks/useBreakpoint";
import projects from "@data/Projects";
import ProjectItem from "@components/ProjectItem";
import { Project } from "../types/Project.type.ts";

export default function ProjectSection() {
  const isAboveMd = useBreakpoint("md").isAboveMd;
  const maxRendered = isAboveMd ? projects.length : 3;
  const itemsToRender = projects.slice(0, maxRendered) as Project[];
  const gridCols = isAboveMd ? "grid-cols-4" : "grid-cols-1";

  return (
    <Card classNames={`${gridClassNames.projects}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <h3 className="text-lg/7 mb-4 font-medium text-gray-950 dark:text-white">Projects:</h3>

      <div className={`grid ${gridCols} gap-4`}>
        {itemsToRender[2] && (
          <div className="grid gap-4">
            <ProjectItem key={itemsToRender[0].id} project={itemsToRender[0]} />
            <ProjectItem key={itemsToRender[1].id} project={itemsToRender[1]} expanded={true} />
            <ProjectItem key={itemsToRender[2].id} project={itemsToRender[2]} />
          </div>
        )}

        {itemsToRender[5] && (
          <div className="grid gap-4">
            <ProjectItem key={itemsToRender[3].id} project={itemsToRender[3]} expanded={true} />
            <ProjectItem key={itemsToRender[4].id} project={itemsToRender[4]} />
            <ProjectItem key={itemsToRender[5].id} project={itemsToRender[5]} />
          </div>
        )}

        {itemsToRender[8] && (
          <div className="grid gap-4">
            <ProjectItem key={itemsToRender[6].id} project={itemsToRender[6]} />
            <ProjectItem key={itemsToRender[7].id} project={itemsToRender[7]} />
            <ProjectItem key={itemsToRender[8].id} project={itemsToRender[8]} expanded={true} />
          </div>
        )}
        {itemsToRender[11] && (
          <div className="grid gap-4">
            <ProjectItem key={itemsToRender[9].id} project={itemsToRender[9]} />
            <ProjectItem key={itemsToRender[10].id} project={itemsToRender[10]} expanded={true} />
            <ProjectItem key={itemsToRender[11].id} project={itemsToRender[11]} />
          </div>
        )}
      </div>
    </Card>
  );
}
