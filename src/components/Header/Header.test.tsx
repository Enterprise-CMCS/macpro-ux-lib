import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { ActionsMenu } from "./ActionsMenu";

import { Header } from "./Header";
import { Link } from "../Link/Link";
import { Logo } from "../Logo/Logo";

const testOnClick = jest.fn();

let navData: {
  buttonText: string;
  current?: boolean;
  columns: { text: string; href?: string; onClick?: () => any }[][];
}[];
const setNavData = () => {
  navData = [
    {
      buttonText: "Current Section",
      current: true,
      columns: [
        [
          { text: "Navigational Link", href: "", onClick: testOnClick },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
        ],
        [{ text: "Navigational Link", href: "" }],
        [
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
        ],
        [
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
        ],
      ],
    },
    {
      buttonText: "Section",
      columns: [
        [
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
          { text: "Navigational Link", href: "" },
        ],
      ],
    },
  ];
};

const actionsMenuLinks = [
  {
    text: "Manage Profile",
    iconName: "person",
    onClick: () => console.log("Manage Profile"),
  },
  {
    text: "Request Role Change",
    iconName: "people",
    onClick: () => console.log("Request Role Change"),
  },
  {
    text: "Log Out",
    iconName: "logout",
    onClick: () => console.log("Log Out"),
  },
];

describe("Test the Header component", () => {
  beforeEach(() => {
    setNavData();
  });

  it("should render correctly", () => {
    render(
      <Header
        navData={navData}
        headerLogo={
          <Link href="" title="Project Title">
            <Logo altText={"CMS.gov Project"} />
          </Link>
        }
      />
    );

    // All text should be rendered
    expect(screen.getByText("CMS.gov Project")).toBeInTheDocument();
    expect(screen.getByText("Current Section")).toBeInTheDocument();
    expect(screen.getByText("Section")).toBeInTheDocument();

    // All links should be rendered
    expect(screen.getAllByText("Navigational Link").length).toBe(17);
    const link = screen.getAllByText("Navigational Link")[0];
    expect(link).toHaveAttribute("href");
    fireEvent.click(link);
    expect(testOnClick).toHaveBeenCalled();
  });

  it("nav items should expand and collapse on click", () => {
    const { container } = render(
      <Header
        navData={navData}
        headerLogo={
          <Link href="" title="Project Title">
            <Logo altText={"CMS.gov Project"} />
          </Link>
        }
      />
    );
    const currentSection = screen.getByText("Current Section");
    const navSection = container.getElementsByClassName("usa-nav__submenu")[0]; // assumes 1st

    // Assert collapsed
    expect(navSection).toHaveAttribute("hidden");

    fireEvent.click(currentSection);

    // Assert expanded
    expect(navSection).not.toHaveAttribute("hidden");

    fireEvent.click(currentSection);

    // Assert collapsed
    expect(navSection).toHaveAttribute("hidden");
  });

  it("nav items should collapse on outside click", () => {
    const { container } = render(
      <Header
        navData={navData}
        headerLogo={
          <Link href="" title="Project Title">
            <Logo altText={"CMS.gov Project"} />
          </Link>
        }
      />
    );
    const body = document.body;
    const currentSection = screen.getByText("Current Section");
    const navSection = container.getElementsByClassName("usa-nav__submenu")[0]; // assumes 1st

    // Assert collapsed
    expect(navSection).toHaveAttribute("hidden");

    fireEvent.click(currentSection);

    // Assert expanded
    expect(navSection).not.toHaveAttribute("hidden");

    fireEvent.mouseDown(body);

    // Assert collapsed
    expect(navSection).toHaveAttribute("hidden");
  });

  it("should render correcty in mobile view", () => {
    const { container } = render(
      <Header
        navData={navData}
        headerLogo={
          <Link href="" title="Project Title">
            <Logo altText={"CMS.gov Project"} />
          </Link>
        }
      />
    );
    const menuBtn = screen.getByText("Menu");
    const closeBtn = container.getElementsByClassName("usa-nav__close")[0];
    const body = document.body;
    const nav = container.getElementsByClassName("usa-nav")[0];
    const overlay = container.getElementsByClassName("usa-overlay")[0];

    // Assert appropriate default classes
    expect(body.className).toBe("");
    expect(nav.className).toBe("usa-nav");
    expect(overlay.className).toBe("usa-overlay");

    fireEvent.click(menuBtn);

    // Assert "is-visible" classes added
    expect(body.className).toBe("usa-js-mobile-nav--active");
    expect(nav.className).toBe("usa-nav is-visible");
    expect(overlay.className).toBe("usa-overlay is-visible");

    fireEvent.click(closeBtn);

    // Assert "is-visible" classes removed
    expect(body.className).toBe("");
    expect(nav.className).toBe("usa-nav");
    expect(overlay.className).toBe("usa-overlay");
  });

  it("in mobile view, clicking outside the menu should trigger close", () => {
    const { container } = render(
      <Header
        navData={navData}
        headerLogo={
          <Link href="" title="Project Title">
            <Logo altText={"CMS.gov Project"} />
          </Link>
        }
      />
    );
    const menuBtn = screen.getByText("Menu");
    const body = document.body;
    const nav = container.getElementsByClassName("usa-nav")[0];
    const overlay = container.getElementsByClassName("usa-overlay")[0];

    // Assert appropriate default classes
    expect(body.className).toBe("");
    expect(nav.className).toBe("usa-nav");
    expect(overlay.className).toBe("usa-overlay");

    fireEvent.click(menuBtn);

    // Assert "is-visible" classes added
    expect(body.className).toBe("usa-js-mobile-nav--active");
    expect(nav.className).toBe("usa-nav is-visible");
    expect(overlay.className).toBe("usa-overlay is-visible");

    fireEvent.mouseDown(body); // outside click

    // Assert "is-visible" classes removed
    expect(body.className).toBe("");
    expect(nav.className).toBe("usa-nav");
    expect(overlay.className).toBe("usa-overlay");
  });

  describe("current prop should add an underline", () => {
    // current should control the active state of the button
    it("should exist on Current Section", () => {
      const { container } = render(
        <Header
          navData={navData}
          headerLogo={
            <Link href="" title="Project Title">
              <Logo altText={"CMS.gov Project"} />
            </Link>
          }
        />
      );
      expect(container.getElementsByClassName("usa-current").length).toBe(1);
      const button = container.getElementsByClassName("usa-current")[0];
      expect(button.innerHTML).toContain("Current Section");
    });

    it("should not exist on Current Section", () => {
      // remove current prop from navData
      navData[0].current = false;
      const { container } = render(
        <Header
          navData={navData}
          headerLogo={
            <Link href="" title="Project Title">
              <Logo altText={"CMS.gov Project"} />
            </Link>
          }
        />
      );
      expect(container.getElementsByClassName("usa-current").length).toBe(0);
    });
  });

  describe("component snapshots", () => {
    it("default", () => {
      const { container } = render(
        <Header
          headerLogo={
            <Link href="" title="Project Title">
              <Logo altText={"CMS.gov Project"} />
            </Link>
          }
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("with navigation", () => {
      const { container } = render(
        <Header
          navData={navData}
          headerLogo={
            <Link href="" title="Project Title">
              <Logo altText={"CMS.gov Project"} />
            </Link>
          }
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("with ActionsMenu", () => {
      const { container } = render(
        <Header
          navData={navData}
          headerLogo={
            <Link href="" title="Project Title">
              <Logo altText={"CMS.gov Project"} />
            </Link>
          }
          secondaryComponent={
            <ActionsMenu name="My Account" links={actionsMenuLinks} />
          }
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
