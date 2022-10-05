import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { FileInput } from "./FileInput";

describe("Tests for the FileInput component", () => {
  it("should render", () => {
    render(<FileInput name="test-1" id="1" data-test-id="file-input" />);

    const fileInput = screen.getByRole("file-input");
    expect(fileInput).toBeInTheDocument();
  });

  it("should render", () => {
    render(
      <FileInput
        name="test-4"
        id="4"
        data-test-id="file-input"
        multipleFiles
        hintText="Test"
        label="test label"
      />
    );
    const fileInput = screen.getByRole("file-input");
  });

  it("should render", () => {
    render(
      <FileInput
        name="test-5"
        id="5"
        data-test-id="file-input"
        disabled
        error
        errorMessage="error"
      />
    );
  });
  const fileInput = screen.getByRole("file-input");
});

describe("compontent snapshots", () => {
  it("default search", () => {
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

  it("big search", () => {
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
