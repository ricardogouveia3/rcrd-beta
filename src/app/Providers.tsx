"use client";

import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Animations from "./styles/Animations";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Animations />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
