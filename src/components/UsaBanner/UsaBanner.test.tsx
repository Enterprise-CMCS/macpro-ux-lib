import React from "react";
import { UsaBanner } from "./UsaBanner";
import { fireEvent, screen, render } from "../../test-setup";

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

  it("light/default variant", () => {
    const { container } = render(<UsaBanner />);
    const section = container.firstChild as HTMLElement;
    expect(section.className).toBe("usa-banner");
  });

  it("dark variant", () => {
    const { container } = render(<UsaBanner variant="dark" />);
    const section = container.firstChild as HTMLElement;
    expect(section.className).toBe("usa-banner usa-banner--dark");
  });
});

describe("Snapshot tests for UsaBanner component", () => {
  it("English banner", () => {
    const { container } = render(<UsaBanner />);

    // Confirm collapsed
    const content = document.getElementById("gov-banner-default-default");
    expect(content).not.toBeVisible();
    expect(container).toMatchSnapshot(); // Match collapsed state

    // Expand
    const btn = container.getElementsByClassName("usa-banner__button")[0];
    fireEvent.click(btn);
    expect(content).toBeVisible();
    expect(container).toMatchSnapshot(); // Match expanded state
  });

  it("Spanish banner", () => {
    const { container } = render(<UsaBanner locale="es" />);

    // Confirm collapsed
    const content = document.getElementById("gov-banner-spanish-lang-es");
    expect(content).not.toBeVisible();
    expect(container).toMatchSnapshot(); // Match collapsed state

    // Expand
    const btn = container.getElementsByClassName("usa-banner__button")[0];
    fireEvent.click(btn);
    expect(content).toBeVisible();
    expect(container).toMatchSnapshot(); // Match expanded state
  });
});
