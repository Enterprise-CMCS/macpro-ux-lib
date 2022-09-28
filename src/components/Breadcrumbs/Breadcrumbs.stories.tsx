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
  parameters: {
    docs: {
      description: {
        component:
          'Breadcrumbs provide secondary navigation to help users understand where they are in a website.\nA breadcrumb bar shows the location of the current page in the site structure. It\'s like a path from the current page back to the home page, showing each level of organization in-between. Breadcrumbs allow a user to navigate "up" to a parent section instead of "Back" to the previous page. Use breadcrumbs to help users navigate and understand the organization of your site.',
      },
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
