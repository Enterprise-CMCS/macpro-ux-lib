import { Radio } from "../Radio/Radio";
import { render, screen } from "../../test-setup";
import fireEvent from "@testing-library/user-event";
import React from "react";

describe("Radio", () => {
  describe("default", () => {
    beforeEach(() => {
      render(
        <form data-testid="test-form">
          <Radio
            id="radio-default"
            name="default-group"
            label="Default Radio"
            value="choice-1"
          />
        </form>
      );
    });

    it("is unselected by default", () => {
      const r = screen.getByRole("radio");
      expect(r).not.toBeChecked();
    });

    it("becomes selected on click", () => {
      const r = screen.getByRole("radio");
      fireEvent.click(r);
      expect(r).toBeChecked();
    });

    it("has the expected label", () => {
      const r = screen.getByLabelText("Default Radio");
      expect(r).toBeInTheDocument();
    });

    it("is not a tile by default", () => {
      const r = screen.getByRole("radio");
      expect(r).not.toHaveClass("usa-checkbox__input--tile");
    });

    it("has the expected ID", () => {
      const r = screen.getByRole("radio");
      expect(r.getAttribute("id")).toBe("radio-default");
    });

    it("has the expected name attribute", () => {
      const r = screen.getByRole("radio");
      expect(r.getAttribute("name")).toBe("default-group");
    });
  });
});

describe("Tile", () => {
  beforeEach(() => {
    render(
      <form data-testid="test-form">
        <Radio
          id="radio-tile"
          isTile={true}
          label="Tile Radio"
          name="tile-group"
          tileDescription="This is the tile version of the Radio component."
        />
      </form>
    );
  });

  it("renders as a tile", () => {
    const r = screen.getByRole("radio");
    expect(r).toHaveClass("usa-radio__input--tile");
  });

  it("is unchecked by default", () => {
    const r = screen.getByRole("radio");
    expect(r).not.toBeChecked();
  });

  it("becomes checked on click", () => {
    const r = screen.getByRole("radio");
    fireEvent.click(r);
    expect(r).toBeChecked();
  });

  it("renders and has the expected label", () => {
    const r = screen.getByRole("radio");
    expect(r).toBeInTheDocument();
  });

  it("has the expected ID", () => {
    const r = screen.getByRole("radio");
    expect(r.getAttribute("id")).toBe("radio-tile");
  });

  it("has the expected name attribute", () => {
    const r = screen.getByRole("radio");
    expect(r.getAttribute("name")).toBe("tile-group");
  });

  it("has the expected description text", () => {
    const testForm = screen.getByTestId("test-form");
    expect(testForm).toHaveTextContent(
      "This is the tile version of the Radio component."
    );
  });
});
