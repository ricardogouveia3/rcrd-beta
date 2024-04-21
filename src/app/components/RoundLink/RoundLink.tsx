import Image from "next/image";
import styles from "./RoundLink.module.css";

type ComponentProps = {
  backgroundColor?: string;
  icon: string;
  iconSize: number;
  buttonSize?: number;
  altText: string;
  linkUrl: string;
};

export default function RoundLink({
  backgroundColor,
  icon,
  iconSize,
  buttonSize,
  altText,
  linkUrl,
}: Readonly<ComponentProps>) {
  const componentStyle = {
    border: backgroundColor ? "none" : "1px solid #000000",
    backgroundColor: backgroundColor ?? "transparent",
    minWidth: buttonSize,
    minHeight: buttonSize,
  };

  return (
    <a className={styles.roundLink} style={componentStyle} href={linkUrl}>
      <Image src={icon} width={iconSize} height={iconSize} alt={altText} />
    </a>
  );
}

RoundLink.defaultProps = {
  buttonSize: 45,
};
