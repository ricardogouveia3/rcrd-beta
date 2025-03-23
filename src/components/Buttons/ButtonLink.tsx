import { ReactNode, useState, CSSProperties, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  link: string;
  round?: 'sm' | 'md' | 'lg' | 'full';
  hoverColor?: string;
  className?: string;
  style?: CSSProperties; // Para aceitar o estilo
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>; // Para aceitar o evento onMouseEnter
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>; // Para aceitar o evento onMouseLeave
};

export default function ButtonLink({
  children,
  link,
  round,
  hoverColor = "transparent",
  className,
  style, // Aceitando a prop `style`
  onMouseEnter, // Aceitando a prop onMouseEnter
  onMouseLeave, // Aceitando a prop onMouseLeave
}: Readonly<ButtonProps>) {
  const [bgColor, setBgColor] = useState("transparent");

  // Adiciona a classe baseada no valor de round
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
      style={{ ...style, backgroundColor: bgColor }} // Aplicando o estilo recebido
      onMouseEnter={(e) => {
        setBgColor(hoverColor);
        if (onMouseEnter) onMouseEnter(e); // Chama o onMouseEnter recebido
      }}
      onMouseLeave={(e) => {
        setBgColor("transparent");
        if (onMouseLeave) onMouseLeave(e); // Chama o onMouseLeave recebido
      }}
    >
      {children}
    </a>
  );
}
