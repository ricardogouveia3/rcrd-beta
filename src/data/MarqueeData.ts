import { IconName } from "../types/Icon";

const marqueeItems = [
  { iconName: "angular" as IconName, label: "Angular" },
  { iconName: "bootstrap" as IconName, label: "Bootstrap" },
  { iconName: "css3" as IconName, label: "CSS3" },
  { iconName: "figma" as IconName, label: "Figma" },
  { iconName: "git" as IconName, label: "Git" },
  { iconName: "html5" as IconName, label: "HTML5" },
  { iconName: "js" as IconName, label: "JavaScript" },
  { iconName: "nextjs" as IconName, label: "NextJS" },
  { iconName: "reactNative" as IconName, label: "React Native" },
  { iconName: "react" as IconName, label: "React" },
  { iconName: "sass" as IconName, label: "Sass" },
  { iconName: "typescript" as IconName, label: "Typescript" },
  { iconName: "vue" as IconName, label: "VueJS" },
  { iconName: "wordpress" as IconName, label: "Wordpress" },
];

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledItems = shuffleArray(marqueeItems);
const half = Math.ceil(shuffledItems.length / 2);

export const marqueeItemsLeft = shuffledItems.slice(0, half);
export const marqueeItemsRight = shuffledItems.slice(half);
