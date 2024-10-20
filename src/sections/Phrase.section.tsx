import Card from "../components/Card/Card";

export default function PhraseSection() {
  return (
    <Card classNames="lg:col-start-9 lg:col-span-4 lg:row-start-3 lg:row-span-2 rounded-lg tracking-tight">
      <p className="text-quartz-600 dark:text-quartz-750 text-sm lg:text-lg">
        As a front-end developer, I craft user experiences through clean code and thoughtful componentization.
      </p>
      <br />
      <p className="text-quartz-300 dark:text-quartz-900 font-medium text-base lg:text-xl">
        With expertise in Angular, React, and more, I’ve been building digital solutions since 2015, focused on creating responsive, engaging interfaces that meet modern web standards.
      </p>
    </Card>
  );
}
