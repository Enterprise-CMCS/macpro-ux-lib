import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Search } from "./Search";

export default {
  title: "COMPONENTS/Search",
  component: Search,
  argTypes: {
    variation: {
      description: "Renders the style of the search component.",
    },
    disabled: {
      description: "Determines whether or not a button is enabled.",
    },
    value: {
      description: "The searched value within the input.",
    },
    placeholder: {
      description: "The text placeholder for this component.",
    },
    onSearch: {
      description: "Handles its behavior when the button is clicked.",
      control: false,
    },
  },
  args: {
    placeholder: "Placeholder here",
    onSearch: (e) => console.log("test", e.target.value),
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = ({ ...rest }) => (
  <Search {...rest} />
);

export const PrimarySearch = Template.bind({});
PrimarySearch.args = {
  variation: "default",
};

export const BigSearch = Template.bind({});
BigSearch.args = {
  variation: "big",
};

export const SmallSearch = Template.bind({});
SmallSearch.args = {
  variation: "small",
};
