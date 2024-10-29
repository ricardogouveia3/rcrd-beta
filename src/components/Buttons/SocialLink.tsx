import { ReactNode } from "react";
import ButtonLink from "./ButtonLink";
import Icon from "@components/Icon"; // Importe o tipo IconName
import { IconName } from "../../types/Icon";

type SocialLinkProps = {
  children: ReactNode;
  iconName?: IconName;  // Use IconName em vez de string
  link: string;
};

export default function SocialLink({ children, iconName, link }: Readonly<SocialLinkProps>) {
  return (
    <ButtonLink link={link} round="full">
      {iconName && <Icon name={iconName} />}
      &nbsp;
      <span className="text-xs font-semibold default-text-color">{children}</span>
    </ButtonLink>
  );
}
