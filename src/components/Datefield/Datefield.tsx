import React, { forwardRef, useEffect, useRef } from "react";
import { completeDateFilter, formatPropDates } from "../../utils";
import { datePicker } from "@uswds/uswds/js";

type IntrinsicElements = JSX.IntrinsicElements["input"];
export interface DatefieldProps extends IntrinsicElements {
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
 * @param {boolean} [disabled]             Controls whether or not the date picker is disabled to the user.
 * @param {string}  [minDate]              The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [maxDate]              The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [value]                Value of the input element.
 * @param {boolean} [required]             The date picker component will be required in terms of native form validation.
 */

export const Datefield = forwardRef<HTMLInputElement, DatefieldProps>(
  function Datefield({ value, ...props }, ref) {
    const {
      id,
      minDate,
      maxDate,
      name,
      label,
      onChange,
      hint = true,
      disabled = false,
      required = false,
      ...rest
    } = props;

    value = completeDateFilter.test(value || "") ? value : "";
    // const [dateError, setDateError] = useState(false);
    const datePickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const datePickerElement = datePickerRef.current;

      if (typeof datePicker.on === "function") {
        datePicker.on(datePickerElement as HTMLElement);
      }

      // const dateFieldinput = Array.from(
      //   document.getElementsByClassName("usa-date-picker__external-input")
      // ).find((dateField) => dateField.id === id);

      // if (dateFieldinput) {
      //   dateFieldinput.addEventListener("keydown", (e: any) =>
      //     filterInput(e)
      //   );
      //   dateFieldinput.addEventListener("blur", (e: any) =>
      //     checkValidDate(e.target.value)
      //   );
      // }
      // }

      return () => {
        if (typeof datePicker.off === "function") {
          datePicker.off(datePickerElement as HTMLElement);
        }
      };
    }, [value]);

    // const filterInput = (typedValue: KeyboardEvent) => {
    //   if (
    //     (typedValue && numbersAndSlashesFilter.test(typedValue.key)) ||
    //     typedValue.key === "Backspace" ||
    //     typedValue.key === "Tab" ||
    //     typedValue.metaKey
    //   ) {
    //     setDateError(false);
    //   } else {
    //     typedValue.preventDefault();
    //   }
    // };

    // const checkValidDate = (date: string) => {
    //   let [month, day, year] = splitDateIntoVariables(date);

    //   if (
    //     (completeDateFilter.test(date) &&
    //       checkValidMonthDays(
    //         parseInt(month),
    //         parseInt(year),
    //         parseInt(day)
    //       )) ||
    //     date === ""
    //   ) {
    //     setDateError(false);
    //   } else {
    //     setDateError(true);
    //   }
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("in handleChange"); // This never gets logged. Does the USWDS JS strip the onChange event?

      // Execute the parent form's onChange event if it exists:
      if (onChange) {
        onChange(e);
      }

      // Temporarily disabled to remove complexity while debugging:

      // setCharCount(e.target.value.length.toString());
    };

    console.log(document.getElementById("datefield"));

    return (
      <div className="usa-form-group datefield" ref={datePickerRef}>
        <label className="usa-label" id={`${id}-label`} htmlFor={id}>
          {label}
        </label>
        {/* {(hint || dateError) && (
          <div
            className={`usa-hint${dateError ? " input-error" : ""}`}
            id={`${id}-hint`}
          >
            {`${
              dateError ? "Inputted date must be a valid date in " : ""
            }mm/dd/yyyy`}
          </div>
        )} */}

        <div
          className="usa-date-picker"
          data-min-date={minDate !== undefined && formatPropDates(minDate)}
          data-max-date={maxDate !== undefined && formatPropDates(maxDate)}
          data-default-value={formatPropDates(value)}
        >
          <input
            className="usa-input macpro-test"
            id={id}
            name={name}
            aria-labelledby={`${id}-label`}
            aria-describedby={hint ? `${id}-hint` : `${id}-label`}
            disabled={disabled}
            onChange={onChange}
            ref={ref}
            value={value}
            {...rest}
          />
        </div>
      </div>
    );
  }
);
