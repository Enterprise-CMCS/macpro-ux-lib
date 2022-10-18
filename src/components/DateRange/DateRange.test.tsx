import React from "react";
import { DateRange } from "./DateRange";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the DateRange component.", () => {
  it("Should render without hint", () => {
    render(
      <DateRange
        data-testid="DateRange"
        startInputId="test-1"
        endInputId="test-1"
        endInputName="test-1"
        startInputName="test-1"
        startLabel="test-1"
        endLabel="test-1"
        startDate="09/10/2022"
        endDate="09/12/2022"
        hint={false}
      />
    );
    const DatefieldButton1 = screen.queryAllByTestId("calendar-button")[0];
    const DatefieldButton2 = screen.queryAllByTestId("calendar-button")[1];
    fireEvent.click(DatefieldButton1);
    const randomDayButton = screen.getAllByRole("button")[6];
    fireEvent.click(randomDayButton);
    fireEvent.click(DatefieldButton2);
    const randomDayButton2 = screen.getAllByRole("button")[6];
    fireEvent.click(randomDayButton2);

    const DatefieldComp = screen.getByTestId("DateRange");
    expect(DatefieldComp).toBeInTheDocument();
  });

  it("Should render with hint", () => {
    render(
      <DateRange
        data-testid="DateRange"
        startInputId="test-2"
        endInputId="test-2"
        endInputName="test-2"
        startInputName="test-2"
        startLabel="test-2"
        endLabel="test-2"
        hint={true}
      />
    );
    const DatefieldButton1 = screen.queryAllByTestId("calendar-button")[0];
    const DatefieldButton2 = screen.queryAllByTestId("calendar-button")[1];
    fireEvent.click(DatefieldButton2);
    fireEvent.click(DatefieldButton1);
    fireEvent.click(DatefieldButton2);
    fireEvent.click(DatefieldButton1);

    const DatefieldComp = screen.getByTestId("DateRange");
    expect(DatefieldComp).toBeInTheDocument();
  });

  it("Should render with a start date", () => {
    render(
      <DateRange
        data-testid="DateRange"
        startInputId="test-6"
        endInputId="test-6"
        endInputName="test-6"
        startInputName="test-6"
        startLabel="test-6"
        endLabel="test-6"
        startDate="09/10/2022"
        hint={true}
      />
    );
    const DatefieldButton2 = screen.queryAllByTestId("calendar-button")[1];
    fireEvent.click(DatefieldButton2);

    const DatefieldComp = screen.getByTestId("DateRange");
    expect(DatefieldComp).toBeInTheDocument();
  });

  it("Should render with an end date", async () => {
    const { container } = render(
      <DateRange
        data-testid="DateRange"
        startInputId="test-6"
        endInputId="test-6"
        endInputName="test-6"
        startInputName="test-6"
        startLabel="test-6"
        endLabel="test-6"
        endDate="09/10/2022"
        hint={true}
      />
    );
    const DatefieldButton = container.getElementsByClassName(
      "usa-date-picker__button"
    )[0];
    fireEvent.click(DatefieldButton);
    await new Promise((res) => setTimeout(res, 1000));

    // expect(endDate).toHaveFocus();
  });
});

describe("compontent snapshots", () => {
  it("primary datefield", () => {
    const { container } = render(
      <DateRange
        hint
        startInputId="test-3"
        endInputId="test-3"
        startInputName="test-3"
        endInputName="test-3"
        startLabel="test-3"
        endLabel="test-3"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("max date datefield", () => {
    const { container } = render(
      <DateRange
        hint
        startInputId="test-4"
        startInputName="test-4"
        startLabel="test-4"
        endInputId="test-4"
        endInputName="test-4"
        endLabel="test-4"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("min date datefield", () => {
    const { container } = render(
      <DateRange
        hint={false}
        startInputId="test-5"
        startInputName="test-5"
        startLabel="test-5"
        endInputId="test-5"
        endInputName="test-5"
        endLabel="test-5"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
