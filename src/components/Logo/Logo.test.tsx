import React from "react";
import { render } from "../../test-setup";

import { Logo } from "./Logo";
import pngLogo from "../../assets/img/logos/cms_logo.png";
import svgLogo from "../../assets/img/logos/cms_logo.svg";

describe("Tests for the button component.", () => {
  it("Should render an svg", () => {
    const { container } = render(
      <Logo altText="CMS.gov Logo" ariaLabel="CMS.gov Logo" source={svgLogo} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Should render a png", () => {
    const { container } = render(
      <Logo altText="CMS.gov Logo" ariaLabel="CMS.gov Logo" source={pngLogo} />
    );
    expect(container).toMatchSnapshot();
  });
});
