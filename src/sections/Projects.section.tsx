import Card from "../components/Card/Card";

export default function ProjectSection() {
  const gridClassNames = `col-start-1 md:col-span-6 lg:col-span-9`;

  return (
    <Card classNames={`${gridClassNames}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <p className="text-lg/7 font-medium text-gray-950 dark:text-white">Projects:</p>
      <p className="text-sm/6 smooth-text-color text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque.
      </p>
    </Card>
  );
}
