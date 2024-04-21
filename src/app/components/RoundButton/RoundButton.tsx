import Image from "next/image";
import styles from "./RoundButton.module.css";

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
  const componentStyle = {
    border: backgroundColor ? "none" : "1px solid #000000",
    backgroundColor: backgroundColor ?? "transparent",
    minWidth: buttonSize,
    minHeight: buttonSize,
  };

  return (
    <button className={styles.roundButton} style={componentStyle}>
      <Image src={icon} width={iconSize} height={iconSize} alt={altText} />
    </button>
  );
}

RoundButton.defaultProps = {
  buttonSize: 45,
};
