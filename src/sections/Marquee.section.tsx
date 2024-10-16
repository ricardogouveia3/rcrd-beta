import { useState } from "react";
import MarqueeContent from "../components/Marquee/MarqueeContent";
import Card from "../components/Card/Card";

type MarqueeSectionProps = {
  darkMode?: boolean;
};

export default function MarqueeSection({ darkMode = true }: Readonly<MarqueeSectionProps>) {
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);

  const handleInteraction = () => setIsHoveredOrFocused(true);
  const handleLeaveOrBlur = () => setIsHoveredOrFocused(false);

  return (
    <Card classNames="lg:col-start-1 lg:col-span-8 lg:row-start-4 lg:row-span-1 rounded-lg" contentClassnames="">
      <section className="p-4 lg:p-6" aria-labelledby="marquee-header" onMouseOver={handleInteraction}
        onFocus={handleInteraction}
        onMouseLeave={handleLeaveOrBlur}
        onBlur={handleLeaveOrBlur}>
        <p id="marquee-header" className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white">
          I can work with:
        </p>
        <MarqueeContent darkMode={darkMode} isHoveredOrFocused={isHoveredOrFocused} />
      </section>
    </Card>
  );
}
