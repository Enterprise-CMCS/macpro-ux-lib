import React from "react";

interface Props {
  id: string;
  isTile?: boolean;
  label: string;
  name: string;
  tileDescription?: string;
  value?: string;
}

export const Checkbox: React.FC<Props> = ({
  id,
  isTile = false,
  label,
  name,
  tileDescription,
  value,
  ...rest
}) => {
  if (isTile) {
    return (
      <div className="usa-checkbox">
        <input
          className="usa-checkbox__input usa-checkbox__input--tile"
          id={id}
          type="checkbox"
          name={name}
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
        />
        <label className="usa-checkbox__label" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
};
