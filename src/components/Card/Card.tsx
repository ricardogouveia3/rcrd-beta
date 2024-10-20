import { ReactNode } from "react";
import Spinner from "./Spinner";

type CardProps = {
  children: ReactNode;
  classNames?: string;
  contentClassnames?: string;
  loading?: boolean;
}

export default function Card({ children, classNames = '', contentClassnames = 'p-4 lg:p-6', loading = false }: Readonly<CardProps>) {
  const isLoading = loading ? `flex` : `hidden`;

  return (
    <div className={`relative bg-white dark:bg-quartz-200 flex flex-col overflow-hidden border border-quartz-900 dark:border-quartz-450 cursor-default transition-all ease-in-out ${classNames}`}>
      <div className={`${contentClassnames}`}>
        {children}
      </div>
      <div className={`${isLoading} absolute h-full w-full bg-black/80 justify-center items-center`}>
        <Spinner />
      </div>
    </div>
  );
}


