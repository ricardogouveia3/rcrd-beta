import theme from "@/app/styles/theme";
import styled from "styled-components";

const BallDropBarComponent = styled.div`
  border: 1px solid ${theme.colors.pureBlack};
  border-radius: 8vh;
  background-color: ${theme.colors.quartz};
  padding: 0.25rem;
  height: 100%;

  /* remove before flight */
  display: flex;
  justify-content: center;
`;

const Ball = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid ${theme.colors.pureWhite};
  border-radius: 10vh;
`;

export default function BallDropBar() {
  return (
    <BallDropBarComponent>
      <Ball />
    </BallDropBarComponent>
  );
}
