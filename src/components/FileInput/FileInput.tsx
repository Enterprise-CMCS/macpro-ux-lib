import React, { useState } from "react";
import { convertFileSize, defaultAccepetedFileTypes } from "../../utils";
import { useDropzone } from "react-dropzone";

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
  disabled,
  ...rest
}) => {
  const [files, setFile] = useState<File[]>([]);
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setFile([...files, ...acceptedFiles]);
    console.log(acceptedFiles);
  }, []);

  // const clearFile = (fileIndexToClear: number) => {
  //   const arrayToFilter = field.value as File[];
  //   const filteredArray = arrayToFilter.filter(
  //     (_, index) => index !== fileIndexToClear
  //   );
  //   field.onChange(filteredArray);
  // };

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: acceptedFileTypes || defaultAccepetedFileTypes,
      maxSize,
      multiple: multipleFiles,
    });

  return (
    <div
      className="usa-form-group grid-col-4 text-center pointer"
      {...getRootProps()}
      {...rest}
    >
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
      <div className={`dropzone${files.length ? " files-uploaded" : ""}`}>
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
        <input
          id={id}
          className="usa-file-input"
          type="file"
          name={name}
          disabled={disabled}
          onChange={(e) => {
            console.log(e);
          }}
          multiple={multipleFiles}
          {...getInputProps()}
          {...rest}
        />
        {fileRejections.map((erroredFile, index) => (
          <div className="file grid-row text-left" key={index}>
            {erroredFile.file.name}:{" "}
            {erroredFile.errors[0].message.replace(
              /[0-9]* bytes/g,
              convertFileSize(maxSize)
            )}
          </div>
        ))}
        {files.map((file: File, index: number) => {
          return (
            <div className="file grid-row flex-align-center" key={index}>
              {file.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
