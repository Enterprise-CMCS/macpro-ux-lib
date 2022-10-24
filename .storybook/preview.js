import "../src/assets/css/styles.css";
import "../src/assets/theme/styles.scss";
import { themes } from "@storybook/theming";
import logoBlue from "./oneMAC_logo_blue.svg";
import logoWhite from "./oneMAC_logo_white.svg";

const brandThemeParams = {
  brandTitle: "OneMAC UI Component Library",
  brandUrl: "https://onemac.cms.gov/",
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
    dark: { ...themes.dark, ...brandThemeParams, brandImage: logoWhite },
    light: { ...themes.light, ...brandThemeParams, brandImage: logoBlue },
  },
};
