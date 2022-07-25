import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "USWDS/Base/TextInput",
  component: TextInput,
  argTypes: {
    label: {
      defaultValue: null,
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({ ...rest }) => (
  <TextInput {...rest} />
);

export const Default = Template.bind({});
export const InputFilter = Template.bind({});
export const PrefixAndSuffix = Template.bind({});
export const RequiredAndError = Template.bind({});
export const Success = Template.bind({});
Default.args = {
  fieldName: "input-type-text",
  label: "Input Label",
};

InputFilter.args = {
  fieldName: "input-type-text",
  label: "This field only accepts a numerical input",
  placeholder: "Numbers only",
  inputFilter: /^-?\d*$/i,
};

PrefixAndSuffix.args = {
  errorMessage: "Helpful Error Message",
  fieldName: "input-type-text",
  label: "A field with a prefix and a suffix",
  placeholder: "Enter the number of lbs.",
  prefix: "#",
  suffix: "lbs.",
};

RequiredAndError.args = {
  errorMessage: "Helpful Error Message",
  fieldName: "input-type-text",
  inputError: true,
  label: "Required Input Field",
  placeholder: "Placeholder Text",
  required: true,
};

Success.args = {
  errorMessage: "",
  fieldName: "input-type-text",
  label: "Input Label",
  placeholder: "Placeholder Text",
  inputSuccess: true,
};
