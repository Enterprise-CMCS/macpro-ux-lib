import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardChoice } from "./CardChoice";

export default {
  title: "COMPONENTS/CardChoice/CardChoice",
  component: CardChoice,
  args: {
    actionText: "Select",
    bodyText: "Nothing special. Just a standard UI component.",
    headingText: "This is a CardChoice Component",
    href: "",
  },
  argTypes: {
    actionText: {
      description:
        "Optional text prompt to be displayed left of the navigation arrow.",
    },
    bordered: {
      description:
        "Renders a border around the CardChoice. Applying borderd on CardChoice will override the CardChoiceGroup.",
    },
    bodyText: { description: "Text to be rendered in the body." },
    children: {
      description:
        "Children provided will be rendered below the bodyText.\n\n`React.ReactNode`",
    },
    className: {
      description:
        "Additional classes that can be applied to the root element.",
    },
    darkBG: {
      description:
        "Renders the CardChoice with a darker background. Applying darkBG on CardChoice will override the CardChoiceGroup. CardChoiceGroup has an option for alternatingBG.",
    },
    headingText: {
      description:
        "Bolded heading text displayed at the top of the CardChoice.",
    },
    href: { description: "href provided to the Link.", type: "string" },
    onClick: { description: "onClick provided to the Link.", type: "function" },
  },
} as ComponentMeta<typeof CardChoice>;

const Template: ComponentStory<typeof CardChoice> = ({ ...rest }) => (
  <CardChoice {...rest} />
);

export const Default = Template.bind({});
Default.args = {};

export const Bordered = Template.bind({});
Bordered.args = { bordered: true };

export const DarkBackground = Template.bind({});
DarkBackground.args = { darkBG: true };
