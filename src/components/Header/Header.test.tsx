import React from "react";
import { render } from "@testing-library/react";

import { Header } from "./Header";

describe("Test the Header component", () => {
  it("should render", () => {
    render(<Header />);
  });
});
