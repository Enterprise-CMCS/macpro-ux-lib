import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Tooltip } from "./Tooltip";

export default {
  title: "COMPONENTS/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => <Tooltip />;
export const Default = Template.bind({});
