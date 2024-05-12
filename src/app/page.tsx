"use client";

import { styled } from "styled-components";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import IconBar from "./components/IconBar/Iconbar";
import LateralBarContainer from "./components/LateralBarContainer/LateralBarContainer";
import theme from "./styles/theme";
import Hero from "./sections/Hero/Hero";

const SiteWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  max-height: 1080px; // needs reviewing
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${theme.spacing.gap50};
`;

export default function Home() {
  return (
    <SiteWrapper>
      <Header />
      <Main>
        <LateralBarContainer gap={3}>
          <Navbar centerButton={false} />
          <IconBar />
        </LateralBarContainer>
        <Hero />
      </Main>
    </SiteWrapper>
  );
}
