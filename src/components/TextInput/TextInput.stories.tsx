import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "USWDS/Base/TextInput",
  component: TextInput,
  argTypes: {
    label: {
      defaultValue: undefined,
      description: "Field label.",
    },
    fieldName: {
      defaultValue: undefined,
      description: "Name of the input field.",
    },
    errorMessage: {
      defaultValue: undefined,
      description: "Error message text displayed when inputError === true.",
    },
    initialValue: {
      defaultValue: undefined,
      description: "Optional default input value.",
    },
    inputError: {
      defaultValue: false,
      description: "Triggers error message and error styling.",
    },
    inputFilter: {
      defaultValue: undefined,
      description:
        "Used to limit input values. If a RegExp is not provided, all input types are allowed.",
    },
    inputSuccess: {
      defaultValue: false,
      description: "Trigger success styling.",
    },
    placeholder: {
      defaultValue: undefined,
      description: "Input field placeholder text.",
    },
    prefix: {
      defaultValue: undefined,
      description:
        "Text to be displayed at the front of input field. Not stored in value. Ex: currency indicator.",
    },
    required: {
      defaultValue: false,
      description:
        "Adds semantic required attr and appends an * to the end of the input label.",
    },
    suffix: {
      defaultValue: undefined,
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
  label: "Field with Success Indicator",
  placeholder: "Placeholder Text",
  inputSuccess: true,
};
