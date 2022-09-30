import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["input"];

interface Props extends IntrinsicElements {}

/**
 * **FileInput Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const FileInput: React.FC<Props> = ({ ...rest }) => {
  return (
    <div className="usa-form-group" {...rest}>
      <label className="usa-label" htmlFor="file-input-single">
        Input accepts a single file
      </label>
      <input
        id="file-input-single"
        className="usa-file-input"
        type="file"
        name="file-input-single"
        {...rest}
      />
    </div>
  );
};
