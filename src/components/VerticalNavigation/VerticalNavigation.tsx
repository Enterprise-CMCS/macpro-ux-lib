import { LinkProps } from "components/Link/Link";
import React, { useState } from "react";
import { VerticalNavigationItem } from "./VerticalNavigationItem";
type IntrinsicElements = JSX.IntrinsicElements["nav"];

interface Props extends IntrinsicElements {
  items: NavigationItem[];
  selectedId?: string;
  id?: string;
}

export interface NavigationItem extends LinkProps {
  id: string;
  selectedIds: string[];
  items?: NavigationItem[];
  togglable?: boolean;
}

/**
 * Vertical Navigation Component
 * @param {string}                        items       Email Address used at the bottom left for contact help.
 * @param {string}                        selectedId       Email Address used at the bottom left for contact help.
 * @param {string}                        id       Email Address used at the bottom left for contact help.
 */

export const VerticalNavigation: React.FC<Props> = ({
  selectedId,
  items,
  ...rest
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    selectedId ? [selectedId] : []
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
