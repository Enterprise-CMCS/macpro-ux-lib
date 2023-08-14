import React from "react";
import { fireEvent as userEvent, render } from "../../test-setup";
import fireEvent from "@testing-library/user-event";
import { MultiSelect } from "./MultiSelect";
import data from "../DropdownInput/data.json";

describe("Tests for the MultiSelect component", () => {
  const defaultValues = [
    "apple",
    "banana",
    "buddhas hand citron",
    "cantaloupe",
    "elderberry",
    "kiwifruit",
    "plum",
    "strawberry",
  ];
  let container: HTMLElement;
  let filterChipWrapper: Element;
  let inputElem: Element;
  let listElem: Element;
  let selectElem: Element;

  beforeEach(() => {
    container = render(
      <MultiSelect
        data={data}
        defaultValues={defaultValues}
        id="multi-select"
        label="Select a fruit from the dropdown:"
        placeholder="Type to filter"
      />
    ).container;

    filterChipWrapper = container.getElementsByClassName(
      "filter-chip-wrapper"
    )[0];
    inputElem = container.getElementsByClassName("usa-combo-box__input")[0];
    listElem = container.getElementsByClassName("usa-combo-box__list")[0];
    selectElem = container.getElementsByClassName("usa-combo-box__select")[0];

    expect(filterChipWrapper.children.length).toBe(8);
    expect(listElem.children.length).toBe(56);
  });

  it("should render correctly with defaultValues", () => {
    const label = document.getElementById("multi-select-label");

    expect(label?.innerHTML).toBe("Select a fruit from the dropdown:");
    expect(listElem).toBeInTheDocument();
    expect(listElem).not.toBeVisible();
    expect(selectElem.children.length).toBe(64); // does not get filtered
    expect(listElem.children.length).toBe(56);
    expect(filterChipWrapper.children.length).toBe(8);
    expect(inputElem.getAttribute("placeholder")).toBe("Type to filter");
  });

  it("clicking a filterChip should remove it", () => {
    const appleFC = filterChipWrapper.children[0];
    userEvent.click(appleFC);

    expect(filterChipWrapper.children.length).toBe(7);
    expect(listElem.children.length).toBe(57);
  });

  it("clicking a Dropdown option should create a new filterChip", () => {
    const apricot = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0];

    userEvent.focus(inputElem);
    userEvent.keyDown(inputElem, { key: "ArrowDown" });
    userEvent.keyDown(apricot, { key: "Enter" });

    expect(filterChipWrapper.children.length).toBe(9);
    expect(listElem.children.length).toBe(55);
    expect(inputElem).toHaveDisplayValue("");
  });

  it("Select should also affect MultiSelect UI", () => {
    fireEvent.selectOptions(selectElem, ["avocado", "yuzu"]);
    expect(filterChipWrapper.children.length).toBe(10);
    expect(listElem.children.length).toBe(54);
  });

  it("should filter the list when typing", async () => {
    await fireEvent.type(inputElem, "ap");
    expect(listElem.children.length).toBe(7);

    await fireEvent.type(inputElem, "p");
    expect(listElem.children.length).toBe(3);
  });
});
