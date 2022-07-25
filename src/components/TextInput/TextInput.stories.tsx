import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "USWDS/Base/TextInput",
  component: TextInput,
  argTypes: {
    label: {
      defaultValue: "",
      description: "This is the label for the text input.",
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({ ...rest }) => (
  <TextInput {...rest} />
);

export const Default = Template.bind({});
export const Required = Template.bind({});
export const Success = Template.bind({});
export const PrefixSuffix = Template.bind({});
Default.args = {
  errorMessage: "",
  fieldName: "input-type-text",
  label: "Input Label",
  placeholder: "",
  prefix: "",
  required: false,
  showSuccess: false,
  suffix: "",
  value: "",
};

Required.args = {
  errorMessage: "Helpful Error Message",
  fieldName: "input-type-text",
  label: "Required Input Field",
  placeholder: "Placeholder Text",
  prefix: "",
  required: true,
  showSuccess: false,
  suffix: "",
  value: "",
};

Success.args = {
  errorMessage: "",
  fieldName: "input-type-text",
  label: "Input Label",
  placeholder: "Placeholder Text",
  prefix: "",
  required: false,
  showSuccess: true,
  suffix: "",
  value: "",
};

PrefixSuffix.args = {
  errorMessage: "Helpful Error Message",
  fieldName: "input-type-text",
  label: "A field with a prefix and a suffix",
  placeholder: "Enter the number of lbs.",
  prefix: "#",
  required: false,
  showSuccess: false,
  suffix: "lbs.",
  value: "",
};
