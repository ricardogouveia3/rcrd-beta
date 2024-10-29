import Card from "../components/Card/Card";
import SocialLink from "../components/Buttons/SocialLink";
import { useTranslation } from "react-i18next";
import gridClassNames from "@layout/grid";

export default function SocialSection() {
  const { t } = useTranslation();
  return (
    <Card classNames={`${gridClassNames.social}`} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <p className="text-lg/7 font-medium text-gray-950 dark:text-white">{t("social.getInTouch")}</p>
      <div className="flex gap-2 flex-wrap">
        <SocialLink iconName="bluesky" link="https://bsky.app/profile/rcrd.dev">BlueSky</SocialLink>
        <SocialLink iconName="instagram" link="https://instagram.com/ricardogouveia3">Instagram</SocialLink>
        <SocialLink iconName="github" link="https://github.com/ricardogouveia3">Github</SocialLink>
        <SocialLink iconName="linkedin" link="https://www.linkedin.com/in/ricardogouveia3/">Linkedin</SocialLink>
        <SocialLink iconName="dribbble" link="https://dribbble.com/ricardogouveia3">Dribbble</SocialLink>
        <SocialLink iconName="email" link="mailto:me@rcrd.dev">Email</SocialLink>
      </div>
    </Card>
  );
}
