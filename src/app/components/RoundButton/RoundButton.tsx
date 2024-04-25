import Image from "next/image";
import styled from "styled-components";

type ComponentProps = {
  backgroundColor?: string;
  icon: string;
  iconSize: number;
  buttonSize?: number;
  altText: string;
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

export default function RoundButton({
  backgroundColor,
  icon,
  iconSize,
  buttonSize = 45,
  altText,
}: Readonly<ComponentProps>) {
  const componentStyle = {
    border: backgroundColor ? "none" : "1px solid #000000",
    backgroundColor: backgroundColor ?? "transparent",
    minWidth: buttonSize,
    minHeight: buttonSize,
  };

  return (
    <RoundButtonComponent style={componentStyle}>
      <Image src={icon} width={iconSize} height={iconSize} alt={altText} />
    </RoundButtonComponent>
  );
}
