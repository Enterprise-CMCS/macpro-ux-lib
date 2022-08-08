import React from "react";
import { render } from "@testing-library/react";

import { Header } from "./Header";

const navData = [
  {
    buttonText: "Current Section",
    current: true,
    columns: [
      [
        { text: "Navigational Link", href: "" },
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

describe("Test the Header component", () => {
  it("should render", () => {
    render(
      <Header
        navData={navData}
        logoProps={{
          altText: "CMS.gov Project",
        }}
      />
    );
  });
});
