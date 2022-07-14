import React from "react";
import { screen, render } from "../../test-setup";
import { Card } from "./Card";

describe("Tests for the button component.", () => {
  beforeAll(() => {
    render(
      <Card
        cardBodyTextContent="Hello there"
        cardFooterContent="Visit"
        cardHeaderText="How are you doing"
        cardMediaAltText="Generic"
        cardMediaSource="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
      />
    );
  });

  it("Should render", () => {
    const buttonComp = screen.getByText("Hello there");

    expect(buttonComp).toBeInTheDocument();
  });
});
