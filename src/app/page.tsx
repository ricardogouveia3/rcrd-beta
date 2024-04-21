import styles from "./styles/Hero.module.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import IconBar from "./components/IconBar/Iconbar";
import RoundLink from "./components/RoundLink/RoundLink";
import BallDropBar from "./components/BallDropBar/BallDropBar";
import SlideMain from "./components/SlideMain/SlideMain";
import LateralBarContainer from "./components/LateralBarContainer/LateralBarContainer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <LateralBarContainer gap={3}>
          <Navbar centerButton={false} />
          <IconBar />
        </LateralBarContainer>
        <SlideMain />
        <LateralBarContainer>
          <RoundLink
            icon="/dribbble.png"
            iconSize={35}
            buttonSize={60}
            backgroundColor="#FD7272"
            altText="Github icon"
            linkUrl={"/"}
          />
          <BallDropBar />
        </LateralBarContainer>
      </main>
    </>
  );
}
