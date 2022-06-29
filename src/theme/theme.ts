import { DefaultTheme } from "styled-components";

interface Font {
  fontFamily: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface Theme {
  font: Font;
}

export const defaultTheme = (): DefaultTheme => ({
  font: {
    fontFamily: "Open Sans",
    xxs: "8px",
    xs: "12px",
    sm: "16px",
    md: "24px",
    lg: "36px",
    xl: "42px",
    xxl: "72px",
  },
});
