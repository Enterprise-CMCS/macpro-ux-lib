import React from "react";

type Props = {} & JSX.IntrinsicElements["button"];

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button {...rest} className="usa-button">
      {children}
    </button>
  );
};
