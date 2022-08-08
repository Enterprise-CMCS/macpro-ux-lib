import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Radio } from "./Radio";

export default {
  title: "USWDS/Base/Radio",
  component: Radio,
  argTypes: {
    id: {
      description: "A unique identifier for the input.",
    },
    isTile: {
      description: "Use the tile variation of the Radio.",
    },
    label: {
      description: "Label text that appears to the right of the Radio.",
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
  args: {
    disabled: false,
    isTile: false,
    label: "Radio Item",
    tileDescription: "",
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({ ...rest }) => (
  <Radio {...rest} />
);

export const Default = Template.bind({});
Default.args = {
  id: "radio-default-1",
  name: "radio-default",
  value: "radio-default-1",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "radio-disabled-1",
  name: "radio-disabled",
  value: "radio-disabled-1",
  disabled: true,
};

export const Tile = Template.bind({});
Tile.args = {
  id: "radio-tile-1",
  isTile: true,
  name: "radio-tile",
  tileDescription: "This is a tile description.",
  value: "radio-tile-1",
};
