import React from "react";
import { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["a"];

export interface LinkProps extends IntrinsicElements {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  text?: string;
  onClick?: () => any;
}

/**
 * **Link Component**
 *
 * This is a basic component that handles the rendering of a standard anchor tag and standard attribute values.
 *
 * Text for the link can be passed in as a prop or as a child. Both options will produce the same output.
 *```
 * // Examples:
 * <Link {...link} />
 * <Link {...link} /><Icon name="logout" />Log Out</Link>
 *```
 *
 */
export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  text,
  ...rest
}) => {
  return (
    <a className="usa-link" style={{ cursor: "pointer" }} {...rest}>
      {(children && <>{children}</>) || (text && <>{text}</>)}
    </a>
  );
};
