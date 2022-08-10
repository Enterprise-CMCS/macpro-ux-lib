import React, { useState } from "react";
import { generateId } from "utils";

type IntrinsicElements = JSX.IntrinsicElements["select"];

interface Props extends IntrinsicElements {
  data: {
    value?: string | number;
    displayString: string;
  }[];
  defaultValue?: string | number;
  label: string;
}

export const Dropdown: React.FC<Props> = ({
  data,
  defaultValue,
  id,
  label,
  name,
  ...rest
}) => {
  // Used to handle the case that multiple dropdowns have the same data
  const [keyID, setKeyID] = useState<number>(generateId());

  return (
    <>
      {/* TODO: Error Message */}
      {/* TODO: Disabled */}
      {/* TODO: Option Group */}
      <label className="usa-label" htmlFor={id}>
        {label}
      </label>
      <div className="usa-combo-box">
        {/* TODO: X to clear */}
        <select
          className="usa-select"
          defaultValue={defaultValue}
          name={name || id}
          id={id}
          {...rest}
        >
          {data.map((option) => (
            <option
              value={option.value}
              key={`usa-combo-box-${option.value}-${keyID}`}
            >
              {option.displayString}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
