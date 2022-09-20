import React from "react";
import { Datefield } from "./Datefield";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the Datefield component.", () => {
  it("Should render with hint", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-1"
        name="test-1"
        label="test-1"
        hint
      />
    );
    const DatefieldComp = screen.getByTestId("Datefield");
    expect(DatefieldComp).toBeInTheDocument();
  });

  it("Should render with hint and initalized value", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-2"
        name="test-2"
        label="test-2"
        value="10/10/2020"
        hint
      />
    );
    const DatefieldComp = screen.getByTestId("Datefield");
    const labelComp = screen.getByRole("label");

    expect(labelComp).toBeInTheDocument();
    expect(DatefieldComp).toHaveAttribute("value", "10/10/2020");
  });

  it("Should fire and change the value when the user types", () => {
    const mockDateRangeFunc = jest.fn();

    render(
      <Datefield
        data-testid="Datefield"
        id="test-3"
        name="test-3"
        label="test-3"
        hint
        dateRangeChange={mockDateRangeFunc}
      />
    );

    const DatefieldComp = screen.getByLabelText("test-3");
    fireEvent.change(DatefieldComp, {
      target: { value: "10/10/2020" },
    });
    expect(DatefieldComp).toHaveDisplayValue("10/10/2020");

    fireEvent.change(DatefieldComp, {
      target: { value: "" },
    });
    expect(DatefieldComp).toHaveDisplayValue("");
  });

  it("Should fire a check on blur", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-3"
        name="test-3"
        label="test-3"
        hint
      />
    );
    const DatefieldComp = screen.getByLabelText("test-3");
    fireEvent.blur(DatefieldComp, {
      target: { value: "10/10/2020" },
    });
    expect(DatefieldComp).toHaveDisplayValue("10/10/2020");

    fireEvent.blur(DatefieldComp, {
      target: { value: "" },
    });
    expect(DatefieldComp).toHaveDisplayValue("");

    fireEvent.blur(DatefieldComp, {
      target: { value: "asdasd" },
    });
    const hintComp = screen.getByText("Inputted date must be mm/dd/yyyy");

    expect(hintComp).toBeInTheDocument();
    expect(DatefieldComp).toHaveDisplayValue("asdasd");
    expect(DatefieldComp).toHaveAttribute("aria-describedby", "test-3-hint");
  });

  it("Should open the calendar component with min and max dates", () => {
    const mockOnClick = jest.fn();
    const mockClassFunc = jest.fn();
    const mockDateRangeFunc = jest.fn();
    render(
      <Datefield
        data-testid="Datefield"
        id="test-4"
        name="test-4"
        label="test-4"
        minDate="10/10/2022"
        maxDate="10/11/2022"
        value="10/10/2022"
        hint={false}
        toggleRangeCalendars={mockOnClick}
        rangeCalendarOpen={true}
        selectedRangeClassName={mockClassFunc}
        dateRangeChange={mockDateRangeFunc}
      />
    );
    const DatefieldInput = screen.getByTestId("Datefield");
    const DatefieldButton = screen.getByTestId("calendar-button");
    fireEvent.click(DatefieldButton);
    const DatefieldCalendar = screen.getByTestId("calendar");

    expect(DatefieldCalendar).toBeInTheDocument();
    expect(DatefieldInput).toHaveValue("10/10/2022");
    expect(DatefieldInput).toHaveAttribute("aria-describedby", "test-4-label");
  });

  it("Should open the calendar component and choose a date", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-5"
        name="test-5"
        label="test-5"
      />
    );
    const DatefieldInput = screen.getByTestId("Datefield");
    const DatefieldButton = screen.getByTestId("calendar-button");
    fireEvent.click(DatefieldButton);
    const DatefieldCalendar = screen.getByTestId("calendar");
    const randomDayButton = screen.getAllByRole("button")[6];
    fireEvent.click(randomDayButton);

    expect(DatefieldCalendar).not.toBeInTheDocument();
    expect(DatefieldInput).toHaveValue();
  });

  it("Should format date when provided a min date", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-6"
        name="test-6"
        label="test-6"
      />
    );
    const DatefieldComp = screen.getByTestId("Datefield");
    expect(DatefieldComp).toBeInTheDocument();
  });

  it("Should be disabled", () => {
    render(
      <Datefield
        data-testid="Datefield"
        id="test-7"
        name="test-7"
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
        id="test-8"
        name="test-8"
        label="test-8"
        defaultDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("max date datefield", () => {
    const { container } = render(
      <Datefield
        hint
        id="test-9"
        name="test-9"
        label="test-9"
        maxDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("min date datefield", () => {
    const { container } = render(
      <Datefield
        hint
        id="test-10"
        name="test-10"
        label="test-10"
        required
        minDate="05/05/2020"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
