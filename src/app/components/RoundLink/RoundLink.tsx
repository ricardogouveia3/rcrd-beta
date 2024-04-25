import Image from "next/image";
import styled, { useTheme } from "styled-components";

type ComponentProps = {
  backgroundColor?: string;
  icon: string;
  iconSize: number;
  buttonSize?: number;
  altText: string;
  linkUrl: string;
};

const DefaultProps = {
  buttonSize: 45,
};

export default function RoundLink({
  backgroundColor,
  icon,
  iconSize,
  buttonSize,
  altText,
  linkUrl,
  ...DefaultProps
}: Readonly<ComponentProps>) {
  const theme = useTheme();

  const RoundLink = styled.a`
    margin: 0.125rem;
    border-radius: 5vh;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const componentStyle = {
    border: backgroundColor ? "none" : "1px solid #000000",
    backgroundColor: backgroundColor ?? "transparent",
    minWidth: buttonSize,
    minHeight: buttonSize,
  };

  return (
    <RoundLink style={componentStyle} href={linkUrl}>
      <Image src={icon} width={iconSize} height={iconSize} alt={altText} />
    </RoundLink>
  );
}
