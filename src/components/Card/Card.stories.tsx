import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Card,
  CardBody,
  CardBodyText,
  CardContainer,
  CardFooter,
  CardHeader,
  CardMedia,
} from "./Card";
import { Button } from "../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "USWDS/Base/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BasicCardTemplate = () => (
  <CardContainer>
    <CardHeader>Testing</CardHeader>
    <CardBody>
      <CardBodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </CardBodyText>
    </CardBody>
    <CardFooter>
      <Button>Visit</Button>
    </CardFooter>
  </CardContainer>
);

const ImageCardTemplate = () => (
  <CardContainer>
    <CardHeader>Testing</CardHeader>
    <CardMedia
      imageSource="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
      altText="Generic"
    />
    <CardBody>
      <CardBodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </CardBodyText>
    </CardBody>
    <CardFooter>
      <Button>Visit</Button>
    </CardFooter>
  </CardContainer>
);

export const BasicCard = BasicCardTemplate.bind({});
export const ImageCard = ImageCardTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicCard.args = {};
ImageCard.args = {};
