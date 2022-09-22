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
        startDate="09/10/22"
        endDate="09/12/22"
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

  describe("compontent snapshots", () => {
    it("primary datefield", () => {
      const { container } = render(
        <DateRange
          hint
          startInputId="test-8"
          endInputId="test-8"
          startInputName="test-8"
          endInputName="test-8"
          startLabel="test-8"
          endLabel="test-8"
        />
      );

      expect(container).toMatchSnapshot();
    });

    it("max date datefield", () => {
      const { container } = render(
        <DateRange
          hint
          startInputId="test-9"
          startInputName="test-9"
          startLabel="test-9"
          endInputId="test-9"
          endInputName="test-9"
          endLabel="test-9"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("min date datefield", () => {
      const { container } = render(
        <DateRange
          hint={false}
          startInputId="test-10"
          startInputName="test-10"
          startLabel="test-10"
          endInputId="test-10"
          endInputName="test-10"
          endLabel="test-10"
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
