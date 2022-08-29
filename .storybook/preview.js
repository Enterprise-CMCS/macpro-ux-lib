import "../src/assets/css/styles.css";
import "../src/assets/theme/styles.scss";
import "../sr-calendar/dist/Calendar.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
