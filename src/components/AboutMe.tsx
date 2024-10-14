import { useState } from "react";
import getImage from "../utils/imageMapping";

export default function AboutMe() {
  const avatar = getImage("avatar");
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);

  const hoverClassnames = isHoveredOrFocused ? `decoration-cyan-500` : ``;

  const handleInteraction = () => {
    setIsHoveredOrFocused(true);
  };

  const handleLeaveOrBlur = () => {
    setIsHoveredOrFocused(false);
  };

  return (
    <div
      className="text-black dark:text-white"
      onMouseOver={handleInteraction}
      onFocus={handleInteraction}
      onMouseLeave={handleLeaveOrBlur}
      onBlur={handleLeaveOrBlur}
    >
      <img
        src={avatar}
        alt="Ricardo Gouveia"
        className="max-w-32 rounded-full mb-3 p-2 border-4 border-black dark:border-white"
      />
      <h1 className="font-bold text-4xl mb-3 tracking-tight">Ricardo Gouveia</h1>
      <h2 className="font-medium text-2xl text-quartz-l30 tracking-tight">
        a <span className="text-black dark:text-white">front-end developer</span> and{" "}
        <span className="text-black dark:text-white">UI designer</span> currently working at{" "}
        <a
          href="https://www.thoughtworks.com/"
          target="_blank"
          className={`font-bold inline-block text-black dark:text-white underline decoration-wavy underline-offset-8 transition-colors ${hoverClassnames}`}
        >
          Thoughtworks
        </a>
      </h2>
    </div>
  );
}
