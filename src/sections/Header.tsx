import { FC } from "react";
import HeaderMenu from "../components/Header/HeaderMenu";
import HeaderMenuItem from "../components/Header/HeaderMenuItem";
import ToggleButton from "../components/Header/ToogleDarkModeButton";

type HeaderProps = {
  darkMode: boolean;
  handleToggle: () => void;
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
};

const Header: FC<HeaderProps> = ({
  darkMode,
  handleToggle,
  selectedMenuItem,
  setSelectedMenuItem,
}) => {
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

      <ToggleButton onClick={handleToggle} isDarkMode={darkMode} />
    </header>
  );
};

export default Header;
