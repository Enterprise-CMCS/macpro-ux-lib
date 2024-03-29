import React from "react";
import { Icon } from "../Icon/Icon";

type IntrinsicElements = JSX.IntrinsicElements["section"];

export interface SiteAlertProps extends IntrinsicElements {
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
 * @param {string}                     [alertHeading]  Text content for the alert heading.
 * @param {string | React.ReactNode}   alertBody      Text content for the alert body.
 * @param {string}                     [emergency]    Determines the alert whether to render the information or emergency alert.
 * @param {boolean}                    slim           Renders a slimmer version of the banner.
 * @param {boolean}                    icon           Show/hide the alert icon associated with the variation of the alert.
 * @param {React.MouseEventHandler}    close          Close button that shows when a event handler is passed to the component.
 */
export const SiteAlert: React.FC<SiteAlertProps> = ({
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
      role={role}
      className={`grid-row usa-site-alert usa-site-alert--${
        emergency ? "emergency" : "info"
      }${slim ? " usa-site-alert--slim" : ""}${
        icon ? "" : " usa-site-alert--no-icon"
      }`}
      aria-label="Site alert"
      {...rest}
    >
      <div className="usa-alert grid-col">
        <div className="usa-alert__body">
          {alertHeading && (
            <h3 className="usa-alert__heading">{alertHeading}</h3>
          )}
          <div className="usa-alert__text">{alertBody}</div>
        </div>
      </div>
      {close && (
        <button
          aria-label="close alert"
          onClick={close}
          className="padding-x-2 pointer"
        >
          <Icon name="close" />
        </button>
      )}
    </section>
  );
};
