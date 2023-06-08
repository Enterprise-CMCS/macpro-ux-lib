import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "COMPONENTS/TextInput",
  component: TextInput,
  args: {
    label: "Input Label",
    fieldName: "input-type-text",
    inputError: false,
    inputSuccess: false,
    required: false,
  },
  argTypes: {
    label: {
      description: "Field label.",
    },
    fieldName: {
      description: "Name of the input field.",
    },
    errorMessage: {
      description: "Error message text displayed when inputError === true.",
    },
    inputError: {
      description: "Triggers error message and error styling.",
    },
    inputFilter: {
      description:
        "Used to limit input values. If a RegExp is not provided, all input types are allowed.",
    },
    inputSuccess: {
      description: "Trigger success styling.",
    },
    prefix: {
      description:
        "Text to be displayed at the front of input field. Not stored in value. Ex: currency indicator.",
    },
    required: {
      description:
        "Adds semantic required attr and appends an * to the end of the input label.",
    },
    suffix: {
      description:
        "Text to be displayed at the end of input field. Not stored in value. Ex: mass indicator (lbs, fl oz)",
    },
  },
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = ({ ...rest }) => (
  <TextInput {...rest} />
);

export const Default = Template.bind({});
export const PrefixSuffixAndFilter = Template.bind({});
export const RequiredAndError = Template.bind({});
export const Success = Template.bind({});
Default.args = {};

PrefixSuffixAndFilter.args = {
  inputFilter: /^-?\d*$/i,
  label: "This Field Only Accepts Numbers",
  prefix: "#",
  suffix: "lbs.",
};

RequiredAndError.args = {
  errorMessage: "Helpful Error Message",
  inputError: true,
  label: "Required Input Field",
  required: true,
  id: "required-and-error-textarea",
};

Success.args = {
  label: "Field with Success Indicator",
  inputSuccess: true,
  id: "success-textarea",
};
