import React from "react";
import { render } from "../../test-setup";
import { MultiSelect } from "./MultiSelect";
import data from "../DropdownInput/data.json";

describe("Tests for the MultiSelect component", () => {
  it("should render", () => {
    render(<MultiSelect label="" data={data} />);
  });
});
