import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

interface Props extends IntrinsicElements {
  alertHeading?: string;
  alertBody: string | React.ReactNode;
  emergency?: boolean;
  slim?: boolean;
  icon?: boolean;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * **SiteAlert Component**
 *
 * @param {string}                     alertHeading   Text content for the alert heading.
 * @param {string | React.ReactNode}   alertBody      Text content for the alert body.
 * @param {string}                     emergency      Determines the alert whether to render the information or emergency alert.
 * @param {boolean}                    slim           Renders a slimmer version of the banner.
 * @param {boolean}                    icon           Show/hide the alert icon associated with the variation of the alert.
 * @param {React.MouseEventHandler}    close          Close button that shows when a event handler is passed to the component.
 */
export const SiteAlert: React.FC<Props> = ({
  alertHeading,
  alertBody,
  emergency = false,
  slim = false,
  icon = true,
  close,
  role = "alert",
  ...rest
}) => {
  return (
    <section
      className={`usa-site-alert usa-site-alert--${
        emergency ? "emergency" : "info"
      }${slim ? " usa-site-alert--slim" : ""}${
        icon ? "" : " usa-site-alert--no-icon"
      }`}
      aria-label="Site alert,"
      {...rest}
    >
      <div className="usa-alert">
        <div className="usa-alert__body">
          {alertHeading && (
            <h3 className="usa-alert__heading">{alertHeading}</h3>
          )}
          <div className="usa-alert__text">{alertBody}</div>
        </div>
      </div>
    </section>
  );
};
