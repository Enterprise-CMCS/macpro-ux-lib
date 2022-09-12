import { RadioGroup } from "./RadioGroup";
import { render, screen } from "../../test-setup";
import { fireEvent } from "@storybook/testing-library";
import React from "react";

describe("RadioGroup", () => {
  describe("default group", () => {
    beforeEach(() => {
      render(
        <form data-testid="test-form">
          <RadioGroup
            groupName="test-group"
            radioProps={[
              {
                id: "radio-1",
                key: "radio-1",
                label: "Radio 1",
                value: "radio-1",
              },
              {
                id: "radio-2",
                key: "radio-2",
                label: "Radio 2",
                value: "radio-2",
              },
            ]}
          />
        </form>
      );
    });

    it("renders a group of default Radio buttons properly", () => {
      const r1 = screen.getByLabelText("Radio 1");
      const r2 = screen.getByLabelText("Radio 2");

      expect(r1).toBeVisible();
      expect(r2).toBeVisible();
    });

    it("has the expected value when selected", () => {
      const testForm = screen.getByTestId("test-form");
      const r = screen.getByLabelText("Radio 2");
      fireEvent.click(r);
      expect(testForm).toHaveFormValues({ "test-group": "radio-2" });
    });
  });

  describe("group with children", () => {
    beforeEach(() => {
      render(
        <form data-testid="test-form">
          <RadioGroup
            groupName="test-group"
            key="test-group"
            radioProps={[
              {
                id: "radio-1",
                key: "radio-1",
                label: "Radio 1",
                value: "radio-1",
                children: [
                  <RadioGroup
                    groupName="test-group-children"
                    key="test-group-children"
                    radioProps={[
                      {
                        id: "child-1",
                        value: "child-1",
                        label: "Child 1",
                      },
                      {
                        id: "child-2",
                        value: "child-2",
                        label: "Child 2",
                      },
                    ]}
                  />,
                ],
              },
              {
                id: "radio-2",
                key: "radio-2",
                label: "Radio 2",
                value: "radio-2",
              },
            ]}
          />
        </form>
      );
    });

    it("does not display children by default", () => {
      const testForm = screen.getByTestId("test-form");
      expect(testForm).not.toHaveTextContent("Child 1");
      expect(testForm).not.toHaveTextContent("Child 2");
    });

    it("displays child elements when selected", () => {
      const testForm = screen.getByTestId("test-form");
      const r1 = screen.getByLabelText("Radio 1");
      fireEvent.click(r1);
      expect(testForm).toHaveTextContent("Child 1");
      expect(testForm).toHaveTextContent("Child 2");
    });

    it("has the expected value when selected", () => {
      const testForm = screen.getByTestId("test-form");
      const r1 = screen.getByLabelText("Radio 1");
      fireEvent.click(r1);
      expect(testForm).toHaveFormValues({ "test-group": "radio-1" });
      expect(testForm).not.toHaveFormValues({
        "test-group-children": "child-2",
      });
      const c1 = screen.getByLabelText("Child 2");
      fireEvent.click(c1);
      expect(testForm).toHaveFormValues({ "test-group": "radio-1" });
      expect(testForm).toHaveFormValues({ "test-group-children": "child-2" });
    });
  });

  describe("tile group", () => {
    beforeEach(() => {
      render(
        <form data-testid="tile-test-form">
          <RadioGroup
            groupName="test-tile-group"
            radioProps={[
              {
                id: "tile-1",
                isTile: true,
                key: "tile-1",
                label: "Tile 1",
                tileDescription:
                  "This is the description for tile radio button 1",
                value: "tile-1",
              },
              {
                id: "tile-2",
                isTile: true,
                key: "tile-2",
                label: "Tile 2",
                tileDescription:
                  "This is the description for tile radio button 2",
                value: "tile-2",
              },
            ]}
          />
        </form>
      );
    });

    it("renders a group of tile Radio buttons properly", () => {
      const testForm = screen.getByTestId("tile-test-form");
      expect(testForm).toHaveTextContent(
        "This is the description for tile radio button 1"
      );
      expect(testForm).toHaveTextContent(
        "This is the description for tile radio button 2"
      );
    });
  });
});
