import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";

describe("Tests for the Accordion component", () => {
  it("should render", () => {
    render(<Tabs />);
  });
});
