import React, { forwardRef, useState } from "react";

type InputElements = JSX.IntrinsicElements["input"];

export interface CheckboxProps extends InputElements {
  checked?: boolean;
  children?: JSX.Element[];
  disabled?: boolean;
  id: string;
  isTile?: boolean;
  label: string;
  name: string;
  tileDescription?: string;
  value?: string;
}

/**
 * Checkbox Component
 * @param {string}  id                A unique identifier for the input.
 * @param {string}  label             Label text that appears to the right of the Checkbox.
 * @param {string}  name              Name of the input element.
 * @param {boolean} [checked]         Set the initial checked state.
 * @param {Array}   [children]        An array of child elements to appear when checked.
 * @param {boolean} [disabled]        Sets the checkbox to its disabled state.
 * @param {boolean} [isTile]          Use the tile variation of the Checkbox.
 * @param {string}  [tileDescription] Text that can be used to describe the label in more detail. Activates the tile variation automatically.
 * @param {string}  [value]           Value of the input element.
 */

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ onChange, ...props }, ref) {
    const {
      checked = false,
      children,
      disabled = false,
      id,
      isTile = false,
      label,
      name,
      tileDescription,
      value,
      ...otherProps
    } = props;

    const [isChecked, setChecked] = useState(checked);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Execute the parent form's onChange event if it exists:
      if (onChange) {
        onChange(e);
      }

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
          disabled={disabled}
          id={id}
          name={name}
          onChange={handleChange}
          ref={ref}
          type="checkbox"
          value={value}
          {...otherProps}
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
  }
);
