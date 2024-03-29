import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox } from "./Checkbox";
import { TextArea } from "../TextArea/TextArea";

export default {
  title: "COMPONENTS/Checkbox",
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
    disabled: false,
    isTile: false,
    label: "Checkbox Item",
    tileDescription: "",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ ...rest }) => (
  <Checkbox {...rest} />
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-item-default",
  name: "checkbox",
  value: "checkbox-item",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox-item-disabled",
  name: "checkbox",
  value: "checkbox-item",
  disabled: true,
};

export const Child = Template.bind({});
Child.args = {
  checked: true,
  id: "checkbox-item-child",
  name: "checkbox",
  value: "checkbox-item",
  children: [
    <TextArea
      key="text-input-1"
      id="test-input-1"
      label="Text input label"
      fieldName="text-input"
    />,
  ],
};

export const MultipleChildren = Template.bind({});
MultipleChildren.args = {
  checked: true,
  id: "checkbox-item",
  name: "checkbox",
  value: "checkbox-item",
  children: [
    <Checkbox
      checked={true}
      id="checkbox-item-child-1"
      label="Child 1"
      name="checkbox-children"
      value="child-1"
      children={[
        <TextArea
          id="test-input-2"
          key="test-input-2"
          label="Child 1's TextArea"
          fieldName="child-1-textArea"
        />,
      ]}
    />,
    <Checkbox
      checked={true}
      id="checkbox-item-child-2"
      label="Child 2"
      name="checkbox-children"
      value="child-2"
      children={[
        <TextArea
          id="test-input-3"
          key="test-input-3"
          label="Child 2's TextArea"
          fieldName="child-2-textArea"
        />,
        <Checkbox
          checked={true}
          id="checkbox-item-child-3"
          key="checkbox-item-child-3"
          label="Child 2's Child"
          name="second-child"
          value="child-2-child"
          children={[
            <TextArea
              key="test-input-4"
              id="test-input-4"
              label="Child 2's Child TextArea"
              fieldName="child-2-child-textArea"
            />,
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
  name: "check-tile-0",
  value: "tile",
};

export const InactiveTitle = Template.bind({});
InactiveTitle.args = {
  disabled: true,
  id: "check-tile",
  isTile: true,
  name: "check-tile-0",
  value: "tile",
};

export const TileWithDescription = Template.bind({});
TileWithDescription.args = {
  id: "check-tile-description",
  isTile: true,
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
  name: "check-tile-desc-0",
  value: "tile-children",
  tileDescription:
    "This is optional text that can be used to describe the label in more detail.",
};
