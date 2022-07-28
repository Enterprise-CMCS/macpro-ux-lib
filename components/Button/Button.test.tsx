import React from "react";
import { screen, render } from "../../test-setup";
import { Button } from "./Button";

describe("Tests for the button component.", () => {
  beforeAll(() => {
    render(<Button>Testing</Button>);
  });

  it("Should render", () => {
    const buttonComp = screen.getByRole("button");

    expect(buttonComp).toBeInTheDocument();
  });
});
