import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
};

export default function CardGrid({ children }: Readonly<CardGridProps>) {
  return (
    <div className="grid gap-4 my-4 sm:my-6 grid-cols-1 lg:grid-cols-4 lg:grid-rows-2">
      {children}
    </div>
  );
}
