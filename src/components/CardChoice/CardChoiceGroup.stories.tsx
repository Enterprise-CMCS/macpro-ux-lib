import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardChoice } from "./CardChoice";
import { CardChoiceGroup } from "./CardChoiceGroup";

const children = [
  <CardChoice
    actionText="Select"
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    href=""
    key="card-1"
  >
    <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
  </CardChoice>,
  <CardChoice
    actionText="Click Me"
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    href=""
    key="card-2"
  >
    <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
    <p>Praesent sem mauris, sollicitudin ut interdum nec, auctor a nunc.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </CardChoice>,
  <CardChoice
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    href=""
    key="card-3"
  >
    <p>Aliquam pharetra amet vitae sed tempus turpis.</p>
  </CardChoice>,
  <CardChoice
    actionText="Select"
    headingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    href=""
    key="card-4"
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
