import MainWrapper from "@components/Containers/SectionContainer";
import AboutMe from "@sections/AboutMe.section";
import Contact from "@sections/Contact.section";
import ExperienceSection from "@sections/Experience.section";
import LocationSection from "@sections/Location.section";
import MarqueeSection from "@sections/Marquee.section";
import PhraseSection from "@sections/Phrase.section";
import PostsSection from "@sections/Posts.section";
import ProjectSection from "@sections/Projects.section";
import SocialSection from "@sections/Social.section";

export default function Home() {
  return (
    <MainWrapper>
      <AboutMe />
      <LocationSection />
      <SocialSection />
      <MarqueeSection />
      <PhraseSection />
      <ProjectSection />
      <ExperienceSection />
      <PostsSection />
      <Contact />
    </MainWrapper>
  );
}
