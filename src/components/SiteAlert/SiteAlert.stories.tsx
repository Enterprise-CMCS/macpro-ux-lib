import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SiteAlert } from "./SiteAlert";

export default {
  title: "COMPONENTS/SiteAlert",
  component: SiteAlert,
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
} as ComponentMeta<typeof SiteAlert>;

const Template: ComponentStory<typeof SiteAlert> = ({ ...rest }) => (
  <SiteAlert {...rest} />
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

export const Warning = Template.bind({});
Warning.args = {
  variation: "warning",
};
