import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

export default {
  title: "COMPONENTS/Tabs/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = ({ ...rest }) => (
  <Tabs {...rest}></Tabs>
);

export const Default = Template.bind({});
Default.args = {};
