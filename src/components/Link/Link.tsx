import React from "react";
import { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["a"];

export interface Link extends IntrinsicElements {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  text?: string;
  onClick?: () => any;
}

/**
 * **Link Component**
 *```
 * // Examples:
 * <Link {...link} />
 * <Link {...link} /><Icon name="logout" />Log Out</Link>
 *```
 * Basic component that handles the rendering of a standard anchor tag and standard attribute values.
 *
 */
export const Link: React.FC<PropsWithChildren<Link>> = ({
  children,
  text,
  ...rest
}) => {
  return (
    <a {...rest}>
      {(children && <span>{children}</span>) || (text && <span>{text}</span>)}
    </a>
  );
};
