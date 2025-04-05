import Icon from "@components/Icon";
import { IconName } from "../../types/Icon.type.ts";
import { ReactNode, useEffect, useState } from "react";
import { getContrastColor } from "@utils/color";

type MarqueeItemProps = {
  children: ReactNode;
  iconName: IconName;
  hoverColor?: string;
  isHoveredOrFocused?: boolean;
  darkMode?: boolean;
};

export default function MarqueeItem({ children, iconName, hoverColor = "#000000", isHoveredOrFocused = false, darkMode = true }: Readonly<MarqueeItemProps>) {
  const defaultColor = "unset";
  const defaultTextColor = darkMode ? "#FFFFFF" : "#1A202C";
  const [bgColor, setBgColor] = useState(defaultColor);

  useEffect(() => {
    setBgColor(isHoveredOrFocused ? hoverColor ?? defaultColor : defaultColor);
  }, [isHoveredOrFocused, hoverColor]);

  return (
    <div
      className="flex items-center px-4 mx-2 py-2 border rounded-lg gap-2 justify-center default-border transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <Icon name={iconName} color={ isHoveredOrFocused ? getContrastColor(hoverColor) : defaultTextColor } />
      <span className="text-xs font-semibold default-text-color"
        style={
          { color: isHoveredOrFocused ? getContrastColor(hoverColor) : defaultTextColor }
        }>{children}</span>
    </div>
  );
}
