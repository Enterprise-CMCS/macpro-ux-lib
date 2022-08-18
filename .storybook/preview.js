import "../src/assets/css/styles.css";
import "../src/assets/theme/styles.scss";
import "../src/assets/js/uswds-init.min.js";

// import { USWDSDecorator } from "../src/utils";

// export const decorators = [...USWDSDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
