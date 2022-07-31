import React from "react";
import { screen, render } from "../../test-setup";
import { Button } from "../Button/Button";
import { Card } from "./Card";

describe("Card component", () => {
  it("Should render", () => {
    render(<Card headerText="Card Header Text" bodyText="Card Body Text" />);
    const card = screen.getByText("Card Header Text");
    expect(card).toBeInTheDocument();
  });

  it("Should render with children", () => {
    render(
      <Card headerText="Card Header Text" bodyText="Card Body Text">
        <Button>Visit</Button>
      </Card>
    );

    const button = screen.getByText("Visit");
    expect(button).toBeInTheDocument();
  });

  it("Should render with an image", () => {
    render(
      <Card
        headerText="Card Header Text"
        bodyText="Card Body Text"
        imageSource="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        altText="Card Media Alt Text"
      />
    );

    const card = screen.getByText("Card Header Text");
    expect(card).toBeInTheDocument();
  });

  describe("component snapshots", () => {
    it("default", () => {
      const { container } = render(
        <Card headerText="Card Header Text" bodyText="Card Body Text" />
      );
      expect(container).toMatchSnapshot();
    });

    it("media and child component", () => {
      const { container } = render(
        <Card
          headerText="Card Header Text"
          bodyText="Card Body Text"
          imageSource="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          altText="Card Media Alt Text"
        >
          <Button>Visit</Button>
        </Card>
      );
      expect(container).toMatchSnapshot();
    });

    it("media and child component in flag", () => {
      const { container } = render(
        <Card
          headerText="Card Header Text"
          bodyText="Card Body Text"
          imageSource="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          altText="Card Media Alt Text"
          flagLayout
        >
          <Button>Visit</Button>
        </Card>
      );
      expect(container).toMatchSnapshot();
    });

    it("media and child component in flag layout right", () => {
      const { container } = render(
        <Card
          headerText="Card Header Text"
          bodyText="Card Body Text"
          imageSource="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          altText="Card Media Alt Text"
          flagLayout
          flagRight
        >
          <Button>Visit</Button>
        </Card>
      );
      expect(container).toMatchSnapshot();
    });

    it("media with inset and header exdent", () => {
      const { container } = render(
        <Card
          headerText="Card Header Text"
          bodyText="Card Body Text"
          imageSource="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          altText="Card Media Alt Text"
          insetMedia
          exdent
        >
          <Button>Visit</Button>
        </Card>
      );
      expect(container).toMatchSnapshot();
    });
  });
});
