import theme from "@/app/styles/theme";
import { styled } from "styled-components";
import LateralBarContainer from "../../components/LateralBarContainer/LateralBarContainer";
import SlideMain from "../../components/SlideMain/SlideMain";
import RoundLink from "../../components/RoundLink/RoundLink";
import BallDropBar from "../../components/BallDropBar/BallDropBar";
import Image from "next/image";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const TextualElementsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 6rem;
  line-height: 0.8;
  color: ${theme.colors.white};
  letter-spacing: -3px;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-style: italic;
  font-size: 4rem;
  line-height: 1.5;
  color: ${theme.colors.white};
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

const DecorativeElementsContainer = styled.div`
  position: absolute;
  right: 0;
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2.25rem;
  z-index: 0;
`;

const DecorativeBox = styled.div`
  width: 8rem;
  height: 100%;
  border: 1px solid ${theme.colors.white};
`;

export default function Hero() {
  return (
    <>
      <SlideMain>
        <HeroContainer>
          <TextualElementsContainer>
            <Title>Ricardo Gouveia</Title>
            <Subtitle>
              <Developer>developer</Developer> & <Designer>designer</Designer>
            </Subtitle>
          </TextualElementsContainer>

          <DecorativeElementsContainer>
            <Image
              src={"img/photos/hero_photo.png"}
              alt={"Picture of Ricardo Gouveia"}
              width={0}
              height={0}
              sizes="0"
              style={{
                width: "400px",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.6)",
              }}
            />
            <DecorativeBox />
          </DecorativeElementsContainer>
        </HeroContainer>
      </SlideMain>
      <LateralBarContainer>
        <RoundLink
          icon="img/logos/dribbble.png"
          iconSize={35}
          buttonSize={60}
          backgroundColor={theme.colors.begonia}
          altText="Github icon"
          linkUrl={"/"}
        />
        <BallDropBar />
      </LateralBarContainer>
    </>
  );
}
