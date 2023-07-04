import { DropdownInput } from "../DropdownInput/DropdownInput";
import React, { Dispatch, SetStateAction, useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface DropdownData {
  value: string | number;
  displayString: string;
}

export interface DropdownProps extends IntrinsicElements {
  data: DropdownData[];
  label: string;
  readOnly?: boolean;
  setValue?: Dispatch<SetStateAction<any>>;
  value?: string | number | undefined;
}

/**
 * Dropdown component
 *
 * This component is a wrapper around the HTML `<select>` element and provides the basic functionality of a dropdown along with accessibility and styling.
 * A key enhancement to the standard dropdown is the ability for a user to type to search for an option.
 *
 * @param {string}        [className]    A class name that will be applied on the component wrapper div.
 * @param {DropdownData}  data           Data used to populate the dropdown.
 * @param {string}        id             The id of the dropdown.
 * @param {string}        label          String used to label the dropdown in the UI.
 * @param {string}        name           Name of the dropdown used to identify it in the context of a form.
 * @param {string}        [placeholder]  Placeholder text to be displayed in the input.
 * @param {boolean}       readOnly       Sets input field to read-only. Effectively disables type-ahead search.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  className,
  data,
  id,
  label,
  name,
  placeholder,
  readOnly = false,
  setValue,
  value,
  ...rest
}) => {
  /*
    Possible TODO:
    These items are outside scope of design, but might be nice to have
    - Error State
    - Default Value
    - Disabled
    - Simple Dropdown - Render without custom styles
  */

  if (value === undefined && setValue === undefined)
    [value, setValue] = useState<string | number | undefined>("");

  return (
    <div className={className}>
      <DropdownInput
        data={data}
        id={id}
        label={label}
        readOnly={readOnly}
        setValue={setValue}
        value={value}
      >
        <select
          aria-hidden={true}
          className="usa-select usa-sr-only usa-combo-box__select"
          name={name}
          onChange={(e) => setValue && setValue(e.target.value)}
          tabIndex={-1}
          value={value}
          {...rest}
        >
          <option value={undefined}></option>
          {data.map((itm, idx) => (
            <option
              key={`usa-combo-box--option--${id}-${idx}`}
              value={itm.value}
            >
              {itm.displayString}
            </option>
          ))}
        </select>
      </DropdownInput>
    </div>
  );
};
