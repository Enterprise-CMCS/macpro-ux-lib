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
  args: {},
  argTypes: {},
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
