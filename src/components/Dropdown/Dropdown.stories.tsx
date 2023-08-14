import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import data from "../DropdownInput/data.json";

export default {
  title: "COMPONENTS/Dropdown",
  component: Dropdown,
  args: {
    data,
  },
  argTypes: {
    className: {
      description:
        "A class name that will be applied on the component wrapper `div`.",
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
    setValue: {
      description:
        "Optionally manage state in this component from a parent by passing state params to `value` and `setValue`",
      control: false,
    },
    value: {
      description:
        "Optionally manage state in this component from a parent by passing state params to `value` and `setValue`",
      control: false,
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ ...rest }) => {
  const [value, setValue] = useState("");
  return <Dropdown {...rest} value={value} setValue={setValue} />;
};
export const Default = Template.bind({});

Default.args = {
  id: "fruit",
  label: "Select a fruit",
  name: "fruit-dropdown",
};
