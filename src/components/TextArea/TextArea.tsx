import React, { forwardRef, useState } from "react";

type TextAreaElements = JSX.IntrinsicElements["textarea"];

interface Props extends TextAreaElements {
  id: string;
  label: string;
  name: string;
  characterCountMessage?: string;
  errorMessage?: string;
  inputError?: boolean;
  inputSuccess?: boolean;
  maxLength?: number;
  required?: boolean;
  showCharacterCount?: boolean;
}

/**
 * TextArea Component
 * @param {string}  id                      A unique identifier that associates the label with the TextArea.
 * @param {string}  label                   Field label text.
 * @param {string}  [name]                  Name of the textarea field. Maps to the standard HTML `name` attribute.
 * @param {string}  [characterCountMessage] Text to be displayed before the character count.
 * @param {string}  [errorMessage]          Error message text displayed when inputError === true.
 * @param {boolean} [inputError]            Triggers error message and error styling.
 * @param {boolean} [inputSuccess]          Trigger success styling.
 * @param {number}  [maxLength]             Maximum number of characters the textarea can receive.
 * @param {boolean} [required]              Adds semantic required attr and appends an * to the end of the input label.
 * @param {boolean} [showCharacterCount]    Show the character count. If maxLength is set, character count will appear as a fraction.
 */

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea({ onChange, ...props }, ref) {
    const {
      id,
      label,
      name,
      characterCountMessage,
      errorMessage,
      inputError = false,
      inputSuccess = false,
      maxLength,
      required = false,
      showCharacterCount = false,
      ...otherProps
    } = props;

    const [charCount, setCharCount] = useState<string>("0");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Execute the parent form's onChange event if it exists:
      if (onChange) {
        onChange(e);
      }

      setCharCount(e.target.value.length.toString());
    };

    return (
      <div
        className={
          "usa-form-group" + (inputError ? " usa-form-group--error" : "")
        }
      >
        <label
          className={"usa-label" + (inputError ? " usa-label--error" : "")}
          htmlFor={id}
        >
          {label}
          {required && <span className="required-star">*</span>}
        </label>

        {inputError && errorMessage && (
          <span className="usa-error-message" role="alert">
            {errorMessage}
          </span>
        )}

        {showCharacterCount && (
          <span className="usa-hint">
            {characterCountMessage ? `${characterCountMessage} ` : ""}
            {charCount}
            {maxLength !== undefined && ` / ${maxLength}`}
          </span>
        )}

        <textarea
          className={
            "usa-textarea" +
            (inputError ? " usa-input-group--error" : "") +
            (inputSuccess ? " usa-input--success" : "")
          }
          id={id}
          maxLength={maxLength}
          name={name}
          onChange={handleChange}
          ref={ref}
          required={required}
          {...otherProps}
        ></textarea>
      </div>
    );
  }
);
