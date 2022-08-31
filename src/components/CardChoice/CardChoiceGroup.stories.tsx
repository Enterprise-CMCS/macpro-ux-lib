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
  component: CardChoiceGroup,
  args: {
    children,
  },
  argTypes: {
    alternatingBG: {
      description:
        "`CardChoice` children are displayed with an alternating background color. The darkBG property on an individual CardChoice will override this property.",
    },
    bordered: {
      description:
        "All `CardChoice` children are displayed with a gray border. The bordered property on an individual CardChoice will override this property.",
    },
    children: {
      description: "`CardChoice` children to be rendered.",
      control: false,
    },
  },
} as ComponentMeta<typeof CardChoiceGroup>;

const Template: ComponentStory<typeof CardChoiceGroup> = ({ ...rest }) => (
  <CardChoiceGroup {...rest} />
);

export const Default = Template.bind({});
Default.args = {};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const Alternating = Template.bind({});
Alternating.args = {
  alternatingBG: true,
};
