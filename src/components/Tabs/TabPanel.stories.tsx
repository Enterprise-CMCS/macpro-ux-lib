import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

export default {
  title: "COMPONENTS/Tabs/TabPanel",
  component: TabPanel,
  args: { tab: "Summary" },
  argTypes: {},
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = ({ ...rest }) => (
  <Tabs>
    <TabPanel {...rest}>
      The Bill of Rights is the first ten amendments to the United States
      Constitution.
    </TabPanel>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
