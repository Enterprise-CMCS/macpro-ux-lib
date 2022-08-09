import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { TextArea } from "../TextArea/TextArea";

export default {
  title: "USWDS/Base/RadioGroup",
  component: RadioGroup,
  argTypes: {
    name: {
      description: "Name of the radio group.",
    },
    radioProps: {
      description: "An array of Radio components.",
    },
  },
  args: {
    name: "default-group",
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
        label: "Child 1",
        children: [
          <TextArea
            fieldName="child-textarea"
            id="child-textarea"
            label="Child TextArea"
          />,
        ],
      },
      {
        id: "child-2",
        label: "Child 2",
      },
    ]}
  />,
];

export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  groupName: "default-group",
  radioProps: [
    { id: "radio-1", label: "Radio 1" },
    { id: "radio-2", label: "Radio 2" },
    { id: "radio-3", label: "Radio 3" },
  ],
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  groupName: "with-children",
  radioProps: [
    {
      id: "with-children-1",
      label: "Radio 1",
      children,
    },
    {
      id: "with-children-2",
      label: "Radio 2",
    },
    {
      id: "with-children-3",
      label: "Radio 3",
      children,
    },
  ],
};
