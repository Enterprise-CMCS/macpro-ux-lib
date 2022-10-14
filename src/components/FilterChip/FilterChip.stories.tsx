import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterChip } from "./FilterChip";

export default {
  title: "COMPONENTS/FilterChip",
  component: FilterChip,
  args: {
    text: "Non cras.",
  },
  argTypes: {},
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = ({ ...rest }) => (
  <FilterChip {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
