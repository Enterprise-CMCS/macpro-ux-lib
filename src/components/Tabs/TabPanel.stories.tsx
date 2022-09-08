import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";

export default {
  title: "COMPONENTS/Tabs/TabPanel",
  component: TabPanel,
  argTypes: {},
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = ({ ...rest }) => (
  <TabPanel {...rest}></TabPanel>
);

export const Default = Template.bind({});
Default.args = {};
