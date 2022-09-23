import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SiteAlert } from "./SiteAlert";

export default {
  title: "COMPONENTS/SiteAlert",
  component: SiteAlert,
  args: {
    alertHeading: "Emergency alert message",
    alertBody: [
      <div key="alert-3">
        <strong>Short alert message.</strong> Additional context and followup
        information including{" "}
        <a className="usa-link" href="https://google.com">
          a link
        </a>
        .
      </div>,
    ],
  },
  argTypes: {
    alertHeading: {
      description: "Text content for the alert heading.",
    },
    alertBody: {
      control: "text",
      description:
        "Text content for the alert body. Users can provide either a string or React Children to display for the alert body.",
    },
    emergency: {
      description:
        "Determines the alert whether to render the information or emergency alert.",
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
  alertBody: [
    <p key="info-1" className="usa-alert__text">
      Additional context and followup information including{" "}
      <a className="usa-link" href="https://google.com">
        a link
      </a>
      .
    </p>,
  ],
};

export const InfoSiteAlertWithCloseButton = Template.bind({});
InfoSiteAlertWithCloseButton.args = {
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
    <ul key="alert-2" className="usa-list">
      <li>
        The primary emergency message and{" "}
        <a className="usa-link" href="https://google.com">
          a link
        </a>{" "}
        for supporting context.
      </li>
      <li>
        Another message,{" "}
        <a className="usa-link" href="https://google.com">
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
