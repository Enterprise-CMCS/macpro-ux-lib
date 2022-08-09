import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { TextArea } from "../TextArea/TextArea";

export default {
  title: "USWDS/Base/RadioGroup",
  component: RadioGroup,
  argTypes: {
    groupName: {
      description:
        "Name of the radio group. This name automatically propagates to each Radio component in a RadioGroup.",
    },
    radioProps: {
      description:
        "An array of Radio component properties. See the Radio component for a complete list.",
    },
  },
  args: {
    groupName: "default-group",
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = ({ ...rest }) => (
  <RadioGroup {...rest} />
);

const childTextArea = [
  <TextArea
    fieldName="child-textarea"
    id="child-textarea"
    label="Child TextArea"
  />,
];

const children = [
  <RadioGroup
    groupName="children"
    radioProps={[
      {
        id: "child-1",
        value: "child-1",
        label: "Child 1",
        children: [
          <TextArea
            fieldName="child-textarea"
            id="child-textarea"
            label="Child 1 TextArea"
          />,
          <RadioGroup
            groupName="child-1-children"
            radioProps={[
              {
                id: "child-1-child-1",
                value: "child-1-child-1",
                label: "Child 1 Child 1",
                children: [
                  <TextArea
                    fieldName="child-1-child-textarea"
                    id="child-1-child-textarea"
                    label="Child 1 Child 1 TextArea"
                  />,
                ],
              },
              {
                id: "child-1-child-2",
                value: "child-1-child-2",
                label: "Child 1 Child 2",
              },
            ]}
          />,
        ],
      },
      {
        id: "child-2",
        value: "child-2",
        label: "Child 2",
        children: [
          <TextArea
            fieldName="child-textarea"
            id="child-textarea"
            label="Child 2 TextArea"
          />,
        ],
      },
    ]}
  />,
];

export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  groupName: "default-group",
  radioProps: [
    { id: "radio-1", value: "radio-1", label: "Radio 1" },
    { id: "radio-2", value: "radio-2", label: "Radio 2" },
  ],
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  groupName: "with-children",
  radioProps: [
    {
      id: "with-children-1",
      value: "with-children-1",
      label: "Radio 1",
      children,
    },
    {
      id: "with-children-2",
      value: "with-children-2",
      label: "Radio 2",
      children: [
        <p>A child may be any JSX element.</p>,
        <TextArea
          fieldName="with-children-2-textarea"
          id="with-children-2-textarea"
          label="Radio 2 TextArea"
        />,
      ],
    },
  ],
};
WithChildren.parameters = {
  docs: {
    description: {
      story:
        "Children are passed as an array of JSX elements to the parent Radio's `radioProps`. When passing Radio components as children, ensure they are wrapped in their own RadioGroup component (with a unique `name`) to capture state and correctly show/hide any children they may have. Children of children may also be passed this way in order to have a hirarchy several levels deep. See the code example below.",
    },
  },
};

export const Tile = Template.bind({});
Tile.args = {
  groupName: "tile-group",
  radioProps: [
    {
      id: "tile-radio-1",
      value: "tile-radio-1",
      label: "Radio 1",
      isTile: true,
    },
    {
      id: "tile-radio-2",
      value: "tile-radio-2",
      label: "Radio 2",
      isTile: true,
    },
  ],
};

export const TileWithDescription = Template.bind({});
TileWithDescription.args = {
  groupName: "tile-desc-group",
  radioProps: [
    {
      id: "tile-desc-radio-1",
      value: "tile-desc-radio-1",
      label: "Radio 1",
      isTile: true,
      tileDescription: "Radio 1 tile description.",
    },
    {
      id: "tile-desc-radio-2",
      value: "tile-desc-radio-2",
      label: "Radio 2",
      isTile: true,
      tileDescription: "Radio 2 tile description.",
    },
  ],
};
