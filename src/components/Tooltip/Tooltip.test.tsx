import { Tooltip } from "./Tooltip";
import { render, screen } from "../../test-setup";
import React from "react";

describe("Tooltip", () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <Tooltip position="top" title="This is the tooltip">
        <button>Test</button>
      </Tooltip>
    ).container;
  });

  it("renders the Tooltip as expected", () => {
    const wrapper = container.getElementsByClassName("wrapper")[0];
    expect(wrapper).not.toBeNull;
    expect(wrapper).toBeInTheDocument();
  });
});
