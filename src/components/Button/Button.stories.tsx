import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "COMPONENTS/Button",
  component: Button,
  argTypes: {
    buttonVariation: {
      description: "Renders the style of the button",
    },
    buttonText: {
      description: "Renders the text contained in the button",
    },
    disabled: {
      control: "boolean",
      description: "Determines whether or not a button is disabled",
    },
    iconName: {
      description:
        "Determines which icon that needs to be rendered from: https://designsystem.digital.gov/components/icon/. Use the icon's listed name, for example: 'accessibility_new'",
    },
    shiftIconLeft: {
      description:
        "Determines if a rendered icon should render on the left side, the iconName prop needs to be filled",
    },
    largeButton: {
      description: "Determines whether a large button is required",
    },
    ariaLabel: {
      description:
        "Overwrites the aria label of the button element that will be read on screen readers",
    },
    type: {
      options: ["submit", "reset", "button"],
      control: { type: "select" },
      description: "Type of specified button",
    },
    target: {
      options: ["_blank", "_self", "_parent", "_top"],
      control: { type: "select" },
      description:
        "Specifies a name or a keyword that indicates where to display the response that is received after clicking the button",
    },
  },
  args: {
    buttonText: "Button",
    buttonVariation: "primary",
    disabled: false,
    iconName: undefined,
    shiftIconLeft: false,
    type: "button",
    target: "_self",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ buttonText, ...rest }) => (
  <div className="padding-2">
    <Button buttonText={buttonText} {...rest} />
  </div>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  buttonVariation: "primary",
};

export const PrimaryButtonWithIcon = Template.bind({});
PrimaryButtonWithIcon.args = { buttonVariation: "primary", iconName: "add" };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { buttonVariation: "secondary" };

export const SecondaryOutlineButton = Template.bind({});
SecondaryOutlineButton.args = { buttonVariation: "secondary-outline" };
SecondaryOutlineButton.parameters = { backgrounds: { default: "dark" } };

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

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  buttonVariation: "primary",
  withTooltip: true,
  tooltipText: "Tooltip text",
  tooltipPosition: "right",
};
