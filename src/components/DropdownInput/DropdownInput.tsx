import { Icon } from "components/Icon/Icon";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface DropdownData {
  value: string | number;
  displayString: string;
}

interface DropdownProps extends IntrinsicElements {
  data: DropdownData[];
  label: string;
  readOnly?: boolean;
  setValue?: Dispatch<SetStateAction<any>>;
  value?: string | number | undefined;
  select: React.ReactNode;
}

/**
 * Dropdown component
 *
 * This component is a wrapper around the HTML `<select>` element and provides the basic functionality of a dropdown along with accessibility and styling.
 * A key enhancement to the standard dropdown is the ability for a user to type to search for an option.
 *
 * @param {string}        [className]    A class name that will be applied on the select element.
 * @param {DropdownData}  data           Data used to populate the dropdown.
 * @param {string}        id             The id of the dropdown.
 * @param {string}        label          String used to label the dropdown in the UI.
 * @param {string}        name           Name of the dropdown used to identify it in the context of a form.
 * @param {string}        [placeholder]  Placeholder text to be displayed in the input.
 * @param {boolean}       readOnly       Sets input field to read-only. Effectively disables type-ahead search.
 */
export const DropdownInput: React.FC<DropdownProps> = ({
  className,
  data,
  id,
  label,
  name,
  placeholder,
  readOnly = false,
  select,
  setValue,
  value,
  ...rest
}) => {
  const [activeDescendant, setActiveDescendant] = useState<string>("");
  const [dropdownData, setDropdownData] = useState<DropdownData[]>(data);
  const [hidden, setHidden] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  if (value === undefined && setValue === undefined)
    [value, setValue] = useState<string | number | undefined>("");

  const closeDropdown = () => {
    setHidden(true);
    setActiveDescendant("");
  };

  /*
   * Handles ArrowDown when input has focus.
   *
   * If a value was previously selected, focus should shift to that element on ArrowDown.
   * If a value has not yet been selected, focus goes to the first option in the list.
   */
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

  // Collapse dropdown onBlur – do not collapse if focus shifts to a child element
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

  // triggered by click or click-equivalent event (Enter/Tab)
  const handleItemClick = (itemValue: string | number) => {
    setValue && setValue(itemValue);
    closeDropdown();
  };

  // Sets inputValue text and filters dropdown options
  const handleInput = (inputValue: string) => {
    setInputValue(inputValue);
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

  // when value updates, inputValue should match value
  useEffect(() => {
    setInputValue(getDisplayString());
    setDropdownData(data);
  }, [value, data]);

  return (
    <>
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
        {select}
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
              e.preventDefault();
              handleInputArrowDown();
            }
          }}
          placeholder={placeholder}
          type="text"
          readOnly={readOnly}
          role="combobox"
          value={inputValue}
        />
        <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
          <button
            hidden={!value}
            type="button"
            className="usa-combo-box__clear-input"
            aria-label="Clear the select contents"
            onClick={() => {
              setValue && setValue("");
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

/*
 * UseFocus takes a ref and shifts focus to the referenced element.
 * Used here as a way to shift focus in a self-referential way within DropdownItem.
 */
const UseFocus = (): [React.MutableRefObject<any>, () => void] => {
  const htmlElRef = useRef<any>(null);
  const setFocus = () => {
    htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

interface DropdownItemProps {
  activeDescendant: string;
  data: DropdownData[];
  handleItemClick: (arg: string | number) => void;
  index: number;
  item: DropdownData;
  itemId: string;
  setActiveDescendant: any;
  value: string | number | undefined;
}

/*
 * DropdownItem component is a helper component for Dropdown.
 * Represents each item in the dropdown menu and contains much of the functionality and logic.
 */
const DropdownItem = ({
  activeDescendant,
  data,
  handleItemClick,
  index,
  item,
  itemId,
  setActiveDescendant,
  value,
}: DropdownItemProps) => {
  const [ref, setFocus] = UseFocus();
  const selected = item.value === value;

  let focused = false;
  if (itemId === activeDescendant) focused = true;
  else if (!activeDescendant && selected) focused = true;
  else if (!activeDescendant && !value && index === 0) focused = true;

  let tabIndex = -1;
  if (activeDescendant && focused) tabIndex = 0;
  else if (!activeDescendant && index === 0) tabIndex = 0;

  // takes a string representing arrow key press and shifts focus down or up accordingly
  const handleArrow = (arrow: "ArrowDown" | "ArrowUp") => {
    const currentElement = document.getElementsByClassName(
      "usa-combo-box__list-option--focused"
    )[0];

    let elemToFocus;
    if (arrow === "ArrowDown") {
      elemToFocus = currentElement?.nextElementSibling as HTMLElement;
    } else if (arrow === "ArrowUp") {
      elemToFocus = currentElement?.previousElementSibling as HTMLElement;
    }

    if (elemToFocus) {
      elemToFocus.focus();
      setActiveDescendant(elemToFocus.id);
    }
  };

  /*
   * disable default behavior
   * on Enter/Tab set value to be focused element value
   * on ArrowDown/ArrowUp shift focus appropriately
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.preventDefault();

    switch (e.key) {
      case "Tab":
      case "Enter":
        handleItemClick(item.value);
        break;
      case "ArrowDown":
      case "ArrowUp":
        handleArrow(e.key);
        break;
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
      onKeyDown={(e) => handleKeyDown(e)}
      onMouseOver={() => {
        setActiveDescendant(itemId);
        setFocus();
      }}
    >
      {item.displayString}
    </li>
  );
};
