import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { ActionsMenu } from "./ActionsMenu";

import { Header } from "./Header";

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
        logoProps={{
          altText: "CMS.gov Project",
        }}
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

  describe("current prop should add an underline", () => {
    // current should control the active state of the button
    it("should exist on Current Section", () => {
      const { container } = render(
        <Header
          navData={navData}
          logoProps={{
            altText: "CMS.gov Project",
          }}
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
          logoProps={{
            altText: "CMS.gov Project",
          }}
        />
      );
      expect(container.getElementsByClassName("usa-current").length).toBe(0);
    });
  });

  describe("component snapshots", () => {
    it("default", () => {
      const { container } = render(
        <Header
          logoProps={{
            altText: "CMS.gov Project",
          }}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("with navigation", () => {
      const { container } = render(
        <Header
          navData={navData}
          logoProps={{
            altText: "CMS.gov Project",
          }}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("with ActionsMenu", () => {
      const { container } = render(
        <Header
          navData={navData}
          logoProps={{
            altText: "CMS.gov Project",
          }}
        >
          <ActionsMenu name="My Account" links={actionsMenuLinks} />
        </Header>
      );
      expect(container).toMatchSnapshot();
    });
  });
});
