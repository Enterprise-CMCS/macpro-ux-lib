import React, { useEffect, useState } from "react";
/* istanbul ignore file */
// Ignoring this file from testing as we are going to be deleting/not using these functions
export const generateId = (digits: number = 6): number => {
  return Math.trunc(Math.random() * Math.pow(10, digits));
};

// Regex
export const completeDateFilter = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/);
export const numbersAndSlashesFilter = new RegExp(/^[0-9/]+$/);

export const daysInMonth = (month: number, year: number): number => {
  switch (month) {
    case 2:
      return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
    case 9:
    case 4:
    case 6:
    case 11:
      return 30;
    default:
      return 31;
  }
};

export const checkValidMonthDays = (
  month: number,
  year: number,
  day: number
): boolean => {
  return (
    month > 0 &&
    month <= 12 &&
    daysInMonth(month, year) >= day &&
    day > 0 &&
    year > 1900
  );
};

export const splitDateIntoVariables = (date: string): string[] => {
  return date ? date.split("/") : [];
};

export const convertFileSize = (fileSize: number) => {
  if (fileSize < 1030000) {
    return `${Math.ceil(fileSize / 1000)}KB`;
  } else {
    return `${Math.ceil(fileSize / 1030000)}MB`;
  }
};

export const defaultAccepetedFileTypes = {
  "image/*": [".png", ".gif", ".jpeg", ".jpg", ".svg"],
  "text/html": [".html", ".htm"],
  "application/pdf": [".pdf"],
  "application/doc": [".doc"],
  "application/docx": [".docx"],
  "application/xlsx": [".xlsx"],
};
