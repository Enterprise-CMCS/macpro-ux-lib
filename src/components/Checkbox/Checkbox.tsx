import React, { useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["input"];

interface Props extends IntrinsicElements {
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
 * @param {boolean} [isTile]          Use the tile variation of the Checkbox.
 * @param {string}  [tileDescription] Text that can be used to describe the label in more detail. Activates the tile variation automatically.
 * @param {string}  [value]             Value of the input element.
 */
export const Checkbox: React.FC<Props> = ({
  children,
  id,
  isTile,
  label,
  name,
  tileDescription,
  value,
}) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="usa-checkbox">
      <input
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
      />
      <label className="usa-checkbox__label" htmlFor={id}>
        {label}
        {isTile && tileDescription && (
          <span className="usa-checkbox__label-description">
            {tileDescription}
          </span>
        )}
      </label>
      {checked && children && children.length > 0 && !isTile && (
        <div className="border-left-05 border-primary margin-left-1 margin-top-1 padding-left-205">
          {children}
        </div>
      )}
    </div>
  );
};
