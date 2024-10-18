import Card from "../components/Card/Card";

export default function LocationSection() {
  return (
    <Card
      classNames="lg:row-span-2 lg:col-start-7 lg:row-start-1 rounded-lg lg:col-span-6 rounded-lg"
      loading={true}
    >
      <p className="text-lg/7 font-medium text-gray-950 dark:text-white text-center">
        Loading State
      </p>
      <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
        lacus non auctor ultricies, ante neque gravida magna, lobortis
        pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit
        amet dignissim dui eleifend in. Quisque euismod pharetra fringilla.
      </p>
    </Card>
  );
}
