import { ReactNode } from "react";
import ButtonLink from "./ButtonLink";
import Icon from "@components/Icon";
import { IconName } from "../../types/Icon";

type SocialLinkProps = {
  children: ReactNode;
  iconName?: IconName;
  link: string;
  hoverColor?: string;
};

export default function SocialLink({ children, iconName, link, hoverColor }: Readonly<SocialLinkProps>) {
  return (
    <ButtonLink
      link={link}
      round="full"
      hoverColor={hoverColor}
      className="transition-colors duration-300 ease-in-out"
    >
      {iconName && <Icon name={iconName} />}
      &nbsp;
      <span className="text-xs font-semibold default-text-color">{children}</span>
    </ButtonLink>
  );
}
