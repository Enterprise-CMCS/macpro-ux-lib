import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "USWDS/Base/Checkbox",
  component: Checkbox,
  argTypes: {
    isTile: {
      description: "Show the tile variation of the Checkbox.",
    },
    label: {
      description: "The label text that appears to the right of the Checkbox.",
    },
    tileDescription: {
      description:
        "Optional text that can be used to describe the label in more detail. Activates the tile variation automatically.",
    },
    value: {
      description: `Optional value attribute that will be sent to the server on form submit. If not provided, the value will be set to "on" by default.`,
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
