import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import data from "./data.json";

export default {
  title: "COMPONENTS/Dropdown",
  component: Dropdown,
  args: {
    data,
  },
  argTypes: {
    className: {
      description: "A class name that will be applied on the select element.",
      type: { name: "string" },
    },
    data: {
      control: false,
      description:
        "An array of objects used to populate the dropdown. Each object should appear as follows:\n\n `{ value : string | number, displayString: string }`",
    },
    id: {
      description: "The id of the dropdown",
      type: { name: "string", required: true },
    },
    label: {
      description: "String used to label the dropdown in the UI.",
    },
    name: {
      description:
        "Name of the dropdown used to identify it in the context of a form.",
      type: { name: "string", required: true },
    },
    readOnly: {
      description:
        "Sets input field to read-only. Effectively disables type-ahead search.",
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ ...rest }) => (
  <Dropdown {...rest} />
);

export const Default = Template.bind({});

Default.args = {
  id: "fruit",
  label: "Select a fruit",
  name: "fruit-dropdown",
};
