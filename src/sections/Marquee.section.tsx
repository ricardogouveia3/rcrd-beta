import { useState, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import MarqueeContent from "../components/Marquee/MarqueeContent";
import Card from "../components/Card/Card";
import { GridClassNames } from "@constants/layout.ts";
import {MarqueeSectionProps} from "../types/Marquee.ts";

const MarqueeSection = ({ darkMode = true }: Readonly<MarqueeSectionProps>) => {
  const { t } = useTranslation();
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  
  const handleInteraction = useCallback(() => setIsHoveredOrFocused(true), []);
  const handleLeaveOrBlur = useCallback(() => setIsHoveredOrFocused(false), []);
  
  return (
    <Card classNames={GridClassNames.marquee} contentClassnames={`p-0`}>
      <section
        className="p-4 lg:p-6 h-full"
        aria-labelledby="marquee-header"
        onMouseOver={handleInteraction}
        onFocus={handleInteraction}
        onMouseLeave={handleLeaveOrBlur}
        onBlur={handleLeaveOrBlur}
      >
        <p
          id="marquee-header"
          className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white"
        >
          {t("marquee.stack")}
        </p>
        
        <MarqueeContent
          darkMode={darkMode}
          isHoveredOrFocused={isHoveredOrFocused}
        />
      </section>
    </Card>
  );
};

export default memo(MarqueeSection);
