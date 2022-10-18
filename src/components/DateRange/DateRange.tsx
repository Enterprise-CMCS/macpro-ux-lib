import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  completeDateFilter,
  numbersAndSlashesFilter,
  checkValidMonthDays,
  splitDateIntoVariables,
} from "../../utils";

import dateRange from "../../../node_modules/@uswds/uswds/packages/usa-date-range-picker/src";
import { Datefield } from "components/Datefield/Datefield";
// import datePicker from "../../../node_modules/@uswds/uswds/packages/usa-date-picker/src";

type IntrinsicElements = JSX.IntrinsicElements["div"];
export interface Props extends IntrinsicElements {
  minDate?: string;
  maxDate?: string;
  startDate?: string;
  startInputId: string;
  startInputName: string;
  startLabel: string;
  endDate?: string;
  endInputId: string;
  endInputName: string;
  endLabel: string;
  disabled?: boolean;
  hint?: boolean;
  required?: boolean;
}

/**
 * DateRange Component
 * @param {string}  [minDate]              The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [maxDate]              The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [startDate]            The value given to the start date input. The date should be in the format mm/dd/yyyy.
 * @param {string}  startInputId           A unique identifier for the start date input.
 * @param {string}  startInputName         Name of the start date input field.
 * @param {string}  startLabel             The label of the start date input.
 * @param {string}  [endDate]              The value given to the end date input. The date should be in the format mm/dd/yyyy.
 * @param {string}  endInputId             A unique identifier for the end date input.
 * @param {string}  endInputName           Name of the end date input field.
 * @param {string}  endLabel               The label of the end date input.
 * @param {string}  [disabled]             Controls whether or not the date range pickers are disabled to the user.
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint for both inputs, in the format mm/dd/yyyy.
 * @param {boolean} [required]             The date picker component will be required in terms of native form validation.
 */

export const DateRange: React.FC<Props> = ({
  minDate,
  maxDate,
  hint,
  startDate,
  endDate,
  disabled,
  startLabel,
  endLabel,
  startInputId,
  startInputName,
  endInputId,
  endInputName,
  required,
  ...rest
}) => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const datePickerElement = datePickerRef.current;

    setTimeout(() => {
      dateRange.on(datePickerElement);
    });
    // }

    return () => {
      setTimeout(() => {
        dateRange.off(datePickerElement);
      });
    };
  }, []);

  const formatPropDates = (date: string | undefined) => {
    let [month, day, year] = splitDateIntoVariables(date || "");
    if (
      date &&
      completeDateFilter.test(date) &&
      checkValidMonthDays(parseInt(month), parseInt(year), parseInt(day))
    ) {
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  };
  return (
    <div
      className="usa-date-range-picker"
      data-min-date={formatPropDates(minDate)}
      data-max-date={formatPropDates(maxDate)}
      {...rest}
    >
      <Datefield id={startInputId} name={startInputName} label={startLabel} />
      <Datefield id={endInputId} name={endInputName} label={endLabel} />
      {/* <div className="usa-form-group">
        <label
          className="usa-label"
          id={`${startInputId}-label`}
          htmlFor={startInputId}
        >
          {startLabel}
        </label>
        {hint && (
          <div className="usa-hint" id={`${startInputId}-hint`}>
            mm/dd/yyyy
          </div>
        )}
        <div className="usa-date-picker">
          <input
            className="usa-input"
            id={startInputId}
            name={startInputName}
            aria-labelledby={`${startInputId}-label`}
            aria-describedby={`${startInputId}-hint`}
            required={required}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="usa-form-group">
        <label
          className="usa-label"
          id={`${endInputId}-label`}
          htmlFor={endInputId}
        >
          {endLabel}
        </label>
        {hint && (
          <div className="usa-hint" id={`${endInputId}-hint`}>
            mm/dd/yyyy
          </div>
        )}
        <div className="usa-date-picker">
          <input
            className="usa-input "
            id={endInputId}
            name={endInputName}
            aria-labelledby={`${endInputId}-label`}
            aria-describedby={`${endInputId}-hint`}
            required={required}
            disabled={disabled}
          />
        </div>
      </div> */}
    </div>
  );
};
