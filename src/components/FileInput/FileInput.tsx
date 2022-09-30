import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["p"];

interface Props extends IntrinsicElements {}

/**
 * **FileInput Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const FileInput: React.FC<Props> = ({ ...rest }) => {
  return <p>Test</p>;
};
