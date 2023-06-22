import React, { createContext } from "react";

export const defaultTheme: string = "dark";

interface ThemeContextProps {
  theme: string;
  setTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});

interface ToastContextProps {
  jsx: JSX.Element | null;
  setJsx: ((jsx: JSX.Element | null) => void) | null;
}

export const ToastContext = createContext<ToastContextProps>({
  jsx: null,
  setJsx: null,
});

export const LanyardProvider = createContext({});
