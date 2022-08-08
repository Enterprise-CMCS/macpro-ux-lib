import React from "react";
import { render } from "@testing-library/react";

import { ActionsMenu } from "./ActionsMenu";

const links = [
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
  it("should render", () => {
    render(<ActionsMenu name="My Account" links={links} />);
  });
});
