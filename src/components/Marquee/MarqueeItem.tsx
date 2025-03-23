import Icon from "@components/Icon";
import { IconName } from "../../types/Icon";
import { ReactNode, useEffect, useState } from "react";

type MarqueeItemProps = {
  children: ReactNode;
  iconName: IconName;
  hoverColor?: string;
  isHoveredOrFocused?: boolean;
};

export default function MarqueeItem({ children, iconName, hoverColor, isHoveredOrFocused = false }: Readonly<MarqueeItemProps>) {
  const defaultColor = "transparent";
  const [bgColor, setBgColor] = useState(defaultColor);

  useEffect(() => {
    setBgColor(isHoveredOrFocused ? hoverColor ?? defaultColor : defaultColor);
  }, [isHoveredOrFocused, hoverColor]);

  return (
    <div
      className="flex items-center px-4 mx-2 py-2 border rounded-lg gap-2 justify-center default-border transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <Icon name={iconName} />
      <span className="text-xs font-semibold default-text-color">{children}</span>
    </div>
  );
}
