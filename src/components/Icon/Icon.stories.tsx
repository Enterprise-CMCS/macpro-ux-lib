import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";
import { iconChoices } from "./IconChoices";

export default {
  title: "USWDS/Base/Icon",
  component: Icon,
  argTypes: {
    iconSize: {
      description:
        "String used to specify the size of the icon, a number between 3-9",
    },
    name: {
      description: `Determines which icon that needs to be rendered from: https://designsystem.digital.gov/components/icon/`,
      options: iconChoices,
      control: { type: "select" },
    },
    ariaHidden: {
      description:
        "If the icon is redundant and used solely as visual decorative enhancement",
    },
    role: {
      description:
        "Determines the role of the icon. If the icon is redundant and used solely as visual decorative enhancement, leave prop as default img role.",
    },
    ariaLabel: {
      description:
        "Accessible icon name used by screen readers and other assistive technologies. Provide when icon is not merely decorative",
    },
    color: {
      description: "Color of Icon that is rendered, defaults to black",
    },
  },
  args: {
    name: "accessibility_new",
    iconSize: 3,
    ariaHidden: true,
    role: "img",
    color: "black",
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ name, ...rest }) => (
  <Icon name={name} {...rest} />
);

export const Default = Template.bind({});
