import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "./Alert";
import { Link } from "../Link/Link";

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
    close: {
      description:
        "Close button that shows when a event handler is passed to the component",
      control: false,
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

export const Info = Template.bind({});
Info.args = {
  variation: "info",
};

export const InfoWithCloseButton = Template.bind({});
InfoWithCloseButton.args = {
  variation: "info",
  close: () => console.log("test"),
};

export const InfoWithALink = Template.bind({});
InfoWithALink.args = {
  variation: "info",
  alertBody: [
    <p>
      Click this <Link href="https://google.com" text="link" /> to take you to
      google!
    </p>,
  ],
};

InfoWithALink.parameters = {
  docs: {
    description: {
      story:
        "Users can provide either a string or a React Children to display for the alert body. In this example, the alert body is a react element:\n\n `[<p> Click this <Link href='https://google.com' text='link' /> to take you to google!</p>]`",
    },
  },
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
