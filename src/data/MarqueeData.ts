import images from "../assets/images";

export const iconsMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  angular: images.logos.angular,
  bootstrap: images.logos.bootstrap,
  css3: images.logos.css3,
  figma: images.logos.figma,
  git: images.logos.git,
  html5: images.logos.html5,
  js: images.logos.js,
  nextjs: images.logos.nextjs,
  reactNative: images.logos.reactNative,
  react: images.logos.react,
  sass: images.logos.sass,
  typescript: images.logos.typescript,
  vue: images.logos.vue,
  wordpress: images.logos.wordpress,
};

export const marqueeItemsLeft: { key: keyof typeof iconsMap; label: string }[] =
  [
    { key: "angular", label: "Angular" },
    { key: "bootstrap", label: "Bootstrap" },
    { key: "css3", label: "CSS3" },
    { key: "figma", label: "Figma" },
    { key: "git", label: "Git" },
    { key: "html5", label: "HTML5" },
    { key: "nextjs", label: "NextJS" },
  ];

export const marqueeItemsRight: {
  key: keyof typeof iconsMap;
  label: string;
}[] = [
  { key: "js", label: "JavaScript" },
  { key: "reactNative", label: "React Native" },
  { key: "react", label: "React" },
  { key: "sass", label: "Sass" },
  { key: "typescript", label: "Typescript" },
  { key: "vue", label: "VueJS" },
  { key: "wordpress", label: "Wordpress" },
];
