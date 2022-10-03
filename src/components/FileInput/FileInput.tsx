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
    });

  return (
    <div className="usa-form-group" {...getRootProps()} {...rest}>
      <label className="usa-label" htmlFor={id}>
        {label}
      </label>
      <div>
        {hintText && <span className="usa-hint"> {hintText}</span>}
        {showMaxSize && (
          <span className="usa-hint">
            Maximum file size of {convertFileSize(maxSize)}
          </span>
        )}
      </div>
      <div className={`dropzone${files.length ? " files-uploaded" : ""}`}>
        <div className="usa-file-input__instructions" aria-hidden="true">
          {files.length === 0 ? (
            <>
              <span className="usa-file-input__drag-text">
                Drag files here or{" "}
              </span>
              <span className="usa-file-input__choose">choose from folder</span>
            </>
          ) : (
            <div className="flex-row">
              <div className="">
                {files.length > 1
                  ? `${files.length} files selected`
                  : "Selected File"}
              </div>
              <div className="underline">choose from folder</div>
            </div>
          )}
        </div>
        <input
          id={id}
          className="usa-file-input"
          type="file"
          name={name}
          multiple={multipleFiles}
          disabled={disabled}
          onChange={(e) => {
            console.log(e);
            // setFile(e);
          }}
          {...getInputProps()}
          {...rest}
        />
        {fileRejections.map((erroredFile, index) => (
          <div className="file" key={index}>
            {erroredFile.file.name}:{" "}
            {erroredFile.errors[0].message.replace(
              /[0-9]* bytes/g,
              convertFileSize(maxSize)
            )}
          </div>
        ))}
        {files.map((file: File, index: number) => {
          return (
            <div className="file" key={index}>
              {file.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
