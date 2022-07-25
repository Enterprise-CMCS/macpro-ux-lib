import React, { useEffect, useState } from "react";
// import { generateId } from "utils/generateId";

type IntrinsicElements = JSX.IntrinsicElements["p"];

interface Props extends IntrinsicElements {
  label: string;
  fieldName: string;
  placeholder?: string;
  prefix?: string;
  errorMessage?: string;
  required?: boolean;
  showSuccess?: boolean;
  suffix?: string;
  value?: string;
}
/**
 * TextInput Component
 * @param {string}  label          Field label.
 * @param {string}  fieldName      Name of the input field.
 * @param {string}  [placeholder]  Input field placeholder text.
 * @param {string}  [prefix]       Text to be displayed at the front of input field. Not stored in value. Ex: currency indicator.
 * @param {string}  [errorMessage] Message to be displayed if field is left blank.
 * @param {boolean} [required]     Boolean indicating this information is required.
 * @param {boolean} [showSuccess]  Indicate if success styles should be shown on field completion.
 * @param {string}  [suffix]       Text to be displayed at the end of input field. Not stored in value. Ex: mass indicator (lbs, fl oz)
 * @param {string}  [value]        Optional default input value.
 */
export const TextInput: React.FC<Props> = ({
  label,
  fieldName,
  placeholder,
  prefix,
  errorMessage,
  required = false,
  showSuccess = false,
  suffix,
  value,
  // TODO: Would you ever need the following?
  // - defualt value?
  // - Add a REGEX filter rule?
  // - Numeric input only?
  // - rules for error?
  // - rules for success?
}) => {
  const [inputValue, setInputValue] = useState<string>(value ?? "");
  const [inputError, setInputError] = useState<boolean>(false);
  const [inputSuccess, setInputSuccess] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  // TODO: call from utils - import not working
  const generateId = (digits: number = 6): number => {
    return Math.trunc(Math.random() * Math.pow(10, digits));
  };

  useEffect(() => {
    setId(generateId());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputError(false);
  };

  const handleBlur = () => {
    if (inputValue) {
      setInputSuccess(true);
    } else {
      setInputSuccess(false);
      if (required) setInputError(true);
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
        {required ? "*" : ""}
      </label>
      {required && inputError && (
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
        }${showSuccess && inputSuccess ? " usa-input--success" : ""}`}
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
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          value={inputValue}
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
