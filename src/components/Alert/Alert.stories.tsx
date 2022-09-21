import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "./Alert";

export default {
  title: "COMPONENTS/Alert",
  component: Alert,
  args: {
    alertHeading: "Heading",
    alertBody: "Body",
  },
  argTypes: {
    alertHeading: {
      description: "Text content for the alert heading.",
    },
    alertBody: {
      description: "Text content for the alert body.",
    },
    variation: {
      description: "Determines the alert variation to render.",
    },
    slim: {
      description: "Renders a slimmer version of the banner.",
    },
    icon: {
      description:
        "Show/hide the alert icon associated with the variation of the alert.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "An alert keeps users informed of important and sometimes time-sensitive changes.",
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ ...rest }) => (
  <Alert {...rest} />
);

export const Default = Template.bind({});
Default.args = {
  variation: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  variation: "warning",
};

export const Error = Template.bind({});
Error.args = {
  variation: "error",
};

export const Success = Template.bind({});
Success.args = {
  variation: "success",
};

export const Slim = Template.bind({});
Slim.args = {
  slim: true,
  variation: "success",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  icon: false,
  variation: "success",
};
