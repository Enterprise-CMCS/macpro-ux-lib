import React from "react";
import { UsaBanner } from "./UsaBanner";
import { screen, render } from "../../test-setup";

/**
 * Due to the nature of how we are working with the USWDS library, we are currently unable to
 * test the functionality of this component.
 *
 * The following tests are not truly exhaustive.
 */

describe("Tests for the Banner component", () => {
  it("should render", () => {
    // should be English by default
    render(<UsaBanner />);
    expect(
      screen.getByText("An official website of the United States government")
    ).toBeVisible();
  });

  it("should render in english", () => {
    render(<UsaBanner locale="en" />);
    expect(
      screen.getByText("An official website of the United States government")
    ).toBeVisible();
  });

  it("should render in spanish", () => {
    render(<UsaBanner locale="es" />);
    expect(
      screen.getByText("Un sitio oficial del Gobierno de Estados Unidos")
    ).toBeVisible();
  });

  it("should render english with custom class", () => {
    const { container } = render(<UsaBanner className="test-class" />);
    const section = container.firstChild as HTMLElement;
    expect(section.classList.contains("test-class")).toBe(true);
  });

  it("should render spanish with custom class", () => {
    const { container } = render(
      <UsaBanner locale="es" className="test-class" />
    );
    const section = container.firstChild as HTMLElement;
    expect(section.classList.contains("test-class")).toBe(true);
  });
});
