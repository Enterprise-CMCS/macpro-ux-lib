import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "./Table";

export default {
  title: "COMPONENTS/Table",
  component: Table,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = ({ ...rest }) => (
  <Table {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
