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
  argTypes: {},
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
NoLabels.args = {};

export const Centered = Template.bind({});
Centered.args = {};

export const Counters = Template.bind({});
Counters.args = {};

export const SmallCounters = Template.bind({});
SmallCounters.args = {};

export const CenteredCounters = Template.bind({});
CenteredCounters.args = {};
