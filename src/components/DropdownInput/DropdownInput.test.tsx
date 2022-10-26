import React from "react";
import { fireEvent as userEvent, render } from "../../test-setup";
import fireEvent from "@testing-library/user-event";

import { DropdownInput } from "./DropdownInput";
import data from "./data.json";

describe("Test the DropdownInput component", () => {
  let container: HTMLElement;
  let inputElem: Element;
  let listElem: Element;

  beforeEach(() => {
    container = render(
      <DropdownInput
        data={data}
        id="fruit"
        label="Select a fruit"
        name="fruit-dropdown"
      />
    ).container;
    inputElem = container.getElementsByClassName("usa-combo-box__input")[0];
    listElem = container.getElementsByClassName("usa-combo-box__list")[0];

    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb: any) => cb());
  });

  it("should render correctly", () => {
    expect(inputElem).toBeInTheDocument();
    expect(listElem).toBeInTheDocument();

    // list should exist but not be visible
    expect(listElem.children.length).toBe(data.length);
    expect(listElem).not.toBeVisible();
  });

  it("should expand and collapse", () => {
    // should render collapsed
    expect(listElem).not.toBeVisible();

    // expand on input focus
    userEvent.focus(inputElem);
    expect(listElem).toBeVisible();

    // collapse on toggle click
    const toggleArrow = container.getElementsByClassName(
      "usa-combo-box__toggle-list"
    )[0];
    userEvent.click(toggleArrow);
    expect(listElem).not.toBeVisible();

    // expand on input focus
    userEvent.focus(inputElem);
    expect(listElem).toBeVisible();

    // collapse on input blur
    userEvent.blur(inputElem);
    expect(listElem).not.toBeVisible();
  });

  it("should be able to select elements", () => {
    userEvent.focus(inputElem);

    // select an option
    const apple = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0];
    userEvent.click(apple);

    // should contain the data
    expect(inputElem).toHaveDisplayValue("Apple");
  });

  it("should be able to clear a selection", () => {
    const clearBtn = container.getElementsByClassName(
      "usa-combo-box__clear-input"
    )[0];
    expect(clearBtn).not.toBeVisible();

    userEvent.focus(inputElem);
    const apple = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0];
    userEvent.click(apple);

    // should contain the data
    expect(inputElem).toHaveDisplayValue("Apple");
    expect(clearBtn).toBeVisible();

    userEvent.click(clearBtn);

    // should be empty
    expect(inputElem).toHaveDisplayValue("");
    expect(clearBtn).not.toBeVisible();
  });

  it("while input is focused, arrow down should focus on first item", () => {
    userEvent.focus(inputElem);
    userEvent.keyDown(inputElem, { key: "ArrowDown" });

    const apple = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0];

    expect(apple).toHaveFocus();
  });

  it("arrows should navigate dropdown list", () => {
    userEvent.focus(inputElem);
    userEvent.keyDown(inputElem, { key: "ArrowDown" });

    const apple = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0];
    const apricot = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[1];

    expect(apple).toHaveFocus();

    // Move down
    userEvent.keyDown(apple, { key: "ArrowDown" });

    expect(apple).not.toHaveFocus();
    expect(apricot).toHaveFocus();

    // Move up
    userEvent.keyDown(apricot, { key: "ArrowUp" });

    expect(apple).toHaveFocus();
    expect(apricot).not.toHaveFocus();

    // Make selection
    userEvent.keyDown(apple, { key: "Enter" });

    expect(inputElem).toHaveDisplayValue("Apple");
  });

  it("selector should jump to current dropdown value on ArrowDown", () => {
    const apple = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0];
    const apricot = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[1];

    // Move down to apricot
    userEvent.focus(inputElem);
    userEvent.keyDown(inputElem, { key: "ArrowDown" });
    userEvent.keyDown(apple, { key: "ArrowDown" });
    expect(apricot).toHaveFocus();

    // collapse list
    userEvent.blur(inputElem);
    expect(listElem).not.toBeVisible();

    // refocus input; ArrowDown should jump to current value
    userEvent.focus(inputElem);
    userEvent.keyDown(window, { key: "ArrowDown" });
    expect(apricot).toHaveFocus();
  });

  it("typing in input should filter dropdown list", () => {
    userEvent.focus(inputElem);
    fireEvent.type(inputElem, "apple");

    expect(listElem.children.length).toBe(4);
  });

  it("hover should focus list item", () => {
    userEvent.focus(inputElem);
    const apple = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[0];
    const apricot = container.getElementsByClassName(
      "usa-combo-box__list-option"
    )[1];

    userEvent.mouseOver(apple);

    expect(apple).toHaveFocus();
    expect(apricot).not.toHaveFocus();

    userEvent.mouseOver(apricot);

    expect(apple).not.toHaveFocus();
    expect(apricot).toHaveFocus();
  });

  it("component snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
