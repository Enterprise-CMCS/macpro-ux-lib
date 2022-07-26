import React from "react";
import { cleanAttributes, screen, render } from "../../test-setup";
import fireEvent from "@testing-library/user-event";
import { TextArea } from "./TextArea";

describe("TextArea component", () => {
  describe("default", () => {
    const errorMessage = "My name is Tom Riddle";
    const characterCountMessage = "This has a counter";

    beforeEach(() => {
      render(
        <TextArea
          label="Testing TextArea"
          fieldName="testing-textarea"
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
          label="Testing TextArea"
          fieldName="testing-textarea"
          showCharacterCount
          initialValue="four"
        />
      );
      const comp = screen.getByLabelText("Testing TextArea");
      expect(comp).toHaveDisplayValue("four");
      const counter = container.getElementsByClassName("usa-hint")[0];
      expect(counter.innerHTML).toBe("4");
    });

    it("should render character counter as a fraction", () => {
      const { container } = render(
        <TextArea
          label="Testing TextArea"
          fieldName="testing-textarea"
          showCharacterCount
          maxLength={50}
          initialValue="four"
        />
      );
      const comp = screen.getByLabelText("Testing TextArea");
      expect(comp).toHaveDisplayValue("four");
      const counter = container.getElementsByClassName("usa-hint")[0];
      expect(counter.innerHTML).toBe("4 / 50");
    });

    it("should render character counter with message", () => {
      const { container } = render(
        <TextArea
          label="Testing TextArea"
          fieldName="testing-textarea"
          characterCountMessage="You have used: "
          showCharacterCount
          maxLength={50}
          initialValue="four"
        />
      );
      const comp = screen.getByLabelText("Testing TextArea");
      expect(comp).toHaveDisplayValue("four");
      const counter = container.getElementsByClassName("usa-hint")[0];
      expect(counter.innerHTML).toBe("You have used: 4 / 50");
    });
  });

  it("should render with a default value", () => {
    const value = "My name is Tom Riddle";
    render(
      <TextArea
        label="Testing TextArea"
        fieldName="testing-textarea"
        initialValue={value}
      />
    );
    const comp = screen.getByLabelText("Testing TextArea");
    expect(comp).toHaveDisplayValue(value);
  });

  it("should show an error message", () => {
    const errorMessage = "My name is Tom Riddle";
    render(
      <TextArea
        label="Testing TextArea"
        fieldName="testing-textarea"
        errorMessage={errorMessage}
        inputError
      />
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("should be required", () => {
    render(
      <TextArea
        label="Testing TextArea"
        fieldName="testing-textarea"
        required
      />
    );
    const comp = screen.getByLabelText("Testing TextArea*");
    expect(comp).toBeInTheDocument();
    comp.hasAttribute("required");
  });

  it("should accept a numeric value only", () => {
    const filter = new RegExp(/^-?\d*$/i);
    render(
      <TextArea
        label="Testing TextArea"
        fieldName="testing-textarea"
        inputFilter={filter}
      />
    );
    const comp = screen.getByLabelText("Testing TextArea");
    fireEvent.type(comp, "abc123");
    expect(comp).toHaveDisplayValue("123");
  });

  describe("compontent snapshots", () => {
    it("default", () => {
      const { container } = render(
        <TextArea label="Testing TextArea" fieldName="testing-textarea" />
      );
      cleanAttributes(container, ["input-type-textarea"]);
      expect(container).toMatchSnapshot();
    });
    it("required and error", () => {
      const errorMessage = "My name is Tom Riddle";
      const { container } = render(
        <TextArea
          label="Testing TextArea"
          fieldName="testing-textarea"
          errorMessage={errorMessage}
          required
          placeholder="Can you place this?"
        />
      );
      cleanAttributes(container, ["input-type-textarea"]);
      expect(container).toMatchSnapshot();
    });
    it("success", () => {
      const { container } = render(
        <TextArea
          label="Testing TextArea"
          fieldName="testing-textarea"
          inputSuccess
        />
      );
      cleanAttributes(container, ["input-type-textarea"]);
      expect(container).toMatchSnapshot();
    });
  });
});
