import React from "react";
import { Datefield } from "./Datefield";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the Datefield component.", () => {
  it("Should render and fire a callback", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-1"
        fieldName="test-1"
        label="test-1"
      />
    );
    const DatefieldComp = screen.getByTestId("Datefield");

    fireEvent.click(DatefieldComp);
    expect(DatefieldComp).toBeInTheDocument();
    expect(DatefieldComp).toHaveTextContent("Datefield");
  });
});

it("Should render a Datefield with an aria label of shift icon left", () => {
  render(<Datefield id="test-2" fieldName="test-2" label="test-2" />);
  const DatefieldComp = screen.getByTestId("Datefield");

  expect(DatefieldComp).toBeInTheDocument();
});

describe("compontent snapshots", () => {
  it("primary datefield", () => {
    const { container } = render(
      <Datefield id="test-3" fieldName="test-3" label="test-3" />
    );
    expect(container).toMatchSnapshot();
  });
});
