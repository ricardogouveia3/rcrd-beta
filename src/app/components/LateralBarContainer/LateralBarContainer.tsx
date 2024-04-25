import theme from "@/app/styles/theme";
import { ReactNode } from "react";
import styled from "styled-components";

interface ComponentProps {
  children?: ReactNode;
  gap?: number;
}

const LateralBarContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: ${theme.spacing.gap100};
`;

export default function LateralBarContainer({
  children,
  gap = 1.5,
}: Readonly<ComponentProps>) {
  const componentStyle = {
    gap: gap + "rem",
  };

  return (
    <LateralBarContainerComponent style={componentStyle}>
      {children}
    </LateralBarContainerComponent>
  );
}
