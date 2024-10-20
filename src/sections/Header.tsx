import { FC } from "react";
import ToggleButton from "../components/Buttons/ToggleButton";
import images from "../assets/images";

type HeaderProps = {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
  handleLanguageToggle: () => void;
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
};

const Header: FC<HeaderProps> = ({
  darkMode,
  handleDarkModeToggle,
  handleLanguageToggle,
}) => {

  const ToogleDarkModeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> = darkMode
    ? images.icons.sun
    : images.icons.moon;

  const ToogleLanguageIcon: string = darkMode // change this
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
