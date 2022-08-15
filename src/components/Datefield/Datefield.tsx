import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["input"];

export interface Props extends IntrinsicElements {
  id: string;
  label: string;
}

/**
 * Datefield Component
 * @param {string}      [target]              Specifies a name or a keyword that indicates where to display the response that is received after clicking the button.
 */

export const Datefield: React.FC<Props> = ({ id, label, ...rest }) => {
  return (
    <div className="usa-form-group">
      <label
        className="usa-label"
        id="appointment-date-label"
        htmlFor="appointment-date"
      >
        Appointment date
      </label>
      <div className="usa-hint" id="appointment-date-hint">
        mm/dd/yyyy
      </div>
      <div className="usa-date-picker">
        <input
          className="usa-input"
          id="appointment-date"
          name="appointment-date"
          aria-labelledby="appointment-date-label"
          aria-describedby="appointment-date-hint"
          {...rest}
        />
      </div>
    </div>
  );
};
