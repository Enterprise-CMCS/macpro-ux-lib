import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StepIndicator } from "./StepIndicator";

export default {
  title: "COMPONENTS/StepIndicator",
  component: StepIndicator,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof StepIndicator>;

const Template: ComponentStory<typeof StepIndicator> = ({ ...rest }) => (
  <StepIndicator {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
