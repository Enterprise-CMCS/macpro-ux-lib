import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";
import { Button } from "../Button/Button";
import { TextInput } from "../TextInput/TextInput";

export default {
  title: "USWDS/Base/Card",
  component: Card,
  args: {
    headerText: "A Basic Card",
  },
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, ...rest }) => (
  <Card {...rest}>{children}</Card>
);

export const Default = Template.bind({});
export const BasicCard = Template.bind({});
export const FlagCard = Template.bind({});

Default.args = {
  bodyText: "It does not have much content.",
  altText: "Card Media Alt Text",
};

BasicCard.args = {
  bodyText: "This card has an image, a button, and a little text.",
  children: <Button>Button Text</Button>,
  imageSource:
    "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",
};

FlagCard.args = {
  bodyText: "This card uses the flag layout, and uses the insetMedia prop.",
  children: (
    <TextInput
      label="This TextInput is a Child"
      fieldName="text-input-in-card"
    />
  ),
  flagLayout: true,
  imageSource:
    "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",
  insetMedia: true,
};
