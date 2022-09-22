import React, { useEffect, useState } from "react";

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
  const [activeDescendant, setActiveDescendant] = useState<string>("");
  const [dropdownData, setDropdownData] = useState<DropdownData[]>(data);
  const [hidden, setHidden] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<string | number | undefined>(undefined);

  const closeDropdown = () => {
    setHidden(true);
    setActiveDescendant("");
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!hidden) {
      const currentTarget = e.currentTarget;
      requestAnimationFrame(() => {
        if (!currentTarget.contains(document.activeElement)) {
          closeDropdown();
        }
      });
    }
  };

  const handleItemClick = (itemValue: string | number) => {
    setValue(itemValue);
  };

  const handleInput = (inputValue: string) => {
    setInputValue(inputValue);
    // filter dropdownData
    setDropdownData(
      data.filter((itm) => {
        const displayStr = itm.displayString.toLowerCase();
        const searchString = inputValue.toLowerCase();
        return displayStr.includes(searchString);
      })
    );
  };

  const getDisplayString = () => {
    const obj = data.find((itm) => itm.value === value);
    return obj?.displayString ?? "";
  };

  useEffect(() => {
    setInputValue(getDisplayString());
  }, [value]);
  return (
    <>
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
      </>
      <label className="usa-label" htmlFor={id}>
        {label}
      </label>
      <div
        className={`usa-combo-box${
          value || inputValue ? " usa-combo-box--pristine" : ""
        }`}
        // add when a selection is made "usa-combo-box--pristine"
        data-enhanced="true"
        onFocus={() => setHidden(false)}
        onBlur={(e) => handleBlur(e)}
      >
        <select
          {...rest}
          aria-hidden={hidden}
          className="usa-select usa-sr-only usa-combo-box__select"
          id={id}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          tabIndex={-1}
          value={value}
        >
          <option value="">Select a fruit</option>
          {data.map((itm, idx) => (
            <option
              key={`usa-combo-box--option--${id}-${idx}`}
              value={itm.value}
            >
              {itm.displayString}
            </option>
          ))}
        </select>
        <input
          aria-activedescendant={activeDescendant}
          aria-autocomplete="list"
          aria-controls="fruit--list"
          aria-describedby="fruit--assistiveHint"
          aria-expanded="false"
          aria-owns="fruit--list"
          autoCapitalize="none"
          autoComplete="off"
          className="usa-combo-box__input"
          id={id}
          onChange={(e) => handleInput(e.target.value)}
          type="text"
          role="combobox"
          value={inputValue}
        />
        <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
          <button
            type="button"
            className="usa-combo-box__clear-input"
            aria-label="Clear the select contents"
            onClick={() => {
              setDropdownData(data);
              setInputValue("");
              setValue(undefined);
              closeDropdown();
            }}
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
            // TODO: do not compete with the onFocus callback in input
            // onClick={() => setHidden(!hidden)}
          >
            &nbsp;
          </button>
        </span>
        <ul
          tabIndex={-1}
          id="fruit--list"
          className="usa-combo-box__list"
          role="listbox"
          aria-labelledby="fruit-label"
          hidden={hidden}
        >
          {dropdownData.map((item, index) => {
            const itemId = `${id}--option-${index}`;
            const focused = itemId === activeDescendant;
            const selected = item.value === value;

            const getTabIndex = (): number => {
              if (activeDescendant) {
              }
              return -1;
            };
            return (
              <DropdownItem
                {...{
                  dropdownLength: data.length,
                  focused,
                  item,
                  itemId,
                  index,
                  key: itemId,
                  onClick: () => handleItemClick(item.value),
                  onMouseOver: () => setActiveDescendant(itemId),
                  selected,
                }}
              />
            );
          })}
        </ul>
        <div className="usa-combo-box__status usa-sr-only" role="status">
          {!hidden && `${data.length} results available.`}
        </div>
        <span id="fruit--assistiveHint" className="usa-sr-only">
          When autocomplete results are available use up and down arrows to
          review and enter to select. Touch device users, explore by touch or
          with swipe gestures.
        </span>
      </div>
    </>
  );
};

interface DropdownItemProps {
  dropdownLength: number;
  focused: boolean;
  item: { displayString: string; value: string | number };
  itemId: string;
  index: number;
  onClick: (arg: string | number) => void;
  onMouseOver: (arg: string) => void;
  selected: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  dropdownLength,
  focused,
  item,
  itemId,
  index,
  onClick,
  onMouseOver,
  selected,
}) => {
  return (
    <li
      aria-setsize={dropdownLength}
      aria-posinset={index + 1}
      aria-selected="false"
      className={`usa-combo-box__list-option${
        focused ? " usa-combo-box__list-option--focused" : ""
      }${selected ? " usa-combo-box__list-option--selected" : ""}`}
      data-value={item.value}
      id={itemId}
      // tabIndex = 0 should be value when opened, then if activeDescendant, if no activeDescendant default to top

      tabIndex={index === 0 ? 0 : -1}
      role="option"
      onClick={() => onClick(item.value)}
      onMouseOver={() => onMouseOver(itemId)}
    >
      {item.displayString}
    </li>
  );
};
