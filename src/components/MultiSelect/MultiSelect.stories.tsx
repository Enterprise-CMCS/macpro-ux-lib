import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";

export default {
  title: "COMPONENTS/MultiSelect",
  component: MultiSelect,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = ({ ...rest }) => (
  <MultiSelect {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
