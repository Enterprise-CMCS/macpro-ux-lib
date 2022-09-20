import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "./Alert";

export default {
  title: "COMPONENTS/Alert",
  component: Alert,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ ...rest }) => (
  <Alert {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
