import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["td"];

export interface TDProps extends IntrinsicElements {
  dataSortValue?: string;
}

/**
 *  **TD Component**
 *
 * @param {React.Node}  children       Contents to be rendered inside `<td>`.
 * @param {string}      dataSortValue  String value to be used when sorting the contents of this cell. If a dataSortValue is not provided, sort defaults to contents of the cell. (Ex: Dates should be converted to seconds or some other comparable value)
 */
export const TD: React.FC<PropsWithChildren<Props>> = ({
  children,
  dataSortValue,
  ...rest
}) => {
  return (
    <td data-sort-value={dataSortValue} {...rest}>
      {children}
    </td>
  );
};
