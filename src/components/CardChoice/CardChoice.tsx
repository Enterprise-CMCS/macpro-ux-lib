import React, { PropsWithChildren } from "react";
import { Icon } from "components/Icon/Icon";

type IntrinsicElements = JSX.IntrinsicElements["a"];

export interface CardChoiceProps extends IntrinsicElements {
  actionText?: string;
  ariaLabel?: string;
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
 * @param {string}             [actionText]     Optional text prompt to be displayed left of the navigation arrow.
 * @param {string}             [ariaLabel]      Sets the aria-label for the CardChoice wrapping anchor tag. If none is provided, defaults to `Navigation Card for ${headingText}`. If no headerText is provided defaults to "Navigation Card".
 * @param {boolean}            [bordered]       Renders a border around the CardChoice. Applying borderd on CardChoice will override the CardChoiceGroup.
 * @param {string}             [bodyText]       Text to be rendered in the body.
 * @param {React.ReactNode}    [children]       Children provided will be rendered below the bodyText.
 * @param {string}             [className]      Additional classes that can be applied to the root element.
 * @param {boolean}            [darkBG]         Renders the CardChoice with a darker background. Applying darkBG on CardChoice will override the CardChoiceGroup. CardChoiceGroup has an option for alternatingBG.
 * @param {string}             [headingText]    Bolded heading text displayed at the top of the CardChoice.
 * @param {string}             [href]           href provided to the anchor.
 * @param {callback}           [onClick]        onClick provided to the anchor.
 */
export const CardChoice: React.FC<PropsWithChildren<Props>> = ({
  actionText,
  ariaLabel,
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
  ariaLabel =
    ariaLabel ??
    (headingText ? `Navigation Card for: ${headingText}` : "Navigation Card");

  return (
    <a
      {...rest}
      aria-label={ariaLabel}
      className={classes}
      href={href}
      onClick={onClick}
    >
      <div className="content">
        <h6 className="heading" role="heading" aria-level={6}>
          {headingText}
        </h6>
        <span className="body">
          <p>{bodyText}</p>
          {children}
        </span>
      </div>
      <div className="select">
        <span aria-hidden={true}>
          {actionText}
          <Icon name="navigate_next" />
        </span>
      </div>
    </a>
  );
};
