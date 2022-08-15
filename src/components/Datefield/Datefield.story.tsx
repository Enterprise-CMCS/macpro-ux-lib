import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Datefield } from "./Datefield";

export default {
  title: "USWDS/Base/Datefield",
  component: Datefield,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Datefield>;

const Template: ComponentStory<typeof Datefield> = ({ ...rest }) => (
  <Datefield {...rest} />
);

export const PrimaryDatefield = Template.bind({});
PrimaryDatefield.args = {};
