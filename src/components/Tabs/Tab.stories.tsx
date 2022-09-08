import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";

export default {
  title: "COMPONENTS/Tabs/Tab",
  component: Tab,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = ({ ...rest }) => <Tab {...rest} />;

export const Default = Template.bind({});
Default.args = {};
