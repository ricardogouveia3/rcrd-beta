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
          <div className="grid gap-4 grid-rows-4">
            <div className="h-full max-w-full rounded-lg">
              <ProjectItem key={itemsToRender[0].id} project={itemsToRender[0]} />
            </div>
            <div className="h-full max-w-full rounded-lg row-span-2">
              <ProjectItem key={itemsToRender[1].id} project={itemsToRender[1]} />
            </div>
            <div className="h-full max-w-full rounded-lg">
              <ProjectItem key={itemsToRender[2].id} project={itemsToRender[2]} />
            </div>
          </div>
        )}

        {itemsToRender[5] && (
          <div className="grid gap-4 grid-rows-4">
            <div className="h-full max-w-full rounded-lg row-span-2">
              <ProjectItem key={itemsToRender[3].id} project={itemsToRender[3]} />
            </div>
            <div className="h-full max-w-full rounded-lg r">
              <ProjectItem key={itemsToRender[4].id} project={itemsToRender[4]} />
            </div>
            <div className="h-full max-w-full rounded-lg">
              <ProjectItem key={itemsToRender[5].id} project={itemsToRender[5]} />
            </div>
          </div>
        )}

        {itemsToRender[8] && (
          <div className="grid gap-4 grid-rows-4">
            <div className="h-full max-w-full rounded-lg">
              <ProjectItem key={itemsToRender[6].id} project={itemsToRender[6]} />
            </div>
            <div className="h-full max-w-full rounded-lg">
              <ProjectItem key={itemsToRender[7].id} project={itemsToRender[7]} />
            </div>
            <div className="h-full max-w-full rounded-lg row-span-2">
              <ProjectItem key={itemsToRender[8].id} project={itemsToRender[8]} />
            </div>
          </div>
        )}

        {itemsToRender[8] && (
          <div className="grid gap-4 grid-rows-4">
            <div className="h-full max-w-full rounded-lg">
              <ProjectItem key={itemsToRender[6].id} project={itemsToRender[6]} />
            </div>
            <div className="h-full max-w-full rounded-lg row-span-2">
              <ProjectItem key={itemsToRender[7].id} project={itemsToRender[7]} />
            </div>
            <div className="h-full max-w-full rounded-lg">
              <ProjectItem key={itemsToRender[8].id} project={itemsToRender[8]} />
            </div>
          </div>
        )}
      </div>

    </Card>
  );
}
