import { useState } from "react";
import Card from "../components/Card/Card";
import { useTranslation } from "react-i18next";
import gridClassNames from "@layout/grid";
import { images } from "@assets/images";

export default function AboutMe() {
  const { t } = useTranslation();
  const avatar = images.avatar;
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);

  const hoverLinkClassnames = isHoveredOrFocused ? `decoration-cyan-500` : ``;
  const hoverPhotoClassnames = isHoveredOrFocused ? `scale-110 p-0 rotate-6` : `p-2`;

  const handleInteraction = () => {
    setIsHoveredOrFocused(true);
  };

  const handleLeaveOrBlur = () => {
    setIsHoveredOrFocused(false);
  };

  return (
    <Card classNames={gridClassNames.aboutMe} contentClassnames="">
      <div
        className="default-text-color p-4 lg:p-6"
        onMouseOver={handleInteraction}
        onFocus={handleInteraction}
        onMouseLeave={handleLeaveOrBlur}
        onBlur={handleLeaveOrBlur}
      >
        {avatar && (
          <img
            src={avatar}
            alt="Ricardo Gouveia"
            className={`max-w-24 lg:max-w-32 rounded-full mb-2 lg:mb-3 border-4 border-black dark:border-white transition-all ${hoverPhotoClassnames}`}
          />
        )}
        <h1 className="font-bold text-2xl lg:text-4xl mb-1 lg:mb-3 tracking-tight">Ricardo Gouveia</h1>

        <h2 className="font-medium text-lg md:text-xl lg:text-2xl smooth-text-color tracking-tight mb-2">
          {t('aboutMe.a')} <span className="default-text-color font-bold">{t('aboutMe.primaryRole')}</span> {t('aboutMe.and')}&nbsp;
          <span className="default-text-color font-bold">{t('aboutMe.secondaryRole')}</span> {t('aboutMe.currentlyWorking')}&nbsp;
          <a
            href="https://www.thoughtworks.com/"
            target="_blank"
            className={`font-bold inline-block default-text-color underline decoration-wavy underline-offset-8 transition-colors ${hoverLinkClassnames}`}
          >
            Thoughtworks
          </a>
        </h2>
      </div>
    </Card>
  );
}
