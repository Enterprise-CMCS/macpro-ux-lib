import "../src/assets/css/styles.css";
import "../src/assets/theme/styles.scss";
import { USWDSDecorator } from "../src/utils";
import "../src/assets/js/uswds-init.min.js";

export const decorators = [...USWDSDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
