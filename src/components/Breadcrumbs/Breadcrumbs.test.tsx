import { Breadcrumbs } from "./Breadcrumbs";
import { render, screen } from "../../test-setup";
import React from "react";

const items = [
  { name: "First item", path: "#" },
  { name: "Second item", path: "#" },
];

describe("Breadcrumbs", () => {
  describe("default", () => {
    it("renders default Breadcrumbs as expected", () => {
      render(
        <div data-testid="test-breadcrumbs">
          <Breadcrumbs currentItemName="Current Item" items={items} />
        </div>
      );

      const b = screen.getByTestId("test-breadcrumbs");

      expect(b).toBeInTheDocument;
    });
  });
});
