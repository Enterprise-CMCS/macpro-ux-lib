import React, { useLayoutEffect, useRef, useState } from "react";
import { formatPropDates } from "../../utils";
import { Datefield } from "components/Datefield/Datefield";
import dateRange from "../../../node_modules/@uswds/uswds/packages/usa-date-range-picker/src";

type IntrinsicElements = JSX.IntrinsicElements["div"];
export interface DateRangeProps extends IntrinsicElements {
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
 * @param {boolean} [disabled]             Controls whether or not the date range pickers are disabled to the user.
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
  const dateRangeRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const datePickerElement = dateRangeRef.current;

    if (typeof dateRange.on === "function") {
      dateRange.on(datePickerElement);
    }
    return () => {
      if (typeof dateRange.off === "function") {
        dateRange.off(datePickerElement);
      }
    };
  }, []);

  return (
    <div
      ref={dateRangeRef}
      className="usa-date-range-picker"
      data-min-date={formatPropDates(minDate)}
      data-max-date={formatPropDates(maxDate)}
      {...rest}
    >
      <Datefield
        hint={hint}
        id={startInputId}
        name={startInputName}
        label={startLabel}
        disabled={disabled}
        required={required}
        value={startDate}
      />
      <Datefield
        hint={hint}
        id={endInputId}
        name={endInputName}
        label={endLabel}
        disabled={disabled}
        required={required}
        value={endDate}
      />
    </div>
  );
};
