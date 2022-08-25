import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardChoice } from "./CardChoice";
import { CardChoiceGroup } from "./CardChoiceGroup";

export default {
  title: "COMPONENTS/CardChoice/CardChoiceGroup",
  component: CardChoice,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CardChoiceGroup>;

const Template: ComponentStory<typeof CardChoiceGroup> = ({ ...rest }) => (
  <CardChoiceGroup>
    <CardChoice bordered />
    <CardChoice bordered />
    <CardChoice />
    <CardChoice darkBG />
    <CardChoice />
  </CardChoiceGroup>
);

export const Default = Template.bind({});
Default.args = {};
