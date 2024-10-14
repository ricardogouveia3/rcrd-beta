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
    <div className={`relative bg-white hover:bg-gray-100 dark:bg-quartz-d60/75 hover:dark:bg-quartz-d70/75 flex flex-col overflow-hidden border border-quartz-l80 hover:border-quartz-l70 dark:border-quartz-d10 dark:hover:border-quartz-d30 cursor-default transition-all ease-in-out ${classNames}`}>
      <div className={`${contentClassnames}`}>
        {children}
      </div>
      <div className={`${isLoading} absolute h-full w-full bg-black/80 justify-center items-center`}>
        <Spinner />
      </div>
    </div>
  );
}


