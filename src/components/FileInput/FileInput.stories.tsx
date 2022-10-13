import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FileInput } from "./FileInput";

export default {
  title: "COMPONENTS/FileInput",
  component: FileInput,
  args: {},
  argTypes: {
    id: {
      description: "The id to uniquely identify the file input.",
    },
    name: {
      description: "Name of the input field.",
    },
    multipleFiles: {
      description: "Controls if the input accepts multiple files.",
    },
    label: {
      description: "Used to label the file input in the UI.",
    },
    acceptedFileTypes: {
      description: "Array of string file types accepeted in this file input.",
    },
    hintText: {
      description:
        "Text to show to the user as a guide of the type of accepateble files.",
    },
    disabled: {
      description: "Controls whether the file input is disabled.",
    },
    error: {
      description: "Triggers error message and error styling.",
    },
    errorMessage: {
      description: "Message to show when an error is present.",
    },
    onChange: {
      description: "Function that is called when the File Input changes.",
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: "File input allows users to attach one or multiple files.",
      },
    },
  },
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = ({ ...rest }) => (
  <FileInput {...rest} />
);

export const Default = Template.bind({});
Default.args = { name: "1", id: "1" };

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  hintText: "This input accepts multiple files",
  multipleFiles: true,
  name: "2",
  id: "2",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  error: true,
  errorMessage: "There is an error uploading your image",
  name: "3",
  id: "3",
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, name: "4", id: "4" };
