import React, { useState } from "react";
import { Icon } from "../Icon/Icon";
import Calendar from "react-calendar";

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
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint, in the format mm/dd/yyyy.
 * @param {boolean} [required]             Adds semantic required.
 * @param {string}  [disabled]             Controls whether or not the date picker is disabled to the user.
 * @param {string}  [defaultDate]          The date picker input will set this value if it is a valid date. The date should be in the format mm/dd/yyyy
 * @param {string}  [minDate]              The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [maxDate]              The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.
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
  const [currentDate, setDate] = useState(value || defaultDate || "");

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const setDateValue = (dateObj: Date) => {
    let [month, day, year] = dateObj.toLocaleDateString()?.split("/");

    // Days and months before the 10th number returns a single numeric character "9" instead of "09"
    if (day.length < 2) {
      day = "0" + day;
    }

    if (month.length < 2) {
      month = "0" + month;
    }

    setDate(`${month}/${day}/${year}`);
    toggleCalendar();
  };

  const formatStringDateToDate = (stringDate: string): Date => {
    const [month, day, year] = stringDate.split("/");

    // The Date object Month argument is from a range of 0-11;
    const parsedMonth = parseInt(month) ? parseInt(month) - 1 : parseInt(month);

    const splitDateValue = new Date(parseInt(year), parsedMonth, parseInt(day));
    return splitDateValue;
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
            required={required}
            className="usa-input margin-0"
            id={id}
            name={fieldName}
            aria-labelledby={`${id}-label`}
            aria-describedby={hint ? `${id}-hint` : `${id}-label`}
            disabled={disabled}
            {...rest}
          />
          <div className={`flex-column${calendarOpen ? " grey-lightest" : ""}`}>
            <div className="calendar-button padding-x-1 margin-top-1">
              <Icon
                name="calendar_today"
                color="black"
                onClick={toggleCalendar}
                data-testid="calendar-button"
                role="button"
              />
            </div>
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
