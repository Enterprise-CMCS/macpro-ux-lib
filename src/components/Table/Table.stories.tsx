import React, { useDebugValue } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "./Table";
import data from "./data.json";

export default {
  title: "COMPONENTS/Table",
  component: Table,
  args: {
    caption:
      "Standard Table: A commonly used table with many features and functionality",
    data: data["standardTable"],
  },
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = ({ ...rest }) => (
  <Table {...rest} />
);

export const StandardTable = Template.bind({});
StandardTable.args = {};

export const BorderlessTable = Template.bind({});
BorderlessTable.args = {
  borderless: true,
  data: data["standardTable"],
  caption:
    "Borderless table: A borderless table can be useful when you want the information to feel more a part of the text it accompanies and extends.",
};

export const ScrollableTable = Template.bind({});
ScrollableTable.args = {
  data: data["scrollableTable"],
  footnote: "* in billions of dollars. Data for illustration purposes only.",
  scrollable: true,
};

export const SortableTable = Template.bind({});
SortableTable.args = {
  caption: "Recently admitted US states (sortable table example)",
  data: data["sortableTable"],
};
