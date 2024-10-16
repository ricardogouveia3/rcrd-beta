import { useState } from "react";

import AppContainer from "./components/AppContainer";

import Card from "./components/Card/Card";
import CardGrid from "./components/Card/Grid";

import AboutMe from "./sections/AboutMe.section";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import MarqueeSection from "./sections/Marquee.section";
import SocialSection from "./sections/Social.section";
import PhraseSection from "./sections/Phrase.section";
import ExperienceSection from "./sections/Experience.section";
import Contact from "./sections/Contact.section";
import PostsSection from "./sections/Posts.section";

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
        <AboutMe />

        <Card classNames="lg:row-span-2 lg:col-start-7 lg:row-start-1 rounded-lg lg:col-span-6 rounded-lg" loading={true}>
          <p className="text-lg/7 font-medium text-gray-950 dark:text-white text-center">Loading State</p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla.
          </p>
        </Card>

        <SocialSection />
        <MarqueeSection darkMode={darkMode} />
        <PhraseSection />

        <Card classNames="lg:col-start-1 lg:col-span-9 lg:row-start-5 rounded-lg">
          <p className="text-lg/7 font-medium text-gray-950 dark:text-white text-center">Scalable Infrastructure 1</p>
          <p className="text-sm/6 text-gray-600 dark:text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque.
          </p>
        </Card>

        <ExperienceSection />

        <PostsSection />

        <Contact />

        <Footer />
      </CardGrid>
    </AppContainer>
  );
}
