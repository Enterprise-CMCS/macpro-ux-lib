import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterChip } from "./FilterChip";
import { Typography } from "../Typography/Typography";
import { Dropdown } from "../Dropdown/Dropdown";
import dropdownData from "../Dropdown/data.json";

// const ImplementationComponent: React.FC = () =>

export default {
  title: "COMPONENTS/FilterChip",
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<any> = () => {
  const [data, setDropdownData] = useState(dropdownData);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [value, setValue] = useState<string | number | undefined>("");

  const handleValueChange = (val) => {
    const obj = dropdownData.find((itm) => itm.value === val);
    const displayString = obj?.displayString;
    if (displayString) setSelectedValues([...selectedValues, displayString]);
    setValue("");
  };

  const removeChip = (val) => {
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
      <Typography>Filter Chip Implementation Example</Typography>
      <Dropdown
        data={data}
        label={"Select an item from the list:"}
        value={value}
        setValue={handleValueChange}
      />

      {selectedValues.length > 0 && (
        <Typography size="xs">Click a FilterChip to remove it.</Typography>
      )}
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

export const Implementation = Template.bind({});
Implementation.args = {};
Implementation.parameters = {
  controls: { hideNoControlsWarning: true },
};
