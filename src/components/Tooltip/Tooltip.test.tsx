import { Tooltip } from "./Tooltip";
import { render, screen } from "../../test-setup";
import React from "react";

describe("Tooltip", () => {
  // beforeEach(() => {
  //   render(
  //     <Tooltip position="top" title="This is the tooltip">
  //       <button className="test-button">Test</button>
  //     </Tooltip>
  //   );
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

    // The tooltip text should be in the DOM
    expect(wrapper).toHaveTextContent("This is the tooltip");
  });

  // it("renders the tooltip as expected", () => {
  //   const container = render(
  //     <Tooltip position="top" title="This is the tooltip">
  //       <button className="test-button">Test</button>
  //     </Tooltip>
  //   ).container;

  //   const tooltip = container.getElementsByClassName("usa-tooltip__body")[0];
  //   expect(tooltip).toBeInTheDocument();
  // });
});
