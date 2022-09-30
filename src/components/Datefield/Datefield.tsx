import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Icon } from "../Icon/Icon";
import {
  completeDateFilter,
  numbersAndSlashesFilter,
  checkValidMonthDays,
  splitDateIntoVariables,
} from "../../utils";

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
  rangeCalendarOpen?: boolean;
  dateRangeChange?: Dispatch<SetStateAction<string | undefined>>;
  toggleRangeCalendars?: Function;
  selectedRangeClassName?: (date: Date) => string;
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
  hint = true,
  disabled = false,
  dateRangeChange,
  rangeCalendarOpen,
  toggleRangeCalendars,
  selectedRangeClassName,
  ...rest
}) => {
  value = completeDateFilter.test(value || "") ? value : "";
  defaultDate = completeDateFilter.test(defaultDate || "") ? defaultDate : "";
  const [currentDate, setDate] = useState(value || defaultDate);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    if (
      (value && checkValidDate(value)) ||
      (defaultDate && checkValidDate(defaultDate))
    ) {
      setDate(value || defaultDate);
    }
  }, [value, defaultDate]);

  const toggleCalendar = () => {
    if (toggleRangeCalendars !== undefined) {
      toggleRangeCalendars();
      focusDateOnOpen(!rangeCalendarOpen!);
    } else {
      setCalendarOpen(!calendarOpen);
      focusDateOnOpen(!calendarOpen);
    }
  };

  const focusDateOnOpen = (openCalendar: boolean) => {
    if (openCalendar) {
      if (currentDate) {
        setTimeout(() => {
          const currentSelectedDate = document.getElementsByClassName(
            "react-calendar__tile--active"
          )[0] as HTMLElement;
          if (currentSelectedDate) currentSelectedDate.focus();
        });
      } else {
        setTimeout(() => {
          const todaysDate = document.getElementsByClassName(
            "react-calendar__tile--now"
          )[0] as HTMLElement;
          if (todaysDate) todaysDate.focus();
        });
      }
    }
  };

  const filterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numbersAndSlashesFilter.test(e.target.value) || e.target.value === "") {
      setDate(e.target.value);
      dateRangeChange && dateRangeChange(e.target.value);
    }
  };

  const checkValidDate = (date: string): boolean => {
    let [month, day, year] = splitDateIntoVariables(date);

    if (
      (completeDateFilter.test(date) &&
        checkValidMonthDays(parseInt(month), parseInt(year), parseInt(day))) ||
      date === ""
    ) {
      setDateError(false);
      return true;
    } else {
      setDateError(true);
      return false;
    }
  };

  const setDateValue = (dateObj: Date) => {
    let [month, day, year] = splitDateIntoVariables(
      dateObj.toLocaleDateString()
    );

    day = day.padStart(2, "0");
    month = month.padStart(2, "0");

    setDate(`${month}/${day}/${year}`);
    dateRangeChange && dateRangeChange(`${month}/${day}/${year}`);
    toggleCalendar();
    setDateError(false);
  };

  const formatStringDateToDate = (
    stringDate: string | undefined
  ): Date | undefined => {
    if (stringDate) {
      let [month, day, year] = splitDateIntoVariables(stringDate);

      return completeDateFilter.test(stringDate) &&
        checkValidMonthDays(parseInt(month), parseInt(year), parseInt(day))
        ? new Date(stringDate)
        : undefined;
    }
  };

  return (
    <div className="usa-form-group datefield">
      <label className="usa-label" id={`${id}-label`} htmlFor={id}>
        {label}
      </label>
      {(hint || dateError) && (
        <div
          className={`usa-hint${dateError ? " input-error" : ""}`}
          id={`${id}-hint`}
        >
          {`${
            dateError ? "Inputted date must be a valid date in " : ""
          }mm/dd/yyyy`}
        </div>
      )}

      <div className="usa-date-picker">
        <div className="grid-row">
          <input
            value={currentDate}
            onChange={(e) => filterInput(e)}
            className="usa-input margin-0"
            id={id}
            name={name}
            aria-labelledby={`${id}-label`}
            aria-describedby={hint ? `${id}-hint` : `${id}-label`}
            disabled={disabled}
            onBlur={(e) => checkValidDate(e.target.value)}
            {...rest}
          />
          <div className={`flex-column${calendarOpen ? " grey-lightest" : ""}`}>
            <button
              aria-label="calendar button"
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
        {(rangeCalendarOpen || calendarOpen) && (
          <div className="grid-row" data-testid="calendar">
            <Calendar
              tileClassName={(dateProps) => {
                if (selectedRangeClassName) {
                  return selectedRangeClassName(dateProps.date);
                }
                return "";
              }}
              calendarType="US"
              className="grid-col-3"
              onChange={setDateValue}
              value={formatStringDateToDate(currentDate)}
              defaultActiveStartDate={
                formatStringDateToDate(currentDate) ||
                formatStringDateToDate(minDate) ||
                formatStringDateToDate(maxDate)
              }
              minDate={formatStringDateToDate(minDate)}
              maxDate={formatStringDateToDate(maxDate)}
              formatShortWeekday={(_, value) =>
                ["S", "M", "T", "W", "T", "F", "S"][value.getDay()]
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
