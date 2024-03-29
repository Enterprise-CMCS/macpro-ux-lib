import { DropdownInput } from "../DropdownInput/DropdownInput";
import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  forwardRef,
  useState,
} from "react";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface DropdownData {
  value: string | number;
  displayString: string;
}

export interface DropdownProps extends IntrinsicElements {
  data: DropdownData[];
  label: string;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
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

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  function Dropdown({ setValue, value, ...props }, ref) {
    const {
      className,
      data,
      id,
      label,
      onChange,
      name,
      placeholder,
      readOnly = false,
      ...rest
    } = props;

    const [selectedValue, setSelectedValue] = useState<
      string | number | undefined
    >("");

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (setValue) setValue(e.target.value);
      else setSelectedValue(e.target.value);
    };

    return (
      <div className={className}>
        <DropdownInput
          data={data}
          id={id}
          label={label}
          readOnly={readOnly}
          ref={ref}
          setValue={setValue ?? setSelectedValue}
          value={value ?? selectedValue}
        >
          <select
            aria-hidden={true}
            className="usa-select usa-sr-only usa-combo-box__select"
            name={name}
            onChange={handleOnChange}
            tabIndex={-1}
            value={value ?? selectedValue}
            {...rest}
          >
            <option value={undefined}></option>

            {data.map((itm, idx) => (
              <option key={itm.value} value={itm.value}>
                {itm.displayString}
              </option>
            ))}
          </select>
        </DropdownInput>
      </div>
    );
  }
);
