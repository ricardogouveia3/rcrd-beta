import { GridClassNames } from "@constants/layout.ts";
import Card from "../components/Card/Card";
import projects from "@data/Projects";
import ProjectItem from "@components/ProjectItem";
import { useTranslation } from "react-i18next";
import { Project } from "../types/Project.type.ts";
import { useBreakpoint } from "@hooks/useBreakpoint.ts";

const ProjectSection = () => {
  const { t } = useTranslation();

  const { isAbove2xl } = useBreakpoint("2xl");
  const { isAboveLg } = useBreakpoint("lg");
  const { isAboveMd } = useBreakpoint("md");

  const getGridSettings = (projects: Project[]) => {
    if (isAbove2xl)
      return { gridCols: projects.length >= 12 ? "grid-cols-4" : "grid-cols-3", maxRendered: projects.length };
    if (isAboveLg)
      return { gridCols: projects.length >= 9 ? "grid-cols-3" : "grid-cols-2", maxRendered: 9 };
    if (isAboveMd)
      return { gridCols: projects.length >= 6 ? "grid-cols-2" : "grid-cols-1", maxRendered: 6 };
    return { gridCols: "grid-cols-1", maxRendered: 3 };
  };

  const { gridCols, maxRendered } = getGridSettings(projects);
  const itemsToRender = projects.slice(0, maxRendered);

  return (
    <Card classNames={`${GridClassNames.projects}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <h3 className="text-lg/7 mb-4 font-medium default-text-color">{t('projects.title')}</h3>

      <div className={`grid ${gridCols} gap-4`}>
        {itemsToRender.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            expanded={project.expanded}
          />
        ))}
      </div>
    </Card>
  );
};

export default ProjectSection;
