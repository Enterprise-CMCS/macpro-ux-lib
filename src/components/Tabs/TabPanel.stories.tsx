import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

export default {
  title: "COMPONENTS/Tabs/TabPanel",
  component: TabPanel,
  args: {
    children:
      "The Bill of Rights is the first ten amendments to the United States Constitution.",
    disabled: false,
    tab: "Summary",
    id: "tab-panel--summary",
  },
  argTypes: {
    children: {
      description:
        "Contents to be displayed when Tab is clicked.\n\n`React.Node`",
      type: "string",
    },
    disabled: {
      description:
        "Setting this value will render Tab with disabled styles and make tab unclickable.",
    },
    id: {
      description:
        "Unique identifier required for each TabPanel item. The id is used to associate the tab and it's content, as well as populate aria tags.",
    },
    tab: { description: "Text label for each tab." },
  },
} as ComponentMeta<typeof TabPanel>;

const Template: ComponentStory<typeof TabPanel> = ({ children, ...rest }) => (
  <Tabs>
    <TabPanel {...rest}>{children}</TabPanel>
  </Tabs>
);

export const Default = Template.bind({});
