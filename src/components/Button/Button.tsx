import React from "react";
import { Icon, IconChoice } from "../Icon/Icon";

type IntrinsicElements = JSX.IntrinsicElements["button"];

interface Props extends IntrinsicElements {
  buttonText: string;
  buttonVariation?: ButtonVariation;
  disabled?: boolean;
  iconName?: IconChoice;
  shiftIconLeft?: boolean;
  ariaLabel?: string;
  largeButton?: boolean;
}

/**
 * Button Component
 * @param {string}      buttonText            Renders the text contained in the button.
 * @param {string}      [buttonVariation]     Renders the style of the button.
 * @param {boolean}     [disabled]            Determines whether or not a button is enabled.
 * @param {IconChoice}  [iconName]            Handles the icon to render in the button.
 * @param {boolean}     [shiftIconLeft]       Determines if a rendered icon should render on the left side.
 * @param {string}      [ariaLabel]           Overwrites the aria label of the button element that will be read on screen readers.
 * @param {boolean}     [largeButton]         Determines whether a large button is required.
 * @param {string}      [button]              Type of specified button.
 * @param {Event}       [onClick]             Handles its behavior when the button is clicked.
 * @param {string}      [target]              Specifies a name or a keyword that indicates where to display the response that is received after clicking the button.
 */

type ButtonVariation =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "inverse"
  | "base"
  | "link"
  | "secondary-outline";

const ButtonVariationConversion: { [key: string]: string } = {
  primary: " cms-primary-background",
  secondary: "outline cms-primary-text",
  error: "secondary",
  success: " bg-green",
  inverse: "inverse",
  base: "base",
  link: "unstyled",
  "secondary-outline": "secondary-outline",
};

export const Button: React.FC<Props> = ({
  buttonVariation = "primary",
  buttonText,
  shiftIconLeft = false,
  iconName,
  ariaLabel,
  largeButton = false,
  disabled = false,
  ...rest
}) => {
  const buttonVariationType = ButtonVariationConversion[buttonVariation] ?? "";
  return (
    <button
      disabled={disabled}
      {...rest}
      aria-label={ariaLabel || `${buttonText} button`}
      className={`display-flex usa-button usa-button--${buttonVariationType} ${
        largeButton ? "usa-button--big" : ""
      }`}
    >
      {shiftIconLeft && iconName && (
        <Icon name={iconName} color="curentColor" />
      )}
      <span className={`padding-x-05${iconName ? " padding-top-05" : ""}`}>
        {buttonText}
      </span>
      {iconName && !shiftIconLeft && (
        <div>
          <Icon name={iconName} color="curentColor" />
        </div>
      )}
    </button>
  );
};
