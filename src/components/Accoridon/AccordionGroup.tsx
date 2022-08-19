import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {
  className?: string;
}

export const AccordionGroup: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  id,
  ...rest
}) => {
  return (
    <div
      className={`usa-accordion${className ? ` ${className}` : ""}`}
      id={id}
      {...rest}
    >
      {children}
    </div>
  );
};
