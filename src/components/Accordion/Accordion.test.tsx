import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Accordion } from "./Accordion";
import { AccordionGroup } from "./AccordionGroup";

describe("Tests for the Accordion component", () => {
  it("should render", () => {
    const { container } = render(
      <Accordion label="First Accordion Label" id="accordion-1">
        <p>Some sweet accordion content</p>
      </Accordion>
    );
    const btn = container.getElementsByClassName("usa-accordion__button")[0];
    const content = container.getElementsByClassName(
      "usa-accordion__content"
    )[0];
    expect(btn.getAttribute("aria-expanded")).toBe("false");
    expect(btn.getAttribute("aria-controls")).toBe("accordion-1");
    expect(content).not.toBeVisible();
  });

  it("should render expanded", () => {
    const { container } = render(
      <Accordion label="First Accordion Label" id="accordion-1" hidden={false}>
        <p>Some sweet accordion content</p>
      </Accordion>
    );
    const btn = container.getElementsByClassName("usa-accordion__button")[0];
    const content = container.getElementsByClassName(
      "usa-accordion__content"
    )[0];
    expect(btn.getAttribute("aria-expanded")).toBe("true");
    expect(content).toBeVisible();
  });

  it("should render with a custom className", () => {
    render(
      <Accordion
        label="First Accordion Label"
        className="test-this-class"
        id="accordion-1"
      >
        <p>Some sweet accordion content</p>
      </Accordion>
    );
    const label = screen.getByText("First Accordion Label");
    const h4 = label.parentElement;
    expect(h4?.classList.contains("test-this-class")).toBe(true);
  });

  it("should have onClick function", () => {
    const mockOnClick = jest.fn();
    render(
      <Accordion
        label="First Accordion Label"
        onClick={mockOnClick}
        id="accordion-1"
      >
        <p>Some sweet accordion content</p>
      </Accordion>
    );
    const label = screen.getByText("First Accordion Label");
    fireEvent.click(label);
    expect(mockOnClick).toHaveBeenCalled();
  });
});

describe("Tests for the Accordion and AccordionGroup components", () => {
  describe("general functionality", () => {
    let container: HTMLElement;
    beforeEach(() => {
      container = render(
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
      ).container;
    });

    it("All content should be collapsed by default", () => {
      const buttonElems = [
        ...container.getElementsByClassName("usa-accordion__button"),
      ];
      const proseElems = [
        ...container.getElementsByClassName("usa-accordion__content"),
      ];
      for (const btn of buttonElems) {
        expect(btn.getAttribute("aria-expanded")).toBe("false");
      }
      for (const elem of proseElems) {
        expect(elem).not.toBeVisible();
      }
    });

    it("Clicking a button should reveal corresponding content", () => {
      const buttonElems = [
        ...container.getElementsByClassName("usa-accordion__button"),
      ];
      const proseElems = [
        ...container.getElementsByClassName("usa-accordion__content"),
      ];
      buttonElems.forEach((btn, idx) => {
        fireEvent.click(btn);
        expect(btn.getAttribute("aria-expanded")).toBe("true");
        expect(proseElems[idx]).toBeVisible();
      });
    });
  });

  describe("Tests for additional interactions between the components", () => {
    let container: HTMLElement;
    let buttonElems: Element[];
    let proseElems: Element[];
    beforeEach(() => {
      container = render(
        <AccordionGroup>
          <Accordion label="First Accordion Label" id="accordion-1">
            <p>Some sweet accordion content</p>
          </Accordion>
          <Accordion label="Second Accordion Label" id="accordion-2">
            <p>Some sweet accordion content</p>
          </Accordion>
          <Accordion
            label="Third Accordion Label"
            id="accordion-3"
            hidden={false}
          >
            <p>Some sweet accordion content</p>
          </Accordion>
        </AccordionGroup>
      ).container;

      buttonElems = [
        ...container.getElementsByClassName("usa-accordion__button"),
      ];
      proseElems = [
        ...container.getElementsByClassName("usa-accordion__content"),
      ];

      // confirm initial render
      const currentState = buttonElems.map((btn) =>
        btn.getAttribute("aria-expanded")
      );
      expect(currentState).toStrictEqual(["false", "false", "true"]);
    });

    it("Accordions with hidden={false} should render expanded in a group", () => {
      const expectedValues = [true, true, false];
      buttonElems.forEach((btn, idx) => {
        expect(btn.getAttribute("aria-expanded")).toBe(
          `${!expectedValues[idx]}`
        );
        expectedValues[idx]
          ? expect(proseElems[idx]).not.toBeVisible()
          : expect(proseElems[idx]).toBeVisible();
      });
    });

    it("Opening an Accordion should collapse all others", () => {
      // click first item
      fireEvent.click(buttonElems[0]);
      let currentState = buttonElems.map((btn) =>
        btn.getAttribute("aria-expanded")
      );
      expect(currentState).toStrictEqual(["true", "false", "false"]);

      // click second item
      fireEvent.click(buttonElems[1]);
      currentState = buttonElems.map((btn) =>
        btn.getAttribute("aria-expanded")
      );
      expect(currentState).toStrictEqual(["false", "true", "false"]);
    });

    it("Clicking an open Accordion should close it", () => {
      // close last Accordion and confirm state
      fireEvent.click(buttonElems[2]);
      const currentState = buttonElems.map((btn) =>
        btn.getAttribute("aria-expanded")
      );
      expect(currentState).toStrictEqual(["false", "false", "false"]);
    });
  });
});

