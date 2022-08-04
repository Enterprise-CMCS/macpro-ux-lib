import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "USWDS/Base/Header",
  component: Header,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ ...rest }) => (
  <Header {...rest} />
);

export const Default = Template.bind({});
Default.args = {
  logoProps: { altText: "Project Title" },
  navData: [
    {
      buttonText: "Current Section",
      current: true,
      columns: [
        [
          { text: "one", href: "www.com" },
          { text: "two", href: "www.com" },
        ],
        [
          { text: "three", href: "www.com" },
          { text: "four", href: "www.com" },
        ],
      ],
    },
    {
      buttonText: "Section",
      columns: [
        [
          { text: "five", href: "www.com" },
          { text: "six", href: "www.com" },
        ],
      ],
    },
  ],
};
