import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UsaBanner } from "./UsaBanner";

export default {
  title: "COMPONENTS/USA Banner",
  component: UsaBanner,
  args: {},
  argTypes: {
    className: {
      description:
        "Additional classes to be added to the root `section` element.",
    },
    id: {
      description:
        "A unique ID to be applied to the banner content at the root `section` element.",
    },
    locale: {
      description:
        "Determines which version of the banner to display (en === english, es === español).",
    },
    variant: {
      description:
        "Indicates which color variant of the banner to display. Defaults to standard light-gray background.",
    },
  },
} as ComponentMeta<typeof UsaBanner>;

const Template: ComponentStory<typeof UsaBanner> = ({ ...rest }) => (
  <UsaBanner {...rest} />
);

export const Default = Template.bind({});
Default.args = {};

export const DarkVariant = Template.bind({});
DarkVariant.args = { variant: "dark" };

export const EnglishBanner = Template.bind({});
EnglishBanner.args = {
  locale: "en",
};

export const SpanishBanner = Template.bind({});
SpanishBanner.args = {
  locale: "es",
};
