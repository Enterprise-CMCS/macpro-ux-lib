import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VerticalNavigation } from "./VerticalNavigation";
export default {
  title: "COMPONENTS/Vertical Navigation",
  component: VerticalNavigation,

  argTypes: {
    items: {
      description:
        "Navigation section items to be rendered for the sidebar, can be up to three layers deep. \n\nExample object structure: `{ id: '1', items: [],  text: 'Parent'}`",
      control: false,
    },
    selectedId: {
      description:
        "An ID(s) of a section(s) on which should be programatically marked as currently active",
    },
  },
  args: {},
  parameters: {
    docs: {
      description: {
        component:
          "Hierarchical, vertical navigation to place at the side of a page. The recommendation is to display a navigational hierarchy with one to three levels. In theory it can be infinitely nested, but three layers max is recommended for a better user experience.",
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
    { id: "1", items: [], text: "Parent" },
    {
      id: "2",
      items: [
        {
          id: "4",
          items: [
            { id: "6", text: "Grandchild" },
            { id: "7", text: "Grandchild" },
          ],
          text: "Child",
        },
        { id: "5", items: [], text: "Child" },
      ],

      text: "Parent",
    },
    { id: "3", items: [], text: "Parent" },
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
    { id: "1", items: [], text: "Parent" },
    {
      id: "2",
      togglable: true,
      items: [
        {
          id: "4",
          togglable: true,
          items: [
            { id: "6", text: "Grandchild" },
            { id: "7", text: "Grandchild" },
          ],
          text: "Child with toggle",
        },
        { id: "5", items: [], text: "Child" },
      ],

      text: "Parent with toggle",
    },
    { id: "3", items: [], text: "Parent" },
  ],
};

export const SelectedId = Template.bind({});

SelectedId.parameters = {
  docs: {
    description: {
      story:
        "We can set a selected ID of one of the sections on the page and it will be marked on page load.",
    },
  },
};

SelectedId.args = {
  selectedId: "7",
  items: [
    { id: "1", items: [], text: "Parent" },
    {
      id: "2",
      togglable: true,
      items: [
        {
          id: "4",
          togglable: true,
          items: [
            { id: "6", text: "Grandchild" },
            { id: "7", text: "Grandchild" },
          ],
          text: "Child with toggle",
        },
        { id: "5", items: [], text: "Child" },
      ],

      text: "Parent with toggle",
    },
    { id: "3", items: [], text: "Parent" },
  ],
};
