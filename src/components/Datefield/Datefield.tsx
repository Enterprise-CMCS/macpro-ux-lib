import React, { useState } from "react";
import { Icon } from "../Icon/Icon";

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
      <div
        className="usa-date-picker grid-row"
        data-max-date={maxDate}
        data-min-date={minDate}
        data-default-value={defaultDate}
      >
        <input
          value={value}
          required={required}
          className="usa-input"
          id={id}
          name={fieldName}
          aria-labelledby={`${id}-label`}
          aria-describedby={hint ? `${id}-hint` : `${id}-label`}
          disabled={disabled}
          {...rest}
        />
        <div className="calendar-button padding-left-1 grid-row flex-align-center">
          <Icon name="calendar_today" color="black" onClick={openCalendar} />
        </div>

        <div
          className="usa-date-picker__calendar"
          role="dialog"
          aria-modal="true"
          // data-value="2022-08-22"
          hidden={!calendarOpen}
        >
          <div className="usa-date-picker__calendar__date-picker">
            <div className="usa-date-picker__calendar__row">
              <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                <button
                  type="button"
                  className="usa-date-picker__calendar__previous-year"
                  aria-label="Navigate back one year"
                ></button>
              </div>
              <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                <button
                  type="button"
                  className="usa-date-picker__calendar__previous-month"
                  aria-label="Navigate back one month"
                ></button>
              </div>
              <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__month-label">
                <button
                  type="button"
                  className="usa-date-picker__calendar__month-selection"
                  aria-label="August. Click to select month"
                >
                  August
                </button>
                <button
                  type="button"
                  className="usa-date-picker__calendar__year-selection"
                  aria-label="2022. Click to select year"
                >
                  2022
                </button>
              </div>
              <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                <button
                  type="button"
                  className="usa-date-picker__calendar__next-month"
                  aria-label="Navigate forward one month"
                ></button>
              </div>
              <div className="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items">
                <button
                  type="button"
                  className="usa-date-picker__calendar__next-year"
                  aria-label="Navigate forward one year"
                ></button>
              </div>
            </div>
            <table
              className="usa-date-picker__calendar__table"
              role="presentation"
            >
              <thead>
                <tr>
                  <th
                    className="usa-date-picker__calendar__day-of-week"
                    scope="presentation"
                    aria-label="Sunday"
                  >
                    S
                  </th>
                  <th
                    className="usa-date-picker__calendar__day-of-week"
                    scope="presentation"
                    aria-label="Monday"
                  >
                    M
                  </th>
                  <th
                    className="usa-date-picker__calendar__day-of-week"
                    scope="presentation"
                    aria-label="Tuesday"
                  >
                    T
                  </th>
                  <th
                    className="usa-date-picker__calendar__day-of-week"
                    scope="presentation"
                    aria-label="Wednesday"
                  >
                    W
                  </th>
                  <th
                    className="usa-date-picker__calendar__day-of-week"
                    scope="presentation"
                    aria-label="Thursday"
                  >
                    Th
                  </th>
                  <th
                    className="usa-date-picker__calendar__day-of-week"
                    scope="presentation"
                    aria-label="Friday"
                  >
                    Fr
                  </th>
                  <th
                    className="usa-date-picker__calendar__day-of-week"
                    scope="presentation"
                    aria-label="Saturday"
                  >
                    S
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--previous-month"
                      data-day="31"
                      data-month="7"
                      data-year="2022"
                      data-value="2022-07-31"
                      aria-label="31 July 2022 Sunday"
                      aria-selected="false"
                    >
                      31
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="1"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-01"
                      aria-label="1 August 2022 Monday"
                      aria-selected="false"
                    >
                      1
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="2"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-02"
                      aria-label="2 August 2022 Tuesday"
                      aria-selected="false"
                    >
                      2
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="3"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-03"
                      aria-label="3 August 2022 Wednesday"
                      aria-selected="false"
                    >
                      3
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="4"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-04"
                      aria-label="4 August 2022 Thursday"
                      aria-selected="false"
                    >
                      4
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="5"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-05"
                      aria-label="5 August 2022 Friday"
                      aria-selected="false"
                    >
                      5
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="6"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-06"
                      aria-label="6 August 2022 Saturday"
                      aria-selected="false"
                    >
                      6
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="7"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-07"
                      aria-label="7 August 2022 Sunday"
                      aria-selected="false"
                    >
                      7
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="8"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-08"
                      aria-label="8 August 2022 Monday"
                      aria-selected="false"
                    >
                      8
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="9"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-09"
                      aria-label="9 August 2022 Tuesday"
                      aria-selected="false"
                    >
                      9
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="10"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-10"
                      aria-label="10 August 2022 Wednesday"
                      aria-selected="false"
                    >
                      10
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="11"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-11"
                      aria-label="11 August 2022 Thursday"
                      aria-selected="false"
                    >
                      11
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="12"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-12"
                      aria-label="12 August 2022 Friday"
                      aria-selected="false"
                    >
                      12
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="13"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-13"
                      aria-label="13 August 2022 Saturday"
                      aria-selected="false"
                    >
                      13
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="14"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-14"
                      aria-label="14 August 2022 Sunday"
                      aria-selected="false"
                    >
                      14
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="15"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-15"
                      aria-label="15 August 2022 Monday"
                      aria-selected="false"
                    >
                      15
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="16"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-16"
                      aria-label="16 August 2022 Tuesday"
                      aria-selected="false"
                    >
                      16
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="17"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-17"
                      aria-label="17 August 2022 Wednesday"
                      aria-selected="false"
                    >
                      17
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="18"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-18"
                      aria-label="18 August 2022 Thursday"
                      aria-selected="false"
                    >
                      18
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="19"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-19"
                      aria-label="19 August 2022 Friday"
                      aria-selected="false"
                    >
                      19
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="20"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-20"
                      aria-label="20 August 2022 Saturday"
                      aria-selected="false"
                    >
                      20
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="21"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-21"
                      aria-label="21 August 2022 Sunday"
                      aria-selected="false"
                    >
                      21
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="22"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-22"
                      aria-label="22 August 2022 Monday"
                      aria-selected="false"
                    >
                      22
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="23"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-23"
                      aria-label="23 August 2022 Tuesday"
                      aria-selected="false"
                    >
                      23
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month usa-date-picker__calendar__date--today usa-date-picker__calendar__date--focused"
                      data-day="24"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-24"
                      aria-label="24 August 2022 Wednesday"
                      aria-selected="false"
                    >
                      24
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="25"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-25"
                      aria-label="25 August 2022 Thursday"
                      aria-selected="false"
                    >
                      25
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="26"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-26"
                      aria-label="26 August 2022 Friday"
                      aria-selected="false"
                    >
                      26
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="27"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-27"
                      aria-label="27 August 2022 Saturday"
                      aria-selected="false"
                    >
                      27
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="28"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-28"
                      aria-label="28 August 2022 Sunday"
                      aria-selected="false"
                    >
                      28
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="29"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-29"
                      aria-label="29 August 2022 Monday"
                      aria-selected="false"
                    >
                      29
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="30"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-30"
                      aria-label="30 August 2022 Tuesday"
                      aria-selected="false"
                    >
                      30
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--current-month"
                      data-day="31"
                      data-month="8"
                      data-year="2022"
                      data-value="2022-08-31"
                      aria-label="31 August 2022 Wednesday"
                      aria-selected="false"
                    >
                      31
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                      data-day="1"
                      data-month="9"
                      data-year="2022"
                      data-value="2022-09-01"
                      aria-label="1 September 2022 Thursday"
                      aria-selected="false"
                    >
                      1
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                      data-day="2"
                      data-month="9"
                      data-year="2022"
                      data-value="2022-09-02"
                      aria-label="2 September 2022 Friday"
                      aria-selected="false"
                    >
                      2
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="usa-date-picker__calendar__date usa-date-picker__calendar__date--next-month"
                      data-day="3"
                      data-month="9"
                      data-year="2022"
                      data-value="2022-09-03"
                      aria-label="3 September 2022 Saturday"
                      aria-selected="false"
                    >
                      3
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
