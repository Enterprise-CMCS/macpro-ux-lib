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
        onInput={mockChangeFn}
      />
    );
    const searchComp = screen.getByTestId("search");

    fireEvent.change(searchComp, { target: { value: "Good Day" } });

    expect(searchComp).toBeInTheDocument();
    expect(mockChangeFn).toHaveBeenCalled();
    expect(searchComp).toHaveAttribute("placeholder", "Test Search");
    expect(searchComp).toHaveAttribute("id", "search-field-en-small");
  });

  it("Should render a search bar with a value and the button simulates a search event", () => {
    render(
      <Search
        variation="big"
        placeholder="Test Search"
        data-testid="search"
        onSearch={mockChangeFn}
        initialValue="new value"
        labelText="Search Label"
      />
    );
    const searchComp = screen.getByTestId("search");
    const buttonComp = screen.getByLabelText("Search Label");

    expect(searchComp).toHaveAttribute("value", "new value");
    expect(buttonComp).toBeInTheDocument();

    fireEvent.click(buttonComp);
    expect(buttonComp).toBeInTheDocument();
    expect(mockChangeFn).toHaveBeenCalled();
  });

  describe("compontent snapshots", () => {
    it("primary big disabled", () => {
      const { container } = render(
        <Search
          onSearch={mockChangeFn}
          data-testid="search"
          variation="default"
          labelText="Search Click Here"
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("secondary big search", () => {
      const { container } = render(
        <Search
          onSearch={mockChangeFn}
          initialValue="initial"
          data-testid="search"
          variation="big"
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
