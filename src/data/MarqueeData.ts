import { IconName } from "../types/Icon.type.ts";

const marqueeItems = [
  { iconName: "angular" as IconName, label: "Angular", hoverColor: "#c3002f" },
  {
    iconName: "bootstrap" as IconName,
    label: "Bootstrap",
    hoverColor: "#0d6efd",
  },
  { iconName: "css3" as IconName, label: "CSS3", hoverColor: "#2965f1" },
  { iconName: "figma" as IconName, label: "Figma", hoverColor: "#a259ff" },
  { iconName: "git" as IconName, label: "Git", hoverColor: "#F1502F" },
  { iconName: "html5" as IconName, label: "HTML5", hoverColor: "#e34c26" },
  { iconName: "js" as IconName, label: "JavaScript", hoverColor: "#F0DB4F" },
  { iconName: "nextjs" as IconName, label: "NextJS", hoverColor: "#000000" },
  {
    iconName: "reactNative" as IconName,
    label: "React Native",
    hoverColor: "#88dded",
  },
  { iconName: "react" as IconName, label: "React", hoverColor: "#61DBFB" },
  { iconName: "sass" as IconName, label: "Sass", hoverColor: "#cc6699" },
  {
    iconName: "typescript" as IconName,
    label: "Typescript",
    hoverColor: "#007acc",
  },
  { iconName: "vue" as IconName, label: "VueJS", hoverColor: "#41B883" },
  {
    iconName: "wordpress" as IconName,
    label: "Wordpress",
    hoverColor: "#21759b",
  },
];

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledItems = shuffleArray(marqueeItems);
const half = Math.ceil(shuffledItems.length / 2);

export const marqueeItemsLeft = shuffledItems.slice(0, half);
export const marqueeItemsRight = shuffledItems.slice(half);
