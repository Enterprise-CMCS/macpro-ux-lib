import React, { useEffect, useState } from "react";
import { DropdownProps } from "../Dropdown/Dropdown";
import { DropdownInput } from "../DropdownInput/DropdownInput";
import { FilterChip } from "../FilterChip/FilterChip";

interface Props extends DropdownProps {
  defaultValues?: string[];
  data: {
    value: string;
    displayString: string;
  }[];
  label: string;
  placeholder?: string;
}

/**
 * **MultiSelect Component**
 *
 * @param {string}    defaultValues  Unique identifier required for form control.
 * @param {string}    dropdownData   Unique identifier required for form control.
 * @param {string}    id             Unique identifier required for form control.
 * @param {string}    label          Unique identifier required for form control.
 */
export const MultiSelect: React.FC<Props> = ({
  defaultValues,
  data,
  id,
  name,
  ...rest
}) => {
  const [dropdownData, setDropdownData] = useState(data);
  const [dropdownValue, setDropdownValue] =
    useState<string | number | undefined>("");
  const [selectedValues, setSelectedValues] = useState<string[]>(
    defaultValues ?? []
  );

  // return the item with the corresponding provided value
  const findInDropdownData = (val: string | number) => {
    return dropdownData.find((item) => item.value === val);
  };

  // add a clicked item's value to the array of selectedValues
  const handleValueChange = (val: string | number | undefined) => {
    const item = dropdownData.find((itm) => itm.value === val);
    if (item?.value !== undefined)
      setSelectedValues([...selectedValues, item.value]);
    setDropdownValue("");
  };

  const removeChip = (val: string | number) => {
    setSelectedValues(selectedValues.filter((item) => item !== val));
  };

  // displayed data should be dropdownData - selectedValues
  // update whenever a change is made to selectedValues
  useEffect(() => {
    setDropdownData(
      dropdownData.filter((item) => !selectedValues.includes(item.value))
    );
  }, [selectedValues]);

  return (
    <div className="multiselect">
      <DropdownInput
        {...rest}
        data={dropdownData}
        setValue={handleValueChange}
        value={dropdownValue}
        id={id}
      >
        <select
          aria-hidden={true}
          name={name}
          className="usa-select usa-sr-only usa-combo-box__select"
          multiple
          onChange={(e) => {
            const options = [...e.target.options];
            const selectedOptions = options.filter((option) => option.selected);
            setSelectedValues(selectedOptions.map((option) => option.value));
          }}
          tabIndex={-1}
          value={selectedValues}
        >
          {dropdownData.map((itm, idx) => (
            <option key={`${id}-${idx}`} value={itm.value}>
              {itm.displayString}
            </option>
          ))}
        </select>
      </DropdownInput>
      <div className="filter-chip-wrapper">
        {selectedValues.map((val, idx) => {
          const item = findInDropdownData(val);
          return (
            <FilterChip
              text={item?.displayString ?? ""}
              key={`${id}-filterchip-${idx}`}
              onClick={() => removeChip(val)}
            />
          );
        })}
      </div>
    </div>
  );
};
