import React from "react";

const ButtonVariationConversion: any = {
  primary: "",
  secondary: "outline",
  error: "secondary",
  success: "green",
  inverse: "outline usa-button--inverse",
  base: "base",
};

type IntrinsicElements = JSX.IntrinsicElements["button"];

// Props
interface Props extends IntrinsicElements {
  buttonText: string;
  buttonVariation?: string;
}

export const Button: React.FC<Props> = ({
  buttonVariation = "",
  buttonText,
  ...rest
}) => {
  // clickhandler
  //

  const buttonType = ButtonVariationConversion[buttonVariation] || "";

  return (
    <button {...rest} className={`usa-button usa-button--${buttonVariation}`}>
      {buttonText}
    </button>
  );
};
