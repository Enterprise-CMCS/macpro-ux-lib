import React from "react";
import { screen, render } from "test-setup";
import { Typography } from "./Typography";

describe("Tests for the typography component.", () => {
  beforeAll(() => {
    render(<Typography as="p">Testing</Typography>);
  });

  it("Should render", () => {
    const textComp = screen.getByText(/testing/i);

    expect(textComp).toBeInTheDocument();
  });
});
