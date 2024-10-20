import { FC } from "react";
import ToggleButton from "../components/Buttons/ToggleButton";
import images from "../assets/images";

type HeaderProps = {
  darkMode: boolean;
  language: string;
  handleDarkModeToggle: () => void;
  handleLanguageToggle: () => void;
};

const Header: FC<HeaderProps> = ({
  darkMode,
  language,
  handleDarkModeToggle,
  handleLanguageToggle,
}) => {

  const ToogleDarkModeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> = darkMode
    ? images.icons.sun
    : images.icons.moon;

  const ToogleLanguageIcon: string = language === 'pt-br'
    ? images.flags.br
    : images.flags.gb;

  return (
    <header className="flex justify-center gap-3">

      <div className="flex flex-row gap-2">
        <ToggleButton onClick={handleDarkModeToggle} icon={ToogleDarkModeIcon} />
        <ToggleButton onClick={handleLanguageToggle} icon={ToogleLanguageIcon} />
      </div>

    </header>
  );
};

export default Header;
