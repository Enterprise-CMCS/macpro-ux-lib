import React from "react";
import { render } from "../../test-setup";

import { Dropdown } from "./Dropdown";
import data from "./data.json";

/**
 * Due to the nature of how we are working with the USWDS library, we are currently unable to
 * test the functionality of the dropdown component.
 *
 * The following tests are not truly comprehensive. They do not actually test functionality
 * or the ability to get data out of the dropdown component. They are here to ensure that the
 * coverage for this component is 100%. The tests are not exhaustive.
 */

describe("Tests for the Dropdown component", () => {
  it("component snapshot", () => {
    const { container } = render(
      <Dropdown label="Select a fruit" data={data} />
    );
    expect(container).toMatchSnapshot();
  });
});
