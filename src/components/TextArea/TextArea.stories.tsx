import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextArea } from "./TextArea";

export default {
  title: "USWDS/Base/TextArea",
  component: TextArea,
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
    characterCountMessage: {
      description:
        "Sets a message preceding the character count when showCharacterCount === true.",
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
    maxLength: {
      description: "Maximum number of characters the textarea can receive.",
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
  characterCountMessage: "Available remaining characters:",
  showCharacterCount: true,
  maxLength: 500,
  id: "character-count-textarea",
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
  initialValue: "This is a good value!",
  inputSuccess: true,
  id: "success-textarea",
};

InputFilter.args = {
  label: "This field only accepts a numerical input",
  inputFilter: /^-?\d*$/i,
  id: "filter-textarea",
};
