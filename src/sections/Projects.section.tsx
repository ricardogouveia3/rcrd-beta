import gridClassNames from "@layout/grid";
import Card from "../components/Card/Card";
import { useBreakpoint } from "@hooks/useBreakpoint";
import projects from "@data/Projects";

export type Project = {
  id: number;
  imgSrc: string;
};

export default function ProjectSection() {
  const { isAboveMd } = useBreakpoint("md");
  const maxRendered = isAboveMd ? 9 : 6;
  const itemsToRender = projects.slice(0, maxRendered) as Project[];

  return (
    <Card classNames={`${gridClassNames.projects}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <h3 className="text-lg/7 mb-4 font-medium text-gray-950 dark:text-white">Projects:</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {itemsToRender.map((project) => (
          <div key={Math.floor(Math.random() * 1000000)} className="max-h-80">
            <img className="h-full w-full object-cover rounded-lg" src={project.imgSrc} alt="" />
          </div>
        ))}
      </div>

    </Card>
  );
}
