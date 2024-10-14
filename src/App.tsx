import { useState } from "react";
import AppContainer from "./components/AppContainer";
import Card from "./components/Card/Card";
import CardGrid from "./components/Card/Grid";
import Footer from "./components/Footer";
import HeaderMenu from "./components/Header/HeaderMenu";
import HeaderMenuItem from "./components/Header/HeaderMenuItem";
import ToggleButton from "./components/Header/ToogleDarkModeButton";
import MarqueeElement from "./components/Marquee/MarqueeElement";
import AboutMe from "./components/AboutMe";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("Home");

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppContainer darkMode={darkMode}>
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

      <CardGrid classNames={`lg:grid-cols-12`}>

        <Card classNames="lg:row-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-1 rounded-lg" contentClassnames="">
          <AboutMe />
        </Card>

        <Card classNames="lg:row-span-2 lg:col-start-7 lg:row-start-1 rounded-lg lg:col-span-6 rounded-lg" loading={true}>
          <p className="text-lg/7 font-medium text-gray-950 dark:text-white text-center">Loading State</p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla.
          </p>
        </Card>

        <Card classNames="lg:row-span-1 lg:col-span-8 lg:col-start-1 lg:row-start-3 rounded-lg">
          <p className="text-lg/7 font-medium text-gray-950 dark:text-white">Get in touch:</p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque.
          </p>
        </Card>

        <Card classNames="lg:col-start-1 lg:col-span-8 lg:row-start-4 lg:row-span-1 rounded-lg" contentClassnames="">
          <MarqueeElement darkMode={darkMode} />
        </Card>

        <Card classNames="lg:col-start-9 lg:col-span-4 lg:row-start-3 lg:row-span-2 rounded-lg tracking-tight">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            As a front-end developer, I craft user experiences through clean code and thoughtful componentization.
          </p>
          <br />
          <p className="text-gray-900 dark:text-gray-100 font-medium text-xl">
            With expertise in Angular, React, and more, I’ve been building digital solutions since 2015, focused on creating responsive, engaging interfaces that meet modern web standards.
          </p>
        </Card>

        <Card classNames="lg:col-start-1 lg:col-span-6 lg:row-start-5 rounded-lg">
          <p className="text-lg/7 font-medium text-gray-950 dark:text-white text-center">Scalable Infrastructure</p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque.
          </p>
        </Card>

        <Card classNames="lg:col-start-7 lg:col-span-6 lg:row-start-5 rounded-lg">
          <p className="text-lg/7 font-medium text-gray-950 dark:text-white text-center">Scalable Infrastructure 2</p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque.
          </p>
        </Card>
        <Footer />
      </CardGrid>
    </AppContainer>
  );
}
