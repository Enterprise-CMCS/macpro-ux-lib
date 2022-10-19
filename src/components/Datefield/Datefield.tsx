import React, { useLayoutEffect, useRef, useState } from "react";
import {
  completeDateFilter,
  numbersAndSlashesFilter,
  checkValidMonthDays,
  splitDateIntoVariables,
  formatPropDates,
} from "../../utils";

import datePicker from "../../../node_modules/@uswds/uswds/packages/usa-date-picker/src";

type IntrinsicElements = JSX.IntrinsicElements["input"];
export interface Props extends IntrinsicElements {
  id: string;
  name: string;
  label: string;
  hint?: boolean;
  disabled?: boolean;
  minDate?: string;
  maxDate?: string;
  value?: string;
  required?: boolean;
}

/**
 * Datefield Component
 * @param {string}  id                     A unique identifier for the input.
 * @param {string}  name                   Name of the input field.
 * @param {string}  label                  Field label.
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint, in the format mm/dd/yyyy.
 * @param {string}  [disabled]             Controls whether or not the date picker is disabled to the user.
 * @param {string}  [minDate]              The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [maxDate]              The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [value]                Value of the input element.
 * @param {string}  [required]             The date picker component will be required in terms of native form validation.
 */

export const Datefield: React.FC<Props> = ({
  id,
  name,
  label,
  value,
  minDate,
  maxDate,
  hint = true,
  disabled = false,
  required = false,
  ...rest
}) => {
  value = completeDateFilter.test(value || "") ? value : "";
  const [dateError, setDateError] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const datePickerElement = datePickerRef.current;
    if (typeof datePicker.on === "function") {
      datePicker.on(datePickerElement);

      const dateFieldinput = Array.from(
        document.getElementsByClassName("usa-date-picker__external-input")
      ).find((dateField) => dateField.id === id);

      if (dateFieldinput) {
        dateFieldinput.addEventListener("keydown", (e: any) => filterInput(e));
        dateFieldinput.addEventListener("blur", (e: any) =>
          checkValidDate(e.target.value)
        );
      }
    }

    return () => {
      if (typeof datePicker.off === "function") {
        datePicker.off(datePickerElement);
      }
    };
  }, [value]);

  const filterInput = (typedValue: KeyboardEvent) => {
    if (
      (typedValue && numbersAndSlashesFilter.test(typedValue.key)) ||
      typedValue.key === "Backspace" ||
      typedValue.key === "Tab" ||
      typedValue.metaKey
    ) {
      setDateError(false);
    } else {
      typedValue.preventDefault();
    }
  };

  const checkValidDate = (date: string) => {
    let [month, day, year] = splitDateIntoVariables(date);

    if (
      (completeDateFilter.test(date) &&
        checkValidMonthDays(parseInt(month), parseInt(year), parseInt(day))) ||
      date === ""
    ) {
      setDateError(false);
    } else {
      setDateError(true);
    }
  };

  return (
    <div className="usa-form-group datefield" ref={datePickerRef}>
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

      <div
        className="usa-date-picker"
        data-min-date={minDate !== undefined && formatPropDates(minDate)}
        data-max-date={maxDate !== undefined && formatPropDates(maxDate)}
        data-default-value={formatPropDates(value)}
      >
        <input
          className="usa-input"
          id={id}
          name={name}
          aria-labelledby={`${id}-label`}
          aria-describedby={hint ? `${id}-hint` : `${id}-label`}
          disabled={disabled}
          {...rest}
        />
      </div>
    </div>
  );
};
