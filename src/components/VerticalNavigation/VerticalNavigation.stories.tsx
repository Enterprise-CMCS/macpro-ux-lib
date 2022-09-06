import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VerticalNavigation } from "./VerticalNavigation";

export default {
  title: "COMPONENTS/Vertical Navigation",
  component: VerticalNavigation,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component:
          "Hierarchical, vertical navigation to place at the side of a page. To display a navigational hierarchy with one to three levels.",
      },
    },
  },
} as ComponentMeta<typeof VerticalNavigation>;

const Template: ComponentStory<typeof VerticalNavigation> = ({ ...rest }) => (
  <VerticalNavigation {...rest} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: "1", items: [], selectedIds: [], text: "Parent" },
    {
      id: "2",
      items: [
        {
          id: "4",
          items: [
            { id: "6", items: [], selectedIds: [], text: "Grandchild" },
            { id: "7", items: [], selectedIds: [], text: "Grandchild" },
          ],
          selectedIds: "4",
          text: "Child",
        },
        { id: "5", items: [], selectedIds: [], text: "Child" },
      ],
      selectedIds: [],
      text: "Parent",
    },
    { id: "3", items: [], selectedIds: [], text: "Parent" },
  ],
};

export const Togglable = Template.bind({});

Togglable.parameters = {
  docs: {
    description: {
      story:
        "Items with navigation children are given the option to be toggleable to show/hide their navigation options.",
    },
  },
};

Togglable.args = {
  items: [
    { id: "1", items: [], selectedIds: [], text: "Parent" },
    {
      id: "2",
      togglable: true,
      items: [
        {
          id: "4",
          togglable: true,
          items: [
            { id: "6", items: [], selectedIds: [], text: "Grandchild" },
            { id: "7", items: [], selectedIds: [], text: "Grandchild" },
          ],
          selectedIds: "4",
          text: "Child with toggle",
        },
        { id: "5", items: [], selectedIds: [], text: "Child" },
      ],
      selectedIds: [],
      text: "Parent with toggle",
    },
    { id: "3", items: [], selectedIds: [], text: "Parent" },
  ],
};
