import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import data from "./data.json";

export default {
  title: "COMPONENTS/Dropdown",
  component: Dropdown,
  args: {
    data: data,
  },
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ ...rest }) => (
  <Dropdown {...rest} />
);

export const Default = Template.bind({});

Default.args = {
  label: "Select a fruit",
  id: "fruit",
  name: "fruit",
};
