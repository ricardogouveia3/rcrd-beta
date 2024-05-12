import theme from "@/app/styles/theme";
import styled, { keyframes } from "styled-components";

const BallDropBarComponent = styled.div`
  border: 1px solid ${theme.colors.black};
  border-radius: 8vh;
  background-color: ${theme.colors.quartz};
  padding: 0.25rem;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const ballY = keyframes`
  0% { transform: translateY(-30px) }
  100% { transform: translateY(100vh) }
`;

const Ball = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid ${theme.colors.white};
  border-radius: 10vh;
  animation: ${ballY} 1.5s infinite ease-in;
`;

export default function BallDropBar() {
  return (
    <BallDropBarComponent>
      <Ball />
    </BallDropBarComponent>
  );
}
