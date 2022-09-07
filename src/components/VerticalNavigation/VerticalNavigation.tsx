import { LinkProps } from "components/Link/Link";
import React, { useState } from "react";
import { VerticalNavigationItem } from "./VerticalNavigationItem";
type IntrinsicElements = JSX.IntrinsicElements["nav"];

interface Props extends IntrinsicElements {
  items: NavigationItem[];
  selectedId?: string;
}

export interface NavigationItem extends LinkProps {
  id: string;
  selectedIds: string[];
  items?: NavigationItem[];
  togglable?: boolean;
}

/**
 * Vertical Navigation Component
 * @param {NavigationItem[]}              items            Navigation section items to be rendered for the sidebar, cam ne up to three layers deep.
 * @param {string}                        selectedId       Selected id of section that is currently active.
 */

export const VerticalNavigation: React.FC<Props> = ({
  selectedId,
  items,
  ...rest
}) => {
  const setSelectedSecitons = () => {
    const foundSelectedIds: string[] = [];
    items.some((parentItem) => {
      if (parentItem.id === selectedId) {
        foundSelectedIds.push(parentItem.id);
        return true;
      }

      if (parentItem.items?.length) {
        parentItem.items.some((childItem) => {
          if (childItem.id === selectedId) {
            foundSelectedIds.push(parentItem.id, childItem.id);
            return true;
          }

          if (childItem.items?.length) {
            childItem.items.some((grandchildItem) => {
              if (grandchildItem.id === selectedId) {
                foundSelectedIds.push(
                  parentItem.id,
                  childItem.id,
                  grandchildItem.id
                );
                return true;
              }
            });
          }
        });
      }
    });

    return foundSelectedIds;
  };

  const [selectedIds, setSelectedIds] = useState<string[]>(
    selectedId ? setSelectedSecitons : []
  );

  return (
    <div className="tablet:grid-col-4">
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
