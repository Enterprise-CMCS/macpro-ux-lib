import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { MultiSelect } from "./MultiSelect";

describe("Tests for the MultiSelect component", () => {
  it("should render", () => {
    render(<MultiSelect />);
  });
});
