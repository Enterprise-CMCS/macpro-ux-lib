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
  argTypes: {
    alignContent: {
      description:
        "String prop that aligns card content left, right, or center.",
    },
    altText: { description: "Image alt text." },
    bodyText: { description: "Text for the card body." },
    flagLayout: {
      description: "Controls the style of the card (normal or flag).",
    },
    flagRight: { description: "Controls how the flag content is aligned." },
    headerFirst: {
      description:
        "Sets header at top of card, drops media below. This value will override flagLayout.",
    },
    headerText: { description: "Card header text." },
    imageSource: { description: "Source of image file to be used in card." },
    insetMedia: {
      description: "Set a border of whitespace around card content.",
    },
  },
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