describe("Tests for the AccordionGroup component", () => {
  it("When multiSelect === true opening an Accordion should not affect others", () => {
    const { container } = render(
      <AccordionGroup multiSelect>
        <Accordion label="First Accordion Label" id="accordion-1">
          <p>Some sweet accordion content</p>
        </Accordion>
        <Accordion label="Second Accordion Label" id="accordion-2">
          <p>Some sweet accordion content</p>
        </Accordion>
        <Accordion
          label="Third Accordion Label"
          id="accordion-3"
          hidden={false}
        >
          <p>Some sweet accordion content</p>
        </Accordion>
      </AccordionGroup>
    );

    // confirm initial render
    const accordionGroup = container.firstElementChild;
    expect(accordionGroup?.className).toContain(
      "usa-accordion--multiselectable"
    );
    const buttonElems = [
      ...container.getElementsByClassName("usa-accordion__button"),
    ];
    let currentState = buttonElems.map((btn) =>
      btn.getAttribute("aria-expanded")
    );
    expect(currentState).toStrictEqual(["false", "false", "true"]);

    // click first item
    fireEvent.click(buttonElems[0]);
    currentState = buttonElems.map((btn) => btn.getAttribute("aria-expanded"));
    expect(currentState).toStrictEqual(["true", "false", "true"]);

    // click second item
    fireEvent.click(buttonElems[1]);
    currentState = buttonElems.map((btn) => btn.getAttribute("aria-expanded"));
    expect(currentState).toStrictEqual(["true", "true", "true"]);

    // click third item
    fireEvent.click(buttonElems[2]);
    currentState = buttonElems.map((btn) => btn.getAttribute("aria-expanded"));
    expect(currentState).toStrictEqual(["true", "true", "false"]);
  });

  it("When bordered === true an additional class should be added to the root div", () => {
    const { container } = render(
      <AccordionGroup bordered>
        <Accordion label="First Accordion Label" id="accordion-1">
          <p>Some sweet accordion content</p>
        </Accordion>
      </AccordionGroup>
    );
    const accordionGroup = container.firstElementChild;
    expect(accordionGroup?.className).toContain("usa-accordion--bordered");
  });

  it("Renders custom className and id on root div when provided", () => {
    const { container } = render(
      <AccordionGroup className="test-this-class" id="accordion-group-1">
        <Accordion label="First Accordion Label" id="accordion-1">
          <p>Some sweet accordion content</p>
        </Accordion>
      </AccordionGroup>
    );
    const accordionGroup = container.firstElementChild;
    expect(accordionGroup?.className).toContain("test-this-class");
    expect(accordionGroup?.id).toBe("accordion-group-1");
  });
});
