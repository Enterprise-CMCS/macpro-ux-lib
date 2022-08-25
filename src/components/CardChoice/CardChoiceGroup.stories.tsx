import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardChoice } from "./CardChoice";
import { CardChoiceGroup } from "./CardChoiceGroup";

const children = [
  <CardChoice
    actionText="Select"
    href=""
    key="card-1"
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
  </CardChoice>,
  <CardChoice
    href=""
    key="card-2"
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
  </CardChoice>,
  <CardChoice
    actionText="Select"
    href=""
    key="card-3"
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
  </CardChoice>,
  <CardChoice
    actionText="Select"
    href=""
    key="card-4"
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
  </CardChoice>,
];

export default {
  title: "COMPONENTS/CardChoice/CardChoiceGroup",
  component: CardChoice,
  argTypes: {},
  args: {
    children,
  },
} as ComponentMeta<typeof CardChoiceGroup>;

const Template: ComponentStory<typeof CardChoiceGroup> = ({ ...rest }) => (
  <CardChoiceGroup {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
