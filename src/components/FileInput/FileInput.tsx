import React, { ChangeEventHandler, useLayoutEffect, useRef } from "react";
import fileInput from "../../../node_modules/@uswds/uswds/packages/usa-file-input/src";

type IntrinsicElements = JSX.IntrinsicElements["input"];

export interface FileInputProps extends IntrinsicElements {
  id: string;
  name: string;
  multipleFiles?: boolean;
  label?: string;
  acceptedFileTypes?: string[];
  hintText?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * **FileInput Component**
 *
 * @param {string}    id                  The id to uniquely identify the file input.
 * @param {string}    name                Name of the file input field.
 * @param {boolean}   multipleFiles       Controls if the input accepts multiple files.
 * @param {string}    label               Used to label the file input in the UI.
 * @param {string[]}  acceptedFileTypes   Array of string file types accepeted in this file input.
 * @param {string}    hintText            Text to show to the user as a guide of the type of accepateble files.
 * @param {boolean}   disabled            Controls whether the file input is disabled.
 * @param {boolean}   error               Triggers error message and error styling.
 * @param {string}    errorMessage        Message to show when an error is present.
 * @param {string}    onChange            Function that is called when the File Input changes.
 *
 */

export const FileInput: React.FC<FileInputProps> = ({
  id,
  multipleFiles = false,
  label,
  name,
  error = false,
  errorMessage,
  acceptedFileTypes = [
    ".pdf",
    ".doc",
    ".docx",
    ".xlsx",
    ".jpg",
    ".jpeg",
    ".png",
  ],
  hintText,
  onChange,
  ...rest
}) => {
  const fileInputRef = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const fileInputElement = fileInputRef.current;
    if (typeof fileInput.off === "function") fileInput.off(fileInputElement);
    if (typeof fileInput.on === "function") fileInput.on(fileInputElement);

    return () => {
      if (typeof fileInput.off === "function") fileInput.off(fileInputElement);
    };
  });

  return (
    <div className={`usa-form-group${error ? " usa-form-group--error" : ""}`}>
      <label
        className={`usa-label${error ? " usa-label--error" : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      {(hintText || errorMessage) && (
        <div>
          {hintText && <span className="usa-hint"> {hintText}</span>}
          {errorMessage && (
            <span className="usa-error-message" id="file-input-error-alert">
              {errorMessage}
            </span>
          )}
        </div>
      )}
      <input
        id={id}
        className="usa-file-input"
        type="file"
        name={name}
        multiple={multipleFiles}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
