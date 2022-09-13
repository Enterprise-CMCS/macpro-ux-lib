import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TemplateComponent } from "./TemplateComponent";

export default {
  title: "COMPONENTS/TemplateComponent",
  component: TemplateComponent,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof TemplateComponent>;

const Template: ComponentStory<typeof TemplateComponent> = ({ ...rest }) => (
  <TemplateComponent {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
