import React from "react";
import { CardChoice } from "./CardChoice";
import { CardChoiceGroup } from "./CardChoiceGroup";
import { fireEvent, screen, render } from "../../test-setup";

describe("Tests for the CardChoice component", () => {
  const headingText = "A CardChoice Component";
  const bodyText =
    "This is a standard CardChoice component. It is both an informational and navigational tool.";
  it("should render with defaults", () => {
    const { container } = render(
      <CardChoice headingText={headingText} bodyText={bodyText} />
    );
    const component = container.firstElementChild!;

    expect(component.className).toBe("card-choice");
    expect(component.getAttribute("href")).toBe(null);
    expect(component.getAttribute("aria-label")).toBe(
      "Navigation Card for: A CardChoice Component"
    );
    expect(screen.getByText(headingText)).toBeVisible();
    expect(screen.getByText(bodyText)).toBeVisible();

    // check no actionText visible
    const selectSpan =
      component.getElementsByClassName("select")[0].firstElementChild;
    expect(selectSpan?.firstElementChild?.tagName).toBe("svg");
  });

  it("should render body text and children", () => {
    const { container } = render(
      <CardChoice headingText={headingText} bodyText={bodyText}>
        <ul className="test-card-choice-child">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </CardChoice>
    );

    // body should have bodyText and children; bodyText should appear first
    const body = container.getElementsByClassName("body")[0];
    expect(body.children.length).toBe(2);
    expect(body.children[0].innerHTML).toBe(bodyText);
    expect(body.children[1].className).toBe("test-card-choice-child");
  });

  it("should have alternate dark background", () => {
    const { container } = render(<CardChoice darkBG />);
    const component = container.firstElementChild!;
    expect(component.className).toBe("card-choice card-choice--dark");
  });

  it("should have border", () => {
    const { container } = render(<CardChoice darkBG bordered />);
    const component = container.firstElementChild!;
    expect(component.className).toBe(
      "card-choice card-choice--dark card-choice--bordered"
    );
  });

  it("should have a custom className", () => {
    const { container } = render(
      <CardChoice darkBG bordered className="test-class" />
    );
    const component = container.firstElementChild!;
    expect(component.className).toBe(
      "card-choice card-choice--dark card-choice--bordered test-class"
    );
  });

  it("should have actionText", () => {
    const { container } = render(<CardChoice actionText="Click Me" />);
    const selectSpan =
      container.getElementsByClassName("select")[0].firstElementChild;

    // should have text and svg image
    expect(selectSpan?.textContent).toBe("Click Me");
    expect(selectSpan?.firstElementChild?.tagName).toBe("svg");
  });

  it("should have onClick event", () => {
    const mockOnClick = jest.fn();
    const { container } = render(<CardChoice onClick={mockOnClick} />);

    fireEvent.click(container.firstElementChild!);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should have custom aria-label", () => {
    const { container } = render(
      <CardChoice ariaLabel="my aria-label is great" />
    );
    expect(container.firstElementChild!.getAttribute("aria-label")).toBe(
      "my aria-label is great"
    );
  });

  it("should have basic aria-label when no details provided", () => {
    const { container } = render(<CardChoice />);
    expect(container.firstElementChild!.getAttribute("aria-label")).toBe(
      "Navigation Card"
    );
  });
});

describe("Tests for the CardChoiceGroup component", () => {
  it("should render with defaults", () => {
    const { container } = render(<CardChoiceGroup />);
    const component = container.firstElementChild!;
    expect(component.className).toBe("card-choice-group");
    expect(component.children.length).toBe(1);
    expect(component.firstElementChild?.tagName).toBe("SPAN");
    expect(component.firstElementChild?.className).toBe("gradient-cap");
  });

  it("should render with custom className", () => {
    const { container } = render(
      <CardChoiceGroup className="test-ccg-class" />
    );
    expect(container.firstElementChild?.className).toBe(
      "card-choice-group test-ccg-class"
    );
  });
});

describe("Tests for the CardChoice and CardChoiceGroup components", () => {
  it("should render", () => {
    const { container } = render(
      <CardChoiceGroup>
        <CardChoice />
        <CardChoice />
        <CardChoice />
      </CardChoiceGroup>
    );

    // 4 children - span and 3 CardChoice
    expect(container.firstElementChild!.children.length).toBe(4);
  });

  it("CardChoice elements should have alternating BG color", () => {
    const { container } = render(
      <CardChoiceGroup alternatingBG>
        <CardChoice />
        <CardChoice />
        <CardChoice />
      </CardChoiceGroup>
    );
    const cardChoices = [...container.getElementsByClassName("card-choice")];
    expect(cardChoices.length).toBe(3);

    expect(cardChoices[0].className).toBe("card-choice");
    expect(cardChoices[1].className).toBe("card-choice card-choice--dark");
    expect(cardChoices[2].className).toBe("card-choice");
  });

  it("CardChoice darkBG prop should override CardChoiceGroup alternatingBG", () => {
    const { container } = render(
      <CardChoiceGroup alternatingBG>
        <CardChoice darkBG />
        <CardChoice darkBG={false} />
        <CardChoice />
      </CardChoiceGroup>
    );
    const cardChoices = [...container.getElementsByClassName("card-choice")];
    expect(cardChoices.length).toBe(3);

    expect(cardChoices[0].className).toBe("card-choice card-choice--dark");
    expect(cardChoices[1].className).toBe("card-choice");
    expect(cardChoices[2].className).toBe("card-choice");
  });

  it("all CardChoice elements should have a border", () => {
    const { container } = render(
      <CardChoiceGroup bordered>
        <CardChoice />
        <CardChoice />
        <CardChoice />
      </CardChoiceGroup>
    );
    const cardChoices = [...container.getElementsByClassName("card-choice")];
    expect(cardChoices.length).toBe(3);

    expect(cardChoices[0].className).toBe("card-choice card-choice--bordered");
    expect(cardChoices[1].className).toBe("card-choice card-choice--bordered");
    expect(cardChoices[2].className).toBe("card-choice card-choice--bordered");
  });

  it("CardChoice bordered prop should override CardChoiceGroup bordered", () => {
    const { container } = render(
      <CardChoiceGroup bordered>
        <CardChoice />
        <CardChoice />
        <CardChoice bordered={false} />
      </CardChoiceGroup>
    );
    const cardChoices = [...container.getElementsByClassName("card-choice")];
    expect(cardChoices.length).toBe(3);

    expect(cardChoices[0].className).toBe("card-choice card-choice--bordered");
    expect(cardChoices[1].className).toBe("card-choice card-choice--bordered");
    expect(cardChoices[2].className).toBe("card-choice");
  });

  it("should match snapshot", () => {
    const { container } = render(
      <CardChoiceGroup alternatingBG bordered>
        <CardChoice headingText="CardChoice" bodyText="This is the body." />
        <CardChoice headingText="CardChoice" bodyText="This is the body." />
        <CardChoice headingText="CardChoice" bodyText="This is the body." />
      </CardChoiceGroup>
    );
    expect(container).toMatchSnapshot();
  });
});
