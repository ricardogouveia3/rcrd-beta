import { useState } from "react";
import images from "../assets/images";

export default function AboutMe() {
  const avatar = images.avatar;
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);

  const hoverLinkClassnames = isHoveredOrFocused ? `decoration-cyan-500` : ``;
  const hoverPhotoClassnames = isHoveredOrFocused ? `scale-110 p-0 rotate-6` : `p-2`;

  const handleInteraction = () => {
    setIsHoveredOrFocused(true);
  };

  const handleLeaveOrBlur = () => {
    setIsHoveredOrFocused(false);
  };

  return (
    <div
      className="text-black dark:text-white p-4 lg:p-6"
      onMouseOver={handleInteraction}
      onFocus={handleInteraction}
      onMouseLeave={handleLeaveOrBlur}
      onBlur={handleLeaveOrBlur}
    >
      {avatar && (
        <img
          src={avatar}
          alt="Ricardo Gouveia"
          className={`max-w-24 lg:max-w-32 rounded-full mb-3 border-4 border-black dark:border-white transition-all ${hoverPhotoClassnames}`}
        />
      )}
      <h1 className="font-bold text-4xl mb-3 tracking-tight">Ricardo Gouveia</h1>

      <h2 className="font-medium text-2xl text-quartz-l30 tracking-tight mb-2">
        a <span className="text-black dark:text-white font-bold">front-end developer</span> and{" "}
        <span className="text-black dark:text-white font-bold">UI designer</span> currently working at{" "}
        <a
          href="https://www.thoughtworks.com/"
          target="_blank"
          className={`font-bold inline-block text-black dark:text-white underline decoration-wavy underline-offset-8 transition-colors ${hoverLinkClassnames}`}
        >
          Thoughtworks
        </a>
      </h2>
    </div>
  );
}
