import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";
import { marqueeItemsLeft, marqueeItemsRight } from "../../data/MarqueeData";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { IconName } from "../../types/Icon";

type MarqueeContentProps = {
  darkMode?: boolean;
  isHoveredOrFocused?: boolean;
};

const MarqueeContent = ({ darkMode = true, isHoveredOrFocused = false }: Readonly<MarqueeContentProps>) => {
  const { isAboveSm } = useBreakpoint("sm");
  const marqueeGradientWidth = isAboveSm ? 100 : 20;
  const marqueeGradientColor = darkMode ? "#242424" : "#ffffff";

  const renderMarqueeItems = (
    items: { iconName: IconName; label: string; hoverColor?: string }[],
    isHoveredOrFocused: boolean
  ) => {
    return items.map(({ iconName, label, hoverColor }) => (
      <MarqueeItem
        iconName={iconName}
        key={label}
        hoverColor={hoverColor}
        isHoveredOrFocused={isHoveredOrFocused}
        darkMode={darkMode}
      >
        {label}
      </MarqueeItem>
    ));
  };

  return (
    <div className="mt-3 flex flex-col gap-2">
      <Marquee
        play={!isHoveredOrFocused}
        direction="left"
        gradient={true}
        gradientColor={marqueeGradientColor}
        gradientWidth={marqueeGradientWidth}
        speed={10}
      >
        {renderMarqueeItems(marqueeItemsLeft, isHoveredOrFocused)}
      </Marquee>
      <Marquee
        play={!isHoveredOrFocused}
        direction="right"
        gradient={true}
        gradientColor={marqueeGradientColor}
        gradientWidth={marqueeGradientWidth}
        speed={20}
      >
        {renderMarqueeItems(marqueeItemsRight, isHoveredOrFocused)}
      </Marquee>
    </div>
  );
};

export default MarqueeContent;
