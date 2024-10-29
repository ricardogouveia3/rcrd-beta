import gridClassNames from "@layout/grid";
import Card from "../components/Card/Card";
import { useBreakpoint } from "@hooks/useBreakpoint";
import projects from "@data/Projects";
import ProjectItem from "@components/ProjectItem";
import { Project } from "../types/Project.type.ts";

const ProjectSection = () => {
  const isAbove2xl = useBreakpoint("2xl").isAbove2xl;
  const isAboveLg = useBreakpoint("lg").isAboveLg;
  const isAboveMd = useBreakpoint("md").isAboveMd;

  const getGridSettings = (projects: Project[]) => {
    if (isAbove2xl) return { gridCols: projects.length >= 12 ? "grid-cols-4" : "grid-cols-3", maxRendered: projects.length };
    if (isAboveLg) return { gridCols: projects.length >= 9 ? "grid-cols-3" : "grid-cols-2", maxRendered: 9 };
    if (isAboveMd) return { gridCols: projects.length >= 6 ? "grid-cols-2" : "grid-cols-1", maxRendered: 6 };
    return { gridCols: "grid-cols-1", maxRendered: 3 };
  };

  const { gridCols, maxRendered } = getGridSettings(projects);
  const itemsToRender = projects.slice(0, maxRendered);

  const projectGroups = Array.from({ length: Math.ceil(itemsToRender.length / 3) }, (_, i) =>
    itemsToRender.slice(i * 3, i * 3 + 3)
  );

  return (
    <Card classNames={`${gridClassNames.projects}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <h3 className="text-lg/7 mb-4 font-medium default-text-color">Projects:</h3>

      <div className={`grid ${gridCols} gap-4`}>
        {projectGroups.map((group, index) => (
          <div key={index} className="grid gap-4">
            {group.map((project) => {
              return (
                <ProjectItem
                  key={project.id}
                  project={project}
                  expanded={project.expanded}
                />
              );
            })}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProjectSection;
