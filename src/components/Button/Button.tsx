import React, { useLayoutEffect, useRef } from "react";
import { Icon, IconChoice } from "../Icon/Icon";
import tooltip from "../../../node_modules/@uswds/uswds/packages/usa-tooltip/src";

type IntrinsicElements = JSX.IntrinsicElements["button"];

interface Props extends IntrinsicElements {
  buttonText: string;
  buttonVariation?: ButtonVariation;
  disabled?: boolean;
  iconName?: IconChoice;
  shiftIconLeft?: boolean;
  ariaLabel?: string;
  largeButton?: boolean;
  target?: string;
  tooltipPosition?: TooltipPosition;
  tooltipText?: string;
  withTooltip?: boolean;
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

type TooltipPosition = "top" | "bottom" | "left" | "right";

const ButtonVariationConversion: { [key: string]: string } = {
  primary: " cms-primary-background",
  secondary: "outline cms-primary-text",
  "secondary-outline": "secondary-outline",
  error: "secondary",
  success: " bg-green",
  inverse: "inverse",
  base: "base",
  link: "unstyled",
};

export const Button: React.FC<Props> = ({
  ariaLabel,
  buttonVariation = "primary",
  buttonText,
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
  const buttonVariationType = ButtonVariationConversion[buttonVariation] ?? "";
  const classNames = `display-flex usa-button usa-button--${buttonVariationType} ${
    largeButton ? "usa-button--big" : ""
  }${className ? ` ${className}` : ""}`;
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
