import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

export default {
  title: "COMPONENTS/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    currentItemName: {
      description: "The name of the current page where the breadcrumbs appear.",
    },
    items: {
      description: "An array of the breadcrumb items.",
    },
    parentOnly: {
      description: "Show only the parent item with a back arrow.",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = ({ ...rest }) => (
  <Breadcrumbs {...rest} />
);

export const Default = Template.bind({});
Default.args = {
  currentItemName: "Current Item",
  items: [
    { name: "First item", path: "#" },
    { name: "Second item", path: "#" },
  ],
};
