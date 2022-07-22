import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "USWDS/Base/Button",
  component: Button,
  argTypes: {
    buttonVariation: {
      defaultValue: "primary",
      description: "This is the style prop for the button",
    },
    buttonText: {
      defaultValue: "Button",
      description: "This is the text prop for the button",
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
    onClick: { action: "clicked" },
    type: {
      defaultValue: "button",
      options: ["submit", "reset", "button"],
      control: { type: "select" },
    },
    target: {
      defaultValue: "button",
      options: ["_blank", "_self", "_parent", "_top"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ buttonText, ...rest }) => (
  <Button buttonText={buttonText} {...rest} />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  buttonVariation: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { buttonVariation: "secondary" };
export const ErrorButton = Template.bind({});
ErrorButton.args = { buttonVariation: "error" };
export const SuccessButton = Template.bind({});
SuccessButton.args = { buttonVariation: "success" };
export const InverseButton = Template.bind({});
InverseButton.args = { buttonVariation: "inverse" };
export const BaseButton = Template.bind({});
BaseButton.args = { buttonVariation: "base" };
export const LinkButton = Template.bind({});
LinkButton.args = { buttonVariation: "link" };
export const BigButton = Template.bind({});
BigButton.args = { buttonVariation: "big" };
export const OutlineButton = Template.bind({});
OutlineButton.args = { buttonVariation: "outline" };
