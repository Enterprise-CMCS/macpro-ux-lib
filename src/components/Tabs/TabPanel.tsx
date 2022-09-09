import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["h4"];

interface Props extends IntrinsicElements {
  disabled?: boolean;
  tab: string;
}

/**
 * **TabPanel Component**
 *
 * @param {React.Node}    children  Contents to be displayed when Tab is clicked.
 * @param {boolean}       disabled  Setting this value will render Tab with disabled styles and make tab unclickable.
 * @param {string}        id        Unique identifier required for each TabPanel item used for form control.
 * @param {string}        tab       Text label for each tab.
 *
 */
export const TabPanel: React.FC<PropsWithChildren<Props>> = ({
  children,
  id,
  tab,
  ...rest
}) => {
  return (
    <div {...rest} aria-labelledby={id} aria-hidden="true" role="tabpanel">
      {children}
    </div>
  );
};
