import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DateRange } from "./DateRange";

export default {
  title: "COMPONENTS/DateRange",
  component: DateRange,
  argTypes: {
    defaultStartDate: {
      description: "Value of the input element.",
      control: { type: "text" },
    },
    startDate: {
      description: "Value of the input element.",
      control: { type: "text" },
    },
    startInputId: {
      description: "Value of the input element.",
    },
    startInputName: {
      description: "Value of the input element.",
    },
    startLabel: {
      description: "Value of the input element.",
    },
    defaultEndDate: {
      description: "Value of the input element.",
      control: { type: "text" },
    },
    endDate: {
      description: "Value of the input element.",
      control: { type: "text" },
    },
    endInputId: {
      description: "Value of the input element.",
    },

    endInputName: {
      description: "Value of the input element.",
    },
    endLabel: {
      description: "Value of the input element.",
    },
    disabled: {
      description: "Value of the input element.",
    },
    hint: {
      description: "Value of the input element.",
    },
  },
  args: {},
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

export const PrimaryDatefield = Template.bind({});
PrimaryDatefield.args = {
  id: "default",
  name: "default",
  label: "DateRange",
};

export const DefaultDatefield = Template.bind({});
DefaultDatefield.args = {
  defaultDate: "08/08/2022",
  id: "default",
  name: "default",
  label: "default",
};
DefaultDatefield.parameters = {
  docs: {
    description: {
      story:
        "Default placeholder values can be given to inputs that could make selecting dates easier for our users",
    },
  },
};

export const MinimumDateRange = Template.bind({});
MinimumDateRange.args = {
  minDate: "08/08/2022",
  id: "min-date",
  name: "min-date",
  label: "Minimum date",
};
MinimumDateRange.parameters = {
  docs: {
    description: {
      story:
        "A min date can be provided to prevent users from selecting a date before a certain date",
    },
  },
};

export const MaximumDateRange = Template.bind({});
MaximumDateRange.args = {
  maxDate: "08/08/2022",
  id: "max-date",
  name: "max-date",
  label: "Maximum date",
};
MaximumDateRange.parameters = {
  docs: {
    description: {
      story:
        "A max date can be provided to prevent users from selecting a date after a certain date",
    },
  },
};
