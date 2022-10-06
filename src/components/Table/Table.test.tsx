import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { Table } from "./Table";
import {
  BasicTableChildren,
  ScrollableTableChildren,
  StackedTableChildren,
  SortableTableChildren,
} from "./TableChildren";

describe("Tests for the Table component", () => {
  it("should render", () => {
    const { container } = render(<Table children={BasicTableChildren} />);

    // confirm basic structure of rendered table
    const rows = container.getElementsByTagName("tr");

    expect(rows.length).toBe(5);

    const colHeaders = rows[0];
    expect(colHeaders.children.length).toBe(3);

    expect(colHeaders.children[0].textContent).toBe("Document title");
    expect(colHeaders.children[1].textContent).toBe("Description");
    expect(colHeaders.children[2].textContent).toBe("Year");

    // confirm default classNames present
    expect(container.firstElementChild!.className).toBe("usa-table-container");

    const table = container.getElementsByTagName("table")[0];
    expect(table.className).toBe("usa-table");

    // caption should not exist
    const caption = container.getElementsByTagName("caption");
    expect(caption.length).toBe(0);

    // footnote should not exist
    const footnote = container.getElementsByClassName("usa-table__footnote");
    expect(footnote.length).toBe(0);
  });

  it("should be borderless, compact, scrollable, and striped", () => {
    const { container } = render(
      <Table
        children={BasicTableChildren}
        borderless
        compact
        scrollable
        striped
      />
    );

    expect(container.firstElementChild!.className).toBe(
      "usa-table-container usa-table-container--scrollable"
    );

    const table = container.getElementsByTagName("table")[0];
    expect(table.className).toBe(
      "usa-table usa-table--borderless usa-table--compact usa-table--striped"
    );
  });

  it("should be stacked", () => {
    const { container } = render(
      <Table children={BasicTableChildren} stacked />
    );

    expect(container.firstElementChild!.className).toBe(
      "usa-table-container width-mobile"
    );

    const table = container.getElementsByTagName("table")[0];
    expect(table.className).toBe("usa-table usa-table--stacked");
  });

  it("should be stacked with headers", () => {
    const { container } = render(
      <Table children={BasicTableChildren} stacked stackedHeader />
    );

    expect(container.firstElementChild!.className).toBe(
      "usa-table-container width-mobile"
    );

    const table = container.getElementsByTagName("table")[0];
    expect(table.className).toBe("usa-table usa-table--stacked-header");
  });

  it("should have a caption, a footnote, and custom className", () => {
    const { container } = render(
      <Table
        caption="This text should appear in the caption"
        children={BasicTableChildren}
        className="test-me"
        footnote="This text should appear in the footnote"
      />
    );

    // caption should exist
    const caption = container.getElementsByTagName("caption");
    expect(caption.length).toBe(1);
    expect(caption[0].innerHTML).toBe("This text should appear in the caption");

    // footnote should not exist
    const footnote = container.getElementsByClassName("usa-table__footnote");
    expect(footnote.length).toBe(1);
    expect(footnote[0].innerHTML).toBe(
      "This text should appear in the footnote"
    );

    // test custom class
    const table = container.getElementsByTagName("table")[0];
    expect(table.className).toBe("usa-table test-me");
  });
});

describe("snapshots for Table component", () => {
  it("Basic table", () => {
    const { container } = render(<Table children={BasicTableChildren} />);

    expect(container).toMatchSnapshot();
  });

  it("Scrollable table", () => {
    const { container } = render(
      <Table
        children={ScrollableTableChildren}
        caption="This text should appear in the caption"
        footnote="This text should appear in the footnote"
        scrollable
      />
    );

    expect(container).toMatchSnapshot();
  });
});
