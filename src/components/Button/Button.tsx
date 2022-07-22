import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["button"];

// Props
interface Props extends IntrinsicElements {
  buttonText: string;
  buttonVariation?: ButtonVariation;
  disabled?: boolean;
  icon?: boolean;
  shiftIconLeft?: boolean;
}

type ButtonVariation =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "inverse"
  | "base"
  | "link"
  | "big"
  | "outline";

const ButtonVariationConversion: { [key: string]: string } = {
  primary: "",
  secondary: "outline",
  error: "secondary",
  success: " bg-green",
  inverse: "outline usa-button--inverse",
  base: "base",
  link: "unstyled",
  big: "big",
  outline: "outline text-black",
};

export const Button: React.FC<Props> = ({
  buttonVariation,
  buttonText,
  shiftIconLeft,
  icon,
  ...rest
}) => {
  const buttonVariationType =
    ButtonVariationConversion[buttonVariation || ""] ?? "";
  return (
    <button
      {...rest}
      className={`usa-button usa-button--${buttonVariationType}`}
    >
      {shiftIconLeft && icon && <span className="margin-right-1">+</span>}
      <span>{buttonText}</span>
      {icon && !shiftIconLeft && <span className="margin-left-1">+</span>}
    </button>
  );
};
