import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "./Footer";

export default {
  title: "USWDS/Base/Footer",
  component: Footer,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = ({ ...rest }) => (
  <Footer {...rest} />
);

export const Default = Template.bind({});
