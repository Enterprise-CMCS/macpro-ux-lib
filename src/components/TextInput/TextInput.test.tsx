import React from "react";
import { screen, render } from "../../test-setup";
import { TextInput } from "./TextInput";

describe("Tests for the button component.", () => {
  beforeAll(() => {
    render(<TextInput label="Testing Input" fieldName="testing-input" />);
  });

  it("Should render", () => {
    const comp = screen.getByLabelText("Testing Input");
    expect(comp).toBeInTheDocument();
  });
});
