import Card from "../components/Card/Card";
import ExperienceItem from "../components/ExperienceItem";

export default function ExperienceSection() {
  return (
    <Card classNames="lg:col-start-10 lg:col-span-3 lg:row-start-5 rounded-lg">
      <h3 className="text-lg/7 mb-4 font-medium text-gray-950 dark:text-white">Work experience:</h3>
      <ol className="relative border-s border-quartz-l80 dark:border-quartz-d20 flex flex-col items-stretch">

        <ExperienceItem jobTitle="Front-end developer" company="Thoughtworks" startDate="Jan 2021" />
        <ExperienceItem jobTitle="Front-end developer" company="Accenture" startDate="Jul 2019" endDate="Jan 2021" />
        <ExperienceItem jobTitle="Front-end developer" company="Murilhas" startDate="Feb 2019" endDate="May 2019" />
        <ExperienceItem jobTitle="Jr. Front-end developer" company="Reator Digital" startDate="2015" endDate="2019" />
        <ExperienceItem jobTitle="Software Trainee" company="Hoolyn" startDate="2014" endDate="2015" />

      </ol>
    </Card>
  );
}
