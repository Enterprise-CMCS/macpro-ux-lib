import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Radio } from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    id: {
      description:
        "A unique identifier for the input which must be unique in the whole document. Its purpose is to identify the element when linking. The value is used as the value of the `<label>`'s `for` attribute to link the label with the form control.",
    },
    isTile: {
      description: "Use the tile variation of the Radio.",
    },
    label: {
      description: "Label text that appears to the right of the Radio.",
    },
    name: {
      description:
        "Name of the input element. Radio components are grouped together by `name`.",
    },
    tileDescription: {
      description:
        "Text that can be used to describe the label in more detail. Appears only when `isTile` is set to `true`.",
    },
    value: {
      description:
        "Value of the input element. If you omit the value attribute, the submitted form data assigns the value `on` to the group. For example, if the user clicked on a \"Phone\" option in a Radio grop named `contact` with no `value` set, the resulting form data after submission would be `contact=on`, which isn't helpful. So don't forget to set your value attributes!",
      if: { arg: "isTile" },
    },
  },
  args: {
    disabled: false,
    isTile: false,
    label: "Radio Item",
    tileDescription: "",
  },
  parameters: {
    docs: {
      description: {
        component:
          "A single Radio component, with default and tile variations. Two or more Radio components may be contained in a RadioGroup component in order to manage selected state and show/hide any provided children. See the RadioGroup component for more information.",
      },
    },
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
  value: "radio-tile-1",
};

export const TileWithDescription = Template.bind({});
TileWithDescription.args = {
  id: "radio-desc-tile-1",
  isTile: true,
  name: "radio-tile-desc",
  tileDescription: "This is a tile description.",
  value: "radio-desc-tile-1",
};

export const DisabledTile = Template.bind({});
DisabledTile.args = {
  id: "radio-desc-tile-disabled",
  isTile: true,
  disabled: true,
  tileDescription: "This is a tile description.",
  value: "radio-desc-tile-disabled",
};
