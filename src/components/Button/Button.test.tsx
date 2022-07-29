import React from "react";
import { Button } from "./Button";
import { fireEvent, screen, render } from "../../test-setup";

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
    const wrapper = render(
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
