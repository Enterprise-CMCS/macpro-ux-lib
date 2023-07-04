import React, { useState } from "react";
import {
  NavigationItemChild,
  VerticalNavigationItem,
} from "./VerticalNavigationItem";
type IntrinsicElements = JSX.IntrinsicElements["nav"];

export interface VerticalNavigationProps extends IntrinsicElements {
  items: IVerticalNavigationItem[];
  selectedId?: string;
}

export interface IVerticalNavigationItem {
  id: string;
  items?: NavigationItemChild[];
  togglable?: boolean;
  href?: string;
  text: string;
}

/**
 * Vertical Navigation Component
 * @param {IVerticalNavigationItem[]}              items            Navigation section items to be rendered for the sidebar, can be up to three layers deep.
 * @param {string}                        selectedId       Selected id of section that is currently active.
 */

export const VerticalNavigation: React.FC<Props> = ({
  selectedId,
  items,
  ...rest
}) => {
  const getSelectedSecitons = (
    items: IVerticalNavigationItem[] | NavigationItemChild[],
    selectedId: string,
    prevSelectedIds: string[] = []
  ): string[] => {
    let foundSelectedIds: string[] = [];
    items.some((item) => {
      if (item.id === selectedId) {
        foundSelectedIds.push(item.id, ...prevSelectedIds);
        return true;
      }

      if (item.items?.length) {
        prevSelectedIds.push(item.id);
        foundSelectedIds = getSelectedSecitons(
          item.items,
          selectedId,
          prevSelectedIds
        );
      }
    });

    return foundSelectedIds;
  };

  const [selectedIds, setSelectedIds] = useState<string[]>(
    selectedId ? getSelectedSecitons(items, selectedId) : []
  );

  return (
    <div className="tablet:grid-col-4 pointer">
      <nav aria-label="Side navigation" {...rest}>
        <ul className="usa-sidenav">
          {items.map((item) => {
            return (
              <VerticalNavigationItem
                selectedIds={selectedIds}
                navClick={setSelectedIds}
                id={item.id}
                text={item.text}
                items={item.items}
                key={item.id}
                togglable={item.togglable}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
