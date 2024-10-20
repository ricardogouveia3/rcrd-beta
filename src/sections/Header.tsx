import { FC } from "react";
import HeaderMenu from "../components/Header/HeaderMenu";
import HeaderMenuItem from "../components/Header/HeaderMenuItem";
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
  selectedMenuItem,
  setSelectedMenuItem,
}) => {

  const ToogleDarkModeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> = darkMode
    ? images.icons.sun
    : images.icons.moon;

  const ToogleLanguageIcon: string = darkMode // change this
    ? images.flags.br
    : images.flags.gb;

  return (
    <header className="flex justify-center gap-3">
      <HeaderMenu selectedMenuItem={selectedMenuItem}>
        <HeaderMenuItem
          item="Home"
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        >
          Home
        </HeaderMenuItem>
        <HeaderMenuItem
          item="About"
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        >
          About
        </HeaderMenuItem>
        <HeaderMenuItem
          item="Projects"
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        >
          Projects
        </HeaderMenuItem>
        <HeaderMenuItem
          item="Posts"
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        >
          Posts
        </HeaderMenuItem>
        <HeaderMenuItem
          item="Contact"
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        >
          Contact
        </HeaderMenuItem>
      </HeaderMenu>

      <div className="flex flex-col sm:flex-row gap-1">
        <ToggleButton onClick={handleDarkModeToggle} icon={ToogleDarkModeIcon} />
        <ToggleButton onClick={handleLanguageToggle} icon={ToogleLanguageIcon} />
      </div>

    </header>
  );
};

export default Header;
