import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StepIndicator } from "./StepIndicator";

export default {
  title: "COMPONENTS/StepIndicator",
  component: StepIndicator,
  args: {
    steps: [
      { label: "Personal information", order: 1 },
      { label: "Household status", order: 2 },
      { label: "Supporting documents", order: 3 },
      { label: "Signature", order: 4 },
      { label: "Review and submit", order: 5 },
    ],
    currentProgress: 3,
  },
  argTypes: {
    currentProgress: {
      description: "Number tracker of which step the user is currently on.",
    },
    steps: {
      description:
        "An array of step object data which consist of a label and the order number. The order number is 1 based.",
    },
    counters: {
      description:
        "Boolean which shows the counters alternative to the step indidcator.",
    },
    smallCounters: {
      description:
        "Boolean which shows the smaller counters alternative to the step indicator. Only shows if counters is true.",
    },
    showLabels: {
      description: "Dictates whether or not labels are show under each step.",
    },
    isCentered: {
      description:
        "Dictates whether the labels are centered under the steps. Labels must be true.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A step indicator updates users on their progress through a multi-step process.",
      },
    },
  },
} as ComponentMeta<typeof StepIndicator>;

const Template: ComponentStory<typeof StepIndicator> = ({ ...rest }) => (
  <StepIndicator {...rest} />
);

export const Default = Template.bind({});
Default.args = {};

export const NoLabels = Template.bind({});
NoLabels.args = { showLabels: false };

export const Centered = Template.bind({});
Centered.args = { isCentered: true };

export const Counters = Template.bind({});
Counters.args = { counters: true };

export const SmallCounters = Template.bind({});
SmallCounters.args = { counters: true, smallCounters: true };

export const CenteredCounters = Template.bind({});
CenteredCounters.args = { counters: true, isCentered: true };
