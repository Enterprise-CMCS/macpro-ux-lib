import React from "react";
import { Datefield } from "./Datefield";
import { fireEvent, screen, render } from "../../test-setup";
import { waitFor } from "@testing-library/react";

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
    expect(DatefieldComp).toBeInTheDocument();
  });

  it("Should render with hint", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-6"
        fieldName="test-6"
        label="test-6"
        value="10-10-2020"
        hint
      />
    );
    const DatefieldComp = screen.getByTestId("Datefield");
    const labelComp = screen.getByRole("label");

    expect(labelComp).toBeInTheDocument();
    expect(DatefieldComp).toHaveAttribute("value", "10-10-2020");
  });

  it("Should render with hint", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-7"
        fieldName="test-7"
        label="test-7"
        hint
        disabled
      />
    );
    const DatefieldComp = screen.getByTestId("Datefield");

    expect(DatefieldComp).toBeDisabled();
  });
});

describe("compontent snapshots", () => {
  it("primary datefield", () => {
    const { container } = render(
      <Datefield
        hint
        id="test-3"
        fieldName="test-3"
        label="test-3"
        defaultDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("max date datefield", () => {
    const { container } = render(
      <Datefield
        hint
        id="test-4"
        fieldName="test-3"
        label="test-4"
        maxDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("min date datefield", () => {
    const { container } = render(
      <Datefield
        hint
        id="test-5"
        fieldName="test-3"
        label="test-5"
        required
        minDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
