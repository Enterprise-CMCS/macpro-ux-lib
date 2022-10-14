import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { FilterChip } from "./FilterChip";

describe("Tests for the FilterChip component", () => {
  it("should render", () => {
    render(<FilterChip />);
  });
});
