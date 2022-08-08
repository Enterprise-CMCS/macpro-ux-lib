import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "./Footer";

export default {
  title: "USWDS/Base/Footer",
  component: Footer,
  argTypes: {},
  args: {
    emailAddress: "sample@cms.hhs.gov",
    address: "7500 Security Boulevard Baltimore, MD 21244",
    altFooter: false,
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = ({ ...rest }) => (
  <Footer {...rest} />
);

export const Default = Template.bind({});
export const altFooter = Template.bind({});
altFooter.args = { altFooter: true };
