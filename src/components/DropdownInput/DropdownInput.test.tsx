import React from "react";
import { render } from "../../test-setup";

import { DropdownInput } from "./DropdownInput";
import data from "./data.json";

describe("Test the DropdownInput component", () => {
  it("", () => {
    render(<DropdownInput data={data} label="" />);
  });
});
