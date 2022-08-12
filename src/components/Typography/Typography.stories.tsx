import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "TYPOGRAPHY/Typography",
  component: Typography,
  args: {
    as: "p",
    family: "sans",
    size: "md",
  },
  argTypes: {
    as: {
      description: "The type of component that will be rendered",
    },
    family: {
      description:
        "This is the font-family for the text that will be rendered.",
    },
    size: {
      description: "This is the size of the text that will be rendered.",
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ children, ...rest }) => (
  <Typography {...rest}>{children}</Typography>
);

export const Standard = Template.bind({});
Standard.args = {
  children: "Testing",
};
