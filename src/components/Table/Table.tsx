import React, { PropsWithChildren, useLayoutEffect, useRef } from "react";

import table from "@uswds/uswds/packages/usa-table/src";

type IntrinsicElements = JSX.IntrinsicElements["table"];

interface Props extends IntrinsicElements {
  borderless?: boolean;
  caption?: string;
  compact?: boolean;
  footnote?: string;
  scrollable?: boolean;
  stacked?: boolean;
  stackedHeader?: boolean;
  striped?: boolean;
}

/**
 * **Table Component**
 *
 * ```HTML
 * <Table>
 *   <thead>
 *     <tr>
 *       <TH>Header</TH>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <TD>Content</TD>
 *     </tr>
 *   </tbody>
 * </Table>
 * ```
 *
 * @param {boolean}     [borderless]      Removes the outer table borders, retaining only a single bottom border on each row. Best for tables with more text than numbers.
 * @param {string}      [caption]         Descriptive text information to be displayed above the table.
 * @param {React.Node}  [children]        Table content to be provided as children. Can use all standard HTML table elements (thead, tbody, tr, etc.). `TH` and `TD` are provided components that have some additional functionality.
 * @param {boolean}     [compact]         Reduces the row height and vertical spacing to display more table rows within a limited space. Should only be used with dense, numerical data, not text content. Pairs well with scrollable and striped variants, but is not suitable for use with stacked variants.
 * @param {string}      [footnote]        Descriptive text information to be displayed below the table.
 * @param {string}      id                Unique identifier required for the Table.
 * @param {boolean}     [scrollable]      Applies a horizontal scrollbar if the columns exceed the available width. Ideal for dense tables with many columns.
 * @param {boolean}     [stacked]         Stacks the table cells on narrow screens. Ideal for tables that contain more text information than numerical data. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
 * @param {boolean}     [stackedHeader]   Stacks the table cells on narrow screens and visually promotes the first cell of every row into a “header” for that group. Preferred for directories and other lists where the first cell of every row is a name. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
 * @param {boolean}     [striped]         Applies alternating horizontal striping to help the eye track across table rows. Pairs well with the scrollable variant for tables with many columns.
 */
export const Table: React.FC<PropsWithChildren<Props>> = ({
  borderless,
  caption,
  children,
  className,
  compact,
  footnote,
  id,
  scrollable,
  stacked,
  stackedHeader,
  striped,
  ...rest
}) => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof table.on === "function" && typeof table.off === "function") {
      const component = componentRef.current;
      table.off(component);
      table.on(component);
      return () => table.off(component);
    }
  }, [table]);

  const tableClassNames = `usa-table${
    borderless ? " usa-table--borderless" : ""
  }${compact ? " usa-table--compact" : ""}${
    stacked ? ` usa-table--stacked${stackedHeader ? "-header" : ""}` : ""
  }${striped ? " usa-table--striped" : ""}${className ? ` ${className}` : ""}`;

  return (
    <div
      ref={componentRef}
      className={`usa-table-container${
        scrollable ? " usa-table-container--scrollable" : ""
      }${stacked ? " width-mobile" : ""}`}
      tabIndex={0}
    >
      <table className={tableClassNames} {...rest}>
        {caption && <caption>{caption}</caption>}
        {children}
      </table>
      <div
        className="usa-sr-only usa-table__announcement-region"
        aria-live="polite"
      ></div>
      {footnote && (
        <p className="margin-bottom-3 usa-table__footnote">{footnote}</p>
      )}
    </div>
  );
};
