import { ReactNode, useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";
import Icon from "@components/Icon";
import { IconName } from "../../types/Icon";
import { getContrastColor } from "@utils/color";  // Função que calcula a cor de contraste

type SocialLinkProps = {
  children: ReactNode;
  iconName?: IconName;
  link: string;
  hoverColor?: string;
  darkMode?: boolean;
};

export default function SocialLink({
  children,
  iconName,
  link,
  hoverColor = "#000000",
  darkMode = true,
}: Readonly<SocialLinkProps>) {
  const defaultTextColor = darkMode ? "#FFFFFF" : "#1A202C";

  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState(defaultTextColor);

  useEffect(() => {
    setBgColor("transparent");
    setTextColor(defaultTextColor);
  }, [darkMode, defaultTextColor]);

  const handleMouseEnter = () => {
    setBgColor(hoverColor);
    setTextColor(getContrastColor(hoverColor));
  };

  const handleMouseLeave = () => {
    setBgColor("transparent");
    setTextColor(defaultTextColor);
  };

  return (
    <ButtonLink
      link={link}
      round="full"
      hoverColor={hoverColor}
      className="transition-colors duration-300 ease-in-out"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}  // Aplica a alteração ao passar o mouse
      onMouseLeave={handleMouseLeave}  // Restaura ao sair
    >
      {iconName && <Icon name={iconName} />}
      &nbsp;
      <span
        className="text-xs font-semibold"
        style={{ color: textColor }}  // Aplica a cor do texto
      >
        {children}
      </span>
    </ButtonLink>
  );
}
