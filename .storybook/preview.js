import "../src/assets/css/styles.css";
import "../src/assets/js/uswds-init.min.js";
import "../src/assets/js/uswds.min";
import "../src/assets/theme/styles.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
