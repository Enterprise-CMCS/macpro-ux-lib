import React from "react";
import { screen, render, getByLabelText, getByText } from "../../test-setup";
import fireEvent from "@testing-library/user-event";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  describe("default", () => {
    const errorMessage = "This is an example of an error message.";

    beforeEach(() => {
      render(
        <TextInput
          id="test-input"
          label="Testing Input"
          name="testing-input"
          errorMessage={errorMessage}
        />
      );
    });

    it("renders", () => {
      const comp = screen.getByLabelText("Testing Input");
      expect(comp).toBeInTheDocument();
    });

    it("has no initial value", () => {
      const comp = screen.getByLabelText("Testing Input");
      expect(comp).toHaveDisplayValue("");
    });

    it("accepts any value", () => {
      const comp = screen.getByLabelText("Testing Input");
      fireEvent.type(comp, "abc123!@#");
      expect(comp).toHaveDisplayValue("abc123!@#");
    });

    it("does not show the errorMessage", () => {
      const comp = screen.getByLabelText("Testing Input");
      expect(comp).toBeInTheDocument();
      expect(screen.queryAllByText(errorMessage).length).toBe(0);
    });
  });

  it("should show an error message", () => {
    const errorMessage = "This is an example of an error message.";
    render(
      <TextInput
        id="test-input"
        label="Testing Input"
        name="testing-input"
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
        name="testing-input"
        required
      />
    );
    const comp = screen.getByLabelText("Testing Input*");
    expect(comp).toBeInTheDocument();
    comp.hasAttribute("required");
  });

  describe("snapshots", () => {
    it("renders the default TextInput", () => {
      const { container } = render(
        <TextInput id="test-input" label="Testing Input" name="testing-input" />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders a required TextInput", () => {
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          name="testing-input"
          required
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders an error", () => {
      const errorMessage = "This is an example of an error message.";
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          name="testing-input"
          errorMessage={errorMessage}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders the success state", () => {
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          name="testing-input"
          inputSuccess
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders the prefix and suffix", () => {
      const { container } = render(
        <TextInput
          id="test-input"
          label="Testing Input"
          name="testing-input"
          prefix="$"
          suffix="lbs."
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
