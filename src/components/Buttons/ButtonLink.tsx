import { ReactNode, useState, CSSProperties, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  link: string;
  round?: 'sm' | 'md' | 'lg' | 'full';
  hoverColor?: string;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
};

export default function ButtonLink({
  children,
  link,
  round,
  hoverColor = "transparent",
  className,
  style,
  onMouseEnter,
  onMouseLeave,
}: Readonly<ButtonProps>) {
  const [bgColor, setBgColor] = useState("transparent");

  let roundClassName = '';

  switch (round) {
    case 'lg':
      roundClassName = 'rounded-lg';
      break;
    case 'md':
      roundClassName = 'rounded-md';
      break;
    case 'sm':
      roundClassName = 'rounded';
      break;
    case 'full':
      roundClassName = 'rounded-full';
      break;
    default:
      break;
  }

  return (
    <a
      href={link}
      target="_blank"
      className={`flex justify-center items-center py-2 px-4 text-sm font-medium text-center default-text-color ${roundClassName} w-fit hover-background border default-border ${className}`}
      style={{ ...style, backgroundColor: bgColor }}
      onMouseEnter={(e) => {
        setBgColor(hoverColor);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setBgColor("transparent");
        if (onMouseLeave) onMouseLeave(e);
      }}
    >
      {children}
    </a>
  );
}
