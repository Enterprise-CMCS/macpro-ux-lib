import React from "react";
import { screen, render, getByText } from "../../test-setup";
import { Typography } from "./Typography";

describe("Tests for the typography component.", () => {
  it("Should render", () => {
    render(<Typography>Testing</Typography>);

    const textComp = screen.getByText(/testing/i);
    expect(textComp.tagName).toBe("P");
    expect(textComp).toBeInTheDocument();
  });

  it("Should render correctly based on `as` prop", () => {
    type Elements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    const elmTypes: Elements[] = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];

    for (const elmType of elmTypes) {
      const { container } = render(
        <Typography as={elmType}>Testing</Typography>
      );
      const textComp = getByText(container, /testing/i);
      expect(textComp.tagName).toBe(elmType.toUpperCase());
    }
  });
});
