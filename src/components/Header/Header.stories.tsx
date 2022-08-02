import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "USWDS/Base/Header",
  component: Header,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...rest }) => (
  <Header {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
