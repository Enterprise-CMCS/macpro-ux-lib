import React, { PropsWithChildren } from "react";

type IntrinsicElements = JSX.IntrinsicElements["td"];

interface Props extends IntrinsicElements {
  dataSortValue?: string;
  fontMono?: boolean;
}

export const TD: React.FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
  dataSortValue,
  fontMono,
  ...rest
}) => {
  return (
    <td className={className} data-sort-value={dataSortValue} {...rest}>
      {children}
    </td>
  );
};
