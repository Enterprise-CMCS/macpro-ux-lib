import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { StepIndicator } from "./StepIndicator";

describe("Tests for the StepIndicator component", () => {
  it("should render", () => {
    render(<StepIndicator />);
  });
});
