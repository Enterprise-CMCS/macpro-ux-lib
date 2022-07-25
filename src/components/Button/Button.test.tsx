import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Button } from "./Button";

describe("Tests for the button component.", () => {
  const mockChangeFn = jest.fn();

  beforeAll(() => {
    render(
      <Button data-testid="button" buttonText="Button" onClick={mockChangeFn} />
    );
  });

  it("Should render and be ", () => {
    const buttonComp = screen.getByTestId("button");
    fireEvent.click(buttonComp);
    expect(buttonComp).toBeInTheDocument();
    expect(buttonComp).toHaveTextContent("Button");
    expect(mockChangeFn).toHaveBeenCalled();
  });
});
