import { logos } from "@assets/images";

export const iconsMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  angular: logos.angular,
  bootstrap: logos.bootstrap,
  css3: logos.css3,
  figma: logos.figma,
  git: logos.git,
  html5: logos.html5,
  js: logos.js,
  nextjs: logos.nextjs,
  reactNative: logos.reactNative,
  react: logos.react,
  sass: logos.sass,
  typescript: logos.typescript,
  vue: logos.vue,
  wordpress: logos.wordpress,
};

const marqueeItems = [
  { key: "angular", label: "Angular" },
  { key: "bootstrap", label: "Bootstrap" },
  { key: "css3", label: "CSS3" },
  { key: "figma", label: "Figma" },
  { key: "git", label: "Git" },
  { key: "html5", label: "HTML5" },
  { key: "js", label: "JavaScript" },
  { key: "nextjs", label: "NextJS" },
  { key: "reactNative", label: "React Native" },
  { key: "react", label: "React" },
  { key: "sass", label: "Sass" },
  { key: "typescript", label: "Typescript" },
  { key: "vue", label: "VueJS" },
  { key: "wordpress", label: "Wordpress" },
];

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledItems = shuffleArray(marqueeItems);
const half = Math.ceil(shuffledItems.length / 2);

export const marqueeItemsLeft = shuffledItems.slice(0, half);
export const marqueeItemsRight = shuffledItems.slice(half);
