import { useState } from "react";
import MarqueeContent from "../components/Marquee/MarqueeContent";
import Card from "../components/Card/Card";
import { useTranslation } from "react-i18next";
import gridClassNames from "@layout/grid";

type MarqueeSectionProps = {
  darkMode?: boolean;
};

export default function MarqueeSection({ darkMode = true }: Readonly<MarqueeSectionProps>) {
  const { t } = useTranslation();
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);

  const handleInteraction = () => setIsHoveredOrFocused(true);
  const handleLeaveOrBlur = () => setIsHoveredOrFocused(false);

  return (
    <Card classNames={`${gridClassNames.marquee}`} contentClassnames="">
      <section className="p-4 lg:p-6" aria-labelledby="marquee-header" onMouseOver={handleInteraction}
        onFocus={handleInteraction}
        onMouseLeave={handleLeaveOrBlur}
        onBlur={handleLeaveOrBlur}>
        <p id="marquee-header" className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white">
          {t("marquee.stack")}
        </p>
        <MarqueeContent darkMode={darkMode} isHoveredOrFocused={isHoveredOrFocused} />
      </section>
    </Card>
  );
}
