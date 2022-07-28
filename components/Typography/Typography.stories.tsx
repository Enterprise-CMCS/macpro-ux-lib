import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "USWDS/Base/Typography",
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    family: {
      defaultValue: "sans",
      description:
        "This is the font-family for the text that will be rendered.",
    },
    size: {
      defaultValue: "xs",
      description: "This is the size of the text that will be rendered.",
    },
    as: {
      defaultValue: "p",
      description: "The type of component that will be rendered",
    },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  children: "Testing",
  size: "md",
  family: "sans",
};
