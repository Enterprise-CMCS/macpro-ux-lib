import React, { useState } from "react";

type IntrinsicElements = JSX.IntrinsicElements["textarea"];

interface Props extends IntrinsicElements {
  characterCountMessage?: string;
  errorMessage?: string;
  fieldName: string;
  id: string;
  inputError?: boolean;
  inputFilter?: RegExp;
  inputSuccess?: boolean;
  label: string;
  maxLength?: number;
  showCharacterCount?: boolean;
  required?: boolean;
}
/**
 * TextArea Component
 * @param {string}  label                   Field label.
 * @param {string}  fieldName               Name of the input field.
 * @param {string}  id                      A unique identifier for the input.
 * @param {string}  [characterCountMessage] Sets a message preceding the character count when showCharacterCount === true.
 * @param {string}  [errorMessage]          Error message text displayed when inputError === true.
 * @param {boolean} [inputError]            Triggers error message and error styling.
 * @param {RegExp}  [inputFilter]           Used to limit input values. If a RegExp is not provided, all input types are allowed.
 * @param {boolean} [inputSuccess]          Trigger success styling.
 * @param {number}  [maxLength]             Maximum number of characters the textarea can receive.
 * @param {boolean} [showCharacterCount]    Shows the character counter. If maxlength is set, character count is shown as a fraction.
 * @param {boolean} [required]              Adds semantic required attr and appends an * to the end of the input label.
 */
export const TextArea: React.FC<Props> = ({
  label,
  fieldName,
  characterCountMessage,
  errorMessage,
  id,
  inputError = false,
  inputFilter,
  inputSuccess = false,
  maxLength,
  showCharacterCount = false,
  required = false,
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        htmlFor={`input-type-textarea-${id}`}
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
      {showCharacterCount && (
        <span className="usa-hint">
          {characterCountMessage ? `${characterCountMessage} ` : ""}
          {inputValue.length}
          {maxLength !== undefined && ` / ${maxLength}`}
        </span>
      )}
      <textarea
        aria-describedby={`${inputError ? "input-error-message" : ""}`}
        className={`usa-textarea${inputError ? " usa-input-group--error" : ""}${
          inputSuccess ? " usa-input--success" : ""
        }${focused ? " usa-focus" : ""}`}
        id={`input-type-textarea-${id}`}
        maxLength={maxLength}
        name={fieldName}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        required={required}
        value={inputValue}
        {...rest}
      ></textarea>
    </div>
  );
};
