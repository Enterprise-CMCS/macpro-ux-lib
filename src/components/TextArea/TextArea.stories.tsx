import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./TextArea";

export default {
  title: "USWDS/Base/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      defaultValue: undefined,
      description: "Field label.",
    },
    fieldName: {
      defaultValue: undefined,
      description: "Name of the input field.",
    },
    characterCountMessage: {
      defaultValue: undefined,
      description:
        "Sets a message preceding the character count when showCharacterCount === true.",
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
    maxLength: {
      defaultValue: undefined,
      description: "Maximum number of characters the textarea can receive.",
    },
    placeholder: {
      defaultValue: undefined,
      description: "Input field placeholder text.",
    },
    required: {
      defaultValue: false,
      description:
        "Adds semantic required attr and appends an * to the end of the input label.",
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = ({ ...rest }) => (
  <TextArea {...rest} />
);

export const Default = Template.bind({});
export const CharachterCount = Template.bind({});
export const RequiredAndError = Template.bind({});
export const Success = Template.bind({});
export const InputFilter = Template.bind({});
Default.args = {
  fieldName: "input-type-text",
  label: "Input Label",
};

CharachterCount.args = {
  fieldName: "input-type-text",
  label: "Required Input Field",
  placeholder: "Placeholder Text",
  characterCountMessage: "Available remaining characters: ",
  initialValue:
    "Wait... how long is this message?\n\n33 characters? I'm running out of space!",
  showCharacterCount: true,
  maxLength: 500,
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

InputFilter.args = {
  fieldName: "input-type-text",
  label: "This field only accepts a numerical input",
  placeholder: "Numbers only",
  inputFilter: /^-?\d*$/i,
};
