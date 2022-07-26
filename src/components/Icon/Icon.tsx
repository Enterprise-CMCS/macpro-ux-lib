import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["svg"];

interface Props extends IntrinsicElements {
  icon?: string;
  iconSize?: IconSize;
  ariaHidden?: boolean;
  role?: string;
}

type IconSize = "3" | "4" | "5" | "6" | "7" | "8" | "9";

export const Icon: React.FC<Props> = ({
  icon,
  iconSize = "3",
  role = "img",
  ariaHidden = true,
  ...rest
}) => {
  return (
    <>
      <svg {...rest} className={`usa-icon--size-${iconSize}`} focusable="false">
        <use href={`sprite.svg#${icon}`}></use>
      </svg>
    </>
  );
};
