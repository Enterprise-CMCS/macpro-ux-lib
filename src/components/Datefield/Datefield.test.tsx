import React from "react";
import { Datefield } from "./Datefield";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the Datefield component.", () => {
  it("Should render with hint and initalized value", async () => {
    const { container } = render(
      <Datefield id="test-1" name="test-1" label="test-1" value="10/10/2020" />
    );
    await new Promise((res) => setTimeout(res, 100));

    const DatefieldComp = container.getElementsByClassName(
      "usa-input usa-date-picker__external-input"
    )[0];
    const labelComp = screen.getByText("test-1");

    expect(labelComp).toBeInTheDocument();
    expect(DatefieldComp).toHaveValue("10/10/2020");
  });

  it("Should fire and change the value when the user types", async () => {
    const { container } = render(
      <Datefield id="test-2" name="test-2" label="test-2" />
    );
    await new Promise((res) => setTimeout(res, 100));

    const DatefieldComp = container.getElementsByClassName(
      "usa-input usa-date-picker__external-input"
    )[0];

    fireEvent.keyDown(DatefieldComp, {
      target: { value: "10/10/2020" },
    });
    expect(DatefieldComp).toHaveValue("10/10/2020");

    fireEvent.keyDown(DatefieldComp, {
      target: { value: "" },
    });

    fireEvent.keyDown(DatefieldComp, { key: "/" });
    expect(DatefieldComp).toHaveValue("");
  });

  it("Should fire a check on blur", async () => {
    render(
      <Datefield
        id="test-4"
        name="test-4"
        label="test-4"
        data-testid="Datefield"
      />
    );
    await new Promise((res) => setTimeout(res, 100));

    const DatefieldComp = screen.getAllByLabelText("test-4")[1];

    fireEvent.blur(DatefieldComp, {
      target: { value: "10/10/2020" },
    });
    expect(DatefieldComp).toHaveValue("10/10/2020");

    fireEvent.blur(DatefieldComp, {
      target: { value: "" },
    });
    expect(DatefieldComp).toHaveValue("");

    fireEvent.blur(DatefieldComp, {
      target: { value: "00/00/00" },
    });
    const hintComp = screen.getByText(
      "Inputted date must be a valid date in mm/dd/yyyy"
    );

    expect(hintComp).toBeInTheDocument();
    expect(DatefieldComp).toHaveValue("00/00/00");
    expect(DatefieldComp).toHaveAttribute("aria-describedby", "test-4-hint");
  });

  it("Should open the calendar component and choose a date", async () => {
    const { container } = render(
      <Datefield
        data-testid="Datefield"
        id="test-4"
        name="test-4"
        label="test-4"
      />
    );
    await new Promise((res) => setTimeout(res, 100));

    const DatefieldButton = container.getElementsByClassName(
      "usa-date-picker__button"
    )[0];

    fireEvent.click(DatefieldButton);
    const randomDayButton = screen.getAllByRole("button")[6];
    fireEvent.click(randomDayButton);
  });
});

describe("compontent snapshots", () => {
  it("primary datefield", () => {
    const { container } = render(
      <Datefield hint id="test-8" name="test-8" label="test-8" />
    );
    expect(container).toMatchSnapshot();
  });

  it("max date datefield", () => {
    const { container } = render(
      <Datefield
        hint
        id="test-5"
        name="test-5"
        label="test-5"
        maxDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("min date datefield", () => {
    const { container } = render(
      <Datefield
        hint
        id="test-6"
        name="test-6"
        label="test-6"
        required
        minDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
