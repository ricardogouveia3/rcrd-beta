import { ReactNode } from "react";
import Spinner from "./Spinner";

type CardProps = {
  children: ReactNode;
  classNames?: string;
  contentClassnames?: string;
  loading?: boolean;
}

export default function Card({ children, classNames = '', contentClassnames = 'p-4 lg:p-6', loading = false }: Readonly<CardProps>) {
  return (
    <div className={`relative card-border card-background flex flex-col overflow-hidden cursor-default transition-all ease-in-out ${classNames}`}>
      <div className="card-content-background">
        <div className={`${contentClassnames} card-content-wrapper`}>
          {children}
        </div>
      </div>
      <Spinner isLoading={loading} />
    </div>
  );
}


