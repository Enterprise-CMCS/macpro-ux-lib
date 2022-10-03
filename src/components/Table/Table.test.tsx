import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Table } from "./Table";

describe("Tests for the Table component", () => {
  it("should render", () => {
    render(<Table />);
  });
});
