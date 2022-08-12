import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["button"];

interface Props extends IntrinsicElements {}

/**
 * Dropdown Component
 * @param {string}      [target]              Specifies a name or a keyword that indicates where to display the response that is received after clicking the button.
 */

export const Dropdown: React.FC<Props> = ({ ...rest }) => {
  console.log(rest);
  return <></>;
};
