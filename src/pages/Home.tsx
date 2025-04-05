import { useEffect, useState, Suspense, lazy } from "react";
import i18n from "@utils/i18n";
import MainWrapper from "@components/Containers/SectionContainer";
import Header from "@sections/Header";
import AboutMe from "@sections/AboutMe.section";
import { useTheme } from "@context/ThemeContext.tsx";

const LocationSection = lazy(() => import("@sections/Location.section"));
const SocialSection = lazy(() => import("@sections/Social.section"));
const MarqueeSection = lazy(() => import("@sections/Marquee.section"));
const PhraseSection = lazy(() => import("@sections/Phrase.section"));
const ProjectSection = lazy(() => import("@sections/Projects.section"));
const ExperienceSection = lazy(() => import("@sections/Experience.section"));
const PostsSection = lazy(() => import("@sections/Posts.section"));
const Contact = lazy(() => import("@sections/Contact.section"));
const Footer = lazy(() => import("@sections/Footer"));

export default function Home() {
  const { darkMode } = useTheme();
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem("language") ?? "en";
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
      <Header language={language} handleLanguageToggle={handleLanguageToggle} />
      <MainWrapper>
        <AboutMe />
        
        <Suspense fallback={null}>
          <LocationSection />
        </Suspense>
        
        <Suspense fallback={null}>
          <SocialSection darkMode={darkMode} />
        </Suspense>
        
        <Suspense fallback={null}>
          <MarqueeSection darkMode={darkMode} />
        </Suspense>
        
        <Suspense fallback={null}>
          <PhraseSection />
        </Suspense>
        
          <ProjectSection />
          <ExperienceSection />
        
        <Suspense fallback={null}>
          <PostsSection />
        </Suspense>
        
          <Contact />
          <Footer />
      </MainWrapper>
    </>
  );
}
