import React, { PropsWithChildren, useLayoutEffect, useRef } from "react";

// const table = require("@uswds/uswds/packages/usa-table/src");
const table = require("../../../node_modules/@uswds/uswds/packages/usa-table/src");

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
 * @param {string}    id  Unique identifier required for each Accordion item used for form control.
 */
export const Table: React.FC<PropsWithChildren<Props>> = ({
  borderless,
  caption,
  children,
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
    const component = componentRef.current;
    table.on(component);
    return () => table.off(component);
  });

  const tableClassNames = `usa-table${
    borderless ? " usa-table--borderless" : ""
  }${compact ? " usa-table--compact" : ""}${
    stacked ? ` usa-table--stacked${stackedHeader ? "-header" : ""}` : ""
  }${striped ? " usa-table--striped" : ""}`;

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
