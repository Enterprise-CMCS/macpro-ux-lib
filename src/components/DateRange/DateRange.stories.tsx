import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DateRange } from "./DateRange";

export default {
  title: "COMPONENTS/DateRange",
  component: DateRange,
  argTypes: {
    defaultStartDate: {
      description:
        "The start date picker input will set this value by default if it is a valid date. The date should be in the format mm/dd/yyyy.",
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
    defaultEndDate: {
      description:
        "The end date picker input will set this value by default if it is a valid date. The date should be in the format mm/dd/yyyy.",
      control: { type: "text" },
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
  defaultStartDate: "10/10/2022",
  defaultEndDate: "10/15/2022",
};

DateRangeWithDefaults.parameters = {
  docs: {
    description: {
      story:
        "A start and end date can be provided to help users selected a certain start or end range by default",
    },
  },
};
