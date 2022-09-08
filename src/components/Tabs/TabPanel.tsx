import React, { Children, PropsWithChildren, useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {}

/**
 * **TabPanel Component**
 *
 * @param {boolean}    multiSelect  Determines whether or not multiple Accordion items can be expanded at the same time.
 */
export const TabPanel: React.FC<PropsWithChildren<Props>> = ({ ...rest }) => {
  return <>Test</>;
};
