import React, { useEffect } from "react";

export const generateId = (digits: number = 6): number => {
  return Math.trunc(Math.random() * Math.pow(10, digits));
};

/**
 * Standard Storybook Decorators
 *
 * This decorator manually injects the `uswds.js` script in the component story on load. Adding this
 * script anywhere else seems to cause issues due to the way Storybook is rendering the components.
 *
 * At present, importing this file in preview, preview-head, preview-body, or in component code does
 * not work.
 */
export const USWDSDecorator = [
  (Story: any) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      const script = document.createElement("script");
      script.onload = () => {
        setIsLoaded(true);
      };
      script.src = "/assets/js/uswds.js";
      document.body.appendChild(script);
      return () => {
        // clean up effects of script here
      };
    }, []);

    return isLoaded ? <Story /> : <div>Loading...</div>;
  },
];
