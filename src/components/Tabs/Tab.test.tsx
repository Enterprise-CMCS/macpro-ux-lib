import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Tab } from "./Tab";

describe("Tests for the Accordion component", () => {
  it("should render", () => {
    render(<Tab />);
  });
});
