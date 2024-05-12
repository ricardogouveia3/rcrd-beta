import Image from "next/image";
import styled from "styled-components";

type ComponentProps = {
  backgroundColor?: string;
  icon: string;
  iconSize: number;
  buttonSize?: number;
  altText: string;
  linkUrl: string;
  newTab?: boolean;
};

const RoundLinkComponent = styled.a`
  margin: 0.125rem;
  border-radius: 5vh;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function RoundLink({
  backgroundColor,
  icon,
  iconSize,
  buttonSize = 45,
  altText,
  linkUrl,
  newTab = false,
}: Readonly<ComponentProps>) {
  const componentStyle = {
    border: backgroundColor ? "none" : "1px solid #000000",
    backgroundColor: backgroundColor ?? "transparent",
    minWidth: buttonSize,
    minHeight: buttonSize,
  };

  return (
    <RoundLinkComponent
      style={componentStyle}
      href={linkUrl}
      target={newTab ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      <Image src={icon} width={iconSize} height={iconSize} alt={altText} />
    </RoundLinkComponent>
  );
}
