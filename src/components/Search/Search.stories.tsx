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
    initialValue: {
      description: "If provided, used as value of search input.",
    },
    placeholder: {
      description: "The text placeholder for this component.",
    },
    labelText: {
      description: "Label text for screen reader.",
    },
    onSearch: {
      description:
        "Handles its behavior when the search button is clicked or the user presses enter in the input. Returns value of the input.",
      control: false,
    },
    onInput: {
      description: "Handles its behavior when the user is typing.",
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation",
      },
    },
  },
  args: {
    placeholder: "Placeholder here",
    onSearch: (e) => console.log("on search2", e),
    onInput: (e) => console.log("on input", e),
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
  initialValue: "Starting value",
};
