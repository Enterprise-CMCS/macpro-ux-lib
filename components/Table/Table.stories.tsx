import React, { useDebugValue } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "./Table";
import {
  BasicTableChildren,
  ScrollableTableChildren,
  StackedTableChildren,
  SortableTableChildren,
} from "./TableChildren";

export default {
  title: "COMPONENTS/Table",
  component: Table,
  args: { id: "standard-table" },
  argTypes: {
    borderless: {
      description:
        "Removes the outer table borders, retaining only a single bottom border on each row. Best for tables with more text than numbers.",
    },
    caption: {
      description:
        "Descriptive text information to be displayed above the table.",
    },
    children: {
      description:
        "Table content to be provided as children. Can use all standard HTML table elements (thead, tbody, tr, etc.). `TH` and `TD` are provided components that have some additional functionality.",
      control: false,
    },
    compact: {
      description:
        "Reduces the row height and vertical spacing to display more table rows within a limited space. Should only be used with dense, numerical data, not text content. Pairs well with scrollable and striped variants, but is not suitable for use with stacked variants.",
    },
    footnote: {
      description:
        "Descriptive text information to be displayed below the table.",
    },
    id: { description: "Unique identifier required for the Table." },
    scrollable: {
      description:
        "Applies a horizontal scrollbar if the columns exceed the available width. Ideal for dense tables with many columns.",
    },
    stacked: {
      description:
        "Stacks the table cells on narrow screens. Ideal for tables that contain more text information than numerical data. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.",
    },
    stackedHeader: {
      description:
        "Stacks the table cells on narrow screens and visually promotes the first cell of every row into a “header” for that group. Preferred for directories and other lists where the first cell of every row is a name. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.",
    },
    striped: {
      description:
        "Applies alternating horizontal striping to help the eye track across table rows. Pairs well with the scrollable variant for tables with many columns.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A table shows information in columns and rows.\n\nTables help logically organize information and group like things together, and they make it easier to understand complex content. They're especially useful for showing long lists of sequential or structured content. Users read tables one row or column at a time, making it easy to digest and compare information.",
      },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = ({ children, ...rest }) => (
  <Table {...rest}>{children}</Table>
);

export const BorderlessTable = Template.bind({});
BorderlessTable.args = {
  borderless: true,
  caption:
    "Borderless table: A borderless table can be useful when you want the information to feel more a part of the text it accompanies and extends.",
  children: BasicTableChildren,
};

export const ScrollableTable = Template.bind({});
ScrollableTable.args = {
  caption: "Scrollable table",
  children: ScrollableTableChildren,
  footnote: "* in billions of dollars. Data for illustration purposes only.",
  scrollable: true,
};

export const StackedTable = Template.bind({});
StackedTable.args = {
  caption: "Stacked table",
  children: StackedTableChildren,
  stacked: true,
};

export const SortableTable = Template.bind({});
SortableTable.args = {
  caption: "Recently admitted US states (sortable table example)",
  children: SortableTableChildren,
};
