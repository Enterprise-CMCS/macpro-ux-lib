import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DropdownInput } from "../DropdownInput/DropdownInput";
import { FilterChip } from "../FilterChip/FilterChip";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface DropdownData {
  value: string;
  displayString: string;
}

interface MultiSelelctProps extends IntrinsicElements {
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
 * @param {string}    defaultValues  Unique identifier required for form control.
 * @param {string}    dropdownData   Unique identifier required for form control.
 * @param {string}    id             Unique identifier required for form control.
 * @param {string}    label          Unique identifier required for form control.
 */
export const MultiSelect: React.FC<MultiSelelctProps> = ({
  className,
  defaultValues,
  data,
  label,
  id,
  name,
  placeholder,
  value,
  setValue,
  ...rest
}) => {
  const [dropdownData, setDropdownData] = useState(data);
  const [dropdownValue, setDropdownValue] =
    useState<string | number | undefined>("");

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
      <DropdownInput
        data={dropdownData}
        id={id}
        label={label}
        placeholder={placeholder}
        setValue={addValue}
        value={dropdownValue}
      >
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
      </DropdownInput>
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
};
