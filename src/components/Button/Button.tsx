import React, { useLayoutEffect, useRef } from "react";
import { Icon, IconChoice } from "../Icon/Icon";
import tooltip from "../../../node_modules/@uswds/uswds/packages/usa-tooltip/src";

type ButtonElements = JSX.IntrinsicElements["button"];

export interface ButtonProps extends ButtonElements {
  ariaLabel?: string;
  buttonText: string;
  buttonVariation?: ButtonVariation;
  disabled?: boolean;
  iconName?: IconChoice;
  largeButton?: boolean;
  shiftIconLeft?: boolean;
  target?: string;
  tooltipPosition?: TooltipPositions;
  tooltipText?: string;
  withTooltip?: boolean;
}

/**
 * Button Component
 * @param {string}      [ariaLabel]           Overwrites the aria label of the button element that will be read on screen readers.
 * @param {string}      [button]              Type of specified button.
 * @param {string}      buttonText            Renders the text contained in the button.
 * @param {string}      [buttonVariation]     Renders the style of the button.
 * @param {boolean}     [disabled]            Determines whether or not a button is enabled.
 * @param {IconChoice}  [iconName]            Handles the icon to render in the button.
 * @param {boolean}     [largeButton]         Determines whether a large button is required.
 * @param {boolean}     [shiftIconLeft]       Determines if a rendered icon should render on the left side.
 * @param {string}      [target]              Specifies a name or a keyword that indicates where to display the response that is received after clicking the button.
 * @param {string}      [tooltipPosition]     Determines the position of the tooltip.
 * @param {string}      [tooltipText]         Renders the text contained in the tooltip.
 * @param {boolean}     [withTooltip]         Determines if a tooltip should be rendered.
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

type TooltipPositions = "top" | "bottom" | "left" | "right";

const ButtonVariationConversion: { [key: string]: string } = {
  primary: "cms-primary-background",
  secondary: "usa-button--outline cms-primary-text",
  "secondary-outline": "usa-button--secondary-outline",
  error: "usa-button--secondary",
  success: "bg-green",
  inverse: "usa-button--inverse",
  base: "usa-button--base",
  link: "usa-button--unstyled",
};

export const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  buttonText,
  buttonVariation = "primary",
  className,
  disabled = false,
  iconName,
  largeButton = false,
  shiftIconLeft = false,
  target = "_self",
  tooltipPosition = null,
  tooltipText = undefined,
  withTooltip = false,
  ...rest
}) => {
  // Tooltip setup
  const tooltipRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const tooltipElement = tooltipRef.current;

    if (typeof tooltip.on === "function") {
      tooltip.on(tooltipElement);
    }
    return () => {
      if (typeof tooltip.off === "function") {
        tooltip.off(tooltipElement);
      }
    };
  }, []);

  // Get the classes for the specified button variation
  const buttonVariationClass = ButtonVariationConversion[buttonVariation] ?? "";
  const largeButtonClass = largeButton ? "usa-button--big" : "";
  const tooltipClass = withTooltip ? "usa-tooltip" : "";

  const computedClasses: String[] = [
    buttonVariationClass,
    largeButtonClass,
    tooltipClass,
    className ?? "",
  ];

  // Combine computed classes without adding unnecessary spaces
  const classNames = `display-flex flex-align-center usa-button ${computedClasses
    .filter(Boolean)
    .join(" ")}`;

  return (
    <button
      ref={tooltipRef}
      disabled={disabled}
      aria-label={ariaLabel || `${buttonText} button`}
      className={classNames}
      formTarget={target}
      data-position={tooltipPosition}
      title={tooltipText}
      {...rest}
    >
      {shiftIconLeft && iconName && (
        <Icon name={iconName} color="curentColor" />
      )}

      {buttonText}

      {iconName && !shiftIconLeft && (
        <Icon name={iconName} color="curentColor" />
      )}
    </button>
  );
};
