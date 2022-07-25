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
      description: "Determines whether or not a button is enabled",
    },
    icon: {
      description: "Handles the icon to render in the button",
    },
    shiftIconLeft: {
      description:
        "Determines if a rendered icon should render on the left side",
    },
    largeButton: {
      description: "Determines whether a large button is required",
    },
    ariaLabel: {
      description:
        "Overwrites the aria label of the button element that will be read on screen readers",
    },
    onClick: {
      description: "Handles its behavior when the button is clicked",
      action: "clicked",
    },
    type: {
      defaultValue: "button",
      options: ["submit", "reset", "button"],
      control: { type: "select" },
      description: "Type of specified button",
    },
    target: {
      defaultValue: "_self",
      options: ["_blank", "_self", "_parent", "_top"],
      control: { type: "select" },
      description:
        "Specifies a name or a keyword that indicates where to display the response that is received after clicking the button",
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
BigButton.args = { largeButton: true };
export const OutlineButton = Template.bind({});
OutlineButton.args = { buttonVariation: "outline" };
