import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { FileInput } from "./FileInput";

describe("Tests for the FileInput component", () => {
  it("should render", () => {
    render(<FileInput />);
  });
});
