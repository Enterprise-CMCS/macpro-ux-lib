import React, { useState } from "react";
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
 * @param {string}  [startDate]            The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [startInputId]            The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [startInputName]            The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [startLabel]            The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [endDate]               The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.
 * @param {string}  [endInputId]            The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [endInputName]            The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [endLabel]            The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy
 * @param {string}  [disabled]             Controls whether or not the date picker is disabled to the user.
 * @param {boolean} [hint]                 Boolean that shows or hide the date format hint, in the format mm/dd/yyyy.
 * @param {string}  [defaultStartDate]     The start date picker input will set this value if it is a valid date. The date should be in the format mm/dd/yyyy
 * @param {string}  [defaultEndDate]       The end date picker input will set this value if it is a valid date. The date should be in the format mm/dd/yyyy
 */

export const DateRange: React.FC<Props> = ({
  hint = true,
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
  const [currentStartDate, setStartDate] = useState(startDate);
  const [currentEndDate, setEndDate] = useState(endDate);
  const [startCalendarOpen, setStartCalendarOpen] = useState(false);
  const [endCalendarOpen, setEndCalendarOpen] = useState(false);

  const toggleRangeCalendars = (startCalendar: boolean) => {
    if (startCalendar) {
      setStartCalendarOpen(!startCalendarOpen);
      if (endCalendarOpen) setEndCalendarOpen(false);
    } else {
      setEndCalendarOpen(!endCalendarOpen);
      if (startCalendarOpen) setStartCalendarOpen(false);
    }
  };

  const applyRangeClassName = (date: Date): string => {
    if (currentStartDate && currentEndDate) {
      let [month, day, year] = date.toLocaleDateString().split("/");
      day = day.padStart(2, "0");
      month = month.padStart(2, "0");

      let formattedDate = `${month}/${day}/${year}`;

      let dateStart = currentStartDate.split("/");
      let dateEnd = currentEndDate.split("/");
      let dateToCheck = formattedDate.split("/");

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
