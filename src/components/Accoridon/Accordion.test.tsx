import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Accordion } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

describe("Tests for the Accordion and AccordionGroup components", () => {
  it("should render", () => {
    render(
      <AccordionGroup>
        <Accordion></Accordion>
        <Accordion></Accordion>
        <Accordion></Accordion>
      </AccordionGroup>
    );
  });
});
