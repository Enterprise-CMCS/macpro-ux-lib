import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";
import data from "../DropdownInput/data.json";

const defaultValues = [
  "apple",
  "banana",
  "buddhas hand citron",
  "cantaloupe",
  "elderberry",
  "kiwifruit",
  "plum",
  "strawberry",
];

export default {
  title: "COMPONENTS/MultiSelect",
  component: MultiSelect,
  args: {
    data,
    defaultValues,
    id: "multi-select",
    label: "Select a fruit from the dropdown:",
    placeholder: "Type to filter",
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
        "An array of objects used to populate the dropdown. Each object should appear as follows:\n\n `{ value : string, displayString: string }`\n\nUnlike the regular Dropdown, values must be strings.",
    },
    defaultValues: {
      control: false,
      description: "An array of strings used as default selected values.",
    },
    label: { description: "String used to label the dropdown in the UI." },
    id: { description: "Unique identifier required for form control." },
    name: {
      description:
        "Name of the select element used to identify it in the context of a form.",
      type: { name: "string" },
    },
    placeholder: { description: "Placeholder text for the input search." },
    readOnly: {
      description:
        "Sets input field to read-only. Effectively disables type-ahead search.",
    },
    setValue: {
      description:
        "Optionally manage state in this component from a parent by passing state params to `value` and `setValue`.",
    },
    value: {
      description:
        "Optionally manage state in this component from a parent by passing state params to `value` and `setValue`.",
    },
  },
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = ({ ...rest }) => (
  <MultiSelect {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
