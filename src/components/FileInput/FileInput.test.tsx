import React from "react";
import { screen, render } from "../../test-setup";
import { FileInput } from "./FileInput";

jest.mock(
  "../../../node_modules/@uswds/uswds/packages/usa-file-input/src",
  () => ({
    off: jest.fn(),
    on: jest.fn(),
  })
);

describe("Tests for the FileInput component", () => {
  it("should render basic file input", () => {
    render(<FileInput name="test-1" id="1" data-testid="file-input" />);

    const fileInput = screen.getByTestId("file-input");
    expect(fileInput).toBeInTheDocument();
  });

  it("should render file input with helpful text and multiple files", () => {
    const { container } = render(
      <FileInput
        name="test-4"
        id="4"
        data-testid="file-input"
        multipleFiles
        hintText="Test"
        label="test label"
      />
    );
    const label = container.getElementsByClassName("usa-label")[0];
    const hint = container.getElementsByClassName("usa-hint")[0];
    expect(label).toHaveTextContent("test label");
    expect(hint).toHaveTextContent("Test");
  });

  it("should render a disabled input", () => {
    render(
      <FileInput
        name="test-5"
        id="5"
        data-testid="file-input"
        disabled
        error
        errorMessage="error"
      />
    );
    const fileInput = screen.getByTestId("file-input");
    expect(fileInput).toBeDisabled();
  });
});

describe("compontent snapshots", () => {
  it("default file input that allows multiple", () => {
    const { container } = render(
      <FileInput
        name="test-2"
        id="2"
        data-test-id="file-input"
        multipleFiles
        label="test"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("file input with hint and onchange", () => {
    const { container } = render(
      <FileInput
        name="test-2"
        hintText="hint-text"
        onChange={() => {}}
        id="2"
        data-test-id="file-input"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
