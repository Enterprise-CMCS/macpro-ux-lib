import { Tooltip } from "./Tooltip";
import { render, screen } from "../../test-setup";
import React from "react";
import { act } from "react-dom/test-utils";

describe("Tooltip", () => {
  // beforeEach(() => {
  //   container = render(
  //     <Tooltip position="top" title="This is the tooltip">
  //       <button className="test-button">Test</button>
  //     </Tooltip>
  //   ).container;
  // });

  it("renders the test button as expected", () => {
    render(
      <div data-testid="wrapper">
        <Tooltip position="top" title="This is the tooltip">
          <button className="test-button">Test</button>
        </Tooltip>
      </div>
    );

    const wrapper = screen.getByTestId("wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveTextContent("Test");

    const button = wrapper.getElementsByClassName("test-button")[0];
    expect(button).toBeInTheDocument();

    // expect(wrapper).toHaveTextContent("This is the tooltip");

    // The tooltip text should be in the DOM
    // expect(wrapper).toHaveTextContent("This is the tooltip");
  });

  it.skip("renders the tooltip as expected", async () => {
    await act(async () => {
      render(
        <Tooltip position="top" title="This is the tooltip">
          <button className="test-button">Test</button>
        </Tooltip>
      );
    });

    // const tooltip = container.getElementsByClassName("usa-tooltip__body")[0];
    // expect(tooltip).toBeInTheDocument();
  });
});
