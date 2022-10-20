import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterChip } from "./FilterChip";

export default {
  title: "COMPONENTS/FilterChip",
  component: FilterChip,
  args: {
    text: "Non cras.",
  },
  argTypes: {
    text: {
      description: "Text content to be displayed within the FilterChip.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The FilterChip uses a tag or descriptive words as a way to filter content. This may be a good alternative to a Checkbox for larger data sets.\n\nThis component contains no actual logic to interact with your data. See the FilterChip Implementation story for an example of how this might be used.",
      },
    },
  },
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = ({ ...rest }) => (
  <FilterChip {...rest} />
);

export const Component = Template.bind({});
Component.args = {};
