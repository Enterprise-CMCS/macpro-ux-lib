import React from "react";
import { screen, render } from "../../test-setup";
import { Footer } from "./Footer";

describe("Tests for the Footer component.", () => {
  it("Should render", () => {
    render(
      <Footer
        emailAddress="test@gmail.com"
        data-testid="Footer"
        address="test"
      />
    );

    const IconComp = screen.getByTestId("Footer");
    expect(IconComp).toBeInTheDocument();
  });
});

describe("compontent snapshots", () => {
  it("accessibility new icon", () => {
    const { container } = render(
      <Footer emailAddress="test@gmail.com" address="test" />
    );
    expect(container).toMatchSnapshot();
  });
});
