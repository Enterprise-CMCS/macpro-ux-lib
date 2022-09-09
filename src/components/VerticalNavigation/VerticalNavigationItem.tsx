import { Icon } from "../Icon/Icon";
import React, { Dispatch, SetStateAction } from "react";
import { IVerticalNavigationItem } from "./VerticalNavigation";

export interface NavigationItemChild extends IVerticalNavigationItem {
  navClick: Dispatch<SetStateAction<string[]>>;
  selectedIds: string[];
}

/**
 * Vertical Navigation Child Component
 * @param {Dispatch<SetStateAction<string[]>>}     navClick       Click hanlder passed from the Veritical Navigation component that handles showing/hiding sections.
 * @param {string[]}                               selectedIds    An array of currently selected ids that is being tracked by parent component.
 */

export const VerticalNavigationItem: React.FC<NavigationItemChild> = ({
  navClick,
  id,
  selectedIds,
  text,
  togglable,
  items,
  href,
}) => {
  const generateSections = (
    id: string,
    text: string,
    togglable?: boolean,
    href?: string,
    items?: NavigationItemChild["items"],
    previousItemsIds: string[] = []
  ) => {
    return (
      <li className="usa-sidenav__item" key={id}>
        <a
          href={href}
          className={selectedIds.includes(id) ? "usa-current" : ""}
          onClick={() =>
            !selectedIds.includes(id)
              ? navClick([...previousItemsIds, id])
              : togglable
              ? navClick([
                  ...previousItemsIds.filter((prevId) => prevId !== id),
                ])
              : undefined
          }
        >
          {text}
          {togglable && (
            <span className="float-right">
              {selectedIds.includes(id) ? (
                <Icon name="arrow_drop_up" />
              ) : (
                <Icon name="arrow_drop_down" />
              )}
            </span>
          )}
        </a>
        {selectedIds.includes(id) && items && items.length > 0 && (
          <ul className="usa-sidenav__sublist">
            {items.map((itemChild) => {
              previousItemsIds.push(id);

              return generateSections(
                itemChild.id,
                itemChild.text,
                itemChild.togglable,
                itemChild.href,
                itemChild.items,
                previousItemsIds
              );
            })}
          </ul>
        )}
      </li>
    );
  };

  return <>{generateSections(id, text, togglable, href, items)}</>;
};
