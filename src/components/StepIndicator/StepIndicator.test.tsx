import React from "react";
import { screen, render } from "../../test-setup";
import { StepIndicator } from "./StepIndicator";

describe("Tests for the StepIndicator component", () => {
  const steps = [
    { label: "Personal information", order: 1 },
    { label: "Household status", order: 2 },
    { label: "Supporting documents", order: 3 },
    { label: "Signature", order: 4 },
    { label: "Review and submit", order: 5 },
  ];

  it("should render the StepIndicator component", () => {
    render(
      <StepIndicator
        data-testid="StepAlert"
        currentProgress={0}
        steps={steps}
        headingText="Test"
      />
    );

    const StepComp = screen.getByTestId("StepAlert");

    expect(StepComp).toBeInTheDocument();
  });

  it("should render the StepIndicator component", () => {
    render(
      <StepIndicator
        data-testid="StepAlert"
        currentProgress={1}
        steps={steps}
        isCentered={true}
        headingText="Test Heading"
      />
    );

    const StepComp = screen.getByTestId("StepAlert");
    expect(StepComp).toBeInTheDocument();
    expect(StepComp).toHaveTextContent("Test Heading");
  });

  it("should render the StepIndicator component", () => {
    render(
      <StepIndicator
        data-testid="StepAlert"
        currentProgress={3}
        steps={steps}
        counters={true}
        smallCounters={true}
        showLabels={false}
        headingText="Test"
      />
    );

    const StepComp = screen.getByTestId("StepAlert");

    expect(StepComp).toHaveClass("usa-step-indicator--counters-sm");
  });

  it("should render the StepIndicator component", () => {
    render(
      <StepIndicator
        data-testid="StepAlert"
        currentProgress={6}
        steps={steps}
        counters={true}
        isCentered={true}
        headingText="Test"
      />
    );
    const StepComp = screen.getByTestId("StepAlert");

    expect(StepComp).toHaveClass("usa-step-indicator--center");
    expect(StepComp).toHaveClass("usa-step-indicator--counters");
  });

  describe("compontent snapshots", () => {
    it("should render a info alert", () => {
      const { container } = render(
        <StepIndicator
          data-testid="StepAlert"
          currentProgress={5}
          steps={steps}
          counters={true}
          isCentered={true}
          headingText="Test"
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
