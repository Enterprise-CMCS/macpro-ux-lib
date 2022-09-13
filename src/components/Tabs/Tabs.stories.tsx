import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

export default {
  title: "COMPONENTS/Tabs/Tabs",
  component: Tabs,
  args: {
    children: "",
    initialTab: undefined,
  },
  argTypes: {
    children: {
      description: "`TabPanel` children to be rendered in the Tabs component.",
      type: "function",
    },
    initialTab: {
      description:
        "Index of the tab to be open when the component renders. Defaults to first non-disabled tab.",
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = ({ ...rest }) => (
  <Tabs {...rest}>
    <TabPanel tabLabel="Summary" id="tab-panel--summary">
      The Bill of Rights is the first ten amendments to the United States
      Constitution.
    </TabPanel>
    <TabPanel tabLabel="Preamble" id="tab-panel--preamble">
      We the People of the United States, in Order to form a more perfect Union,
      establish Justice, insure domestic Tranquility, provide for the common
      defence, promote the general Welfare, and secure the Blessings of Liberty
      to ourselves and our Posterity, do ordain and establish this Constitution
      for the United States of America.
    </TabPanel>
    <TabPanel tabLabel="Amendments" id="tab-panel--amendments">
      <h2>Bill of Rights</h2>
      <ol>
        <li>Freedoms, Petitions, Assembly</li>
        <li>Right to bear arms</li>
        <li>Quartering of soldiers</li>
        <li>Search and arrest</li>
        <li>Rights in criminal cases</li>
        <li>Right to a fair trial</li>
        <li>Rights in civil cases</li>
        <li>Bail, fines, punishment</li>
        <li>Rights retained by the People</li>
        <li>States' rights</li>
      </ol>
      <h2>Later Amendments</h2>
      <ol start={11}>
        <li>Lawsuits against states</li>
        <li>Presidential elections</li>
        <li>Abolition of slavery</li>
        <li>Civil rights</li>
        <li>Black suffrage</li>
        <li>Income taxes</li>
        <li>Senatorial elections</li>
        <li>Prohibition of liquor</li>
        <li>Women's suffrage</li>
        <li>Terms of office</li>
        <li>Repeal of Prohibition</li>
        <li>Term Limits for the Presidency</li>
        <li>Washington, D.C., suffrage</li>
        <li>Abolition of poll taxes</li>
        <li>Presidential succession</li>
        <li>18-year-old suffrage</li>
        <li>Congressional pay raises</li>
      </ol>
    </TabPanel>
    <TabPanel tabLabel="Disabled" disabled id="tab-panel--disabled" />
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
