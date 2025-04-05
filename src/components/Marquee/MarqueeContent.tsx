import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";
import { marqueeItemsLeft, marqueeItemsRight } from "@data/MarqueeData.ts";
import { useBreakpoint } from "@hooks/useBreakpoint.ts";
import { IconName } from "../../types/Icon";
import { memo, useMemo } from "react";

type MarqueeItemData = {
  iconName: IconName;
  label: string;
  hoverColor?: string;
};

type MarqueeContentProps = {
  darkMode?: boolean;
  isHoveredOrFocused?: boolean;
};

const MarqueeContent = ({
                          darkMode = true,
                          isHoveredOrFocused = false,
                        }: Readonly<MarqueeContentProps>) => {
  const { isAboveSm } = useBreakpoint("sm");
  const marqueeGradientWidth = isAboveSm ? 100 : 20;
  const marqueeGradientColor = darkMode ? "#242424" : "#ffffff";
  
  const renderMarqueeItems = useMemo(
    () =>
      (items: MarqueeItemData[]) =>
        items.map(({ iconName, label, hoverColor }) => (
          <MarqueeItem
            iconName={iconName}
            key={label}
            hoverColor={hoverColor}
            isHoveredOrFocused={isHoveredOrFocused}
            darkMode={darkMode}
          >
            {label}
          </MarqueeItem>
        )),
    [isHoveredOrFocused, darkMode]
  );
  
  const marquees = useMemo(
    () =>
      [
        { items: marqueeItemsLeft, direction: "left", speed: 10 },
        { items: marqueeItemsRight, direction: "right", speed: 20 },
      ] as const,
    []
  );
  
  return (
    <div className="mt-3 flex flex-col gap-2">
      {marquees.map(({ items, direction, speed }) => (
        <Marquee
          key={direction}
          play={!isHoveredOrFocused}
          direction={direction}
          gradient
          gradientColor={marqueeGradientColor}
          gradientWidth={marqueeGradientWidth}
          speed={speed}
        >
          {renderMarqueeItems(items)}
        </Marquee>
      ))}
    </div>
  );
};

export default memo(MarqueeContent);
