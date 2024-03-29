import React from "react";
import { iconChoices } from "./IconChoices";
import sprite from "../../assets/img/sprite.svg";

export type IconChoice = typeof iconChoices[number];
type IntrinsicElements = JSX.IntrinsicElements["svg"];

export interface IconProps extends IntrinsicElements {
  name: IconChoice;
  iconSize?: IconSize;
  ariaHidden?: boolean;
  role?: string;
  ariaLabel?: string;
  color?: string;
}

type IconSize = 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Icon Component
 * @param {string}  name                  Determines which icon that needs to be rendered.
 * @param {number}  [iconSize]            String used to specify the size of the icon, a number between 3-9.
 * @param {boolean} [ariaHidden]          Determines whether or not the element is hidden from a screen reader.
 * @param {string}  [role]                Describes the role of an element in programs that can make use of it
 * @param {string}  [ariaLabel]           Error message text displayed when inputError === true.
 * @param {color}   [string]              Color of Icon that is rendered, defaults to black.
 */

export const Icon: React.FC<IconProps> = ({
  name,
  iconSize = 3,
  role = "img",
  ariaHidden = true,
  ariaLabel,
  color = "black",
  className,
  ...rest
}) => {
  const iconName = name.replace(/_/g, " ");
  return (
    <svg
      aria-label={ariaLabel || `${iconName} icon`}
      className={`usa-icon--size-${iconSize}${
        className ? ` ${className}` : ""
      }`}
      aria-hidden={ariaHidden}
      role={role}
      fill="currentColor"
      color={color}
      {...rest}
    >
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};
