import "../src/assets/css/styles.css";
import "../src/assets/theme/styles.scss";
import "react-calendar/dist/Calendar.css";
import { themes } from "@storybook/theming";
import logo from "./oneMAC_logo.svg";

const brandThemeParams = {
  brandTitle: "OneMAC UI Component Library",
  brandUrl: "https://onemac.cms.gov/",
  brandImage: logo,
  brandTarget: "_blank",
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, ...brandThemeParams },
    light: { ...themes.light, ...brandThemeParams },
  },
};
