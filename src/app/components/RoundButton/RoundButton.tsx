import Image from "next/image";
import styled from "styled-components";

type ComponentProps = {
  backgroundColor?: string;
  icon: string;
  iconSize: number;
  buttonSize?: number;
  altText: string;
  animation?: string;
};

const RoundButtonComponent = styled.button`
  margin: 0.125rem;
  border-radius: 5vh;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RoundButtonIcon = styled(Image)`
  ${RoundButtonComponent}:hover & {
    animation-duration: 0.75s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;

const setAnimationName = (animation: string) => {
  if (animation === "gear-rotate") {
    return "GearRotate";
  }
  if (animation === "arrow-bounce") {
    return "ArrowBounce";
  } else {
    return "none";
  }
};

export default function RoundButton({
  backgroundColor,
  icon,
  iconSize,
  buttonSize = 45,
  altText,
  animation = "none",
}: Readonly<ComponentProps>) {
  const componentStyle = {
    border: backgroundColor ? "none" : "1px solid #000000",
    backgroundColor: backgroundColor ?? "transparent",
    minWidth: buttonSize,
    minHeight: buttonSize,
  };

  const iconAnimation = {
    animationName: setAnimationName(animation),
  };

  return (
    <RoundButtonComponent style={componentStyle}>
      <RoundButtonIcon
        src={icon}
        width={iconSize}
        height={iconSize}
        alt={altText}
        style={iconAnimation}
      />
    </RoundButtonComponent>
  );
}
