import { useState } from "react";
import AppContainer from "./components/AppContainer";
import Card from "./components/Card/Card"
import CardGrid from "./components/Card/Grid";
import Footer from "./components/Footer";
import HeaderMenu from "./components/Header/HeaderMenu"
import HeaderMenuItem from "./components/Header/HeaderMenuItem";
import ToggleButton from "./components/Header/ToogleDarkModeButton";
import MarqueeElement from "./components/Marquee/Marquee";

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Home')

  const handleToggle = () => { setDarkMode(!darkMode) }

  return (
    <AppContainer darkMode={darkMode}>
      <header className="flex justify-center gap-3">
        <HeaderMenu>
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
        <Card classNames="lg:row-span-2 lg:col-span-3 rounded-lg">
          <p className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white text-center">
            Powerful APIs
          </p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla. Vivamus volutpat ipsum sed nibh mollis interdum. Quisque ut mattis lorem. Fusce vestibulum nulla id lacus dictum, in condimentum ante luctus. Fusce sagittis viverra bibendum. Donec pretium dolor elit, mattis ultricies nibh convallis eget. Vestibulum in orci et sem lobortis vehicula nec non urna.
          </p>
        </Card>

        <Card classNames="lg:col-start-4 lg:col-span-3 rounded-lg" loading={true}>
          <p className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white text-center">
            Loading State
          </p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla.
          </p>
        </Card>

        <Card classNames="lg:col-start-7 lg:col-span-3 rounded-lg">
          <p className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white text-center">
            Scalable Infrastructure
          </p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque.
          </p>
        </Card>

        <div className="lg:col-start-4 lg:col-span-6 lg:row-start-2 flex flex-col gap-4">

          <Card classNames="rounded-lg">
            <p className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white text-center">
              Fast Deployments
            </p>
            <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla. Vivamus volutpat ipsum sed nibh mollis interdum. Quisque ut mattis lorem. Fusce vestibulum nulla id lacus dictum, in condimentum ante luctus. Fusce sagittis viverra bibendum. Donec pretium dolor elit, mattis ultricies nibh convallis eget. Vestibulum in orci et sem lobortis vehicula nec non urna.
            </p>
          </Card>

          <Card classNames="rounded-lg" contentClassnames="">
            <MarqueeElement />
          </Card>
        </div>


        <Card classNames="lg:row-span-2 lg:col-span-3 rounded-lg">
          <p className="text-lg/7 font-medium tracking-tight text-gray-950 dark:text-white text-center">
            Advanced Security
          </p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla. Vivamus volutpat ipsum sed nibh mollis interdum. Quisque ut mattis lorem. Fusce vestibulum nulla id lacus dictum, in condimentum ante luctus. Fusce sagittis viverra bibendum. Donec pretium dolor elit, mattis ultricies nibh convallis eget. Vestibulum in orci et sem lobortis vehicula nec non urna.
          </p>
        </Card>
        <Footer />
      </CardGrid>
    </AppContainer>
  );
}
