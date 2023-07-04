import { Icon } from "../Icon/Icon";
import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["div"];

export interface AlertProps extends IntrinsicElements {
  alertHeading: string;
  alertBody: string | React.ReactNode;
  variation: "info" | "warning" | "error" | "success";
  slim?: boolean;
  icon?: boolean;
  close?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * **Alert Component**
 *
 * @param {string}                     alertHeading   Text content for the alert heading.
 * @param {string | React.ReactNode}   alertBody      Text content for the alert body.
 * @param {string}                     variation      Determines the alert variation to render.
 * @param {boolean}                    slim           Renders a slimmer version of the banner.
 * @param {boolean}                    icon           Show/hide the alert icon associated with the variation of the alert.
 * @param {React.MouseEventHandler}    close          Close button that shows when a event handler is passed to the component.
 */
export const Alert: React.FC<Props> = ({
  alertHeading,
  alertBody,
  variation,
  slim = false,
  icon = true,
  close,
  role = "alert",
  ...rest
}) => {
  return (
    <div
      role={role}
      className={`grid-row usa-alert usa-alert--${variation}${
        slim ? " usa-alert--slim" : ""
      }${icon ? "" : " usa-alert--no-icon"}`}
      {...rest}
    >
      <div className="grid-col usa-alert__body">
        <h4 className="usa-alert__heading">{alertHeading}</h4>
        <div className="usa-alert__text">{alertBody}</div>
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
    </div>
  );
};
