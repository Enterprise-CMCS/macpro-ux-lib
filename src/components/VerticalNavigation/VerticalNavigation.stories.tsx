import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VerticalNavigation } from "./VerticalNavigation";

export default {
  title: "COMPONENTS/Vertical Navigation",
  component: VerticalNavigation,
  argTypes: {
    test: {
      description: "Email Address used at the bottom left for contact help",
    },
  },
  args: {
    selectedId: "6",
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
  },
  parameters: {
    docs: {
      description: {
        component:
          "Hierarchical, vertical navigation to place at the side of a page.",
      },
    },
  },
} as ComponentMeta<typeof VerticalNavigation>;

const Template: ComponentStory<typeof VerticalNavigation> = ({ ...rest }) => (
  <VerticalNavigation {...rest} />
);

export const Default = Template.bind({});
