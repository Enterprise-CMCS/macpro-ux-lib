import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["th"];

interface Props extends IntrinsicElements {
  dataSortable?: boolean;
  sorted?: boolean;
  rowHeader?: boolean;
}

export const TH: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
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
      className={className}
      data-sortable={dataSortable}
      role={thRole}
      scope={thScope}
      {...rest}
    >
      {children}
    </th>
  );
};
