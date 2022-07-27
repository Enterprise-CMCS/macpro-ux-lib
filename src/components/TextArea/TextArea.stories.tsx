import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./TextArea";

export default {
  title: "USWDS/Base/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      defaultValue: "Input Label",
      description: "Field label.",
    },
    fieldName: {
      defaultValue: "input-type-text",
      description: "Name of the input field.",
    },
    characterCountMessage: {
      description:
        "Sets a message preceding the character count when showCharacterCount === true.",
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
    maxLength: {
      description: "Maximum number of characters the textarea can receive.",
    },
    placeholder: {
      description: "Input field placeholder text.",
    },
    required: {
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
Default.args = {};

CharachterCount.args = {
  placeholder: "Placeholder Text",
  characterCountMessage: "Available remaining characters: ",
  initialValue:
    "Wait... how long is this message?\n\n33 characters? I'm running out of space!",
  showCharacterCount: true,
  maxLength: 500,
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
  initialValue: "This is a good value!",
  inputSuccess: true,
};

InputFilter.args = {
  placeholder: "This field only accepts a numerical input",
  inputFilter: /^-?\d*$/i,
};
