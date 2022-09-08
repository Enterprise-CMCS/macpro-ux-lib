import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["h4"];

interface Props extends IntrinsicElements {
  disabled?: boolean;
  tab: string;
}

/**
 * **TabPanel Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const TabPanel: React.FC<PropsWithChildren<Props>> = ({
  children,
  tab,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};
