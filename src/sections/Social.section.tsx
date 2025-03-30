import Card from "../components/Card/Card";
import SocialLink from "../components/Buttons/SocialLink";
import { useTranslation } from "react-i18next";
import { GridClassNames } from "@constants/layout.ts";
import { IconName } from "src/types/Icon";
import { socialItems } from "@data/Social";

type SocialSectionProps = {
  darkMode?: boolean;
};

export default function SocialSection({ darkMode = true }: Readonly<SocialSectionProps>) {
  const { t } = useTranslation();

  const renderSocialItems = (
    items: { iconName: IconName; label: string; hoverColor?: string, link?: string }[],
  ) => {
    return items.map(({ iconName, label, hoverColor, link = '' }) => (
      <SocialLink
        iconName={iconName}
        key={label}
        hoverColor={hoverColor}
        link={link}
        darkMode={darkMode}
      >
        {label}
      </SocialLink>
    ));
  };

  return (
    <Card classNames={`${GridClassNames.social}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <p className="text-lg/7 font-medium text-gray-950 dark:text-white">{t("social.getInTouch")}</p>
      <div className="flex gap-2 flex-wrap">
        {renderSocialItems(socialItems)}
      </div>
    </Card>
  );
}
