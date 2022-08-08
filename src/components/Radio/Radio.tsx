import React, { useState } from "react";
type IntrinsicElements = JSX.IntrinsicElements["input"];

interface Props extends IntrinsicElements {
  disabled?: boolean;
  id: string;
  isTile?: boolean;
  label: string;
  name: string;
  tileDescription?: string;
  value?: string;
}

/**
 * Radio Component
 * @param {string}  id                A unique identifier for the input.
 * @param {string}  label             Label text that appears to the right of the Radio.
 * @param {string}  name              A radio group is defined by giving each Radio in the group the same name.
 * @param {boolean} [checked]         Set the initial checked state.
 * @param {Array}   [children]        An array of child elements to appear when selected.
 * @param {boolean} [disabled]        Sets the Radio to its disabled state.
 * @param {boolean} [isTile]          Use the tile variation of the Radio.
 * @param {string}  [tileDescription] Text that can be used to describe the label in more detail. Activates the tile variation automatically.
 * @param {string}  [value]           Value of the input element.
 */
export const Radio: React.FC<Props> = ({
  disabled = false,
  id,
  isTile = false,
  label,
  name,
  tileDescription,
  value,
  ...rest
}) => {
  return (
    <div className="usa-radio">
      <input
        className={
          isTile
            ? "usa-radio__input usa-radio__input--tile"
            : "usa-radio__input"
        }
        disabled={disabled}
        id={id}
        type="radio"
        name={name}
        value={value}
        {...rest}
      />
      <label className="usa-radio__label" htmlFor={id}>
        {label}
        {isTile && tileDescription && (
          <span className="usa-radio__label-description">
            {tileDescription}
          </span>
        )}
      </label>
    </div>
  );
};
