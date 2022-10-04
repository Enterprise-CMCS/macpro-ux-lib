import React, { useState } from "react";

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

  const [tableData, setTableData] = useState(data);
  const [tableSortedBy, setTableSortedBy] =
    useState<number | undefined>(undefined);

  const tableClassNames = `usa-table${
    borderless ? " usa-table--borderless" : ""
  }${compact ? " usa-table--compact" : ""}${
    stacked ? ` usa-table--stacked${stackedHeader ? "-header" : ""}` : ""
  }${striped ? " usa-table--striped" : ""}`;

  const sortTableData = (index: number) => {
    const rows = tableData.body;

    // if currently sorted by this column, reverse the sorted order
    if (tableSortedBy === index) {
      rows.reverse();
      return setTableData({ ...tableData, body: rows });
    }

    // validate all values in column are the same type
    const typeSet = new Set(rows.map((row: any) => row[index]?.type));
    if (typeSet.size > 1) {
      console.log(
        "Error: All values in a sortable column must be of the same type."
      );
      return;
    }
    const type = typeSet.values().next().value;

    // sort rows based on the type of data in selected column
    rows.sort((rowA: any, rowB: any) => {
      const value_a = rowA[index].sortValue ?? rowA[index].value;
      const value_b = rowB[index].sortValue ?? rowB[index].value;

      if (!type || type === "string") {
        return value_a.localeCompare(value_b);
      } else if (type === "number") {
        return parseFloat(value_a) - parseFloat(value_b);
      } else if (type === "date") {
        const date_a = new Date(value_a);
        const date_b = new Date(value_b);
        return date_a.getTime() - date_b.getTime();
      }
    });

    setTableData({ ...tableData, body: rows });
    setTableSortedBy(index);
  };

  const buildRow = (row: any, rowIndex: number, header?: boolean) => {
    return (
      <tr key={`${id}-table${header ? "-header-" : ""}-row-${rowIndex}`}>
        {row.map((cell: any, idx: number) => {
          return header ? (
            <th
              scope="col"
              key={`${id}-column-header-${idx}`}
              {...cell.props}
              onClick={() => sortTableData(idx)}
            >
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
        {tableData.headers && (
          <thead>
            {tableData.headers.map((row: any, idx: number) =>
              buildRow(row, idx, true)
            )}
          </thead>
        )}
        {tableData.body && (
          <tbody>
            {tableData.body.map((row: any, idx: number) => buildRow(row, idx))}
          </tbody>
        )}
      </table>
      {footnote && <p className="usa-table__footnote">{footnote}</p>}
    </div>
  );
};
