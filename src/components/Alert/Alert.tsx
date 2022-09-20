import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["p"];

interface Props extends IntrinsicElements {}

/**
 * **Alert Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const Alert: React.FC<Props> = ({ ...rest }) => {
  return <p>Test</p>;
};
