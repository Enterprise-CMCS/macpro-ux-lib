import React, {
  Dispatch,
  SetStateAction,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { DropdownInput } from "../DropdownInput/DropdownInput";
import { FilterChip } from "../FilterChip/FilterChip";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface DropdownData {
  value: string;
  displayString: string;
}

export interface MultiSelelctProps extends IntrinsicElements {
  data: DropdownData[];
  defaultValues?: string[];
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  setValue?: Dispatch<SetStateAction<any>>;
  value?: string[];
}

/**
 * **MultiSelect Component**
 *
 * @param {string}    data           An array of objects used to populate the dropdown. Each object should appear as follows:\n\n `{ value : string, displayString: string }`\n\nUnlike the regular Dropdown, values must be strings.
 * @param {string}    defaultValues  An array of strings used as default selected values.
 * @param {string}    label          String used to label the dropdown in the UI.
 * @param {string}    id             Unique identifier required for form control.
 * @param {string}    name           Name of the select element used to identify it in the context of a form.
 * @param {string}    placeholder    Placeholder text for the input search.
 * @param {string}    readOnly       Sets input field to read-only. Effectively disables type-ahead search.
 * @param {string}    setValue       Optionally manage state in this component from a parent by passing state params to `value` and `setValue`.
 * @param {string}    value          Optionally manage state in this component from a parent by passing state params to `value` and `setValue`.
 */

export const MultiSelect = forwardRef<HTMLSelectElement, MultiSelelctProps>(
  function MultiSelect({ setValue, value, ...props }, ref) {
    const {
      data,
      defaultValues,
      label,
      id,
      name,
      placeholder,
      readOnly,
      ...rest
    } = props;

    const [dropdownData, setDropdownData] = useState(data);

    // This is value currently displayed in DropdownInput
    const [dropdownValue, setDropdownValue] = useState<
      string | number | undefined
    >("");

    // Manage state internally if no state params are passed
    if (value === undefined && setValue === undefined)
      [value, setValue] = useState<string[]>(defaultValues ?? []);

    // return the item with the corresponding provided value
    const findInDropdownData = (val: string | number) => {
      return data.find((item) => item.value === val);
    };

    // add a clicked item's value to the array of value
    const addValue = (val: string | number | undefined) => {
      const item = dropdownData.find((itm) => itm.value === val);
      if (item?.value !== undefined)
        setValue && setValue([...value!, item.value]);
      setDropdownValue("");
    };

    const removeValue = (val: string | number) => {
      setValue && setValue(value!.filter((item) => item !== val));
    };

    // displayed data should be dropdownData - value
    // update whenever a change is made to value
    useEffect(() => {
      setDropdownData(
        data.filter((item) => value && !value.includes(item.value))
      );
    }, [value]);

    return (
      <div className="multiselect">
        {/* The native select element is hidden and handles reporting the
        value (as an array) to the parent */}
        <select
          aria-hidden={true}
          className="usa-select usa-sr-only usa-combo-box__select"
          multiple
          name={name}
          onChange={(e) => {
            const options = [...e.target.options];
            const selectedOptions = options.filter((option) => option.selected);
            setValue && setValue(selectedOptions.map((option) => option.value));
          }}
          ref={ref}
          tabIndex={-1}
          value={value}
          {...rest}
        >
          {data.map((itm, idx) => (
            <option key={`${id}-${idx}`} value={itm.value}>
              {itm.displayString}
            </option>
          ))}
        </select>

        {/* DropdownInput is a custom-designed dropdown menu. Changes here update
        the value in the select element above */}
        <DropdownInput
          data={dropdownData}
          id={id}
          label={label}
          placeholder={placeholder}
          readOnly={readOnly}
          setValue={addValue}
          value={dropdownValue}
        />

        <div className="filter-chip-wrapper">
          {value &&
            value.map((val, idx) => {
              const item = findInDropdownData(val);
              return (
                <FilterChip
                  text={item?.displayString ?? ""}
                  key={`${id}-filterchip-${idx}`}
                  onClick={() => removeValue(val)}
                />
              );
            })}
        </div>
      </div>
    );
  }
);
