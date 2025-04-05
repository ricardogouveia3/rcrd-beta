import {IconName} from "./Icon.ts";

export type SocialSectionProps = {
  darkMode?: boolean;
};

export type SocialItem = {
  iconName: IconName;
  label: string;
  hoverColor?: string;
  link?: string;
};
