import React from "react";
import { Datefield } from "./Datefield";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the Datefield component.", () => {
  it("Should render with hint", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-1"
        fieldName="test-1"
        label="test-1"
        hint
      />
    );
    const DatefieldComp = screen.getByTestId("Datefield");

    fireEvent.click(DatefieldComp);
    expect(DatefieldComp).toBeInTheDocument();
    expect(DatefieldComp).toHaveTextContent("mm/dd/yyyy");
  });
});

describe("compontent snapshots", () => {
  it("primary datefield", () => {
    const { container } = render(
      <Datefield hint id="test-3" fieldName="test-3" label="test-3" />
    );
    expect(container).toMatchSnapshot();
  });
});
