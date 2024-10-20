import { ReactNode } from "react";
import ButtonLink from "./ButtonLink";

type SocialLinkProps = {
  children: ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
};

export default function SocialLink({ children, icon: Icon, link }: Readonly<SocialLinkProps>) {
  return (
    <ButtonLink link={link} round="full">
      {Icon && <Icon className="w-4 text-black dark:text-white" />}
      &nbsp;
      <span className="text-xs font-semibold text-black dark:text-white">{children}</span>
    </ButtonLink>
  );
}
