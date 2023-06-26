import React, { useMemo, useState, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { localStorageManager } from "@chakra-ui/react-utils";
import { defaultTheme, ThemeProvider } from "../data/providers";
import { createTheme } from "../data/theme";
import { css, Global } from "@emotion/react";
import { domAnimation, LazyMotion } from "framer-motion";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

interface StyleManagerProps {
  children: ReactNode;
}

const StyleManager: React.FC<StyleManagerProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(localStorageManager.get() ?? defaultTheme);
  
  const toggle = (previous: string): string => {
    const next = previous === "dark" ? "light" : "dark";
    localStorageManager.set(next);
    return next;
  };

  const chakraTheme = useMemo(() => createTheme(theme), [theme]);

  return (
    <ThemeProvider.Provider value={{ theme, setTheme, toggle }}>
      <ChakraProvider theme={chakraTheme} resetCSS>
        <Global styles={GlobalStyles} />
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </ChakraProvider>
    </ThemeProvider.Provider>
  );
};

export default StyleManager;
