import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { TextArea } from "./TextArea";

export default {
  title: "COMPONENTS/TextArea",
  component: TextArea,
  args: {
    label: "Input Label",
    name: "input-type-text",
    inputError: false,
    inputSuccess: false,
    required: false,
  },
  argTypes: {
    id: {
      description: "Unique ID for the input field.",
    },
    label: {
      description: "Field label.",
    },
    name: {
      description: "Name of the input field.",
    },
    characterCountMessage: {
      description: "Text to be displayed before the character count.",
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
    maxLength: {
      description: "Maximum number of characters the textarea can receive.",
    },
    required: {
      description:
        "Adds semantic required attr and appends an * to the end of the input label.",
    },
    showCharacterCount: {
      description:
        "Show the character count. If maxLength is set, character count will appear as a fraction.",
    },
  },
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = ({ ...rest }) => (
  <TextArea {...rest} />
);

export const Default = Template.bind({});
export const CharacterCount = Template.bind({});
export const Required = Template.bind({});
export const WithError = Template.bind({});
export const Success = Template.bind({});
Default.args = {};

CharacterCount.args = {
  label: "TextArea with Character Count",
  characterCountMessage: "Available remaining characters:",
  showCharacterCount: true,
  maxLength: 500,
  id: "character-count-textarea",
};

Required.args = {
  label: "Required TextArea",
  required: true,
  id: "required-textarea",
};

WithError.args = {
  errorMessage: "Helpful Error Message",
  inputError: true,
  label: "TextArea with Error Message",
  id: "required-and-error-textarea",
};

Success.args = {
  label: "Field with Success Indicator",
  initialValue: "This is a good value!",
  inputSuccess: true,
  id: "success-textarea",
};
