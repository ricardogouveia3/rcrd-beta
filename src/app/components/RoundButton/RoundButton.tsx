import Image from "next/image";
import styled, { useTheme } from "styled-components";

type ComponentProps = {
  backgroundColor?: string;
  icon: string;
  iconSize: number;
  buttonSize?: number;
  altText: string;
};

export default function RoundButton({
  backgroundColor,
  icon,
  iconSize,
  buttonSize,
  altText,
}: Readonly<ComponentProps>) {
  const theme = useTheme();

  const RoundButton = styled.button`
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
    <RoundButton style={componentStyle}>
      <Image src={icon} width={iconSize} height={iconSize} alt={altText} />
    </RoundButton>
  );
}

RoundButton.defaultProps = {
  buttonSize: 45,
};
