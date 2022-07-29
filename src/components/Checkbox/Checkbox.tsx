import React, { useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["input"];

interface Props extends IntrinsicElements {
  checked?: boolean;
  children?: JSX.Element[];
  id: string;
  isTile?: boolean;
  label: string;
  name: string;
  tileDescription?: string;
  value?: string;
}

/**
 * Checkbox Component
 * @param {Array}   children          An array of child elements to appear when checked.
 * @param {string}  id                A unique identifier for the input.
 * @param {string}  label             Label text that appears to the right of the Checkbox.
 * @param {string}  name              Name of the input element.
 * @param {boolean} [checked]         Set the initial checked state.
 * @param {boolean} [isTile]          Use the tile variation of the Checkbox.
 * @param {string}  [tileDescription] Text that can be used to describe the label in more detail. Activates the tile variation automatically.
 * @param {string}  [value]           Value of the input element.
 */
export const Checkbox: React.FC<Props> = ({
  checked = false,
  children,
  id,
  isTile,
  label,
  name,
  tileDescription,
  value,
  ...rest
}) => {
  const [isChecked, setChecked] = useState(checked);
  const handleChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="usa-checkbox">
      <input
        checked={isChecked}
        className={
          isTile
            ? "usa-checkbox__input usa-checkbox__input--tile"
            : "usa-checkbox__input"
        }
        id={id}
        onChange={handleChange}
        type="checkbox"
        name={name}
        value={value}
        {...rest}
      />
      <label className="usa-checkbox__label" htmlFor={id}>
        {label}
        {isTile && tileDescription && (
          <span className="usa-checkbox__label-description">
            {tileDescription}
          </span>
        )}
      </label>
      {isChecked && children?.length && !isTile && (
        <div className="border-left-05 border-primary margin-left-1 padding-left-205">
          {children}
        </div>
      )}
    </div>
  );
};
