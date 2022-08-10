import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const data = [
  { displayString: "- Select a Fruit -" },
  { value: "apple", displayString: "Apple" },
  { value: "apricot", displayString: "Apricot" },
  { value: "avocado", displayString: "Avocado" },
  { value: "banana", displayString: "Banana" },
  { value: "blackberry", displayString: "Blackberry" },
  { value: "blood orange", displayString: "Blood orange" },
  { value: "blueberry", displayString: "Blueberry" },
  { value: "boysenberry", displayString: "Boysenberry" },
  { value: "buddahs hand citron", displayString: "Buddha's hand citron" },
  { value: "cantaloupe", displayString: "Cantaloupe" },
  { value: "coconut", displayString: "Coconut" },
  { value: "elderberry", displayString: "Elderberry" },
  { value: "grape", displayString: "Grape" },
  { value: "grapefruit", displayString: "Grapefruit" },
  { value: "guava", displayString: "Guava" },
  { value: "honeydew melon", displayString: "Honeydew melon" },
  { value: "yuzu", displayString: "Yuzu" },
];

export default {
  title: "USWDS/Base/Dropdown",
  component: Dropdown,
  args: {
    data: data,
  },
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ ...rest }) => (
  <Dropdown {...rest} />
);

export const Default = Template.bind({});
