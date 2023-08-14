import React from "react";
import { screen, render, getByLabelText, getByText } from "../../test-setup";
import fireEvent from "@testing-library/user-event";
import { TextArea } from "./TextArea";

describe("TextArea component", () => {
  describe("default", () => {
    const errorMessage = "This is an example of an error message.";
    const characterCountMessage = "This has a counter";

    beforeEach(() => {
      render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          errorMessage={errorMessage}
        />
      );
    });

    it("should render", () => {
      const comp = screen.getByLabelText("Testing TextArea");
      expect(comp).toBeInTheDocument();
    });

    it("should not have an initial value", () => {
      const comp = screen.getByLabelText("Testing TextArea");
      expect(comp).toHaveDisplayValue("");
    });

    it("should accept any value", () => {
      const comp = screen.getByLabelText("Testing TextArea");
      fireEvent.type(comp, "abc123!@#");
      expect(comp).toHaveDisplayValue("abc123!@#");
    });

    it("should not show the errorMessage", () => {
      const comp = screen.getByLabelText("Testing TextArea");
      expect(comp).toBeInTheDocument();
      expect(screen.queryAllByText(errorMessage).length).toBe(0);
    });

    it("should not show the characterCountMessage", () => {
      const comp = screen.getByLabelText("Testing TextArea");
      expect(comp).toBeInTheDocument();
      expect(screen.queryAllByText(characterCountMessage).length).toBe(0);
    });
  });

  describe("charachter counter", () => {
    it("should render with the character counter", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          showCharacterCount
        />
      );
      const comp = screen.getByLabelText("Testing TextArea");
      fireEvent.type(comp, "four");
      expect(comp).toHaveDisplayValue("four");
      const counter = container.getElementsByClassName("usa-hint")[0];
      expect(counter.innerHTML).toBe("4");
    });

    it("should render character counter as a fraction", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          showCharacterCount
          maxLength={50}
        />
      );
      const comp = screen.getByLabelText("Testing TextArea");
      fireEvent.type(comp, "four");
      expect(comp).toHaveDisplayValue("four");
      const counter = container.getElementsByClassName("usa-hint")[0];
      expect(counter.innerHTML).toBe("4 / 50");
    });

    it("should render character counter with message", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          characterCountMessage="You have used:"
          showCharacterCount
          maxLength={50}
        />
      );
      const comp = screen.getByLabelText("Testing TextArea");
      fireEvent.type(comp, "four");
      expect(comp).toHaveDisplayValue("four");
      const counter = container.getElementsByClassName("usa-hint")[0];
      expect(counter.innerHTML).toBe("You have used: 4 / 50");
    });
  });

  it("should show an error message", () => {
    const errorMessage = "This is an example of an error message.";
    render(
      <TextArea
        id="test-input-area"
        label="Testing TextArea"
        name="testing-textarea"
        errorMessage={errorMessage}
        inputError
      />
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("should be required", () => {
    render(
      <TextArea
        id="test-input-area"
        label="Testing TextArea"
        name="testing-textarea"
        required
      />
    );
    const comp = screen.getByLabelText("Testing TextArea*");
    expect(comp).toBeInTheDocument();
    comp.hasAttribute("required");
  });

  describe("compontent snapshots", () => {
    it("renders the default component", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders with a placeholder", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          placeholder="This is example placeholder text."
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders with a character counter", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          showCharacterCount
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders with a character counter and message", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          showCharacterCount
          characterCountMessage="This is a character count message"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders with a character counter and maxLength", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          showCharacterCount
          maxLength={50}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders with a character counter, maxLength, and message", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          showCharacterCount
          maxLength={50}
          characterCountMessage="This is a character count message"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders a required component", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          required
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("renders a component with an error message", () => {
      const errorMessage = "This is an example of an error message.";
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          errorMessage={errorMessage}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("success", () => {
      const { container } = render(
        <TextArea
          id="test-input-area"
          label="Testing TextArea"
          name="testing-textarea"
          inputSuccess
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
