import React from "react";
import { screen, render } from "../../test-setup";
import { Alert } from "./Alert";

describe("Tests for the Alert component", () => {
  it("should render an info alert", () => {
    render(
      <Alert
        data-testid="Alert"
        variation="info"
        alertHeading="Test"
        alertBody="Test body"
      />
    );

    const AlertComp = screen.getByTestId("Alert");

    expect(AlertComp).toBeInTheDocument();
    expect(AlertComp).toHaveTextContent("Test");
    expect(AlertComp).toHaveTextContent("Test body");
  });

  it("should render a warning slim alert without an icon", () => {
    render(
      <Alert
        data-testid="Alert"
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

    const AlertComp = screen.getByTestId("Alert");

    expect(AlertComp).toHaveTextContent("Warning Heading");
    expect(AlertComp).toHaveTextContent("Warning Body");
    expect(AlertComp).toHaveClass("usa-alert--slim");
    expect(AlertComp).toHaveClass("usa-alert--no-icon");
  });
});

describe("compontent snapshots", () => {
  it("should render an info alert", () => {
    const { container } = render(
      <Alert variation="info" alertHeading="Test1" alertBody="Test body1" />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render a warning alert", () => {
    const { container } = render(
      <Alert
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
