import theme from "@/app/styles/theme";
import { ReactNode } from "react";
import { styled } from "styled-components";

interface ComponentProps {
  children?: ReactNode;
}

const Section = styled.section`
  width: 100%;
  border-radius: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing.gap50};
  color: ${theme.colors.pureWhite};
`;

export default function SlideMain({ children }: Readonly<ComponentProps>) {
  return <Section>{children}</Section>;
}
