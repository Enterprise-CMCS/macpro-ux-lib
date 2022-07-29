import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox } from "./Checkbox";
import { TextArea } from "../TextArea/TextArea";

export default {
  title: "USWDS/Base/Checkbox",
  component: Checkbox,
  argTypes: {
    id: {
      description: "A unique identifier for the input.",
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
  args: {
    checked: false,
    isTile: false,
    tileDescription: "",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ ...rest }) => (
  <Checkbox {...rest} />
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-item-default",
  label: "Checkbox Item",
  name: "checkbox",
  value: "checkbox-item",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox-item-disabled",
  label: "Checkbox Item",
  name: "checkbox",
  value: "checkbox-item",
  disabled: true,
};

export const Child = Template.bind({});
Child.args = {
  checked: true,
  id: "checkbox-item-child",
  label: "Checkbox Item",
  name: "checkbox",
  value: "checkbox-item",
  children: [<TextArea label="Text input label" fieldName="text-input" />],
};

export const Children = Template.bind({});
Children.args = {
  checked: true,
  id: "checkbox-item-child",
  label: "Checkbox Item",
  name: "checkbox",
  value: "checkbox-item",
  children: [
    <Checkbox
      checked={true}
      id="checkbox-item-child-1"
      label="Checkbox Item"
      name="checkbox-child"
      children={[
        <TextArea label="Text input label" fieldName="text-input-label" />,
      ]}
    />,
    <Checkbox
      checked={true}
      id="checkbox-item-child-2"
      label="Checkbox Item"
      name="checkbox-child"
      children={[
        <TextArea label="Text input label" fieldName="text-input-label" />,
        <Checkbox
          checked={true}
          id="checkbox-item-child-3"
          label="Checkbox Item"
          name="checkbox-child"
          children={[
            <TextArea label="Text input label" fieldName="text-input-label" />,
          ]}
        />,
      ]}
    />,
  ],
};

export const Tile = Template.bind({});
Tile.args = {
  id: "check-tile",
  isTile: true,
  label: "Checkbox Item",
  name: "check-tile-0",
  value: "tile",
};

export const InactiveTitle = Template.bind({});
InactiveTitle.args = {
  disabled: true,
  id: "check-tile",
  isTile: true,
  label: "Checkbox Item",
  name: "check-tile-0",
  value: "tile",
};

export const TileWithDescription = Template.bind({});
TileWithDescription.args = {
  id: "check-tile-description",
  isTile: true,
  label: "Checkbox Item",
  name: "check-tile-desc-0",
  value: "tile-children",
  tileDescription:
    "This is optional text that can be used to describe the label in more detail.",
};

export const InactiveTileWithDescription = Template.bind({});
InactiveTileWithDescription.args = {
  disabled: true,
  id: "check-tile-description",
  isTile: true,
  label: "Checkbox Item",
  name: "check-tile-desc-0",
  value: "tile-children",
  tileDescription:
    "This is optional text that can be used to describe the label in more detail.",
};
