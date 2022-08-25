import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface DropdownData {
  value: string | number;
  displayString: string;
}

interface Props extends IntrinsicElements {
  data: DropdownData[];
  label: string;
}

/**
 * Dropdown component
 *
 * This component is a wrapper around the HTML `<select>` element and provides the basic functionality of a dropdown along with accessibility and styling.
 * A key enhancement to the standard dropdown is the ability for a user to type to search for an option.
 *
 * @param {DropdownData}  data    Data used to populate the dropdown.
 * @param {string}        id      The id of the dropdown.
 * @param {string}        label   String used to label the dropdown in the UI.
 * @param {string}        name    Name of the dropdown used to identify it in the context of a form.
 */
export const Dropdown: React.FC<Props> = ({
  data,
  id,
  label,
  name,
  ...rest
}) => {
  return (
    <>
      {/*
      Possible TODO:
      These items are outside scope of design, but might be nice to have
      - Error State
      - Default Value
      - Disabled
      - Disable Search
      - Option Group
      - Simple Dropdown - Render without custom styles
      */}
      <label className="usa-label" htmlFor={id}>
        {label}
      </label>
      <div className="usa-combo-box">
        <select className="usa-select" id={id} name={name} {...rest}>
          {data.map((option, idx) => (
            <option
              key={`usa-combo-box--option--${id}-${idx}`}
              value={option.value}
            >
              {option.displayString}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
