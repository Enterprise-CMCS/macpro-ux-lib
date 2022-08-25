import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardChoice } from "./CardChoice";

export default {
  title: "COMPONENTS/CardChoice/CardChoice",
  component: CardChoice,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CardChoice>;

const Template: ComponentStory<typeof CardChoice> = ({ ...rest }) => (
  <CardChoice />
);

export const Default = Template.bind({});
Default.args = {};
