import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";
import { iconsMap, marqueeItemsLeft, marqueeItemsRight } from "../../data/MarqueeData";
import { useBreakpoint } from "../../hooks/useBreakpoint";

type MarqueeContentProps = {
  darkMode?: boolean;
  isHoveredOrFocused?: boolean;
};

const MarqueeContent = ({ darkMode = true, isHoveredOrFocused = false }: Readonly<MarqueeContentProps>) => {
  const { isAboveSm } = useBreakpoint("sm");
  const marqueeGradient = isAboveSm;

  const marqueeGradientColor = () => {
    let color;
    if (darkMode) {
      color = isHoveredOrFocused ? "#161616" : "#1e1e1e";
    } else {
      color = isHoveredOrFocused ? "#f3f4f6" : "#ffffff";
    }
    return color;
  };

  const renderMarqueeItems = (items: { key: keyof typeof iconsMap; label: string }[]) => {
    return items.map(({ key, label }) => {
      const Icon = iconsMap[key];
      return (
        <MarqueeItem key={key} icon={<Icon className="w-4 text-current" />}>
          {label}
        </MarqueeItem>
      );
    });
  };

  return (
    <div className="mt-3 flex flex-col gap-2">
      <Marquee play={!isHoveredOrFocused} direction="left" gradient={marqueeGradient} gradientColor={marqueeGradientColor()} speed={20}>
        {renderMarqueeItems(marqueeItemsLeft)}
      </Marquee>
      <Marquee play={!isHoveredOrFocused} direction="right" gradient={marqueeGradient} gradientColor={marqueeGradientColor()} speed={20}>
        {renderMarqueeItems(marqueeItemsRight)}
      </Marquee>
    </div>
  );
};

export default MarqueeContent;
