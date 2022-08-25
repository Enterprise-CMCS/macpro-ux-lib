import React, { useState } from "react";
import { Icon } from "../Icon/Icon";

import { datePicker } from "../../../node_modules/@uswds/uswds/packages/usa-date-picker/src/index.js";

type IntrinsicElements = JSX.IntrinsicElements["input"];
export interface Props extends IntrinsicElements {
  id: string;
  fieldName: string;
  label: string;
  hint?: boolean;
  required?: boolean;
  disabled?: boolean;
  defaultDate?: string;
  minDate?: string;
  maxDate?: string;
  value?: string;
}

/**
 * Datefield Component
 * @param {string}  id                     A unique identifier for the input.
 * @param {string}  fieldName              Name of the input field.
 * @param {string}  label                  Field label.
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint, in the format YYYY-MM-DD.
 * @param {boolean} [required]             Adds semantic required.
 * @param {string}  [disabled]             Controls whether or not the date picker is disabled to the user.
 * @param {string}  [defaultDate]          The date picker input will set this value if it is a valid date. The date should be in the format YYYY-MM-DD
 * @param {string}  [minDate]              The date picker will not allow a date selection before this date. The date should be in the format YYYY-MM-DD
 * @param {string}  [maxDate]              The date picker will not allow a date selection after this date. The date should be in the format YYYY-MM-DD.
 * @param {string}  [value]                Value of the input element.
 */

export const Datefield: React.FC<Props> = ({
  id,
  fieldName,
  label,
  value,
  minDate,
  maxDate,
  defaultDate,
  required = false,
  hint = false,
  disabled = false,
  ...rest
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentDate, setDate] = useState(value || defaultDate);

  const openCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <div className="usa-form-group">
      <label className="usa-label" id={`${id}-label`} htmlFor={id}>
        {label}
      </label>
      {hint && (
        <div className="usa-hint" id={`${id}-hint`}>
          mm/dd/yyyy
        </div>
      )}
      <div className="usa-date-picker grid-row">
        <input
          placeholder={"test"}
          value={currentDate}
          onChange={(e) => setDate(e.target.value)}
          required={required}
          className="usa-input"
          id={id}
          name={fieldName}
          aria-labelledby={`${id}-label`}
          aria-describedby={hint ? `${id}-hint` : `${id}-label`}
          disabled={disabled}
          type="date"
          max={maxDate}
          min={minDate}
          {...rest}
        />
        <div className="calendar-button padding-left-1 grid-row flex-align-center">
          <Icon name="calendar_today" color="black" onClick={openCalendar} />
        </div>
      </div>
    </div>
  );
};
