import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {}

/**
 * CardChoiceGroup Component
 * @param {string}    text    Renders the text contained in the component.
 */
export const CardChoiceGroup: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => {
  return (
    <div className="card-choice-group" {...rest}>
      <span className="gradient-cap"></span>
      {children}
    </div>
  );
};
