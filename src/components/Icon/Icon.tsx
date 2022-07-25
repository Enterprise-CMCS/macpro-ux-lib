import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["svg"];

interface Props extends IntrinsicElements {}

type IconVariation = "";

export const Icon: React.FC<Props> = ({ ...rest }) => {
  return (
    <>
      <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use href="/src/assets/img/sprite.svg#accessibility_new"></use>
      </svg>
    </>
  );
};
