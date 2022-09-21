import React, { useEffect, useState } from "react";
/* istanbul ignore file */
// Ignoring this file from testing as we are going to be deleting/not using these functions
export const generateId = (digits: number = 6): number => {
  return Math.trunc(Math.random() * Math.pow(10, digits));
};

// Regex
export const completeDateFilter = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/);
export const numbersAndSlashesFilter = new RegExp(/^[0-9/]+$/);

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

export const daysInMonth = (month: number, year: number): number => {
  switch (month) {
    case 2:
      return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
    case 9:
    case 4:
    case 6:
    case 11:
      return 30;
    default:
      return 31;
  }
};
