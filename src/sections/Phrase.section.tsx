import Card from "../components/Card/Card";

export default function PhraseSection() {
  const gridClassNames = `lg:col-start-9 md:col-start-5 md:col-span-2 lg:col-span-4 md:row-start-2 md:row-span-2`;

  return (
    <Card classNames={`${gridClassNames}`}>
      <p className="smooth-text-color text-sm lg:text-lg">
        As a front-end developer, I craft user experiences through clean code and thoughtful componentization.
      </p>
      <br />
      <p className="default-text-color font-medium text-base lg:text-xl">
        With expertise in Angular, React, and more, I’ve been building digital solutions since 2015, focused on creating responsive, engaging interfaces that meet modern web standards.
      </p>
    </Card>
  );
}
