import React from "react";
import { render } from "@testing-library/react";

import { ActionsMenu } from "./ActionsMenu";

describe("Test the Header component", () => {
  it("should render", () => {
    render(<ActionsMenu />);
  });
});
