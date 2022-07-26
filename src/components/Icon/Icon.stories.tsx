import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";
import { iconChoices } from "./IconChoices";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "USWDS/Base/Icon",
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    iconSize: {
      defaultValue: "3",
      description:
        "String used to specify the size of the icon, a number between 3-9",
    },
    icon: {
      description: "Determines which icon that needs to be rendered",
      options: iconChoices,
      control: { type: "select" },
    },
    ariaHidden: {
      description:
        "If the icon is redundant and used solely as visual progressive enhancement, leave prop as default true",
      defaultValue: true,
    },
    role: {
      defaultValue: "img",
      description:
        "If the icon is redundant and used solely as visual progressive enhancement, leave prop as default img role.",
    },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = ({ icon, ...rest }) => (
  <Icon icon={icon} {...rest} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: "accessibility_new",
};
