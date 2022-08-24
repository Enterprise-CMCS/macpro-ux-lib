import React from "react";
import { Search } from "./Search";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the search component.", () => {
  const mockSearchFn = jest.fn();
  const mockInputFn = jest.fn();

  it("Should render and fire a callback", () => {
    render(
      <Search
        data-testid="search"
        placeholder="search"
        onSearch={mockSearchFn}
      />
    );
    const searchComp = screen.getByTestId("search");

    fireEvent.keyDown(searchComp, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    expect(searchComp).toBeInTheDocument();
    expect(searchComp).toHaveAttribute("placeholder", "search");
    expect(mockSearchFn).toHaveBeenCalled();
    expect(searchComp).toHaveAttribute("id", "search-field");
  });

  it("Should render a search bar with an icon", () => {
    render(
      <Search
        variation="small"
        placeholder="Test Search"
        data-testid="search"
        onSearch={mockSearchFn}
        onInput={mockInputFn}
      />
    );
    const searchComp = screen.getByTestId("search");

    fireEvent.change(searchComp, { target: { value: "Good Day" } });

    expect(searchComp).toBeInTheDocument();
    expect(mockSearchFn).toHaveBeenCalled();
    expect(searchComp).toHaveAttribute("placeholder", "Test Search");
  });

  it("Should render a search bar with a value and the button simulates a search event", () => {
    const mockButtonSearchFn = jest.fn();
    render(
      <Search
        variation="big"
        placeholder="Test Search"
        data-testid="search"
        onSearch={mockButtonSearchFn}
        initialValue="new value"
        labelText="Search Label"
      />
    );
    const buttonComp = screen.getByRole("button");
    expect(buttonComp).toBeInTheDocument();
    fireEvent.click(buttonComp);

    expect(buttonComp).toBeInTheDocument();
    expect(mockButtonSearchFn).toHaveBeenCalled();
    expect(mockButtonSearchFn).toHaveBeenCalledWith("new value");
  });

  describe("compontent snapshots", () => {
    it("default search", () => {
      const { container } = render(
        <Search
          onSearch={mockSearchFn}
          data-testid="search"
          variation="default"
          labelText="Search Click Here"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("big search", () => {
      const { container } = render(
        <Search
          onSearch={mockSearchFn}
          initialValue="initial"
          data-testid="search"
          variation="big"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("small disabled search", () => {
      const { container } = render(
        <Search
          onSearch={mockSearchFn}
          onInput={mockInputFn}
          placeholder="placeholder"
          labelText="Click Me"
          disabled
          data-testid="search"
          variation="small"
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
