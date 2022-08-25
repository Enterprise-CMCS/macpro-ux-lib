import { Icon } from "components/Icon/Icon";
import { Link, LinkProps } from "components/Link/Link";
import React, { PropsWithChildren } from "react";

interface Props extends LinkProps {
  actionText?: string;
  bordered?: boolean;
  className?: string;
  darkBG?: boolean;
  headingText?: string;
}

/**
 * CardChoice Component
 * @param {string}    text    Renders the text contained in the component.
 */
export const CardChoice: React.FC<PropsWithChildren<Props>> = ({
  actionText,
  bordered,
  children,
  className,
  darkBG,
  headingText,
  href,
  onClick,
  ...rest
}) => {
  const classes = `card-choice${darkBG ? " card-choice--dark" : ""}${
    bordered ? " card-choice--bordered" : ""
  }${className ? ` ${className}` : ""}`;
  return (
    <Link {...rest} className={classes} href={href} onClick={onClick}>
      <div className="content">
        <p className="heading">{headingText}</p>
        <span className="body">{children}</span>
      </div>
      <div className="select">
        <span>
          {actionText}
          <Icon name="navigate_next" />
        </span>
      </div>
    </Link>
  );
};
