import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const Animations = styled.createGlobalStyle`
  @keyframes ArrowBounce {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes GearRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Animations;
