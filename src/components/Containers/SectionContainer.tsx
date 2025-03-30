import {GridClassNames} from "@constants/layout.ts";
import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  classNames?: string;
};

const MainWrapper = ({ children, classNames = GridClassNames.container }: Readonly<CardGridProps>) => {
  return (
    <div className={`grid ${classNames} grid-flow-row auto-rows-auto gap-4 my-4 sm:my-6`}>
      {children}
    </div>
  );
}

export default MainWrapper;
