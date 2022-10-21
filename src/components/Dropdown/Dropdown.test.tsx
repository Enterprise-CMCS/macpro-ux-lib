import React from "react";
import { fireEvent as userEvent, render } from "../../test-setup";
import fireEvent from "@testing-library/user-event";

import { Dropdown } from "./Dropdown";
import data from "./data.json";

describe("Test the Dropdown component", () => {
  /*
   * Note:
   *
   * This component uses both the native select elem as well as a custom dropdown.
   * The select element is included for screen readers. This element and a couple
   * others are tagged with a class "usa-sr-only" that render them off to the side
   * of the page. Data should flow to sr-friendly elements correctly and interacting
   * with them should still affect component state.
   */

  let container: HTMLElement;
  let selectElem: Element;
  let inputElem: Element;
  let listElem: Element;

  beforeEach(() => {
    container = render(
      <Dropdown
        data={data}
        id="fruit"
        label="Select a fruit"
        name="fruit-dropdown"
      />
    ).container;
    selectElem = container.getElementsByClassName("usa-combo-box__select")[0];
    inputElem = container.getElementsByClassName("usa-combo-box__input")[0];
    listElem = container.getElementsByClassName("usa-combo-box__list")[0];

    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb: any) => cb());
  });

  it("should render correctly", () => {
    // both dropdowns should exist
    expect(selectElem).toBeInTheDocument();
    expect(inputElem).toBeInTheDocument();
    expect(listElem).toBeInTheDocument();

    // both should contain the same data
    expect(selectElem.children.length).toBe(data.length + 1); // select has a manually added empty option
    expect(listElem.children.length).toBe(data.length);

    // should render collapsed
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

    // both should contain the same data
    expect(selectElem).toHaveDisplayValue("Apple");
    expect(inputElem).toHaveDisplayValue("Apple");
  });

  it("should be able to select elements from sr-only select", () => {
    // select an option
    fireEvent.selectOptions(selectElem, "apple");

    // both should contain the same data
    expect(selectElem).toHaveDisplayValue("Apple");
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

    // both should contain the same data
    expect(selectElem).toHaveDisplayValue("Apple");
    expect(inputElem).toHaveDisplayValue("Apple");

    expect(clearBtn).toBeVisible();
    userEvent.click(clearBtn);

    // both should be empty
    expect(selectElem).toHaveDisplayValue("");
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
    expect(selectElem).toHaveDisplayValue("Apple");
  });

  it("typing in input should filter dropdown list", () => {
    userEvent.focus(inputElem);
    fireEvent.type(inputElem, "apple");

    expect(selectElem.children.length).toBe(65); // select doesn't get filtered
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
