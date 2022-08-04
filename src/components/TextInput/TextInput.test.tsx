import React from "react";
import {
  cleanAttributes,
  screen,
  render,
  getByLabelText,
  getByText,
} from "../../test-setup";
import fireEvent from "@testing-library/user-event";
import { TextInput } from "./TextInput";

describe("TextInput component", () => {
  describe("default", () => {
    const errorMessage = "My name is Tom Riddle";

    beforeEach(() => {
      render(
        <TextInput
          id="test-input"
          label="Testing Input"
          fieldName="testing-input"
          errorMessage={errorMessage}
        />
      );
    });

    it("should render", () => {
      const comp = screen.getByLabelText("Testing Input");
      expect(comp).toBeInTheDocument();
    });

    it("should not have an initial value", () => {
      const comp = screen.getByLabelText("Testing Input");
      expect(comp).toHaveDisplayValue("");
    });

    it("should accept any value", () => {
      const comp = screen.getByLabelText("Testing Input");
      fireEvent.type(comp, "abc123!@#");
      expect(comp).toHaveDisplayValue("abc123!@#");
    });

    it("should not show the errorMessage", () => {
      const comp = screen.getByLabelText("Testing Input");
      expect(comp).toBeInTheDocument();
      expect(screen.queryAllByText(errorMessage).length).toBe(0);
    });
  });

  it("should show an error message", () => {
    const errorMessage = "My name is Tom Riddle";
    render(
      <TextInput
        id="test-input"
        label="Testing Input"
        fieldName="testing-input"
        errorMessage={errorMessage}
        inputError
      />
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("should be required", () => {
    render(
      <TextInput
        id="test-input"
        label="Testing Input"
        fieldName="testing-input"
        required
      />
    );
    const comp = screen.getByLabelText("Testing Input*");
    expect(comp).toBeInTheDocument();
    comp.hasAttribute("required");
  });

  it("should accept a numeric value only", () => {
    const filter = new RegExp(/^-?\d*$/i);
    render(
      <TextInput
        id="test-input"
        label="Testing Input"
        fieldName="testing-input"
        inputFilter={filter}
      />
    );
    const comp = screen.getByLabelText("Testing Input");
    fireEvent.type(comp, "abc123");
    expect(comp).toHaveDisplayValue("123");
  });

  it("should add 'usa-focus' on focus'", () => {
    const { container } = render(
      <TextInput
        id="test-input"
        label="Testing Input"
        fieldName="testing-input"
        errorMessage="Click me to unfocus input"
        inputError
        required
      />
    );
    // Should not exist on render
    expect(container.querySelectorAll(".usa-focus").length).toBe(0);

    // Should exist onFocus
    const input = getByLabelText(container, "Testing Input*");
    fireEvent.click(input);
    expect(container.querySelectorAll(".usa-focus").length).toBe(1);

    // Should not onBlur
    const escape = getByText(container, "Click me to unfocus input");
    fireEvent.click(escape);
    expect(container.querySelectorAll(".usa-focus").length).toBe(0);
  });

  describe("compontent snapshots", () => {
    it("default", () => {
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          fieldName="testing-input"
        />
      );
      cleanAttributes(container, ["input-type-text"]);
      expect(container).toMatchSnapshot();
    });

    it("required and error", () => {
      const errorMessage = "My name is Tom Riddle";
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          fieldName="testing-input"
          errorMessage={errorMessage}
          required
        />
      );
      cleanAttributes(container, ["input-type-text"]);
      expect(container).toMatchSnapshot();
    });

    it("success", () => {
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          fieldName="testing-input"
          inputSuccess
        />
      );
      cleanAttributes(container, ["input-type-text"]);
      expect(container).toMatchSnapshot();
    });

    it("prefix and suffix", () => {
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          fieldName="testing-input"
          prefix="$"
          suffix="lbs."
        />
      );
      cleanAttributes(container, ["input-type-text"]);
      expect(container).toMatchSnapshot();
    });
  });
});
