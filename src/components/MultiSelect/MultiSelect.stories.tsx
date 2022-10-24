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
    label: "Select a fruit from the dropdown:",
    placeholder: "Type to filter",
  },
  argTypes: {},
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = ({ ...rest }) => (
  <MultiSelect {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
