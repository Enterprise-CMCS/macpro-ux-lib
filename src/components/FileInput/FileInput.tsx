import React, { useLayoutEffect, useRef, useState } from "react";
import { convertFileSize, defaultAccepetedFileTypes } from "../../utils";
const fileInput = require("@uswds/uswds/packages/usa-file-input/src");

type IntrinsicElements = JSX.IntrinsicElements["input"];

interface Props extends IntrinsicElements {
  name: string;
  id: string;
  multipleFiles?: boolean;
  label?: string;
  maxSize?: number;
  acceptedFileTypes?: { [key: string]: string[] };
  showMaxSize?: boolean;
  hintText?: string;
  disabled?: boolean;
}

/**
 * **FileInput Component**
 *
 * @param {string}    id             Unique identifier required for each Accordion item used for form control.
 * @param {string}    multipleFiles  Determines whether the file input can take multiple files.
 * @param {string}    label          String used to label the file input in the UI.
 * @param {string}    name           Name of the file input field.
 *
 */

export const FileInput: React.FC<Props> = ({
  id,
  multipleFiles,
  label,
  maxSize = 82000000,
  name,
  acceptedFileTypes,
  hintText,
  showMaxSize,
  ...rest
}) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const tooltipElement = tooltipRef.current;
    fileInput.on(tooltipElement);
    return () => fileInput.off(tooltipElement);
  });

  const [files, setFile] = useState<File[]>([]);

  return (
    <div className="usa-form-group">
      <label className="usa-label" htmlFor={id}>
        {label}
      </label>
      {(hintText || showMaxSize) && (
        <div>
          {hintText && <span className="usa-hint"> {hintText}</span>}
          {showMaxSize && (
            <span className="usa-hint">
              Maximum file size of {convertFileSize(maxSize)}
            </span>
          )}
        </div>
      )}
      <input
        id={id}
        className="usa-file-input"
        type="file"
        name={name}
        onChange={(e) => {
          console.log(e);
        }}
        multiple={multipleFiles}
        {...rest}
      />
    </div>
  );
};

{
  /* <div className={`dropzone${files.length ? " files-uploaded" : ""}`}>
{files.length === 0 ? (
  <div className="usa-file-input__instructions" aria-hidden="true">
    <span className="usa-file-input__drag-text">
      Drag files here or{" "}
    </span>
    <span className="usa-file-input__choose">choose from folder</span>
  </div>
) : (
  <div className="grid-row padding-1">
    <div className="grid-col text-left text-bold">
      {files.length > 1
        ? `${files.length} files selected`
        : "Selected File"}
    </div>
    <div className="text-underline usa-link text-right grid-col">
      Replace
    </div>
  </div>
)}
</div> */
}
// {fileRejections.map((erroredFile, index) => (
//   <div className="file grid-row text-left" key={index}>
//     {erroredFile.file.name}:{" "}
//     {erroredFile.errors[0].message.replace(
//       /[0-9]* bytes/g,
//       convertFileSize(maxSize)
//     )}
//   </div>
// ))}
// {files.map((file: File, index: number) => {
//   return (
//     <div className="file grid-row flex-align-center" key={index}>
//       {file.name}
//     </div>
//   );
// })}
