import React from "react";

interface Props {
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
 * @param {boolean} [isTile]          Use the tile variation of the Checkbox.
 * @param {string}  [tileDescription] Text that can be used to describe the label in more detail. Activates the tile variation automatically.
 * @param {string}  [value]             Value of the input element.
 */
export const Checkbox: React.FC<Props> = ({
  id,
  isTile,
  label,
  name,
  tileDescription,
  value,
}) => {
  if (isTile) {
    return (
      <div className="usa-checkbox">
        <input
          className="usa-checkbox__input usa-checkbox__input--tile"
          id={id}
          type="checkbox"
          name={name}
          value={value}
        />
        <label className="usa-checkbox__label" htmlFor={id}>
          {label}
          <span className="usa-checkbox__label-description">
            {tileDescription}
          </span>
        </label>
      </div>
    );
  } else {
    return (
      <div className="usa-checkbox">
        <input
          className="usa-checkbox__input"
          id={id}
          type="checkbox"
          name={name}
          value={value}
        />
        <label className="usa-checkbox__label" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
};
