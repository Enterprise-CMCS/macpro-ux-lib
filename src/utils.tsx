/* istanbul ignore file */
// Ignoring this file from testing as we are going to be deleting/not using these functions

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
