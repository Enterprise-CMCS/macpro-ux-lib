import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { TemplateComponent } from "./TemplateComponent";

describe("Tests for the TemplateComponent component", () => {
  it("should render", () => {
    render(<TemplateComponent />);
  });
});
