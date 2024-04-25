"use client";

import { styled } from "styled-components";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import IconBar from "./components/IconBar/Iconbar";
import RoundLink from "./components/RoundLink/RoundLink";
import BallDropBar from "./components/BallDropBar/BallDropBar";
import SlideMain from "./components/SlideMain/SlideMain";
import LateralBarContainer from "./components/LateralBarContainer/LateralBarContainer";
import theme from "./styles/theme";

const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${theme.spacing.gap50};
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 6rem;
  line-height: 0.8;
  color: ${theme.colors.pureWhite};
  letter-spacing: -3px;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-style: italic;
  font-size: 4rem;
  line-height: 1.5;
  color: ${theme.colors.pureWhite};
  letter-spacing: -3px;
  margin: 0;
`;

const Developer = styled.span`
  text-decoration: wavy underline;
  text-underline-offset: 0.5rem;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 0.225rem;
  text-decoration-color: ${theme.colors.mediumTurquoise};
`;

const Designer = styled.span`
  text-decoration: wavy underline;
  text-underline-offset: 0.5rem;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 0.225rem;
  text-decoration-color: ${theme.colors.begonia};
`;

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <LateralBarContainer gap={3}>
          <Navbar centerButton={false} />
          <IconBar />
        </LateralBarContainer>
        <SlideMain>
          <Title>Ricardo Gouveia</Title>
          <Subtitle>
            <Developer>developer</Developer> & <Designer>designer</Designer>
          </Subtitle>
        </SlideMain>
        <LateralBarContainer>
          <RoundLink
            icon="/dribbble.png"
            iconSize={35}
            buttonSize={60}
            backgroundColor={theme.colors.begonia}
            altText="Github icon"
            linkUrl={"/"}
          />
          <BallDropBar />
        </LateralBarContainer>
      </Main>
    </>
  );
}
