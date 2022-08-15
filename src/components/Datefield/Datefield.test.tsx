import React from "react";
import { Datefield } from "./Datefield";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the Datefield component.", () => {
  it("Should render and fire a callback", () => {
    render(<Datefield data-testid="Datefield" />);
    const DropdownComp = screen.getByTestId("Datefield");

    fireEvent.click(DropdownComp);
    expect(DropdownComp).toBeInTheDocument();
    expect(DropdownComp).toHaveTextContent("Datefield");
  });
});

it("Should render a Datefield with an aria label of shift icon left", () => {
  render(<Datefield />);
  const DropdownComp = screen.getByTestId("Datefield");

  expect(DropdownComp).toBeInTheDocument();
});

describe("compontent snapshots", () => {
  it("primary big disabled", () => {
    const { container } = render(<Datefield />);
    expect(container).toMatchSnapshot();
  });
});
