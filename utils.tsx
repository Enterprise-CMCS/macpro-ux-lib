import React, { useEffect, useState } from "react";
/* istanbul ignore file */
// Ignoring this file from testing as we are going to be deleting/not using these functions
export const generateId = (digits: number = 6): number => {
  return Math.trunc(Math.random() * Math.pow(10, digits));
};

// Regex
export const completeDateFilter = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/);
export const numbersAndSlashesFilter = new RegExp(/^[0-9/]+$/);
