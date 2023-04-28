import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";

const path = require("path");

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/preset-scss",
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config: Configuration) => {
    config.resolve?.modules?.push(...[path.resolve(__dirname, "../src")]);

    return config;
  },
};

export default config;
