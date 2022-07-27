import React from "react";
import { screen, render } from "../../test-setup";
import pngLogo from "../../assets/img/logos/cms_logo.png";
import svgLogo from "../../assets/img/logos/cms_logo.svg";
import { Logo } from "./Logo";

describe("Tests for the button component.", () => {
  it("Should render an svg", () => {
    render(
      <Logo altText="CMS.gov Logo" ariaLabel="CMS.gov Logo" source={svgLogo} />
    );
  });

  it("Should render a png", () => {
    render(
      <Logo altText="CMS.gov Logo" ariaLabel="CMS.gov Logo" source={pngLogo} />
    );
  });
});
