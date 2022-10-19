import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";
import dropdownData from "../Dropdown/data.json";

const defaultValues = [
  "apple",
  "banana",
  "buddhas hand citron",
  "cantaloupe",
  "currant",
  "cherry",
  "coconut",
  "cranberry",
  "elderberry",
  "fig",
  "gooseberry",
  "kiwifruit",
  "plum",
  "strawberry",
];

export default {
  title: "COMPONENTS/MultiSelect",
  component: MultiSelect,
  args: {
    defaultValues,
    dropdownData,
    label: "Select an item from the dropdown:",
    placeholder: "Type to filter",
  },
  argTypes: {},
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = ({ ...rest }) => (
  <MultiSelect {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
