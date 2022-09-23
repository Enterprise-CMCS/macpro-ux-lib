import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SiteAlert } from "./SiteAlert";

export default {
  title: "COMPONENTS/SiteAlert",
  component: SiteAlert,
  args: {
    alertHeading: "Emergency alert message",
    alertBody: [
      <>
        <strong>Short alert message.</strong> Additional context and followup
        information including{" "}
        <a className="usa-link" href="javascript:void(0);">
          a link
        </a>
        .
      </>,
    ],
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

export const InfoSiteAlertWithCloseButton = Template.bind({});
InfoSiteAlertWithCloseButton.args = {
  variation: "info",
  close: () => console.log("test"),
};

export const EmergencySiteAlert = Template.bind({});
EmergencySiteAlert.args = {
  emergency: true,
};

export const EmergencySiteAlertWithNoHeader = Template.bind({});
EmergencySiteAlertWithNoHeader.args = {
  alertHeading: "",
  emergency: true,
};

export const EmergencySiteAlertWithList = Template.bind({});
EmergencySiteAlertWithList.args = {
  emergency: true,
  alertBody: [
    <ul className="usa-list">
      <li>
        The primary emergency message and{" "}
        <a className="usa-link" href="javascript:void(0);">
          a link
        </a>{" "}
        for supporting context.
      </li>
      <li>
        Another message,{" "}
        <a className="usa-link" href="javascript:void(0);">
          and another link
        </a>
        .
      </li>
      <li>A final emergency message.</li>
    </ul>,
  ],
};

export const SlimEmergencySiteAlert = Template.bind({});
SlimEmergencySiteAlert.args = {
  emergency: true,
  slim: true,
  alertHeading: "",
};

export const SlimSiteAlertEmergencyWithNoIcon = Template.bind({});
SlimSiteAlertEmergencyWithNoIcon.args = {
  emergency: true,
  icon: false,
  alertHeading: "",
};
