import React, { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { FilterChip } from "../FilterChip/FilterChip";
import dropdownData from "../Dropdown/data.json";

type IntrinsicElements = JSX.IntrinsicElements["p"];

interface Props extends IntrinsicElements {}

/**
 * **MultiSelect Component**
 *
 * @param {string}    id  Unique identifier required for form control.
 */
export const MultiSelect: React.FC<Props> = ({ ...rest }) => {
  const [data, setDropdownData] = useState(dropdownData);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [value, setValue] = useState<string | number | undefined>("");

  const handleValueChange = (val: string) => {
    const obj = dropdownData.find((itm) => itm.value === val);
    const displayString = obj?.displayString;
    if (displayString) setSelectedValues([...selectedValues, displayString]);
    setValue("");
  };

  const removeChip = (val: string) => {
    setSelectedValues(selectedValues.filter((e) => e !== val));
  };

  useEffect(() => {
    setDropdownData(
      dropdownData.filter(
        (item) => !selectedValues.includes(item.displayString)
      )
    );
  }, [selectedValues]);

  return (
    <>
      <Dropdown
        data={data}
        label={"Select an item from the list:"}
        value={value}
        setValue={handleValueChange}
      />
      <span style={{ display: "flex", flexDirection: "row" }}>
        {selectedValues.map((val, idx) => (
          <FilterChip
            text={val}
            key={`filterchip-${idx}`}
            onClick={() => removeChip(val)}
          />
        ))}
      </span>
    </>
  );
};
