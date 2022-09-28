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
      description: "String used to label the drodown in the UI.",
    },
    name: {
      description:
        "Name of the dropdown used to identify it in the context of a form.",
      type: { name: "string", required: true },
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