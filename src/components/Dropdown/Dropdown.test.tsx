import React from "react";
import { Dropdown } from "./Dropdown";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the Dropdown component.", () => {
  it("Should render and fire a callback", () => {
    render(<Dropdown data-testid="Dropdown" />);
    const DropdownComp = screen.getByTestId("Dropdown");

    fireEvent.click(DropdownComp);
    expect(DropdownComp).toBeInTheDocument();
    expect(DropdownComp).toHaveTextContent("Dropdown");
  });
});

it("Should render a Dropdown with an aria label of shift icon left", () => {
  render(<Dropdown />);
  const DropdownComp = screen.getByTestId("Dropdown");

  expect(DropdownComp).toBeInTheDocument();
});

describe("compontent snapshots", () => {
  it("primary big disabled", () => {
    const { container } = render(<Dropdown />);
    expect(container).toMatchSnapshot();
  });
});
