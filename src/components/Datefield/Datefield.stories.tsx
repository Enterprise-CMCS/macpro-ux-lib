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
    name: {
      description: "Name of the input field.",
    },
    label: {
      description: "Field label.",
    },
    hint: {
      description:
        "Boolean that shows or hide the date format hint, in the format mm/dd/yyyy.",
    },
    disabled: {
      description:
        "Controls whether or not the date picker is disabled to the user.",
    },
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
    value: {
      description: "Value of the input element.",
    },
    required: {
      description:
        "The date picker component will be required in terms of native form validation.",
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
PrimaryDatefield.args = {
  id: "primary",
  name: "primary",
  label: "Datefield",
};

export const DefaultDatefield = Template.bind({});
DefaultDatefield.args = {
  value: "08/08/2022",
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

export const MinimumDateField = Template.bind({});
MinimumDateField.args = {
  minDate: "08/08/2022",
  id: "min-date",
  name: "min-date",
  label: "Minimum date",
};
MinimumDateField.parameters = {
  docs: {
    description: {
      story:
        "A min date can be provided to prevent users from selecting a date before a certain date. The minimum date is 08/08/2022 here.",
    },
  },
};

export const MaximumDateField = Template.bind({});
MaximumDateField.args = {
  maxDate: "08/08/2022",
  id: "max-date",
  name: "max-date",
  label: "Maximum date",
};
MaximumDateField.parameters = {
  docs: {
    description: {
      story:
        "A max date can be provided to prevent users from selecting a date after a certain date. The max date is 08/08/2022 here.",
    },
  },
};
