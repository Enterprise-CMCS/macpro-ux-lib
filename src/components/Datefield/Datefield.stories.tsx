import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Datefield } from "./Datefield";

export default {
  title: "COMPONENTS/Datefield",
  component: Datefield,
  argTypes: {
    id: {
      description: "A unique identifier for the input.",
    },
    fieldName: {
      description: "Name of the input field.",
    },
    label: {
      description: "Field label.",
    },
    hint: {
      description:
        "Boolean that shows or hide the date format hint, in the format YYYY-MM-DD.",
    },
    required: {
      description: "Adds semantic required.",
    },
    disabled: {
      description:
        "Controls whether or not the date picker is disabled to the user.",
    },
    defaultDate: {
      description:
        "The date picker input will set this value if it is a valid date. The date should be in the format YYYY-MM-DD.",
    },
    minDate: {
      description:
        "The date picker will not allow a date selection before this date. The date should be in the format YYYY-MM-DD.",
    },
    maxDate: {
      description:
        "The date picker will not allow a date selection after this date. The date should be in the format YYYY-MM-DD.",
    },
    value: {
      description: "Value of the input element.",
    },
  },
  args: {},
  parameters: {
    docs: {
      description: {
        component:
          "A date picker helps users select a single date. Use this when users need to schedule or record an event and benefit from the context of a calendar. It can also be used when knowing the day of the week helps users choose a specific date.",
      },
    },
  },
} as ComponentMeta<typeof Datefield>;

const Template: ComponentStory<typeof Datefield> = ({ ...rest }) => (
  <Datefield {...rest} />
);

export const PrimaryDatefield = Template.bind({});
PrimaryDatefield.args = {};

export const DefaultDatefield = Template.bind({});
DefaultDatefield.args = { defaultDate: "2022-08-08" };

export const MinimumDateRange = Template.bind({});
MinimumDateRange.args = { minDate: "2022-08-08" };

export const MaximumDateRange = Template.bind({});
MaximumDateRange.args = { maxDate: "2022-08-08" };
