import getImage from "../../utils/imageMapping";
import MarqueeItem from "./MarqueeItem";
import Marquee from "react-fast-marquee";

const angular = getImage(`angular`);
const bootstrap = getImage(`bootstrap`);
const css3 = getImage(`css3`);
const figma = getImage(`figma`);
const git = getImage(`git`);
const html5 = getImage(`html5`);
const nextjs = getImage(`nextjs`);
const js = getImage(`js`);
const reactNative = getImage(`reactNative`);
const react = getImage(`react`);
const sass = getImage(`sass`);
const typescript = getImage(`typescript`);
const vue = getImage(`vue`);
const wordpress = getImage(`wordpress`);

export default function MarqueeElement() {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <Marquee pauseOnHover={true} direction="left">
        <MarqueeItem icon={angular}>Angular</MarqueeItem>
        <MarqueeItem icon={bootstrap}>Bootstrap</MarqueeItem>
        <MarqueeItem icon={css3}>CSS3</MarqueeItem>
        <MarqueeItem icon={figma}>Figma</MarqueeItem>
        <MarqueeItem icon={git}>Git</MarqueeItem>
        <MarqueeItem icon={html5}>HTML5</MarqueeItem>
        <MarqueeItem icon={nextjs}>NextJS</MarqueeItem>
      </Marquee>
      <Marquee pauseOnHover={true} direction="right">
        <MarqueeItem icon={js}>JavaScript</MarqueeItem>
        <MarqueeItem icon={reactNative}>React Native</MarqueeItem>
        <MarqueeItem icon={react}>React</MarqueeItem>
        <MarqueeItem icon={sass}>Sass</MarqueeItem>
        <MarqueeItem icon={typescript}>Typescript</MarqueeItem>
        <MarqueeItem icon={vue}>VueJS</MarqueeItem>
        <MarqueeItem icon={wordpress}>Wordpress</MarqueeItem>
      </Marquee>
    </div>
  );
}


