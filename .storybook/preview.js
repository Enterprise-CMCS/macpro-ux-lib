import React from "react";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import { defaultTheme } from "../src/theme/theme";
import "../src/uswds";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];
