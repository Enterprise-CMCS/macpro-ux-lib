import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { SiteAlert } from "./SiteAlert";

describe("Tests for the SiteAlert component", () => {
  it("should render an info alert", () => {
    render(
      <SiteAlert
        data-testid="SiteAlert"
        variation="info"
        alertHeading="Test"
        alertBody="Test body"
      />
    );

    const AlertComp = screen.getByTestId("SiteAlert");

    expect(AlertComp).toBeInTheDocument();
    expect(AlertComp).toHaveTextContent("Test");
    expect(AlertComp).toHaveTextContent("Test body");
  });

  it("should render a warning slim alert without an icon", () => {
    render(
      <SiteAlert
        data-testid="SiteAlert"
        variation="warning"
        alertHeading="Warning Heading"
        alertBody="Warning Body"
        icon={false}
        slim
        close={() => {
          console.log("test");
        }}
      />
    );

    const AlertComp = screen.getByTestId("SiteAlert");

    expect(AlertComp).toHaveTextContent("Warning Heading");
    expect(AlertComp).toHaveTextContent("Warning Body");
    expect(AlertComp).toHaveClass("usa-alert--slim");
    expect(AlertComp).toHaveClass("usa-alert--no-icon");
  });
});

describe("compontent snapshots", () => {
  it("should render an info alert", () => {
    const { container } = render(
      <SiteAlert variation="info" alertHeading="Test1" alertBody="Test body1" />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render a warning alert", () => {
    const { container } = render(
      <SiteAlert
        variation="warning"
        slim
        icon={false}
        alertHeading="Test2"
        alertBody="Test body2"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
