import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Alert } from "./Alert";

describe("Tests for the Alert component", () => {
  it("should render", () => {
    render(<Alert />);
  });
});
