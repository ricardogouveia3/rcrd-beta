import { ReactNode } from "react";
import styled, { useTheme } from "styled-components";

interface ComponentProps {
  children?: ReactNode;
  gap?: number;
}

export default function LateralBarContainer({
  children,
  gap,
}: Readonly<ComponentProps>) {
  const theme = useTheme();

  const LateralBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: ${theme.spacing.gap100};
  `;

  const componentStyle = {
    gap: gap + "rem",
  };

  return (
    <LateralBarContainer style={componentStyle}>{children}</LateralBarContainer>
  );
}

LateralBarContainer.defaultProps = {
  gap: 1.5,
};
