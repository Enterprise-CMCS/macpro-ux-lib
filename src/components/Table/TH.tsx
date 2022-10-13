import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["th"];

interface Props extends IntrinsicElements {
  dataSortable?: boolean;
  sorted?: boolean;
  rowHeader?: boolean;
}

/**
 *  **TH Component**
 *
 * @param {React.Node}  children      Contents to be rendered inside `<th>`.
 * @param {boolean}     dataSortable  String value to be used when sorting the contents of this cell. If a dataSortValue is not provided, sort defaults to contents of the cell. (Ex: Dates should be converted to seconds or some other comparable value)
 * @param {string}      role          Sets the role prop. Defaults to "columnheader".
 * @param {boolean}     rowHeader     Boolean value that sets both role and scope to be "rowheader" and "row" respectively.
 * @param {string}      scope         Sets the scope prop. Defaults to "col".
 * @param {boolean}     sorted        Requires dataSortable. Sorts the row and applies sorted styling on component render.
 */
export const TH: React.FC<PropsWithChildren<Props>> = ({
  children,
  dataSortable,
  role,
  rowHeader,
  scope,
  sorted,
  ...rest
}) => {
  const thScope: string = scope ?? (rowHeader ? "row" : "col");
  const thRole: string = role ?? (rowHeader ? "rowheader" : "columnheader");
  return (
    <th
      aria-sort={sorted ? "descending" : undefined}
      data-sortable={dataSortable}
      role={thRole}
      scope={thScope}
      {...rest}
    >
      {children}
    </th>
  );
};
