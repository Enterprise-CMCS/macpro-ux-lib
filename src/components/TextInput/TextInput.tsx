import React, { useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["input"];

export interface TextInputProps extends IntrinsicElements {
  errorMessage?: string;
  fieldName: string;
  id: string;
  inputError?: boolean;
  inputFilter?: RegExp;
  inputSuccess?: boolean;
  label: string;
  prefix?: string;
  required?: boolean;
  suffix?: string;
}
/**
 * TextInput Component
 * @param {string}  label          Field label.
 * @param {string}  fieldName      Name of the input field.
 * @param {string}  id             A unique identifier for the input.
 * @param {string}  [errorMessage] Error message text displayed when inputError === true.
 * @param {boolean} [inputError]   Triggers error message and error styling.
 * @param {RegExp}  [inputFilter]  Used to limit input values. If a RegExp is not provided, all input types are allowed.
 * @param {boolean} [inputSuccess] Trigger success styling.
 * @param {string}  [prefix]       Text to be displayed at the front of input field. Not stored in value. Ex: currency indicator.
 * @param {boolean} [required]     Adds semantic required attr and appends an * to the end of the input label.
 * @param {string}  [suffix]       Text to be displayed at the end of input field. Not stored in value. Ex: mass indicator (lbs, fl oz)
 */
export const TextInput: React.FC<Props> = ({
  label,
  errorMessage,
  fieldName,
  id,
  inputError = false,
  inputFilter,
  inputSuccess = false,
  prefix,
  required = false,
  suffix,
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputFilter && inputFilter.test(e.target.value)) {
      setInputValue(e.target.value);
    } else if (!inputFilter) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div
      className={`usa-form-group${inputError ? " usa-form-group--error" : ""}`}
    >
      <label
        className={`usa-label${inputError ? " usa-label--error" : ""}`}
        htmlFor={`input-type-text-${id}`}
      >
        {label}
        {required && <span style={{ color: "#E51C3E" }}>*</span>}
      </label>
      {inputError && (
        <span
          className="usa-error-message"
          id="input-error-message"
          role="alert"
        >
          {errorMessage}
        </span>
      )}
      <div
        className={`usa-input-group${
          inputError ? " usa-input-group--error" : ""
        }${inputSuccess ? " usa-input--success" : ""}${
          focused ? " usa-focus" : ""
        }`}
      >
        {prefix && (
          <span className="usa-input-prefix" aria-hidden="true">
            {prefix}
          </span>
        )}
        <input
          aria-describedby={`${inputError ? "input-error-message" : ""}`}
          className={`usa-input`}
          id={`input-type-text-${id}`}
          name={fieldName}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          required={required}
          value={inputValue}
          {...rest}
        />
        {suffix && (
          <span className="usa-input-suffix" aria-hidden="true">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};
