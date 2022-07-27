import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "USWDS/Base/TextInput",
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
    initialValue: {
      description: "Optional default input value.",
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
    placeholder: {
      description: "Input field placeholder text.",
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
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({ ...rest }) => (
  <TextInput {...rest} />
);

export const Default = Template.bind({});
export const InputFilter = Template.bind({});
export const PrefixAndSuffix = Template.bind({});
export const RequiredAndError = Template.bind({});
export const Success = Template.bind({});
Default.args = {};

InputFilter.args = {
  label: "This field only accepts a numerical input",
  placeholder: "Numbers only",
  inputFilter: /^-?\d*$/i,
};

PrefixAndSuffix.args = {
  label: "A field with a prefix and a suffix",
  placeholder: "Enter the number of lbs.",
  prefix: "#",
  suffix: "lbs.",
};

RequiredAndError.args = {
  errorMessage: "Helpful Error Message",
  inputError: true,
  label: "Required Input Field",
  placeholder: "Placeholder Text",
  required: true,
};

Success.args = {
  label: "Field with Success Indicator",
  placeholder: "Placeholder Text",
  inputSuccess: true,
};
