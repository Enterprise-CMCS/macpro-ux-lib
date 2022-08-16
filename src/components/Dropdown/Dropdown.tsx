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
      <div className="usa-combo-box" data-enhanced="true">
        <select
          aria-hidden="true"
          className="usa-select usa-sr-only usa-combo-box__select"
          id=""
          name={name}
          tabIndex={-1}
          {...rest}
        >
          {data.map((option, idx) => (
            <option
              key={`usa-combo-box--option--${id}-${idx}`}
              value={option.value}
            >
              {option.displayString}
            </option>
          ))}
        </select>
        <input
          aria-activedescendant=""
          aria-autocomplete="list"
          aria-controls={`${id}--list`}
          aria-describedby={`${id}--assistiveHint`}
          aria-expanded="false"
          aria-owns={`${id}--list`}
          autoCapitalize="none"
          autoComplete="off"
          className="usa-combo-box__input"
          id={id}
          role="combobox"
          type="text"
        />
        <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
          <button
            aria-label="Clear the select contents"
            className="usa-combo-box__clear-input"
            type="button"
          >
            &nbsp;
          </button>
        </span>
        <span className="usa-combo-box__input-button-separator">&nbsp;</span>
        <span className="usa-combo-box__toggle-list__wrapper" tabIndex={-1}>
          <button
            aria-label="Toggle the dropdown list"
            className="usa-combo-box__toggle-list"
            tabIndex={-1}
            type="button"
          >
            &nbsp;
          </button>
        </span>
        <ul
          aria-labelledby={`${id}-label`}
          className="usa-combo-box__list"
          hidden
          id={`${id}--list`}
          role="listbox"
          tabIndex={-1}
        >
          {data.map((option, idx) => (
            <li
              aria-setsize={data.length}
              aria-posinset={idx + 1}
              aria-selected="false"
              className="usa-combo-box__list-option"
              data-value={option.value}
              id={`${id}--list--option-${idx}`}
              key={`usa-combo-box--item--${id}-${idx}`}
              role="option"
              tabIndex={0}
            >
              {option.displayString}
            </li>
          ))}
        </ul>
        <div className="usa-combo-box__status usa-sr-only" role="status"></div>
        <span className="usa-sr-only" id={`${id}--assistiveHint`}>
          When autocomplete results are available use up and down arrows to
          review and enter to select. Touch device users, explore by touch or
          with swipe gestures.
        </span>
      </div>
    </>
  );
};
