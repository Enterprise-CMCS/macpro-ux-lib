import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { SiteAlert } from "./SiteAlert";

describe("Tests for the SiteAlert component", () => {
  it("should render an info alert", () => {
    render(
      <SiteAlert
        data-testid="SiteAlert"
        alertHeading="Test"
        alertBody="Test body"
      />
    );

    const AlertComp = screen.getByTestId("SiteAlert");

    expect(AlertComp).toBeInTheDocument();
    expect(AlertComp).toHaveTextContent("Test");
    expect(AlertComp).toHaveTextContent("Test body");
  });

  it("should render an emergency slim alert without an icon", () => {
    render(
      <SiteAlert
        data-testid="SiteAlert"
        alertHeading="Warning Heading"
        alertBody="Warning Body"
        emergency
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
    expect(AlertComp).toHaveClass("usa-site-alert--slim");
    expect(AlertComp).toHaveClass("usa-site-alert--no-icon");
  });
});

describe("compontent snapshots", () => {
  it("should render an emergency alert", () => {
    const { container } = render(
      <SiteAlert emergency alertHeading="Test1" alertBody="Test body1" />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render a info alert", () => {
    const { container } = render(
      <SiteAlert slim icon={false} alertBody="Test body2" />
    );
    expect(container).toMatchSnapshot();
  });
});
