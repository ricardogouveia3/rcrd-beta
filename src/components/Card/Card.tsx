import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  classNames?: string;
  contentClassnames?: string;
}

export default function Card({ children, classNames = '', contentClassnames = 'p-4 lg:p-6' }: Readonly<CardProps>) {
  return (
    <div className={`bg-white dark:bg-quartz-d60/75 flex h-full flex-col overflow-hidden border border-quartz-l80 hover:border-quartz-l70 dark:border-quartz-d10 dark:hover:border-quartz-d30  transition-all ease-in-out ${classNames}`}>
      <div className={`${contentClassnames}`}>
        {children}
      </div>
    </div>
  );
}


