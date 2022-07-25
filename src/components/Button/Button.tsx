import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["button"];

interface Props extends IntrinsicElements {
  buttonText: string;
  buttonVariation?: ButtonVariation;
  disabled?: boolean;
  icon?: boolean;
  shiftIconLeft?: boolean;
  ariaLabel?: string;
  largeButton?: boolean;
}

type ButtonVariation =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "inverse"
  | "base"
  | "link"
  | "outline";

const ButtonVariationConversion: { [key: string]: string } = {
  primary: "",
  secondary: "outline",
  error: "secondary",
  success: " bg-green",
  inverse: "outline usa-button--inverse",
  base: "base",
  link: "unstyled",
  outline: "outline text-black",
};

export const Button: React.FC<Props> = ({
  buttonVariation,
  buttonText,
  shiftIconLeft,
  icon,
  ariaLabel,
  largeButton,
  ...rest
}) => {
  const buttonVariationType =
    ButtonVariationConversion[buttonVariation || ""] ?? "";
  return (
    <button
      {...rest}
      aria-label={ariaLabel || `${buttonText} button`}
      className={`usa-button usa-button--${buttonVariationType} ${
        largeButton ? "usa-button--big" : ""
      }`}
    >
      {shiftIconLeft && icon && <span className="margin-right-1">+</span>}
      <span>{buttonText}</span>
      {icon && !shiftIconLeft && <span className="margin-left-1">+</span>}
    </button>
  );
};
