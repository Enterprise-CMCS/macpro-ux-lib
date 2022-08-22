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
    useEffect(() => {
      const scriptList = document.querySelectorAll("script[id='uswdsJS']");
      const convertedNodeList = Array.from(scriptList);

      if (!convertedNodeList.length) {
        const script = document.createElement("script");
        script.src = "/assets/js/uswds.js";
        script.id = "uswdsJS";
        document.body.append(script);
      }

      return () => {
        const scriptList = document.querySelectorAll("script[id='uswdsJS']");
        const convertedNodeList = Array.from(scriptList);
        if (convertedNodeList.length) {
          convertedNodeList[0]?.parentNode?.removeChild(convertedNodeList[0]);
        }
      };
    });

    return <Story />;
  },
];
