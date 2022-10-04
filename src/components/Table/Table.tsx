import React from "react";

type IntrinsicElements = JSX.IntrinsicElements["table"];

interface Props extends IntrinsicElements {
  borderless?: boolean;
  caption?: string;
  compact?: string;
  footnote?: string;
  data: any;
  scrollable?: boolean;
  stacked?: boolean;
  stackedHeader?: boolean;
  striped?: boolean;
}

/**
 * **Table Component**
 *
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const Table: React.FC<Props> = ({
  borderless,
  caption,
  compact,
  footnote,
  data,
  id,
  scrollable,
  stacked,
  stackedHeader,
  striped,
  ...rest
}) => {
  // TODO: is there a way to make this more flexible to
  // support vertical headings and other orientations?

  const tableClassNames = `usa-table${
    borderless ? " usa-table--borderless" : ""
  }${compact ? " usa-table--compact" : ""}${
    stacked ? ` usa-table--stacked${stackedHeader ? "-header" : ""}` : ""
  }${striped ? " usa-table--striped" : ""}`;

  const buildRow = (row: any, header?: boolean) => {
    return (
      <tr>
        {row.map((cell: any, idx: number) => {
          return header ? (
            <th scope="col" key={`${id}-column-header-${idx}`} {...cell.props}>
              {cell.value}
            </th>
          ) : (
            <td
              className="text-tabular"
              key={`${id}-row-cell-${idx}`}
              {...cell.props}
            >
              {cell.value}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div
      className={`${scrollable ? "usa-table-container--scrollable" : ""}${
        stacked ? " width-mobile" : ""
      }`}
      tabIndex={0}
    >
      <table className={tableClassNames} {...rest}>
        {caption && <caption>{caption}</caption>}
        {data.headers && (
          <thead>{data.headers.map((row: any) => buildRow(row, true))}</thead>
        )}
        {data.body.map((row: any) => buildRow(row))}
      </table>
      {footnote && <p className="usa-table__footnote">{footnote}</p>}
    </div>
  );
};
