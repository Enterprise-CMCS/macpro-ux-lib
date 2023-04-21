import React from "react";

type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type Family =
  | "mono"
  | "sans"
  | "serif"
  | "code"
  | "heading"
  | "body"
  | "alt"
  | "ui";

type IntrinsicElements = JSX.IntrinsicElements["p"];

interface Props extends IntrinsicElements {
  size?: Size;
  family?: Family;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export const Typography: React.FC<Props> = ({
  size = "2xl",
  family = "sans",
  as = "p",
  children,
  ...rest
}) => {
  const Component = as;
  return (
    <Component className={`font-${family}-${size}`} {...rest}>
      {children}
    </Component>
  );
};
