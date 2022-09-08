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
  <Tabs {...rest}>
    <TabPanel tab="Summary" disabled>
      <div
        aria-labelledby="ds-c-tabs__item--summary"
        aria-hidden="false"
        className="ds-c-tabs__panel"
        id="summary"
        role="tabpanel"
      >
        The Bill of Rights is the first ten amendments to the United States
        Constitution.
      </div>
    </TabPanel>
    <TabPanel tab="Preamble">
      <div
        aria-labelledby="ds-c-tabs__item--preamble"
        aria-hidden="true"
        className="ds-c-tabs__panel"
        id="preamble"
        role="tabpanel"
      >
        We the People of the United States, in Order to form a more perfect
        Union, establish Justice, insure domestic Tranquility, provide for the
        common defence, promote the general Welfare, and secure the Blessings of
        Liberty to ourselves and our Posterity, do ordain and establish this
        Constitution for the United States of America.
      </div>
    </TabPanel>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
