import React, { forwardRef } from "react";

type InputElements = JSX.IntrinsicElements["input"];

export interface TextInputProps extends InputElements {
  id: string;
  label: string;
  errorMessage?: string;
  inputError?: boolean;
  inputSuccess?: boolean;
  prefix?: string;
  required?: boolean;
  suffix?: string;
}

/**
 * TextInput Component
 * @param {string}  id             A unique identifier for the TextInput.
 * @param {string}  label          Field label text.
 * @param {string}  [errorMessage] Error message text displayed when inputError === true.
 * @param {boolean} [inputError]   Triggers error styling.
 * @param {boolean} [inputSuccess] Trigger success styling.
 * @param {string}  [name]         Name of the input field. Maps to the standard HTML `name` attribute.
 * @param {string}  [prefix]       Text to be displayed at the front of input field. Not stored in value. Ex: currency indicator.
 * @param {boolean} [required]     Adds semantic required attr and appends an * to the end of the input label.
 * @param {string}  [suffix]       Text to be displayed at the end of input field. Not stored in value. Ex: mass indicator (lbs, fl oz)
 */

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(props, ref) {
    const {
      id,
      label,
      errorMessage,
      inputError = false,
      inputSuccess = false,
      prefix,
      required = false,
      suffix,
      ...otherProps
    } = props;

    return (
      <div
        className={
          "usa-form-group " + (inputError ? "usa-form-group--error" : "")
        }
      >
        <label
          className={"usa-label " + (inputError ? "usa-label--error" : "")}
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

        <div
          className={
            "usa-input-group" +
            (inputError ? " usa-input-group--error" : "") +
            (inputSuccess ? " usa-input--success" : "")
          }
        >
          {prefix && (
            <span className="usa-input-prefix" aria-hidden="true">
              {prefix}
            </span>
          )}

          <input className={"usa-input"} id={id} ref={ref} {...otherProps} />

          {suffix && (
            <span className="usa-input-suffix" aria-hidden="true">
              {suffix}
            </span>
          )}
        </div>
      </div>
    );
  }
);
