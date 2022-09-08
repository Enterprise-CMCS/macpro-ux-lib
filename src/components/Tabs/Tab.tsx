import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["h4"];

interface Props extends IntrinsicElements {}

/**
 * **Tab Component**
 *
 * @param {string}           id           Unique identifier required for each Accordion item used for form control.
 */
export const Tab: React.FC<PropsWithChildren<Props>> = ({ ...rest }) => {
  return <>Test</>;
};
