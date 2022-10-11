import { Tooltip } from "./Tooltip";
import { render, screen } from "../../test-setup";
import userEvent from "@testing-library/user-event";
import React from "react";

// jest.mock(
//   "../../../node_modules/@uswds/uswds/packages/usa-tooltip/src",
//   () => ({
//     off: jest.fn(),
//     on: jest.fn(),
//   })
// );

describe("Tooltip", () => {
  describe("Initialization", () => {
    beforeEach(() => {
      render(
        <div data-testid="wrapper">
          <Tooltip position="top" title="This is the tooltip">
            <button className="test-button">Test</button>
          </Tooltip>
        </div>
      );
    });

    it("renders the initial state as expected", () => {
      const wrapper = screen.getByTestId("wrapper");
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveTextContent("Test");

      const button = wrapper.getElementsByClassName("test-button")[0];
      expect(button).toBeInTheDocument();

      const tooltip = wrapper.getElementsByClassName("usa-tooltip__body")[0];
      expect(tooltip).toBeInTheDocument();
    });
  });

  describe("Hover states", () => {
    type PossiblePositions = "top" | "right" | "bottom" | "left";
    const positions: Array<PossiblePositions> = [
      "top",
      "right",
      "bottom",
      "left",
    ];

    for (const position of positions) {
      const tooltipText = `The tooltip is on the ${position}`;

      it(`renders the tooltip on the ${position}`, () => {
        render(
          <div data-testid="wrapper">
            <Tooltip position={position} title={tooltipText}>
              <button className="test-button">Test</button>
            </Tooltip>
          </div>
        );

        const wrapper = screen.getByTestId("wrapper");
        const button = wrapper.getElementsByClassName("test-button")[0];
        const tooltip = wrapper.getElementsByClassName("usa-tooltip__body")[0];
        // Initial state
        expect(tooltip).toBeVisible();
        expect(tooltip).toHaveTextContent(tooltipText);
        expect(tooltip).not.toHaveClass("is-set");
        expect(tooltip).toHaveAttribute("aria-hidden", "true");
        expect(tooltip).not.toHaveClass(`usa-tooltip__body--${position}`);

        // Hover
        userEvent.hover(button);
        expect(tooltip).toHaveClass("is-set");
        expect(tooltip).toHaveAttribute("aria-hidden", "false");
        expect(tooltip).toHaveClass(`usa-tooltip__body--${position}`);

        // Stop hovering
        userEvent.unhover(button);
        expect(tooltip).not.toHaveClass("is-set");
        expect(tooltip).toHaveAttribute("aria-hidden", "true");
        expect(tooltip).toHaveClass(`usa-tooltip__body--${position}`);
      });
    }
  });
});
