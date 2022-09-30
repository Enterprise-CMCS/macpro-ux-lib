import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FileInput } from "./FileInput";

export default {
  title: "COMPONENTS/FileInput",
  component: FileInput,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = ({ ...rest }) => (
  <FileInput {...rest} />
);

export const Default = Template.bind({});
Default.args = {};
