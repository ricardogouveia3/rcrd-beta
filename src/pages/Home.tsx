import { useEffect, useState } from "react";
import i18n from "@utils/i18n";
import MainWrapper from "@components/Containers/SectionContainer";
import AboutMe from "@sections/AboutMe.section";
import Contact from "@sections/Contact.section";
import ExperienceSection from "@sections/Experience.section";
import Footer from "@sections/Footer";
import Header from "@sections/Header";
import LocationSection from "@sections/Location.section";
import MarqueeSection from "@sections/Marquee.section";
import PhraseSection from "@sections/Phrase.section";
import PostsSection from "@sections/Posts.section";
import ProjectSection from "@sections/Projects.section";
import SocialSection from "@sections/Social.section";
import { useTheme } from "@context/ThemeContext.tsx";

export default function Home() {
  const { darkMode } = useTheme();
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem("language") || "en";
  });

  const handleLanguageToggle = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "en" ? "pt-br" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  useEffect(() => {
    i18n.changeLanguage(language).then();
  }, [language]);

  return (
    <>
      <Header
        language={language}
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
    </>
  );
}
