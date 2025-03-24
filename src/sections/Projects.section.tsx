import gridClassNames from "@layout/grid";
import Card from "../components/Card/Card";
import projects from "@data/Projects";
import ProjectItem from "@components/ProjectItem";
import { getGridSettings } from "@layout/projectsGrid.ts";
import {useTranslation} from "react-i18next";

const ProjectSection = () => {
  const { t } = useTranslation();

  const { gridCols, maxRendered } = getGridSettings(projects);
  const itemsToRender = projects.slice(0, maxRendered);

  const projectGroups = Array.from({ length: Math.ceil(itemsToRender.length / 3) }, (_, i) =>
    itemsToRender.slice(i * 3, i * 3 + 3)
  );

  return (
    <Card classNames={`${gridClassNames.projects}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <h3 className="text-lg/7 mb-4 font-medium default-text-color">{t('projects.title')}</h3>

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
