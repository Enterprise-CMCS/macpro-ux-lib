import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";

export default {
  title: "USWDS/Base/Dropdown",
  component: Dropdown,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ ...rest }) => (
  <Dropdown {...rest} />
);

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {};
