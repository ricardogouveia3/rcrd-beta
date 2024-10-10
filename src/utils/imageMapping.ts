import images from "../assets/images";

function getImage(imageKey: string): string | undefined {
  const imageMap: Record<string, string> = {
    angular: images.logos.angular,
    bootstrap: images.logos.bootstrap,
    css3: images.logos.css3,
    figma: images.logos.figma,
    git: images.logos.git,
    html5: images.logos.html5,
    js: images.logos.js,
    nextjs: images.logos.nextjs,
    reactNative: images.logos.nextjs,
    dribbble: images.logos.reactNative,
    react: images.logos.react,
    sass: images.logos.sass,
    typescript: images.logos.typescript,
    vue: images.logos.vue,
    wordpress: images.logos.wordpress,
  };

  return imageMap[imageKey];
}

export default getImage;
