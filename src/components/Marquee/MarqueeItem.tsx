import { ReactNode } from "react";

type MarqueeItemProps = {
  children: ReactNode;
  icon?: string;
};

export default function MarqueeItem({ children, icon = '' }: Readonly<MarqueeItemProps>) {
  return (
    <div className="flex items-center px-5 mx-2 py-2 border rounded-lg gap-2 justify-center border-quartz-l80 dark:border-quartz-d10 ">
      <img src={icon} alt="" className="h-4" />
      <span className="text-xs font-semibold text-black dark:text-white">{children}</span>
    </div>
  );
}