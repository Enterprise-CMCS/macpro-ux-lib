import React from "react";
import { screen, render } from "../../test-setup";
import { Icon } from "./Icon";

describe("Tests for the Icon component.", () => {
  it("Should render", () => {
    render(<Icon name="accessibility_new" data-testid="Icon" />);

    const IconComp = screen.getByTestId("Icon");
    expect(IconComp).toBeInTheDocument();
  });

  it("Should have the correct aria label with rendered defauls as a decorative icon", () => {
    render(<Icon name="accessibility_new" data-testid="Icon" />);

    const IconComp = screen.getByTestId("Icon");
    expect(IconComp).toHaveAttribute("aria-label", "accessibility new icon");
    expect(IconComp).toHaveAttribute("aria-hidden", "true");
    expect(IconComp).toHaveAttribute("role", "img");
  });
});

describe("compontent snapshots", () => {
  it("accessibility new icon", () => {
    const { container } = render(<Icon name="accessibility_new" />);
    expect(container).toMatchSnapshot();
  });

  it("accessibility new icon that is not purely decorative", () => {
    const { container } = render(
      <Icon
        name="add"
        iconSize={5}
        role="button"
        ariaHidden={false}
        ariaLabel="Add Button"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
