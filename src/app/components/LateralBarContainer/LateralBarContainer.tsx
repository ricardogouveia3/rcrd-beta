import { ReactNode } from "react";
import styles from "./LateralBarContainer.module.css";

interface ComponentProps {
  children?: ReactNode;
  gap?: number;
}

export default function LateralBarContainer({
  children,
  gap,
}: Readonly<ComponentProps>) {
  const componentStyle = {
    gap: gap + "rem",
  };

  return (
    <div className={styles.LateralBarContainer} style={componentStyle}>
      {children}
    </div>
  );
}

LateralBarContainer.defaultProps = {
  gap: 1.5,
};
