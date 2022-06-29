import React from "react";
import { ThemeProvider as TP } from "styled-components";
import { Theme } from "./theme";

interface Props {
  children: React.ReactNode;
  theme: Theme;
}

export const ThemeProvider = ({ children, theme }: Props) => {
  return <TP theme={theme}>{children}</TP>;
};
