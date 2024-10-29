import Icon from "@components/Icon";
import { IconName } from "../../types/Icon";
import { ReactNode } from "react";

type MarqueeItemProps = {
  children: ReactNode;
  iconName: IconName;
};

export default function MarqueeItem({ children, iconName }: Readonly<MarqueeItemProps>) {
  return (
    <div className="flex items-center px-4 mx-2 py-2 border rounded-lg gap-2 justify-center default-border">
      <Icon name={iconName} />
      <span className="text-xs font-semibold default-text-color">{children}</span>
    </div>
  );
}
