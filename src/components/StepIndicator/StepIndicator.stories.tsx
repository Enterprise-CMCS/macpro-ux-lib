import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StepIndicator } from "./StepIndicator";

export default {
  title: "COMPONENTS/StepIndicator",
  component: StepIndicator,
  args: {},
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
