import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Link } from "./Link";

describe("Tests for the Icon component.", () => {
  it("Should render", () => {
    render(<Link text="A link to CMS.gov" href="https://www.cms.gov" />);
    const link = screen.getByText("A link to CMS.gov");
    expect(link).toHaveAttribute("href", "https://www.cms.gov");
    expect(link).toHaveAttribute("title", "A link to CMS.gov Link");
    expect(link.className).toBe("usa-link");
  });

  it("Should render light and have onClick", () => {
    const mockOnClick = jest.fn();
    render(
      <Link onClick={mockOnClick} light title="Something Ridiculous">
        A link to CMS.gov
      </Link>
    );
    const link = screen.getByText("A link to CMS.gov");
    expect(link).toHaveAttribute("title", "Something Ridiculous");
    expect(link).not.toHaveAttribute("href");
    expect(link.className).toBe("usa-link--light");

    fireEvent.click(link);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("Should render with additional className", () => {
    const mockOnClick = jest.fn();
    render(<Link className="my-test-class">A link to CMS.gov</Link>);
    const link = screen.getByText("A link to CMS.gov");
    expect(link.className).toBe("usa-link my-test-class");
  });
});
