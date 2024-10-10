import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
};

export default function CardGrid({ children }: Readonly<CardGridProps>) {
  return (
    <div className="grid gap-4 m-4 sm:m-6 grid-cols-1 lg:grid-cols-4 lg:grid-rows-2">
      {children}
    </div>
  );
}
