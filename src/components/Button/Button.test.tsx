import React from "react";
import { Button } from "./Button";
import { fireEvent, screen, render } from "../../test-setup";
import userEvent from "@testing-library/user-event";

describe("Tests for the button component.", () => {
  const mockChangeFn = jest.fn();

  it("Should render and fire a callback", () => {
    render(
      <Button data-testid="button" buttonText="Button" onClick={mockChangeFn} />
    );
    const buttonComp = screen.getByTestId("button");

    fireEvent.click(buttonComp);
    expect(buttonComp).toBeInTheDocument();
    expect(buttonComp).toHaveTextContent("Button");
    expect(mockChangeFn).toHaveBeenCalled();
  });

  it("Should render a disabled button with an aria label of disabled big button", () => {
    render(
      <Button
        data-testid="button"
        disabled
        buttonText="Disabled Button"
        onClick={mockChangeFn}
        ariaLabel="disabled big button"
        largeButton
        buttonVariation="inverse"
        iconName="add"
      />
    );
    const buttonComp = screen.getByTestId("button");

    expect(buttonComp).toBeInTheDocument();
    expect(buttonComp).toHaveTextContent("Disabled Button");
    expect(buttonComp).toBeDisabled();
    expect(buttonComp).toHaveAttribute("aria-label", "disabled big button");
  });

  it("Should render a button with an aria label of shift icon left", () => {
    render(
      <Button
        data-testid="button"
        buttonText="Test Button"
        onClick={mockChangeFn}
        ariaLabel="shift icon left"
        shiftIconLeft
        buttonVariation="base"
        iconName="add"
      />
    );
    const buttonComp = screen.getByTestId("button");

    expect(buttonComp).toBeInTheDocument();
    expect(buttonComp).toHaveTextContent("Test Button");
    expect(buttonComp).toHaveClass("usa-button--base");
    expect(buttonComp).toHaveAttribute("aria-label", "shift icon left");
  });

  describe("tooltip hover states", () => {
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
            <Button
              data-testid="button"
              className="test-button"
              buttonText="Test Button"
              onClick={mockChangeFn}
              ariaLabel="tooltip button"
              withTooltip
              tooltipText={tooltipText}
              tooltipPosition={position}
            />
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

  describe("compontent snapshots", () => {
    it("primary big disabled", () => {
      const { container } = render(
        <Button
          data-testid="button"
          buttonText="Big Inverse Button"
          onClick={mockChangeFn}
          ariaLabel="big inverse button"
          largeButton
          buttonVariation="inverse"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("secondary button", () => {
      const { container } = render(
        <Button
          data-testid="button"
          buttonText="Submit"
          onClick={mockChangeFn}
          ariaLabel="Secondary button"
          buttonVariation="secondary"
          iconName="add"
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
