import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

export default {
  title: "COMPONENTS/Tabs/Tab",
  component: TabPanel,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = ({ ...rest }) => (
  <TabPanel {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
