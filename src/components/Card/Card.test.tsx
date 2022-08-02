import React from "react";
import { screen, render } from "../../test-setup";
import { Button } from "../Button/Button";
import {
  CardBody,
  CardBodyText,
  CardContainer,
  CardFooter,
  CardHeader,
  CardMedia,
} from "./Card";

describe("Tests for the button component.", () => {
  beforeAll(() => {
    render(
      <CardContainer>
        <CardHeader>Card Header Text</CardHeader>
        <CardMedia
          imageSource={
            "https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          }
          altText={"Card Media Alt Text"}
        />
        <CardBody>
          <CardBodyText>Card Body Text</CardBodyText>
        </CardBody>
        <CardFooter>
          <Button buttonText="Visit" />
        </CardFooter>
      </CardContainer>
    );
  });

  it("Should render", () => {
    const cardComp = screen.getByText("Card Header Text");

    expect(cardComp).toBeInTheDocument();
  });
});
