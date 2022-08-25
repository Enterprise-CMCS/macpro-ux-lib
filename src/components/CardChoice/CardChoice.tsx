import { Icon } from "components/Icon/Icon";
import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["a"];

interface Props extends IntrinsicElements {
  actionText?: string;
  bodyText?: string;
  bordered?: boolean;
  className?: string;
  darkBG?: boolean;
  headingText?: string;
}

/**
 * CardChoice Component
 *
 * CardChoice is wrapped by an anchor tag. All unspecified props will be provided to the anchor.
 * @param {string}             actionText     Optional text prompt to be displayed left of the navigation arrow.
 * @param {boolean}            bordered       Renders a border around the CardChoice. Applying borderd on CardChoice will override the CardChoiceGroup.
 * @param {string}             bodyText       Text to be rendered in the body.
 * @param {React.ReactNode}    children       Children provided will be rendered below the bodyText.
 * @param {string}             className      Additional classes that can be applied to the root element.
 * @param {boolean}            darkBG         Renders the CardChoice with a darker background. Applying darkBG on CardChoice will override the CardChoiceGroup. CardChoiceGroup has an option for alternatingBG.
 * @param {string}             headingText    Bolded heading text displayed at the top of the CardChoice.
 * @param {string}             href           href provided to the anchor.
 * @param                      onClick        onClick provided to the anchor.
 */
export const CardChoice: React.FC<PropsWithChildren<Props>> = ({
  actionText,
  bodyText,
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
    <a {...rest} className={classes} href={href} onClick={onClick}>
      <div className="content">
        <p className="heading">{headingText}</p>
        <span className="body">
          <p>{bodyText}</p>
          {children}
        </span>
      </div>
      <div className="select">
        <span>
          {actionText}
          <Icon name="navigate_next" />
        </span>
      </div>
    </a>
  );
};
