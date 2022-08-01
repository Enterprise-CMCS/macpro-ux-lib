import React from "react";
import { iconChoices } from "./IconChoices";

type IconChoices = typeof iconChoices[number];
type IntrinsicElements = JSX.IntrinsicElements["svg"];

interface Props extends IntrinsicElements {
  name: IconChoices;
  iconSize?: IconSize;
  ariaHidden?: boolean;
  role?: string;
  ariaLabel?: string;
  renderWhiteIcon: boolean;
}

type IconSize = 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Icon Component
 * @param {string}  name                  Determines which icon that needs to be rendered.
 * @param {number}  [iconSize]            String used to specify the size of the icon, a number between 3-9.
 * @param {boolean} [ariaHidden]          Determines whether or not the element is hidden from a screen reader.
 * @param {string}  [role]                Describes the role of an element in programs that can make use of it
 * @param {string}  [ariaLabel]           Error message text displayed when inputError === true.
 * @param {boolean} [renderWhiteIcon]      Renders a white icon instead of the default black icon.
 */

export const Icon: React.FC<Props> = ({
  name,
  iconSize = 3,
  role = "img",
  ariaHidden = true,
  ariaLabel,
  renderWhiteIcon = false,
  color,
  ...rest
}) => {
  const iconName = name.replace(/_/g, " ");
  return (
    <svg
      aria-label={ariaLabel || `${iconName} icon`}
      {...rest}
      className={`usa-icon--size-${iconSize} ${
        renderWhiteIcon && !color ? "text-white" : ""
      }`}
      aria-hidden={ariaHidden}
      role={role}
      fill="currentColor"
    >
      <use href={`sprite.svg#${name}`}></use>
    </svg>
  );
};
