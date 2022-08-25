import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardChoice } from "./CardChoice";

export default {
  title: "COMPONENTS/CardChoice/CardChoice",
  component: CardChoice,
  argTypes: {},
  args: {
    headingText: "This is a CardChoice Component",
    actionText: "Click Me",
    children: [<p>Nothing special. Just a standard UI component.</p>],
  },
} as ComponentMeta<typeof CardChoice>;

const Template: ComponentStory<typeof CardChoice> = ({ ...rest }) => (
  <CardChoice {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
