import React, { useEffect, useState } from "react";
import { Datefield } from "components/Datefield/Datefield";

type IntrinsicElements = JSX.IntrinsicElements["div"];
export interface Props extends IntrinsicElements {
  defaultStartDate?: string;
  startDate?: string;
  startInputId: string;
  startInputName: string;
  startLabel: string;
  defaultEndDate?: string;
  endDate?: string;
  endInputId: string;
  endInputName: string;
  endLabel: string;
  disabled?: boolean;
  hint?: boolean;
}

/**
 * DateRange Component
 * @param {string}  [defaultStartDate]     The start date picker input will set this value by default if it is a valid date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [startDate]            The value given to the start date input. The date should be in the format mm/dd/yyyy.
 * @param {string}  startInputId           A unique identifier for the start date input.
 * @param {string}  startInputName         Name of the start date input field.
 * @param {string}  startLabel             The label of the start date input.
 * @param {string}  [defaultEndDate]       The end date picker input will set this value by default if it is a valid date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [endDate]              The value given to the end date input. The date should be in the format mm/dd/yyyy.
 * @param {string}  endInputId             A unique identifier for the end date input.
 * @param {string}  endInputName           Name of the end date input field.
 * @param {string}  endLabel               The label of the end date input.
 * @param {string}  [disabled]             Controls whether or not the date range pickers are disabled to the user.
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint for both inputs, in the format mm/dd/yyyy.
 */

export const DateRange: React.FC<Props> = ({
  hint,
  startDate,
  endDate,
  defaultStartDate,
  defaultEndDate,
  disabled,
  startLabel,
  endLabel,
  startInputId,
  startInputName,
  endInputId,
  endInputName,
  ...rest
}) => {
  const [currentStartDate, setStartDate] = useState(
    startDate || defaultStartDate
  );
  const [currentEndDate, setEndDate] = useState(endDate || defaultEndDate);
  const [startCalendarOpen, setStartCalendarOpen] = useState(false);
  const [endCalendarOpen, setEndCalendarOpen] = useState(false);

  useEffect(() => {
    setStartDate(startDate || defaultStartDate);
    setEndDate(endDate || defaultEndDate);
  }, [startDate, endDate, defaultStartDate, defaultEndDate]);

  const toggleRangeCalendars = (startCalendar: boolean) => {
    if (startCalendar) {
      setStartCalendarOpen(!startCalendarOpen);
      if (endCalendarOpen) setEndCalendarOpen(false);
    } else {
      setEndCalendarOpen(!endCalendarOpen);
      if (startCalendarOpen) setStartCalendarOpen(false);
    }
  };

  const applyRangeClassName = (dateToCheck: Date): string => {
    if (currentStartDate && currentEndDate) {
      let dateStart = new Date(currentStartDate);
      let dateEnd = new Date(currentEndDate);

      if (dateToCheck > dateStart && dateToCheck < dateEnd) {
        return "range-selected";
      } else if (dateToCheck >= dateStart && dateToCheck <= dateEnd) {
        return "range-start-end";
      }
    }

    return "";
  };

  return (
    <div {...rest}>
      <Datefield
        disabled={disabled}
        name={startInputName}
        id={startInputId}
        hint={hint}
        defaultDate={defaultStartDate}
        maxDate={currentEndDate}
        label={startLabel}
        value={currentStartDate}
        dateRangeChange={setStartDate}
        toggleRangeCalendars={() => toggleRangeCalendars(true)}
        rangeCalendarOpen={startCalendarOpen}
        selectedRangeClassName={applyRangeClassName}
      />
      <Datefield
        value={currentEndDate}
        disabled={disabled}
        name={endInputName}
        id={endInputId}
        label={endLabel}
        hint={hint}
        defaultDate={defaultEndDate}
        minDate={currentStartDate}
        dateRangeChange={setEndDate}
        rangeCalendarOpen={endCalendarOpen}
        selectedRangeClassName={applyRangeClassName}
        toggleRangeCalendars={() => toggleRangeCalendars(false)}
      />
    </div>
  );
};
