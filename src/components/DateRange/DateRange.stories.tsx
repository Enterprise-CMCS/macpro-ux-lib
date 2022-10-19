import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DateRange } from "./DateRange";

export default {
  title: "COMPONENTS/DateRange",
  component: DateRange,
  argTypes: {
    minDate: {
      description:
        "The date picker will not allow a date selection before this date. The date should be in the format mm/dd/yyyy.",
      control: { type: "text" },
    },
    maxDate: {
      description:
        "The date picker will not allow a date selection after this date. The date should be in the format mm/dd/yyyy.",
      control: { type: "text" },
    },
    startDate: {
      description:
        "The value given to the start date input. The date should be in the format mm/dd/yyyy",
      control: { type: "text" },
    },
    startInputId: {
      description: "A unique identifier for the start date input.",
    },
    startInputName: {
      description: "Name of the start date input field.",
    },
    startLabel: {
      description: "The label of the start date input.",
    },

    endDate: {
      description:
        "The value given to the end date input. The date should be in the format mm/dd/yyyy.",
      control: { type: "text" },
    },
    endInputId: {
      description: "A unique identifier for the end date input.",
    },

    endInputName: {
      description: "Name of the end date input field.",
    },
    endLabel: {
      description: "The label of the end date input.",
    },
    disabled: {
      description:
        "Controls whether or not the date range pickers are disabled to the user.",
    },
    hint: {
      description:
        "Boolean that shows or hide the date format hint for both inputs, in the format mm/dd/yyyy.",
    },
    required: {
      description:
        "The date picker component will be required in terms of native form validation.",
    },
  },
  args: {
    startInputId: "id-1",
    startInputName: "name-1",
    startLabel: "Start Date",
    endInputId: "id-2",
    endInputName: "name-2",
    endLabel: "End Date",
  },
  parameters: {
    docs: {
      description: {
        component:
          "A date range picker helps users select a range between two dates. When users need to schedule or record an event and benefit from the context of a calendar. When knowing the day of the week helps users choose a specific date.",
      },
    },
  },
} as ComponentMeta<typeof DateRange>;

const Template: ComponentStory<typeof DateRange> = ({ ...rest }) => (
  <DateRange {...rest} />
);

export const PrimaryDateRange = Template.bind({});

export const DateRangeWithDefaults = Template.bind({});
DateRangeWithDefaults.args = {
  startDate: "10/10/2022",
  endDate: "10/14/2022",
};
