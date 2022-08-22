import React from "react";
import { Search } from "./Search";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the search component.", () => {
  const mockChangeFn = jest.fn();

  it("Should render and fire a callback", () => {
    render(
      <Search
        data-testid="search"
        variation="default"
        placeholder="search"
        onSearch={mockChangeFn}
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
    expect(mockChangeFn).toHaveBeenCalled();
  });

  it("Should render a search bar with an icon", () => {
    render(
      <Search
        variation="small"
        placeholder="Test Search"
        data-testid="search"
        onSearch={mockChangeFn}
      />
    );
    const searchComp = screen.getByTestId("search");

    expect(searchComp).toBeInTheDocument();
    expect(searchComp).toHaveAttribute("placeholder", "Test Search");
    expect(searchComp).toHaveAttribute("id", "search-field-en-small");
  });

  it("Should render a search bar with a value", () => {
    render(
      <Search
        variation="small"
        placeholder="Test Search"
        data-testid="search"
        onSearch={mockChangeFn}
        value="new value"
      />
    );
    const searchComp = screen.getByTestId("search");
    expect(searchComp).toHaveAttribute("value", "new value");
  });

  describe("compontent snapshots", () => {
    it("primary big disabled", () => {
      const { container } = render(
        <Search
          onSearch={mockChangeFn}
          data-testid="search"
          variation="default"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("secondary big search", () => {
      const { container } = render(
        <Search onSearch={mockChangeFn} data-testid="search" variation="big" />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
