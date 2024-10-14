/// <reference types="vite-plugin-svgr/client" />

import AngularIcon from "@logos/angular.svg?react";
import BootstrapIcon from "@logos/bootstrap.svg?react";
import Css3Icon from "@logos/css3.svg?react";
import FigmaIcon from "@logos/figma.svg?react";
import GitIcon from "@logos/git.svg?react";
import Html5Icon from "@logos/html5.svg?react";
import JsIcon from "@logos/js.svg?react";
import NextjsIcon from "@logos/nextjs.svg?react";
import ReactNativeIcon from "@logos/react-native.svg?react";
import ReactIcon from "@logos/react.svg?react";
import SassIcon from "@logos/sass.svg?react";
import TypescriptIcon from "@logos/typescript.svg?react";
import VueIcon from "@logos/vuejs.svg?react";
import WordpressIcon from "@logos/wordpress.svg?react";

const images = {
  avatar: `https://www.gravatar.com/avatar/2fd6e9e968e8b59bcc70ca9c3adb9c24?s=256`,
  logos: {
    angular: AngularIcon,
    bootstrap: BootstrapIcon,
    css3: Css3Icon,
    figma: FigmaIcon,
    git: GitIcon,
    html5: Html5Icon,
    js: JsIcon,
    nextjs: NextjsIcon,
    reactNative: ReactNativeIcon,
    react: ReactIcon,
    sass: SassIcon,
    typescript: TypescriptIcon,
    vue: VueIcon,
    wordpress: WordpressIcon,
  },
};

export default images;
