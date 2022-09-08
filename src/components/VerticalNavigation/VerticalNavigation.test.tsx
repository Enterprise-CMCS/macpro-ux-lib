import React from "react";
import { fireEvent, screen, render } from "../../test-setup";
import { VerticalNavigation } from "./VerticalNavigation";

describe("Tests for the VerticalNavigation component.", () => {
  const setState = jest.fn();
  const selectedIds: string[] = [];

  it("Should render out full sidebar nav component with options, an active section, and togglable", () => {
    render(
      <VerticalNavigation
        items={[
          {
            id: "2",
            togglable: true,
            items: [
              {
                id: "4",
                togglable: true,
                items: [
                  {
                    id: "6",
                    navClick: setState,
                    selectedIds,
                    text: "Grandchild",
                  },
                ],
                text: "Child",
                navClick: setState,
                selectedIds,
              },
            ],
            text: "Parent",
          },
        ]}
        data-testid="verticalNavigation"
        selectedId="6"
      />
    );
    const SideNavComp = screen.getByTestId("verticalNavigation");
    const parentSection = screen.getByText("Parent");
    const childSection = screen.getByText("Child");
    const grandChildSection = screen.getByText("Grandchild");
    fireEvent.click(grandChildSection);
    fireEvent.click(childSection);
    fireEvent.click(parentSection);

    expect(SideNavComp).toBeInTheDocument();
  });

  it("Should render out full sidebar nav component with options, an active section, and togglable", () => {
    const setState2 = jest.fn();
    render(
      <VerticalNavigation
        items={[
          {
            id: "2",
            togglable: true,
            items: [
              {
                id: "4",
                items: [
                  {
                    id: "6",
                    navClick: setState,
                    selectedIds: ["6", "4", "2"],
                    text: "Grandchild",
                  },
                ],
                text: "Child",
                navClick: setState,
                selectedIds: ["6", "4", "2"],
              },
            ],
            text: "Parent",
          },
        ]}
        data-testid="verticalNavigation"
        selectedId="6"
      />
    );

    const parentSection = screen.getByText("Parent");
    const childSection = screen.getByText("Child");
    const grandChildSection = screen.getByText("Grandchild");
    console.log(parentSection);
    fireEvent.click(grandChildSection);
    fireEvent.click(childSection);
    fireEvent.click(parentSection);
  });

  it("Should render out full sidebar nav component with options and an active section", () => {
    render(
      <VerticalNavigation
        items={[
          { id: "1", items: [], text: "Parent" },
          { id: "2", items: [], text: "Parent" },
        ]}
        data-testid="verticalNavigation"
        selectedId="1"
      />
    );

    const SideNavComp = screen.getByTestId("verticalNavigation");
    expect(SideNavComp).toBeInTheDocument();
  });

  it("Should render a vertical nav component with dropdown toggles", () => {
    render(
      <VerticalNavigation
        items={[
          { id: "1", items: [], text: "Parent" },
          {
            id: "2",
            togglable: true,
            items: [
              {
                id: "4",
                togglable: true,
                items: [
                  {
                    id: "6",
                    navClick: setState,
                    selectedIds,
                    text: "Grandchild",
                  },
                ],
                text: "Child",
                navClick: setState,
                selectedIds,
              },
              {
                id: "5",
                items: [],
                text: "Child",
                navClick: setState,
                selectedIds: selectedIds,
              },
            ],

            text: "Parent",
          },
          { id: "3", items: [], text: "Parent" },
        ]}
        selectedId="6"
        data-testid="verticalNavigation"
      />
    );

    const SideNavComp = screen.getByTestId("verticalNavigation");
    expect(SideNavComp).toHaveTextContent("Grandchild");
    expect(SideNavComp.getElementsByTagName("span")[0]).toBeInTheDocument();
  });

  it("Should render out full sidebar nav component with options and an active section in child", () => {
    render(
      <VerticalNavigation
        items={[
          {
            id: "1",
            items: [
              {
                id: "2",
                navClick: setState,
                selectedIds,
                items: [],
                text: "Parent",
              },
            ],
            text: "Parent",
          },
          { id: "3", items: [], text: "Parent" },
        ]}
        data-testid="verticalNavigation"
        selectedId="2"
      />
    );

    const SideNavComp = screen.getByTestId("verticalNavigation");
    expect(SideNavComp).toBeInTheDocument();
  });
});

describe("compontent snapshots", () => {
  const setState = jest.fn();
  const selectedIds: string[] = [];

  it("Basic VerticalNavigation", () => {
    const { container } = render(
      <VerticalNavigation
        items={[
          { id: "1", items: [], text: "Parent" },
          {
            id: "2",
            items: [
              {
                id: "4",
                items: [
                  {
                    id: "6",
                    navClick: setState,
                    selectedIds,
                    text: "Grandchild",
                  },
                  {
                    id: "7",
                    navClick: setState,
                    selectedIds,
                    text: "Grandchild",
                  },
                ],
                text: "Child",
                navClick: setState,
                selectedIds,
              },
              {
                id: "5",
                items: [],
                text: "Child",
                navClick: setState,
                selectedIds: selectedIds,
              },
            ],

            text: "Parent",
          },
          { id: "3", items: [], text: "Parent" },
        ]}
        data-testid="verticalNavigation"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Alternative VerticalNavigation", () => {
    const { container } = render(
      <VerticalNavigation items={[]} data-testid="verticalNavigation" />
    );
    expect(container).toMatchSnapshot();
  });
});
