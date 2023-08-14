import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
  title: "COMPONENTS/TextInput",
  component: TextInput,
  args: {
    label: "Input Label",
    name: "input-type-text",
    inputError: false,
    inputSuccess: false,
    required: false,
  },
  argTypes: {
    id: {
      description: "A unique identifier for the TextInput.",
    },
    label: {
      description: "Field label text.",
    },
    errorMessage: {
      description: "Error message text displayed when inputError === true.",
    },
    inputError: {
      description: "Triggers error message and error styling.",
    },
    inputSuccess: {
      description: "Trigger success styling.",
    },
    name: {
      description:
        "Name of the input field. Maps to the standard HTML `name` attribute.",
    },
    prefix: {
      description:
        "Text to be displayed at the front of input field. Not stored in value. Ex: currency indicator.",
    },
    required: {
      description:
        'Adds semantic `required` attribute and appends a "*" to the end of the input label.',
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

export const Error = Template.bind({});
export const PrefixSuffix = Template.bind({});
export const Required = Template.bind({});
export const Success = Template.bind({});

Default.args = {};

Error.args = {
  errorMessage: "Helpful Error Message",
  id: "error-textinput",
  inputError: true,
  label: "Field with Error Indicator",
};

PrefixSuffix.args = {
  id: "prefix-suffix-textinput",
  label: "This field has a prefix and suffix",
  prefix: "#",
  suffix: "lbs.",
};

Required.args = {
  id: "required-textinput",
  label: "Required Input Field",
  required: true,
};

Success.args = {
  id: "success-textinput",
  inputSuccess: true,
  label: "Field with Success Indicator",
};
