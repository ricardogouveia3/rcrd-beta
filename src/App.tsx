import { useState } from "react";
import AppContainer from "./components/AppContainer";
import Card from "./components/Card/Card";
import CardGrid from "./components/Card/Grid";
import MarqueeElement from "./components/Marquee/MarqueeElement";
import AboutMe from "./components/AboutMe";
import SocialLink from "./components/SocialLink";
import images from "./assets/images";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("Home");

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageToggle = () => {
    return;
  };

  return (
    <AppContainer darkMode={darkMode}>
      <Header
        darkMode={darkMode}
        handleDarkModeToggle={handleDarkModeToggle}
        handleLanguageToggle={handleLanguageToggle}
        selectedMenuItem={selectedMenuItem}
        setSelectedMenuItem={setSelectedMenuItem}
      />

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

        <Card classNames="lg:row-span-1 lg:col-span-8 lg:col-start-1 lg:row-start-3 rounded-lg" contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
          <p className="text-lg/7 font-medium text-gray-950 dark:text-white">Get in touch:</p>
          <div className="flex gap-2 flex-wrap">
            <SocialLink icon={images.logos.bluesky} link="https://bsky.app/profile/rcrd.dev">BlueSky</SocialLink>
            <SocialLink icon={images.logos.instagram} link="https://instagram.com/ricardogouveia3">Instagram</SocialLink>
            <SocialLink icon={images.logos.github} link="https://github.com/ricardogouveia3">Github</SocialLink>
            <SocialLink icon={images.logos.linkedin} link="https://www.linkedin.com/in/ricardogouveia3/">Linkedin</SocialLink>
            <SocialLink icon={images.logos.dribbble} link="https://dribbble.com/ricardogouveia3">Dribbble</SocialLink>
            <SocialLink icon={images.logos.email} link="mailto:me@rcrd.dev">Email</SocialLink>
          </div>
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
