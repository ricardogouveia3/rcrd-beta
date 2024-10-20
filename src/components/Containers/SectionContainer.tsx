import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  classNames?: string;
};

const gridClassNames = `grid-cols-1 md:grid-cols-6 lg:grid-cols-12`;

const MainWrapper = ({ children, classNames = gridClassNames }: Readonly<CardGridProps>) => {
  return (
    <div className={`grid ${classNames} grid-flow-row auto-rows-auto gap-4 my-4 sm:my-6`}>
      {children}
    </div>
  );
}

export default MainWrapper;
