import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  classNames?: string;
  contentClassnames?: string;
}

export default function Card({ children, classNames = '', contentClassnames = 'p-8' }: Readonly<CardProps>) {
  return (
    <div className={`bg-gray-800/75 flex h-full flex-col overflow-hidden border border-gray-700 hover:border-gray-500/85 transition-all ease-in-out ${classNames}`}>
      <div className={`${contentClassnames}`}>
        {children}
      </div>
    </div>
  );
}


