import { ThemeProvider } from "styled-components";

import { THEME } from "constants/theme";
import { GlobalStyle } from "constants/styles/global";
import { ThemeWrapperProps } from "./types";

const ThemeWrapper = ({ children }: ThemeWrapperProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={THEME}>{children}</ThemeProvider>
  </>
);

export default ThemeWrapper;
