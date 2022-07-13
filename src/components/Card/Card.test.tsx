import React from "react";
import { screen, render } from "../../test-setup";
import { Card } from "./Card";

describe("Tests for the button component.", () => {
  beforeAll(() => {
    render(<Card />);
  });

  it("Should render", () => {
    const buttonComp = screen.getByRole("button");

    expect(buttonComp).toBeInTheDocument();
  });
});
