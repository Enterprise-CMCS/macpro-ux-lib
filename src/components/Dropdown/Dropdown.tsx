import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface Props extends IntrinsicElements {
  data: {
    value?: string | number;
    displayString: string;
  }[];
  label: string;
}

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
      - Simple Dropdown
      */}

      <label className="usa-label" htmlFor={id}>
        {label}
      </label>
      <div className="usa-combo-box" data-enhanced="true">
        <select
          className="usa-select usa-sr-only usa-combo-box__select"
          name={name}
          id=""
          aria-hidden="true"
          tabIndex={-1}
          {...rest}
        >
          {data.map((option, idx) => (
            <option
              value={option.value}
              key={`usa-combo-box--option--${id}-${idx}`}
            >
              {option.displayString}
            </option>
          ))}
        </select>
        <input
          id={id}
          aria-owns={`${id}--list`}
          aria-controls={`${id}--list`}
          aria-autocomplete="list"
          aria-describedby={`${id}--assistiveHint`}
          aria-expanded="false"
          autoCapitalize="none"
          autoComplete="off"
          className="usa-combo-box__input"
          type="text"
          role="combobox"
          aria-activedescendant=""
        />
        <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
          <button
            type="button"
            className="usa-combo-box__clear-input"
            aria-label="Clear the select contents"
          >
            &nbsp;
          </button>
        </span>
        <span className="usa-combo-box__input-button-separator">&nbsp;</span>
        <span className="usa-combo-box__toggle-list__wrapper" tabIndex={-1}>
          <button
            type="button"
            tabIndex={-1}
            className="usa-combo-box__toggle-list"
            aria-label="Toggle the dropdown list"
          >
            &nbsp;
          </button>
        </span>
        <ul
          tabIndex={-1}
          id={`${id}--list`}
          className="usa-combo-box__list"
          role="listbox"
          aria-labelledby={`${id}-label`}
          hidden
        >
          {data.map((option, idx) => (
            <li
              aria-setsize={data.length}
              aria-posinset={idx + 1}
              aria-selected="false"
              id={`${id}--list--option-${idx}`}
              className="usa-combo-box__list-option"
              tabIndex={0}
              role="option"
              key={`usa-combo-box--item--${id}-${idx}`}
              data-value={option.value}
            >
              {option.displayString}
            </li>
          ))}
        </ul>
        <div className="usa-combo-box__status usa-sr-only" role="status"></div>
        <span id={`${id}--assistiveHint`} className="usa-sr-only">
          When autocomplete results are available use up and down arrows to
          review and enter to select. Touch device users, explore by touch or
          with swipe gestures.
        </span>
      </div>
    </>
  );
};
