import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  classNames?: string;
  contentClassnames?: string;
}

export default function Card({ children, classNames = '', contentClassnames = 'p-8' }: Readonly<CardProps>) {
  return (
    <div className={`bg-white dark:bg-gray-800/75 flex h-full flex-col overflow-hidden border border-gray-200 dark:border-gray-700 dark:hover:border-gray-500/85 hover:border-gray-300/85 transition-all ease-in-out ${classNames}`}>
      <div className={`${contentClassnames}`}>
        {children}
      </div>
    </div>
  );
}


