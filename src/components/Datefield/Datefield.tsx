import React, { useState } from "react";
import { Icon } from "../Icon/Icon";
import Calendar from "react-calendar";

type IntrinsicElements = JSX.IntrinsicElements["input"];
export interface Props extends IntrinsicElements {
  id: string;
  name: string;
  label: string;
  hint?: boolean;
  disabled?: boolean;
  defaultDate?: string;
  minDate?: string;
  maxDate?: string;
  value?: string;
}

/**
 * Datefield Component
 * @param {string}  id                     A unique identifier for the input.
 * @param {string}  name                   Name of the input field.
 * @param {string}  label                  Field label.
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint, in the format mm/dd/yyyy.
 * @param {string}  [disabled]             Controls whether or not the date picker is disabled to the user.
 * @param {string}  [defaultDate]          The date picker input will set this value if it is a valid date. The date should be in the format mm/dd/yyyy
 * @param {string}  [minDate]              The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [maxDate]              The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [value]                Value of the input element.
 */

export const Datefield: React.FC<Props> = ({
  id,
  name,
  label,
  value,
  minDate,
  maxDate,
  defaultDate,
  hint = false,
  disabled = false,
  ...rest
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentDate, setDate] = useState(value || defaultDate || "");

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const setDateValue = (dateObj: Date) => {
    let [month, day, year] = dateObj.toLocaleDateString()?.split("/");

    day = day.padStart(2, "0");
    month = month.padStart(2, "0");

    setDate(`${month}/${day}/${year}`);
    toggleCalendar();
  };

  const formatStringDateToDate = (stringDate: string): Date => {
    return new Date(stringDate);
  };

  return (
    <div className="usa-form-group">
      <label className="usa-label" id={`${id}-label`} htmlFor={id} role="label">
        {label}
      </label>
      {hint && (
        <div className="usa-hint" id={`${id}-hint`}>
          mm/dd/yyyy
        </div>
      )}

      <div className="usa-date-picker">
        <div className="grid-row">
          <input
            value={currentDate}
            onChange={(e) => setDate(e.target.value)}
            className="usa-input margin-0"
            id={id}
            name={name}
            aria-labelledby={`${id}-label`}
            aria-describedby={hint ? `${id}-hint` : `${id}-label`}
            disabled={disabled}
            {...rest}
          />
          <div className={`flex-column${calendarOpen ? " grey-lightest" : ""}`}>
            <button
              disabled={disabled}
              onClick={toggleCalendar}
              className="calendar-button padding-x-1 padding-top-1"
            >
              <Icon
                name="calendar_today"
                color="black"
                data-testid="calendar-button"
                role="button"
              />
            </button>
          </div>
        </div>

        {calendarOpen && (
          <div className="grid-row" data-testid="calendar">
            <Calendar
              className="grid-col-3"
              onChange={setDateValue}
              value={
                currentDate ? formatStringDateToDate(currentDate) : undefined
              }
              minDate={minDate ? formatStringDateToDate(minDate) : undefined}
              maxDate={maxDate ? formatStringDateToDate(maxDate) : undefined}
            />
          </div>
        )}
      </div>
    </div>
  );
};
