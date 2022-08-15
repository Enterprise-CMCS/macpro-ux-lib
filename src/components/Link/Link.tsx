import React from "react";
import { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["a"];

export interface LinkProps extends IntrinsicElements {
  href?: string;
  light?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  text?: string;
  onClick?: () => any;
}

const styles = {
  cursor: "pointer", // we don't get this for free if href is undefined
};

/**
 * **Link Component**
 *
 * This is a basic component that handles the rendering of a standard anchor tag and standard attribute values.
 *
 * Text for the link can be passed in as a prop or as a child. Both options will produce the same output.
 *```
 * // Implmentation Examples:
 * <Link {...linkProps} />
 * <Link {...linkProps} /><Icon name="logout" />Log Out</Link>
 *```
 *
 */
export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  className,
  light,
  style,
  text,
  title,
  ...rest
}) => {
  const classes = `usa-link${light ? "--light" : ""}${
    className ? ` ${className}` : ""
  }`;
  return (
    <a
      className={classes}
      style={{ ...styles, ...style }}
      title={title || (text && `${text} Link`)}
      {...rest}
    >
      {(children && <>{children}</>) || (text && <>{text}</>)}
    </a>
  );
};
