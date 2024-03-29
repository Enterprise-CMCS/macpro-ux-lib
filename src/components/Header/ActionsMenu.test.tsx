import React from "react";
import { fireEvent, screen, render } from "../../test-setup";

import { ActionsMenu } from "./ActionsMenu";

const testOnClick = jest.fn();

const links = [
  {
    text: "Manage Profile",
    iconName: "person",
    href: "",
    onClick: testOnClick,
  },
  {
    text: "Request Role Change",
    iconName: "people",
    href: "",
    onClick: testOnClick,
  },
  {
    text: "Log Out",
    iconName: "logout",
    href: "",
    onClick: testOnClick,
  },
];

describe("Test the Header component", () => {
  it("should render", () => {
    render(<ActionsMenu name="My Account" links={links} />);

    // menu should contain the correct items
    ["Manage Profile", "Request Role Change", "Log Out"].forEach(
      (text, idx) => {
        const item = screen.getByText(text);
        expect(item).toHaveAttribute("href");
        fireEvent.click(item);
        expect(testOnClick).toHaveBeenCalledTimes(idx + 1);
      }
    );
  });

  it("menu should toggle open/close on click", () => {
    const { container } = render(
      <ActionsMenu name="My Account" links={links} />
    );
    // should render menu hidden
    const actionsMenu =
      container.getElementsByClassName("user-actions-menu")[0];
    expect(actionsMenu).not.toBeVisible();

    // expand menu
    fireEvent.click(screen.getByText("My Account"));
    expect(actionsMenu).toBeVisible();

    // collapse
    fireEvent.click(screen.getByText("My Account"));
    expect(actionsMenu).not.toBeVisible();
  });

  it("menu should close when the user clicks outside", () => {
    const { container } = render(
      <>
        <ActionsMenu name="My Account" links={links} />
        <button>example</button>
      </>
    );
    const actionsMenu =
      container.getElementsByClassName("user-actions-menu")[0];
    expect(actionsMenu).not.toBeVisible();

    // expand menu
    fireEvent.click(screen.getByText("My Account"));
    expect(actionsMenu).toBeVisible();

    // click another element
    fireEvent.mouseDown(screen.getByText("example"));
    expect(actionsMenu).not.toBeVisible();
  });

  it("menu should open on click", () => {
    const { container } = render(
      <ActionsMenu name="My Account" links={links} />
    );
    // should render menu hidden
    expect(container).toMatchSnapshot();

    // expand menu
    fireEvent.click(screen.getByText("My Account"));
    expect(container).toMatchSnapshot();
  });
});
