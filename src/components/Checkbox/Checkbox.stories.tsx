import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "USWDS/Base/Checkbox",
  component: Checkbox,
  argTypes: {
    id: {
      description: " unique identifier for the input.",
    },
    isTile: {
      description: "Use the tile variation of the Checkbox.",
    },
    label: {
      description: "Label text that appears to the right of the Checkbox.",
    },
    name: {
      description: "Name of the input element.",
    },
    tileDescription: {
      description:
        "Text that can be used to describe the label in more detail. Activates the tile variation automatically.",
    },
    value: {
      description: "Value of the input element.",
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "check-historical-truth",
  label: "Sojourner Truth",
  name: "historical-figures",
  value: "sojourner-truth",
};

export const Tile = Template.bind({});
Tile.args = {
  id: "check-historical-truth-2",
  isTile: true,
  label: "Sojourner Truth",
  name: "historical-figures-2",
  value: "sojourner-truth",
  tileDescription:
    "This is optional text that can be used to describe the label in more detail.",
};
