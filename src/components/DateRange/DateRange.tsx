import React, { useState } from "react";
import { Datefield } from "components/Datefield/Datefield";

type IntrinsicElements = JSX.IntrinsicElements["div"];
export interface Props extends IntrinsicElements {
  // id: string;
  // name: string;
  startLabel: string;
  endLabel: string;
  hint?: boolean;
  disabled?: boolean;
  minDate?: string;
  maxDate?: string;
  // value?: string;
}

/**
 * DateRange Component
 * @param {string}  id                     A unique identifier for the input.
 * @param {string}  name                   Name of the input field.
 * @param {string}  label                  Field label.
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint, in the format mm/dd/yyyy.
 * @param {string}  [disabled]             Controls whether or not the date picker is disabled to the user.
 * @param {string}  [minDate]              The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [maxDate]              The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [value]                Value of the input element.
 */

export const DateRange: React.FC<Props> = ({
  hint = true,
  minDate,
  maxDate,
  disabled,
  startLabel,
  endLabel,
  ...rest
}) => {
  const [currentMinDate, setMinDate] = useState(minDate);
  const [currentMaxDate, setMaxDate] = useState(maxDate);

  return (
    <div {...rest}>
      <Datefield
        disabled={disabled}
        name="date-range-1"
        id=""
        hint={hint}
        maxDate={currentMaxDate}
        label={startLabel}
        value={currentMinDate}
      />
      <Datefield
        value={currentMaxDate}
        disabled={disabled}
        name="date-range-1"
        id=""
        label={endLabel}
        hint={hint}
        minDate={currentMinDate}
      />
    </div>
  );
};
