import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  classNames?: string;
};

const defaultClassNames = `lg:grid-cols-12 lg:grid-rows-2`;

export default function CardGrid({ children, classNames = defaultClassNames }: Readonly<CardGridProps>) {
  return (
    <div className={`grid gap-4 my-4 sm:my-6 grid-cols-1 ${classNames}`}>
      {children}
    </div>
  );
}
