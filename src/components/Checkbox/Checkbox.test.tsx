import { Checkbox } from "./Checkbox";
import { render, screen } from "../../test-setup";
import fireEvent from "@testing-library/user-event";
import React from "react";

describe("Checkbox", () => {
  describe("Default", () => {
    beforeEach(() => {
      render(
        <form data-testid="test-form">
          <Checkbox
            id="check-default"
            label="Default Checkbox"
            name="test-checkbox"
            value="default-checkbox"
          />
        </form>
      );
    });

    it("is unchecked by default", () => {
      const cb = screen.getByLabelText("Default Checkbox");
      expect(cb).not.toBeChecked();
    });

    it("becomes checked on click", () => {
      const cb = screen.getByLabelText("Default Checkbox");
      fireEvent.click(cb);
      expect(cb).toBeChecked();
    });

    it("renders and has the expected label", () => {
      const cb = screen.getByLabelText("Default Checkbox");
      expect(cb).toBeInTheDocument();
    });

    it("is not a tile by default", () => {
      const cb = screen.getByLabelText("Default Checkbox");
      expect(cb).not.toHaveClass("usa-checkbox__input--tile");
    });

    it("has the expected ID", () => {
      const cb = screen.getByLabelText("Default Checkbox");
      expect(cb.getAttribute("id")).toBe("check-default");
    });

    it("has the expected name attribute", () => {
      const cb = screen.getByLabelText("Default Checkbox");
      expect(cb.getAttribute("name")).toBe("test-checkbox");
    });

    it("has the expected value when unchecked", () => {
      const testForm = screen.getByTestId("test-form");
      const cb = screen.getByLabelText("Default Checkbox");
      expect(testForm).toHaveFormValues({ "test-checkbox": false });
    });

    it("has the expected value when checked", () => {
      const testForm = screen.getByTestId("test-form");
      const cb = screen.getByLabelText("Default Checkbox");
      fireEvent.click(cb);
      expect(testForm).toHaveFormValues({ "test-checkbox": true });
    });
  });

  describe("Tile", () => {
    beforeEach(() => {
      render(
        <form data-testid="test-form">
          <Checkbox
            id="check-tile"
            isTile={true}
            label="Tile Checkbox"
            name="test-checkbox"
            tileDescription="This is the tile description."
            value="tile-checkbox"
          />
        </form>
      );
    });

    it("is renders as a tile", () => {
      const cb = screen.getByRole("checkbox");
      expect(cb).toHaveClass("usa-checkbox__input--tile");
    });

    it("is unchecked by default", () => {
      const cb = screen.getByRole("checkbox");
      expect(cb).not.toBeChecked();
    });

    it("becomes checked on click", () => {
      const cb = screen.getByRole("checkbox");
      fireEvent.click(cb);
      expect(cb).toBeChecked();
    });

    it("renders and has the expected label", () => {
      const cb = screen.getByRole("checkbox");
      expect(cb).toBeInTheDocument();
    });

    it("has the expected ID", () => {
      const cb = screen.getByRole("checkbox");
      expect(cb.getAttribute("id")).toBe("check-tile");
    });

    it("has the expected name attribute", () => {
      const cb = screen.getByRole("checkbox");
      expect(cb.getAttribute("name")).toBe("test-checkbox");
    });

    it("has the expected value when unchecked", () => {
      const testForm = screen.getByTestId("test-form");
      expect(testForm).toHaveFormValues({ "test-checkbox": false });
    });

    it("has the expected value when checked", () => {
      const testForm = screen.getByTestId("test-form");
      const cb = screen.getByRole("checkbox");
      fireEvent.click(cb);
      expect(testForm).toHaveFormValues({ "test-checkbox": true });
    });

    it("has the expected description text", () => {
      const testForm = screen.getByTestId("test-form");
      expect(testForm).toHaveTextContent("This is the tile description.");
    });
  });

  describe("Snapshot tests", () => {
    it("renders default Checkbox as expected", () => {
      const { container } = render(
        <Checkbox
          id="check-default"
          label="Default Checkbox"
          name="test-checkbox"
          value="default-checkbox"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders tile Checkbox as expected", () => {
      const { container } = render(
        <Checkbox
          id="check-tile"
          isTile={true}
          label="Tile Checkbox"
          name="test-checkbox"
          tileDescription="This is the tile description."
          value="tile-checkbox"
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
