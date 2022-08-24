import React from "react";
import { render } from "../../test-setup";
import { Accordion } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

describe("Tests for the Accordion and AccordionGroup components", () => {
  it("should render", () => {
    render(
      <AccordionGroup>
        <Accordion label="First Accordion Label" id="accordion-1">
          <p>Some sweet accordion content</p>
        </Accordion>
        <Accordion label="Second Accordion Label" id="accordion-2">
          <p>Some sweet accordion content</p>
        </Accordion>
        <Accordion label="Third Accordion Label" id="accordion-3">
          <p>Some sweet accordion content</p>
        </Accordion>
      </AccordionGroup>
    );
  });
});
