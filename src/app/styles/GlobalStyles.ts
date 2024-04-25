"use client";

import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  // global styles

  * {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.quartz};
    background-color: ${({ theme }) => theme.colors.brightGray};
    overflow: hidden;
    width: 100dvw;
    height: 100dvh;
    padding: ${({ theme }) => theme.spacing.gap100};
    padding-bottom: ${({ theme }) => theme.spacing.gap50};
    display: flex;
    justify-content: center;
  }

  main {
    display: flex;
    align-items: stretch;
    height: 100%;
  }

  section {
    color: var(---white);
    background: repeat center/50% padding-box url("/static.png")
      ${({ theme }) => theme.colors.quartz};
  }
`;

export default GlobalStyles;
