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
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = ({
  cardBodyTextContent,
  cardFooterContent,
  cardHeaderText,
  cardMediaAltText,
  cardMediaSource,
  cardMediaRight,
  insetMedia,
  showCardMedia,
  moveImageInFlow,
  isFlagLayout,
}) => (
  <Card type={isFlagLayout ? "flag" : "normal"} mediaRight={cardMediaRight}>
    <CardContainer>
      <CardHeader>{cardHeaderText}</CardHeader>
      {showCardMedia && cardMediaSource && (
        <CardMedia
          exdent={moveImageInFlow}
          imageSource={cardMediaSource}
          altText={cardMediaAltText ?? ""}
          insetMedia={insetMedia}
        />
      )}
      <CardBody>
        <CardBodyText>{cardBodyTextContent}</CardBodyText>
      </CardBody>
      <CardFooter>
        <Button>{cardFooterContent}</Button>
      </CardFooter>
    </CardContainer>
  </Card>
);

export const BasicCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicCard.args = {
  cardBodyTextContent: "This is a card body text.",
  cardFooterContent: "Visit",
  cardHeaderText: "Card Header",
  cardMediaAltText: "Card Media Alt Text",
  cardMediaSource:
    "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg",
  showCardMedia: true,
  moveImageInFlow: false,
  isFlagLayout: false,
  insetMedia: false,
  cardMediaRight: false,
};
