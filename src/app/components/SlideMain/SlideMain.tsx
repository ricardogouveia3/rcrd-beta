import { ReactNode } from "react";
import { styled, useTheme } from "styled-components";

interface ComponentProps {
  children?: ReactNode;
}

export default function SlideMain({ children }: Readonly<ComponentProps>) {
  const theme = useTheme();

  const Section = styled.section`
    width: 100%;
    border-radius: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacing.gap50};
    color: ${theme.colors.pureWhite};
  `;

  return <Section>{children}</Section>;
}
