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
        currentProgress={1}
        steps={steps}
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
      />
    );

    const StepComp = screen.getByTestId("StepAlert");
    expect(StepComp).toBeInTheDocument();
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
      />
    );

    const StepComp = screen.getByTestId("StepAlert");

    expect(StepComp).toHaveClass("usa-step-indicator--counters-sm");
  });

  it("should render the StepIndicator component", () => {
    render(
      <StepIndicator
        data-testid="StepAlert"
        currentProgress={5}
        steps={steps}
        counters={true}
        isCentered={true}
      />
    );
    const StepComp = screen.getByTestId("StepAlert");

    expect(StepComp).toHaveClass("usa-step-indicator--center");
    expect(StepComp).toHaveClass("usa-step-indicator--counters");
  });
});
