import { experiences } from "../data/Experience";
import { useBreakpoint } from "../hooks/useBreakpoint";
import Card from "../components/Card/Card";
import ExperienceItem from "../components/ExperienceItem";
import { Experience } from "../types/Experience.type";
import gridClassNames from "@layout/grid";

export default function ExperienceSection() {
  const { isAboveMd } = useBreakpoint("md");
  const maxRendered = isAboveMd ? experiences.length : 3;
  const itemsToRender = experiences.slice(0, maxRendered);

  return (
    <Card classNames={`${gridClassNames.experience} flex flex-col`}>
      <h3 className="text-lg/7 mb-4 font-medium text-gray-950 dark:text-white">Work experience:</h3>
      <ol className="relative border-s border-quartz-900 dark:border-quartz-400 flex flex-col items-stretch">
        {itemsToRender.map((experience: Experience) => (
          <ExperienceItem
            key={experience.id}
            jobTitle={experience.jobTitle}
            company={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </ol>
    </Card>
  );
}
