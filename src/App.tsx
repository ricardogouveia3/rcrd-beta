import { useState, useEffect } from "react";
import i18n from "@utils/i18n";

import AppContainer from "./components/Containers/AppContainer";
import MainWrapper from "./components/Containers/SectionContainer";

import AboutMe from "./sections/AboutMe.section";
import Contact from "./sections/Contact.section";
import ExperienceSection from "./sections/Experience.section";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import LocationSection from "./sections/Location.section";
import MarqueeSection from "./sections/Marquee.section";
import PhraseSection from "./sections/Phrase.section";
import PostsSection from "./sections/Posts.section";
import ProjectSection from "./sections/Projects.section";
import SocialSection from "./sections/Social.section";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageToggle = () => {
    const newLanguage = language === 'en' ? 'pt-br' : 'en';
    setLanguage(newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <AppContainer darkMode={darkMode}>
      <Header
        darkMode={darkMode}
        language={language}
        handleDarkModeToggle={handleDarkModeToggle}
        handleLanguageToggle={handleLanguageToggle}
      />

      <MainWrapper>
        <AboutMe />
        <LocationSection />
        <SocialSection darkMode={darkMode} />
        <MarqueeSection darkMode={darkMode} />
        <PhraseSection />
        <ProjectSection />
        <ExperienceSection />
        <PostsSection />
        <Contact />
        <Footer />
      </MainWrapper>
    </AppContainer>
  );
}
