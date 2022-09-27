import { Icon } from "components/Icon/Icon";
import React, { useEffect, useRef, useState } from "react";

const UseFocus = (): [React.MutableRefObject<any>, () => void] => {
  const htmlElRef = useRef<any>(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface DropdownData {
  value: string | number;
  displayString: string;
}

interface Props extends IntrinsicElements {
  data: DropdownData[];
  label: string;
  readOnly: boolean;
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
  readOnly = false,
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

  const handleInputArrowDown = () => {
    const selectedElement = document.getElementsByClassName(
      "usa-combo-box__list-option--selected"
    )[0] as HTMLElement;

    const firstElement = document.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0] as HTMLElement;

    const elem = selectedElement ?? firstElement;

    if (elem) {
      elem.focus();
      setActiveDescendant(elem.id);
    }
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
    closeDropdown();
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
      - Simple Dropdown - Render without custom styles
      */}
      </>
      <label className="usa-label" htmlFor={id} id={`${id}-label`}>
        {label}
      </label>
      <div
        className={`usa-combo-box${
          value || inputValue ? " usa-combo-box--pristine" : ""
        }`}
        data-enhanced="true"
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
          <option value="">{label}</option>
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
          aria-controls={`${id}--list`}
          aria-describedby={`${id}--assistiveHint`}
          aria-expanded="false"
          aria-owns={`${id}--list`}
          autoCapitalize="none"
          autoComplete="off"
          className="usa-combo-box__input"
          id={id}
          onChange={(e) => handleInput(e.target.value)}
          onFocus={() => setHidden(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault;
              handleInputArrowDown();
            }
          }}
          type="text"
          readOnly={readOnly}
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
            }}
          >
            <Icon name="close" />
          </button>
        </span>
        <span className="usa-combo-box__input-button-separator">&nbsp;</span>
        <span className="usa-combo-box__toggle-list__wrapper" tabIndex={-1}>
          <button
            type="button"
            tabIndex={-1}
            className="usa-combo-box__toggle-list"
            aria-label="Toggle the dropdown list"
            onClick={() => setHidden(!hidden)}
          >
            <Icon name="expand_more" />
          </button>
        </span>
        <ul
          tabIndex={-1}
          id={`${id}--list`}
          className="usa-combo-box__list"
          role="listbox"
          aria-labelledby={`${id}-label`}
          hidden={hidden}
        >
          {dropdownData.map((item, index) => {
            const itemId = `${id}--option-${index}`;
            return (
              <DropdownItem
                {...{
                  activeDescendant,
                  data,
                  handleItemClick,
                  id,
                  index,
                  item,
                  itemId,
                  key: itemId,
                  setActiveDescendant,
                  value,
                }}
              />
            );
          })}
        </ul>
        <div className="usa-combo-box__status usa-sr-only" role="status">
          {!hidden && `${data.length} results available.`}
        </div>
        <span id={`${id}--assistiveHint`} className="usa-sr-only">
          When autocomplete results are available use up and down arrows to
          review and enter to select. Touch device users, explore by touch or
          with swipe gestures.
        </span>
      </div>
    </>
  );
};

interface DropdownItemProps {}

// TODO: This needs some cleanup
const DropdownItem = ({
  activeDescendant,
  data,
  handleItemClick,
  id,
  index,
  item,
  itemId,
  setActiveDescendant,
  value,
}: any) => {
  const [ref, setFocus] = UseFocus();
  const focused = itemId === activeDescendant;
  const selected = item.value === value;
  const tabIndex = activeDescendant && focused ? 0 : -1;

  const handleArrow = (arrow: "ArrowDown" | "ArrowUp") => {
    const currentElement = document.getElementsByClassName(
      "usa-combo-box__list-option--focused"
    )[0];

    if (arrow === "ArrowDown") {
      const nextElement = currentElement?.nextElementSibling as HTMLElement;
      if (nextElement) {
        nextElement.focus();
        setActiveDescendant(nextElement.id);
      }
    } else if (arrow === "ArrowUp") {
      const previousElement =
        currentElement?.previousElementSibling as HTMLElement;
      if (previousElement) {
        previousElement.focus();
        setActiveDescendant(previousElement.id);
      }
    }
  };

  return (
    <li
      aria-setsize={data.length}
      aria-posinset={index + 1}
      aria-selected="false"
      className={`usa-combo-box__list-option${
        focused ? " usa-combo-box__list-option--focused" : ""
      }${selected ? " usa-combo-box__list-option--selected" : ""}`}
      data-value={item.value}
      id={itemId}
      ref={ref}
      tabIndex={tabIndex}
      role="option"
      onClick={() => handleItemClick(item.value)}
      onKeyDown={(e) => {
        e.preventDefault();
        switch (e.key) {
          case "Enter":
            handleItemClick(item.value);
            break;
          case "ArrowDown":
          case "ArrowUp":
            handleArrow(e.key);
            break;
        }
      }}
      onMouseOver={() => {
        setActiveDescendant(itemId);
        setFocus();
      }}
    >
      {item.displayString}
    </li>
  );
};
